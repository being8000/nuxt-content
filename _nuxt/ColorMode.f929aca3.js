import c from"./component.vue3.2fcf074d.js";import{j as i,o as l,b as a,h as e,t,w as p,v as m,k as u,l as _,i as s,m as h}from"./entry.c5f8fede.js";import"./client-only.d0358cc7.js";const v=e("option",{value:"system"},"System",-1),f=e("option",{value:"light"},"Light",-1),M=e("option",{value:"dark"},"Dark",-1),C=e("option",{value:"sepia"},"Sepia",-1),k=[v,f,M,C],$={key:0},N={__name:"ColorMode",setup(y){return i(),(o,r)=>{const n=c;return l(),a("div",null,[e("h1",null,"Color mode: "+t(o.$colorMode.value),1),p(e("select",{"onUpdate:modelValue":r[0]||(r[0]=d=>o.$colorMode.preference=d)},k,512),[[m,o.$colorMode.preference]]),u(n,{placeholder:"...",tag:"span"},{default:_(()=>[s(" Color mode: "),e("b",null,t(o.$colorMode.preference),1),o.$colorMode.preference==="system"?(l(),a("span",$,[s("("),e("i",null,t(o.$colorMode.value),1),s(" mode detected)")])):h("",!0)]),_:1})])}}};export{N as default};