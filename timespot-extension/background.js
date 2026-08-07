/* WSERTAB — background service worker
   Keeps "Timer & Alerts" firing via chrome.alarms + chrome.notifications,
   independent of whether a new tab page is currently open. */

const STORAGE_KEY = "timespot_state_v1";

function scheduleAlarm(item) {
  if (item.kind === "countdown") {
    // One-shot: fires at the absolute timestamp computed when the
    // countdown was started, regardless of when the tab is open.
    if (!item.endAt || item.endAt <= Date.now()) return;
    chrome.alarms.create("timespot-alert-" + item.id, { when: item.endAt });
    return;
  }
  const [h, m] = item.time.split(":").map(Number);
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0, 0);
  if (next.getTime() <= now.getTime()) next.setDate(next.getDate() + 1);
  chrome.alarms.create("timespot-alert-" + item.id, { when: next.getTime() });
}

chrome.alarms.onAlarm.addListener((alarm) => {
  if (!alarm.name.startsWith("timespot-alert-")) return;
  const id = alarm.name.replace("timespot-alert-", "");

  chrome.storage.local.get([STORAGE_KEY], (res) => {
    const state = res[STORAGE_KEY];
    if (!state || !state.alerts) return;
    const item = state.alerts.find(a => a.id === id);
    if (!item) return;

    const isCountdown = item.kind === "countdown";
    chrome.notifications.create("timespot-notif-" + id, {
      type: "basic",
      iconUrl: "icons/icon128.png",
      title: "⏰ " + (item.label || (isCountdown ? chrome.i18n.getMessage("mode_countdown") : chrome.i18n.getMessage("fired_alert_default_title"))),
      message: isCountdown ? chrome.i18n.getMessage("fired_alert_default_msg") : chrome.i18n.getMessage("alert_time_message", item.time),
      priority: 2
    });

    // Countdown timers are always one-shot; only clock alarms can repeat.
    if (item.repeat && !isCountdown) {
      scheduleAlarm(item);
    } else {
      state.alerts = state.alerts.filter(a => a.id !== id);
      chrome.storage.local.set({ [STORAGE_KEY]: state });
    }
  });
});

// Whenever the new tab page saves an updated alert list, reconcile alarms.
chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local" || !changes[STORAGE_KEY]) return;
  const newState = changes[STORAGE_KEY].newValue;
  if (!newState || !newState.alerts) return;

  chrome.alarms.getAll((alarms) => {
    const existingNames = new Set(alarms.map(a => a.name));

    newState.alerts.forEach(item => {
      const name = "timespot-alert-" + item.id;
      if (!existingNames.has(name)) scheduleAlarm(item);
    });

    const validNames = new Set(newState.alerts.map(a => "timespot-alert-" + a.id));
    alarms.forEach(a => {
      if (a.name.startsWith("timespot-alert-") && !validNames.has(a.name)) {
        chrome.alarms.clear(a.name);
      }
    });
  });

  reconcileLockAcrossTabs(newState);
});

/* ---------------------------------------------------
   Browser-wide lock enforcement
   The old behavior only gated the new tab page itself — a locked new tab
   was trivial to route around by just typing another address, since
   nothing stopped that navigation. This section makes the lock apply to
   the browser, not just one page: while password protection is on and the
   session hasn't been unlocked, any tab that tries to go anywhere other
   than WSERTAB's own pages gets pulled back to the lock screen, and new
   downloads are cancelled.

   Honest limit: Chrome doesn't give any extension a way to stop someone
   from opening chrome://extensions and disabling or removing WSERTAB —
   that page is protected by the browser itself, not by extensions, and no
   "browser lock" extension on the Web Store can close that gap either.
   This raises the bar a lot for casual snooping (kids, coworkers walking
   by) but it isn't a hard security boundary against someone who knows to
   look there.
--------------------------------------------------- */
const EXT_URL_PREFIX = chrome.runtime.getURL("");
// Redirecting straight to the raw chrome-extension://<id>/newtab.html path
// makes Chrome display that full path in the address bar. Redirecting to
// chrome://newtab/ instead lets Chrome resolve it through the normal "new
// tab" flow — the same one Ctrl+T already uses — which is what keeps the
// omnibox blank instead of showing the extension's internal URL.
const REDIRECT_URL = "chrome://newtab/";

function isOwnPage(url) {
  // No url yet (e.g. a brand-new "about:blank" tab that hasn't resolved
  // its target) — let it be, the follow-up navigation event will catch it.
  if (!url) return true;
  return url.startsWith(EXT_URL_PREFIX) || url === "about:blank" || url.startsWith("chrome://newtab") || url === REDIRECT_URL;
}

function isLockActive(cb) {
  chrome.storage.local.get([STORAGE_KEY], (res) => {
    const security = res[STORAGE_KEY] && res[STORAGE_KEY].security;
    const passwordOn = !!(security && security.passwordEnabled && security.passwordHash);
    if (!passwordOn) return cb(false);
    chrome.storage.session.get(["unlockedThisSession"], (sres) => {
      cb(!(sres && sres.unlockedThisSession));
    });
  });
}

function enforceTab(tabId, url) {
  if (tabId === undefined || tabId < 0 || isOwnPage(url)) return;
  isLockActive((locked) => {
    if (!locked) return;
    chrome.tabs.update(tabId, { url: REDIRECT_URL }, () => void chrome.runtime.lastError);
  });
}

function lockAllOpenTabs() {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach(t => enforceTab(t.id, t.url));
  });
}

// New tabs (including "open link in new tab") and any navigation a tab
// makes afterwards.
chrome.tabs.onCreated.addListener((tab) => enforceTab(tab.id, tab.pendingUrl || tab.url));
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) enforceTab(tabId, changeInfo.url);
  else if (changeInfo.status === "loading") enforceTab(tabId, tab.url);
});
if (chrome.webNavigation) {
  // Belt-and-suspenders: catches the navigation slightly earlier than
  // tabs.onUpdated in most cases.
  chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.frameId === 0) enforceTab(details.tabId, details.url);
  });
}

// Block downloads while locked (a locked browser shouldn't be able to pull
// files to disk either).
if (chrome.downloads) {
  chrome.downloads.onCreated.addListener((item) => {
    isLockActive((locked) => {
      if (locked) chrome.downloads.cancel(item.id, () => void chrome.runtime.lastError);
    });
  });
}

// If the password is turned on (or changed) while other tabs are already
// open elsewhere, sweep them immediately instead of waiting for their next
// navigation.
function reconcileLockAcrossTabs(newState) {
  const passwordOn = !!(newState.security && newState.security.passwordEnabled && newState.security.passwordHash);
  if (passwordOn) {
    lockAllOpenTabs();
    isLockActive((locked) => { if (locked) engageWindowLock(); });
  }
}

// Covers the case where Chrome restores previously-open tabs on launch,
// before those tabs fire their own events.
chrome.runtime.onStartup.addListener(() => {
  isLockActive((locked) => { if (locked) engageWindowLock(); });
});

/* ---------------------------------------------------
   Window-level lock (the "no bars, just a password box" look)
   A regular Chrome window can never lose its address bar, bookmarks bar,
   tab strip, or extensions row — that's part of the window itself, not
   the page. The only window type that doesn't have any of that chrome is
   a "popup" window, which is what the barebones password-box extensions
   are actually using, not real OS kiosk mode. So while locked, this opens
   WSERTAB's lock screen in exactly that kind of bar-less popup, and
   minimizes any normal browser window so the popup is what's in front.

   Same honest limits as before: this doesn't touch chrome://extensions
   (Chrome protects it from every extension, including the ones you
   linked), and it only runs in windows WSERTAB is actually allowed into —
   Incognito windows are off-limits to every extension by default unless
   "Allow in Incognito" is turned on for it in chrome://extensions, so an
   Incognito window (Ctrl+Shift+N) bypasses this, and every other browser
   lock extension, the same way.
--------------------------------------------------- */
let lockPopupWindowId = null;

const LOCK_POPUP_WIDTH = 1040;
const LOCK_POPUP_HEIGHT = 720;

function createLockPopup() {
  getCenteredPosition((left, top) => {
    chrome.windows.create({
      url: chrome.runtime.getURL("newtab.html"),
      type: "popup",
      width: LOCK_POPUP_WIDTH,
      height: LOCK_POPUP_HEIGHT,
      left,
      top,
      focused: true
    }, (win) => { if (win) lockPopupWindowId = win.id; });
  });
}

// Centers the popup on the primary display (both horizontally and
// vertically), instead of pinning it near the left edge. Falls back to
// letting Chrome pick a position if system.display isn't available for
// any reason, rather than failing to open the popup at all.
function getCenteredPosition(cb) {
  if (!chrome.system || !chrome.system.display) return cb(undefined, undefined);
  chrome.system.display.getInfo((displays) => {
    if (chrome.runtime.lastError || !displays || !displays.length) return cb(undefined, undefined);
    const primary = displays.find(d => d.isPrimary) || displays[0];
    const area = primary.workArea || primary.bounds;
    const left = area.left + Math.max(0, Math.round((area.width - LOCK_POPUP_WIDTH) / 2));
    const top = area.top + Math.max(0, Math.round((area.height - LOCK_POPUP_HEIGHT) / 2));
    cb(left, top);
  });
}

function showLockPopup() {
  if (lockPopupWindowId === null) return createLockPopup();
  chrome.windows.update(lockPopupWindowId, { focused: true, state: "normal" }, () => {
    if (chrome.runtime.lastError) { lockPopupWindowId = null; createLockPopup(); }
  });
}

function minimizeNormalWindows() {
  chrome.windows.getAll({}, (wins) => {
    wins.forEach(w => {
      if (w.type === "normal") chrome.windows.update(w.id, { state: "minimized" }, () => void chrome.runtime.lastError);
    });
  });
}

function engageWindowLock() {
  minimizeNormalWindows();
  showLockPopup();
}

function releaseWindowLock() {
  if (lockPopupWindowId !== null) {
    chrome.windows.remove(lockPopupWindowId, () => void chrome.runtime.lastError);
    lockPopupWindowId = null;
  }
  chrome.windows.getAll({}, (wins) => {
    wins.forEach(w => {
      if (w.type === "normal") chrome.windows.update(w.id, { state: "normal", focused: true }, () => void chrome.runtime.lastError);
    });
  });
}

chrome.windows.onRemoved.addListener((id) => { if (id === lockPopupWindowId) lockPopupWindowId = null; });

// A brand-new normal window (Ctrl+N, "New window", etc.) opened while
// locked gets minimized on sight; its tabs are still caught separately by
// enforceTab above.
chrome.windows.onCreated.addListener((win) => {
  if (win.type !== "normal") return;
  isLockActive((locked) => { if (locked) chrome.windows.update(win.id, { state: "minimized" }, () => void chrome.runtime.lastError); });
});

// If a normal window gets focused/restored while locked (e.g. clicked from
// the taskbar), send it back down and pull the lock popup back to front.
chrome.windows.onFocusChanged.addListener((winId) => {
  if (winId === chrome.windows.WINDOW_ID_NONE || winId === lockPopupWindowId) return;
  chrome.windows.get(winId, (win) => {
    if (chrome.runtime.lastError || !win || win.type !== "normal") return;
    isLockActive((locked) => {
      if (!locked) return;
      chrome.windows.update(winId, { state: "minimized" }, () => void chrome.runtime.lastError);
      showLockPopup();
    });
  });
});

// The moment the correct password lands (from any window, including the
// popup), storage.session flips unlockedThisSession — react immediately.
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "session" && changes.unlockedThisSession && changes.unlockedThisSession.newValue) {
    releaseWindowLock();
  }
});
