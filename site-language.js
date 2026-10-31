(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root && root.document) api.boot(root);
}(typeof window === 'object' ? window : null, function () {
  'use strict';
  var supported = ['ja', 'en', 'es', 'id', 'ko'];
  var key = 'educraft-language';
  function normalize(value) {
    if (typeof value !== 'string') return null;
    var base = value.trim().toLowerCase().split(/[-_]/)[0];
    if (base === 'in') base = 'id';
    return supported.indexOf(base) >= 0 ? base : null;
  }
  function select(options) {
    var found = normalize(options.explicit) || normalize(options.saved);
    if (found) return found;
    var languages = Array.isArray(options.languages) ? options.languages : [];
    for (var i = 0; i < languages.length; i += 1) {
      found = normalize(languages[i]);
      if (found) return found;
    }
    return 'en';
  }
  function redirect(options) {
    var current = new URL(options.href);
    var valid = options.entry === 'home' && ['/', '/index', '/index.html'].indexOf(current.pathname) >= 0;
    valid = valid || options.entry === 'privacy' && ['/privacy', '/privacy.html'].indexOf(current.pathname) >= 0;
    if (!valid) return null;
    var language = select({explicit: current.searchParams.get('lang'), saved: options.saved, languages: options.languages});
    var target = new URL('/' + language + '/' + (options.entry === 'privacy' ? 'privacy/' : ''), current.origin);
    current.searchParams.delete('lang');
    target.search = current.searchParams.toString();
    target.hash = current.hash;
    return target.href;
  }
  function save(win, value) {
    var language = normalize(value);
    if (!language) return;
    try { win.localStorage.setItem(key, language); } catch (_) {}
  }
  function boot(win) {
    var doc = win.document;
    doc.addEventListener('click', function (event) {
      var target = event.target;
      if (target && target.nodeType === 3) target = target.parentElement;
      var anchor = target && typeof target.closest === 'function' ? target.closest('a[data-language]') : null;
      if (anchor) save(win, anchor.getAttribute('data-language'));
    });
    var saved = null;
    try { saved = win.localStorage.getItem(key); } catch (_) {}
    var languages = win.navigator.languages;
    if (!Array.isArray(languages) || !languages.length) languages = [win.navigator.language];
    var entry = doc.documentElement.getAttribute('data-language-entry');
    var destination = redirect({href: win.location.href, entry: entry, saved: saved, languages: languages});
    if (destination) {
      save(win, new URL(win.location.href).searchParams.get('lang'));
      win.location.replace(destination);
    }
  }
  return { supported: supported.slice(), storageKey: key, normalizeLanguage: normalize, selectLanguage: select, resolveRedirect: redirect, boot: boot };
}));