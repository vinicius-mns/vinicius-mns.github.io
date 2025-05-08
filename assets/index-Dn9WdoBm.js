var Tp=Object.defineProperty;var au=n=>{throw TypeError(n)};var Ap=(n,e,t)=>e in n?Tp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var ot=(n,e,t)=>Ap(n,typeof e!="symbol"?e+"":e,t),wp=(n,e,t)=>e.has(n)||au("Cannot "+t);var lu=(n,e,t)=>e.has(n)?au("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var Us=(n,e,t)=>(wp(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function mc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return r=>!!t[r]}const mt={},vr=[],Ln=()=>{},Rp=()=>!1,Go=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gc=n=>n.startsWith("onUpdate:"),Gt=Object.assign,_c=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Cp=Object.prototype.hasOwnProperty,Ke=(n,e)=>Cp.call(n,e),Fe=Array.isArray,xr=n=>Es(n)==="[object Map]",Wo=n=>Es(n)==="[object Set]",cu=n=>Es(n)==="[object Date]",ze=n=>typeof n=="function",At=n=>typeof n=="string",xi=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",ch=n=>(pt(n)||ze(n))&&ze(n.then)&&ze(n.catch),uh=Object.prototype.toString,Es=n=>uh.call(n),Pp=n=>Es(n).slice(8,-1),fh=n=>Es(n)==="[object Object]",vc=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,po=mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Dp=/-(\w)/g,In=Xo(n=>n.replace(Dp,(e,t)=>t?t.toUpperCase():"")),Lp=/\B([A-Z])/g,Or=Xo(n=>n.replace(Lp,"-$1").toLowerCase()),$o=Xo(n=>n.charAt(0).toUpperCase()+n.slice(1)),xa=Xo(n=>n?`on${$o(n)}`:""),qi=(n,e)=>!Object.is(n,e),mo=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Ao=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},rl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let uu;const sl=()=>uu||(uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xc(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=At(i)?Fp(i):xc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(At(n)||pt(n))return n}const Ip=/;(?![^(]*\))/g,Up=/:([^]+)/,Np=/\/\*[^]*?\*\//g;function Fp(n){const e={};return n.replace(Np,"").split(Ip).forEach(t=>{if(t){const i=t.split(Up);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Xn(n){let e="";if(At(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Xn(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Op="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=mc(Op);function hh(n){return!!n||n===""}function Bp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=qo(n[i],e[i]);return t}function qo(n,e){if(n===e)return!0;let t=cu(n),i=cu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=xi(n),i=xi(e),t||i)return n===e;if(t=Fe(n),i=Fe(e),t||i)return t&&i?Bp(n,e):!1;if(t=pt(n),i=pt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!qo(n[o],e[o]))return!1}}return String(n)===String(e)}function dh(n,e){return n.findIndex(t=>qo(t,e))}const rn=n=>At(n)?n:n==null?"":Fe(n)||pt(n)&&(n.toString===uh||!ze(n.toString))?JSON.stringify(n,ph,2):String(n),ph=(n,e)=>e&&e.__v_isRef?ph(n,e.value):xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ma(i,s)+" =>"]=r,t),{})}:Wo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ma(t))}:xi(e)?Ma(e):pt(e)&&!Fe(e)&&!fh(e)?String(e):e,Ma=(n,e="")=>{var t;return xi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let en;class mh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=en;try{return en=this,e()}finally{en=t}}}on(){en=this}off(){en=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function gh(n){return new mh(n)}function zp(n,e=en){e&&e.active&&e.effects.push(n)}function _h(){return en}function Hp(n){en&&en.cleanups.push(n)}const Mc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},vh=n=>(n.w&Mi)>0,xh=n=>(n.n&Mi)>0,Vp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Mi},Gp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];vh(r)&&!xh(r)?r.delete(n):e[t++]=r,r.w&=~Mi,r.n&=~Mi}e.length=t}},wo=new WeakMap;let es=0,Mi=1;const ol=30;let _n;const Wi=Symbol(""),al=Symbol("");class Sc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,zp(this,i)}run(){if(!this.active)return this.fn();let e=_n,t=pi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_n,_n=this,pi=!0,Mi=1<<++es,es<=ol?Vp(this):fu(this),this.fn()}finally{es<=ol&&Gp(this),Mi=1<<--es,_n=this.parent,pi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_n===this?this.deferStop=!0:this.active&&(fu(this),this.onStop&&this.onStop(),this.active=!1)}}function fu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let pi=!0;const Mh=[];function kr(){Mh.push(pi),pi=!1}function Br(){const n=Mh.pop();pi=n===void 0?!0:n}function Kt(n,e,t){if(pi&&_n){let i=wo.get(n);i||wo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Mc()),Sh(r)}}function Sh(n,e){let t=!1;es<=ol?xh(n)||(n.n|=Mi,t=!vh(n)):t=!n.has(_n),t&&(n.add(_n),_n.deps.push(n))}function jn(n,e,t,i,r,s){const o=wo.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!xi(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(n)?vc(t)&&a.push(o.get("length")):(a.push(o.get(Wi)),xr(n)&&a.push(o.get(al)));break;case"delete":Fe(n)||(a.push(o.get(Wi)),xr(n)&&a.push(o.get(al)));break;case"set":xr(n)&&a.push(o.get(Wi));break}if(a.length===1)a[0]&&ll(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ll(Mc(l))}}function ll(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&hu(i);for(const i of t)i.computed||hu(i)}function hu(n,e){(n!==_n||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function Wp(n,e){var t;return(t=wo.get(n))==null?void 0:t.get(e)}const Xp=mc("__proto__,__v_isRef,__isVue"),Eh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(xi)),du=$p();function $p(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ze(this);for(let s=0,o=this.length;s<o;s++)Kt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ze)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){kr();const i=Ze(this)[e].apply(this,t);return Br(),i}}),n}function qp(n){const e=Ze(this);return Kt(e,"has",n),e.hasOwnProperty(n)}class yh{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?om:wh:s?Ah:Th).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!r){if(o&&Ke(du,t))return Reflect.get(du,t,i);if(t==="hasOwnProperty")return qp}const a=Reflect.get(e,t,i);return(xi(t)?Eh.has(t):Xp(t))||(r||Kt(e,"get",t),s)?a:Et(a)?o&&vc(t)?a:a.value:pt(a)?r?Ch(a):nn(a):a}}class bh extends yh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(Tr(s)&&Et(s)&&!Et(i))return!1;if(!this._shallow&&(!Ro(i)&&!Tr(i)&&(s=Ze(s),i=Ze(i)),!Fe(e)&&Et(s)&&!Et(i)))return s.value=i,!0;const o=Fe(e)&&vc(t)?Number(t)<e.length:Ke(e,t),a=Reflect.set(e,t,i,r);return e===Ze(r)&&(o?qi(i,s)&&jn(e,"set",t,i):jn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&jn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!xi(t)||!Eh.has(t))&&Kt(e,"has",t),i}ownKeys(e){return Kt(e,"iterate",Fe(e)?"length":Wi),Reflect.ownKeys(e)}}class Yp extends yh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const jp=new bh,Kp=new Yp,Zp=new bh(!0),Ec=n=>n,Yo=n=>Reflect.getPrototypeOf(n);function Ns(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ze(n),s=Ze(e);t||(qi(e,s)&&Kt(r,"get",e),Kt(r,"get",s));const{has:o}=Yo(r),a=i?Ec:t?Tc:fs;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Fs(n,e=!1){const t=this.__v_raw,i=Ze(t),r=Ze(n);return e||(qi(n,r)&&Kt(i,"has",n),Kt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Os(n,e=!1){return n=n.__v_raw,!e&&Kt(Ze(n),"iterate",Wi),Reflect.get(n,"size",n)}function pu(n){n=Ze(n);const e=Ze(this);return Yo(e).has.call(e,n)||(e.add(n),jn(e,"add",n,n)),this}function mu(n,e){e=Ze(e);const t=Ze(this),{has:i,get:r}=Yo(t);let s=i.call(t,n);s||(n=Ze(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?qi(e,o)&&jn(t,"set",n,e):jn(t,"add",n,e),this}function gu(n){const e=Ze(this),{has:t,get:i}=Yo(e);let r=t.call(e,n);r||(n=Ze(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&jn(e,"delete",n,void 0),s}function _u(){const n=Ze(this),e=n.size!==0,t=n.clear();return e&&jn(n,"clear",void 0,void 0),t}function ks(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ze(o),l=e?Ec:n?Tc:fs;return!n&&Kt(a,"iterate",Wi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Bs(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),o=xr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?Ec:e?Tc:fs;return!e&&Kt(s,"iterate",l?al:Wi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ni(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Jp(){const n={get(s){return Ns(this,s)},get size(){return Os(this)},has:Fs,add:pu,set:mu,delete:gu,clear:_u,forEach:ks(!1,!1)},e={get(s){return Ns(this,s,!1,!0)},get size(){return Os(this)},has:Fs,add:pu,set:mu,delete:gu,clear:_u,forEach:ks(!1,!0)},t={get(s){return Ns(this,s,!0)},get size(){return Os(this,!0)},has(s){return Fs.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:ks(!0,!1)},i={get(s){return Ns(this,s,!0,!0)},get size(){return Os(this,!0)},has(s){return Fs.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:ks(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Bs(s,!1,!1),t[s]=Bs(s,!0,!1),e[s]=Bs(s,!1,!0),i[s]=Bs(s,!0,!0)}),[n,t,e,i]}const[Qp,em,tm,nm]=Jp();function yc(n,e){const t=e?n?nm:tm:n?em:Qp;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const im={get:yc(!1,!1)},rm={get:yc(!1,!0)},sm={get:yc(!0,!1)},Th=new WeakMap,Ah=new WeakMap,wh=new WeakMap,om=new WeakMap;function am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lm(n){return n.__v_skip||!Object.isExtensible(n)?0:am(Pp(n))}function nn(n){return Tr(n)?n:bc(n,!1,jp,im,Th)}function Rh(n){return bc(n,!1,Zp,rm,Ah)}function Ch(n){return bc(n,!0,Kp,sm,wh)}function bc(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=lm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function mi(n){return Tr(n)?mi(n.__v_raw):!!(n&&n.__v_isReactive)}function Tr(n){return!!(n&&n.__v_isReadonly)}function Ro(n){return!!(n&&n.__v_isShallow)}function Ph(n){return mi(n)||Tr(n)}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function ys(n){return Ao(n,"__v_skip",!0),n}const fs=n=>pt(n)?nn(n):n,Tc=n=>pt(n)?Ch(n):n;function Dh(n){pi&&_n&&(n=Ze(n),Sh(n.dep||(n.dep=Mc())))}function Lh(n,e){n=Ze(n);const t=n.dep;t&&ll(t)}function Et(n){return!!(n&&n.__v_isRef===!0)}function Mt(n){return Ih(n,!1)}function cm(n){return Ih(n,!0)}function Ih(n,e){return Et(n)?n:new um(n,e)}class um{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ze(e),this._value=t?e:fs(e)}get value(){return Dh(this),this._value}set value(e){const t=this.__v_isShallow||Ro(e)||Tr(e);e=t?e:Ze(e),qi(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:fs(e),Lh(this))}}function ut(n){return Et(n)?n.value:n}const fm={get:(n,e,t)=>ut(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Et(r)&&!Et(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Uh(n){return mi(n)?n:new Proxy(n,fm)}function hm(n){const e=Fe(n)?new Array(n.length):{};for(const t in n)e[t]=pm(n,t);return e}class dm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Wp(Ze(this._object),this._key)}}function pm(n,e,t){const i=n[e];return Et(i)?i:new dm(n,e,t)}class mm{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sc(e,()=>{this._dirty||(this._dirty=!0,Lh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ze(this);return Dh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function gm(n,e,t=!1){let i,r;const s=ze(n);return s?(i=n,r=Ln):(i=n.get,r=n.set),new mm(i,r,s||!r,t)}function gi(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){jo(s,e,t)}return r}function Sn(n,e,t,i){if(ze(n)){const s=gi(n,e,t,i);return s&&ch(s)&&s.catch(o=>{jo(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Sn(n[s],e,t,i));return r}function jo(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){gi(l,null,10,[n,o,a]);return}}_m(n,t,r,i)}function _m(n,e,t,i=!0){console.error(n)}let hs=!1,cl=!1;const kt=[];let Rn=0;const Mr=[];let Gn=null,Fi=0;const Nh=Promise.resolve();let Ac=null;function wc(n){const e=Ac||Nh;return n?e.then(this?n.bind(this):n):e}function vm(n){let e=Rn+1,t=kt.length;for(;e<t;){const i=e+t>>>1,r=kt[i],s=ds(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Rc(n){(!kt.length||!kt.includes(n,hs&&n.allowRecurse?Rn+1:Rn))&&(n.id==null?kt.push(n):kt.splice(vm(n.id),0,n),Fh())}function Fh(){!hs&&!cl&&(cl=!0,Ac=Nh.then(kh))}function xm(n){const e=kt.indexOf(n);e>Rn&&kt.splice(e,1)}function Mm(n){Fe(n)?Mr.push(...n):(!Gn||!Gn.includes(n,n.allowRecurse?Fi+1:Fi))&&Mr.push(n),Fh()}function vu(n,e,t=hs?Rn+1:0){for(;t<kt.length;t++){const i=kt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;kt.splice(t,1),t--,i()}}}function Oh(n){if(Mr.length){const e=[...new Set(Mr)];if(Mr.length=0,Gn){Gn.push(...e);return}for(Gn=e,Gn.sort((t,i)=>ds(t)-ds(i)),Fi=0;Fi<Gn.length;Fi++)Gn[Fi]();Gn=null,Fi=0}}const ds=n=>n.id==null?1/0:n.id,Sm=(n,e)=>{const t=ds(n)-ds(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function kh(n){cl=!1,hs=!0,kt.sort(Sm);try{for(Rn=0;Rn<kt.length;Rn++){const e=kt[Rn];e&&e.active!==!1&&gi(e,null,14)}}finally{Rn=0,kt.length=0,Oh(),hs=!1,Ac=null,(kt.length||Mr.length)&&kh()}}function Em(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||mt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||mt;h&&(r=t.map(p=>At(p)?p.trim():p)),f&&(r=t.map(rl))}let a,l=i[a=xa(e)]||i[a=xa(In(e))];!l&&s&&(l=i[a=xa(Or(e))]),l&&Sn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Sn(c,n,6,r)}}function Bh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ze(n)){const l=c=>{const u=Bh(c,e,!0);u&&(a=!0,Gt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Gt(o,s),pt(n)&&i.set(n,o),o)}function Ko(n,e){return!n||!Go(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,Or(e))||Ke(n,e))}let Lt=null,Zo=null;function Co(n){const e=Lt;return Lt=n,Zo=n&&n.type.__scopeId||null,e}function Jo(n){Zo=n}function Qo(){Zo=null}function zr(n,e=Lt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Pu(-1);const s=Co(e);let o;try{o=n(...r)}finally{Co(s),i._d&&Pu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function xu(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:_,inheritAttrs:v}=n;let m,d;const A=Co(n);try{if(t.shapeFlag&4){const y=r||i,U=y;m=An(u.call(U,y,f,s,p,h,_)),d=l}else{const y=e;m=An(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),d=e.props?l:ym(l)}}catch(y){ss.length=0,jo(y,n,1),m=lt(Si)}let w=m;if(d&&v!==!1){const y=Object.keys(d),{shapeFlag:U}=w;y.length&&U&7&&(o&&y.some(gc)&&(d=bm(d,o)),w=Rr(w,d))}return t.dirs&&(w=Rr(w),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&(w.transition=t.transition),m=w,Co(A),m}const ym=n=>{let e;for(const t in n)(t==="class"||t==="style"||Go(t))&&((e||(e={}))[t]=n[t]);return e},bm=(n,e)=>{const t={};for(const i in n)(!gc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Tm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Mu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Ko(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Mu(i,o,c):!0:!!o;return!1}function Mu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Ko(t,s))return!0}return!1}function Am({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const zh="components";function Hh(n,e){return Gh(zh,n,!0,e)||n}const Vh=Symbol.for("v-ndc");function wm(n){return At(n)?Gh(zh,n,!1)||n:n||Vh}function Gh(n,e,t=!0,i=!1){const r=Lt||wt;if(r){const s=r.type;{const a=_g(s,!1);if(a&&(a===e||a===In(e)||a===$o(In(e))))return s}const o=Su(r[n]||s[n],e)||Su(r.appContext[n],e);return!o&&i?s:o}}function Su(n,e){return n&&(n[e]||n[In(e)]||n[$o(In(e))])}const Rm=n=>n.__isSuspense;function Cm(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Mm(n)}function Wh(n,e){return ea(n,null,e)}function Pm(n,e){return ea(n,null,{flush:"post"})}const zs={};function Sr(n,e,t){return ea(n,e,t)}function ea(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=mt){var a;const l=_h()===((a=wt)==null?void 0:a.scope)?wt:null;let c,u=!1,f=!1;if(Et(n)?(c=()=>n.value,u=Ro(n)):mi(n)?(c=()=>n,i=!0):Fe(n)?(f=!0,u=n.some(y=>mi(y)||Ro(y)),c=()=>n.map(y=>{if(Et(y))return y.value;if(mi(y))return Hi(y);if(ze(y))return gi(y,l,2)})):ze(n)?e?c=()=>gi(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Sn(n,l,3,[p])}:c=Ln,e&&i){const y=c;c=()=>Hi(y())}let h,p=y=>{h=A.onStop=()=>{gi(y,l,4),h=A.onStop=void 0}},_;if(gs)if(p=Ln,e?t&&Sn(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const y=Mg();_=y.__watcherHandles||(y.__watcherHandles=[])}else return Ln;let v=f?new Array(n.length).fill(zs):zs;const m=()=>{if(A.active)if(e){const y=A.run();(i||u||(f?y.some((U,L)=>qi(U,v[L])):qi(y,v)))&&(h&&h(),Sn(e,l,3,[y,v===zs?void 0:f&&v[0]===zs?[]:v,p]),v=y)}else A.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>$t(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Rc(m));const A=new Sc(c,d);e?t?m():v=A.run():r==="post"?$t(A.run.bind(A),l&&l.suspense):A.run();const w=()=>{A.stop(),l&&l.scope&&_c(l.scope.effects,A)};return _&&_.push(w),w}function Dm(n,e,t){const i=this.proxy,r=At(n)?n.includes(".")?Xh(i,n):()=>i[n]:n.bind(i,i);let s;ze(e)?s=e:(s=e.handler,t=e);const o=wt;Cr(this);const a=ea(r,s.bind(i),t);return o?Cr(o):Xi(),a}function Xh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Hi(n,e){if(!pt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Et(n))Hi(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)Hi(n[t],e);else if(Wo(n)||xr(n))n.forEach(t=>{Hi(t,e)});else if(fh(n))for(const t in n)Hi(n[t],e);return n}function Ar(n,e){const t=Lt;if(t===null)return n;const i=sa(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=mt]=e[s];o&&(ze(o)&&(o={mounted:o,updated:o}),o.deep&&Hi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Ai(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(kr(),Sn(l,t,8,[n.el,a,n,e]),Br())}}/*! #__NO_SIDE_EFFECTS__ */function _t(n,e){return ze(n)?Gt({name:n.name},e,{setup:n}):n}const is=n=>!!n.type.__asyncLoader,$h=n=>n.type.__isKeepAlive;function Lm(n,e){qh(n,"a",e)}function Im(n,e){qh(n,"da",e)}function qh(n,e,t=wt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ta(e,i,t),t){let r=t.parent;for(;r&&r.parent;)$h(r.parent.vnode)&&Um(i,e,t,r),r=r.parent}}function Um(n,e,t,i){const r=ta(e,n,i,!0);Pc(()=>{_c(i[e],r)},t)}function ta(n,e,t=wt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;kr(),Cr(t);const a=Sn(e,t,n,o);return Xi(),Br(),a});return i?r.unshift(s):r.push(s),s}}const ei=n=>(e,t=wt)=>(!gs||n==="sp")&&ta(n,(...i)=>e(...i),t),Nm=ei("bm"),Un=ei("m"),Fm=ei("bu"),Cc=ei("u"),na=ei("bum"),Pc=ei("um"),Om=ei("sp"),km=ei("rtg"),Bm=ei("rtc");function zm(n,e=wt){ta("ec",n,e)}function wr(n,e,t,i){let r;const s=t;if(Fe(n)||At(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s)}}else r=[];return r}function Po(n,e,t={},i,r){if(Lt.isCE||Lt.parent&&is(Lt.parent)&&Lt.parent.isCE)return lt("slot",t,i);let s=n[e];s&&s._c&&(s._d=!1),Xe();const o=s&&Yh(s(t)),a=sn(Dt,{key:t.key||o&&o.key||`_${e}`},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),a}function Yh(n){return n.some(e=>Lo(e)?!(e.type===Si||e.type===Dt&&!Yh(e.children)):!0)?n:null}const ul=n=>n?ld(n)?sa(n)||n.proxy:ul(n.parent):null,rs=Gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ul(n.parent),$root:n=>ul(n.root),$emit:n=>n.emit,$options:n=>Kh(n),$forceUpdate:n=>n.f||(n.f=()=>Rc(n.update)),$nextTick:n=>n.n||(n.n=wc.bind(n.proxy)),$watch:n=>Dm.bind(n)}),Sa=(n,e)=>n!==mt&&!n.__isScriptSetup&&Ke(n,e),Hm={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Sa(i,e))return o[e]=1,i[e];if(r!==mt&&Ke(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==mt&&Ke(t,e))return o[e]=4,t[e];fl&&(o[e]=0)}}const u=rs[e];let f,h;if(u)return e==="$attrs"&&Kt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==mt&&Ke(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ke(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Sa(r,e)?(r[e]=t,!0):i!==mt&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==mt&&Ke(n,o)||Sa(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(rs,o)||Ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Eu(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let fl=!0;function Vm(n){const e=Kh(n),t=n.proxy,i=n.ctx;fl=!1,e.beforeCreate&&yu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:w,unmounted:y,render:U,renderTracked:L,renderTriggered:C,errorCaptured:N,serverPrefetch:b,expose:E,inheritAttrs:P,components:Q,directives:G,filters:oe}=e;if(c&&Gm(c,i,null),o)for(const ee in o){const z=o[ee];ze(z)&&(i[ee]=z.bind(t))}if(r){const ee=r.call(t,t);pt(ee)&&(n.data=nn(ee))}if(fl=!0,s)for(const ee in s){const z=s[ee],ge=ze(z)?z.bind(t,t):ze(z.get)?z.get.bind(t,t):Ln,Me=!ze(z)&&ze(z.set)?z.set.bind(t):Ln,we=Bt({get:ge,set:Me});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>we.value,set:Le=>we.value=Le})}if(a)for(const ee in a)jh(a[ee],i,t,ee);if(l){const ee=ze(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(z=>{go(z,ee[z])})}u&&yu(u,n,"c");function $(ee,z){Fe(z)?z.forEach(ge=>ee(ge.bind(t))):z&&ee(z.bind(t))}if($(Nm,f),$(Un,h),$(Fm,p),$(Cc,_),$(Lm,v),$(Im,m),$(zm,N),$(Bm,L),$(km,C),$(na,A),$(Pc,y),$(Om,b),Fe(E))if(E.length){const ee=n.exposed||(n.exposed={});E.forEach(z=>{Object.defineProperty(ee,z,{get:()=>t[z],set:ge=>t[z]=ge})})}else n.exposed||(n.exposed={});U&&n.render===Ln&&(n.render=U),P!=null&&(n.inheritAttrs=P),Q&&(n.components=Q),G&&(n.directives=G)}function Gm(n,e,t=Ln){Fe(n)&&(n=hl(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=fn(r.from||i,r.default,!0):s=fn(r.from||i):s=fn(r),Et(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function yu(n,e,t){Sn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function jh(n,e,t,i){const r=i.includes(".")?Xh(t,i):()=>t[i];if(At(n)){const s=e[n];ze(s)&&Sr(r,s)}else if(ze(n))Sr(r,n.bind(t));else if(pt(n))if(Fe(n))n.forEach(s=>jh(s,e,t,i));else{const s=ze(n.handler)?n.handler.bind(t):e[n.handler];ze(s)&&Sr(r,s,n)}}function Kh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Do(l,c,o,!0)),Do(l,e,o)),pt(e)&&s.set(e,l),l}function Do(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Do(n,s,t,!0),r&&r.forEach(o=>Do(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Wm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Wm={data:bu,props:Tu,emits:Tu,methods:ts,computed:ts,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:ts,directives:ts,watch:$m,provide:bu,inject:Xm};function bu(n,e){return e?n?function(){return Gt(ze(n)?n.call(this,this):n,ze(e)?e.call(this,this):e)}:e:n}function Xm(n,e){return ts(hl(n),hl(e))}function hl(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ht(n,e){return n?[...new Set([].concat(n,e))]:e}function ts(n,e){return n?Gt(Object.create(null),n,e):e}function Tu(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Gt(Object.create(null),Eu(n),Eu(e??{})):e}function $m(n,e){if(!n)return e;if(!e)return n;const t=Gt(Object.create(null),n);for(const i in e)t[i]=Ht(n[i],e[i]);return t}function Zh(){return{app:null,config:{isNativeTag:Rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qm=0;function Ym(n,e){return function(i,r=null){ze(i)||(i=Gt({},i)),r!=null&&!pt(r)&&(r=null);const s=Zh(),o=new WeakSet;let a=!1;const l=s.app={_uid:qm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Sg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&ze(c.install)?(o.add(c),c.install(l,...u)):ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=lt(i,r);return h.appContext=s,n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,sa(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ps=l;try{return c()}finally{ps=null}}};return l}}let ps=null;function go(n,e){if(wt){let t=wt.provides;const i=wt.parent&&wt.parent.provides;i===t&&(t=wt.provides=Object.create(i)),t[n]=e}}function fn(n,e,t=!1){const i=wt||Lt;if(i||ps){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ps._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ze(e)?e.call(i&&i.proxy):e}}function jm(){return!!(wt||Lt||ps)}function Km(n,e,t,i=!1){const r={},s={};Ao(s,ra,1),n.propsDefaults=Object.create(null),Jh(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Rh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Zm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ze(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Ko(n.emitsOptions,h))continue;const p=e[h];if(l)if(Ke(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=In(h);r[_]=dl(l,a,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Jh(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=Or(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=dl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&jn(n,"set","$attrs")}function Jh(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(po(l))continue;const c=e[l];let u;r&&Ke(r,u=In(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ko(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(t),c=a||mt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=dl(r,l,f,c[f],n,!Ke(c,f))}}return o}function dl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ze(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Cr(r),i=c[t]=l.call(null,e),Xi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Or(t))&&(i=!0))}return i}function Qh(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!ze(n)){const u=f=>{l=!0;const[h,p]=Qh(f,e,!0);Gt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,vr),vr;if(Fe(s))for(let u=0;u<s.length;u++){const f=In(s[u]);Au(f)&&(o[f]=mt)}else if(s)for(const u in s){const f=In(u);if(Au(f)){const h=s[u],p=o[f]=Fe(h)||ze(h)?{type:h}:Gt({},h);if(p){const _=Cu(Boolean,p.type),v=Cu(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||Ke(p,"default"))&&a.push(f)}}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Au(n){return n[0]!=="$"}function wu(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Ru(n,e){return wu(n)===wu(e)}function Cu(n,e){return Fe(e)?e.findIndex(t=>Ru(t,n)):ze(e)&&Ru(e,n)?0:-1}const ed=n=>n[0]==="_"||n==="$stable",Dc=n=>Fe(n)?n.map(An):[An(n)],Jm=(n,e,t)=>{if(e._n)return e;const i=zr((...r)=>Dc(e(...r)),t);return i._c=!1,i},td=(n,e,t)=>{const i=n._ctx;for(const r in n){if(ed(r))continue;const s=n[r];if(ze(s))e[r]=Jm(r,s,i);else if(s!=null){const o=Dc(s);e[r]=()=>o}}},nd=(n,e)=>{const t=Dc(e);n.slots.default=()=>t},Qm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ze(e),Ao(e,"_",t)):td(e,n.slots={})}else n.slots={},e&&nd(n,e);Ao(n.slots,ra,1)},eg=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Gt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,td(e,r)),o=e}else e&&(nd(n,e),o={default:1});if(s)for(const a in r)!ed(a)&&o[a]==null&&delete r[a]};function pl(n,e,t,i,r=!1){if(Fe(n)){n.forEach((h,p)=>pl(h,e&&(Fe(e)?e[p]:e),t,i,r));return}if(is(i)&&!r)return;const s=i.shapeFlag&4?sa(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===mt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):Et(c)&&(c.value=null)),ze(l))gi(l,a,12,[o,u]);else{const h=At(l),p=Et(l);if(h||p){const _=()=>{if(n.f){const v=h?Ke(f,l)?f[l]:u[l]:l.value;r?Fe(v)&&_c(v,s):Fe(v)?v.includes(s)||v.push(s):h?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ke(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,$t(_,t)):_()}}}const $t=Cm;function tg(n){return ng(n)}function ng(n,e){const t=sl();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Ln,insertStaticContent:_}=n,v=(T,R,I,x=null,Z=null,te=null,ne=!1,j=null,ce=!!R.dynamicChildren)=>{if(T===R)return;T&&!Wr(T,R)&&(x=F(T),Le(T,Z,te,!0),T=null),R.patchFlag===-2&&(ce=!1,R.dynamicChildren=null);const{type:V,ref:S,shapeFlag:g}=R;switch(V){case ia:m(T,R,I,x);break;case Si:d(T,R,I,x);break;case _o:T==null&&A(R,I,x,ne);break;case Dt:Q(T,R,I,x,Z,te,ne,j,ce);break;default:g&1?U(T,R,I,x,Z,te,ne,j,ce):g&6?G(T,R,I,x,Z,te,ne,j,ce):(g&64||g&128)&&V.process(T,R,I,x,Z,te,ne,j,ce,ae)}S!=null&&Z&&pl(S,T&&T.ref,te,R||T,!R)},m=(T,R,I,x)=>{if(T==null)i(R.el=a(R.children),I,x);else{const Z=R.el=T.el;R.children!==T.children&&c(Z,R.children)}},d=(T,R,I,x)=>{T==null?i(R.el=l(R.children||""),I,x):R.el=T.el},A=(T,R,I,x)=>{[T.el,T.anchor]=_(T.children,R,I,x,T.el,T.anchor)},w=({el:T,anchor:R},I,x)=>{let Z;for(;T&&T!==R;)Z=h(T),i(T,I,x),T=Z;i(R,I,x)},y=({el:T,anchor:R})=>{let I;for(;T&&T!==R;)I=h(T),r(T),T=I;r(R)},U=(T,R,I,x,Z,te,ne,j,ce)=>{ne=ne||R.type==="svg",T==null?L(R,I,x,Z,te,ne,j,ce):b(T,R,Z,te,ne,j,ce)},L=(T,R,I,x,Z,te,ne,j)=>{let ce,V;const{type:S,props:g,shapeFlag:D,transition:H,dirs:K}=T;if(ce=T.el=o(T.type,te,g&&g.is,g),D&8?u(ce,T.children):D&16&&N(T.children,ce,null,x,Z,te&&S!=="foreignObject",ne,j),K&&Ai(T,null,x,"created"),C(ce,T,T.scopeId,ne,x),g){for(const pe in g)pe!=="value"&&!po(pe)&&s(ce,pe,null,g[pe],te,T.children,x,Z,_e);"value"in g&&s(ce,"value",null,g.value),(V=g.onVnodeBeforeMount)&&Tn(V,x,T)}K&&Ai(T,null,x,"beforeMount");const W=ig(Z,H);W&&H.beforeEnter(ce),i(ce,R,I),((V=g&&g.onVnodeMounted)||W||K)&&$t(()=>{V&&Tn(V,x,T),W&&H.enter(ce),K&&Ai(T,null,x,"mounted")},Z)},C=(T,R,I,x,Z)=>{if(I&&p(T,I),x)for(let te=0;te<x.length;te++)p(T,x[te]);if(Z){let te=Z.subTree;if(R===te){const ne=Z.vnode;C(T,ne,ne.scopeId,ne.slotScopeIds,Z.parent)}}},N=(T,R,I,x,Z,te,ne,j,ce=0)=>{for(let V=ce;V<T.length;V++){const S=T[V]=j?fi(T[V]):An(T[V]);v(null,S,R,I,x,Z,te,ne,j)}},b=(T,R,I,x,Z,te,ne)=>{const j=R.el=T.el;let{patchFlag:ce,dynamicChildren:V,dirs:S}=R;ce|=T.patchFlag&16;const g=T.props||mt,D=R.props||mt;let H;I&&wi(I,!1),(H=D.onVnodeBeforeUpdate)&&Tn(H,I,R,T),S&&Ai(R,T,I,"beforeUpdate"),I&&wi(I,!0);const K=Z&&R.type!=="foreignObject";if(V?E(T.dynamicChildren,V,j,I,x,K,te):ne||z(T,R,j,null,I,x,K,te,!1),ce>0){if(ce&16)P(j,R,g,D,I,x,Z);else if(ce&2&&g.class!==D.class&&s(j,"class",null,D.class,Z),ce&4&&s(j,"style",g.style,D.style,Z),ce&8){const W=R.dynamicProps;for(let pe=0;pe<W.length;pe++){const de=W[pe],Ce=g[de],De=D[de];(De!==Ce||de==="value")&&s(j,de,Ce,De,Z,T.children,I,x,_e)}}ce&1&&T.children!==R.children&&u(j,R.children)}else!ne&&V==null&&P(j,R,g,D,I,x,Z);((H=D.onVnodeUpdated)||S)&&$t(()=>{H&&Tn(H,I,R,T),S&&Ai(R,T,I,"updated")},x)},E=(T,R,I,x,Z,te,ne)=>{for(let j=0;j<R.length;j++){const ce=T[j],V=R[j],S=ce.el&&(ce.type===Dt||!Wr(ce,V)||ce.shapeFlag&70)?f(ce.el):I;v(ce,V,S,null,x,Z,te,ne,!0)}},P=(T,R,I,x,Z,te,ne)=>{if(I!==x){if(I!==mt)for(const j in I)!po(j)&&!(j in x)&&s(T,j,I[j],null,ne,R.children,Z,te,_e);for(const j in x){if(po(j))continue;const ce=x[j],V=I[j];ce!==V&&j!=="value"&&s(T,j,V,ce,ne,R.children,Z,te,_e)}"value"in x&&s(T,"value",I.value,x.value)}},Q=(T,R,I,x,Z,te,ne,j,ce)=>{const V=R.el=T?T.el:a(""),S=R.anchor=T?T.anchor:a("");let{patchFlag:g,dynamicChildren:D,slotScopeIds:H}=R;H&&(j=j?j.concat(H):H),T==null?(i(V,I,x),i(S,I,x),N(R.children,I,S,Z,te,ne,j,ce)):g>0&&g&64&&D&&T.dynamicChildren?(E(T.dynamicChildren,D,I,Z,te,ne,j),(R.key!=null||Z&&R===Z.subTree)&&id(T,R,!0)):z(T,R,I,S,Z,te,ne,j,ce)},G=(T,R,I,x,Z,te,ne,j,ce)=>{R.slotScopeIds=j,T==null?R.shapeFlag&512?Z.ctx.activate(R,I,x,ne,ce):oe(R,I,x,Z,te,ne,ce):se(T,R,ce)},oe=(T,R,I,x,Z,te,ne)=>{const j=T.component=fg(T,x,Z);if($h(T)&&(j.ctx.renderer=ae),dg(j),j.asyncDep){if(Z&&Z.registerDep(j,$),!T.el){const ce=j.subTree=lt(Si);d(null,ce,R,I)}return}$(j,T,R,I,Z,te,ne)},se=(T,R,I)=>{const x=R.component=T.component;if(Tm(T,R,I))if(x.asyncDep&&!x.asyncResolved){ee(x,R,I);return}else x.next=R,xm(x.update),x.update();else R.el=T.el,x.vnode=R},$=(T,R,I,x,Z,te,ne)=>{const j=()=>{if(T.isMounted){let{next:S,bu:g,u:D,parent:H,vnode:K}=T,W=S,pe;wi(T,!1),S?(S.el=K.el,ee(T,S,ne)):S=K,g&&mo(g),(pe=S.props&&S.props.onVnodeBeforeUpdate)&&Tn(pe,H,S,K),wi(T,!0);const de=xu(T),Ce=T.subTree;T.subTree=de,v(Ce,de,f(Ce.el),F(Ce),T,Z,te),S.el=de.el,W===null&&Am(T,de.el),D&&$t(D,Z),(pe=S.props&&S.props.onVnodeUpdated)&&$t(()=>Tn(pe,H,S,K),Z)}else{let S;const{el:g,props:D}=R,{bm:H,m:K,parent:W}=T,pe=is(R);wi(T,!1),H&&mo(H),!pe&&(S=D&&D.onVnodeBeforeMount)&&Tn(S,W,R),wi(T,!0);{const de=T.subTree=xu(T);v(null,de,I,x,T,Z,te),R.el=de.el}if(K&&$t(K,Z),!pe&&(S=D&&D.onVnodeMounted)){const de=R;$t(()=>Tn(S,W,de),Z)}(R.shapeFlag&256||W&&is(W.vnode)&&W.vnode.shapeFlag&256)&&T.a&&$t(T.a,Z),T.isMounted=!0,R=I=x=null}},ce=T.effect=new Sc(j,()=>Rc(V),T.scope),V=T.update=()=>ce.run();V.id=T.uid,wi(T,!0),V()},ee=(T,R,I)=>{R.component=T;const x=T.vnode.props;T.vnode=R,T.next=null,Zm(T,R.props,x,I),eg(T,R.children,I),kr(),vu(T),Br()},z=(T,R,I,x,Z,te,ne,j,ce=!1)=>{const V=T&&T.children,S=T?T.shapeFlag:0,g=R.children,{patchFlag:D,shapeFlag:H}=R;if(D>0){if(D&128){Me(V,g,I,x,Z,te,ne,j,ce);return}else if(D&256){ge(V,g,I,x,Z,te,ne,j,ce);return}}H&8?(S&16&&_e(V,Z,te),g!==V&&u(I,g)):S&16?H&16?Me(V,g,I,x,Z,te,ne,j,ce):_e(V,Z,te,!0):(S&8&&u(I,""),H&16&&N(g,I,x,Z,te,ne,j,ce))},ge=(T,R,I,x,Z,te,ne,j,ce)=>{T=T||vr,R=R||vr;const V=T.length,S=R.length,g=Math.min(V,S);let D;for(D=0;D<g;D++){const H=R[D]=ce?fi(R[D]):An(R[D]);v(T[D],H,I,null,Z,te,ne,j,ce)}V>S?_e(T,Z,te,!0,!1,g):N(R,I,x,Z,te,ne,j,ce,g)},Me=(T,R,I,x,Z,te,ne,j,ce)=>{let V=0;const S=R.length;let g=T.length-1,D=S-1;for(;V<=g&&V<=D;){const H=T[V],K=R[V]=ce?fi(R[V]):An(R[V]);if(Wr(H,K))v(H,K,I,null,Z,te,ne,j,ce);else break;V++}for(;V<=g&&V<=D;){const H=T[g],K=R[D]=ce?fi(R[D]):An(R[D]);if(Wr(H,K))v(H,K,I,null,Z,te,ne,j,ce);else break;g--,D--}if(V>g){if(V<=D){const H=D+1,K=H<S?R[H].el:x;for(;V<=D;)v(null,R[V]=ce?fi(R[V]):An(R[V]),I,K,Z,te,ne,j,ce),V++}}else if(V>D)for(;V<=g;)Le(T[V],Z,te,!0),V++;else{const H=V,K=V,W=new Map;for(V=K;V<=D;V++){const Pe=R[V]=ce?fi(R[V]):An(R[V]);Pe.key!=null&&W.set(Pe.key,V)}let pe,de=0;const Ce=D-K+1;let De=!1,fe=0;const be=new Array(Ce);for(V=0;V<Ce;V++)be[V]=0;for(V=H;V<=g;V++){const Pe=T[V];if(de>=Ce){Le(Pe,Z,te,!0);continue}let xe;if(Pe.key!=null)xe=W.get(Pe.key);else for(pe=K;pe<=D;pe++)if(be[pe-K]===0&&Wr(Pe,R[pe])){xe=pe;break}xe===void 0?Le(Pe,Z,te,!0):(be[xe-K]=V+1,xe>=fe?fe=xe:De=!0,v(Pe,R[xe],I,null,Z,te,ne,j,ce),de++)}const Oe=De?rg(be):vr;for(pe=Oe.length-1,V=Ce-1;V>=0;V--){const Pe=K+V,xe=R[Pe],$e=Pe+1<S?R[Pe+1].el:x;be[V]===0?v(null,xe,I,$e,Z,te,ne,j,ce):De&&(pe<0||V!==Oe[pe]?we(xe,I,$e,2):pe--)}}},we=(T,R,I,x,Z=null)=>{const{el:te,type:ne,transition:j,children:ce,shapeFlag:V}=T;if(V&6){we(T.component.subTree,R,I,x);return}if(V&128){T.suspense.move(R,I,x);return}if(V&64){ne.move(T,R,I,ae);return}if(ne===Dt){i(te,R,I);for(let g=0;g<ce.length;g++)we(ce[g],R,I,x);i(T.anchor,R,I);return}if(ne===_o){w(T,R,I);return}if(x!==2&&V&1&&j)if(x===0)j.beforeEnter(te),i(te,R,I),$t(()=>j.enter(te),Z);else{const{leave:g,delayLeave:D,afterLeave:H}=j,K=()=>i(te,R,I),W=()=>{g(te,()=>{K(),H&&H()})};D?D(te,K,W):W()}else i(te,R,I)},Le=(T,R,I,x=!1,Z=!1)=>{const{type:te,props:ne,ref:j,children:ce,dynamicChildren:V,shapeFlag:S,patchFlag:g,dirs:D}=T;if(j!=null&&pl(j,null,I,T,!0),S&256){R.ctx.deactivate(T);return}const H=S&1&&D,K=!is(T);let W;if(K&&(W=ne&&ne.onVnodeBeforeUnmount)&&Tn(W,R,T),S&6)me(T.component,I,x);else{if(S&128){T.suspense.unmount(I,x);return}H&&Ai(T,null,R,"beforeUnmount"),S&64?T.type.remove(T,R,I,Z,ae,x):V&&(te!==Dt||g>0&&g&64)?_e(V,R,I,!1,!0):(te===Dt&&g&384||!Z&&S&16)&&_e(ce,R,I),x&&Ye(T)}(K&&(W=ne&&ne.onVnodeUnmounted)||H)&&$t(()=>{W&&Tn(W,R,T),H&&Ai(T,null,R,"unmounted")},I)},Ye=T=>{const{type:R,el:I,anchor:x,transition:Z}=T;if(R===Dt){ie(I,x);return}if(R===_o){y(T);return}const te=()=>{r(I),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(T.shapeFlag&1&&Z&&!Z.persisted){const{leave:ne,delayLeave:j}=Z,ce=()=>ne(I,te);j?j(T.el,te,ce):ce()}else te()},ie=(T,R)=>{let I;for(;T!==R;)I=h(T),r(T),T=I;r(R)},me=(T,R,I)=>{const{bum:x,scope:Z,update:te,subTree:ne,um:j}=T;x&&mo(x),Z.stop(),te&&(te.active=!1,Le(ne,T,R,I)),j&&$t(j,R),$t(()=>{T.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},_e=(T,R,I,x=!1,Z=!1,te=0)=>{for(let ne=te;ne<T.length;ne++)Le(T[ne],R,I,x,Z)},F=T=>T.shapeFlag&6?F(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el),re=(T,R,I)=>{T==null?R._vnode&&Le(R._vnode,null,null,!0):v(R._vnode||null,T,R,null,null,null,I),vu(),Oh(),R._vnode=T},ae={p:v,um:Le,m:we,r:Ye,mt:oe,mc:N,pc:z,pbc:E,n:F,o:n};return{render:re,hydrate:void 0,createApp:Ym(re)}}function wi({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function ig(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function id(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=fi(r[s]),a.el=o.el),t||id(o,a)),a.type===ia&&(a.el=o.el)}}function rg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const sg=n=>n.__isTeleport,Dt=Symbol.for("v-fgt"),ia=Symbol.for("v-txt"),Si=Symbol.for("v-cmt"),_o=Symbol.for("v-stc"),ss=[];let xn=null;function Xe(n=!1){ss.push(xn=n?null:[])}function og(){ss.pop(),xn=ss[ss.length-1]||null}let ms=1;function Pu(n){ms+=n}function rd(n){return n.dynamicChildren=ms>0?xn||vr:null,og(),ms>0&&xn&&xn.push(n),n}function ft(n,e,t,i,r,s){return rd(Ue(n,e,t,i,r,s,!0))}function sn(n,e,t,i,r){return rd(lt(n,e,t,i,r,!0))}function Lo(n){return n?n.__v_isVNode===!0:!1}function Wr(n,e){return n.type===e.type&&n.key===e.key}const ra="__vInternal",sd=({key:n})=>n??null,vo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Et(n)||ze(n)?{i:Lt,r:n,k:e,f:!!t}:n:null);function Ue(n,e=null,t=null,i=0,r=null,s=n===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&sd(e),ref:e&&vo(e),scopeId:Zo,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Lt};return a?(Lc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),ms>0&&!o&&xn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xn.push(l),l}const lt=ag;function ag(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Vh)&&(n=Si),Lo(n)){const a=Rr(n,e,!0);return t&&Lc(a,t),ms>0&&!s&&xn&&(a.shapeFlag&6?xn[xn.indexOf(n)]=a:xn.push(a)),a.patchFlag|=-2,a}if(vg(n)&&(n=n.__vccOpts),e){e=lg(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Xn(a)),pt(l)&&(Ph(l)&&!Fe(l)&&(l=Gt({},l)),e.style=xc(l))}const o=At(n)?1:Rm(n)?128:sg(n)?64:pt(n)?4:ze(n)?2:0;return Ue(n,e,t,i,r,o,s,!0)}function lg(n){return n?Ph(n)||ra in n?Gt({},n):n:null}function Rr(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?ad(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&sd(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(vo(e)):[r,vo(e)]:vo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Rr(n.ssContent),ssFallback:n.ssFallback&&Rr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function od(n=" ",e=0){return lt(ia,null,n,e)}function Io(n="",e=!1){return e?(Xe(),sn(Si,null,n)):lt(Si,null,n)}function An(n){return n==null||typeof n=="boolean"?lt(Si):Fe(n)?lt(Dt,null,n.slice()):typeof n=="object"?fi(n):lt(ia,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Rr(n)}function Lc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Lc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(ra in e)?e._ctx=Lt:r===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ze(e)?(e={default:e,_ctx:Lt},t=32):(e=String(e),i&64?(t=16,e=[od(e)]):t=8);n.children=e,n.shapeFlag|=t}function ad(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Xn([e.class,i.class]));else if(r==="style")e.style=xc([e.style,i.style]);else if(Go(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Tn(n,e,t,i=null){Sn(n,e,7,[t,i])}const cg=Zh();let ug=0;function fg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||cg,s={uid:ug++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new mh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qh(i,r),emitsOptions:Bh(i,r),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Em.bind(null,s),n.ce&&n.ce(s),s}let wt=null;const hg=()=>wt||Lt;let Ic,er,Du="__VUE_INSTANCE_SETTERS__";(er=sl()[Du])||(er=sl()[Du]=[]),er.push(n=>wt=n),Ic=n=>{er.length>1?er.forEach(e=>e(n)):er[0](n)};const Cr=n=>{Ic(n),n.scope.on()},Xi=()=>{wt&&wt.scope.off(),Ic(null)};function ld(n){return n.vnode.shapeFlag&4}let gs=!1;function dg(n,e=!1){gs=e;const{props:t,children:i}=n.vnode,r=ld(n);Km(n,t,r,e),Qm(n,i);const s=r?pg(n,e):void 0;return gs=!1,s}function pg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=ys(new Proxy(n.ctx,Hm));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?gg(n):null;Cr(n),kr();const s=gi(i,n,0,[n.props,r]);if(Br(),Xi(),ch(s)){if(s.then(Xi,Xi),e)return s.then(o=>{Lu(n,o)}).catch(o=>{jo(o,n,0)});n.asyncDep=s}else Lu(n,s)}else cd(n)}function Lu(n,e,t){ze(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=Uh(e)),cd(n)}function cd(n,e,t){const i=n.type;n.render||(n.render=i.render||Ln);{Cr(n),kr();try{Vm(n)}finally{Br(),Xi()}}}function mg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Kt(n,"get","$attrs"),e[t]}}))}function gg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return mg(n)},slots:n.slots,emit:n.emit,expose:e}}function sa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Uh(ys(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in rs)return rs[t](n)},has(e,t){return t in e||t in rs}}))}function _g(n,e=!0){return ze(n)?n.displayName||n.name:n.name||e&&n.__name}function vg(n){return ze(n)&&"__vccOpts"in n}const Bt=(n,e)=>gm(n,e,gs);function ud(n,e,t){const i=arguments.length;return i===2?pt(e)&&!Fe(e)?Lo(e)?lt(n,null,[e]):lt(n,e):lt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Lo(t)&&(t=[t]),lt(n,e,t))}const xg=Symbol.for("v-scx"),Mg=()=>fn(xg),Sg="3.3.11",Eg="http://www.w3.org/2000/svg",Oi=typeof document<"u"?document:null,Iu=Oi&&Oi.createElement("template"),yg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Oi.createElementNS(Eg,n):Oi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Oi.createTextNode(n),createComment:n=>Oi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Oi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Iu.innerHTML=i?`<svg>${n}</svg>`:n;const a=Iu.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},bg=Symbol("_vtc");function Tg(n,e,t){const i=n[bg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Uc=Symbol("_vod"),Uo={beforeMount(n,{value:e},{transition:t}){n[Uc]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Xr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Xr(n,!0),i.enter(n)):i.leave(n,()=>{Xr(n,!1)}):Xr(n,e))},beforeUnmount(n,{value:e}){Xr(n,e)}};function Xr(n,e){n.style.display=e?n[Uc]:"none"}function Ag(n,e,t){const i=n.style,r=At(t);if(t&&!r){if(e&&!At(e))for(const s in e)t[s]==null&&ml(i,s,"");for(const s in t)ml(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),Uc in n&&(i.display=s)}}const Uu=/\s*!important$/;function ml(n,e,t){if(Fe(t))t.forEach(i=>ml(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=wg(n,e);Uu.test(t)?n.setProperty(Or(i),t.replace(Uu,""),"important"):n[i]=t}}const Nu=["Webkit","Moz","ms"],Ea={};function wg(n,e){const t=Ea[e];if(t)return t;let i=In(e);if(i!=="filter"&&i in n)return Ea[e]=i;i=$o(i);for(let r=0;r<Nu.length;r++){const s=Nu[r]+i;if(s in n)return Ea[e]=s}return e}const Fu="http://www.w3.org/1999/xlink";function Rg(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Fu,e.slice(6,e.length)):n.setAttributeNS(Fu,e,t);else{const s=kp(e);t==null||s&&!hh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Cg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=hh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function ki(n,e,t,i){n.addEventListener(e,t,i)}function Pg(n,e,t,i){n.removeEventListener(e,t,i)}const Ou=Symbol("_vei");function Dg(n,e,t,i,r=null){const s=n[Ou]||(n[Ou]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Lg(e);if(i){const c=s[e]=Ng(i,r);ki(n,a,c,l)}else o&&(Pg(n,a,o,l),s[e]=void 0)}}const ku=/(?:Once|Passive|Capture)$/;function Lg(n){let e;if(ku.test(n)){e={};let i;for(;i=n.match(ku);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Or(n.slice(2)),e]}let ya=0;const Ig=Promise.resolve(),Ug=()=>ya||(Ig.then(()=>ya=0),ya=Date.now());function Ng(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Sn(Fg(i,t.value),e,5,[i])};return t.value=n,t.attached=Ug(),t}function Fg(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Bu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Og=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Tg(n,i,r):e==="style"?Ag(n,t,i):Go(e)?gc(e)||Dg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kg(n,e,i,r))?Cg(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Rg(n,e,i,r))};function kg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Bu(e)&&ze(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Bu(e)&&At(t)?!1:e in n}function oa(n){const e=hg();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>_l(s,r))},i=()=>{const r=n(e.proxy);gl(e.subTree,r),t(r)};Pm(i),Un(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Pc(()=>r.disconnect())})}function gl(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{gl(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)_l(n.el,e);else if(n.type===Dt)n.children.forEach(t=>gl(t,e));else if(n.type===_o){let{el:t,anchor:i}=n;for(;t&&(_l(t,e),t!==i);)t=t.nextSibling}}function _l(n,e){if(n.nodeType===1){const t=n.style;for(const i in e)t.setProperty(`--${i}`,e[i])}}const No=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>mo(e,t):e};function Bg(n){n.target.composing=!0}function zu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Er=Symbol("_assign"),zg={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Er]=No(r);const s=i||r.props&&r.props.type==="number";ki(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=rl(a)),n[Er](a)}),t&&ki(n,"change",()=>{n.value=n.value.trim()}),e||(ki(n,"compositionstart",Bg),ki(n,"compositionend",zu),ki(n,"change",zu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n[Er]=No(s),n.composing)return;const o=r||n.type==="number"?rl(n.value):n.value,a=e??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===a)||(n.value=a))}},Hg={deep:!0,created(n,e,t){n[Er]=No(t),ki(n,"change",()=>{const i=n._modelValue,r=Vg(n),s=n.checked,o=n[Er];if(Fe(i)){const a=dh(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Wo(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(fd(n,s))})},mounted:Hu,beforeUpdate(n,e,t){n[Er]=No(t),Hu(n,e,t)}};function Hu(n,{value:e,oldValue:t},i){n._modelValue=e,Fe(e)?n.checked=dh(e,i.props.value)>-1:Wo(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=qo(e,fd(n,!0)))}function Vg(n){return"_value"in n?n._value:n.value}function fd(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Gg=Gt({patchProp:Og},yg);let Vu;function Wg(){return Vu||(Vu=tg(Gg))}const Xg=(...n)=>{const e=Wg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=$g(i);if(!r)return;const s=e._component;!ze(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function $g(n){return At(n)?document.querySelector(n):n}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let hd;const aa=n=>hd=n,dd=Symbol();function vl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var os;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(os||(os={}));function qg(){const n=gh(!0),e=n.run(()=>Mt({}));let t=[],i=[];const r=ys({install(s){aa(r),r._a=s,s.provide(dd,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const pd=()=>{};function Gu(n,e,t,i=pd){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&_h()&&Hp(r),r}function tr(n,...e){n.slice().forEach(t=>{t(...e)})}const Yg=n=>n();function xl(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];vl(r)&&vl(i)&&n.hasOwnProperty(t)&&!Et(i)&&!mi(i)?n[t]=xl(r,i):n[t]=i}return n}const jg=Symbol();function Kg(n){return!vl(n)||!n.hasOwnProperty(jg)}const{assign:ui}=Object;function Zg(n){return!!(Et(n)&&n.effect)}function Jg(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=hm(t.state.value[n]);return ui(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=ys(Bt(()=>{aa(t);const p=t._s.get(n);return o[h].call(p,p)})),f),{}))}return l=md(n,c,e,t,i,!0),l}function md(n,e,t={},i,r,s){let o;const a=ui({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],p;const _=i.state.value[n];!s&&!_&&(i.state.value[n]={}),Mt({});let v;function m(N){let b;c=u=!1,typeof N=="function"?(N(i.state.value[n]),b={type:os.patchFunction,storeId:n,events:p}):(xl(i.state.value[n],N),b={type:os.patchObject,payload:N,storeId:n,events:p});const E=v=Symbol();wc().then(()=>{v===E&&(c=!0)}),u=!0,tr(f,b,i.state.value[n])}const d=s?function(){const{state:b}=t,E=b?b():{};this.$patch(P=>{ui(P,E)})}:pd;function A(){o.stop(),f=[],h=[],i._s.delete(n)}function w(N,b){return function(){aa(i);const E=Array.from(arguments),P=[],Q=[];function G($){P.push($)}function oe($){Q.push($)}tr(h,{args:E,name:N,store:U,after:G,onError:oe});let se;try{se=b.apply(this&&this.$id===n?this:U,E)}catch($){throw tr(Q,$),$}return se instanceof Promise?se.then($=>(tr(P,$),$)).catch($=>(tr(Q,$),Promise.reject($))):(tr(P,se),se)}}const y={_p:i,$id:n,$onAction:Gu.bind(null,h),$patch:m,$reset:d,$subscribe(N,b={}){const E=Gu(f,N,b.detached,()=>P()),P=o.run(()=>Sr(()=>i.state.value[n],Q=>{(b.flush==="sync"?u:c)&&N({storeId:n,type:os.direct,events:p},Q)},ui({},l,b)));return E},$dispose:A},U=nn(y);i._s.set(n,U);const C=(i._a&&i._a.runWithContext||Yg)(()=>i._e.run(()=>(o=gh()).run(e)));for(const N in C){const b=C[N];if(Et(b)&&!Zg(b)||mi(b))s||(_&&Kg(b)&&(Et(b)?b.value=_[N]:xl(b,_[N])),i.state.value[n][N]=b);else if(typeof b=="function"){const E=w(N,b);C[N]=E,a.actions[N]=b}}return ui(U,C),ui(Ze(U),C),Object.defineProperty(U,"$state",{get:()=>i.state.value[n],set:N=>{m(b=>{ui(b,N)})}}),i._p.forEach(N=>{ui(U,o.run(()=>N({store:U,app:i._a,pinia:i,options:a})))}),_&&s&&t.hydrate&&t.hydrate(U.$state,_),c=!0,u=!0,U}function gd(n,e,t){let i,r;const s=typeof e=="function";typeof n=="string"?(i=n,r=s?t:e):(r=n,i=n.id);function o(a,l){const c=jm();return a=a||(c?fn(dd,null):null),a&&aa(a),a=hd,a._s.has(i)||(s?md(i,e,r,a):Jg(i,r,a)),a._s.get(i)}return o.$id=i,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const gr=typeof window<"u";function Qg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const st=Object.assign;function ba(n,e){const t={};for(const i in e){const r=e[i];t[i]=bn(r)?r.map(n):n(r)}return t}const as=()=>{},bn=Array.isArray,e_=/\/$/,t_=n=>n.replace(e_,"");function Ta(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=s_(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function n_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Wu(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function i_(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Pr(e.matched[i],t.matched[r])&&_d(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Pr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function _d(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!r_(n[t],e[t]))return!1;return!0}function r_(n,e){return bn(n)?Xu(n,e):bn(e)?Xu(e,n):n===e}function Xu(n,e){return bn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function s_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var _s;(function(n){n.pop="pop",n.push="push"})(_s||(_s={}));var ls;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ls||(ls={}));function o_(n){if(!n)if(gr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),t_(n)}const a_=/^[^#]+#/;function l_(n,e){return n.replace(a_,"#")+e}function c_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const la=()=>({left:window.pageXOffset,top:window.pageYOffset});function u_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=c_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function $u(n,e){return(history.state?history.state.position-e:-1)+n}const Ml=new Map;function f_(n,e){Ml.set(n,e)}function h_(n){const e=Ml.get(n);return Ml.delete(n),e}let d_=()=>location.protocol+"//"+location.host;function vd(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Wu(l,"")}return Wu(t,n)+i+r}function p_(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=vd(n,location),_=t.value,v=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===_){o=null;return}m=v?h.position-v.position:0}else i(p);r.forEach(d=>{d(t.value,_,{delta:m,type:_s.pop,direction:m?m>0?ls.forward:ls.back:ls.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(st({},h.state,{scroll:la()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function qu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?la():null}}function m_(n){const{history:e,location:t}=window,i={value:vd(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:d_()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=st({},e.state,qu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=st({},r.value,e.state,{forward:l,scroll:la()});s(u.current,u,!0);const f=st({},qu(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function g_(n){n=o_(n);const e=m_(n),t=p_(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=st({location:"",base:n,go:i,createHref:l_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function __(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),g_(n)}function v_(n){return typeof n=="string"||n&&typeof n=="object"}function xd(n){return typeof n=="string"||typeof n=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Md=Symbol("");var Yu;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Yu||(Yu={}));function Dr(n,e){return st(new Error,{type:n,[Md]:!0},e)}function Fn(n,e){return n instanceof Error&&Md in n&&(e==null||!!(n.type&e))}const ju="[^/]+?",x_={sensitive:!1,strict:!1,start:!0,end:!0},M_=/[.+*?^${}()[\]/\\]/g;function S_(n,e){const t=st({},x_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(M_,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:v,optional:m,regexp:d}=h;s.push({name:_,repeatable:v,optional:m});const A=d||ju;if(A!==ju){p+=10;try{new RegExp(`(${A})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+y.message)}}let w=v?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(w=m&&c.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),r+=w,p+=20,m&&(p+=-8),v&&(p+=-20),A===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=s[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,d=_ in c?c[_]:"";if(bn(d)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=bn(d)?d.join("/"):d;if(!A)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function E_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function y_(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=E_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Ku(i))return 1;if(Ku(r))return-1}return r.length-i.length}function Ku(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const b_={type:0,value:""},T_=/[a-zA-Z0-9_]/;function A_(n){if(!n)return[[]];if(n==="/")return[[b_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:T_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function w_(n,e,t){const i=S_(A_(n.path),t),r=st(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function R_(n,e){const t=[],i=new Map;e=Qu({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,_=C_(u);_.aliasOf=h&&h.record;const v=Qu(e,u),m=[_];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of w)m.push(st({},_,{components:h?h.record.components:_.components,path:y,aliasOf:h?h.record:_}))}let d,A;for(const w of m){const{path:y}=w;if(f&&y[0]!=="/"){const U=f.record.path,L=U[U.length-1]==="/"?"":"/";w.path=f.record.path+(y&&L+y)}if(d=w_(w,f,v),h?h.alias.push(d):(A=A||d,A!==d&&A.alias.push(d),p&&u.name&&!Ju(d)&&o(u.name)),_.children){const U=_.children;for(let L=0;L<U.length;L++)s(U[L],d,h&&h.children[L])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return A?()=>{o(A)}:as}function o(u){if(xd(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&y_(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Sd(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!Ju(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},_,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Dr(1,{location:u});v=h.record.name,p=st(Zu(f.params,h.keys.filter(A=>!A.optional).map(A=>A.name)),u.params&&Zu(u.params,h.keys.map(A=>A.name))),_=h.stringify(p)}else if("path"in u)_=u.path,h=t.find(A=>A.re.test(_)),h&&(p=h.parse(_),v=h.record.name);else{if(h=f.name?i.get(f.name):t.find(A=>A.re.test(f.path)),!h)throw Dr(1,{location:u,currentLocation:f});v=h.record.name,p=st({},f.params,u.params),_=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:v,path:_,params:p,matched:m,meta:D_(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Zu(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function C_(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:P_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function P_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Ju(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function D_(n){return n.reduce((e,t)=>st(e,t.meta),{})}function Qu(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Sd(n,e){return e.children.some(t=>t===n||Sd(n,t))}const Ed=/#/g,L_=/&/g,I_=/\//g,U_=/=/g,N_=/\?/g,yd=/\+/g,F_=/%5B/g,O_=/%5D/g,bd=/%5E/g,k_=/%60/g,Td=/%7B/g,B_=/%7C/g,Ad=/%7D/g,z_=/%20/g;function Nc(n){return encodeURI(""+n).replace(B_,"|").replace(F_,"[").replace(O_,"]")}function H_(n){return Nc(n).replace(Td,"{").replace(Ad,"}").replace(bd,"^")}function Sl(n){return Nc(n).replace(yd,"%2B").replace(z_,"+").replace(Ed,"%23").replace(L_,"%26").replace(k_,"`").replace(Td,"{").replace(Ad,"}").replace(bd,"^")}function V_(n){return Sl(n).replace(U_,"%3D")}function G_(n){return Nc(n).replace(Ed,"%23").replace(N_,"%3F")}function W_(n){return n==null?"":G_(n).replace(I_,"%2F")}function Fo(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function X_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(yd," "),o=s.indexOf("="),a=Fo(o<0?s:s.slice(0,o)),l=o<0?null:Fo(s.slice(o+1));if(a in e){let c=e[a];bn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ef(n){let e="";for(let t in n){const i=n[t];if(t=V_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(bn(i)?i.map(s=>s&&Sl(s)):[i&&Sl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function $_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const q_=Symbol(""),tf=Symbol(""),ca=Symbol(""),Fc=Symbol(""),El=Symbol("");function $r(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function hi(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Dr(4,{from:t,to:e})):f instanceof Error?a(f):v_(f)?a(Dr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Aa(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Y_(a)){const c=(a.__vccOpts||a)[e];c&&r.push(hi(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Qg(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&hi(h,t,i,s,o)()}))}}return r}function Y_(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function nf(n){const e=fn(ca),t=fn(Fc),i=Bt(()=>e.resolve(ut(n.to))),r=Bt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Pr.bind(null,u));if(h>-1)return h;const p=rf(l[c-2]);return c>1&&rf(u)===p&&f[f.length-1].path!==p?f.findIndex(Pr.bind(null,l[c-2])):h}),s=Bt(()=>r.value>-1&&J_(t.params,i.value.params)),o=Bt(()=>r.value>-1&&r.value===t.matched.length-1&&_d(t.params,i.value.params));function a(l={}){return Z_(l)?e[ut(n.replace)?"replace":"push"](ut(n.to)).catch(as):Promise.resolve()}return{route:i,href:Bt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const j_=_t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nf,setup(n,{slots:e}){const t=nn(nf(n)),{options:i}=fn(ca),r=Bt(()=>({[sf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[sf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:ud("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),K_=j_;function Z_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function J_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!bn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function rf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const sf=(n,e,t)=>n??e??t,Q_=_t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=fn(El),r=Bt(()=>n.route||i.value),s=fn(tf,0),o=Bt(()=>{let c=ut(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Bt(()=>r.value.matched[o.value]);go(tf,Bt(()=>o.value+1)),go(q_,a),go(El,r);const l=Mt();return Sr(()=>[l.value,a.value,n.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Pr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return of(t.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=ud(h,st({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return of(t.default,{Component:m,route:c})||m}}});function of(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ua=Q_;function ev(n){const e=R_(n.routes,n),t=n.parseQuery||X_,i=n.stringifyQuery||ef,r=n.history,s=$r(),o=$r(),a=$r(),l=cm(ii);let c=ii;gr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ba.bind(null,F=>""+F),f=ba.bind(null,W_),h=ba.bind(null,Fo);function p(F,re){let ae,ue;return xd(F)?(ae=e.getRecordMatcher(F),ue=re):ue=F,e.addRoute(ue,ae)}function _(F){const re=e.getRecordMatcher(F);re&&e.removeRoute(re)}function v(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function d(F,re){if(re=st({},re||l.value),typeof F=="string"){const x=Ta(t,F,re.path),Z=e.resolve({path:x.path},re),te=r.createHref(x.fullPath);return st(x,Z,{params:h(Z.params),hash:Fo(x.hash),redirectedFrom:void 0,href:te})}let ae;if("path"in F)ae=st({},F,{path:Ta(t,F.path,re.path).path});else{const x=st({},F.params);for(const Z in x)x[Z]==null&&delete x[Z];ae=st({},F,{params:f(x)}),re.params=f(re.params)}const ue=e.resolve(ae,re),T=F.hash||"";ue.params=u(h(ue.params));const R=n_(i,st({},F,{hash:H_(T),path:ue.path})),I=r.createHref(R);return st({fullPath:R,hash:T,query:i===ef?$_(F.query):F.query||{}},ue,{redirectedFrom:void 0,href:I})}function A(F){return typeof F=="string"?Ta(t,F,l.value.path):st({},F)}function w(F,re){if(c!==F)return Dr(8,{from:re,to:F})}function y(F){return C(F)}function U(F){return y(st(A(F),{replace:!0}))}function L(F){const re=F.matched[F.matched.length-1];if(re&&re.redirect){const{redirect:ae}=re;let ue=typeof ae=="function"?ae(F):ae;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=A(ue):{path:ue},ue.params={}),st({query:F.query,hash:F.hash,params:"path"in ue?{}:F.params},ue)}}function C(F,re){const ae=c=d(F),ue=l.value,T=F.state,R=F.force,I=F.replace===!0,x=L(ae);if(x)return C(st(A(x),{state:typeof x=="object"?st({},T,x.state):T,force:R,replace:I}),re||ae);const Z=ae;Z.redirectedFrom=re;let te;return!R&&i_(i,ue,ae)&&(te=Dr(16,{to:Z,from:ue}),we(ue,ue,!0,!1)),(te?Promise.resolve(te):E(Z,ue)).catch(ne=>Fn(ne)?Fn(ne,2)?ne:Me(ne):z(ne,Z,ue)).then(ne=>{if(ne){if(Fn(ne,2))return C(st({replace:I},A(ne.to),{state:typeof ne.to=="object"?st({},T,ne.to.state):T,force:R}),re||Z)}else ne=Q(Z,ue,!0,I,T);return P(Z,ue,ne),ne})}function N(F,re){const ae=w(F,re);return ae?Promise.reject(ae):Promise.resolve()}function b(F){const re=ie.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(F):F()}function E(F,re){let ae;const[ue,T,R]=tv(F,re);ae=Aa(ue.reverse(),"beforeRouteLeave",F,re);for(const x of ue)x.leaveGuards.forEach(Z=>{ae.push(hi(Z,F,re))});const I=N.bind(null,F,re);return ae.push(I),_e(ae).then(()=>{ae=[];for(const x of s.list())ae.push(hi(x,F,re));return ae.push(I),_e(ae)}).then(()=>{ae=Aa(T,"beforeRouteUpdate",F,re);for(const x of T)x.updateGuards.forEach(Z=>{ae.push(hi(Z,F,re))});return ae.push(I),_e(ae)}).then(()=>{ae=[];for(const x of R)if(x.beforeEnter)if(bn(x.beforeEnter))for(const Z of x.beforeEnter)ae.push(hi(Z,F,re));else ae.push(hi(x.beforeEnter,F,re));return ae.push(I),_e(ae)}).then(()=>(F.matched.forEach(x=>x.enterCallbacks={}),ae=Aa(R,"beforeRouteEnter",F,re),ae.push(I),_e(ae))).then(()=>{ae=[];for(const x of o.list())ae.push(hi(x,F,re));return ae.push(I),_e(ae)}).catch(x=>Fn(x,8)?x:Promise.reject(x))}function P(F,re,ae){a.list().forEach(ue=>b(()=>ue(F,re,ae)))}function Q(F,re,ae,ue,T){const R=w(F,re);if(R)return R;const I=re===ii,x=gr?history.state:{};ae&&(ue||I?r.replace(F.fullPath,st({scroll:I&&x&&x.scroll},T)):r.push(F.fullPath,T)),l.value=F,we(F,re,ae,I),Me()}let G;function oe(){G||(G=r.listen((F,re,ae)=>{if(!me.listening)return;const ue=d(F),T=L(ue);if(T){C(st(T,{replace:!0}),ue).catch(as);return}c=ue;const R=l.value;gr&&f_($u(R.fullPath,ae.delta),la()),E(ue,R).catch(I=>Fn(I,12)?I:Fn(I,2)?(C(I.to,ue).then(x=>{Fn(x,20)&&!ae.delta&&ae.type===_s.pop&&r.go(-1,!1)}).catch(as),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),z(I,ue,R))).then(I=>{I=I||Q(ue,R,!1),I&&(ae.delta&&!Fn(I,8)?r.go(-ae.delta,!1):ae.type===_s.pop&&Fn(I,20)&&r.go(-1,!1)),P(ue,R,I)}).catch(as)}))}let se=$r(),$=$r(),ee;function z(F,re,ae){Me(F);const ue=$.list();return ue.length?ue.forEach(T=>T(F,re,ae)):console.error(F),Promise.reject(F)}function ge(){return ee&&l.value!==ii?Promise.resolve():new Promise((F,re)=>{se.add([F,re])})}function Me(F){return ee||(ee=!F,oe(),se.list().forEach(([re,ae])=>F?ae(F):re()),se.reset()),F}function we(F,re,ae,ue){const{scrollBehavior:T}=n;if(!gr||!T)return Promise.resolve();const R=!ae&&h_($u(F.fullPath,0))||(ue||!ae)&&history.state&&history.state.scroll||null;return wc().then(()=>T(F,re,R)).then(I=>I&&u_(I)).catch(I=>z(I,F,re))}const Le=F=>r.go(F);let Ye;const ie=new Set,me={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:m,getRoutes:v,resolve:d,options:n,push:y,replace:U,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:ge,install(F){const re=this;F.component("RouterLink",K_),F.component("RouterView",ua),F.config.globalProperties.$router=re,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(l)}),gr&&!Ye&&l.value===ii&&(Ye=!0,y(r.location).catch(T=>{}));const ae={};for(const T in ii)Object.defineProperty(ae,T,{get:()=>l.value[T],enumerable:!0});F.provide(ca,re),F.provide(Fc,Rh(ae)),F.provide(El,l);const ue=F.unmount;ie.add(F),F.unmount=function(){ie.delete(F),ie.size<1&&(c=ii,G&&G(),G=null,l.value=ii,Ye=!1,ee=!1),ue()}}};function _e(F){return F.reduce((re,ae)=>re.then(()=>b(ae)),Promise.resolve())}return me}function tv(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Pr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Pr(c,l))||r.push(l))}return[t,i,r]}function nv(){return fn(ca)}function wd(){return fn(Fc)}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oc="176",iv=0,af=1,rv=2,Rd=1,sv=2,Vn=3,Ei=0,qt=1,Wn=2,_i=0,yr=1,yl=2,lf=3,cf=4,ov=5,Bi=100,av=101,lv=102,cv=103,uv=104,fv=200,hv=201,dv=202,pv=203,bl=204,Tl=205,mv=206,gv=207,_v=208,vv=209,xv=210,Mv=211,Sv=212,Ev=213,yv=214,Al=0,wl=1,Rl=2,Lr=3,Cl=4,Pl=5,Dl=6,Ll=7,Cd=0,bv=1,Tv=2,vi=0,Av=1,wv=2,Rv=3,Cv=4,Pv=5,Dv=6,Lv=7,Pd=300,Ir=301,Ur=302,Il=303,Ul=304,fa=306,Nl=1e3,Vi=1001,Fl=1002,En=1003,Iv=1004,Hs=1005,Cn=1006,wa=1007,Gi=1008,Zn=1009,Dd=1010,Ld=1011,vs=1012,kc=1013,Yi=1014,$n=1015,bs=1016,Bc=1017,zc=1018,xs=1020,Id=35902,Ud=1021,Nd=1022,Mn=1023,Ms=1026,Ss=1027,Fd=1028,Hc=1029,Od=1030,Vc=1031,Gc=1033,xo=33776,Mo=33777,So=33778,Eo=33779,Ol=35840,kl=35841,Bl=35842,zl=35843,Hl=36196,Vl=37492,Gl=37496,Wl=37808,Xl=37809,$l=37810,ql=37811,Yl=37812,jl=37813,Kl=37814,Zl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,yo=36492,rc=36494,sc=36495,kd=36283,oc=36284,ac=36285,lc=36286,Uv=3200,Nv=3201,Fv=0,Ov=1,di="",cn="srgb",Nr="srgb-linear",Oo="linear",at="srgb",nr=7680,uf=519,kv=512,Bv=513,zv=514,Bd=515,Hv=516,Vv=517,Gv=518,Wv=519,ff=35044,hf="300 es",qn=2e3,ko=2001;class Hr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ra=Math.PI/180,cc=180/Math.PI;function Ts(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function Xv(n,e){return(n%e+e)%e}function Ca(n,e,t){return(1-t)*n+t*e}function qr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],d=r[6],A=r[1],w=r[4],y=r[7],U=r[2],L=r[5],C=r[8];return s[0]=o*v+a*A+l*U,s[3]=o*m+a*w+l*L,s[6]=o*d+a*y+l*C,s[1]=c*v+u*A+f*U,s[4]=c*m+u*w+f*L,s[7]=c*d+u*y+f*C,s[2]=h*v+p*A+_*U,s[5]=h*m+p*w+_*L,s[8]=h*d+p*y+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new Ve;function zd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function $v(){const n=Bo("canvas");return n.style.display="block",n}const df={};function bo(n){n in df||(df[n]=!0,console.warn(n))}function qv(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Yv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function jv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const pf=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mf=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kv(){const n={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=br(r.r),r.g=br(r.g),r.b=br(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?Oo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Nr]:{primaries:e,whitePoint:i,transfer:Oo,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:e,whitePoint:i,transfer:at,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}}),n}const Qe=Kv();function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function br(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class Zv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ir===void 0&&(ir=Bo("canvas")),ir.width=e.width,ir.height=e.height;const r=ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ir}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jv=0;class Wc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jv++}),this.uuid=Ts(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Da(r[o].image)):s.push(Da(r[o]))}else s=Da(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zv.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Qv=0;class Yt extends Hr{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=Vi,r=Vi,s=Cn,o=Gi,a=Mn,l=Zn,c=Yt.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Ts(),this.name="",this.source=new Wc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nl:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nl:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Pd;Yt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(p+1)/2,U=(d+1)/2,L=(u+h)/4,C=(f+v)/4,N=(_+m)/4;return w>y&&w>U?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=L/i,s=C/i):y>U?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=L/r,s=N/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=N/s),this.set(i,r,s,t),this}let A=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(f-v)/A,this.z=(h-u)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ex extends Hr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends ex{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Hd extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tx extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=En,this.minFilter=En,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*v,A=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const U=Math.sqrt(w),L=Math.atan2(U,d*A);m=Math.sin(m*L)/U,a=Math.sin(a*L)/U}const y=a*A;if(l=l*m+h*y,c=c*m+p*y,u=u*m+_*y,f=f*m+v*y,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new Y,gf=new As;class ws{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pn):pn.fromBufferAttribute(s,o),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(e.matrixWorld),this.union(Vs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Gs.subVectors(this.max,Yr),rr.subVectors(e.a,Yr),sr.subVectors(e.b,Yr),or.subVectors(e.c,Yr),ri.subVectors(sr,rr),si.subVectors(or,sr),Ri.subVectors(rr,or);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ri.z,Ri.y,ri.z,0,-ri.x,si.z,0,-si.x,Ri.z,0,-Ri.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ri.y,Ri.x,0];return!Ia(t,rr,sr,or,Gs)||(t=[1,0,0,0,1,0,0,0,1],!Ia(t,rr,sr,or,Gs))?!1:(Ws.crossVectors(ri,si),t=[Ws.x,Ws.y,Ws.z],Ia(t,rr,sr,or,Gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const On=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],pn=new Y,Vs=new ws,rr=new Y,sr=new Y,or=new Y,ri=new Y,si=new Y,Ri=new Y,Yr=new Y,Gs=new Y,Ws=new Y,Ci=new Y;function Ia(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ci.fromArray(n,s);const a=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),u=i.dot(Ci);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nx=new ws,jr=new Y,Ua=new Y;class ha{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):nx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Ua)),this.expandByPoint(jr.copy(e.center).sub(Ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new Y,Na=new Y,Xs=new Y,oi=new Y,Fa=new Y,$s=new Y,Oa=new Y;class Vd{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Na.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Na);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xs),a=oi.dot(this.direction),l=-oi.dot(Xs),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Na).addScaledVector(Xs,h),p}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){Fa.subVectors(t,e),$s.subVectors(i,e),Oa.crossVectors(Fa,$s);let o=this.direction.dot(Oa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot($s.crossVectors(oi,$s));if(l<0)return null;const c=a*this.direction.dot(Fa.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(Oa);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),s=1/ar.setFromMatrixColumn(e,1).length(),o=1/ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ix,e,rx)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ai.crossVectors(i,Jt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ai.crossVectors(i,Jt)),ai.normalize(),qs.crossVectors(Jt,ai),r[0]=ai.x,r[4]=qs.x,r[8]=Jt.x,r[1]=ai.y,r[5]=qs.y,r[9]=Jt.y,r[2]=ai.z,r[6]=qs.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],A=i[3],w=i[7],y=i[11],U=i[15],L=r[0],C=r[4],N=r[8],b=r[12],E=r[1],P=r[5],Q=r[9],G=r[13],oe=r[2],se=r[6],$=r[10],ee=r[14],z=r[3],ge=r[7],Me=r[11],we=r[15];return s[0]=o*L+a*E+l*oe+c*z,s[4]=o*C+a*P+l*se+c*ge,s[8]=o*N+a*Q+l*$+c*Me,s[12]=o*b+a*G+l*ee+c*we,s[1]=u*L+f*E+h*oe+p*z,s[5]=u*C+f*P+h*se+p*ge,s[9]=u*N+f*Q+h*$+p*Me,s[13]=u*b+f*G+h*ee+p*we,s[2]=_*L+v*E+m*oe+d*z,s[6]=_*C+v*P+m*se+d*ge,s[10]=_*N+v*Q+m*$+d*Me,s[14]=_*b+v*G+m*ee+d*we,s[3]=A*L+w*E+y*oe+U*z,s[7]=A*C+w*P+y*se+U*ge,s[11]=A*N+w*Q+y*$+U*Me,s[15]=A*b+w*G+y*ee+U*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],A=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,w=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,y=u*v*c-_*f*c+_*a*p-o*v*p-u*a*d+o*f*d,U=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,L=t*A+i*w+r*y+s*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=A*C,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*C,e[4]=w*C,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*d+t*h*d)*C,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*d-t*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*C,e[8]=y*C,e[9]=(_*f*s-u*v*s-_*i*p+t*v*p+u*i*d-t*f*d)*C,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*C,e[12]=U*C,e[13]=(u*v*r-_*f*r+_*i*h-t*v*h-u*i*m+t*f*m)*C,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,v=o*u,m=o*f,d=a*f,A=l*c,w=l*u,y=l*f,U=i.x,L=i.y,C=i.z;return r[0]=(1-(v+d))*U,r[1]=(p+y)*U,r[2]=(_-w)*U,r[3]=0,r[4]=(p-y)*L,r[5]=(1-(h+d))*L,r[6]=(m+A)*L,r[7]=0,r[8]=(_+w)*C,r[9]=(m-A)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ar.set(r[0],r[1],r[2]).length();const o=ar.set(r[4],r[5],r[6]).length(),a=ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/s,u=1/o,f=1/a;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,t.setFromRotationMatrix(mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=qn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===qn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ko)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let _,v;if(a===qn)_=(o+s)*f,v=-2*f;else if(a===ko)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ar=new Y,mn=new yt,ix=new Y(0,0,0),rx=new Y(1,1,1),ai=new Y,qs=new Y,Jt=new Y,_f=new yt,vf=new As;class Jn{constructor(e=0,t=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _f.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_f,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vf.setFromEuler(this),this.setFromQuaternion(vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Gd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sx=0;const xf=new Y,lr=new As,Bn=new yt,Ys=new Y,Kr=new Y,ox=new Y,ax=new As,Mf=new Y(1,0,0),Sf=new Y(0,1,0),Ef=new Y(0,0,1),yf={type:"added"},lx={type:"removed"},cr={type:"childadded",child:null},ka={type:"childremoved",child:null};class jt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new Y,t=new Jn,i=new As,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ve}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Mf,e)}rotateY(e){return this.rotateOnAxis(Sf,e)}rotateZ(e){return this.rotateOnAxis(Ef,e)}translateOnAxis(e,t){return xf.copy(e).applyQuaternion(this.quaternion),this.position.add(xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mf,e)}translateY(e){return this.translateOnAxis(Sf,e)}translateZ(e){return this.translateOnAxis(Ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ys.copy(e):Ys.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Kr,Ys,this.up):Bn.lookAt(Ys,Kr,this.up),this.quaternion.setFromRotationMatrix(Bn),r&&(Bn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(Bn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yf),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lx),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yf),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,ox),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new Y(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new Y,zn=new Y,Ba=new Y,Hn=new Y,ur=new Y,fr=new Y,bf=new Y,za=new Y,Ha=new Y,Va=new Y,Ga=new St,Wa=new St,Xa=new St;class vn{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gn.subVectors(r,t),zn.subVectors(i,t),Ba.subVectors(e,t);const o=gn.dot(gn),a=gn.dot(zn),l=gn.dot(Ba),c=zn.dot(zn),u=zn.dot(Ba),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ga.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ga.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,i),Xa.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ga,s.x),o.addScaledVector(Wa,s.y),o.addScaledVector(Xa,s.z),o}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),zn.subVectors(e,t),gn.cross(zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),gn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ur.subVectors(r,i),fr.subVectors(s,i),za.subVectors(e,i);const l=ur.dot(za),c=fr.dot(za);if(l<=0&&c<=0)return t.copy(i);Ha.subVectors(e,r);const u=ur.dot(Ha),f=fr.dot(Ha);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ur,o);Va.subVectors(e,s);const p=ur.dot(Va),_=fr.dot(Va);if(_>=0&&p<=_)return t.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(fr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return bf.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(bf,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(ur,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},js={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=Xv(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=$a(o,s,e+1/3),this.g=$a(o,s,e),this.b=$a(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=cn){const i=Wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=cn){return Qe.fromWorkingColorSpace(Ot.copy(this),e),Math.round(qe(Ot.r*255,0,255))*65536+Math.round(qe(Ot.g*255,0,255))*256+Math.round(qe(Ot.b*255,0,255))}getHexString(e=cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=cn){Qe.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==cn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(js);const i=Ca(li.h,js.h,t),r=Ca(li.s,js.s,t),s=Ca(li.l,js.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new nt;nt.NAMES=Wd;let cx=0;class Rs extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=yr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Tl,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==Tl&&(i.blendDst=this.blendDst),this.blendEquation!==Bi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xd extends Rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new Y,Ks=new ht;let ux=0;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ux++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ff,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ff&&(e.usage=this.usage),e}}class $d extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class qd extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class $i extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let fx=0;const ln=new yt,qa=new jt,hr=new Y,Qt=new ws,Zr=new ws,Pt=new Y;class ti extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zd(e)?qd:$d)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $i(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(Qt.min,Zr.min),Qt.expandByPoint(Pt),Pt.addVectors(Qt.max,Zr.max),Qt.expandByPoint(Pt)):(Qt.expandByPoint(Zr.min),Qt.expandByPoint(Zr.max))}Qt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(hr.fromBufferAttribute(e,c),Pt.add(hr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new Y,l[N]=new Y;const c=new Y,u=new Y,f=new Y,h=new ht,p=new ht,_=new ht,v=new Y,m=new Y;function d(N,b,E){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,E),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,E),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[N].add(v),a[b].add(v),a[E].add(v),l[N].add(m),l[b].add(m),l[E].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,b=A.length;N<b;++N){const E=A[N],P=E.start,Q=E.count;for(let G=P,oe=P+Q;G<oe;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const w=new Y,y=new Y,U=new Y,L=new Y;function C(N){U.fromBufferAttribute(r,N),L.copy(U);const b=a[N];w.copy(b),w.sub(U.multiplyScalar(U.dot(b))).normalize(),y.crossVectors(L,b);const P=y.dot(l[N])<0?-1:1;o.setXYZW(N,w.x,w.y,w.z,P)}for(let N=0,b=A.length;N<b;++N){const E=A[N],P=E.start,Q=E.count;for(let G=P,oe=P+Q;G<oe;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tf=new yt,Pi=new Vd,Zs=new ha,Af=new Y,Js=new Y,Qs=new Y,eo=new Y,Ya=new Y,to=new Y,wf=new Y,no=new Y;class Yn extends jt{constructor(e=new ti,t=new Xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ya.fromBufferAttribute(f,e),o?to.addScaledVector(Ya,u):to.addScaledVector(Ya.sub(t),u))}t.add(to)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zs.copy(i.boundingSphere),Zs.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(Zs.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Zs,Af)===null||Pi.origin.distanceToSquared(Af)>(e.far-e.near)**2))&&(Tf.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(Tf),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,U=w;y<U;y+=3){const L=a.getX(y),C=a.getX(y+1),N=a.getX(y+2);r=io(this,d,e,i,c,u,f,L,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const A=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);r=io(this,o,e,i,c,u,f,A,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],A=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=A,U=w;y<U;y+=3){const L=y,C=y+1,N=y+2;r=io(this,d,e,i,c,u,f,L,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const A=m,w=m+1,y=m+2;r=io(this,o,e,i,c,u,f,A,w,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function hx(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ei,a),l===null)return null;no.copy(a),no.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:n}}function io(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Js),n.getVertexPosition(l,Qs),n.getVertexPosition(c,eo);const u=hx(n,e,t,i,Js,Qs,eo,wf);if(u){const f=new Y;vn.getBarycoord(wf,Js,Qs,eo,f),r&&(u.uv=vn.getInterpolatedAttribute(r,a,l,c,f,new ht)),s&&(u.uv1=vn.getInterpolatedAttribute(s,a,l,c,f,new ht)),o&&(u.normal=vn.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};vn.getNormal(Js,Qs,eo,h.normal),u.face=h,u.barycoord=f}return u}class Cs extends ti{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $i(c,3)),this.setAttribute("normal",new $i(u,3)),this.setAttribute("uv",new $i(f,2));function _(v,m,d,A,w,y,U,L,C,N,b){const E=y/C,P=U/N,Q=y/2,G=U/2,oe=L/2,se=C+1,$=N+1;let ee=0,z=0;const ge=new Y;for(let Me=0;Me<$;Me++){const we=Me*P-G;for(let Le=0;Le<se;Le++){const Ye=Le*E-Q;ge[v]=Ye*A,ge[m]=we*w,ge[d]=oe,c.push(ge.x,ge.y,ge.z),ge[v]=0,ge[m]=0,ge[d]=L>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Le/C),f.push(1-Me/N),ee+=1}}for(let Me=0;Me<N;Me++)for(let we=0;we<C;we++){const Le=h+we+se*Me,Ye=h+we+se*(Me+1),ie=h+(we+1)+se*(Me+1),me=h+(we+1)+se*Me;l.push(Le,Ye,me),l.push(Ye,ie,me),z+=6}a.addGroup(p,z,b),p+=z,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Fr(n[t]);for(const r in i)e[r]=i[r]}return e}function dx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Yd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const px={clone:Fr,merge:Vt};var mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=dx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class jd extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new Y,Rf=new ht,Cf=new ht;class un extends jd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ra*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class _x extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(dr,pr,e,t);r.layers=this.layers,this.add(r);const s=new un(dr,pr,e,t);s.layers=this.layers,this.add(s);const o=new un(dr,pr,e,t);o.layers=this.layers,this.add(o);const a=new un(dr,pr,e,t);a.layers=this.layers,this.add(a);const l=new un(dr,pr,e,t);l.layers=this.layers,this.add(l);const c=new un(dr,pr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Kd extends Yt{constructor(e=[],t=Ir,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vx extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cs(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:_i});s.uniforms.tEquirect.value=t;const o=new Yn(r,s),a=t.minFilter;return t.minFilter===Gi&&(t.minFilter=Cn),new _x(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class ro extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xx={type:"move"};class ja{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ro;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Mx extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ka=new Y,Sx=new Y,Ex=new Ve;class Ui{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ka.subVectors(i,t).cross(Sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ka),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ex.getNormalMatrix(e),r=this.coplanarPoint(Ka).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new ha,so=new Y;class Zd{constructor(e=new Ui,t=new Ui,i=new Ui,r=new Ui,s=new Ui,o=new Ui){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],v=r[10],m=r[11],d=r[12],A=r[13],w=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-d).normalize(),i[1].setComponents(l+s,h+c,m+p,y+d).normalize(),i[2].setComponents(l+o,h+u,m+_,y+A).normalize(),i[3].setComponents(l-o,h-u,m-_,y-A).normalize(),i[4].setComponents(l-a,h-f,m-v,y-w).normalize(),t===qn)i[5].setComponents(l+a,h+f,m+v,y+w).normalize();else if(t===ko)i[5].setComponents(a,f,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(so.x=r.normal.x>0?e.max.x:e.min.x,so.y=r.normal.y>0?e.max.y:e.min.y,so.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(so)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yx extends Rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Pf=new yt,uc=new Vd,oo=new ha,ao=new Y;class bx extends jt{constructor(e=new ti,t=new yx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(r),oo.radius+=s,e.ray.intersectsSphere(oo)===!1)return;Pf.copy(r).invert(),uc.copy(e.ray).applyMatrix4(Pf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,v=p;_<v;_++){const m=c.getX(_);ao.fromBufferAttribute(f,m),Df(ao,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,v=p;_<v;_++)ao.fromBufferAttribute(f,_),Df(ao,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Df(n,e,t,i,r,s,o){const a=uc.distanceSqToPoint(n);if(a<t){const l=new Y;uc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Jd extends Yt{constructor(e,t,i=Yi,r,s,o,a=En,l=En,c,u=Ms){if(u!==Ms&&u!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class da extends ti{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const A=d*h-o;for(let w=0;w<c;w++){const y=w*f-s;_.push(y,-A,0),v.push(0,0,1),m.push(w/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const w=A+c*d,y=A+c*(d+1),U=A+1+c*(d+1),L=A+1+c*d;p.push(w,y,L),p.push(y,U,L)}this.setIndex(p),this.setAttribute("position",new $i(_,3)),this.setAttribute("normal",new $i(v,3)),this.setAttribute("uv",new $i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}class Tx extends Rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ax extends Rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wx extends jd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Rx extends un{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Lf(n,e,t,i){const r=Cx(i);switch(t){case Ud:return n*e;case Fd:return n*e/r.components*r.byteLength;case Hc:return n*e/r.components*r.byteLength;case Od:return n*e*2/r.components*r.byteLength;case Vc:return n*e*2/r.components*r.byteLength;case Nd:return n*e*3/r.components*r.byteLength;case Mn:return n*e*4/r.components*r.byteLength;case Gc:return n*e*4/r.components*r.byteLength;case xo:case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case So:case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:case zl:return Math.max(n,16)*Math.max(e,8)/4;case Ol:case Bl:return Math.max(n,8)*Math.max(e,8)/2;case Hl:case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case yo:case rc:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case kd:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ac:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Cx(n){switch(n){case Zn:case Dd:return{byteLength:1,components:1};case vs:case Ld:case bs:return{byteLength:2,components:1};case Bc:case zc:return{byteLength:2,components:4};case Yi:case kc:case $n:return{byteLength:4,components:1};case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Px(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Dx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ox=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,e0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,h0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,A0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,w0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,C0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,z0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_M=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,MM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Dx,alphahash_pars_fragment:Lx,alphamap_fragment:Ix,alphamap_pars_fragment:Ux,alphatest_fragment:Nx,alphatest_pars_fragment:Fx,aomap_fragment:Ox,aomap_pars_fragment:kx,batching_pars_vertex:Bx,batching_vertex:zx,begin_vertex:Hx,beginnormal_vertex:Vx,bsdfs:Gx,iridescence_fragment:Wx,bumpmap_pars_fragment:Xx,clipping_planes_fragment:$x,clipping_planes_pars_fragment:qx,clipping_planes_pars_vertex:Yx,clipping_planes_vertex:jx,color_fragment:Kx,color_pars_fragment:Zx,color_pars_vertex:Jx,color_vertex:Qx,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:r0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:u0,envmap_pars_fragment:f0,envmap_pars_vertex:h0,envmap_physical_pars_fragment:y0,envmap_vertex:d0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:_0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:M0,lights_lambert_pars_fragment:S0,lights_pars_begin:E0,lights_toon_fragment:b0,lights_toon_pars_fragment:T0,lights_phong_fragment:A0,lights_phong_pars_fragment:w0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:D0,lights_fragment_end:L0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:U0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:F0,map_fragment:O0,map_pars_fragment:k0,map_particle_fragment:B0,map_particle_pars_fragment:z0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:X0,morphtarget_pars_vertex:$0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:j0,normal_pars_fragment:K0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:eM,clearcoat_normal_fragment_maps:tM,clearcoat_pars_fragment:nM,iridescence_pars_fragment:iM,opaque_fragment:rM,packing:sM,premultiplied_alpha_fragment:oM,project_vertex:aM,dithering_fragment:lM,dithering_pars_fragment:cM,roughnessmap_fragment:uM,roughnessmap_pars_fragment:fM,shadowmap_pars_fragment:hM,shadowmap_pars_vertex:dM,shadowmap_vertex:pM,shadowmask_pars_fragment:mM,skinbase_vertex:gM,skinning_pars_vertex:_M,skinning_vertex:vM,skinnormal_vertex:xM,specularmap_fragment:MM,specularmap_pars_fragment:SM,tonemapping_fragment:EM,tonemapping_pars_fragment:yM,transmission_fragment:bM,transmission_pars_fragment:TM,uv_pars_fragment:AM,uv_pars_vertex:wM,uv_vertex:RM,worldpos_vertex:CM,background_vert:PM,background_frag:DM,backgroundCube_vert:LM,backgroundCube_frag:IM,cube_vert:UM,cube_frag:NM,depth_vert:FM,depth_frag:OM,distanceRGBA_vert:kM,distanceRGBA_frag:BM,equirect_vert:zM,equirect_frag:HM,linedashed_vert:VM,linedashed_frag:GM,meshbasic_vert:WM,meshbasic_frag:XM,meshlambert_vert:$M,meshlambert_frag:qM,meshmatcap_vert:YM,meshmatcap_frag:jM,meshnormal_vert:KM,meshnormal_frag:ZM,meshphong_vert:JM,meshphong_frag:QM,meshphysical_vert:eS,meshphysical_frag:tS,meshtoon_vert:nS,meshtoon_frag:iS,points_vert:rS,points_frag:sS,shadow_vert:oS,shadow_frag:aS,sprite_vert:lS,sprite_frag:cS},ve={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},wn={basic:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Vt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Vt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Vt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new nt(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Vt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Vt([ve.points,ve.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Vt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Vt([ve.common,ve.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Vt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Vt([ve.sprite,ve.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Vt([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Vt([ve.lights,ve.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wn.physical={uniforms:Vt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const lo={r:0,b:0,g:0},Li=new Jn,uS=new yt;function fS(n,e,t,i,r,s,o){const a=new nt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function v(w){let y=!1;const U=_(w);U===null?d(a,l):U&&U.isColor&&(d(U,1),y=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){const U=_(y);U&&(U.isCubeTexture||U.mapping===fa)?(u===void 0&&(u=new Yn(new Cs(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Fr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(y.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(uS.makeRotationFromEuler(Li)),u.material.toneMapped=Qe.getTransfer(U.colorSpace)!==at,(f!==U||h!==U.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=U,h=U.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new Yn(new da(2,2),new Qn({name:"BackgroundMaterial",uniforms:Fr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(U.colorSpace)!==at,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||h!==U.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=U,h=U.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,y){w.getRGB(lo,Yd(n)),i.buffers.color.setClear(lo.r,lo.g,lo.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,y=1){a.set(w),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(a,l)},render:v,addToRenderList:m,dispose:A}}function hS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(E,P,Q,G,oe){let se=!1;const $=f(G,Q,P);s!==$&&(s=$,c(s.object)),se=p(E,G,Q,oe),se&&_(E,G,Q,oe),oe!==null&&e.update(oe,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,y(E,P,Q,G),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function f(E,P,Q){const G=Q.wireframe===!0;let oe=i[E.id];oe===void 0&&(oe={},i[E.id]=oe);let se=oe[P.id];se===void 0&&(se={},oe[P.id]=se);let $=se[G];return $===void 0&&($=h(l()),se[G]=$),$}function h(E){const P=[],Q=[],G=[];for(let oe=0;oe<t;oe++)P[oe]=0,Q[oe]=0,G[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Q,attributeDivisors:G,object:E,attributes:{},index:null}}function p(E,P,Q,G){const oe=s.attributes,se=P.attributes;let $=0;const ee=Q.getAttributes();for(const z in ee)if(ee[z].location>=0){const Me=oe[z];let we=se[z];if(we===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(we=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(we=E.instanceColor)),Me===void 0||Me.attribute!==we||we&&Me.data!==we.data)return!0;$++}return s.attributesNum!==$||s.index!==G}function _(E,P,Q,G){const oe={},se=P.attributes;let $=0;const ee=Q.getAttributes();for(const z in ee)if(ee[z].location>=0){let Me=se[z];Me===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor));const we={};we.attribute=Me,Me&&Me.data&&(we.data=Me.data),oe[z]=we,$++}s.attributes=oe,s.attributesNum=$,s.index=G}function v(){const E=s.newAttributes;for(let P=0,Q=E.length;P<Q;P++)E[P]=0}function m(E){d(E,0)}function d(E,P){const Q=s.newAttributes,G=s.enabledAttributes,oe=s.attributeDivisors;Q[E]=1,G[E]===0&&(n.enableVertexAttribArray(E),G[E]=1),oe[E]!==P&&(n.vertexAttribDivisor(E,P),oe[E]=P)}function A(){const E=s.newAttributes,P=s.enabledAttributes;for(let Q=0,G=P.length;Q<G;Q++)P[Q]!==E[Q]&&(n.disableVertexAttribArray(Q),P[Q]=0)}function w(E,P,Q,G,oe,se,$){$===!0?n.vertexAttribIPointer(E,P,Q,oe,se):n.vertexAttribPointer(E,P,Q,G,oe,se)}function y(E,P,Q,G){v();const oe=G.attributes,se=Q.getAttributes(),$=P.defaultAttributeValues;for(const ee in se){const z=se[ee];if(z.location>=0){let ge=oe[ee];if(ge===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor)),ge!==void 0){const Me=ge.normalized,we=ge.itemSize,Le=e.get(ge);if(Le===void 0)continue;const Ye=Le.buffer,ie=Le.type,me=Le.bytesPerElement,_e=ie===n.INT||ie===n.UNSIGNED_INT||ge.gpuType===kc;if(ge.isInterleavedBufferAttribute){const F=ge.data,re=F.stride,ae=ge.offset;if(F.isInstancedInterleavedBuffer){for(let ue=0;ue<z.locationSize;ue++)d(z.location+ue,F.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<z.locationSize;ue++)m(z.location+ue);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let ue=0;ue<z.locationSize;ue++)w(z.location+ue,we/z.locationSize,ie,Me,re*me,(ae+we/z.locationSize*ue)*me,_e)}else{if(ge.isInstancedBufferAttribute){for(let F=0;F<z.locationSize;F++)d(z.location+F,ge.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let F=0;F<z.locationSize;F++)m(z.location+F);n.bindBuffer(n.ARRAY_BUFFER,Ye);for(let F=0;F<z.locationSize;F++)w(z.location+F,we/z.locationSize,ie,Me,we*me,we/z.locationSize*F*me,_e)}}else if($!==void 0){const Me=$[ee];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(z.location,Me);break;case 3:n.vertexAttrib3fv(z.location,Me);break;case 4:n.vertexAttrib4fv(z.location,Me);break;default:n.vertexAttrib1fv(z.location,Me)}}}}A()}function U(){N();for(const E in i){const P=i[E];for(const Q in P){const G=P[Q];for(const oe in G)u(G[oe].object),delete G[oe];delete P[Q]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const Q in P){const G=P[Q];for(const oe in G)u(G[oe].object),delete G[oe];delete P[Q]}delete i[E.id]}function C(E){for(const P in i){const Q=i[P];if(Q[E.id]===void 0)continue;const G=Q[E.id];for(const oe in G)u(G[oe].object),delete G[oe];delete Q[E.id]}}function N(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function dS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function pS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Mn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Zn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==$n&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:U,maxSamples:L}}function mS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ui,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,w=A*4;let y=d.clippingState||null;l.value=y,y=u(_,h,w,p);for(let U=0;U!==w;++U)y[U]=t[U];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,y=p;w!==v;++w,y+=4)o.copy(f[w]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function gS(n){let e=new WeakMap;function t(o,a){return a===Il?o.mapping=Ir:a===Ul&&(o.mapping=Ur),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Il||a===Ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new vx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const _r=4,If=[.125,.215,.35,.446,.526,.582],zi=20,Za=new wx,Uf=new nt;let Ja=null,Qa=0,el=0,tl=!1;const Ni=(1+Math.sqrt(5))/2,mr=1/Ni,Nf=[new Y(-Ni,mr,0),new Y(Ni,mr,0),new Y(-mr,0,Ni),new Y(mr,0,Ni),new Y(0,Ni,-mr),new Y(0,Ni,mr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],_S=new Y;class Ff{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=_S}=s;Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Qa,el),this._renderer.xr.enabled=tl,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),el=this._renderer.getActiveMipmapLevel(),tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:bs,format:Mn,colorSpace:Nr,depthBuffer:!1},r=Of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Of(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vS(s)),this._blurMaterial=xS(s,e,t)}return r}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,i,r,s){const l=new un(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Uf),f.toneMapping=vi,f.autoClear=!1;const _=new Xd({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),v=new Yn(new Cs,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(Uf),m=!0);for(let A=0;A<6;A++){const w=A%3;w===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):w===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const y=this._cubeSize;co(r,w*y,A>2?y:0,y,y),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ir||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;co(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Za)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Nf[(r-s-1)%Nf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Yn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*zi-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const d=[];let A=0;for(let C=0;C<zi;++C){const N=C/v,b=Math.exp(-N*N/2);d.push(b),C===0?A+=b:C<m&&(A+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=_,h.mipInt.value=w-i;const y=this._sizeLods[r],U=3*y*(r>w-_r?r-w+_r:0),L=4*(this._cubeSize-y);co(t,U,L,3*y,2*y),l.setRenderTarget(t),l.render(f,Za)}}function vS(n){const e=[],t=[],i=[];let r=n;const s=n-_r+1+If.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-_r?l=If[o-n+_r-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,d=1,A=new Float32Array(v*_*p),w=new Float32Array(m*_*p),y=new Float32Array(d*_*p);for(let L=0;L<p;L++){const C=L%3*2/3-1,N=L>2?0:-1,b=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];A.set(b,v*_*L),w.set(h,m*_*L);const E=[L,L,L,L,L,L];y.set(E,d*_*L)}const U=new ti;U.setAttribute("position",new yn(A,v)),U.setAttribute("uv",new yn(w,m)),U.setAttribute("faceIndex",new yn(y,d)),e.push(U),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Of(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xS(n,e,t){const i=new Float32Array(zi),r=new Y(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function kf(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Bf(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Il||l===Ul,u=l===Ir||l===Ur;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Ff(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Ff(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function SS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&bo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ES(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const A=p.array;v=p.version;for(let w=0,y=A.length;w<y;w+=3){const U=A[w+0],L=A[w+1],C=A[w+2];h.push(U,L,L,C,C,U)}}else if(_!==void 0){const A=_.array;v=_.version;for(let w=0,y=A.length/3-1;w<y;w+=3){const U=w+0,L=w+1,C=w+2;h.push(U,L,L,C,C,U)}}else return;const m=new(zd(h)?qd:$d)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function yS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,_);let d=0;for(let A=0;A<_;A++)d+=p[A]*v[A];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function TS(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let E=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let U=a.attributes.position.count*y,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*L*4*f),N=new Hd(C,U,L,f);N.type=$n,N.needsUpdate=!0;const b=y*4;for(let P=0;P<f;P++){const Q=d[P],G=A[P],oe=w[P],se=U*L*4*P;for(let $=0;$<Q.count;$++){const ee=$*b;_===!0&&(r.fromBufferAttribute(Q,$),C[se+ee+0]=r.x,C[se+ee+1]=r.y,C[se+ee+2]=r.z,C[se+ee+3]=0),v===!0&&(r.fromBufferAttribute(G,$),C[se+ee+4]=r.x,C[se+ee+5]=r.y,C[se+ee+6]=r.z,C[se+ee+7]=0),m===!0&&(r.fromBufferAttribute(oe,$),C[se+ee+8]=r.x,C[se+ee+9]=r.y,C[se+ee+10]=r.z,C[se+ee+11]=oe.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new ht(U,L)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function AS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ep=new Yt,zf=new Jd(1,1),tp=new Hd,np=new tx,ip=new Kd,Hf=[],Vf=[],Gf=new Float32Array(16),Wf=new Float32Array(9),Xf=new Float32Array(4);function Vr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Hf[r];if(s===void 0&&(s=new Float32Array(r),Hf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pa(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function DS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Xf.set(i),n.uniformMatrix2fv(this.addr,!1,Xf),Ct(t,i)}}function LS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Wf.set(i),n.uniformMatrix3fv(this.addr,!1,Wf),Ct(t,i)}}function IS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Gf.set(i),n.uniformMatrix4fv(this.addr,!1,Gf),Ct(t,i)}}function US(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function FS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function kS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function BS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function VS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zf.compareFunction=Bd,s=zf):s=ep,t.setTexture2D(e||s,r)}function GS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||np,r)}function WS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ip,r)}function XS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||tp,r)}function $S(n){switch(n){case 5126:return wS;case 35664:return RS;case 35665:return CS;case 35666:return PS;case 35674:return DS;case 35675:return LS;case 35676:return IS;case 5124:case 35670:return US;case 35667:case 35671:return NS;case 35668:case 35672:return FS;case 35669:case 35673:return OS;case 5125:return kS;case 36294:return BS;case 36295:return zS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return XS}}function qS(n,e){n.uniform1fv(this.addr,e)}function YS(n,e){const t=Vr(e,this.size,2);n.uniform2fv(this.addr,t)}function jS(n,e){const t=Vr(e,this.size,3);n.uniform3fv(this.addr,t)}function KS(n,e){const t=Vr(e,this.size,4);n.uniform4fv(this.addr,t)}function ZS(n,e){const t=Vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function JS(n,e){const t=Vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function QS(n,e){const t=Vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eE(n,e){n.uniform1iv(this.addr,e)}function tE(n,e){n.uniform2iv(this.addr,e)}function nE(n,e){n.uniform3iv(this.addr,e)}function iE(n,e){n.uniform4iv(this.addr,e)}function rE(n,e){n.uniform1uiv(this.addr,e)}function sE(n,e){n.uniform2uiv(this.addr,e)}function oE(n,e){n.uniform3uiv(this.addr,e)}function aE(n,e){n.uniform4uiv(this.addr,e)}function lE(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ep,s[o])}function cE(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||np,s[o])}function uE(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ip,s[o])}function fE(n,e,t){const i=this.cache,r=e.length,s=pa(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||tp,s[o])}function hE(n){switch(n){case 5126:return qS;case 35664:return YS;case 35665:return jS;case 35666:return KS;case 35674:return ZS;case 35675:return JS;case 35676:return QS;case 5124:case 35670:return eE;case 35667:case 35671:return tE;case 35668:case 35672:return nE;case 35669:case 35673:return iE;case 5125:return rE;case 36294:return sE;case 36295:return oE;case 36296:return aE;case 35678:case 36198:case 36298:case 36306:case 35682:return lE;case 35679:case 36299:case 36307:return cE;case 35680:case 36300:case 36308:case 36293:return uE;case 36289:case 36303:case 36311:case 36292:return fE}}class dE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$S(t.type)}}class pE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hE(t.type)}}class mE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const nl=/(\w+)(\])?(\[|\.)?/g;function $f(n,e){n.seq.push(e),n.map[e.id]=e}function gE(n,e,t){const i=n.name,r=i.length;for(nl.lastIndex=0;;){const s=nl.exec(i),o=nl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$f(t,c===void 0?new dE(a,n,e):new pE(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new mE(a),$f(t,f)),t=f}}}class To{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gE(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _E=37297;let vE=0;function xE(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Yf=new Ve;function ME(n){Qe._getMatrix(Yf,Qe.workingColorSpace,n);const e=`mat3( ${Yf.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Oo:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xE(n.getShaderSource(e),o)}else return r}function SE(n,e){const t=ME(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function EE(n,e){let t;switch(e){case Av:t="Linear";break;case wv:t="Reinhard";break;case Rv:t="Cineon";break;case Cv:t="ACESFilmic";break;case Dv:t="AgX";break;case Lv:t="Neutral";break;case Pv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const uo=new Y;function yE(){Qe.getLuminanceCoefficients(uo);const n=uo.x.toFixed(4),e=uo.y.toFixed(4),t=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function TE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ns(n){return n!==""}function Kf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wE=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(n){return n.replace(wE,CE)}const RE=new Map;function CE(n,e){let t=We[e];if(t===void 0){const i=RE.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const PE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(n){return n.replace(PE,DE)}function DE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function IE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ir:case Ur:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function NE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cd:e="ENVMAP_BLENDING_MULTIPLY";break;case bv:e="ENVMAP_BLENDING_MIX";break;case Tv:e="ENVMAP_BLENDING_ADD";break}return e}function FE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function OE(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=LE(t),c=IE(t),u=UE(t),f=NE(t),h=FE(t),p=bE(t),_=TE(s),v=r.createProgram();let m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ns).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ns).join(`
`),d.length>0&&(d+=`
`)):(m=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),d=[Qf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?We.tonemapping_pars_fragment:"",t.toneMapping!==vi?EE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,SE("linearToOutputTexel",t.outputColorSpace),yE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=fc(o),o=Kf(o,t),o=Zf(o,t),a=fc(a),a=Kf(a,t),a=Zf(a,t),o=Jf(o),a=Jf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===hf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=A+m+o,y=A+d+a,U=qf(r,r.VERTEX_SHADER,w),L=qf(r,r.FRAGMENT_SHADER,y);r.attachShader(v,U),r.attachShader(v,L),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(U).trim(),oe=r.getShaderInfoLog(L).trim();let se=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,U,L);else{const ee=jf(r,U,"vertex"),z=jf(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Q+`
`+ee+`
`+z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(G===""||oe==="")&&($=!1);$&&(P.diagnostics={runnable:se,programLog:Q,vertexShader:{log:G,prefix:m},fragmentShader:{log:oe,prefix:d}})}r.deleteShader(U),r.deleteShader(L),N=new To(r,v),b=AE(r,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(v,_E)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=L,this}let kE=0;class BE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new zE(e),t.set(e,i)),i}}class zE{constructor(e){this.id=kE++,this.code=e,this.usedTimes=0}}function HE(n,e,t,i,r,s,o){const a=new Gd,l=new BE,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,P,Q,G){const oe=Q.fog,se=G.geometry,$=b.isMeshStandardMaterial?Q.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),z=ee&&ee.mapping===fa?ee.image.height:null,ge=_[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Me=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,we=Me!==void 0?Me.length:0;let Le=0;se.morphAttributes.position!==void 0&&(Le=1),se.morphAttributes.normal!==void 0&&(Le=2),se.morphAttributes.color!==void 0&&(Le=3);let Ye,ie,me,_e;if(ge){const rt=wn[ge];Ye=rt.vertexShader,ie=rt.fragmentShader}else Ye=b.vertexShader,ie=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const F=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),ae=G.isInstancedMesh===!0,ue=G.isBatchedMesh===!0,T=!!b.map,R=!!b.matcap,I=!!ee,x=!!b.aoMap,Z=!!b.lightMap,te=!!b.bumpMap,ne=!!b.normalMap,j=!!b.displacementMap,ce=!!b.emissiveMap,V=!!b.metalnessMap,S=!!b.roughnessMap,g=b.anisotropy>0,D=b.clearcoat>0,H=b.dispersion>0,K=b.iridescence>0,W=b.sheen>0,pe=b.transmission>0,de=g&&!!b.anisotropyMap,Ce=D&&!!b.clearcoatMap,De=D&&!!b.clearcoatNormalMap,fe=D&&!!b.clearcoatRoughnessMap,be=K&&!!b.iridescenceMap,Oe=K&&!!b.iridescenceThicknessMap,Pe=W&&!!b.sheenColorMap,xe=W&&!!b.sheenRoughnessMap,$e=!!b.specularMap,Ge=!!b.specularColorMap,dt=!!b.specularIntensityMap,O=pe&&!!b.transmissionMap,Ee=pe&&!!b.thicknessMap,J=!!b.gradientMap,le=!!b.alphaMap,Te=b.alphaTest>0,ye=!!b.alphaHash,He=!!b.extensions;let vt=vi;b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(vt=n.toneMapping);const Nt={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:ie,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ue,batchingColor:ue&&G._colorsTexture!==null,instancing:ae,instancingColor:ae&&G.instanceColor!==null,instancingMorph:ae&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Nr,alphaToCoverage:!!b.alphaToCoverage,map:T,matcap:R,envMap:I,envMapMode:I&&ee.mapping,envMapCubeUVHeight:z,aoMap:x,lightMap:Z,bumpMap:te,normalMap:ne,displacementMap:h&&j,emissiveMap:ce,normalMapObjectSpace:ne&&b.normalMapType===Ov,normalMapTangentSpace:ne&&b.normalMapType===Fv,metalnessMap:V,roughnessMap:S,anisotropy:g,anisotropyMap:de,clearcoat:D,clearcoatMap:Ce,clearcoatNormalMap:De,clearcoatRoughnessMap:fe,dispersion:H,iridescence:K,iridescenceMap:be,iridescenceThicknessMap:Oe,sheen:W,sheenColorMap:Pe,sheenRoughnessMap:xe,specularMap:$e,specularColorMap:Ge,specularIntensityMap:dt,transmission:pe,transmissionMap:O,thicknessMap:Ee,gradientMap:J,opaque:b.transparent===!1&&b.blending===yr&&b.alphaToCoverage===!1,alphaMap:le,alphaTest:Te,alphaHash:ye,combine:b.combine,mapUv:T&&v(b.map.channel),aoMapUv:x&&v(b.aoMap.channel),lightMapUv:Z&&v(b.lightMap.channel),bumpMapUv:te&&v(b.bumpMap.channel),normalMapUv:ne&&v(b.normalMap.channel),displacementMapUv:j&&v(b.displacementMap.channel),emissiveMapUv:ce&&v(b.emissiveMap.channel),metalnessMapUv:V&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:de&&v(b.anisotropyMap.channel),clearcoatMapUv:Ce&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:De&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(b.sheenRoughnessMap.channel),specularMapUv:$e&&v(b.specularMap.channel),specularColorMapUv:Ge&&v(b.specularColorMap.channel),specularIntensityMapUv:dt&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:Ee&&v(b.thicknessMap.channel),alphaMapUv:le&&v(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(ne||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!se.attributes.uv&&(T||le),fog:!!oe,useFog:b.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:G.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:T&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===at,decodeVideoTextureEmissive:ce&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===at,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wn,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function d(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)E.push(P),E.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(A(E,b),w(E,b),E.push(n.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function A(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function w(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const E=_[b.type];let P;if(E){const Q=wn[E];P=px.clone(Q.uniforms)}else P=b.uniforms;return P}function U(b,E){let P;for(let Q=0,G=u.length;Q<G;Q++){const oe=u[Q];if(oe.cacheKey===E){P=oe,++P.usedTimes;break}}return P===void 0&&(P=new OE(n,E,b,s),u.push(P)),P}function L(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:U,releaseProgram:L,releaseShaderCache:C,programs:u,dispose:N}}function VE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function GE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function eh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function th(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,v,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||GE),i.length>1&&i.sort(h||eh),r.length>1&&r.sort(h||eh)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function WE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new th,n.set(i,[o])):r>=s.length?(o=new th,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new nt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function $E(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let qE=0;function YE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function jE(n){const e=new XE,t=$E(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new yt,o=new yt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,A=0,w=0,y=0,U=0,L=0,C=0;c.sort(YE);for(let b=0,E=c.length;b<E;b++){const P=c[b],Q=P.color,G=P.intensity,oe=P.distance,se=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=Q.r*G,f+=Q.g*G,h+=Q.b*G;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],G);C++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,z=t.get(P);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=P.shadow.matrix,A++}i.directional[p]=$,p++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(Q).multiplyScalar(G),$.distance=oe,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[v]=$;const ee=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,ee.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[v]=ee.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=se,y++}v++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(Q).multiplyScalar(G),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=$,m++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const ee=P.shadow,z=t.get(P);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,z.shadowCameraNear=ee.camera.near,z.shadowCameraFar=ee.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=P.shadow.matrix,w++}i.point[_]=$,_++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(G),$.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[d]=$,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==A||N.numPointShadows!==w||N.numSpotShadows!==y||N.numSpotMaps!==U||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+U-L,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,N.directionalLength=p,N.pointLength=_,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=A,N.numPointShadows=w,N.numSpotShadows=y,N.numSpotMaps=U,N.numLightProbes=C,i.version=qE++)}function l(c,u){let f=0,h=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){const w=c[d];if(w.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(w.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function nh(n){const e=new jE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function KE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new nh(n),e.set(r,[a])):s>=o.length?(a=new nh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const ZE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function QE(n,e,t){let i=new Zd;const r=new ht,s=new ht,o=new St,a=new Tx({depthPacking:Nv}),l=new Ax,c={},u=t.maxTextureSize,f={[Ei]:qt,[qt]:Ei,[Wn]:Wn},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:ZE,fragmentShader:JE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new ti;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Yn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let d=this.type;this.render=function(L,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const b=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(_i),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const G=d!==Vn&&this.type===Vn,oe=d===Vn&&this.type!==Vn;for(let se=0,$=L.length;se<$;se++){const ee=L[se],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ge=z.getFrameExtents();if(r.multiply(ge),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,z.mapSize.y=s.y)),z.map===null||G===!0||oe===!0){const we=this.type!==Vn?{minFilter:En,magFilter:En}:{};z.map!==null&&z.map.dispose(),z.map=new ji(r.x,r.y,we),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Me=z.getViewportCount();for(let we=0;we<Me;we++){const Le=z.getViewport(we);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),Q.viewport(o),z.updateMatrices(ee,we),i=z.getFrustum(),y(C,N,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Vn&&A(z,N),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,E,P)};function A(L,C){const N=e.update(v);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ji(r.x,r.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(C,null,N,h,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(C,null,N,p,v,null)}function w(L,C,N,b){let E=null;const P=N.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)E=P;else if(E=N.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const Q=E.uuid,G=C.uuid;let oe=c[Q];oe===void 0&&(oe={},c[Q]=oe);let se=oe[G];se===void 0&&(se=E.clone(),oe[G]=se,C.addEventListener("dispose",U)),E=se}if(E.visible=C.visible,E.wireframe=C.wireframe,b===Vn?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=n.properties.get(E);Q.light=N}return E}function y(L,C,N,b,E){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===Vn)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld);const G=e.update(L),oe=L.material;if(Array.isArray(oe)){const se=G.groups;for(let $=0,ee=se.length;$<ee;$++){const z=se[$],ge=oe[z.materialIndex];if(ge&&ge.visible){const Me=w(L,ge,b,E);L.onBeforeShadow(n,L,C,N,G,Me,z),n.renderBufferDirect(N,null,G,Me,L,z),L.onAfterShadow(n,L,C,N,G,Me,z)}}}else if(oe.visible){const se=w(L,oe,b,E);L.onBeforeShadow(n,L,C,N,G,se,null),n.renderBufferDirect(N,null,G,se,L,null),L.onAfterShadow(n,L,C,N,G,se,null)}}const Q=L.children;for(let G=0,oe=Q.length;G<oe;G++)y(Q[G],C,N,b,E)}function U(L){L.target.removeEventListener("dispose",U);for(const N in c){const b=c[N],E=L.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const ey={[Al]:wl,[Rl]:Dl,[Cl]:Ll,[Lr]:Pl,[wl]:Al,[Dl]:Rl,[Ll]:Cl,[Pl]:Lr};function ty(n,e){function t(){let O=!1;const Ee=new St;let J=null;const le=new St(0,0,0,0);return{setMask:function(Te){J!==Te&&!O&&(n.colorMask(Te,Te,Te,Te),J=Te)},setLocked:function(Te){O=Te},setClear:function(Te,ye,He,vt,Nt){Nt===!0&&(Te*=vt,ye*=vt,He*=vt),Ee.set(Te,ye,He,vt),le.equals(Ee)===!1&&(n.clearColor(Te,ye,He,vt),le.copy(Ee))},reset:function(){O=!1,J=null,le.set(-1,0,0,0)}}}function i(){let O=!1,Ee=!1,J=null,le=null,Te=null;return{setReversed:function(ye){if(Ee!==ye){const He=e.get("EXT_clip_control");ye?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Ee=ye;const vt=Te;Te=null,this.setClear(vt)}},getReversed:function(){return Ee},setTest:function(ye){ye?F(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(ye){J!==ye&&!O&&(n.depthMask(ye),J=ye)},setFunc:function(ye){if(Ee&&(ye=ey[ye]),le!==ye){switch(ye){case Al:n.depthFunc(n.NEVER);break;case wl:n.depthFunc(n.ALWAYS);break;case Rl:n.depthFunc(n.LESS);break;case Lr:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Pl:n.depthFunc(n.GEQUAL);break;case Dl:n.depthFunc(n.GREATER);break;case Ll:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=ye}},setLocked:function(ye){O=ye},setClear:function(ye){Te!==ye&&(Ee&&(ye=1-ye),n.clearDepth(ye),Te=ye)},reset:function(){O=!1,J=null,le=null,Te=null,Ee=!1}}}function r(){let O=!1,Ee=null,J=null,le=null,Te=null,ye=null,He=null,vt=null,Nt=null;return{setTest:function(rt){O||(rt?F(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(rt){Ee!==rt&&!O&&(n.stencilMask(rt),Ee=rt)},setFunc:function(rt,hn,Nn){(J!==rt||le!==hn||Te!==Nn)&&(n.stencilFunc(rt,hn,Nn),J=rt,le=hn,Te=Nn)},setOp:function(rt,hn,Nn){(ye!==rt||He!==hn||vt!==Nn)&&(n.stencilOp(rt,hn,Nn),ye=rt,He=hn,vt=Nn)},setLocked:function(rt){O=rt},setClear:function(rt){Nt!==rt&&(n.clearStencil(rt),Nt=rt)},reset:function(){O=!1,Ee=null,J=null,le=null,Te=null,ye=null,He=null,vt=null,Nt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,A=null,w=null,y=null,U=null,L=null,C=new nt(0,0,0),N=0,b=!1,E=null,P=null,Q=null,G=null,oe=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=ee>=1):z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=ee>=2);let ge=null,Me={};const we=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),Ye=new St().fromArray(we),ie=new St().fromArray(Le);function me(O,Ee,J,le){const Te=new Uint8Array(4),ye=n.createTexture();n.bindTexture(O,ye),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<J;He++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(Ee+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return ye}const _e={};_e[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(Lr),te(!1),ne(af),F(n.CULL_FACE),x(_i);function F(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function re(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ae(O,Ee){return f[O]!==Ee?(n.bindFramebuffer(O,Ee),f[O]=Ee,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Ee),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function ue(O,Ee){let J=p,le=!1;if(O){J=h.get(Ee),J===void 0&&(J=[],h.set(Ee,J));const Te=O.textures;if(J.length!==Te.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,He=Te.length;ye<He;ye++)J[ye]=n.COLOR_ATTACHMENT0+ye;J.length=Te.length,le=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,le=!0);le&&n.drawBuffers(J)}function T(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const R={[Bi]:n.FUNC_ADD,[av]:n.FUNC_SUBTRACT,[lv]:n.FUNC_REVERSE_SUBTRACT};R[cv]=n.MIN,R[uv]=n.MAX;const I={[fv]:n.ZERO,[hv]:n.ONE,[dv]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[xv]:n.SRC_ALPHA_SATURATE,[_v]:n.DST_COLOR,[mv]:n.DST_ALPHA,[pv]:n.ONE_MINUS_SRC_COLOR,[Tl]:n.ONE_MINUS_SRC_ALPHA,[vv]:n.ONE_MINUS_DST_COLOR,[gv]:n.ONE_MINUS_DST_ALPHA,[Mv]:n.CONSTANT_COLOR,[Sv]:n.ONE_MINUS_CONSTANT_COLOR,[Ev]:n.CONSTANT_ALPHA,[yv]:n.ONE_MINUS_CONSTANT_ALPHA};function x(O,Ee,J,le,Te,ye,He,vt,Nt,rt){if(O===_i){v===!0&&(re(n.BLEND),v=!1);return}if(v===!1&&(F(n.BLEND),v=!0),O!==ov){if(O!==m||rt!==b){if((d!==Bi||y!==Bi)&&(n.blendEquation(n.FUNC_ADD),d=Bi,y=Bi),rt)switch(O){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFunc(n.ONE,n.ONE);break;case lf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,w=null,U=null,L=null,C.set(0,0,0),N=0,m=O,b=rt}return}Te=Te||Ee,ye=ye||J,He=He||le,(Ee!==d||Te!==y)&&(n.blendEquationSeparate(R[Ee],R[Te]),d=Ee,y=Te),(J!==A||le!==w||ye!==U||He!==L)&&(n.blendFuncSeparate(I[J],I[le],I[ye],I[He]),A=J,w=le,U=ye,L=He),(vt.equals(C)===!1||Nt!==N)&&(n.blendColor(vt.r,vt.g,vt.b,Nt),C.copy(vt),N=Nt),m=O,b=!1}function Z(O,Ee){O.side===Wn?re(n.CULL_FACE):F(n.CULL_FACE);let J=O.side===qt;Ee&&(J=!J),te(J),O.blending===yr&&O.transparent===!1?x(_i):x(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const le=O.stencilWrite;a.setTest(le),le&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ce(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){E!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),E=O)}function ne(O){O!==iv?(F(n.CULL_FACE),O!==P&&(O===af?n.cullFace(n.BACK):O===rv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),P=O}function j(O){O!==Q&&($&&n.lineWidth(O),Q=O)}function ce(O,Ee,J){O?(F(n.POLYGON_OFFSET_FILL),(G!==Ee||oe!==J)&&(n.polygonOffset(Ee,J),G=Ee,oe=J)):re(n.POLYGON_OFFSET_FILL)}function V(O){O?F(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function S(O){O===void 0&&(O=n.TEXTURE0+se-1),ge!==O&&(n.activeTexture(O),ge=O)}function g(O,Ee,J){J===void 0&&(ge===null?J=n.TEXTURE0+se-1:J=ge);let le=Me[J];le===void 0&&(le={type:void 0,texture:void 0},Me[J]=le),(le.type!==O||le.texture!==Ee)&&(ge!==J&&(n.activeTexture(J),ge=J),n.bindTexture(O,Ee||_e[O]),le.type=O,le.texture=Ee)}function D(){const O=Me[ge];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(O){Ye.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Ye.copy(O))}function xe(O){ie.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function $e(O,Ee){let J=c.get(Ee);J===void 0&&(J=new WeakMap,c.set(Ee,J));let le=J.get(O);le===void 0&&(le=n.getUniformBlockIndex(Ee,O.name),J.set(O,le))}function Ge(O,Ee){const le=c.get(Ee).get(O);l.get(Ee)!==le&&(n.uniformBlockBinding(Ee,le,O.__bindingPointIndex),l.set(Ee,le))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,Me={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,A=null,w=null,y=null,U=null,L=null,C=new nt(0,0,0),N=0,b=!1,E=null,P=null,Q=null,G=null,oe=null,Ye.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:re,bindFramebuffer:ae,drawBuffers:ue,useProgram:T,setBlending:x,setMaterial:Z,setFlipSided:te,setCullFace:ne,setLineWidth:j,setPolygonOffset:ce,setScissorTest:V,activeTexture:S,bindTexture:g,unbindTexture:D,compressedTexImage2D:H,compressedTexImage3D:K,texImage2D:be,texImage3D:Oe,updateUBOMapping:$e,uniformBlockBinding:Ge,texStorage2D:De,texStorage3D:fe,texSubImage2D:W,texSubImage3D:pe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ce,scissor:Pe,viewport:xe,reset:dt}}function ny(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return p?new OffscreenCanvas(S,g):Bo("canvas")}function v(S,g,D){let H=1;const K=V(S);if((K.width>D||K.height>D)&&(H=D/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(H*K.width),pe=Math.floor(H*K.height);f===void 0&&(f=_(W,pe));const de=g?_(W,pe):f;return de.width=W,de.height=pe,de.getContext("2d").drawImage(S,0,0,W,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+pe+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function m(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function A(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(S,g,D,H,K=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=g;if(g===n.RED&&(D===n.FLOAT&&(W=n.R32F),D===n.HALF_FLOAT&&(W=n.R16F),D===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.R8UI),D===n.UNSIGNED_SHORT&&(W=n.R16UI),D===n.UNSIGNED_INT&&(W=n.R32UI),D===n.BYTE&&(W=n.R8I),D===n.SHORT&&(W=n.R16I),D===n.INT&&(W=n.R32I)),g===n.RG&&(D===n.FLOAT&&(W=n.RG32F),D===n.HALF_FLOAT&&(W=n.RG16F),D===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RG8UI),D===n.UNSIGNED_SHORT&&(W=n.RG16UI),D===n.UNSIGNED_INT&&(W=n.RG32UI),D===n.BYTE&&(W=n.RG8I),D===n.SHORT&&(W=n.RG16I),D===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGB8UI),D===n.UNSIGNED_SHORT&&(W=n.RGB16UI),D===n.UNSIGNED_INT&&(W=n.RGB32UI),D===n.BYTE&&(W=n.RGB8I),D===n.SHORT&&(W=n.RGB16I),D===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),D===n.UNSIGNED_INT&&(W=n.RGBA32UI),D===n.BYTE&&(W=n.RGBA8I),D===n.SHORT&&(W=n.RGBA16I),D===n.INT&&(W=n.RGBA32I)),g===n.RGB&&D===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),g===n.RGBA){const pe=K?Oo:Qe.getTransfer(H);D===n.FLOAT&&(W=n.RGBA32F),D===n.HALF_FLOAT&&(W=n.RGBA16F),D===n.UNSIGNED_BYTE&&(W=pe===at?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function y(S,g){let D;return S?g===null||g===Yi||g===xs?D=n.DEPTH24_STENCIL8:g===$n?D=n.DEPTH32F_STENCIL8:g===vs&&(D=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yi||g===xs?D=n.DEPTH_COMPONENT24:g===$n?D=n.DEPTH_COMPONENT32F:g===vs&&(D=n.DEPTH_COMPONENT16),D}function U(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==En&&S.minFilter!==Cn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function L(S){const g=S.target;g.removeEventListener("dispose",L),N(g),g.isVideoTexture&&u.delete(g)}function C(S){const g=S.target;g.removeEventListener("dispose",C),E(g)}function N(S){const g=i.get(S);if(g.__webglInit===void 0)return;const D=S.source,H=h.get(D);if(H){const K=H[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(S),Object.keys(H).length===0&&h.delete(D)}i.remove(S)}function b(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const D=S.source,H=h.get(D);delete H[g.__cacheKey],o.memory.textures--}function E(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let K=0;K<g.__webglFramebuffer[H].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[H][K]);else n.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)n.deleteFramebuffer(g.__webglFramebuffer[H]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const D=S.textures;for(let H=0,K=D.length;H<K;H++){const W=i.get(D[H]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(D[H])}i.remove(S)}let P=0;function Q(){P=0}function G(){const S=P;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),P+=1,S}function oe(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function se(S,g){const D=i.get(S);if(S.isVideoTexture&&j(S),S.isRenderTargetTexture===!1&&S.version>0&&D.__version!==S.version){const H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(D,S,g);return}}t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function $(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){ie(D,S,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function ee(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){ie(D,S,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function z(S,g){const D=i.get(S);if(S.version>0&&D.__version!==S.version){me(D,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}const ge={[Nl]:n.REPEAT,[Vi]:n.CLAMP_TO_EDGE,[Fl]:n.MIRRORED_REPEAT},Me={[En]:n.NEAREST,[Iv]:n.NEAREST_MIPMAP_NEAREST,[Hs]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[wa]:n.LINEAR_MIPMAP_NEAREST,[Gi]:n.LINEAR_MIPMAP_LINEAR},we={[kv]:n.NEVER,[Wv]:n.ALWAYS,[Bv]:n.LESS,[Bd]:n.LEQUAL,[zv]:n.EQUAL,[Gv]:n.GEQUAL,[Hv]:n.GREATER,[Vv]:n.NOTEQUAL};function Le(S,g){if(g.type===$n&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Cn||g.magFilter===wa||g.magFilter===Hs||g.magFilter===Gi||g.minFilter===Cn||g.minFilter===wa||g.minFilter===Hs||g.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ge[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Me[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Me[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===En||g.minFilter!==Hs&&g.minFilter!==Gi||g.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(S,g){let D=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",L));const H=g.source;let K=h.get(H);K===void 0&&(K={},h.set(H,K));const W=oe(g);if(W!==S.__cacheKey){K[W]===void 0&&(K[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,D=!0),K[W].usedTimes++;const pe=K[S.__cacheKey];pe!==void 0&&(K[S.__cacheKey].usedTimes--,pe.usedTimes===0&&b(g)),S.__cacheKey=W,S.__webglTexture=K[W].texture}return D}function ie(S,g,D){let H=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=n.TEXTURE_3D);const K=Ye(S,g),W=g.source;t.bindTexture(H,S.__webglTexture,n.TEXTURE0+D);const pe=i.get(W);if(W.version!==pe.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const de=Qe.getPrimaries(Qe.workingColorSpace),Ce=g.colorSpace===di?null:Qe.getPrimaries(g.colorSpace),De=g.colorSpace===di||de===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let fe=v(g.image,!1,r.maxTextureSize);fe=ce(g,fe);const be=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type);let Pe=w(g.internalFormat,be,Oe,g.colorSpace,g.isVideoTexture);Le(H,g);let xe;const $e=g.mipmaps,Ge=g.isVideoTexture!==!0,dt=pe.__version===void 0||K===!0,O=W.dataReady,Ee=U(g,fe);if(g.isDepthTexture)Pe=y(g.format===Ss,g.type),dt&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,Pe,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Pe,fe.width,fe.height,0,be,Oe,null));else if(g.isDataTexture)if($e.length>0){Ge&&dt&&t.texStorage2D(n.TEXTURE_2D,Ee,Pe,$e[0].width,$e[0].height);for(let J=0,le=$e.length;J<le;J++)xe=$e[J],Ge?O&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,be,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,J,Pe,xe.width,xe.height,0,be,Oe,xe.data);g.generateMipmaps=!1}else Ge?(dt&&t.texStorage2D(n.TEXTURE_2D,Ee,Pe,fe.width,fe.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,be,Oe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,fe.width,fe.height,0,be,Oe,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ge&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Pe,$e[0].width,$e[0].height,fe.depth);for(let J=0,le=$e.length;J<le;J++)if(xe=$e[J],g.format!==Mn)if(be!==null)if(Ge){if(O)if(g.layerUpdates.size>0){const Te=Lf(xe.width,xe.height,g.format,g.type);for(const ye of g.layerUpdates){const He=xe.data.subarray(ye*Te/xe.data.BYTES_PER_ELEMENT,(ye+1)*Te/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ye,xe.width,xe.height,1,be,He)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,fe.depth,be,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Pe,xe.width,xe.height,fe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,fe.depth,be,Oe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Pe,xe.width,xe.height,fe.depth,0,be,Oe,xe.data)}else{Ge&&dt&&t.texStorage2D(n.TEXTURE_2D,Ee,Pe,$e[0].width,$e[0].height);for(let J=0,le=$e.length;J<le;J++)xe=$e[J],g.format!==Mn?be!==null?Ge?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Pe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?O&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,be,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,J,Pe,xe.width,xe.height,0,be,Oe,xe.data)}else if(g.isDataArrayTexture)if(Ge){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Pe,fe.width,fe.height,fe.depth),O)if(g.layerUpdates.size>0){const J=Lf(fe.width,fe.height,g.format,g.type);for(const le of g.layerUpdates){const Te=fe.data.subarray(le*J/fe.data.BYTES_PER_ELEMENT,(le+1)*J/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,be,Oe,Te)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,be,Oe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,fe.width,fe.height,fe.depth,0,be,Oe,fe.data);else if(g.isData3DTexture)Ge?(dt&&t.texStorage3D(n.TEXTURE_3D,Ee,Pe,fe.width,fe.height,fe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,be,Oe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,fe.width,fe.height,fe.depth,0,be,Oe,fe.data);else if(g.isFramebufferTexture){if(dt)if(Ge)t.texStorage2D(n.TEXTURE_2D,Ee,Pe,fe.width,fe.height);else{let J=fe.width,le=fe.height;for(let Te=0;Te<Ee;Te++)t.texImage2D(n.TEXTURE_2D,Te,Pe,J,le,0,be,Oe,null),J>>=1,le>>=1}}else if($e.length>0){if(Ge&&dt){const J=V($e[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Pe,J.width,J.height)}for(let J=0,le=$e.length;J<le;J++)xe=$e[J],Ge?O&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,be,Oe,xe):t.texImage2D(n.TEXTURE_2D,J,Pe,be,Oe,xe);g.generateMipmaps=!1}else if(Ge){if(dt){const J=V(fe);t.texStorage2D(n.TEXTURE_2D,Ee,Pe,J.width,J.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Oe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Pe,be,Oe,fe);m(g)&&d(H),pe.__version=W.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function me(S,g,D){if(g.image.length!==6)return;const H=Ye(S,g),K=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+D);const W=i.get(K);if(K.version!==W.__version||H===!0){t.activeTexture(n.TEXTURE0+D);const pe=Qe.getPrimaries(Qe.workingColorSpace),de=g.colorSpace===di?null:Qe.getPrimaries(g.colorSpace),Ce=g.colorSpace===di||pe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const De=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!De&&!fe?be[le]=v(g.image[le],!0,r.maxCubemapSize):be[le]=fe?g.image[le].image:g.image[le],be[le]=ce(g,be[le]);const Oe=be[0],Pe=s.convert(g.format,g.colorSpace),xe=s.convert(g.type),$e=w(g.internalFormat,Pe,xe,g.colorSpace),Ge=g.isVideoTexture!==!0,dt=W.__version===void 0||H===!0,O=K.dataReady;let Ee=U(g,Oe);Le(n.TEXTURE_CUBE_MAP,g);let J;if(De){Ge&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,$e,Oe.width,Oe.height);for(let le=0;le<6;le++){J=be[le].mipmaps;for(let Te=0;Te<J.length;Te++){const ye=J[Te];g.format!==Mn?Pe!==null?Ge?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,0,0,ye.width,ye.height,Pe,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,$e,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,0,0,ye.width,ye.height,Pe,xe,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,$e,ye.width,ye.height,0,Pe,xe,ye.data)}}}else{if(J=g.mipmaps,Ge&&dt){J.length>0&&Ee++;const le=V(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,$e,le.width,le.height)}for(let le=0;le<6;le++)if(fe){Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,Pe,xe,be[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,be[le].width,be[le].height,0,Pe,xe,be[le].data);for(let Te=0;Te<J.length;Te++){const He=J[Te].image[le].image;Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,0,0,He.width,He.height,Pe,xe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,$e,He.width,He.height,0,Pe,xe,He.data)}}else{Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe,xe,be[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,Pe,xe,be[le]);for(let Te=0;Te<J.length;Te++){const ye=J[Te];Ge?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,0,0,Pe,xe,ye.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,$e,Pe,xe,ye.image[le])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),W.__version=K.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function _e(S,g,D,H,K,W){const pe=s.convert(D.format,D.colorSpace),de=s.convert(D.type),Ce=w(D.internalFormat,pe,de,D.colorSpace),De=i.get(g),fe=i.get(D);if(fe.__renderTarget=g,!De.__hasExternalTextures){const be=Math.max(1,g.width>>W),Oe=Math.max(1,g.height>>W);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,W,Ce,be,Oe,g.depth,0,pe,de,null):t.texImage2D(K,W,Ce,be,Oe,0,pe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ne(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,K,fe.__webglTexture,0,te(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,K,fe.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(S,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const H=g.depthTexture,K=H&&H.isDepthTexture?H.type:null,W=y(g.stencilBuffer,K),pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=te(g);ne(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,W,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,W,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,S)}else{const H=g.textures;for(let K=0;K<H.length;K++){const W=H[K],pe=s.convert(W.format,W.colorSpace),de=s.convert(W.type),Ce=w(W.internalFormat,pe,de,W.colorSpace),De=te(g);D&&ne(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ce,g.width,g.height):ne(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Ce,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(g.depthTexture);H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),se(g.depthTexture,0);const K=H.__webglTexture,W=te(g);if(g.depthTexture.format===Ms)ne(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(g.depthTexture.format===Ss)ne(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ae(S){const g=i.get(S),D=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const H=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=H}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");const H=S.texture.mipmaps;H&&H.length>0?re(g.__webglFramebuffer[0],S):re(g.__webglFramebuffer,S)}else if(D){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=n.createRenderbuffer(),F(g.__webglDepthbuffer[H],S,!1);else{const K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}else{const H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),F(g.__webglDepthbuffer,S,!1);else{const K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(S,g,D){const H=i.get(S);g!==void 0&&_e(H.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&ae(S)}function T(S){const g=S.texture,D=i.get(S),H=i.get(g);S.addEventListener("dispose",C);const K=S.textures,W=S.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,o.memory.textures++),W){D.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[de]=[];for(let Ce=0;Ce<g.mipmaps.length;Ce++)D.__webglFramebuffer[de][Ce]=n.createFramebuffer()}else D.__webglFramebuffer[de]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)D.__webglFramebuffer[de]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(pe)for(let de=0,Ce=K.length;de<Ce;de++){const De=i.get(K[de]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&ne(S)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let de=0;de<K.length;de++){const Ce=K[de];D.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[de]);const De=s.convert(Ce.format,Ce.colorSpace),fe=s.convert(Ce.type),be=w(Ce.internalFormat,De,fe,Ce.colorSpace,S.isXRRenderTarget===!0),Oe=te(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,be,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,D.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),F(D.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Le(n.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)_e(D.__webglFramebuffer[de][Ce],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce);else _e(D.__webglFramebuffer[de],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let de=0,Ce=K.length;de<Ce;de++){const De=K[de],fe=i.get(De);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Le(n.TEXTURE_2D,De),_e(D.__webglFramebuffer,S,De,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(De)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(de=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,H.__webglTexture),Le(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)_e(D.__webglFramebuffer[Ce],S,g,n.COLOR_ATTACHMENT0,de,Ce);else _e(D.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,de,0);m(g)&&d(de),t.unbindTexture()}S.depthBuffer&&ae(S)}function R(S){const g=S.textures;for(let D=0,H=g.length;D<H;D++){const K=g[D];if(m(K)){const W=A(S),pe=i.get(K).__webglTexture;t.bindTexture(W,pe),d(W),t.unbindTexture()}}}const I=[],x=[];function Z(S){if(S.samples>0){if(ne(S)===!1){const g=S.textures,D=S.width,H=S.height;let K=n.COLOR_BUFFER_BIT;const W=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(S),de=g.length>1;if(de)for(let De=0;De<g.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const Ce=S.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let De=0;De<g.length;De++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const fe=i.get(g[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,D,H,0,0,D,H,K,n.NEAREST),l===!0&&(I.length=0,x.length=0,I.push(n.COLOR_ATTACHMENT0+De),S.depthBuffer&&S.resolveDepthBuffer===!1&&(I.push(W),x.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let De=0;De<g.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const fe=i.get(g[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function te(S){return Math.min(r.maxSamples,S.samples)}function ne(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function j(S){const g=o.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function ce(S,g){const D=S.colorSpace,H=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||D!==Nr&&D!==di&&(Qe.getTransfer(D)===at?(H!==Mn||K!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),g}function V(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=Q,this.setTexture2D=se,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=z,this.rebindTextures=ue,this.setupRenderTarget=T,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ne}function iy(n,e){function t(i,r=di){let s;const o=Qe.getTransfer(r);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Bc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===zc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Id)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dd)return n.BYTE;if(i===Ld)return n.SHORT;if(i===vs)return n.UNSIGNED_SHORT;if(i===kc)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===bs)return n.HALF_FLOAT;if(i===Ud)return n.ALPHA;if(i===Nd)return n.RGB;if(i===Mn)return n.RGBA;if(i===Ms)return n.DEPTH_COMPONENT;if(i===Ss)return n.DEPTH_STENCIL;if(i===Fd)return n.RED;if(i===Hc)return n.RED_INTEGER;if(i===Od)return n.RG;if(i===Vc)return n.RG_INTEGER;if(i===Gc)return n.RGBA_INTEGER;if(i===xo||i===Mo||i===So||i===Eo)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===kl||i===Bl||i===zl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Vl||i===Gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hl||i===Vl)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wl||i===Xl||i===$l||i===ql||i===Yl||i===jl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ql)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===rc||i===sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yo)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kd||i===oc||i===ac||i===lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Qn({vertexShader:ry,fragmentShader:sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ay extends Hr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const v=new oy,m=t.getContextAttributes();let d=null,A=null;const w=[],y=[],U=new ht;let L=null;const C=new un;C.viewport=new St;const N=new un;N.viewport=new St;const b=[C,N],E=new Rx;let P=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=w[ie];return me===void 0&&(me=new ja,w[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=w[ie];return me===void 0&&(me=new ja,w[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=w[ie];return me===void 0&&(me=new ja,w[ie]=me),me.getHandSpace()};function G(ie){const me=y.indexOf(ie.inputSource);if(me===-1)return;const _e=w[me];_e!==void 0&&(_e.update(ie.inputSource,ie.frame,c||o),_e.dispatchEvent({type:ie.type,data:ie.inputSource}))}function oe(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",se);for(let ie=0;ie<w.length;ie++){const me=y[ie];me!==null&&(y[ie]=null,w[ie].disconnect(me))}P=null,Q=null,v.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,A=null,Ye.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,F=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Ss:Ms,F=m.stencil?xs:Yi);const ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new ji(h.textureWidth,h.textureHeight,{format:Mn,type:Zn,depthTexture:new Jd(h.textureWidth,h.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ji(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function se(ie){for(let me=0;me<ie.removed.length;me++){const _e=ie.removed[me],F=y.indexOf(_e);F>=0&&(y[F]=null,w[F].disconnect(_e))}for(let me=0;me<ie.added.length;me++){const _e=ie.added[me];let F=y.indexOf(_e);if(F===-1){for(let ae=0;ae<w.length;ae++)if(ae>=y.length){y.push(_e),F=ae;break}else if(y[ae]===null){y[ae]=_e,F=ae;break}if(F===-1)break}const re=w[F];re&&re.connect(_e)}}const $=new Y,ee=new Y;function z(ie,me,_e){$.setFromMatrixPosition(me.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const F=$.distanceTo(ee),re=me.projectionMatrix.elements,ae=_e.projectionMatrix.elements,ue=re[14]/(re[10]-1),T=re[14]/(re[10]+1),R=(re[9]+1)/re[5],I=(re[9]-1)/re[5],x=(re[8]-1)/re[0],Z=(ae[8]+1)/ae[0],te=ue*x,ne=ue*Z,j=F/(-x+Z),ce=j*-x;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ce),ie.translateZ(j),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),re[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const V=ue+j,S=T+j,g=te-ce,D=ne+(F-ce),H=R*T/S*V,K=I*T/S*V;ie.projectionMatrix.makePerspective(g,D,H,K,V,S),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ge(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,_e=ie.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),E.near=N.near=C.near=me,E.far=N.far=C.far=_e,(P!==E.near||Q!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),P=E.near,Q=E.far),C.layers.mask=ie.layers.mask|2,N.layers.mask=ie.layers.mask|4,E.layers.mask=C.layers.mask|N.layers.mask;const F=ie.parent,re=E.cameras;ge(E,F);for(let ae=0;ae<re.length;ae++)ge(re[ae],F);re.length===2?z(E,C,N):E.projectionMatrix.copy(C.projectionMatrix),Me(ie,E,F)};function Me(ie,me,_e){_e===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(_e.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=cc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(E)};let we=null;function Le(ie,me){if(u=me.getViewerPose(c||o),_=me,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let F=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,F=!0);for(let ue=0;ue<_e.length;ue++){const T=_e[ue];let R=null;if(p!==null)R=p.getViewport(T);else{const x=f.getViewSubImage(h,T);R=x.viewport,ue===0&&(e.setRenderTargetTextures(A,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(A))}let I=b[ue];I===void 0&&(I=new un,I.layers.enable(ue),I.viewport=new St,b[ue]=I),I.matrix.fromArray(T.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(T.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(R.x,R.y,R.width,R.height),ue===0&&(E.matrix.copy(I.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),F===!0&&E.cameras.push(I)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ue=f.getDepthInformation(_e[0]);ue&&ue.isValid&&ue.texture&&v.init(e,ue,r.renderState)}}for(let _e=0;_e<w.length;_e++){const F=y[_e],re=w[_e];F!==null&&re!==void 0&&re.update(F,me,c||o)}we&&we(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const Ye=new Qd;Ye.setAnimationLoop(Le),this.setAnimationLoop=function(ie){we=ie},this.dispose=function(){}}}const Ii=new Jn,ly=new yt;function cy(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Yd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,w,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,w):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=e.get(d),w=A.envMap,y=A.envMapRotation;w&&(m.envMap.value=w,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(ly.makeRotationFromEuler(Ii)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=w*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uy(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,w){const y=w.program;i.uniformBlockBinding(A,y)}function c(A,w){let y=r[A.id];y===void 0&&(_(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",m));const U=w.program;i.updateUBOMapping(A,U);const L=e.render.frame;s[A.id]!==L&&(h(A),s[A.id]=L)}function u(A){const w=f();A.__bindingPointIndex=w;const y=n.createBuffer(),U=A.__size,L=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const w=r[A.id],y=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let L=0,C=y.length;L<C;L++){const N=Array.isArray(y[L])?y[L]:[y[L]];for(let b=0,E=N.length;b<E;b++){const P=N[b];if(p(P,L,b,U)===!0){const Q=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let oe=0;for(let se=0;se<G.length;se++){const $=G[se],ee=v($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,Q+oe,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,oe),oe+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,w,y,U){const L=A.value,C=w+"_"+y;if(U[C]===void 0)return typeof L=="number"||typeof L=="boolean"?U[C]=L:U[C]=L.clone(),!0;{const N=U[C];if(typeof L=="number"||typeof L=="boolean"){if(N!==L)return U[C]=L,!0}else if(N.equals(L)===!1)return N.copy(L),!0}return!1}function _(A){const w=A.uniforms;let y=0;const U=16;for(let C=0,N=w.length;C<N;C++){const b=Array.isArray(w[C])?w[C]:[w[C]];for(let E=0,P=b.length;E<P;E++){const Q=b[E],G=Array.isArray(Q.value)?Q.value:[Q.value];for(let oe=0,se=G.length;oe<se;oe++){const $=G[oe],ee=v($),z=y%U,ge=z%ee.boundary,Me=z+ge;y+=ge,Me!==0&&U-Me<ee.storage&&(y+=U-Me),Q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=y,y+=ee.storage}}}const L=y%U;return L>0&&(y+=U-L),A.__size=y,A.__cache={},this}function v(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function m(A){const w=A.target;w.removeEventListener("dispose",m);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function d(){for(const A in r)n.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class fy{constructor(e={}){const{canvas:t=$v(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const A=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=cn;let L=0,C=0,N=null,b=-1,E=null;const P=new St,Q=new St;let G=null;const oe=new nt(0);let se=0,$=t.width,ee=t.height,z=1,ge=null,Me=null;const we=new St(0,0,$,ee),Le=new St(0,0,$,ee);let Ye=!1;const ie=new Zd;let me=!1,_e=!1;const F=new yt,re=new yt,ae=new Y,ue=new St,T={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function I(){return N===null?z:1}let x=i;function Z(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",ye,!1),x===null){const k="webgl2";if(x=Z(k,M),x===null)throw Z(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let te,ne,j,ce,V,S,g,D,H,K,W,pe,de,Ce,De,fe,be,Oe,Pe,xe,$e,Ge,dt,O;function Ee(){te=new SS(x),te.init(),Ge=new iy(x,te),ne=new pS(x,te,e,Ge),j=new ty(x,te),ne.reverseDepthBuffer&&h&&j.buffers.depth.setReversed(!0),ce=new bS(x),V=new VE,S=new ny(x,te,j,V,ne,Ge,ce),g=new gS(y),D=new MS(y),H=new Px(x),dt=new hS(x,H),K=new ES(x,H,ce,dt),W=new AS(x,K,H,ce),Pe=new TS(x,ne,S),fe=new mS(V),pe=new HE(y,g,D,te,ne,dt,fe),de=new cy(y,V),Ce=new WE,De=new KE(te),Oe=new fS(y,g,D,j,W,p,l),be=new QE(y,W,ne),O=new uy(x,ce,ne,j),xe=new dS(x,te,ce),$e=new yS(x,te,ce),ce.programs=pe.programs,y.capabilities=ne,y.extensions=te,y.properties=V,y.renderLists=Ce,y.shadowMap=be,y.state=j,y.info=ce}Ee();const J=new ay(y,x);this.xr=J,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize($,ee,!1))},this.getSize=function(M){return M.set($,ee)},this.setSize=function(M,k,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,ee=k,t.width=Math.floor(M*z),t.height=Math.floor(k*z),X===!0&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set($*z,ee*z).floor()},this.setDrawingBufferSize=function(M,k,X){$=M,ee=k,z=X,t.width=Math.floor(M*X),t.height=Math.floor(k*X),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,k,X,q){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,k,X,q),j.viewport(P.copy(we).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Le)},this.setScissor=function(M,k,X,q){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,k,X,q),j.scissor(Q.copy(Le).multiplyScalar(z).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(M){j.setScissorTest(Ye=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){Me=M},this.getClearColor=function(M){return M.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,X=!0){let q=0;if(M){let B=!1;if(N!==null){const he=N.texture.format;B=he===Gc||he===Vc||he===Hc}if(B){const he=N.texture.type,Se=he===Zn||he===Yi||he===vs||he===xs||he===Bc||he===zc,Ae=Oe.getClearColor(),Re=Oe.getClearAlpha(),Be=Ae.r,ke=Ae.g,Ie=Ae.b;Se?(_[0]=Be,_[1]=ke,_[2]=Ie,_[3]=Re,x.clearBufferuiv(x.COLOR,0,_)):(v[0]=Be,v[1]=ke,v[2]=Ie,v[3]=Re,x.clearBufferiv(x.COLOR,0,v))}else q|=x.COLOR_BUFFER_BIT}k&&(q|=x.DEPTH_BUFFER_BIT),X&&(q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Oe.dispose(),Ce.dispose(),De.dispose(),V.dispose(),g.dispose(),D.dispose(),W.dispose(),dt.dispose(),O.dispose(),pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",eu),J.removeEventListener("sessionend",tu),bi.stop()};function le(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const M=ce.autoReset,k=be.enabled,X=be.autoUpdate,q=be.needsUpdate,B=be.type;Ee(),ce.autoReset=M,be.enabled=k,be.autoUpdate=X,be.needsUpdate=q,be.type=B}function ye(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function He(M){const k=M.target;k.removeEventListener("dispose",He),vt(k)}function vt(M){Nt(M),V.remove(M)}function Nt(M){const k=V.get(M).programs;k!==void 0&&(k.forEach(function(X){pe.releaseProgram(X)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,X,q,B,he){k===null&&(k=T);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Ae=xp(M,k,X,q,B);j.setMaterial(q,Se);let Re=X.index,Be=1;if(q.wireframe===!0){if(Re=K.getWireframeAttribute(X),Re===void 0)return;Be=2}const ke=X.drawRange,Ie=X.attributes.position;let je=ke.start*Be,et=(ke.start+ke.count)*Be;he!==null&&(je=Math.max(je,he.start*Be),et=Math.min(et,(he.start+he.count)*Be)),Re!==null?(je=Math.max(je,0),et=Math.min(et,Re.count)):Ie!=null&&(je=Math.max(je,0),et=Math.min(et,Ie.count));const bt=et-je;if(bt<0||bt===1/0)return;dt.setup(B,q,Ae,X,Re);let xt,Je=xe;if(Re!==null&&(xt=H.get(Re),Je=$e,Je.setIndex(xt)),B.isMesh)q.wireframe===!0?(j.setLineWidth(q.wireframeLinewidth*I()),Je.setMode(x.LINES)):Je.setMode(x.TRIANGLES);else if(B.isLine){let Ne=q.linewidth;Ne===void 0&&(Ne=1),j.setLineWidth(Ne*I()),B.isLineSegments?Je.setMode(x.LINES):B.isLineLoop?Je.setMode(x.LINE_LOOP):Je.setMode(x.LINE_STRIP)}else B.isPoints?Je.setMode(x.POINTS):B.isSprite&&Je.setMode(x.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)bo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ne=B._multiDrawStarts,Ut=B._multiDrawCounts,tt=B._multiDrawCount,dn=Re?H.get(Re).bytesPerElement:1,Qi=V.get(q).currentProgram.getUniforms();for(let Zt=0;Zt<tt;Zt++)Qi.setValue(x,"_gl_DrawID",Zt),Je.render(Ne[Zt]/dn,Ut[Zt])}else if(B.isInstancedMesh)Je.renderInstances(je,bt,B.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ut=Math.min(X.instanceCount,Ne);Je.renderInstances(je,bt,Ut)}else Je.render(je,bt)};function rt(M,k,X){M.transparent===!0&&M.side===Wn&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,Is(M,k,X),M.side=Ei,M.needsUpdate=!0,Is(M,k,X),M.side=Wn):Is(M,k,X)}this.compile=function(M,k,X=null){X===null&&(X=M),d=De.get(X),d.init(k),w.push(d),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),M!==X&&M.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const q=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const he=B.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const Ae=he[Se];rt(Ae,X,B),q.add(Ae)}else rt(he,X,B),q.add(he)}),d=w.pop(),q},this.compileAsync=function(M,k,X=null){const q=this.compile(M,k,X);return new Promise(B=>{function he(){if(q.forEach(function(Se){V.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){B(M);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let hn=null;function Nn(M){hn&&hn(M)}function eu(){bi.stop()}function tu(){bi.start()}const bi=new Qd;bi.setAnimationLoop(Nn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(M){hn=M,J.setAnimationLoop(M),M===null?bi.stop():bi.start()},J.addEventListener("sessionstart",eu),J.addEventListener("sessionend",tu),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,k,N),d=De.get(M,w.length),d.init(k),w.push(d),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ie.setFromProjectionMatrix(re),_e=this.localClippingEnabled,me=fe.init(this.clippingPlanes,_e),m=Ce.get(M,A.length),m.init(),A.push(m),J.enabled===!0&&J.isPresenting===!0){const he=y.xr.getDepthSensingMesh();he!==null&&_a(he,k,-1/0,y.sortObjects)}_a(M,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ge,Me),R=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,R&&Oe.addToRenderList(m,M),this.info.render.frame++,me===!0&&fe.beginShadows();const X=d.state.shadowsArray;be.render(X,M,k),me===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(d.setupLights(),k.isArrayCamera){const he=k.cameras;if(B.length>0)for(let Se=0,Ae=he.length;Se<Ae;Se++){const Re=he[Se];iu(q,B,M,Re)}R&&Oe.render(M);for(let Se=0,Ae=he.length;Se<Ae;Se++){const Re=he[Se];nu(m,M,Re,Re.viewport)}}else B.length>0&&iu(q,B,M,k),R&&Oe.render(M),nu(m,M,k);N!==null&&C===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(y,M,k),dt.resetDefaultState(),b=-1,E=null,w.pop(),w.length>0?(d=w[w.length-1],me===!0&&fe.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function _a(M,k,X,q){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ie.intersectsSprite(M)){q&&ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const Se=W.update(M),Ae=M.material;Ae.visible&&m.push(M,Se,Ae,X,ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ie.intersectsObject(M))){const Se=W.update(M),Ae=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ue.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ue.copy(Se.boundingSphere.center)),ue.applyMatrix4(M.matrixWorld).applyMatrix4(re)),Array.isArray(Ae)){const Re=Se.groups;for(let Be=0,ke=Re.length;Be<ke;Be++){const Ie=Re[Be],je=Ae[Ie.materialIndex];je&&je.visible&&m.push(M,Se,je,X,ue.z,Ie)}}else Ae.visible&&m.push(M,Se,Ae,X,ue.z,null)}}const he=M.children;for(let Se=0,Ae=he.length;Se<Ae;Se++)_a(he[Se],k,X,q)}function nu(M,k,X,q){const B=M.opaque,he=M.transmissive,Se=M.transparent;d.setupLightsView(X),me===!0&&fe.setGlobalState(y.clippingPlanes,X),q&&j.viewport(P.copy(q)),B.length>0&&Ls(B,k,X),he.length>0&&Ls(he,k,X),Se.length>0&&Ls(Se,k,X),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function iu(M,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new ji(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?bs:Zn,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const he=d.state.transmissionRenderTarget[q.id],Se=q.viewport||P;he.setSize(Se.z*y.transmissionResolutionScale,Se.w*y.transmissionResolutionScale);const Ae=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(oe),se=y.getClearAlpha(),se<1&&y.setClearColor(16777215,.5),y.clear(),R&&Oe.render(X);const Re=y.toneMapping;y.toneMapping=vi;const Be=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),me===!0&&fe.setGlobalState(y.clippingPlanes,q),Ls(M,X,q),S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he),te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ie=0,je=k.length;Ie<je;Ie++){const et=k[Ie],bt=et.object,xt=et.geometry,Je=et.material,Ne=et.group;if(Je.side===Wn&&bt.layers.test(q.layers)){const Ut=Je.side;Je.side=qt,Je.needsUpdate=!0,ru(bt,X,q,xt,Je,Ne),Je.side=Ut,Je.needsUpdate=!0,ke=!0}}ke===!0&&(S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he))}y.setRenderTarget(Ae),y.setClearColor(oe,se),Be!==void 0&&(q.viewport=Be),y.toneMapping=Re}function Ls(M,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,he=M.length;B<he;B++){const Se=M[B],Ae=Se.object,Re=Se.geometry,Be=Se.group;let ke=Se.material;ke.allowOverride===!0&&q!==null&&(ke=q),Ae.layers.test(X.layers)&&ru(Ae,k,X,Re,ke,Be)}}function ru(M,k,X,q,B,he){M.onBeforeRender(y,k,X,q,B,he),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(y,k,X,q,M,he),B.transparent===!0&&B.side===Wn&&B.forceSinglePass===!1?(B.side=qt,B.needsUpdate=!0,y.renderBufferDirect(X,k,q,B,M,he),B.side=Ei,B.needsUpdate=!0,y.renderBufferDirect(X,k,q,B,M,he),B.side=Wn):y.renderBufferDirect(X,k,q,B,M,he),M.onAfterRender(y,k,X,q,B,he)}function Is(M,k,X){k.isScene!==!0&&(k=T);const q=V.get(M),B=d.state.lights,he=d.state.shadowsArray,Se=B.state.version,Ae=pe.getParameters(M,B.state,he,k,X),Re=pe.getProgramCacheKey(Ae);let Be=q.programs;q.environment=M.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(M.isMeshStandardMaterial?D:g).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",He),Be=new Map,q.programs=Be);let ke=Be.get(Re);if(ke!==void 0){if(q.currentProgram===ke&&q.lightsStateVersion===Se)return ou(M,Ae),ke}else Ae.uniforms=pe.getUniforms(M),M.onBeforeCompile(Ae,y),ke=pe.acquireProgram(Ae,Re),Be.set(Re,ke),q.uniforms=Ae.uniforms;const Ie=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=fe.uniform),ou(M,Ae),q.needsLights=Sp(M),q.lightsStateVersion=Se,q.needsLights&&(Ie.ambientLightColor.value=B.state.ambient,Ie.lightProbe.value=B.state.probe,Ie.directionalLights.value=B.state.directional,Ie.directionalLightShadows.value=B.state.directionalShadow,Ie.spotLights.value=B.state.spot,Ie.spotLightShadows.value=B.state.spotShadow,Ie.rectAreaLights.value=B.state.rectArea,Ie.ltc_1.value=B.state.rectAreaLTC1,Ie.ltc_2.value=B.state.rectAreaLTC2,Ie.pointLights.value=B.state.point,Ie.pointLightShadows.value=B.state.pointShadow,Ie.hemisphereLights.value=B.state.hemi,Ie.directionalShadowMap.value=B.state.directionalShadowMap,Ie.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ie.spotShadowMap.value=B.state.spotShadowMap,Ie.spotLightMatrix.value=B.state.spotLightMatrix,Ie.spotLightMap.value=B.state.spotLightMap,Ie.pointShadowMap.value=B.state.pointShadowMap,Ie.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=ke,q.uniformsList=null,ke}function su(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=To.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function ou(M,k){const X=V.get(M);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function xp(M,k,X,q,B){k.isScene!==!0&&(k=T),S.resetTextureUnits();const he=k.fog,Se=q.isMeshStandardMaterial?k.environment:null,Ae=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Nr,Re=(q.isMeshStandardMaterial?D:g).get(q.envMap||Se),Be=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ke=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!X.morphAttributes.position,je=!!X.morphAttributes.normal,et=!!X.morphAttributes.color;let bt=vi;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(bt=y.toneMapping);const xt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Je=xt!==void 0?xt.length:0,Ne=V.get(q),Ut=d.state.lights;if(me===!0&&(_e===!0||M!==E)){const zt=M===E&&q.id===b;fe.setState(q,M,zt)}let tt=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ut.state.version||Ne.outputColorSpace!==Ae||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==Re||q.fog===!0&&Ne.fog!==he||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==fe.numPlanes||Ne.numIntersection!==fe.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ke||Ne.morphTargets!==Ie||Ne.morphNormals!==je||Ne.morphColors!==et||Ne.toneMapping!==bt||Ne.morphTargetsCount!==Je)&&(tt=!0):(tt=!0,Ne.__version=q.version);let dn=Ne.currentProgram;tt===!0&&(dn=Is(q,k,B));let Qi=!1,Zt=!1,Gr=!1;const gt=dn.getUniforms(),on=Ne.uniforms;if(j.useProgram(dn.program)&&(Qi=!0,Zt=!0,Gr=!0),q.id!==b&&(b=q.id,Zt=!0),Qi||E!==M){j.buffers.depth.getReversed()?(F.copy(M.projectionMatrix),Yv(F),jv(F),gt.setValue(x,"projectionMatrix",F)):gt.setValue(x,"projectionMatrix",M.projectionMatrix),gt.setValue(x,"viewMatrix",M.matrixWorldInverse);const Wt=gt.map.cameraPosition;Wt!==void 0&&Wt.setValue(x,ae.setFromMatrixPosition(M.matrixWorld)),ne.logarithmicDepthBuffer&&gt.setValue(x,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&gt.setValue(x,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Zt=!0,Gr=!0)}if(B.isSkinnedMesh){gt.setOptional(x,B,"bindMatrix"),gt.setOptional(x,B,"bindMatrixInverse");const zt=B.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),gt.setValue(x,"boneTexture",zt.boneTexture,S))}B.isBatchedMesh&&(gt.setOptional(x,B,"batchingTexture"),gt.setValue(x,"batchingTexture",B._matricesTexture,S),gt.setOptional(x,B,"batchingIdTexture"),gt.setValue(x,"batchingIdTexture",B._indirectTexture,S),gt.setOptional(x,B,"batchingColorTexture"),B._colorsTexture!==null&&gt.setValue(x,"batchingColorTexture",B._colorsTexture,S));const an=X.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Pe.update(B,X,dn),(Zt||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,gt.setValue(x,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(on.envMap.value=Re,on.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(on.envMapIntensity.value=k.environmentIntensity),Zt&&(gt.setValue(x,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Mp(on,Gr),he&&q.fog===!0&&de.refreshFogUniforms(on,he),de.refreshMaterialUniforms(on,q,z,ee,d.state.transmissionRenderTarget[M.id]),To.upload(x,su(Ne),on,S)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(To.upload(x,su(Ne),on,S),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&gt.setValue(x,"center",B.center),gt.setValue(x,"modelViewMatrix",B.modelViewMatrix),gt.setValue(x,"normalMatrix",B.normalMatrix),gt.setValue(x,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const zt=q.uniformsGroups;for(let Wt=0,va=zt.length;Wt<va;Wt++){const Ti=zt[Wt];O.update(Ti,dn),O.bind(Ti,dn)}}return dn}function Mp(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Sp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,k,X){const q=V.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=k,V.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){const X=V.get(M);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const Ep=x.createFramebuffer();this.setRenderTarget=function(M,k=0,X=0){N=M,L=k,C=X;let q=!0,B=null,he=!1,Se=!1;if(M){const Re=V.get(M);if(Re.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(x.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)S.setupRenderTarget(M);else if(Re.__hasExternalTextures)S.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ie=M.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&V.has(Ie)&&(M.width!==Ie.image.width||M.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Se=!0);const ke=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?B=ke[k][X]:B=ke[k],he=!0):M.samples>0&&S.useMultisampledRTT(M)===!1?B=V.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[X]:B=ke,P.copy(M.viewport),Q.copy(M.scissor),G=M.scissorTest}else P.copy(we).multiplyScalar(z).floor(),Q.copy(Le).multiplyScalar(z).floor(),G=Ye;if(X!==0&&(B=Ep),j.bindFramebuffer(x.FRAMEBUFFER,B)&&q&&j.drawBuffers(M,B),j.viewport(P),j.scissor(Q),j.setScissorTest(G),he){const Re=V.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,X)}else if(Se){const Re=V.get(M.texture),Be=k;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Re.__webglTexture,X,Be)}else if(M!==null&&X!==0){const Re=V.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Re.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(M,k,X,q,B,he,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae){j.bindFramebuffer(x.FRAMEBUFFER,Ae);try{const Re=M.texture,Be=Re.format,ke=Re.type;if(!ne.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-q&&X>=0&&X<=M.height-B&&x.readPixels(k,X,q,B,Ge.convert(Be),Ge.convert(ke),he)}finally{const Re=N!==null?V.get(N).__webglFramebuffer:null;j.bindFramebuffer(x.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,k,X,q,B,he,Se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Ae=Ae[Se]),Ae)if(k>=0&&k<=M.width-q&&X>=0&&X<=M.height-B){j.bindFramebuffer(x.FRAMEBUFFER,Ae);const Re=M.texture,Be=Re.format,ke=Re.type;if(!ne.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ie),x.bufferData(x.PIXEL_PACK_BUFFER,he.byteLength,x.STREAM_READ),x.readPixels(k,X,q,B,Ge.convert(Be),Ge.convert(ke),0);const je=N!==null?V.get(N).__webglFramebuffer:null;j.bindFramebuffer(x.FRAMEBUFFER,je);const et=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await qv(x,et,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ie),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,he),x.deleteBuffer(Ie),x.deleteSync(et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,X=0){const q=Math.pow(2,-X),B=Math.floor(M.image.width*q),he=Math.floor(M.image.height*q),Se=k!==null?k.x:0,Ae=k!==null?k.y:0;S.setTexture2D(M,0),x.copyTexSubImage2D(x.TEXTURE_2D,X,0,0,Se,Ae,B,he),j.unbindTexture()};const yp=x.createFramebuffer(),bp=x.createFramebuffer();this.copyTextureToTexture=function(M,k,X=null,q=null,B=0,he=null){he===null&&(B!==0?(bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=B,B=0):he=0);let Se,Ae,Re,Be,ke,Ie,je,et,bt;const xt=M.isCompressedTexture?M.mipmaps[he]:M.image;if(X!==null)Se=X.max.x-X.min.x,Ae=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,ke=X.min.y,Ie=X.isBox3?X.min.z:0;else{const an=Math.pow(2,-B);Se=Math.floor(xt.width*an),Ae=Math.floor(xt.height*an),M.isDataArrayTexture?Re=xt.depth:M.isData3DTexture?Re=Math.floor(xt.depth*an):Re=1,Be=0,ke=0,Ie=0}q!==null?(je=q.x,et=q.y,bt=q.z):(je=0,et=0,bt=0);const Je=Ge.convert(k.format),Ne=Ge.convert(k.type);let Ut;k.isData3DTexture?(S.setTexture3D(k,0),Ut=x.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(S.setTexture2DArray(k,0),Ut=x.TEXTURE_2D_ARRAY):(S.setTexture2D(k,0),Ut=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,k.unpackAlignment);const tt=x.getParameter(x.UNPACK_ROW_LENGTH),dn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),Qi=x.getParameter(x.UNPACK_SKIP_PIXELS),Zt=x.getParameter(x.UNPACK_SKIP_ROWS),Gr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,xt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,xt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Be),x.pixelStorei(x.UNPACK_SKIP_ROWS,ke),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ie);const gt=M.isDataArrayTexture||M.isData3DTexture,on=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const an=V.get(M),zt=V.get(k),Wt=V.get(an.__renderTarget),va=V.get(zt.__renderTarget);j.bindFramebuffer(x.READ_FRAMEBUFFER,Wt.__webglFramebuffer),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,va.__webglFramebuffer);for(let Ti=0;Ti<Re;Ti++)gt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,V.get(M).__webglTexture,B,Ie+Ti),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,V.get(k).__webglTexture,he,bt+Ti)),x.blitFramebuffer(Be,ke,Se,Ae,je,et,Se,Ae,x.DEPTH_BUFFER_BIT,x.NEAREST);j.bindFramebuffer(x.READ_FRAMEBUFFER,null),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||V.has(M)){const an=V.get(M),zt=V.get(k);j.bindFramebuffer(x.READ_FRAMEBUFFER,yp),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,bp);for(let Wt=0;Wt<Re;Wt++)gt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,an.__webglTexture,B,Ie+Wt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,an.__webglTexture,B),on?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,zt.__webglTexture,he,bt+Wt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,zt.__webglTexture,he),B!==0?x.blitFramebuffer(Be,ke,Se,Ae,je,et,Se,Ae,x.COLOR_BUFFER_BIT,x.NEAREST):on?x.copyTexSubImage3D(Ut,he,je,et,bt+Wt,Be,ke,Se,Ae):x.copyTexSubImage2D(Ut,he,je,et,Be,ke,Se,Ae);j.bindFramebuffer(x.READ_FRAMEBUFFER,null),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else on?M.isDataTexture||M.isData3DTexture?x.texSubImage3D(Ut,he,je,et,bt,Se,Ae,Re,Je,Ne,xt.data):k.isCompressedArrayTexture?x.compressedTexSubImage3D(Ut,he,je,et,bt,Se,Ae,Re,Je,xt.data):x.texSubImage3D(Ut,he,je,et,bt,Se,Ae,Re,Je,Ne,xt):M.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,he,je,et,Se,Ae,Je,Ne,xt.data):M.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,he,je,et,xt.width,xt.height,Je,xt.data):x.texSubImage2D(x.TEXTURE_2D,he,je,et,Se,Ae,Je,Ne,xt);x.pixelStorei(x.UNPACK_ROW_LENGTH,tt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,dn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Qi),x.pixelStorei(x.UNPACK_SKIP_ROWS,Zt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Gr),he===0&&k.generateMipmaps&&x.generateMipmap(Ut),j.unbindTexture()},this.copyTextureToTexture3D=function(M,k,X=null,q=null,B=0){return bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,X,q,B)},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&S.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),j.unbindTexture()},this.resetState=function(){L=0,C=0,N=null,j.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const hy=.6,dy=.3,py=.8,my=_t({__name:"IdleAnimation",setup(n){const e=Mt(null);let t,i,r,s,o;Un(()=>{var _;i=new Mx,i.background=new nt(1315860),r=new un(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.z=8,t=new fy({antialias:!0}),t.setSize(window.innerWidth,window.innerHeight),(_=e.value)==null||_.appendChild(t.domElement);const l=1e5,c=new Float32Array(l*3),u=6.8;for(let v=0;v<l;v++){const m=Math.acos(-1+2*v/l),d=Math.sqrt(l*Math.PI)*m;c[v*3]=u*Math.cos(d)*Math.sin(m),c[v*3+1]=u*Math.sin(d)*Math.sin(m),c[v*3+2]=u*Math.cos(m)}const f=new ti;f.setAttribute("position",new yn(c,3));const h=new Qn({uniforms:{time:{value:0},noiseScale:{value:hy},waveSpeed:{value:dy},waveWidth:{value:py}},vertexShader:`
      uniform float time;
      uniform float noiseScale;
      uniform float waveSpeed;
      uniform float waveWidth;
      
      varying float vOpacity;
      
      // Função de noise simplificada
      float mod289(float x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 mod289(vec4 x){return x - floor(x * (1.0 / 289.0)) * 289.0;}
      vec4 perm(vec4 x){return mod289(((x * 34.0) + 1.0) * x);}
      
      float noise(vec3 p){
          vec3 a = floor(p);
          vec3 d = p - a;
          d = d * d * (3.0 - 2.0 * d);

          vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
          vec4 k1 = perm(b.xyxy);
          vec4 k2 = perm(k1.xyxy + b.zzww);

          vec4 c = k2 + a.zzzz;
          vec4 k3 = perm(c);
          vec4 k4 = perm(c + 1.0);

          vec4 o1 = fract(k3 * (1.0 / 41.0));
          vec4 o2 = fract(k4 * (1.0 / 41.0));

          vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
          vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
          
          return o4.y * d.y + o4.x * (1.0 - d.y);
      }
      
      void main() {
          vec3 pos = position;
          
          // Direção da onda
          vec3 waveDir = normalize(vec3(0.0, 1.0, 0.5));
          
          // Valor de noise animado
          float n = noise(vec3(
              dot(pos, waveDir) * noiseScale + time * waveSpeed,
              pos.y * 0.3,
              pos.z * 0.3
          ));
          
          // Mapear o noise para onda progressiva
          float wave = smoothstep(0.4, 0.6, n);
          float distanceToWave = abs(dot(normalize(pos), waveDir) - wave);
          
          // Suavizar a transição
          vOpacity = 1.0 - smoothstep(0.0, waveWidth, distanceToWave);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = 1.0;
      }
    `,fragmentShader:`
      varying float vOpacity;
      
      void main() {
          gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity);
      }
    `,transparent:!0,depthWrite:!0,blending:yl});s=new bx(f,h),s.position.y=-3,i.add(s);const p=()=>{o=requestAnimationFrame(p),h.uniforms.time.value+=.02,s.rotation.y+=.001,s.rotation.x+=3e-4,t.render(i,r)};p(),window.addEventListener("resize",a)}),na(()=>{cancelAnimationFrame(o),window.removeEventListener("resize",a)});const a=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};return(l,c)=>(Xe(),ft("div",{ref_key:"canvasContainer",ref:e,class:"canvas-container"},null,512))}}),gy={class:"ball-container"},_y=_t({__name:"BallTrack",props:{x:{},y:{},size:{}},setup(n){oa(t=>({d4cb3e84:e.y,d4cb3e86:e.x,"781edd9c":e.size}));const e=n;return(t,i)=>(Xe(),ft("div",gy))}}),It=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},vy=It(_y,[["__scopeId","data-v-65a6daa7"]]);class xy{constructor(e,t){ot(this,"setAndReturn",e=>{const t=JSON.stringify(e);return localStorage.setItem(this.key,t),e});ot(this,"read",()=>{const e=localStorage.getItem(this.key);return e?JSON.parse(e):this.setAndReturn(this._default)});ot(this,"clear",()=>{localStorage.removeItem(this.key),this.setAndReturn(this._default)});this._default=e,this.key=t}}const Jr=new xy({dark:!0,swing:!0,trackBall:!0,opacity:64},"config"),ma=gd("estado global",()=>{const n=nn(Jr.read()),e=()=>{const s=nn({show:n.trackBall,size:"28px",x:"0px",y:"-50px"});return{status:s,metod:{trackBall:l=>{const c=s,u=parseFloat(c.size);c.x=`${l.clientX-u/2}px`,c.y=`${l.clientY-u/2}px`},show:l=>{s.show=l,n.trackBall=l,Jr.setAndReturn(n)}}}},t=()=>{const s=nn({dark:n.dark});return{status:s,metod:{darkMode:a=>{s.dark=a,n.dark=a,Jr.setAndReturn(n)}}}},i=()=>{const s=nn({swing:n.swing});return{status:s,metod:{swingMode:a=>{s.swing=a,n.swing=a,Jr.setAndReturn(n)}}}},r=()=>{const s=nn({opacity:n.opacity});return{status:s,metod:{setOpacity:a=>{s.opacity=a,n.opacity=a,Jr.setAndReturn(n)}}}};return{trackBall:e(),darkMode:t(),swing:i(),opacity:r()}}),My=_t({__name:"App",setup(n){oa(o=>({eb39beda:s.value}));const{trackBall:e,darkMode:t,opacity:i}=ma(),r=Bt(()=>t.status.dark),s=Bt(()=>i.status.opacity/100);return(o,a)=>(Xe(),ft("div",{class:Xn(["main",!r.value&&"light-mode"]),onMousemove:a[0]||(a[0]=(...l)=>ut(e).metod.trackBall&&ut(e).metod.trackBall(...l))},[ut(i).status.opacity>0?(Xe(),sn(my,{key:0,class:"idle"})):Io("",!0),lt(ut(ua)),ut(e).status.show?(Xe(),sn(vy,{key:1,x:ut(e).status.x,y:ut(e).status.y,size:ut(e).status.size,class:"ball-track"},null,8,["x","y","size"])):Io("",!0)],34))}}),Sy=_t({__name:"BoxBase",setup(n){oa(l=>({"30c09dd2":i.top,"0c52a885":i.left,"7e9f3508":i.width,"3b787225":i.height,"1b23182a":s.value,"1b231829":r.value}));const{swing:e}=ma(),t={desktop:{left:"60px",top:"68px",width:"calc(100dvw - 60px * 2)",height:"calc(100dvh - 68px * 2)"},mobile:{left:"10px",top:"28px",width:"calc(100dvw - 10px * 2)",height:"calc(100dvh - 28px * 2)"}},i=nn({...t.desktop}),r=Mt("0deg"),s=Mt("0deg"),o=()=>{window.innerWidth<768?Object.assign(i,t.mobile):Object.assign(i,t.desktop)},a=l=>{const c=window.innerHeight/2,u=window.innerWidth/2,f=l.clientX-u,h=l.clientY-c;r.value=`${f/-260}deg`,s.value=`${h/180}deg`};return Un(()=>{o(),window.addEventListener("resize",o)}),na(()=>{window.removeEventListener("resize",o)}),(l,c)=>(Xe(),ft("div",{class:Xn(["box-container",{swing:ut(e).status.swing}]),onMousemove:a},[Po(l.$slots,"default",{},void 0)],34))}}),Ey=It(Sy,[["__scopeId","data-v-fef381a5"]]),yy=_t({__name:"LinkBase",props:{toName:{},content:{}},setup(n){const e=n;return(t,i)=>{const r=Hh("RouterLink");return Xe(),sn(r,{class:"link",to:{name:e.toName}},{default:zr(()=>[od(rn(e.content),1)]),_:1},8,["to"])}}}),hc=It(yy,[["__scopeId","data-v-d73ca086"]]),by=n=>(Jo("data-v-dd4f1446"),n=n(),Qo(),n),Ty={class:"left"},Ay=by(()=>Ue("div",{class:"title"},[Ue("h1",null,"Vinicius Silva"),Ue("p",null,"Desevolvedor junior fullstack")],-1)),wy={class:"links"},Ry=_t({__name:"HomePage",setup(n){const e=[{name:"Projetos",link:"Meus projetos"},{name:"Contatos",link:"Estou por ai"},{name:"Configurações",link:"Configurações"}];return(t,i)=>(Xe(),sn(Ey,{class:"aboutme-container"},{default:zr(()=>[Ue("div",Ty,[Ay,Ue("nav",wy,[(Xe(),ft(Dt,null,wr(e,(r,s)=>lt(hc,{class:"link",key:s,"to-name":r.link,content:r.name},null,8,["to-name","content"])),64))])])]),_:1}))}}),Cy=It(Ry,[["__scopeId","data-v-dd4f1446"]]),Py={key:0,class:"desktop"},Dy={class:"left border-right"},Ly={class:"top"},Iy={class:"bottom border-top"},Uy={class:"list"},Ny={key:1,class:"mobile"},Fy={class:"top-mobile"},Oy={class:"mid-mobile"},ky={class:"bottom-mobile"},By=_t({__name:"AureaTemplate",props:{title:{default:"Empty"},links:{}},setup(n){oa(h=>({"00ade270":s.top,"1515fe18":s.left,"8c702b0e":s.width,"65666ad4":s.height,"187f60ce":a.value,"187f60d0":o.value}));const{swing:e}=ma(),t=n,i={desktop:{left:"60px",top:"68px",width:"calc(100dvw - 60px * 2)",height:"calc(100dvh - 68px * 2)"},mobile:{left:"10px",top:"28px",width:"calc(100dvw - 10px * 2)",height:"calc(100dvh - 28px * 2)"}},r=Mt(!1),s=nn({...i.desktop}),o=Mt("0deg"),a=Mt("0deg"),l=()=>{window.innerWidth<768?(r.value=!0,Object.assign(s,i.mobile)):(r.value=!1,Object.assign(s,i.desktop))},c=h=>{const p=window.innerHeight/2,_=window.innerWidth/2,v=h.clientX-_,m=h.clientY-p;o.value=`${v/-260}deg`,a.value=`${m/180}deg`};Un(()=>{l(),window.addEventListener("resize",l)}),na(()=>{window.removeEventListener("resize",l)});const u=Mt(""),f=Mt("");return Sr(()=>t.title,()=>{u.value="intro",f.value="intro-page",setTimeout(()=>{u.value="",f.value=""},500)}),Mt(!1),(h,p)=>(Xe(),ft("div",{class:Xn(["box-container","border-all",{swing:ut(e).status.swing}]),onMousemove:c},[r.value?(Xe(),ft("div",Ny,[Ue("div",Fy,[Ue("h1",{class:Xn(u.value)},rn(t.title),3)]),Ue("div",Oy,[Po(h.$slots,"default",{},void 0)]),Ue("nav",ky,[(Xe(!0),ft(Dt,null,wr(t.links,(_,v)=>(Xe(),sn(hc,{class:"link",key:v,"to-name":_.nameLink,content:_.name},null,8,["to-name","content"]))),128))])])):(Xe(),ft("div",Py,[Ue("div",Dy,[Ue("div",Ly,[Ue("h1",{class:Xn(u.value)},rn(t.title),3)]),Ue("div",Iy,[Ue("nav",Uy,[(Xe(!0),ft(Dt,null,wr(t.links,(_,v)=>(Xe(),sn(hc,{class:"link",key:v,"to-name":_.nameLink,content:_.name},null,8,["to-name","content"]))),128))])])]),Ue("div",{class:Xn(["right",{"intro-page":f.value}])},[Po(h.$slots,"default",{},void 0)],2)]))],34))}}),zy=It(By,[["__scopeId","data-v-9fbccafd"]]),Hy=_t({__name:"MainPage",setup(n){const e=Mt(""),t=[{name:"Home",nameLink:"home"},{name:"Projetos",nameLink:"Meus projetos"},{name:"Contatos",nameLink:"Estou por ai"},{name:"Configurações",nameLink:"Configurações"}];return Un(()=>{e.value=document.title}),Cc(()=>{e.value=document.title}),(i,r)=>(Xe(),sn(zy,{title:e.value,links:t},{default:zr(()=>[lt(ut(ua))]),_:1},8,["title"]))}}),Vy={class:"text-to-copy"},Gy={class:"text-to-copy"},Wy={class:"message"},Xy=_t({__name:"CopyText",props:{content:{},textToCopy:{}},setup(n){const e=n,t=Mt(!1),i=Mt(""),r=()=>{navigator.clipboard.writeText(e.textToCopy),i.value="Copiado",t.value=!1,setTimeout(()=>{i.value=""},1300)},s=o=>t.value=o;return(o,a)=>(Xe(),ft("div",{class:"text-to-copy-container",onMouseenter:a[0]||(a[0]=l=>s(!0)),onMouseleave:a[1]||(a[1]=l=>s(!1))},[Ue("p",null,rn(e.content),1),Ar(Ue("div",Vy,[Ue("p",null,rn(e.textToCopy),1),Ue("button",{onClick:r},"Copiar")],512),[[Uo,t.value&&!i.value]]),Ar(Ue("div",Gy,[Ue("p",Wy,rn(i.value),1)],512),[[Uo,i.value]])],32))}}),$y=It(Xy,[["__scopeId","data-v-17d92279"]]),qy={class:"contactme-container"},Yy=["href"],jy="vinicius_dev@hotmail.com",Ky=_t({__name:"ContactMe",setup(n){const i=[{name:"Linkedin",link:"https://www.linkedin.com/in/vinicius-dev-junior/"},{name:"Github",link:"https://github.com/vinicius-mns"}];return(r,s)=>(Xe(),ft("div",qy,[(Xe(),ft(Dt,null,wr(i,(o,a)=>Ue("a",{key:a,href:o.link,target:"_blank"},rn(o.name),9,Yy)),64)),lt($y,{content:"Email","text-to-copy":jy,class:"email"})]))}}),Zy=It(Ky,[["__scopeId","data-v-2151312f"]]),yi=n=>(Jo("data-v-99e1ca40"),n=n(),Qo(),n),Jy={class:"item-container"},Qy=yi(()=>Ue("div",{class:"empty horizontal top-left"},null,-1)),eb=yi(()=>Ue("div",{class:"empty horizontal top-right"},null,-1)),tb=yi(()=>Ue("div",{class:"empty horizontal bottom-left"},null,-1)),nb=yi(()=>Ue("div",{class:"empty horizontal bottom-right"},null,-1)),ib=yi(()=>Ue("div",{class:"empty vertical left-top"},null,-1)),rb=yi(()=>Ue("div",{class:"empty vertical left-bottom"},null,-1)),sb=yi(()=>Ue("div",{class:"empty vertical right-top"},null,-1)),ob=yi(()=>Ue("div",{class:"empty vertical right-bottom"},null,-1)),ab=_t({__name:"LinkBase2",props:{toName:{},content:{},params:{}},setup(n){const e=n;return(t,i)=>{const r=Hh("RouterLink");return Xe(),sn(r,{class:"link-2",to:{name:e.toName,params:e.params}},{default:zr(()=>[Ue("div",Jy,[Ue("h2",null,rn(e.content),1)]),Qy,eb,tb,nb,ib,rb,sb,ob]),_:1},8,["to"])}}}),lb=It(ab,[["__scopeId","data-v-99e1ca40"]]),cb=["name","min","max"],ub=_t({__name:"RangeImput",props:{initValue:{},name:{},limit:{}},emits:["emitValue"],setup(n,{emit:e}){const t=n,i=e,r=Mt(t.initValue);return Wh(()=>{i("emitValue",Number(r.value))}),(s,o)=>Ar((Xe(),ft("input",{type:"range","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),name:t.name,min:t.limit.min,max:t.limit.max,class:"range"},null,8,cb)),[[zg,r.value]])}}),rp=It(ub,[["__scopeId","data-v-7cb08e7c"]]),fb={class:"header-container"},hb={class:"header-space"},db=_t({__name:"HeaderBase",props:{title:{}},setup(n){return(e,t)=>(Xe(),ft("header",fb,[Ue("div",hb,[Po(e.$slots,"default",{},void 0)])]))}}),pb=It(db,[["__scopeId","data-v-a7b62774"]]),mb=n=>(Jo("data-v-81360a2a"),n=n(),Qo(),n),gb={class:"list-main-container"},_b={class:"range-container"},vb=mb(()=>Ue("p",null,"Colunas:",-1)),xb={class:"projects-list"},Mb=_t({__name:"ColumnsList",props:{components:{}},setup(n){const e=n,t=Mt(!1),i=Mt(4),r=Bt(()=>{const o=Array.from({length:i.value},()=>[]),a=e.components;for(let l=0;l<a.length;l+=1){const c=l%i.value;o[c].push(a[l])}return o}),s=()=>{(t.value=window.innerWidth<768)&&(t.value=!0,i.value=1)};return Un(s),Cc(s),(o,a)=>(Xe(),ft("div",gb,[t.value?Io("",!0):(Xe(),sn(pb,{key:0,title:"",class:"list-header"},{default:zr(()=>[Ue("div",_b,[vb,Ue("p",null,"["+rn(i.value)+"]",1),lt(rp,{class:"range-imput",limit:{min:1,max:6},"init-value":i.value,name:"project-columns",onEmitValue:a[0]||(a[0]=l=>i.value=l)},null,8,["init-value"])])]),_:1})),Ue("div",xb,[(Xe(!0),ft(Dt,null,wr(r.value,(l,c)=>(Xe(),ft("div",{class:"projects-column",key:c},[(Xe(!0),ft(Dt,null,wr(l,(u,f)=>(Xe(),sn(wm(u.component),ad({class:"component",key:f},u.props),null,16))),128))]))),128))])]))}}),Sb=It(Mb,[["__scopeId","data-v-81360a2a"]]),Eb=[{id:"1",title:"Projeto 1",content:"Descrição do projeto 1"},{id:"2",title:"Projeto 2",content:"Descrição do projeto 2"},{id:"3",title:"Template",content:`# Template de Projeto

Este documento serve como um guia para a criação de um projeto de desenvolvimento. Abaixo, você encontrará as seções recomendadas e como preenchê-las adequadamente.

## Descrição do Projeto
Nesta seção, você deve fornecer uma breve descrição do projeto. Explique o objetivo principal e o que você espera alcançar com ele. Por exemplo: *"Este projeto tem como objetivo desenvolver uma aplicação web que permita aos usuários gerenciar suas tarefas diárias de forma eficiente."*

## Tecnologias Utilizadas
Aqui, liste as tecnologias que foram utilizadas no desenvolvimento do projeto. É importante ser específico e incluir:

- **Linguagens**: Indique as linguagens de programação utilizadas, como JavaScript, Python, etc.
- **Frameworks**: Mencione os frameworks que foram empregados, como React, Django, etc.
- **Banco de Dados**: Informe qual banco de dados foi utilizado, como MySQL, MongoDB, etc.
- **Ferramentas**: Liste as ferramentas que auxiliaram no desenvolvimento, como Git, Docker, etc.
- **Outras Tecnologias**: Inclua quaisquer outras tecnologias relevantes, como APIs ou serviços de nuvem.

## Funcionalidades
Descreva as principais funcionalidades do projeto. Isso ajuda a dar uma visão clara do que o usuário pode esperar. Por exemplo:

- **Funcionalidade 1**: Descrição da funcionalidade.
- **Funcionalidade 2**: Descrição da funcionalidade.
- **Funcionalidade 3**: Descrição da funcionalidade.

## Instalação
Forneça instruções claras sobre como instalar e executar o projeto. Isso deve incluir:

1. **Clone o repositório**: Instruções para clonar o repositório do projeto.
   \`\`\`bash
   git clone [URL do repositório]
   \`\`\``},{id:"4",title:"projeto 4",content:"Descrição do projeto 4"}],ih={projects:Eb},sp=gd("api falsa",()=>({projects:()=>({getProjects:()=>ih.projects,getProjectId:i=>ih.projects.find(s=>s.id===i)})})),yb={class:"my-projects-container"},bb=_t({__name:"MyPojects",setup(n){const e=wd(),t=sp(),i=(o,a)=>({component:ys(lb),props:{toName:"project",content:o,params:{id:a}}}),r=Mt([]),s=Bt(()=>e.name==="Meus projetos");return Un(()=>{const a=t.projects().getProjects().map(l=>i(l.title,l.id));r.value=a}),(o,a)=>(Xe(),ft("div",yb,[s.value?(Xe(),sn(Sb,{key:0,components:r.value},null,8,["components"])):Io("",!0),lt(ut(ua))]))}}),Tb=It(bb,[["__scopeId","data-v-42634db5"]]),Ab={class:"checkbox-container"},wb={class:"my-checkbox"},Rb={class:"check"},Cb=_t({__name:"CheckboxBase",props:{check:{type:Boolean},content:{}},emits:["emit-check"],setup(n,{emit:e}){const t=n,i=e,r=Mt(t.check);return Wh(()=>{i("emit-check",r.value)}),(s,o)=>(Xe(),ft("label",Ab,[Ar(Ue("input",{class:"checkbox",type:"checkbox",name:"exemploCheckbox",value:"sim","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a)},null,512),[[Hg,r.value]]),Ue("div",wb,[Ar(Ue("div",Rb,null,512),[[Uo,r.value]])]),Ue("p",null,rn(t.content),1)]))}}),il=It(Cb,[["__scopeId","data-v-0cc3e6c5"]]),Pb={class:"range-container"},Db={class:"range-title"},Lb=_t({__name:"FloatRange",props:{value:{},name:{},limit:{}},emits:["emitValue"],setup(n,{emit:e}){const t=n,i=e,r=nn({show:!1,value:0,name:"default",limit:{min:0,max:100}}),s=a=>{r.show=a},o=a=>{console.log("chamado ainda"),r.value=a,i("emitValue",a)};return Un(()=>{r.value=t.value,r.name=t.name,r.limit=t.limit}),(a,l)=>(Xe(),ft("div",{class:"float-range-container",onMouseenter:l[1]||(l[1]=c=>s(!0)),onMouseleave:l[2]||(l[2]=c=>s(!1))},[Ue("p",null,rn(r.name),1),Ar(Ue("div",Pb,[Ue("div",Db,[Ue("h2",null,rn(r.name),1),Ue("p",null,rn([r.value]),1)]),lt(rp,{"init-value":t.value,name:t.name,limit:t.limit,onEmitValue:l[0]||(l[0]=c=>o(c))},null,8,["init-value","name","limit"])],512),[[Uo,r.show]])],32))}}),Ib=It(Lb,[["__scopeId","data-v-22df8093"]]),Ub={class:"config-options-container"},Nb=_t({__name:"ConfigTemplate",setup(n){const{trackBall:e,darkMode:t,swing:i,opacity:r}=ma();return(s,o)=>(Xe(),ft("div",Ub,[lt(il,{class:"option",check:ut(t).status.dark,content:"Modo escuro",onEmitCheck:o[0]||(o[0]=a=>ut(t).metod.darkMode(a))},null,8,["check"]),lt(Ib,{class:"option",value:ut(r).status.opacity,name:"Opacidade",limit:{min:0,max:100},onEmitValue:o[1]||(o[1]=a=>ut(r).metod.setOpacity(a))},null,8,["value"]),lt(il,{class:"option",check:ut(e).status.show,content:"Track ball",onEmitCheck:o[2]||(o[2]=a=>ut(e).metod.show(a))},null,8,["check"]),lt(il,{class:"option",check:ut(i).status.swing,content:"Balanço",onEmitCheck:o[3]||(o[3]=a=>ut(i).metod.swingMode(a))},null,8,["check"])]))}}),Fb=It(Nb,[["__scopeId","data-v-8a1aa130"]]),Ob={class:"config-page"},kb=_t({__name:"ConfigPage",setup(n){return(e,t)=>(Xe(),ft("div",Ob,[lt(Fb)]))}}),Bb=It(kb,[["__scopeId","data-v-92807a54"]]);function $c(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let Ji=$c();function op(n){Ji=n}const ap=/[&<>"']/,zb=new RegExp(ap.source,"g"),lp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Hb=new RegExp(lp.source,"g"),Vb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rh=n=>Vb[n];function tn(n,e){if(e){if(ap.test(n))return n.replace(zb,rh)}else if(lp.test(n))return n.replace(Hb,rh);return n}const Gb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Wb(n){return n.replace(Gb,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Xb=/(^|[^\[])\^/g;function ct(n,e){let t=typeof n=="string"?n:n.source;e=e||"";const i={replace:(r,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(Xb,"$1"),t=t.replace(r,o),i},getRegex:()=>new RegExp(t,e)};return i}function sh(n){try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const cs={exec:()=>null};function oh(n,e){const t=n.replace(/\|/g,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=t.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function fo(n,e,t){const i=n.length;if(i===0)return"";let r=0;for(;r<i&&n.charAt(i-r-1)===e;)r++;return n.slice(0,i-r)}function $b(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return-1}function ah(n,e,t,i){const r=e.href,s=e.title?tn(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:t,href:r,title:s,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:t,href:r,title:s,text:tn(o)}}function qb(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const i=t[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[o]=s;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}class zo{constructor(e){ot(this,"options");ot(this,"rules");ot(this,"lexer");this.options=e||Ji}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const i=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:fo(i,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const i=t[0],r=qb(i,t[3]||"");return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(/#$/.test(i)){const r=fo(i,"#");(this.options.pedantic||!r||/ $/.test(r))&&(i=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const i=fo(t[0].replace(/^ *>[ \t]?/gm,""),`
`),r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(i);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:s,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim();const r=i.length>1,s={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");const o=new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",c=!1;for(;e;){let u=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,d=>" ".repeat(3*d.length)),h=e.split(`
`,1)[0],p=0;this.options.pedantic?(p=2,l=f.trimStart()):(p=t[2].search(/[^ ]/),p=p>4?1:p,l=f.slice(p),p+=t[1].length);let _=!1;if(!f&&/^ *$/.test(h)&&(a+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const d=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),A=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),w=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),y=new RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;e;){const U=e.split(`
`,1)[0];if(h=U,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),w.test(h)||y.test(h)||d.test(h)||A.test(e))break;if(h.search(/[^ ]/)>=p||!h.trim())l+=`
`+h.slice(p);else{if(_||f.search(/[^ ]/)>=4||w.test(f)||y.test(f)||A.test(f))break;l+=`
`+h}!_&&!h.trim()&&(_=!0),a+=U+`
`,e=e.substring(U.length+1),f=h.slice(p)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(a)&&(c=!0));let v=null,m;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(m=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:a,task:!!v,checked:m,loose:!1,text:l,tokens:[]}),s.raw+=a}s.items[s.items.length-1].raw=a.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const f=s.items[u].tokens.filter(p=>p.type==="space"),h=f.length>0&&f.some(p=>/\n.*\n/.test(p.raw));s.loose=h}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const i=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:r,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const i=oh(t[1]),r=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===r.length){for(const a of r)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of i)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of s)o.rows.push(oh(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:tn(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const i=t[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=fo(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=$b(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);o&&(r=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(i)?r=r.slice(1):r=r.slice(1,-1)),ah(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const r=(i[2]||i[1]).replace(/\s+/g," "),s=t[r.toLowerCase()];if(!s){const o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return ah(i,s,i[0],this.lexer)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...r[0]].length-1;let a,l,c=o,u=0;const f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+o);(r=f.exec(t))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const h=[...r[0]][0].length,p=e.slice(0,o+r.index+h+l);if(Math.min(o,l)%2){const v=p.slice(1,-1);return{type:"em",raw:p,text:v,tokens:this.lexer.inlineTokens(v)}}const _=p.slice(2,-2);return{type:"strong",raw:p,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(/\n/g," ");const r=/[^ ]/.test(i),s=/^ /.test(i)&&/ $/.test(i);return r&&s&&(i=i.substring(1,i.length-1)),i=tn(i,!0),{type:"codespan",raw:t[0],text:i}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let i,r;return t[2]==="@"?(i=tn(t[1]),r="mailto:"+i):(i=tn(t[1]),r=i),{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let t;if(t=this.rules.inline.url.exec(e)){let r,s;if(t[2]==="@")r=tn(t[0]),s="mailto:"+r;else{let o;do o=t[0],t[0]=((i=this.rules.inline._backpedal.exec(t[0]))==null?void 0:i[0])??"";while(o!==t[0]);r=tn(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let i;return this.lexer.state.inRawBlock?i=t[0]:i=tn(t[0]),{type:"text",raw:t[0],text:i}}}}const Yb=/^(?: *(?:\n|$))+/,jb=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Kb=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ps=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Zb=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,cp=/(?:[*+-]|\d{1,9}[.)])/,up=ct(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,cp).getRegex(),qc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Jb=/^[^\n]+/,Yc=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Qb=ct(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Yc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),eT=ct(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,cp).getRegex(),ga="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",jc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,tT=ct("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",jc).replace("tag",ga).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fp=ct(qc).replace("hr",Ps).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ga).getRegex(),nT=ct(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",fp).getRegex(),Kc={blockquote:nT,code:jb,def:Qb,fences:Kb,heading:Zb,hr:Ps,html:tT,lheading:up,list:eT,newline:Yb,paragraph:fp,table:cs,text:Jb},lh=ct("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ps).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ga).getRegex(),iT={...Kc,table:lh,paragraph:ct(qc).replace("hr",Ps).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",lh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ga).getRegex()},rT={...Kc,html:ct(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",jc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:cs,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ct(qc).replace("hr",Ps).replace("heading",` *#{1,6} *[^
]`).replace("lheading",up).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},hp=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,sT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,dp=/^( {2,}|\\)\n(?!\s*$)/,oT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ds="\\p{P}\\p{S}",aT=ct(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ds).getRegex(),lT=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,cT=ct(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ds).getRegex(),uT=ct("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ds).getRegex(),fT=ct("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ds).getRegex(),hT=ct(/\\([punct])/,"gu").replace(/punct/g,Ds).getRegex(),dT=ct(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),pT=ct(jc).replace("(?:-->|$)","-->").getRegex(),mT=ct("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",pT).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ho=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,gT=ct(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",Ho).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pp=ct(/^!?\[(label)\]\[(ref)\]/).replace("label",Ho).replace("ref",Yc).getRegex(),mp=ct(/^!?\[(ref)\](?:\[\])?/).replace("ref",Yc).getRegex(),_T=ct("reflink|nolink(?!\\()","g").replace("reflink",pp).replace("nolink",mp).getRegex(),Zc={_backpedal:cs,anyPunctuation:hT,autolink:dT,blockSkip:lT,br:dp,code:sT,del:cs,emStrongLDelim:cT,emStrongRDelimAst:uT,emStrongRDelimUnd:fT,escape:hp,link:gT,nolink:mp,punctuation:aT,reflink:pp,reflinkSearch:_T,tag:mT,text:oT,url:cs},vT={...Zc,link:ct(/^!?\[(label)\]\((.*?)\)/).replace("label",Ho).getRegex(),reflink:ct(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ho).getRegex()},dc={...Zc,escape:ct(hp).replace("])","~|])").getRegex(),url:ct(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},xT={...dc,br:ct(dp).replace("{2,}","*").getRegex(),text:ct(dc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ho={normal:Kc,gfm:iT,pedantic:rT},Qr={normal:Zc,gfm:dc,breaks:xT,pedantic:vT};class Pn{constructor(e){ot(this,"tokens");ot(this,"options");ot(this,"state");ot(this,"tokenizer");ot(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ji,this.options.tokenizer=this.options.tokenizer||new zo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:ho.normal,inline:Qr.normal};this.options.pedantic?(t.block=ho.pedantic,t.inline=Qr.pedantic):this.options.gfm&&(t.block=ho.gfm,this.options.breaks?t.inline=Qr.breaks:t.inline=Qr.gfm),this.tokenizer.rules=t}static get rules(){return{block:ho,inline:Qr}}static lex(e,t){return new Pn(t).lex(e)}static lexInline(e,t){return new Pn(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const i=this.inlineQueue[t];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let i,r,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){r=t[t.length-1],o&&r.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i),o=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i,r,s,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let h;this.options.extensions.startInline.forEach(p=>{h=p.call({lexer:this},f),typeof h=="number"&&h>=0&&(u=Math.min(u,h))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(s)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class Vo{constructor(e){ot(this,"options");this.options=e||Ji}code(e,t,i){var s;const r=(s=(t||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+tn(r)+'">'+(i?e:tn(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:tn(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,i){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,i){const r=t?"ol":"ul",s=t&&i!==1?' start="'+i+'"':"";return"<"+r+s+`>
`+e+"</"+r+`>
`}listitem(e,t,i){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){const i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,i){const r=sh(e);if(r===null)return i;e=r;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+i+"</a>",s}image(e,t,i){const r=sh(e);if(r===null)return i;e=r;let s=`<img src="${e}" alt="${i}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class Jc{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}}class Dn{constructor(e){ot(this,"options");ot(this,"renderer");ot(this,"textRenderer");this.options=e||Ji,this.options.renderer=this.options.renderer||new Vo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Jc}static parse(e,t){return new Dn(t).parse(e)}static parseInline(e,t){return new Dn(t).parseInline(e)}parse(e,t=!0){let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){i+=a||"";continue}}switch(s.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{const o=s;i+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Wb(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=s;i+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=s;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let c="";for(let u=0;u<o.rows.length;u++){const f=o.rows[u];l="";for(let h=0;h<f.length;h++)l+=this.renderer.tablecell(this.parseInline(f[h].tokens),{header:!1,align:o.align[h]});c+=this.renderer.tablerow(l)}i+=this.renderer.table(a,c);continue}case"blockquote":{const o=s,a=this.parse(o.tokens);i+=this.renderer.blockquote(a);continue}case"list":{const o=s,a=o.ordered,l=o.start,c=o.loose;let u="";for(let f=0;f<o.items.length;f++){const h=o.items[f],p=h.checked,_=h.task;let v="";if(h.task){const m=this.renderer.checkbox(!!p);c?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=m+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=m+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:m+" "}):v+=m+" "}v+=this.parse(h.tokens,c),u+=this.renderer.listitem(v,_,!!p)}i+=this.renderer.list(u,a,l);continue}case"html":{const o=s;i+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=s;i+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=s,a=o.tokens?this.parseInline(o.tokens):o.text;for(;r+1<e.length&&e[r+1].type==="text";)o=e[++r],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);i+=t?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}parseInline(e,t){t=t||this.renderer;let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=o||"";continue}}switch(s.type){case"escape":{const o=s;i+=t.text(o.text);break}case"html":{const o=s;i+=t.html(o.text);break}case"link":{const o=s;i+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=s;i+=t.image(o.href,o.title,o.text);break}case"strong":{const o=s;i+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=s;i+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=s;i+=t.codespan(o.text);break}case"br":{i+=t.br();break}case"del":{const o=s;i+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=s;i+=t.text(o.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}}class us{constructor(e){ot(this,"options");this.options=e||Ji}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}ot(us,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Zi,pc,gp;class MT{constructor(...e){lu(this,Zi);ot(this,"defaults",$c());ot(this,"options",this.setOptions);ot(this,"parse",Us(this,Zi,pc).call(this,Pn.lex,Dn.parse));ot(this,"parseInline",Us(this,Zi,pc).call(this,Pn.lexInline,Dn.parseInline));ot(this,"Parser",Dn);ot(this,"Renderer",Vo);ot(this,"TextRenderer",Jc);ot(this,"Lexer",Pn);ot(this,"Tokenizer",zo);ot(this,"Hooks",us);this.use(...e)}walkTokens(e,t){var r,s;let i=[];for(const o of e)switch(i=i.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)i=i.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)i=i.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=o;i=i.concat(this.walkTokens(a.items,t));break}default:{const a=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);i=i.concat(this.walkTokens(c,t))}):a.tokens&&(i=i.concat(this.walkTokens(a.tokens,t)))}}return i}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=t.renderers[s.name];o?t.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),i.renderer){const s=this.defaults.renderer||new Vo(this.defaults);for(const o in i.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=i.renderer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f||""}}r.renderer=s}if(i.tokenizer){const s=this.defaults.tokenizer||new zo(this.defaults);for(const o in i.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=i.tokenizer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.tokenizer=s}if(i.hooks){const s=this.defaults.hooks||new us;for(const o in i.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=i.hooks[a],c=s[a];us.passThroughHooks.has(o)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(h=>c.call(s,h));const f=l.call(s,u);return c.call(s,f)}:s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.hooks=s}if(i.walkTokens){const s=this.defaults.walkTokens,o=i.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Pn.lex(e,t??this.defaults)}parser(e,t){return Dn.parse(e,t??this.defaults)}}Zi=new WeakSet,pc=function(e,t){return(i,r)=>{const s={...r},o={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=Us(this,Zi,gp).call(this,!!o.silent,!!o.async);if(typeof i>"u"||i===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>t(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(i=o.hooks.preprocess(i));let l=e(i,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let c=t(l,o);return o.hooks&&(c=o.hooks.postprocess(c)),c}catch(l){return a(l)}}},gp=function(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+tn(i.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(i);throw i}};const Ki=new MT;function it(n,e){return Ki.parse(n,e)}it.options=it.setOptions=function(n){return Ki.setOptions(n),it.defaults=Ki.defaults,op(it.defaults),it};it.getDefaults=$c;it.defaults=Ji;it.use=function(...n){return Ki.use(...n),it.defaults=Ki.defaults,op(it.defaults),it};it.walkTokens=function(n,e){return Ki.walkTokens(n,e)};it.parseInline=Ki.parseInline;it.Parser=Dn;it.parser=Dn.parse;it.Renderer=Vo;it.TextRenderer=Jc;it.Lexer=Pn;it.lexer=Pn.lex;it.Tokenizer=zo;it.Hooks=us;it.parse=it;it.options;it.setOptions;it.use;it.walkTokens;it.parseInline;Dn.parse;Pn.lex;const ST=["innerHTML"],ET=_t({__name:"MarkdownAtom",props:{content:{}},setup(n){const e=n;return it.setOptions({breaks:!0}),(t,i)=>(Xe(),ft("div",{innerHTML:ut(it)(e.content)},null,8,ST))}}),yT={},_p=n=>(Jo("data-v-8f707370"),n=n(),Qo(),n),bT={class:"button-close"},TT=_p(()=>Ue("div",{class:"cross one"},null,-1)),AT=_p(()=>Ue("div",{class:"cross two"},null,-1)),wT=[TT,AT];function RT(n,e){return Xe(),ft("button",bT,wT)}const CT=It(yT,[["render",RT],["__scopeId","data-v-8f707370"]]),PT={class:"my-projects-container"},DT={class:"header"},LT={class:"content"},IT=_t({__name:"ProjectPage",setup(n){const e=nv(),t=sp(),i=wd().params.id,r=Mt({content:""}),s=l=>{document.title=l.title},o=l=>{r.value.content=l.content},a=()=>{e.push({name:"Meus projetos"})};return Un(()=>{const l=t.projects().getProjectId(i);l&&(s(l),o(l))}),(l,c)=>(Xe(),ft("div",PT,[Ue("header",DT,[lt(CT,{onClick:a})]),Ue("div",LT,[lt(ET,{class:"markdown",content:r.value.content},null,8,["content"])])]))}}),UT=It(IT,[["__scopeId","data-v-d580e253"]]),vp=ev({history:__("./"),routes:[{path:"/",name:"home",component:Cy},{path:"/main",name:"main",component:Hy,children:[{path:"contact",name:"Estou por ai",component:Zy,meta:{title:"Estou por ai"}},{path:"projects",name:"Meus projetos",component:Tb,children:[{path:"project/:id",name:"project",component:UT}]},{path:"config",name:"Configurações",component:Bb}]}]});vp.afterEach(n=>{const e=n.name;document.title=e});const Qc=Xg(My);Qc.use(qg());Qc.use(vp);Qc.mount("#app");
