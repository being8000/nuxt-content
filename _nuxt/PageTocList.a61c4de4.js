import{o as t,b as r,F as d,L as i,I as p,t as a,m as s,i as h,c as u,h as o}from"./entry.c5f8fede.js";const k={class:"text-slate-700 text-sm leading-6"},x=["href"],_=["href"],m=o("svg",{width:"3",height:"24",viewBox:"0 -9 3 24",class:"mr-2 text-slate-400 overflow-visible group-hover:text-primary-800 dark:text-slate-200 dark:group-hover:text-primary-800"},[o("path",{d:"M0 0L3 3L0 6",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})],-1),y={__name:"PageTocList",props:{links:{type:Array,default:()=>[]},depth:{type:[String,Number],default:2}},setup(l){return(f,g)=>{const n=y;return t(),r("ul",k,[(t(!0),r(d,null,i(l.links,(e,c)=>(t(),r("li",{key:c,class:p({"ml-4":e.depth==3})},[e.depth==2?(t(),r("a",{key:0,href:`#${e.id}`,class:"block py-1 font-medium hover:text-primary-800 dark:text-slate-400 dark:hover:text-primary-800"},a(e.text),9,x)):s("",!0),e.depth==3?(t(),r("a",{key:1,href:`#${e.id}`,class:"group flex items-start py-1 dark:text-slate-400"},[m,h(" "+a(e.text),1)],8,_)):s("",!0),e.children?(t(),u(n,{key:2,links:e.children},null,8,["links"])):s("",!0)],2))),128))])}}};export{y as default};