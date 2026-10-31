import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
const source=await readFile(new URL('../site-ui.js',import.meta.url),'utf8');
const context={module:{exports:{}}};
vm.runInNewContext(source,context);
const api=context.module.exports;

class Element {
  constructor(attrs={}) { this.attrs={...attrs};this.listeners={};this.children=[];this.parentElement=null;this.focusCount=0;this.open=false;this.hidden=true;this.textContent=''; }
  append(child){child.parentElement=this;this.children.push(child);return child;}
  setAttribute(name,value){this.attrs[name]=String(value);}
  getAttribute(name){return this.attrs[name]??null;}
  addEventListener(name,fn){(this.listeners[name]??=[]).push(fn);}
  fire(name,event={}){for(const fn of this.listeners[name]??[])fn(event);}
  focus(){this.focusCount++;}
  contains(target){return target===this||this.children.some(child=>child.contains(target));}
  matches(selector){return selector==='a[href]'?this.getAttribute('href')!==null:selector.startsWith('[')&&this.getAttribute(selector.slice(1,-1))!==null;}
  closest(selector){return this.matches(selector)?this:this.parentElement?.closest(selector)??null;}
  querySelector(selector){for(const child of this.children){if(child.matches(selector))return child;const nested=child.querySelector(selector);if(nested)return nested;}return null;}
}
function fixture({reduced=false,withMenu=true,withMotion=true,withMedia=true,initiallyOpen=false,legacyMedia=false}={}){
 const doc={documentElement:new Element(),listeners:{},addEventListener(name,fn){(this.listeners[name]??=[]).push(fn);},fire(name,event){for(const fn of this.listeners[name]??[])fn(event);}};
 const menu=new Element({'data-site-menu':''});menu.open=initiallyOpen;
 const summary=menu.append(new Element({'data-menu-toggle':''}));
 const panel=menu.append(new Element());const anchor=panel.append(new Element({href:'/ko/apps/math-fight/','data-language':'ko'}));const anchorText=anchor.append(new Element());
 const motion=new Element({'data-motion-toggle':'','data-label-pause':'動きを止める','data-label-play':'動きを再生'});const label=motion.append(new Element({'data-motion-label':''}));
 doc.querySelectorAll=selector=>selector==='[data-site-menu]'?(withMenu?[menu]:[]):selector==='[data-motion-toggle]'?(withMotion?[motion]:[]):[];
 const media={matches:reduced,listener:null};
 if(legacyMedia)media.addListener=fn=>{media.listener=fn;};else media.addEventListener=(name,fn)=>{assert.equal(name,'change');media.listener=fn;};
 const win={document:doc};if(withMedia)win.matchMedia=query=>{assert.equal(query,'(prefers-reduced-motion: reduce)');return media;};
 const controller=api.boot(win);
 return {doc,menu,summary,panel,anchor,anchorText,motion,label,media,win,controller};
}

test('native details toggle updates expanded state without intercepting summary clicks',()=>{
 const f=fixture();assert.equal(f.summary.getAttribute('aria-expanded'),'false');
 assert.equal(f.summary.listeners.click,undefined);
 f.menu.open=true;f.menu.fire('toggle');assert.equal(f.summary.getAttribute('aria-expanded'),'true');
 f.menu.open=false;f.menu.fire('toggle');assert.equal(f.summary.getAttribute('aria-expanded'),'false');
});
test('Escape closes the open disclosure and restores focus',()=>{
 const f=fixture({initiallyOpen:true});let prevented=0;
 f.doc.fire('keydown',{key:'Escape',preventDefault(){prevented++;}});
 assert.equal(f.menu.open,false);assert.equal(f.summary.getAttribute('aria-expanded'),'false');assert.equal(f.summary.focusCount,1);assert.equal(prevented,1);
 f.doc.fire('keydown',{key:'Escape',preventDefault(){throw Error('closed disclosure must not consume Escape');}});
});
test('outside pointer closes without stealing focus; inside pointer stays open',()=>{
 const f=fixture({initiallyOpen:true});f.doc.fire('pointerdown',{target:f.panel});assert.equal(f.menu.open,true);
 f.doc.fire('pointerdown',{target:new Element()});assert.equal(f.menu.open,false);assert.equal(f.summary.focusCount,0);
});
test('an internal real link closes the menu and preserves native navigation',()=>{
 const f=fixture({initiallyOpen:true});const targetHref=f.anchor.getAttribute('href');
 f.doc.fire('click',{target:f.anchorText,preventDefault(){throw Error('must preserve link');}});
 assert.equal(f.menu.open,false);assert.equal(f.summary.focusCount,0);assert.equal(f.anchor.getAttribute('href'),targetHref);
});
test('other page links do not close an open disclosure',()=>{
 const f=fixture({initiallyOpen:true});f.doc.fire('click',{target:new Element({href:'/ja/'})});assert.equal(f.menu.open,true);
});
test('reduced motion sets static presentation, localized Play label, and pressed state',()=>{
 const f=fixture({reduced:true});assert.equal(f.doc.documentElement.getAttribute('data-motion'),'off');assert.equal(f.motion.getAttribute('aria-pressed'),'true');assert.equal(f.label.textContent,'動きを再生');assert.equal(f.motion.hidden,false);assert.equal(f.controller.isPaused(),true);
});
test('manual Play/Pause overrides later operating-system motion changes for this page',()=>{
 const f=fixture({reduced:true});f.motion.fire('click');assert.equal(f.doc.documentElement.getAttribute('data-motion'),'on');assert.equal(f.motion.getAttribute('aria-pressed'),'false');assert.equal(f.label.textContent,'動きを止める');
 f.media.listener({matches:true});assert.equal(f.doc.documentElement.getAttribute('data-motion'),'on');
 f.motion.fire('click');assert.equal(f.doc.documentElement.getAttribute('data-motion'),'off');assert.equal(f.label.textContent,'動きを再生');
});
test('system preference updates automatically before a manual choice',()=>{
 const f=fixture();assert.equal(f.doc.documentElement.getAttribute('data-motion'),'on');f.media.listener({matches:true});assert.equal(f.doc.documentElement.getAttribute('data-motion'),'off');f.media.listener({matches:false});assert.equal(f.doc.documentElement.getAttribute('data-motion'),'on');
});
test('pages without menus or motion controls work and still reflect system preference',()=>{
 const f=fixture({withMenu:false,withMotion:false,reduced:true});assert.equal(f.doc.documentElement.getAttribute('data-motion'),'off');assert.doesNotThrow(()=>f.doc.fire('keydown',{key:'Escape'}));assert.doesNotThrow(()=>f.doc.fire('click',{target:null}));
 const old=fixture({withMedia:false,withMenu:false,withMotion:false});assert.equal(old.doc.documentElement.getAttribute('data-motion'),'on');
});
test('legacy matchMedia change listener is supported',()=>{
 const f=fixture({legacyMedia:true});assert.equal(typeof f.media.listener,'function');f.media.listener({matches:true});assert.equal(f.controller.isPaused(),true);
});