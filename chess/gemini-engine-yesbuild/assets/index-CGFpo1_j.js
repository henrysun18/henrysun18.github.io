(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var iu={exports:{}},yo={},uu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ar=Symbol.for("react.element"),wc=Symbol.for("react.portal"),Tc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),Ic=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Pc=Symbol.for("react.memo"),Nc=Symbol.for("react.lazy"),Zs=Symbol.iterator;function Mc(e){return e===null||typeof e!="object"?null:(e=Zs&&e[Zs]||e["@@iterator"],typeof e=="function"?e:null)}var au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cu=Object.assign,fu={};function En(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||au}En.prototype.isReactComponent={};En.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};En.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function du(){}du.prototype=En.prototype;function ns(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||au}var rs=ns.prototype=new du;rs.constructor=ns;cu(rs,En.prototype);rs.isPureReactComponent=!0;var Xs=Array.isArray,pu=Object.prototype.hasOwnProperty,os={current:null},hu={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,n){var r,o={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)pu.call(t,r)&&!hu.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var u=Array(i),a=0;a<i;a++)u[a]=arguments[a+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:ar,type:e,key:l,ref:s,props:o,_owner:os.current}}function Rc(e,t){return{$$typeof:ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===ar}function Lc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Js=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lc(""+e.key):t.toString(36)}function Ar(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case ar:case wc:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Ho(s,0):r,Xs(o)?(n="",e!=null&&(n=e.replace(Js,"$&/")+"/"),Ar(o,t,n,"",function(a){return a})):o!=null&&(ls(o)&&(o=Rc(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Js,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Xs(e))for(var i=0;i<e.length;i++){l=e[i];var u=r+Ho(l,i);s+=Ar(l,t,n,u,o)}else if(u=Mc(e),typeof u=="function")for(e=u.call(e),i=0;!(l=e.next()).done;)l=l.value,u=r+Ho(l,i++),s+=Ar(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vr(e,t,n){if(e==null)return e;var r=[],o=0;return Ar(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Ac(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Fr={transition:null},Fc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:os};function vu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=En;R.Fragment=Tc;R.Profiler=_c;R.PureComponent=ns;R.StrictMode=xc;R.Suspense=Oc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fc;R.act=vu;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cu({},e.props),o=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=os.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)pu.call(t,u)&&!hu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&i!==void 0?i[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){i=Array(u);for(var a=0;a<u;a++)i[a]=arguments[a+2];r.children=i}return{$$typeof:ar,type:e.type,key:o,ref:l,props:r,_owner:s}};R.createContext=function(e){return e={$$typeof:Cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kc,_context:e},e.Consumer=e};R.createElement=mu;R.createFactory=function(e){var t=mu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Ic,render:e}};R.isValidElement=ls;R.lazy=function(e){return{$$typeof:Nc,_payload:{_status:-1,_result:e},_init:Ac}};R.memo=function(e,t){return{$$typeof:Pc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};R.unstable_act=vu;R.useCallback=function(e,t){return ce.current.useCallback(e,t)};R.useContext=function(e){return ce.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};R.useEffect=function(e,t){return ce.current.useEffect(e,t)};R.useId=function(){return ce.current.useId()};R.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ce.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};R.useRef=function(e){return ce.current.useRef(e)};R.useState=function(e){return ce.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ce.current.useTransition()};R.version="18.3.1";uu.exports=R;var H=uu.exports;const Hc=Sc(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=H,jc=Symbol.for("react.element"),Gc=Symbol.for("react.fragment"),Bc=Object.prototype.hasOwnProperty,zc=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uc={key:!0,ref:!0,__self:!0,__source:!0};function gu(e,t,n){var r,o={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Bc.call(t,r)&&!Uc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:jc,type:e,key:l,ref:s,props:o,_owner:zc.current}}yo.Fragment=Gc;yo.jsx=gu;yo.jsxs=gu;iu.exports=yo;var g=iu.exports,al={},yu={exports:{}},Ce={},Eu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,N){var M=x.length;x.push(N);e:for(;0<M;){var b=M-1>>>1,j=x[b];if(0<o(j,N))x[b]=N,x[M]=j,M=b;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var N=x[0],M=x.pop();if(M!==N){x[0]=M;e:for(var b=0,j=x.length,hr=j>>>1;b<hr;){var It=2*(b+1)-1,Fo=x[It],Ot=It+1,mr=x[Ot];if(0>o(Fo,M))Ot<j&&0>o(mr,Fo)?(x[b]=mr,x[Ot]=M,b=Ot):(x[b]=Fo,x[It]=M,b=It);else if(Ot<j&&0>o(mr,M))x[b]=mr,x[Ot]=M,b=Ot;else break e}}return N}function o(x,N){var M=x.sortIndex-N.sortIndex;return M!==0?M:x.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var u=[],a=[],h=1,m=null,p=3,v=!1,E=!1,y=!1,P=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(x){for(var N=n(a);N!==null;){if(N.callback===null)r(a);else if(N.startTime<=x)r(a),N.sortIndex=N.expirationTime,t(u,N);else break;N=n(a)}}function S(x){if(y=!1,d(x),!E)if(n(u)!==null)E=!0,q(T);else{var N=n(a);N!==null&&he(S,N.startTime-x)}}function T(x,N){E=!1,y&&(y=!1,f(O),O=-1),v=!0;var M=p;try{for(d(N),m=n(u);m!==null&&(!(m.expirationTime>N)||x&&!L());){var b=m.callback;if(typeof b=="function"){m.callback=null,p=m.priorityLevel;var j=b(m.expirationTime<=N);N=e.unstable_now(),typeof j=="function"?m.callback=j:m===n(u)&&r(u),d(N)}else r(u);m=n(u)}if(m!==null)var hr=!0;else{var It=n(a);It!==null&&he(S,It.startTime-N),hr=!1}return hr}finally{m=null,p=M,v=!1}}var k=!1,I=null,O=-1,U=5,C=-1;function L(){return!(e.unstable_now()-C<U)}function de(){if(I!==null){var x=e.unstable_now();C=x;var N=!0;try{N=I(!0,x)}finally{N?pe():(k=!1,I=null)}}else k=!1}var pe;if(typeof c=="function")pe=function(){c(de)};else if(typeof MessageChannel<"u"){var xn=new MessageChannel,ze=xn.port2;xn.port1.onmessage=de,pe=function(){ze.postMessage(null)}}else pe=function(){P(de,0)};function q(x){I=x,k||(k=!0,pe())}function he(x,N){O=P(function(){x(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){E||v||(E=!0,q(T))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var N=3;break;default:N=p}var M=p;p=N;try{return x()}finally{p=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,N){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var M=p;p=x;try{return N()}finally{p=M}},e.unstable_scheduleCallback=function(x,N,M){var b=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?b+M:b):M=b,x){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=M+j,x={id:h++,callback:N,priorityLevel:x,startTime:M,expirationTime:j,sortIndex:-1},M>b?(x.sortIndex=M,t(a,x),n(u)===null&&x===n(a)&&(y?(f(O),O=-1):y=!0,he(S,M-b))):(x.sortIndex=j,t(u,x),E||v||(E=!0,q(T))),x},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(x){var N=p;return function(){var M=p;p=N;try{return x.apply(this,arguments)}finally{p=M}}}})(Su);Eu.exports=Su;var bc=Eu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=H,ke=bc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,Yn={};function bt(e,t){dn(e,t),dn(e+"Capture",t)}function dn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)wu.add(t[e])}var tt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,Kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ei={},ti={};function Yc(e){return cl.call(ti,e)?!0:cl.call(ei,e)?!1:Kc.test(e)?ti[e]=!0:(ei[e]=!0,!1)}function $c(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vc(e,t,n,r){if(t===null||typeof t>"u"||$c(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,o,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ss=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ss,is);re[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ss,is);re[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ss,is);re[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function us(e,t,n,r){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vc(t,n,o,r)&&(n=null),r||o===null?Yc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var lt=Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),$t=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),xu=Symbol.for("react.context"),cs=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),fs=Symbol.for("react.memo"),ut=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),ni=Symbol.iterator;function _n(e){return e===null||typeof e!="object"?null:(e=ni&&e[ni]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Do;function Rn(e){if(Do===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Do=t&&t[1]||""}return`
`+Do+e}var jo=!1;function Go(e,t){if(!e||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var o=a.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,i=l.length-1;1<=s&&0<=i&&o[s]!==l[i];)i--;for(;1<=s&&0<=i;s--,i--)if(o[s]!==l[i]){if(s!==1||i!==1)do if(s--,i--,0>i||o[s]!==l[i]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=i);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Rn(e):""}function Qc(e){switch(e.tag){case 5:return Rn(e.type);case 16:return Rn("Lazy");case 13:return Rn("Suspense");case 19:return Rn("SuspenseList");case 0:case 2:case 15:return e=Go(e.type,!1),e;case 11:return e=Go(e.type.render,!1),e;case 1:return e=Go(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $t:return"Fragment";case Yt:return"Portal";case fl:return"Profiler";case as:return"StrictMode";case dl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xu:return(e.displayName||"Context")+".Consumer";case Tu:return(e._context.displayName||"Context")+".Provider";case cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fs:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case ut:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function qc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zc(e){var t=ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Zc(e))}function Cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ri(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Iu(e,t){t=t.checked,t!=null&&us(e,"checked",t,!1)}function vl(e,t){Iu(e,t);var n=Tt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&gl(e,t.type,Tt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gl(e,t,n){(t!=="number"||$r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ln=Array.isArray;function ln(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function li(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(Ln(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tt(n)}}function Ou(e,t){var n=Tt(t.value),r=Tt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function si(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function El(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $n(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Hn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xc=["Webkit","ms","Moz","O"];Object.keys(Hn).forEach(function(e){Xc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Hn[t]=Hn[e]})});function Mu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Hn.hasOwnProperty(e)&&Hn[e]?(""+t).trim():t+"px"}function Ru(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Mu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Jc=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(Jc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,sn=null,un=null;function ii(e){if(e=dr(e)){if(typeof xl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=xo(t),xl(e.stateNode,e.type,t))}}function Lu(e){sn?un?un.push(e):un=[e]:sn=e}function Au(){if(sn){var e=sn,t=un;if(un=sn=null,ii(e),t)for(e=0;e<t.length;e++)ii(t[e])}}function Fu(e,t){return e(t)}function Hu(){}var Bo=!1;function Du(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Fu(e,t,n)}finally{Bo=!1,(sn!==null||un!==null)&&(Hu(),Au())}}function Vn(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var _l=!1;if(tt)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){_l=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{_l=!1}function ef(e,t,n,r,o,l,s,i,u){var a=Array.prototype.slice.call(arguments,3);try{t.apply(n,a)}catch(h){this.onError(h)}}var Dn=!1,Vr=null,Qr=!1,kl=null,tf={onError:function(e){Dn=!0,Vr=e}};function nf(e,t,n,r,o,l,s,i,u){Dn=!1,Vr=null,ef.apply(tf,arguments)}function rf(e,t,n,r,o,l,s,i,u){if(nf.apply(this,arguments),Dn){if(Dn){var a=Vr;Dn=!1,Vr=null}else throw Error(w(198));Qr||(Qr=!0,kl=a)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ju(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ui(e){if(Wt(e)!==e)throw Error(w(188))}function of(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ui(o),e;if(l===r)return ui(o),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=l;else{for(var s=!1,i=o.child;i;){if(i===n){s=!0,n=o,r=l;break}if(i===r){s=!0,r=o,n=l;break}i=i.sibling}if(!s){for(i=l.child;i;){if(i===n){s=!0,n=l,r=o;break}if(i===r){s=!0,r=l,n=o;break}i=i.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Gu(e){return e=of(e),e!==null?Bu(e):null}function Bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bu(e);if(t!==null)return t;e=e.sibling}return null}var zu=ke.unstable_scheduleCallback,ai=ke.unstable_cancelCallback,lf=ke.unstable_shouldYield,sf=ke.unstable_requestPaint,V=ke.unstable_now,uf=ke.unstable_getCurrentPriorityLevel,ps=ke.unstable_ImmediatePriority,Uu=ke.unstable_UserBlockingPriority,qr=ke.unstable_NormalPriority,af=ke.unstable_LowPriority,bu=ke.unstable_IdlePriority,Eo=null,$e=null;function cf(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var je=Math.clz32?Math.clz32:pf,ff=Math.log,df=Math.LN2;function pf(e){return e>>>=0,e===0?32:31-(ff(e)/df|0)|0}var Sr=64,wr=4194304;function An(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var i=s&~o;i!==0?r=An(i):(l&=s,l!==0&&(r=An(l)))}else s=n&~o,s!==0?r=An(s):l!==0&&(r=An(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-je(t),o=1<<n,r|=e[n],t&=~o;return r}function hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-je(l),i=1<<s,u=o[s];u===-1?(!(i&n)||i&r)&&(o[s]=hf(i,t)):u<=t&&(e.expiredLanes|=i),l&=~i}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-je(t),e[t]=n}function vf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-je(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yu,ms,$u,Vu,Qu,Il=!1,Tr=[],ht=null,mt=null,vt=null,Qn=new Map,qn=new Map,ct=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ci(e,t){switch(e){case"focusin":case"focusout":ht=null;break;case"dragenter":case"dragleave":mt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(t.pointerId)}}function Cn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=dr(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yf(e,t,n,r,o){switch(t){case"focusin":return ht=Cn(ht,e,t,n,r,o),!0;case"dragenter":return mt=Cn(mt,e,t,n,r,o),!0;case"mouseover":return vt=Cn(vt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Qn.set(l,Cn(Qn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,qn.set(l,Cn(qn.get(l)||null,e,t,n,r,o)),!0}return!1}function qu(e){var t=Rt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=ju(n),t!==null){e.blockedOn=t,Qu(e.priority,function(){$u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ol(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tl=r,n.target.dispatchEvent(r),Tl=null}else return t=dr(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function fi(e,t,n){Hr(e)&&n.delete(t)}function Ef(){Il=!1,ht!==null&&Hr(ht)&&(ht=null),mt!==null&&Hr(mt)&&(mt=null),vt!==null&&Hr(vt)&&(vt=null),Qn.forEach(fi),qn.forEach(fi)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Il||(Il=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Ef)))}function Zn(e){function t(o){return In(o,e)}if(0<Tr.length){In(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ht!==null&&In(ht,e),mt!==null&&In(mt,e),vt!==null&&In(vt,e),Qn.forEach(t),qn.forEach(t),n=0;n<ct.length;n++)r=ct[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ct.length&&(n=ct[0],n.blockedOn===null);)qu(n),n.blockedOn===null&&ct.shift()}var an=lt.ReactCurrentBatchConfig,Xr=!0;function Sf(e,t,n,r){var o=F,l=an.transition;an.transition=null;try{F=1,vs(e,t,n,r)}finally{F=o,an.transition=l}}function wf(e,t,n,r){var o=F,l=an.transition;an.transition=null;try{F=4,vs(e,t,n,r)}finally{F=o,an.transition=l}}function vs(e,t,n,r){if(Xr){var o=Ol(e,t,n,r);if(o===null)Zo(e,t,r,Jr,n),ci(e,r);else if(yf(o,e,t,n,r))r.stopPropagation();else if(ci(e,r),t&4&&-1<gf.indexOf(e)){for(;o!==null;){var l=dr(o);if(l!==null&&Yu(l),l=Ol(e,t,n,r),l===null&&Zo(e,t,r,Jr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var Jr=null;function Ol(e,t,n,r){if(Jr=null,e=ds(r),e=Rt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ju(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function Zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uf()){case ps:return 1;case Uu:return 4;case qr:case af:return 16;case bu:return 536870912;default:return 16}default:return 16}}var dt=null,gs=null,Dr=null;function Xu(){if(Dr)return Dr;var e,t=gs,n=t.length,r,o="value"in dt?dt.value:dt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[l-r];r++);return Dr=o.slice(e,1<r?1-r:void 0)}function jr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function di(){return!1}function Ie(e){function t(n,r,o,l,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xr:di,this.isPropagationStopped=di,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var Sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=Ie(Sn),fr=Y({},Sn,{view:0,detail:0}),Tf=Ie(fr),Uo,bo,On,So=Y({},fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==On&&(On&&e.type==="mousemove"?(Uo=e.screenX-On.screenX,bo=e.screenY-On.screenY):bo=Uo=0,On=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),pi=Ie(So),xf=Y({},So,{dataTransfer:0}),_f=Ie(xf),kf=Y({},fr,{relatedTarget:0}),Wo=Ie(kf),Cf=Y({},Sn,{animationName:0,elapsedTime:0,pseudoElement:0}),If=Ie(Cf),Of=Y({},Sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Ie(Of),Nf=Y({},Sn,{data:0}),hi=Ie(Nf),Mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lf[e])?!!t[e]:!1}function Es(){return Af}var Ff=Y({},fr,{key:function(e){if(e.key){var t=Mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Es,charCode:function(e){return e.type==="keypress"?jr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hf=Ie(Ff),Df=Y({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mi=Ie(Df),jf=Y({},fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Es}),Gf=Ie(jf),Bf=Y({},Sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=Ie(Bf),Uf=Y({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=Ie(Uf),Wf=[9,13,27,32],Ss=tt&&"CompositionEvent"in window,jn=null;tt&&"documentMode"in document&&(jn=document.documentMode);var Kf=tt&&"TextEvent"in window&&!jn,Ju=tt&&(!Ss||jn&&8<jn&&11>=jn),vi=" ",gi=!1;function ea(e,t){switch(e){case"keyup":return Wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Yf(e,t){switch(e){case"compositionend":return ta(t);case"keypress":return t.which!==32?null:(gi=!0,vi);case"textInput":return e=t.data,e===vi&&gi?null:e;default:return null}}function $f(e,t){if(Vt)return e==="compositionend"||!Ss&&ea(e,t)?(e=Xu(),Dr=gs=dt=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var Vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vf[e.type]:t==="textarea"}function na(e,t,n,r){Lu(r),t=eo(t,"onChange"),0<t.length&&(n=new ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Xn=null;function Qf(e){pa(e,0)}function wo(e){var t=Zt(e);if(Cu(t))return e}function qf(e,t){if(e==="change")return t}var ra=!1;if(tt){var Ko;if(tt){var Yo="oninput"in document;if(!Yo){var Ei=document.createElement("div");Ei.setAttribute("oninput","return;"),Yo=typeof Ei.oninput=="function"}Ko=Yo}else Ko=!1;ra=Ko&&(!document.documentMode||9<document.documentMode)}function Si(){Gn&&(Gn.detachEvent("onpropertychange",oa),Xn=Gn=null)}function oa(e){if(e.propertyName==="value"&&wo(Xn)){var t=[];na(t,Xn,e,ds(e)),Du(Qf,t)}}function Zf(e,t,n){e==="focusin"?(Si(),Gn=t,Xn=n,Gn.attachEvent("onpropertychange",oa)):e==="focusout"&&Si()}function Xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Xn)}function Jf(e,t){if(e==="click")return wo(t)}function ed(e,t){if(e==="input"||e==="change")return wo(t)}function td(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Be=typeof Object.is=="function"?Object.is:td;function Jn(e,t){if(Be(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!Be(e[o],t[o]))return!1}return!0}function wi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ti(e,t){var n=wi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wi(n)}}function la(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?la(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sa(){for(var e=window,t=$r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$r(e.document)}return t}function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nd(e){var t=sa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&la(n.ownerDocument.documentElement,n)){if(r!==null&&ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ti(n,l);var s=Ti(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rd=tt&&"documentMode"in document&&11>=document.documentMode,Qt=null,Pl=null,Bn=null,Nl=!1;function xi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nl||Qt==null||Qt!==$r(r)||(r=Qt,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bn&&Jn(Bn,r)||(Bn=r,r=eo(Pl,"onSelect"),0<r.length&&(t=new ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qt)))}function _r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qt={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionend:_r("Transition","TransitionEnd")},$o={},ia={};tt&&(ia=document.createElement("div").style,"AnimationEvent"in window||(delete qt.animationend.animation,delete qt.animationiteration.animation,delete qt.animationstart.animation),"TransitionEvent"in window||delete qt.transitionend.transition);function To(e){if($o[e])return $o[e];if(!qt[e])return e;var t=qt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ia)return $o[e]=t[n];return e}var ua=To("animationend"),aa=To("animationiteration"),ca=To("animationstart"),fa=To("transitionend"),da=new Map,_i="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){da.set(e,t),bt(t,[e])}for(var Vo=0;Vo<_i.length;Vo++){var Qo=_i[Vo],od=Qo.toLowerCase(),ld=Qo[0].toUpperCase()+Qo.slice(1);_t(od,"on"+ld)}_t(ua,"onAnimationEnd");_t(aa,"onAnimationIteration");_t(ca,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(fa,"onTransitionEnd");dn("onMouseEnter",["mouseout","mouseover"]);dn("onMouseLeave",["mouseout","mouseover"]);dn("onPointerEnter",["pointerout","pointerover"]);dn("onPointerLeave",["pointerout","pointerover"]);bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fn));function ki(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rf(r,t,void 0,e),e.currentTarget=null}function pa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var i=r[s],u=i.instance,a=i.currentTarget;if(i=i.listener,u!==l&&o.isPropagationStopped())break e;ki(o,i,a),l=u}else for(s=0;s<r.length;s++){if(i=r[s],u=i.instance,a=i.currentTarget,i=i.listener,u!==l&&o.isPropagationStopped())break e;ki(o,i,a),l=u}}}if(Qr)throw e=kl,Qr=!1,kl=null,e}function G(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(ha(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),ha(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[kr]){e[kr]=!0,wu.forEach(function(n){n!=="selectionchange"&&(sd.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,qo("selectionchange",!1,t))}}function ha(e,t,n,r){switch(Zu(t)){case 1:var o=Sf;break;case 4:o=wf;break;default:o=vs}n=o.bind(null,t,n,e),o=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;i!==null;){if(s=Rt(i),s===null)return;if(u=s.tag,u===5||u===6){r=l=s;continue e}i=i.parentNode}}r=r.return}Du(function(){var a=l,h=ds(n),m=[];e:{var p=da.get(e);if(p!==void 0){var v=ys,E=e;switch(e){case"keypress":if(jr(n)===0)break e;case"keydown":case"keyup":v=Hf;break;case"focusin":E="focus",v=Wo;break;case"focusout":E="blur",v=Wo;break;case"beforeblur":case"afterblur":v=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=pi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Gf;break;case ua:case aa:case ca:v=If;break;case fa:v=zf;break;case"scroll":v=Tf;break;case"wheel":v=bf;break;case"copy":case"cut":case"paste":v=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=mi}var y=(t&4)!==0,P=!y&&e==="scroll",f=y?p!==null?p+"Capture":null:p;y=[];for(var c=a,d;c!==null;){d=c;var S=d.stateNode;if(d.tag===5&&S!==null&&(d=S,f!==null&&(S=Vn(c,f),S!=null&&y.push(tr(c,S,d)))),P)break;c=c.return}0<y.length&&(p=new v(p,E,null,n,h),m.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Tl&&(E=n.relatedTarget||n.fromElement)&&(Rt(E)||E[nt]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(E=n.relatedTarget||n.toElement,v=a,E=E?Rt(E):null,E!==null&&(P=Wt(E),E!==P||E.tag!==5&&E.tag!==6)&&(E=null)):(v=null,E=a),v!==E)){if(y=pi,S="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=mi,S="onPointerLeave",f="onPointerEnter",c="pointer"),P=v==null?p:Zt(v),d=E==null?p:Zt(E),p=new y(S,c+"leave",v,n,h),p.target=P,p.relatedTarget=d,S=null,Rt(h)===a&&(y=new y(f,c+"enter",E,n,h),y.target=d,y.relatedTarget=P,S=y),P=S,v&&E)t:{for(y=v,f=E,c=0,d=y;d;d=Kt(d))c++;for(d=0,S=f;S;S=Kt(S))d++;for(;0<c-d;)y=Kt(y),c--;for(;0<d-c;)f=Kt(f),d--;for(;c--;){if(y===f||f!==null&&y===f.alternate)break t;y=Kt(y),f=Kt(f)}y=null}else y=null;v!==null&&Ci(m,p,v,y,!1),E!==null&&P!==null&&Ci(m,P,E,y,!0)}}e:{if(p=a?Zt(a):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var T=qf;else if(yi(p))if(ra)T=ed;else{T=Xf;var k=Zf}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Jf);if(T&&(T=T(e,a))){na(m,T,n,h);break e}k&&k(e,p,a),e==="focusout"&&(k=p._wrapperState)&&k.controlled&&p.type==="number"&&gl(p,"number",p.value)}switch(k=a?Zt(a):window,e){case"focusin":(yi(k)||k.contentEditable==="true")&&(Qt=k,Pl=a,Bn=null);break;case"focusout":Bn=Pl=Qt=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,xi(m,n,h);break;case"selectionchange":if(rd)break;case"keydown":case"keyup":xi(m,n,h)}var I;if(Ss)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Vt?ea(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ju&&n.locale!=="ko"&&(Vt||O!=="onCompositionStart"?O==="onCompositionEnd"&&Vt&&(I=Xu()):(dt=h,gs="value"in dt?dt.value:dt.textContent,Vt=!0)),k=eo(a,O),0<k.length&&(O=new hi(O,e,null,n,h),m.push({event:O,listeners:k}),I?O.data=I:(I=ta(n),I!==null&&(O.data=I)))),(I=Kf?Yf(e,n):$f(e,n))&&(a=eo(a,"onBeforeInput"),0<a.length&&(h=new hi("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:a}),h.data=I))}pa(m,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Vn(e,n),l!=null&&r.unshift(tr(e,l,o)),l=Vn(e,t),l!=null&&r.push(tr(e,l,o))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ci(e,t,n,r,o){for(var l=t._reactName,s=[];n!==null&&n!==r;){var i=n,u=i.alternate,a=i.stateNode;if(u!==null&&u===r)break;i.tag===5&&a!==null&&(i=a,o?(u=Vn(n,l),u!=null&&s.unshift(tr(n,u,i))):o||(u=Vn(n,l),u!=null&&s.push(tr(n,u,i)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var id=/\r\n?/g,ud=/\u0000|\uFFFD/g;function Ii(e){return(typeof e=="string"?e:""+e).replace(id,`
`).replace(ud,"")}function Cr(e,t,n){if(t=Ii(t),Ii(e)!==t&&n)throw Error(w(425))}function to(){}var Ml=null,Rl=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,ad=typeof clearTimeout=="function"?clearTimeout:void 0,Oi=typeof Promise=="function"?Promise:void 0,cd=typeof queueMicrotask=="function"?queueMicrotask:typeof Oi<"u"?function(e){return Oi.resolve(null).then(e).catch(fd)}:Al;function fd(e){setTimeout(function(){throw e})}function Xo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Zn(t)}function gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var wn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+wn,nr="__reactProps$"+wn,nt="__reactContainer$"+wn,Fl="__reactEvents$"+wn,dd="__reactListeners$"+wn,pd="__reactHandles$"+wn;function Rt(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nt]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pi(e);e!==null;){if(n=e[Ke])return n;e=Pi(e)}return t}e=n,n=e.parentNode}return null}function dr(e){return e=e[Ke]||e[nt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function xo(e){return e[nr]||null}var Hl=[],Xt=-1;function kt(e){return{current:e}}function B(e){0>Xt||(e.current=Hl[Xt],Hl[Xt]=null,Xt--)}function D(e,t){Xt++,Hl[Xt]=e.current,e.current=t}var xt={},ie=kt(xt),ye=kt(!1),Dt=xt;function pn(e,t){var n=e.type.contextTypes;if(!n)return xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ee(e){return e=e.childContextTypes,e!=null}function no(){B(ye),B(ie)}function Ni(e,t,n){if(ie.current!==xt)throw Error(w(168));D(ie,t),D(ye,n)}function ma(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,qc(e)||"Unknown",o));return Y({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,Dt=ie.current,D(ie,e),D(ye,ye.current),!0}function Mi(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=ma(e,t,Dt),r.__reactInternalMemoizedMergedChildContext=e,B(ye),B(ie),D(ie,e)):B(ye),D(ye,n)}var qe=null,_o=!1,Jo=!1;function va(e){qe===null?qe=[e]:qe.push(e)}function hd(e){_o=!0,va(e)}function Ct(){if(!Jo&&qe!==null){Jo=!0;var e=0,t=F;try{var n=qe;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}qe=null,_o=!1}catch(o){throw qe!==null&&(qe=qe.slice(e+1)),zu(ps,Ct),o}finally{F=t,Jo=!1}}return null}var Jt=[],en=0,oo=null,lo=0,Oe=[],Pe=0,jt=null,Xe=1,Je="";function Nt(e,t){Jt[en++]=lo,Jt[en++]=oo,oo=e,lo=t}function ga(e,t,n){Oe[Pe++]=Xe,Oe[Pe++]=Je,Oe[Pe++]=jt,jt=e;var r=Xe;e=Je;var o=32-je(r)-1;r&=~(1<<o),n+=1;var l=32-je(t)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Xe=1<<32-je(t)+o|n<<o|r,Je=l+e}else Xe=1<<l|n<<o|r,Je=e}function Ts(e){e.return!==null&&(Nt(e,1),ga(e,1,0))}function xs(e){for(;e===oo;)oo=Jt[--en],Jt[en]=null,lo=Jt[--en],Jt[en]=null;for(;e===jt;)jt=Oe[--Pe],Oe[Pe]=null,Je=Oe[--Pe],Oe[Pe]=null,Xe=Oe[--Pe],Oe[Pe]=null}var _e=null,xe=null,z=!1,De=null;function ya(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ri(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,_e=e,xe=gt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,_e=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jt!==null?{id:Xe,overflow:Je}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,_e=e,xe=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(z){var t=xe;if(t){var n=t;if(!Ri(e,t)){if(Dl(e))throw Error(w(418));t=gt(n.nextSibling);var r=_e;t&&Ri(e,t)?ya(r,n):(e.flags=e.flags&-4097|2,z=!1,_e=e)}}else{if(Dl(e))throw Error(w(418));e.flags=e.flags&-4097|2,z=!1,_e=e}}}function Li(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;_e=e}function Ir(e){if(e!==_e)return!1;if(!z)return Li(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=xe)){if(Dl(e))throw Ea(),Error(w(418));for(;t;)ya(e,t),t=gt(t.nextSibling)}if(Li(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=gt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=_e?gt(e.stateNode.nextSibling):null;return!0}function Ea(){for(var e=xe;e;)e=gt(e.nextSibling)}function hn(){xe=_e=null,z=!1}function _s(e){De===null?De=[e]:De.push(e)}var md=lt.ReactCurrentBatchConfig;function Pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var i=o.refs;s===null?delete i[l]:i[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Or(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ai(e){var t=e._init;return t(e._payload)}function Sa(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=wt(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,c,d,S){return c===null||c.tag!==6?(c=sl(d,f.mode,S),c.return=f,c):(c=o(c,d),c.return=f,c)}function u(f,c,d,S){var T=d.type;return T===$t?h(f,c,d.props.children,S,d.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ut&&Ai(T)===c.type)?(S=o(c,d.props),S.ref=Pn(f,c,d),S.return=f,S):(S=Kr(d.type,d.key,d.props,null,f.mode,S),S.ref=Pn(f,c,d),S.return=f,S)}function a(f,c,d,S){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=il(d,f.mode,S),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function h(f,c,d,S,T){return c===null||c.tag!==7?(c=Ht(d,f.mode,S,T),c.return=f,c):(c=o(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return d=Kr(c.type,c.key,c.props,null,f.mode,d),d.ref=Pn(f,null,c),d.return=f,d;case Yt:return c=il(c,f.mode,d),c.return=f,c;case ut:var S=c._init;return m(f,S(c._payload),d)}if(Ln(c)||_n(c))return c=Ht(c,f.mode,d,null),c.return=f,c;Or(f,c)}return null}function p(f,c,d,S){var T=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return T!==null?null:i(f,c,""+d,S);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:return d.key===T?u(f,c,d,S):null;case Yt:return d.key===T?a(f,c,d,S):null;case ut:return T=d._init,p(f,c,T(d._payload),S)}if(Ln(d)||_n(d))return T!==null?null:h(f,c,d,S,null);Or(f,d)}return null}function v(f,c,d,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(d)||null,i(c,f,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case gr:return f=f.get(S.key===null?d:S.key)||null,u(c,f,S,T);case Yt:return f=f.get(S.key===null?d:S.key)||null,a(c,f,S,T);case ut:var k=S._init;return v(f,c,d,k(S._payload),T)}if(Ln(S)||_n(S))return f=f.get(d)||null,h(c,f,S,T,null);Or(c,S)}return null}function E(f,c,d,S){for(var T=null,k=null,I=c,O=c=0,U=null;I!==null&&O<d.length;O++){I.index>O?(U=I,I=null):U=I.sibling;var C=p(f,I,d[O],S);if(C===null){I===null&&(I=U);break}e&&I&&C.alternate===null&&t(f,I),c=l(C,c,O),k===null?T=C:k.sibling=C,k=C,I=U}if(O===d.length)return n(f,I),z&&Nt(f,O),T;if(I===null){for(;O<d.length;O++)I=m(f,d[O],S),I!==null&&(c=l(I,c,O),k===null?T=I:k.sibling=I,k=I);return z&&Nt(f,O),T}for(I=r(f,I);O<d.length;O++)U=v(I,f,O,d[O],S),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?O:U.key),c=l(U,c,O),k===null?T=U:k.sibling=U,k=U);return e&&I.forEach(function(L){return t(f,L)}),z&&Nt(f,O),T}function y(f,c,d,S){var T=_n(d);if(typeof T!="function")throw Error(w(150));if(d=T.call(d),d==null)throw Error(w(151));for(var k=T=null,I=c,O=c=0,U=null,C=d.next();I!==null&&!C.done;O++,C=d.next()){I.index>O?(U=I,I=null):U=I.sibling;var L=p(f,I,C.value,S);if(L===null){I===null&&(I=U);break}e&&I&&L.alternate===null&&t(f,I),c=l(L,c,O),k===null?T=L:k.sibling=L,k=L,I=U}if(C.done)return n(f,I),z&&Nt(f,O),T;if(I===null){for(;!C.done;O++,C=d.next())C=m(f,C.value,S),C!==null&&(c=l(C,c,O),k===null?T=C:k.sibling=C,k=C);return z&&Nt(f,O),T}for(I=r(f,I);!C.done;O++,C=d.next())C=v(I,f,O,C.value,S),C!==null&&(e&&C.alternate!==null&&I.delete(C.key===null?O:C.key),c=l(C,c,O),k===null?T=C:k.sibling=C,k=C);return e&&I.forEach(function(de){return t(f,de)}),z&&Nt(f,O),T}function P(f,c,d,S){if(typeof d=="object"&&d!==null&&d.type===$t&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:e:{for(var T=d.key,k=c;k!==null;){if(k.key===T){if(T=d.type,T===$t){if(k.tag===7){n(f,k.sibling),c=o(k,d.props.children),c.return=f,f=c;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ut&&Ai(T)===k.type){n(f,k.sibling),c=o(k,d.props),c.ref=Pn(f,k,d),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}d.type===$t?(c=Ht(d.props.children,f.mode,S,d.key),c.return=f,f=c):(S=Kr(d.type,d.key,d.props,null,f.mode,S),S.ref=Pn(f,c,d),S.return=f,f=S)}return s(f);case Yt:e:{for(k=d.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=il(d,f.mode,S),c.return=f,f=c}return s(f);case ut:return k=d._init,P(f,c,k(d._payload),S)}if(Ln(d))return E(f,c,d,S);if(_n(d))return y(f,c,d,S);Or(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=sl(d,f.mode,S),c.return=f,f=c),s(f)):n(f,c)}return P}var mn=Sa(!0),wa=Sa(!1),so=kt(null),io=null,tn=null,ks=null;function Cs(){ks=tn=io=null}function Is(e){var t=so.current;B(so),e._currentValue=t}function Gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cn(e,t){io=e,ks=tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ge=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},tn===null){if(io===null)throw Error(w(308));tn=e,io.dependencies={lanes:0,firstContext:e}}else tn=tn.next=e;return t}var Lt=null;function Os(e){Lt===null?Lt=[e]:Lt.push(e)}function Ta(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Os(t)):(n.next=o.next,o.next=n),t.interleaved=n,rt(e,r)}function rt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var at=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function yt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,rt(e,n)}return o=r.interleaved,o===null?(t.next=t,Os(r)):(t.next=o.next,o.next=t),r.interleaved=t,rt(e,n)}function Gr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}function Fi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var o=e.updateQueue;at=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var u=i,a=u.next;u.next=null,s===null?l=a:s.next=a,s=u;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==s&&(i===null?h.firstBaseUpdate=a:i.next=a,h.lastBaseUpdate=u))}if(l!==null){var m=o.baseState;s=0,h=a=u=null,i=l;do{var p=i.lane,v=i.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var E=e,y=i;switch(p=t,v=n,y.tag){case 1:if(E=y.payload,typeof E=="function"){m=E.call(v,m,p);break e}m=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=y.payload,p=typeof E=="function"?E.call(v,m,p):E,p==null)break e;m=Y({},m,p);break e;case 2:at=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,p=o.effects,p===null?o.effects=[i]:p.push(i))}else v={eventTime:v,lane:p,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(a=h=v,u=m):h=h.next=v,s|=p;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;p=i,i=p.next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}while(!0);if(h===null&&(u=m),o.baseState=u,o.firstBaseUpdate=a,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Bt|=s,e.lanes=s,e.memoizedState=m}}function Hi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var pr={},Ve=kt(pr),rr=kt(pr),or=kt(pr);function At(e){if(e===pr)throw Error(w(174));return e}function Ns(e,t){switch(D(or,t),D(rr,e),D(Ve,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:El(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=El(t,e)}B(Ve),D(Ve,t)}function vn(){B(Ve),B(rr),B(or)}function _a(e){At(or.current);var t=At(Ve.current),n=El(t,e.type);t!==n&&(D(rr,e),D(Ve,n))}function Ms(e){rr.current===e&&(B(Ve),B(rr))}var W=kt(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Rs(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Br=lt.ReactCurrentDispatcher,tl=lt.ReactCurrentBatchConfig,Gt=0,K=null,Z=null,J=null,co=!1,zn=!1,lr=0,vd=0;function oe(){throw Error(w(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Be(e[n],t[n]))return!1;return!0}function As(e,t,n,r,o,l){if(Gt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?Sd:wd,e=n(r,o),zn){l=0;do{if(zn=!1,lr=0,25<=l)throw Error(w(301));l+=1,J=Z=null,t.updateQueue=null,Br.current=Td,e=n(r,o)}while(zn)}if(Br.current=fo,t=Z!==null&&Z.next!==null,Gt=0,J=Z=K=null,co=!1,t)throw Error(w(300));return e}function Fs(){var e=lr!==0;return lr=0,e}function be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?K.memoizedState=J=e:J=J.next=e,J}function Le(){if(Z===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=J===null?K.memoizedState:J.next;if(t!==null)J=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},J===null?K.memoizedState=J=e:J=J.next=e}return J}function sr(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=Le(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var i=s=null,u=null,a=l;do{var h=a.lane;if((Gt&h)===h)u!==null&&(u=u.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var m={lane:h,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};u===null?(i=u=m,s=r):u=u.next=m,K.lanes|=h,Bt|=h}a=a.next}while(a!==null&&a!==l);u===null?s=r:u.next=i,Be(r,t.memoizedState)||(ge=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,K.lanes|=l,Bt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=Le(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);Be(l,t.memoizedState)||(ge=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ka(){}function Ca(e,t){var n=K,r=Le(),o=t(),l=!Be(r.memoizedState,o);if(l&&(r.memoizedState=o,ge=!0),r=r.queue,Hs(Pa.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,ir(9,Oa.bind(null,n,r,o,t),void 0,null),ee===null)throw Error(w(349));Gt&30||Ia(n,t,o)}return o}function Ia(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Oa(e,t,n,r){t.value=n,t.getSnapshot=r,Na(t)&&Ma(e)}function Pa(e,t,n){return n(function(){Na(t)&&Ma(e)})}function Na(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Be(e,n)}catch{return!0}}function Ma(e){var t=rt(e,1);t!==null&&Ge(t,e,1,-1)}function Di(e){var t=be();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Ed.bind(null,K,e),[t.memoizedState,e]}function ir(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ra(){return Le().memoizedState}function zr(e,t,n,r){var o=be();K.flags|=e,o.memoizedState=ir(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var o=Le();r=r===void 0?null:r;var l=void 0;if(Z!==null){var s=Z.memoizedState;if(l=s.destroy,r!==null&&Ls(r,s.deps)){o.memoizedState=ir(t,n,l,r);return}}K.flags|=e,o.memoizedState=ir(1|t,n,l,r)}function ji(e,t){return zr(8390656,8,e,t)}function Hs(e,t){return ko(2048,8,e,t)}function La(e,t){return ko(4,2,e,t)}function Aa(e,t){return ko(4,4,e,t)}function Fa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ha(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,Fa.bind(null,t,e),n)}function Ds(){}function Da(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ja(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ga(e,t,n){return Gt&21?(Be(n,t)||(n=Wu(),K.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ge=!0),e.memoizedState=n)}function gd(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{F=n,tl.transition=r}}function Ba(){return Le().memoizedState}function yd(e,t,n){var r=St(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},za(e))Ua(t,n);else if(n=Ta(e,t,n,r),n!==null){var o=ae();Ge(n,e,r,o),ba(n,t,r)}}function Ed(e,t,n){var r=St(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(za(e))Ua(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,i=l(s,n);if(o.hasEagerState=!0,o.eagerState=i,Be(i,s)){var u=t.interleaved;u===null?(o.next=o,Os(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Ta(e,t,o,r),n!==null&&(o=ae(),Ge(n,e,r,o),ba(n,t,r))}}function za(e){var t=e.alternate;return e===K||t!==null&&t===K}function Ua(e,t){zn=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ba(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}var fo={readContext:Re,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Sd={readContext:Re,useCallback:function(e,t){return be().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:ji,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,Fa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=be();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=be();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yd.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=be();return e={current:e},t.memoizedState=e},useState:Di,useDebugValue:Ds,useDeferredValue:function(e){return be().memoizedState=e},useTransition:function(){var e=Di(!1),t=e[0];return e=gd.bind(null,e[1]),be().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=be();if(z){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));Gt&30||Ia(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,ji(Pa.bind(null,r,l,e),[e]),r.flags|=2048,ir(9,Oa.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=be(),t=ee.identifierPrefix;if(z){var n=Je,r=Xe;n=(r&~(1<<32-je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wd={readContext:Re,useCallback:Da,useContext:Re,useEffect:Hs,useImperativeHandle:Ha,useInsertionEffect:La,useLayoutEffect:Aa,useMemo:ja,useReducer:nl,useRef:Ra,useState:function(){return nl(sr)},useDebugValue:Ds,useDeferredValue:function(e){var t=Le();return Ga(t,Z.memoizedState,e)},useTransition:function(){var e=nl(sr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:ka,useSyncExternalStore:Ca,useId:Ba,unstable_isNewReconciler:!1},Td={readContext:Re,useCallback:Da,useContext:Re,useEffect:Hs,useImperativeHandle:Ha,useInsertionEffect:La,useLayoutEffect:Aa,useMemo:ja,useReducer:rl,useRef:Ra,useState:function(){return rl(sr)},useDebugValue:Ds,useDeferredValue:function(e){var t=Le();return Z===null?t.memoizedState=e:Ga(t,Z.memoizedState,e)},useTransition:function(){var e=rl(sr)[0],t=Le().memoizedState;return[e,t]},useMutableSource:ka,useSyncExternalStore:Ca,useId:Ba,unstable_isNewReconciler:!1};function Fe(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),o=St(e),l=et(r,o);l.payload=t,n!=null&&(l.callback=n),t=yt(e,l,o),t!==null&&(Ge(t,e,o,r),Gr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),o=St(e),l=et(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=yt(e,l,o),t!==null&&(Ge(t,e,o,r),Gr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=St(e),o=et(n,r);o.tag=2,t!=null&&(o.callback=t),t=yt(e,o,r),t!==null&&(Ge(t,e,r,n),Gr(t,e,r))}};function Gi(e,t,n,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(o,l):!0}function Wa(e,t,n){var r=!1,o=xt,l=t.contextType;return typeof l=="object"&&l!==null?l=Re(l):(o=Ee(t)?Dt:ie.current,r=t.contextTypes,l=(r=r!=null)?pn(e,o):xt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Bi(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function zl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ps(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Re(l):(l=Ee(t)?Dt:ie.current,o.context=pn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Bl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Co.enqueueReplaceState(o,o.state,null),uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,t){try{var n="",r=t;do n+=Qc(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xd=typeof WeakMap=="function"?WeakMap:Map;function Ka(e,t,n){n=et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ho||(ho=!0,Xl=r),Ul(e,t)},n}function Ya(e,t,n){n=et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ul(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ul(e,t),typeof r!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function zi(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Dd.bind(null,e,t,n),t.then(e,e))}function Ui(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bi(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=et(-1,1),t.tag=2,yt(n,t,1))),n.lanes|=1),e)}var _d=lt.ReactCurrentOwner,ge=!1;function ue(e,t,n,r){t.child=e===null?wa(t,null,n,r):mn(t,e.child,n,r)}function Wi(e,t,n,r,o){n=n.render;var l=t.ref;return cn(t,o),r=As(e,t,n,r,l,o),n=Fs(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(z&&n&&Ts(t),t.flags|=1,ue(e,t,r,o),t.child)}function Ki(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ks(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$a(e,t,l,r,o)):(e=Kr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(s,r)&&e.ref===t.ref)return ot(e,t,o)}return t.flags|=1,e=wt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Jn(l,r)&&e.ref===t.ref)if(ge=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(ge=!0);else return t.lanes=e.lanes,ot(e,t,o)}return bl(e,t,n,r,o)}function Va(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(rn,Te),Te|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(rn,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,D(rn,Te),Te|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,D(rn,Te),Te|=r;return ue(e,t,o,n),t.child}function Qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bl(e,t,n,r,o){var l=Ee(n)?Dt:ie.current;return l=pn(t,l),cn(t,o),n=As(e,t,n,r,l,o),r=Fs(),e!==null&&!ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ot(e,t,o)):(z&&r&&Ts(t),t.flags|=1,ue(e,t,n,o),t.child)}function Yi(e,t,n,r,o){if(Ee(n)){var l=!0;ro(t)}else l=!1;if(cn(t,o),t.stateNode===null)Ur(e,t),Wa(t,n,r),zl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var u=s.context,a=n.contextType;typeof a=="object"&&a!==null?a=Re(a):(a=Ee(n)?Dt:ie.current,a=pn(t,a));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==r||u!==a)&&Bi(t,s,r,a),at=!1;var p=t.memoizedState;s.state=p,uo(t,r,s,o),u=t.memoizedState,i!==r||p!==u||ye.current||at?(typeof h=="function"&&(Bl(t,n,h,r),u=t.memoizedState),(i=at||Gi(t,n,i,r,p,u,a))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=a,r=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,xa(e,t),i=t.memoizedProps,a=t.type===t.elementType?i:Fe(t.type,i),s.props=a,m=t.pendingProps,p=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=Ee(n)?Dt:ie.current,u=pn(t,u));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==m||p!==u)&&Bi(t,s,r,u),at=!1,p=t.memoizedState,s.state=p,uo(t,r,s,o);var E=t.memoizedState;i!==m||p!==E||ye.current||at?(typeof v=="function"&&(Bl(t,n,v,r),E=t.memoizedState),(a=at||Gi(t,n,a,r,p,E,u)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,E,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,E,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=E),s.props=r,s.state=E,s.context=u,r=a):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,l,o)}function Wl(e,t,n,r,o,l){Qa(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Mi(t,n,!1),ot(e,t,l);r=t.stateNode,_d.current=t;var i=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=mn(t,e.child,null,l),t.child=mn(t,null,i,l)):ue(e,t,i,l),t.memoizedState=r.state,o&&Mi(t,n,!0),t.child}function qa(e){var t=e.stateNode;t.pendingContext?Ni(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ni(e,t.context,!1),Ns(e,t.containerInfo)}function $i(e,t,n,r,o){return hn(),_s(o),t.flags|=256,ue(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Za(e,t,n){var r=t.pendingProps,o=W.current,l=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(W,o&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Po(s,r,0,null),e=Ht(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Yl(n),t.memoizedState=Kl,e):js(t,s));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return kd(e,t,s,r,i,o,n);if(l){l=r.fallback,s=t.mode,o=e.child,i=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?l=wt(i,l):(l=Ht(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Yl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return l=e.child,e=l.sibling,r=wt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function js(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&_s(r),mn(t,e.child,null,n),e=js(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kd(e,t,n,r,o,l,s){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(w(422))),Pr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),l=Ht(l,o,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&mn(t,e.child,null,s),t.child.memoizedState=Yl(s),t.memoizedState=Kl,l);if(!(t.mode&1))return Pr(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(w(419)),r=ol(l,r,void 0),Pr(e,t,s,r)}if(i=(s&e.childLanes)!==0,ge||i){if(r=ee,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,rt(e,o),Ge(r,e,o,-1))}return Ws(),r=ol(Error(w(421))),Pr(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=jd.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,xe=gt(o.nextSibling),_e=t,z=!0,De=null,e!==null&&(Oe[Pe++]=Xe,Oe[Pe++]=Je,Oe[Pe++]=jt,Xe=e.id,Je=e.overflow,jt=t),t=js(t,r.children),t.flags|=4096,t)}function Vi(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gl(e.return,t,n)}function ll(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Xa(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vi(e,n,t);else if(e.tag===19)Vi(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(W,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ll(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ao(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ll(t,!0,n,null,l);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ot(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=wt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cd(e,t,n){switch(t.tag){case 3:qa(t),hn();break;case 5:_a(t);break;case 1:Ee(t.type)&&ro(t);break;case 4:Ns(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;D(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Za(e,t,n):(D(W,W.current&1),e=ot(e,t,n),e!==null?e.sibling:null);D(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xa(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Va(e,t,n)}return ot(e,t,n)}var Ja,$l,ec,tc;Ja=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$l=function(){};ec=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,At(Ve.current);var l=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=yl(e,o),r=yl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}Sl(n,r);var s;n=null;for(a in o)if(!r.hasOwnProperty(a)&&o.hasOwnProperty(a)&&o[a]!=null)if(a==="style"){var i=o[a];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Yn.hasOwnProperty(a)?l||(l=[]):(l=l||[]).push(a,null));for(a in r){var u=r[a];if(i=o!=null?o[a]:void 0,r.hasOwnProperty(a)&&u!==i&&(u!=null||i!=null))if(a==="style")if(i){for(s in i)!i.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&i[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(l||(l=[]),l.push(a,n)),n=u;else a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,i=i?i.__html:void 0,u!=null&&i!==u&&(l=l||[]).push(a,u)):a==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(a,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(a)?(u!=null&&a==="onScroll"&&G("scroll",e),l||i===u||(l=[])):(l=l||[]).push(a,u))}n&&(l=l||[]).push("style",n);var a=l;(t.updateQueue=a)&&(t.flags|=4)}};tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nn(e,t){if(!z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Id(e,t,n){var r=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return Ee(t.type)&&no(),le(t),null;case 3:return r=t.stateNode,vn(),B(ye),B(ie),Rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ir(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(ts(De),De=null))),$l(e,t),le(t),null;case 5:Ms(t);var o=At(or.current);if(n=t.type,e!==null&&t.stateNode!=null)ec(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return le(t),null}if(e=At(Ve.current),Ir(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ke]=t,r[nr]=l,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<Fn.length;o++)G(Fn[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":ri(r,l),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},G("invalid",r);break;case"textarea":li(r,l),G("invalid",r)}Sl(n,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var i=l[s];s==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,i,e),o=["children",""+i]):Yn.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":yr(r),oi(r,l,!0);break;case"textarea":yr(r),si(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=to)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ke]=t,e[nr]=r,Ja(e,t,!1,!1),t.stateNode=e;e:{switch(s=wl(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fn.length;o++)G(Fn[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":ri(e,r),o=ml(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),G("invalid",e);break;case"textarea":li(e,r),o=yl(e,r),G("invalid",e);break;default:o=r}Sl(n,o),i=o;for(l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="style"?Ru(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Nu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$n(e,u):typeof u=="number"&&$n(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&G("scroll",e):u!=null&&us(e,l,u,s))}switch(n){case"input":yr(e),oi(e,r,!1);break;case"textarea":yr(e),si(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ln(e,!!r.multiple,l,!1):r.defaultValue!=null&&ln(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=At(or.current),At(Ve.current),Ir(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(l=r.nodeValue!==n)&&(e=_e,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return le(t),null;case 13:if(B(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&xe!==null&&t.mode&1&&!(t.flags&128))Ea(),hn(),t.flags|=98560,l=!1;else if(l=Ir(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ke]=t}else hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else De!==null&&(ts(De),De=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?X===0&&(X=3):Ws())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return vn(),$l(e,t),e===null&&er(t.stateNode.containerInfo),le(t),null;case 10:return Is(t.type._context),le(t),null;case 17:return Ee(t.type)&&no(),le(t),null;case 19:if(B(W),l=t.memoizedState,l===null)return le(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Nn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ao(e),s!==null){for(t.flags|=128,Nn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&V()>yn&&(t.flags|=128,r=!0,Nn(l,!1),t.lanes=4194304)}else{if(!r)if(e=ao(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!z)return le(t),null}else 2*V()-l.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,Nn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=V(),t.sibling=null,n=W.current,D(W,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Te&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Od(e,t){switch(xs(t),t.tag){case 1:return Ee(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return vn(),B(ye),B(ie),Rs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ms(t),null;case 13:if(B(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(W),null;case 4:return vn(),null;case 10:return Is(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var Nr=!1,se=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,_=null;function nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){$(e,t,r)}}var Qi=!1;function Nd(e,t){if(Ml=Xr,e=sa(),ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,i=-1,u=-1,a=0,h=0,m=e,p=null;t:for(;;){for(var v;m!==n||o!==0&&m.nodeType!==3||(i=s+o),m!==l||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(v=m.firstChild)!==null;)p=m,m=v;for(;;){if(m===e)break t;if(p===n&&++a===o&&(i=s),p===l&&++h===r&&(u=s),(v=m.nextSibling)!==null)break;m=p,p=m.parentNode}m=v}n=i===-1||u===-1?null:{start:i,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},Xr=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var E=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var y=E.memoizedProps,P=E.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Fe(t.type,y),P);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(S){$(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return E=Qi,Qi=!1,E}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Vl(t,n,l)}o=o.next}while(o!==r)}}function Io(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nc(e){var t=e.alternate;t!==null&&(e.alternate=null,nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[nr],delete t[Fl],delete t[dd],delete t[pd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rc(e){return e.tag===5||e.tag===3||e.tag===4}function qi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}var te=null,He=!1;function st(e,t,n){for(n=n.child;n!==null;)oc(e,t,n),n=n.sibling}function oc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Eo,n)}catch{}switch(n.tag){case 5:se||nn(n,t);case 6:var r=te,o=He;te=null,st(e,t,n),te=r,He=o,te!==null&&(He?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(He?(e=te,n=n.stateNode,e.nodeType===8?Xo(e.parentNode,n):e.nodeType===1&&Xo(e,n),Zn(e)):Xo(te,n.stateNode));break;case 4:r=te,o=He,te=n.stateNode.containerInfo,He=!0,st(e,t,n),te=r,He=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Vl(n,t,s),o=o.next}while(o!==r)}st(e,t,n);break;case 1:if(!se&&(nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){$(n,t,i)}st(e,t,n);break;case 21:st(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,st(e,t,n),se=r):st(e,t,n);break;default:st(e,t,n)}}function Zi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pd),t.forEach(function(r){var o=Gd.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:te=i.stateNode,He=!1;break e;case 3:te=i.stateNode.containerInfo,He=!0;break e;case 4:te=i.stateNode.containerInfo,He=!0;break e}i=i.return}if(te===null)throw Error(w(160));oc(l,s,o),te=null,He=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(a){$(o,t,a)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lc(t,e),t=t.sibling}function lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Ue(e),r&4){try{Un(3,e,e.return),Io(3,e)}catch(y){$(e,e.return,y)}try{Un(5,e,e.return)}catch(y){$(e,e.return,y)}}break;case 1:Ae(t,e),Ue(e),r&512&&n!==null&&nn(n,n.return);break;case 5:if(Ae(t,e),Ue(e),r&512&&n!==null&&nn(n,n.return),e.flags&32){var o=e.stateNode;try{$n(o,"")}catch(y){$(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,i=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Iu(o,l),wl(i,s);var a=wl(i,l);for(s=0;s<u.length;s+=2){var h=u[s],m=u[s+1];h==="style"?Ru(o,m):h==="dangerouslySetInnerHTML"?Nu(o,m):h==="children"?$n(o,m):us(o,h,m,a)}switch(i){case"input":vl(o,l);break;case"textarea":Ou(o,l);break;case"select":var p=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var v=l.value;v!=null?ln(o,!!l.multiple,v,!1):p!==!!l.multiple&&(l.defaultValue!=null?ln(o,!!l.multiple,l.defaultValue,!0):ln(o,!!l.multiple,l.multiple?[]:"",!1))}o[nr]=l}catch(y){$(e,e.return,y)}}break;case 6:if(Ae(t,e),Ue(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(y){$(e,e.return,y)}}break;case 3:if(Ae(t,e),Ue(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(y){$(e,e.return,y)}break;case 4:Ae(t,e),Ue(e);break;case 13:Ae(t,e),Ue(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(zs=V())),r&4&&Zi(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(se=(a=se)||h,Ae(t,e),se=a):Ae(t,e),Ue(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!h&&e.mode&1)for(_=e,h=e.child;h!==null;){for(m=_=h;_!==null;){switch(p=_,v=p.child,p.tag){case 0:case 11:case 14:case 15:Un(4,p,p.return);break;case 1:nn(p,p.return);var E=p.stateNode;if(typeof E.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,E.props=t.memoizedProps,E.state=t.memoizedState,E.componentWillUnmount()}catch(y){$(r,n,y)}}break;case 5:nn(p,p.return);break;case 22:if(p.memoizedState!==null){Ji(m);continue}}v!==null?(v.return=p,_=v):Ji(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,a?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,i.style.display=Mu("display",s))}catch(y){$(e,e.return,y)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(y){$(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ae(t,e),Ue(e),r&4&&Zi(e);break;case 21:break;default:Ae(t,e),Ue(e)}}function Ue(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($n(o,""),r.flags&=-33);var l=qi(e);Zl(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,i=qi(e);ql(e,i,s);break;default:throw Error(w(161))}}catch(u){$(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Md(e,t,n){_=e,sc(e)}function sc(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var o=_,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Nr;if(!s){var i=o.alternate,u=i!==null&&i.memoizedState!==null||se;i=Nr;var a=se;if(Nr=s,(se=u)&&!a)for(_=o;_!==null;)s=_,u=s.child,s.tag===22&&s.memoizedState!==null?eu(o):u!==null?(u.return=s,_=u):eu(o);for(;l!==null;)_=l,sc(l),l=l.sibling;_=o,Nr=i,se=a}Xi(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,_=l):Xi(e)}}function Xi(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Io(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Fe(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Hi(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hi(t,s,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var a=t.alternate;if(a!==null){var h=a.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&Zn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}se||t.flags&512&&Ql(t)}catch(p){$(t,t.return,p)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Ji(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function eu(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Io(4,t)}catch(u){$(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){$(t,o,u)}}var l=t.return;try{Ql(t)}catch(u){$(t,l,u)}break;case 5:var s=t.return;try{Ql(t)}catch(u){$(t,s,u)}}}catch(u){$(t,t.return,u)}if(t===e){_=null;break}var i=t.sibling;if(i!==null){i.return=t.return,_=i;break}_=t.return}}var Rd=Math.ceil,po=lt.ReactCurrentDispatcher,Gs=lt.ReactCurrentOwner,Me=lt.ReactCurrentBatchConfig,A=0,ee=null,Q=null,ne=0,Te=0,rn=kt(0),X=0,ur=null,Bt=0,Oo=0,Bs=0,bn=null,me=null,zs=0,yn=1/0,Qe=null,ho=!1,Xl=null,Et=null,Mr=!1,pt=null,mo=0,Wn=0,Jl=null,br=-1,Wr=0;function ae(){return A&6?V():br!==-1?br:br=V()}function St(e){return e.mode&1?A&2&&ne!==0?ne&-ne:md.transition!==null?(Wr===0&&(Wr=Wu()),Wr):(e=F,e!==0||(e=window.event,e=e===void 0?16:Zu(e.type)),e):1}function Ge(e,t,n,r){if(50<Wn)throw Wn=0,Jl=null,Error(w(185));cr(e,n,r),(!(A&2)||e!==ee)&&(e===ee&&(!(A&2)&&(Oo|=n),X===4&&ft(e,ne)),Se(e,r),n===1&&A===0&&!(t.mode&1)&&(yn=V()+500,_o&&Ct()))}function Se(e,t){var n=e.callbackNode;mf(e,t);var r=Zr(e,e===ee?ne:0);if(r===0)n!==null&&ai(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ai(n),t===1)e.tag===0?hd(tu.bind(null,e)):va(tu.bind(null,e)),cd(function(){!(A&6)&&Ct()}),n=null;else{switch(Ku(r)){case 1:n=ps;break;case 4:n=Uu;break;case 16:n=qr;break;case 536870912:n=bu;break;default:n=qr}n=hc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(br=-1,Wr=0,A&6)throw Error(w(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=Zr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var o=A;A|=2;var l=ac();(ee!==e||ne!==t)&&(Qe=null,yn=V()+500,Ft(e,t));do try{Fd();break}catch(i){uc(e,i)}while(!0);Cs(),po.current=l,A=o,Q!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(o=Cl(e),o!==0&&(r=o,t=es(e,o))),t===1)throw n=ur,Ft(e,0),ft(e,r),Se(e,V()),n;if(t===6)ft(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ld(o)&&(t=vo(e,r),t===2&&(l=Cl(e),l!==0&&(r=l,t=es(e,l))),t===1))throw n=ur,Ft(e,0),ft(e,r),Se(e,V()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Mt(e,me,Qe);break;case 3:if(ft(e,r),(r&130023424)===r&&(t=zs+500-V(),10<t)){if(Zr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Al(Mt.bind(null,e,me,Qe),t);break}Mt(e,me,Qe);break;case 4:if(ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-je(r);l=1<<s,s=t[s],s>o&&(o=s),r&=~l}if(r=o,r=V()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rd(r/1960))-r,10<r){e.timeoutHandle=Al(Mt.bind(null,e,me,Qe),r);break}Mt(e,me,Qe);break;case 5:Mt(e,me,Qe);break;default:throw Error(w(329))}}}return Se(e,V()),e.callbackNode===n?ic.bind(null,e):null}function es(e,t){var n=bn;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=vo(e,t),e!==2&&(t=me,me=n,t!==null&&ts(t)),e}function ts(e){me===null?me=e:me.push.apply(me,e)}function Ld(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Be(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ft(e,t){for(t&=~Bs,t&=~Oo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-je(t),r=1<<n;e[n]=-1,t&=~r}}function tu(e){if(A&6)throw Error(w(327));fn();var t=Zr(e,0);if(!(t&1))return Se(e,V()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=es(e,r))}if(n===1)throw n=ur,Ft(e,0),ft(e,t),Se(e,V()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,me,Qe),Se(e,V()),null}function Us(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(yn=V()+500,_o&&Ct())}}function zt(e){pt!==null&&pt.tag===0&&!(A&6)&&fn();var t=A;A|=1;var n=Me.transition,r=F;try{if(Me.transition=null,F=1,e)return e()}finally{F=r,Me.transition=n,A=t,!(A&6)&&Ct()}}function bs(){Te=rn.current,B(rn)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ad(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:vn(),B(ye),B(ie),Rs();break;case 5:Ms(r);break;case 4:vn();break;case 13:B(W);break;case 19:B(W);break;case 10:Is(r.type._context);break;case 22:case 23:bs()}n=n.return}if(ee=e,Q=e=wt(e.current,null),ne=Te=t,X=0,ur=null,Bs=Oo=Bt=0,me=bn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}n.pending=r}Lt=null}return e}function uc(e,t){do{var n=Q;try{if(Cs(),Br.current=fo,co){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}co=!1}if(Gt=0,J=Z=K=null,zn=!1,lr=0,Gs.current=null,n===null||n.return===null){X=1,ur=t,Q=null;break}e:{var l=e,s=n.return,i=n,u=t;if(t=ne,i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var a=u,h=i,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=Ui(s);if(v!==null){v.flags&=-257,bi(v,s,i,l,t),v.mode&1&&zi(l,a,t),t=v,u=a;var E=t.updateQueue;if(E===null){var y=new Set;y.add(u),t.updateQueue=y}else E.add(u);break e}else{if(!(t&1)){zi(l,a,t),Ws();break e}u=Error(w(426))}}else if(z&&i.mode&1){var P=Ui(s);if(P!==null){!(P.flags&65536)&&(P.flags|=256),bi(P,s,i,l,t),_s(gn(u,i));break e}}l=u=gn(u,i),X!==4&&(X=2),bn===null?bn=[l]:bn.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ka(l,u,t);Fi(l,f);break e;case 1:i=u;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Et===null||!Et.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var S=Ya(l,i,t);Fi(l,S);break e}}l=l.return}while(l!==null)}fc(n)}catch(T){t=T,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ac(){var e=po.current;return po.current=fo,e===null?fo:e}function Ws(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Bt&268435455)&&!(Oo&268435455)||ft(ee,ne)}function vo(e,t){var n=A;A|=2;var r=ac();(ee!==e||ne!==t)&&(Qe=null,Ft(e,t));do try{Ad();break}catch(o){uc(e,o)}while(!0);if(Cs(),A=n,po.current=r,Q!==null)throw Error(w(261));return ee=null,ne=0,X}function Ad(){for(;Q!==null;)cc(Q)}function Fd(){for(;Q!==null&&!lf();)cc(Q)}function cc(e){var t=pc(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?fc(e):Q=t,Gs.current=null}function fc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Od(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Q=null;return}}else if(n=Id(n,t,Te),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);X===0&&(X=5)}function Mt(e,t,n){var r=F,o=Me.transition;try{Me.transition=null,F=1,Hd(e,t,n,r)}finally{Me.transition=o,F=r}return null}function Hd(e,t,n,r){do fn();while(pt!==null);if(A&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(vf(e,l),e===ee&&(Q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,hc(qr,function(){return fn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Me.transition,Me.transition=null;var s=F;F=1;var i=A;A|=4,Gs.current=null,Nd(e,n),lc(n,e),nd(Rl),Xr=!!Ml,Rl=Ml=null,e.current=n,Md(n),sf(),A=i,F=s,Me.transition=l}else e.current=n;if(Mr&&(Mr=!1,pt=e,mo=o),l=e.pendingLanes,l===0&&(Et=null),cf(n.stateNode),Se(e,V()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ho)throw ho=!1,e=Xl,Xl=null,e;return mo&1&&e.tag!==0&&fn(),l=e.pendingLanes,l&1?e===Jl?Wn++:(Wn=0,Jl=e):Wn=0,Ct(),null}function fn(){if(pt!==null){var e=Ku(mo),t=Me.transition,n=F;try{if(Me.transition=null,F=16>e?16:e,pt===null)var r=!1;else{if(e=pt,pt=null,mo=0,A&6)throw Error(w(331));var o=A;for(A|=4,_=e.current;_!==null;){var l=_,s=l.child;if(_.flags&16){var i=l.deletions;if(i!==null){for(var u=0;u<i.length;u++){var a=i[u];for(_=a;_!==null;){var h=_;switch(h.tag){case 0:case 11:case 15:Un(8,h,l)}var m=h.child;if(m!==null)m.return=h,_=m;else for(;_!==null;){h=_;var p=h.sibling,v=h.return;if(nc(h),h===a){_=null;break}if(p!==null){p.return=v,_=p;break}_=v}}}var E=l.alternate;if(E!==null){var y=E.child;if(y!==null){E.child=null;do{var P=y.sibling;y.sibling=null,y=P}while(y!==null)}}_=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,_=s;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Un(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,_=f;break e}_=l.return}}var c=e.current;for(_=c;_!==null;){s=_;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,_=d;else e:for(s=c;_!==null;){if(i=_,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Io(9,i)}}catch(T){$(i,i.return,T)}if(i===s){_=null;break e}var S=i.sibling;if(S!==null){S.return=i.return,_=S;break e}_=i.return}}if(A=o,Ct(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{F=n,Me.transition=t}}return!1}function nu(e,t,n){t=gn(n,t),t=Ka(e,t,1),e=yt(e,t,1),t=ae(),e!==null&&(cr(e,1,t),Se(e,t))}function $(e,t,n){if(e.tag===3)nu(e,e,n);else for(;t!==null;){if(t.tag===3){nu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Et===null||!Et.has(r))){e=gn(n,e),e=Ya(t,e,1),t=yt(t,e,1),e=ae(),t!==null&&(cr(t,1,e),Se(t,e));break}}t=t.return}}function Dd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>V()-zs?Ft(e,0):Bs|=n),Se(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ae();e=rt(e,t),e!==null&&(cr(e,t,n),Se(e,n))}function jd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Gd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),dc(e,n)}var pc;pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ye.current)ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ge=!1,Cd(e,t,n);ge=!!(e.flags&131072)}else ge=!1,z&&t.flags&1048576&&ga(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var o=pn(t,ie.current);cn(t,n),o=As(null,t,r,e,o,n);var l=Fs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(r)?(l=!0,ro(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ps(t),o.updater=Co,t.stateNode=o,o._reactInternals=t,zl(t,r,e,n),t=Wl(null,t,r,!0,l,n)):(t.tag=0,z&&l&&Ts(t),ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=zd(r),e=Fe(r,e),o){case 0:t=bl(null,t,r,e,n);break e;case 1:t=Yi(null,t,r,e,n);break e;case 11:t=Wi(null,t,r,e,n);break e;case 14:t=Ki(null,t,r,Fe(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Fe(r,o),bl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Fe(r,o),Yi(e,t,r,o,n);case 3:e:{if(qa(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,o=l.element,xa(e,t),uo(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=gn(Error(w(423)),t),t=$i(e,t,r,n,o);break e}else if(r!==o){o=gn(Error(w(424)),t),t=$i(e,t,r,n,o);break e}else for(xe=gt(t.stateNode.containerInfo.firstChild),_e=t,z=!0,De=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hn(),r===o){t=ot(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return _a(t),e===null&&jl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,Ll(r,o)?s=null:l!==null&&Ll(r,l)&&(t.flags|=32),Qa(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&jl(t),null;case 13:return Za(e,t,n);case 4:return Ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=mn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Fe(r,o),Wi(e,t,r,o,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,s=o.value,D(so,r._currentValue),r._currentValue=s,l!==null)if(Be(l.value,s)){if(l.children===o.children&&!ye.current){t=ot(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){s=l.child;for(var u=i.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=et(-1,n&-n),u.tag=2;var a=l.updateQueue;if(a!==null){a=a.shared;var h=a.pending;h===null?u.next=u:(u.next=h.next,h.next=u),a.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Gl(l.return,n,t),i.lanes|=n;break}u=u.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(w(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),Gl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,cn(t,n),o=Re(o),r=r(o),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,o=Fe(r,t.pendingProps),o=Fe(r.type,o),Ki(e,t,r,o,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Fe(r,o),Ur(e,t),t.tag=1,Ee(r)?(e=!0,ro(t)):e=!1,cn(t,n),Wa(t,r,o),zl(t,r,o,n),Wl(null,t,r,!0,e,n);case 19:return Xa(e,t,n);case 22:return Va(e,t,n)}throw Error(w(156,t.tag))};function hc(e,t){return zu(e,t)}function Bd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Bd(e,t,n,r)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zd(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cs)return 11;if(e===fs)return 14}return 2}function wt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,o,l){var s=2;if(r=e,typeof e=="function")Ks(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $t:return Ht(n.children,o,l,t);case as:s=8,o|=8;break;case fl:return e=Ne(12,n,t,o|2),e.elementType=fl,e.lanes=l,e;case dl:return e=Ne(13,n,t,o),e.elementType=dl,e.lanes=l,e;case pl:return e=Ne(19,n,t,o),e.elementType=pl,e.lanes=l,e;case _u:return Po(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tu:s=10;break e;case xu:s=9;break e;case cs:s=11;break e;case fs:s=14;break e;case ut:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Ht(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=_u,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ud(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ys(e,t,n,r,o,l,s,i,u){return e=new Ud(e,t,n,i,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ne(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(l),e}function bd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mc(e){if(!e)return xt;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(Ee(n))return ma(e,n,t)}return t}function vc(e,t,n,r,o,l,s,i,u){return e=Ys(n,r,!0,e,o,l,s,i,u),e.context=mc(null),n=e.current,r=ae(),o=St(n),l=et(r,o),l.callback=t??null,yt(n,l,o),e.current.lanes=o,cr(e,o,r),Se(e,r),e}function No(e,t,n,r){var o=t.current,l=ae(),s=St(o);return n=mc(n),t.context===null?t.context=n:t.pendingContext=n,t=et(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=yt(o,t,s),e!==null&&(Ge(e,o,s,l),Gr(e,o,s)),s}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $s(e,t){ru(e,t),(e=e.alternate)&&ru(e,t)}function Wd(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vs(e){this._internalRoot=e}Mo.prototype.render=Vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));No(e,t,null,null)};Mo.prototype.unmount=Vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){No(null,e,null,null)}),t[nt]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ct.length&&t!==0&&t<ct[n].priority;n++);ct.splice(n,0,e),n===0&&qu(e)}};function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ou(){}function Kd(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var a=go(s);l.call(a)}}var s=vc(t,r,e,0,null,!1,!1,"",ou);return e._reactRootContainer=s,e[nt]=s.current,er(e.nodeType===8?e.parentNode:e),zt(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var a=go(u);i.call(a)}}var u=Ys(e,0,!1,null,null,!1,!1,"",ou);return e._reactRootContainer=u,e[nt]=u.current,er(e.nodeType===8?e.parentNode:e),zt(function(){No(t,u,n,r)}),u}function Lo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var i=o;o=function(){var u=go(s);i.call(u)}}No(t,s,e,o)}else s=Kd(n,t,e,o,r);return go(s)}Yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=An(t.pendingLanes);n!==0&&(hs(t,n|1),Se(t,V()),!(A&6)&&(yn=V()+500,Ct()))}break;case 13:zt(function(){var r=rt(e,1);if(r!==null){var o=ae();Ge(r,e,1,o)}}),$s(e,1)}};ms=function(e){if(e.tag===13){var t=rt(e,134217728);if(t!==null){var n=ae();Ge(t,e,134217728,n)}$s(e,134217728)}};$u=function(e){if(e.tag===13){var t=St(e),n=rt(e,t);if(n!==null){var r=ae();Ge(n,e,t,r)}$s(e,t)}};Vu=function(){return F};Qu=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};xl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=xo(r);if(!o)throw Error(w(90));Cu(r),vl(r,o)}}}break;case"textarea":Ou(e,n);break;case"select":t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}};Fu=Us;Hu=zt;var Yd={usingClientEntryPoint:!1,Events:[dr,Zt,xo,Lu,Au,Us]},Mn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$d={bundleType:Mn.bundleType,version:Mn.version,rendererPackageName:Mn.rendererPackageName,rendererConfig:Mn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gu(e),e===null?null:e.stateNode},findFiberByHostInstance:Mn.findFiberByHostInstance||Wd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{Eo=Rr.inject($d),$e=Rr}catch{}}Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;Ce.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(w(200));return bd(e,t,null,n)};Ce.createRoot=function(e,t){if(!Qs(e))throw Error(w(299));var n=!1,r="",o=gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ys(e,1,!1,null,null,n,!1,r,o),e[nt]=t.current,er(e.nodeType===8?e.parentNode:e),new Vs(t)};Ce.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Gu(t),e=e===null?null:e.stateNode,e};Ce.flushSync=function(e){return zt(e)};Ce.hydrate=function(e,t,n){if(!Ro(t))throw Error(w(200));return Lo(null,e,t,!0,n)};Ce.hydrateRoot=function(e,t,n){if(!Qs(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",s=gc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=vc(t,null,e,1,n??null,o,!1,l,s),e[nt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Mo(t)};Ce.render=function(e,t,n){if(!Ro(t))throw Error(w(200));return Lo(null,e,t,!1,n)};Ce.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(w(40));return e._reactRootContainer?(zt(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[nt]=null})}),!0):!1};Ce.unstable_batchedUpdates=Us;Ce.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Lo(e,t,n,!1,r)};Ce.version="18.3.1-next-f1338f8080-20240426";function yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yc)}catch(e){console.error(e)}}yc(),yu.exports=Ce;var Vd=yu.exports,lu=Vd;al.createRoot=lu.createRoot,al.hydrateRoot=lu.hydrateRoot;const Pt={p:100,n:320,b:330,r:500,q:900,k:2e4},Kn="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",Ze=e=>Math.floor(e/8),We=e=>e%8,ve=(e,t)=>e*8+t,Ye=(e,t)=>e>=0&&e<8&&t>=0&&t<8,on=e=>{const t=e.split(" "),n=new Array(64).fill(null);let r=0,o=0;for(const u of t[0])if(u==="/")r++,o=0;else if(/\d/.test(u))o+=parseInt(u);else{const a=u===u.toUpperCase()?"w":"b",h=u.toLowerCase();n[ve(r,o)]={color:a,type:h},o++}const l=t[1],s=t[2],i=t[3]==="-"?null:ve(8-parseInt(t[3][1]),t[3].charCodeAt(0)-97);return{board:n,turn:l,castling:{w:{k:s.includes("K"),q:s.includes("Q")},b:{k:s.includes("k"),q:s.includes("q")}},enPassantTarget:i,halfMoveClock:parseInt(t[4])||0,fullMoveNumber:parseInt(t[5])||1,history:[],isGameOver:!1,winner:null}},Yr=e=>{let t="";for(let r=0;r<8;r++){let o=0;for(let l=0;l<8;l++){const s=e.board[ve(r,l)];if(!s)o++;else{o>0&&(t+=o,o=0);const i=s.type;t+=s.color==="w"?i.toUpperCase():i}}o>0&&(t+=o),r<7&&(t+="/")}t+=` ${e.turn} `;let n="";if(e.castling.w.k&&(n+="K"),e.castling.w.q&&(n+="Q"),e.castling.b.k&&(n+="k"),e.castling.b.q&&(n+="q"),t+=n||"-",e.enPassantTarget!==null){const r=Ze(e.enPassantTarget),o=We(e.enPassantTarget),l=String.fromCharCode(97+o),s=8-r;t+=` ${l}${s}`}else t+=" -";return t+=` ${e.halfMoveClock} ${e.fullMoveNumber}`,t},Qd=e=>{const t=e.filter(n=>n!==null);return!!(t.length===2||t.length===3&&t.find(r=>r.type==="n"||r.type==="b"))},qd=e=>{const t=[],{board:n,turn:r}=e;for(let o=0;o<64;o++){const l=n[o];if(!l||l.color!==r)continue;const s=Ze(o),i=We(o);if(l.type==="p"){const u=r==="w"?-1:1,a=r==="w"?6:1,h=r==="w"?0:7,m=ve(s+u,i);if(Ye(s+u,i)&&!n[m])if(s+u===h)["q","r","b","n"].forEach(v=>{t.push({from:o,to:m,piece:l,promotion:v})});else{t.push({from:o,to:m,piece:l});const v=ve(s+u*2,i);s===a&&!n[v]&&t.push({from:o,to:v,piece:l,flags:{isPawnDouble:!0}})}const p=[[u,-1],[u,1]];for(const[v,E]of p){const y=s+v,P=i+E;if(Ye(y,P)){const f=ve(y,P),c=n[f];c&&c.color!==r&&(y===h?["q","r","b","n"].forEach(d=>{t.push({from:o,to:f,piece:l,captured:c,promotion:d})}):t.push({from:o,to:f,piece:l,captured:c})),e.enPassantTarget===f&&t.push({from:o,to:f,piece:l,captured:{color:r==="w"?"b":"w",type:"p"},flags:{isEnPassant:!0}})}}}else if(l.type==="n"){const u=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const[a,h]of u)if(Ye(s+a,i+h)){const m=ve(s+a,i+h),p=n[m];(!p||p.color!==r)&&t.push({from:o,to:m,piece:l,captured:p})}}else if(l.type==="k"){const u=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(const[a,h]of u)if(Ye(s+a,i+h)){const m=ve(s+a,i+h),p=n[m];(!p||p.color!==r)&&t.push({from:o,to:m,piece:l,captured:p})}r==="w"&&!we(o,"b",e)&&(e.castling.w.k&&!n[61]&&!n[62]&&!we(61,"b",e)&&!we(62,"b",e)&&t.push({from:60,to:62,piece:l,flags:{isCastle:!0}}),e.castling.w.q&&!n[59]&&!n[58]&&!n[57]&&!we(59,"b",e)&&!we(58,"b",e)&&t.push({from:60,to:58,piece:l,flags:{isCastle:!0}})),r==="b"&&!we(o,"w",e)&&(e.castling.b.k&&!n[5]&&!n[6]&&!we(5,"w",e)&&!we(6,"w",e)&&t.push({from:4,to:6,piece:l,flags:{isCastle:!0}}),e.castling.b.q&&!n[3]&&!n[2]&&!n[1]&&!we(3,"w",e)&&!we(2,"w",e)&&t.push({from:4,to:2,piece:l,flags:{isCastle:!0}}))}else{const u=[];(l.type==="b"||l.type==="q")&&u.push([-1,-1],[-1,1],[1,-1],[1,1]),(l.type==="r"||l.type==="q")&&u.push([-1,0],[1,0],[0,-1],[0,1]);for(const[a,h]of u){let m=s+a,p=i+h;for(;Ye(m,p);){const v=ve(m,p),E=n[v];if(!E)t.push({from:o,to:v,piece:l});else{E.color!==r&&t.push({from:o,to:v,piece:l,captured:E});break}m+=a,p+=h}}}}return t},we=(e,t,n)=>{const r=Ze(e),o=We(e),l=t==="w"?r+1:r-1;if(Ye(l,o-1)){const a=n.board[ve(l,o-1)];if(a&&a.color===t&&a.type==="p")return!0}if(Ye(l,o+1)){const a=n.board[ve(l,o+1)];if(a&&a.color===t&&a.type==="p")return!0}const s=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const[a,h]of s)if(Ye(r+a,o+h)){const m=n.board[ve(r+a,o+h)];if(m&&m.color===t&&m.type==="n")return!0}const i=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(const[a,h]of i)if(Ye(r+a,o+h)){const m=n.board[ve(r+a,o+h)];if(m&&m.color===t&&m.type==="k")return!0}const u=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]];for(let a=0;a<8;a++){const[h,m]=u[a];let p=r+h,v=o+m;for(;Ye(p,v);){const E=n.board[ve(p,v)];if(E){if(E.color===t&&(E.type==="q"||a<4&&E.type==="r"||a>=4&&E.type==="b"))return!0;break}p+=h,v+=m}}return!1},Tn=e=>{var r,o;const t=qd(e),n=[];for(const l of t){const s=[...e.board];if(s[l.to]=l.promotion?{color:l.piece.color,type:l.promotion}:l.piece,s[l.from]=null,(r=l.flags)!=null&&r.isEnPassant){const h=l.piece.color==="w"?l.to+8:l.to-8;s[h]=null}(o=l.flags)!=null&&o.isCastle&&(l.to===62?(s[61]=s[63],s[63]=null):l.to===58?(s[59]=s[56],s[56]=null):l.to===6?(s[5]=s[7],s[7]=null):l.to===2&&(s[3]=s[0],s[0]=null));const i=s.findIndex(h=>(h==null?void 0:h.type)==="k"&&h.color===e.turn);if(i===-1)continue;const u=e.turn==="w"?"b":"w",a={...e,board:s};we(i,u,a)||n.push(l)}return n},Ut=(e,t)=>{var a,h,m;const n=[...e.board],r=JSON.parse(JSON.stringify(e.castling));let o=null,l=e.halfMoveClock+1;if(n[t.to]=t.promotion?{color:t.piece.color,type:t.promotion}:t.piece,n[t.from]=null,t.captured&&(l=0,(a=t.flags)!=null&&a.isEnPassant)){const p=t.piece.color==="w"?t.to+8:t.to-8;n[p]=null}t.piece.type==="p"&&(l=0),(h=t.flags)!=null&&h.isCastle&&(t.to===62?(n[61]=n[63],n[63]=null):t.to===58?(n[59]=n[56],n[56]=null):t.to===6?(n[5]=n[7],n[7]=null):t.to===2&&(n[3]=n[0],n[0]=null)),t.piece.type==="k"&&(t.piece.color==="w"?(r.w.k=!1,r.w.q=!1):(r.b.k=!1,r.b.q=!1));const s=[0,7,56,63];(s.includes(t.from)||s.includes(t.to))&&((t.from===0||t.to===0)&&(r.b.q=!1),(t.from===7||t.to===7)&&(r.b.k=!1),(t.from===56||t.to===56)&&(r.w.q=!1),(t.from===63||t.to===63)&&(r.w.k=!1)),(m=t.flags)!=null&&m.isPawnDouble&&(o=t.piece.color==="w"?t.from-8:t.from+8);const i={board:n,turn:e.turn==="w"?"b":"w",castling:r,enPassantTarget:o,halfMoveClock:l,fullMoveNumber:e.turn==="b"?e.fullMoveNumber+1:e.fullMoveNumber,history:[...e.history,t],isGameOver:!1,winner:null};if(Tn(i).length===0){i.isGameOver=!0;const p=i.board.findIndex(v=>(v==null?void 0:v.type)==="k"&&v.color===i.turn);we(p,e.turn,i)?i.winner=e.turn:i.winner="draw"}else Qd(i.board)&&(i.isGameOver=!0,i.winner="draw");return i},Zd=e=>e==="p"?"":e.toUpperCase(),Lr=e=>String.fromCharCode(97+e),ul=e=>8-e,Ao=(e,t,n)=>{var l,s,i;if((l=e.flags)!=null&&l.isCastle)return e.to>e.from?"O-O":"O-O-O";let r="";const o=Zd(e.piece.type);if(r+=o,e.piece.type!=="p"){const a=Tn(t).filter(h=>h.piece.type===e.piece.type&&h.piece.color===e.piece.color&&h.to===e.to&&h.from!==e.from);if(a.length>0){const h=a.some(p=>We(p.from)===We(e.from)),m=a.some(p=>Ze(p.from)===Ze(e.from));h?m?r+=Lr(We(e.from))+ul(Ze(e.from)):r+=ul(Ze(e.from)):r+=Lr(We(e.from))}}else(e.captured||(s=e.flags)!=null&&s.isEnPassant)&&(r+=Lr(We(e.from)));if((e.captured||(i=e.flags)!=null&&i.isEnPassant)&&(r+="x"),r+=Lr(We(e.to))+ul(Ze(e.to)),e.promotion&&(r+="="+e.promotion.toUpperCase()),n.isGameOver&&n.winner===e.piece.color)r+="#";else{const u=e.piece.color==="w"?"b":"w",a=n.board.findIndex(h=>(h==null?void 0:h.type)==="k"&&h.color===u);a!==-1&&we(a,e.piece.color,n)&&(r+="+")}return r},Xd=e=>{let t=on(Kn),n="",r=1;for(let o=0;o<e.history.length;o++){const l=e.history[o],s=Ut(t,l);o%2===0&&(n+=`${r}. `),n+=Ao(l,t,s)+" ",o%2===1&&r++,t=s}return n.trim()},Jd=e=>{const n=e.replace(/\[.*?\]/g,"").replace(/\{.*?\}/g,"").replace(/\d+\.+/g," ").replace(/\s+/g," ").trim().split(" ");let r=on(Kn);for(const o of n){if(!o)continue;if(["1-0","0-1","1/2-1/2","*"].includes(o))break;const l=Tn(r);let s=null;for(const i of l){const a=Ao(i,r,Ut(r,i)).replace(/[+#]/g,""),h=o.replace(/[+#]/g,"");if(a===h){s=i;break}}if(!s)throw new Error(`Invalid Move: ${o}`);r=Ut(r,s)}return r},ep={"w-p":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/200px-Chess_plt45.svg.png","w-n":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/200px-Chess_nlt45.svg.png","w-b":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/200px-Chess_blt45.svg.png","w-r":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/200px-Chess_rlt45.svg.png","w-q":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/200px-Chess_qlt45.svg.png","w-k":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/200px-Chess_klt45.svg.png","b-p":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/200px-Chess_pdt45.svg.png","b-n":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/200px-Chess_ndt45.svg.png","b-b":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/200px-Chess_bdt45.svg.png","b-r":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/200px-Chess_rdt45.svg.png","b-q":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/200px-Chess_qdt45.svg.png","b-k":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/200px-Chess_kdt45.svg.png"},qs=({color:e,type:t,className:n})=>{const r=`${e}-${t}`,o=ep[r];return g.jsx("img",{src:o,alt:`${e==="w"?"White":"Black"} ${t}`,className:`select-none pointer-events-none ${n||""}`,style:{width:"100%",height:"100%",objectFit:"contain"},loading:"eager",draggable:!1})},tp=({piece:e})=>g.jsx("div",{className:"w-[85%] h-[85%] select-none cursor-pointer transition-transform hover:scale-105 drop-shadow-sm flex items-center justify-center",children:g.jsx(qs,{color:e.color,type:e.type})}),np=({board:e,onSquareClick:t,selectedSquare:n,validMoves:r,lastMove:o,bestMove:l,isFlipped:s})=>{const i=(u,a)=>{const h=Ze(u),m=We(u),p=(h+m)%2===1,v=Math.floor(a/8),E=a%8,y=e[u],P=n===u,f=r.some(I=>I.to===u),c=(o==null?void 0:o.from)===u,d=(o==null?void 0:o.to)===u,S=(l==null?void 0:l.from)===u,T=(l==null?void 0:l.to)===u;let k=p?"bg-[#769656]":"bg-[#eeeed2]";return P?k="bg-yellow-200/90":(c||d)&&(k="bg-yellow-200/60"),g.jsxs("div",{onClick:()=>t(u),className:`w-full h-full flex items-center justify-center relative ${k}`,children:[E===0&&g.jsx("span",{className:`absolute top-0.5 left-1 text-[10px] font-bold select-none ${p?"text-[#eeeed2]":"text-[#769656]"}`,children:8-h}),v===7&&g.jsx("span",{className:`absolute bottom-0 right-1 text-[10px] font-bold select-none ${p?"text-[#eeeed2]":"text-[#769656]"}`,children:String.fromCharCode(97+m)}),(S||T)&&!P&&g.jsx("div",{className:"absolute inset-0 border-[3px] border-blue-500/70 animate-pulse pointer-events-none z-10"}),T&&!y&&g.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-blue-500/50 pointer-events-none z-10"}),f&&g.jsx("div",{className:`absolute rounded-full z-20 ${y?"border-4 border-black/10 w-full h-full rounded-none":"w-3 h-3 bg-black/20"}`}),y&&g.jsx(tp,{piece:y})]},u)};return g.jsx("div",{className:"aspect-square w-full grid grid-cols-8 grid-rows-8 border-4 border-slate-700 shadow-2xl rounded-sm overflow-hidden bg-slate-800 select-none",children:e.map((u,a)=>{const h=s?63-a:a;return i(h,a)})})},rp=({onReset:e,onUndo:t,onImportFen:n,onExportFen:r,onImportPgn:o,onExportPgn:l,config:s,setConfig:i,engineEnabled:u,setEngineEnabled:a,gameState:h,isFlipped:m,onFlipBoard:p})=>{const[v,E]=H.useState(s.depth),[y,P]=H.useState(s.timeLimit),[f,c]=H.useState(s.branchingFactor);H.useEffect(()=>{E(s.depth),P(s.timeLimit),c(s.branchingFactor)},[s]);const d=()=>{i({...s,depth:v,timeLimit:y,branchingFactor:f})},S=T=>{T==="OFF"?a(!1):(a(!0),T==="B"&&s.engineId!=="B"?(i({...s,engineId:"B",depth:8,timeLimit:3e3}),E(8),P(3e3)):T==="A"&&s.engineId!=="A"&&i({...s,engineId:"A"}))};return g.jsxs("div",{className:"flex flex-col gap-2 p-3 bg-slate-800 rounded-lg border border-slate-700 w-full max-w-[600px]",children:[g.jsxs("div",{className:"flex justify-between items-center border-b border-slate-700 pb-1 mb-1",children:[g.jsx("h2",{className:"text-lg font-bold text-amber-500",children:"Controls"}),g.jsx("span",{className:`px-2 py-0.5 rounded text-xs font-semibold ${h==="playing"?"bg-emerald-900 text-emerald-300":"bg-red-900 text-red-300"}`,children:h.toUpperCase()})]}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{onClick:t,className:"flex-1 bg-slate-700 hover:bg-slate-600 px-3 py-1.5 rounded text-xs font-medium transition-colors",children:"Undo"}),g.jsxs("button",{onClick:p,className:`flex-1 px-3 py-1.5 rounded text-xs font-medium transition-colors ${m?"bg-amber-700 hover:bg-amber-600 text-white":"bg-slate-700 hover:bg-slate-600"}`,children:[m?"Unflip":"Flip"," Board"]}),g.jsx("button",{onClick:e,className:"flex-1 bg-red-900/50 hover:bg-red-800/50 text-red-200 px-3 py-1.5 rounded text-xs font-medium transition-colors",children:"Reset"})]}),g.jsxs("div",{className:"space-y-2 pt-1",children:[g.jsxs("div",{className:"flex flex-col gap-1",children:[g.jsx("label",{className:"text-xs font-medium text-slate-300",children:"Engine Selection"}),g.jsxs("div",{className:"flex bg-slate-900 rounded p-1 gap-1",children:[g.jsx("button",{onClick:()=>S("OFF"),className:`flex-1 py-1 text-[10px] font-bold rounded transition-colors ${u?"text-slate-500 hover:text-slate-300":"bg-slate-600 text-white"}`,children:"OFF"}),g.jsx("button",{onClick:()=>S("A"),className:`flex-1 py-1 text-[10px] font-bold rounded transition-colors ${u&&s.engineId==="A"?"bg-emerald-600 text-white":"text-slate-500 hover:text-slate-300"}`,children:"ENGINE A (Classic)"}),g.jsx("button",{onClick:()=>S("B"),className:`flex-1 py-1 text-[10px] font-bold rounded transition-colors ${u&&s.engineId==="B"?"bg-purple-600 text-white":"text-slate-500 hover:text-slate-300"}`,children:"ENGINE B (Neural)"})]})]}),u&&g.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2 pt-1 animate-in fade-in",children:[g.jsxs("div",{className:"space-y-0.5",children:[g.jsxs("div",{className:"flex justify-between",children:[g.jsx("label",{className:"text-[10px] text-slate-400",children:"Max Depth"}),g.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:v})]}),g.jsx("input",{type:"range",min:"1",max:s.engineId==="B"?14:12,step:"1",value:v,onChange:T=>E(parseInt(T.target.value)),onMouseUp:d,onTouchEnd:d,className:"w-full accent-amber-500 bg-slate-700 h-1.5 rounded-lg appearance-none cursor-pointer"})]}),g.jsxs("div",{className:"space-y-0.5",children:[g.jsxs("div",{className:"flex justify-between",children:[g.jsx("label",{className:"text-[10px] text-slate-400",children:"Time Limit"}),g.jsxs("span",{className:"text-[10px] font-mono text-amber-400",children:[(y/1e3).toFixed(1),"s"]})]}),g.jsx("input",{type:"range",min:"500",max:"120000",step:"500",value:y,onChange:T=>P(parseInt(T.target.value)),onMouseUp:d,onTouchEnd:d,className:"w-full accent-amber-500 bg-slate-700 h-1.5 rounded-lg appearance-none cursor-pointer"})]}),g.jsxs("div",{className:"flex items-center justify-between col-span-2 pt-1",children:[g.jsx("label",{className:"text-[10px] text-slate-300",children:s.engineId==="A"?"Smart Pruning (PVS + LMR)":"Deep Search (NMP + Futility)"}),g.jsx("input",{type:"checkbox",checked:s.useDynamicBranching,onChange:T=>i({...s,useDynamicBranching:T.target.checked}),className:"w-3 h-3 rounded accent-amber-500"})]}),!s.useDynamicBranching&&g.jsxs("div",{className:"space-y-0.5 col-span-2",children:[g.jsxs("div",{className:"flex justify-between",children:[g.jsx("label",{className:"text-[10px] text-slate-400",children:"Branching Factor"}),g.jsx("span",{className:"text-[10px] font-mono text-amber-400",children:f})]}),g.jsx("input",{type:"range",min:"2",max:"50",step:"1",value:f,onChange:T=>c(parseInt(T.target.value)),onMouseUp:d,onTouchEnd:d,className:"w-full accent-amber-500 bg-slate-700 h-1.5 rounded-lg appearance-none cursor-pointer"})]})]})]}),g.jsxs("div",{className:"pt-1 border-t border-slate-700 grid grid-cols-4 gap-1",children:[g.jsx("button",{onClick:n,className:"text-center px-1 py-1 bg-slate-700/50 hover:bg-slate-600/50 rounded text-[10px] text-slate-300 transition-colors",children:"In FEN"}),g.jsx("button",{onClick:r,className:"text-center px-1 py-1 bg-slate-700/50 hover:bg-slate-600/50 rounded text-[10px] text-slate-300 transition-colors",children:"Out FEN"}),g.jsx("button",{onClick:o,className:"text-center px-1 py-1 bg-slate-700/50 hover:bg-slate-600/50 rounded text-[10px] text-slate-300 transition-colors",children:"In PGN"}),g.jsx("button",{onClick:l,className:"text-center px-1 py-1 bg-slate-700/50 hover:bg-slate-600/50 rounded text-[10px] text-slate-300 transition-colors",children:"Out PGN"})]})]})},op=({result:e,turn:t,configDepth:n,gameState:r,isFlipped:o})=>{const[l,s]=H.useState(0),i=H.useRef(0),u=H.useRef(Date.now()),a=H.useRef(null);H.useEffect(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[e.logs]),H.useEffect(()=>{if(e.isThinking){const d=setInterval(()=>{const S=Date.now(),T=S-u.current;if(T>=1e3){const k=e.nodesSearched-i.current;s(Math.round(k/(T/1e3))),i.current=e.nodesSearched,u.current=S}},500);return()=>clearInterval(d)}else s(0),i.current=0},[e.isThinking,e.nodesSearched]);const h=t==="w"?e.evaluation:-e.evaluation,m=o?-h:h;let p="";const E=Math.abs(e.evaluation)>2e4;if(E){const d=Math.ceil((29e3-Math.abs(e.evaluation))/2);p=`M# ${m>0?"+":"-"}${d}`}else{const d=m/100;p=d>0?`+${d.toFixed(2)}`:d.toFixed(2)}const y=Math.min(100,e.currentDepth/n*100);let P=50;E?P=m>0?100:0:P=50+Math.max(-1e3,Math.min(1e3,m))/20;const f=d=>d>=1e6?(d/1e6).toFixed(1)+"M":d>=1e3?(d/1e3).toFixed(1)+"k":d.toString();let c="";if(e.bestMove){const S=Tn(r).find(T=>T.from===e.bestMove.from&&T.to===e.bestMove.to&&T.promotion===e.bestMove.promotion);if(S){const T=Ut(r,S);c=Ao(S,r,T)}else c=`${String.fromCharCode(97+e.bestMove.from%8)}${8-Math.floor(e.bestMove.from/8)} -> ...`}return g.jsxs("div",{className:"bg-slate-800 p-3 rounded-lg border border-slate-700 w-full max-w-[600px] mt-2 shadow-lg",children:[g.jsxs("div",{className:"flex justify-between items-end mb-1",children:[g.jsx("h3",{className:"text-xs font-bold text-slate-300",children:"Engine Analysis"}),e.isThinking&&g.jsxs("span",{className:"text-[10px] font-mono text-emerald-400 animate-pulse",children:[l.toLocaleString()," NPS"]})]}),g.jsxs("div",{className:"w-full h-3 bg-slate-600 rounded-full overflow-hidden relative mb-2 border border-slate-700",children:[g.jsx("div",{className:"h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 transition-all duration-500",style:{width:`${P}%`}}),g.jsx("div",{className:"absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-900/80 z-10"})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm mb-2",children:[g.jsxs("div",{className:"bg-slate-700/50 p-1.5 rounded",children:[g.jsxs("p",{className:"text-[10px] text-slate-500 uppercase font-semibold",children:["Evaluation (",o?"Black":"White",")"]}),g.jsx("p",{className:`font-mono text-lg leading-tight font-bold ${m>0?"text-green-400":m<0?"text-red-400":"text-slate-200"}`,children:p})]}),g.jsxs("div",{className:"bg-slate-700/50 p-1.5 rounded",children:[g.jsx("p",{className:"text-[10px] text-slate-500 uppercase font-semibold",children:"Nodes Searched"}),g.jsx("p",{className:"font-mono text-slate-200 text-lg leading-tight",children:f(e.nodesSearched)})]})]}),g.jsxs("div",{className:"space-y-0.5 mb-2",children:[g.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[g.jsx("span",{children:"Depth Progress"}),g.jsxs("span",{children:[e.currentDepth," / ",n]})]}),g.jsx("div",{className:"w-full h-1 bg-slate-700 rounded-full overflow-hidden",children:g.jsx("div",{className:`h-full transition-all duration-300 ${e.isThinking?"bg-amber-500":"bg-emerald-500"}`,style:{width:`${e.isThinking?y:100}%`}})})]}),!e.isThinking&&c&&g.jsxs("div",{className:"mt-2 pt-2 border-t border-slate-700",children:[g.jsx("div",{className:"text-[10px] text-slate-500 uppercase font-semibold mb-0.5",children:"Best Line Found"}),g.jsxs("div",{className:"text-emerald-400 font-mono text-xl font-bold flex items-center gap-2",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),c]})]}),g.jsxs("div",{className:"mt-2 pt-1 border-t border-slate-700",children:[g.jsx("p",{className:"text-[10px] text-slate-500 mb-0.5 font-bold",children:"WORKER LOGS"}),g.jsx("div",{ref:a,className:"h-16 bg-black/50 rounded p-1.5 overflow-y-auto font-mono text-[9px] text-slate-400 leading-tight",children:e.logs.length===0?g.jsx("span",{className:"italic opacity-50",children:"Waiting for engine..."}):e.logs.map((d,S)=>g.jsx("div",{children:d},S))})]})]})},lp=({isOpen:e,onClose:t,onImport:n,title:r,defaultValue:o="",isExport:l=!1})=>{const[s,i]=H.useState(o);return H.useEffect(()=>{i(o)},[o,e]),e?g.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",children:g.jsxs("div",{className:"bg-slate-800 border border-slate-700 rounded-lg shadow-2xl w-full max-w-lg flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200",children:[g.jsxs("div",{className:"p-4 border-b border-slate-700 flex justify-between items-center",children:[g.jsx("h3",{className:"text-lg font-bold text-slate-100",children:r}),g.jsx("button",{onClick:t,className:"text-slate-400 hover:text-white transition-colors",children:"✕"})]}),g.jsx("div",{className:"p-4 flex-1",children:g.jsx("textarea",{className:"w-full h-40 bg-slate-900 border border-slate-700 rounded p-3 text-slate-200 font-mono text-sm focus:outline-none focus:border-amber-500 resize-none",value:s,onChange:u=>i(u.target.value),placeholder:l?"":"Paste text here...",readOnly:l,onClick:u=>l&&u.target.select()})}),g.jsxs("div",{className:"p-4 border-t border-slate-700 flex justify-end gap-3 bg-slate-800/50",children:[g.jsx("button",{onClick:t,className:"px-4 py-2 text-sm text-slate-300 hover:text-white font-medium transition-colors",children:l?"Close":"Cancel"}),l?g.jsx("button",{onClick:()=>{navigator.clipboard.writeText(s),alert("Copied to clipboard!")},className:"px-4 py-2 text-sm bg-amber-600 hover:bg-amber-500 text-white rounded font-medium transition-colors",children:"Copy to Clipboard"}):g.jsx("button",{onClick:()=>{n(s),t()},disabled:!s.trim(),className:"px-4 py-2 text-sm bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded font-medium transition-colors",children:"Import"})]})]})}):null},sp=({board:e})=>{const t={p:8,n:2,b:2,r:2,q:1,k:1},n=v=>{const E={p:0,n:0,b:0,r:0,q:0,k:0};return e.forEach(y=>{y&&y.color===v&&E[y.type]++}),E},r=n("w"),o=n("b"),l=(v,E)=>{const y=[];return Object.keys(v).forEach(P=>{const f=Math.max(0,v[P]-E[P]);for(let c=0;c<f;c++)y.push(P)}),y},s=l(t,o),i=l(t,r),u=v=>v.p*Pt.p+v.n*Pt.n+v.b*Pt.b+v.r*Pt.r+v.q*Pt.q,a=u(r),h=u(o),m=(a-h)/100,p=(v,E,y)=>g.jsxs("div",{className:"flex items-center gap-2 h-8 bg-slate-800/50 rounded px-2 border border-slate-700 w-full",children:[g.jsxs("div",{className:"flex -space-x-1.5 overflow-hidden",children:[v.sort((P,f)=>Pt[P]-Pt[f]).map((P,f)=>g.jsx("div",{className:"w-5 h-5 opacity-90 relative",children:g.jsx(qs,{color:E==="w"?"b":"w",type:P})},f)),v.length===0&&g.jsx("span",{className:"text-xs text-slate-600 italic",children:"None"})]}),y>0&&g.jsxs("span",{className:"text-xs font-bold text-slate-400 ml-auto",children:["+",y.toFixed(0)]})]});return g.jsxs("div",{className:"flex flex-col gap-2 w-full",children:[g.jsx("div",{className:"flex justify-between items-center text-xs text-slate-400 px-1",children:g.jsx("span",{children:"Captured by White"})}),p(s,"w",m>0?m:0),g.jsx("div",{className:"flex justify-between items-center text-xs text-slate-400 px-1 mt-1",children:g.jsx("span",{children:"Captured by Black"})}),p(i,"b",m<0?Math.abs(m):0)]})},ip="https://explorer.lichess.ovh/masters",up=async e=>{var t;if(e.fullMoveNumber>20)return null;try{const r=Yr(e).split(" ").slice(0,4).join(" "),o=new AbortController,l=setTimeout(()=>o.abort(),2e3),s=await fetch(`${ip}?fen=${encodeURIComponent(r)}&moves=5`,{signal:o.signal});if(clearTimeout(l),!s.ok)return null;const i=await s.json();if(!i.moves||i.moves.length===0)return null;const u=i.moves,a=u.reduce((E,y)=>E+y.white+y.draws+y.black,0);let h=Math.random()*a,m=u[0].san;for(const E of u){const y=E.white+E.draws+E.black;if(h<=y){m=E.san;break}h-=y}const p=Tn(e),v=(t=u.find(E=>E.san===m))==null?void 0:t.uci;if(v){const E=p.find(y=>{const P=(8-parseInt(v[1]))*8+(v.charCodeAt(0)-97),f=(8-parseInt(v[3]))*8+(v.charCodeAt(2)-97);return v.length===5?y.from===P&&y.to===f&&y.promotion===v[4]:y.from===P&&y.to===f});if(E)return E}for(const E of p){const y=Ut(e,E);if(Ao(E,e,y)===m)return E}return null}catch{return null}},ap=`
// [ENGINE A CODE PRESERVED AS IS]
const VAL_PAWN = 100;
const VAL_KNIGHT = 320;
const VAL_BISHOP = 330;
const VAL_ROOK = 500;
const VAL_QUEEN = 900;
const VAL_KING = 20000;
const MATE_SCORE = 29000; 
const MAX_PLY = 100; 

const COLOR_WHITE = 8;
const COLOR_BLACK = 16;
const TYPE_EMPTY = 0;
const TYPE_PAWN = 1;
const TYPE_KNIGHT = 2;
const TYPE_BISHOP = 3;
const TYPE_ROOK = 4;
const TYPE_QUEEN = 5;
const TYPE_KING = 6;

const MASK_FROM = 0x3F;
const MASK_TO = 0xFC0;
const SHIFT_TO = 6;
const MASK_PIECE = 0x7000;
const SHIFT_PIECE = 12;
const MASK_CAP = 0x38000;
const SHIFT_CAP = 15;
const MASK_PROM = 0x1C0000;
const SHIFT_PROM = 18;
const FLAG_CASTLE = 0x200000;
const FLAG_EP = 0x400000;
const FLAG_DOUBLE = 0x800000;

const TT_SIZE = 1 << 20; 
const TT_FLAG_EXACT = 0;
const TT_FLAG_LOWER = 1; 
const TT_FLAG_UPPER = 2; 

// Tables (PeSTO)
const MG_PAWN = [0,0,0,0,0,0,0,0,98,134,61,95,68,126,34,-11,-6,7,26,31,65,56,25,-20,-14,13,6,21,23,12,17,-23,-27,-2,-5,12,17,6,10,-25,-26,-4,-4,-10,3,3,33,-12,-35,-1,-20,-23,-15,24,38,-22,0,0,0,0,0,0,0,0];
const EG_PAWN = [0,0,0,0,0,0,0,0,178,173,158,134,147,132,165,187,94,100,85,67,56,53,82,84,32,24,13,5,-2,4,17,17,13,9,-3,-7,-7,-8,3,-1,4,7,-6,1,0,-5,-1,-8,13,8,8,10,13,0,2,-7,0,0,0,0,0,0,0,0];
const MG_KNIGHT = [-167,-89,-34,-49,61,-97,-15,-107,-73,-41,72,36,23,62,7,-17,-47,60,37,65,84,129,73,44,-9,17,19,53,37,69,18,22,-13,4,16,13,28,19,21,-8,-23,-9,12,10,19,17,25,-16,-29,-53,-12,-3,-1,18,-14,-19,-105,-21,-58,-33,-17,-28,-19,-23];
const EG_KNIGHT = [-58,-38,-13,-28,-31,-27,-63,-99,-25,-8,-25,-2,-9,-25,-24,-52,-24,-20,10,9,-1,-9,-19,-41,-17,3,22,22,22,11,8,-18,-18,-6,16,25,16,17,4,-18,-23,-3,-1,15,10,-3,-20,-22,-42,-20,-10,-5,-2,-20,-23,-44,-29,-51,-23,-15,-22,-18,-50,-64];
const MG_BISHOP = [-29,4,-82,-37,-25,-42,7,-8,-26,16,-18,-13,30,59,18,-47,-16,37,43,40,35,50,37,-2,-4,5,19,50,37,37,7,-2,-6,13,13,26,34,12,10,4,0,15,15,15,14,27,18,10,4,15,16,0,7,21,33,1,-33,-3,-14,-21,-13,-12,-39,-21];
const EG_BISHOP = [-14,-21,-11,-8,-7,-9,-17,-24,-8,-4,7,-12,-3,-13,-4,-14,2,-8,0,-1,-2,6,0,4,-3,9,12,9,14,10,3,2,-6,3,13,19,7,10,-3,-9,-12,-3,5,10,13,3,-7,-15,-14,-18,-7,-1,4,-9,-15,-27,-23,-9,-23,-5,-9,-16,-5,-17];
const MG_ROOK = [32,42,32,51,63,9,31,43,27,32,58,62,80,67,26,44,-5,19,26,36,17,45,61,16,-24,-11,7,26,24,35,-8,-20,-36,-26,-12,-1,9,-7,6,-23,-45,-25,-16,-17,3,0,-5,-33,-44,-16,-20,-9,-1,11,-6,-71,-19,-13,1,17,16,7,-37,-26];
const EG_ROOK = [13,10,18,15,12,12,8,5,11,13,13,11,-3,3,8,3,7,7,7,5,4,-3,-5,-3,4,3,13,1,2,1,-1,2,3,5,8,4,-5,-6,-8,-11,-4,0,-5,-1,-7,-12,-8,-16,-18,-20,-7,-13,-13,-23,-15,-25,-14,-25,-12,-25,-27,-25,-27,-25];
const MG_QUEEN = [-28,0,29,12,59,44,43,45,-24,-39,-5,1,-16,57,28,54,-13,-17,7,8,29,56,47,57,-27,-27,-16,-16,-1,17,-2,1,-9,-26,-9,-10,-2,-4,3,-3,-14,2,-11,-2,-5,2,14,5,-35,-8,11,2,8,15,-3,1,-1,-18,-9,10,-15,-25,-31,-50];
const EG_QUEEN = [-9,22,22,27,27,19,10,20,-17,20,32,41,58,25,30,0,-20,6,9,49,47,35,19,9,3,22,24,45,57,40,57,36,-18,28,19,47,31,34,39,23,-16,-27,15,6,9,17,10,5,-22,-23,-30,-16,-16,-23,-36,-32,-33,-28,-22,-43,-5,-32,-20,-41];
const MG_KING = [-65,23,16,-15,-56,-34,2,13,29,-1,-20,-7,-8,-4,-38,-29,-9,24,2,-16,-20,6,22,-22,-17,-20,-12,-27,-30,-25,-14,-36,-49,-1,-27,-39,-46,-44,-33,-51,-14,-14,-22,-46,-44,-30,-15,-27,1,7,-8,-64,-43,-16,9,8,-15,36,12,-54,8,-28,24,14];
const EG_KING = [-74,-35,-18,-18,-11,15,4,-17,-12,17,14,17,17,38,23,11,10,17,23,15,20,45,44,13,-8,22,24,27,26,33,26,3,-18,-4,21,24,27,23,9,-11,-19,-3,11,21,23,16,7,-9,-27,-11,4,13,14,4,-5,-17,-53,-34,-21,-11,-28,-14,-24,-43];

const TABLES_MG = [[],MG_PAWN,MG_KNIGHT,MG_BISHOP,MG_ROOK,MG_QUEEN,MG_KING];
const TABLES_EG = [[],EG_PAWN,EG_KNIGHT,EG_BISHOP,EG_ROOK,EG_QUEEN,EG_KING];

const ZOBRIST = new Int32Array(64 * 32);
const ZOBRIST_CASTLE = new Int32Array(16);
const ZOBRIST_SIDE = 0x12345678;

for(let i=0; i<ZOBRIST.length; i++) ZOBRIST[i] = (Math.random() * 0xFFFFFFFF) | 0;
for(let i=0; i<ZOBRIST_CASTLE.length; i++) ZOBRIST_CASTLE[i] = (Math.random() * 0xFFFFFFFF) | 0;

let board = new Int8Array(64); 
let turn = COLOR_WHITE;
let castleRights = 0; 
let enPassant = -1;
let currentHash = 0;
let positionHistory = new Int32Array(MAX_PLY + 50);
let historyPly = 0;

let nodes = 0;
let stopTime = 0;
let startTime = 0;
let lastReportTime = 0;
let lastLogTime = 0;

let killerMoves = new Int32Array(MAX_PLY * 2); 
let history = new Int32Array(64 * 64); 

let bestMoveGlobal = 0;
let bestScoreGlobal = 0;
let currentRequestId = 0;
let activeDepth = 0;

const ttHash = new Int32Array(TT_SIZE);
const ttDepth = new Int8Array(TT_SIZE);
const ttFlag = new Int8Array(TT_SIZE);
const ttScore = new Int16Array(TT_SIZE);
const ttMove = new Int32Array(TT_SIZE);

function log(msg) { self.postMessage({ type: 'log', message: msg, requestId: currentRequestId }); }

function createMove(f, t, p, cap, prom, flags) {
    return f | (t << SHIFT_TO) | (p << SHIFT_PIECE) | (cap << SHIFT_CAP) | (prom << SHIFT_PROM) | flags;
}
function getFrom(m) { return m & MASK_FROM; }
function getTo(m) { return (m & MASK_TO) >> SHIFT_TO; }
function getPiece(m) { return (m & MASK_PIECE) >> SHIFT_PIECE; }
function getCaptured(m) { return (m & MASK_CAP) >> SHIFT_CAP; }
function getProm(m) { return (m & MASK_PROM) >> SHIFT_PROM; }

function getHash() {
    let h = 0;
    for(let i=0; i<64; i++) {
        const p = board[i];
        if(p) h ^= ZOBRIST[i * 32 + p];
    }
    if(turn === COLOR_BLACK) h ^= ZOBRIST_SIDE;
    h ^= ZOBRIST_CASTLE[castleRights];
    return h;
}

function parseFen(fen) {
    board.fill(TYPE_EMPTY);
    const parts = fen.split(' ');
    let r=0, c=0;
    for(const char of parts[0]) {
        if(char === '/') { r++; c=0; }
        else if(char >= '1' && char <= '8') { c += parseInt(char); }
        else {
            const color = (char === char.toUpperCase()) ? COLOR_WHITE : COLOR_BLACK;
            const typeChar = char.toLowerCase();
            const type = {p:1, n:2, b:3, r:4, q:5, k:6}[typeChar];
            board[r*8+c] = color | type;
            c++;
        }
    }
    turn = parts[1] === 'w' ? COLOR_WHITE : COLOR_BLACK;
    castleRights = 0;
    if(parts[2].includes('K')) castleRights |= 1;
    if(parts[2].includes('Q')) castleRights |= 2;
    if(parts[2].includes('k')) castleRights |= 4;
    if(parts[2].includes('q')) castleRights |= 8;
    enPassant = parts[3] === '-' ? -1 : 
        (8 - parseInt(parts[3][1])) * 8 + (parts[3].charCodeAt(0) - 97);
    
    currentHash = getHash();
    historyPly = 0;
    positionHistory[historyPly++] = currentHash;
}

function evaluate() {
    let mg = 0, eg = 0, gamePhase = 0;
    for(let i=0; i<64; i++) {
        const p = board[i];
        if(!p) continue;
        const type = p & 7;
        const color = p & 24; 
        
        if (type === TYPE_KNIGHT || type === TYPE_BISHOP) gamePhase += 1;
        if (type === TYPE_ROOK) gamePhase += 2;
        if (type === TYPE_QUEEN) gamePhase += 4;
        
        let idx = i;
        if (color === COLOR_BLACK) idx = i ^ 56;
        
        let m = TABLES_MG[type][idx];
        let e = TABLES_EG[type][idx];
        
        if (type === TYPE_PAWN) { m += VAL_PAWN; e += VAL_PAWN; }
        else if (type === TYPE_KNIGHT) { m += VAL_KNIGHT; e += VAL_KNIGHT; }
        else if (type === TYPE_BISHOP) { m += VAL_BISHOP; e += VAL_BISHOP; }
        else if (type === TYPE_ROOK) { m += VAL_ROOK; e += VAL_ROOK; }
        else if (type === TYPE_QUEEN) { m += VAL_QUEEN; e += VAL_QUEEN; }
        
        if (color === COLOR_WHITE) { mg += m; eg += e; }
        else { mg -= m; eg -= e; }
    }
    const mgPhase = Math.min(24, gamePhase);
    const egPhase = 24 - mgPhase;
    let score = (mg * mgPhase + eg * egPhase) / 24;
    
    if (score > 15000) score = 15000;
    if (score < -15000) score = -15000;
    
    return turn === COLOR_WHITE ? score : -score;
}

function getSEE(move) {
    const piece = getPiece(move);
    const captured = getCaptured(move);
    let score = 0;
    if(captured) {
        const valMap = [0, 100, 320, 330, 500, 900, 20000];
        score = valMap[captured] - valMap[piece];
    }
    return score; 
}

function isAttacked(sq, byColor) {
    const pawnDir = byColor === COLOR_WHITE ? 8 : -8;
    const pawnRow = byColor === COLOR_WHITE ? (sq>>3)+1 : (sq>>3)-1;
    if(pawnRow>=0 && pawnRow<8) {
        const c = sq&7;
        if(c>0) { const idx = (pawnRow<<3)+(c-1); if((board[idx]&byColor) && (board[idx]&7)===TYPE_PAWN) return true; }
        if(c<7) { const idx = (pawnRow<<3)+(c+1); if((board[idx]&byColor) && (board[idx]&7)===TYPE_PAWN) return true; }
    }
    const kDirs = [-17,-15,-10,-6,6,10,15,17];
    for(let d of kDirs) {
        const t = sq+d;
        if(t>=0 && t<64 && Math.abs((t&7)-(sq&7))<=2) {
            if((board[t] & byColor) && (board[t]&7)===TYPE_KNIGHT) return true;
        }
    }
    const dirs = [-9, -7, 7, 9, -8, -1, 1, 8];
    for(let i=0; i<8; i++) {
        let d = dirs[i];
        let t = sq + d;
        while(t>=0 && t<64) {
             const c1 = (t-d)&7, c2 = t&7;
             if(Math.abs(c2-c1) > 1 && d !== 8 && d !== -8) break; 
             if(Math.abs(c2-c1) > 1 && (d===1 || d===-1)) break;
             const p = board[t];
             if(p) {
                 if(p & byColor) {
                     const type = p&7;
                     if(type === TYPE_QUEEN) return true;
                     if(i < 4 && type === TYPE_BISHOP) return true; 
                     if(i >= 4 && type === TYPE_ROOK) return true;
                 }
                 break;
             }
             t += d;
        }
    }
    return false;
}

function generateMoves(capsOnly) {
    const moves = [];
    const us = turn;
    const them = us === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
    for(let i=0; i<64; i++) {
        const p = board[i];
        if(!p || (p & us) === 0) continue;
        const type = p & 7;
        if(type === TYPE_PAWN) {
            const dir = us === COLOR_WHITE ? -8 : 8;
            const startR = us === COLOR_WHITE ? 6 : 1;
            const promR = us === COLOR_WHITE ? 0 : 7;
            const t = i + dir;
            if (!capsOnly && board[t] === 0) {
                if ((t >> 3) === promR) {
                     moves.push(createMove(i, t, type, 0, TYPE_QUEEN, 0));
                     moves.push(createMove(i, t, type, 0, TYPE_ROOK, 0));
                     moves.push(createMove(i, t, type, 0, TYPE_BISHOP, 0));
                     moves.push(createMove(i, t, type, 0, TYPE_KNIGHT, 0));
                } else {
                    moves.push(createMove(i, t, type, 0, 0, 0));
                    if ((i >> 3) === startR && board[i + dir*2] === 0) {
                        moves.push(createMove(i, i + dir*2, type, 0, 0, FLAG_DOUBLE));
                    }
                }
            }
            const caps = [i+dir-1, i+dir+1];
            for(let ct of caps) {
                if(ct < 0 || ct > 63) continue;
                if(Math.abs((ct&7) - (i&7)) > 1) continue; 
                const target = board[ct];
                if(target && (target & them)) {
                    if ((ct >> 3) === promR) {
                         moves.push(createMove(i, ct, type, target&7, TYPE_QUEEN, 0));
                         moves.push(createMove(i, ct, type, target&7, TYPE_ROOK, 0));
                         moves.push(createMove(i, ct, type, target&7, TYPE_BISHOP, 0));
                         moves.push(createMove(i, ct, type, target&7, TYPE_KNIGHT, 0));
                    } else {
                        moves.push(createMove(i, ct, type, target&7, 0, 0));
                    }
                }
                if(ct === enPassant) moves.push(createMove(i, ct, type, TYPE_PAWN, 0, FLAG_EP));
            }
        } else {
            let dirs = [];
            if(type === TYPE_KNIGHT) dirs = [-17,-15,-10,-6,6,10,15,17];
            else if(type === TYPE_BISHOP) dirs = [-9,-7,7,9];
            else if(type === TYPE_ROOK) dirs = [-8,-1,1,8];
            else if(type === TYPE_QUEEN || type === TYPE_KING) dirs = [-9,-8,-7,-1,1,7,8,9];
            const sliding = (type === TYPE_BISHOP || type === TYPE_ROOK || type === TYPE_QUEEN);
            for(let d of dirs) {
                let to = i + d;
                while(to >= 0 && to < 64) {
                    const c2 = to & 7, c1 = (to-d) & 7;
                    if(sliding || type === TYPE_KING) {
                        if (Math.abs(c2-c1) > 1 && d !== 8 && d !== -8) break; 
                    } else if (type === TYPE_KNIGHT) {
                        if (Math.abs(c2-c1) > 2) break; 
                    }
                    const target = board[to];
                    if(target === 0) {
                        if(!capsOnly) moves.push(createMove(i, to, type, 0, 0, 0));
                    } else {
                        if(target & them) moves.push(createMove(i, to, type, target&7, 0, 0));
                        break;
                    }
                    if(!sliding) break;
                    to += d;
                }
            }
            if(type === TYPE_KING && !capsOnly) {
                 if(us === COLOR_WHITE) {
                     if((castleRights & 1) && board[61]===0 && board[62]===0 && !isAttacked(60,them) && !isAttacked(61,them))
                        moves.push(createMove(60, 62, TYPE_KING, 0, 0, FLAG_CASTLE));
                     if((castleRights & 2) && board[59]===0 && board[58]===0 && board[57]===0 && !isAttacked(60,them) && !isAttacked(59,them))
                        moves.push(createMove(60, 58, TYPE_KING, 0, 0, FLAG_CASTLE));
                 } else {
                     if((castleRights & 4) && board[5]===0 && board[6]===0 && !isAttacked(4,them) && !isAttacked(5,them))
                        moves.push(createMove(4, 6, TYPE_KING, 0, 0, FLAG_CASTLE));
                     if((castleRights & 8) && board[3]===0 && board[2]===0 && board[1]===0 && !isAttacked(4,them) && !isAttacked(3,them))
                        moves.push(createMove(4, 2, TYPE_KING, 0, 0, FLAG_CASTLE));
                 }
            }
        }
    }
    return moves;
}

function makeMove(m) {
    const f = getFrom(m), t = getTo(m);
    const p = board[f], cap = board[t];
    const state = { ep: enPassant, cr: castleRights, cap: cap, hash: currentHash };
    currentHash ^= ZOBRIST[f * 32 + p];
    board[t] = p; board[f] = 0;
    if(cap) currentHash ^= ZOBRIST[t * 32 + cap];
    const prom = getProm(m);
    if(prom) {
        board[t] = (p & 24) | prom;
        currentHash ^= ZOBRIST[t * 32 + board[t]];
    } else {
        currentHash ^= ZOBRIST[t * 32 + p];
    }
    if(m & FLAG_EP) {
        const epSq = (p & COLOR_WHITE) ? t + 8 : t - 8;
        const epP = board[epSq];
        board[epSq] = 0;
        currentHash ^= ZOBRIST[epSq * 32 + epP];
    }
    currentHash ^= ZOBRIST_CASTLE[castleRights]; 
    if(m & FLAG_CASTLE) {
        if(t === 62) { 
            board[61]=board[63]; board[63]=0; 
            currentHash ^= ZOBRIST[63 * 32 + board[61]]; 
            currentHash ^= ZOBRIST[61 * 32 + board[61]]; 
        }
        else if(t === 58) { 
            board[59]=board[56]; board[56]=0; 
            currentHash ^= ZOBRIST[56 * 32 + board[59]];
            currentHash ^= ZOBRIST[59 * 32 + board[59]];
        }
        else if(t === 6) { 
            board[5]=board[7]; board[7]=0; 
            currentHash ^= ZOBRIST[7 * 32 + board[5]];
            currentHash ^= ZOBRIST[5 * 32 + board[5]];
        }
        else if(t === 2) { 
            board[3]=board[0]; board[0]=0; 
            currentHash ^= ZOBRIST[0 * 32 + board[3]];
            currentHash ^= ZOBRIST[3 * 32 + board[3]];
        }
    }
    if(p & 7 === TYPE_KING) { if(p & COLOR_WHITE) castleRights &= ~3; else castleRights &= ~12; }
    if(f===0 || t===0) castleRights &= ~8;
    if(f===7 || t===7) castleRights &= ~4;
    if(f===56 || t===56) castleRights &= ~2;
    if(f===63 || t===63) castleRights &= ~1;
    currentHash ^= ZOBRIST_CASTLE[castleRights]; 
    enPassant = (m & FLAG_DOUBLE) ? (f+t)/2 : -1;
    turn = (turn === COLOR_WHITE) ? COLOR_BLACK : COLOR_WHITE;
    currentHash ^= ZOBRIST_SIDE;
    positionHistory[historyPly++] = currentHash;
    return state;
}

function unmakeMove(m, state) {
    historyPly--;
    currentHash = state.hash;
    turn = (turn === COLOR_WHITE) ? COLOR_BLACK : COLOR_WHITE;
    enPassant = state.ep; castleRights = state.cr;
    const f = getFrom(m), t = getTo(m);
    const p = turn | getPiece(m);
    board[f] = p; board[t] = state.cap;
    if(m & FLAG_EP) { board[t] = 0; board[(turn === COLOR_WHITE) ? t + 8 : t - 8] = (turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE) | TYPE_PAWN; }
    if(m & FLAG_CASTLE) {
        if(t === 62) { board[63]=board[61]; board[61]=0; }
        else if(t === 58) { board[56]=board[59]; board[59]=0; }
        else if(t === 6) { board[7]=board[5]; board[5]=0; }
        else if(t === 2) { board[0]=board[3]; board[3]=0; }
    }
}

function orderMoves(moves, bestMove, ply) {
    moves.sort((a,b) => {
        if(bestMove && a === bestMove) return -100000;
        if(bestMove && b === bestMove) return 100000;
        const capA = getCaptured(a), capB = getCaptured(b);
        if(capA !== capB) return capB - capA; 
        if (ply < MAX_PLY) {
             if (killerMoves[ply * 2] === a) return 900;
             if (killerMoves[ply * 2 + 1] === a) return 800;
             if (killerMoves[ply * 2] === b) return -900;
             if (killerMoves[ply * 2 + 1] === b) return -800;
        }
        const ha = history[getFrom(a) * 64 + getTo(a)];
        const hb = history[getFrom(b) * 64 + getTo(b)];
        return hb - ha;
    });
}

function isRepetition() {
    for(let i = historyPly - 2; i >= 0; i--) {
        if(positionHistory[i] === currentHash) return true;
    }
    return false;
}

function storeTT(depth, score, flag, bestMove) {
    const idx = (currentHash >>> 0) % TT_SIZE;
    ttHash[idx] = currentHash;
    ttDepth[idx] = depth;
    ttScore[idx] = score;
    ttFlag[idx] = flag;
    if (bestMove) ttMove[idx] = bestMove;
}

function probeTT(depth, alpha, beta) {
    const idx = (currentHash >>> 0) % TT_SIZE;
    if (ttHash[idx] === currentHash) {
        if (ttDepth[idx] >= depth) {
             const score = ttScore[idx];
             if (ttFlag[idx] === TT_FLAG_EXACT) return { score };
             if (ttFlag[idx] === TT_FLAG_UPPER && score >= beta) return { score: beta };
             if (ttFlag[idx] === TT_FLAG_LOWER && score <= alpha) return { score: alpha };
        }
        return { move: ttMove[idx] };
    }
    return null;
}

function qsearch(alpha, beta) {
    if((nodes & 2047) === 0) {
        const now = Date.now();
        if(now > stopTime) throw "Timeout";
        if(now - lastReportTime > 5000) {
            // NOTE TO SELF: DO NOT REMOVE THIS LOGGING FEATURE. 
            // IT PROVIDES CRITICAL COUNTDOWN/TIMING INFO TO THE USER.
            const elapsed = now - startTime;
            const remaining = stopTime - now;
            log(\`Depth \${activeDepth} | \${nodes} nodes | \${(elapsed/1000).toFixed(1)}s elapsed | \${(remaining/1000).toFixed(1)}s left\`);

            self.postMessage({ type: 'progress', depth: activeDepth, score: bestScoreGlobal, nodes: nodes, bestMove: toUIMove(bestMoveGlobal), requestId: currentRequestId });
            lastReportTime = now;
        }
    }
    nodes++;
    const standPat = evaluate();
    if(standPat >= beta) return beta;
    if(alpha < standPat) alpha = standPat;
    const moves = generateMoves(true);
    orderMoves(moves, null, 0); 
    for(let m of moves) {
        if(getSEE(m) < 0) continue; 
        const state = makeMove(m);
        const us = turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
        const kSq = board.findIndex((x) => (x & us) && (x & 7) === TYPE_KING);
        if(isAttacked(kSq, turn)) { 
            unmakeMove(m, state);
            continue;
        }
        const score = -qsearch(-beta, -alpha);
        unmakeMove(m, state);
        if(score >= beta) return beta;
        if(score > alpha) alpha = score;
    }
    return alpha;
}

function alphabeta(depth, alpha, beta, ply) {
    if((nodes & 2047) === 0) {
        const now = Date.now();
        if(now > stopTime) throw "Timeout";
        if(now - lastReportTime > 5000) {
             // NOTE TO SELF: DO NOT REMOVE THIS LOGGING FEATURE. 
             // IT PROVIDES CRITICAL COUNTDOWN/TIMING INFO TO THE USER.
             const elapsed = now - startTime;
             const remaining = stopTime - now;
             log(\`Depth \${activeDepth} | \${nodes} nodes | \${(elapsed/1000).toFixed(1)}s elapsed | \${(remaining/1000).toFixed(1)}s left\`);

             self.postMessage({ type: 'progress', depth: activeDepth, score: bestScoreGlobal, nodes: nodes, bestMove: toUIMove(bestMoveGlobal), requestId: currentRequestId });
             lastReportTime = now;
        }
    }
    nodes++;
    if (ply > 0 && isRepetition()) return 0;
    const ttEntry = probeTT(depth, alpha, beta);
    if (ttEntry && ttEntry.score !== undefined && ply > 0) return ttEntry.score;
    let ttMoveHint = ttEntry ? ttEntry.move : 0;
    if (ply >= MAX_PLY) return evaluate();
    const mateScore = MATE_SCORE - ply;
    if (alpha < -mateScore) alpha = -mateScore;
    if (beta > mateScore - 1) beta = mateScore - 1;
    if (alpha >= beta) return alpha;
    const kSq = board.findIndex((x) => (x & turn) && (x & 7) === TYPE_KING);
    const inCheck = isAttacked(kSq, turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE);
    if(inCheck) depth++;
    if(depth <= 0) return qsearch(alpha, beta);
    
    const moves = generateMoves(false);
    orderMoves(moves, ttMoveHint, ply);
    
    let moveCount = 0;
    let bestScore = -30000;
    let bestMoveLocal = 0;
    let flag = TT_FLAG_LOWER; 
    
    for(let m of moves) {
        const state = makeMove(m);
        const us = turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
        const kSqAfter = board.findIndex((x) => (x & us) && (x & 7) === TYPE_KING);
        if(isAttacked(kSqAfter, turn)) { 
            unmakeMove(m, state);
            continue;
        }
        moveCount++;
        let score;
        if(moveCount === 1) {
            score = -alphabeta(depth - 1, -beta, -alpha, ply + 1);
        } else {
            let reduction = 0;
            if (depth >= 3 && moveCount > 4 && !getCaptured(m) && !inCheck) reduction = 1;
            score = -alphabeta(depth - 1 - reduction, -alpha - 1, -alpha, ply + 1);
            if(score > alpha && score < beta) {
                 score = -alphabeta(depth - 1, -beta, -alpha, ply + 1);
            }
        }
        unmakeMove(m, state);
        if(score > bestScore) {
            bestScore = score;
            bestMoveLocal = m;
            if(score > alpha) {
                alpha = score;
                flag = TT_FLAG_EXACT;
                if (!getCaptured(m)) {
                     history[getFrom(m) * 64 + getTo(m)] += depth * depth;
                     if (ply < MAX_PLY) {
                         if (killerMoves[ply * 2] !== m) {
                             killerMoves[ply * 2 + 1] = killerMoves[ply * 2];
                             killerMoves[ply * 2] = m;
                         }
                     }
                }
            }
        }
        if(alpha >= beta) {
            flag = TT_FLAG_UPPER; 
            break; 
        }
    }
    if(moveCount === 0) return inCheck ? -MATE_SCORE + ply : 0;
    storeTT(depth, bestScore, flag, bestMoveLocal);
    return bestScore;
}

function toUIMove(m) {
    if(!m) return null;
    let pChar = undefined;
    const prom = getProm(m);
    if(prom) {
        if(prom === TYPE_QUEEN) pChar = 'q';
        else if(prom === TYPE_ROOK) pChar = 'r';
        else if(prom === TYPE_BISHOP) pChar = 'b';
        else if(prom === TYPE_KNIGHT) pChar = 'n';
    }
    return {
        from: getFrom(m),
        to: getTo(m),
        promotion: pChar,
        flags: { isCastle: !!(m & FLAG_CASTLE), isEnPassant: !!(m & FLAG_EP) }
    };
}

self.onmessage = function(e) {
    const { fen, depth, timeLimit, requestId } = e.data;
    try {
        parseFen(fen);
        nodes = 0;
        startTime = Date.now();
        stopTime = startTime + timeLimit;
        lastReportTime = startTime;
        lastLogTime = startTime;
        currentRequestId = requestId;
        bestMoveGlobal = 0;
        bestScoreGlobal = 0;
        killerMoves.fill(0);
        history.fill(0);
        log(\`[ENGINE A] Classic Mode. Depth: \${depth}\`);
        for(let d=1; d<=depth; d++) {
            activeDepth = d;
            try {
                const moves = generateMoves(false);
                orderMoves(moves, bestMoveGlobal, 0); 
                let alpha = -30000, beta = 30000;
                let bestScore = -30000;
                let bestMoveLocal = 0;
                for(let m of moves) {
                    const state = makeMove(m);
                    const us = turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
                    const kSq = board.findIndex((x) => (x & us) && (x & 7) === TYPE_KING);
                    if(isAttacked(kSq, turn)) {
                        unmakeMove(m, state);
                        continue;
                    }
                    const score = -alphabeta(d-1, -beta, -alpha, 1);
                    unmakeMove(m, state);
                    if(score > bestScore) {
                        bestScore = score;
                        bestMoveLocal = m;
                        bestMoveGlobal = bestMoveLocal; 
                        bestScoreGlobal = bestScore;
                        if(score > alpha) alpha = score;
                        self.postMessage({
                             type: 'progress',
                             depth: d,
                             score: bestScore,
                             nodes: nodes,
                             bestMove: toUIMove(bestMoveLocal),
                             requestId
                        });
                    }
                }
                if(Date.now() > stopTime) throw "Timeout";
                if(bestMoveLocal !== 0) {
                    bestMoveGlobal = bestMoveLocal;
                    bestScoreGlobal = bestScore;
                }
                if(bestScore > 28000 || bestScore < -28000) break;
            } catch(timeout) {
                if (timeout === "Timeout") log(\`[TIMEOUT] Depth \${d}\`);
                break;
            }
        }
        self.postMessage({ type: 'done', bestMove: toUIMove(bestMoveGlobal), score: bestScoreGlobal, nodes: nodes, requestId });
    } catch(err) {
        log("ERROR: " + err.message);
        self.postMessage({ type: 'done', bestMove: toUIMove(bestMoveGlobal), score: bestScoreGlobal, nodes: nodes, requestId });
    }
}
`,cp=`
// [CONSTANTS AND TABLES are reused, but we add architecture specific constants]

const VAL_PAWN = 100;
const VAL_KNIGHT = 320;
const VAL_BISHOP = 330;
const VAL_ROOK = 500;
const VAL_QUEEN = 900;
const VAL_KING = 20000;
const MATE_SCORE = 29000; 
const MAX_PLY = 100; 

const COLOR_WHITE = 8;
const COLOR_BLACK = 16;
const TYPE_EMPTY = 0;
const TYPE_PAWN = 1;
const TYPE_KNIGHT = 2;
const TYPE_BISHOP = 3;
const TYPE_ROOK = 4;
const TYPE_QUEEN = 5;
const TYPE_KING = 6;

const MASK_FROM = 0x3F;
const MASK_TO = 0xFC0;
const SHIFT_TO = 6;
const MASK_PIECE = 0x7000;
const SHIFT_PIECE = 12;
const MASK_CAP = 0x38000;
const SHIFT_CAP = 15;
const MASK_PROM = 0x1C0000;
const SHIFT_PROM = 18;
const FLAG_CASTLE = 0x200000;
const FLAG_EP = 0x400000;
const FLAG_DOUBLE = 0x800000;

// Tables (PeSTO)
const MG_PAWN = [0,0,0,0,0,0,0,0,98,134,61,95,68,126,34,-11,-6,7,26,31,65,56,25,-20,-14,13,6,21,23,12,17,-23,-27,-2,-5,12,17,6,10,-25,-26,-4,-4,-10,3,3,33,-12,-35,-1,-20,-23,-15,24,38,-22,0,0,0,0,0,0,0,0];
const EG_PAWN = [0,0,0,0,0,0,0,0,178,173,158,134,147,132,165,187,94,100,85,67,56,53,82,84,32,24,13,5,-2,4,17,17,13,9,-3,-7,-7,-8,3,-1,4,7,-6,1,0,-5,-1,-8,13,8,8,10,13,0,2,-7,0,0,0,0,0,0,0,0];
const MG_KNIGHT = [-167,-89,-34,-49,61,-97,-15,-107,-73,-41,72,36,23,62,7,-17,-47,60,37,65,84,129,73,44,-9,17,19,53,37,69,18,22,-13,4,16,13,28,19,21,-8,-23,-9,12,10,19,17,25,-16,-29,-53,-12,-3,-1,18,-14,-19,-105,-21,-58,-33,-17,-28,-19,-23];
const EG_KNIGHT = [-58,-38,-13,-28,-31,-27,-63,-99,-25,-8,-25,-2,-9,-25,-24,-52,-24,-20,10,9,-1,-9,-19,-41,-17,3,22,22,22,11,8,-18,-18,-6,16,25,16,17,4,-18,-23,-3,-1,15,10,-3,-20,-22,-42,-20,-10,-5,-2,-20,-23,-44,-29,-51,-23,-15,-22,-18,-50,-64];
const MG_BISHOP = [-29,4,-82,-37,-25,-42,7,-8,-26,16,-18,-13,30,59,18,-47,-16,37,43,40,35,50,37,-2,-4,5,19,50,37,37,7,-2,-6,13,13,26,34,12,10,4,0,15,15,15,14,27,18,10,4,15,16,0,7,21,33,1,-33,-3,-14,-21,-13,-12,-39,-21];
const EG_BISHOP = [-14,-21,-11,-8,-7,-9,-17,-24,-8,-4,7,-12,-3,-13,-4,-14,2,-8,0,-1,-2,6,0,4,-3,9,12,9,14,10,3,2,-6,3,13,19,7,10,-3,-9,-12,-3,5,10,13,3,-7,-15,-14,-18,-7,-1,4,-9,-15,-27,-23,-9,-23,-5,-9,-16,-5,-17];
const MG_ROOK = [32,42,32,51,63,9,31,43,27,32,58,62,80,67,26,44,-5,19,26,36,17,45,61,16,-24,-11,7,26,24,35,-8,-20,-36,-26,-12,-1,9,-7,6,-23,-45,-25,-16,-17,3,0,-5,-33,-44,-16,-20,-9,-1,11,-6,-71,-19,-13,1,17,16,7,-37,-26];
const EG_ROOK = [13,10,18,15,12,12,8,5,11,13,13,11,-3,3,8,3,7,7,7,5,4,-3,-5,-3,4,3,13,1,2,1,-1,2,3,5,8,4,-5,-6,-8,-11,-4,0,-5,-1,-7,-12,-8,-16,-18,-20,-7,-13,-13,-23,-15,-25,-14,-25,-12,-25,-27,-25,-27,-25];
const MG_QUEEN = [-28,0,29,12,59,44,43,45,-24,-39,-5,1,-16,57,28,54,-13,-17,7,8,29,56,47,57,-27,-27,-16,-16,-1,17,-2,1,-9,-26,-9,-10,-2,-4,3,-3,-14,2,-11,-2,-5,2,14,5,-35,-8,11,2,8,15,-3,1,-1,-18,-9,10,-15,-25,-31,-50];
const EG_QUEEN = [-9,22,22,27,27,19,10,20,-17,20,32,41,58,25,30,0,-20,6,9,49,47,35,19,9,3,22,24,45,57,40,57,36,-18,28,19,47,31,34,39,23,-16,-27,15,6,9,17,10,5,-22,-23,-30,-16,-16,-23,-36,-32,-33,-28,-22,-43,-5,-32,-20,-41];
const MG_KING = [-65,23,16,-15,-56,-34,2,13,29,-1,-20,-7,-8,-4,-38,-29,-9,24,2,-16,-20,6,22,-22,-17,-20,-12,-27,-30,-25,-14,-36,-49,-1,-27,-39,-46,-44,-33,-51,-14,-14,-22,-46,-44,-30,-15,-27,1,7,-8,-64,-43,-16,9,8,-15,36,12,-54,8,-28,24,14];
const EG_KING = [-74,-35,-18,-18,-11,15,4,-17,-12,17,14,17,17,38,23,11,10,17,23,15,20,45,44,13,-8,22,24,27,26,33,26,3,-18,-4,21,24,27,23,9,-11,-19,-3,11,21,23,16,7,-9,-27,-11,4,13,14,4,-5,-17,-53,-34,-21,-11,-28,-14,-24,-43];

const TABLES_MG = [[],MG_PAWN,MG_KNIGHT,MG_BISHOP,MG_ROOK,MG_QUEEN,MG_KING];
const TABLES_EG = [[],EG_PAWN,EG_KNIGHT,EG_BISHOP,EG_ROOK,EG_QUEEN,EG_KING];

const TT_SIZE = 1 << 20; 
const TT_FLAG_EXACT = 0;
const TT_FLAG_LOWER = 1; 
const TT_FLAG_UPPER = 2; 

const ZOBRIST = new Int32Array(64 * 32);
const ZOBRIST_CASTLE = new Int32Array(16);
const ZOBRIST_SIDE = 0x12345678;

for(let i=0; i<ZOBRIST.length; i++) ZOBRIST[i] = (Math.random() * 0xFFFFFFFF) | 0;
for(let i=0; i<ZOBRIST_CASTLE.length; i++) ZOBRIST_CASTLE[i] = (Math.random() * 0xFFFFFFFF) | 0;

let board = new Int8Array(64); 
let turn = COLOR_WHITE;
let castleRights = 0; 
let enPassant = -1;
let currentHash = 0;
let positionHistory = new Int32Array(MAX_PLY + 50);
let historyPly = 0;

let nodes = 0;
let stopTime = 0;
let startTime = 0;
let lastReportTime = 0;

let killerMoves = new Int32Array(MAX_PLY * 2); 
let history = new Int32Array(64 * 64); 

let bestMoveGlobal = 0;
let bestScoreGlobal = 0;
let currentRequestId = 0;
let activeDepth = 0;

const ttHash = new Int32Array(TT_SIZE);
const ttDepth = new Int8Array(TT_SIZE);
const ttFlag = new Int8Array(TT_SIZE);
const ttScore = new Int16Array(TT_SIZE);
const ttMove = new Int32Array(TT_SIZE);

// --- NNUE ARCHITECTURE START ---
// 768 Inputs (64sq * 12pc) -> 16 Hidden -> 1 Output
// Since we can't load a 20MB file, we use "Procedural Weights" derived from PeSTO to initialize,
// but we run the *Architecture* of NNUE (Accumulators).
// This makes it a "Neural-style" engine that could theoretically accept a .nnue file.

const HIDDEN_SIZE = 32;
// Accumulators for [WhitePerspective, BlackPerspective]
// We maintain them incrementally.
let accumulator = new Int16Array(HIDDEN_SIZE * 2); 
// Weights (Simulated)
const inputWeights = new Int16Array(768 * HIDDEN_SIZE);
const outputWeights = new Int16Array(HIDDEN_SIZE * 2);

// Initialize "Weights" procedurally to approximate PeSTO (so it plays chess!)
function initNeuralWeights() {
    // This is a "fake" training step. In a real NNUE, these would be loaded from a file.
    // We map PST values into the input weights so the neural net "knows" chess rules.
    for(let pt=1; pt<=6; pt++) {
        for(let sq=0; sq<64; sq++) {
             // Simple mapping: 1st neuron = Material, 2nd = Positional, etc.
             // We just distribute the PeSTO value across the hidden layer to verify architecture.
             const mg = TABLES_MG[pt][sq] + [0, 100, 320, 330, 500, 900, 20000][pt];
             for(let h=0; h<HIDDEN_SIZE; h++) {
                 // Distribute value with some noise to simulate "features"
                 const noise = (h % 3 === 0) ? 1 : 0;
                 const idxW = ((pt-1)*64 + sq) * HIDDEN_SIZE + h;
                 const idxB = (((pt-1)+6)*64 + (sq^56)) * HIDDEN_SIZE + h;
                 const val = (mg / HIDDEN_SIZE) + noise;
                 inputWeights[idxW] = val; 
                 inputWeights[idxB] = -val; // FIX: Negate black weights so sum is score diff
             }
        }
    }
    for(let h=0; h<HIDDEN_SIZE*2; h++) outputWeights[h] = 1; // Summation
}
initNeuralWeights();

function refreshAccumulator() {
    accumulator.fill(0);
    // Recompute from scratch (slow, used only on fresh search or error)
    for(let i=0; i<64; i++) {
        const p = board[i];
        if(p) {
            const type = (p & 7) - 1;
            const colorOffset = (p & COLOR_WHITE) ? 0 : 6;
            const featIdx = (type + colorOffset) * 64 + i;
            
            for(let h=0; h<HIDDEN_SIZE; h++) {
                accumulator[h] += inputWeights[featIdx * HIDDEN_SIZE + h];
                // For black perspective, we flip logic usually, but simplified here:
                accumulator[HIDDEN_SIZE + h] += inputWeights[featIdx * HIDDEN_SIZE + h]; 
            }
        }
    }
}
// --- NNUE ARCHITECTURE END ---


function log(msg) { self.postMessage({ type: 'log', message: msg, requestId: currentRequestId }); }

function createMove(f, t, p, cap, prom, flags) {
    return f | (t << SHIFT_TO) | (p << SHIFT_PIECE) | (cap << SHIFT_CAP) | (prom << SHIFT_PROM) | flags;
}
function getFrom(m) { return m & MASK_FROM; }
function getTo(m) { return (m & MASK_TO) >> SHIFT_TO; }
function getPiece(m) { return (m & MASK_PIECE) >> SHIFT_PIECE; }
function getCaptured(m) { return (m & MASK_CAP) >> SHIFT_CAP; }
function getProm(m) { return (m & MASK_PROM) >> SHIFT_PROM; }

function getHash() {
    let h = 0;
    for(let i=0; i<64; i++) {
        const p = board[i];
        if(p) h ^= ZOBRIST[i * 32 + p];
    }
    if(turn === COLOR_BLACK) h ^= ZOBRIST_SIDE;
    h ^= ZOBRIST_CASTLE[castleRights];
    return h;
}

function parseFen(fen) {
    board.fill(TYPE_EMPTY);
    const parts = fen.split(' ');
    let r=0, c=0;
    for(const char of parts[0]) {
        if(char === '/') { r++; c=0; }
        else if(char >= '1' && char <= '8') { c += parseInt(char); }
        else {
            const color = (char === char.toUpperCase()) ? COLOR_WHITE : COLOR_BLACK;
            const typeChar = char.toLowerCase();
            const type = {p:1, n:2, b:3, r:4, q:5, k:6}[typeChar];
            board[r*8+c] = color | type;
            c++;
        }
    }
    turn = parts[1] === 'w' ? COLOR_WHITE : COLOR_BLACK;
    castleRights = 0;
    if(parts[2].includes('K')) castleRights |= 1;
    if(parts[2].includes('Q')) castleRights |= 2;
    if(parts[2].includes('k')) castleRights |= 4;
    if(parts[2].includes('q')) castleRights |= 8;
    enPassant = parts[3] === '-' ? -1 : 
        (8 - parseInt(parts[3][1])) * 8 + (parts[3].charCodeAt(0) - 97);
    
    currentHash = getHash();
    historyPly = 0;
    positionHistory[historyPly++] = currentHash;
    refreshAccumulator(); // Init NNUE state
}

// NNUE EVALUATION (Simulated)
function evaluateNNUE() {
    // Run the hidden layer -> output
    let score = 0;
    // Linear Activation (Removed ReLU for this simulation to allow negative scores)
    for(let h=0; h<HIDDEN_SIZE; h++) {
        const val = accumulator[h]; // White perspective
        score += val * outputWeights[h];
    }
    
    // Safety Clipping to prevent false mate detection
    if (score > 15000) score = 15000;
    if (score < -15000) score = -15000;
    
    return turn === COLOR_WHITE ? score : -score;
}

function getSEE(move) {
    const piece = getPiece(move);
    const captured = getCaptured(move);
    let score = 0;
    if(captured) {
        const valMap = [0, 100, 320, 330, 500, 900, 20000];
        score = valMap[captured] - valMap[piece];
    }
    return score; 
}

function isAttacked(sq, byColor) {
    // [Same as Engine A]
    const pawnDir = byColor === COLOR_WHITE ? 8 : -8;
    const pawnRow = byColor === COLOR_WHITE ? (sq>>3)+1 : (sq>>3)-1;
    if(pawnRow>=0 && pawnRow<8) {
        const c = sq&7;
        if(c>0) { const idx = (pawnRow<<3)+(c-1); if((board[idx]&byColor) && (board[idx]&7)===TYPE_PAWN) return true; }
        if(c<7) { const idx = (pawnRow<<3)+(c+1); if((board[idx]&byColor) && (board[idx]&7)===TYPE_PAWN) return true; }
    }
    const kDirs = [-17,-15,-10,-6,6,10,15,17];
    for(let d of kDirs) {
        const t = sq+d;
        if(t>=0 && t<64 && Math.abs((t&7)-(sq&7))<=2) {
            if((board[t] & byColor) && (board[t]&7)===TYPE_KNIGHT) return true;
        }
    }
    const dirs = [-9, -7, 7, 9, -8, -1, 1, 8];
    for(let i=0; i<8; i++) {
        let d = dirs[i];
        let t = sq + d;
        while(t>=0 && t<64) {
             const c1 = (t-d)&7, c2 = t&7;
             if(Math.abs(c2-c1) > 1 && d !== 8 && d !== -8) break; 
             if(Math.abs(c2-c1) > 1 && (d===1 || d===-1)) break;
             const p = board[t];
             if(p) {
                 if(p & byColor) {
                     const type = p&7;
                     if(type === TYPE_QUEEN) return true;
                     if(i < 4 && type === TYPE_BISHOP) return true; 
                     if(i >= 4 && type === TYPE_ROOK) return true;
                 }
                 break;
             }
             t += d;
        }
    }
    return false;
}

function generateMoves(capsOnly) {
    // [Same as Engine A]
    const moves = [];
    const us = turn;
    const them = us === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
    for(let i=0; i<64; i++) {
        const p = board[i];
        if(!p || (p & us) === 0) continue;
        const type = p & 7;
        if(type === TYPE_PAWN) {
            const dir = us === COLOR_WHITE ? -8 : 8;
            const startR = us === COLOR_WHITE ? 6 : 1;
            const promR = us === COLOR_WHITE ? 0 : 7;
            const t = i + dir;
            if (!capsOnly && board[t] === 0) {
                if ((t >> 3) === promR) {
                     moves.push(createMove(i, t, type, 0, TYPE_QUEEN, 0));
                     moves.push(createMove(i, t, type, 0, TYPE_ROOK, 0));
                     moves.push(createMove(i, t, type, 0, TYPE_BISHOP, 0));
                     moves.push(createMove(i, t, type, 0, TYPE_KNIGHT, 0));
                } else {
                    moves.push(createMove(i, t, type, 0, 0, 0));
                    if ((i >> 3) === startR && board[i + dir*2] === 0) {
                        moves.push(createMove(i, i + dir*2, type, 0, 0, FLAG_DOUBLE));
                    }
                }
            }
            const caps = [i+dir-1, i+dir+1];
            for(let ct of caps) {
                if(ct < 0 || ct > 63) continue;
                if(Math.abs((ct&7) - (i&7)) > 1) continue; 
                const target = board[ct];
                if(target && (target & them)) {
                    if ((ct >> 3) === promR) {
                         moves.push(createMove(i, ct, type, target&7, TYPE_QUEEN, 0));
                         moves.push(createMove(i, ct, type, target&7, TYPE_ROOK, 0));
                         moves.push(createMove(i, ct, type, target&7, TYPE_BISHOP, 0));
                         moves.push(createMove(i, ct, type, target&7, TYPE_KNIGHT, 0));
                    } else {
                        moves.push(createMove(i, ct, type, target&7, 0, 0));
                    }
                }
                if(ct === enPassant) moves.push(createMove(i, ct, type, TYPE_PAWN, 0, FLAG_EP));
            }
        } else {
            let dirs = [];
            if(type === TYPE_KNIGHT) dirs = [-17,-15,-10,-6,6,10,15,17];
            else if(type === TYPE_BISHOP) dirs = [-9,-7,7,9];
            else if(type === TYPE_ROOK) dirs = [-8,-1,1,8];
            else if(type === TYPE_QUEEN || type === TYPE_KING) dirs = [-9,-8,-7,-1,1,7,8,9];
            const sliding = (type === TYPE_BISHOP || type === TYPE_ROOK || type === TYPE_QUEEN);
            for(let d of dirs) {
                let to = i + d;
                while(to >= 0 && to < 64) {
                    const c2 = to & 7, c1 = (to-d) & 7;
                    if(sliding || type === TYPE_KING) {
                        if (Math.abs(c2-c1) > 1 && d !== 8 && d !== -8) break; 
                    } else if (type === TYPE_KNIGHT) {
                        if (Math.abs(c2-c1) > 2) break; 
                    }
                    const target = board[to];
                    if(target === 0) {
                        if(!capsOnly) moves.push(createMove(i, to, type, 0, 0, 0));
                    } else {
                        if(target & them) moves.push(createMove(i, to, type, target&7, 0, 0));
                        break;
                    }
                    if(!sliding) break;
                    to += d;
                }
            }
            if(type === TYPE_KING && !capsOnly) {
                 if(us === COLOR_WHITE) {
                     if((castleRights & 1) && board[61]===0 && board[62]===0 && !isAttacked(60,them) && !isAttacked(61,them))
                        moves.push(createMove(60, 62, TYPE_KING, 0, 0, FLAG_CASTLE));
                     if((castleRights & 2) && board[59]===0 && board[58]===0 && board[57]===0 && !isAttacked(60,them) && !isAttacked(59,them))
                        moves.push(createMove(60, 58, TYPE_KING, 0, 0, FLAG_CASTLE));
                 } else {
                     if((castleRights & 4) && board[5]===0 && board[6]===0 && !isAttacked(4,them) && !isAttacked(5,them))
                        moves.push(createMove(4, 6, TYPE_KING, 0, 0, FLAG_CASTLE));
                     if((castleRights & 8) && board[3]===0 && board[2]===0 && board[1]===0 && !isAttacked(4,them) && !isAttacked(3,them))
                        moves.push(createMove(4, 2, TYPE_KING, 0, 0, FLAG_CASTLE));
                 }
            }
        }
    }
    return moves;
}

function makeMove(m) {
    const f = getFrom(m), t = getTo(m);
    const p = board[f], cap = board[t];
    const state = { ep: enPassant, cr: castleRights, cap: cap, hash: currentHash };
    
    // NNUE Incremental Update (Simplified: Full Refresh for this demo to save logic size,
    // in real engine we use sub/add ops on accumulator)
    // We assume the refresh is fast enough for this small layer.
    
    currentHash ^= ZOBRIST[f * 32 + p];
    board[t] = p; board[f] = 0;
    if(cap) currentHash ^= ZOBRIST[t * 32 + cap];
    const prom = getProm(m);
    if(prom) {
        board[t] = (p & 24) | prom;
        currentHash ^= ZOBRIST[t * 32 + board[t]];
    } else {
        currentHash ^= ZOBRIST[t * 32 + p];
    }
    if(m & FLAG_EP) {
        const epSq = (p & COLOR_WHITE) ? t + 8 : t - 8;
        const epP = board[epSq];
        board[epSq] = 0;
        currentHash ^= ZOBRIST[epSq * 32 + epP];
    }
    currentHash ^= ZOBRIST_CASTLE[castleRights]; 
    if(m & FLAG_CASTLE) {
        if(t === 62) { board[61]=board[63]; board[63]=0; currentHash ^= ZOBRIST[63*32+board[61]]; currentHash ^= ZOBRIST[61*32+board[61]]; }
        else if(t === 58) { board[59]=board[56]; board[56]=0; currentHash ^= ZOBRIST[56*32+board[59]]; currentHash ^= ZOBRIST[59*32+board[59]]; }
        else if(t === 6) { board[5]=board[7]; board[7]=0; currentHash ^= ZOBRIST[7*32+board[5]]; currentHash ^= ZOBRIST[5*32+board[5]]; }
        else if(t === 2) { board[3]=board[0]; board[0]=0; currentHash ^= ZOBRIST[0*32+board[3]]; currentHash ^= ZOBRIST[3*32+board[3]]; }
    }
    if(p & 7 === TYPE_KING) { if(p & COLOR_WHITE) castleRights &= ~3; else castleRights &= ~12; }
    if(f===0 || t===0) castleRights &= ~8;
    if(f===7 || t===7) castleRights &= ~4;
    if(f===56 || t===56) castleRights &= ~2;
    if(f===63 || t===63) castleRights &= ~1;
    currentHash ^= ZOBRIST_CASTLE[castleRights]; 
    enPassant = (m & FLAG_DOUBLE) ? (f+t)/2 : -1;
    turn = (turn === COLOR_WHITE) ? COLOR_BLACK : COLOR_WHITE;
    currentHash ^= ZOBRIST_SIDE;
    positionHistory[historyPly++] = currentHash;
    
    // UPDATE NNUE
    refreshAccumulator(); 

    return state;
}

function unmakeMove(m, state) {
    historyPly--;
    currentHash = state.hash;
    turn = (turn === COLOR_WHITE) ? COLOR_BLACK : COLOR_WHITE;
    enPassant = state.ep; castleRights = state.cr;
    const f = getFrom(m), t = getTo(m);
    const p = turn | getPiece(m);
    board[f] = p; board[t] = state.cap;
    if(m & FLAG_EP) { board[t] = 0; board[(turn === COLOR_WHITE) ? t + 8 : t - 8] = (turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE) | TYPE_PAWN; }
    if(m & FLAG_CASTLE) {
        if(t === 62) { board[63]=board[61]; board[61]=0; }
        else if(t === 58) { board[56]=board[59]; board[59]=0; }
        else if(t === 6) { board[7]=board[5]; board[5]=0; }
        else if(t === 2) { board[0]=board[3]; board[3]=0; }
    }
    // UPDATE NNUE
    refreshAccumulator(); 
}

// NULL MOVE HELPERS (Engine B Exclusive)
function makeNullMove() {
    const state = { ep: enPassant, hash: currentHash };
    enPassant = -1;
    turn = (turn === COLOR_WHITE) ? COLOR_BLACK : COLOR_WHITE;
    currentHash ^= ZOBRIST_SIDE;
    positionHistory[historyPly++] = currentHash;
    // No board change, accumulator stays same
    return state;
}

function unmakeNullMove(state) {
    historyPly--;
    currentHash = state.hash;
    turn = (turn === COLOR_WHITE) ? COLOR_BLACK : COLOR_WHITE;
    enPassant = state.ep;
}

function orderMoves(moves, bestMove, ply) {
    moves.sort((a,b) => {
        if(bestMove && a === bestMove) return -100000;
        if(bestMove && b === bestMove) return 100000;
        const capA = getCaptured(a), capB = getCaptured(b);
        if(capA !== capB) return capB - capA; 
        if (ply < MAX_PLY) {
             if (killerMoves[ply * 2] === a) return 900;
             if (killerMoves[ply * 2 + 1] === a) return 800;
        }
        const ha = history[getFrom(a) * 64 + getTo(a)];
        const hb = history[getFrom(b) * 64 + getTo(b)];
        return hb - ha;
    });
}

function isRepetition() {
    for(let i = historyPly - 2; i >= 0; i--) {
        if(positionHistory[i] === currentHash) return true;
    }
    return false;
}

function storeTT(depth, score, flag, bestMove) {
    const idx = (currentHash >>> 0) % TT_SIZE;
    ttHash[idx] = currentHash;
    ttDepth[idx] = depth;
    ttScore[idx] = score;
    ttFlag[idx] = flag;
    if (bestMove) ttMove[idx] = bestMove;
}

function probeTT(depth, alpha, beta) {
    const idx = (currentHash >>> 0) % TT_SIZE;
    if (ttHash[idx] === currentHash) {
        if (ttDepth[idx] >= depth) {
             const score = ttScore[idx];
             if (ttFlag[idx] === TT_FLAG_EXACT) return { score };
             if (ttFlag[idx] === TT_FLAG_UPPER && score >= beta) return { score: beta };
             if (ttFlag[idx] === TT_FLAG_LOWER && score <= alpha) return { score: alpha };
        }
        return { move: ttMove[idx] };
    }
    return null;
}

function qsearch(alpha, beta) {
    if((nodes & 2047) === 0) {
        const now = Date.now();
        if(now > stopTime) throw "Timeout";
        if(now - lastReportTime > 5000) {
            // NOTE TO SELF: DO NOT REMOVE THIS LOGGING FEATURE. 
            // IT PROVIDES CRITICAL COUNTDOWN/TIMING INFO TO THE USER.
            const elapsed = now - startTime;
            const remaining = stopTime - now;
            log(\`Depth \${activeDepth} | \${nodes} nodes | \${(elapsed/1000).toFixed(1)}s elapsed | \${(remaining/1000).toFixed(1)}s left\`);

            self.postMessage({ type: 'progress', depth: activeDepth, score: bestScoreGlobal, nodes: nodes, bestMove: toUIMove(bestMoveGlobal), requestId: currentRequestId });
            lastReportTime = now;
        }
    }
    nodes++;
    const standPat = evaluateNNUE();
    if(standPat >= beta) return beta;
    if(alpha < standPat) alpha = standPat;
    const moves = generateMoves(true);
    orderMoves(moves, null, 0); 
    for(let m of moves) {
        if(getSEE(m) < 0) continue; 
        const state = makeMove(m);
        const us = turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
        const kSq = board.findIndex((x) => (x & us) && (x & 7) === TYPE_KING);
        if(isAttacked(kSq, turn)) { 
            unmakeMove(m, state);
            continue;
        }
        const score = -qsearch(-beta, -alpha);
        unmakeMove(m, state);
        if(score >= beta) return beta;
        if(score > alpha) alpha = score;
    }
    return alpha;
}

function alphabeta(depth, alpha, beta, ply) {
    if((nodes & 2047) === 0) {
        const now = Date.now();
        if(now > stopTime) throw "Timeout";
        if(now - lastReportTime > 5000) {
             // NOTE TO SELF: DO NOT REMOVE THIS LOGGING FEATURE. 
             // IT PROVIDES CRITICAL COUNTDOWN/TIMING INFO TO THE USER.
             const elapsed = now - startTime;
             const remaining = stopTime - now;
             log(\`Depth \${activeDepth} | \${nodes} nodes | \${(elapsed/1000).toFixed(1)}s elapsed | \${(remaining/1000).toFixed(1)}s left\`);

             self.postMessage({ type: 'progress', depth: activeDepth, score: bestScoreGlobal, nodes: nodes, bestMove: toUIMove(bestMoveGlobal), requestId: currentRequestId });
             lastReportTime = now;
        }
    }
    nodes++;
    if (ply > 0 && isRepetition()) return 0;
    const ttEntry = probeTT(depth, alpha, beta);
    if (ttEntry && ttEntry.score !== undefined && ply > 0) return ttEntry.score;
    let ttMoveHint = ttEntry ? ttEntry.move : 0;
    
    // Futility Pruning (Engine B Feature)
    if (depth <= 4 && !ttMoveHint && ply > 0 && Math.abs(beta) < 20000) {
         const staticEval = evaluateNNUE();
         // Margin: 150 * depth
         if (staticEval - 150 * depth >= beta) return beta;
    }

    if (ply >= MAX_PLY) return evaluateNNUE();
    const mateScore = MATE_SCORE - ply;
    if (alpha < -mateScore) alpha = -mateScore;
    if (beta > mateScore - 1) beta = mateScore - 1;
    if (alpha >= beta) return alpha;
    const kSq = board.findIndex((x) => (x & turn) && (x & 7) === TYPE_KING);
    const inCheck = isAttacked(kSq, turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE);
    if(inCheck) depth++;

    // NULL MOVE PRUNING (Engine B Exclusive)
    // If not in check, and depth is high enough, and we have pieces (not just kings/pawns - simplified here), try passing
    // If passing yields a cutoff (beta), then our position is likely so good we don't need to search moves.
    if (!inCheck && depth >= 3 && ply > 0) {
         const R = 2;
         const nmState = makeNullMove();
         const score = -alphabeta(depth - 1 - R, -beta, -beta + 1, ply + 1);
         unmakeNullMove(nmState);
         if (score >= beta) return beta;
    }
    
    if(depth <= 0) return qsearch(alpha, beta);
    
    const moves = generateMoves(false);
    orderMoves(moves, ttMoveHint, ply);
    
    let moveCount = 0;
    let bestScore = -30000;
    let bestMoveLocal = 0;
    let flag = TT_FLAG_LOWER; 
    
    for(let m of moves) {
        const state = makeMove(m);
        const us = turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
        const kSqAfter = board.findIndex((x) => (x & us) && (x & 7) === TYPE_KING);
        if(isAttacked(kSqAfter, turn)) { 
            unmakeMove(m, state);
            continue;
        }
        moveCount++;
        let score;
        if(moveCount === 1) {
            score = -alphabeta(depth - 1, -beta, -alpha, ply + 1);
        } else {
            let reduction = 0;
            // More aggressive LMR for Engine B
            if (depth >= 3 && moveCount > 4 && !getCaptured(m) && !inCheck) reduction = 2; // Was 1 in Engine A
            
            score = -alphabeta(depth - 1 - reduction, -alpha - 1, -alpha, ply + 1);
            if(score > alpha && score < beta) {
                 score = -alphabeta(depth - 1, -beta, -alpha, ply + 1);
            }
        }
        unmakeMove(m, state);
        if(score > bestScore) {
            bestScore = score;
            bestMoveLocal = m;
            if(score > alpha) {
                alpha = score;
                flag = TT_FLAG_EXACT;
                if (!getCaptured(m)) {
                     history[getFrom(m) * 64 + getTo(m)] += depth * depth;
                     if (ply < MAX_PLY) {
                         if (killerMoves[ply * 2] !== m) {
                             killerMoves[ply * 2 + 1] = killerMoves[ply * 2];
                             killerMoves[ply * 2] = m;
                         }
                     }
                }
            }
        }
        if(alpha >= beta) {
            flag = TT_FLAG_UPPER; 
            break; 
        }
    }
    if(moveCount === 0) return inCheck ? -MATE_SCORE + ply : 0;
    storeTT(depth, bestScore, flag, bestMoveLocal);
    return bestScore;
}

function toUIMove(m) {
    if(!m) return null;
    let pChar = undefined;
    const prom = getProm(m);
    if(prom) {
        if(prom === TYPE_QUEEN) pChar = 'q';
        else if(prom === TYPE_ROOK) pChar = 'r';
        else if(prom === TYPE_BISHOP) pChar = 'b';
        else if(prom === TYPE_KNIGHT) pChar = 'n';
    }
    return {
        from: getFrom(m),
        to: getTo(m),
        promotion: pChar,
        flags: { isCastle: !!(m & FLAG_CASTLE), isEnPassant: !!(m & FLAG_EP) }
    };
}

self.onmessage = function(e) {
    const { fen, depth, timeLimit, requestId } = e.data;
    try {
        parseFen(fen);
        nodes = 0;
        startTime = Date.now();
        stopTime = startTime + timeLimit;
        lastReportTime = startTime;
        lastLogTime = startTime;
        currentRequestId = requestId;
        bestMoveGlobal = 0;
        bestScoreGlobal = 0;
        killerMoves.fill(0);
        history.fill(0);
        log(\`[ENGINE B] Neural + Tactician. Depth: \${depth}\`);
        for(let d=1; d<=depth; d++) {
            activeDepth = d;
            try {
                const moves = generateMoves(false);
                orderMoves(moves, bestMoveGlobal, 0); 
                let alpha = -30000, beta = 30000;
                let bestScore = -30000;
                let bestMoveLocal = 0;
                for(let m of moves) {
                    const state = makeMove(m);
                    const us = turn === COLOR_WHITE ? COLOR_BLACK : COLOR_WHITE;
                    const kSq = board.findIndex((x) => (x & us) && (x & 7) === TYPE_KING);
                    if(isAttacked(kSq, turn)) {
                        unmakeMove(m, state);
                        continue;
                    }
                    const score = -alphabeta(d-1, -beta, -alpha, 1);
                    unmakeMove(m, state);
                    if(score > bestScore) {
                        bestScore = score;
                        bestMoveLocal = m;
                        bestMoveGlobal = bestMoveLocal;
                        bestScoreGlobal = bestScore;
                        if(score > alpha) alpha = score;
                        self.postMessage({
                             type: 'progress',
                             depth: d,
                             score: bestScore,
                             nodes: nodes,
                             bestMove: toUIMove(bestMoveLocal),
                             requestId
                        });
                    }
                }
                if(Date.now() > stopTime) throw "Timeout";
                if(bestMoveLocal !== 0) {
                    bestMoveGlobal = bestMoveLocal;
                    bestScoreGlobal = bestScore;
                }
                if(bestScore > 28000 || bestScore < -28000) break;
            } catch(timeout) {
                if (timeout === "Timeout") log(\`[TIMEOUT] Depth \${d}\`);
                break;
            }
        }
        self.postMessage({ type: 'done', bestMove: toUIMove(bestMoveGlobal), score: bestScoreGlobal, nodes: nodes, requestId });
    } catch(err) {
        log("ERROR: " + err.message);
        self.postMessage({ type: 'done', bestMove: toUIMove(bestMoveGlobal), score: bestScoreGlobal, nodes: nodes, requestId });
    }
}
`,su=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,n=t.currentTime,r=t.createOscillator(),o=t.createGain();r.connect(o),o.connect(t.destination),r.type="sine",r.frequency.setValueAtTime(660,n),r.frequency.exponentialRampToValueAtTime(880,n+.1),o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(.15,n+.05),o.gain.exponentialRampToValueAtTime(1e-4,n+2),r.start(n),r.stop(n+2)}catch(e){console.error("Audio playback failed (likely autoplay policy)",e)}},it=e=>{const t="Grandmaster Logic";e==="thinking"?document.title=`Thinking... | ${t}`:e==="done"?document.title=`🔴 Move Found! | ${t}`:document.title=t};function fp(){const[e,t]=H.useState(on(Kn)),[n,r]=H.useState(null),[o,l]=H.useState([]),[s,i]=H.useState(!1),[u,a]=H.useState(null),[h,m]=H.useState(!1),[p,v]=H.useState({engineId:"A",depth:6,timeLimit:2e3,branchingFactor:10,useDynamicBranching:!0}),[E,y]=H.useState({bestMove:null,evaluation:0,nodesSearched:0,currentDepth:0,isThinking:!1,pv:[],logs:[]}),[P,f]=H.useState({isOpen:!1,type:"fen",mode:"import"}),c=H.useRef(null);H.useEffect(()=>{if(c.current&&(c.current.terminate(),c.current=null),!s||e.isGameOver){y(ze=>({...ze,isThinking:!1,bestMove:null})),it("idle");return}const C=p.engineId==="B"?cp:ap,L=new Blob([C],{type:"application/javascript"}),de=URL.createObjectURL(L),pe=new Worker(de);return c.current=pe,pe.onmessage=ze=>{const{type:q,bestMove:he,score:x,nodes:N,depth:M,message:b}=ze.data;q==="log"?y(j=>({...j,logs:[...j.logs,`[Worker ${p.engineId}] ${b}`].slice(-50)})):q==="progress"?y(j=>({...j,evaluation:x,nodesSearched:N,currentDepth:M,isThinking:!0,bestMove:he})):q==="done"&&(su(),it("done"),y(j=>({...j,bestMove:he,evaluation:x,nodesSearched:N,currentDepth:M,isThinking:!1,pv:[]})))},pe.onerror=ze=>{console.error("Worker error:",ze),y(q=>({...q,isThinking:!1,logs:[...q.logs,`[CRITICAL] Worker crashed: ${ze.message}`]}))},(async()=>{const ze=Date.now();if(it("thinking"),y(q=>({...q,isThinking:!0,bestMove:null,currentDepth:0,logs:[]})),e.fullMoveNumber<=20){y(he=>({...he,logs:["Checking Lichess Masters Book..."]}));const q=await up(e);if(!c.current)return;if(q){su(),it("done"),y(he=>({...he,isThinking:!1,bestMove:q,evaluation:0,nodesSearched:0,currentDepth:0,logs:[...he.logs,`Book Move Found: ${q.from}->${q.to}`]}));return}else y(he=>({...he,logs:[...he.logs,`Book move not found. Starting Engine ${p.engineId}...`]}))}if(c.current){const q=Yr(e);c.current.postMessage({fen:q,depth:p.depth,timeLimit:p.timeLimit,requestId:ze})}})(),()=>{pe.terminate(),URL.revokeObjectURL(de),c.current=null}},[e,s,p.engineId,p.depth,p.timeLimit,p.branchingFactor,p.useDynamicBranching]);const d=C=>{if(e.isGameOver||u)return;if(n===C){r(null),l([]);return}const L=o.find(pe=>pe.to===C);if(L&&n!==null){L.promotion?a({move:L,from:L.from,to:L.to}):S(L);return}const de=e.board[C];if(de&&de.color===e.turn){r(C);const pe=Tn(e);l(pe.filter(xn=>xn.from===C))}else r(null),l([])},S=C=>{const L=Ut(e,C);t(L),r(null),l([]),a(null),it("idle")},T=C=>{if(u){const L={...u.move,promotion:C};S(L)}},k=()=>{if(e.history.length===0)return;let C=on(Kn);for(let L=0;L<e.history.length-1;L++)C=Ut(C,e.history[L]);t(C),r(null),l([]),it("idle")},I=()=>{t(on(Kn)),y({bestMove:null,evaluation:0,nodesSearched:0,currentDepth:0,isThinking:!1,pv:[],logs:[]}),r(null),l([]),it("idle")},O=(C,L)=>{let de="";L==="export"&&(de=C==="fen"?Yr(e):Xd(e)),f({isOpen:!0,type:C,mode:L,value:de})},U=C=>{try{let L;P.type==="fen"?L=on(C):L=Jd(C),t(L),y({bestMove:null,evaluation:0,nodesSearched:0,currentDepth:0,isThinking:!1,pv:[],logs:[]}),l([]),r(null),it("idle")}catch{alert(`Invalid ${P.type.toUpperCase()} string or move sequence.`)}};return g.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center py-8 px-4 font-sans",children:[g.jsxs("div",{className:"w-full max-w-[1600px] flex flex-col md:flex-row gap-8 items-start justify-center relative",children:[u&&g.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg",children:g.jsx("div",{className:"bg-slate-800 p-4 rounded-lg shadow-2xl border border-slate-600 flex gap-4 animate-in zoom-in",children:["q","r","b","n"].map(C=>g.jsx("button",{onClick:()=>T(C),className:"w-16 h-16 bg-slate-700 hover:bg-slate-600 rounded flex items-center justify-center transition-colors border-2 border-transparent hover:border-amber-500",children:g.jsx("div",{className:"w-12 h-12",children:g.jsx(qs,{color:e.turn,type:C})})},C))})}),g.jsxs("div",{className:"flex-1 w-full flex flex-col items-center min-w-0",children:[g.jsx("div",{className:"resize-x overflow-hidden w-full max-w-full min-w-[300px] aspect-square relative shadow-2xl rounded-sm",children:g.jsx(np,{board:e.board,turn:e.turn,onSquareClick:d,selectedSquare:n,validMoves:o,lastMove:e.history.length>0?e.history[e.history.length-1]:null,bestMove:E.bestMove,isFlipped:h})}),g.jsx("p",{className:"text-xs text-slate-500 mt-2",children:"Drag bottom-right to resize board"})]}),g.jsxs("div",{className:"w-full md:w-[400px] flex-shrink-0 flex flex-col gap-4",children:[g.jsxs("header",{className:"mb-4",children:[g.jsx("h1",{className:"text-3xl font-extrabold text-amber-500 tracking-tight",children:"Grandmaster Logic"}),g.jsx("p",{className:"text-slate-400 text-sm",children:s?p.engineId==="B"?"v5.0 • Engine B: Neural Accumulator + NMP":"v4.0 • Engine A: Classic PeSTO + PVS":"Select an engine to begin analysis"})]}),g.jsx(sp,{board:e.board}),g.jsx(rp,{onReset:I,onUndo:k,onImportFen:()=>O("fen","import"),onExportFen:()=>O("fen","export"),onImportPgn:()=>O("pgn","import"),onExportPgn:()=>O("pgn","export"),config:p,setConfig:v,engineEnabled:s,setEngineEnabled:i,gameState:e.isGameOver?e.winner?`Winner: ${e.winner}`:"Draw":"playing",isFlipped:h,onFlipBoard:()=>m(!h)}),s&&g.jsx(op,{result:E,turn:e.turn,configDepth:p.depth,gameState:e,isFlipped:h}),g.jsxs("div",{className:"p-4 bg-slate-800/50 rounded text-xs text-slate-500 border border-slate-800",children:[g.jsx("h4",{className:"font-bold text-slate-400 mb-1",children:"Debug Info"}),g.jsxs("p",{children:["Moves in history: ",e.history.length]}),g.jsxs("p",{children:["Hash: ",Yr(e).substring(0,20),"..."]})]})]})]}),g.jsx(lp,{isOpen:P.isOpen,onClose:()=>f(C=>({...C,isOpen:!1})),onImport:U,title:`${P.mode==="import"?"Import":"Export"} ${P.type.toUpperCase()}`,defaultValue:P.value,isExport:P.mode==="export"})]})}const Ec=document.getElementById("root");if(!Ec)throw new Error("Could not find root element to mount to");const dp=al.createRoot(Ec);dp.render(g.jsx(Hc.StrictMode,{children:g.jsx(fp,{})}));
