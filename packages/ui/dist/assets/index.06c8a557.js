(function(){ try {var elementStyle = document.createElement('style'); elementStyle.innerText = "._button_16lea_1{font-family:sans-serif;font-weight:600;background-color:#ffd803;color:#272343;border-radius:20px;border:0;padding:0 20px;margin:10px;min-height:50px}._buttonSecondary_16lea_13{background-color:#fffffe;border:2px solid #ffd803}._headerTab_1hzup_1{font-family:sans-serif;background-color:#ffd803;color:#272343;padding:0 20px;display:flex;justify-content:space-between;align-items:center;width:98%}._cart_1hzup_12{position:relative}._counter_1hzup_16{position:absolute;top:-15px}._footer_163im_1{font-family:sans-serif;background-color:#ffd803;color:#272343;padding:10px}._footerList_163im_8{display:flex}._footerListItem_163im_12{width:50%}._card_1fsnf_1{font-family:sans-serif;background-color:#fff;color:#2d334a;transition:box-shadow .3s cubic-bezier(.4,0,.2,1) 0ms;border-radius:4px;border:1px solid #dad8d8e3;box-shadow:1px 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f;overflow:hidden;min-width:275px;max-width:475px;padding:10px;height:450px}._appComponent_1egpa_1{font-family:sans-serif;font-weight:500;background-color:#fff;color:#2d334a;padding:10px;margin:10px}"; document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import V from"https://esm.sh/react@18.2.0";import{createRoot as z}from"https://esm.sh/react-dom/client";import{format as H}from"https://esm.sh/date-fns";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(r){if(r.ep)return;r.ep=!0;const u=o(r);fetch(r.href,u)}})();const W="_button_16lea_1",X="_buttonSecondary_16lea_13",L={button:W,buttonSecondary:X};var C={exports:{}},E={},P={exports:{}},i={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=Symbol.for("react.element"),G=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),Z=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),re=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),j=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,A={};function y(e,t,o){this.props=e,this.context=t,this.refs=A,this.updater=o||T}y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function D(){}D.prototype=y.prototype;function g(e,t,o){this.props=e,this.context=t,this.refs=A,this.updater=o||T}var k=g.prototype=new D;k.constructor=g;F(k,y.prototype);k.isPureReactComponent=!0;var N=Array.isArray,M=Object.prototype.hasOwnProperty,w={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,o){var n,r={},u=null,c=null;if(t!=null)for(n in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(u=""+t.key),t)M.call(t,n)&&!U.hasOwnProperty(n)&&(r[n]=t[n]);var l=arguments.length-2;if(l===1)r.children=o;else if(1<l){for(var a=Array(l),d=0;d<l;d++)a[d]=arguments[d+2];r.children=a}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)r[n]===void 0&&(r[n]=l[n]);return{$$typeof:m,type:e,key:u,ref:c,props:r,_owner:w.current}}function ue(e,t){return{$$typeof:m,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function O(e){return typeof e=="object"&&e!==null&&e.$$typeof===m}function ie(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(o){return t[o]})}var I=/\/+/g;function R(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ie(""+e.key):t.toString(36)}function b(e,t,o,n,r){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case m:case G:c=!0}}if(c)return c=e,r=r(c),e=n===""?"."+R(c,0):n,N(r)?(o="",e!=null&&(o=e.replace(I,"$&/")+"/"),b(r,t,o,"",function(d){return d})):r!=null&&(O(r)&&(r=ue(r,o+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(I,"$&/")+"/")+e)),t.push(r)),1;if(c=0,n=n===""?".":n+":",N(e))for(var l=0;l<e.length;l++){u=e[l];var a=n+R(u,l);c+=b(u,t,o,a,r)}else if(a=oe(e),typeof a=="function")for(e=a.call(e),l=0;!(u=e.next()).done;)u=u.value,a=n+R(u,l++),c+=b(u,t,o,a,r);else if(u==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function h(e,t,o){if(e==null)return e;var n=[],r=0;return b(e,n,"","",function(u){return t.call(o,u,r++)}),n}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(o){(e._status===0||e._status===-1)&&(e._status=1,e._result=o)},function(o){(e._status===0||e._status===-1)&&(e._status=2,e._result=o)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var p={current:null},$={transition:null},se={ReactCurrentDispatcher:p,ReactCurrentBatchConfig:$,ReactCurrentOwner:w};i.Children={map:h,forEach:function(e,t,o){h(e,function(){t.apply(this,arguments)},o)},count:function(e){var t=0;return h(e,function(){t++}),t},toArray:function(e){return h(e,function(t){return t})||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};i.Component=y;i.Fragment=J;i.Profiler=Y;i.PureComponent=g;i.StrictMode=K;i.Suspense=te;i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se;i.cloneElement=function(e,t,o){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=F({},e.props),r=e.key,u=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(u=t.ref,c=w.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)M.call(t,a)&&!U.hasOwnProperty(a)&&(n[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)n.children=o;else if(1<a){l=Array(a);for(var d=0;d<a;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:m,type:e.type,key:r,ref:u,props:n,_owner:c}};i.createContext=function(e){return e={$$typeof:Z,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q,_context:e},e.Consumer=e};i.createElement=q;i.createFactory=function(e){var t=q.bind(null,e);return t.type=e,t};i.createRef=function(){return{current:null}};i.forwardRef=function(e){return{$$typeof:ee,render:e}};i.isValidElement=O;i.lazy=function(e){return{$$typeof:ne,_payload:{_status:-1,_result:e},_init:ce}};i.memo=function(e,t){return{$$typeof:re,type:e,compare:t===void 0?null:t}};i.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}};i.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};i.useCallback=function(e,t){return p.current.useCallback(e,t)};i.useContext=function(e){return p.current.useContext(e)};i.useDebugValue=function(){};i.useDeferredValue=function(e){return p.current.useDeferredValue(e)};i.useEffect=function(e,t){return p.current.useEffect(e,t)};i.useId=function(){return p.current.useId()};i.useImperativeHandle=function(e,t,o){return p.current.useImperativeHandle(e,t,o)};i.useInsertionEffect=function(e,t){return p.current.useInsertionEffect(e,t)};i.useLayoutEffect=function(e,t){return p.current.useLayoutEffect(e,t)};i.useMemo=function(e,t){return p.current.useMemo(e,t)};i.useReducer=function(e,t,o){return p.current.useReducer(e,t,o)};i.useRef=function(e){return p.current.useRef(e)};i.useState=function(e){return p.current.useState(e)};i.useSyncExternalStore=function(e,t,o){return p.current.useSyncExternalStore(e,t,o)};i.useTransition=function(){return p.current.useTransition()};i.version="18.2.0";(function(e){e.exports=i})(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var le=P.exports,ae=Symbol.for("react.element"),fe=Symbol.for("react.fragment"),pe=Object.prototype.hasOwnProperty,de=le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ye={key:!0,ref:!0,__self:!0,__source:!0};function B(e,t,o){var n,r={},u=null,c=null;o!==void 0&&(u=""+o),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(c=t.ref);for(n in t)pe.call(t,n)&&!ye.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:ae,type:e,key:u,ref:c,props:r,_owner:de.current}}E.Fragment=fe;E.jsx=B;E.jsxs=B;(function(e){e.exports=E})(C);const s=C.exports.jsx,f=C.exports.jsxs,me=C.exports.Fragment,_=({text:e="Submit",onClick:t,disable:o=!1,children:n,type:r="primary",className:u,...c})=>{const l=r==="secondary"?L.buttonSecondary:"";return s("button",{className:`${L.button} ${l} ${u}`,onClick:()=>t(),disable:o,...c,children:e||n})},he="_headerTab_1hzup_1",_e="_cart_1hzup_12",ve="_counter_1hzup_16",x={headerTab:he,cart:_e,counter:ve},Se=new Date,be="d.M.yyyy HH:mm:ss.SSS 'GMT' XXX (z)",$e=H(Se,be,{timeZone:"Europe/Berlin"}),Ce=({count:e})=>f("span",{className:x.cart,children:["\u{1F6D2}",s("span",{className:x.counter,children:e})]}),Ee=({title:e,children:t,count:o=0,className:n})=>f("div",{className:`${x.headerTab} ${n}`,children:[s("h3",{children:e}),t,s("p",{children:$e}),s(Ce,{count:o})]}),Re="_footer_163im_1",xe="_footerList_163im_8",ge="_footerListItem_163im_12",v={footer:Re,footerList:xe,footerListItem:ge},ke=({className:e})=>f("div",{className:`${v.footer} ${e}`,children:[f("div",{children:["Copyright \xA9 2022",s("div",{children:"Disclaimer: This is a sample disclaimer for footer."})]}),f("div",{className:v.footerList,children:[f("ul",{className:v.footerListItem,children:[s("li",{children:"About Us"}),s("li",{children:"Contact"})]}),f("ul",{className:v.footerListItem,children:[s("li",{children:"Follow Us"}),s("li",{children:"More Info"})]})]})]}),we="_card_1fsnf_1",Oe={card:we},Le=({children:e,className:t})=>s("div",{className:`${Oe.card} ${t}`,children:e}),je="_appComponent_1egpa_1",S={appComponent:je},Ne=()=>f(me,{children:[s("section",{children:s("h1",{children:"Library"})}),f("div",{className:S.appComponent,children:["Button",f("div",{children:[s(_,{text:"Sample button"}),s(_,{type:"secondary",children:"Another Sample button"})]})]}),f("div",{className:S.appComponent,children:["Card",s("div",{children:f(Le,{children:[" ",s("div",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, cum iure. Eos quaerat mollitia harum suscipit veniam veritatis fugit illo, commodi rem laboriosam officia delectus soluta magni sit porro alias."}),f("div",{children:[s(_,{text:"Sample button"}),s(_,{type:"secondary",children:"Another Sample button"})]})]})})]}),f("div",{className:S.appComponent,children:["Header",s("div",{children:s(Ee,{title:"Sample header"})})]}),f("div",{className:S.appComponent,children:["Footer",s("div",{children:s(ke,{})})]})]}),Ie=()=>s(Ne,{}),Pe=document.getElementById("root"),Te=z(Pe);Te.render(s(V.StrictMode,{children:s("main",{children:s(Ie,{})})}));