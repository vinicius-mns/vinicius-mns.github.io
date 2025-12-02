var Dp=Object.defineProperty;var fu=n=>{throw TypeError(n)};var Lp=(n,e,t)=>e in n?Dp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var at=(n,e,t)=>Lp(n,typeof e!="symbol"?e+"":e,t),Up=(n,e,t)=>e.has(n)||fu("Cannot "+t);var hu=(n,e,t)=>e.has(n)?fu("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t);var zs=(n,e,t)=>(Up(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function mc(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return r=>!!t[r]}const mt={},Mr=[],Nn=()=>{},Np=()=>!1,jo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),gc=n=>n.startsWith("onUpdate:"),Wt=Object.assign,_c=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Fp=Object.prototype.hasOwnProperty,Ke=(n,e)=>Fp.call(n,e),Fe=Array.isArray,Sr=n=>As(n)==="[object Map]",Yo=n=>As(n)==="[object Set]",du=n=>As(n)==="[object Date]",He=n=>typeof n=="function",wt=n=>typeof n=="string",Mi=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",dh=n=>(pt(n)||He(n))&&He(n.then)&&He(n.catch),ph=Object.prototype.toString,As=n=>ph.call(n),Op=n=>As(n).slice(8,-1),mh=n=>As(n)==="[object Object]",vc=n=>wt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Mo=mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},kp=/-(\w)/g,Fn=Ko(n=>n.replace(kp,(e,t)=>t?t.toUpperCase():"")),Bp=/\B([A-Z])/g,Br=Ko(n=>n.replace(Bp,"-$1").toLowerCase()),Zo=Ko(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=Ko(n=>n?`on${Zo(n)}`:""),ji=(n,e)=>!Object.is(n,e),So=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Do=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},sl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let pu;const ol=()=>pu||(pu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xc(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=wt(i)?Gp(i):xc(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(wt(n)||pt(n))return n}const zp=/;(?![^(]*\))/g,Hp=/:([^]+)/,Vp=/\/\*[^]*?\*\//g;function Gp(n){const e={};return n.replace(Vp,"").split(zp).forEach(t=>{if(t){const i=t.split(Hp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function qn(n){let e="";if(wt(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=qn(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Wp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xp=mc(Wp);function gh(n){return!!n||n===""}function $p(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Jo(n[i],e[i]);return t}function Jo(n,e){if(n===e)return!0;let t=du(n),i=du(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Mi(n),i=Mi(e),t||i)return n===e;if(t=Fe(n),i=Fe(e),t||i)return t&&i?$p(n,e):!1;if(t=pt(n),i=pt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Jo(n[o],e[o]))return!1}}return String(n)===String(e)}function _h(n,e){return n.findIndex(t=>Jo(t,e))}const on=n=>wt(n)?n:n==null?"":Fe(n)||pt(n)&&(n.toString===ph||!He(n.toString))?JSON.stringify(n,vh,2):String(n),vh=(n,e)=>e&&e.__v_isRef?vh(n,e.value):Sr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Sa(i,s)+" =>"]=r,t),{})}:Yo(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Sa(t))}:Mi(e)?Sa(e):pt(e)&&!Fe(e)&&!mh(e)?String(e):e,Sa=(n,e="")=>{var t;return Mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let rn;class xh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=rn,!e&&rn&&(this.index=(rn.scopes||(rn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=rn;try{return rn=this,e()}finally{rn=t}}}on(){rn=this}off(){rn=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Mh(n){return new xh(n)}function qp(n,e=rn){e&&e.active&&e.effects.push(n)}function Sh(){return rn}function jp(n){rn&&rn.cleanups.push(n)}const Mc=n=>{const e=new Set(n);return e.w=0,e.n=0,e},yh=n=>(n.w&Si)>0,Eh=n=>(n.n&Si)>0,Yp=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Si},Kp=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];yh(r)&&!Eh(r)?r.delete(n):e[t++]=r,r.w&=~Si,r.n&=~Si}e.length=t}},Lo=new WeakMap;let rs=0,Si=1;const al=30;let xn;const Xi=Symbol(""),ll=Symbol("");class Sc{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,qp(this,i)}run(){if(!this.active)return this.fn();let e=xn,t=mi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=xn,xn=this,mi=!0,Si=1<<++rs,rs<=al?Yp(this):mu(this),this.fn()}finally{rs<=al&&Kp(this),Si=1<<--rs,xn=this.parent,mi=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xn===this?this.deferStop=!0:this.active&&(mu(this),this.onStop&&this.onStop(),this.active=!1)}}function mu(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let mi=!0;const bh=[];function zr(){bh.push(mi),mi=!1}function Hr(){const n=bh.pop();mi=n===void 0?!0:n}function Qt(n,e,t){if(mi&&xn){let i=Lo.get(n);i||Lo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Mc()),Th(r)}}function Th(n,e){let t=!1;rs<=al?Eh(n)||(n.n|=Si,t=!yh(n)):t=!n.has(xn),t&&(n.add(xn),xn.deps.push(n))}function Zn(n,e,t,i,r,s){const o=Lo.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Fe(n)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Mi(u)&&u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Fe(n)?vc(t)&&a.push(o.get("length")):(a.push(o.get(Xi)),Sr(n)&&a.push(o.get(ll)));break;case"delete":Fe(n)||(a.push(o.get(Xi)),Sr(n)&&a.push(o.get(ll)));break;case"set":Sr(n)&&a.push(o.get(Xi));break}if(a.length===1)a[0]&&cl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);cl(Mc(l))}}function cl(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&gu(i);for(const i of t)i.computed||gu(i)}function gu(n,e){(n!==xn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}function Zp(n,e){var t;return(t=Lo.get(n))==null?void 0:t.get(e)}const Jp=mc("__proto__,__v_isRef,__isVue"),wh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi)),_u=Qp();function Qp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=Ze(this);for(let s=0,o=this.length;s<o;s++)Qt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(Ze)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){zr();const i=Ze(this)[e].apply(this,t);return Hr(),i}}),n}function em(n){const e=Ze(this);return Qt(e,"has",n),e.hasOwnProperty(n)}class Ah{constructor(e=!1,t=!1){this._isReadonly=e,this._shallow=t}get(e,t,i){const r=this._isReadonly,s=this._shallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?dm:Ih:s?Ph:Ch).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!r){if(o&&Ke(_u,t))return Reflect.get(_u,t,i);if(t==="hasOwnProperty")return em}const a=Reflect.get(e,t,i);return(Mi(t)?wh.has(t):Jp(t))||(r||Qt(e,"get",t),s)?a:yt(a)?o&&vc(t)?a:a.value:pt(a)?r?Lh(a):jt(a):a}}class Rh extends Ah{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(Ar(s)&&yt(s)&&!yt(i))return!1;if(!this._shallow&&(!Uo(i)&&!Ar(i)&&(s=Ze(s),i=Ze(i)),!Fe(e)&&yt(s)&&!yt(i)))return s.value=i,!0;const o=Fe(e)&&vc(t)?Number(t)<e.length:Ke(e,t),a=Reflect.set(e,t,i,r);return e===Ze(r)&&(o?ji(i,s)&&Zn(e,"set",t,i):Zn(e,"add",t,i)),a}deleteProperty(e,t){const i=Ke(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Zn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Mi(t)||!wh.has(t))&&Qt(e,"has",t),i}ownKeys(e){return Qt(e,"iterate",Fe(e)?"length":Xi),Reflect.ownKeys(e)}}class tm extends Ah{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const nm=new Rh,im=new tm,rm=new Rh(!0),yc=n=>n,Qo=n=>Reflect.getPrototypeOf(n);function Hs(n,e,t=!1,i=!1){n=n.__v_raw;const r=Ze(n),s=Ze(e);t||(ji(e,s)&&Qt(r,"get",e),Qt(r,"get",s));const{has:o}=Qo(r),a=i?yc:t?Tc:ms;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Vs(n,e=!1){const t=this.__v_raw,i=Ze(t),r=Ze(n);return e||(ji(n,r)&&Qt(i,"has",n),Qt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Gs(n,e=!1){return n=n.__v_raw,!e&&Qt(Ze(n),"iterate",Xi),Reflect.get(n,"size",n)}function vu(n){n=Ze(n);const e=Ze(this);return Qo(e).has.call(e,n)||(e.add(n),Zn(e,"add",n,n)),this}function xu(n,e){e=Ze(e);const t=Ze(this),{has:i,get:r}=Qo(t);let s=i.call(t,n);s||(n=Ze(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?ji(e,o)&&Zn(t,"set",n,e):Zn(t,"add",n,e),this}function Mu(n){const e=Ze(this),{has:t,get:i}=Qo(e);let r=t.call(e,n);r||(n=Ze(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Zn(e,"delete",n,void 0),s}function Su(){const n=Ze(this),e=n.size!==0,t=n.clear();return e&&Zn(n,"clear",void 0,void 0),t}function Ws(n,e){return function(i,r){const s=this,o=s.__v_raw,a=Ze(o),l=e?yc:n?Tc:ms;return!n&&Qt(a,"iterate",Xi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Xs(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),o=Sr(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?yc:e?Tc:ms;return!e&&Qt(s,"iterate",l?ll:Xi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ni(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function sm(){const n={get(s){return Hs(this,s)},get size(){return Gs(this)},has:Vs,add:vu,set:xu,delete:Mu,clear:Su,forEach:Ws(!1,!1)},e={get(s){return Hs(this,s,!1,!0)},get size(){return Gs(this)},has:Vs,add:vu,set:xu,delete:Mu,clear:Su,forEach:Ws(!1,!0)},t={get(s){return Hs(this,s,!0)},get size(){return Gs(this,!0)},has(s){return Vs.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:Ws(!0,!1)},i={get(s){return Hs(this,s,!0,!0)},get size(){return Gs(this,!0)},has(s){return Vs.call(this,s,!0)},add:ni("add"),set:ni("set"),delete:ni("delete"),clear:ni("clear"),forEach:Ws(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Xs(s,!1,!1),t[s]=Xs(s,!0,!1),e[s]=Xs(s,!1,!0),i[s]=Xs(s,!0,!0)}),[n,t,e,i]}const[om,am,lm,cm]=sm();function Ec(n,e){const t=e?n?cm:lm:n?am:om;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ke(t,r)&&r in i?t:i,r,s)}const um={get:Ec(!1,!1)},fm={get:Ec(!1,!0)},hm={get:Ec(!0,!1)},Ch=new WeakMap,Ph=new WeakMap,Ih=new WeakMap,dm=new WeakMap;function pm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mm(n){return n.__v_skip||!Object.isExtensible(n)?0:pm(Op(n))}function jt(n){return Ar(n)?n:bc(n,!1,nm,um,Ch)}function Dh(n){return bc(n,!1,rm,fm,Ph)}function Lh(n){return bc(n,!0,im,hm,Ih)}function bc(n,e,t,i,r){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=mm(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function gi(n){return Ar(n)?gi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ar(n){return!!(n&&n.__v_isReadonly)}function Uo(n){return!!(n&&n.__v_isShallow)}function Uh(n){return gi(n)||Ar(n)}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Rs(n){return Do(n,"__v_skip",!0),n}const ms=n=>pt(n)?jt(n):n,Tc=n=>pt(n)?Lh(n):n;function Nh(n){mi&&xn&&(n=Ze(n),Th(n.dep||(n.dep=Mc())))}function Fh(n,e){n=Ze(n);const t=n.dep;t&&cl(t)}function yt(n){return!!(n&&n.__v_isRef===!0)}function gt(n){return Oh(n,!1)}function gm(n){return Oh(n,!0)}function Oh(n,e){return yt(n)?n:new _m(n,e)}class _m{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ze(e),this._value=t?e:ms(e)}get value(){return Nh(this),this._value}set value(e){const t=this.__v_isShallow||Uo(e)||Ar(e);e=t?e:Ze(e),ji(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ms(e),Fh(this))}}function ct(n){return yt(n)?n.value:n}const vm={get:(n,e,t)=>ct(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return yt(r)&&!yt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function kh(n){return gi(n)?n:new Proxy(n,vm)}function xm(n){const e=Fe(n)?new Array(n.length):{};for(const t in n)e[t]=Sm(n,t);return e}class Mm{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Zp(Ze(this._object),this._key)}}function Sm(n,e,t){const i=n[e];return yt(i)?i:new Mm(n,e,t)}class ym{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sc(e,()=>{this._dirty||(this._dirty=!0,Fh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=Ze(this);return Nh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Em(n,e,t=!1){let i,r;const s=He(n);return s?(i=n,r=Nn):(i=n.get,r=n.set),new ym(i,r,s||!r,t)}function _i(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ea(s,e,t)}return r}function En(n,e,t,i){if(He(n)){const s=_i(n,e,t,i);return s&&dh(s)&&s.catch(o=>{ea(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}function ea(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){_i(l,null,10,[n,o,a]);return}}bm(n,t,r,i)}function bm(n,e,t,i=!0){console.error(n)}let gs=!1,ul=!1;const zt=[];let In=0;const yr=[];let Xn=null,Oi=0;const Bh=Promise.resolve();let wc=null;function Ac(n){const e=wc||Bh;return n?e.then(this?n.bind(this):n):e}function Tm(n){let e=In+1,t=zt.length;for(;e<t;){const i=e+t>>>1,r=zt[i],s=_s(r);s<n||s===n&&r.pre?e=i+1:t=i}return e}function Rc(n){(!zt.length||!zt.includes(n,gs&&n.allowRecurse?In+1:In))&&(n.id==null?zt.push(n):zt.splice(Tm(n.id),0,n),zh())}function zh(){!gs&&!ul&&(ul=!0,wc=Bh.then(Vh))}function wm(n){const e=zt.indexOf(n);e>In&&zt.splice(e,1)}function Am(n){Fe(n)?yr.push(...n):(!Xn||!Xn.includes(n,n.allowRecurse?Oi+1:Oi))&&yr.push(n),zh()}function yu(n,e,t=gs?In+1:0){for(;t<zt.length;t++){const i=zt[t];if(i&&i.pre){if(n&&i.id!==n.uid)continue;zt.splice(t,1),t--,i()}}}function Hh(n){if(yr.length){const e=[...new Set(yr)];if(yr.length=0,Xn){Xn.push(...e);return}for(Xn=e,Xn.sort((t,i)=>_s(t)-_s(i)),Oi=0;Oi<Xn.length;Oi++)Xn[Oi]();Xn=null,Oi=0}}const _s=n=>n.id==null?1/0:n.id,Rm=(n,e)=>{const t=_s(n)-_s(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Vh(n){ul=!1,gs=!0,zt.sort(Rm);try{for(In=0;In<zt.length;In++){const e=zt[In];e&&e.active!==!1&&_i(e,null,14)}}finally{In=0,zt.length=0,Hh(),gs=!1,wc=null,(zt.length||yr.length)&&Vh()}}function Cm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||mt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[u]||mt;h&&(r=t.map(p=>wt(p)?p.trim():p)),f&&(r=t.map(sl))}let a,l=i[a=Ma(e)]||i[a=Ma(Fn(e))];!l&&s&&(l=i[a=Ma(Br(e))]),l&&En(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,r)}}function Gh(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!He(n)){const l=c=>{const u=Gh(c,e,!0);u&&(a=!0,Wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(pt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Wt(o,s),pt(n)&&i.set(n,o),o)}function ta(n,e){return!n||!jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ke(n,e[0].toLowerCase()+e.slice(1))||Ke(n,Br(e))||Ke(n,e))}let Lt=null,na=null;function No(n){const e=Lt;return Lt=n,na=n&&n.type.__scopeId||null,e}function Vr(n){na=n}function Gr(){na=null}function Wr(n,e=Lt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Uu(-1);const s=No(e);let o;try{o=n(...r)}finally{No(s),i._d&&Uu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Eu(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:_,inheritAttrs:v}=n;let m,d;const w=No(n);try{if(t.shapeFlag&4){const E=r||i,U=E;m=Cn(u.call(U,E,f,s,p,h,_)),d=l}else{const E=e;m=Cn(E.length>1?E(s,{attrs:l,slots:a,emit:c}):E(s,null)),d=e.props?l:Pm(l)}}catch(E){cs.length=0,ea(E,n,1),m=ft(yi)}let A=m;if(d&&v!==!1){const E=Object.keys(d),{shapeFlag:U}=A;E.length&&U&7&&(o&&E.some(gc)&&(d=Im(d,o)),A=Pr(A,d))}return t.dirs&&(A=Pr(A),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&(A.transition=t.transition),m=A,No(w),m}const Pm=n=>{let e;for(const t in n)(t==="class"||t==="style"||jo(t))&&((e||(e={}))[t]=n[t]);return e},Im=(n,e)=>{const t={};for(const i in n)(!gc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Dm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?bu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!ta(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?bu(i,o,c):!0:!!o;return!1}function bu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ta(t,s))return!0}return!1}function Lm({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Wh="components";function Xh(n,e){return qh(Wh,n,!0,e)||n}const $h=Symbol.for("v-ndc");function Um(n){return wt(n)?qh(Wh,n,!1)||n:n||$h}function qh(n,e,t=!0,i=!1){const r=Lt||At;if(r){const s=r.type;{const a=bg(s,!1);if(a&&(a===e||a===Fn(e)||a===Zo(Fn(e))))return s}const o=Tu(r[n]||s[n],e)||Tu(r.appContext[n],e);return!o&&i?s:o}}function Tu(n,e){return n&&(n[e]||n[Fn(e)]||n[Zo(Fn(e))])}const Nm=n=>n.__isSuspense;function Fm(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Am(n)}function jh(n,e){return ia(n,null,e)}function Om(n,e){return ia(n,null,{flush:"post"})}const $s={};function Er(n,e,t){return ia(n,e,t)}function ia(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=mt){var a;const l=Sh()===((a=At)==null?void 0:a.scope)?At:null;let c,u=!1,f=!1;if(yt(n)?(c=()=>n.value,u=Uo(n)):gi(n)?(c=()=>n,i=!0):Fe(n)?(f=!0,u=n.some(E=>gi(E)||Uo(E)),c=()=>n.map(E=>{if(yt(E))return E.value;if(gi(E))return Vi(E);if(He(E))return _i(E,l,2)})):He(n)?e?c=()=>_i(n,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),En(n,l,3,[p])}:c=Nn,e&&i){const E=c;c=()=>Vi(E())}let h,p=E=>{h=w.onStop=()=>{_i(E,l,4),h=w.onStop=void 0}},_;if(Ms)if(p=Nn,e?t&&En(e,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const E=Ag();_=E.__watcherHandles||(E.__watcherHandles=[])}else return Nn;let v=f?new Array(n.length).fill($s):$s;const m=()=>{if(w.active)if(e){const E=w.run();(i||u||(f?E.some((U,D)=>ji(U,v[D])):ji(E,v)))&&(h&&h(),En(e,l,3,[E,v===$s?void 0:f&&v[0]===$s?[]:v,p]),v=E)}else w.run()};m.allowRecurse=!!e;let d;r==="sync"?d=m:r==="post"?d=()=>qt(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Rc(m));const w=new Sc(c,d);e?t?m():v=w.run():r==="post"?qt(w.run.bind(w),l&&l.suspense):w.run();const A=()=>{w.stop(),l&&l.scope&&_c(l.scope.effects,w)};return _&&_.push(A),A}function km(n,e,t){const i=this.proxy,r=wt(n)?n.includes(".")?Yh(i,n):()=>i[n]:n.bind(i,i);let s;He(e)?s=e:(s=e.handler,t=e);const o=At;Ir(this);const a=ia(r,s.bind(i),t);return o?Ir(o):$i(),a}function Yh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Vi(n,e){if(!pt(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),yt(n))Vi(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)Vi(n[t],e);else if(Yo(n)||Sr(n))n.forEach(t=>{Vi(t,e)});else if(mh(n))for(const t in n)Vi(n[t],e);return n}function Rr(n,e){const t=Lt;if(t===null)return n;const i=aa(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=mt]=e[s];o&&(He(o)&&(o={mounted:o,updated:o}),o.deep&&Vi(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function Ai(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(zr(),En(l,t,8,[n.el,a,n,e]),Hr())}}/*! #__NO_SIDE_EFFECTS__ */function _t(n,e){return He(n)?Wt({name:n.name},e,{setup:n}):n}const as=n=>!!n.type.__asyncLoader,Kh=n=>n.type.__isKeepAlive;function Bm(n,e){Zh(n,"a",e)}function zm(n,e){Zh(n,"da",e)}function Zh(n,e,t=At){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ra(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Kh(r.parent.vnode)&&Hm(i,e,t,r),r=r.parent}}function Hm(n,e,t,i){const r=ra(e,n,i,!0);Pc(()=>{_c(i[e],r)},t)}function ra(n,e,t=At,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;zr(),Ir(t);const a=En(e,t,n,o);return $i(),Hr(),a});return i?r.unshift(s):r.push(s),s}}const ti=n=>(e,t=At)=>(!Ms||n==="sp")&&ra(n,(...i)=>e(...i),t),Vm=ti("bm"),ln=ti("m"),Gm=ti("bu"),Cc=ti("u"),Qi=ti("bum"),Pc=ti("um"),Wm=ti("sp"),Xm=ti("rtg"),$m=ti("rtc");function qm(n,e=At){ra("ec",n,e)}function Cr(n,e,t,i){let r;const s=t;if(Fe(n)||wt(n)){r=new Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=e(n[o],o,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(pt(n))if(n[Symbol.iterator])r=Array.from(n,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(n[c],c,a,s)}}else r=[];return r}function Fo(n,e,t={},i,r){if(Lt.isCE||Lt.parent&&as(Lt.parent)&&Lt.parent.isCE)return ft("slot",t,i);let s=n[e];s&&s._c&&(s._d=!1),ke();const o=s&&Jh(s(t)),a=Ft(Dt,{key:t.key||o&&o.key||`_${e}`},o||[],o&&n._===1?64:-2);return s&&s._c&&(s._d=!0),a}function Jh(n){return n.some(e=>ko(e)?!(e.type===yi||e.type===Dt&&!Jh(e.children)):!0)?n:null}const fl=n=>n?hd(n)?aa(n)||n.proxy:fl(n.parent):null,ls=Wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fl(n.parent),$root:n=>fl(n.root),$emit:n=>n.emit,$options:n=>ed(n),$forceUpdate:n=>n.f||(n.f=()=>Rc(n.update)),$nextTick:n=>n.n||(n.n=Ac.bind(n.proxy)),$watch:n=>km.bind(n)}),ya=(n,e)=>n!==mt&&!n.__isScriptSetup&&Ke(n,e),jm={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ya(i,e))return o[e]=1,i[e];if(r!==mt&&Ke(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&Ke(c,e))return o[e]=3,s[e];if(t!==mt&&Ke(t,e))return o[e]=4,t[e];hl&&(o[e]=0)}}const u=ls[e];let f,h;if(u)return e==="$attrs"&&Qt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==mt&&Ke(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,Ke(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ya(r,e)?(r[e]=t,!0):i!==mt&&Ke(i,e)?(i[e]=t,!0):Ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==mt&&Ke(n,o)||ya(e,o)||(a=s[0])&&Ke(a,o)||Ke(i,o)||Ke(ls,o)||Ke(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function wu(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let hl=!0;function Ym(n){const e=ed(n),t=n.proxy,i=n.ctx;hl=!1,e.beforeCreate&&Au(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:d,beforeUnmount:w,destroyed:A,unmounted:E,render:U,renderTracked:D,renderTriggered:C,errorCaptured:N,serverPrefetch:b,expose:y,inheritAttrs:P,components:Q,directives:G,filters:oe}=e;if(c&&Km(c,i,null),o)for(const ee in o){const z=o[ee];He(z)&&(i[ee]=z.bind(t))}if(r){const ee=r.call(t,t);pt(ee)&&(n.data=jt(ee))}if(hl=!0,s)for(const ee in s){const z=s[ee],ge=He(z)?z.bind(t,t):He(z.get)?z.get.bind(t,t):Nn,Me=!He(z)&&He(z.set)?z.set.bind(t):Nn,Ae=Nt({get:ge,set:Me});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Le=>Ae.value=Le})}if(a)for(const ee in a)Qh(a[ee],i,t,ee);if(l){const ee=He(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(z=>{yo(z,ee[z])})}u&&Au(u,n,"c");function $(ee,z){Fe(z)?z.forEach(ge=>ee(ge.bind(t))):z&&ee(z.bind(t))}if($(Vm,f),$(ln,h),$(Gm,p),$(Cc,_),$(Bm,v),$(zm,m),$(qm,N),$($m,D),$(Xm,C),$(Qi,w),$(Pc,E),$(Wm,b),Fe(y))if(y.length){const ee=n.exposed||(n.exposed={});y.forEach(z=>{Object.defineProperty(ee,z,{get:()=>t[z],set:ge=>t[z]=ge})})}else n.exposed||(n.exposed={});U&&n.render===Nn&&(n.render=U),P!=null&&(n.inheritAttrs=P),Q&&(n.components=Q),G&&(n.directives=G)}function Km(n,e,t=Nn){Fe(n)&&(n=dl(n));for(const i in n){const r=n[i];let s;pt(r)?"default"in r?s=dn(r.from||i,r.default,!0):s=dn(r.from||i):s=dn(r),yt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Au(n,e,t){En(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Qh(n,e,t,i){const r=i.includes(".")?Yh(t,i):()=>t[i];if(wt(n)){const s=e[n];He(s)&&Er(r,s)}else if(He(n))Er(r,n.bind(t));else if(pt(n))if(Fe(n))n.forEach(s=>Qh(s,e,t,i));else{const s=He(n.handler)?n.handler.bind(t):e[n.handler];He(s)&&Er(r,s,n)}}function ed(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Oo(l,c,o,!0)),Oo(l,e,o)),pt(e)&&s.set(e,l),l}function Oo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Oo(n,s,t,!0),r&&r.forEach(o=>Oo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Zm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Zm={data:Ru,props:Cu,emits:Cu,methods:ss,computed:ss,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ss,directives:ss,watch:Qm,provide:Ru,inject:Jm};function Ru(n,e){return e?n?function(){return Wt(He(n)?n.call(this,this):n,He(e)?e.call(this,this):e)}:e:n}function Jm(n,e){return ss(dl(n),dl(e))}function dl(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function ss(n,e){return n?Wt(Object.create(null),n,e):e}function Cu(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:Wt(Object.create(null),wu(n),wu(e??{})):e}function Qm(n,e){if(!n)return e;if(!e)return n;const t=Wt(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function td(){return{app:null,config:{isNativeTag:Np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(n,e){return function(i,r=null){He(i)||(i=Wt({},i)),r!=null&&!pt(r)&&(r=null);const s=td(),o=new WeakSet;let a=!1;const l=s.app={_uid:eg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Rg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&He(c.install)?(o.add(c),c.install(l,...u)):He(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ft(i,r);return h.appContext=s,n(h,c,f),a=!0,l._container=c,c.__vue_app__=l,aa(h.component)||h.component.proxy}},unmount(){a&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){vs=l;try{return c()}finally{vs=null}}};return l}}let vs=null;function yo(n,e){if(At){let t=At.provides;const i=At.parent&&At.parent.provides;i===t&&(t=At.provides=Object.create(i)),t[n]=e}}function dn(n,e,t=!1){const i=At||Lt;if(i||vs){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:vs._context.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&He(e)?e.call(i&&i.proxy):e}}function ng(){return!!(At||Lt||vs)}function ig(n,e,t,i=!1){const r={},s={};Do(s,oa,1),n.propsDefaults=Object.create(null),nd(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Dh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function rg(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=Ze(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ta(n.emitsOptions,h))continue;const p=e[h];if(l)if(Ke(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=Fn(h);r[_]=pl(l,a,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{nd(n,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ke(e,f)&&((u=Br(f))===f||!Ke(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=pl(l,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ke(e,f))&&(delete s[f],c=!0)}c&&Zn(n,"set","$attrs")}function nd(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Mo(l))continue;const c=e[l];let u;r&&Ke(r,u=Fn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=Ze(t),c=a||mt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=pl(r,l,f,c[f],n,!Ke(c,f))}}return o}function pl(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ke(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Ir(r),i=c[t]=l.call(null,e),$i())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Br(t))&&(i=!0))}return i}function id(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!He(n)){const u=f=>{l=!0;const[h,p]=id(f,e,!0);Wt(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return pt(n)&&i.set(n,Mr),Mr;if(Fe(s))for(let u=0;u<s.length;u++){const f=Fn(s[u]);Pu(f)&&(o[f]=mt)}else if(s)for(const u in s){const f=Fn(u);if(Pu(f)){const h=s[u],p=o[f]=Fe(h)||He(h)?{type:h}:Wt({},h);if(p){const _=Lu(Boolean,p.type),v=Lu(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||Ke(p,"default"))&&a.push(f)}}}const c=[o,a];return pt(n)&&i.set(n,c),c}function Pu(n){return n[0]!=="$"}function Iu(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Du(n,e){return Iu(n)===Iu(e)}function Lu(n,e){return Fe(e)?e.findIndex(t=>Du(t,n)):He(e)&&Du(e,n)?0:-1}const rd=n=>n[0]==="_"||n==="$stable",Ic=n=>Fe(n)?n.map(Cn):[Cn(n)],sg=(n,e,t)=>{if(e._n)return e;const i=Wr((...r)=>Ic(e(...r)),t);return i._c=!1,i},sd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(rd(r))continue;const s=n[r];if(He(s))e[r]=sg(r,s,i);else if(s!=null){const o=Ic(s);e[r]=()=>o}}},od=(n,e)=>{const t=Ic(e);n.slots.default=()=>t},og=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=Ze(e),Do(e,"_",t)):sd(e,n.slots={})}else n.slots={},e&&od(n,e);Do(n.slots,oa,1)},ag=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=mt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Wt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,sd(e,r)),o=e}else e&&(od(n,e),o={default:1});if(s)for(const a in r)!rd(a)&&o[a]==null&&delete r[a]};function ml(n,e,t,i,r=!1){if(Fe(n)){n.forEach((h,p)=>ml(h,e&&(Fe(e)?e[p]:e),t,i,r));return}if(as(i)&&!r)return;const s=i.shapeFlag&4?aa(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===mt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(wt(c)?(u[c]=null,Ke(f,c)&&(f[c]=null)):yt(c)&&(c.value=null)),He(l))_i(l,a,12,[o,u]);else{const h=wt(l),p=yt(l);if(h||p){const _=()=>{if(n.f){const v=h?Ke(f,l)?f[l]:u[l]:l.value;r?Fe(v)&&_c(v,s):Fe(v)?v.includes(s)||v.push(s):h?(u[l]=[s],Ke(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=o,Ke(f,l)&&(f[l]=o)):p&&(l.value=o,n.k&&(u[n.k]=o))};o?(_.id=-1,qt(_,t)):_()}}}const qt=Fm;function lg(n){return cg(n)}function cg(n,e){const t=ol();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Nn,insertStaticContent:_}=n,v=(T,R,L,x=null,Z=null,te=null,ne=!1,Y=null,ce=!!R.dynamicChildren)=>{if(T===R)return;T&&!jr(T,R)&&(x=F(T),Le(T,Z,te,!0),T=null),R.patchFlag===-2&&(ce=!1,R.dynamicChildren=null);const{type:V,ref:S,shapeFlag:g}=R;switch(V){case sa:m(T,R,L,x);break;case yi:d(T,R,L,x);break;case Eo:T==null&&w(R,L,x,ne);break;case Dt:Q(T,R,L,x,Z,te,ne,Y,ce);break;default:g&1?U(T,R,L,x,Z,te,ne,Y,ce):g&6?G(T,R,L,x,Z,te,ne,Y,ce):(g&64||g&128)&&V.process(T,R,L,x,Z,te,ne,Y,ce,ae)}S!=null&&Z&&ml(S,T&&T.ref,te,R||T,!R)},m=(T,R,L,x)=>{if(T==null)i(R.el=a(R.children),L,x);else{const Z=R.el=T.el;R.children!==T.children&&c(Z,R.children)}},d=(T,R,L,x)=>{T==null?i(R.el=l(R.children||""),L,x):R.el=T.el},w=(T,R,L,x)=>{[T.el,T.anchor]=_(T.children,R,L,x,T.el,T.anchor)},A=({el:T,anchor:R},L,x)=>{let Z;for(;T&&T!==R;)Z=h(T),i(T,L,x),T=Z;i(R,L,x)},E=({el:T,anchor:R})=>{let L;for(;T&&T!==R;)L=h(T),r(T),T=L;r(R)},U=(T,R,L,x,Z,te,ne,Y,ce)=>{ne=ne||R.type==="svg",T==null?D(R,L,x,Z,te,ne,Y,ce):b(T,R,Z,te,ne,Y,ce)},D=(T,R,L,x,Z,te,ne,Y)=>{let ce,V;const{type:S,props:g,shapeFlag:I,transition:H,dirs:K}=T;if(ce=T.el=o(T.type,te,g&&g.is,g),I&8?u(ce,T.children):I&16&&N(T.children,ce,null,x,Z,te&&S!=="foreignObject",ne,Y),K&&Ai(T,null,x,"created"),C(ce,T,T.scopeId,ne,x),g){for(const pe in g)pe!=="value"&&!Mo(pe)&&s(ce,pe,null,g[pe],te,T.children,x,Z,_e);"value"in g&&s(ce,"value",null,g.value),(V=g.onVnodeBeforeMount)&&Rn(V,x,T)}K&&Ai(T,null,x,"beforeMount");const W=ug(Z,H);W&&H.beforeEnter(ce),i(ce,R,L),((V=g&&g.onVnodeMounted)||W||K)&&qt(()=>{V&&Rn(V,x,T),W&&H.enter(ce),K&&Ai(T,null,x,"mounted")},Z)},C=(T,R,L,x,Z)=>{if(L&&p(T,L),x)for(let te=0;te<x.length;te++)p(T,x[te]);if(Z){let te=Z.subTree;if(R===te){const ne=Z.vnode;C(T,ne,ne.scopeId,ne.slotScopeIds,Z.parent)}}},N=(T,R,L,x,Z,te,ne,Y,ce=0)=>{for(let V=ce;V<T.length;V++){const S=T[V]=Y?fi(T[V]):Cn(T[V]);v(null,S,R,L,x,Z,te,ne,Y)}},b=(T,R,L,x,Z,te,ne)=>{const Y=R.el=T.el;let{patchFlag:ce,dynamicChildren:V,dirs:S}=R;ce|=T.patchFlag&16;const g=T.props||mt,I=R.props||mt;let H;L&&Ri(L,!1),(H=I.onVnodeBeforeUpdate)&&Rn(H,L,R,T),S&&Ai(R,T,L,"beforeUpdate"),L&&Ri(L,!0);const K=Z&&R.type!=="foreignObject";if(V?y(T.dynamicChildren,V,Y,L,x,K,te):ne||z(T,R,Y,null,L,x,K,te,!1),ce>0){if(ce&16)P(Y,R,g,I,L,x,Z);else if(ce&2&&g.class!==I.class&&s(Y,"class",null,I.class,Z),ce&4&&s(Y,"style",g.style,I.style,Z),ce&8){const W=R.dynamicProps;for(let pe=0;pe<W.length;pe++){const de=W[pe],Ce=g[de],De=I[de];(De!==Ce||de==="value")&&s(Y,de,Ce,De,Z,T.children,L,x,_e)}}ce&1&&T.children!==R.children&&u(Y,R.children)}else!ne&&V==null&&P(Y,R,g,I,L,x,Z);((H=I.onVnodeUpdated)||S)&&qt(()=>{H&&Rn(H,L,R,T),S&&Ai(R,T,L,"updated")},x)},y=(T,R,L,x,Z,te,ne)=>{for(let Y=0;Y<R.length;Y++){const ce=T[Y],V=R[Y],S=ce.el&&(ce.type===Dt||!jr(ce,V)||ce.shapeFlag&70)?f(ce.el):L;v(ce,V,S,null,x,Z,te,ne,!0)}},P=(T,R,L,x,Z,te,ne)=>{if(L!==x){if(L!==mt)for(const Y in L)!Mo(Y)&&!(Y in x)&&s(T,Y,L[Y],null,ne,R.children,Z,te,_e);for(const Y in x){if(Mo(Y))continue;const ce=x[Y],V=L[Y];ce!==V&&Y!=="value"&&s(T,Y,V,ce,ne,R.children,Z,te,_e)}"value"in x&&s(T,"value",L.value,x.value)}},Q=(T,R,L,x,Z,te,ne,Y,ce)=>{const V=R.el=T?T.el:a(""),S=R.anchor=T?T.anchor:a("");let{patchFlag:g,dynamicChildren:I,slotScopeIds:H}=R;H&&(Y=Y?Y.concat(H):H),T==null?(i(V,L,x),i(S,L,x),N(R.children,L,S,Z,te,ne,Y,ce)):g>0&&g&64&&I&&T.dynamicChildren?(y(T.dynamicChildren,I,L,Z,te,ne,Y),(R.key!=null||Z&&R===Z.subTree)&&ad(T,R,!0)):z(T,R,L,S,Z,te,ne,Y,ce)},G=(T,R,L,x,Z,te,ne,Y,ce)=>{R.slotScopeIds=Y,T==null?R.shapeFlag&512?Z.ctx.activate(R,L,x,ne,ce):oe(R,L,x,Z,te,ne,ce):se(T,R,ce)},oe=(T,R,L,x,Z,te,ne)=>{const Y=T.component=vg(T,x,Z);if(Kh(T)&&(Y.ctx.renderer=ae),Mg(Y),Y.asyncDep){if(Z&&Z.registerDep(Y,$),!T.el){const ce=Y.subTree=ft(yi);d(null,ce,R,L)}return}$(Y,T,R,L,Z,te,ne)},se=(T,R,L)=>{const x=R.component=T.component;if(Dm(T,R,L))if(x.asyncDep&&!x.asyncResolved){ee(x,R,L);return}else x.next=R,wm(x.update),x.update();else R.el=T.el,x.vnode=R},$=(T,R,L,x,Z,te,ne)=>{const Y=()=>{if(T.isMounted){let{next:S,bu:g,u:I,parent:H,vnode:K}=T,W=S,pe;Ri(T,!1),S?(S.el=K.el,ee(T,S,ne)):S=K,g&&So(g),(pe=S.props&&S.props.onVnodeBeforeUpdate)&&Rn(pe,H,S,K),Ri(T,!0);const de=Eu(T),Ce=T.subTree;T.subTree=de,v(Ce,de,f(Ce.el),F(Ce),T,Z,te),S.el=de.el,W===null&&Lm(T,de.el),I&&qt(I,Z),(pe=S.props&&S.props.onVnodeUpdated)&&qt(()=>Rn(pe,H,S,K),Z)}else{let S;const{el:g,props:I}=R,{bm:H,m:K,parent:W}=T,pe=as(R);Ri(T,!1),H&&So(H),!pe&&(S=I&&I.onVnodeBeforeMount)&&Rn(S,W,R),Ri(T,!0);{const de=T.subTree=Eu(T);v(null,de,L,x,T,Z,te),R.el=de.el}if(K&&qt(K,Z),!pe&&(S=I&&I.onVnodeMounted)){const de=R;qt(()=>Rn(S,W,de),Z)}(R.shapeFlag&256||W&&as(W.vnode)&&W.vnode.shapeFlag&256)&&T.a&&qt(T.a,Z),T.isMounted=!0,R=L=x=null}},ce=T.effect=new Sc(Y,()=>Rc(V),T.scope),V=T.update=()=>ce.run();V.id=T.uid,Ri(T,!0),V()},ee=(T,R,L)=>{R.component=T;const x=T.vnode.props;T.vnode=R,T.next=null,rg(T,R.props,x,L),ag(T,R.children,L),zr(),yu(T),Hr()},z=(T,R,L,x,Z,te,ne,Y,ce=!1)=>{const V=T&&T.children,S=T?T.shapeFlag:0,g=R.children,{patchFlag:I,shapeFlag:H}=R;if(I>0){if(I&128){Me(V,g,L,x,Z,te,ne,Y,ce);return}else if(I&256){ge(V,g,L,x,Z,te,ne,Y,ce);return}}H&8?(S&16&&_e(V,Z,te),g!==V&&u(L,g)):S&16?H&16?Me(V,g,L,x,Z,te,ne,Y,ce):_e(V,Z,te,!0):(S&8&&u(L,""),H&16&&N(g,L,x,Z,te,ne,Y,ce))},ge=(T,R,L,x,Z,te,ne,Y,ce)=>{T=T||Mr,R=R||Mr;const V=T.length,S=R.length,g=Math.min(V,S);let I;for(I=0;I<g;I++){const H=R[I]=ce?fi(R[I]):Cn(R[I]);v(T[I],H,L,null,Z,te,ne,Y,ce)}V>S?_e(T,Z,te,!0,!1,g):N(R,L,x,Z,te,ne,Y,ce,g)},Me=(T,R,L,x,Z,te,ne,Y,ce)=>{let V=0;const S=R.length;let g=T.length-1,I=S-1;for(;V<=g&&V<=I;){const H=T[V],K=R[V]=ce?fi(R[V]):Cn(R[V]);if(jr(H,K))v(H,K,L,null,Z,te,ne,Y,ce);else break;V++}for(;V<=g&&V<=I;){const H=T[g],K=R[I]=ce?fi(R[I]):Cn(R[I]);if(jr(H,K))v(H,K,L,null,Z,te,ne,Y,ce);else break;g--,I--}if(V>g){if(V<=I){const H=I+1,K=H<S?R[H].el:x;for(;V<=I;)v(null,R[V]=ce?fi(R[V]):Cn(R[V]),L,K,Z,te,ne,Y,ce),V++}}else if(V>I)for(;V<=g;)Le(T[V],Z,te,!0),V++;else{const H=V,K=V,W=new Map;for(V=K;V<=I;V++){const Ie=R[V]=ce?fi(R[V]):Cn(R[V]);Ie.key!=null&&W.set(Ie.key,V)}let pe,de=0;const Ce=I-K+1;let De=!1,fe=0;const be=new Array(Ce);for(V=0;V<Ce;V++)be[V]=0;for(V=H;V<=g;V++){const Ie=T[V];if(de>=Ce){Le(Ie,Z,te,!0);continue}let xe;if(Ie.key!=null)xe=W.get(Ie.key);else for(pe=K;pe<=I;pe++)if(be[pe-K]===0&&jr(Ie,R[pe])){xe=pe;break}xe===void 0?Le(Ie,Z,te,!0):(be[xe-K]=V+1,xe>=fe?fe=xe:De=!0,v(Ie,R[xe],L,null,Z,te,ne,Y,ce),de++)}const Oe=De?fg(be):Mr;for(pe=Oe.length-1,V=Ce-1;V>=0;V--){const Ie=K+V,xe=R[Ie],$e=Ie+1<S?R[Ie+1].el:x;be[V]===0?v(null,xe,L,$e,Z,te,ne,Y,ce):De&&(pe<0||V!==Oe[pe]?Ae(xe,L,$e,2):pe--)}}},Ae=(T,R,L,x,Z=null)=>{const{el:te,type:ne,transition:Y,children:ce,shapeFlag:V}=T;if(V&6){Ae(T.component.subTree,R,L,x);return}if(V&128){T.suspense.move(R,L,x);return}if(V&64){ne.move(T,R,L,ae);return}if(ne===Dt){i(te,R,L);for(let g=0;g<ce.length;g++)Ae(ce[g],R,L,x);i(T.anchor,R,L);return}if(ne===Eo){A(T,R,L);return}if(x!==2&&V&1&&Y)if(x===0)Y.beforeEnter(te),i(te,R,L),qt(()=>Y.enter(te),Z);else{const{leave:g,delayLeave:I,afterLeave:H}=Y,K=()=>i(te,R,L),W=()=>{g(te,()=>{K(),H&&H()})};I?I(te,K,W):W()}else i(te,R,L)},Le=(T,R,L,x=!1,Z=!1)=>{const{type:te,props:ne,ref:Y,children:ce,dynamicChildren:V,shapeFlag:S,patchFlag:g,dirs:I}=T;if(Y!=null&&ml(Y,null,L,T,!0),S&256){R.ctx.deactivate(T);return}const H=S&1&&I,K=!as(T);let W;if(K&&(W=ne&&ne.onVnodeBeforeUnmount)&&Rn(W,R,T),S&6)me(T.component,L,x);else{if(S&128){T.suspense.unmount(L,x);return}H&&Ai(T,null,R,"beforeUnmount"),S&64?T.type.remove(T,R,L,Z,ae,x):V&&(te!==Dt||g>0&&g&64)?_e(V,R,L,!1,!0):(te===Dt&&g&384||!Z&&S&16)&&_e(ce,R,L),x&&je(T)}(K&&(W=ne&&ne.onVnodeUnmounted)||H)&&qt(()=>{W&&Rn(W,R,T),H&&Ai(T,null,R,"unmounted")},L)},je=T=>{const{type:R,el:L,anchor:x,transition:Z}=T;if(R===Dt){ie(L,x);return}if(R===Eo){E(T);return}const te=()=>{r(L),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(T.shapeFlag&1&&Z&&!Z.persisted){const{leave:ne,delayLeave:Y}=Z,ce=()=>ne(L,te);Y?Y(T.el,te,ce):ce()}else te()},ie=(T,R)=>{let L;for(;T!==R;)L=h(T),r(T),T=L;r(R)},me=(T,R,L)=>{const{bum:x,scope:Z,update:te,subTree:ne,um:Y}=T;x&&So(x),Z.stop(),te&&(te.active=!1,Le(ne,T,R,L)),Y&&qt(Y,R),qt(()=>{T.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},_e=(T,R,L,x=!1,Z=!1,te=0)=>{for(let ne=te;ne<T.length;ne++)Le(T[ne],R,L,x,Z)},F=T=>T.shapeFlag&6?F(T.component.subTree):T.shapeFlag&128?T.suspense.next():h(T.anchor||T.el),re=(T,R,L)=>{T==null?R._vnode&&Le(R._vnode,null,null,!0):v(R._vnode||null,T,R,null,null,null,L),yu(),Hh(),R._vnode=T},ae={p:v,um:Le,m:Ae,r:je,mt:oe,mc:N,pc:z,pbc:y,n:F,o:n};return{render:re,hydrate:void 0,createApp:tg(re)}}function Ri({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function ug(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ad(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=fi(r[s]),a.el=o.el),t||ad(o,a)),a.type===sa&&(a.el=o.el)}}function fg(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const hg=n=>n.__isTeleport,Dt=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),yi=Symbol.for("v-cmt"),Eo=Symbol.for("v-stc"),cs=[];let Sn=null;function ke(n=!1){cs.push(Sn=n?null:[])}function dg(){cs.pop(),Sn=cs[cs.length-1]||null}let xs=1;function Uu(n){xs+=n}function ld(n){return n.dynamicChildren=xs>0?Sn||Mr:null,dg(),xs>0&&Sn&&Sn.push(n),n}function it(n,e,t,i,r,s){return ld(Pe(n,e,t,i,r,s,!0))}function Ft(n,e,t,i,r){return ld(ft(n,e,t,i,r,!0))}function ko(n){return n?n.__v_isVNode===!0:!1}function jr(n,e){return n.type===e.type&&n.key===e.key}const oa="__vInternal",cd=({key:n})=>n??null,bo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?wt(n)||yt(n)||He(n)?{i:Lt,r:n,k:e,f:!!t}:n:null);function Pe(n,e=null,t=null,i=0,r=null,s=n===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&cd(e),ref:e&&bo(e),scopeId:na,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Lt};return a?(Dc(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=wt(t)?8:16),xs>0&&!o&&Sn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Sn.push(l),l}const ft=pg;function pg(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===$h)&&(n=yi),ko(n)){const a=Pr(n,e,!0);return t&&Dc(a,t),xs>0&&!s&&Sn&&(a.shapeFlag&6?Sn[Sn.indexOf(n)]=a:Sn.push(a)),a.patchFlag|=-2,a}if(Tg(n)&&(n=n.__vccOpts),e){e=mg(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=qn(a)),pt(l)&&(Uh(l)&&!Fe(l)&&(l=Wt({},l)),e.style=xc(l))}const o=wt(n)?1:Nm(n)?128:hg(n)?64:pt(n)?4:He(n)?2:0;return Pe(n,e,t,i,r,o,s,!0)}function mg(n){return n?Uh(n)||oa in n?Wt({},n):n:null}function Pr(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?fd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&cd(a),ref:e&&e.ref?t&&r?Fe(r)?r.concat(bo(e)):[r,bo(e)]:bo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dt?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Pr(n.ssContent),ssFallback:n.ssFallback&&Pr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function ud(n=" ",e=0){return ft(sa,null,n,e)}function pi(n="",e=!1){return e?(ke(),Ft(yi,null,n)):ft(yi,null,n)}function Cn(n){return n==null||typeof n=="boolean"?ft(yi):Fe(n)?ft(Dt,null,n.slice()):typeof n=="object"?fi(n):ft(sa,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Pr(n)}function Dc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Dc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(oa in e)?e._ctx=Lt:r===3&&Lt&&(Lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else He(e)?(e={default:e,_ctx:Lt},t=32):(e=String(e),i&64?(t=16,e=[ud(e)]):t=8);n.children=e,n.shapeFlag|=t}function fd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=qn([e.class,i.class]));else if(r==="style")e.style=xc([e.style,i.style]);else if(jo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Rn(n,e,t,i=null){En(n,e,7,[t,i])}const gg=td();let _g=0;function vg(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||gg,s={uid:_g++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new xh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:id(i,r),emitsOptions:Gh(i,r),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Cm.bind(null,s),n.ce&&n.ce(s),s}let At=null;const xg=()=>At||Lt;let Lc,nr,Nu="__VUE_INSTANCE_SETTERS__";(nr=ol()[Nu])||(nr=ol()[Nu]=[]),nr.push(n=>At=n),Lc=n=>{nr.length>1?nr.forEach(e=>e(n)):nr[0](n)};const Ir=n=>{Lc(n),n.scope.on()},$i=()=>{At&&At.scope.off(),Lc(null)};function hd(n){return n.vnode.shapeFlag&4}let Ms=!1;function Mg(n,e=!1){Ms=e;const{props:t,children:i}=n.vnode,r=hd(n);ig(n,t,r,e),og(n,i);const s=r?Sg(n,e):void 0;return Ms=!1,s}function Sg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Rs(new Proxy(n.ctx,jm));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Eg(n):null;Ir(n),zr();const s=_i(i,n,0,[n.props,r]);if(Hr(),$i(),dh(s)){if(s.then($i,$i),e)return s.then(o=>{Fu(n,o)}).catch(o=>{ea(o,n,0)});n.asyncDep=s}else Fu(n,s)}else dd(n)}function Fu(n,e,t){He(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=kh(e)),dd(n)}function dd(n,e,t){const i=n.type;n.render||(n.render=i.render||Nn);{Ir(n),zr();try{Ym(n)}finally{Hr(),$i()}}}function yg(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return Qt(n,"get","$attrs"),e[t]}}))}function Eg(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return yg(n)},slots:n.slots,emit:n.emit,expose:e}}function aa(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(kh(Rs(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ls)return ls[t](n)},has(e,t){return t in e||t in ls}}))}function bg(n,e=!0){return He(n)?n.displayName||n.name:n.name||e&&n.__name}function Tg(n){return He(n)&&"__vccOpts"in n}const Nt=(n,e)=>Em(n,e,Ms);function pd(n,e,t){const i=arguments.length;return i===2?pt(e)&&!Fe(e)?ko(e)?ft(n,null,[e]):ft(n,e):ft(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ko(t)&&(t=[t]),ft(n,e,t))}const wg=Symbol.for("v-scx"),Ag=()=>dn(wg),Rg="3.3.11",Cg="http://www.w3.org/2000/svg",ki=typeof document<"u"?document:null,Ou=ki&&ki.createElement("template"),Pg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ki.createElementNS(Cg,n):ki.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ki.createTextNode(n),createComment:n=>ki.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ki.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ou.innerHTML=i?`<svg>${n}</svg>`:n;const a=Ou.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ig=Symbol("_vtc");function Dg(n,e,t){const i=n[Ig];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Uc=Symbol("_vod"),Bo={beforeMount(n,{value:e},{transition:t}){n[Uc]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Yr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Yr(n,!0),i.enter(n)):i.leave(n,()=>{Yr(n,!1)}):Yr(n,e))},beforeUnmount(n,{value:e}){Yr(n,e)}};function Yr(n,e){n.style.display=e?n[Uc]:"none"}function Lg(n,e,t){const i=n.style,r=wt(t);if(t&&!r){if(e&&!wt(e))for(const s in e)t[s]==null&&gl(i,s,"");for(const s in t)gl(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),Uc in n&&(i.display=s)}}const ku=/\s*!important$/;function gl(n,e,t){if(Fe(t))t.forEach(i=>gl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ug(n,e);ku.test(t)?n.setProperty(Br(i),t.replace(ku,""),"important"):n[i]=t}}const Bu=["Webkit","Moz","ms"],Ea={};function Ug(n,e){const t=Ea[e];if(t)return t;let i=Fn(e);if(i!=="filter"&&i in n)return Ea[e]=i;i=Zo(i);for(let r=0;r<Bu.length;r++){const s=Bu[r]+i;if(s in n)return Ea[e]=s}return e}const zu="http://www.w3.org/1999/xlink";function Ng(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(zu,e.slice(6,e.length)):n.setAttributeNS(zu,e,t);else{const s=Xp(e);t==null||s&&!gh(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Fg(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}const a=n.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){n._value=t;const c=a==="OPTION"?n.getAttribute("value"):n.value,u=t??"";c!==u&&(n.value=u),t==null&&n.removeAttribute(e);return}let l=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=gh(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{n[e]=t}catch{}l&&n.removeAttribute(e)}function Bi(n,e,t,i){n.addEventListener(e,t,i)}function Og(n,e,t,i){n.removeEventListener(e,t,i)}const Hu=Symbol("_vei");function kg(n,e,t,i,r=null){const s=n[Hu]||(n[Hu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Bg(e);if(i){const c=s[e]=Vg(i,r);Bi(n,a,c,l)}else o&&(Og(n,a,o,l),s[e]=void 0)}}const Vu=/(?:Once|Passive|Capture)$/;function Bg(n){let e;if(Vu.test(n)){e={};let i;for(;i=n.match(Vu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Br(n.slice(2)),e]}let ba=0;const zg=Promise.resolve(),Hg=()=>ba||(zg.then(()=>ba=0),ba=Date.now());function Vg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(Gg(i,t.value),e,5,[i])};return t.value=n,t.attached=Hg(),t}function Gg(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Gu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Wg=(n,e,t,i,r=!1,s,o,a,l)=>{e==="class"?Dg(n,i,r):e==="style"?Lg(n,t,i):jo(e)?gc(e)||kg(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xg(n,e,i,r))?Fg(n,e,i,s,o,a,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Ng(n,e,i,r))};function Xg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gu(e)&&He(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gu(e)&&wt(t)?!1:e in n}function la(n){const e=xg();if(!e)return;const t=e.ut=(r=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(s=>vl(s,r))},i=()=>{const r=n(e.proxy);_l(e.subTree,r),t(r)};Om(i),ln(()=>{const r=new MutationObserver(i);r.observe(e.subTree.el.parentNode,{childList:!0}),Pc(()=>r.disconnect())})}function _l(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{_l(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)vl(n.el,e);else if(n.type===Dt)n.children.forEach(t=>_l(t,e));else if(n.type===Eo){let{el:t,anchor:i}=n;for(;t&&(vl(t,e),t!==i);)t=t.nextSibling}}function vl(n,e){if(n.nodeType===1){const t=n.style;for(const i in e)t.setProperty(`--${i}`,e[i])}}const zo=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Fe(e)?t=>So(e,t):e};function $g(n){n.target.composing=!0}function Wu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const br=Symbol("_assign"),qg={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[br]=zo(r);const s=i||r.props&&r.props.type==="number";Bi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=sl(a)),n[br](a)}),t&&Bi(n,"change",()=>{n.value=n.value.trim()}),e||(Bi(n,"compositionstart",$g),Bi(n,"compositionend",Wu),Bi(n,"change",Wu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n[br]=zo(s),n.composing)return;const o=r||n.type==="number"?sl(n.value):n.value,a=e??"";o!==a&&(document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===a)||(n.value=a))}},jg={deep:!0,created(n,e,t){n[br]=zo(t),Bi(n,"change",()=>{const i=n._modelValue,r=Yg(n),s=n.checked,o=n[br];if(Fe(i)){const a=_h(i,r),l=a!==-1;if(s&&!l)o(i.concat(r));else if(!s&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Yo(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(md(n,s))})},mounted:Xu,beforeUpdate(n,e,t){n[br]=zo(t),Xu(n,e,t)}};function Xu(n,{value:e,oldValue:t},i){n._modelValue=e,Fe(e)?n.checked=_h(e,i.props.value)>-1:Yo(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=Jo(e,md(n,!0)))}function Yg(n){return"_value"in n?n._value:n.value}function md(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Kg=Wt({patchProp:Wg},Pg);let $u;function Zg(){return $u||($u=lg(Kg))}const Jg=(...n)=>{const e=Zg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Qg(i);if(!r)return;const s=e._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Qg(n){return wt(n)?document.querySelector(n):n}/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let gd;const ca=n=>gd=n,_d=Symbol();function xl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var us;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(us||(us={}));function e_(){const n=Mh(!0),e=n.run(()=>gt({}));let t=[],i=[];const r=Rs({install(s){ca(r),r._a=s,s.provide(_d,r),s.config.globalProperties.$pinia=r,i.forEach(o=>t.push(o)),i=[]},use(s){return this._a?t.push(s):i.push(s),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return r}const vd=()=>{};function qu(n,e,t,i=vd){n.push(e);const r=()=>{const s=n.indexOf(e);s>-1&&(n.splice(s,1),i())};return!t&&Sh()&&jp(r),r}function ir(n,...e){n.slice().forEach(t=>{t(...e)})}const t_=n=>n();function Ml(n,e){n instanceof Map&&e instanceof Map&&e.forEach((t,i)=>n.set(i,t)),n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const i=e[t],r=n[t];xl(r)&&xl(i)&&n.hasOwnProperty(t)&&!yt(i)&&!gi(i)?n[t]=Ml(r,i):n[t]=i}return n}const n_=Symbol();function i_(n){return!xl(n)||!n.hasOwnProperty(n_)}const{assign:ui}=Object;function r_(n){return!!(yt(n)&&n.effect)}function s_(n,e,t,i){const{state:r,actions:s,getters:o}=e,a=t.state.value[n];let l;function c(){a||(t.state.value[n]=r?r():{});const u=xm(t.state.value[n]);return ui(u,s,Object.keys(o||{}).reduce((f,h)=>(f[h]=Rs(Nt(()=>{ca(t);const p=t._s.get(n);return o[h].call(p,p)})),f),{}))}return l=xd(n,c,e,t,i,!0),l}function xd(n,e,t={},i,r,s){let o;const a=ui({actions:{}},t),l={deep:!0};let c,u,f=[],h=[],p;const _=i.state.value[n];!s&&!_&&(i.state.value[n]={}),gt({});let v;function m(N){let b;c=u=!1,typeof N=="function"?(N(i.state.value[n]),b={type:us.patchFunction,storeId:n,events:p}):(Ml(i.state.value[n],N),b={type:us.patchObject,payload:N,storeId:n,events:p});const y=v=Symbol();Ac().then(()=>{v===y&&(c=!0)}),u=!0,ir(f,b,i.state.value[n])}const d=s?function(){const{state:b}=t,y=b?b():{};this.$patch(P=>{ui(P,y)})}:vd;function w(){o.stop(),f=[],h=[],i._s.delete(n)}function A(N,b){return function(){ca(i);const y=Array.from(arguments),P=[],Q=[];function G($){P.push($)}function oe($){Q.push($)}ir(h,{args:y,name:N,store:U,after:G,onError:oe});let se;try{se=b.apply(this&&this.$id===n?this:U,y)}catch($){throw ir(Q,$),$}return se instanceof Promise?se.then($=>(ir(P,$),$)).catch($=>(ir(Q,$),Promise.reject($))):(ir(P,se),se)}}const E={_p:i,$id:n,$onAction:qu.bind(null,h),$patch:m,$reset:d,$subscribe(N,b={}){const y=qu(f,N,b.detached,()=>P()),P=o.run(()=>Er(()=>i.state.value[n],Q=>{(b.flush==="sync"?u:c)&&N({storeId:n,type:us.direct,events:p},Q)},ui({},l,b)));return y},$dispose:w},U=jt(E);i._s.set(n,U);const C=(i._a&&i._a.runWithContext||t_)(()=>i._e.run(()=>(o=Mh()).run(e)));for(const N in C){const b=C[N];if(yt(b)&&!r_(b)||gi(b))s||(_&&i_(b)&&(yt(b)?b.value=_[N]:Ml(b,_[N])),i.state.value[n][N]=b);else if(typeof b=="function"){const y=A(N,b);C[N]=y,a.actions[N]=b}}return ui(U,C),ui(Ze(U),C),Object.defineProperty(U,"$state",{get:()=>i.state.value[n],set:N=>{m(b=>{ui(b,N)})}}),i._p.forEach(N=>{ui(U,o.run(()=>N({store:U,app:i._a,pinia:i,options:a})))}),_&&s&&t.hydrate&&t.hydrate(U.$state,_),c=!0,u=!0,U}function Md(n,e,t){let i,r;const s=typeof e=="function";typeof n=="string"?(i=n,r=s?t:e):(r=n,i=n.id);function o(a,l){const c=ng();return a=a||(c?dn(_d,null):null),a&&ca(a),a=gd,a._s.has(i)||(s?xd(i,e,r,a):s_(i,r,a)),a._s.get(i)}return o.$id=i,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vr=typeof window<"u";function o_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ot=Object.assign;function Ta(n,e){const t={};for(const i in e){const r=e[i];t[i]=Tn(r)?r.map(n):n(r)}return t}const fs=()=>{},Tn=Array.isArray,a_=/\/$/,l_=n=>n.replace(a_,"");function wa(n,e,t="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=n(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=h_(i??e,t),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function c_(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function ju(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function u_(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Dr(e.matched[i],t.matched[r])&&Sd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Dr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Sd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!f_(n[t],e[t]))return!1;return!0}function f_(n,e){return Tn(n)?Yu(n,e):Tn(e)?Yu(e,n):n===e}function Yu(n,e){return Tn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function h_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var Ss;(function(n){n.pop="pop",n.push="push"})(Ss||(Ss={}));var hs;(function(n){n.back="back",n.forward="forward",n.unknown=""})(hs||(hs={}));function d_(n){if(!n)if(vr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),l_(n)}const p_=/^[^#]+#/;function m_(n,e){return n.replace(p_,"#")+e}function g_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const ua=()=>({left:window.pageXOffset,top:window.pageYOffset});function __(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=g_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ku(n,e){return(history.state?history.state.position-e:-1)+n}const Sl=new Map;function v_(n,e){Sl.set(n,e)}function x_(n){const e=Sl.get(n);return Sl.delete(n),e}let M_=()=>location.protocol+"//"+location.host;function yd(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),ju(l,"")}return ju(t,n)+i+r}function S_(n,e,t,i){let r=[],s=[],o=null;const a=({state:h})=>{const p=yd(n,location),_=t.value,v=e.value;let m=0;if(h){if(t.value=p,e.value=h,o&&o===_){o=null;return}m=v?h.position-v.position:0}else i(p);r.forEach(d=>{d(t.value,_,{delta:m,type:Ss.pop,direction:m?m>0?hs.forward:hs.back:hs.unknown})})};function l(){o=t.value}function c(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:ua()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Zu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?ua():null}}function y_(n){const{history:e,location:t}=window,i={value:yd(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:M_()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function o(l,c){const u=ot({},e.state,Zu(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:ua()});s(u.current,u,!0);const f=ot({},Zu(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function E_(n){n=d_(n);const e=y_(n),t=S_(n,e.state,e.location,e.replace);function i(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=ot({location:"",base:n,go:i,createHref:m_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function b_(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),E_(n)}function T_(n){return typeof n=="string"||n&&typeof n=="object"}function Ed(n){return typeof n=="string"||typeof n=="symbol"}const ii={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bd=Symbol("");var Ju;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ju||(Ju={}));function Lr(n,e){return ot(new Error,{type:n,[bd]:!0},e)}function kn(n,e){return n instanceof Error&&bd in n&&(e==null||!!(n.type&e))}const Qu="[^/]+?",w_={sensitive:!1,strict:!1,start:!0,end:!0},A_=/[.+*?^${}()[\]/\\]/g;function R_(n,e){const t=ot({},w_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(A_,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:v,optional:m,regexp:d}=h;s.push({name:_,repeatable:v,optional:m});const w=d||Qu;if(w!==Qu){p+=10;try{new RegExp(`(${w})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${_}" (${w}): `+E.message)}}let A=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),r+=A,p+=20,m&&(p+=-8),v&&(p+=-20),w===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=s[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:v,optional:m}=p,d=_ in c?c[_]:"";if(Tn(d)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const w=Tn(d)?d.join("/"):d;if(!w)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function C_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function P_(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=C_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(ef(i))return 1;if(ef(r))return-1}return r.length-i.length}function ef(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const I_={type:0,value:""},D_=/[a-zA-Z0-9_]/;function L_(n){if(!n)return[[]];if(n==="/")return[[I_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,i=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:D_.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function U_(n,e,t){const i=R_(L_(n.path),t),r=ot(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function N_(n,e){const t=[],i=new Map;e=rf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const p=!h,_=F_(u);_.aliasOf=h&&h.record;const v=rf(e,u),m=[_];if("alias"in u){const A=typeof u.alias=="string"?[u.alias]:u.alias;for(const E of A)m.push(ot({},_,{components:h?h.record.components:_.components,path:E,aliasOf:h?h.record:_}))}let d,w;for(const A of m){const{path:E}=A;if(f&&E[0]!=="/"){const U=f.record.path,D=U[U.length-1]==="/"?"":"/";A.path=f.record.path+(E&&D+E)}if(d=U_(A,f,v),h?h.alias.push(d):(w=w||d,w!==d&&w.alias.push(d),p&&u.name&&!nf(d)&&o(u.name)),_.children){const U=_.children;for(let D=0;D<U.length;D++)s(U[D],d,h&&h.children[D])}h=h||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return w?()=>{o(w)}:fs}function o(u){if(Ed(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let f=0;for(;f<t.length&&P_(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Td(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!nf(u)&&i.set(u.record.name,u)}function c(u,f){let h,p={},_,v;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw Lr(1,{location:u});v=h.record.name,p=ot(tf(f.params,h.keys.filter(w=>!w.optional).map(w=>w.name)),u.params&&tf(u.params,h.keys.map(w=>w.name))),_=h.stringify(p)}else if("path"in u)_=u.path,h=t.find(w=>w.re.test(_)),h&&(p=h.parse(_),v=h.record.name);else{if(h=f.name?i.get(f.name):t.find(w=>w.re.test(f.path)),!h)throw Lr(1,{location:u,currentLocation:f});v=h.record.name,p=ot({},f.params,u.params),_=h.stringify(p)}const m=[];let d=h;for(;d;)m.unshift(d.record),d=d.parent;return{name:v,path:_,params:p,matched:m,meta:k_(m)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function tf(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function F_(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:O_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function O_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function nf(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function k_(n){return n.reduce((e,t)=>ot(e,t.meta),{})}function rf(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Td(n,e){return e.children.some(t=>t===n||Td(n,t))}const wd=/#/g,B_=/&/g,z_=/\//g,H_=/=/g,V_=/\?/g,Ad=/\+/g,G_=/%5B/g,W_=/%5D/g,Rd=/%5E/g,X_=/%60/g,Cd=/%7B/g,$_=/%7C/g,Pd=/%7D/g,q_=/%20/g;function Nc(n){return encodeURI(""+n).replace($_,"|").replace(G_,"[").replace(W_,"]")}function j_(n){return Nc(n).replace(Cd,"{").replace(Pd,"}").replace(Rd,"^")}function yl(n){return Nc(n).replace(Ad,"%2B").replace(q_,"+").replace(wd,"%23").replace(B_,"%26").replace(X_,"`").replace(Cd,"{").replace(Pd,"}").replace(Rd,"^")}function Y_(n){return yl(n).replace(H_,"%3D")}function K_(n){return Nc(n).replace(wd,"%23").replace(V_,"%3F")}function Z_(n){return n==null?"":K_(n).replace(z_,"%2F")}function Ho(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function J_(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Ad," "),o=s.indexOf("="),a=Ho(o<0?s:s.slice(0,o)),l=o<0?null:Ho(s.slice(o+1));if(a in e){let c=e[a];Tn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function sf(n){let e="";for(let t in n){const i=n[t];if(t=Y_(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Tn(i)?i.map(s=>s&&yl(s)):[i&&yl(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Q_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Tn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const ev=Symbol(""),of=Symbol(""),fa=Symbol(""),Fc=Symbol(""),El=Symbol("");function Kr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function hi(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=f=>{f===!1?a(Lr(4,{from:t,to:e})):f instanceof Error?a(f):T_(f)?a(Lr(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),o())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>a(f))})}function Aa(n,e,t,i){const r=[];for(const s of n)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(tv(a)){const c=(a.__vccOpts||a)[e];c&&r.push(hi(c,t,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=o_(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&hi(h,t,i,s,o)()}))}}return r}function tv(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function af(n){const e=dn(fa),t=dn(Fc),i=Nt(()=>e.resolve(ct(n.to))),r=Nt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Dr.bind(null,u));if(h>-1)return h;const p=lf(l[c-2]);return c>1&&lf(u)===p&&f[f.length-1].path!==p?f.findIndex(Dr.bind(null,l[c-2])):h}),s=Nt(()=>r.value>-1&&sv(t.params,i.value.params)),o=Nt(()=>r.value>-1&&r.value===t.matched.length-1&&Sd(t.params,i.value.params));function a(l={}){return rv(l)?e[ct(n.replace)?"replace":"push"](ct(n.to)).catch(fs):Promise.resolve()}return{route:i,href:Nt(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const nv=_t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:af,setup(n,{slots:e}){const t=jt(af(n)),{options:i}=dn(fa),r=Nt(()=>({[cf(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[cf(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:pd("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),iv=nv;function rv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function sv(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Tn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function lf(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const cf=(n,e,t)=>n??e??t,ov=_t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=dn(El),r=Nt(()=>n.route||i.value),s=dn(of,0),o=Nt(()=>{let c=ct(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Nt(()=>r.value.matched[o.value]);yo(of,Nt(()=>o.value+1)),yo(ev,a),yo(El,r);const l=gt();return Er(()=>[l.value,a.value,n.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Dr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=a.value,h=f&&f.components[u];if(!h)return uf(t.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=pd(h,ot({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return uf(t.default,{Component:m,route:c})||m}}});function uf(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const ha=ov;function av(n){const e=N_(n.routes,n),t=n.parseQuery||J_,i=n.stringifyQuery||sf,r=n.history,s=Kr(),o=Kr(),a=Kr(),l=gm(ii);let c=ii;vr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ta.bind(null,F=>""+F),f=Ta.bind(null,Z_),h=Ta.bind(null,Ho);function p(F,re){let ae,ue;return Ed(F)?(ae=e.getRecordMatcher(F),ue=re):ue=F,e.addRoute(ue,ae)}function _(F){const re=e.getRecordMatcher(F);re&&e.removeRoute(re)}function v(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function d(F,re){if(re=ot({},re||l.value),typeof F=="string"){const x=wa(t,F,re.path),Z=e.resolve({path:x.path},re),te=r.createHref(x.fullPath);return ot(x,Z,{params:h(Z.params),hash:Ho(x.hash),redirectedFrom:void 0,href:te})}let ae;if("path"in F)ae=ot({},F,{path:wa(t,F.path,re.path).path});else{const x=ot({},F.params);for(const Z in x)x[Z]==null&&delete x[Z];ae=ot({},F,{params:f(x)}),re.params=f(re.params)}const ue=e.resolve(ae,re),T=F.hash||"";ue.params=u(h(ue.params));const R=c_(i,ot({},F,{hash:j_(T),path:ue.path})),L=r.createHref(R);return ot({fullPath:R,hash:T,query:i===sf?Q_(F.query):F.query||{}},ue,{redirectedFrom:void 0,href:L})}function w(F){return typeof F=="string"?wa(t,F,l.value.path):ot({},F)}function A(F,re){if(c!==F)return Lr(8,{from:re,to:F})}function E(F){return C(F)}function U(F){return E(ot(w(F),{replace:!0}))}function D(F){const re=F.matched[F.matched.length-1];if(re&&re.redirect){const{redirect:ae}=re;let ue=typeof ae=="function"?ae(F):ae;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=w(ue):{path:ue},ue.params={}),ot({query:F.query,hash:F.hash,params:"path"in ue?{}:F.params},ue)}}function C(F,re){const ae=c=d(F),ue=l.value,T=F.state,R=F.force,L=F.replace===!0,x=D(ae);if(x)return C(ot(w(x),{state:typeof x=="object"?ot({},T,x.state):T,force:R,replace:L}),re||ae);const Z=ae;Z.redirectedFrom=re;let te;return!R&&u_(i,ue,ae)&&(te=Lr(16,{to:Z,from:ue}),Ae(ue,ue,!0,!1)),(te?Promise.resolve(te):y(Z,ue)).catch(ne=>kn(ne)?kn(ne,2)?ne:Me(ne):z(ne,Z,ue)).then(ne=>{if(ne){if(kn(ne,2))return C(ot({replace:L},w(ne.to),{state:typeof ne.to=="object"?ot({},T,ne.to.state):T,force:R}),re||Z)}else ne=Q(Z,ue,!0,L,T);return P(Z,ue,ne),ne})}function N(F,re){const ae=A(F,re);return ae?Promise.reject(ae):Promise.resolve()}function b(F){const re=ie.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(F):F()}function y(F,re){let ae;const[ue,T,R]=lv(F,re);ae=Aa(ue.reverse(),"beforeRouteLeave",F,re);for(const x of ue)x.leaveGuards.forEach(Z=>{ae.push(hi(Z,F,re))});const L=N.bind(null,F,re);return ae.push(L),_e(ae).then(()=>{ae=[];for(const x of s.list())ae.push(hi(x,F,re));return ae.push(L),_e(ae)}).then(()=>{ae=Aa(T,"beforeRouteUpdate",F,re);for(const x of T)x.updateGuards.forEach(Z=>{ae.push(hi(Z,F,re))});return ae.push(L),_e(ae)}).then(()=>{ae=[];for(const x of R)if(x.beforeEnter)if(Tn(x.beforeEnter))for(const Z of x.beforeEnter)ae.push(hi(Z,F,re));else ae.push(hi(x.beforeEnter,F,re));return ae.push(L),_e(ae)}).then(()=>(F.matched.forEach(x=>x.enterCallbacks={}),ae=Aa(R,"beforeRouteEnter",F,re),ae.push(L),_e(ae))).then(()=>{ae=[];for(const x of o.list())ae.push(hi(x,F,re));return ae.push(L),_e(ae)}).catch(x=>kn(x,8)?x:Promise.reject(x))}function P(F,re,ae){a.list().forEach(ue=>b(()=>ue(F,re,ae)))}function Q(F,re,ae,ue,T){const R=A(F,re);if(R)return R;const L=re===ii,x=vr?history.state:{};ae&&(ue||L?r.replace(F.fullPath,ot({scroll:L&&x&&x.scroll},T)):r.push(F.fullPath,T)),l.value=F,Ae(F,re,ae,L),Me()}let G;function oe(){G||(G=r.listen((F,re,ae)=>{if(!me.listening)return;const ue=d(F),T=D(ue);if(T){C(ot(T,{replace:!0}),ue).catch(fs);return}c=ue;const R=l.value;vr&&v_(Ku(R.fullPath,ae.delta),ua()),y(ue,R).catch(L=>kn(L,12)?L:kn(L,2)?(C(L.to,ue).then(x=>{kn(x,20)&&!ae.delta&&ae.type===Ss.pop&&r.go(-1,!1)}).catch(fs),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),z(L,ue,R))).then(L=>{L=L||Q(ue,R,!1),L&&(ae.delta&&!kn(L,8)?r.go(-ae.delta,!1):ae.type===Ss.pop&&kn(L,20)&&r.go(-1,!1)),P(ue,R,L)}).catch(fs)}))}let se=Kr(),$=Kr(),ee;function z(F,re,ae){Me(F);const ue=$.list();return ue.length?ue.forEach(T=>T(F,re,ae)):console.error(F),Promise.reject(F)}function ge(){return ee&&l.value!==ii?Promise.resolve():new Promise((F,re)=>{se.add([F,re])})}function Me(F){return ee||(ee=!F,oe(),se.list().forEach(([re,ae])=>F?ae(F):re()),se.reset()),F}function Ae(F,re,ae,ue){const{scrollBehavior:T}=n;if(!vr||!T)return Promise.resolve();const R=!ae&&x_(Ku(F.fullPath,0))||(ue||!ae)&&history.state&&history.state.scroll||null;return Ac().then(()=>T(F,re,R)).then(L=>L&&__(L)).catch(L=>z(L,F,re))}const Le=F=>r.go(F);let je;const ie=new Set,me={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,hasRoute:m,getRoutes:v,resolve:d,options:n,push:E,replace:U,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:ge,install(F){const re=this;F.component("RouterLink",iv),F.component("RouterView",ha),F.config.globalProperties.$router=re,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(l)}),vr&&!je&&l.value===ii&&(je=!0,E(r.location).catch(T=>{}));const ae={};for(const T in ii)Object.defineProperty(ae,T,{get:()=>l.value[T],enumerable:!0});F.provide(fa,re),F.provide(Fc,Dh(ae)),F.provide(El,l);const ue=F.unmount;ie.add(F),F.unmount=function(){ie.delete(F),ie.size<1&&(c=ii,G&&G(),G=null,l.value=ii,je=!1,ee=!1),ue()}}};function _e(F){return F.reduce((re,ae)=>re.then(()=>b(ae)),Promise.resolve())}return me}function lv(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(n.matched.find(c=>Dr(c,a))?i.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(c=>Dr(c,l))||r.push(l))}return[t,i,r]}function cv(){return dn(fa)}function Oc(){return dn(Fc)}const uv={class:"ball-container"},fv=_t({__name:"BallTrack",props:{x:{},y:{},size:{}},setup(n){la(t=>({d4cb3e84:e.y,d4cb3e86:e.x,"781edd9c":e.size}));const e=n;return(t,i)=>(ke(),it("div",uv))}}),Pt=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},hv=Pt(fv,[["__scopeId","data-v-65a6daa7"]]);class dv{constructor(e,t){at(this,"setAndReturn",e=>{const t=JSON.stringify(e);return localStorage.setItem(this.key,t),e});at(this,"read",()=>{const e=localStorage.getItem(this.key);return e?JSON.parse(e):this.setAndReturn(this._default)});at(this,"clear",()=>{localStorage.removeItem(this.key),this.setAndReturn(this._default)});this._default=e,this.key=t}}const Zr=new dv({dark:!0,swing:!0,trackBall:!0,opacity:40},"config"),Cs=Md("estado global",()=>{const n=jt(Zr.read()),e=()=>{const o=jt({isMobileSize:!1});return{status:o,metod:{handleMobileSize:()=>{o.isMobileSize=window.innerWidth<768}}}},t=()=>{const o=jt({show:n.trackBall,size:"28px",x:"0px",y:"-50px"});return{status:o,metod:{trackBall:c=>{const u=o,f=parseFloat(u.size);u.x=`${c.clientX-f/2}px`,u.y=`${c.clientY-f/2}px`},show:c=>{o.show=c,n.trackBall=c,Zr.setAndReturn(n)}}}},i=()=>{const o=jt({dark:n.dark});return{status:o,metod:{darkMode:l=>{o.dark=l,n.dark=l,Zr.setAndReturn(n)}}}},r=()=>{const o=jt({swing:n.swing});return{status:o,metod:{swingMode:l=>{o.swing=l,n.swing=l,Zr.setAndReturn(n)}}}},s=()=>{const o=jt({opacity:n.opacity});return{status:o,metod:{setOpacity:l=>{o.opacity=l,n.opacity=l,Zr.setAndReturn(n)}}}};return{trackBall:t(),darkMode:i(),swing:r(),opacity:s(),mobile:e()}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kc="176",pv=0,ff=1,mv=2,Id=1,gv=2,Wn=3,Ei=0,Kt=1,$n=2,vi=0,Tr=1,ys=2,hf=3,df=4,_v=5,zi=100,vv=101,xv=102,Mv=103,Sv=104,yv=200,Ev=201,bv=202,Tv=203,bl=204,Tl=205,wv=206,Av=207,Rv=208,Cv=209,Pv=210,Iv=211,Dv=212,Lv=213,Uv=214,wl=0,Al=1,Rl=2,Ur=3,Cl=4,Pl=5,Il=6,Dl=7,Dd=0,Nv=1,Fv=2,xi=0,Ov=1,kv=2,Bv=3,zv=4,Hv=5,Vv=6,Gv=7,Ld=300,Nr=301,Fr=302,Ll=303,Ul=304,da=306,Nl=1e3,Gi=1001,Fl=1002,bn=1003,Wv=1004,qs=1005,Dn=1006,Ra=1007,Wi=1008,Qn=1009,Ud=1010,Nd=1011,Es=1012,Bc=1013,Yi=1014,jn=1015,Ps=1016,zc=1017,Hc=1018,bs=1020,Fd=35902,Od=1021,kd=1022,yn=1023,Ts=1026,ws=1027,Bd=1028,Vc=1029,zd=1030,Gc=1031,Wc=1033,To=33776,wo=33777,Ao=33778,Ro=33779,Ol=35840,kl=35841,Bl=35842,zl=35843,Hl=36196,Vl=37492,Gl=37496,Wl=37808,Xl=37809,$l=37810,ql=37811,jl=37812,Yl=37813,Kl=37814,Zl=37815,Jl=37816,Ql=37817,ec=37818,tc=37819,nc=37820,ic=37821,Co=36492,rc=36494,sc=36495,Hd=36283,oc=36284,ac=36285,lc=36286,Xv=3200,$v=3201,qv=0,jv=1,di="",hn="srgb",Or="srgb-linear",Vo="linear",lt="srgb",rr=7680,pf=519,Yv=512,Kv=513,Zv=514,Vd=515,Jv=516,Qv=517,ex=518,tx=519,mf=35044,gf="300 es",Yn=2e3,Go=2001;class Xr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ca=Math.PI/180,cc=180/Math.PI;function Is(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function nx(n,e){return(n%e+e)%e}function Pa(n,e,t){return(1-t)*n+t*e}function Jr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ht{constructor(e=0,t=0){ht.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],d=r[6],w=r[1],A=r[4],E=r[7],U=r[2],D=r[5],C=r[8];return s[0]=o*v+a*w+l*U,s[3]=o*m+a*A+l*D,s[6]=o*d+a*E+l*C,s[1]=c*v+u*w+f*U,s[4]=c*m+u*A+f*D,s[7]=c*d+u*E+f*C,s[2]=h*v+p*w+_*U,s[5]=h*m+p*A+_*D,s[8]=h*d+p*E+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ia.makeScale(e,t)),this}rotate(e){return this.premultiply(Ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new Ge;function Gd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ix(){const n=Wo("canvas");return n.style.display="block",n}const _f={};function Po(n){n in _f||(_f[n]=!0,console.warn(n))}function rx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function sx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ox(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vf=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xf=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ax(){const n={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?Vo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Or]:{primaries:e,whitePoint:i,transfer:Vo,toXYZ:vf,fromXYZ:xf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:vf,fromXYZ:xf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),n}const Qe=ax();function Jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sr;class lx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{sr===void 0&&(sr=Wo("canvas")),sr.width=e.width,sr.height=e.height;const r=sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=sr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Jn(t[i]/255)*255):t[i]=Jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cx=0;class Xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Da(r[o].image)):s.push(Da(r[o]))}else s=Da(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Da(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?lx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ux=0;class Zt extends Xr{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,i=Gi,r=Gi,s=Dn,o=Wi,a=yn,l=Qn,c=Zt.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Is(),this.name="",this.source=new Xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nl:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case Fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nl:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case Fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Ld;Zt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,E=(p+1)/2,U=(d+1)/2,D=(u+h)/4,C=(f+v)/4,N=(_+m)/4;return A>E&&A>U?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=D/i,s=C/i):E>U?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=D/r,s=N/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=N/s),this.set(i,r,s,t),this}let w=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-v)/w,this.z=(h-u)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fx extends Xr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const s=new Zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Xc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends fx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Wd extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hx extends Zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ds{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],_=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==_){let m=1-a;const d=l*h+c*p+u*_+f*v,w=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const U=Math.sqrt(A),D=Math.atan2(U,d*w);m=Math.sin(m*D)/U,a=Math.sin(a*D)/U}const E=a*w;if(l=l*m+h*E,c=c*m+p*E,u=u*m+_*E,f=f*m+v*E,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=U,c*=U,u*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*h,e[t+1]=l*_+u*h+c*f-a*p,e[t+2]=c*_+u*p+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new j,Mf=new Ds;class Ls{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),Ys.subVectors(this.max,Qr),or.subVectors(e.a,Qr),ar.subVectors(e.b,Qr),lr.subVectors(e.c,Qr),ri.subVectors(ar,or),si.subVectors(lr,ar),Ci.subVectors(or,lr);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ci.z,Ci.y,ri.z,0,-ri.x,si.z,0,-si.x,Ci.z,0,-Ci.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ci.y,Ci.x,0];return!Ua(t,or,ar,lr,Ys)||(t=[1,0,0,0,1,0,0,0,1],!Ua(t,or,ar,lr,Ys))?!1:(Ks.crossVectors(ri,si),t=[Ks.x,Ks.y,Ks.z],Ua(t,or,ar,lr,Ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new j,new j,new j,new j,new j,new j,new j,new j],gn=new j,js=new Ls,or=new j,ar=new j,lr=new j,ri=new j,si=new j,Ci=new j,Qr=new j,Ys=new j,Ks=new j,Pi=new j;function Ua(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Pi.fromArray(n,s);const a=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dx=new Ls,es=new j,Na=new j;class pa{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):dx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(es,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Na)),this.expandByPoint(es.copy(e.center).sub(Na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new j,Fa=new j,Zs=new j,oi=new j,Oa=new j,Js=new j,ka=new j;class Xd{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Fa.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Fa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Zs),a=oi.dot(this.direction),l=-oi.dot(Zs),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const v=1/u;f*=v,h*=v,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fa).addScaledVector(Zs,h),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),r=zn.dot(zn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,r,s){Oa.subVectors(t,e),Js.subVectors(i,e),ka.crossVectors(Oa,Js);let o=this.direction.dot(ka),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Js.crossVectors(oi,Js));if(l<0)return null;const c=a*this.direction.dot(Oa.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(ka);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m)}set(e,t,i,r,s,o,a,l,c,u,f,h,p,_,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h+v*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,_=a*u,v=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,p=o*c,_=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,i){const r=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ai.crossVectors(i,tn),ai.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ai.crossVectors(i,tn)),ai.normalize(),Qs.crossVectors(tn,ai),r[0]=ai.x,r[4]=Qs.x,r[8]=tn.x,r[1]=ai.y,r[5]=Qs.y,r[9]=tn.y,r[2]=ai.z,r[6]=Qs.z,r[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],d=i[14],w=i[3],A=i[7],E=i[11],U=i[15],D=r[0],C=r[4],N=r[8],b=r[12],y=r[1],P=r[5],Q=r[9],G=r[13],oe=r[2],se=r[6],$=r[10],ee=r[14],z=r[3],ge=r[7],Me=r[11],Ae=r[15];return s[0]=o*D+a*y+l*oe+c*z,s[4]=o*C+a*P+l*se+c*ge,s[8]=o*N+a*Q+l*$+c*Me,s[12]=o*b+a*G+l*ee+c*Ae,s[1]=u*D+f*y+h*oe+p*z,s[5]=u*C+f*P+h*se+p*ge,s[9]=u*N+f*Q+h*$+p*Me,s[13]=u*b+f*G+h*ee+p*Ae,s[2]=_*D+v*y+m*oe+d*z,s[6]=_*C+v*P+m*se+d*ge,s[10]=_*N+v*Q+m*$+d*Me,s[14]=_*b+v*G+m*ee+d*Ae,s[3]=w*D+A*y+E*oe+U*z,s[7]=w*C+A*P+E*se+U*ge,s[11]=w*N+A*Q+E*$+U*Me,s[15]=w*b+A*G+E*ee+U*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+t*l*p-t*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*f+t*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],d=e[15],w=f*m*c-v*h*c+v*l*p-a*m*p-f*l*d+a*h*d,A=_*h*c-u*m*c-_*l*p+o*m*p+u*l*d-o*h*d,E=u*v*c-_*f*c+_*a*p-o*v*p-u*a*d+o*f*d,U=_*f*l-u*v*l-_*a*h+o*v*h+u*a*m-o*f*m,D=t*w+i*A+r*E+s*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return e[0]=w*C,e[1]=(v*h*s-f*m*s-v*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*d+i*l*d)*C,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*C,e[4]=A*C,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*d+t*h*d)*C,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*d-t*l*d)*C,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*p+t*l*p)*C,e[8]=E*C,e[9]=(_*f*s-u*v*s-_*i*p+t*v*p+u*i*d-t*f*d)*C,e[10]=(o*v*s-_*a*s+_*i*c-t*v*c-o*i*d+t*a*d)*C,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*C,e[12]=U*C,e[13]=(u*v*r-_*f*r+_*i*h-t*v*h-u*i*m+t*f*m)*C,e[14]=(_*a*r-o*v*r-_*i*l+t*v*l+o*i*m-t*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,_=s*f,v=o*u,m=o*f,d=a*f,w=l*c,A=l*u,E=l*f,U=i.x,D=i.y,C=i.z;return r[0]=(1-(v+d))*U,r[1]=(p+E)*U,r[2]=(_-A)*U,r[3]=0,r[4]=(p-E)*D,r[5]=(1-(h+d))*D,r[6]=(m+w)*D,r[7]=0,r[8]=(_+A)*C,r[9]=(m-w)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=cr.set(r[0],r[1],r[2]).length();const o=cr.set(r[4],r[5],r[6]).length(),a=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const c=1/s,u=1/o,f=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Yn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(a===Yn)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Go)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Yn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),h=(t+e)*c,p=(i+r)*u;let _,v;if(a===Yn)_=(o+s)*f,v=-2*f;else if(a===Go)_=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cr=new j,_n=new Et,px=new j(0,0,0),mx=new j(1,1,1),ai=new j,Qs=new j,tn=new j,Sf=new Et,yf=new Ds;class ei{constructor(e=0,t=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yf.setFromEuler(this),this.setFromQuaternion(yf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class $d{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gx=0;const Ef=new j,ur=new Ds,Hn=new Et,eo=new j,ts=new j,_x=new j,vx=new Ds,bf=new j(1,0,0),Tf=new j(0,1,0),wf=new j(0,0,1),Af={type:"added"},xx={type:"removed"},fr={type:"childadded",child:null},Ba={type:"childremoved",child:null};class Jt extends Xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new j,t=new ei,i=new Ds,r=new j(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ge}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $d,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(bf,e)}rotateY(e){return this.rotateOnAxis(Tf,e)}rotateZ(e){return this.rotateOnAxis(wf,e)}translateOnAxis(e,t){return Ef.copy(e).applyQuaternion(this.quaternion),this.position.add(Ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bf,e)}translateY(e){return this.translateOnAxis(Tf,e)}translateZ(e){return this.translateOnAxis(wf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eo.copy(e):eo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ts,eo,this.up):Hn.lookAt(eo,ts,this.up),this.quaternion.setFromRotationMatrix(Hn),r&&(Hn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Hn),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Af),fr.child=e,this.dispatchEvent(fr),fr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xx),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Af),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,_x),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new j(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new j,Vn=new j,za=new j,Gn=new j,hr=new j,dr=new j,Rf=new j,Ha=new j,Va=new j,Ga=new j,Wa=new St,Xa=new St,$a=new St;class Mn{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Vn.subVectors(i,t),za.subVectors(e,t);const o=vn.dot(vn),a=vn.dot(Vn),l=vn.dot(za),c=Vn.dot(Vn),u=Vn.dot(za),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Wa.setScalar(0),Xa.setScalar(0),$a.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,i),$a.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Wa,s.x),o.addScaledVector(Xa,s.y),o.addScaledVector($a,s.z),o}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Vn.subVectors(e,t),vn.cross(Vn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Mn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;hr.subVectors(r,i),dr.subVectors(s,i),Ha.subVectors(e,i);const l=hr.dot(Ha),c=dr.dot(Ha);if(l<=0&&c<=0)return t.copy(i);Va.subVectors(e,r);const u=hr.dot(Va),f=dr.dot(Va);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hr,o);Ga.subVectors(e,s);const p=hr.dot(Ga),_=dr.dot(Ga);if(_>=0&&p<=_)return t.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(dr,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Rf.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(Rf,a);const d=1/(m+v+h);return o=v*d,a=h*d,t.copy(i).addScaledVector(hr,o).addScaledVector(dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},to={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=nx(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=qa(o,s,e+1/3),this.g=qa(o,s,e),this.b=qa(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const i=qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Qe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(qe(Bt.r*255,0,255))*65536+Math.round(qe(Bt.g*255,0,255))*256+Math.round(qe(Bt.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=hn){Qe.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(to);const i=Pa(li.h,to.h,t),r=Pa(li.s,to.s,t),s=Pa(li.l,to.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new et;et.NAMES=qd;let Mx=0;class Us extends Xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Tr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=Tl,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bl&&(i.blendSrc=this.blendSrc),this.blendDst!==Tl&&(i.blendDst=this.blendDst),this.blendEquation!==zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class jd extends Us{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new j,no=new ht;let Sx=0;class an{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=mf,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Jr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mf&&(e.usage=this.usage),e}}class Yd extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Kd extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qi extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}}let yx=0;const fn=new Et,ja=new Jt,pr=new j,nn=new Ls,ns=new Ls,It=new j;class An extends Xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?Kd:Yd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,i){return fn.makeTranslation(e,t,i),this.applyMatrix4(fn),this}scale(e,t,i){return fn.makeScale(e,t,i),this.applyMatrix4(fn),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qi(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];nn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(nn.min,ns.min),nn.expandByPoint(It),It.addVectors(nn.max,ns.max),nn.expandByPoint(It)):(nn.expandByPoint(ns.min),nn.expandByPoint(ns.max))}nn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(pr.fromBufferAttribute(e,c),It.add(pr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new j,l[N]=new j;const c=new j,u=new j,f=new j,h=new ht,p=new ht,_=new ht,v=new j,m=new j;function d(N,b,y){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,y),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,b),_.fromBufferAttribute(s,y),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(P),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[N].add(v),a[b].add(v),a[y].add(v),l[N].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,b=w.length;N<b;++N){const y=w[N],P=y.start,Q=y.count;for(let G=P,oe=P+Q;G<oe;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new j,E=new j,U=new j,D=new j;function C(N){U.fromBufferAttribute(r,N),D.copy(U);const b=a[N];A.copy(b),A.sub(U.multiplyScalar(U.dot(b))).normalize(),E.crossVectors(D,b);const P=E.dot(l[N])<0?-1:1;o.setXYZW(N,A.x,A.y,A.z,P)}for(let N=0,b=w.length;N<b;++N){const y=w[N],P=y.start,Q=y.count;for(let G=P,oe=P+Q;G<oe;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,c=new j,u=new j,f=new j;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new an(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new An,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cf=new Et,Ii=new Xd,io=new pa,Pf=new j,ro=new j,so=new j,oo=new j,Ya=new j,ao=new j,If=new j,lo=new j;class Kn extends Jt{constructor(e=new An,t=new jd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ya.fromBufferAttribute(f,e),o?ao.addScaledVector(Ya,u):ao.addScaledVector(Ya.sub(t),u))}t.add(ao)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),Ii.copy(e.ray).recast(e.near),!(io.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(io,Pf)===null||Ii.origin.distanceToSquared(Pf)>(e.far-e.near)**2))&&(Cf.copy(s).invert(),Ii.copy(e.ray).applyMatrix4(Cf),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,U=A;E<U;E+=3){const D=a.getX(E),C=a.getX(E+1),N=a.getX(E+2);r=co(this,d,e,i,c,u,f,D,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const w=a.getX(m),A=a.getX(m+1),E=a.getX(m+2);r=co(this,o,e,i,c,u,f,w,A,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=h.length;_<v;_++){const m=h[_],d=o[m.materialIndex],w=Math.max(m.start,p.start),A=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,U=A;E<U;E+=3){const D=E,C=E+1,N=E+2;r=co(this,d,e,i,c,u,f,D,C,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,d=v;m<d;m+=3){const w=m,A=m+1,E=m+2;r=co(this,o,e,i,c,u,f,w,A,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ex(n,e,t,i,r,s,o,a){let l;if(e.side===Kt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ei,a),l===null)return null;lo.copy(a),lo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ro),n.getVertexPosition(l,so),n.getVertexPosition(c,oo);const u=Ex(n,e,t,i,ro,so,oo,If);if(u){const f=new j;Mn.getBarycoord(If,ro,so,oo,f),r&&(u.uv=Mn.getInterpolatedAttribute(r,a,l,c,f,new ht)),s&&(u.uv1=Mn.getInterpolatedAttribute(s,a,l,c,f,new ht)),o&&(u.normal=Mn.getInterpolatedAttribute(o,a,l,c,f,new j),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new j,materialIndex:0};Mn.getNormal(ro,so,oo,h.normal),u.face=h,u.barycoord=f}return u}class Ns extends An{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qi(c,3)),this.setAttribute("normal",new qi(u,3)),this.setAttribute("uv",new qi(f,2));function _(v,m,d,w,A,E,U,D,C,N,b){const y=E/C,P=U/N,Q=E/2,G=U/2,oe=D/2,se=C+1,$=N+1;let ee=0,z=0;const ge=new j;for(let Me=0;Me<$;Me++){const Ae=Me*P-G;for(let Le=0;Le<se;Le++){const je=Le*y-Q;ge[v]=je*w,ge[m]=Ae*A,ge[d]=oe,c.push(ge.x,ge.y,ge.z),ge[v]=0,ge[m]=0,ge[d]=D>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Le/C),f.push(1-Me/N),ee+=1}}for(let Me=0;Me<N;Me++)for(let Ae=0;Ae<C;Ae++){const Le=h+Ae+se*Me,je=h+Ae+se*(Me+1),ie=h+(Ae+1)+se*(Me+1),me=h+(Ae+1)+se*Me;l.push(Le,je,me),l.push(je,ie,me),z+=6}a.addGroup(p,z,b),p+=z,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function kr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=kr(n[t]);for(const r in i)e[r]=i[r]}return e}function bx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const Tx={clone:kr,merge:Gt};var wx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Us{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wx,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jd extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new j,Df=new ht,Lf=new ht;class Yt extends Jd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ci.x,ci.y).multiplyScalar(-e/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ci.x,ci.y).multiplyScalar(-e/ci.z)}getViewSize(e,t){return this.getViewBounds(e,Df,Lf),t.subVectors(Lf,Df)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class Rx extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(mr,gr,e,t);r.layers=this.layers,this.add(r);const s=new Yt(mr,gr,e,t);s.layers=this.layers,this.add(s);const o=new Yt(mr,gr,e,t);o.layers=this.layers,this.add(o);const a=new Yt(mr,gr,e,t);a.layers=this.layers,this.add(a);const l=new Yt(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new Yt(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Qd extends Zt{constructor(e=[],t=Nr,i,r,s,o,a,l,c,u){super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cx extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ns(5,5,5),s=new wn({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:vi});s.uniforms.tEquirect.value=t;const o=new Kn(r,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=Dn),new Rx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class uo extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Px={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Px)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class $c extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Za=new j,Ix=new j,Dx=new Ge;class Ni{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Za.subVectors(i,t).cross(Ix.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dx.getNormalMatrix(e),r=this.coplanarPoint(Za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new pa,fo=new j;class ep{constructor(e=new Ni,t=new Ni,i=new Ni,r=new Ni,s=new Ni,o=new Ni){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],v=r[10],m=r[11],d=r[12],w=r[13],A=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-p,E-d).normalize(),i[1].setComponents(l+s,h+c,m+p,E+d).normalize(),i[2].setComponents(l+o,h+u,m+_,E+w).normalize(),i[3].setComponents(l-o,h-u,m-_,E-w).normalize(),i[4].setComponents(l-a,h-f,m-v,E-A).normalize(),t===Yn)i[5].setComponents(l+a,h+f,m+v,E+A).normalize();else if(t===Go)i[5].setComponents(a,f,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(fo.x=r.normal.x>0?e.max.x:e.min.x,fo.y=r.normal.y>0?e.max.y:e.min.y,fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lx extends Us{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Uf=new Et,uc=new Xd,ho=new pa,po=new j;class qc extends Jt{constructor(e=new An,t=new Lx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ho.copy(i.boundingSphere),ho.applyMatrix4(r),ho.radius+=s,e.ray.intersectsSphere(ho)===!1)return;Uf.copy(r).invert(),uc.copy(e.ray).applyMatrix4(Uf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=h,v=p;_<v;_++){const m=c.getX(_);po.fromBufferAttribute(f,m),Nf(po,m,l,r,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=h,v=p;_<v;_++)po.fromBufferAttribute(f,_),Nf(po,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nf(n,e,t,i,r,s,o){const a=uc.distanceSqToPoint(n);if(a<t){const l=new j;uc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tp extends Zt{constructor(e,t,i=Yi,r,s,o,a=bn,l=bn,c,u=Ts){if(u!==Ts&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ma extends An{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,p=[],_=[],v=[],m=[];for(let d=0;d<u;d++){const w=d*h-o;for(let A=0;A<c;A++){const E=A*f-s;_.push(E,-w,0),v.push(0,0,1),m.push(A/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<a;w++){const A=w+c*d,E=w+c*(d+1),U=w+1+c*(d+1),D=w+1+c*d;p.push(A,E,D),p.push(E,U,D)}this.setIndex(p),this.setAttribute("position",new qi(_,3)),this.setAttribute("normal",new qi(v,3)),this.setAttribute("uv",new qi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ux extends Us{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nx extends Us{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fx extends Jd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ox extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ff(n,e,t,i){const r=kx(i);switch(t){case Od:return n*e;case Bd:return n*e/r.components*r.byteLength;case Vc:return n*e/r.components*r.byteLength;case zd:return n*e*2/r.components*r.byteLength;case Gc:return n*e*2/r.components*r.byteLength;case kd:return n*e*3/r.components*r.byteLength;case yn:return n*e*4/r.components*r.byteLength;case Wc:return n*e*4/r.components*r.byteLength;case To:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ao:case Ro:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:case zl:return Math.max(n,16)*Math.max(e,8)/4;case Ol:case Bl:return Math.max(n,8)*Math.max(e,8)/2;case Hl:case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Co:case rc:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hd:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ac:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kx(n){switch(n){case Qn:case Ud:return{byteLength:1,components:1};case Es:case Nd:case Ps:return{byteLength:2,components:1};case zc:case Hc:return{byteLength:2,components:4};case Yi:case Bc:case jn:return{byteLength:4,components:1};case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function np(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Bx(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var zx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hx=`#ifdef USE_ALPHAHASH
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
#endif`,Vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$x=`#ifdef USE_AOMAP
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
#endif`,qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jx=`#ifdef USE_BATCHING
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
#endif`,Yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qx=`#ifdef USE_IRIDESCENCE
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
#endif`,e0=`#ifdef USE_BUMPMAP
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,u0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f0=`vec3 transformedNormal = objectNormal;
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
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g0="gl_FragColor = linearToOutputTexel( gl_FragColor );",_0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v0=`#ifdef USE_ENVMAP
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
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,M0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,A0=`#ifdef USE_GRADIENTMAP
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
}`,R0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,C0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,P0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,I0=`uniform bool receiveShadow;
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
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,L0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
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
#endif`,k0=`struct PhysicalMaterial {
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
}`,B0=`
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
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
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,V0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`#ifdef USE_MORPHTARGETS
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
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
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
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bM=`float getShadowMask() {
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
}`,TM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,AM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RM=`#ifdef USE_SKINNING
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
#endif`,CM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,LM=`#ifdef USE_TRANSMISSION
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
#endif`,UM=`#ifdef USE_TRANSMISSION
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zM=`uniform sampler2D t2D;
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
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`#include <common>
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
}`,$M=`#if DEPTH_PACKING == 3200
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
}`,qM=`#define DISTANCE
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
}`,jM=`#define DISTANCE
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
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`uniform float scale;
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
}`,JM=`uniform vec3 diffuse;
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
}`,QM=`#include <common>
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#define LAMBERT
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
}`,nS=`#define LAMBERT
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
}`,iS=`#define MATCAP
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
}`,rS=`#define MATCAP
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
}`,sS=`#define NORMAL
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
}`,oS=`#define NORMAL
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
}`,aS=`#define PHONG
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
}`,lS=`#define PHONG
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
}`,cS=`#define STANDARD
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
}`,uS=`#define STANDARD
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
}`,fS=`#define TOON
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
}`,hS=`#define TOON
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
}`,dS=`uniform float size;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 color;
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
}`,_S=`uniform float rotation;
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
}`,vS=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:zx,alphahash_pars_fragment:Hx,alphamap_fragment:Vx,alphamap_pars_fragment:Gx,alphatest_fragment:Wx,alphatest_pars_fragment:Xx,aomap_fragment:$x,aomap_pars_fragment:qx,batching_pars_vertex:jx,batching_vertex:Yx,begin_vertex:Kx,beginnormal_vertex:Zx,bsdfs:Jx,iridescence_fragment:Qx,bumpmap_pars_fragment:e0,clipping_planes_fragment:t0,clipping_planes_pars_fragment:n0,clipping_planes_pars_vertex:i0,clipping_planes_vertex:r0,color_fragment:s0,color_pars_fragment:o0,color_pars_vertex:a0,color_vertex:l0,common:c0,cube_uv_reflection_fragment:u0,defaultnormal_vertex:f0,displacementmap_pars_vertex:h0,displacementmap_vertex:d0,emissivemap_fragment:p0,emissivemap_pars_fragment:m0,colorspace_fragment:g0,colorspace_pars_fragment:_0,envmap_fragment:v0,envmap_common_pars_fragment:x0,envmap_pars_fragment:M0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:D0,envmap_vertex:y0,fog_vertex:E0,fog_pars_vertex:b0,fog_fragment:T0,fog_pars_fragment:w0,gradientmap_pars_fragment:A0,lightmap_pars_fragment:R0,lights_lambert_fragment:C0,lights_lambert_pars_fragment:P0,lights_pars_begin:I0,lights_toon_fragment:L0,lights_toon_pars_fragment:U0,lights_phong_fragment:N0,lights_phong_pars_fragment:F0,lights_physical_fragment:O0,lights_physical_pars_fragment:k0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:H0,logdepthbuf_fragment:V0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:W0,logdepthbuf_vertex:X0,map_fragment:$0,map_pars_fragment:q0,map_particle_fragment:j0,map_particle_pars_fragment:Y0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:J0,morphcolor_vertex:Q0,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:rM,normal_pars_fragment:sM,normal_pars_vertex:oM,normal_vertex:aM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:uM,clearcoat_pars_fragment:fM,iridescence_pars_fragment:hM,opaque_fragment:dM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:_M,dithering_pars_fragment:vM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:MM,shadowmap_pars_fragment:SM,shadowmap_pars_vertex:yM,shadowmap_vertex:EM,shadowmask_pars_fragment:bM,skinbase_vertex:TM,skinning_pars_vertex:wM,skinning_vertex:AM,skinnormal_vertex:RM,specularmap_fragment:CM,specularmap_pars_fragment:PM,tonemapping_fragment:IM,tonemapping_pars_fragment:DM,transmission_fragment:LM,transmission_pars_fragment:UM,uv_pars_fragment:NM,uv_pars_vertex:FM,uv_vertex:OM,worldpos_vertex:kM,background_vert:BM,background_frag:zM,backgroundCube_vert:HM,backgroundCube_frag:VM,cube_vert:GM,cube_frag:WM,depth_vert:XM,depth_frag:$M,distanceRGBA_vert:qM,distanceRGBA_frag:jM,equirect_vert:YM,equirect_frag:KM,linedashed_vert:ZM,linedashed_frag:JM,meshbasic_vert:QM,meshbasic_frag:eS,meshlambert_vert:tS,meshlambert_frag:nS,meshmatcap_vert:iS,meshmatcap_frag:rS,meshnormal_vert:sS,meshnormal_frag:oS,meshphong_vert:aS,meshphong_frag:lS,meshphysical_vert:cS,meshphysical_frag:uS,meshtoon_vert:fS,meshtoon_frag:hS,points_vert:dS,points_frag:pS,shadow_vert:mS,shadow_frag:gS,sprite_vert:_S,sprite_frag:vS},ve={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Pn={basic:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Gt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Gt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new et(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Gt([ve.points,ve.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Gt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Gt([ve.common,ve.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Gt([ve.sprite,ve.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Gt([ve.common,ve.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Gt([ve.lights,ve.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Pn.physical={uniforms:Gt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const mo={r:0,b:0,g:0},Li=new ei,xS=new Et;function MS(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function v(A){let E=!1;const U=_(A);U===null?d(a,l):U&&U.isColor&&(d(U,1),E=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,E){const U=_(E);U&&(U.isCubeTexture||U.mapping===da)?(u===void 0&&(u=new Kn(new Ns(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:kr(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(E.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xS.makeRotationFromEuler(Li)),u.material.toneMapped=Qe.getTransfer(U.colorSpace)!==lt,(f!==U||h!==U.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=U,h=U.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new Kn(new ma(2,2),new wn({name:"BackgroundMaterial",uniforms:kr(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(U.colorSpace)!==lt,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(f!==U||h!==U.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=U,h=U.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,E){A.getRGB(mo,Zd(n)),i.buffers.color.setClear(mo.r,mo.g,mo.b,E,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:v,addToRenderList:m,dispose:w}}function SS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(y,P,Q,G,oe){let se=!1;const $=f(G,Q,P);s!==$&&(s=$,c(s.object)),se=p(y,G,Q,oe),se&&_(y,G,Q,oe),oe!==null&&e.update(oe,n.ELEMENT_ARRAY_BUFFER),(se||o)&&(o=!1,E(y,P,Q,G),oe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function f(y,P,Q){const G=Q.wireframe===!0;let oe=i[y.id];oe===void 0&&(oe={},i[y.id]=oe);let se=oe[P.id];se===void 0&&(se={},oe[P.id]=se);let $=se[G];return $===void 0&&($=h(l()),se[G]=$),$}function h(y){const P=[],Q=[],G=[];for(let oe=0;oe<t;oe++)P[oe]=0,Q[oe]=0,G[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:Q,attributeDivisors:G,object:y,attributes:{},index:null}}function p(y,P,Q,G){const oe=s.attributes,se=P.attributes;let $=0;const ee=Q.getAttributes();for(const z in ee)if(ee[z].location>=0){const Me=oe[z];let Ae=se[z];if(Ae===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Ae=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Ae=y.instanceColor)),Me===void 0||Me.attribute!==Ae||Ae&&Me.data!==Ae.data)return!0;$++}return s.attributesNum!==$||s.index!==G}function _(y,P,Q,G){const oe={},se=P.attributes;let $=0;const ee=Q.getAttributes();for(const z in ee)if(ee[z].location>=0){let Me=se[z];Me===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Me=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Me=y.instanceColor));const Ae={};Ae.attribute=Me,Me&&Me.data&&(Ae.data=Me.data),oe[z]=Ae,$++}s.attributes=oe,s.attributesNum=$,s.index=G}function v(){const y=s.newAttributes;for(let P=0,Q=y.length;P<Q;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){const Q=s.newAttributes,G=s.enabledAttributes,oe=s.attributeDivisors;Q[y]=1,G[y]===0&&(n.enableVertexAttribArray(y),G[y]=1),oe[y]!==P&&(n.vertexAttribDivisor(y,P),oe[y]=P)}function w(){const y=s.newAttributes,P=s.enabledAttributes;for(let Q=0,G=P.length;Q<G;Q++)P[Q]!==y[Q]&&(n.disableVertexAttribArray(Q),P[Q]=0)}function A(y,P,Q,G,oe,se,$){$===!0?n.vertexAttribIPointer(y,P,Q,oe,se):n.vertexAttribPointer(y,P,Q,G,oe,se)}function E(y,P,Q,G){v();const oe=G.attributes,se=Q.getAttributes(),$=P.defaultAttributeValues;for(const ee in se){const z=se[ee];if(z.location>=0){let ge=oe[ee];if(ge===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const Me=ge.normalized,Ae=ge.itemSize,Le=e.get(ge);if(Le===void 0)continue;const je=Le.buffer,ie=Le.type,me=Le.bytesPerElement,_e=ie===n.INT||ie===n.UNSIGNED_INT||ge.gpuType===Bc;if(ge.isInterleavedBufferAttribute){const F=ge.data,re=F.stride,ae=ge.offset;if(F.isInstancedInterleavedBuffer){for(let ue=0;ue<z.locationSize;ue++)d(z.location+ue,F.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ue=0;ue<z.locationSize;ue++)m(z.location+ue);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ue=0;ue<z.locationSize;ue++)A(z.location+ue,Ae/z.locationSize,ie,Me,re*me,(ae+Ae/z.locationSize*ue)*me,_e)}else{if(ge.isInstancedBufferAttribute){for(let F=0;F<z.locationSize;F++)d(z.location+F,ge.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let F=0;F<z.locationSize;F++)m(z.location+F);n.bindBuffer(n.ARRAY_BUFFER,je);for(let F=0;F<z.locationSize;F++)A(z.location+F,Ae/z.locationSize,ie,Me,Ae*me,Ae/z.locationSize*F*me,_e)}}else if($!==void 0){const Me=$[ee];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(z.location,Me);break;case 3:n.vertexAttrib3fv(z.location,Me);break;case 4:n.vertexAttrib4fv(z.location,Me);break;default:n.vertexAttrib1fv(z.location,Me)}}}}w()}function U(){N();for(const y in i){const P=i[y];for(const Q in P){const G=P[Q];for(const oe in G)u(G[oe].object),delete G[oe];delete P[Q]}delete i[y]}}function D(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const Q in P){const G=P[Q];for(const oe in G)u(G[oe].object),delete G[oe];delete P[Q]}delete i[y.id]}function C(y){for(const P in i){const Q=i[P];if(Q[y.id]===void 0)continue;const G=Q[y.id];for(const oe in G)u(G[oe].object),delete G[oe];delete Q[y.id]}}function N(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function yS(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let v=0;v<f;v++)_+=u[v]*h[v];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ES(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==yn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===Ps&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Qn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==jn&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=_>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:E,vertexTextures:U,maxSamples:D}}function bS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ni,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,A=w*4;let E=d.clippingState||null;l.value=E,E=u(_,h,A,p);for(let U=0;U!==A;++U)E[U]=t[U];d.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const d=p+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<d)&&(m=new Float32Array(d));for(let A=0,E=p;A!==v;++A,E+=4)o.copy(f[A]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function TS(n){let e=new WeakMap;function t(o,a){return a===Ll?o.mapping=Nr:a===Ul&&(o.mapping=Fr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ll||a===Ul)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const xr=4,Of=[.125,.215,.35,.446,.526,.582],Hi=20,Ja=new Fx,kf=new et;let Qa=null,el=0,tl=0,nl=!1;const Fi=(1+Math.sqrt(5))/2,_r=1/Fi,Bf=[new j(-Fi,_r,0),new j(Fi,_r,0),new j(-_r,0,Fi),new j(_r,0,Fi),new j(0,Fi,-_r),new j(0,Fi,_r),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],wS=new j;class zf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=wS}=s;Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qa,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qa=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ps,format:yn,colorSpace:Or,depthBuffer:!1},r=Hf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=AS(s)),this._blurMaterial=RS(s,e,t)}return r}_compileMaterial(e){const t=new Kn(this._lodPlanes[0],e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,i,r,s){const l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(kf),f.toneMapping=xi,f.autoClear=!1;const _=new jd({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1}),v=new Kn(new Ns,_);let m=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,m=!0):(_.color.copy(kf),m=!0);for(let w=0;w<6;w++){const A=w%3;A===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):A===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const E=this._cubeSize;go(r,A*E,w>2?E:0,E,E),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Nr||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;go(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ja)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Bf[(r-s-1)%Bf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Kn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hi-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):Hi;m>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);const d=[];let w=0;for(let C=0;C<Hi;++C){const N=C/v,b=Math.exp(-N*N/2);d.push(b),C===0?w+=b:C<m&&(w+=2*b)}for(let C=0;C<d.length;C++)d[C]=d[C]/w;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:A}=this;h.dTheta.value=_,h.mipInt.value=A-i;const E=this._sizeLods[r],U=3*E*(r>A-xr?r-A+xr:0),D=4*(this._cubeSize-E);go(t,U,D,3*E,2*E),l.setRenderTarget(t),l.render(f,Ja)}}function AS(n){const e=[],t=[],i=[];let r=n;const s=n-xr+1+Of.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-xr?l=Of[o-n+xr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,v=3,m=2,d=1,w=new Float32Array(v*_*p),A=new Float32Array(m*_*p),E=new Float32Array(d*_*p);for(let D=0;D<p;D++){const C=D%3*2/3-1,N=D>2?0:-1,b=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(b,v*_*D),A.set(h,m*_*D);const y=[D,D,D,D,D,D];E.set(y,d*_*D)}const U=new An;U.setAttribute("position",new an(w,v)),U.setAttribute("uv",new an(A,m)),U.setAttribute("faceIndex",new an(E,d)),e.push(U),r>xr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Hf(n,e,t){const i=new Ki(n,e,t);return i.texture.mapping=da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function go(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function RS(n,e,t){const i=new Float32Array(Hi),r=new j(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Vf(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:vi,depthTest:!1,depthWrite:!1})}function Gf(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vi,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function CS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ll||l===Ul,u=l===Nr||l===Fr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new zf(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new zf(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function PS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Po("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IS(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let v=0;if(p!==null){const w=p.array;v=p.version;for(let A=0,E=w.length;A<E;A+=3){const U=w[A+0],D=w[A+1],C=w[A+2];h.push(U,D,D,C,C,U)}}else if(_!==void 0){const w=_.array;v=_.version;for(let A=0,E=w.length/3-1;A<E;A+=3){const U=A+0,D=A+1,C=A+2;h.push(U,D,D,C,C,U)}}else return;const m=new(Gd(h)?Kd:Yd)(h,1);m.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function DS(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function c(h,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,h*o,_),t.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let m=0;for(let d=0;d<_;d++)m+=p[d];t.update(m,i,1)}function f(h,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,_);let d=0;for(let w=0;w<_;w++)d+=p[w]*v[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function LS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function US(n,e,t){const i=new WeakMap,r=new St;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let y=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let E=0;_===!0&&(E=1),v===!0&&(E=2),m===!0&&(E=3);let U=a.attributes.position.count*E,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*D*4*f),N=new Wd(C,U,D,f);N.type=jn,N.needsUpdate=!0;const b=E*4;for(let P=0;P<f;P++){const Q=d[P],G=w[P],oe=A[P],se=U*D*4*P;for(let $=0;$<Q.count;$++){const ee=$*b;_===!0&&(r.fromBufferAttribute(Q,$),C[se+ee+0]=r.x,C[se+ee+1]=r.y,C[se+ee+2]=r.z,C[se+ee+3]=0),v===!0&&(r.fromBufferAttribute(G,$),C[se+ee+4]=r.x,C[se+ee+5]=r.y,C[se+ee+6]=r.z,C[se+ee+7]=0),m===!0&&(r.fromBufferAttribute(oe,$),C[se+ee+8]=r.x,C[se+ee+9]=r.y,C[se+ee+10]=r.z,C[se+ee+11]=oe.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new ht(U,D)},i.set(a,h),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function NS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ip=new Zt,Wf=new tp(1,1),rp=new Wd,sp=new hx,op=new Qd,Xf=[],$f=[],qf=new Float32Array(16),jf=new Float32Array(9),Yf=new Float32Array(4);function $r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Xf[r];if(s===void 0&&(s=new Float32Array(r),Xf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ct(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ga(n,e){let t=$f[e];t===void 0&&(t=new Int32Array(e),$f[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function FS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),Ct(t,e)}}function kS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),Ct(t,e)}}function BS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),Ct(t,e)}}function zS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;Yf.set(i),n.uniformMatrix2fv(this.addr,!1,Yf),Ct(t,i)}}function HS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;jf.set(i),n.uniformMatrix3fv(this.addr,!1,jf),Ct(t,i)}}function VS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(Rt(t,i))return;qf.set(i),n.uniformMatrix4fv(this.addr,!1,qf),Ct(t,i)}}function GS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function WS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),Ct(t,e)}}function XS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),Ct(t,e)}}function $S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),Ct(t,e)}}function qS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),Ct(t,e)}}function YS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),Ct(t,e)}}function KS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),Ct(t,e)}}function ZS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wf.compareFunction=Vd,s=Wf):s=ip,t.setTexture2D(e||s,r)}function JS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sp,r)}function QS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||op,r)}function ey(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||rp,r)}function ty(n){switch(n){case 5126:return FS;case 35664:return OS;case 35665:return kS;case 35666:return BS;case 35674:return zS;case 35675:return HS;case 35676:return VS;case 5124:case 35670:return GS;case 35667:case 35671:return WS;case 35668:case 35672:return XS;case 35669:case 35673:return $S;case 5125:return qS;case 36294:return jS;case 36295:return YS;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return ey}}function ny(n,e){n.uniform1fv(this.addr,e)}function iy(n,e){const t=$r(e,this.size,2);n.uniform2fv(this.addr,t)}function ry(n,e){const t=$r(e,this.size,3);n.uniform3fv(this.addr,t)}function sy(n,e){const t=$r(e,this.size,4);n.uniform4fv(this.addr,t)}function oy(n,e){const t=$r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ay(n,e){const t=$r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ly(n,e){const t=$r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function cy(n,e){n.uniform1iv(this.addr,e)}function uy(n,e){n.uniform2iv(this.addr,e)}function fy(n,e){n.uniform3iv(this.addr,e)}function hy(n,e){n.uniform4iv(this.addr,e)}function dy(n,e){n.uniform1uiv(this.addr,e)}function py(n,e){n.uniform2uiv(this.addr,e)}function my(n,e){n.uniform3uiv(this.addr,e)}function gy(n,e){n.uniform4uiv(this.addr,e)}function _y(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ip,s[o])}function vy(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||sp,s[o])}function xy(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||op,s[o])}function My(n,e,t){const i=this.cache,r=e.length,s=ga(t,r);Rt(i,s)||(n.uniform1iv(this.addr,s),Ct(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||rp,s[o])}function Sy(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return ry;case 35666:return sy;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return uy;case 35668:case 35672:return fy;case 35669:case 35673:return hy;case 5125:return dy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return vy;case 35680:case 36300:case 36308:case 36293:return xy;case 36289:case 36303:case 36311:case 36292:return My}}class yy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ty(t.type)}}class Ey{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sy(t.type)}}class by{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const il=/(\w+)(\])?(\[|\.)?/g;function Kf(n,e){n.seq.push(e),n.map[e.id]=e}function Ty(n,e,t){const i=n.name,r=i.length;for(il.lastIndex=0;;){const s=il.exec(i),o=il.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Kf(t,c===void 0?new yy(a,n,e):new Ey(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new by(a),Kf(t,f)),t=f}}}class Io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ty(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Zf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const wy=37297;let Ay=0;function Ry(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Jf=new Ge;function Cy(n){Qe._getMatrix(Jf,Qe.workingColorSpace,n);const e=`mat3( ${Jf.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ry(n.getShaderSource(e),o)}else return r}function Py(n,e){const t=Cy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Iy(n,e){let t;switch(e){case Ov:t="Linear";break;case kv:t="Reinhard";break;case Bv:t="Cineon";break;case zv:t="ACESFilmic";break;case Vv:t="AgX";break;case Gv:t="Neutral";break;case Hv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _o=new j;function Dy(){Qe.getLuminanceCoefficients(_o);const n=_o.x.toFixed(4),e=_o.y.toFixed(4),t=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ly(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function Uy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ny(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function os(n){return n!==""}function eh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(n){return n.replace(Fy,ky)}const Oy=new Map;function ky(n,e){let t=Xe[e];if(t===void 0){const i=Oy.get(e);if(i!==void 0)t=Xe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fc(t)}const By=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(n){return n.replace(By,zy)}function zy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ih(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Hy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===gv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Nr:case Fr:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function Wy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dd:e="ENVMAP_BLENDING_MULTIPLY";break;case Nv:e="ENVMAP_BLENDING_MIX";break;case Fv:e="ENVMAP_BLENDING_ADD";break}return e}function Xy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function $y(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hy(t),c=Vy(t),u=Gy(t),f=Wy(t),h=Xy(t),p=Ly(t),_=Uy(s),v=r.createProgram();let m,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(os).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(os).join(`
`),d.length>0&&(d+=`
`)):(m=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),d=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==xi?Iy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Py("linearToOutputTexel",t.outputColorSpace),Dy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(os).join(`
`)),o=fc(o),o=eh(o,t),o=th(o,t),a=fc(a),a=eh(a,t),a=th(a,t),o=nh(o),a=nh(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===gf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=w+m+o,E=w+d+a,U=Zf(r,r.VERTEX_SHADER,A),D=Zf(r,r.FRAGMENT_SHADER,E);r.attachShader(v,U),r.attachShader(v,D),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(P){if(n.debug.checkShaderErrors){const Q=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(U).trim(),oe=r.getShaderInfoLog(D).trim();let se=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(se=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,U,D);else{const ee=Qf(r,U,"vertex"),z=Qf(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Q+`
`+ee+`
`+z)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(G===""||oe==="")&&($=!1);$&&(P.diagnostics={runnable:se,programLog:Q,vertexShader:{log:G,prefix:m},fragmentShader:{log:oe,prefix:d}})}r.deleteShader(U),r.deleteShader(D),N=new Io(r,v),b=Ny(r,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,wy)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ay++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=D,this}let qy=0;class jy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Yy(e),t.set(e,i)),i}}class Yy{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}}function Ky(n,e,t,i,r,s,o){const a=new $d,l=new jy,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,Q,G){const oe=Q.fog,se=G.geometry,$=b.isMeshStandardMaterial?Q.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),z=ee&&ee.mapping===da?ee.image.height:null,ge=_[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Me=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ae=Me!==void 0?Me.length:0;let Le=0;se.morphAttributes.position!==void 0&&(Le=1),se.morphAttributes.normal!==void 0&&(Le=2),se.morphAttributes.color!==void 0&&(Le=3);let je,ie,me,_e;if(ge){const st=Pn[ge];je=st.vertexShader,ie=st.fragmentShader}else je=b.vertexShader,ie=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const F=n.getRenderTarget(),re=n.state.buffers.depth.getReversed(),ae=G.isInstancedMesh===!0,ue=G.isBatchedMesh===!0,T=!!b.map,R=!!b.matcap,L=!!ee,x=!!b.aoMap,Z=!!b.lightMap,te=!!b.bumpMap,ne=!!b.normalMap,Y=!!b.displacementMap,ce=!!b.emissiveMap,V=!!b.metalnessMap,S=!!b.roughnessMap,g=b.anisotropy>0,I=b.clearcoat>0,H=b.dispersion>0,K=b.iridescence>0,W=b.sheen>0,pe=b.transmission>0,de=g&&!!b.anisotropyMap,Ce=I&&!!b.clearcoatMap,De=I&&!!b.clearcoatNormalMap,fe=I&&!!b.clearcoatRoughnessMap,be=K&&!!b.iridescenceMap,Oe=K&&!!b.iridescenceThicknessMap,Ie=W&&!!b.sheenColorMap,xe=W&&!!b.sheenRoughnessMap,$e=!!b.specularMap,We=!!b.specularColorMap,dt=!!b.specularIntensityMap,O=pe&&!!b.transmissionMap,ye=pe&&!!b.thicknessMap,J=!!b.gradientMap,le=!!b.alphaMap,Te=b.alphaTest>0,Ee=!!b.alphaHash,Ve=!!b.extensions;let xt=xi;b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xt=n.toneMapping);const Ot={shaderID:ge,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:ie,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ue,batchingColor:ue&&G._colorsTexture!==null,instancing:ae,instancingColor:ae&&G.instanceColor!==null,instancingMorph:ae&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:F===null?n.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Or,alphaToCoverage:!!b.alphaToCoverage,map:T,matcap:R,envMap:L,envMapMode:L&&ee.mapping,envMapCubeUVHeight:z,aoMap:x,lightMap:Z,bumpMap:te,normalMap:ne,displacementMap:h&&Y,emissiveMap:ce,normalMapObjectSpace:ne&&b.normalMapType===jv,normalMapTangentSpace:ne&&b.normalMapType===qv,metalnessMap:V,roughnessMap:S,anisotropy:g,anisotropyMap:de,clearcoat:I,clearcoatMap:Ce,clearcoatNormalMap:De,clearcoatRoughnessMap:fe,dispersion:H,iridescence:K,iridescenceMap:be,iridescenceThicknessMap:Oe,sheen:W,sheenColorMap:Ie,sheenRoughnessMap:xe,specularMap:$e,specularColorMap:We,specularIntensityMap:dt,transmission:pe,transmissionMap:O,thicknessMap:ye,gradientMap:J,opaque:b.transparent===!1&&b.blending===Tr&&b.alphaToCoverage===!1,alphaMap:le,alphaTest:Te,alphaHash:Ee,combine:b.combine,mapUv:T&&v(b.map.channel),aoMapUv:x&&v(b.aoMap.channel),lightMapUv:Z&&v(b.lightMap.channel),bumpMapUv:te&&v(b.bumpMap.channel),normalMapUv:ne&&v(b.normalMap.channel),displacementMapUv:Y&&v(b.displacementMap.channel),emissiveMapUv:ce&&v(b.emissiveMap.channel),metalnessMapUv:V&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:de&&v(b.anisotropyMap.channel),clearcoatMapUv:Ce&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:De&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(b.sheenRoughnessMap.channel),specularMapUv:$e&&v(b.specularMap.channel),specularColorMapUv:We&&v(b.specularColorMap.channel),specularIntensityMapUv:dt&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:ye&&v(b.thicknessMap.channel),alphaMapUv:le&&v(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(ne||g),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!se.attributes.uv&&(T||le),fog:!!oe,useFog:b.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:G.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Le,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:T&&b.map.isVideoTexture===!0&&Qe.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:ce&&b.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$n,flipSided:b.side===Kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ve&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&b.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function d(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(w(y,b),A(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function A(b,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const y=_[b.type];let P;if(y){const Q=Pn[y];P=Tx.clone(Q.uniforms)}else P=b.uniforms;return P}function U(b,y){let P;for(let Q=0,G=u.length;Q<G;Q++){const oe=u[Q];if(oe.cacheKey===y){P=oe,++P.usedTimes;break}}return P===void 0&&(P=new $y(n,y,b,s),u.push(P)),P}function D(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:U,releaseProgram:D,releaseShaderCache:C,programs:u,dispose:N}}function Zy(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Jy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,_,v,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=v,d.group=m),e++,d}function a(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,v,m){const d=o(f,h,p,_,v,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||Jy),i.length>1&&i.sort(h||rh),r.length>1&&r.sort(h||rh)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Qy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new sh,n.set(i,[o])):r>=s.length?(o=new sh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new et};break;case"SpotLight":t={position:new j,direction:new j,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function tE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nE=0;function iE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rE(n){const e=new eE,t=tE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new j);const r=new j,s=new Et,o=new Et;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,_=0,v=0,m=0,d=0,w=0,A=0,E=0,U=0,D=0,C=0;c.sort(iE);for(let b=0,y=c.length;b<y;b++){const P=c[b],Q=P.color,G=P.intensity,oe=P.distance,se=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=Q.r*G,f+=Q.g*G,h+=Q.b*G;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],G);C++}else if(P.isDirectionalLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,z=t.get(P);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=se,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=$,p++}else if(P.isSpotLight){const $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(Q).multiplyScalar(G),$.distance=oe,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[v]=$;const ee=P.shadow;if(P.map&&(i.spotLightMap[U]=P.map,U++,ee.updateMatrices(P),P.castShadow&&D++),i.spotLightMatrix[v]=ee.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=se,E++}v++}else if(P.isRectAreaLight){const $=e.get(P);$.color.copy(Q).multiplyScalar(G),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=$,m++}else if(P.isPointLight){const $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const ee=P.shadow,z=t.get(P);z.shadowIntensity=ee.intensity,z.shadowBias=ee.bias,z.shadowNormalBias=ee.normalBias,z.shadowRadius=ee.radius,z.shadowMapSize=ee.mapSize,z.shadowCameraNear=ee.camera.near,z.shadowCameraFar=ee.camera.far,i.pointShadow[_]=z,i.pointShadowMap[_]=se,i.pointShadowMatrix[_]=P.shadow.matrix,A++}i.point[_]=$,_++}else if(P.isHemisphereLight){const $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(G),$.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[d]=$,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==m||N.hemiLength!==d||N.numDirectionalShadows!==w||N.numPointShadows!==A||N.numSpotShadows!==E||N.numSpotMaps!==U||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+U-D,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,N.directionalLength=p,N.pointLength=_,N.spotLength=v,N.rectAreaLength=m,N.hemiLength=d,N.numDirectionalShadows=w,N.numPointShadows=A,N.numSpotShadows=E,N.numSpotMaps=U,N.numLightProbes=C,i.version=nE++)}function l(c,u){let f=0,h=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const A=c[d];if(A.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(A.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(A.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(A.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(m),h++}else if(A.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function oh(n){const e=new rE(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function sE(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new oh(n),e.set(r,[a])):s>=o.length?(a=new oh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const oE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
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
}`;function lE(n,e,t){let i=new ep;const r=new ht,s=new ht,o=new St,a=new Ux({depthPacking:$v}),l=new Nx,c={},u=t.maxTextureSize,f={[Ei]:Kt,[Kt]:Ei,[$n]:$n},h=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:oE,fragmentShader:aE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new An;_.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Kn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Id;let d=this.type;this.render=function(D,C,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(vi),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const G=d!==Wn&&this.type===Wn,oe=d===Wn&&this.type!==Wn;for(let se=0,$=D.length;se<$;se++){const ee=D[se],z=ee.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ge=z.getFrameExtents();if(r.multiply(ge),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ge.x),r.x=s.x*ge.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ge.y),r.y=s.y*ge.y,z.mapSize.y=s.y)),z.map===null||G===!0||oe===!0){const Ae=this.type!==Wn?{minFilter:bn,magFilter:bn}:{};z.map!==null&&z.map.dispose(),z.map=new Ki(r.x,r.y,Ae),z.map.texture.name=ee.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const Me=z.getViewportCount();for(let Ae=0;Ae<Me;Ae++){const Le=z.getViewport(Ae);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),Q.viewport(o),z.updateMatrices(ee,Ae),i=z.getFrustum(),E(C,N,z.camera,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Wn&&w(z,N),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(b,y,P)};function w(D,C){const N=e.update(v);h.defines.VSM_SAMPLES!==D.blurSamples&&(h.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ki(r.x,r.y)),h.uniforms.shadow_pass.value=D.map.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,N,h,v,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,N,p,v,null)}function A(D,C,N,b){let y=null;const P=N.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(P!==void 0)y=P;else if(y=N.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const Q=y.uuid,G=C.uuid;let oe=c[Q];oe===void 0&&(oe={},c[Q]=oe);let se=oe[G];se===void 0&&(se=y.clone(),oe[G]=se,C.addEventListener("dispose",U)),y=se}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Wn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:f[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Q=n.properties.get(y);Q.light=N}return y}function E(D,C,N,b,y){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&y===Wn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,D.matrixWorld);const G=e.update(D),oe=D.material;if(Array.isArray(oe)){const se=G.groups;for(let $=0,ee=se.length;$<ee;$++){const z=se[$],ge=oe[z.materialIndex];if(ge&&ge.visible){const Me=A(D,ge,b,y);D.onBeforeShadow(n,D,C,N,G,Me,z),n.renderBufferDirect(N,null,G,Me,D,z),D.onAfterShadow(n,D,C,N,G,Me,z)}}}else if(oe.visible){const se=A(D,oe,b,y);D.onBeforeShadow(n,D,C,N,G,se,null),n.renderBufferDirect(N,null,G,se,D,null),D.onAfterShadow(n,D,C,N,G,se,null)}}const Q=D.children;for(let G=0,oe=Q.length;G<oe;G++)E(Q[G],C,N,b,y)}function U(D){D.target.removeEventListener("dispose",U);for(const N in c){const b=c[N],y=D.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const cE={[wl]:Al,[Rl]:Il,[Cl]:Dl,[Ur]:Pl,[Al]:wl,[Il]:Rl,[Dl]:Cl,[Pl]:Ur};function uE(n,e){function t(){let O=!1;const ye=new St;let J=null;const le=new St(0,0,0,0);return{setMask:function(Te){J!==Te&&!O&&(n.colorMask(Te,Te,Te,Te),J=Te)},setLocked:function(Te){O=Te},setClear:function(Te,Ee,Ve,xt,Ot){Ot===!0&&(Te*=xt,Ee*=xt,Ve*=xt),ye.set(Te,Ee,Ve,xt),le.equals(ye)===!1&&(n.clearColor(Te,Ee,Ve,xt),le.copy(ye))},reset:function(){O=!1,J=null,le.set(-1,0,0,0)}}}function i(){let O=!1,ye=!1,J=null,le=null,Te=null;return{setReversed:function(Ee){if(ye!==Ee){const Ve=e.get("EXT_clip_control");Ee?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ye=Ee;const xt=Te;Te=null,this.setClear(xt)}},getReversed:function(){return ye},setTest:function(Ee){Ee?F(n.DEPTH_TEST):re(n.DEPTH_TEST)},setMask:function(Ee){J!==Ee&&!O&&(n.depthMask(Ee),J=Ee)},setFunc:function(Ee){if(ye&&(Ee=cE[Ee]),le!==Ee){switch(Ee){case wl:n.depthFunc(n.NEVER);break;case Al:n.depthFunc(n.ALWAYS);break;case Rl:n.depthFunc(n.LESS);break;case Ur:n.depthFunc(n.LEQUAL);break;case Cl:n.depthFunc(n.EQUAL);break;case Pl:n.depthFunc(n.GEQUAL);break;case Il:n.depthFunc(n.GREATER);break;case Dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){Te!==Ee&&(ye&&(Ee=1-Ee),n.clearDepth(Ee),Te=Ee)},reset:function(){O=!1,J=null,le=null,Te=null,ye=!1}}}function r(){let O=!1,ye=null,J=null,le=null,Te=null,Ee=null,Ve=null,xt=null,Ot=null;return{setTest:function(st){O||(st?F(n.STENCIL_TEST):re(n.STENCIL_TEST))},setMask:function(st){ye!==st&&!O&&(n.stencilMask(st),ye=st)},setFunc:function(st,pn,On){(J!==st||le!==pn||Te!==On)&&(n.stencilFunc(st,pn,On),J=st,le=pn,Te=On)},setOp:function(st,pn,On){(Ee!==st||Ve!==pn||xt!==On)&&(n.stencilOp(st,pn,On),Ee=st,Ve=pn,xt=On)},setLocked:function(st){O=st},setClear:function(st){Ot!==st&&(n.clearStencil(st),Ot=st)},reset:function(){O=!1,ye=null,J=null,le=null,Te=null,Ee=null,Ve=null,xt=null,Ot=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,w=null,A=null,E=null,U=null,D=null,C=new et(0,0,0),N=0,b=!1,y=null,P=null,Q=null,G=null,oe=null;const se=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ee=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=ee>=1):z.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=ee>=2);let ge=null,Me={};const Ae=n.getParameter(n.SCISSOR_BOX),Le=n.getParameter(n.VIEWPORT),je=new St().fromArray(Ae),ie=new St().fromArray(Le);function me(O,ye,J,le){const Te=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(O,Ee),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<J;Ve++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(ye+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return Ee}const _e={};_e[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(n.DEPTH_TEST),o.setFunc(Ur),te(!1),ne(ff),F(n.CULL_FACE),x(vi);function F(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function re(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function ae(O,ye){return f[O]!==ye?(n.bindFramebuffer(O,ye),f[O]=ye,O===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),O===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function ue(O,ye){let J=p,le=!1;if(O){J=h.get(ye),J===void 0&&(J=[],h.set(ye,J));const Te=O.textures;if(J.length!==Te.length||J[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Ve=Te.length;Ee<Ve;Ee++)J[Ee]=n.COLOR_ATTACHMENT0+Ee;J.length=Te.length,le=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,le=!0);le&&n.drawBuffers(J)}function T(O){return _!==O?(n.useProgram(O),_=O,!0):!1}const R={[zi]:n.FUNC_ADD,[vv]:n.FUNC_SUBTRACT,[xv]:n.FUNC_REVERSE_SUBTRACT};R[Mv]=n.MIN,R[Sv]=n.MAX;const L={[yv]:n.ZERO,[Ev]:n.ONE,[bv]:n.SRC_COLOR,[bl]:n.SRC_ALPHA,[Pv]:n.SRC_ALPHA_SATURATE,[Rv]:n.DST_COLOR,[wv]:n.DST_ALPHA,[Tv]:n.ONE_MINUS_SRC_COLOR,[Tl]:n.ONE_MINUS_SRC_ALPHA,[Cv]:n.ONE_MINUS_DST_COLOR,[Av]:n.ONE_MINUS_DST_ALPHA,[Iv]:n.CONSTANT_COLOR,[Dv]:n.ONE_MINUS_CONSTANT_COLOR,[Lv]:n.CONSTANT_ALPHA,[Uv]:n.ONE_MINUS_CONSTANT_ALPHA};function x(O,ye,J,le,Te,Ee,Ve,xt,Ot,st){if(O===vi){v===!0&&(re(n.BLEND),v=!1);return}if(v===!1&&(F(n.BLEND),v=!0),O!==_v){if(O!==m||st!==b){if((d!==zi||E!==zi)&&(n.blendEquation(n.FUNC_ADD),d=zi,E=zi),st)switch(O){case Tr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ys:n.blendFunc(n.ONE,n.ONE);break;case hf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case df:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ys:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case df:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,A=null,U=null,D=null,C.set(0,0,0),N=0,m=O,b=st}return}Te=Te||ye,Ee=Ee||J,Ve=Ve||le,(ye!==d||Te!==E)&&(n.blendEquationSeparate(R[ye],R[Te]),d=ye,E=Te),(J!==w||le!==A||Ee!==U||Ve!==D)&&(n.blendFuncSeparate(L[J],L[le],L[Ee],L[Ve]),w=J,A=le,U=Ee,D=Ve),(xt.equals(C)===!1||Ot!==N)&&(n.blendColor(xt.r,xt.g,xt.b,Ot),C.copy(xt),N=Ot),m=O,b=!1}function Z(O,ye){O.side===$n?re(n.CULL_FACE):F(n.CULL_FACE);let J=O.side===Kt;ye&&(J=!J),te(J),O.blending===Tr&&O.transparent===!1?x(vi):x(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const le=O.stencilWrite;a.setTest(le),le&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ce(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?F(n.SAMPLE_ALPHA_TO_COVERAGE):re(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){y!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),y=O)}function ne(O){O!==pv?(F(n.CULL_FACE),O!==P&&(O===ff?n.cullFace(n.BACK):O===mv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):re(n.CULL_FACE),P=O}function Y(O){O!==Q&&($&&n.lineWidth(O),Q=O)}function ce(O,ye,J){O?(F(n.POLYGON_OFFSET_FILL),(G!==ye||oe!==J)&&(n.polygonOffset(ye,J),G=ye,oe=J)):re(n.POLYGON_OFFSET_FILL)}function V(O){O?F(n.SCISSOR_TEST):re(n.SCISSOR_TEST)}function S(O){O===void 0&&(O=n.TEXTURE0+se-1),ge!==O&&(n.activeTexture(O),ge=O)}function g(O,ye,J){J===void 0&&(ge===null?J=n.TEXTURE0+se-1:J=ge);let le=Me[J];le===void 0&&(le={type:void 0,texture:void 0},Me[J]=le),(le.type!==O||le.texture!==ye)&&(ge!==J&&(n.activeTexture(J),ge=J),n.bindTexture(O,ye||_e[O]),le.type=O,le.texture=ye)}function I(){const O=Me[ge];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function H(){try{n.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function W(){try{n.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{n.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{n.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Oe(){try{n.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(O){je.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),je.copy(O))}function xe(O){ie.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function $e(O,ye){let J=c.get(ye);J===void 0&&(J=new WeakMap,c.set(ye,J));let le=J.get(O);le===void 0&&(le=n.getUniformBlockIndex(ye,O.name),J.set(O,le))}function We(O,ye){const le=c.get(ye).get(O);l.get(ye)!==le&&(n.uniformBlockBinding(ye,le,O.__bindingPointIndex),l.set(ye,le))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,Me={},f={},h=new WeakMap,p=[],_=null,v=!1,m=null,d=null,w=null,A=null,E=null,U=null,D=null,C=new et(0,0,0),N=0,b=!1,y=null,P=null,Q=null,G=null,oe=null,je.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:re,bindFramebuffer:ae,drawBuffers:ue,useProgram:T,setBlending:x,setMaterial:Z,setFlipSided:te,setCullFace:ne,setLineWidth:Y,setPolygonOffset:ce,setScissorTest:V,activeTexture:S,bindTexture:g,unbindTexture:I,compressedTexImage2D:H,compressedTexImage3D:K,texImage2D:be,texImage3D:Oe,updateUBOMapping:$e,uniformBlockBinding:We,texStorage2D:De,texStorage3D:fe,texSubImage2D:W,texSubImage3D:pe,compressedTexSubImage2D:de,compressedTexSubImage3D:Ce,scissor:Ie,viewport:xe,reset:dt}}function fE(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return p?new OffscreenCanvas(S,g):Wo("canvas")}function v(S,g,I){let H=1;const K=V(S);if((K.width>I||K.height>I)&&(H=I/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const W=Math.floor(H*K.width),pe=Math.floor(H*K.height);f===void 0&&(f=_(W,pe));const de=g?_(W,pe):f;return de.width=W,de.height=pe,de.getContext("2d").drawImage(S,0,0,W,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+W+"x"+pe+")."),de}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),S;return S}function m(S){return S.generateMipmaps}function d(S){n.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(S,g,I,H,K=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let W=g;if(g===n.RED&&(I===n.FLOAT&&(W=n.R32F),I===n.HALF_FLOAT&&(W=n.R16F),I===n.UNSIGNED_BYTE&&(W=n.R8)),g===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.R8UI),I===n.UNSIGNED_SHORT&&(W=n.R16UI),I===n.UNSIGNED_INT&&(W=n.R32UI),I===n.BYTE&&(W=n.R8I),I===n.SHORT&&(W=n.R16I),I===n.INT&&(W=n.R32I)),g===n.RG&&(I===n.FLOAT&&(W=n.RG32F),I===n.HALF_FLOAT&&(W=n.RG16F),I===n.UNSIGNED_BYTE&&(W=n.RG8)),g===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RG8UI),I===n.UNSIGNED_SHORT&&(W=n.RG16UI),I===n.UNSIGNED_INT&&(W=n.RG32UI),I===n.BYTE&&(W=n.RG8I),I===n.SHORT&&(W=n.RG16I),I===n.INT&&(W=n.RG32I)),g===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RGB8UI),I===n.UNSIGNED_SHORT&&(W=n.RGB16UI),I===n.UNSIGNED_INT&&(W=n.RGB32UI),I===n.BYTE&&(W=n.RGB8I),I===n.SHORT&&(W=n.RGB16I),I===n.INT&&(W=n.RGB32I)),g===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),I===n.UNSIGNED_INT&&(W=n.RGBA32UI),I===n.BYTE&&(W=n.RGBA8I),I===n.SHORT&&(W=n.RGBA16I),I===n.INT&&(W=n.RGBA32I)),g===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),g===n.RGBA){const pe=K?Vo:Qe.getTransfer(H);I===n.FLOAT&&(W=n.RGBA32F),I===n.HALF_FLOAT&&(W=n.RGBA16F),I===n.UNSIGNED_BYTE&&(W=pe===lt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function E(S,g){let I;return S?g===null||g===Yi||g===bs?I=n.DEPTH24_STENCIL8:g===jn?I=n.DEPTH32F_STENCIL8:g===Es&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Yi||g===bs?I=n.DEPTH_COMPONENT24:g===jn?I=n.DEPTH_COMPONENT32F:g===Es&&(I=n.DEPTH_COMPONENT16),I}function U(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==bn&&S.minFilter!==Dn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function D(S){const g=S.target;g.removeEventListener("dispose",D),N(g),g.isVideoTexture&&u.delete(g)}function C(S){const g=S.target;g.removeEventListener("dispose",C),y(g)}function N(S){const g=i.get(S);if(g.__webglInit===void 0)return;const I=S.source,H=h.get(I);if(H){const K=H[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(S),Object.keys(H).length===0&&h.delete(I)}i.remove(S)}function b(S){const g=i.get(S);n.deleteTexture(g.__webglTexture);const I=S.source,H=h.get(I);delete H[g.__cacheKey],o.memory.textures--}function y(S){const g=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let K=0;K<g.__webglFramebuffer[H].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[H][K]);else n.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)n.deleteFramebuffer(g.__webglFramebuffer[H]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=S.textures;for(let H=0,K=I.length;H<K;H++){const W=i.get(I[H]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(I[H])}i.remove(S)}let P=0;function Q(){P=0}function G(){const S=P;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),P+=1,S}function oe(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function se(S,g){const I=i.get(S);if(S.isVideoTexture&&Y(S),S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){const H=S.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(I,S,g);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+g)}function $(S,g){const I=i.get(S);if(S.version>0&&I.__version!==S.version){ie(I,S,g);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+g)}function ee(S,g){const I=i.get(S);if(S.version>0&&I.__version!==S.version){ie(I,S,g);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+g)}function z(S,g){const I=i.get(S);if(S.version>0&&I.__version!==S.version){me(I,S,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+g)}const ge={[Nl]:n.REPEAT,[Gi]:n.CLAMP_TO_EDGE,[Fl]:n.MIRRORED_REPEAT},Me={[bn]:n.NEAREST,[Wv]:n.NEAREST_MIPMAP_NEAREST,[qs]:n.NEAREST_MIPMAP_LINEAR,[Dn]:n.LINEAR,[Ra]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},Ae={[Yv]:n.NEVER,[tx]:n.ALWAYS,[Kv]:n.LESS,[Vd]:n.LEQUAL,[Zv]:n.EQUAL,[ex]:n.GEQUAL,[Jv]:n.GREATER,[Qv]:n.NOTEQUAL};function Le(S,g){if(g.type===jn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dn||g.magFilter===Ra||g.magFilter===qs||g.magFilter===Wi||g.minFilter===Dn||g.minFilter===Ra||g.minFilter===qs||g.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,ge[g.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,ge[g.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,ge[g.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Me[g.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Me[g.minFilter]),g.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,Ae[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===bn||g.minFilter!==qs&&g.minFilter!==Wi||g.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function je(S,g){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",D));const H=g.source;let K=h.get(H);K===void 0&&(K={},h.set(H,K));const W=oe(g);if(W!==S.__cacheKey){K[W]===void 0&&(K[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),K[W].usedTimes++;const pe=K[S.__cacheKey];pe!==void 0&&(K[S.__cacheKey].usedTimes--,pe.usedTimes===0&&b(g)),S.__cacheKey=W,S.__webglTexture=K[W].texture}return I}function ie(S,g,I){let H=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=n.TEXTURE_3D);const K=je(S,g),W=g.source;t.bindTexture(H,S.__webglTexture,n.TEXTURE0+I);const pe=i.get(W);if(W.version!==pe.__version||K===!0){t.activeTexture(n.TEXTURE0+I);const de=Qe.getPrimaries(Qe.workingColorSpace),Ce=g.colorSpace===di?null:Qe.getPrimaries(g.colorSpace),De=g.colorSpace===di||de===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let fe=v(g.image,!1,r.maxTextureSize);fe=ce(g,fe);const be=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type);let Ie=A(g.internalFormat,be,Oe,g.colorSpace,g.isVideoTexture);Le(H,g);let xe;const $e=g.mipmaps,We=g.isVideoTexture!==!0,dt=pe.__version===void 0||K===!0,O=W.dataReady,ye=U(g,fe);if(g.isDepthTexture)Ie=E(g.format===ws,g.type),dt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Ie,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,Ie,fe.width,fe.height,0,be,Oe,null));else if(g.isDataTexture)if($e.length>0){We&&dt&&t.texStorage2D(n.TEXTURE_2D,ye,Ie,$e[0].width,$e[0].height);for(let J=0,le=$e.length;J<le;J++)xe=$e[J],We?O&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,be,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,J,Ie,xe.width,xe.height,0,be,Oe,xe.data);g.generateMipmaps=!1}else We?(dt&&t.texStorage2D(n.TEXTURE_2D,ye,Ie,fe.width,fe.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,be,Oe,fe.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,fe.width,fe.height,0,be,Oe,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){We&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ie,$e[0].width,$e[0].height,fe.depth);for(let J=0,le=$e.length;J<le;J++)if(xe=$e[J],g.format!==yn)if(be!==null)if(We){if(O)if(g.layerUpdates.size>0){const Te=Ff(xe.width,xe.height,g.format,g.type);for(const Ee of g.layerUpdates){const Ve=xe.data.subarray(Ee*Te/xe.data.BYTES_PER_ELEMENT,(Ee+1)*Te/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Ee,xe.width,xe.height,1,be,Ve)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,fe.depth,be,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Ie,xe.width,xe.height,fe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,xe.width,xe.height,fe.depth,be,Oe,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Ie,xe.width,xe.height,fe.depth,0,be,Oe,xe.data)}else{We&&dt&&t.texStorage2D(n.TEXTURE_2D,ye,Ie,$e[0].width,$e[0].height);for(let J=0,le=$e.length;J<le;J++)xe=$e[J],g.format!==yn?be!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?O&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,xe.width,xe.height,be,Oe,xe.data):t.texImage2D(n.TEXTURE_2D,J,Ie,xe.width,xe.height,0,be,Oe,xe.data)}else if(g.isDataArrayTexture)if(We){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ie,fe.width,fe.height,fe.depth),O)if(g.layerUpdates.size>0){const J=Ff(fe.width,fe.height,g.format,g.type);for(const le of g.layerUpdates){const Te=fe.data.subarray(le*J/fe.data.BYTES_PER_ELEMENT,(le+1)*J/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,fe.width,fe.height,1,be,Oe,Te)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,be,Oe,fe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,fe.width,fe.height,fe.depth,0,be,Oe,fe.data);else if(g.isData3DTexture)We?(dt&&t.texStorage3D(n.TEXTURE_3D,ye,Ie,fe.width,fe.height,fe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,be,Oe,fe.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,fe.width,fe.height,fe.depth,0,be,Oe,fe.data);else if(g.isFramebufferTexture){if(dt)if(We)t.texStorage2D(n.TEXTURE_2D,ye,Ie,fe.width,fe.height);else{let J=fe.width,le=fe.height;for(let Te=0;Te<ye;Te++)t.texImage2D(n.TEXTURE_2D,Te,Ie,J,le,0,be,Oe,null),J>>=1,le>>=1}}else if($e.length>0){if(We&&dt){const J=V($e[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ie,J.width,J.height)}for(let J=0,le=$e.length;J<le;J++)xe=$e[J],We?O&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,be,Oe,xe):t.texImage2D(n.TEXTURE_2D,J,Ie,be,Oe,xe);g.generateMipmaps=!1}else if(We){if(dt){const J=V(fe);t.texStorage2D(n.TEXTURE_2D,ye,Ie,J.width,J.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Oe,fe)}else t.texImage2D(n.TEXTURE_2D,0,Ie,be,Oe,fe);m(g)&&d(H),pe.__version=W.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function me(S,g,I){if(g.image.length!==6)return;const H=je(S,g),K=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+I);const W=i.get(K);if(K.version!==W.__version||H===!0){t.activeTexture(n.TEXTURE0+I);const pe=Qe.getPrimaries(Qe.workingColorSpace),de=g.colorSpace===di?null:Qe.getPrimaries(g.colorSpace),Ce=g.colorSpace===di||pe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const De=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!De&&!fe?be[le]=v(g.image[le],!0,r.maxCubemapSize):be[le]=fe?g.image[le].image:g.image[le],be[le]=ce(g,be[le]);const Oe=be[0],Ie=s.convert(g.format,g.colorSpace),xe=s.convert(g.type),$e=A(g.internalFormat,Ie,xe,g.colorSpace),We=g.isVideoTexture!==!0,dt=W.__version===void 0||H===!0,O=K.dataReady;let ye=U(g,Oe);Le(n.TEXTURE_CUBE_MAP,g);let J;if(De){We&&dt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,$e,Oe.width,Oe.height);for(let le=0;le<6;le++){J=be[le].mipmaps;for(let Te=0;Te<J.length;Te++){const Ee=J[Te];g.format!==yn?Ie!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,0,0,Ee.width,Ee.height,Ie,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,$e,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,0,0,Ee.width,Ee.height,Ie,xe,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te,$e,Ee.width,Ee.height,0,Ie,xe,Ee.data)}}}else{if(J=g.mipmaps,We&&dt){J.length>0&&ye++;const le=V(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,$e,le.width,le.height)}for(let le=0;le<6;le++)if(fe){We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,Ie,xe,be[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,be[le].width,be[le].height,0,Ie,xe,be[le].data);for(let Te=0;Te<J.length;Te++){const Ve=J[Te].image[le].image;We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,0,0,Ve.width,Ve.height,Ie,xe,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,$e,Ve.width,Ve.height,0,Ie,xe,Ve.data)}}else{We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie,xe,be[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,$e,Ie,xe,be[le]);for(let Te=0;Te<J.length;Te++){const Ee=J[Te];We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,0,0,Ie,xe,Ee.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Te+1,$e,Ie,xe,Ee.image[le])}}}m(g)&&d(n.TEXTURE_CUBE_MAP),W.__version=K.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function _e(S,g,I,H,K,W){const pe=s.convert(I.format,I.colorSpace),de=s.convert(I.type),Ce=A(I.internalFormat,pe,de,I.colorSpace),De=i.get(g),fe=i.get(I);if(fe.__renderTarget=g,!De.__hasExternalTextures){const be=Math.max(1,g.width>>W),Oe=Math.max(1,g.height>>W);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,W,Ce,be,Oe,g.depth,0,pe,de,null):t.texImage2D(K,W,Ce,be,Oe,0,pe,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ne(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,K,fe.__webglTexture,0,te(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,K,fe.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(S,g,I){if(n.bindRenderbuffer(n.RENDERBUFFER,S),g.depthBuffer){const H=g.depthTexture,K=H&&H.isDepthTexture?H.type:null,W=E(g.stencilBuffer,K),pe=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=te(g);ne(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de,W,g.width,g.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,de,W,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,W,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,S)}else{const H=g.textures;for(let K=0;K<H.length;K++){const W=H[K],pe=s.convert(W.format,W.colorSpace),de=s.convert(W.type),Ce=A(W.internalFormat,pe,de,W.colorSpace),De=te(g);I&&ne(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ce,g.width,g.height):ne(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Ce,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,Ce,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(g.depthTexture);H.__renderTarget=g,(!H.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),se(g.depthTexture,0);const K=H.__webglTexture,W=te(g);if(g.depthTexture.format===Ts)ne(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(g.depthTexture.format===ws)ne(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function ae(S){const g=i.get(S),I=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const H=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=H}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const H=S.texture.mipmaps;H&&H.length>0?re(g.__webglFramebuffer[0],S):re(g.__webglFramebuffer,S)}else if(I){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=n.createRenderbuffer(),F(g.__webglDepthbuffer[H],S,!1);else{const K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}else{const H=S.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),F(g.__webglDepthbuffer,S,!1);else{const K=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,W)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(S,g,I){const H=i.get(S);g!==void 0&&_e(H.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ae(S)}function T(S){const g=S.texture,I=i.get(S),H=i.get(g);S.addEventListener("dispose",C);const K=S.textures,W=S.isWebGLCubeRenderTarget===!0,pe=K.length>1;if(pe||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=g.version,o.memory.textures++),W){I.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[de]=[];for(let Ce=0;Ce<g.mipmaps.length;Ce++)I.__webglFramebuffer[de][Ce]=n.createFramebuffer()}else I.__webglFramebuffer[de]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)I.__webglFramebuffer[de]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(pe)for(let de=0,Ce=K.length;de<Ce;de++){const De=i.get(K[de]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&ne(S)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let de=0;de<K.length;de++){const Ce=K[de];I.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[de]);const De=s.convert(Ce.format,Ce.colorSpace),fe=s.convert(Ce.type),be=A(Ce.internalFormat,De,fe,Ce.colorSpace,S.isXRRenderTarget===!0),Oe=te(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,be,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,I.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),F(I.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Le(n.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)_e(I.__webglFramebuffer[de][Ce],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ce);else _e(I.__webglFramebuffer[de],S,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let de=0,Ce=K.length;de<Ce;de++){const De=K[de],fe=i.get(De);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),Le(n.TEXTURE_2D,De),_e(I.__webglFramebuffer,S,De,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),m(De)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(de=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,H.__webglTexture),Le(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Ce=0;Ce<g.mipmaps.length;Ce++)_e(I.__webglFramebuffer[Ce],S,g,n.COLOR_ATTACHMENT0,de,Ce);else _e(I.__webglFramebuffer,S,g,n.COLOR_ATTACHMENT0,de,0);m(g)&&d(de),t.unbindTexture()}S.depthBuffer&&ae(S)}function R(S){const g=S.textures;for(let I=0,H=g.length;I<H;I++){const K=g[I];if(m(K)){const W=w(S),pe=i.get(K).__webglTexture;t.bindTexture(W,pe),d(W),t.unbindTexture()}}}const L=[],x=[];function Z(S){if(S.samples>0){if(ne(S)===!1){const g=S.textures,I=S.width,H=S.height;let K=n.COLOR_BUFFER_BIT;const W=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(S),de=g.length>1;if(de)for(let De=0;De<g.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const Ce=S.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let De=0;De<g.length;De++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const fe=i.get(g[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,I,H,0,0,I,H,K,n.NEAREST),l===!0&&(L.length=0,x.length=0,L.push(n.COLOR_ATTACHMENT0+De),S.depthBuffer&&S.resolveDepthBuffer===!1&&(L.push(W),x.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let De=0;De<g.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,pe.__webglColorRenderbuffer[De]);const fe=i.get(g[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const g=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function te(S){return Math.min(r.maxSamples,S.samples)}function ne(S){const g=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Y(S){const g=o.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function ce(S,g){const I=S.colorSpace,H=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||I!==Or&&I!==di&&(Qe.getTransfer(I)===lt?(H!==yn||K!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),g}function V(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=Q,this.setTexture2D=se,this.setTexture2DArray=$,this.setTexture3D=ee,this.setTextureCube=z,this.rebindTextures=ue,this.setupRenderTarget=T,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ne}function hE(n,e){function t(i,r=di){let s;const o=Qe.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return n.BYTE;if(i===Nd)return n.SHORT;if(i===Es)return n.UNSIGNED_SHORT;if(i===Bc)return n.INT;if(i===Yi)return n.UNSIGNED_INT;if(i===jn)return n.FLOAT;if(i===Ps)return n.HALF_FLOAT;if(i===Od)return n.ALPHA;if(i===kd)return n.RGB;if(i===yn)return n.RGBA;if(i===Ts)return n.DEPTH_COMPONENT;if(i===ws)return n.DEPTH_STENCIL;if(i===Bd)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===zd)return n.RG;if(i===Gc)return n.RG_INTEGER;if(i===Wc)return n.RGBA_INTEGER;if(i===To||i===wo||i===Ao||i===Ro)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===kl||i===Bl||i===zl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ol)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Vl||i===Gl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hl||i===Vl)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Wl||i===Xl||i===$l||i===ql||i===jl||i===Yl||i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ql)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ec)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===rc||i===sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Co)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hd||i===oc||i===ac||i===lc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(i===oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const dE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
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

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wn({vertexShader:dE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kn(new ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends Xr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const v=new mE,m=t.getContextAttributes();let d=null,w=null;const A=[],E=[],U=new ht;let D=null;const C=new Yt;C.viewport=new St;const N=new Yt;N.viewport=new St;const b=[C,N],y=new Ox;let P=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=A[ie];return me===void 0&&(me=new Ka,A[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=A[ie];return me===void 0&&(me=new Ka,A[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=A[ie];return me===void 0&&(me=new Ka,A[ie]=me),me.getHandSpace()};function G(ie){const me=E.indexOf(ie.inputSource);if(me===-1)return;const _e=A[me];_e!==void 0&&(_e.update(ie.inputSource,ie.frame,c||o),_e.dispatchEvent({type:ie.type,data:ie.inputSource}))}function oe(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",oe),r.removeEventListener("inputsourceschange",se);for(let ie=0;ie<A.length;ie++){const me=E[ie];me!==null&&(E[ie]=null,A[ie].disconnect(me))}P=null,Q=null,v.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,w=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",oe),r.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,F=null,re=null;m.depth&&(re=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?ws:Ts,F=m.stencil?bs:Yi);const ae={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new Ki(h.textureWidth,h.textureHeight,{format:yn,type:Qn,depthTexture:new tp(h.textureWidth,h.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Ki(p.framebufferWidth,p.framebufferHeight,{format:yn,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function se(ie){for(let me=0;me<ie.removed.length;me++){const _e=ie.removed[me],F=E.indexOf(_e);F>=0&&(E[F]=null,A[F].disconnect(_e))}for(let me=0;me<ie.added.length;me++){const _e=ie.added[me];let F=E.indexOf(_e);if(F===-1){for(let ae=0;ae<A.length;ae++)if(ae>=E.length){E.push(_e),F=ae;break}else if(E[ae]===null){E[ae]=_e,F=ae;break}if(F===-1)break}const re=A[F];re&&re.connect(_e)}}const $=new j,ee=new j;function z(ie,me,_e){$.setFromMatrixPosition(me.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const F=$.distanceTo(ee),re=me.projectionMatrix.elements,ae=_e.projectionMatrix.elements,ue=re[14]/(re[10]-1),T=re[14]/(re[10]+1),R=(re[9]+1)/re[5],L=(re[9]-1)/re[5],x=(re[8]-1)/re[0],Z=(ae[8]+1)/ae[0],te=ue*x,ne=ue*Z,Y=F/(-x+Z),ce=Y*-x;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ce),ie.translateZ(Y),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),re[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const V=ue+Y,S=T+Y,g=te-ce,I=ne+(F-ce),H=R*T/S*V,K=L*T/S*V;ie.projectionMatrix.makePerspective(g,I,H,K,V,S),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ge(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,_e=ie.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),y.near=N.near=C.near=me,y.far=N.far=C.far=_e,(P!==y.near||Q!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,Q=y.far),C.layers.mask=ie.layers.mask|2,N.layers.mask=ie.layers.mask|4,y.layers.mask=C.layers.mask|N.layers.mask;const F=ie.parent,re=y.cameras;ge(y,F);for(let ae=0;ae<re.length;ae++)ge(re[ae],F);re.length===2?z(y,C,N):y.projectionMatrix.copy(C.projectionMatrix),Me(ie,y,F)};function Me(ie,me,_e){_e===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(_e.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=cc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let Ae=null;function Le(ie,me){if(u=me.getViewerPose(c||o),_=me,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let F=!1;_e.length!==y.cameras.length&&(y.cameras.length=0,F=!0);for(let ue=0;ue<_e.length;ue++){const T=_e[ue];let R=null;if(p!==null)R=p.getViewport(T);else{const x=f.getViewSubImage(h,T);R=x.viewport,ue===0&&(e.setRenderTargetTextures(w,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(w))}let L=b[ue];L===void 0&&(L=new Yt,L.layers.enable(ue),L.viewport=new St,b[ue]=L),L.matrix.fromArray(T.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(T.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(R.x,R.y,R.width,R.height),ue===0&&(y.matrix.copy(L.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),F===!0&&y.cameras.push(L)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const ue=f.getDepthInformation(_e[0]);ue&&ue.isValid&&ue.texture&&v.init(e,ue,r.renderState)}}for(let _e=0;_e<A.length;_e++){const F=E[_e],re=A[_e];F!==null&&re!==void 0&&re.update(F,me,c||o)}Ae&&Ae(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),_=null}const je=new np;je.setAnimationLoop(Le),this.setAnimationLoop=function(ie){Ae=ie},this.dispose=function(){}}}const Ui=new ei,_E=new Et;function vE(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Zd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,w,A,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,w,A):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Kt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Kt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const w=e.get(d),A=w.envMap,E=w.envMapRotation;A&&(m.envMap.value=A,Ui.copy(E),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(Ui)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,w,A){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*w,m.scale.value=A*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,w){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Kt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const w=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xE(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const E=A.program;i.uniformBlockBinding(w,E)}function c(w,A){let E=r[w.id];E===void 0&&(_(w),E=u(w),r[w.id]=E,w.addEventListener("dispose",m));const U=A.program;i.updateUBOMapping(w,U);const D=e.render.frame;s[w.id]!==D&&(h(w),s[w.id]=D)}function u(w){const A=f();w.__bindingPointIndex=A;const E=n.createBuffer(),U=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,E),E}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const A=r[w.id],E=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let D=0,C=E.length;D<C;D++){const N=Array.isArray(E[D])?E[D]:[E[D]];for(let b=0,y=N.length;b<y;b++){const P=N[b];if(p(P,D,b,U)===!0){const Q=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let oe=0;for(let se=0;se<G.length;se++){const $=G[se],ee=v($);typeof $=="number"||typeof $=="boolean"?(P.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,Q+oe,P.__data)):$.isMatrix3?(P.__data[0]=$.elements[0],P.__data[1]=$.elements[1],P.__data[2]=$.elements[2],P.__data[3]=0,P.__data[4]=$.elements[3],P.__data[5]=$.elements[4],P.__data[6]=$.elements[5],P.__data[7]=0,P.__data[8]=$.elements[6],P.__data[9]=$.elements[7],P.__data[10]=$.elements[8],P.__data[11]=0):($.toArray(P.__data,oe),oe+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,A,E,U){const D=w.value,C=A+"_"+E;if(U[C]===void 0)return typeof D=="number"||typeof D=="boolean"?U[C]=D:U[C]=D.clone(),!0;{const N=U[C];if(typeof D=="number"||typeof D=="boolean"){if(N!==D)return U[C]=D,!0}else if(N.equals(D)===!1)return N.copy(D),!0}return!1}function _(w){const A=w.uniforms;let E=0;const U=16;for(let C=0,N=A.length;C<N;C++){const b=Array.isArray(A[C])?A[C]:[A[C]];for(let y=0,P=b.length;y<P;y++){const Q=b[y],G=Array.isArray(Q.value)?Q.value:[Q.value];for(let oe=0,se=G.length;oe<se;oe++){const $=G[oe],ee=v($),z=E%U,ge=z%ee.boundary,Me=z+ge;E+=ge,Me!==0&&U-Me<ee.storage&&(E+=U-Me),Q.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=E,E+=ee.storage}}}const D=E%U;return D>0&&(E+=U-D),w.__size=E,w.__cache={},this}function v(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function m(w){const A=w.target;A.removeEventListener("dispose",m);const E=o.indexOf(A.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Yc{constructor(e={}){const{canvas:t=ix(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,d=null;const w=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let U=!1;this._outputColorSpace=hn;let D=0,C=0,N=null,b=-1,y=null;const P=new St,Q=new St;let G=null;const oe=new et(0);let se=0,$=t.width,ee=t.height,z=1,ge=null,Me=null;const Ae=new St(0,0,$,ee),Le=new St(0,0,$,ee);let je=!1;const ie=new ep;let me=!1,_e=!1;const F=new Et,re=new Et,ae=new j,ue=new St,T={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function L(){return N===null?z:1}let x=i;function Z(M,k){return t.getContext(M,k)}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),x===null){const k="webgl2";if(x=Z(k,M),x===null)throw Z(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let te,ne,Y,ce,V,S,g,I,H,K,W,pe,de,Ce,De,fe,be,Oe,Ie,xe,$e,We,dt,O;function ye(){te=new PS(x),te.init(),We=new hE(x,te),ne=new ES(x,te,e,We),Y=new uE(x,te),ne.reverseDepthBuffer&&h&&Y.buffers.depth.setReversed(!0),ce=new LS(x),V=new Zy,S=new fE(x,te,Y,V,ne,We,ce),g=new TS(E),I=new CS(E),H=new Bx(x),dt=new SS(x,H),K=new IS(x,H,ce,dt),W=new NS(x,K,H,ce),Ie=new US(x,ne,S),fe=new bS(V),pe=new Ky(E,g,I,te,ne,dt,fe),de=new vE(E,V),Ce=new Qy,De=new sE(te),Oe=new MS(E,g,I,Y,W,p,l),be=new lE(E,W,ne),O=new xE(x,ce,ne,Y),xe=new yS(x,te,ce),$e=new DS(x,te,ce),ce.programs=pe.programs,E.capabilities=ne,E.extensions=te,E.properties=V,E.renderLists=Ce,E.shadowMap=be,E.state=Y,E.info=ce}ye();const J=new gE(E,x);this.xr=J,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const M=te.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=te.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(M){M!==void 0&&(z=M,this.setSize($,ee,!1))},this.getSize=function(M){return M.set($,ee)},this.setSize=function(M,k,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,ee=k,t.width=Math.floor(M*z),t.height=Math.floor(k*z),X===!0&&(t.style.width=M+"px",t.style.height=k+"px"),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set($*z,ee*z).floor()},this.setDrawingBufferSize=function(M,k,X){$=M,ee=k,z=X,t.width=Math.floor(M*X),t.height=Math.floor(k*X),this.setViewport(0,0,M,k)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(Ae)},this.setViewport=function(M,k,X,q){M.isVector4?Ae.set(M.x,M.y,M.z,M.w):Ae.set(M,k,X,q),Y.viewport(P.copy(Ae).multiplyScalar(z).round())},this.getScissor=function(M){return M.copy(Le)},this.setScissor=function(M,k,X,q){M.isVector4?Le.set(M.x,M.y,M.z,M.w):Le.set(M,k,X,q),Y.scissor(Q.copy(Le).multiplyScalar(z).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(M){Y.setScissorTest(je=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){Me=M},this.getClearColor=function(M){return M.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,X=!0){let q=0;if(M){let B=!1;if(N!==null){const he=N.texture.format;B=he===Wc||he===Gc||he===Vc}if(B){const he=N.texture.type,Se=he===Qn||he===Yi||he===Es||he===bs||he===zc||he===Hc,we=Oe.getClearColor(),Re=Oe.getClearAlpha(),ze=we.r,Be=we.g,Ue=we.b;Se?(_[0]=ze,_[1]=Be,_[2]=Ue,_[3]=Re,x.clearBufferuiv(x.COLOR,0,_)):(v[0]=ze,v[1]=Be,v[2]=Ue,v[3]=Re,x.clearBufferiv(x.COLOR,0,v))}else q|=x.COLOR_BUFFER_BIT}k&&(q|=x.DEPTH_BUFFER_BIT),X&&(q|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Oe.dispose(),Ce.dispose(),De.dispose(),V.dispose(),g.dispose(),I.dispose(),W.dispose(),dt.dispose(),O.dispose(),pe.dispose(),J.dispose(),J.removeEventListener("sessionstart",ru),J.removeEventListener("sessionend",su),Ti.stop()};function le(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const M=ce.autoReset,k=be.enabled,X=be.autoUpdate,q=be.needsUpdate,B=be.type;ye(),ce.autoReset=M,be.enabled=k,be.autoUpdate=X,be.needsUpdate=q,be.type=B}function Ee(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ve(M){const k=M.target;k.removeEventListener("dispose",Ve),xt(k)}function xt(M){Ot(M),V.remove(M)}function Ot(M){const k=V.get(M).programs;k!==void 0&&(k.forEach(function(X){pe.releaseProgram(X)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,X,q,B,he){k===null&&(k=T);const Se=B.isMesh&&B.matrixWorld.determinant()<0,we=wp(M,k,X,q,B);Y.setMaterial(q,Se);let Re=X.index,ze=1;if(q.wireframe===!0){if(Re=K.getWireframeAttribute(X),Re===void 0)return;ze=2}const Be=X.drawRange,Ue=X.attributes.position;let Ye=Be.start*ze,tt=(Be.start+Be.count)*ze;he!==null&&(Ye=Math.max(Ye,he.start*ze),tt=Math.min(tt,(he.start+he.count)*ze)),Re!==null?(Ye=Math.max(Ye,0),tt=Math.min(tt,Re.count)):Ue!=null&&(Ye=Math.max(Ye,0),tt=Math.min(tt,Ue.count));const bt=tt-Ye;if(bt<0||bt===1/0)return;dt.setup(B,q,we,X,Re);let Mt,Je=xe;if(Re!==null&&(Mt=H.get(Re),Je=$e,Je.setIndex(Mt)),B.isMesh)q.wireframe===!0?(Y.setLineWidth(q.wireframeLinewidth*L()),Je.setMode(x.LINES)):Je.setMode(x.TRIANGLES);else if(B.isLine){let Ne=q.linewidth;Ne===void 0&&(Ne=1),Y.setLineWidth(Ne*L()),B.isLineSegments?Je.setMode(x.LINES):B.isLineLoop?Je.setMode(x.LINE_LOOP):Je.setMode(x.LINE_STRIP)}else B.isPoints?Je.setMode(x.POINTS):B.isSprite&&Je.setMode(x.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Po("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))Je.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ne=B._multiDrawStarts,Ut=B._multiDrawCounts,nt=B._multiDrawCount,mn=Re?H.get(Re).bytesPerElement:1,tr=V.get(q).currentProgram.getUniforms();for(let en=0;en<nt;en++)tr.setValue(x,"_gl_DrawID",en),Je.render(Ne[en]/mn,Ut[en])}else if(B.isInstancedMesh)Je.renderInstances(Ye,bt,B.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ut=Math.min(X.instanceCount,Ne);Je.renderInstances(Ye,bt,Ut)}else Je.render(Ye,bt)};function st(M,k,X){M.transparent===!0&&M.side===$n&&M.forceSinglePass===!1?(M.side=Kt,M.needsUpdate=!0,Bs(M,k,X),M.side=Ei,M.needsUpdate=!0,Bs(M,k,X),M.side=$n):Bs(M,k,X)}this.compile=function(M,k,X=null){X===null&&(X=M),d=De.get(X),d.init(k),A.push(d),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),M!==X&&M.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights();const q=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const he=B.material;if(he)if(Array.isArray(he))for(let Se=0;Se<he.length;Se++){const we=he[Se];st(we,X,B),q.add(we)}else st(he,X,B),q.add(he)}),d=A.pop(),q},this.compileAsync=function(M,k,X=null){const q=this.compile(M,k,X);return new Promise(B=>{function he(){if(q.forEach(function(Se){V.get(Se).currentProgram.isReady()&&q.delete(Se)}),q.size===0){B(M);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let pn=null;function On(M){pn&&pn(M)}function ru(){Ti.stop()}function su(){Ti.start()}const Ti=new np;Ti.setAnimationLoop(On),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){pn=M,J.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},J.addEventListener("sessionstart",ru),J.addEventListener("sessionend",su),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(k),k=J.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,k,N),d=De.get(M,A.length),d.init(k),A.push(d),re.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ie.setFromProjectionMatrix(re),_e=this.localClippingEnabled,me=fe.init(this.clippingPlanes,_e),m=Ce.get(M,w.length),m.init(),w.push(m),J.enabled===!0&&J.isPresenting===!0){const he=E.xr.getDepthSensingMesh();he!==null&&va(he,k,-1/0,E.sortObjects)}va(M,k,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ge,Me),R=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,R&&Oe.addToRenderList(m,M),this.info.render.frame++,me===!0&&fe.beginShadows();const X=d.state.shadowsArray;be.render(X,M,k),me===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(d.setupLights(),k.isArrayCamera){const he=k.cameras;if(B.length>0)for(let Se=0,we=he.length;Se<we;Se++){const Re=he[Se];au(q,B,M,Re)}R&&Oe.render(M);for(let Se=0,we=he.length;Se<we;Se++){const Re=he[Se];ou(m,M,Re,Re.viewport)}}else B.length>0&&au(q,B,M,k),R&&Oe.render(M),ou(m,M,k);N!==null&&C===0&&(S.updateMultisampleRenderTarget(N),S.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(E,M,k),dt.resetDefaultState(),b=-1,y=null,A.pop(),A.length>0?(d=A[A.length-1],me===!0&&fe.setGlobalState(E.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function va(M,k,X,q){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ie.intersectsSprite(M)){q&&ue.setFromMatrixPosition(M.matrixWorld).applyMatrix4(re);const Se=W.update(M),we=M.material;we.visible&&m.push(M,Se,we,X,ue.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||ie.intersectsObject(M))){const Se=W.update(M),we=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ue.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),ue.copy(Se.boundingSphere.center)),ue.applyMatrix4(M.matrixWorld).applyMatrix4(re)),Array.isArray(we)){const Re=Se.groups;for(let ze=0,Be=Re.length;ze<Be;ze++){const Ue=Re[ze],Ye=we[Ue.materialIndex];Ye&&Ye.visible&&m.push(M,Se,Ye,X,ue.z,Ue)}}else we.visible&&m.push(M,Se,we,X,ue.z,null)}}const he=M.children;for(let Se=0,we=he.length;Se<we;Se++)va(he[Se],k,X,q)}function ou(M,k,X,q){const B=M.opaque,he=M.transmissive,Se=M.transparent;d.setupLightsView(X),me===!0&&fe.setGlobalState(E.clippingPlanes,X),q&&Y.viewport(P.copy(q)),B.length>0&&ks(B,k,X),he.length>0&&ks(he,k,X),Se.length>0&&ks(Se,k,X),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function au(M,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[q.id]===void 0&&(d.state.transmissionRenderTarget[q.id]=new Ki(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Ps:Qn,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const he=d.state.transmissionRenderTarget[q.id],Se=q.viewport||P;he.setSize(Se.z*E.transmissionResolutionScale,Se.w*E.transmissionResolutionScale);const we=E.getRenderTarget();E.setRenderTarget(he),E.getClearColor(oe),se=E.getClearAlpha(),se<1&&E.setClearColor(16777215,.5),E.clear(),R&&Oe.render(X);const Re=E.toneMapping;E.toneMapping=xi;const ze=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),d.setupLightsView(q),me===!0&&fe.setGlobalState(E.clippingPlanes,q),ks(M,X,q),S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he),te.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ue=0,Ye=k.length;Ue<Ye;Ue++){const tt=k[Ue],bt=tt.object,Mt=tt.geometry,Je=tt.material,Ne=tt.group;if(Je.side===$n&&bt.layers.test(q.layers)){const Ut=Je.side;Je.side=Kt,Je.needsUpdate=!0,lu(bt,X,q,Mt,Je,Ne),Je.side=Ut,Je.needsUpdate=!0,Be=!0}}Be===!0&&(S.updateMultisampleRenderTarget(he),S.updateRenderTargetMipmap(he))}E.setRenderTarget(we),E.setClearColor(oe,se),ze!==void 0&&(q.viewport=ze),E.toneMapping=Re}function ks(M,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,he=M.length;B<he;B++){const Se=M[B],we=Se.object,Re=Se.geometry,ze=Se.group;let Be=Se.material;Be.allowOverride===!0&&q!==null&&(Be=q),we.layers.test(X.layers)&&lu(we,k,X,Re,Be,ze)}}function lu(M,k,X,q,B,he){M.onBeforeRender(E,k,X,q,B,he),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(E,k,X,q,M,he),B.transparent===!0&&B.side===$n&&B.forceSinglePass===!1?(B.side=Kt,B.needsUpdate=!0,E.renderBufferDirect(X,k,q,B,M,he),B.side=Ei,B.needsUpdate=!0,E.renderBufferDirect(X,k,q,B,M,he),B.side=$n):E.renderBufferDirect(X,k,q,B,M,he),M.onAfterRender(E,k,X,q,B,he)}function Bs(M,k,X){k.isScene!==!0&&(k=T);const q=V.get(M),B=d.state.lights,he=d.state.shadowsArray,Se=B.state.version,we=pe.getParameters(M,B.state,he,k,X),Re=pe.getProgramCacheKey(we);let ze=q.programs;q.environment=M.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(M.isMeshStandardMaterial?I:g).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",Ve),ze=new Map,q.programs=ze);let Be=ze.get(Re);if(Be!==void 0){if(q.currentProgram===Be&&q.lightsStateVersion===Se)return uu(M,we),Be}else we.uniforms=pe.getUniforms(M),M.onBeforeCompile(we,E),Be=pe.acquireProgram(we,Re),ze.set(Re,Be),q.uniforms=we.uniforms;const Ue=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),uu(M,we),q.needsLights=Rp(M),q.lightsStateVersion=Se,q.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Be,q.uniformsList=null,Be}function cu(M){if(M.uniformsList===null){const k=M.currentProgram.getUniforms();M.uniformsList=Io.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function uu(M,k){const X=V.get(M);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function wp(M,k,X,q,B){k.isScene!==!0&&(k=T),S.resetTextureUnits();const he=k.fog,Se=q.isMeshStandardMaterial?k.environment:null,we=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Or,Re=(q.isMeshStandardMaterial?I:g).get(q.envMap||Se),ze=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ue=!!X.morphAttributes.position,Ye=!!X.morphAttributes.normal,tt=!!X.morphAttributes.color;let bt=xi;q.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(bt=E.toneMapping);const Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Je=Mt!==void 0?Mt.length:0,Ne=V.get(q),Ut=d.state.lights;if(me===!0&&(_e===!0||M!==y)){const Ht=M===y&&q.id===b;fe.setState(q,M,Ht)}let nt=!1;q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ut.state.version||Ne.outputColorSpace!==we||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==Re||q.fog===!0&&Ne.fog!==he||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==fe.numPlanes||Ne.numIntersection!==fe.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==Be||Ne.morphTargets!==Ue||Ne.morphNormals!==Ye||Ne.morphColors!==tt||Ne.toneMapping!==bt||Ne.morphTargetsCount!==Je)&&(nt=!0):(nt=!0,Ne.__version=q.version);let mn=Ne.currentProgram;nt===!0&&(mn=Bs(q,k,B));let tr=!1,en=!1,qr=!1;const vt=mn.getUniforms(),cn=Ne.uniforms;if(Y.useProgram(mn.program)&&(tr=!0,en=!0,qr=!0),q.id!==b&&(b=q.id,en=!0),tr||y!==M){Y.buffers.depth.getReversed()?(F.copy(M.projectionMatrix),sx(F),ox(F),vt.setValue(x,"projectionMatrix",F)):vt.setValue(x,"projectionMatrix",M.projectionMatrix),vt.setValue(x,"viewMatrix",M.matrixWorldInverse);const Xt=vt.map.cameraPosition;Xt!==void 0&&Xt.setValue(x,ae.setFromMatrixPosition(M.matrixWorld)),ne.logarithmicDepthBuffer&&vt.setValue(x,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&vt.setValue(x,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,en=!0,qr=!0)}if(B.isSkinnedMesh){vt.setOptional(x,B,"bindMatrix"),vt.setOptional(x,B,"bindMatrixInverse");const Ht=B.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),vt.setValue(x,"boneTexture",Ht.boneTexture,S))}B.isBatchedMesh&&(vt.setOptional(x,B,"batchingTexture"),vt.setValue(x,"batchingTexture",B._matricesTexture,S),vt.setOptional(x,B,"batchingIdTexture"),vt.setValue(x,"batchingIdTexture",B._indirectTexture,S),vt.setOptional(x,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(x,"batchingColorTexture",B._colorsTexture,S));const un=X.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Ie.update(B,X,mn),(en||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,vt.setValue(x,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(cn.envMap.value=Re,cn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(cn.envMapIntensity.value=k.environmentIntensity),en&&(vt.setValue(x,"toneMappingExposure",E.toneMappingExposure),Ne.needsLights&&Ap(cn,qr),he&&q.fog===!0&&de.refreshFogUniforms(cn,he),de.refreshMaterialUniforms(cn,q,z,ee,d.state.transmissionRenderTarget[M.id]),Io.upload(x,cu(Ne),cn,S)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Io.upload(x,cu(Ne),cn,S),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&vt.setValue(x,"center",B.center),vt.setValue(x,"modelViewMatrix",B.modelViewMatrix),vt.setValue(x,"normalMatrix",B.normalMatrix),vt.setValue(x,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ht=q.uniformsGroups;for(let Xt=0,xa=Ht.length;Xt<xa;Xt++){const wi=Ht[Xt];O.update(wi,mn),O.bind(wi,mn)}}return mn}function Ap(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function Rp(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,k,X){const q=V.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),V.get(M.texture).__webglTexture=k,V.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:X,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){const X=V.get(M);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};const Cp=x.createFramebuffer();this.setRenderTarget=function(M,k=0,X=0){N=M,D=k,C=X;let q=!0,B=null,he=!1,Se=!1;if(M){const Re=V.get(M);if(Re.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(x.FRAMEBUFFER,null),q=!1;else if(Re.__webglFramebuffer===void 0)S.setupRenderTarget(M);else if(Re.__hasExternalTextures)S.rebindTextures(M,V.get(M.texture).__webglTexture,V.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(Re.__boundDepthTexture!==Ue){if(Ue!==null&&V.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(M)}}const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const Be=V.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?B=Be[k][X]:B=Be[k],he=!0):M.samples>0&&S.useMultisampledRTT(M)===!1?B=V.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?B=Be[X]:B=Be,P.copy(M.viewport),Q.copy(M.scissor),G=M.scissorTest}else P.copy(Ae).multiplyScalar(z).floor(),Q.copy(Le).multiplyScalar(z).floor(),G=je;if(X!==0&&(B=Cp),Y.bindFramebuffer(x.FRAMEBUFFER,B)&&q&&Y.drawBuffers(M,B),Y.viewport(P),Y.scissor(Q),Y.setScissorTest(G),he){const Re=V.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,X)}else if(Se){const Re=V.get(M.texture),ze=k;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Re.__webglTexture,X,ze)}else if(M!==null&&X!==0){const Re=V.get(M.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Re.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(M,k,X,q,B,he,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Y.bindFramebuffer(x.FRAMEBUFFER,we);try{const Re=M.texture,ze=Re.format,Be=Re.type;if(!ne.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-q&&X>=0&&X<=M.height-B&&x.readPixels(k,X,q,B,We.convert(ze),We.convert(Be),he)}finally{const Re=N!==null?V.get(N).__webglFramebuffer:null;Y.bindFramebuffer(x.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,k,X,q,B,he,Se){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=V.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(k>=0&&k<=M.width-q&&X>=0&&X<=M.height-B){Y.bindFramebuffer(x.FRAMEBUFFER,we);const Re=M.texture,ze=Re.format,Be=Re.type;if(!ne.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ue),x.bufferData(x.PIXEL_PACK_BUFFER,he.byteLength,x.STREAM_READ),x.readPixels(k,X,q,B,We.convert(ze),We.convert(Be),0);const Ye=N!==null?V.get(N).__webglFramebuffer:null;Y.bindFramebuffer(x.FRAMEBUFFER,Ye);const tt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await rx(x,tt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ue),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,he),x.deleteBuffer(Ue),x.deleteSync(tt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,X=0){const q=Math.pow(2,-X),B=Math.floor(M.image.width*q),he=Math.floor(M.image.height*q),Se=k!==null?k.x:0,we=k!==null?k.y:0;S.setTexture2D(M,0),x.copyTexSubImage2D(x.TEXTURE_2D,X,0,0,Se,we,B,he),Y.unbindTexture()};const Pp=x.createFramebuffer(),Ip=x.createFramebuffer();this.copyTextureToTexture=function(M,k,X=null,q=null,B=0,he=null){he===null&&(B!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=B,B=0):he=0);let Se,we,Re,ze,Be,Ue,Ye,tt,bt;const Mt=M.isCompressedTexture?M.mipmaps[he]:M.image;if(X!==null)Se=X.max.x-X.min.x,we=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,ze=X.min.x,Be=X.min.y,Ue=X.isBox3?X.min.z:0;else{const un=Math.pow(2,-B);Se=Math.floor(Mt.width*un),we=Math.floor(Mt.height*un),M.isDataArrayTexture?Re=Mt.depth:M.isData3DTexture?Re=Math.floor(Mt.depth*un):Re=1,ze=0,Be=0,Ue=0}q!==null?(Ye=q.x,tt=q.y,bt=q.z):(Ye=0,tt=0,bt=0);const Je=We.convert(k.format),Ne=We.convert(k.type);let Ut;k.isData3DTexture?(S.setTexture3D(k,0),Ut=x.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(S.setTexture2DArray(k,0),Ut=x.TEXTURE_2D_ARRAY):(S.setTexture2D(k,0),Ut=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,k.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,k.unpackAlignment);const nt=x.getParameter(x.UNPACK_ROW_LENGTH),mn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),tr=x.getParameter(x.UNPACK_SKIP_PIXELS),en=x.getParameter(x.UNPACK_SKIP_ROWS),qr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Mt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Mt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ze),x.pixelStorei(x.UNPACK_SKIP_ROWS,Be),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ue);const vt=M.isDataArrayTexture||M.isData3DTexture,cn=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){const un=V.get(M),Ht=V.get(k),Xt=V.get(un.__renderTarget),xa=V.get(Ht.__renderTarget);Y.bindFramebuffer(x.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Y.bindFramebuffer(x.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let wi=0;wi<Re;wi++)vt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,V.get(M).__webglTexture,B,Ue+wi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,V.get(k).__webglTexture,he,bt+wi)),x.blitFramebuffer(ze,Be,Se,we,Ye,tt,Se,we,x.DEPTH_BUFFER_BIT,x.NEAREST);Y.bindFramebuffer(x.READ_FRAMEBUFFER,null),Y.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||V.has(M)){const un=V.get(M),Ht=V.get(k);Y.bindFramebuffer(x.READ_FRAMEBUFFER,Pp),Y.bindFramebuffer(x.DRAW_FRAMEBUFFER,Ip);for(let Xt=0;Xt<Re;Xt++)vt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,un.__webglTexture,B,Ue+Xt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,un.__webglTexture,B),cn?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ht.__webglTexture,he,bt+Xt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ht.__webglTexture,he),B!==0?x.blitFramebuffer(ze,Be,Se,we,Ye,tt,Se,we,x.COLOR_BUFFER_BIT,x.NEAREST):cn?x.copyTexSubImage3D(Ut,he,Ye,tt,bt+Xt,ze,Be,Se,we):x.copyTexSubImage2D(Ut,he,Ye,tt,ze,Be,Se,we);Y.bindFramebuffer(x.READ_FRAMEBUFFER,null),Y.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else cn?M.isDataTexture||M.isData3DTexture?x.texSubImage3D(Ut,he,Ye,tt,bt,Se,we,Re,Je,Ne,Mt.data):k.isCompressedArrayTexture?x.compressedTexSubImage3D(Ut,he,Ye,tt,bt,Se,we,Re,Je,Mt.data):x.texSubImage3D(Ut,he,Ye,tt,bt,Se,we,Re,Je,Ne,Mt):M.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,he,Ye,tt,Se,we,Je,Ne,Mt.data):M.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,he,Ye,tt,Mt.width,Mt.height,Je,Mt.data):x.texSubImage2D(x.TEXTURE_2D,he,Ye,tt,Se,we,Je,Ne,Mt);x.pixelStorei(x.UNPACK_ROW_LENGTH,nt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,mn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,tr),x.pixelStorei(x.UNPACK_SKIP_ROWS,en),x.pixelStorei(x.UNPACK_SKIP_IMAGES,qr),he===0&&k.generateMipmaps&&x.generateMipmap(Ut),Y.unbindTexture()},this.copyTextureToTexture3D=function(M,k,X=null,q=null,B=0){return Po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,k,X,q,B)},this.initRenderTarget=function(M){V.get(M).__webglFramebuffer===void 0&&S.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),Y.unbindTexture()},this.resetState=function(){D=0,C=0,N=null,Y.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const ME=.6,SE=.3,yE=.8,EE=_t({__name:"IdleAnimation",setup(n){const e=gt(null);let t,i,r,s,o;ln(()=>{var _;i=new $c,i.background=new et(1315860),r=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.z=8,t=new Yc({antialias:!0}),t.setSize(window.innerWidth,window.innerHeight),(_=e.value)==null||_.appendChild(t.domElement);const l=1e5,c=new Float32Array(l*3),u=6.8;for(let v=0;v<l;v++){const m=Math.acos(-1+2*v/l),d=Math.sqrt(l*Math.PI)*m;c[v*3]=u*Math.cos(d)*Math.sin(m),c[v*3+1]=u*Math.sin(d)*Math.sin(m),c[v*3+2]=u*Math.cos(m)}const f=new An;f.setAttribute("position",new an(c,3));const h=new wn({uniforms:{time:{value:0},noiseScale:{value:ME},waveSpeed:{value:SE},waveWidth:{value:yE}},vertexShader:`
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
    `,transparent:!0,depthWrite:!0,blending:ys});s=new qc(f,h),s.position.y=-3,i.add(s);const p=()=>{o=requestAnimationFrame(p),h.uniforms.time.value+=.02,s.rotation.y+=.001,s.rotation.x+=3e-4,t.render(i,r)};p(),window.addEventListener("resize",a)}),Qi(()=>{cancelAnimationFrame(o),window.removeEventListener("resize",a)});const a=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};return(l,c)=>(ke(),it("div",{ref_key:"canvasContainer",ref:e,class:"canvas-container"},null,512))}}),bE=_t({__name:"IdleAnimation2",setup(n){const e=gt(null);let t,i,r,s,o;ln(()=>{var _;i=new $c,i.background=new et(1315860),r=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.z=4,t=new Yc({antialias:!0}),t.setSize(window.innerWidth,window.innerHeight),(_=e.value)==null||_.appendChild(t.domElement);const l=14e4,c=new Float32Array(l*3),u=5;for(let v=0;v<l;v++){const m=Math.acos(-1+2*v/l),d=Math.sqrt(l*Math.PI)*m;c[v*3]=u*Math.cos(d)*Math.sin(m),c[v*3.1+1]=u*Math.sin(d)*Math.sin(m),c[v*3+2]=u*Math.cos(m)}const f=new An;f.setAttribute("position",new an(c,3));const h=new wn({uniforms:{time:{value:0}},vertexShader:`
      uniform float time;
      varying float vOpacity;

      float hash(vec3 p) {
        p = fract(p * 0.3183099 + vec3(0.1,0.2,0.3));
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }

      float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);

        float n = mix(
          mix(
            mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
            mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x),
            f.y
          ),
          mix(
            mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
            mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x),
            f.y
          ),
          f.z
        );

        return n;
      }

      void main() {
        vec3 pos = position;

        float n1 = noise(pos * 0.04 + time * 1.4);
        float n2 = noise(pos * 0.06 + time * 0.8);
        float n3 = noise(pos * 0.22 + time * 1.0);

        float combined = (n1 * 0.6 + n2 * 0.3 + n3 * 0.1);
        float flamePush = combined * 0.6;

        pos += pos * 0.0 + (combined * 1.6);

        float upward = (pos.y + 1.0) * 0.1;

        vOpacity = clamp(combined * 1.2 + upward, 0.0, 1.0);

        float flicker = noise(pos * 2.5 + time * 5.0) * 0.5 + 0.5;
        vOpacity *= flicker;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = 1.0;
      }
    `,fragmentShader:`
      varying float vOpacity;
      void main() {
        gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity);
      }
    `,transparent:!0,depthWrite:!1,blending:ys});s=new qc(f,h),s.position.y=-1,i.add(s);const p=()=>{o=requestAnimationFrame(p),h.uniforms.time.value+=.002,s.rotation.y=3.804,s.rotation.x=1.013,s.rotation.z=2.043,t.render(i,r)};p(),window.addEventListener("resize",a)}),Qi(()=>{cancelAnimationFrame(o),window.removeEventListener("resize",a)});const a=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};return(l,c)=>(ke(),it("div",{ref_key:"canvasContainer",ref:e,class:"canvas-container"},null,512))}}),TE=.6,wE=.8,AE=.8,RE=_t({__name:"IdleAnimation3",setup(n){const e=gt(null);let t,i,r,s,o;ln(()=>{var _;i=new $c,i.background=new et(1315860),r=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.z=8,t=new Yc({antialias:!0}),t.setSize(window.innerWidth,window.innerHeight),(_=e.value)==null||_.appendChild(t.domElement);const l=1e5,c=new Float32Array(l*3),u=6.8;for(let v=0;v<l;v++){const m=Math.acos(-1+2*v/l),d=Math.sqrt(l*Math.PI)*m;c[v*3]=u*Math.cos(d)*Math.sin(m),c[v*3+1]=u*Math.sin(d)*Math.sin(m),c[v*3+2]=u*Math.cos(m)}const f=new An;f.setAttribute("position",new an(c,3));const h=new wn({uniforms:{time:{value:0},noiseScale:{value:TE},waveSpeed:{value:wE},waveWidth:{value:AE}},vertexShader:`
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
    `,transparent:!0,depthWrite:!0,blending:ys});s=new qc(f,h),s.position.y=1,s.position.x=4,i.add(s);const p=()=>{o=requestAnimationFrame(p),h.uniforms.time.value+=.01,s.rotation.y+=.001,t.render(i,r)};p(),window.addEventListener("resize",a)}),Qi(()=>{cancelAnimationFrame(o),window.removeEventListener("resize",a)});const a=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};return(l,c)=>(ke(),it("div",{ref_key:"canvasContainer",ref:e,class:"canvas-container"},null,512))}}),CE=_t({__name:"App",setup(n){la(c=>({ab828bc4:o.value}));const{trackBall:e,darkMode:t,opacity:i}=Cs(),r=Oc(),s=gt(0),o=Nt(()=>i.status.opacity/100),a=Nt(()=>t.status.dark),l=Nt(()=>r.path.startsWith("/classic"));return ln(()=>{const c="idle-id",u=localStorage.getItem(c);if(u){const f=Number(JSON.parse(u));localStorage.setItem(c,JSON.stringify(f+1))}else{const f=Math.floor(Math.random()*2);localStorage.setItem(c,JSON.stringify(f))}s.value=Number(u)}),(c,u)=>(ke(),it("div",{class:qn(["main",!a.value&&"light-mode"]),onMousemove:u[0]||(u[0]=(...f)=>ct(e).metod.trackBall&&ct(e).metod.trackBall(...f))},[l.value?(ke(),Ft(EE,{key:0,class:"idle"})):pi("",!0),s.value%2!==0&&!l.value?(ke(),Ft(bE,{key:1,class:"idle"})):pi("",!0),s.value%2===0&&!l.value?(ke(),Ft(RE,{key:2,class:"idle"})):pi("",!0),ft(ct(ha)),ct(e).status.show?(ke(),Ft(hv,{key:3,x:ct(e).status.x,y:ct(e).status.y,size:ct(e).status.size,class:"ball-track"},null,8,["x","y","size"])):pi("",!0)],34))}}),PE=_t({__name:"BoxBase",setup(n){la(l=>({f9a92356:i.top,"3b82d9f2":i.left,"66309ac6":i.width,"4613c427":i.height,becab6a8:s.value,becab6aa:r.value}));const{swing:e}=Cs(),t={desktop:{left:"60px",top:"68px",width:"calc(100dvw - 60px * 2)",height:"calc(100dvh - 68px * 2)"},mobile:{left:"10px",top:"28px",width:"calc(100dvw - 10px * 2)",height:"calc(100dvh - 28px * 2)"}},i=jt({...t.desktop}),r=gt("0deg"),s=gt("0deg"),o=()=>{window.innerWidth<768?Object.assign(i,t.mobile):Object.assign(i,t.desktop)},a=l=>{const c=window.innerHeight/2,u=window.innerWidth/2,f=l.clientX-u,h=l.clientY-c;r.value=`${f/-260}deg`,s.value=`${h/180}deg`};return ln(()=>{o(),window.addEventListener("resize",o)}),Qi(()=>{window.removeEventListener("resize",o)}),(l,c)=>(ke(),it("div",{class:qn(["box-container",{swing:ct(e).status.swing}]),onMousemove:a},[Fo(l.$slots,"default",{},void 0)],34))}}),IE=Pt(PE,[["__scopeId","data-v-0db6a484"]]),DE=_t({__name:"LinkBase",props:{toName:{},content:{}},setup(n){const e=n;return(t,i)=>{const r=Xh("RouterLink");return ke(),Ft(r,{class:"link",to:{name:e.toName}},{default:Wr(()=>[ud(on(e.content),1)]),_:1},8,["to"])}}}),hc=Pt(DE,[["__scopeId","data-v-d73ca086"]]),ap=n=>(Vr("data-v-61d97b74"),n=n(),Gr(),n),LE={class:"left"},UE=ap(()=>Pe("div",{class:"title"},[Pe("h1",null,"Vinicius Silva"),Pe("p",null,"Desevolvedor junior fullstack")],-1)),NE={class:"links"},FE=ap(()=>Pe("a",{class:"one-page-link",href:"/#one"},"Versão atualizada",-1)),OE=_t({__name:"HomePage",setup(n){const e=[{name:"Projetos",link:"Meus projetos"},{name:"Contatos",link:"Estou por ai"},{name:"Configurações",link:"Configurações"}];return(t,i)=>(ke(),Ft(IE,{class:"aboutme-container"},{default:Wr(()=>[Pe("div",LE,[UE,Pe("nav",NE,[(ke(),it(Dt,null,Cr(e,(r,s)=>ft(hc,{class:"link",key:s,"to-name":r.link,content:r.name},null,8,["to-name","content"])),64))]),FE])]),_:1}))}}),kE=Pt(OE,[["__scopeId","data-v-61d97b74"]]),BE={key:0,class:"desktop"},zE={class:"left border-right"},HE={class:"top"},VE={class:"bottom border-top"},GE={class:"list"},WE={key:1,class:"mobile"},XE={class:"top-mobile"},$E={class:"mid-mobile"},qE={class:"bottom-mobile"},jE=_t({__name:"AureaTemplate",props:{title:{default:"Empty"},links:{}},setup(n){la(h=>({"00ade270":s.top,"1515fe18":s.left,"8c702b0e":s.width,"65666ad4":s.height,"187f60ce":a.value,"187f60d0":o.value}));const{swing:e}=Cs(),t=n,i={desktop:{left:"60px",top:"68px",width:"calc(100dvw - 60px * 2)",height:"calc(100dvh - 68px * 2)"},mobile:{left:"10px",top:"28px",width:"calc(100dvw - 10px * 2)",height:"calc(100dvh - 28px * 2)"}},r=gt(!1),s=jt({...i.desktop}),o=gt("0deg"),a=gt("0deg"),l=()=>{window.innerWidth<768?(r.value=!0,Object.assign(s,i.mobile)):(r.value=!1,Object.assign(s,i.desktop))},c=h=>{const p=window.innerHeight/2,_=window.innerWidth/2,v=h.clientX-_,m=h.clientY-p;o.value=`${v/-260}deg`,a.value=`${m/180}deg`};ln(()=>{l(),window.addEventListener("resize",l)}),Qi(()=>{window.removeEventListener("resize",l)});const u=gt(""),f=gt("");return Er(()=>t.title,()=>{u.value="intro",f.value="intro-page",setTimeout(()=>{u.value="",f.value=""},500)}),gt(!1),(h,p)=>(ke(),it("div",{class:qn(["box-container","border-all",{swing:ct(e).status.swing}]),onMousemove:c},[r.value?(ke(),it("div",WE,[Pe("div",XE,[Pe("h1",{class:qn(u.value)},on(t.title),3)]),Pe("div",$E,[Fo(h.$slots,"default",{},void 0)]),Pe("nav",qE,[(ke(!0),it(Dt,null,Cr(t.links,(_,v)=>(ke(),Ft(hc,{class:"link",key:v,"to-name":_.nameLink,content:_.name},null,8,["to-name","content"]))),128))])])):(ke(),it("div",BE,[Pe("div",zE,[Pe("div",HE,[Pe("h1",{class:qn(u.value)},on(t.title),3)]),Pe("div",VE,[Pe("nav",GE,[(ke(!0),it(Dt,null,Cr(t.links,(_,v)=>(ke(),Ft(hc,{class:"link",key:v,"to-name":_.nameLink,content:_.name},null,8,["to-name","content"]))),128))])])]),Pe("div",{class:qn(["right",{"intro-page":f.value}])},[Fo(h.$slots,"default",{},void 0)],2)]))],34))}}),YE=Pt(jE,[["__scopeId","data-v-9fbccafd"]]),KE=_t({__name:"MainPage",setup(n){const e=gt(""),t=[{name:"Home",nameLink:"home"},{name:"Projetos",nameLink:"Meus projetos"},{name:"Contatos",nameLink:"Estou por ai"},{name:"Configurações",nameLink:"Configurações"}];return ln(()=>{e.value=document.title}),Cc(()=>{e.value=document.title}),(i,r)=>(ke(),Ft(YE,{title:e.value,links:t},{default:Wr(()=>[ft(ct(ha))]),_:1},8,["title"]))}}),ZE={class:"text-to-copy"},JE={class:"text-to-copy"},QE={class:"message"},eb=_t({__name:"CopyText",props:{content:{},textToCopy:{}},setup(n){const e=n,t=gt(!1),i=gt(""),r=()=>{navigator.clipboard.writeText(e.textToCopy),i.value="Copiado",t.value=!1,setTimeout(()=>{i.value=""},1300)},s=o=>t.value=o;return(o,a)=>(ke(),it("div",{class:"text-to-copy-container",onMouseenter:a[0]||(a[0]=l=>s(!0)),onMouseleave:a[1]||(a[1]=l=>s(!1))},[Pe("p",null,on(e.content),1),Rr(Pe("div",ZE,[Pe("p",null,on(e.textToCopy),1),Pe("button",{onClick:r},"Copiar")],512),[[Bo,t.value&&!i.value]]),Rr(Pe("div",JE,[Pe("p",QE,on(i.value),1)],512),[[Bo,i.value]])],32))}}),tb=Pt(eb,[["__scopeId","data-v-17d92279"]]),nb={class:"contactme-container"},ib=["href"],rb="vinicius_dev@hotmail.com",sb=_t({__name:"ContactMe",setup(n){const i=[{name:"Linkedin",link:"https://www.linkedin.com/in/vinicius-dev-junior/"},{name:"Github",link:"https://github.com/vinicius-mns"}];return(r,s)=>(ke(),it("div",nb,[(ke(),it(Dt,null,Cr(i,(o,a)=>Pe("a",{key:a,href:o.link,target:"_blank"},on(o.name),9,ib)),64)),ft(tb,{content:"Email","text-to-copy":rb,class:"email"})]))}}),ob=Pt(sb,[["__scopeId","data-v-2151312f"]]),bi=n=>(Vr("data-v-99e1ca40"),n=n(),Gr(),n),ab={class:"item-container"},lb=bi(()=>Pe("div",{class:"empty horizontal top-left"},null,-1)),cb=bi(()=>Pe("div",{class:"empty horizontal top-right"},null,-1)),ub=bi(()=>Pe("div",{class:"empty horizontal bottom-left"},null,-1)),fb=bi(()=>Pe("div",{class:"empty horizontal bottom-right"},null,-1)),hb=bi(()=>Pe("div",{class:"empty vertical left-top"},null,-1)),db=bi(()=>Pe("div",{class:"empty vertical left-bottom"},null,-1)),pb=bi(()=>Pe("div",{class:"empty vertical right-top"},null,-1)),mb=bi(()=>Pe("div",{class:"empty vertical right-bottom"},null,-1)),gb=_t({__name:"LinkBase2",props:{toName:{},content:{},params:{}},setup(n){const e=n;return(t,i)=>{const r=Xh("RouterLink");return ke(),Ft(r,{class:"link-2",to:{name:e.toName,params:e.params}},{default:Wr(()=>[Pe("div",ab,[Pe("h2",null,on(e.content),1)]),lb,cb,ub,fb,hb,db,pb,mb]),_:1},8,["to"])}}}),_b=Pt(gb,[["__scopeId","data-v-99e1ca40"]]),vb=["name","min","max"],xb=_t({__name:"RangeImput",props:{initValue:{},name:{},limit:{}},emits:["emitValue"],setup(n,{emit:e}){const t=n,i=e,r=gt(t.initValue);return jh(()=>{i("emitValue",Number(r.value))}),(s,o)=>Rr((ke(),it("input",{type:"range","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a),name:t.name,min:t.limit.min,max:t.limit.max,class:"range"},null,8,vb)),[[qg,r.value]])}}),lp=Pt(xb,[["__scopeId","data-v-7cb08e7c"]]),Mb={class:"header-container"},Sb={class:"header-space"},yb=_t({__name:"HeaderBase",props:{title:{}},setup(n){return(e,t)=>(ke(),it("header",Mb,[Pe("div",Sb,[Fo(e.$slots,"default",{},void 0)])]))}}),Eb=Pt(yb,[["__scopeId","data-v-a7b62774"]]),bb=n=>(Vr("data-v-81360a2a"),n=n(),Gr(),n),Tb={class:"list-main-container"},wb={class:"range-container"},Ab=bb(()=>Pe("p",null,"Colunas:",-1)),Rb={class:"projects-list"},Cb=_t({__name:"ColumnsList",props:{components:{}},setup(n){const e=n,t=gt(!1),i=gt(4),r=Nt(()=>{const o=Array.from({length:i.value},()=>[]),a=e.components;for(let l=0;l<a.length;l+=1){const c=l%i.value;o[c].push(a[l])}return o}),s=()=>{(t.value=window.innerWidth<768)&&(t.value=!0,i.value=1)};return ln(s),Cc(s),(o,a)=>(ke(),it("div",Tb,[t.value?pi("",!0):(ke(),Ft(Eb,{key:0,title:"",class:"list-header"},{default:Wr(()=>[Pe("div",wb,[Ab,Pe("p",null,"["+on(i.value)+"]",1),ft(lp,{class:"range-imput",limit:{min:1,max:6},"init-value":i.value,name:"project-columns",onEmitValue:a[0]||(a[0]=l=>i.value=l)},null,8,["init-value"])])]),_:1})),Pe("div",Rb,[(ke(!0),it(Dt,null,Cr(r.value,(l,c)=>(ke(),it("div",{class:"projects-column",key:c},[(ke(!0),it(Dt,null,Cr(l,(u,f)=>(ke(),Ft(Um(u.component),fd({class:"component",key:f},u.props),null,16))),128))]))),128))])]))}}),Pb=Pt(Cb,[["__scopeId","data-v-81360a2a"]]),Ib=[{id:"1",title:"Projeto 1",content:"Descrição do projeto 1"},{id:"2",title:"Projeto 2",content:"Descrição do projeto 2"},{id:"3",title:"Template",content:`# Template de Projeto

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
   \`\`\``},{id:"4",title:"projeto 4",content:"Descrição do projeto 4"}],ah={projects:Ib},cp=Md("api falsa",()=>({projects:()=>({getProjects:()=>ah.projects,getProjectId:i=>ah.projects.find(s=>s.id===i)})})),Db={class:"my-projects-container"},Lb=_t({__name:"MyPojects",setup(n){const e=Oc(),t=cp(),i=(o,a)=>({component:Rs(_b),props:{toName:"project",content:o,params:{id:a}}}),r=gt([]),s=Nt(()=>e.name==="Meus projetos");return ln(()=>{const a=t.projects().getProjects().map(l=>i(l.title,l.id));r.value=a}),(o,a)=>(ke(),it("div",Db,[s.value?(ke(),Ft(Pb,{key:0,components:r.value},null,8,["components"])):pi("",!0),ft(ct(ha))]))}}),Ub=Pt(Lb,[["__scopeId","data-v-42634db5"]]),Nb={class:"checkbox-container"},Fb={class:"my-checkbox"},Ob={class:"check"},kb=_t({__name:"CheckboxBase",props:{check:{type:Boolean},content:{}},emits:["emit-check"],setup(n,{emit:e}){const t=n,i=e,r=gt(t.check);return jh(()=>{i("emit-check",r.value)}),(s,o)=>(ke(),it("label",Nb,[Rr(Pe("input",{class:"checkbox",type:"checkbox",name:"exemploCheckbox",value:"sim","onUpdate:modelValue":o[0]||(o[0]=a=>r.value=a)},null,512),[[jg,r.value]]),Pe("div",Fb,[Rr(Pe("div",Ob,null,512),[[Bo,r.value]])]),Pe("p",null,on(t.content),1)]))}}),rl=Pt(kb,[["__scopeId","data-v-0cc3e6c5"]]),Bb={class:"range-container"},zb={class:"range-title"},Hb=_t({__name:"FloatRange",props:{value:{},name:{},limit:{}},emits:["emitValue"],setup(n,{emit:e}){const t=n,i=e,r=jt({show:!1,value:0,name:"default",limit:{min:0,max:100}}),s=a=>{r.show=a},o=a=>{r.value=a,i("emitValue",a)};return ln(()=>{r.value=t.value,r.name=t.name,r.limit=t.limit}),(a,l)=>(ke(),it("div",{class:"float-range-container",onMouseenter:l[1]||(l[1]=c=>s(!0)),onMouseleave:l[2]||(l[2]=c=>s(!1))},[Pe("p",null,on(r.name),1),Rr(Pe("div",Bb,[Pe("div",zb,[Pe("h2",null,on(r.name),1),Pe("p",null,on([r.value]),1)]),ft(lp,{"init-value":t.value,name:t.name,limit:t.limit,onEmitValue:l[0]||(l[0]=c=>o(c))},null,8,["init-value","name","limit"])],512),[[Bo,r.show]])],32))}}),Vb=Pt(Hb,[["__scopeId","data-v-c85aaee7"]]),Gb={class:"config-page"},Wb={class:"config-options-container"},Xb=_t({__name:"ConfigPage",setup(n){const{trackBall:e,darkMode:t,swing:i,opacity:r,mobile:s}=Cs();return(o,a)=>(ke(),it("div",Gb,[Pe("div",Wb,[ft(rl,{class:"option",check:ct(t).status.dark,content:"Modo escuro",onEmitCheck:a[0]||(a[0]=l=>ct(t).metod.darkMode(l))},null,8,["check"]),ft(Vb,{class:"option",value:ct(r).status.opacity,name:"Opacidade",limit:{min:0,max:100},onEmitValue:a[1]||(a[1]=l=>ct(r).metod.setOpacity(l))},null,8,["value"]),ct(s).status.isMobileSize?pi("",!0):(ke(),Ft(rl,{key:0,class:"option",check:ct(e).status.show,content:"Pointer tracker",onEmitCheck:a[2]||(a[2]=l=>ct(e).metod.show(l))},null,8,["check"])),ct(s).status.isMobileSize?pi("",!0):(ke(),Ft(rl,{key:1,class:"option",check:ct(i).status.swing,content:"Balanço",onEmitCheck:a[3]||(a[3]=l=>ct(i).metod.swingMode(l))},null,8,["check"]))])]))}}),up=Pt(Xb,[["__scopeId","data-v-60ae373a"]]);function Kc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let er=Kc();function fp(n){er=n}const hp=/[&<>"']/,$b=new RegExp(hp.source,"g"),dp=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,qb=new RegExp(dp.source,"g"),jb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},lh=n=>jb[n];function sn(n,e){if(e){if(hp.test(n))return n.replace($b,lh)}else if(dp.test(n))return n.replace(qb,lh);return n}const Yb=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Kb(n){return n.replace(Yb,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const Zb=/(^|[^\[])\^/g;function ut(n,e){let t=typeof n=="string"?n:n.source;e=e||"";const i={replace:(r,s)=>{let o=typeof s=="string"?s:s.source;return o=o.replace(Zb,"$1"),t=t.replace(r,o),i},getRegex:()=>new RegExp(t,e)};return i}function ch(n){try{n=encodeURI(n).replace(/%25/g,"%")}catch{return null}return n}const ds={exec:()=>null};function uh(n,e){const t=n.replace(/\|/g,(s,o,a)=>{let l=!1,c=o;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),i=t.split(/ \|/);let r=0;if(i[0].trim()||i.shift(),i.length>0&&!i[i.length-1].trim()&&i.pop(),e)if(i.length>e)i.splice(e);else for(;i.length<e;)i.push("");for(;r<i.length;r++)i[r]=i[r].trim().replace(/\\\|/g,"|");return i}function vo(n,e,t){const i=n.length;if(i===0)return"";let r=0;for(;r<i&&n.charAt(i-r-1)===e;)r++;return n.slice(0,i-r)}function Jb(n,e){if(n.indexOf(e[1])===-1)return-1;let t=0;for(let i=0;i<n.length;i++)if(n[i]==="\\")i++;else if(n[i]===e[0])t++;else if(n[i]===e[1]&&(t--,t<0))return i;return-1}function fh(n,e,t,i){const r=e.href,s=e.title?sn(e.title):null,o=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){i.state.inLink=!0;const a={type:"link",raw:t,href:r,title:s,text:o,tokens:i.inlineTokens(o)};return i.state.inLink=!1,a}return{type:"image",raw:t,href:r,title:s,text:sn(o)}}function Qb(n,e){const t=n.match(/^(\s+)(?:```)/);if(t===null)return e;const i=t[1];return e.split(`
`).map(r=>{const s=r.match(/^\s+/);if(s===null)return r;const[o]=s;return o.length>=i.length?r.slice(i.length):r}).join(`
`)}class Xo{constructor(e){at(this,"options");at(this,"rules");at(this,"lexer");this.options=e||er}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const i=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:vo(i,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const i=t[0],r=Qb(i,t[3]||"");return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(/#$/.test(i)){const r=vo(i,"#");(this.options.pedantic||!r||/ $/.test(r))&&(i=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const i=vo(t[0].replace(/^ *>[ \t]?/gm,""),`
`),r=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(i);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:s,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim();const r=i.length>1,s={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");const o=new RegExp(`^( {0,3}${i})((?:[	 ][^\\n]*)?(?:\\n|$))`);let a="",l="",c=!1;for(;e;){let u=!1;if(!(t=o.exec(e))||this.rules.block.hr.test(e))break;a=t[0],e=e.substring(a.length);let f=t[2].split(`
`,1)[0].replace(/^\t+/,d=>" ".repeat(3*d.length)),h=e.split(`
`,1)[0],p=0;this.options.pedantic?(p=2,l=f.trimStart()):(p=t[2].search(/[^ ]/),p=p>4?1:p,l=f.slice(p),p+=t[1].length);let _=!1;if(!f&&/^ *$/.test(h)&&(a+=h+`
`,e=e.substring(h.length+1),u=!0),!u){const d=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),w=new RegExp(`^ {0,${Math.min(3,p-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),A=new RegExp(`^ {0,${Math.min(3,p-1)}}(?:\`\`\`|~~~)`),E=new RegExp(`^ {0,${Math.min(3,p-1)}}#`);for(;e;){const U=e.split(`
`,1)[0];if(h=U,this.options.pedantic&&(h=h.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),A.test(h)||E.test(h)||d.test(h)||w.test(e))break;if(h.search(/[^ ]/)>=p||!h.trim())l+=`
`+h.slice(p);else{if(_||f.search(/[^ ]/)>=4||A.test(f)||E.test(f)||w.test(f))break;l+=`
`+h}!_&&!h.trim()&&(_=!0),a+=U+`
`,e=e.substring(U.length+1),f=h.slice(p)}}s.loose||(c?s.loose=!0:/\n *\n *$/.test(a)&&(c=!0));let v=null,m;this.options.gfm&&(v=/^\[[ xX]\] /.exec(l),v&&(m=v[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:a,task:!!v,checked:m,loose:!1,text:l,tokens:[]}),s.raw+=a}s.items[s.items.length-1].raw=a.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const f=s.items[u].tokens.filter(p=>p.type==="space"),h=f.length>0&&f.some(p=>/\n.*\n/.test(p.raw));s.loose=h}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const i=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:r,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;const i=uh(t[1]),r=t[2].replace(/^\||\| *$/g,"").split("|"),s=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],o={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===r.length){for(const a of r)/^ *-+: *$/.test(a)?o.align.push("right"):/^ *:-+: *$/.test(a)?o.align.push("center"):/^ *:-+ *$/.test(a)?o.align.push("left"):o.align.push(null);for(const a of i)o.header.push({text:a,tokens:this.lexer.inline(a)});for(const a of s)o.rows.push(uh(a,o.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return o}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:sn(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const i=t[2].trim();if(!this.options.pedantic&&/^</.test(i)){if(!/>$/.test(i))return;const o=vo(i.slice(0,-1),"\\");if((i.length-o.length)%2===0)return}else{const o=Jb(t[2],"()");if(o>-1){const l=(t[0].indexOf("!")===0?5:4)+t[1].length+o;t[2]=t[2].substring(0,o),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let r=t[2],s="";if(this.options.pedantic){const o=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);o&&(r=o[1],s=o[3])}else s=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(this.options.pedantic&&!/>$/.test(i)?r=r.slice(1):r=r.slice(1,-1)),fh(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const r=(i[2]||i[1]).replace(/\s+/g," "),s=t[r.toLowerCase()];if(!s){const o=i[0].charAt(0);return{type:"text",raw:o,text:o}}return fh(i,s,i[0],this.lexer)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&i.match(/[\p{L}\p{N}]/u))return;if(!(r[1]||r[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const o=[...r[0]].length-1;let a,l,c=o,u=0;const f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,t=t.slice(-1*e.length+o);(r=f.exec(t))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&o%3&&!((o+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const h=[...r[0]][0].length,p=e.slice(0,o+r.index+h+l);if(Math.min(o,l)%2){const v=p.slice(1,-1);return{type:"em",raw:p,text:v,tokens:this.lexer.inlineTokens(v)}}const _=p.slice(2,-2);return{type:"strong",raw:p,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(/\n/g," ");const r=/[^ ]/.test(i),s=/^ /.test(i)&&/ $/.test(i);return r&&s&&(i=i.substring(1,i.length-1)),i=sn(i,!0),{type:"codespan",raw:t[0],text:i}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let i,r;return t[2]==="@"?(i=sn(t[1]),r="mailto:"+i):(i=sn(t[1]),r=i),{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e){var i;let t;if(t=this.rules.inline.url.exec(e)){let r,s;if(t[2]==="@")r=sn(t[0]),s="mailto:"+r;else{let o;do o=t[0],t[0]=((i=this.rules.inline._backpedal.exec(t[0]))==null?void 0:i[0])??"";while(o!==t[0]);r=sn(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){let i;return this.lexer.state.inRawBlock?i=t[0]:i=sn(t[0]),{type:"text",raw:t[0],text:i}}}}const eT=/^(?: *(?:\n|$))+/,tT=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,nT=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Fs=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,iT=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,pp=/(?:[*+-]|\d{1,9}[.)])/,mp=ut(/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,pp).getRegex(),Zc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,rT=/^[^\n]+/,Jc=/(?!\s*\])(?:\\.|[^\[\]\\])+/,sT=ut(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Jc).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),oT=ut(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,pp).getRegex(),_a="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Qc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,aT=ut("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Qc).replace("tag",_a).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gp=ut(Zc).replace("hr",Fs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_a).getRegex(),lT=ut(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gp).getRegex(),eu={blockquote:lT,code:tT,def:sT,fences:nT,heading:iT,hr:Fs,html:aT,lheading:mp,list:oT,newline:eT,paragraph:gp,table:ds,text:rT},hh=ut("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Fs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_a).getRegex(),cT={...eu,table:hh,paragraph:ut(Zc).replace("hr",Fs).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",hh).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",_a).getRegex()},uT={...eu,html:ut(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Qc).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ds,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:ut(Zc).replace("hr",Fs).replace("heading",` *#{1,6} *[^
]`).replace("lheading",mp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},_p=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,fT=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,vp=/^( {2,}|\\)\n(?!\s*$)/,hT=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Os="\\p{P}\\p{S}",dT=ut(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Os).getRegex(),pT=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,mT=ut(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Os).getRegex(),gT=ut("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Os).getRegex(),_T=ut("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Os).getRegex(),vT=ut(/\\([punct])/,"gu").replace(/punct/g,Os).getRegex(),xT=ut(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),MT=ut(Qc).replace("(?:-->|$)","-->").getRegex(),ST=ut("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",MT).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),$o=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,yT=ut(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",$o).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xp=ut(/^!?\[(label)\]\[(ref)\]/).replace("label",$o).replace("ref",Jc).getRegex(),Mp=ut(/^!?\[(ref)\](?:\[\])?/).replace("ref",Jc).getRegex(),ET=ut("reflink|nolink(?!\\()","g").replace("reflink",xp).replace("nolink",Mp).getRegex(),tu={_backpedal:ds,anyPunctuation:vT,autolink:xT,blockSkip:pT,br:vp,code:fT,del:ds,emStrongLDelim:mT,emStrongRDelimAst:gT,emStrongRDelimUnd:_T,escape:_p,link:yT,nolink:Mp,punctuation:dT,reflink:xp,reflinkSearch:ET,tag:ST,text:hT,url:ds},bT={...tu,link:ut(/^!?\[(label)\]\((.*?)\)/).replace("label",$o).getRegex(),reflink:ut(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",$o).getRegex()},dc={...tu,escape:ut(_p).replace("])","~|])").getRegex(),url:ut(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},TT={...dc,br:ut(vp).replace("{2,}","*").getRegex(),text:ut(dc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xo={normal:eu,gfm:cT,pedantic:uT},is={normal:tu,gfm:dc,breaks:TT,pedantic:bT};class Ln{constructor(e){at(this,"tokens");at(this,"options");at(this,"state");at(this,"tokenizer");at(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||er,this.options.tokenizer=this.options.tokenizer||new Xo,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:xo.normal,inline:is.normal};this.options.pedantic?(t.block=xo.pedantic,t.inline=is.pedantic):this.options.gfm&&(t.block=xo.gfm,this.options.breaks?t.inline=is.breaks:t.inline=is.gfm),this.tokenizer.rules=t}static get rules(){return{block:xo,inline:is}}static lex(e,t){return new Ln(t).lex(e)}static lexInline(e,t){return new Ln(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){const i=this.inlineQueue[t];this.inlineTokens(i.src,i.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(a,l,c)=>l+"    ".repeat(c.length));let i,r,s,o;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(a=>(i=a.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length),i.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&(r.type==="paragraph"||r.type==="text")?(r.raw+=`
`+i.raw,r.text+=`
`+i.raw,this.inlineQueue[this.inlineQueue.length-1].src=r.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startBlock){let a=1/0;const l=e.slice(1);let c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){r=t[t.length-1],o&&r.type==="paragraph"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i),o=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&r.type==="text"?(r.raw+=`
`+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=r.text):t.push(i);continue}if(e){const a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let i,r,s,o=e,a,l,c;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)u.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,a.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(c=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(i=u.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))){if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length),r=t[t.length-1],r&&i.type==="text"&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(i=this.tokenizer.emStrong(e,o,c)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),t.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),t.push(i);continue}if(s=e,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=e.slice(1);let h;this.options.extensions.startInline.forEach(p=>{h=p.call({lexer:this},f),typeof h=="number"&&h>=0&&(u=Math.min(u,h))}),u<1/0&&u>=0&&(s=e.substring(0,u+1))}if(i=this.tokenizer.inlineText(s)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(c=i.raw.slice(-1)),l=!0,r=t[t.length-1],r&&r.type==="text"?(r.raw+=i.raw,r.text+=i.text):t.push(i);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return t}}class qo{constructor(e){at(this,"options");this.options=e||er}code(e,t,i){var s;const r=(s=(t||"").match(/^\S*/))==null?void 0:s[0];return e=e.replace(/\n$/,"")+`
`,r?'<pre><code class="language-'+sn(r)+'">'+(i?e:sn(e,!0))+`</code></pre>
`:"<pre><code>"+(i?e:sn(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,i){const r=ch(e);if(r===null)return i;e=r;let s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+i+"</a>",s}image(e,t,i){const r=ch(e);if(r===null)return i;e=r;let s=`<img src="${e}" alt="${i}"`;return t&&(s+=` title="${t}"`),s+=">",s}text(e){return e}}class nu{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,i){return""+i}image(e,t,i){return""+i}br(){return""}}class Un{constructor(e){at(this,"options");at(this,"renderer");at(this,"textRenderer");this.options=e||er,this.options.renderer=this.options.renderer||new qo,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new nu}static parse(e,t){return new Un(t).parse(e)}static parseInline(e,t){return new Un(t).parseInline(e)}parse(e,t=!0){let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=s,a=this.options.extensions.renderers[o.type].call({parser:this},o);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){i+=a||"";continue}}switch(s.type){case"space":continue;case"hr":{i+=this.renderer.hr();continue}case"heading":{const o=s;i+=this.renderer.heading(this.parseInline(o.tokens),o.depth,Kb(this.parseInline(o.tokens,this.textRenderer)));continue}case"code":{const o=s;i+=this.renderer.code(o.text,o.lang,!!o.escaped);continue}case"table":{const o=s;let a="",l="";for(let u=0;u<o.header.length;u++)l+=this.renderer.tablecell(this.parseInline(o.header[u].tokens),{header:!0,align:o.align[u]});a+=this.renderer.tablerow(l);let c="";for(let u=0;u<o.rows.length;u++){const f=o.rows[u];l="";for(let h=0;h<f.length;h++)l+=this.renderer.tablecell(this.parseInline(f[h].tokens),{header:!1,align:o.align[h]});c+=this.renderer.tablerow(l)}i+=this.renderer.table(a,c);continue}case"blockquote":{const o=s,a=this.parse(o.tokens);i+=this.renderer.blockquote(a);continue}case"list":{const o=s,a=o.ordered,l=o.start,c=o.loose;let u="";for(let f=0;f<o.items.length;f++){const h=o.items[f],p=h.checked,_=h.task;let v="";if(h.task){const m=this.renderer.checkbox(!!p);c?h.tokens.length>0&&h.tokens[0].type==="paragraph"?(h.tokens[0].text=m+" "+h.tokens[0].text,h.tokens[0].tokens&&h.tokens[0].tokens.length>0&&h.tokens[0].tokens[0].type==="text"&&(h.tokens[0].tokens[0].text=m+" "+h.tokens[0].tokens[0].text)):h.tokens.unshift({type:"text",text:m+" "}):v+=m+" "}v+=this.parse(h.tokens,c),u+=this.renderer.listitem(v,_,!!p)}i+=this.renderer.list(u,a,l);continue}case"html":{const o=s;i+=this.renderer.html(o.text,o.block);continue}case"paragraph":{const o=s;i+=this.renderer.paragraph(this.parseInline(o.tokens));continue}case"text":{let o=s,a=o.tokens?this.parseInline(o.tokens):o.text;for(;r+1<e.length&&e[r+1].type==="text";)o=e[++r],a+=`
`+(o.tokens?this.parseInline(o.tokens):o.text);i+=t?this.renderer.paragraph(a):a;continue}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}parseInline(e,t){t=t||this.renderer;let i="";for(let r=0;r<e.length;r++){const s=e[r];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){i+=o||"";continue}}switch(s.type){case"escape":{const o=s;i+=t.text(o.text);break}case"html":{const o=s;i+=t.html(o.text);break}case"link":{const o=s;i+=t.link(o.href,o.title,this.parseInline(o.tokens,t));break}case"image":{const o=s;i+=t.image(o.href,o.title,o.text);break}case"strong":{const o=s;i+=t.strong(this.parseInline(o.tokens,t));break}case"em":{const o=s;i+=t.em(this.parseInline(o.tokens,t));break}case"codespan":{const o=s;i+=t.codespan(o.text);break}case"br":{i+=t.br();break}case"del":{const o=s;i+=t.del(this.parseInline(o.tokens,t));break}case"text":{const o=s;i+=t.text(o.text);break}default:{const o='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return i}}class ps{constructor(e){at(this,"options");this.options=e||er}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}}at(ps,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var Ji,pc,Sp;class wT{constructor(...e){hu(this,Ji);at(this,"defaults",Kc());at(this,"options",this.setOptions);at(this,"parse",zs(this,Ji,pc).call(this,Ln.lex,Un.parse));at(this,"parseInline",zs(this,Ji,pc).call(this,Ln.lexInline,Un.parseInline));at(this,"Parser",Un);at(this,"Renderer",qo);at(this,"TextRenderer",nu);at(this,"Lexer",Ln);at(this,"Tokenizer",Xo);at(this,"Hooks",ps);this.use(...e)}walkTokens(e,t){var r,s;let i=[];for(const o of e)switch(i=i.concat(t.call(this,o)),o.type){case"table":{const a=o;for(const l of a.header)i=i.concat(this.walkTokens(l.tokens,t));for(const l of a.rows)for(const c of l)i=i.concat(this.walkTokens(c.tokens,t));break}case"list":{const a=o;i=i.concat(this.walkTokens(a.items,t));break}default:{const a=o;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);i=i.concat(this.walkTokens(c,t))}):a.tokens&&(i=i.concat(this.walkTokens(a.tokens,t)))}}return i}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const o=t.renderers[s.name];o?t.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=o.apply(this,a)),l}:t.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const o=t[s.level];o?o.unshift(s.tokenizer):t[s.level]=[s.tokenizer],s.start&&(s.level==="block"?t.startBlock?t.startBlock.push(s.start):t.startBlock=[s.start]:s.level==="inline"&&(t.startInline?t.startInline.push(s.start):t.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(t.childTokens[s.name]=s.childTokens)}),r.extensions=t),i.renderer){const s=this.defaults.renderer||new qo(this.defaults);for(const o in i.renderer){if(!(o in s))throw new Error(`renderer '${o}' does not exist`);if(o==="options")continue;const a=o,l=i.renderer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f||""}}r.renderer=s}if(i.tokenizer){const s=this.defaults.tokenizer||new Xo(this.defaults);for(const o in i.tokenizer){if(!(o in s))throw new Error(`tokenizer '${o}' does not exist`);if(["options","rules","lexer"].includes(o))continue;const a=o,l=i.tokenizer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.tokenizer=s}if(i.hooks){const s=this.defaults.hooks||new ps;for(const o in i.hooks){if(!(o in s))throw new Error(`hook '${o}' does not exist`);if(o==="options")continue;const a=o,l=i.hooks[a],c=s[a];ps.passThroughHooks.has(o)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(h=>c.call(s,h));const f=l.call(s,u);return c.call(s,f)}:s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.hooks=s}if(i.walkTokens){const s=this.defaults.walkTokens,o=i.walkTokens;r.walkTokens=function(a){let l=[];return l.push(o.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Ln.lex(e,t??this.defaults)}parser(e,t){return Un.parse(e,t??this.defaults)}}Ji=new WeakSet,pc=function(e,t){return(i,r)=>{const s={...r},o={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(o.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),o.async=!0);const a=zs(this,Ji,Sp).call(this,!!o.silent,!!o.async);if(typeof i>"u"||i===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));if(o.hooks&&(o.hooks.options=o),o.async)return Promise.resolve(o.hooks?o.hooks.preprocess(i):i).then(l=>e(l,o)).then(l=>o.hooks?o.hooks.processAllTokens(l):l).then(l=>o.walkTokens?Promise.all(this.walkTokens(l,o.walkTokens)).then(()=>l):l).then(l=>t(l,o)).then(l=>o.hooks?o.hooks.postprocess(l):l).catch(a);try{o.hooks&&(i=o.hooks.preprocess(i));let l=e(i,o);o.hooks&&(l=o.hooks.processAllTokens(l)),o.walkTokens&&this.walkTokens(l,o.walkTokens);let c=t(l,o);return o.hooks&&(c=o.hooks.postprocess(c)),c}catch(l){return a(l)}}},Sp=function(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+sn(i.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(i);throw i}};const Zi=new wT;function rt(n,e){return Zi.parse(n,e)}rt.options=rt.setOptions=function(n){return Zi.setOptions(n),rt.defaults=Zi.defaults,fp(rt.defaults),rt};rt.getDefaults=Kc;rt.defaults=er;rt.use=function(...n){return Zi.use(...n),rt.defaults=Zi.defaults,fp(rt.defaults),rt};rt.walkTokens=function(n,e){return Zi.walkTokens(n,e)};rt.parseInline=Zi.parseInline;rt.Parser=Un;rt.parser=Un.parse;rt.Renderer=qo;rt.TextRenderer=nu;rt.Lexer=Ln;rt.lexer=Ln.lex;rt.Tokenizer=Xo;rt.Hooks=ps;rt.parse=rt;rt.options;rt.setOptions;rt.use;rt.walkTokens;rt.parseInline;Un.parse;Ln.lex;const AT=["innerHTML"],yp=_t({__name:"MarkdownAtom",props:{content:{}},setup(n){const e=n;return rt.setOptions({breaks:!0}),(t,i)=>(ke(),it("div",{innerHTML:ct(rt)(e.content)},null,8,AT))}}),RT={},Ep=n=>(Vr("data-v-8f707370"),n=n(),Gr(),n),CT={class:"button-close"},PT=Ep(()=>Pe("div",{class:"cross one"},null,-1)),IT=Ep(()=>Pe("div",{class:"cross two"},null,-1)),DT=[PT,IT];function LT(n,e){return ke(),it("button",CT,DT)}const UT=Pt(RT,[["render",LT],["__scopeId","data-v-8f707370"]]),NT={class:"my-projects-container"},FT={class:"header"},OT={class:"content"},kT=_t({__name:"ProjectPage",setup(n){const{opacity:e}=Cs(),t=cv(),i=cp(),r=Oc().params.id,s=gt({content:""}),o=gt(0),a=h=>{document.title=h.title},l=h=>{s.value.content=h.content},c=()=>{e.status.opacity<=32||e.metod.setOpacity(32)},u=()=>{e.metod.setOpacity(o.value)},f=()=>{t.push({name:"Meus projetos"})};return ln(()=>{const h=i.projects().getProjectId(r);h&&(o.value=e.status.opacity,c(),a(h),l(h))}),Qi(u),(h,p)=>(ke(),it("div",NT,[Pe("header",FT,[ft(UT,{onClick:f})]),Pe("div",OT,[ft(yp,{class:"markdown",content:s.value.content},null,8,["content"])])]))}}),BT=Pt(kT,[["__scopeId","data-v-5d377b91"]]),zT=n=>(Vr("data-v-93389232"),n=n(),Gr(),n),HT={class:"one-page-container"},VT={class:"content"},GT=zT(()=>Pe("header",null,[Pe("h1",null,"Vinícius Silva"),Pe("p",null,"Dev web")],-1)),WT=`
  ## inf
  - 1998
  - 27 anos

  ## Sou bom em
  - Vuejs
  - Typescript
  - Python

  ## Uso
  - Vite
  - Typescript
  - Pinia
  - windsurf Ai

  ## Conheço
  - docker
  - git

  ## Projetos
  - [ none ](https://google.com)

  ## Contato
  - <a href="https://github.com/vinicius-mns" target="_blank">
      github
    </a>
  - <a href="https://www.linkedin.com/in/vinicius-dev-junior/" target="_blank">
      Linkedin
    </a>
  - [ email ](mailto:vinicius_dev@hotmail.com)

  # Mais
  - [ versão anterior do Portifólio ](/#classic)
`,XT=_t({__name:"OnePage",setup(n){return(e,t)=>(ke(),it("div",HT,[Pe("div",VT,[GT,ft(yp,{content:WT}),ft(up)])]))}}),$T=Pt(XT,[["__scopeId","data-v-93389232"]]),qT={},bp=n=>(Vr("data-v-cbacaacd"),n=n(),Gr(),n),jT={class:"not-found"},YT=bp(()=>Pe("p",null,"404 not found",-1)),KT=bp(()=>Pe("a",{href:"/#one"},"Voltar",-1)),ZT=[YT,KT];function JT(n,e){return ke(),it("div",jT,ZT)}const QT=Pt(qT,[["render",JT],["__scopeId","data-v-cbacaacd"]]),Tp=av({history:b_("./"),routes:[{path:"/",redirect:"/one"},{path:"/classic",name:"home",component:kE},{path:"/classic/main",name:"main",component:KE,children:[{path:"contact",name:"Estou por ai",component:ob,meta:{title:"Estou por ai"}},{path:"projects",name:"Meus projetos",component:Ub,children:[{path:"project/:id",name:"project",component:BT}]},{path:"config",name:"Configurações",component:up}]},{path:"/one",name:"Vinícius dev",component:$T},{path:"/:pathMatch(.*)*",component:QT}]});Tp.afterEach(n=>{const e=n.name;document.title=e});const iu=Jg(CE);iu.use(e_());iu.use(Tp);iu.mount("#app");
