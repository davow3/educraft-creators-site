// Local static preview. Production is served by Cloudflare Pages.
import http from 'node:http';
import {readFile, stat, realpath} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(fileURLToPath(new URL('../',import.meta.url)));
const rootReal=await realpath(root);
const port=Number(process.argv[2] || process.env.PORT || 4173);
if(!Number.isInteger(port)||port<1||port>65535)throw Error('Choose a port from 1 to 65535.');
const blocked=new Set(['scripts','content','tests','.git','.openai','node_modules','docs']);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.ico':'image/x-icon','.svg':'image/svg+xml','.mp4':'video/mp4'};
const inside=filename=>filename===rootReal||filename.startsWith(rootReal+path.sep);
async function exists(filename){try{return(await stat(filename)).isFile();}catch{return false;}}
async function missing(req,res){const file=path.join(root,'404.html');const body=await exists(file)?await readFile(file):Buffer.from('Not found');res.writeHead(404,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(req.method==='HEAD'?undefined:body);}
async function handle(req,res){
  if(req.method!=='GET'&&req.method!=='HEAD'){res.writeHead(405,{Allow:'GET, HEAD'});res.end();return;}
  let pathname;
  try{pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);}catch{res.writeHead(400);res.end('Bad request');return;}
  const segments=pathname.split('/').filter(Boolean);
  if(pathname.includes('\\')||pathname.includes('\0')||segments.some(part=>part==='..'||part.startsWith('.')||blocked.has(part.toLowerCase()))){await missing(req,res);return;}
  let filename=path.resolve(root,'.'+pathname);
  if(filename!==root&&!filename.startsWith(root+path.sep)){await missing(req,res);return;}
  if(pathname.endsWith('/'))filename=path.join(filename,'index.html');
  else if(!path.extname(filename)){
    if(await exists(filename+'.html'))filename+='.html';
    else if(await exists(path.join(filename,'index.html'))){const url=new URL(req.url,'http://localhost');res.writeHead(308,{Location:url.pathname+'/'+url.search});res.end();return;}
  }
  if(!mime[path.extname(filename).toLowerCase()]||!await exists(filename)){await missing(req,res);return;}
  if(!inside(await realpath(filename))){await missing(req,res);return;}
  const content=await readFile(filename);
  res.writeHead(200,{'Content-Type':mime[path.extname(filename).toLowerCase()],'Content-Length':content.length,'Cache-Control':'no-store'});
  res.end(req.method==='HEAD'?undefined:content);
}
const server=http.createServer((req,res)=>{handle(req,res).catch(error=>{console.error(error.message);if(!res.headersSent)res.writeHead(500);res.end('Preview server error');});});
server.listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}/`));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(()=>process.exit(0)));