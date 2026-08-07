/* WserTab — i18n helper
   Follows the browser's UI language automatically via chrome.i18n
   (Settings → Languages in Chrome). No in-app language switcher —
   this file applies translations from /_locales on load and exposes
   a small T() helper that script.js uses for any text it builds
   dynamically (empty states, buttons it creates, notifications, etc).

   Safety net: chrome.i18n only works when this page is actually running
   as the loaded extension (chrome-extension://.../newtab.html or the
   chrome://newtab override). If it's ever opened any other way, or a
   translation is missing, T() falls back to this embedded English text
   instead of showing a raw key like "add_link_btn" — so the page always
   looks and reads correctly, translations just layer on top when available.
*/

const EN_FALLBACK = {
  ext_name: 'WserTab — World Clock New Tab',
  ext_description: 'A new tab page with a world clock, Google search, image-backed themes, favorite links, notes & tasks, and timing alerts.',
  welcome_loading: 'Loading your day…',
  lock_enter_password: 'Enter password to continue',
  lock_incorrect_password: 'Incorrect password. Try again.',
  lock_password_placeholder: 'Password',
  lock_show_password: 'Show password',
  lock_hide_password: 'Hide password',
  lock_unlock: 'Unlock',
  search_placeholder: 'Search Google or type a URL…',
  voice_search: 'Search by voice',
  lens_search: 'Search by image',
  voice_search_unsupported: 'Voice search isn\'t supported in this browser.',
  voice_search_listening: 'Listening…',
  nav_notes_tasks: 'Notes & Tasks',
  nav_timer_alerts: 'Timer & Alerts',
  nav_customize: 'Customize',
  nav_rearrange: 'Rearrange sections',
  sign_in_google: 'Sign in with Google',
  accounts_button: 'Your saved link accounts',
  accounts_title: 'Linked accounts',
  add_account_btn: '+ Add link',
  account_email_placeholder: 'name@example.com',
  account_title_placeholder: 'Title (e.g. Work)',
  field_title_optional: 'optional',
  save_account_btn: 'Save account',
  acct_url_required_msg: 'Enter a link URL.',
  no_accounts_yet: 'No links yet — add one for quick access.',
  field_email: 'Email',
  field_title: 'Title',
  invalid_email_msg: 'Enter a valid email address.',
  account_links_empty: 'No links saved here yet.',
  add_account_link_btn: '+ Add a link',
  remove_account_btn: 'Remove account',
  drag_reorder: 'Drag to reorder',
  current_label: 'Current',
  favorites_title: 'Favorite Links',
  favorites_tagline: 'Your shortcuts, one click away.',
  add_link_btn: 'Add Link',
  cities_tagline: 'Life moves fast. Stay on time\nand enjoy every moment!',
  add_another_city: 'Add Another City',
  tab_tasks: 'Tasks',
  tab_notes: 'Notes',
  tab_alerts: 'Alerts',
  close_btn: 'Close',
  task_input_placeholder: 'Add a task…',
  manage_status_tags: 'Manage status tags',
  new_tag_placeholder: 'New tag name…',
  new_note_btn: '+ New note',
  mode_at_time: 'At a time',
  mode_countdown: 'Countdown',
  alert_label_placeholder: 'Label (e.g. Stand up)',
  repeat_daily: 'Repeat daily',
  set_alert_btn: 'Set alert',
  preset_15min: '15 min',
  preset_25min: '25 min',
  preset_45min: '45 min',
  preset_1hour: '1 hour',
  custom_minutes_placeholder: 'Custom minutes',
  countdown_label_placeholder: 'Label (e.g. Pasta timer)',
  start_countdown_btn: 'Start countdown',
  alerts_hint: 'Alerts use Chrome notifications and fire even if this tab is closed.',
  add_city_title: 'Add a city',
  modal_search_placeholder: 'Type a city name (e.g. Tokyo)',
  add_link_title: 'Add a favorite link',
  field_name: 'Name',
  field_url: 'URL',
  link_name_placeholder: 'e.g. Gmail',
  link_url_placeholder: 'e.g. https://mail.google.com',
  save_link_btn: 'Save link',
  pick_popular_site: 'Or pick a popular site',
  filter_suggestions_placeholder: 'Filter suggestions…',
  customize_title: 'Customize',
  tab_theme: 'Theme',
  tab_display: 'Display',
  tab_security: 'Security',
  tab_updates: 'Updates',
  updates_hint: 'Checks a small file the developer publishes for free (no Chrome Web Store, no cost) to see if a newer version is out. It can only point you to the download — it can\'t install it for you.',
  updates_current_version: 'Current version',
  updates_check_btn: 'Check for updates',
  updates_checking: 'Checking…',
  updates_up_to_date: 'You\'re on the latest version.',
  updates_new_available: 'Version $1 is available.',
  updates_download_btn: 'Download',
  updates_check_failed: 'Couldn\'t check for updates right now. Try again later.',
  theme_hint: 'Pick a look — every preset pairs a color palette with a matching background photo. Defaults to your system light/dark preference; build your own with Custom.',
  theme_light: 'Minimal Light',
  theme_dark: 'Dark Mode',
  theme_retro: 'Retro Terminal',
  theme_ocean: 'Ocean Breeze',
  theme_sunset: 'Sunset',
  theme_forest: 'Forest',
  theme_nord: 'Nord',
  theme_solarized: 'Solarized',
  theme_rose: 'Rose',
  theme_lavender: 'Lavender',
  theme_coffee: 'Coffee',
  theme_midnight: 'Midnight',
  theme_custom: 'Custom',
  bg_photo_for: 'Background photo for',
  bg_photo_this_theme: 'this theme',
  bg_upload_hint: 'Pick one of the built-in 2K photos, upload your own from your device, shuffle in a new one from the internet, or paste an image link. Hover a photo you added yourself to remove it.',
  upload_from_device: '📁 Upload from device',
  shuffle_from_internet: '🔀 Shuffle from the internet',
  paste_image_url_placeholder: 'Or paste an image URL…',
  bg_slideshow_title: 'Slideshow',
  bg_slideshow_hint: "Automatically rotate through this theme's photos",
  use_btn: 'Use',
  uploading_progress: 'Uploading $1 of $2…',
  skipped_images_one: 'Skipped 1 image over 8MB.',
  skipped_images_other: 'Skipped $1 images over 8MB.',
  group_card_text: 'Card & text',
  group_city_tile: 'Highlighted city tile',
  group_page_bg: 'Page background',
  group_accent: 'Accent colors',
  label_card_color: 'Card / surface color',
  label_text_color: 'Text color',
  label_muted_color: 'Muted / secondary text',
  label_button_text_color: 'Button text color',
  label_bg: 'Background',
  label_bg_color: 'Background color',
  label_accent1: 'Accent (Notes, icons, highlights)',
  label_accent2: 'Accent 2 (Alerts, gradients)',
  custom_theme_footer_hint: 'Use the <b>Background photo</b> section above to pick an image — it applies no matter which palette you pick here.',
  display_bleed_hint: 'The card always stays centered with its normal spacing. Turn this on to stretch your background edge-to-edge across the whole window and make the card blend into it — no card color, just your content floating over the background.',
  display_full_bleed: 'Full-width, full-height background',
  display_shadow_hint: 'Turn the card\'s drop shadow on or off. This is independent of the full-bleed setting above.',
  display_card_shadow: 'Card shadow',
  display_overlay_hint: 'A subtle dark wash over your background photo, so text stays readable on busy images. Turn it off for the photo\'s true colors, or dial its strength up or down.',
  display_overlay: 'Overlay background',
  security_hint: 'Ask for a password the first time your browser opens each session, on this device. This is a light privacy screen for shared computers — not real security. Anyone with access to this browser\'s extension storage can bypass it, and a forgotten password can only be cleared by resetting the extension\'s data.',
  security_require_password: 'Require password each session',
  new_password_placeholder: 'New password',
  confirm_password_placeholder: 'Confirm password',
  save_password_btn: 'Save password',
  change_password_btn: 'Change password',
  remove_password_btn: 'Remove password',
  use_at_least_4_chars: 'Use at least 4 characters.',
  passwords_dont_match: 'Passwords don\'t match.',
  confirm_remove_password: 'Remove the password? You\'ll need to set a new one to re-enable this.',
  fired_alert_default_title: 'Alert',
  fired_alert_default_msg: 'Time\'s up!',
  alert_time_message: 'It\'s $1',
  snooze_5min: 'Snooze 5 min',
  dismiss_btn: 'Dismiss',
  fired_more_waiting: '$1 more waiting…',
  remove_title: 'Remove',
  day_label: '☀️ Day',
  night_label: '🌙 Night',
  sun_line: 'Sun $1 : $2 – $3 ($4)',
  sun_up_all_day: 'Sun ☀️ : up all day',
  sun_down_all_day: 'Sun 🌙 : down all day',
  no_cities_found: 'No cities found',
  added_label: 'Added',
  already_added: '$1 — already added',
  add_x: 'Add $1',
  link_empty: 'No favorite links yet — click "Add Link" to save your first shortcut.',
  greeting_welcome_back: 'Welcome back',
  greeting_good_morning: 'Good morning',
  greeting_good_afternoon: 'Good afternoon',
  greeting_good_evening: 'Good evening',
  filter_all: 'All',
  no_tasks_with_tag: 'No tasks with this tag.',
  no_tasks_yet: 'No tasks yet.',
  delete_tag_title: 'Delete tag',
  just_now: 'just now',
  default_tag_todo: 'To do',
  default_tag_inprogress: 'In Progress',
  default_tag_inreview: 'In Review',
  default_tag_done: 'Done',
  notes_empty: 'No notes yet — click "New note" to add one.',
  note_expand: 'Expand',
  note_collapse: 'Collapse',
  note_title_placeholder: 'Note title',
  delete_note_title: 'Delete note',
  no_content: 'No content',
  write_here_placeholder: 'Write here…',
  note_updated: 'Updated $1 $2',
  alert_empty: 'No alerts set.',
  sign_out: 'Sign out',
  badge_timer: 'Timer',
  badge_alarm: 'Alarm',
  daily_suffix: ' · daily',
  profile_signed_in_fallback: 'Signed in',
  profile_load_error: 'Signed in, but couldn\'t load your profile info.',
  default_note_title: 'Note 1'
};

function applyPlaceholders(msg, subs) {
  if (!subs) return msg;
  const arr = Array.isArray(subs) ? subs : [subs];
  return arr.reduce((m, val, i) => m.split("$" + (i + 1)).join(String(val)), msg);
}

// T(key, subs) — safe wrapper around chrome.i18n.getMessage that always
// returns readable text, even if the extension i18n API isn't available.
// subs can be a single string/number or an array of them, matching the
// $1/$2/... placeholders defined in messages.json / EN_FALLBACK.
function T(key, subs) {
  try {
    const msg = chrome.i18n.getMessage(key, subs);
    if (msg) return msg;
  } catch (e) {}
  const fallback = EN_FALLBACK[key];
  if (fallback) return applyPlaceholders(fallback, subs);
  return key;
}

const RTL_LANGS = ["ar", "he", "fa", "ur"];

function applyI18n() {
  // Plain text content
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = T(key);
  });

  // innerHTML — for strings that legitimately contain markup (a <br/>
  // line break or a <b> tag baked into the translated sentence).
  // \n in the message is converted to <br/>.
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = T(key).replace(/\n/g, "<br/>");
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", T(key));
  });

  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    el.setAttribute("title", T(key));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    el.setAttribute("aria-label", T(key));
  });

  // Direction + lang attribute on <html>, based on Chrome's UI language.
  // Wrapped in try/catch so this never blocks the rest of the page from
  // rendering if chrome.i18n isn't available in the current context.
  try {
    const uiLang = (chrome.i18n.getUILanguage() || "en").split("-")[0];
    document.documentElement.setAttribute("lang", uiLang);
    document.documentElement.setAttribute("dir", RTL_LANGS.includes(uiLang) ? "rtl" : "ltr");
  } catch (e) {}
}

applyI18n();
