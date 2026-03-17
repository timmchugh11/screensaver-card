function t(t,e,i,n){var s,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(o=(a<3?s(o):a>3?s(e,i,o):s(e,i))||o);return a>3&&o&&Object.defineProperty(e,i,o),o}function e(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=window,n=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),a=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(n&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=a.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&a.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(i,t,s)},l=n?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const d=window,h=d.trustedTypes,u=h?h.emptyScript:"",p=d.reactiveElementPolyfillSupport,v={toAttribute(t,e){switch(e){case Boolean:t=t?u:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:g},f="finalized";let _=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(f))return!1;this[f]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{n?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const n=document.createElement("style"),s=i.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=e.cssText,t.appendChild(n)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:v).toAttribute(e,i.type);this._$El=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:v;this._$El=s,this[s]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var y;_[f]=!0,_.elementProperties=new Map,_.elementStyles=[],_.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:_}),(null!==(c=d.reactiveElementVersions)&&void 0!==c?c:d.reactiveElementVersions=[]).push("1.6.3");const $=window,b=$.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,S="?"+x,A=`<${S}>`,C=document,k=()=>C.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,T=Array.isArray,R="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,U=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,O=/"/g,z=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),j=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),F=new WeakMap,B=C.createTreeWalker(C,129,null,!1);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const W=(t,e)=>{const i=t.length-1,n=[];let s,a=2===e?"<svg>":"",o=I;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===I?"!--"===l[1]?o=P:void 0!==l[1]?o=U:void 0!==l[2]?(z.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=L):void 0!==l[3]&&(o=L):o===L?">"===l[0]?(o=null!=s?s:I,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?L:'"'===l[3]?O:H):o===O||o===H?o=L:o===P||o===U?o=I:(o=L,s=void 0);const h=o===L&&t[e+1].startsWith("/>")?" ":"";a+=o===I?i+A:c>=0?(n.push(r),i.slice(0,c)+E+i.slice(c)+x+h):i+x+(-2===c?(n.push(void 0),e):h)}return[V(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class q{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,a=0;const o=t.length-1,r=this.parts,[l,c]=W(t,e);if(this.el=q.createElement(l,i),B.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=B.nextNode())&&r.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith(E)||e.startsWith(x)){const i=c[a++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+E).split(x),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?X:"@"===e[1]?tt:Z})}else r.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(z.test(n.tagName)){const t=n.textContent.split(x),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],k()),B.nextNode(),r.push({type:2,index:++s});n.append(t[e],k())}}}else if(8===n.nodeType)if(n.data===S)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(x,t+1));)r.push({type:7,index:s}),t+=x.length-1}s++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function K(t,e,i=t,n){var s,a,o,r;if(e===j)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=N(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(o=(r=i)._$Co)&&void 0!==o?o:r._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=K(t,l._$AS(t,e.values),l,n)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);B.currentNode=s;let a=B.nextNode(),o=0,r=0,l=n[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new J(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new et(a,this,t)),this._$AV.push(e),l=n[++r]}o!==(null==l?void 0:l.index)&&(a=B.nextNode(),o++)}return B.currentNode=C,s}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,n){var s;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),N(t)?t===M||null==t||""===t?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>T(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&N(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=q.createElement(V(n.h,n.h[0]),this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.v(i);else{const t=new G(s,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=F.get(t.strings);return void 0===e&&F.set(t.strings,e=new q(t)),e}T(t){T(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new J(this.k(k()),this.k(k()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,n,s){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let a=!1;if(void 0===s)t=K(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==j,a&&(this._$AH=t);else{const n=t;let o,r;for(t=s[0],o=0;o<s.length-1;o++)r=K(this,n[i+o],e,o),r===j&&(r=this._$AH[o]),a||(a=!N(r)||r!==this._$AH[o]),r===M?t=M:t!==M&&(t+=(null!=r?r:"")+s[o+1]),this._$AH[o]=r}a&&!n&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}}const Q=b?b.emptyScript:"";class X extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,Q):this.element.removeAttribute(this.name)}}class tt extends Z{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=K(this,t,e,0))&&void 0!==i?i:M)===j)return;const n=this._$AH,s=t===M&&n!==M||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==M&&(n===M||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class et{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const it=$.litHtmlPolyfillSupport;null==it||it(q,J),(null!==(y=$.litHtmlVersions)&&void 0!==y?y:$.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var nt,st;class at extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const a=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let o=a._$litPart$;if(void 0===o){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;a._$litPart$=o=new J(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return j}}at.finalized=!0,at._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:at});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:at}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:n}=e;return{kind:i,elements:n,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,lt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function ct(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):lt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function dt(t){return ct({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ht;null===(ht=window.HTMLSlotElement)||void 0===ht||ht.prototype.assignedElements;const ut="screensaver-editor";var pt=r`

    ha-card {
    height: 100%;
    
    background-color: black;
    display: grid;
    grid-template-areas:
        ". icon icon now_icon alert"
        ". . . temp ."
        ". date . cal-event ."
        "tline tline tline tline tline";
    grid-template-columns: 7vw auto auto auto 1vw;
    grid-template-rows: auto auto 1fr auto;
    padding-top: 1vw;
    }

    .ineditor {
    transform: scale(0.3); /* Riduce il contenuto del 50% */
    transform-origin: top left; /* Punto di partenza della trasformazione */
    width: fit-content;
    // width: 1000px; /* Corregge la larghezza per evitare overflow */
    // height: 780px; /* Corregge l'altezza per evitare overflow */
    // overflow: hidden; /* Nasconde il contenuto fuoriuscente */
    }
    h2 {
    margin-bottom: 8px;
    }
    .gradient-bar {
    width: 100%;
    height: 2px;
    background: linear-gradient(
        to right,
        black,
        rgba(255, 255, 255, 0.3),
        black
    );
    position: relative;
    top: 42px;
    }
    .timeline {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    overflow-x: auto;
    justify-content: space-between;
    height: auto;
    }
    .timeline-item {
    flex: 0 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: -webkit-fill-available;
    }
    .condition {
    height: 50px;
    }
    .condition img {
    width: 40px;
    height: 40px;
    }
    .details {
    font-size: 0.9em;
    color: #757575;
    }
    .details .hour {
    font-weight: bold;
    }
    .details .temperature {
    color: #ff5722;
    }
    .details .temperature.cold {
    color: #2196f3;
    }
    .details .temperature.hot {
    color: #f44336;
    }
    .details .precipitation {
    color: #9e9e9e;
    font-size: 0.8em;
    }
    // .main-grid {
    // height: 100%;
    // background-color: black;
    // display: grid;
    // grid-template-areas:
    //     ". icon icon now_icon alert"
    //     ". . . temp ."
    //     ". date . cal-event ."
    //     "tline tline tline tline tline";
    // grid-template-columns: 7vw auto auto auto 1vw;
    // grid-template-rows: auto auto 1fr auto;
    // padding-top: 1vw;
    // }
    .div-temp {
    grid-area: temp;
    justify-self: end;
    }
    #date-time {
    grid-area: date;
    font-family: bw_font, monospace;
    color: white;
    align-self: end;
    justify-self: start;
    }
    .time,
    .date {
    text-align: center;
    font-family: bw_font, monospace;
    line-height: 1;
    }
    .time {
    font-size: 13vw;
    white-space: nowrap;
    }
    .date {
    font-size: 4.5vw;
    display: flex;
    justify-content: space-between;
    }
    #entityState {
    display: flex;
    flex-direction: column;
    justify-content: end;
    line-height: 1;
    }
    .entity {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 1vh;
    }
    .friendly-name {
    display: flex;
    justify-content: flex-end;
    font-size: 1.7vh;
    color: #757575;
    }
    .value {
    display: flex;
    font-size: 2vh;
    margin-top: 0.5vh;
    color: white;
    }
    .state {
    margin-left: auto;
    margin-right: 4px;
    }
    .unit {
    font-style: italic;
    color: #757575;
    }
    #icon-state-div {
    grid-area: icon;
    margin-top: 4vh;
    }
    ha-icon {
    --mdc-icon-size: 4.5vh;
    color: #757575;
    }
    .now-icon {
    grid-area: now_icon;
    justify-self: end;
    width: 27vw;
    height: 100%;
    }
    .ext-temp {
    font-family: "bw_font";
    font-weight: bold;
    font-size: 4vh;
    color: #757575;
    }
    .weather-attribution {
    font-size: 30px;
    grid-area: icon;
    font-family: monospace;
    color: white;
    align-self: end;
    justify-self: start;
    }
    .events {
    display: flex;
    flex-direction: column;
    justify-content: end;
    color: white;
    line-height: 1;
    }
    .event {
    margin-bottom: 10px;
    text-align: right;
    color: white;
    }
    .event-title {
    text-align: right;
    margin-top: 1vh;
    font-size: 2vh;
    }
    .event-time {
    color: #757575;
    text-align: right;
    font-size: 1.7vh;
    }
    .no-events {
    color: #999;
    font-style: italic;
    text-align: right;
    }
    .cg-alert {
    grid-area: alert;
    width: 2vw;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: red;
    position: relative;
    top: 1.5%;
    right: 100%;
    opacity: 0.6;
    }
    .hidden {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    }
    .visible {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    }
    .number-input-container {
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    }

    .number-input-container label {
    margin-bottom: 0.5em;
    font-weight: bold;
    }

    .number-input-container input {
    padding: 0.5em;
    font-size: 1em;
    border: 1px solid var(--divider-color);
    border-radius: 4px;
    width: 100px;
    }




    
`;function vt(t){switch(t){case"awning":return"mdi:awning-outline";case"blind":return"mdi:blinds-open";case"curtain":return"mdi:curtains-open";case"damper":case"shutter":default:return"mdi:window-shutter-open";case"door":return"mdi:door-open";case"garage":return"mdi:garage-open";case"gate":return"mdi:gate-open";case"shade":return"mdi:roller-shade";case"window":return"mdi:window-open"}}function gt(t){switch(t){case"battery":return"mdi:battery-outline";case"motion":return"mdi:motion-sensor";case"door":return"mdi:door-open";case"garage_door":return"mdi:garage-open";default:return"mdi:checkbox-marked-circle"}}function mt(t,e){switch(t){case"battery":return e>=90?"mdi:battery":e>=80?"mdi:battery-90":e>=70?"mdi:battery-80":e>=60?"mdi:battery-70":e>=50?"mdi:battery-60":e>=40?"mdi:battery-50":e>=30?"mdi:battery-40":e>=20?"mdi:battery-30":e>=10?"mdi:battery-20":"mdi:battery-alert";case"humidity":return"mdi:water-percent";case"temperature":return"mdi:thermometer";default:return"mdi:eye"}}function ft(t,e,i){const n=t.states[e];return n?.attributes?.[i]??""}function _t(t,e){return t?.startsWith(e+".")??!1}const yt={alarm_control_panel:"mdi:shield",alert:"mdi:alert",automation:"mdi:playlist-play",calendar:"mdi:calendar",camera:"mdi:video",climate:"mdi:thermostat",device_tracker:"mdi:account",fan:"mdi:fan",light:"mdi:lightbulb",lock:"mdi:lock",media_player:"mdi:speaker",person:"mdi:account",plant:"mdi:flower",remote:"mdi:remote",scene:"mdi:palette",script:"mdi:file-document",switch:"mdi:flash",timer:"mdi:timer",vacuum:"mdi:robot-vacuum",weather:"mdi:white-balance-sunny",sun:"mdi:white-balance-sunny"};let $t=class extends at{constructor(){super(...arguments),this._valueEntities=[],this._entityIcons=[]}setConfig(t){this._config=t,this._valueEntities=t?.value_entity||[],this._entityIcons=t?.entity_icon||[]}static get styles(){return r`
      .heading {
        font-weight: bold;
        margin-bottom: 1ch;
      }

      .select-container {
        display: flex;
        flex-direction: column;
        margin-top: 1ch;
        width: 100%;
      }

      ul {
        padding: 0;
        list-style: none;
      }

      li {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5ch;
      }

      .val_sel {
        display: flex;
        // flex-direction: column;
        margin-bottom: 1.5ch;
      }

      ha-icon-picker {
        margin-top: 0.5ch;
      }

      ha-icon {
        cursor: pointer;
        margin-left: auto;
      }

      .select-item,
      .select-weather {
        height: 60px;
        border-radius: 16px;
        width: 80%;
      }
      .select-weather {
        margin-bottom: 10px;
      }

      ha-expansion-panel {
        margin-bottom: 10px;
      }

      ha-dialog .content .element-preview > * {
        transform: scale(0.5); /* Riduce il contenuto del 50% */
        transform-origin: top left; /* Punto di partenza della trasformazione */
        width: calc(
          100% / 0.5
        ); /* Corregge la larghezza per evitare overflow */
        height: calc(100% / 0.5); /* Corregge l'altezza per evitare overflow */
        overflow: hidden; /* Nasconde il contenuto fuoriuscente */
      }

      .inputNumber {
        border-radius: 7px;
        height: 30px;
        width: 40px;
        text-align: center;
      }
    `}render(){return this._config?D`
      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:weather-partly-cloudy"></ha-icon>
          Weather Entity Selector
        </h4>
        <div class="content">${this._renderWeatherSelector()}</div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:weather-cloudy-clock"></ha-icon>
          Weather Attribution Entity
        </h4>
        <div class="content">${this._renderWeatherAttributionSelector()}</div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:calendar"></ha-icon>
          Calendar Selector
        </h4>
        <div class="content">
          <div class="number-input-container">
            <label for="number-calendar-events"
              >Number of Events in List:</label
            >
            <input
              class="inputNumber"
              id="number-calendar-events"
              type="number"
              min="1"
              value=${this._config.number_calendar_events||5}
              @change=${this._updateNumberOfEvents}
            />
          </div>
          ${this._renderCalendarSelector()}
        </div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:playlist-plus"></ha-icon>
          Value Entity Selector
        </h4>
        <div class="content">${this._renderValueEntitySelector()}</div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:palette"></ha-icon>
          Entity Icon Selector
        </h4>
        <div class="content">${this._renderEntityIconSelector()}</div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          Internal Temperature Sensor Selector
        </h4>
        <div class="content">${this._renderSensorDropdowninternal()}</div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:thermometer"></ha-icon>
          External Temperature Sensor Selector
        </h4>
        <div class="content">${this._renderSensorDropdownexternal()}</div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:weather-pouring"></ha-icon>
          Local Rain Sensor Selector
        </h4>
        <div class="content">${this._renderSensorDropdownLocalRain()}</div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:link"></ha-icon>
          Landing Page Input
        </h4>
        <div class="content">${this._renderLandingPageInput()}</div>
      </ha-expansion-panel>

      <ha-expansion-panel outlined>
        <h4 slot="header">
          <ha-icon icon="mdi:check-box-outline"></ha-icon>
          Hide Bar Option
        </h4>
        <div class="content">${this._renderHideBarCheckbox()}</div>
      </ha-expansion-panel>
    `:D`<div class="heading">No configuration available</div>`}_renderHideBarCheckbox(){const t=this._config.hide_bar??!1;return D`
      <div class="checkbox-container">
        <ha-formfield label="Hide Bar">
          <ha-checkbox
            ?checked=${t}
            @change=${this._toggleHideBar}
          ></ha-checkbox>
        </ha-formfield>
      </div>
    `}_toggleHideBar(t){const e=t.target.checked;this._config={...this._config,hide_bar:e},this._dispatchConfigUpdate()}_updateNumberOfEvents(t){const e=t.target,i=parseInt(e.value,10);i>0&&(this._config={...this._config,number_calendar_events:i},this._dispatchConfigUpdate())}_renderCalendarSelector(){const t=this._getCalendarEntities();return D`
      <div class="select-container">
        <div class="heading">Add Calendar</div>
        <div style="display: flex; align-items: center;">
          <select id="calendar_select" class="select-item">
            <option value="">-- Select a Calendar --</option>
            ${t.map((t=>D`<option value="${t}">
                  ${this.hass.states[t]?.attributes?.friendly_name||t}
                </option>`))}
          </select>
          <ha-icon icon="mdi:plus" @click=${this._addCalendar}></ha-icon>
        </div>
        ${this._renderCalendarList()}
      </div>
    `}_renderCalendarList(){return D`
      <div style="margin-top: 1ch;">
        ${(this._config.calendars||[]).length>0?D`
              <ul>
                ${(this._config.calendars||[]).map((t=>D`
                    <div class="val_sel">
                      <span
                        >${this.hass.states[t]?.attributes?.friendly_name||t}</span
                      >
                      <ha-icon
                        icon="mdi:delete"
                        @click=${()=>this._removeCalendar(t)}
                      ></ha-icon>
                    </div>
                  `))}
              </ul>
            `:D`<p>No calendars selected.</p>`}
      </div>
    `}_addCalendar(){const t=this.shadowRoot.getElementById("calendar_select");if(t&&t.value){const e=t.value;this._config.calendars?.includes(e)||(this._config={...this._config,calendars:[...this._config.calendars||[],e]},this._dispatchConfigUpdate()),t.value=""}}_removeCalendar(t){const e=(this._config.calendars||[]).filter((e=>e!==t));this._config={...this._config,calendars:e},this._dispatchConfigUpdate()}_getCalendarEntities(){return Object.keys(this.hass.states).filter((t=>t.startsWith("calendar.")))}_renderWeatherSelector(){const t=this._getWeatherEntities();return D`
      <div class="select-container">
        <div class="heading">Select Weather Entity</div>
        <select @change=${this._updateWeatherEntity} class="select-weather">
          <option value="" ?selected=${!this._config?.entity}>
            -- Select an entity --
          </option>
          ${t.map((t=>D`<option
                value=${t}
                ?selected=${this._config?.entity===t}
              >
                ${t}
              </option>`))}
        </select>
      </div>
    `}_renderValueEntitySelector(){const t=Object.keys(this.hass.states),e=this._config?.value_entity_show_name??!1,i=this._config?.value_entity_font_size??5;return D`
      <div class="select-container">
        <div class="heading">Add Entities to value_entity</div>
        <div style="display: flex; align-items: center;">
          <select id="value_entity_select" class="select-item">
            <option value="">-- Select an Entity --</option>
            ${t.map((t=>D`<option value="${t}">${t}</option>`))}
          </select>
          <ha-icon
            icon="mdi:plus"
            @click=${this._addEntityToValueEntity}
          ></ha-icon>
        </div>
        ${this._renderValueEntityList()}

        <div style="margin-top: 2ch;">
          <label style="display: flex; align-items: center; gap: 1ch; cursor: pointer;">
            <input
              type="checkbox"
              .checked=${e}
              @change=${this._toggleValueEntityShowName}
            />
            Show entity name
          </label>
        </div>

        <div style="margin-top: 1ch; display: flex; align-items: center; gap: 1ch;">
          <label for="value_entity_font_size">Value font size (vh):</label>
          <input
            class="inputNumber"
            id="value_entity_font_size"
            type="number"
            min="1"
            max="30"
            .value=${String(i)}
            @change=${this._updateValueEntityFontSize}
          />
        </div>
      </div>
    `}_renderValueEntityList(){return D`
      <div style="margin-top: 1ch;">
        ${this._valueEntities.length>0?D`
              <ul>
                ${this._valueEntities.map((t=>D`
                    <div class="val_sel">
                      <span>${t}</span>
                      <ha-icon
                        icon="mdi:delete"
                        @click=${()=>this._removeEntityFromValueEntity(t)}
                      ></ha-icon>
                    </div>
                  `))}
              </ul>
            `:D`<p>No entities selected.</p>`}
      </div>
    `}_getWeatherEntities(){return Object.keys(this.hass.states).filter((t=>t.startsWith("weather.")))}_updateWeatherEntity(t){const e=t.target.value;this._config={...this._config,entity:e},this._dispatchConfigUpdate()}_addEntityToValueEntity(){const t=this.shadowRoot.getElementById("value_entity_select");if(t&&t.value){const e=t.value;this._valueEntities.includes(e)||(this._valueEntities=[...this._valueEntities,e],this._config={...this._config,value_entity:this._valueEntities},this._dispatchConfigUpdate()),t.value=""}}_removeEntityFromValueEntity(t){this._valueEntities=this._valueEntities.filter((e=>e!==t)),this._config={...this._config,value_entity:this._valueEntities},this._dispatchConfigUpdate()}_renderEntityIconSelector(){const t=Object.keys(this.hass.states);return D`
      <div class="select-container">
        <div class="heading">Add Entities for entity_icon</div>
        <div style="display: flex; align-items: center;">
          <select id="entity_icon_select" class="select-item">
            <option value="">-- Select an Entity --</option>
            ${t.map((t=>D`<option value=${t}>${t}</option>`))}
          </select>
          <ha-icon
            icon="mdi:plus"
            @click=${this._addEntityToEntityIcon}
          ></ha-icon>
        </div>
        ${this._renderEntityIconList()}
      </div>
    `}_addEntityToEntityIcon(){const t=this.shadowRoot.getElementById("entity_icon_select");if(t&&t.value){const e=t.value;this._entityIcons.some((t=>t.entity===e))||(this._entityIcons=[...this._entityIcons,{entity:e}],this._updateEntityIconConfig()),t.value=""}}_renderEntityIconList(){return D`
      <div style="margin-top: 1ch;">
        ${this._entityIcons.length>0?D`
              <ul>
                ${this._entityIcons.map(((t,e)=>{const i=t.entity,n=t.icon,s=this.hass.states[i],a=i.split(".")[0],o=s?.attributes?.device_class;let r;if(n)r=n;else if(_t(i,"cover"))r=vt(o);else if(_t(i,"binary_sensor"))r=gt(o);else if(_t(i,"sensor")){r=mt(o,Number(s?.state)||0)}else r=yt[a]||ft(this.hass,i,"icon")||"mdi:eye";return D`
                    <li>
                      <div style="display: flex; flex-direction: column;">
                        <!-- Nome entità -->
                        <div style="display: flex; align-items: center;">
                          <span>${i}</span>
                          <ha-icon
                            icon="mdi:delete"
                            style="margin-left: auto; cursor: pointer;"
                            @click=${()=>this._removeEntityFromEntityIcon(e)}
                          ></ha-icon>
                        </div>

                        <!-- Icon Picker -->
                        <div class="icon-picker" style="margin-top: 0.5ch;">
                          <ha-icon-picker
                            label="Select an icon"
                            .value=${n||r}
                            @value-changed=${t=>this._updateEntityIcon(e,t.detail.value)}
                          ></ha-icon-picker>
                        </div>
                      </div>
                    </li>
                  `}))}
              </ul>
            `:D`<p>No entities added yet.</p>`}
      </div>
    `}_removeEntityFromEntityIcon(t){this._entityIcons=this._entityIcons.filter(((e,i)=>i!==t)),this._updateEntityIconConfig()}_changeEntityIcon(t){const e=prompt("Enter the new icon (e.g., mdi:lightbulb):","");if(e){const i=[...this._entityIcons];i[t]={...i[t],icon:e},this._entityIcons=i,this._updateEntityIconConfig()}}_updateEntityIconConfig(){this._config={...this._config,entity_icon:this._entityIcons},this._dispatchConfigUpdate()}_dispatchConfigUpdate(){const t=new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0});this.dispatchEvent(t)}_updateEntityIcon(t,e){const i=[...this._entityIcons];i[t]={...i[t],icon:e},this._entityIcons=i,this._updateEntityIconConfig()}_renderSensorDropdowninternal(){const t={internal_temperature:this._config?.internal_temperature??""};return D`
      <div class="select-container" style="margin-top: 2ch;">
        <div class="heading">Select Internal Temperature Sensor</div>

        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${[{name:"internal_temperature",label:"",selector:{entity:{domain:"sensor"}}}]}
          .computeLabel=${t=>t.label??""}
          @value-changed=${this._onInternalTemperatureChanged}
        ></ha-form>
      </div>
    `}_onInternalTemperatureChanged(t){const e=t.detail.value?.internal_temperature;if(e){const t=this.hass.states[e];if(!("temperature"===t?.attributes?.device_class))return void this._removeInternalTemperatureSensor();this._config={...this._config,internal_temperature:e}}else this._removeInternalTemperatureSensor();this._dispatchConfigUpdate()}_removeInternalTemperatureSensor(){const{internal_temperature:t,...e}=this._config;this._config=e,this._dispatchConfigUpdate()}_renderSensorDropdownexternal(){const t={external_temperature:this._config?.external_temperature??""};return D`
    <div class="select-container" style="margin-top: 2ch;">
      <div class="heading">Select External Temperature Sensor</div>

      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${[{name:"external_temperature",label:"",selector:{entity:{domain:"sensor"}}}]}
        .computeLabel=${t=>t.label??""}  // <— NON usare fallback al name
        @value-changed=${this._onExternalTemperatureChanged}
      ></ha-form>
    </div>
  `}_onExternalTemperatureChanged(t){const e=t.detail.value?.external_temperature;if(e){const t=this.hass.states[e];if(!("temperature"===t?.attributes?.device_class))return void this._removeExternalTemperatureSensor();this._config={...this._config,external_temperature:e}}else this._removeExternalTemperatureSensor();this._dispatchConfigUpdate()}_removeExternalTemperatureSensor(){const{external_temperature:t,...e}=this._config;this._config=e,this._dispatchConfigUpdate()}_renderSensorDropdownLocalRain(){const t={rain_sensor:this._config?.rain_sensor??""};return D`
    <div class="select-container" style="margin-top: 2ch;">
      <div class="heading">Select Local Rain Sensor</div>

      <ha-form
        .hass=${this.hass}
        .data=${t}
        .schema=${[{name:"rain_sensor",label:"",selector:{entity:{domain:"sensor"}}}]}
        .computeLabel=${t=>t.label??""}  // <— NON usare fallback al name
        @value-changed=${this._onRainSensorChanged}
      ></ha-form>

      
    </div>
  `}_onRainSensorChanged(t){const e=t.detail.value?.rain_sensor;e?this._config={...this._config,rain_sensor:e}:this._removeLocalRainSensor(),this._dispatchConfigUpdate()}_removeLocalRainSensor(){const{rain_sensor:t,...e}=this._config;this._config=e,this._dispatchConfigUpdate()}_renderLandingPageInput(){return D`
      <div class="select-container" style="margin-top: 2ch;">
        <div class="heading">Set Landing Page</div>
        <div style="display: flex; align-items: center;">
          <input
            type="text"
            id="landing_page_input"
            placeholder="Enter landing page URL es.: /lovelace/0"
            .value=${this._config?.landing_page||""}
            @input=${this._updateLandingPage}
            style="flex: 1; padding: 0.5ch; font-size: 1em; border: 1px solid var(--divider-color);"
          />
          <ha-icon
            icon="mdi:delete"
            style="cursor: pointer; margin-left: 1ch;"
            @click=${this._removeLandingPage}
          ></ha-icon>
        </div>

        ${this._config?.landing_page?D`
              <div style="margin-top: 1ch;">
                Current: <strong>${this._config.landing_page}</strong>
              </div>
            `:""}
      </div>
    `}_updateLandingPage(t){const e=t.target.value;this._config={...this._config,landing_page:e},this._dispatchConfigUpdate()}_removeLandingPage(){const{landing_page:t,...e}=this._config;this._config=e,this._dispatchConfigUpdate();const i=this.shadowRoot.getElementById("landing_page_input");i&&(i.value="")}_toggleValueEntityShowName(t){const e=t.target.checked;this._config={...this._config,value_entity_show_name:e},this._dispatchConfigUpdate()}_updateValueEntityFontSize(t){const e=parseFloat(t.target.value);!isNaN(e)&&e>0&&(this._config={...this._config,value_entity_font_size:e},this._dispatchConfigUpdate())}_renderWeatherAttributionSelector(){const t=Object.keys(this.hass.states).filter((t=>t.startsWith("weather."))),e=this._config?.weather_attribution_entity??"";return D`
      <div class="select-container">
        <div class="heading">Select entity to show weather attribution</div>
        <div style="display: flex; align-items: center;">
          <select
            id="weather_attribution_select"
            class="select-item"
            .value=${e}
            @change=${this._setWeatherAttributionEntity}
          >
            <option value="">-- None --</option>
            ${t.map((t=>D`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
          <ha-icon
            icon="mdi:delete"
            @click=${this._removeWeatherAttributionEntity}
          ></ha-icon>
        </div>
        ${e?D`<div style="margin-top: 1ch;">Current: <strong>${e}</strong></div>`:""}
      </div>
    `}_setWeatherAttributionEntity(t){const e=t.target.value;e?(this._config={...this._config,weather_attribution_entity:e},this._dispatchConfigUpdate()):this._removeWeatherAttributionEntity()}_removeWeatherAttributionEntity(){const{weather_attribution_entity:t,...e}=this._config;this._config=e,this._dispatchConfigUpdate()}};var bt;t([ct({attribute:!1}),e("design:type",Object)],$t.prototype,"hass",void 0),t([dt(),e("design:type",Object)],$t.prototype,"_config",void 0),t([dt(),e("design:type",Array)],$t.prototype,"_valueEntities",void 0),$t=t([rt(ut)],$t);console.info("%c  Screensaver Card  \n%c  version: v@SCREENSAVERL_CARD_VERSION_PLACEHOLDER@  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");const wt=window;wt.customCards=wt.customCards||[],wt.customCards.push({type:"screensaver-card",name:"Screensaver",preview:!0,description:"screensaver editor"});let Et=bt=class extends at{loadLocalFont(t,e){const i=document.createElement("style");i.textContent=`\n      @font-face {\n        font-family: 'bw_font';\n        src: url('${t}/BwModelica-HairlineExpanded.otf') format('truetype');\n        // src: url('/local/BwModelica-HairlineExpanded.otf') format('truetype');\n      }\n\n     \n    `,document.head.appendChild(i)}static getConfigElement(){return document.createElement(ut)}static get styles(){return pt}constructor(){super(),this.cg_alert=!1,this.events=[],this._isEditor=!1,this.calendars=[],this.originalHeader=null;const t=new URL(import.meta.url).pathname,e=t.substring(0,t.lastIndexOf("/"));this.loadLocalFont(e,t)}_isInEditor(){return function t(e){return"hui-card"===e.parentElement?.tagName?.toLowerCase()&&"preview"in(e.parentElement?.attributes??[])||"hui-section"===e.parentElement?.tagName?.toLowerCase()&&"preview"in(e.parentElement?.attributes??[])||"hui-card-preview"===e.parentElement?.tagName?.toLowerCase()||null!=e.parentElement&&t(e.parentElement)||"[object ShadowRoot]"==e.parentNode?.toString()&&t(e.getRootNode().host)}(this)}async getCalendars(){try{const t=this.config?.calendars||[];if(!t.length)return void(this.calendars=[]);const e=await Promise.all(t.map((t=>this.hass.callApi("GET",`calendars/${t}`))));this.calendars=e}catch{this.calendars=[]}}async getEvents(){const t=this.config?.calendars||[],e=this.config?.number_calendar_events||5;if(!t.length)return;const i=new Date,n=new Date;n.setDate(i.getDate()+7);try{const s=await this.fetchCalendarEvents(this.hass,i,n,t),a=this.filterDuplicateEvents(s);this.checkCGAlert(a),this.events=a.filter((t=>"cg_alert"!==t.summary)).slice(0,e)}catch{this.events=[]}}async fetchCalendarEvents(t,e,i,n){const s=n.map((n=>t.callApi("GET",`calendars/${n}?start=${e.toISOString()}&end=${i.toISOString()}`)));return(await Promise.allSettled(s)).filter((t=>"fulfilled"===t.status)).flatMap((t=>t.value))}filterDuplicateEvents(t){const e=new Set;return t.filter((t=>{const i=`${t.summary}-${t.start}`;return!e.has(i)&&(e.add(i),!0)}))}checkCGAlert(t){const e=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),n=t.filter((t=>"cg_alert"===t.summary)).find((t=>{const n=t.start?.dateTime||t.start?.date,s=t.end?.dateTime||t.end?.date,a=new Date(n),o=new Date(s);if(!isNaN(a.getTime())&&!isNaN(o.getTime())){if(t.start?.date&&t.end?.date)return a<=i&&i<=o;if(t.start?.dateTime&&t.end?.dateTime)return a<=e&&e<=o}return!1}));this.cg_alert=!!n}formatEventDate(t){try{const e="object"==typeof t&&"dateTime"in t?t.dateTime:t,i=new Date(e);if(isNaN(i.getTime()))throw new Error("invalid date");return`${i.toLocaleDateString()} ${i.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}`}catch{return"invalid date"}}firstUpdated(){this._isEditor=this._isInEditor();const t=this.shadowRoot?.getElementById("dynamic-card");if(!t)return void console.error("Could not find the card");const e=()=>{const e=5*Math.floor(7*Math.random()),i=60-e,n=5*Math.floor(7*Math.random()),s=60-n;t.style.padding=`${e}px ${s}px ${i}px ${n}px`};setInterval(e,3e4),e()}setConfig(t){if(!t.entity)throw new Error("Invalid configuration");this.config=t}getCardSize(){return 15}async subscribeToHourlyForecast(){this.unsubscribeHourlyForecast(),this.isConnected&&this.hass&&this.config&&this.config.entity&&this.hassSupportsForecastEvents()&&this.config.entity.startsWith("weather.")&&(this.subscribedToHourlyForecast=this.hass.connection.subscribeMessage((t=>this.hourlyForecastEvent=t),{type:"weather/subscribe_forecast",forecast_type:"hourly",entity_id:this.config.entity}))}unsubscribeHourlyForecast(){this.subscribedToHourlyForecast&&(this.subscribedToHourlyForecast.then((t=>t())),this.subscribedToHourlyForecast=void 0)}hassSupportsForecastEvents(){return!!this.hass?.services?.weather?.get_forecasts}getHourlyForecast(){const t=this.hourlyForecastEvent?.forecast;return t??[]}connectedCallback(){super.connectedCallback(),this.subscribeToHourlyForecast(),this.getCalendars(),this.getEvents(),this.config?.hide_bar&&this.activateKioskMode()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeHourlyForecast(),this.config?.hide_bar&&this.restoreOriginalState()}activateKioskMode(){const t=document.querySelector("body > home-assistant")?.shadowRoot?.querySelector("home-assistant-main")?.shadowRoot?.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace")?.shadowRoot?.querySelector("hui-root")?.shadowRoot?.querySelector("#view");t?(t.style.setProperty("padding","0px"),console.log("Padding del div '#view' impostato a 0px.")):console.error("Div con id '#view' non trovato.");const e=document.querySelector("body > home-assistant")?.shadowRoot?.querySelector("home-assistant-main")?.shadowRoot?.querySelector("ha-drawer");e?(e.style.setProperty("--mdc-drawer-width","0px"),console.log("Stile '--mdc-drawer-width' impostato a 0px.")):console.error("Elemento 'ha-drawer' non trovato.");const i=document.querySelector("body > home-assistant")?.shadowRoot?.querySelector("home-assistant-main")?.shadowRoot?.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace")?.shadowRoot?.querySelector("hui-root")?.shadowRoot?.querySelector("div > div.header");i?(i.style.setProperty("display","none"),console.log("Stile 'display: none' applicato a 'div.header'.")):console.error("Elemento 'div.header' non trovato.")}restoreOriginalState(){const t=document.querySelector("body > home-assistant")?.shadowRoot?.querySelector("home-assistant-main"),e=t?.shadowRoot?.querySelector("ha-drawer");e&&e.style.removeProperty("--mdc-drawer-width");const i=e?.querySelector("partial-panel-resolver > ha-panel-lovelace"),n=i?.shadowRoot?.querySelector("hui-root"),s=n?.shadowRoot?.querySelector("#view");s&&s.style.removeProperty("padding");const a=n?.shadowRoot?.querySelector("div > div.header");a&&a.style.removeProperty("display")}renderEntityState(){if(!this.config?.value_entity)return D``;const t=this.config.value_entity;return D`
      <div id="entityState" class="icon-state-div-class">
        ${t.length>0?t.map((t=>{const e=this.hass.states[t];if(!e)return D`<div>Entità non trovata: ${t}</div>`;const i=e.attributes.friendly_name||t;let n=e.state;const s=parseFloat(n);!isNaN(s)&&isFinite(s)&&(n=s.toFixed(1));const a=e.attributes.unit_of_measurement||"",o=this.config?.value_entity_show_name??!1,r=this.config?.value_entity_font_size??5;return D`
                <div class="entity">
                  <span class="friendly-name" style="display:${o?"block":"none"}">${i}</span>
                  <div class="value" style="font-size: ${r}vh;">
                    <span class="state">${n}</span>
                    <span class="unit">${a}</span>
                  </div>
                </div>
              `})):D`<div>Nessuna entità configurata</div>`}
      </div>
    `}renderEvents(){return this.config?.calendars?D`
      <div class="events">
        ${this.events.length>0?this.events.map((t=>D`
                <div class="event">
                  <div class="event-title">${t.summary}</div>
                  <div class="event-time">
                    ${t.start?.dateTime&&t.end?.dateTime?D`${this.formatEventDate(t.start)} -
                        ${this.formatEventDate(t.end)}`:D`${t.start?.date||""}`}
                  </div>
                </div>
              `)):D``}
      </div>
    `:D``}navigateTo(t){this.hass&&this.hass.navigate?this.hass.navigate(t):(window.history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed")))}render(){const t=this.getHourlyForecast().slice(0,16);let e="";const i=(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),n=this.hass?.locale?.language||"en-US",s=new Date,a=s.toLocaleDateString(n,{weekday:"short"}),o=s.toLocaleDateString(n,{day:"2-digit"}),r=s.toLocaleDateString(n,{month:"2-digit"}),l=s.toLocaleDateString(n,{year:"2-digit"}),c=`${a} : ${o} : ${r} : ${l}`,d=this.config?.entity_icon||[],h=this.config?.entity;if(!h||!this.hass.states[h])return console.error("Invalid or not found weather entity:",h),D``;const u=this.hass.states[h].state,p=this.hass.states[h].attributes.temperature_unit,v=this.hass.states[h].attributes.precipitation_unit,g=Number(this.config.external_temperature&&this.hass.states[this.config.external_temperature]?this.hass.states[this.config.external_temperature].state:this.hass.states[h]?.attributes?.temperature).toFixed(1),m=this.hass.states["sun.sun"];if(!m)return console.error("Entità sun.sun non trovata"),D``;let f;f="partlycloudy"===u?"above_horizon"===m?.state?"partlycloudy":"partlycloudy-night":this.config.rain_sensor&&"raining"===this.hass.states[this.config.rain_sensor]?.state?"raining":u;const _=this.config?.value_entity&&this.config?.calendars,y=0===Math.floor(Date.now()/7e3%2);return D`
      <ha-card
        id="dynamic-card"
        style="padding: 30px;"
        class="${this._isEditor?"ineditor":""}"
        @click=${()=>{this.config?.hide_bar&&this.restoreOriginalState(),this.config?.landing_page&&this.navigateTo(this.config.landing_page)}}
      >
        ${this.cg_alert?D` <div class="cg-alert"></div> `:""}
        <div id="icon-state-div" class="icon-state-div-class">
          ${d.length>0?d.map((t=>{const e=t.entity,i=t.icon,n=this.hass.states[e];if(!n||!function(t){if(!t)return!1;const e=t.state.toLowerCase(),i=Number(e);return["on","open","opening","closing","cleaning","true","idle","home","playing","paused","locked","occupied","available","running","active","connected","online","mowing","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm"].includes(e)||i>0}(n))return"";const s=e.split(".")[0];let a;if(n.attributes.device_class,i)a=i;else if(_t(e,"cover")){a=vt(ft(this.hass,e,"device_class"))}else if(_t(e,"binary_sensor")){a=gt(ft(this.hass,e,"device_class"))}else if(_t(e,"sensor")){a=mt(ft(this.hass,e,"device_class"),Number(this.hass.states[e]?.state)||0)}else a=yt[s]||ft(this.hass,e,"icon")||"mdi:eye";return D`
                  <ha-icon
                    .icon="${a}"
                    style="margin: 0 8px; font-size: 24px;"
                    title="${n.attributes.friendly_name||e}"
                  ></ha-icon>
                `})):D`<div></div>`}
        </div>

        ${this.config?.weather_attribution_entity?D`
              <div class="weather-attribution">
                ${this.hass.states[this.config.weather_attribution_entity]?.attributes?.attribution||""}
              </div>
            `:""}

        <div id="date-time">
          <div class="time">
            ${i}
            <div class="date">
              <div>${a}</div>
              <div>:</div>
              <div>${o}</div>
              <div>:</div>
              <div>${r}</div>
              <div>:</div>
              <div>${l}</div>
            </div>
          </div>
          <!--    <div class="date">${c}</div> -->
        </div>

        <div class="now-icon">
          <img
            src="https://raw.githubusercontent.com/madmicio/screensaver-card/main/icons/now_icon/${f}.svg"
          />
        </div>

        <div class="div-temp">
          ${this.config?.internal_temperature?(()=>{const t=this.config?.internal_temperature||"",e=t&&this.hass.states[t]?this.hass.states[t].state:null;return D`
                  <svg
                    version="1.1"
                    id="Ñëîé_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 1152.78 354.73"
                    style="enable-background:new 0 0 1152.78 354.73; height:6vh;"
                    xml:space="preserve"
                  >
                    <style type="text/css">
                      .st0 {
                        fill: #757575;
                      }
                      .st1 {
                        font-family: "bw_font";
                        font-weight: bold;
                      }
                      .st2 {
                        font-size: 180px;
                      }
                    </style>
                    <g>
                      <path
                        class="st0"
                        d="M1134.59,158.27c1.24,1.14,1.56,2.51,0.97,4.07c-0.56,1.48-2.01,2.44-3.59,2.44h-29.34
  c-16.57,0-30,13.43-30,30v24.55c0,4.16,3.37,7.52,7.52,7.52l0,0c4.16,0,7.52-3.37,7.52-7.52v-24.55c0-8.25,6.69-14.94,14.94-14.94
  h29.43c17.14,0,25.35-21.04,12.74-32.65L853.18,8.75c-3.6-3.31-8.16-4.96-12.73-4.96c-4.57,0-9.14,1.65-12.74,4.97L555.94,147.19
  c-12.6,11.61-4.39,32.65,12.74,32.65h33.18c8.25,0,14.94,6.69,14.94,14.94v138.86c0,8.47,8.83,15.24,17.26,15.24h69.4
  c4.16,0,7.52-3.37,7.52-7.52l0,0c0-4.16-3.37-7.52-7.52-7.52h-69.4c-0.68,0-1.7-0.52-2.21-0.99V194.78c0-16.57-13.43-30-30-30
  h-33.09c-1.59,0-3.04-0.96-3.6-2.44c-0.59-1.56-0.25-2.93,0.98-4.07L837.9,19.83c0.89-0.82,1.88-0.99,2.55-0.99
  c0.67,0,1.65,0.17,2.54,0.99"
                      />
                    </g>
                    <text
                      transform="matrix(1 0 0 1 0.1313 290.461)"
                      class="st0 st1 st2"
                    >
                      ${g}°
                    </text>
                    <text
                      transform="matrix(1 0 0 1 660.559 290.461)"
                      class="st0 st1 st2"
                    >
                      ${e}°
                    </text>
                  </svg>
                `})():D`<div class="ext-temp">${g}°</div>`}
        </div>

        ${_?D`
              <div
                style="grid-area: cal-event;align-self: end;"
                class="${y?"visible":"hidden"}"
              >
                ${y?this.renderEntityState():""}
              </div>
              <div
                style="grid-area: cal-event;align-self: end;"
                class="${y?"hidden":"visible"}"
              >
                ${y?"":this.renderEvents()}
              </div>
            `:D`
              ${this.config?.value_entity?D`<div style="grid-area: cal-event;align-self: end;">
                    ${this.renderEntityState()}
                  </div>`:""}
              ${this.config?.calendars?D`<div style="grid-area: cal-event;align-self: end;">
                    ${this.renderEvents()}
                  </div>`:""}
            `}

        <div style="grid-area: tline; margin-top: 7vh;">
          <div class="gradient-bar"></div>
          <div class="timeline">
            ${t.length>0?t.map(((t,i)=>{const n=t.condition!==e;e=t.condition;const s=`https://raw.githubusercontent.com/madmicio/screensaver-card/main/icons/${bt.weatherIconsDay[t.condition]||"unknown"}.svg`,a="°C"===p?t.temperature<10?"cold":t.temperature>25?"hot":"":"°F"===p?t.temperature<50?"cold":t.temperature>77?"hot":"":"";return D`
                    <div class="timeline-item">
                      ${n?D`
                            <div class="condition">
                              <img src="${s}" alt="${t.condition}" />
                            </div>
                          `:D`<div class="condition"></div>`}
                      <div class="details">
                        <div class="hour">
                          ${new Date(t.datetime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
                        </div>
                        <div class="temperature ${a}">
                          ${t.temperature}${p}
                        </div>
                        ${0!==t.precipitation?D`<div class="precipitation">
                              ${t.precipitation} ${v}
                            </div>`:""}
                      </div>
                    </div>
                  `})):D`<div>No hourly forecast available</div>`}
          </div>
        </div>
      </ha-card>
    `}};Et.weatherIconsDay={clear:"day","clear-night":"night",cloudy:"cloudy",fog:"fog",hail:"hail",lightning:"lightning","lightning-rainy":"lightning-rainy",partlycloudy:"partlycloudy",pouring:"pouring",rainy:"rainy",snowy:"snowy","snowy-rainy":"snowy-rainy",sunny:"day",windy:"windy","windy-variant":"windy-variant",exceptional:"!!"},t([ct({attribute:!1}),e("design:type",Object)],Et.prototype,"hass",void 0),t([ct({attribute:!1}),e("design:type",Object)],Et.prototype,"config",void 0),t([dt(),e("design:type",Boolean)],Et.prototype,"cg_alert",void 0),t([dt(),e("design:type",Object)],Et.prototype,"hourlyForecastEvent",void 0),t([dt(),e("design:type",Promise)],Et.prototype,"subscribedToHourlyForecast",void 0),t([dt(),e("design:type",Array)],Et.prototype,"events",void 0),Et=bt=t([rt("screensaver-card"),e("design:paramtypes",[])],Et);export{Et as ScreensaverCard};
