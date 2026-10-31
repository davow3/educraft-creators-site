/* Small enhancements for native disclosure navigation and optional motion. */
(function (root, factory) {
  'use strict';
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root && root.document) api.boot(root);
}(typeof window === 'object' ? window : null, function () {
  'use strict';
  function list(nodes) { return Array.prototype.slice.call(nodes || []); }
  function boot(win) {
    var doc = win.document;
    var menus = list(doc.querySelectorAll('[data-site-menu]')).map(function (element) {
      return { element: element, summary: element.querySelector('[data-menu-toggle]') };
    }).filter(function (item) { return !!item.summary; });
    function sync(item) { item.summary.setAttribute('aria-expanded', String(!!item.element.open)); }
    function close(item, restoreFocus) {
      item.element.open = false;
      sync(item);
      if (restoreFocus && typeof item.summary.focus === 'function') item.summary.focus();
    }
    menus.forEach(function (item) {
      sync(item);
      item.element.addEventListener('toggle', function () {
        sync(item);
        if (item.element.open) menus.forEach(function (other) { if (other !== item && other.element.open) close(other, false); });
      });
    });
    doc.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      var open = menus.filter(function (item) { return item.element.open; });
      if (!open.length) return;
      open.forEach(function (item, index) { close(item, index === open.length - 1); });
      event.preventDefault();
    });
    doc.addEventListener('pointerdown', function (event) {
      menus.forEach(function (item) { if (item.element.open && !item.element.contains(event.target)) close(item, false); });
    });
    doc.addEventListener('click', function (event) {
      var target = event.target;
      if (target && target.nodeType === 3) target = target.parentElement;
      var anchor = target && typeof target.closest === 'function' ? target.closest('a[href]') : null;
      if (!anchor) return;
      menus.forEach(function (item) { if (item.element.open && item.element.contains(anchor)) close(item, false); });
    });

    var buttons = list(doc.querySelectorAll('[data-motion-toggle]'));
    var manuallyChosen = false;
    var media = null;
    try { if (typeof win.matchMedia === 'function') media = win.matchMedia('(prefers-reduced-motion: reduce)'); } catch (_) {}
    var paused = !!(media && media.matches);
    function renderMotion(value) {
      paused = !!value;
      doc.documentElement.setAttribute('data-motion', paused ? 'off' : 'on');
      buttons.forEach(function (button) {
        var text = button.getAttribute(paused ? 'data-label-play' : 'data-label-pause');
        button.setAttribute('aria-pressed', String(paused));
        if (text) {
          button.setAttribute('aria-label', text);
          var label = button.querySelector('[data-motion-label]');
          if (label) label.textContent = text;
        }
        button.hidden = false;
      });
    }
    renderMotion(paused);
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        manuallyChosen = true;
        renderMotion(!paused);
      });
    });
    function mediaChanged(event) { if (!manuallyChosen) renderMotion(!!event.matches); }
    if (media) {
      if (typeof media.addEventListener === 'function') media.addEventListener('change', mediaChanged);
      else if (typeof media.addListener === 'function') media.addListener(mediaChanged);
    }
    return { isPaused: function () { return paused; } };
  }
  return { boot: boot };
}));