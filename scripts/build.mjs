import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://educraft-creators-site.pages.dev';
const languages = ['ja', 'en', 'es', 'id', 'ko'];
const names = { ja: '日本語', en: 'English', es: 'Español', id: 'Bahasa Indonesia', ko: '한국어' };
const content = Object.fromEntries(languages.map(lang => [lang, JSON.parse(fs.readFileSync(path.join(root, 'content', `${lang}.json`), 'utf8'))]));
const routes = { home: '', quest: 'apps/math-quest/', fight: 'apps/math-fight/', privacy: 'privacy/' };
const packages = { quest: 'jp.educraftcreators.mathquestmasters', fight: 'jp.educraftcreators.mathfight' };
const icons = { quest: 'app-quest-v2.png', fight: 'app-fight.png' };
const href = (lang, page = 'home') => `/${lang}/${routes[page]}`;
const esc = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const play = (lang, app) => `https://play.google.com/store/apps/details?id=${packages[app]}&hl=${lang}`;
const external = (url, text, cls = '') => `<a${cls ? ` class="${cls}"` : ''} href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(text)}</a>`;
const button = (url, text, ghost = false) => `<a class="button ${ghost ? 'ghost' : 'primary'}" href="${esc(url)}">${esc(text)}</a>`;
const paragraph = text => `<p>${esc(text)}</p>`;

function alternates(page) {
  return languages.map(lang => `<link rel="alternate" hreflang="${lang}" href="${origin}${href(lang, page)}">`).join('\n') +
    `\n<link rel="alternate" hreflang="x-default" href="${origin}${page === 'home' ? '/' : href('en', page)}">`;
}

function languageLinks(lang, page) {
  return `<nav class="language-switcher" aria-label="${esc(content[lang].ui.language)}">${languages.map(target => `<a href="${href(target, page)}" lang="${target}" hreflang="${target}" data-language="${target}"${target === lang ? ' aria-current="true"' : ''}>${names[target]}</a>`).join('')}</nav>`;
}

function downloadDock(lang, page) {
  if (page === 'privacy') return '';
  const c = content[lang];
  const apps = page === 'home' ? ['quest', 'fight'] : [page];
  return `<aside class="download-dock${apps.length === 1 ? ' single-app' : ''}" aria-label="${esc(c.ui.download)}">${apps.map(app => `<a class="download-link ${app}-download" href="${esc(play(lang,app))}" target="_blank" rel="noopener noreferrer"><img class="download-icon" src="/assets/${icons[app]}" alt="" width="44" height="44"><span class="download-copy"><strong>${esc(c.apps[app].name)}</strong><small>Google Play</small></span><span class="download-arrow" aria-hidden="true">↓</span></a>`).join('')}</aside>`;
}

function frame(lang, page, body, entry = '') {
  const c = content[lang];
  const item = page === 'home' ? c.home : page === 'privacy' ? c.privacy : c.apps[page];
  const url = origin + href(lang, page);
  const graph = [
    {'@type':'Organization','@id':`${origin}/#organization`,name:'EduCraft Creators',url:origin,logo:`${origin}/favicon.png`},
    page === 'home' ? {'@type':'WebSite','@id':`${origin}/#website`,url:origin,name:'EduCraft Creators',publisher:{'@id':`${origin}/#organization`},inLanguage:languages} :
      page === 'privacy' ? {'@type':'WebPage',url,name:item.title,inLanguage:lang} :
      {'@type':'SoftwareApplication',name:item.name,url,description:item.description,operatingSystem:'Android',applicationCategory:'EducationalApplication',inLanguage:languages,downloadUrl:play(lang,page),publisher:{'@id':`${origin}/#organization`}}
  ];
  const data = JSON.stringify({'@context':'https://schema.org','@graph':graph}).replace(/</g,'\\u003c');
  const image = page === 'fight' ? icons.fight : icons.quest;
  return `<!doctype html>
<html lang="${lang}"${entry ? ` data-language-entry="${entry}"` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(item.title)}</title>
<meta name="description" content="${esc(item.description)}">
<link rel="canonical" href="${url}">
${alternates(page)}
<meta property="og:title" content="${esc(item.title)}">
<meta property="og:description" content="${esc(item.description)}">
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="EduCraft Creators">
<meta property="og:locale" content="${c.ogLocale}">
${languages.filter(x => x !== lang).map(x => `<meta property="og:locale:alternate" content="${content[x].ogLocale}">`).join('\n')}
<meta property="og:image" content="${origin}/assets/${image}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="stylesheet" href="/styles.css?v=20261101">
<script src="/site-language.js" defer></script>
<script src="/site-ui.js?v=20261101" defer></script>
<script type="application/ld+json">${data}</script>
</head>
<body${page !== 'privacy' ? ' class="has-download"' : ''} data-page="${page}">
<a class="skip-link" href="#main">${esc(c.ui.skip)}</a>
<header class="site-header">
<a class="brand" href="${href(lang)}"><span class="brand-name">EduCraft Creators</span>${['quest','fight'].includes(page) ? `<strong class="brand-app-name">${esc(c.apps[page].name)}</strong>` : ''}</a>
<details class="site-menu" data-site-menu><summary data-menu-toggle aria-label="${esc(c.ui.menu)}"><span class="menu-dots" aria-hidden="true">⋯</span></summary><div class="menu-panel"><nav class="nav" aria-label="${esc(c.ui.menu)}"><a href="${href(lang)}"${page === 'home' ? ' aria-current="page"' : ''}>${esc(c.ui.home)}</a><a href="${href(lang)}#apps">${esc(c.ui.apps)}</a><a href="${href(lang)}#team">${esc(c.ui.about)}</a><a href="${href(lang)}#contact">${esc(c.ui.contact)}</a><a href="${href(lang,'privacy')}"${page === 'privacy' ? ' aria-current="page"' : ''}>${esc(c.ui.privacy)}</a></nav><details class="language-picker"><summary>🌐 ${names[lang]}</summary>${languageLinks(lang,page)}</details></div></details>
</header>
<main id="main">${body}</main>
<footer class="site-footer"><a href="${href(lang,'privacy')}">${esc(c.ui.privacy)}</a><div class="footer-meta"><span>${esc(c.ui.footer)}</span><span>© 2026– EduCraft Studio / EduCraft Creators</span></div></footer>
${downloadDock(lang,page)}
</body></html>\n`;
}

function card(lang, app) {
  const c=content[lang], a=c.apps[app];
  return `<article class="app-card published-app"><img src="/assets/${icons[app]}" alt="${esc(a.name)}" width="144" height="144" loading="lazy" decoding="async"><div><p class="status completed">${esc(c.ui.available)}</p><h3><a href="${href(lang,app)}">${esc(a.name)}</a></h3>${paragraph(a.summary)}<div class="app-actions">${button(href(lang,app),c.ui.details)}${external(play(lang,app),c.ui.play,'text-link')}</div></div></article>`;
}

function videos(lang) {
  const c=content[lang];
  if (!['ja','id'].includes(lang)) return '';
  const id=lang==='ja'?'Nxq4i9ne3sM':'snmp7zXU-zA';
  const label=lang==='ja'?c.ui.videoJa:c.ui.videoId;
  const quest=lang==='ja'?`<div class="movie-card"><a class="movie-frame" href="https://www.youtube.com/shorts/r_2LvTC61Jw" target="_blank" rel="noopener noreferrer" aria-label="${esc(c.apps.quest.name)}"><img src="/assets/quest-video-cover.png" alt="${esc(c.apps.quest.name)}" width="720" height="1280" loading="lazy" decoding="async"><span class="movie-play" aria-hidden="true">▶</span></a><div class="movie-copy"><p class="status completed">${esc(c.apps.quest.name)}</p><h3>${esc(c.apps.quest.tagline)}</h3>${paragraph(c.apps.quest.summary)}${external('https://www.youtube.com/shorts/r_2LvTC61Jw',c.ui.watch,'button primary')}</div></div>`:'';
  return `<section class="section movie-section" id="movie"><h2>${esc(label)}</h2><div class="movie-card"><a class="movie-frame" href="https://www.youtube.com/shorts/${id}" target="_blank" rel="noopener noreferrer" aria-label="${esc(label)}"><img src="/assets/fight-family-video-${lang}.jpg" alt="${esc(label)}" width="720" height="1280" loading="lazy" decoding="async"><span class="movie-play" aria-hidden="true">▶</span></a><div class="movie-copy"><p class="status completed">${esc(c.apps.fight.name)}</p><h3>${esc(c.apps.fight.tagline)}</h3>${paragraph(c.ui.videoNote)}${external(`https://www.youtube.com/shorts/${id}`,c.ui.watch,'button primary')}</div></div>${quest}</section>`;
}

function home(lang) {
  const c=content[lang], h=c.home;
  return `<section class="hero hero-kitchen"><div class="hero-copy"><p class="eyebrow">${esc(h.eyebrow)}</p><h1>${esc(h.heading)}</h1><p class="lead">${esc(h.lead)}</p><div class="hero-actions">${['quest','fight'].map(app=>`<a class="hero-choice ${app}-choice" href="${href(lang,app)}"><img src="/assets/${icons[app]}" alt="" width="52" height="52"><span class="hero-choice-copy"><strong>${esc(c.ui[app === 'quest' ? 'adventure' : 'battle'])}</strong><span>${esc(c.apps[app].name)}</span></span><span class="choice-arrow" aria-hidden="true">→</span></a>`).join('')}</div></div><div class="hero-art kitchen-stage"><img class="opening-animation" src="/assets/cook-numbers.gif" width="512" height="512" alt="${esc(c.ui.cookAnimation)}" fetchpriority="high"><img class="opening-static" src="/assets/cook-numbers-poster.png" width="512" height="512" alt="${esc(c.ui.cookAnimation)}" decoding="async"><button class="motion-toggle" type="button" hidden data-motion-toggle data-label-pause="${esc(c.ui.pauseAnimation)}" data-label-play="${esc(c.ui.playAnimation)}" aria-pressed="false"><span data-motion-label>${esc(c.ui.pauseAnimation)}</span></button><p class="kitchen-caption">${esc(c.ui.openingCaption)}</p></div></section>
<section class="section apps-section" id="apps"><div class="section-heading"><h2>${esc(h.appsTitle)}</h2><p>${esc(h.appsLead)}</p></div><div class="apps-grid">${card(lang,'quest')}${card(lang,'fight')}</div></section>
${videos(lang)}
<section class="section intro" id="team"><div class="section-heading"><h2>${esc(h.aboutTitle)}</h2></div><div class="intro-grid">${h.aboutParagraphs.map(paragraph).join('')}</div><h3>${esc(c.ui.team)}</h3><div class="team-grid"><article class="team-member"><img src="/assets/creator-cook.png" alt="${esc(c.ui.artCredit)}" width="150" height="150" loading="lazy"><div><h4>yuichi</h4><p class="role">${esc(c.ui.developer)}</p>${paragraph(c.ui.developerText)}</div></article><article class="team-member"><img src="/assets/creator-eraser.png" alt="${esc(c.ui.artCredit)}" width="150" height="150" loading="lazy"><div><h4>akimichi</h4><p class="role">${esc(c.ui.designer)}</p>${paragraph(c.ui.designerText)}</div></article></div></section>
<section class="section"><div class="section-heading"><h2>${esc(c.ui.otherApps)}</h2></div><div class="development-grid">${h.otherApps.map(a=>`<article class="development-card"><img src="/assets/${a.icon}" alt="" width="72" height="72" loading="lazy"><div><h3>${esc(a.name)}</h3>${paragraph(a.text)}</div></article>`).join('')}</div></section>
<section class="section contact-section" id="contact"><h2>${esc(h.contactTitle)}</h2>${paragraph(c.ui.support)}<div class="app-actions">${external(play(lang,'quest'),c.apps.quest.name,'button ghost')}${external(play(lang,'fight'),c.apps.fight.name,'button ghost')}</div><p class="small-note">${esc(c.ui.websiteLanguage)}</p></section>`;
}

function appPage(lang, app) {
  const c=content[lang], a=c.apps[app], other=app==='quest'?'fight':'quest';
  return `<div class="section breadcrumbs"><a href="${href(lang)}">${esc(c.ui.home)}</a><span aria-hidden="true"> / </span><span>${esc(a.name)}</span></div>
<section class="app-hero section"><div><p class="status completed">${esc(c.ui.available)}</p><h1>${esc(a.name)}</h1><p class="app-tagline">${esc(a.tagline)}</p><p class="lead">${esc(a.summary)}</p><div class="hero-actions">${external(play(lang,app),c.ui.play,'button primary')}${button(href(lang,'privacy'),c.ui.privacy,true)}</div></div>${app === 'quest' ? '<div class="app-hero-art quest-scene" aria-hidden="true"><img class="character-motion" src="/assets/hero-adventurer.webp" alt="" width="512" height="512" decoding="async"></div>' : '<div class="app-hero-art fight-scene" aria-hidden="true"><img class="opponent-left character-motion" src="/assets/fight-cook.webp" alt="" width="512" height="512" decoding="async"><span class="versus">VS</span><img class="opponent-right character-motion" src="/assets/fight-knight.webp" alt="" width="512" height="512" decoding="async"></div>'}</section>
<section class="section"><div class="feature-grid">${a.features.map(f=>`<article class="feature-card"><h2>${esc(f.title)}</h2>${paragraph(f.text)}</article>`).join('')}</div><div class="parent-note">${paragraph(a.audience)}${paragraph(a.billing)}</div></section>
<section class="section play-guide"><div><h2>${esc(c.ui.how)}</h2><ol class="steps">${a.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>${a.future ? `<aside class="update-note"><h3>${esc(c.ui.plans)}</h3>${paragraph(a.future)}</aside>` : ''}</div><figure class="game-screenshot"><img src="/assets/screenshots/${app}-${lang}.webp" alt="${esc(c.ui[app+'Shot'])}" width="1080" height="2104" loading="lazy" decoding="async"><figcaption>${esc(c.ui.screenshotNote)}</figcaption></figure></section>
<section class="section faq-section"><h2>${esc(c.ui.faq)}</h2>${a.faqs.map(f=>`<details><summary>${esc(f.q)}</summary>${paragraph(f.a)}</details>`).join('')}</section>
<section class="section"><h2>${esc(c.ui.related)}</h2>${card(lang,other)}<div class="app-actions bottom-actions">${button(href(lang),c.ui.backApps,true)}${external(play(lang,app),c.ui.play,'button primary')}</div></section>`;
}

function privacy(lang) {
  const c=content[lang], p=c.privacy;
  return `<section class="policy-hero"><h1>${esc(c.ui.privacy)}</h1>${paragraph(p.dates)}</section><article class="policy">${p.sections.map(s=>`<section id="${s.id}"><h2>${esc(s.title)}</h2>${(s.paragraphs||[]).map(paragraph).join('')}${s.bullets?`<ul>${s.bullets.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}${s.steps?`<ol>${s.steps.map(x=>`<li>${esc(x)}</li>`).join('')}</ol>`:''}${(s.after||[]).map(paragraph).join('')}${s.links?`<p class="policy-links">${s.links.map(l=>external(l.url,l.text)).join(' · ')}</p>`:''}</section>`).join('')}</article>`;
}

const written=[];
function write(relative,text) {const dest=path.join(root,relative);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,text,'utf8');written.push(relative.replaceAll('\\','/'));}
for (const lang of languages) {
  write(`${lang}/index.html`,frame(lang,'home',home(lang)));
  for(const app of ['quest','fight']) write(`${lang}/${routes[app]}index.html`,frame(lang,app,appPage(lang,app)));
  write(`${lang}/privacy/index.html`,frame(lang,'privacy',privacy(lang)));
}
write('index.html',frame('ja','home',home('ja'),'home'));
write('privacy.html',frame('ja','privacy',privacy('ja'),'privacy'));
write('404.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>404 | EduCraft Creators</title><link rel="stylesheet" href="/styles.css?v=20261101"></head><body><main class="section not-found"><p class="eyebrow">EduCraft Creators · 404</p><h1>Page not found</h1><p>This page could not be found. Choose your language to continue.</p><nav class="language-switcher">${languages.map(lang=>`<a href="${href(lang)}" lang="${lang}">${names[lang]}</a>`).join('')}</nav></main></body></html>\n`);
write('robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
write('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${languages.flatMap(lang=>Object.keys(routes).map(page=>`<url><loc>${origin}${href(lang,page)}</loc>${languages.map(alt=>`<xhtml:link rel="alternate" hreflang="${alt}" href="${origin}${href(alt,page)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${origin}${page==='home'?'/':href('en',page)}"/></url>`)).join('\n')}\n</urlset>\n`);
write('_headers',`/site-language.js\n  Cache-Control: public, max-age=3600\n/site-ui.js\n  Cache-Control: public, max-age=3600\n/robots.txt\n  Content-Type: text/plain; charset=utf-8\n/sitemap.xml\n  Content-Type: application/xml; charset=utf-8\n/content/*\n  X-Robots-Tag: noindex\n/scripts/*\n  X-Robots-Tag: noindex\n/tests/*\n  X-Robots-Tag: noindex\n`);
write('generated-pages.json',JSON.stringify({origin,languages,pages:written.filter(p=>p.endsWith('.html'))},null,2)+'\n');
console.log(`Generated ${languages.length*4} localized pages, legacy entries, sitemap, robots, and 404.`);
