# EduCraft Creators website

Static educational-app website deployed from this repository by Cloudflare Pages.

## Update and check

Node.js is the only build requirement; there are no npm dependencies.

```text
node scripts/build.mjs
node --test tests/language.test.mjs tests/site.test.mjs tests/ui.test.mjs
node scripts/serve.mjs
```

Edit `content/ja.json`, `en.json`, `es.json`, `id.json`, and `ko.json`, then regenerate the HTML. Each language has a home page, Math Quest Masters page, Math Fight page, and privacy policy. Generated HTML is committed so Cloudflare Pages can continue serving the repository without a new build-service configuration.

## Language and SEO behavior

- `/ja/`, `/en/`, `/es/`, `/id/`, and `/ko/` are stable language-specific URLs with complete static text, localized titles/descriptions, self-canonical URLs, reciprocal hreflang links, and an x-default alternate.
- `/` is a self-canonical language selector and the `x-default` home page. It links to all five language homes without JavaScript. Supported `?lang=` links and legacy home fragment links still go directly to a localized home. The legacy `/privacy` or `/privacy.html` entry still chooses a language automatically. For these redirects, priority is a supported `?lang=`, a saved manual selection, the first supported browser language, then English. Query parameters and fragment links are preserved, apart from the consumed `lang` parameter.
- Direct language URLs always keep their language, even if browser preferences differ. Native language links work without JavaScript and keep the current page. The preference is saved in browser local storage when available; no IP lookup, cookies, or analytics are added.
- Google Play links use `hl` for the page language. They do not force a country or change store/account availability.
- Only confirmed Japanese and Indonesian video links are shown on the corresponding language home pages. Other language pages do not label a different-language video as translated.
- `sitemap.xml` and `sitemap-pages.txt` list the language selector and the 20 canonical language pages. `robots.txt` points to both. `404.html` prevents Cloudflare's default single-page-app fallback for missing URLs.
- The legacy privacy deletion anchor `#fight-data-delete` is retained in every language.
- Screenshots are from local development/review builds and are explicitly labeled as such. Their WebP files preserve the source RGB pixels exactly; sources and dimensions are recorded in `content/screenshot-assets.json`.

After publishing, inspect indexing and submit the sitemap in Google Search Console when the verified owner account is available. Code validation and public deployment do not establish Google indexing, ranking, or store approval.

## Separate product pages

`db-bottleneck-analyzer/` and the legacy `pgscope/` route are separate from the learning-app site. Preserve their existing content and noindex settings; they are not included in the learning-app sitemap.

## Mobile interface

The compact header and per-page Google Play dock remain fixed. Navigation and language choices use native disclosures; site-ui.js adds Escape/focus handling and optional motion controls. The cooking-number GIF has a static poster for paused/reduced motion. Character accents run once. See docs/mobile-redesign-2026-11-01.md and docs/cook-animation-prompt.txt.
