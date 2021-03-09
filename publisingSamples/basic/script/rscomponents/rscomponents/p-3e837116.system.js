var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="rscomponents";var a;var i;var s=false;var o=false;var l=typeof window!=="undefined"?window:{};var f=l.CSS;var u=l.document||{head:{}};var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var $=function(){return(u.head.attachShadow+"").indexOf("[native")>-1}();var v=function(e){return Promise.resolve(e)};var m=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var h=function(e,r,t,n){if(t){t.map((function(t){var n=t[0],a=t[1],i=t[2];var s=p(e,n);var o=d(r,i);var l=g(n);c.ael(s,a,o,l);(r.$rmListeners$=r.$rmListeners$||[]).push((function(){return c.rel(s,a,o,l)}))}))}};var d=function(e,r){return function(t){{if(e.$flags$&256){e.$lazyInstance$[r](t)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([r,t])}}}};var p=function(e,r){if(r&32)return u.body;return e};var g=function(e){return(e&2)!==0};var y="{visibility:hidden}.hydrated{visibility:inherit}";var w=function(e,r){if(r===void 0){r=""}{return function(){return}}};var b=function(e,r){{return function(){return}}};var _=new WeakMap;var S=function(e,r,t){var n=be.get(e);if(m&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}be.set(e,n)};var R=function(e,r,t,n){var a=x(r.$tagName$);var i=be.get(a);e=e.nodeType===11?e:u;if(i){if(typeof i==="string"){e=e.head||e;var s=_.get(e);var o=void 0;if(!s){_.set(e,s=new Set)}if(!s.has(a)){{if(c.$cssShim$){o=c.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=u.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var L=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=r.$flags$;var a=w("attachStyles",r.$tagName$);var i=R($&&t.shadowRoot?t.shadowRoot:t.getRootNode(),r,e.$modeName$,t);if(n&10){t["s-sc"]=i;t.classList.add(i+"-h")}a()};var x=function(e,r){return"sc-"+e};var j={};var N=function(e){return e!=null};var C=function(e){e=typeof e;return e==="object"||e==="function"};var E=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var M=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=false;var s=false;var o=[];var l=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){l(a)}else if(a!=null&&typeof a!=="boolean"){if(i=typeof e!=="function"&&!C(a)){a=String(a)}if(i&&s){o[o.length-1].$text$+=a}else{o.push(i?A(null,a):a)}s=i}}};l(t);if(r){{var f=r.className||r.class;if(f){r.class=typeof f!=="object"?f:Object.keys(f).filter((function(e){return f[e]})).join(" ")}}}var u=A(e,null);u.$attrs$=r;if(o.length>0){u.$children$=o}return u}));var A=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}return t};var P=e("H",{});var O=function(e){return e&&e.$tag$===P};var U=function(e,r,t,n,a,i){if(t!==n){var s=pe(e,r);var o=r.toLowerCase();if(r==="class"){var f=e.classList;var u=T(t);var $=T(n);f.remove.apply(f,u.filter((function(e){return e&&!$.includes(e)})));f.add.apply(f,$.filter((function(e){return e&&!u.includes(e)})))}else if(r==="style"){{for(var v in t){if(!n||n[v]==null){if(v.includes("-")){e.style.removeProperty(v)}else{e.style[v]=""}}}}for(var v in n){if(!t||n[v]!==t[v]){if(v.includes("-")){e.style.setProperty(v,n[v])}else{e.style[v]=n[v]}}}}else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(pe(l,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){c.rel(e,r,t,false)}if(n){c.ael(e,r,n,false)}}else{var m=C(n);if((s||m&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var h=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=h){e[r]=h}}else{e[r]=n}}catch(d){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!m){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var k=/\s/;var T=function(e){return!e?[]:e.split(k)};var q=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||j;var s=r.$attrs$||j;{for(n in i){if(!(n in s)){U(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){U(a,n,i[n],s[n],t,r.$flags$)}};var B=function(e,r,t,n){var i=r.$children$[t];var o=0;var l;var f;if(i.$text$!==null){l=i.$elm$=u.createTextNode(i.$text$)}else{l=i.$elm$=u.createElement(i.$tag$);{q(null,i,s)}if(N(a)&&l["s-si"]!==a){l.classList.add(l["s-si"]=a)}if(i.$children$){for(o=0;o<i.$children$.length;++o){f=B(e,i,o);if(f){l.appendChild(f)}}}}return l};var I=function(e,r,t,n,a,s){var o=e;var l;if(o.shadowRoot&&o.tagName===i){o=o.shadowRoot}for(;a<=s;++a){if(n[a]){l=B(null,t,a);if(l){n[a].$elm$=l;o.insertBefore(l,r)}}}};var z=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;a.remove()}}};var H=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var u=n[0];var c=n[f];var $;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=n[++i]}else if(c==null){c=n[--f]}else if(V(o,u)){F(o,u);o=r[++a];u=n[++i]}else if(V(l,c)){F(l,c);l=r[--s];c=n[--f]}else if(V(o,c)){F(o,c);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];c=n[--f]}else if(V(l,u)){F(l,u);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];u=n[++i]}else{{$=B(r&&r[i],t,i);u=n[++i]}if($){{o.$elm$.parentNode.insertBefore($,o.$elm$)}}}}if(a>s){I(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){z(r,a,s)}};var V=function(e,r){if(e.$tag$===r.$tag$){return true}return false};var F=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$text$;if(i===null){{{q(e,r,s)}}if(n!==null&&a!==null){H(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}I(t,null,r,a,0,a.length-1)}else if(n!==null){z(n,0,n.length-1)}}else if(e.$text$!==i){t.data=i}};var W=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var s=e.$vnode$||A(null,null);var o=O(r)?r:M(null,null,r);i=t.tagName;if(n.$attrsToReflect$){o.$attrs$=o.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return o.$attrs$[n]=t[r]}))}o.$tag$=null;o.$flags$|=4;e.$vnode$=o;o.$elm$=s.$elm$=t.shadowRoot||t;{a=t["s-sc"]}F(s,o)};var D=function(e){return me(e).$hostElement$};var G=e("c",(function(e,r,t){var n=D(e);return{emit:function(e){return J(n,r,{bubbles:!!(t&4),composed:!!(t&2),cancelable:!!(t&1),detail:e})}}}));var J=function(e,r,t){var n=new CustomEvent(r,t);e.dispatchEvent(n);return n};var K=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Q=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=w("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return X(e,a,r)};K(e,n);var s;if(r){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var r=e[0],t=e[1];return te(a,r,t)}));e.$queuedListeners$=null}}}t();return ne(s,(function(){return Ne(i)}))};var X=function(e,r,t){var n=e.$hostElement$;var a=w("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){L(e)}var s=w("render",e.$cmpMeta$.$tagName$);{{W(e,Y(r))}}if(c.$cssShim$){c.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return Z(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var Y=function(e){try{e=e.render()}catch(r){ge(r)}return e};var Z=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=w("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ae(t)}{te(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){re()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){je((function(){return Q(e,false)}))}e.$flags$&=~(4|512)}};var ee=function(e){{var r=me(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){Q(r,false)}return t}};var re=function(e){{ae(u.documentElement)}je((function(){return J(l,"appload",{detail:{namespace:n}})}))};var te=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){ge(n)}}return undefined};var ne=function(e,r){return e&&e.then?e.then(r):r()};var ae=function(e){return e.classList.add("hydrated")};var ie=function(e,r){if(e!=null&&!C(e)){if(r&1){return String(e)}return e}return e};var se=function(e,r){return me(e).$instanceValues$.get(r)};var oe=function(e,r,t,n){var a=me(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=ie(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if(n.$watchers$&&s&128){var l=n.$watchers$[r];if(l){l.map((function(e){try{o[e](t,i,r)}catch(n){ge(n)}}))}}if((s&(2|16))===2){Q(a,false)}}}};var le=function(e,r,t){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return se(this,n)},set:function(e){oe(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;c.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var fe=function(e,n,a,i,s){return __awaiter(t,void 0,void 0,(function(){var e,t,i,o,l,f,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((n.$flags$&32)===0))return[3,5];n.$flags$|=32;s=we(a);if(!s.then)return[3,2];e=b();return[4,s];case 1:s=c.sent();e();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}le(s,a,2);s.isProxied=true}t=w("createInstance",a.$tagName$);{n.$flags$|=8}try{new s(n)}catch($){ge($)}{n.$flags$&=~8}{n.$flags$|=128}t();i=x(a.$tagName$);if(!(!be.has(i)&&s.style))return[3,5];o=w("registerStyles",a.$tagName$);l=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-ac6f021f.system.js").then((function(e){return e.scopeCss(l,i,false)}))];case 3:l=c.sent();c.label=4;case 4:S(i,l,!!(a.$flags$&1));o();c.label=5;case 5:f=n.$ancestorComponent$;u=function(){return Q(n,true)};if(f&&f["s-rc"]){f["s-rc"].push(u)}else{u()}return[2]}}))}))};var ue=function(e){if((c.$flags$&1)===0){var r=me(e);var t=r.$cmpMeta$;var n=w("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){K(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{fe(e,r,t)}}else{h(e,r,t.$listeners$)}n()}};var ce=function(e){if((c.$flags$&1)===0){var r=me(e);{if(r.$rmListeners$){r.$rmListeners$.map((function(e){return e()}));r.$rmListeners$=undefined}}if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var $e=e("b",(function(e,r){if(r===void 0){r={}}var t=w();var n=[];var a=r.exclude||[];var i=l.customElements;var s=u.head;var o=s.querySelector("meta[charset]");var f=u.createElement("style");var v=[];var m;var h=true;Object.assign(c,r);c.$resourcesUrl$=new URL(r.resourcesUrl||"./",u.baseURI).href;e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}{t.$listeners$=r[3]}{t.$attrsToReflect$=[]}{t.$watchers$={}}if(!$&&t.$flags$&1){t.$flags$|=8}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;de(r,t);if(t.$flags$&1){if($){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return n}r.prototype.connectedCallback=function(){var e=this;if(m){clearTimeout(m);m=null}if(h){v.push(this)}else{c.jmp((function(){return ue(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return ce(e)}))};r.prototype.forceUpdate=function(){ee(this)};r.prototype.componentOnReady=function(){return me(this).$onReadyPromise$};return r}(HTMLElement);t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,le(o,t,1))}}))}));{f.innerHTML=n+y;f.setAttribute("data-styles","");s.insertBefore(f,o?o.nextSibling:s.firstChild)}h=false;if(v.length){v.map((function(e){return e.connectedCallback()}))}else{{c.jmp((function(){return m=setTimeout(re,30)}))}}t()}));var ve=new WeakMap;var me=function(e){return ve.get(e)};var he=e("r",(function(e,r){return ve.set(r.$lazyInstance$=e,r)}));var de=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}h(e,t,r.$listeners$);return ve.set(e,t)};var pe=function(e,r){return r in e};var ge=function(e){return console.error(e)};var ye=new Map;var we=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=ye.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{ye.set(i,e)}return e[a]}),ge)};var be=new Map;var _e=[];var Se=[];var Re=function(e,r){return function(t){e.push(t);if(!o){o=true;if(r&&c.$flags$&4){je(xe)}else{c.raf(xe)}}}};var Le=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){ge(t)}}e.length=0};var xe=function(){Le(_e);{Le(Se);if(o=_e.length>0){c.raf(xe)}}};var je=function(e){return v().then(e)};var Ne=Re(Se,true);var Ce=e("a",(function(){if(!(f&&f.supports&&f.supports("color","var(--c)"))){return r.import("./p-2f8c282d.system.js").then((function(){if(c.$cssShim$=l.__cssshim){return c.$cssShim$.i()}else{return 0}}))}return v()}));var Ee=e("p",(function(){{c.$cssShim$=l.__cssshim}var e=Array.from(u.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,l.location.href)).href;{Me(t.resourcesUrl,e)}if(!l.customElements){return r.import("./p-c6833af0.system.js").then((function(){return t}))}}return v(t)}));var Me=function(e,r){var t=E(n);try{l[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;l[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=u.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(l[t].m);o.remove()}}));a.set(i,s);u.head.appendChild(o)}return s}}}}}}));