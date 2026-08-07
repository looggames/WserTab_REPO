/* ---------------------------------------------------
   TimeSpot New Tab — city database
--------------------------------------------------- */
const CITY_DB = [
  { name: "Los Angeles", country: "United States", tz: "America/Los_Angeles", lat: 34.05, lng: -118.24 },
  { name: "New York", country: "United States", tz: "America/New_York", lat: 40.71, lng: -74.01 },
  { name: "Chicago", country: "United States", tz: "America/Chicago", lat: 41.88, lng: -87.63 },
  { name: "Toronto", country: "Canada", tz: "America/Toronto", lat: 43.65, lng: -79.38 },
  { name: "Mexico City", country: "Mexico", tz: "America/Mexico_City", lat: 19.43, lng: -99.13 },
  { name: "São Paulo", country: "Brazil", tz: "America/Sao_Paulo", lat: -23.55, lng: -46.63 },
  { name: "London", country: "United Kingdom", tz: "Europe/London", lat: 51.51, lng: -0.13 },
  { name: "Paris", country: "France", tz: "Europe/Paris", lat: 48.85, lng: 2.35 },
  { name: "Berlin", country: "Germany", tz: "Europe/Berlin", lat: 52.52, lng: 13.40 },
  { name: "Madrid", country: "Spain", tz: "Europe/Madrid", lat: 40.42, lng: -3.70 },
  { name: "Rome", country: "Italy", tz: "Europe/Rome", lat: 41.90, lng: 12.50 },
  { name: "Moscow", country: "Russia", tz: "Europe/Moscow", lat: 55.76, lng: 37.62 },
  { name: "Casablanca", country: "Morocco", tz: "Africa/Casablanca", lat: 33.57, lng: -7.59 },
  { name: "Cairo", country: "Egypt", tz: "Africa/Cairo", lat: 30.04, lng: 31.24 },
  { name: "Lagos", country: "Nigeria", tz: "Africa/Lagos", lat: 6.52, lng: 3.38 },
  { name: "Johannesburg", country: "South Africa", tz: "Africa/Johannesburg", lat: -26.20, lng: 28.05 },
  { name: "Dubai", country: "United Arab Emirates", tz: "Asia/Dubai", lat: 25.20, lng: 55.27 },
  { name: "Istanbul", country: "Turkey", tz: "Europe/Istanbul", lat: 41.01, lng: 28.98 },
  { name: "Mumbai", country: "India", tz: "Asia/Kolkata", lat: 19.08, lng: 72.88 },
  { name: "New Delhi", country: "India", tz: "Asia/Kolkata", lat: 28.61, lng: 77.21 },
  { name: "Bangkok", country: "Thailand", tz: "Asia/Bangkok", lat: 13.76, lng: 100.50 },
  { name: "Singapore", country: "Singapore", tz: "Asia/Singapore", lat: 1.35, lng: 103.82 },
  { name: "Hong Kong", country: "China", tz: "Asia/Hong_Kong", lat: 22.32, lng: 114.17 },
  { name: "Shanghai", country: "China", tz: "Asia/Shanghai", lat: 31.23, lng: 121.47 },
  { name: "Beijing", country: "China", tz: "Asia/Shanghai", lat: 39.90, lng: 116.41 },
  { name: "Seoul", country: "South Korea", tz: "Asia/Seoul", lat: 37.57, lng: 126.98 },
  { name: "Tokyo", country: "Japan", tz: "Asia/Tokyo", lat: 35.68, lng: 139.69 },
  { name: "Sydney", country: "Australia", tz: "Australia/Sydney", lat: -33.87, lng: 151.21 },
  { name: "Melbourne", country: "Australia", tz: "Australia/Melbourne", lat: -37.81, lng: 144.96 },
  { name: "Auckland", country: "New Zealand", tz: "Pacific/Auckland", lat: -36.85, lng: 174.76 },
  { name: "Jakarta", country: "Indonesia", tz: "Asia/Jakarta", lat: -6.21, lng: 106.85 },
  { name: "Manila", country: "Philippines", tz: "Asia/Manila", lat: 14.60, lng: 120.98 },
  { name: "Karachi", country: "Pakistan", tz: "Asia/Karachi", lat: 24.86, lng: 67.00 },
  { name: "Jerusalem", country: "Palestine", tz: "Asia/Jerusalem", lat: 32.08, lng: 34.78 },
  { name: "Riyadh", country: "Saudi Arabia", tz: "Asia/Riyadh", lat: 24.71, lng: 46.68 },
  { name: "Buenos Aires", country: "Argentina", tz: "America/Argentina/Buenos_Aires", lat: -34.60, lng: -58.38 },
  { name: "Vancouver", country: "Canada", tz: "America/Vancouver", lat: 49.28, lng: -123.12 },
  { name: "Denver", country: "United States", tz: "America/Denver", lat: 39.74, lng: -104.99 },
  { name: "Amsterdam", country: "Netherlands", tz: "Europe/Amsterdam", lat: 52.37, lng: 4.90 },
  { name: "Zurich", country: "Switzerland", tz: "Europe/Zurich", lat: 47.38, lng: 8.54 },
  { name: "Lisbon", country: "Portugal", tz: "Europe/Lisbon", lat: 38.72, lng: -9.14 },
  { name: "Warsaw", country: "Poland", tz: "Europe/Warsaw", lat: 52.23, lng: 21.01 },
  { name: "Stockholm", country: "Sweden", tz: "Europe/Stockholm", lat: 59.33, lng: 18.07 },
];

/* Preset background photos for each theme live in theme-backgrounds.json
   (fetched at startup — see loadThemeBackgrounds() below) instead of being
   hardcoded here, so they're easy to edit or replace without touching code. */

/* ~50 popular sites offered as one-click suggestions in "Add a favorite link". */
const FAV_LINK_SUGGESTIONS = [
  { name: "Gmail", url: "https://mail.google.com" },
  { name: "YouTube", url: "https://youtube.com" },
  { name: "Google Drive", url: "https://drive.google.com" },
  { name: "Google Calendar", url: "https://calendar.google.com" },
  { name: "Google Docs", url: "https://docs.google.com" },
  { name: "Google Maps", url: "https://maps.google.com" },
  { name: "Google Photos", url: "https://photos.google.com" },
  { name: "GitHub", url: "https://github.com" },
  { name: "GitLab", url: "https://gitlab.com" },
  { name: "Stack Overflow", url: "https://stackoverflow.com" },
  { name: "ChatGPT", url: "https://chat.openai.com" },
  { name: "Claude", url: "https://claude.ai" },
  { name: "Notion", url: "https://notion.so" },
  { name: "Trello", url: "https://trello.com" },
  { name: "Slack", url: "https://slack.com" },
  { name: "Discord", url: "https://discord.com" },
  { name: "Zoom", url: "https://zoom.us" },
  { name: "Figma", url: "https://figma.com" },
  { name: "Canva", url: "https://canva.com" },
  { name: "Dropbox", url: "https://dropbox.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "X / Twitter", url: "https://x.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Reddit", url: "https://reddit.com" },
  { name: "Pinterest", url: "https://pinterest.com" },
  { name: "TikTok", url: "https://tiktok.com" },
  { name: "Netflix", url: "https://netflix.com" },
  { name: "Spotify", url: "https://open.spotify.com" },
  { name: "Amazon", url: "https://amazon.com" },
  { name: "eBay", url: "https://ebay.com" },
  { name: "Wikipedia", url: "https://wikipedia.org" },
  { name: "Twitch", url: "https://twitch.tv" },
  { name: "Medium", url: "https://medium.com" },
  { name: "WhatsApp Web", url: "https://web.whatsapp.com" },
  { name: "Telegram Web", url: "https://web.telegram.org" },
  { name: "Outlook", url: "https://outlook.com" },
  { name: "Yahoo", url: "https://yahoo.com" },
  { name: "Bing", url: "https://bing.com" },
  { name: "Duolingo", url: "https://duolingo.com" },
  { name: "Khan Academy", url: "https://khanacademy.org" },
  { name: "Coursera", url: "https://coursera.org" },
  { name: "Udemy", url: "https://udemy.com" },
  { name: "Airbnb", url: "https://airbnb.com" },
  { name: "Booking.com", url: "https://booking.com" },
  { name: "Steam", url: "https://store.steampowered.com" },
  { name: "IMDb", url: "https://imdb.com" },
  { name: "New York Times", url: "https://nytimes.com" },
  { name: "BBC News", url: "https://bbc.com/news" },
  { name: "Pexels", url: "https://pexels.com" },
  { name: "Unsplash", url: "https://unsplash.com" },
];

/* ---------------------------------------------------
   State
--------------------------------------------------- */
const STORAGE_KEY = "timespot_state_v1";

/* ---------------------------------------------------
   Self-hosted update check (no Chrome Web Store, no cost)
   Point this at a small JSON file you control — e.g. a public GitHub
   repo's raw file (GitHub Pages/raw content is free and sends the right
   CORS headers for fetch() from an extension page). Bump the "version"
   field in that file every time you publish a new .zip; this page then
   just compares it against the version installed locally and, if it's
   newer, shows a link to wherever you host the download (a GitHub
   Releases page works well). Expected shape of that file:
   { "version": "1.6.2", "notes": "Short changelog line", "downloadUrl": "https://github.com/you/repo/releases/latest" }
--------------------------------------------------- */
const UPDATE_MANIFEST_URL = "https://raw.githubusercontent.com/YOUR_GITHUB_USERNAME/YOUR_REPO/main/version.json";
const localTZ = Intl.DateTimeFormat().resolvedOptions().timeZone;
// Follows the browser's UI language (Settings → Languages), used to
// localize weekday/month names in the main date line.
const uiLocale = (typeof chrome !== "undefined" && chrome.i18n && chrome.i18n.getUILanguage) ? chrome.i18n.getUILanguage() : undefined;

const DEFAULT_TASK_TAGS = [
  { id: "todo", name: T("default_tag_todo"), color: "#8a8a86", isDone: false },
  { id: "inprogress", name: T("default_tag_inprogress"), color: "#2f6fed", isDone: false },
  { id: "inreview", name: T("default_tag_inreview"), color: "#c98a1b", isDone: false },
  { id: "done", name: T("default_tag_done"), color: "#1fa15a", isDone: true }
];

let state = {
  format: "24",
  cityTZs: [],
  favLinks: [
    { name: "Gmail", url: "https://mail.google.com" },
    { name: "YouTube", url: "https://youtube.com" },
    { name: "Drive", url: "https://drive.google.com" },
    { name: "Calendar", url: "https://calendar.google.com" },
    { name: "Maps", url: "https://maps.google.com" },
    { name: "Amazon", url: "https://amazon.com" },
    { name: "Netflix", url: "https://netflix.com" }
  ],
  background: {
    // Each preset theme now carries its own background photo. `useImage`
    // is the master on/off switch; `byTheme` remembers which photo (built-in,
    // pasted URL, or an uploaded image's data URL) is picked for each theme
    // key. `byThemeUploads` keeps the person's own uploaded photos per theme
    // so they show up as extra thumbnail choices alongside the built-ins.
    useImage: true,
    byTheme: {},
    byThemeUploads: {},
    // Auto-rotate through the current theme's photo choices (built-ins +
    // any uploads) every `minutes`. Kept per-theme so each theme can have
    // its own on/off + interval, same as the photo choices themselves.
    slideshowByTheme: {}
  },
  cardShadow: true,
  overlay: { on: true, opacity: 22 },
  security: { passwordEnabled: false, passwordHash: "", salt: "" },
  linkAccounts: [],
  theme: null,          // null = auto-detect from prefers-color-scheme; else one of THEME_NAMES or "custom"
  customTheme: {
    ink: "#111111",
    inkContrast: "#ffffff",
    muted: "#8a8a86",
    cardBg: "#ECECE9",
    pageBg: "#eceae4",
    pageBgOpacity: 100,
    accent: "#4f7cff",
    accent2: "#ff9a4f",
    cityHighlightBg: "#151515",
    cityHighlightInk: "#ffffff"
  },
  fullBleed: false,
  notesList: [],
  taskTags: DEFAULT_TASK_TAGS.map(t => ({ ...t })),
  taskFilter: null,     // null = all tags
  tasks: [],
  alerts: [],
  sectionOrder: []
};

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

/* Bring older saved states up to the current schema without losing data. */
function migrateState() {
  // Older saves used a single global background ({type, value, overlay...}).
  // Carry a plain custom image forward as the "custom" theme's photo; drop
  // the rest of the old shape (overlay/auto-cycle/color fill/pexels/font),
  // which no longer exist.
  const old = state.background;
  if (!old || old.byTheme === undefined) {
    const carried = old && old.type === "image" && old.value ? old.value : null;
    state.background = { useImage: true, byTheme: carried ? { custom: carried } : {} };
  }
  if (state.background.useImage === undefined) state.background.useImage = true;
  if (!state.background.byTheme || typeof state.background.byTheme !== "object") state.background.byTheme = {};
  if (!state.background.byThemeUploads || typeof state.background.byThemeUploads !== "object") state.background.byThemeUploads = {};
  if (!state.background.slideshowByTheme || typeof state.background.slideshowByTheme !== "object") state.background.slideshowByTheme = {};

  if (state.cardShadow === undefined) state.cardShadow = true;
  if (!state.overlay || typeof state.overlay !== "object") state.overlay = { on: true, opacity: 22 };
  if (state.overlay.on === undefined) state.overlay.on = true;
  if (state.overlay.opacity === undefined || state.overlay.opacity === null) state.overlay.opacity = 22;
  if (!state.security || typeof state.security !== "object") state.security = { passwordEnabled: false, passwordHash: "", salt: "" };
  if (state.security.passwordEnabled === undefined) state.security.passwordEnabled = false;
  if (state.security.passwordHash === undefined) state.security.passwordHash = "";
  if (state.security.salt === undefined) state.security.salt = "";

  if (!Array.isArray(state.linkAccounts)) state.linkAccounts = [];
  state.linkAccounts.forEach(acc => { if (!Array.isArray(acc.links)) acc.links = []; });
  delete state.profile;

  delete state.pexels;
  delete state.font;

  if (!state.customTheme) state.customTheme = {};
  const ctDefaults = {
    ink: "#111111", inkContrast: "#ffffff", muted: "#8a8a86", cardBg: "#ECECE9",
    pageBg: "#eceae4", pageBgOpacity: 100, accent: "#4f7cff", accent2: "#ff9a4f",
    cityHighlightBg: "#151515", cityHighlightInk: "#ffffff"
  };
  Object.keys(ctDefaults).forEach(k => { if (state.customTheme[k] === undefined || state.customTheme[k] === null) state.customTheme[k] = ctDefaults[k]; });
  // Old per-theme background-image controls are superseded by the global
  // Background picker in the Theme tab; drop them if present from a save
  // made by an older version.
  delete state.customTheme.bgImage; delete state.customTheme.bgImageSize;
  delete state.customTheme.bgImagePosition; delete state.customTheme.font;

  (state.notesList || []).forEach(n => { if (n.collapsed === undefined) n.collapsed = false; });

  if (!Array.isArray(state.notesList)) state.notesList = [];
  if (typeof state.notes === "string" && state.notes.trim()) {
    state.notesList.unshift({ id: uid(), title: T("default_note_title"), text: state.notes, updatedAt: Date.now() });
  }
  delete state.notes;

  if (!Array.isArray(state.taskTags) || !state.taskTags.length) {
    state.taskTags = DEFAULT_TASK_TAGS.map(t => ({ ...t }));
  }
  const todoTag = state.taskTags.find(t => !t.isDone) || state.taskTags[0];
  const doneTag = state.taskTags.find(t => t.isDone) || state.taskTags[state.taskTags.length - 1];
  (state.tasks || []).forEach(task => {
    if (!task.tagId) {
      task.tagId = task.done ? doneTag.id : todoTag.id;
      delete task.done;
    }
    if (!task.createdAt) task.createdAt = Date.now();
    if (!Array.isArray(task.history) || !task.history.length) {
      task.history = [{ tagId: task.tagId, at: task.createdAt }];
    }
  });

  (state.alerts || []).forEach(item => {
    if (!item.kind) item.kind = "clock";
  });
}

function defaultCityList() {
  const defaults = ["America/Los_Angeles", "America/New_York", "Europe/London", "America/Toronto"];
  if (localTZ && !defaults.includes(localTZ) && CITY_DB.some(c => c.tz === localTZ)) {
    return [localTZ, ...defaults];
  }
  return defaults;
}

function findCity(tz) {
  return CITY_DB.find(c => c.tz === tz) || {
    name: tz.split("/").pop().replace(/_/g, " "), country: "", tz, lat: null, lng: null
  };
}

function saveState() {
  try {
    if (chrome?.storage?.local) chrome.storage.local.set({ [STORAGE_KEY]: state });
    else localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { /* no-op */ }
  saveFastbootCache();
}

// Small, synchronous mirror of whatever's cheap and worth applying before
// chrome.storage.local's async read comes back on the next tab open — see
// the inline script at the top of <body> in newtab.html. Keep this tiny;
// it's only meant to kill first-paint flashes, not to be a real cache.
function saveFastbootCache() {
  try {
    localStorage.setItem("ts_fastboot", JSON.stringify({
      noShadow: state.cardShadow === false
    }));
  } catch (e) { /* no-op */ }
}

function loadState(cb) {
  try {
    if (chrome?.storage?.local) {
      chrome.storage.local.get([STORAGE_KEY], (res) => {
        const saved = res[STORAGE_KEY];
        if (saved) {
          state = Object.assign({}, state, saved);
          if (!state.cityTZs || !state.cityTZs.length) state.cityTZs = defaultCityList();
        } else {
          state.cityTZs = defaultCityList();
        }
        migrateState();
        cb();
      });
      return;
    }
  } catch (e) { /* fall through */ }

  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const saved = JSON.parse(raw);
      state = Object.assign({}, state, saved);
      if (!state.cityTZs || !state.cityTZs.length) state.cityTZs = defaultCityList();
    } catch (e) { state.cityTZs = defaultCityList(); }
  } else {
    state.cityTZs = defaultCityList();
  }
  migrateState();
  cb();
}

/* ---------------------------------------------------
   Time helpers
--------------------------------------------------- */
function pad(n) { return String(n).padStart(2, "0"); }

function getPartsInTZ(date, tz) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: tz, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
    year: "numeric", month: "2-digit", day: "2-digit", weekday: "short"
  });
  const parts = {};
  fmt.formatToParts(date).forEach(p => { parts[p.type] = p.value; });
  return parts;
}

function formatClock(date, tz, format) {
  const parts = getPartsInTZ(date, tz);
  let h = parseInt(parts.hour, 10);
  const m = parts.minute, s = parts.second;
  if (format === "12") {
    const suffix = h >= 12 ? "PM" : "AM";
    let h12 = h % 12; if (h12 === 0) h12 = 12;
    return `${pad(h12)}:${m}:${s} ${suffix}`;
  }
  return `${pad(h)}:${m}:${s}`;
}

function formatShortClock(date, tz, format) {
  const parts = getPartsInTZ(date, tz);
  let h = parseInt(parts.hour, 10);
  const m = parts.minute;
  if (format === "12") {
    let h12 = h % 12; if (h12 === 0) h12 = 12;
    return `${pad(h12)}:${m}`;
  }
  return `${pad(h)}:${m}`;
}

function isDaytime(date, tz) {
  const parts = getPartsInTZ(date, tz);
  return parseInt(parts.hour, 10) >= 6 && parseInt(parts.hour, 10) < 18;
}

function getUTCOffsetLabel(date, tz) {
  const fmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "shortOffset" });
  const tzPart = fmt.formatToParts(date).find(p => p.type === "timeZoneName");
  if (!tzPart) return "";
  let v = tzPart.value.replace("GMT", "UTC");
  if (v === "UTC") v = "UTC+0";
  return v;
}

/* NOAA-based sunrise / sunset */
function calcSunTimes(date, lat, lng, tz) {
  if (lat === null || lng === null) return null;
  const parts = getPartsInTZ(date, tz);
  const y = parseInt(parts.year, 10), mo = parseInt(parts.month, 10), d = parseInt(parts.day, 10);
  const localNoonUTCms = Date.UTC(y, mo - 1, d, 12, 0, 0);
  const start = Date.UTC(y, 0, 1);
  const dayOfYear = Math.floor((localNoonUTCms - start) / 86400000) + 1;

  const rad = Math.PI / 180;
  const fracYear = (2 * Math.PI / 365) * (dayOfYear - 1);
  const eqTime = 229.18 * (0.000075 + 0.001868 * Math.cos(fracYear) - 0.032077 * Math.sin(fracYear)
    - 0.014615 * Math.cos(2 * fracYear) - 0.040849 * Math.sin(2 * fracYear));
  const decl = 0.006918 - 0.399912 * Math.cos(fracYear) + 0.070257 * Math.sin(fracYear)
    - 0.006758 * Math.cos(2 * fracYear) + 0.000907 * Math.sin(2 * fracYear)
    - 0.002697 * Math.cos(3 * fracYear) + 0.00148 * Math.sin(3 * fracYear);

  const latRad = lat * rad;
  const zenith = 90.833 * rad;
  const cosH = (Math.cos(zenith) / (Math.cos(latRad) * Math.cos(decl))) - Math.tan(latRad) * Math.tan(decl);
  if (cosH > 1 || cosH < -1) return { polar: cosH > 1 ? "night" : "day" };

  const haDeg = Math.acos(cosH) / rad;
  const sunriseMin = 720 - 4 * (lng + haDeg) - eqTime;
  const sunsetMin = 720 - 4 * (lng - haDeg) - eqTime;

  function minutesToUTCDate(mins) { return new Date(Date.UTC(y, mo - 1, d, 0, 0, 0) + mins * 60000); }

  const durationMin = Math.round((sunsetMin - sunriseMin + 1440) % 1440);
  const durH = Math.floor(durationMin / 60), durM = durationMin % 60;

  return {
    sunrise: minutesToUTCDate(sunriseMin),
    sunset: minutesToUTCDate(sunsetMin),
    durationLabel: `${durH}h ${pad(durM)}m`
  };
}

/* ---------------------------------------------------
   Theme
--------------------------------------------------- */
const BUILTIN_THEMES = [
  "dark", "retro", "ocean", "sunset", "forest", "nord",
  "solarized", "rose", "lavender", "coffee", "midnight"
];

function effectiveTheme() {
  if (state.theme) return state.theme;
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme() {
  const t = effectiveTheme();
  document.body.classList.remove(...BUILTIN_THEMES.map(name => "theme-" + name), "theme-custom");
  if (t === "custom") { document.body.classList.add("theme-custom"); applyCustomTheme(); }
  else {
    clearCustomTheme();
    if (BUILTIN_THEMES.includes(t)) document.body.classList.add("theme-" + t);
    // "light" uses the :root defaults — no class needed.
  }
  document.querySelectorAll(".theme-option").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.theme === t);
  });
  syncCustomThemeEditor();
  applyBackground();
}

/* ---------------------------------------------------
   Custom theme — full color/font control
--------------------------------------------------- */
function mixHex(hexA, hexB, amt) {
  const a = hexToRgb(hexA), b = hexToRgb(hexB);
  const r = Math.round(a.r + (b.r - a.r) * amt);
  const g = Math.round(a.g + (b.g - a.g) * amt);
  const bl = Math.round(a.b + (b.b - a.b) * amt);
  return "#" + [r, g, bl].map(n => Math.max(0, Math.min(255, n)).toString(16).padStart(2, "0")).join("");
}

function applyCustomTheme() {
  const ct = state.customTheme || {};
  const ink = ct.ink || "#111111";
  const inkContrast = ct.inkContrast || "#ffffff";
  const muted = ct.muted || "#8a8a86";
  const cardBg = ct.cardBg || "#ECECE9";
  const pageBg = ct.pageBg || "#eceae4";
  const pageBgOpacity = ct.pageBgOpacity === undefined || ct.pageBgOpacity === null ? 100 : ct.pageBgOpacity;
  const accent = ct.accent || "#4f7cff";
  const accent2 = ct.accent2 || "#ff9a4f";
  // The remaining tints (borders, tiles, secondary muted, dark tile) are
  // derived from the card/ink colors so the theme still looks coherent
  // without needing a picker for every single variable.
  const towardInk = cardBg === ink ? "#000000" : ink;
  const s = document.body.style;
  s.setProperty("--ink", ink);
  s.setProperty("--ink-contrast", inkContrast);
  s.setProperty("--muted", muted);
  s.setProperty("--muted-2", mixHex(muted, cardBg, 0.35));
  s.setProperty("--card-bg", cardBg);
  s.setProperty("--surface", cardBg);
  s.setProperty("--surface-ink", ink);
  s.setProperty("--light-tile", mixHex(cardBg, towardInk, 0.06));
  s.setProperty("--line", mixHex(cardBg, towardInk, 0.16));
  s.setProperty("--dark-card", ct.cityHighlightBg || mixHex(ink, "#000000", 0.35));
  s.setProperty("--dark-card-ink", ct.cityHighlightInk || "#ffffff");
  s.setProperty("--page-bg", hexToRgba(pageBg, pageBgOpacity));
  s.setProperty("--accent", accent);
  s.setProperty("--accent-2", accent2);
}

function clearCustomTheme() {
  const s = document.body.style;
  ["--ink", "--ink-contrast", "--muted", "--muted-2", "--card-bg", "--surface", "--surface-ink",
    "--light-tile", "--line", "--dark-card", "--dark-card-ink", "--page-bg", "--accent", "--accent-2"]
    .forEach(p => s.removeProperty(p));
}

function syncCustomThemeEditor() {
  const editor = document.getElementById("customThemeEditor");
  if (!editor) return;
  const isCustom = effectiveTheme() === "custom";
  editor.style.display = isCustom ? "flex" : "none";
  const ct = state.customTheme || {};
  const inkEl = document.getElementById("customInkColor");
  const inkContrastEl = document.getElementById("customInkContrastColor");
  const mutedEl = document.getElementById("customMutedColor");
  const cardEl = document.getElementById("customCardColor");
  const pageBgEl = document.getElementById("customPageBgColor");
  const pageBgOpacityEl = document.getElementById("customPageBgOpacity");
  const pageBgOpacityValueEl = document.getElementById("customPageBgOpacityValue");
  const accentEl = document.getElementById("customAccentColor");
  const accent2El = document.getElementById("customAccent2Color");
  const highlightBgEl = document.getElementById("customCityHighlightBg");
  const highlightInkEl = document.getElementById("customCityHighlightInk");
  if (inkEl) inkEl.value = ct.ink || "#111111";
  if (inkContrastEl) inkContrastEl.value = ct.inkContrast || "#ffffff";
  if (mutedEl) mutedEl.value = ct.muted || "#8a8a86";
  if (cardEl) cardEl.value = ct.cardBg || "#ECECE9";
  if (pageBgEl) pageBgEl.value = ct.pageBg || "#eceae4";
  const pageBgOpacityVal = ct.pageBgOpacity === undefined || ct.pageBgOpacity === null ? 100 : ct.pageBgOpacity;
  if (pageBgOpacityEl) pageBgOpacityEl.value = pageBgOpacityVal;
  if (pageBgOpacityValueEl) pageBgOpacityValueEl.textContent = `${pageBgOpacityVal}%`;
  if (accentEl) accentEl.value = ct.accent || "#4f7cff";
  if (accent2El) accent2El.value = ct.accent2 || "#ff9a4f";
  if (highlightBgEl) highlightBgEl.value = ct.cityHighlightBg || "#151515";
  if (highlightInkEl) highlightInkEl.value = ct.cityHighlightInk || "#ffffff";
  const swatch = document.getElementById("customSwatchPreview");
  if (swatch) {
    swatch.style.backgroundImage = "";
    swatch.style.background = `linear-gradient(135deg, ${ct.cardBg || "#ECECE9"} 0%, ${ct.cardBg || "#ECECE9"} 60%, ${ct.ink || "#111111"} 100%)`;
  }
}

/* ---------------------------------------------------
   Background — each preset theme carries its own set of photo choices,
   loaded from theme-backgrounds.json (see bottom of file for the loader).
   state.background.byTheme[themeKey] remembers which one is active.
--------------------------------------------------- */
const bgLayer = document.getElementById("bgLayer");
const bgOverlay = document.getElementById("bgOverlay");
const pageRoot = document.getElementById("pageRoot");

function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || "");
  return m ? { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) } : { r: 0, g: 0, b: 0 };
}

function hexToRgba(hex, opacityPct) {
  const { r, g, b } = hexToRgb(hex);
  const a = Math.max(0, Math.min(100, Number(opacityPct))) / 100;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Populated by loadThemeBackgrounds() from theme-backgrounds.json.
let THEME_BACKGROUNDS = {};

function currentBgForTheme(themeKey) {
  const saved = state.background.byTheme[themeKey];
  if (saved) return saved;
  const preset = THEME_BACKGROUNDS[themeKey];
  return preset && preset.images && preset.images[0] ? preset.images[0] : "";
}

function applyBackground() {
  const themeKey = effectiveTheme();
  const bg = state.background || { useImage: true, byTheme: {}, byThemeUploads: {} };
  const url = bg.useImage ? currentBgForTheme(themeKey) : "";
  if (url) bgLayer.style.background = `center / cover no-repeat url("${url}")`;
  else bgLayer.style.background = "var(--page-bg)";
  // A photo background lets the card blend right into it instead of
  // sitting on an opaque theme-colored panel; the active palette still
  // drives text/icon/border colors either way.
  pageRoot.classList.toggle("has-bg", !!url);
  // "Overlay background" — a dark wash over the photo, so text stays
  // readable on busy images. Independently toggleable and adjustable in
  // Display; only ever shown when there's actually a photo behind it.
  const overlay = state.overlay || { on: true, opacity: 22 };
  const showOverlay = !!url && overlay.on !== false;
  bgOverlay.style.background = showOverlay ? `rgba(0,0,0,${Math.max(0, Math.min(80, Number(overlay.opacity))) / 100})` : "transparent";
  applyCardShadow();
  applyOverlaySettings();
  syncThemeBgPanel();
  syncSlideshowUI();
  restartSlideshowTimer();
}

/* ---------------------------------------------------
   Card shadow — independent on/off, no longer tied to whether a
   background photo or full-bleed is active.
--------------------------------------------------- */
function applyCardShadow() {
  pageRoot.classList.toggle("no-card-shadow", state.cardShadow === false);
  // Keep the early fastboot class (see top of <body> in newtab.html) in
  // sync with the real, just-loaded state — it's only ever a guess made
  // from a stale localStorage snapshot before this point, so once the
  // real answer is known it must be corrected either way, not just added.
  document.body.classList.toggle("fb-no-shadow", state.cardShadow === false);
  const toggle = document.getElementById("cardShadowToggle");
  if (toggle) toggle.checked = state.cardShadow !== false;
}

function applyOverlaySettings() {
  const overlay = state.overlay || { on: true, opacity: 22 };
  const toggle = document.getElementById("overlayToggle");
  if (toggle) toggle.checked = overlay.on !== false;
  const range = document.getElementById("overlayOpacityRange");
  if (range) range.value = overlay.opacity;
  const valueEl = document.getElementById("overlayOpacityValue");
  if (valueEl) valueEl.textContent = `${overlay.opacity}%`;
}

// When a photo becomes the active background (picked, uploaded, shuffled,
// pasted, or advanced by the slideshow), a solid page-background color
// and a photo underneath it fight each other — so picking a photo always
// pulls the page-background color's own opacity down to 0 (Custom theme
// only; built-in themes don't expose that control) and turns the overlay
// wash on at a sensible default strength, so busy photos stay readable
// without the person having to go tweak both by hand every time.
function applyPhotoDefaults(themeKey) {
  state.overlay = state.overlay || { on: true, opacity: 22 };
  state.overlay.on = true;
  state.overlay.opacity = 24;
  if (themeKey === "custom") {
    state.customTheme = state.customTheme || {};
    state.customTheme.pageBgOpacity = 0;
  }
}

function selectBackgroundImage(url, opts) {
  const themeKey = effectiveTheme();
  state.background.byTheme[themeKey] = url;
  state.background.useImage = true;
  applyPhotoDefaults(themeKey);
  saveState();
  applyBackground();
  applyOverlaySettings();
  if (themeKey === "custom") { syncCustomThemeEditor(); applyCustomTheme(); }
  // Restarting the timer keeps its interval anchored to the photo that's
  // actually showing right now, whether this call came from a manual pick
  // or from the slideshow advancing itself.
  if (!(opts && opts.fromSlideshow)) restartSlideshowTimer();
}

function shuffleBackgroundImage() {
  const themeKey = effectiveTheme();
  const url = `https://picsum.photos/seed/ts-shuffle-${themeKey}-${Date.now()}/2560/1440`;
  selectBackgroundImage(url);
}

function syncThemeBgPanel() {
  const themeKey = effectiveTheme();
  const preset = THEME_BACKGROUNDS[themeKey] || { label: themeKey, images: [] };
  const activeUrl = currentBgForTheme(themeKey);

  const label = document.getElementById("themeBgLabel");
  if (label) label.textContent = preset.label || themeKey;

  const toggle = document.getElementById("themeBgToggle");
  if (toggle) toggle.checked = state.background.useImage !== false;

  const controls = document.getElementById("themeBgControls");
  if (controls) controls.style.display = state.background.useImage === false ? "none" : "block";

  const thumbsWrap = document.getElementById("themeBgThumbs");
  if (thumbsWrap) {
    thumbsWrap.innerHTML = "";
    const uploads = (state.background.byThemeUploads && state.background.byThemeUploads[themeKey]) || [];
    const images = preset.images || [];
    // Uploaded photos show first, then the built-ins. If the active image
    // isn't in either list (a shuffled or pasted URL), show it as its own
    // selected thumbnail too.
    const known = new Set([...uploads, ...images]);
    const extra = activeUrl && !known.has(activeUrl) ? [activeUrl] : [];
    const list = [...extra, ...uploads, ...images];
    list.forEach(url => {
      const thumb = document.createElement("div");
      thumb.className = "theme-bg-thumb" + (url === activeUrl ? " selected" : "");
      thumb.style.backgroundImage = `url("${url}")`;
      thumb.title = T("use_btn");
      thumb.addEventListener("click", () => selectBackgroundImage(url));
      // Only photos the person added themselves (uploads, or the current
      // pasted/shuffled URL) can be removed — the built-in presets can't.
      if (uploads.includes(url) || extra.includes(url)) {
        const removeBtn = document.createElement("button");
        removeBtn.type = "button";
        removeBtn.className = "theme-bg-thumb-remove";
        removeBtn.title = T("remove_title");
        removeBtn.textContent = "×";
        removeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          removeCustomBgImage(themeKey, url);
        });
        thumb.appendChild(removeBtn);
      }
      thumbsWrap.appendChild(thumb);
    });
  }
}

/* ---------------------------------------------------
   Background slideshow — auto-advance through the current theme's photo
   list (uploads first, then built-ins) every N minutes. Per-theme
   on/off + interval, restarted any time the active theme, its photo
   list, or the interval changes.
--------------------------------------------------- */
let slideshowTimer = null;

function slideshowSettingsFor(themeKey) {
  const all = state.background.slideshowByTheme || {};
  return all[themeKey] || { enabled: false, minutes: 5 };
}

function setSlideshowSettingsFor(themeKey, patch) {
  if (!state.background.slideshowByTheme) state.background.slideshowByTheme = {};
  const current = slideshowSettingsFor(themeKey);
  state.background.slideshowByTheme[themeKey] = Object.assign({}, current, patch);
}

function themeImageList(themeKey) {
  const preset = THEME_BACKGROUNDS[themeKey] || { images: [] };
  const uploads = (state.background.byThemeUploads && state.background.byThemeUploads[themeKey]) || [];
  // De-duped, uploads first so a person's own recent photos cycle in too.
  return [...new Set([...uploads, ...(preset.images || [])])];
}

function advanceSlideshow() {
  const themeKey = effectiveTheme();
  const settings = slideshowSettingsFor(themeKey);
  if (!settings.enabled) return;
  const list = themeImageList(themeKey);
  if (list.length < 2) return;
  const current = currentBgForTheme(themeKey);
  const idx = list.indexOf(current);
  const next = list[(idx + 1 + list.length) % list.length];
  selectBackgroundImage(next, { fromSlideshow: true });
}

function restartSlideshowTimer() {
  if (slideshowTimer) { clearInterval(slideshowTimer); slideshowTimer = null; }
  const themeKey = effectiveTheme();
  if (state.background.useImage === false) return;
  const settings = slideshowSettingsFor(themeKey);
  if (!settings.enabled) return;
  const minutes = Math.max(1, Number(settings.minutes) || 5);
  slideshowTimer = setInterval(advanceSlideshow, minutes * 60 * 1000);
}

function syncSlideshowUI() {
  const themeKey = effectiveTheme();
  const settings = slideshowSettingsFor(themeKey);
  const toggle = document.getElementById("bgSlideshowToggle");
  const select = document.getElementById("bgSlideshowInterval");
  if (toggle) toggle.checked = !!settings.enabled;
  if (select) {
    select.value = String(Math.max(1, Number(settings.minutes) || 5));
    select.disabled = !settings.enabled;
  }
}

const bgSlideshowToggle = document.getElementById("bgSlideshowToggle");
if (bgSlideshowToggle) {
  bgSlideshowToggle.addEventListener("change", (e) => {
    setSlideshowSettingsFor(effectiveTheme(), { enabled: e.target.checked });
    saveState();
    syncSlideshowUI();
    restartSlideshowTimer();
  });
}
const bgSlideshowInterval = document.getElementById("bgSlideshowInterval");
if (bgSlideshowInterval) {
  bgSlideshowInterval.addEventListener("change", (e) => {
    setSlideshowSettingsFor(effectiveTheme(), { minutes: Number(e.target.value) });
    saveState();
    restartSlideshowTimer();
  });
}

function removeCustomBgImage(themeKey, url) {
  const uploads = state.background.byThemeUploads[themeKey] || [];
  state.background.byThemeUploads[themeKey] = uploads.filter(u => u !== url);
  // If the removed photo was the active one for this theme, fall back to
  // the theme's first built-in photo (or nothing, if it has none).
  if (state.background.byTheme[themeKey] === url) {
    const preset = THEME_BACKGROUNDS[themeKey];
    const fallback = preset && preset.images && preset.images[0];
    if (fallback) state.background.byTheme[themeKey] = fallback;
    else delete state.background.byTheme[themeKey];
  }
  saveState();
  buildThemeSwatches();
  applyBackground();
}

/* ---------------------------------------------------
   Upload background photos from the person's own device. Stored as data
   URLs in chrome.storage.local (the "storage" + "unlimitedStorage"
   permissions already cover this), per theme, so each theme remembers its
   own uploads. Multiple files can be picked/dropped at once.
--------------------------------------------------- */
const MAX_UPLOADS_PER_THEME = 20;
const MAX_UPLOAD_BYTES = 8 * 1024 * 1024; // 8MB per image, generous for a background photo

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function handleBgUploadFiles(fileList) {
  const files = Array.from(fileList || []).filter(f => f.type.startsWith("image/"));
  if (!files.length) return;

  const progress = document.getElementById("themeBgUploadProgress");
  const themeKey = effectiveTheme();
  if (!Array.isArray(state.background.byThemeUploads[themeKey])) state.background.byThemeUploads[themeKey] = [];

  let lastUrl = null;
  let skippedTooLarge = 0;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (progress) {
      progress.style.display = "block";
      progress.textContent = T("uploading_progress", [String(i + 1), String(files.length)]);
    }
    if (file.size > MAX_UPLOAD_BYTES) { skippedTooLarge++; continue; }
    try {
      const dataUrl = await readFileAsDataURL(file);
      const uploads = state.background.byThemeUploads[themeKey];
      uploads.unshift(dataUrl);
      if (uploads.length > MAX_UPLOADS_PER_THEME) uploads.length = MAX_UPLOADS_PER_THEME;
      lastUrl = dataUrl;
    } catch (e) { /* skip file on read error */ }
  }

  if (progress) {
    if (skippedTooLarge) {
      progress.textContent = skippedTooLarge === 1 ? T("skipped_images_one") : T("skipped_images_other", String(skippedTooLarge));
      setTimeout(() => { progress.style.display = "none"; }, 3000);
    } else {
      progress.style.display = "none";
    }
  }

  if (lastUrl) selectBackgroundImage(lastUrl);
  else { saveState(); buildThemeSwatches(); syncThemeBgPanel(); }
}

async function loadThemeBackgrounds() {
  try {
    const url = (typeof chrome !== "undefined" && chrome.runtime && chrome.runtime.getURL)
      ? chrome.runtime.getURL("theme-backgrounds.json")
      : "theme-backgrounds.json";
    const res = await fetch(url);
    const data = await res.json();
    delete data._readme;
    THEME_BACKGROUNDS = data || {};
  } catch (e) {
    THEME_BACKGROUNDS = {};
  }
  buildThemeSwatches();
  applyBackground();
}

// Theme swatches show each theme's own color gradient (defined in CSS,
// e.g. .swatch-light) — they intentionally do NOT preview the background
// photo, so the picker stays a quick "what palette is this" glance.
function buildThemeSwatches() {
  /* no-op: swatches are pure CSS gradients, kept for backward-compat calls */
}

/* ---------------------------------------------------
   Full-width, full-height background
   (the card itself never resizes or moves — this only stretches the
   chosen background image/color edge-to-edge across the whole window,
   and the card drops its shadow/background so it blends right into it)
--------------------------------------------------- */
function applyFullBleed() {
  bgLayer.classList.toggle("immersive", !!state.fullBleed);
  pageRoot.classList.toggle("full-bleed", !!state.fullBleed);
  const toggle = document.getElementById("fullBleedToggle");
  if (toggle) toggle.checked = !!state.fullBleed;
}

/* ---------------------------------------------------
   Rendering — clock & cities
--------------------------------------------------- */
const mainClockEl = document.getElementById("mainClock");
const sunLineEl = document.getElementById("sunLine");
const dateLineEl = document.getElementById("dateLine");
const mainCityNameEl = document.getElementById("mainCityName");
const cityGridEl = document.getElementById("cityGrid");
const linkGridEl = document.getElementById("linkGrid");

function primaryCity() {
  const tz = state.cityTZs[0] || localTZ;
  return findCity(tz);
}

function renderStatic() {
  const primary = primaryCity();
  mainCityNameEl.innerHTML = `${primary.name},<br/>${primary.country || ""}`;
  document.querySelectorAll(".toggle-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.format === state.format));
  renderCityGrid();
  renderLinkGrid();
}

function renderCityGrid() {
  cityGridEl.innerHTML = "";
  const now = new Date();
  state.cityTZs.forEach((tz, idx) => {
    const city = findCity(tz);
    const tile = document.createElement("div");
    tile.className = "city-tile" + (idx === 0 ? " dark" : "");
    const day = isDaytime(now, tz);
    tile.innerHTML = `
      ${state.cityTZs.length > 1 ? `<button class="remove-btn" title="${T("remove_title")}">&times;</button>` : ""}
      <div class="row-top">
        <span class="city-name">${city.name}</span>
        <span class="utc">${getUTCOffsetLabel(now, tz)}</span>
      </div>
      <div class="row-bottom">
        <span class="time" data-tz="${tz}">${formatShortClock(now, tz, state.format)}</span>
        <span class="daynight">${day ? T("day_label") : T("night_label")}</span>
      </div>`;
    const removeBtn = tile.querySelector(".remove-btn");
    if (removeBtn) removeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      state.cityTZs.splice(idx, 1);
      saveState();
      renderStatic();
    });
    cityGridEl.appendChild(tile);
  });
}

function faviconFor(url) {
  try {
    const u = new URL(url);
    return `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(u.origin)}`;
  } catch (e) { return ""; }
}

function renderLinkGrid() {
  linkGridEl.innerHTML = "";
  if (!state.favLinks.length) {
    linkGridEl.innerHTML = `<div class="link-empty">${T("link_empty")}</div>`;
    return;
  }
  state.favLinks.forEach((link, idx) => {
    const a = document.createElement("a");
    a.className = "link-tile";
    a.href = link.url;
    a.innerHTML = `
      <button class="remove-btn" title="${T("remove_title")}">&times;</button>
      <img class="favicon" src="${faviconFor(link.url)}" alt="" onerror="this.style.visibility='hidden'"/>
      <span class="link-name">${link.name}</span>`;
    a.querySelector(".remove-btn").addEventListener("click", (e) => {
      e.preventDefault(); e.stopPropagation();
      state.favLinks.splice(idx, 1);
      saveState();
      renderLinkGrid();
    });
    linkGridEl.appendChild(a);
  });
}

function tick() {
  const now = new Date();
  mainClockEl.textContent = formatClock(now, localTZ, state.format);

  const primary = primaryCity();
  const sun = calcSunTimes(now, primary.lat, primary.lng, primary.tz);
  if (sun && sun.sunrise) {
    const rise = formatShortClock(sun.sunrise, primary.tz, "24");
    const set = formatShortClock(sun.sunset, primary.tz, "24");
    const daytimeNow = isDaytime(now, primary.tz);
    sunLineEl.textContent = T("sun_line", [daytimeNow ? "☀️" : "🌙", rise, set, sun.durationLabel]);
  } else if (sun && sun.polar) {
    sunLineEl.textContent = sun.polar === "day" ? T("sun_up_all_day") : T("sun_down_all_day");
  } else sunLineEl.textContent = "";

  const dparts = getPartsInTZ(now, primary.tz);
  const weekdayFull = new Intl.DateTimeFormat(uiLocale, { timeZone: primary.tz, weekday: "long" }).format(now);
  const monthShort = new Intl.DateTimeFormat(uiLocale, { timeZone: primary.tz, month: "short" }).format(now);
  dateLineEl.textContent = `${weekdayFull}, ${monthShort} ${parseInt(dparts.day, 10)} ${dparts.year}`;

  cityGridEl.querySelectorAll(".time[data-tz]").forEach(el => {
    el.textContent = formatShortClock(now, el.getAttribute("data-tz"), state.format);
  });
  cityGridEl.querySelectorAll(".city-tile").forEach((tile, idx) => {
    const tz = state.cityTZs[idx];
    if (!tz) return;
    const dn = tile.querySelector(".daynight");
    if (dn) dn.textContent = isDaytime(now, tz) ? T("day_label") : T("night_label");
  });

  checkAlerts(now);
  if (state.alerts.some(a => a.kind === "countdown")) renderAlerts();
}

/* ---------------------------------------------------
   Modal: Add city
--------------------------------------------------- */
const modalOverlay = document.getElementById("modalOverlay");
const modalSearch = document.getElementById("modalSearch");
const modalList = document.getElementById("modalList");

function openModal() {
  modalOverlay.classList.add("open");
  modalSearch.value = "";
  renderModalList("");
  setTimeout(() => modalSearch.focus(), 50);
}
function closeModal() { modalOverlay.classList.remove("open"); }

function renderModalList(query) {
  const q = query.trim().toLowerCase();
  const results = CITY_DB.filter(c => !q || c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)).slice(0, 40);
  modalList.innerHTML = "";
  if (!results.length) {
    modalList.innerHTML = `<div class="modal-item" style="cursor:default;color:var(--muted);">${T("no_cities_found")}</div>`;
    return;
  }
  results.forEach(city => {
    const item = document.createElement("div");
    item.className = "modal-item";
    const already = state.cityTZs.includes(city.tz);
    item.innerHTML = `<span>${city.name}, ${city.country}</span><span class="tz">${already ? T("added_label") : getUTCOffsetLabel(new Date(), city.tz)}</span>`;
    if (!already) {
      item.addEventListener("click", () => {
        state.cityTZs.push(city.tz);
        saveState();
        renderStatic();
        closeModal();
      });
    } else { item.style.opacity = "0.5"; item.style.cursor = "default"; }
    modalList.appendChild(item);
  });
}

document.getElementById("addCityBtn").addEventListener("click", openModal);
document.getElementById("modalClose").addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModal(); });
modalSearch.addEventListener("input", (e) => renderModalList(e.target.value));

/* ---------------------------------------------------
   Modal: Add favorite link
--------------------------------------------------- */
const linkModalOverlay = document.getElementById("linkModalOverlay");
const linkNameInput = document.getElementById("linkNameInput");
const linkUrlInput = document.getElementById("linkUrlInput");
const linkSuggestFilter = document.getElementById("linkSuggestFilter");
const suggestLinkGrid = document.getElementById("suggestLinkGrid");

function faviconFor(url) {
  try { return `https://www.google.com/s2/favicons?sz=32&domain=${new URL(url).hostname}`; }
  catch (e) { return ""; }
}

function addFavLink(name, url) {
  state.favLinks.push({ name, url });
  saveState();
  renderLinkGrid();
  renderSuggestLinks(linkSuggestFilter ? linkSuggestFilter.value.trim() : "");
}

function renderSuggestLinks(filter) {
  if (!suggestLinkGrid) return;
  suggestLinkGrid.innerHTML = "";
  const q = (filter || "").toLowerCase();
  const addedUrls = new Set(state.favLinks.map(l => l.url.replace(/\/+$/, "")));
  FAV_LINK_SUGGESTIONS
    .filter(s => !q || s.name.toLowerCase().includes(q) || s.url.toLowerCase().includes(q))
    .forEach(s => {
      const already = addedUrls.has(s.url.replace(/\/+$/, ""));
      const item = document.createElement("div");
      item.className = "suggest-link-item" + (already ? " added" : "");
      item.title = already ? T("already_added", s.name) : T("add_x", s.name);
      let host = s.url;
      try { host = new URL(s.url).hostname.replace(/^www\./, ""); } catch (e) {}
      item.innerHTML = `
        <img class="fav-ico" src="${faviconFor(s.url)}" alt="" />
        <span class="sug-text">
          <span class="sug-name">${escapeHtml(s.name)}</span>
          <span class="sug-url">${escapeHtml(host)}</span>
        </span>`;
      if (!already) item.addEventListener("click", () => addFavLink(s.name, s.url));
      suggestLinkGrid.appendChild(item);
    });
}
if (linkSuggestFilter) linkSuggestFilter.addEventListener("input", (e) => renderSuggestLinks(e.target.value.trim()));

// Positions the link dropdown right under the "Add Link" button (like a
// real Google dropdown anchored to its trigger), clamped so it never runs
// off the right/bottom edge of the window.
function positionLinkDropdown(anchorEl) {
  const panel = linkModalOverlay.querySelector(".link-dropdown");
  if (!panel || !anchorEl) return;
  const rect = anchorEl.getBoundingClientRect();
  const panelWidth = panel.offsetWidth || 320;
  let left = rect.right - panelWidth;
  left = Math.max(12, Math.min(left, window.innerWidth - panelWidth - 12));
  let top = rect.bottom + 10;
  const maxTop = window.innerHeight - 12 - (panel.offsetHeight || 300);
  top = Math.max(12, Math.min(top, maxTop));
  panel.style.left = `${left}px`;
  panel.style.top = `${top}px`;
}

const addLinkBtnEl = document.getElementById("addLinkBtn");
addLinkBtnEl.addEventListener("click", () => {
  linkNameInput.value = ""; linkUrlInput.value = "";
  if (linkSuggestFilter) linkSuggestFilter.value = "";
  linkModalOverlay.classList.add("open");
  renderSuggestLinks("");
  positionLinkDropdown(addLinkBtnEl);
  setTimeout(() => linkNameInput.focus(), 50);
});
window.addEventListener("resize", () => {
  if (linkModalOverlay.classList.contains("open")) positionLinkDropdown(addLinkBtnEl);
});
document.getElementById("linkModalClose").addEventListener("click", () => linkModalOverlay.classList.remove("open"));
linkModalOverlay.addEventListener("click", (e) => { if (e.target === linkModalOverlay) linkModalOverlay.classList.remove("open"); });

document.getElementById("linkSaveBtn").addEventListener("click", () => {
  let name = linkNameInput.value.trim();
  let url = linkUrlInput.value.trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;
  if (!name) { try { name = new URL(url).hostname.replace(/^www\./, ""); } catch (e) { name = url; } }
  addFavLink(name, url);
  linkModalOverlay.classList.remove("open");
});

/* ---------------------------------------------------
   Settings modal: Theme / Display
--------------------------------------------------- */
const settingsOverlay = document.getElementById("settingsOverlay");
const settingsSectionTabs = document.getElementById("settingsSectionTabs");
const themePicker = document.getElementById("themePicker");

loadThemeBackgrounds();

document.getElementById("settingsBtn").addEventListener("click", () => {
  settingsOverlay.classList.add("open");
  switchSection("theme");
  syncThemeBgPanel();
  applyCardShadow();
  applyOverlaySettings();
  syncSecurityPanel();
  syncUpdatesPanel();
});
document.getElementById("settingsClose").addEventListener("click", () => settingsOverlay.classList.remove("open"));
settingsOverlay.addEventListener("click", (e) => { if (e.target === settingsOverlay) settingsOverlay.classList.remove("open"); });

function switchSection(sec) {
  document.querySelectorAll(".section-tab").forEach(b => b.classList.toggle("active", b.dataset.sec === sec));
  document.querySelectorAll(".settings-section").forEach(p => {
    p.style.display = p.getAttribute("data-section-panel") === sec ? "block" : "none";
  });
}
settingsSectionTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".section-tab");
  if (btn) switchSection(btn.dataset.sec);
});

/* ---------------------------------------------------
   Updates panel — see UPDATE_MANIFEST_URL above for how this is wired up.
--------------------------------------------------- */
function compareVersions(a, b) {
  const pa = String(a).split(".").map(n => parseInt(n, 10) || 0);
  const pb = String(b).split(".").map(n => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] || 0) - (pb[i] || 0);
    if (diff !== 0) return diff > 0 ? 1 : -1;
  }
  return 0;
}

function currentExtensionVersion() {
  try {
    if (chrome?.runtime?.getManifest) return chrome.runtime.getManifest().version;
  } catch (e) {}
  return "0.0.0";
}

function syncUpdatesPanel() {
  const el = document.getElementById("updateCurrentVersion");
  if (el) el.textContent = "v" + currentExtensionVersion();
  const result = document.getElementById("updateResult");
  if (result) result.style.display = "none";
}

async function checkForUpdates() {
  const btn = document.getElementById("checkUpdateBtn");
  const result = document.getElementById("updateResult");
  if (!result) return;
  if (btn) btn.disabled = true;
  result.className = "update-result";
  result.style.display = "block";
  result.textContent = T("updates_checking");
  try {
    const res = await fetch(UPDATE_MANIFEST_URL, { cache: "no-store" });
    if (!res.ok) throw new Error("bad response");
    const data = await res.json();
    const latest = (data && data.version) ? String(data.version) : null;
    if (!latest) throw new Error("no version field");
    const current = currentExtensionVersion();
    if (compareVersions(latest, current) > 0) {
      result.classList.add("is-newer");
      const notes = data.notes ? `<p class="update-note">${escapeHtml(data.notes)}</p>` : "";
      const url = data.downloadUrl || "";
      result.innerHTML = `<strong>${T("updates_new_available", [latest])}</strong>${notes}` +
        (url ? `<a class="update-download-link" href="${escapeHtml(url)}" target="_blank" rel="noopener">${T("updates_download_btn")}</a>` : "");
    } else {
      result.classList.add("is-latest");
      result.textContent = T("updates_up_to_date");
    }
  } catch (e) {
    result.classList.add("is-error");
    result.textContent = T("updates_check_failed");
  } finally {
    if (btn) btn.disabled = false;
  }
}

const checkUpdateBtn = document.getElementById("checkUpdateBtn");
if (checkUpdateBtn) checkUpdateBtn.addEventListener("click", checkForUpdates);

themePicker.addEventListener("click", (e) => {
  const btn = e.target.closest(".theme-option");
  if (!btn) return;
  state.theme = btn.dataset.theme;
  saveState();
  applyTheme();
});

const themeBgToggle = document.getElementById("themeBgToggle");
if (themeBgToggle) {
  themeBgToggle.addEventListener("change", (e) => {
    state.background.useImage = e.target.checked;
    saveState();
    applyBackground();
  });
}
const themeBgShuffle = document.getElementById("themeBgShuffle");
if (themeBgShuffle) themeBgShuffle.addEventListener("click", shuffleBackgroundImage);

const themeBgUploadBtn = document.getElementById("themeBgUploadBtn");
const themeBgUploadInput = document.getElementById("themeBgUploadInput");
if (themeBgUploadBtn && themeBgUploadInput) {
  themeBgUploadBtn.addEventListener("click", () => themeBgUploadInput.click());
  themeBgUploadInput.addEventListener("change", (e) => {
    handleBgUploadFiles(e.target.files);
    e.target.value = ""; // allow re-selecting the same file(s) later
  });
}

const themeBgUrlInput = document.getElementById("themeBgUrlInput");
const themeBgUrlApply = document.getElementById("themeBgUrlApply");
if (themeBgUrlApply && themeBgUrlInput) {
  const applyTypedUrl = () => {
    const url = themeBgUrlInput.value.trim();
    if (!url) return;
    selectBackgroundImage(url);
    themeBgUrlInput.value = "";
  };
  themeBgUrlApply.addEventListener("click", applyTypedUrl);
  themeBgUrlInput.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); applyTypedUrl(); } });
}

function wireCustomThemeInput(id, key) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("input", (e) => {
    state.customTheme[key] = e.target.value;
    saveState();
    if (effectiveTheme() === "custom") applyCustomTheme();
    syncCustomThemeEditor();
  });
}
wireCustomThemeInput("customInkColor", "ink");
wireCustomThemeInput("customInkContrastColor", "inkContrast");
wireCustomThemeInput("customMutedColor", "muted");
wireCustomThemeInput("customCardColor", "cardBg");
wireCustomThemeInput("customPageBgColor", "pageBg");
wireCustomThemeInput("customAccentColor", "accent");
wireCustomThemeInput("customAccent2Color", "accent2");
wireCustomThemeInput("customCityHighlightBg", "cityHighlightBg");
wireCustomThemeInput("customCityHighlightInk", "cityHighlightInk");

// Page-background color/accent changes also need applyBackground() (not just
// applyCustomTheme()) so bgLayer's fallback `var(--page-bg)` repaints live.
["customPageBgColor"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("input", () => { if (effectiveTheme() === "custom") applyBackground(); });
});

const customPageBgOpacityEl = document.getElementById("customPageBgOpacity");
if (customPageBgOpacityEl) {
  customPageBgOpacityEl.addEventListener("input", (e) => {
    state.customTheme.pageBgOpacity = Number(e.target.value);
    saveState();
    syncCustomThemeEditor();
    if (effectiveTheme() === "custom") { applyCustomTheme(); applyBackground(); }
  });
}

document.getElementById("fullBleedToggle").addEventListener("change", (e) => {
  state.fullBleed = e.target.checked;
  saveState();
  applyFullBleed();
});

const cardShadowToggle = document.getElementById("cardShadowToggle");
if (cardShadowToggle) {
  cardShadowToggle.addEventListener("change", (e) => {
    state.cardShadow = e.target.checked;
    saveState();
    applyCardShadow();
  });
}

const overlayToggle = document.getElementById("overlayToggle");
if (overlayToggle) {
  overlayToggle.addEventListener("change", (e) => {
    state.overlay.on = e.target.checked;
    saveState();
    applyBackground();
  });
}
const overlayOpacityRange = document.getElementById("overlayOpacityRange");
if (overlayOpacityRange) {
  overlayOpacityRange.addEventListener("input", (e) => {
    state.overlay.opacity = Number(e.target.value);
    const valueEl = document.getElementById("overlayOpacityValue");
    if (valueEl) valueEl.textContent = `${state.overlay.opacity}%`;
    saveState();
    applyBackground();
  });
}

/* ---------------------------------------------------
   Google search / omnibox-style bar
--------------------------------------------------- */
const citySearchInput = document.getElementById("citySearch");
const searchSuggestEl = document.getElementById("searchSuggest");

function goToSearch(raw) {
  raw = raw.trim();
  if (!raw) return;
  const looksLikeUrl = /^https?:\/\//i.test(raw) || (/^[a-z0-9.-]+\.[a-z]{2,}(\/.*)?$/i.test(raw) && !raw.includes(" "));
  window.location.href = looksLikeUrl
    ? (/^https?:\/\//i.test(raw) ? raw : `https://${raw}`)
    : `https://www.google.com/search?q=${encodeURIComponent(raw)}`;
}

document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  goToSearch(citySearchInput.value);
});

/* --- Live suggestions, like the real Google search box --- */
let suggestAbortCtrl = null;
let suggestDebounceTimer = null;
let suggestActiveIndex = -1;

function closeSuggestions() {
  searchSuggestEl.classList.remove("open");
  searchSuggestEl.innerHTML = "";
  suggestActiveIndex = -1;
}

function renderSuggestions(query, items) {
  searchSuggestEl.innerHTML = "";
  if (!items.length) { closeSuggestions(); return; }
  items.forEach((text) => {
    const row = document.createElement("div");
    row.className = "search-suggest-item";
    row.innerHTML = `
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
      </svg>
      <span></span>`;
    row.querySelector("span").textContent = text;
    row.addEventListener("mousedown", (e) => {
      // mousedown (not click) so it fires before the input's blur closes the list
      e.preventDefault();
      citySearchInput.value = text;
      goToSearch(text);
      closeSuggestions();
    });
    searchSuggestEl.appendChild(row);
  });
  searchSuggestEl.classList.add("open");
}

async function fetchSuggestions(query) {
  if (suggestAbortCtrl) suggestAbortCtrl.abort();
  suggestAbortCtrl = new AbortController();
  try {
    const res = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`,
      { signal: suggestAbortCtrl.signal }
    );
    if (!res.ok) throw new Error("suggest request failed");
    const data = await res.json();
    const items = Array.isArray(data) && Array.isArray(data[1]) ? data[1].slice(0, 8) : [];
    // Guard against a slow response landing after the input changed again.
    if (citySearchInput.value.trim() === query) renderSuggestions(query, items);
  } catch (err) {
    if (err.name !== "AbortError") closeSuggestions();
  }
}

citySearchInput.addEventListener("input", (e) => {
  const q = e.target.value.trim();
  clearTimeout(suggestDebounceTimer);
  if (!q) { closeSuggestions(); return; }
  suggestDebounceTimer = setTimeout(() => fetchSuggestions(q), 150);
});

citySearchInput.addEventListener("keydown", (e) => {
  const items = Array.from(searchSuggestEl.querySelectorAll(".search-suggest-item"));
  if (!items.length) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    suggestActiveIndex = Math.min(suggestActiveIndex + 1, items.length - 1);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    suggestActiveIndex = Math.max(suggestActiveIndex - 1, 0);
  } else if (e.key === "Escape") {
    closeSuggestions();
    return;
  } else return;
  items.forEach((it, i) => it.classList.toggle("active", i === suggestActiveIndex));
  const active = items[suggestActiveIndex];
  if (active) citySearchInput.value = active.querySelector("span").textContent;
});

citySearchInput.addEventListener("blur", () => setTimeout(closeSuggestions, 120));
document.addEventListener("click", (e) => { if (!document.getElementById("searchWrap").contains(e.target)) closeSuggestions(); });

/* --- Voice search (Web Speech API) --- */
const voiceSearchBtn = document.getElementById("voiceSearchButton");
const SpeechRecognitionCtor = window.SpeechRecognition || window.webkitSpeechRecognition;
let activeRecognition = null;

if (voiceSearchBtn) {
  voiceSearchBtn.addEventListener("click", () => {
    if (!SpeechRecognitionCtor) {
      alert(T("voice_search_unsupported"));
      return;
    }
    if (activeRecognition) { activeRecognition.stop(); return; }
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = (document.documentElement.getAttribute("lang") || "en") + (document.documentElement.getAttribute("lang") === "en" ? "-US" : "");
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    activeRecognition = recognition;
    voiceSearchBtn.classList.add("listening");
    citySearchInput.placeholder = T("voice_search_listening");

    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript || "";
      if (transcript) { citySearchInput.value = transcript; goToSearch(transcript); }
    };
    recognition.onerror = () => {};
    recognition.onend = () => {
      activeRecognition = null;
      voiceSearchBtn.classList.remove("listening");
      citySearchInput.placeholder = T("search_placeholder");
    };
    try { recognition.start(); } catch (e) { activeRecognition = null; voiceSearchBtn.classList.remove("listening"); }
  });
}

/* --- Lens ("search by image") --- opens Google Lens' upload page, the
   same destination the camera icon in Google's own search bar goes to. */
const lensSearchBtn = document.getElementById("lensSearchButton");
if (lensSearchBtn) {
  lensSearchBtn.addEventListener("click", () => {
    const url = "https://lens.google.com/upload";
    if (chrome?.tabs?.create) chrome.tabs.create({ url });
    else window.open(url, "_blank");
  });
}

/* ---------------------------------------------------
   Format toggle
--------------------------------------------------- */
document.getElementById("formatToggle").addEventListener("click", (e) => {
  const btn = e.target.closest(".toggle-btn");
  if (!btn) return;
  state.format = btn.dataset.format;
  saveState();
  renderStatic();
  tick();
});

/* ---------------------------------------------------
   Linked link-accounts (local — no real Google sign-in)
   A lightweight "account switcher" styled like Google's, but fully local:
   the person types just an email + a title for a group (e.g. "Work",
   "Client X"), then saves shortcuts under it — like a labeled folder of
   bookmarks. Everything lives in chrome.storage alongside the rest of
   TimeSpot's settings; nothing is sent anywhere.
--------------------------------------------------- */
const authArea = document.getElementById("authArea");
const signInBtn = document.getElementById("signInBtn");
const authDropdown = document.getElementById("authDropdown");

// view state for the dropdown: which "screen" it's showing right now
let acctView = { mode: "list" };      // "list" | "detail" | "addAccount" | "addLink"

function accountInitial(acc) {
  const src = (acc.title || acc.email || "?").trim();
  return src ? src[0].toUpperCase() : "?";
}
function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); }

function openAuthDropdown() {
  acctView = { mode: "list" };
  renderAuthDropdown();
  authDropdown.classList.add("open");
}
function closeAuthDropdown() { authDropdown.classList.remove("open"); }

signInBtn.addEventListener("click", () => {
  if (authDropdown.classList.contains("open")) closeAuthDropdown();
  else openAuthDropdown();
});
// Use composedPath() instead of e.target: several buttons inside the
// dropdown (Add account, Save, Back, etc.) re-render authDropdown's
// innerHTML from their own click handler, which runs first. That detaches
// the original e.target from the document by the time this listener
// fires, making authArea.contains(e.target) wrongly report "outside" and
// close the dropdown right after it was just opened. composedPath() is
// captured at dispatch time, before any of that DOM mutation happens.
document.addEventListener("click", (e) => { if (!e.composedPath().includes(authArea)) closeAuthDropdown(); });

function renderAuthDropdown() {
  if (acctView.mode === "addAccount") return renderAddAccountView();
  if (acctView.mode === "detail") return renderAccountDetailView();
  if (acctView.mode === "addLink") return renderAddAccountLinkView();
  renderAccountListView();
}

function renderAccountListView() {
  const accounts = state.linkAccounts || [];
  authDropdown.innerHTML = `
    <div class="acct-dd-title">${T("accounts_title")}</div>
    <div class="acct-list" id="acctList">
      ${accounts.length ? "" : `<p class="acct-empty">${T("no_accounts_yet")}</p>`}
    </div>
    <hr/>
    <button class="dropdown-item" id="addAccountBtn">${T("add_account_btn")}</button>
  `;
  const listEl = authDropdown.querySelector("#acctList");
  accounts.forEach((acc) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "acct-row";
    row.innerHTML = `
      <span class="acct-avatar">${escapeHtml(accountInitial(acc))}</span>
      <span class="acct-text">
        <span class="acct-name">${escapeHtml(acc.title || acc.email)}</span>
        <span class="acct-email">${escapeHtml(acc.email)}</span>
      </span>
      <span class="acct-count">${(acc.links || []).length}</span>`;
    row.addEventListener("click", () => {
      // A single-link entry (the normal case now that adding a link is a
      // one-step form) opens straight to its URL, same as a favorite
      // link tile would — no need to detour through a detail screen just
      // to see one row and click it again. Anything with 0 or 2+ links
      // (older multi-link accounts, or ones grown via "+ Add a link")
      // still opens the detail list, since there isn't one obvious link
      // to jump to.
      const links = acc.links || [];
      if (links.length === 1) {
        closeAuthDropdown();
        if (chrome?.tabs?.create) chrome.tabs.create({ url: links[0].url });
        else window.open(links[0].url, "_blank");
        return;
      }
      acctView = { mode: "detail", accountId: acc.id };
      renderAuthDropdown();
    });
    listEl.appendChild(row);
  });
  authDropdown.querySelector("#addAccountBtn").addEventListener("click", () => {
    acctView = { mode: "addAccount" };
    renderAuthDropdown();
  });
}

function renderAddAccountView() {
  authDropdown.innerHTML = `
    <button class="acct-back" id="acctBack" type="button">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
      ${T("accounts_title")}
    </button>
    <label class="field-label">${T("field_name")}</label>
    <input id="acctNameInput" type="text" placeholder="${T("link_name_placeholder")}" autocomplete="off" />
    <label class="field-label" style="margin-top:8px;">${T("field_url")}</label>
    <input id="acctUrlInput" type="text" placeholder="${T("link_url_placeholder")}" autocomplete="off" />
    <label class="field-label" style="margin-top:8px;">${T("field_email")} <span class="acct-optional">(${T("field_title_optional")})</span></label>
    <input id="acctEmailInput" type="text" placeholder="${T("account_email_placeholder")}" autocomplete="off" />
    <p class="acct-error" id="acctError" style="display:none;">${T("acct_url_required_msg")}</p>
    <button class="pill-btn full-width" id="acctSaveBtn" style="margin-top:10px;">${T("save_link_btn")}</button>
  `;
  authDropdown.querySelector("#acctBack").addEventListener("click", () => { acctView = { mode: "list" }; renderAuthDropdown(); });
  const nameInput = authDropdown.querySelector("#acctNameInput");
  const urlInput = authDropdown.querySelector("#acctUrlInput");
  const emailInput = authDropdown.querySelector("#acctEmailInput");
  setTimeout(() => nameInput.focus(), 30);
  authDropdown.querySelector("#acctSaveBtn").addEventListener("click", () => {
    let url = urlInput.value.trim();
    let name = nameInput.value.trim();
    const email = emailInput.value.trim();
    // URL is the one truly required field — everything here exists to
    // produce a clickable link. Name and email are conveniences: name
    // falls back to the URL's hostname, and email is optional since not
    // every link is tied to an account.
    if (!url) {
      authDropdown.querySelector("#acctError").style.display = "block";
      return;
    }
    if (email && !isValidEmail(email)) {
      authDropdown.querySelector("#acctError").textContent = T("invalid_email_msg");
      authDropdown.querySelector("#acctError").style.display = "block";
      return;
    }
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    if (!name) { try { name = new URL(url).hostname.replace(/^www\./, ""); } catch (e) { name = url; } }
    if (!Array.isArray(state.linkAccounts)) state.linkAccounts = [];
    const acc = { id: uid(), email, title: name, links: [{ name, url }] };
    state.linkAccounts.push(acc);
    saveState();
    acctView = { mode: "list" };
    closeAuthDropdown();
  });
}

function renderAccountDetailView() {
  const acc = (state.linkAccounts || []).find(a => a.id === acctView.accountId);
  if (!acc) { acctView = { mode: "list" }; return renderAuthDropdown(); }
  authDropdown.innerHTML = `
    <button class="acct-back" id="acctBack" type="button">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
      ${T("accounts_title")}
    </button>
    <div class="acct-detail-head">
      <span class="acct-avatar">${escapeHtml(accountInitial(acc))}</span>
      <span class="acct-text">
        <span class="acct-name">${escapeHtml(acc.title)}</span>
        <span class="acct-email">${escapeHtml(acc.email)}</span>
      </span>
    </div>
    <div class="acct-link-list" id="acctLinkList">
      ${(acc.links || []).length ? "" : `<p class="acct-empty">${T("account_links_empty")}</p>`}
    </div>
    <button class="dropdown-item" id="acctAddLinkBtn">${T("add_account_link_btn")}</button>
    <hr/>
    <button class="dropdown-item danger" id="acctRemoveBtn">${T("remove_account_btn")}</button>
  `;
  authDropdown.querySelector("#acctBack").addEventListener("click", () => { acctView = { mode: "list" }; renderAuthDropdown(); });
  const linkListEl = authDropdown.querySelector("#acctLinkList");
  (acc.links || []).forEach((lnk, idx) => {
    const row = document.createElement("div");
    row.className = "acct-link-row";
    row.innerHTML = `
      <img class="fav-ico" src="${faviconFor(lnk.url)}" alt="" onerror="this.style.visibility='hidden'" />
      <span class="acct-link-name">${escapeHtml(lnk.name)}</span>
      <button type="button" class="acct-link-remove" title="${T("remove_title")}">&times;</button>`;
    row.querySelector(".acct-link-name").parentElement.addEventListener("click", (e) => {
      if (e.target.closest(".acct-link-remove")) return;
      if (chrome?.tabs?.create) chrome.tabs.create({ url: lnk.url });
      else window.open(lnk.url, "_blank");
    });
    row.querySelector(".acct-link-remove").addEventListener("click", (e) => {
      e.stopPropagation();
      acc.links.splice(idx, 1);
      saveState();
      renderAccountDetailView();
    });
    linkListEl.appendChild(row);
  });
  authDropdown.querySelector("#acctAddLinkBtn").addEventListener("click", () => {
    acctView = { mode: "addLink", accountId: acc.id };
    renderAuthDropdown();
  });
  authDropdown.querySelector("#acctRemoveBtn").addEventListener("click", () => {
    state.linkAccounts = state.linkAccounts.filter(a => a.id !== acc.id);
    saveState();
    acctView = { mode: "list" };
    renderAuthDropdown();
  });
}

function renderAddAccountLinkView() {
  const acc = (state.linkAccounts || []).find(a => a.id === acctView.accountId);
  if (!acc) { acctView = { mode: "list" }; return renderAuthDropdown(); }
  authDropdown.innerHTML = `
    <button class="acct-back" id="acctBack" type="button">
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>
      ${escapeHtml(acc.title)}
    </button>
    <label class="field-label">${T("field_name")}</label>
    <input id="acctLinkNameInput" type="text" placeholder="${T("link_name_placeholder")}" autocomplete="off" />
    <label class="field-label" style="margin-top:8px;">${T("field_url")}</label>
    <input id="acctLinkUrlInput" type="text" placeholder="${T("link_url_placeholder")}" autocomplete="off" />
    <button class="pill-btn full-width" id="acctLinkSaveBtn" style="margin-top:10px;">${T("save_link_btn")}</button>
  `;
  authDropdown.querySelector("#acctBack").addEventListener("click", () => { acctView = { mode: "detail", accountId: acc.id }; renderAuthDropdown(); });
  const nameInput = authDropdown.querySelector("#acctLinkNameInput");
  const urlInput = authDropdown.querySelector("#acctLinkUrlInput");
  setTimeout(() => nameInput.focus(), 30);
  authDropdown.querySelector("#acctLinkSaveBtn").addEventListener("click", () => {
    let url = urlInput.value.trim();
    let name = nameInput.value.trim();
    if (!url) return;
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    if (!name) { try { name = new URL(url).hostname.replace(/^www\./, ""); } catch (e) { name = url; } }
    if (!Array.isArray(acc.links)) acc.links = [];
    acc.links.push({ name, url });
    saveState();
    acctView = { mode: "detail", accountId: acc.id };
    renderAuthDropdown();
  });
}

/* ---------------------------------------------------
   Session intro + password lock
   - The cinematic "Welcome back" text plays once per browser session
     (first tab after Chrome launches), same as before.
   - If password protection is on (Settings → Security), every tab is
     gated behind a password prompt until the right one is entered —
     then it stays unlocked for the rest of that browser session.
   Session-only flags (cleared automatically when the browser closes) are
   kept in chrome.storage.session, falling back to sessionStorage.
--------------------------------------------------- */
const welcomeOverlay = document.getElementById("welcomeOverlay");
const welcomeText = document.getElementById("welcomeText");
const welcomeDots = document.getElementById("welcomeDots");
const welcomeLock = document.getElementById("welcomeLock");
const welcomeLockForm = document.getElementById("welcomeLockForm");
const welcomeLockInput = document.getElementById("welcomeLockInput");
const welcomeLockError = document.getElementById("welcomeLockError");
const welcomeLockLabel = document.getElementById("welcomeLockLabel");
const welcomeLockClock = document.getElementById("welcomeLockClock");
const welcomeLockDate = document.getElementById("welcomeLockDate");
const welcomeLockEye = document.getElementById("welcomeLockEye");
const lockCard = document.getElementById("lockCard");
let welcomeLockClockTimer = null;

if (welcomeLockEye && welcomeLockInput) {
  welcomeLockEye.addEventListener("click", () => {
    const showing = welcomeLockInput.type === "text";
    welcomeLockInput.type = showing ? "password" : "text";
    welcomeLockEye.title = showing ? T("lock_show_password") : T("lock_hide_password");
    welcomeLockEye.setAttribute("aria-label", welcomeLockEye.title);
    welcomeLockEye.classList.toggle("is-showing", !showing);
    welcomeLockInput.focus();
  });
}

// A fresh gradient is picked every time the intro/lock screen is actually
// shown, instead of a flat black background.
const INTRO_GRADIENTS = [
  "linear-gradient(160deg, #0f2027 0%, #203a43 55%, #2c5364 100%)",
  "linear-gradient(160deg, #232526 0%, #414345 100%)",
  "linear-gradient(160deg, #16222a 0%, #3a6073 100%)",
  "linear-gradient(160deg, #2b5876 0%, #4e4376 100%)",
  "linear-gradient(160deg, #0f0c29 0%, #302b63 55%, #24243e 100%)",
  "linear-gradient(160deg, #200122 0%, #6f0000 100%)",
  "linear-gradient(160deg, #000428 0%, #004e92 100%)",
  "linear-gradient(160deg, #360033 0%, #0b8793 100%)",
  "linear-gradient(160deg, #1a2980 0%, #26d0ce 100%)",
  "linear-gradient(160deg, #3a1c71 0%, #d76d77 55%, #ffaf7b 100%)"
];
function pickIntroGradient() {
  return INTRO_GRADIENTS[Math.floor(Math.random() * INTRO_GRADIENTS.length)];
}

function greetingWord() {
  const h = new Date().getHours();
  if (h < 5) return T("greeting_welcome_back");
  if (h < 12) return T("greeting_good_morning");
  if (h < 18) return T("greeting_good_afternoon");
  return T("greeting_good_evening");
}
function setWelcomeText() {
  let msg = greetingWord();
  welcomeText.textContent = msg;
}
// Reveals the overlay with a fresh gradient. Only ever called right before
// we actually intend to show something, so tabs that shouldn't show
// anything never render it, even for an instant.
function revealOverlay() {
  welcomeOverlay.style.background = pickIntroGradient();
  welcomeOverlay.style.display = "flex";
  welcomeOverlay.classList.remove("hide");
  document.body.classList.add("overlay-active");
}
function hideWelcomeOverlay(animate) {
  if (welcomeLockClockTimer) { clearInterval(welcomeLockClockTimer); welcomeLockClockTimer = null; }
  document.body.classList.remove("overlay-active");
  if (!animate) {
    welcomeOverlay.style.transition = "none";
    welcomeOverlay.classList.add("hide");
    setTimeout(() => { welcomeOverlay.style.display = "none"; welcomeOverlay.classList.remove("ambient-lock-bg"); }, 30);
    return;
  }
  welcomeOverlay.classList.add("hide");
  setTimeout(() => { welcomeOverlay.style.display = "none"; welcomeOverlay.classList.remove("ambient-lock-bg"); }, 650);
}

// This same newtab.html is used both as an ordinary new tab AND, while
// locked, as the content of the borderless lock popup (see background.js).
// If we just called hideWelcomeOverlay() unconditionally after a correct
// password, the popup would briefly reveal the *entire dashboard* inside
// that small popup window before background.js closed it a moment later —
// reading as "two popups" flashing by. When this page is running as that
// popup, we instead close the window itself immediately; background.js's
// storage listener is what brings the real browser windows back.
let cachedIsLockPopup = null;
function isThisWindowTheLockPopup(cb) {
  if (cachedIsLockPopup !== null) return cb(cachedIsLockPopup);
  if (!chrome?.windows?.getCurrent) return cb(false);
  try {
    chrome.windows.getCurrent((win) => {
      cachedIsLockPopup = !!(win && win.type === "popup");
      cb(cachedIsLockPopup);
    });
  } catch (e) { cb(false); }
}
function closeLockPopupOrHideOverlay(animate) {
  isThisWindowTheLockPopup((isPopup) => {
    if (isPopup) { try { window.close(); } catch (e) {} return; }
    hideWelcomeOverlay(animate);
  });
}

function getSessionFlags(cb) {
  try {
    if (chrome?.storage?.session) {
      chrome.storage.session.get(["welcomeShownThisSession", "unlockedThisSession"], (res) => cb(res || {}));
      return;
    }
  } catch (e) {}
  cb({
    welcomeShownThisSession: sessionStorage.getItem("welcomeShownThisSession") === "1",
    unlockedThisSession: sessionStorage.getItem("unlockedThisSession") === "1"
  });
}
function markSessionFlag(key, val) {
  try {
    if (chrome?.storage?.session) { chrome.storage.session.set({ [key]: val }); return; }
  } catch (e) {}
  try { sessionStorage.setItem(key, val ? "1" : "0"); } catch (e) {}
}

function updateWelcomeLockClock() {
  const now = new Date();
  welcomeLockClock.textContent = formatShortClock(now, localTZ, state.format);
  welcomeLockDate.textContent = now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" });
}

// Shows the lock form. `withIntro` plays the greeting name/time briefly
// first (first tab of the session); otherwise the lock appears right
// away, since it may reappear on every tab until unlocked.
function showLockScreen(withIntro) {
  revealOverlay();
  welcomeOverlay.style.background = "";
  welcomeOverlay.classList.add("ambient-lock-bg");
  welcomeDots.style.display = "none";
  welcomeText.style.display = "none";
  document.getElementById("welcomeSub").style.display = "none";
  welcomeLock.style.display = "flex";
  if (lockCard) lockCard.style.display = "";
  welcomeLockLabel.textContent = T("lock_enter_password");
  welcomeLockError.style.display = "none";

  updateWelcomeLockClock();
  welcomeLockClockTimer = setInterval(updateWelcomeLockClock, 1000);

  setTimeout(() => welcomeLockInput.focus(), withIntro ? 400 : 100);
}

// No password set — still uses the same dark "lock screen" look (ambient
// background + big clock/date) instead of the old plain gradient splash,
// just without the password card, and auto-dismisses after a beat.
function showIntroScreen() {
  revealOverlay();
  welcomeOverlay.style.background = "";
  welcomeOverlay.classList.add("ambient-lock-bg");
  setWelcomeText();
  welcomeText.style.display = "";
  document.getElementById("welcomeSub").style.display = "none";
  welcomeDots.style.display = "none";
  welcomeLock.style.display = "flex";
  if (lockCard) lockCard.style.display = "none";

  updateWelcomeLockClock();
  welcomeLockClockTimer = setInterval(updateWelcomeLockClock, 1000);

  setTimeout(() => hideWelcomeOverlay(true), 1900);
}

if (welcomeLockForm) {
  welcomeLockForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const val = welcomeLockInput.value;
    const ok = await verifyPassword(val);
    if (ok) {
      markSessionFlag("unlockedThisSession", true);
      closeLockPopupOrHideOverlay(true);
    } else {
      welcomeLockError.style.display = "block";
      welcomeLockError.style.animation = "none";
      // restart the shake animation
      void welcomeLockError.offsetWidth;
      welcomeLockError.style.animation = "";
      welcomeLockInput.value = "";
      welcomeLockInput.focus();
    }
  });
}

// If TimeSpot was unlocked from somewhere else entirely — the borderless
// lock popup, or another tab — this tab may already have rendered the lock
// screen before that happened, and nothing would otherwise tell it the
// password was just entered. Listen for that flag directly so every tab
// still showing the lock screen dismisses itself immediately, instead of
// only new tabs opened afterward.
try {
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "session" || !changes.unlockedThisSession || !changes.unlockedThisSession.newValue) return;
    if (welcomeLock && welcomeLock.style.display !== "none") closeLockPopupOrHideOverlay(true);
  });
} catch (e) {}

function initGate() {
  const passwordOn = !!(state.security && state.security.passwordEnabled && state.security.passwordHash);

  getSessionFlags((flags) => {
    const alreadyGreeted = !!flags.welcomeShownThisSession;
    const alreadyUnlocked = !!flags.unlockedThisSession;

    if (passwordOn && !alreadyUnlocked) {
      showLockScreen(!alreadyGreeted);
      markSessionFlag("welcomeShownThisSession", true);
      return;
    }

    if (!passwordOn) {
      if (alreadyGreeted) return; // never shown — no flash, nothing to hide
      showIntroScreen();
      markSessionFlag("welcomeShownThisSession", true);
      return;
    }

    // Password required but already unlocked this session — nothing to show.
  });
}

/* ---------------------------------------------------
   Password protection (Settings → Security)
   The password itself is never stored — only a salted SHA-256 hash — but
   this is still a client-side UI gate, not real security: anyone with
   access to this browser's local extension storage can read or clear it.
--------------------------------------------------- */
async function sha256Hex(text) {
  const bytes = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, "0")).join("");
}
function randomSalt() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16))).map(b => b.toString(16).padStart(2, "0")).join("");
}
async function setPassword(pw) {
  const salt = randomSalt();
  const hash = await sha256Hex(salt + pw);
  state.security.salt = salt;
  state.security.passwordHash = hash;
  state.security.passwordEnabled = true;
  saveState();
}
async function verifyPassword(pw) {
  if (!state.security || !state.security.passwordHash) return true;
  const salt = state.security.salt || "";
  const hash = await sha256Hex(salt + pw);
  return hash === state.security.passwordHash;
}
function disablePassword() {
  state.security.passwordEnabled = false;
  state.security.passwordHash = "";
  state.security.salt = "";
  saveState();
}

function syncSecurityPanel() {
  const hasPw = !!(state.security && state.security.passwordHash);
  const toggle = document.getElementById("passwordToggle");
  if (toggle) toggle.checked = !!(state.security && state.security.passwordEnabled && hasPw);
  const manage = document.getElementById("passwordManage");
  if (manage) manage.style.display = hasPw ? "flex" : "none";
  const setup = document.getElementById("passwordSetup");
  if (setup) setup.style.display = "none";
  const msg = document.getElementById("passwordSetupMsg");
  if (msg) msg.style.display = "none";
}

const passwordToggle = document.getElementById("passwordToggle");
if (passwordToggle) {
  passwordToggle.addEventListener("change", (e) => {
    const hasPw = !!(state.security && state.security.passwordHash);
    if (e.target.checked) {
      if (hasPw) {
        state.security.passwordEnabled = true;
        saveState();
      } else {
        e.target.checked = false; // stays off until a password is actually saved
        document.getElementById("passwordSetup").style.display = "flex";
        document.getElementById("newPasswordInput").focus();
      }
    } else {
      state.security.passwordEnabled = false;
      saveState();
    }
  });
}
const changePasswordBtn = document.getElementById("changePasswordBtn");
if (changePasswordBtn) {
  changePasswordBtn.addEventListener("click", () => {
    document.getElementById("passwordSetup").style.display = "flex";
    document.getElementById("newPasswordInput").focus();
  });
}
const removePasswordBtn = document.getElementById("removePasswordBtn");
if (removePasswordBtn) {
  removePasswordBtn.addEventListener("click", () => {
    if (!confirm(T("confirm_remove_password"))) return;
    disablePassword();
    syncSecurityPanel();
  });
}
const savePasswordBtn = document.getElementById("savePasswordBtn");
if (savePasswordBtn) {
  savePasswordBtn.addEventListener("click", async () => {
    const pwEl = document.getElementById("newPasswordInput");
    const confirmEl = document.getElementById("confirmPasswordInput");
    const msg = document.getElementById("passwordSetupMsg");
    const showMsg = (text) => { if (msg) { msg.textContent = text; msg.style.display = "block"; } };
    const pw = pwEl.value, confirmPw = confirmEl.value;
    if (!pw || pw.length < 4) { showMsg(T("use_at_least_4_chars")); return; }
    if (pw !== confirmPw) { showMsg(T("passwords_dont_match")); return; }
    await setPassword(pw);
    markSessionFlag("unlockedThisSession", true);
    pwEl.value = ""; confirmEl.value = "";
    document.getElementById("passwordSetup").style.display = "none";
    syncSecurityPanel();
  });
}

/* ---------------------------------------------------
   Sidebar: Tasks / Notes / Alerts
--------------------------------------------------- */
const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");

function switchSidebarTab(tabName) {
  document.querySelectorAll(".sys-tab").forEach(t => t.classList.toggle("active", t.dataset.systab === tabName));
  document.querySelectorAll(".sys-panel").forEach(p => {
    p.style.display = p.getAttribute("data-syspanel") === tabName ? "flex" : "none";
  });
}

function openSidebar(tabName) {
  if (tabName) switchSidebarTab(tabName);
  sidebar.classList.add("open");
  sidebarBackdrop.classList.add("open");
}
function closeSidebar() {
  sidebar.classList.remove("open");
  sidebarBackdrop.classList.remove("open");
}

document.getElementById("notesBtn").addEventListener("click", () => openSidebar("tasks"));
document.getElementById("alertsBtn").addEventListener("click", () => openSidebar("alerts"));
document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
sidebarBackdrop.addEventListener("click", closeSidebar);

/* Sidebar sub-tabs (Tasks / Notes / Alerts) */
document.querySelectorAll(".sys-tab").forEach(tab => {
  tab.addEventListener("click", () => switchSidebarTab(tab.dataset.systab));
});

/* ---------------------------------------------------
   Notes & Alerts summary (removed from dashboard) — kept as a no-op
   so the many renderSummary() call sites elsewhere stay harmless.
--------------------------------------------------- */
function renderSummary() {}

/* ---------------------------------------------------
   Layout edit mode: drag-and-drop reorder of dashboard sections
--------------------------------------------------- */
const layoutGrid = document.getElementById("layoutGrid");
const layoutEditBtn = document.getElementById("layoutEditBtn");
let editModeOn = false;

function sectionEls() {
  return Array.from(layoutGrid.querySelectorAll(":scope > .dash-section"));
}

function applySectionOrder() {
  const order = state.sectionOrder;
  if (!order || !order.length) return;
  order.forEach(id => {
    const el = layoutGrid.querySelector(`.dash-section[data-section="${id}"]`);
    if (el) layoutGrid.appendChild(el);
  });
}

function saveSectionOrder() {
  state.sectionOrder = sectionEls().map(el => el.dataset.section);
  saveState();
}

function setEditMode(on) {
  editModeOn = on;
  layoutGrid.classList.toggle("edit-mode", on);
  layoutEditBtn.classList.toggle("active", on);
  sectionEls().forEach(el => { el.draggable = on; });
}

layoutEditBtn.addEventListener("click", () => setEditMode(!editModeOn));

let dragSrcEl = null;
layoutGrid.addEventListener("dragstart", (e) => {
  const el = e.target.closest(".dash-section");
  if (!el || !editModeOn) return;
  dragSrcEl = el;
  el.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
});
layoutGrid.addEventListener("dragend", (e) => {
  const el = e.target.closest(".dash-section");
  if (el) el.classList.remove("dragging");
  sectionEls().forEach(s => s.classList.remove("drag-over"));
  if (dragSrcEl) saveSectionOrder();
  dragSrcEl = null;
});
layoutGrid.addEventListener("dragover", (e) => {
  if (!editModeOn || !dragSrcEl) return;
  e.preventDefault();
  const over = e.target.closest(".dash-section");
  if (!over || over === dragSrcEl) return;
  sectionEls().forEach(s => s.classList.toggle("drag-over", s === over));
  const rect = over.getBoundingClientRect();
  const before = (e.clientY - rect.top) < rect.height / 2;
  layoutGrid.insertBefore(dragSrcEl, before ? over : over.nextSibling);
});

/* ---------------------------------------------------
   Tasks
--------------------------------------------------- */
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const taskTagFilter = document.getElementById("taskTagFilter");
const tagManagerToggle = document.getElementById("tagManagerToggle");
const tagManagerBody = document.getElementById("tagManagerBody");
const tagEditList = document.getElementById("tagEditList");

function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function findTag(id) {
  return state.taskTags.find(t => t.id === id) || state.taskTags[0];
}

function formatElapsed(ms) {
  const mins = Math.max(0, Math.round(ms / 60000));
  if (mins < 1) return T("just_now");
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60), remMins = mins % 60;
  if (hrs < 24) return remMins ? `${hrs}h ${remMins}m` : `${hrs}h`;
  const days = Math.floor(hrs / 24), remHrs = hrs % 24;
  return remHrs ? `${days}d ${remHrs}h` : `${days}d`;
}

let openTagDropdownFor = null;
let openHistoryFor = null;

function renderTagFilter() {
  taskTagFilter.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.className = "filter-pill" + (state.taskFilter === null ? " active" : "");
  allBtn.textContent = T("filter_all");
  allBtn.addEventListener("click", () => { state.taskFilter = null; saveState(); renderTasks(); });
  taskTagFilter.appendChild(allBtn);

  state.taskTags.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = "filter-pill" + (state.taskFilter === tag.id ? " active" : "");
    btn.innerHTML = `<span class="dot" style="background:${tag.color}"></span>${escapeHtml(tag.name)}`;
    btn.addEventListener("click", () => { state.taskFilter = tag.id; saveState(); renderTasks(); });
    taskTagFilter.appendChild(btn);
  });
}

function renderTasks() {
  renderTagFilter();
  taskList.innerHTML = "";
  const visible = state.tasks.filter(t => state.taskFilter === null || t.tagId === state.taskFilter);
  if (!visible.length) {
    taskList.innerHTML = `<div class="task-empty">${state.tasks.length ? T("no_tasks_with_tag") : T("no_tasks_yet")}</div>`;
    return;
  }
  visible.forEach(task => {
    const tag = findTag(task.tagId);
    const row = document.createElement("div");
    row.className = "task-item" + (tag.isDone ? " tag-done" : "");

    const stageAt = task.history[task.history.length - 1].at;
    const elapsedLabel = `${tag.name} · ${formatElapsed(Date.now() - stageAt)}`;

    row.innerHTML = `
      <div class="task-row">
        <button type="button" class="task-tag-pill" style="background:${tag.color}">${escapeHtml(tag.name)}</button>
        <span class="task-text">${escapeHtml(task.text)}</span>
        <button class="task-remove" title="${T("remove_title")}">&times;</button>
      </div>
      <button type="button" class="task-history-toggle">
        <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        ${elapsedLabel}
      </button>`;

    const tagPill = row.querySelector(".task-tag-pill");
    tagPill.addEventListener("click", (e) => {
      e.stopPropagation();
      if (openTagDropdownFor === task.id) { openTagDropdownFor = null; renderTasks(); return; }
      openTagDropdownFor = task.id;
      renderTasks();
    });
    if (openTagDropdownFor === task.id) {
      const dropdown = document.createElement("div");
      dropdown.className = "task-tag-select";
      state.taskTags.forEach(t => {
        const opt = document.createElement("button");
        opt.type = "button";
        opt.innerHTML = `<span class="dot" style="background:${t.color}"></span>${escapeHtml(t.name)}`;
        opt.addEventListener("click", () => {
          if (task.tagId !== t.id) {
            task.tagId = t.id;
            task.history.push({ tagId: t.id, at: Date.now() });
            saveState();
            renderSummary();
          }
          openTagDropdownFor = null;
          renderTasks();
        });
        dropdown.appendChild(opt);
      });
      tagPill.appendChild(dropdown);
    }

    row.querySelector(".task-remove").addEventListener("click", () => {
      state.tasks = state.tasks.filter(t => t.id !== task.id);
      saveState();
      renderTasks();
      renderSummary();
    });

    const historyToggle = row.querySelector(".task-history-toggle");
    historyToggle.addEventListener("click", () => {
      openHistoryFor = openHistoryFor === task.id ? null : task.id;
      renderTasks();
    });
    if (openHistoryFor === task.id) {
      const hist = document.createElement("div");
      hist.className = "task-history";
      hist.innerHTML = task.history.map(h => {
        const d = new Date(h.at);
        return `<span>${escapeHtml(findTag(h.tagId).name)} — ${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>`;
      }).join("");
      row.appendChild(hist);
    }

    taskList.appendChild(row);
  });
}

document.getElementById("taskAddForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (!text) return;
  const defaultTag = state.taskTags.find(t => !t.isDone) || state.taskTags[0];
  const now = Date.now();
  state.tasks.push({ id: uid(), text, tagId: defaultTag.id, createdAt: now, history: [{ tagId: defaultTag.id, at: now }] });
  taskInput.value = "";
  saveState();
  renderTasks();
  renderSummary();
});

/* Tag manager: rename, recolor, add, delete status tags */
function renderTagManager() {
  tagEditList.innerHTML = "";
  state.taskTags.forEach(tag => {
    const row = document.createElement("div");
    row.className = "tag-edit-row";
    row.innerHTML = `
      <input type="color" value="${tag.color}" />
      <input type="text" value="${escapeHtml(tag.name)}" />
      <button type="button" class="tag-remove" title="${T("delete_tag_title")}">&times;</button>`;
    row.querySelector('input[type="color"]').addEventListener("input", (e) => {
      tag.color = e.target.value;
      saveState();
      renderTasks();
      renderSummary();
    });
    row.querySelector('input[type="text"]').addEventListener("change", (e) => {
      const val = e.target.value.trim();
      if (val) { tag.name = val; saveState(); renderTasks(); renderSummary(); }
    });
    row.querySelector(".tag-remove").addEventListener("click", () => {
      if (state.taskTags.length <= 1) return;
      const fallback = state.taskTags.find(t => t.id !== tag.id);
      state.tasks.forEach(t => { if (t.tagId === tag.id) t.tagId = fallback.id; });
      state.taskTags = state.taskTags.filter(t => t.id !== tag.id);
      if (state.taskFilter === tag.id) state.taskFilter = null;
      saveState();
      renderTagManager();
      renderTasks();
      renderSummary();
    });
    tagEditList.appendChild(row);
  });
}

tagManagerToggle.addEventListener("click", () => {
  const isOpen = tagManagerBody.style.display !== "none";
  tagManagerBody.style.display = isOpen ? "none" : "block";
  tagManagerToggle.classList.toggle("open", !isOpen);
  if (!isOpen) renderTagManager();
});

document.getElementById("tagAddForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("newTagName");
  const colorInput = document.getElementById("newTagColor");
  const name = nameInput.value.trim();
  if (!name) return;
  state.taskTags.push({ id: uid(), name, color: colorInput.value, isDone: false });
  nameInput.value = "";
  saveState();
  renderTagManager();
  renderTagFilter();
  renderTasks();
});

/* ---------------------------------------------------
   Notes (multiple, each with its own title + text)
--------------------------------------------------- */
const notesListEl = document.getElementById("notesListEl");
const noteSaveTimers = {};

function renderNotes() {
  notesListEl.innerHTML = "";
  if (!state.notesList.length) {
    notesListEl.innerHTML = `<div class="notes-empty">${T("notes_empty")}</div>`;
    return;
  }
  state.notesList
    .slice()
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .forEach(note => {
      const card = document.createElement("div");
      const collapsed = !!note.collapsed;
      card.className = "note-card" + (collapsed ? " collapsed" : "");
      const d = new Date(note.updatedAt);
      const previewText = (note.text || "").replace(/\s+/g, " ").trim();
      card.innerHTML = `
        <div class="note-card-head">
          <button type="button" class="note-toggle${collapsed ? "" : " open"}" title="${collapsed ? T("note_expand") : T("note_collapse")}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <input class="note-title-input" type="text" value="${escapeHtml(note.title)}" placeholder="${T("note_title_placeholder")}" />
          <button class="note-remove" title="${T("delete_note_title")}">&times;</button>
        </div>
        <div class="note-preview">${escapeHtml(previewText) || T("no_content")}</div>
        <textarea class="note-body" placeholder="${T("write_here_placeholder")}">${escapeHtml(note.text)}</textarea>
        <div class="note-meta">${T("note_updated", [d.toLocaleDateString(uiLocale), d.toLocaleTimeString(uiLocale, { hour: "2-digit", minute: "2-digit" })])}</div>`;

      const saveNote = () => {
        clearTimeout(noteSaveTimers[note.id]);
        noteSaveTimers[note.id] = setTimeout(() => {
          note.updatedAt = Date.now();
          saveState();
          renderSummary();
        }, 400);
      };
      card.querySelector(".note-title-input").addEventListener("input", (e) => { note.title = e.target.value; saveNote(); });
      card.querySelector(".note-body").addEventListener("input", (e) => {
        note.text = e.target.value;
        const preview = card.querySelector(".note-preview");
        if (preview) preview.textContent = e.target.value.replace(/\s+/g, " ").trim() || T("no_content");
        saveNote();
      });
      card.querySelector(".note-remove").addEventListener("click", (e) => {
        e.stopPropagation();
        state.notesList = state.notesList.filter(n => n.id !== note.id);
        saveState();
        renderNotes();
        renderSummary();
      });
      card.querySelector(".note-toggle").addEventListener("click", () => {
        note.collapsed = !note.collapsed;
        saveState();
        renderNotes();
      });
      if (!collapsed) setTimeout(() => card.querySelector(".note-body")?.focus(), 0);
      notesListEl.appendChild(card);
    });
}

document.getElementById("addNoteBtn").addEventListener("click", () => {
  state.notesList.unshift({ id: uid(), title: `Note ${state.notesList.length + 1}`, text: "", updatedAt: Date.now(), collapsed: false });
  saveState();
  renderNotes();
  renderSummary();
});

/* ---------------------------------------------------
   Alerts
--------------------------------------------------- */
const alertList = document.getElementById("alertList");
const alertModeTabs = document.getElementById("alertModeTabs");
const alertClockForm = document.getElementById("alertClockForm");
const alertCountdownForm = document.getElementById("alertCountdownForm");
const countdownPresets = document.getElementById("countdownPresets");
const countdownCustomInput = document.getElementById("countdownCustomInput");
const alertTimeInput = document.getElementById("alertTimeInput");

let selectedPresetMin = null;

/* Open the native time picker as soon as the field is clicked/focused,
   instead of requiring a click on the tiny clock icon. */
function openTimePicker() {
  if (alertTimeInput.showPicker) {
    try { alertTimeInput.showPicker(); } catch (e) { /* no-op */ }
  }
}
alertTimeInput.addEventListener("click", openTimePicker);
alertTimeInput.addEventListener("focus", openTimePicker);

alertModeTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".alert-mode-tab");
  if (!btn) return;
  const mode = btn.dataset.mode;
  document.querySelectorAll(".alert-mode-tab").forEach(t => t.classList.toggle("active", t === btn));
  alertClockForm.style.display = mode === "clock" ? "flex" : "none";
  alertCountdownForm.style.display = mode === "countdown" ? "flex" : "none";
});

countdownPresets.addEventListener("click", (e) => {
  const btn = e.target.closest(".preset-pill");
  if (!btn) return;
  selectedPresetMin = Number(btn.dataset.min);
  countdownCustomInput.value = "";
  document.querySelectorAll(".preset-pill").forEach(p => p.classList.toggle("active", p === btn));
});
countdownCustomInput.addEventListener("input", () => {
  selectedPresetMin = null;
  document.querySelectorAll(".preset-pill").forEach(p => p.classList.remove("active"));
});

/* Next absolute fire time for a clock-style alert, for sorting/display. */
function nextClockFireTime(item) {
  const [h, m] = item.time.split(":").map(Number);
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0, 0);
  if (next.getTime() <= now.getTime()) next.setDate(next.getDate() + 1);
  return next.getTime();
}

function formatCountdown(ms) {
  const totalSec = Math.max(0, Math.round(ms / 1000));
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

function renderAlerts() {
  alertList.innerHTML = "";
  if (!state.alerts.length) {
    alertList.innerHTML = `<div class="alert-empty">${T("alert_empty")}</div>`;
    return;
  }
  state.alerts
    .slice()
    .sort((a, b) => {
      const fa = a.kind === "countdown" ? a.endAt : nextClockFireTime(a);
      const fb = b.kind === "countdown" ? b.endAt : nextClockFireTime(b);
      return fa - fb;
    })
    .forEach(item => {
      const row = document.createElement("div");
      row.className = "alert-item";
      if (item.kind === "countdown") {
        const remaining = item.endAt - Date.now();
        row.innerHTML = `
          <span class="alert-kind-badge">${T("badge_timer")}</span>
          <span class="alert-countdown">${formatCountdown(remaining)}</span>
          <span class="alert-label">${escapeHtml(item.label || T("mode_countdown"))}</span>
          <button class="alert-remove" title="${T("remove_title")}">&times;</button>`;
      } else {
        row.innerHTML = `
          <span class="alert-kind-badge">${T("badge_alarm")}</span>
          <span class="alert-time">${item.time}</span>
          <span class="alert-label">${escapeHtml(item.label || T("fired_alert_default_title"))}${item.repeat ? T("daily_suffix") : ""}</span>
          <button class="alert-remove" title="${T("remove_title")}">&times;</button>`;
      }
      row.querySelector(".alert-remove").addEventListener("click", () => {
        state.alerts = state.alerts.filter(a => a.id !== item.id);
        saveState();
        renderAlerts();
        renderSummary();
      });
      alertList.appendChild(row);
    });
}

alertClockForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const time = document.getElementById("alertTimeInput").value;
  const label = document.getElementById("alertLabelInput").value.trim();
  const repeat = document.getElementById("alertRepeatInput").checked;
  if (!time) return;
  state.alerts.push({ id: uid(), kind: "clock", time, label, repeat, firedDate: null });
  document.getElementById("alertLabelInput").value = "";
  document.getElementById("alertRepeatInput").checked = false;
  saveState(); // background.js reacts to this change and schedules a chrome.alarm
  renderAlerts();
  renderSummary();
});

alertCountdownForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const customVal = Number(countdownCustomInput.value);
  const durationMin = customVal > 0 ? customVal : selectedPresetMin;
  if (!durationMin) return;
  const label = document.getElementById("countdownLabelInput").value.trim();
  state.alerts.push({
    id: uid(), kind: "countdown", durationMin,
    endAt: Date.now() + durationMin * 60000,
    label, repeat: false, firedDate: null
  });
  document.getElementById("countdownLabelInput").value = "";
  countdownCustomInput.value = "";
  selectedPresetMin = null;
  document.querySelectorAll(".preset-pill").forEach(p => p.classList.remove("active"));
  saveState(); // background.js reacts to this change and schedules a chrome.alarm
  renderAlerts();
  renderSummary();
});

/* ---------------------------------------------------
   Fired-alert popup + sound
   Whenever a timer/alert hits zero while this tab is open, show a
   hard-to-miss in-page popup and play an alarm sound — in addition to
   (not instead of) the chrome.notifications alert background.js fires.
--------------------------------------------------- */
const alertFiredOverlay = document.getElementById("alertFiredOverlay");
const firedAlertTitleEl = document.getElementById("firedAlertTitle");
const firedAlertMsgEl = document.getElementById("firedAlertMsg");
const firedAlertQueueNoteEl = document.getElementById("firedAlertQueueNote");
let alertPopupQueue = [];
let alertPopupCurrent = null;
let audioCtx = null;

function playAlertSound() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") audioCtx.resume();
    const start = audioCtx.currentTime;
    const beep = (offset, freq, dur) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, start + offset);
      gain.gain.linearRampToValueAtTime(0.3, start + offset + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, start + offset + dur);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(start + offset);
      osc.stop(start + offset + dur + 0.03);
    };
    // A short three-beep alarm pattern.
    [0, 0.32, 0.64, 1.1, 1.42, 1.74].forEach((t, i) => beep(t, i % 3 === 2 ? 880 : 660, 0.22));
  } catch (e) {
    /* Web Audio unavailable in this context — the OS notification still fires. */
  }
}

function showNextFiredAlert() {
  const item = alertPopupQueue.shift();
  if (!item) {
    alertPopupCurrent = null;
    alertFiredOverlay.classList.remove("open");
    return;
  }
  alertPopupCurrent = item;
  const isCountdown = item.kind === "countdown";
  firedAlertTitleEl.textContent = item.label || (isCountdown ? T("mode_countdown") : T("fired_alert_default_title"));
  firedAlertMsgEl.textContent = isCountdown ? T("fired_alert_default_msg") : T("alert_time_message", item.time);
  const moreWaiting = alertPopupQueue.length;
  firedAlertQueueNoteEl.style.display = moreWaiting ? "block" : "none";
  firedAlertQueueNoteEl.textContent = moreWaiting ? T("fired_more_waiting", String(moreWaiting)) : "";
  alertFiredOverlay.classList.add("open");
  playAlertSound();
}

function queueFiredAlert(item) {
  alertPopupQueue.push(item);
  if (!alertPopupCurrent) {
    showNextFiredAlert();
  } else {
    firedAlertQueueNoteEl.style.display = "block";
    firedAlertQueueNoteEl.textContent = T("fired_more_waiting", String(alertPopupQueue.length));
  }
}

function snoozeAlertItem(item) {
  if (!item) return;
  const target = state.alerts.find(a => a.id === item.id);
  if (!target) return;
  if (target.kind === "countdown") {
    target.endAt = Date.now() + 5 * 60 * 1000;
    target.firedDate = null;
  } else {
    const t = new Date(Date.now() + 5 * 60 * 1000);
    target.time = `${pad(t.getHours())}:${pad(t.getMinutes())}`;
    target.firedDate = null;
  }
  saveState();
  renderAlerts();
  renderSummary();
}

document.getElementById("firedAlertDismiss").addEventListener("click", () => {
  showNextFiredAlert();
});
document.getElementById("firedAlertSnooze").addEventListener("click", () => {
  snoozeAlertItem(alertPopupCurrent);
  showNextFiredAlert();
});

/* In-page check — runs every second the tab is open, so a fired alert
   always shows a popup + sound here, on top of whatever background.js
   fires via chrome.notifications. */
function checkAlerts(now) {
  if (!state.alerts.length) return;
  const hh = pad(now.getHours()), mm = pad(now.getMinutes());
  const current = `${hh}:${mm}`;
  const todayStr = now.toDateString();
  let changed = false;

  state.alerts.forEach(item => {
    if (item.kind === "countdown") {
      if (item.endAt <= now.getTime() && !item.firedDate) {
        item.firedDate = "fired";
        changed = true;
        queueFiredAlert(item);
      }
    } else if (item.time === current && item.firedDate !== todayStr) {
      item.firedDate = todayStr;
      changed = true;
      queueFiredAlert(item);
    }
  });
  if (changed) saveState();
}

/* ---------------------------------------------------
   Init
--------------------------------------------------- */
loadState(() => {
  initGate();
  applyTheme();
  applyBackground();
  applyFullBleed();
  // Seed the fastboot cache on every load too, not only when a setting
  // changes — otherwise a fresh install (or right after updating these
  // files) has nothing for the anti-flash script at the top of <body> to
  // read yet on its very first couple of opens.
  saveFastbootCache();
  document.body.classList.add("ready");
  applySectionOrder();
  renderStatic();
  renderTasks();
  renderAlerts();
  renderNotes();
  renderLinkGrid();
  renderSummary();
  tick();
  setInterval(tick, 1000);
  setInterval(() => { if (state.alerts.some(a => a.kind === "countdown")) renderSummary(); }, 1000);

  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (!state.theme) applyTheme();
    });
  }
});
