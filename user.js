//                         _
//   _   _ ___  ___ _ __  (_)___
//  | | | / __|/ _ \ '__| | / __|
//  | |_| \__ \  __/ | _  | \__ \
//   \__,_|___/\___|_|(_)_/ |___/
//  Firefox             |__/
//
// Based on:
// https://github.com/ghacksuserjs/ghacks-user.js
// https://spyware.neocities.org/guides/firefox.html


// --- Privacy ---

// Fingerprinting & profiling protection
user_pref("dom.push.userAgentID", "");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("geo.enabled", false);
user_pref("geo.provider.use_gpsd", false);
user_pref("plugin.scan.plid.all", false);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);

// Studies, experiments, telemetry, etc.
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("beacon.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.search.update", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// DNS
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.dns.disableIPv6", true);

// OCSP
user_pref("security.ssl.enable_ocsp_stapling", false);
user_pref("security.OCSP.enabled", 0);
user_pref("security.OCSP.require", false);

// WebRTC
user_pref("media.peerconnection.enabled", false);

// Language
user_pref("javascript.use_us_english_locale", true);

// Fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
user_pref("gfx.font_rendering.graphite.enabled", false);


// --- Additional Features ---

// SSD health
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.sessionstore.interval", 7200000);

// Addons
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);

// Firefox features
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", "");
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Picture in picture
user_pref("media.videocontrols.picture-in-picture.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", true);
user_pref("media.videocontrols.picture-in-picture.video-toggle.flyout-enabled", true);

// UI tweaks
user_pref("browser.download.autohideButton", false);
user_pref("browser.download.panel.shown", true);
user_pref("browser.uidensity", 1);
user_pref("general.autoScroll", true);
user_pref("security.insecure_connection_icon.enabled", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("widget.content.allow-gtk-dark-theme", true);
