import{S as o,i as s,s as i,o as l}from"../../chunks/index-e85f5ed2.js";import{c as t}from"../../chunks/singletons-97f277b8.js";import{b as r}from"../../chunks/paths-6cd3a76e.js";t.disable_scroll_handling;const c=t.goto;t.invalidate;t.invalidateAll;t.prefetch;t.prefetch_routes;t.before_navigate;t.after_navigate;function f(n){return l(async()=>{const e=window.location.hash.split("/");let a="edit";e.length>2&&(a=`${e[1]}#${e[2]}`),await c(`${r}/${a}`,{replaceState:!0})}),[]}class d extends o{constructor(e){super(),s(this,e,f,null,i,{})}}export{d as default};
