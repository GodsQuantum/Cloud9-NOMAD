const {chromium}=require('/qa/node_modules/playwright');
const fs=require('fs');
const base=process.env.NOMAD_BASE_URL||'http://127.0.0.1:8080';
const routes=['/','/home','/maps','/easy-setup','/supply-depot',
  '/docs/home','/docs/about','/docs/getting-started','/docs/supply-depot-apps',
  '/docs/use-cases','/docs/community-add-ons','/docs/updates','/docs/release-notes',
  '/docs/faq','/docs/api-reference','/docs/drug-reference','/settings/system',
  '/settings/benchmark','/settings/zim','/settings/zim/remote-explorer',
  '/settings/creator-packs','/settings/maps','/settings/update','/settings/advanced',
  '/settings/support','/settings/legal','/reference'];
async function extract(page) {
 return page.evaluate(()=>{
 const out=[];
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
 let n;while(n=w.nextNode()) {
  const p=n.parentElement;
  if(!p||p.closest('script,style,textarea,pre,code,[contenteditable="true"],[translate="no"],svg'))continue;
  const raw=n.nodeValue||'';
  const value=raw.replace(/\s+/g,' ').trim();
  if(value.length>=3&&value.length<=400&&/[A-Za-z]/.test(value))out.push(value);
 }
 document.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(e=>{
  for(const attr of ['placeholder','title','aria-label','alt']){
   const val=e.getAttribute(attr);
   if(val&&val.length>=3&&val.length<=400&&/[A-Za-z]/.test(val))out.push(val);
  }
 });
 return out;
 });
}
(async()=>{
 const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const ctx=await browser.newContext({locale:'en-US',viewport:{width:1280,height:960}});
 const page=await ctx.newPage();const keys={}, errors=[];
 page.on('pageerror',e=>errors.push(e.message.slice(0,140)));
 for(const route of routes) {
  try{
   const response=await page.goto(base+route,{waitUntil:'domcontentloaded',timeout:14000});
   await page.waitForTimeout(240);
   const values=await extract(page);
   for(const value of values){keys[value]??=[];if(keys[value].length<4&&!keys[value].includes(route))keys[value].push(route)}
   console.log('ROUTE',route,response?.status(),values.length);
  }catch(e){console.log('FAILED',route,e.message.slice(0,125))}
 }
 fs.writeFileSync('/qa/nomad-ui-english-samples.json',JSON.stringify({routes,errors,keys},null,2));
 console.log('TOTAL_KEYS',Object.keys(keys).length,'JS_ERRORS',errors.length);
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
