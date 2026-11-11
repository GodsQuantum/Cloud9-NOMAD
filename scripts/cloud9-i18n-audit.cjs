/* Audits human-facing strings in the whole TSX UI. Does not modify the source. */
const fs=require('fs'),path=require('path')
const {createRequire}=require('module')
const appRequire=createRequire(path.resolve(__dirname,'../admin/package.json'))
const parser=appRequire('@babel/parser')
const traverse=appRequire('@babel/traverse').default
const root=path.resolve(process.argv[2]||path.join(__dirname,'../admin/inertia'))
const keys=new Map(),files=new Map(),fail=[]
const props=new Set(['title','description','label','placeholder','aria-label','alt','helperText','helpText','tooltip','heading','emptyText','emptyMessage','buttonText','message','subtitle','name'])
function valid(s) {
  s=s.replace(/\s+/g,' ').trim()
  return s.length>=2 && s.length<=300 && /[a-zA-Z]/.test(s) &&
    !/^https?:\/\//.test(s) && !/^[a-z][a-z0-9_.:-]+$/.test(s) &&
    !/[\n\r]/.test(s) && !/\b(?:className|onClick|undefined|const |function )\b/.test(s)
}
function walk(d) {for(const e of fs.readdirSync(d,{withFileTypes:true})) {
  const full=path.join(d,e.name)
  if(e.isDirectory())walk(full)
  else if(e.isFile()&&/\.tsx$/.test(e.name)) {
    const src=fs.readFileSync(full,'utf8'),cand=[]
    try {
      const ast=parser.parse(src,{sourceType:'module',plugins:['typescript','jsx']})
      traverse(ast,{
        JSXText({node}) {
          const s=node.value.replace(/\s+/g,' ').trim()
          if(valid(s))cand.push({text:s,kind:'jsx',start:node.start,end:node.end})
        },
        JSXAttribute({node}) {
          if(props.has(node.name?.name)&&node.value?.type==='StringLiteral') {
            const s=node.value.value.trim()
            if(valid(s))cand.push({text:s,kind:'attribute',start:node.value.start,end:node.value.end})
          }
        },
        ObjectProperty({node}) {
          const k=node.key?.name||node.key?.value
          if(props.has(k)&&node.value?.type==='StringLiteral') {
            const s=node.value.value.trim()
            if(valid(s))cand.push({text:s,kind:'property',start:node.value.start,end:node.value.end})
          }
        }
      })
    }catch(e){fail.push([full,e.message]);continue}
    if(cand.length)files.set(path.relative(root,full),cand)
    for(const c of cand){const old=keys.get(c.text)||[];old.push([path.relative(root,full),c.kind]);keys.set(c.text,old)}
  }
}}
walk(root)
const o={stats:{filesAudited:files.size,occurrences:[...files.values()].reduce((a,b)=>a+b.length,0),uniqueKeys:keys.size,parseFailures:fail},files:Object.fromEntries(files),keys:Object.fromEntries(keys)}
if(process.argv[3])fs.writeFileSync(process.argv[3],JSON.stringify(o,null,2))
console.log(JSON.stringify(o.stats))
