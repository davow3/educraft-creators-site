import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const base='https://educraft-creators-site.pages.dev';
const langs=['ja','en','es','id','ko'];
const routes=['','apps/math-quest/','apps/math-fight/','privacy/'];
const read=relative=>fs.readFileSync(path.join(root,relative),'utf8');
const decode=value=>value.replaceAll('&amp;','&');

test('all 20 translated pages contain static metadata, content and reciprocal language links',()=>{
 const titles=new Set();
 for(const lang of langs)for(const route of routes){
  const url=`/${lang}/${route}`, html=read(`${lang}/${route}index.html`);
  assert.match(html,new RegExp(`<html lang="${lang}">`));
  assert.ok(html.includes(`<link rel="canonical" href="${base}${url}">`));
  assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length,1,url);
  assert.ok(html.match(/<meta name="description" content="([^"]+)"/)[1].length>30,url);
  const title=html.match(/<title>(.*?)<\/title>/)[1];assert.ok(!titles.has(title),title);titles.add(title);
  for(const alt of langs){
   assert.ok(html.includes(`<link rel="alternate" hreflang="${alt}" href="${base}/${alt}/${route}">`));
   assert.ok(html.includes(`href="/${alt}/${route}" lang="${alt}" hreflang="${alt}" data-language="${alt}"`));
  }
  assert.ok(!html.includes('data-language-entry'),url);
  assert.ok(!/<meta name="robots" content="noindex/.test(html),url);
  assert.doesNotThrow(()=>JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]));
 }
});

test('all generated internal links, fragments and images resolve to real files',()=>{
 for(const lang of langs)for(const route of routes){
  const html=read(`${lang}/${route}index.html`);
  for(const match of html.matchAll(/(?:href|src)="(\/[^"#]*)(#[^"]*)?"/g)){
   const target=match[1],fragment=match[2]?.slice(1);
   const file=path.join(root,target.endsWith('/')?`${target}index.html`:target);
   assert.ok(fs.existsSync(file),`${lang}/${route} -> ${target}`);
   if(fragment)assert.ok(read(path.relative(root,file)).includes(`id="${fragment}"`),`${target}#${fragment}`);
  }
 }
});

test('Google Play links use the page language without forcing a country',()=>{
 for(const lang of langs)for(const route of routes){
  const html=read(`${lang}/${route}index.html`);
  for(const match of html.matchAll(/href="(https:\/\/play\.google\.com[^\"]+)"/g)){
   const url=new URL(decode(match[1]));assert.equal(url.searchParams.get('hl'),lang);assert.equal(url.searchParams.has('gl'),false);
   assert.ok(['jp.educraftcreators.mathquestmasters','jp.educraftcreators.mathfight'].includes(url.searchParams.get('id')));
  }
 }
});

test('sitemap contains only canonical public language pages and is XML rather than fallback HTML',()=>{
 const sitemap=read('sitemap.xml');assert.ok(sitemap.startsWith('<?xml '));
 const locations=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);
 assert.equal(locations.length,20);assert.equal(new Set(locations).size,20);
 assert.ok(!sitemap.includes('db-bottleneck-analyzer'));assert.ok(!sitemap.includes('pgscope'));
 for(const lang of langs)for(const route of routes)assert.ok(locations.includes(`${base}/${lang}/${route}`));
 assert.match(read('robots.txt'),new RegExp(`Sitemap: ${base}/sitemap.xml`));
 assert.ok(!read('robots.txt').includes('<html'));
});

test('legacy neutral entries preserve content and deletion anchors with an explicit language-entry marker',()=>{
 const home=read('index.html'),privacy=read('privacy.html');
 assert.ok(home.includes('data-language-entry="home"'));assert.ok(home.includes(`href="${base}/ja/"`));
 assert.ok(privacy.includes('data-language-entry="privacy"'));assert.ok(privacy.includes('id="fight-data-delete"'));
 for(const lang of langs)assert.ok(read(`${lang}/privacy/index.html`).includes('id="fight-data-delete"'));
 assert.ok(read('404.html').includes('<meta name="robots" content="noindex">'));
});

test('screenshots have declared assets and were converted without changing pixels',()=>{
 const assets=JSON.parse(read('content/screenshot-assets.json'));assert.equal(assets.length,10);
 for(const asset of assets){assert.ok(fs.existsSync(path.join(root,'assets/screenshots',asset.file)));assert.ok(asset.bytes>0);}
});
