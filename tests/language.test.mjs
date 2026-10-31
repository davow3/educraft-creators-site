import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
const source = await readFile(new URL('../site-language.js', import.meta.url), 'utf8');
const context = {module: {exports: {}}, URL};
vm.runInNewContext(source, context);
const api = context.module.exports;
test('regional and Indonesian language tags normalize', () => {
  for (const [value, expected] of [['es-MX','es'], ['ko-KR','ko'], ['EN_us','en'], ['in-ID','id'], [' ja-JP ','ja']]) assert.equal(api.normalizeLanguage(value), expected);
  for (const value of [null, {}, '', 'zh-CN', 'fr', '__proto__']) assert.equal(api.normalizeLanguage(value), null);
});
test('query, saved preference, browser list, English fallback priority', () => {
  assert.equal(api.selectLanguage({explicit:'es-MX', saved:'ja', languages:['ko-KR']}),'es');
  assert.equal(api.selectLanguage({explicit:'de', saved:'id', languages:['ko-KR']}),'id');
  assert.equal(api.selectLanguage({saved:'{broken}', languages:['zh-CN','ko-KR','en']}),'ko');
  assert.equal(api.selectLanguage({languages:['zh-CN','fr']}),'en');
});
test('home query and hash survive routing', () => {
  const url = new URL(api.resolveRedirect({href:'https://example.test/?lang=es-MX&utm_source=video&name=a%20b#apps',entry:'home',languages:['ja']}));
  assert.equal(url.pathname,'/es/');
  assert.equal(url.searchParams.get('utm_source'),'video');
  assert.equal(url.searchParams.get('name'),'a b');
  assert.equal(url.searchParams.has('lang'),false);
  assert.equal(url.hash,'#apps');
});
test('legacy aliases retain the intended page', () => {
  assert.equal(api.resolveRedirect({href:'https://example.test/privacy.html?utm=x#fight-data-delete',entry:'privacy',saved:'id'}),'https://example.test/id/privacy/?utm=x#fight-data-delete');
  assert.equal(api.resolveRedirect({href:'https://example.test/privacy#ads',entry:'privacy',languages:['ko-KR']}),'https://example.test/ko/privacy/#ads');
  for (const path of ['/index','/index.html']) assert.equal(api.resolveRedirect({href:'https://example.test'+path,entry:'home',languages:['ja-JP']}),'https://example.test/ja/');
});
test('localized and unknown paths cannot redirect even with a mistaken marker', () => {
  for (const path of ['/es/','/ja/apps/math-fight/','/ko/privacy/','/unknown','/index.html/']) assert.equal(api.resolveRedirect({href:'https://example.test'+path+'?lang=en',entry:'home',saved:'en'}),null);
  assert.equal(api.resolveRedirect({href:'https://example.test/',entry:null,languages:['id']}),null);
});
function fixture({href='https://example.test/en/',entry=null,saved=null,languages=['en'],blocked=false}={}) {
  const writes=[], redirects=[], listeners={};
  const win={document:{documentElement:{getAttribute:()=>entry},addEventListener:(name,fn)=>{listeners[name]=fn;}},location:{href,replace:value=>redirects.push(value)},navigator:{languages,language:'en'},localStorage:{getItem(){if(blocked)throw Error('blocked');return saved;},setItem(key,value){if(blocked)throw Error('blocked');writes.push([key,value]);}}};
  return {win,writes,redirects,listeners};
}
test('blocked storage does not prevent routing', () => {
  const f=fixture({href:'https://example.test/?lang=id',entry:'home',blocked:true,languages:['ko']});
  assert.doesNotThrow(()=>api.boot(f.win));
  assert.equal(f.redirects[0],'https://example.test/id/');
});
test('manual language links persist without preventing native navigation', () => {
  const f=fixture();api.boot(f.win);
  const event={target:{closest:()=>({getAttribute:()=> 'ko'})},preventDefault(){throw Error('must not cancel link');}};
  f.listeners.click(event);
  assert.deepEqual(f.writes,[['educraft-language','ko']]);assert.equal(f.redirects.length,0);
  const blocked=fixture({blocked:true});api.boot(blocked.win);assert.doesNotThrow(()=>blocked.listeners.click(event));
});
test('only explicit entry selection is automatically persisted', () => {
  const f=fixture({href:'https://example.test/?lang=es-MX',entry:'home'});api.boot(f.win);assert.deepEqual(f.writes,[['educraft-language','es']]);
  const direct=fixture({href:'https://example.test/ko/?lang=es',saved:'ja'});api.boot(direct.win);assert.equal(direct.redirects.length,0);assert.equal(direct.writes.length,0);
});