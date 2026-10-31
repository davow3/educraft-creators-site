# EduCraft Creators website

Static educational-app website deployed from this repository by Cloudflare Pages.

## Update and check

Node.js is the only build requirement; there are no npm dependencies.

```text
npm run build
npm test
npm run preview
```

Edit `content/ja.json`, `en.json`, `es.json`, `id.json`, and `ko.json`, then regenerate the HTML. Each language has a home page, Math Quest Masters page, Math Fight page, and privacy policy. Generated HTML is committed so Cloudflare Pages can continue serving the repository without a new build-service configuration.

## Language and SEO behavior

- `/ja/`, `/en/`, `/es/`, `/id/`, and `/ko/` are stable language-specific URLs with complete static text, localized titles/descriptions, self-canonical URLs, reciprocal hreflang links, and an x-default alternate.
- Only `/`, `/index.html`, and the legacy `/privacy` or `/privacy.html` entry choose a language automatically. Priority is a supported `?lang=`, a saved manual selection, the first supported browser language, then English. Query parameters and fragment links are preserved, apart from the consumed `lang` parameter.
- Direct language URLs always keep their language, even if browser preferences differ. Native language links work without JavaScript and keep the current page. The preference is saved in browser local storage when available; no IP lookup, cookies, or analytics are added.
- Google Play links use `hl` for the page language. They do not force a country or change store/account availability.
- Only confirmed Japanese and Indonesian video links are shown on the corresponding language home pages. Other language pages do not label a different-language video as translated.
- `sitemap.xml` lists the 20 canonical language pages. `robots.txt` points to it. `404.html` prevents Cloudflare's default single-page-app fallback for missing URLs.
- The legacy privacy deletion anchor `#fight-data-delete` is retained in every language.
- Screenshots are from local development/review builds and are explicitly labeled as such. Their WebP files preserve the source RGB pixels exactly; sources and dimensions are recorded in `content/screenshot-assets.json`.

After publishing, inspect indexing and submit the sitemap in Google Search Console when the verified owner account is available. Code validation and public deployment do not establish Google indexing, ranking, or store approval.

## Separate product pages

`db-bottleneck-analyzer/` and the legacy `pgscope/` route are separate from the learning-app site. Preserve their existing content and noindex settings; they are not included in the learning-app sitemap.
