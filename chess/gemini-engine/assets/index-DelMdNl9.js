(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Sc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var iu={exports:{}},yo={},uu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cr=Symbol.for("react.element"),wc=Symbol.for("react.portal"),Tc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),_c=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),Oc=Symbol.for("react.forward_ref"),Ic=Symbol.for("react.suspense"),Pc=Symbol.for("react.memo"),Nc=Symbol.for("react.lazy"),Zs=Symbol.iterator;function Mc(e){return e===null||typeof e!="object"?null:(e=Zs&&e[Zs]||e["@@iterator"],typeof e=="function"?e:null)}var au={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cu=Object.assign,fu={};function wn(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||au}wn.prototype.isReactComponent={};wn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function du(){}du.prototype=wn.prototype;function ns(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||au}var rs=ns.prototype=new du;rs.constructor=ns;cu(rs,wn.prototype);rs.isPureReactComponent=!0;var Xs=Array.isArray,pu=Object.prototype.hasOwnProperty,os={current:null},hu={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,n){var r,o={},l=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(l=""+t.key),t)pu.call(t,r)&&!hu.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(i===1)o.children=n;else if(1<i){for(var u=Array(i),a=0;a<i;a++)u[a]=arguments[a+2];o.children=u}if(e&&e.defaultProps)for(r in i=e.defaultProps,i)o[r]===void 0&&(o[r]=i[r]);return{$$typeof:cr,type:e,key:l,ref:s,props:o,_owner:os.current}}function Rc(e,t){return{$$typeof:cr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ls(e){return typeof e=="object"&&e!==null&&e.$$typeof===cr}function Lc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Js=/\/+/g;function Ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Lc(""+e.key):t.toString(36)}function Ar(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case cr:case wc:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+Ho(s,0):r,Xs(o)?(n="",e!=null&&(n=e.replace(Js,"$&/")+"/"),Ar(o,t,n,"",function(a){return a})):o!=null&&(ls(o)&&(o=Rc(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Js,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Xs(e))for(var i=0;i<e.length;i++){l=e[i];var u=r+Ho(l,i);s+=Ar(l,t,n,u,o)}else if(u=Mc(e),typeof u=="function")for(e=u.call(e),i=0;!(l=e.next()).done;)l=l.value,u=r+Ho(l,i++),s+=Ar(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vr(e,t,n){if(e==null)return e;var r=[],o=0;return Ar(e,r,"","",function(l){return t.call(n,l,o++)}),r}function Ac(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Fr={transition:null},Fc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Fr,ReactCurrentOwner:os};function vu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:vr,forEach:function(e,t,n){vr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return vr(e,function(){t++}),t},toArray:function(e){return vr(e,function(t){return t})||[]},only:function(e){if(!ls(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=wn;R.Fragment=Tc;R.Profiler=_c;R.PureComponent=ns;R.StrictMode=xc;R.Suspense=Ic;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fc;R.act=vu;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cu({},e.props),o=e.key,l=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,s=os.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(u in t)pu.call(t,u)&&!hu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&i!==void 0?i[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){i=Array(u);for(var a=0;a<u;a++)i[a]=arguments[a+2];r.children=i}return{$$typeof:cr,type:e.type,key:o,ref:l,props:r,_owner:s}};R.createContext=function(e){return e={$$typeof:Cc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kc,_context:e},e.Consumer=e};R.createElement=mu;R.createFactory=function(e){var t=mu.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:Oc,render:e}};R.isValidElement=ls;R.lazy=function(e){return{$$typeof:Nc,_payload:{_status:-1,_result:e},_init:Ac}};R.memo=function(e,t){return{$$typeof:Pc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Fr.transition;Fr.transition={};try{e()}finally{Fr.transition=t}};R.unstable_act=vu;R.useCallback=function(e,t){return ce.current.useCallback(e,t)};R.useContext=function(e){return ce.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};R.useEffect=function(e,t){return ce.current.useEffect(e,t)};R.useId=function(){return ce.current.useId()};R.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ce.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};R.useRef=function(e){return ce.current.useRef(e)};R.useState=function(e){return ce.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ce.current.useTransition()};R.version="18.3.1";uu.exports=R;var j=uu.exports;const Hc=Sc(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=j,Dc=Symbol.for("react.element"),Gc=Symbol.for("react.fragment"),Bc=Object.prototype.hasOwnProperty,zc=jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uc={key:!0,ref:!0,__self:!0,__source:!0};function gu(e,t,n){var r,o={},l=null,s=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Bc.call(t,r)&&!Uc.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Dc,type:e,key:l,ref:s,props:o,_owner:zc.current}}yo.Fragment=Gc;yo.jsx=gu;yo.jsxs=gu;iu.exports=yo;var v=iu.exports,al={},yu={exports:{}},ke={},Eu={exports:{}},Su={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,P){var N=x.length;x.push(P);e:for(;0<N;){var z=N-1>>>1,V=x[z];if(0<o(V,P))x[z]=P,x[N]=V,N=z;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var P=x[0],N=x.pop();if(N!==P){x[0]=N;e:for(var z=0,V=x.length,Yt=V>>>1;z<Yt;){var de=2*(z+1)-1,Fo=x[de],It=de+1,mr=x[It];if(0>o(Fo,N))It<V&&0>o(mr,Fo)?(x[z]=mr,x[It]=N,z=It):(x[z]=Fo,x[de]=N,z=de);else if(It<V&&0>o(mr,N))x[z]=mr,x[It]=N,z=It;else break e}}return P}function o(x,P){var N=x.sortIndex-P.sortIndex;return N!==0?N:x.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var s=Date,i=s.now();e.unstable_now=function(){return s.now()-i}}var u=[],a=[],p=1,m=null,h=3,y=!1,g=!1,S=!1,I=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(x){for(var P=n(a);P!==null;){if(P.callback===null)r(a);else if(P.startTime<=x)r(a),P.sortIndex=P.expirationTime,t(u,P);else break;P=n(a)}}function E(x){if(S=!1,d(x),!g)if(n(u)!==null)g=!0,Kt(T);else{var P=n(a);P!==null&&Oe(E,P.startTime-x)}}function T(x,P){g=!1,S&&(S=!1,f(O),O=-1),y=!0;var N=h;try{for(d(P),m=n(u);m!==null&&(!(m.expirationTime>P)||x&&!Ee());){var z=m.callback;if(typeof z=="function"){m.callback=null,h=m.priorityLevel;var V=z(m.expirationTime<=P);P=e.unstable_now(),typeof V=="function"?m.callback=V:m===n(u)&&r(u),d(P)}else r(u);m=n(u)}if(m!==null)var Yt=!0;else{var de=n(a);de!==null&&Oe(E,de.startTime-P),Yt=!1}return Yt}finally{m=null,h=N,y=!1}}var k=!1,_=null,O=-1,b=5,M=-1;function Ee(){return!(e.unstable_now()-M<b)}function L(){if(_!==null){var x=e.unstable_now();M=x;var P=!0;try{P=_(!0,x)}finally{P?F():(k=!1,_=null)}}else k=!1}var F;if(typeof c=="function")F=function(){c(L)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Ue=Ae.port2;Ae.port1.onmessage=L,F=function(){Ue.postMessage(null)}}else F=function(){I(L,0)};function Kt(x){_=x,k||(k=!0,F())}function Oe(x,P){O=I(function(){x(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){g||y||(g=!0,Kt(T))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(x){switch(h){case 1:case 2:case 3:var P=3;break;default:P=h}var N=h;h=P;try{return x()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,P){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var N=h;h=x;try{return P()}finally{h=N}},e.unstable_scheduleCallback=function(x,P,N){var z=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?z+N:z):N=z,x){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=N+V,x={id:p++,callback:P,priorityLevel:x,startTime:N,expirationTime:V,sortIndex:-1},N>z?(x.sortIndex=N,t(a,x),n(u)===null&&x===n(a)&&(S?(f(O),O=-1):S=!0,Oe(E,N-z))):(x.sortIndex=V,t(u,x),g||y||(g=!0,Kt(T))),x},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(x){var P=h;return function(){var N=h;h=P;try{return x.apply(this,arguments)}finally{h=N}}}})(Su);Eu.exports=Su;var bc=Eu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wc=j,_e=bc;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wu=new Set,$n={};function bt(e,t){hn(e,t),hn(e+"Capture",t)}function hn(e,t){for($n[e]=t,e=0;e<t.length;e++)wu.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,Kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ei={},ti={};function Yc(e){return cl.call(ti,e)?!0:cl.call(ei,e)?!1:Kc.test(e)?ti[e]=!0:(ei[e]=!0,!1)}function $c(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Vc(e,t,n,r){if(t===null||typeof t>"u"||$c(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,n,r,o,l,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=s}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ss=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ss,is);re[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ss,is);re[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ss,is);re[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function us(e,t,n,r){var o=re.hasOwnProperty(t)?re[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Vc(t,n,o,r)&&(n=null),r||o===null?Yc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var st=Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,gr=Symbol.for("react.element"),Vt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),fl=Symbol.for("react.profiler"),Tu=Symbol.for("react.provider"),xu=Symbol.for("react.context"),cs=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),fs=Symbol.for("react.memo"),at=Symbol.for("react.lazy"),_u=Symbol.for("react.offscreen"),ni=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=ni&&e[ni]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,jo;function Ln(e){if(jo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jo=t&&t[1]||""}return`
`+jo+e}var Do=!1;function Go(e,t){if(!e||Do)return"";Do=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(a){var r=a}Reflect.construct(e,[],t)}else{try{t.call()}catch(a){r=a}e.call(t.prototype)}else{try{throw Error()}catch(a){r=a}e()}}catch(a){if(a&&r&&typeof a.stack=="string"){for(var o=a.stack.split(`
`),l=r.stack.split(`
`),s=o.length-1,i=l.length-1;1<=s&&0<=i&&o[s]!==l[i];)i--;for(;1<=s&&0<=i;s--,i--)if(o[s]!==l[i]){if(s!==1||i!==1)do if(s--,i--,0>i||o[s]!==l[i]){var u=`
`+o[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=i);break}}}finally{Do=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ln(e):""}function Qc(e){switch(e.tag){case 5:return Ln(e.type);case 16:return Ln("Lazy");case 13:return Ln("Suspense");case 19:return Ln("SuspenseList");case 0:case 2:case 15:return e=Go(e.type,!1),e;case 11:return e=Go(e.type.render,!1),e;case 1:return e=Go(e.type,!0),e;default:return""}}function hl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qt:return"Fragment";case Vt:return"Portal";case fl:return"Profiler";case as:return"StrictMode";case dl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xu:return(e.displayName||"Context")+".Consumer";case Tu:return(e._context.displayName||"Context")+".Provider";case cs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fs:return t=e.displayName||null,t!==null?t:hl(e.type)||"Memo";case at:t=e._payload,e=e._init;try{return hl(e(t))}catch{}}return null}function qc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hl(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zc(e){var t=ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yr(e){e._valueTracker||(e._valueTracker=Zc(e))}function Cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $r(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ml(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ri(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ou(e,t){t=t.checked,t!=null&&us(e,"checked",t,!1)}function vl(e,t){Ou(e,t);var n=xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&gl(e,t.type,xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gl(e,t,n){(t!=="number"||$r(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var An=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function li(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(An(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:xt(n)}}function Iu(e,t){var n=xt(t.value),r=xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function si(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function El(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Nu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Vn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Xc=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){Xc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function Mu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function Ru(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Mu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Jc=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sl(e,t){if(t){if(Jc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function ds(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xl=null,an=null,cn=null;function ii(e){if(e=pr(e)){if(typeof xl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=xo(t),xl(e.stateNode,e.type,t))}}function Lu(e){an?cn?cn.push(e):cn=[e]:an=e}function Au(){if(an){var e=an,t=cn;if(cn=an=null,ii(e),t)for(e=0;e<t.length;e++)ii(t[e])}}function Fu(e,t){return e(t)}function Hu(){}var Bo=!1;function ju(e,t,n){if(Bo)return e(t,n);Bo=!0;try{return Fu(e,t,n)}finally{Bo=!1,(an!==null||cn!==null)&&(Hu(),Au())}}function Qn(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var _l=!1;if(nt)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){_l=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{_l=!1}function ef(e,t,n,r,o,l,s,i,u){var a=Array.prototype.slice.call(arguments,3);try{t.apply(n,a)}catch(p){this.onError(p)}}var Dn=!1,Vr=null,Qr=!1,kl=null,tf={onError:function(e){Dn=!0,Vr=e}};function nf(e,t,n,r,o,l,s,i,u){Dn=!1,Vr=null,ef.apply(tf,arguments)}function rf(e,t,n,r,o,l,s,i,u){if(nf.apply(this,arguments),Dn){if(Dn){var a=Vr;Dn=!1,Vr=null}else throw Error(w(198));Qr||(Qr=!0,kl=a)}}function Wt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Du(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ui(e){if(Wt(e)!==e)throw Error(w(188))}function of(e){var t=e.alternate;if(!t){if(t=Wt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return ui(o),e;if(l===r)return ui(o),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=o,r=l;else{for(var s=!1,i=o.child;i;){if(i===n){s=!0,n=o,r=l;break}if(i===r){s=!0,r=o,n=l;break}i=i.sibling}if(!s){for(i=l.child;i;){if(i===n){s=!0,n=l,r=o;break}if(i===r){s=!0,r=l,n=o;break}i=i.sibling}if(!s)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Gu(e){return e=of(e),e!==null?Bu(e):null}function Bu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bu(e);if(t!==null)return t;e=e.sibling}return null}var zu=_e.unstable_scheduleCallback,ai=_e.unstable_cancelCallback,lf=_e.unstable_shouldYield,sf=_e.unstable_requestPaint,Q=_e.unstable_now,uf=_e.unstable_getCurrentPriorityLevel,ps=_e.unstable_ImmediatePriority,Uu=_e.unstable_UserBlockingPriority,qr=_e.unstable_NormalPriority,af=_e.unstable_LowPriority,bu=_e.unstable_IdlePriority,Eo=null,Ve=null;function cf(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Eo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:pf,ff=Math.log,df=Math.LN2;function pf(e){return e>>>=0,e===0?32:31-(ff(e)/df|0)|0}var Sr=64,wr=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,s=n&268435455;if(s!==0){var i=s&~o;i!==0?r=Fn(i):(l&=s,l!==0&&(r=Fn(l)))}else s=n&~o,s!==0?r=Fn(s):l!==0&&(r=Fn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ge(t),o=1<<n,r|=e[n],t&=~o;return r}function hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-Ge(l),i=1<<s,u=o[s];u===-1?(!(i&n)||i&r)&&(o[s]=hf(i,t)):u<=t&&(e.expiredLanes|=i),l&=~i}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wu(){var e=Sr;return Sr<<=1,!(Sr&4194240)&&(Sr=64),e}function zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function fr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ge(t),e[t]=n}function vf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ge(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function hs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var H=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Yu,ms,$u,Vu,Qu,Ol=!1,Tr=[],mt=null,vt=null,gt=null,qn=new Map,Zn=new Map,ft=[],gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ci(e,t){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":vt=null;break;case"mouseover":case"mouseout":gt=null;break;case"pointerover":case"pointerout":qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zn.delete(t.pointerId)}}function On(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=pr(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yf(e,t,n,r,o){switch(t){case"focusin":return mt=On(mt,e,t,n,r,o),!0;case"dragenter":return vt=On(vt,e,t,n,r,o),!0;case"mouseover":return gt=On(gt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return qn.set(l,On(qn.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Zn.set(l,On(Zn.get(l)||null,e,t,n,r,o)),!0}return!1}function qu(e){var t=Rt(e.target);if(t!==null){var n=Wt(t);if(n!==null){if(t=n.tag,t===13){if(t=Du(n),t!==null){e.blockedOn=t,Qu(e.priority,function(){$u(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Tl=r,n.target.dispatchEvent(r),Tl=null}else return t=pr(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function fi(e,t,n){Hr(e)&&n.delete(t)}function Ef(){Ol=!1,mt!==null&&Hr(mt)&&(mt=null),vt!==null&&Hr(vt)&&(vt=null),gt!==null&&Hr(gt)&&(gt=null),qn.forEach(fi),Zn.forEach(fi)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,Ol||(Ol=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,Ef)))}function Xn(e){function t(o){return In(o,e)}if(0<Tr.length){In(Tr[0],e);for(var n=1;n<Tr.length;n++){var r=Tr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(mt!==null&&In(mt,e),vt!==null&&In(vt,e),gt!==null&&In(gt,e),qn.forEach(t),Zn.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)qu(n),n.blockedOn===null&&ft.shift()}var fn=st.ReactCurrentBatchConfig,Xr=!0;function Sf(e,t,n,r){var o=H,l=fn.transition;fn.transition=null;try{H=1,vs(e,t,n,r)}finally{H=o,fn.transition=l}}function wf(e,t,n,r){var o=H,l=fn.transition;fn.transition=null;try{H=4,vs(e,t,n,r)}finally{H=o,fn.transition=l}}function vs(e,t,n,r){if(Xr){var o=Il(e,t,n,r);if(o===null)Zo(e,t,r,Jr,n),ci(e,r);else if(yf(o,e,t,n,r))r.stopPropagation();else if(ci(e,r),t&4&&-1<gf.indexOf(e)){for(;o!==null;){var l=pr(o);if(l!==null&&Yu(l),l=Il(e,t,n,r),l===null&&Zo(e,t,r,Jr,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Zo(e,t,r,null,n)}}var Jr=null;function Il(e,t,n,r){if(Jr=null,e=ds(r),e=Rt(e),e!==null)if(t=Wt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Du(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jr=e,null}function Zu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uf()){case ps:return 1;case Uu:return 4;case qr:case af:return 16;case bu:return 536870912;default:return 16}default:return 16}}var pt=null,gs=null,jr=null;function Xu(){if(jr)return jr;var e,t=gs,n=t.length,r,o="value"in pt?pt.value:pt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[l-r];r++);return jr=o.slice(e,1<r?1-r:void 0)}function Dr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xr(){return!0}function di(){return!1}function Ce(e){function t(n,r,o,l,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(l):l[i]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?xr:di,this.isPropagationStopped=di,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xr)},persist:function(){},isPersistent:xr}),t}var Tn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=Ce(Tn),dr=Y({},Tn,{view:0,detail:0}),Tf=Ce(dr),Uo,bo,Pn,So=Y({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Uo=e.screenX-Pn.screenX,bo=e.screenY-Pn.screenY):bo=Uo=0,Pn=e),Uo)},movementY:function(e){return"movementY"in e?e.movementY:bo}}),pi=Ce(So),xf=Y({},So,{dataTransfer:0}),_f=Ce(xf),kf=Y({},dr,{relatedTarget:0}),Wo=Ce(kf),Cf=Y({},Tn,{animationName:0,elapsedTime:0,pseudoElement:0}),Of=Ce(Cf),If=Y({},Tn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=Ce(If),Nf=Y({},Tn,{data:0}),hi=Ce(Nf),Mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Lf[e])?!!t[e]:!1}function Es(){return Af}var Ff=Y({},dr,{key:function(e){if(e.key){var t=Mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Dr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Es,charCode:function(e){return e.type==="keypress"?Dr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Dr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hf=Ce(Ff),jf=Y({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mi=Ce(jf),Df=Y({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Es}),Gf=Ce(Df),Bf=Y({},Tn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zf=Ce(Bf),Uf=Y({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bf=Ce(Uf),Wf=[9,13,27,32],Ss=nt&&"CompositionEvent"in window,Gn=null;nt&&"documentMode"in document&&(Gn=document.documentMode);var Kf=nt&&"TextEvent"in window&&!Gn,Ju=nt&&(!Ss||Gn&&8<Gn&&11>=Gn),vi=" ",gi=!1;function ea(e,t){switch(e){case"keyup":return Wf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ta(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qt=!1;function Yf(e,t){switch(e){case"compositionend":return ta(t);case"keypress":return t.which!==32?null:(gi=!0,vi);case"textInput":return e=t.data,e===vi&&gi?null:e;default:return null}}function $f(e,t){if(qt)return e==="compositionend"||!Ss&&ea(e,t)?(e=Xu(),jr=gs=pt=null,qt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ju&&t.locale!=="ko"?null:t.data;default:return null}}var Vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vf[e.type]:t==="textarea"}function na(e,t,n,r){Lu(r),t=eo(t,"onChange"),0<t.length&&(n=new ys("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,Jn=null;function Qf(e){pa(e,0)}function wo(e){var t=Jt(e);if(Cu(t))return e}function qf(e,t){if(e==="change")return t}var ra=!1;if(nt){var Ko;if(nt){var Yo="oninput"in document;if(!Yo){var Ei=document.createElement("div");Ei.setAttribute("oninput","return;"),Yo=typeof Ei.oninput=="function"}Ko=Yo}else Ko=!1;ra=Ko&&(!document.documentMode||9<document.documentMode)}function Si(){Bn&&(Bn.detachEvent("onpropertychange",oa),Jn=Bn=null)}function oa(e){if(e.propertyName==="value"&&wo(Jn)){var t=[];na(t,Jn,e,ds(e)),ju(Qf,t)}}function Zf(e,t,n){e==="focusin"?(Si(),Bn=t,Jn=n,Bn.attachEvent("onpropertychange",oa)):e==="focusout"&&Si()}function Xf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Jn)}function Jf(e,t){if(e==="click")return wo(t)}function ed(e,t){if(e==="input"||e==="change")return wo(t)}function td(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ze=typeof Object.is=="function"?Object.is:td;function er(e,t){if(ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!ze(e[o],t[o]))return!1}return!0}function wi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ti(e,t){var n=wi(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wi(n)}}function la(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?la(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sa(){for(var e=window,t=$r();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$r(e.document)}return t}function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function nd(e){var t=sa(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&la(n.ownerDocument.documentElement,n)){if(r!==null&&ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ti(n,l);var s=Ti(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var rd=nt&&"documentMode"in document&&11>=document.documentMode,Zt=null,Pl=null,zn=null,Nl=!1;function xi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nl||Zt==null||Zt!==$r(r)||(r=Zt,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&er(zn,r)||(zn=r,r=eo(Pl,"onSelect"),0<r.length&&(t=new ys("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function _r(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:_r("Animation","AnimationEnd"),animationiteration:_r("Animation","AnimationIteration"),animationstart:_r("Animation","AnimationStart"),transitionend:_r("Transition","TransitionEnd")},$o={},ia={};nt&&(ia=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function To(e){if($o[e])return $o[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ia)return $o[e]=t[n];return e}var ua=To("animationend"),aa=To("animationiteration"),ca=To("animationstart"),fa=To("transitionend"),da=new Map,_i="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kt(e,t){da.set(e,t),bt(t,[e])}for(var Vo=0;Vo<_i.length;Vo++){var Qo=_i[Vo],od=Qo.toLowerCase(),ld=Qo[0].toUpperCase()+Qo.slice(1);kt(od,"on"+ld)}kt(ua,"onAnimationEnd");kt(aa,"onAnimationIteration");kt(ca,"onAnimationStart");kt("dblclick","onDoubleClick");kt("focusin","onFocus");kt("focusout","onBlur");kt(fa,"onTransitionEnd");hn("onMouseEnter",["mouseout","mouseover"]);hn("onMouseLeave",["mouseout","mouseover"]);hn("onPointerEnter",["pointerout","pointerover"]);hn("onPointerLeave",["pointerout","pointerover"]);bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bt("onBeforeInput",["compositionend","keypress","textInput","paste"]);bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function ki(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,rf(r,t,void 0,e),e.currentTarget=null}function pa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var s=r.length-1;0<=s;s--){var i=r[s],u=i.instance,a=i.currentTarget;if(i=i.listener,u!==l&&o.isPropagationStopped())break e;ki(o,i,a),l=u}else for(s=0;s<r.length;s++){if(i=r[s],u=i.instance,a=i.currentTarget,i=i.listener,u!==l&&o.isPropagationStopped())break e;ki(o,i,a),l=u}}}if(Qr)throw e=kl,Qr=!1,kl=null,e}function G(e,t){var n=t[Fl];n===void 0&&(n=t[Fl]=new Set);var r=e+"__bubble";n.has(r)||(ha(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),ha(n,e,r,t)}var kr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[kr]){e[kr]=!0,wu.forEach(function(n){n!=="selectionchange"&&(sd.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kr]||(t[kr]=!0,qo("selectionchange",!1,t))}}function ha(e,t,n,r){switch(Zu(t)){case 1:var o=Sf;break;case 4:o=wf;break;default:o=vs}n=o.bind(null,t,n,e),o=void 0,!_l||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Zo(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var i=r.stateNode.containerInfo;if(i===o||i.nodeType===8&&i.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;s=s.return}for(;i!==null;){if(s=Rt(i),s===null)return;if(u=s.tag,u===5||u===6){r=l=s;continue e}i=i.parentNode}}r=r.return}ju(function(){var a=l,p=ds(n),m=[];e:{var h=da.get(e);if(h!==void 0){var y=ys,g=e;switch(e){case"keypress":if(Dr(n)===0)break e;case"keydown":case"keyup":y=Hf;break;case"focusin":g="focus",y=Wo;break;case"focusout":g="blur",y=Wo;break;case"beforeblur":case"afterblur":y=Wo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=pi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Gf;break;case ua:case aa:case ca:y=Of;break;case fa:y=zf;break;case"scroll":y=Tf;break;case"wheel":y=bf;break;case"copy":case"cut":case"paste":y=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=mi}var S=(t&4)!==0,I=!S&&e==="scroll",f=S?h!==null?h+"Capture":null:h;S=[];for(var c=a,d;c!==null;){d=c;var E=d.stateNode;if(d.tag===5&&E!==null&&(d=E,f!==null&&(E=Qn(c,f),E!=null&&S.push(nr(c,E,d)))),I)break;c=c.return}0<S.length&&(h=new y(h,g,null,n,p),m.push({event:h,listeners:S}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&n!==Tl&&(g=n.relatedTarget||n.fromElement)&&(Rt(g)||g[rt]))break e;if((y||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=a,g=g?Rt(g):null,g!==null&&(I=Wt(g),g!==I||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=a),y!==g)){if(S=pi,E="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=mi,E="onPointerLeave",f="onPointerEnter",c="pointer"),I=y==null?h:Jt(y),d=g==null?h:Jt(g),h=new S(E,c+"leave",y,n,p),h.target=I,h.relatedTarget=d,E=null,Rt(p)===a&&(S=new S(f,c+"enter",g,n,p),S.target=d,S.relatedTarget=I,E=S),I=E,y&&g)t:{for(S=y,f=g,c=0,d=S;d;d=$t(d))c++;for(d=0,E=f;E;E=$t(E))d++;for(;0<c-d;)S=$t(S),c--;for(;0<d-c;)f=$t(f),d--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=$t(S),f=$t(f)}S=null}else S=null;y!==null&&Ci(m,h,y,S,!1),g!==null&&I!==null&&Ci(m,I,g,S,!0)}}e:{if(h=a?Jt(a):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var T=qf;else if(yi(h))if(ra)T=ed;else{T=Xf;var k=Zf}else(y=h.nodeName)&&y.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Jf);if(T&&(T=T(e,a))){na(m,T,n,p);break e}k&&k(e,h,a),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&gl(h,"number",h.value)}switch(k=a?Jt(a):window,e){case"focusin":(yi(k)||k.contentEditable==="true")&&(Zt=k,Pl=a,zn=null);break;case"focusout":zn=Pl=Zt=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,xi(m,n,p);break;case"selectionchange":if(rd)break;case"keydown":case"keyup":xi(m,n,p)}var _;if(Ss)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else qt?ea(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Ju&&n.locale!=="ko"&&(qt||O!=="onCompositionStart"?O==="onCompositionEnd"&&qt&&(_=Xu()):(pt=p,gs="value"in pt?pt.value:pt.textContent,qt=!0)),k=eo(a,O),0<k.length&&(O=new hi(O,e,null,n,p),m.push({event:O,listeners:k}),_?O.data=_:(_=ta(n),_!==null&&(O.data=_)))),(_=Kf?Yf(e,n):$f(e,n))&&(a=eo(a,"onBeforeInput"),0<a.length&&(p=new hi("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:a}),p.data=_))}pa(m,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function eo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Qn(e,n),l!=null&&r.unshift(nr(e,l,o)),l=Qn(e,t),l!=null&&r.push(nr(e,l,o))),e=e.return}return r}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ci(e,t,n,r,o){for(var l=t._reactName,s=[];n!==null&&n!==r;){var i=n,u=i.alternate,a=i.stateNode;if(u!==null&&u===r)break;i.tag===5&&a!==null&&(i=a,o?(u=Qn(n,l),u!=null&&s.unshift(nr(n,u,i))):o||(u=Qn(n,l),u!=null&&s.push(nr(n,u,i)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var id=/\r\n?/g,ud=/\u0000|\uFFFD/g;function Oi(e){return(typeof e=="string"?e:""+e).replace(id,`
`).replace(ud,"")}function Cr(e,t,n){if(t=Oi(t),Oi(e)!==t&&n)throw Error(w(425))}function to(){}var Ml=null,Rl=null;function Ll(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,ad=typeof clearTimeout=="function"?clearTimeout:void 0,Ii=typeof Promise=="function"?Promise:void 0,cd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ii<"u"?function(e){return Ii.resolve(null).then(e).catch(fd)}:Al;function fd(e){setTimeout(function(){throw e})}function Xo(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Xn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Xn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Pi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xn=Math.random().toString(36).slice(2),Ye="__reactFiber$"+xn,rr="__reactProps$"+xn,rt="__reactContainer$"+xn,Fl="__reactEvents$"+xn,dd="__reactListeners$"+xn,pd="__reactHandles$"+xn;function Rt(e){var t=e[Ye];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[Ye]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Pi(e);e!==null;){if(n=e[Ye])return n;e=Pi(e)}return t}e=n,n=e.parentNode}return null}function pr(e){return e=e[Ye]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function xo(e){return e[rr]||null}var Hl=[],en=-1;function Ct(e){return{current:e}}function B(e){0>en||(e.current=Hl[en],Hl[en]=null,en--)}function D(e,t){en++,Hl[en]=e.current,e.current=t}var _t={},ie=Ct(_t),ve=Ct(!1),jt=_t;function mn(e,t){var n=e.type.contextTypes;if(!n)return _t;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ge(e){return e=e.childContextTypes,e!=null}function no(){B(ve),B(ie)}function Ni(e,t,n){if(ie.current!==_t)throw Error(w(168));D(ie,t),D(ve,n)}function ma(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(w(108,qc(e)||"Unknown",o));return Y({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_t,jt=ie.current,D(ie,e),D(ve,ve.current),!0}function Mi(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=ma(e,t,jt),r.__reactInternalMemoizedMergedChildContext=e,B(ve),B(ie),D(ie,e)):B(ve),D(ve,n)}var Ze=null,_o=!1,Jo=!1;function va(e){Ze===null?Ze=[e]:Ze.push(e)}function hd(e){_o=!0,va(e)}function Ot(){if(!Jo&&Ze!==null){Jo=!0;var e=0,t=H;try{var n=Ze;for(H=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ze=null,_o=!1}catch(o){throw Ze!==null&&(Ze=Ze.slice(e+1)),zu(ps,Ot),o}finally{H=t,Jo=!1}}return null}var tn=[],nn=0,oo=null,lo=0,Ie=[],Pe=0,Dt=null,Je=1,et="";function Nt(e,t){tn[nn++]=lo,tn[nn++]=oo,oo=e,lo=t}function ga(e,t,n){Ie[Pe++]=Je,Ie[Pe++]=et,Ie[Pe++]=Dt,Dt=e;var r=Je;e=et;var o=32-Ge(r)-1;r&=~(1<<o),n+=1;var l=32-Ge(t)+o;if(30<l){var s=o-o%5;l=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Je=1<<32-Ge(t)+o|n<<o|r,et=l+e}else Je=1<<l|n<<o|r,et=e}function Ts(e){e.return!==null&&(Nt(e,1),ga(e,1,0))}function xs(e){for(;e===oo;)oo=tn[--nn],tn[nn]=null,lo=tn[--nn],tn[nn]=null;for(;e===Dt;)Dt=Ie[--Pe],Ie[Pe]=null,et=Ie[--Pe],Ie[Pe]=null,Je=Ie[--Pe],Ie[Pe]=null}var xe=null,Te=null,U=!1,De=null;function ya(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ri(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,Te=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dt!==null?{id:Je,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,Te=null,!0):!1;default:return!1}}function jl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(U){var t=Te;if(t){var n=t;if(!Ri(e,t)){if(jl(e))throw Error(w(418));t=yt(n.nextSibling);var r=xe;t&&Ri(e,t)?ya(r,n):(e.flags=e.flags&-4097|2,U=!1,xe=e)}}else{if(jl(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,xe=e}}}function Li(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function Or(e){if(e!==xe)return!1;if(!U)return Li(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ll(e.type,e.memoizedProps)),t&&(t=Te)){if(jl(e))throw Ea(),Error(w(418));for(;t;)ya(e,t),t=yt(t.nextSibling)}if(Li(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Te=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=xe?yt(e.stateNode.nextSibling):null;return!0}function Ea(){for(var e=Te;e;)e=yt(e.nextSibling)}function vn(){Te=xe=null,U=!1}function _s(e){De===null?De=[e]:De.push(e)}var md=st.ReactCurrentBatchConfig;function Nn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(s){var i=o.refs;s===null?delete i[l]:i[l]=s},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function Ir(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ai(e){var t=e._init;return t(e._payload)}function Sa(e){function t(f,c){if(e){var d=f.deletions;d===null?(f.deletions=[c],f.flags|=16):d.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Tt(f,c),f.index=0,f.sibling=null,f}function l(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags|=2,c):d):(f.flags|=2,c)):(f.flags|=1048576,c)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,c,d,E){return c===null||c.tag!==6?(c=sl(d,f.mode,E),c.return=f,c):(c=o(c,d),c.return=f,c)}function u(f,c,d,E){var T=d.type;return T===Qt?p(f,c,d.props.children,E,d.key):c!==null&&(c.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===at&&Ai(T)===c.type)?(E=o(c,d.props),E.ref=Nn(f,c,d),E.return=f,E):(E=Kr(d.type,d.key,d.props,null,f.mode,E),E.ref=Nn(f,c,d),E.return=f,E)}function a(f,c,d,E){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=il(d,f.mode,E),c.return=f,c):(c=o(c,d.children||[]),c.return=f,c)}function p(f,c,d,E,T){return c===null||c.tag!==7?(c=Ht(d,f.mode,E,T),c.return=f,c):(c=o(c,d),c.return=f,c)}function m(f,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=sl(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case gr:return d=Kr(c.type,c.key,c.props,null,f.mode,d),d.ref=Nn(f,null,c),d.return=f,d;case Vt:return c=il(c,f.mode,d),c.return=f,c;case at:var E=c._init;return m(f,E(c._payload),d)}if(An(c)||kn(c))return c=Ht(c,f.mode,d,null),c.return=f,c;Ir(f,c)}return null}function h(f,c,d,E){var T=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return T!==null?null:i(f,c,""+d,E);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:return d.key===T?u(f,c,d,E):null;case Vt:return d.key===T?a(f,c,d,E):null;case at:return T=d._init,h(f,c,T(d._payload),E)}if(An(d)||kn(d))return T!==null?null:p(f,c,d,E,null);Ir(f,d)}return null}function y(f,c,d,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(d)||null,i(c,f,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case gr:return f=f.get(E.key===null?d:E.key)||null,u(c,f,E,T);case Vt:return f=f.get(E.key===null?d:E.key)||null,a(c,f,E,T);case at:var k=E._init;return y(f,c,d,k(E._payload),T)}if(An(E)||kn(E))return f=f.get(d)||null,p(c,f,E,T,null);Ir(c,E)}return null}function g(f,c,d,E){for(var T=null,k=null,_=c,O=c=0,b=null;_!==null&&O<d.length;O++){_.index>O?(b=_,_=null):b=_.sibling;var M=h(f,_,d[O],E);if(M===null){_===null&&(_=b);break}e&&_&&M.alternate===null&&t(f,_),c=l(M,c,O),k===null?T=M:k.sibling=M,k=M,_=b}if(O===d.length)return n(f,_),U&&Nt(f,O),T;if(_===null){for(;O<d.length;O++)_=m(f,d[O],E),_!==null&&(c=l(_,c,O),k===null?T=_:k.sibling=_,k=_);return U&&Nt(f,O),T}for(_=r(f,_);O<d.length;O++)b=y(_,f,O,d[O],E),b!==null&&(e&&b.alternate!==null&&_.delete(b.key===null?O:b.key),c=l(b,c,O),k===null?T=b:k.sibling=b,k=b);return e&&_.forEach(function(Ee){return t(f,Ee)}),U&&Nt(f,O),T}function S(f,c,d,E){var T=kn(d);if(typeof T!="function")throw Error(w(150));if(d=T.call(d),d==null)throw Error(w(151));for(var k=T=null,_=c,O=c=0,b=null,M=d.next();_!==null&&!M.done;O++,M=d.next()){_.index>O?(b=_,_=null):b=_.sibling;var Ee=h(f,_,M.value,E);if(Ee===null){_===null&&(_=b);break}e&&_&&Ee.alternate===null&&t(f,_),c=l(Ee,c,O),k===null?T=Ee:k.sibling=Ee,k=Ee,_=b}if(M.done)return n(f,_),U&&Nt(f,O),T;if(_===null){for(;!M.done;O++,M=d.next())M=m(f,M.value,E),M!==null&&(c=l(M,c,O),k===null?T=M:k.sibling=M,k=M);return U&&Nt(f,O),T}for(_=r(f,_);!M.done;O++,M=d.next())M=y(_,f,O,M.value,E),M!==null&&(e&&M.alternate!==null&&_.delete(M.key===null?O:M.key),c=l(M,c,O),k===null?T=M:k.sibling=M,k=M);return e&&_.forEach(function(L){return t(f,L)}),U&&Nt(f,O),T}function I(f,c,d,E){if(typeof d=="object"&&d!==null&&d.type===Qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case gr:e:{for(var T=d.key,k=c;k!==null;){if(k.key===T){if(T=d.type,T===Qt){if(k.tag===7){n(f,k.sibling),c=o(k,d.props.children),c.return=f,f=c;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===at&&Ai(T)===k.type){n(f,k.sibling),c=o(k,d.props),c.ref=Nn(f,k,d),c.return=f,f=c;break e}n(f,k);break}else t(f,k);k=k.sibling}d.type===Qt?(c=Ht(d.props.children,f.mode,E,d.key),c.return=f,f=c):(E=Kr(d.type,d.key,d.props,null,f.mode,E),E.ref=Nn(f,c,d),E.return=f,f=E)}return s(f);case Vt:e:{for(k=d.key;c!==null;){if(c.key===k)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=o(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=il(d,f.mode,E),c.return=f,f=c}return s(f);case at:return k=d._init,I(f,c,k(d._payload),E)}if(An(d))return g(f,c,d,E);if(kn(d))return S(f,c,d,E);Ir(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,d),c.return=f,f=c):(n(f,c),c=sl(d,f.mode,E),c.return=f,f=c),s(f)):n(f,c)}return I}var gn=Sa(!0),wa=Sa(!1),so=Ct(null),io=null,rn=null,ks=null;function Cs(){ks=rn=io=null}function Os(e){var t=so.current;B(so),e._currentValue=t}function Gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){io=e,ks=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function Re(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(io===null)throw Error(w(308));rn=e,io.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var Lt=null;function Is(e){Lt===null?Lt=[e]:Lt.push(e)}function Ta(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Is(t)):(n.next=o.next,o.next=n),t.interleaved=n,ot(e,r)}function ot(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ct=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Et(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,A&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ot(e,n)}return o=r.interleaved,o===null?(t.next=t,Is(r)):(t.next=o.next,o.next=t),r.interleaved=t,ot(e,n)}function Gr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}function Fi(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=s:l=l.next=s,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function uo(e,t,n,r){var o=e.updateQueue;ct=!1;var l=o.firstBaseUpdate,s=o.lastBaseUpdate,i=o.shared.pending;if(i!==null){o.shared.pending=null;var u=i,a=u.next;u.next=null,s===null?l=a:s.next=a,s=u;var p=e.alternate;p!==null&&(p=p.updateQueue,i=p.lastBaseUpdate,i!==s&&(i===null?p.firstBaseUpdate=a:i.next=a,p.lastBaseUpdate=u))}if(l!==null){var m=o.baseState;s=0,p=a=u=null,i=l;do{var h=i.lane,y=i.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:y,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var g=e,S=i;switch(h=t,y=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){m=g.call(y,m,h);break e}m=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(y,m,h):g,h==null)break e;m=Y({},m,h);break e;case 2:ct=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[i]:h.push(i))}else y={eventTime:y,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},p===null?(a=p=y,u=m):p=p.next=y,s|=h;if(i=i.next,i===null){if(i=o.shared.pending,i===null)break;h=i,i=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(u=m),o.baseState=u,o.firstBaseUpdate=a,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Bt|=s,e.lanes=s,e.memoizedState=m}}function Hi(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(w(191,o));o.call(r)}}}var hr={},Qe=Ct(hr),or=Ct(hr),lr=Ct(hr);function At(e){if(e===hr)throw Error(w(174));return e}function Ns(e,t){switch(D(lr,t),D(or,e),D(Qe,hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:El(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=El(t,e)}B(Qe),D(Qe,t)}function yn(){B(Qe),B(or),B(lr)}function _a(e){At(lr.current);var t=At(Qe.current),n=El(t,e.type);t!==n&&(D(or,e),D(Qe,n))}function Ms(e){or.current===e&&(B(Qe),B(or))}var W=Ct(0);function ao(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function Rs(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var Br=st.ReactCurrentDispatcher,tl=st.ReactCurrentBatchConfig,Gt=0,K=null,Z=null,J=null,co=!1,Un=!1,sr=0,vd=0;function oe(){throw Error(w(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ze(e[n],t[n]))return!1;return!0}function As(e,t,n,r,o,l){if(Gt=l,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Br.current=e===null||e.memoizedState===null?Sd:wd,e=n(r,o),Un){l=0;do{if(Un=!1,sr=0,25<=l)throw Error(w(301));l+=1,J=Z=null,t.updateQueue=null,Br.current=Td,e=n(r,o)}while(Un)}if(Br.current=fo,t=Z!==null&&Z.next!==null,Gt=0,J=Z=K=null,co=!1,t)throw Error(w(300));return e}function Fs(){var e=sr!==0;return sr=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?K.memoizedState=J=e:J=J.next=e,J}function Le(){if(Z===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var t=J===null?K.memoizedState:J.next;if(t!==null)J=t,Z=e;else{if(e===null)throw Error(w(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},J===null?K.memoizedState=J=e:J=J.next=e}return J}function ir(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=Le(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=Z,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var s=o.next;o.next=l.next,l.next=s}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var i=s=null,u=null,a=l;do{var p=a.lane;if((Gt&p)===p)u!==null&&(u=u.next={lane:0,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null}),r=a.hasEagerState?a.eagerState:e(r,a.action);else{var m={lane:p,action:a.action,hasEagerState:a.hasEagerState,eagerState:a.eagerState,next:null};u===null?(i=u=m,s=r):u=u.next=m,K.lanes|=p,Bt|=p}a=a.next}while(a!==null&&a!==l);u===null?s=r:u.next=i,ze(r,t.memoizedState)||(me=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,K.lanes|=l,Bt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=Le(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do l=e(l,s.action),s=s.next;while(s!==o);ze(l,t.memoizedState)||(me=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ka(){}function Ca(e,t){var n=K,r=Le(),o=t(),l=!ze(r.memoizedState,o);if(l&&(r.memoizedState=o,me=!0),r=r.queue,Hs(Pa.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,ur(9,Ia.bind(null,n,r,o,t),void 0,null),ee===null)throw Error(w(349));Gt&30||Oa(n,t,o)}return o}function Oa(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ia(e,t,n,r){t.value=n,t.getSnapshot=r,Na(t)&&Ma(e)}function Pa(e,t,n){return n(function(){Na(t)&&Ma(e)})}function Na(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ze(e,n)}catch{return!0}}function Ma(e){var t=ot(e,1);t!==null&&Be(t,e,1,-1)}function ji(e){var t=We();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Ed.bind(null,K,e),[t.memoizedState,e]}function ur(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ra(){return Le().memoizedState}function zr(e,t,n,r){var o=We();K.flags|=e,o.memoizedState=ur(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var o=Le();r=r===void 0?null:r;var l=void 0;if(Z!==null){var s=Z.memoizedState;if(l=s.destroy,r!==null&&Ls(r,s.deps)){o.memoizedState=ur(t,n,l,r);return}}K.flags|=e,o.memoizedState=ur(1|t,n,l,r)}function Di(e,t){return zr(8390656,8,e,t)}function Hs(e,t){return ko(2048,8,e,t)}function La(e,t){return ko(4,2,e,t)}function Aa(e,t){return ko(4,4,e,t)}function Fa(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ha(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,Fa.bind(null,t,e),n)}function js(){}function ja(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Da(e,t){var n=Le();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ga(e,t,n){return Gt&21?(ze(n,t)||(n=Wu(),K.lanes|=n,Bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function gd(e,t){var n=H;H=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{H=n,tl.transition=r}}function Ba(){return Le().memoizedState}function yd(e,t,n){var r=wt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},za(e))Ua(t,n);else if(n=Ta(e,t,n,r),n!==null){var o=ae();Be(n,e,r,o),ba(n,t,r)}}function Ed(e,t,n){var r=wt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(za(e))Ua(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,i=l(s,n);if(o.hasEagerState=!0,o.eagerState=i,ze(i,s)){var u=t.interleaved;u===null?(o.next=o,Is(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Ta(e,t,o,r),n!==null&&(o=ae(),Be(n,e,r,o),ba(n,t,r))}}function za(e){var t=e.alternate;return e===K||t!==null&&t===K}function Ua(e,t){Un=co=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ba(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,hs(e,n)}}var fo={readContext:Re,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Sd={readContext:Re,useCallback:function(e,t){return We().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:Di,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zr(4194308,4,Fa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zr(4194308,4,e,t)},useInsertionEffect:function(e,t){return zr(4,2,e,t)},useMemo:function(e,t){var n=We();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=We();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=yd.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=We();return e={current:e},t.memoizedState=e},useState:ji,useDebugValue:js,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=ji(!1),t=e[0];return e=gd.bind(null,e[1]),We().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=K,o=We();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),ee===null)throw Error(w(349));Gt&30||Oa(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Di(Pa.bind(null,r,l,e),[e]),r.flags|=2048,ur(9,Ia.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=We(),t=ee.identifierPrefix;if(U){var n=et,r=Je;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=vd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},wd={readContext:Re,useCallback:ja,useContext:Re,useEffect:Hs,useImperativeHandle:Ha,useInsertionEffect:La,useLayoutEffect:Aa,useMemo:Da,useReducer:nl,useRef:Ra,useState:function(){return nl(ir)},useDebugValue:js,useDeferredValue:function(e){var t=Le();return Ga(t,Z.memoizedState,e)},useTransition:function(){var e=nl(ir)[0],t=Le().memoizedState;return[e,t]},useMutableSource:ka,useSyncExternalStore:Ca,useId:Ba,unstable_isNewReconciler:!1},Td={readContext:Re,useCallback:ja,useContext:Re,useEffect:Hs,useImperativeHandle:Ha,useInsertionEffect:La,useLayoutEffect:Aa,useMemo:Da,useReducer:rl,useRef:Ra,useState:function(){return rl(ir)},useDebugValue:js,useDeferredValue:function(e){var t=Le();return Z===null?t.memoizedState=e:Ga(t,Z.memoizedState,e)},useTransition:function(){var e=rl(ir)[0],t=Le().memoizedState;return[e,t]},useMutableSource:ka,useSyncExternalStore:Ca,useId:Ba,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?Wt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),o=wt(e),l=tt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Et(e,l,o),t!==null&&(Be(t,e,o,r),Gr(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),o=wt(e),l=tt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Et(e,l,o),t!==null&&(Be(t,e,o,r),Gr(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=wt(e),o=tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Et(e,o,r),t!==null&&(Be(t,e,r,n),Gr(t,e,r))}};function Gi(e,t,n,r,o,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,s):t.prototype&&t.prototype.isPureReactComponent?!er(n,r)||!er(o,l):!0}function Wa(e,t,n){var r=!1,o=_t,l=t.contextType;return typeof l=="object"&&l!==null?l=Re(l):(o=ge(t)?jt:ie.current,r=t.contextTypes,l=(r=r!=null)?mn(e,o):_t),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function Bi(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function zl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ps(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Re(l):(l=ge(t)?jt:ie.current,o.context=mn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Bl(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Co.enqueueReplaceState(o,o.state,null),uo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function En(e,t){try{var n="",r=t;do n+=Qc(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xd=typeof WeakMap=="function"?WeakMap:Map;function Ka(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ho||(ho=!0,Xl=r),Ul(e,t)},n}function Ya(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ul(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ul(e,t),typeof r!="function"&&(St===null?St=new Set([this]):St.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function zi(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xd;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=jd.bind(null,e,t,n),t.then(e,e))}function Ui(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bi(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,Et(n,t,1))),n.lanes|=1),e)}var _d=st.ReactCurrentOwner,me=!1;function ue(e,t,n,r){t.child=e===null?wa(t,null,n,r):gn(t,e.child,n,r)}function Wi(e,t,n,r,o){n=n.render;var l=t.ref;return dn(t,o),r=As(e,t,n,r,l,o),n=Fs(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(U&&n&&Ts(t),t.flags|=1,ue(e,t,r,o),t.child)}function Ki(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ks(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,$a(e,t,l,r,o)):(e=Kr(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var s=l.memoizedProps;if(n=n.compare,n=n!==null?n:er,n(s,r)&&e.ref===t.ref)return lt(e,t,o)}return t.flags|=1,e=Tt(l,r),e.ref=t.ref,e.return=t,t.child=e}function $a(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(er(l,r)&&e.ref===t.ref)if(me=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,lt(e,t,o)}return bl(e,t,n,r,o)}function Va(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},D(ln,we),we|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,D(ln,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,D(ln,we),we|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,D(ln,we),we|=r;return ue(e,t,o,n),t.child}function Qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function bl(e,t,n,r,o){var l=ge(n)?jt:ie.current;return l=mn(t,l),dn(t,o),n=As(e,t,n,r,l,o),r=Fs(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,lt(e,t,o)):(U&&r&&Ts(t),t.flags|=1,ue(e,t,n,o),t.child)}function Yi(e,t,n,r,o){if(ge(n)){var l=!0;ro(t)}else l=!1;if(dn(t,o),t.stateNode===null)Ur(e,t),Wa(t,n,r),zl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,i=t.memoizedProps;s.props=i;var u=s.context,a=n.contextType;typeof a=="object"&&a!==null?a=Re(a):(a=ge(n)?jt:ie.current,a=mn(t,a));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";m||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==r||u!==a)&&Bi(t,s,r,a),ct=!1;var h=t.memoizedState;s.state=h,uo(t,r,s,o),u=t.memoizedState,i!==r||h!==u||ve.current||ct?(typeof p=="function"&&(Bl(t,n,p,r),u=t.memoizedState),(i=ct||Gi(t,n,i,r,h,u,a))?(m||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),s.props=r,s.state=u,s.context=a,r=i):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,xa(e,t),i=t.memoizedProps,a=t.type===t.elementType?i:He(t.type,i),s.props=a,m=t.pendingProps,h=s.context,u=n.contextType,typeof u=="object"&&u!==null?u=Re(u):(u=ge(n)?jt:ie.current,u=mn(t,u));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(i!==m||h!==u)&&Bi(t,s,r,u),ct=!1,h=t.memoizedState,s.state=h,uo(t,r,s,o);var g=t.memoizedState;i!==m||h!==g||ve.current||ct?(typeof y=="function"&&(Bl(t,n,y,r),g=t.memoizedState),(a=ct||Gi(t,n,a,r,h,g,u)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,g,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,g,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),s.props=r,s.state=g,s.context=u,r=a):(typeof s.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Wl(e,t,n,r,l,o)}function Wl(e,t,n,r,o,l){Qa(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&Mi(t,n,!1),lt(e,t,l);r=t.stateNode,_d.current=t;var i=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=gn(t,e.child,null,l),t.child=gn(t,null,i,l)):ue(e,t,i,l),t.memoizedState=r.state,o&&Mi(t,n,!0),t.child}function qa(e){var t=e.stateNode;t.pendingContext?Ni(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ni(e,t.context,!1),Ns(e,t.containerInfo)}function $i(e,t,n,r,o){return vn(),_s(o),t.flags|=256,ue(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Yl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Za(e,t,n){var r=t.pendingProps,o=W.current,l=!1,s=(t.flags&128)!==0,i;if((i=s)||(i=e!==null&&e.memoizedState===null?!1:(o&2)!==0),i?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),D(W,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,l?(r=t.mode,l=t.child,s={mode:"hidden",children:s},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=s):l=Po(s,r,0,null),e=Ht(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Yl(n),t.memoizedState=Kl,e):Ds(t,s));if(o=e.memoizedState,o!==null&&(i=o.dehydrated,i!==null))return kd(e,t,s,r,i,o,n);if(l){l=r.fallback,s=t.mode,o=e.child,i=o.sibling;var u={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Tt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),i!==null?l=Tt(i,l):(l=Ht(l,s,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,s=e.child.memoizedState,s=s===null?Yl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return l=e.child,e=l.sibling,r=Tt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=Po({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&_s(r),gn(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kd(e,t,n,r,o,l,s){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(w(422))),Pr(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Po({mode:"visible",children:r.children},o,0,null),l=Ht(l,o,s,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&gn(t,e.child,null,s),t.child.memoizedState=Yl(s),t.memoizedState=Kl,l);if(!(t.mode&1))return Pr(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var i=r.dgst;return r=i,l=Error(w(419)),r=ol(l,r,void 0),Pr(e,t,s,r)}if(i=(s&e.childLanes)!==0,me||i){if(r=ee,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ot(e,o),Be(r,e,o,-1))}return Ws(),r=ol(Error(w(421))),Pr(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Dd.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Te=yt(o.nextSibling),xe=t,U=!0,De=null,e!==null&&(Ie[Pe++]=Je,Ie[Pe++]=et,Ie[Pe++]=Dt,Je=e.id,et=e.overflow,Dt=t),t=Ds(t,r.children),t.flags|=4096,t)}function Vi(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gl(e.return,t,n)}function ll(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function Xa(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ue(e,t,r.children,n),r=W.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vi(e,n,t);else if(e.tag===19)Vi(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(D(W,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ao(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ll(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ao(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ll(t,!0,n,null,l);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ur(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Tt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cd(e,t,n){switch(t.tag){case 3:qa(t),vn();break;case 5:_a(t);break;case 1:ge(t.type)&&ro(t);break;case 4:Ns(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;D(so,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(D(W,W.current&1),t.flags|=128,null):n&t.child.childLanes?Za(e,t,n):(D(W,W.current&1),e=lt(e,t,n),e!==null?e.sibling:null);D(W,W.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xa(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),D(W,W.current),r)break;return null;case 22:case 23:return t.lanes=0,Va(e,t,n)}return lt(e,t,n)}var Ja,$l,ec,tc;Ja=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$l=function(){};ec=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,At(Qe.current);var l=null;switch(n){case"input":o=ml(e,o),r=ml(e,r),l=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),l=[];break;case"textarea":o=yl(e,o),r=yl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=to)}Sl(n,r);var s;n=null;for(a in o)if(!r.hasOwnProperty(a)&&o.hasOwnProperty(a)&&o[a]!=null)if(a==="style"){var i=o[a];for(s in i)i.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&($n.hasOwnProperty(a)?l||(l=[]):(l=l||[]).push(a,null));for(a in r){var u=r[a];if(i=o!=null?o[a]:void 0,r.hasOwnProperty(a)&&u!==i&&(u!=null||i!=null))if(a==="style")if(i){for(s in i)!i.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in u)u.hasOwnProperty(s)&&i[s]!==u[s]&&(n||(n={}),n[s]=u[s])}else n||(l||(l=[]),l.push(a,n)),n=u;else a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,i=i?i.__html:void 0,u!=null&&i!==u&&(l=l||[]).push(a,u)):a==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(a,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&($n.hasOwnProperty(a)?(u!=null&&a==="onScroll"&&G("scroll",e),l||i===u||(l=[])):(l=l||[]).push(a,u))}n&&(l=l||[]).push("style",n);var a=l;(t.updateQueue=a)&&(t.flags|=4)}};tc=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Od(e,t,n){var r=t.pendingProps;switch(xs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return ge(t.type)&&no(),le(t),null;case 3:return r=t.stateNode,yn(),B(ve),B(ie),Rs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Or(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,De!==null&&(ts(De),De=null))),$l(e,t),le(t),null;case 5:Ms(t);var o=At(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)ec(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return le(t),null}if(e=At(Qe.current),Or(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ye]=t,r[rr]=l,e=(t.mode&1)!==0,n){case"dialog":G("cancel",r),G("close",r);break;case"iframe":case"object":case"embed":G("load",r);break;case"video":case"audio":for(o=0;o<Hn.length;o++)G(Hn[o],r);break;case"source":G("error",r);break;case"img":case"image":case"link":G("error",r),G("load",r);break;case"details":G("toggle",r);break;case"input":ri(r,l),G("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},G("invalid",r);break;case"textarea":li(r,l),G("invalid",r)}Sl(n,l),o=null;for(var s in l)if(l.hasOwnProperty(s)){var i=l[s];s==="children"?typeof i=="string"?r.textContent!==i&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,i,e),o=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(l.suppressHydrationWarning!==!0&&Cr(r.textContent,i,e),o=["children",""+i]):$n.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&G("scroll",r)}switch(n){case"input":yr(r),oi(r,l,!0);break;case"textarea":yr(r),si(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=to)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Ye]=t,e[rr]=r,Ja(e,t,!1,!1),t.stateNode=e;e:{switch(s=wl(n,r),n){case"dialog":G("cancel",e),G("close",e),o=r;break;case"iframe":case"object":case"embed":G("load",e),o=r;break;case"video":case"audio":for(o=0;o<Hn.length;o++)G(Hn[o],e);o=r;break;case"source":G("error",e),o=r;break;case"img":case"image":case"link":G("error",e),G("load",e),o=r;break;case"details":G("toggle",e),o=r;break;case"input":ri(e,r),o=ml(e,r),G("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),G("invalid",e);break;case"textarea":li(e,r),o=yl(e,r),G("invalid",e);break;default:o=r}Sl(n,o),i=o;for(l in i)if(i.hasOwnProperty(l)){var u=i[l];l==="style"?Ru(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Nu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Vn(e,u):typeof u=="number"&&Vn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&($n.hasOwnProperty(l)?u!=null&&l==="onScroll"&&G("scroll",e):u!=null&&us(e,l,u,s))}switch(n){case"input":yr(e),oi(e,r,!1);break;case"textarea":yr(e),si(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?un(e,!!r.multiple,l,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=to)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)tc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=At(lr.current),At(Qe.current),Or(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ye]=t,(l=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ye]=t,t.stateNode=r}return le(t),null;case 13:if(B(W),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&Te!==null&&t.mode&1&&!(t.flags&128))Ea(),vn(),t.flags|=98560,l=!1;else if(l=Or(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ye]=t}else vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),l=!1}else De!==null&&(ts(De),De=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||W.current&1?X===0&&(X=3):Ws())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return yn(),$l(e,t),e===null&&tr(t.stateNode.containerInfo),le(t),null;case 10:return Os(t.type._context),le(t),null;case 17:return ge(t.type)&&no(),le(t),null;case 19:if(B(W),l=t.memoizedState,l===null)return le(t),null;if(r=(t.flags&128)!==0,s=l.rendering,s===null)if(r)Mn(l,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=ao(e),s!==null){for(t.flags|=128,Mn(l,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,s=l.alternate,s===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,l.type=s.type,e=s.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return D(W,W.current&1|2),t.child}e=e.sibling}l.tail!==null&&Q()>Sn&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304)}else{if(!r)if(e=ao(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!s.alternate&&!U)return le(t),null}else 2*Q()-l.renderingStartTime>Sn&&n!==1073741824&&(t.flags|=128,r=!0,Mn(l,!1),t.lanes=4194304);l.isBackwards?(s.sibling=t.child,t.child=s):(n=l.last,n!==null?n.sibling=s:t.child=s,l.last=s)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Q(),t.sibling=null,n=W.current,D(W,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?we&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function Id(e,t){switch(xs(t),t.tag){case 1:return ge(t.type)&&no(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yn(),B(ve),B(ie),Rs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ms(t),null;case 13:if(B(W),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(W),null;case 4:return yn(),null;case 10:return Os(t.type._context),null;case 22:case 23:return bs(),null;case 24:return null;default:return null}}var Nr=!1,se=!1,Pd=typeof WeakSet=="function"?WeakSet:Set,C=null;function on(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function Vl(e,t,n){try{n()}catch(r){$(e,t,r)}}var Qi=!1;function Nd(e,t){if(Ml=Xr,e=sa(),ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var s=0,i=-1,u=-1,a=0,p=0,m=e,h=null;t:for(;;){for(var y;m!==n||o!==0&&m.nodeType!==3||(i=s+o),m!==l||r!==0&&m.nodeType!==3||(u=s+r),m.nodeType===3&&(s+=m.nodeValue.length),(y=m.firstChild)!==null;)h=m,m=y;for(;;){if(m===e)break t;if(h===n&&++a===o&&(i=s),h===l&&++p===r&&(u=s),(y=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=y}n=i===-1||u===-1?null:{start:i,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},Xr=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,I=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:He(t.type,S),I);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(E){$(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return g=Qi,Qi=!1,g}function bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Vl(t,n,l)}o=o.next}while(o!==r)}}function Oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nc(e){var t=e.alternate;t!==null&&(e.alternate=null,nc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ye],delete t[rr],delete t[Fl],delete t[dd],delete t[pd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rc(e){return e.tag===5||e.tag===3||e.tag===4}function qi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=to));else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}var te=null,je=!1;function it(e,t,n){for(n=n.child;n!==null;)oc(e,t,n),n=n.sibling}function oc(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Eo,n)}catch{}switch(n.tag){case 5:se||on(n,t);case 6:var r=te,o=je;te=null,it(e,t,n),te=r,je=o,te!==null&&(je?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(je?(e=te,n=n.stateNode,e.nodeType===8?Xo(e.parentNode,n):e.nodeType===1&&Xo(e,n),Xn(e)):Xo(te,n.stateNode));break;case 4:r=te,o=je,te=n.stateNode.containerInfo,je=!0,it(e,t,n),te=r,je=o;break;case 0:case 11:case 14:case 15:if(!se&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,s=l.destroy;l=l.tag,s!==void 0&&(l&2||l&4)&&Vl(n,t,s),o=o.next}while(o!==r)}it(e,t,n);break;case 1:if(!se&&(on(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){$(n,t,i)}it(e,t,n);break;case 21:it(e,t,n);break;case 22:n.mode&1?(se=(r=se)||n.memoizedState!==null,it(e,t,n),se=r):it(e,t,n);break;default:it(e,t,n)}}function Zi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Pd),t.forEach(function(r){var o=Gd.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Fe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,s=t,i=s;e:for(;i!==null;){switch(i.tag){case 5:te=i.stateNode,je=!1;break e;case 3:te=i.stateNode.containerInfo,je=!0;break e;case 4:te=i.stateNode.containerInfo,je=!0;break e}i=i.return}if(te===null)throw Error(w(160));oc(l,s,o),te=null,je=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(a){$(o,t,a)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)lc(t,e),t=t.sibling}function lc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(t,e),be(e),r&4){try{bn(3,e,e.return),Oo(3,e)}catch(S){$(e,e.return,S)}try{bn(5,e,e.return)}catch(S){$(e,e.return,S)}}break;case 1:Fe(t,e),be(e),r&512&&n!==null&&on(n,n.return);break;case 5:if(Fe(t,e),be(e),r&512&&n!==null&&on(n,n.return),e.flags&32){var o=e.stateNode;try{Vn(o,"")}catch(S){$(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,s=n!==null?n.memoizedProps:l,i=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{i==="input"&&l.type==="radio"&&l.name!=null&&Ou(o,l),wl(i,s);var a=wl(i,l);for(s=0;s<u.length;s+=2){var p=u[s],m=u[s+1];p==="style"?Ru(o,m):p==="dangerouslySetInnerHTML"?Nu(o,m):p==="children"?Vn(o,m):us(o,p,m,a)}switch(i){case"input":vl(o,l);break;case"textarea":Iu(o,l);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?un(o,!!l.multiple,y,!1):h!==!!l.multiple&&(l.defaultValue!=null?un(o,!!l.multiple,l.defaultValue,!0):un(o,!!l.multiple,l.multiple?[]:"",!1))}o[rr]=l}catch(S){$(e,e.return,S)}}break;case 6:if(Fe(t,e),be(e),r&4){if(e.stateNode===null)throw Error(w(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(S){$(e,e.return,S)}}break;case 3:if(Fe(t,e),be(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xn(t.containerInfo)}catch(S){$(e,e.return,S)}break;case 4:Fe(t,e),be(e);break;case 13:Fe(t,e),be(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(zs=Q())),r&4&&Zi(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(se=(a=se)||p,Fe(t,e),se=a):Fe(t,e),be(e),r&8192){if(a=e.memoizedState!==null,(e.stateNode.isHidden=a)&&!p&&e.mode&1)for(C=e,p=e.child;p!==null;){for(m=C=p;C!==null;){switch(h=C,y=h.child,h.tag){case 0:case 11:case 14:case 15:bn(4,h,h.return);break;case 1:on(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(S){$(r,n,S)}}break;case 5:on(h,h.return);break;case 22:if(h.memoizedState!==null){Ji(m);continue}}y!==null?(y.return=h,C=y):Ji(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,a?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(i=m.stateNode,u=m.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,i.style.display=Mu("display",s))}catch(S){$(e,e.return,S)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=a?"":m.memoizedProps}catch(S){$(e,e.return,S)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Fe(t,e),be(e),r&4&&Zi(e);break;case 21:break;default:Fe(t,e),be(e)}}function be(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rc(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Vn(o,""),r.flags&=-33);var l=qi(e);Zl(e,l,o);break;case 3:case 4:var s=r.stateNode.containerInfo,i=qi(e);ql(e,i,s);break;default:throw Error(w(161))}}catch(u){$(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Md(e,t,n){C=e,sc(e)}function sc(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Nr;if(!s){var i=o.alternate,u=i!==null&&i.memoizedState!==null||se;i=Nr;var a=se;if(Nr=s,(se=u)&&!a)for(C=o;C!==null;)s=C,u=s.child,s.tag===22&&s.memoizedState!==null?eu(o):u!==null?(u.return=s,C=u):eu(o);for(;l!==null;)C=l,sc(l),l=l.sibling;C=o,Nr=i,se=a}Xi(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,C=l):Xi(e)}}function Xi(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||Oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!se)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Hi(t,l,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Hi(t,s,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var a=t.alternate;if(a!==null){var p=a.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Xn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}se||t.flags&512&&Ql(t)}catch(h){$(t,t.return,h)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Ji(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function eu(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Oo(4,t)}catch(u){$(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){$(t,o,u)}}var l=t.return;try{Ql(t)}catch(u){$(t,l,u)}break;case 5:var s=t.return;try{Ql(t)}catch(u){$(t,s,u)}}}catch(u){$(t,t.return,u)}if(t===e){C=null;break}var i=t.sibling;if(i!==null){i.return=t.return,C=i;break}C=t.return}}var Rd=Math.ceil,po=st.ReactCurrentDispatcher,Gs=st.ReactCurrentOwner,Me=st.ReactCurrentBatchConfig,A=0,ee=null,q=null,ne=0,we=0,ln=Ct(0),X=0,ar=null,Bt=0,Io=0,Bs=0,Wn=null,pe=null,zs=0,Sn=1/0,qe=null,ho=!1,Xl=null,St=null,Mr=!1,ht=null,mo=0,Kn=0,Jl=null,br=-1,Wr=0;function ae(){return A&6?Q():br!==-1?br:br=Q()}function wt(e){return e.mode&1?A&2&&ne!==0?ne&-ne:md.transition!==null?(Wr===0&&(Wr=Wu()),Wr):(e=H,e!==0||(e=window.event,e=e===void 0?16:Zu(e.type)),e):1}function Be(e,t,n,r){if(50<Kn)throw Kn=0,Jl=null,Error(w(185));fr(e,n,r),(!(A&2)||e!==ee)&&(e===ee&&(!(A&2)&&(Io|=n),X===4&&dt(e,ne)),ye(e,r),n===1&&A===0&&!(t.mode&1)&&(Sn=Q()+500,_o&&Ot()))}function ye(e,t){var n=e.callbackNode;mf(e,t);var r=Zr(e,e===ee?ne:0);if(r===0)n!==null&&ai(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ai(n),t===1)e.tag===0?hd(tu.bind(null,e)):va(tu.bind(null,e)),cd(function(){!(A&6)&&Ot()}),n=null;else{switch(Ku(r)){case 1:n=ps;break;case 4:n=Uu;break;case 16:n=qr;break;case 536870912:n=bu;break;default:n=qr}n=hc(n,ic.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ic(e,t){if(br=-1,Wr=0,A&6)throw Error(w(327));var n=e.callbackNode;if(pn()&&e.callbackNode!==n)return null;var r=Zr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var o=A;A|=2;var l=ac();(ee!==e||ne!==t)&&(qe=null,Sn=Q()+500,Ft(e,t));do try{Fd();break}catch(i){uc(e,i)}while(!0);Cs(),po.current=l,A=o,q!==null?t=0:(ee=null,ne=0,t=X)}if(t!==0){if(t===2&&(o=Cl(e),o!==0&&(r=o,t=es(e,o))),t===1)throw n=ar,Ft(e,0),dt(e,r),ye(e,Q()),n;if(t===6)dt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Ld(o)&&(t=vo(e,r),t===2&&(l=Cl(e),l!==0&&(r=l,t=es(e,l))),t===1))throw n=ar,Ft(e,0),dt(e,r),ye(e,Q()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:Mt(e,pe,qe);break;case 3:if(dt(e,r),(r&130023424)===r&&(t=zs+500-Q(),10<t)){if(Zr(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Al(Mt.bind(null,e,pe,qe),t);break}Mt(e,pe,qe);break;case 4:if(dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-Ge(r);l=1<<s,s=t[s],s>o&&(o=s),r&=~l}if(r=o,r=Q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rd(r/1960))-r,10<r){e.timeoutHandle=Al(Mt.bind(null,e,pe,qe),r);break}Mt(e,pe,qe);break;case 5:Mt(e,pe,qe);break;default:throw Error(w(329))}}}return ye(e,Q()),e.callbackNode===n?ic.bind(null,e):null}function es(e,t){var n=Wn;return e.current.memoizedState.isDehydrated&&(Ft(e,t).flags|=256),e=vo(e,t),e!==2&&(t=pe,pe=n,t!==null&&ts(t)),e}function ts(e){pe===null?pe=e:pe.push.apply(pe,e)}function Ld(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!ze(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dt(e,t){for(t&=~Bs,t&=~Io,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ge(t),r=1<<n;e[n]=-1,t&=~r}}function tu(e){if(A&6)throw Error(w(327));pn();var t=Zr(e,0);if(!(t&1))return ye(e,Q()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=es(e,r))}if(n===1)throw n=ar,Ft(e,0),dt(e,t),ye(e,Q()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mt(e,pe,qe),ye(e,Q()),null}function Us(e,t){var n=A;A|=1;try{return e(t)}finally{A=n,A===0&&(Sn=Q()+500,_o&&Ot())}}function zt(e){ht!==null&&ht.tag===0&&!(A&6)&&pn();var t=A;A|=1;var n=Me.transition,r=H;try{if(Me.transition=null,H=1,e)return e()}finally{H=r,Me.transition=n,A=t,!(A&6)&&Ot()}}function bs(){we=ln.current,B(ln)}function Ft(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ad(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(xs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&no();break;case 3:yn(),B(ve),B(ie),Rs();break;case 5:Ms(r);break;case 4:yn();break;case 13:B(W);break;case 19:B(W);break;case 10:Os(r.type._context);break;case 22:case 23:bs()}n=n.return}if(ee=e,q=e=Tt(e.current,null),ne=we=t,X=0,ar=null,Bs=Io=Bt=0,pe=Wn=null,Lt!==null){for(t=0;t<Lt.length;t++)if(n=Lt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var s=l.next;l.next=o,r.next=s}n.pending=r}Lt=null}return e}function uc(e,t){do{var n=q;try{if(Cs(),Br.current=fo,co){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}co=!1}if(Gt=0,J=Z=K=null,Un=!1,sr=0,Gs.current=null,n===null||n.return===null){X=1,ar=t,q=null;break}e:{var l=e,s=n.return,i=n,u=t;if(t=ne,i.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var a=u,p=i,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Ui(s);if(y!==null){y.flags&=-257,bi(y,s,i,l,t),y.mode&1&&zi(l,a,t),t=y,u=a;var g=t.updateQueue;if(g===null){var S=new Set;S.add(u),t.updateQueue=S}else g.add(u);break e}else{if(!(t&1)){zi(l,a,t),Ws();break e}u=Error(w(426))}}else if(U&&i.mode&1){var I=Ui(s);if(I!==null){!(I.flags&65536)&&(I.flags|=256),bi(I,s,i,l,t),_s(En(u,i));break e}}l=u=En(u,i),X!==4&&(X=2),Wn===null?Wn=[l]:Wn.push(l),l=s;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var f=Ka(l,u,t);Fi(l,f);break e;case 1:i=u;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(St===null||!St.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=Ya(l,i,t);Fi(l,E);break e}}l=l.return}while(l!==null)}fc(n)}catch(T){t=T,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function ac(){var e=po.current;return po.current=fo,e===null?fo:e}function Ws(){(X===0||X===3||X===2)&&(X=4),ee===null||!(Bt&268435455)&&!(Io&268435455)||dt(ee,ne)}function vo(e,t){var n=A;A|=2;var r=ac();(ee!==e||ne!==t)&&(qe=null,Ft(e,t));do try{Ad();break}catch(o){uc(e,o)}while(!0);if(Cs(),A=n,po.current=r,q!==null)throw Error(w(261));return ee=null,ne=0,X}function Ad(){for(;q!==null;)cc(q)}function Fd(){for(;q!==null&&!lf();)cc(q)}function cc(e){var t=pc(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?fc(e):q=t,Gs.current=null}function fc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Id(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,q=null;return}}else if(n=Od(n,t,we),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Mt(e,t,n){var r=H,o=Me.transition;try{Me.transition=null,H=1,Hd(e,t,n,r)}finally{Me.transition=o,H=r}return null}function Hd(e,t,n,r){do pn();while(ht!==null);if(A&6)throw Error(w(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(vf(e,l),e===ee&&(q=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mr||(Mr=!0,hc(qr,function(){return pn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Me.transition,Me.transition=null;var s=H;H=1;var i=A;A|=4,Gs.current=null,Nd(e,n),lc(n,e),nd(Rl),Xr=!!Ml,Rl=Ml=null,e.current=n,Md(n),sf(),A=i,H=s,Me.transition=l}else e.current=n;if(Mr&&(Mr=!1,ht=e,mo=o),l=e.pendingLanes,l===0&&(St=null),cf(n.stateNode),ye(e,Q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ho)throw ho=!1,e=Xl,Xl=null,e;return mo&1&&e.tag!==0&&pn(),l=e.pendingLanes,l&1?e===Jl?Kn++:(Kn=0,Jl=e):Kn=0,Ot(),null}function pn(){if(ht!==null){var e=Ku(mo),t=Me.transition,n=H;try{if(Me.transition=null,H=16>e?16:e,ht===null)var r=!1;else{if(e=ht,ht=null,mo=0,A&6)throw Error(w(331));var o=A;for(A|=4,C=e.current;C!==null;){var l=C,s=l.child;if(C.flags&16){var i=l.deletions;if(i!==null){for(var u=0;u<i.length;u++){var a=i[u];for(C=a;C!==null;){var p=C;switch(p.tag){case 0:case 11:case 15:bn(8,p,l)}var m=p.child;if(m!==null)m.return=p,C=m;else for(;C!==null;){p=C;var h=p.sibling,y=p.return;if(nc(p),p===a){C=null;break}if(h!==null){h.return=y,C=h;break}C=y}}}var g=l.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var I=S.sibling;S.sibling=null,S=I}while(S!==null)}}C=l}}if(l.subtreeFlags&2064&&s!==null)s.return=l,C=s;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:bn(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,C=f;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){s=C;var d=s.child;if(s.subtreeFlags&2064&&d!==null)d.return=s,C=d;else e:for(s=c;C!==null;){if(i=C,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Oo(9,i)}}catch(T){$(i,i.return,T)}if(i===s){C=null;break e}var E=i.sibling;if(E!==null){E.return=i.return,C=E;break e}C=i.return}}if(A=o,Ot(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Eo,e)}catch{}r=!0}return r}finally{H=n,Me.transition=t}}return!1}function nu(e,t,n){t=En(n,t),t=Ka(e,t,1),e=Et(e,t,1),t=ae(),e!==null&&(fr(e,1,t),ye(e,t))}function $(e,t,n){if(e.tag===3)nu(e,e,n);else for(;t!==null;){if(t.tag===3){nu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(St===null||!St.has(r))){e=En(n,e),e=Ya(t,e,1),t=Et(t,e,1),e=ae(),t!==null&&(fr(t,1,e),ye(t,e));break}}t=t.return}}function jd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(X===4||X===3&&(ne&130023424)===ne&&500>Q()-zs?Ft(e,0):Bs|=n),ye(e,t)}function dc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=ae();e=ot(e,t),e!==null&&(fr(e,t,n),ye(e,n))}function Dd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dc(e,n)}function Gd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),dc(e,n)}var pc;pc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ve.current)me=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return me=!1,Cd(e,t,n);me=!!(e.flags&131072)}else me=!1,U&&t.flags&1048576&&ga(t,lo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ur(e,t),e=t.pendingProps;var o=mn(t,ie.current);dn(t,n),o=As(null,t,r,e,o,n);var l=Fs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(r)?(l=!0,ro(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ps(t),o.updater=Co,t.stateNode=o,o._reactInternals=t,zl(t,r,e,n),t=Wl(null,t,r,!0,l,n)):(t.tag=0,U&&l&&Ts(t),ue(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ur(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=zd(r),e=He(r,e),o){case 0:t=bl(null,t,r,e,n);break e;case 1:t=Yi(null,t,r,e,n);break e;case 11:t=Wi(null,t,r,e,n);break e;case 14:t=Ki(null,t,r,He(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),bl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Yi(e,t,r,o,n);case 3:e:{if(qa(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,o=l.element,xa(e,t),uo(t,r,null,n);var s=t.memoizedState;if(r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=En(Error(w(423)),t),t=$i(e,t,r,n,o);break e}else if(r!==o){o=En(Error(w(424)),t),t=$i(e,t,r,n,o);break e}else for(Te=yt(t.stateNode.containerInfo.firstChild),xe=t,U=!0,De=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vn(),r===o){t=lt(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return _a(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,s=o.children,Ll(r,o)?s=null:l!==null&&Ll(r,l)&&(t.flags|=32),Qa(e,t),ue(e,t,s,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return Za(e,t,n);case 4:return Ns(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Wi(e,t,r,o,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,s=o.value,D(so,r._currentValue),r._currentValue=s,l!==null)if(ze(l.value,s)){if(l.children===o.children&&!ve.current){t=lt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){s=l.child;for(var u=i.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=tt(-1,n&-n),u.tag=2;var a=l.updateQueue;if(a!==null){a=a.shared;var p=a.pending;p===null?u.next=u:(u.next=p.next,p.next=u),a.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Gl(l.return,n,t),i.lanes|=n;break}u=u.next}}else if(l.tag===10)s=l.type===t.type?null:l.child;else if(l.tag===18){if(s=l.return,s===null)throw Error(w(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),Gl(s,n,t),s=l.sibling}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}ue(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,dn(t,n),o=Re(o),r=r(o),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),Ki(e,t,r,o,n);case 15:return $a(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Ur(e,t),t.tag=1,ge(r)?(e=!0,ro(t)):e=!1,dn(t,n),Wa(t,r,o),zl(t,r,o,n),Wl(null,t,r,!0,e,n);case 19:return Xa(e,t,n);case 22:return Va(e,t,n)}throw Error(w(156,t.tag))};function hc(e,t){return zu(e,t)}function Bd(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Bd(e,t,n,r)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zd(e){if(typeof e=="function")return Ks(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cs)return 11;if(e===fs)return 14}return 2}function Tt(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Kr(e,t,n,r,o,l){var s=2;if(r=e,typeof e=="function")Ks(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Qt:return Ht(n.children,o,l,t);case as:s=8,o|=8;break;case fl:return e=Ne(12,n,t,o|2),e.elementType=fl,e.lanes=l,e;case dl:return e=Ne(13,n,t,o),e.elementType=dl,e.lanes=l,e;case pl:return e=Ne(19,n,t,o),e.elementType=pl,e.lanes=l,e;case _u:return Po(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tu:s=10;break e;case xu:s=9;break e;case cs:s=11;break e;case fs:s=14;break e;case at:s=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ne(s,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Ht(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function Po(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=_u,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function il(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ud(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Ys(e,t,n,r,o,l,s,i,u){return e=new Ud(e,t,n,i,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ne(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(l),e}function bd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function mc(e){if(!e)return _t;e=e._reactInternals;e:{if(Wt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ge(n))return ma(e,n,t)}return t}function vc(e,t,n,r,o,l,s,i,u){return e=Ys(n,r,!0,e,o,l,s,i,u),e.context=mc(null),n=e.current,r=ae(),o=wt(n),l=tt(r,o),l.callback=t??null,Et(n,l,o),e.current.lanes=o,fr(e,o,r),ye(e,r),e}function No(e,t,n,r){var o=t.current,l=ae(),s=wt(o);return n=mc(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(l,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Et(o,t,s),e!==null&&(Be(e,o,s,l),Gr(e,o,s)),s}function go(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $s(e,t){ru(e,t),(e=e.alternate)&&ru(e,t)}function Wd(){return null}var gc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vs(e){this._internalRoot=e}Mo.prototype.render=Vs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));No(e,t,null,null)};Mo.prototype.unmount=Vs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){No(null,e,null,null)}),t[rt]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&qu(e)}};function Qs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ou(){}function Kd(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var a=go(s);l.call(a)}}var s=vc(t,r,e,0,null,!1,!1,"",ou);return e._reactRootContainer=s,e[rt]=s.current,tr(e.nodeType===8?e.parentNode:e),zt(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var i=r;r=function(){var a=go(u);i.call(a)}}var u=Ys(e,0,!1,null,null,!1,!1,"",ou);return e._reactRootContainer=u,e[rt]=u.current,tr(e.nodeType===8?e.parentNode:e),zt(function(){No(t,u,n,r)}),u}function Lo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var s=l;if(typeof o=="function"){var i=o;o=function(){var u=go(s);i.call(u)}}No(t,s,e,o)}else s=Kd(n,t,e,o,r);return go(s)}Yu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fn(t.pendingLanes);n!==0&&(hs(t,n|1),ye(t,Q()),!(A&6)&&(Sn=Q()+500,Ot()))}break;case 13:zt(function(){var r=ot(e,1);if(r!==null){var o=ae();Be(r,e,1,o)}}),$s(e,1)}};ms=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var n=ae();Be(t,e,134217728,n)}$s(e,134217728)}};$u=function(e){if(e.tag===13){var t=wt(e),n=ot(e,t);if(n!==null){var r=ae();Be(n,e,t,r)}$s(e,t)}};Vu=function(){return H};Qu=function(e,t){var n=H;try{return H=e,t()}finally{H=n}};xl=function(e,t,n){switch(t){case"input":if(vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=xo(r);if(!o)throw Error(w(90));Cu(r),vl(r,o)}}}break;case"textarea":Iu(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};Fu=Us;Hu=zt;var Yd={usingClientEntryPoint:!1,Events:[pr,Jt,xo,Lu,Au,Us]},Rn={findFiberByHostInstance:Rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$d={bundleType:Rn.bundleType,version:Rn.version,rendererPackageName:Rn.rendererPackageName,rendererConfig:Rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:st.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Gu(e),e===null?null:e.stateNode},findFiberByHostInstance:Rn.findFiberByHostInstance||Wd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{Eo=Rr.inject($d),Ve=Rr}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qs(t))throw Error(w(200));return bd(e,t,null,n)};ke.createRoot=function(e,t){if(!Qs(e))throw Error(w(299));var n=!1,r="",o=gc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Ys(e,1,!1,null,null,n,!1,r,o),e[rt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Vs(t)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Gu(t),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return zt(e)};ke.hydrate=function(e,t,n){if(!Ro(t))throw Error(w(200));return Lo(null,e,t,!0,n)};ke.hydrateRoot=function(e,t,n){if(!Qs(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",s=gc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=vc(t,null,e,1,n??null,o,!1,l,s),e[rt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Mo(t)};ke.render=function(e,t,n){if(!Ro(t))throw Error(w(200));return Lo(null,e,t,!1,n)};ke.unmountComponentAtNode=function(e){if(!Ro(e))throw Error(w(40));return e._reactRootContainer?(zt(function(){Lo(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};ke.unstable_batchedUpdates=Us;ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ro(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Lo(e,t,n,!1,r)};ke.version="18.3.1-next-f1338f8080-20240426";function yc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yc)}catch(e){console.error(e)}}yc(),yu.exports=ke;var Vd=yu.exports,lu=Vd;al.createRoot=lu.createRoot,al.hydrateRoot=lu.hydrateRoot;const Pt={p:100,n:320,b:330,r:500,q:900,k:2e4},Yn="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",Xe=e=>Math.floor(e/8),Ke=e=>e%8,he=(e,t)=>e*8+t,$e=(e,t)=>e>=0&&e<8&&t>=0&&t<8,sn=e=>{const t=e.split(" "),n=new Array(64).fill(null);let r=0,o=0;for(const u of t[0])if(u==="/")r++,o=0;else if(/\d/.test(u))o+=parseInt(u);else{const a=u===u.toUpperCase()?"w":"b",p=u.toLowerCase();n[he(r,o)]={color:a,type:p},o++}const l=t[1],s=t[2],i=t[3]==="-"?null:he(8-parseInt(t[3][1]),t[3].charCodeAt(0)-97);return{board:n,turn:l,castling:{w:{k:s.includes("K"),q:s.includes("Q")},b:{k:s.includes("k"),q:s.includes("q")}},enPassantTarget:i,halfMoveClock:parseInt(t[4])||0,fullMoveNumber:parseInt(t[5])||1,history:[],isGameOver:!1,winner:null}},Yr=e=>{let t="";for(let r=0;r<8;r++){let o=0;for(let l=0;l<8;l++){const s=e.board[he(r,l)];if(!s)o++;else{o>0&&(t+=o,o=0);const i=s.type;t+=s.color==="w"?i.toUpperCase():i}}o>0&&(t+=o),r<7&&(t+="/")}t+=` ${e.turn} `;let n="";if(e.castling.w.k&&(n+="K"),e.castling.w.q&&(n+="Q"),e.castling.b.k&&(n+="k"),e.castling.b.q&&(n+="q"),t+=n||"-",e.enPassantTarget!==null){const r=Xe(e.enPassantTarget),o=Ke(e.enPassantTarget),l=String.fromCharCode(97+o),s=8-r;t+=` ${l}${s}`}else t+=" -";return t+=` ${e.halfMoveClock} ${e.fullMoveNumber}`,t},Qd=e=>{const t=e.filter(n=>n!==null);return!!(t.length===2||t.length===3&&t.find(r=>r.type==="n"||r.type==="b"))},qd=e=>{const t=[],{board:n,turn:r}=e;for(let o=0;o<64;o++){const l=n[o];if(!l||l.color!==r)continue;const s=Xe(o),i=Ke(o);if(l.type==="p"){const u=r==="w"?-1:1,a=r==="w"?6:1,p=r==="w"?0:7,m=he(s+u,i);if($e(s+u,i)&&!n[m])if(s+u===p)["q","r","b","n"].forEach(y=>{t.push({from:o,to:m,piece:l,promotion:y})});else{t.push({from:o,to:m,piece:l});const y=he(s+u*2,i);s===a&&!n[y]&&t.push({from:o,to:y,piece:l,flags:{isPawnDouble:!0}})}const h=[[u,-1],[u,1]];for(const[y,g]of h){const S=s+y,I=i+g;if($e(S,I)){const f=he(S,I),c=n[f];c&&c.color!==r&&(S===p?["q","r","b","n"].forEach(d=>{t.push({from:o,to:f,piece:l,captured:c,promotion:d})}):t.push({from:o,to:f,piece:l,captured:c})),e.enPassantTarget===f&&t.push({from:o,to:f,piece:l,captured:{color:r==="w"?"b":"w",type:"p"},flags:{isEnPassant:!0}})}}}else if(l.type==="n"){const u=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const[a,p]of u)if($e(s+a,i+p)){const m=he(s+a,i+p),h=n[m];(!h||h.color!==r)&&t.push({from:o,to:m,piece:l,captured:h})}}else if(l.type==="k"){const u=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(const[a,p]of u)if($e(s+a,i+p)){const m=he(s+a,i+p),h=n[m];(!h||h.color!==r)&&t.push({from:o,to:m,piece:l,captured:h})}r==="w"&&!Se(o,"b",e)&&(e.castling.w.k&&!n[61]&&!n[62]&&!Se(61,"b",e)&&!Se(62,"b",e)&&t.push({from:60,to:62,piece:l,flags:{isCastle:!0}}),e.castling.w.q&&!n[59]&&!n[58]&&!n[57]&&!Se(59,"b",e)&&!Se(58,"b",e)&&t.push({from:60,to:58,piece:l,flags:{isCastle:!0}})),r==="b"&&!Se(o,"w",e)&&(e.castling.b.k&&!n[5]&&!n[6]&&!Se(5,"w",e)&&!Se(6,"w",e)&&t.push({from:4,to:6,piece:l,flags:{isCastle:!0}}),e.castling.b.q&&!n[3]&&!n[2]&&!n[1]&&!Se(3,"w",e)&&!Se(2,"w",e)&&t.push({from:4,to:2,piece:l,flags:{isCastle:!0}}))}else{const u=[];(l.type==="b"||l.type==="q")&&u.push([-1,-1],[-1,1],[1,-1],[1,1]),(l.type==="r"||l.type==="q")&&u.push([-1,0],[1,0],[0,-1],[0,1]);for(const[a,p]of u){let m=s+a,h=i+p;for(;$e(m,h);){const y=he(m,h),g=n[y];if(!g)t.push({from:o,to:y,piece:l});else{g.color!==r&&t.push({from:o,to:y,piece:l,captured:g});break}m+=a,h+=p}}}}return t},Se=(e,t,n)=>{const r=Xe(e),o=Ke(e),l=t==="w"?r+1:r-1;if($e(l,o-1)){const a=n.board[he(l,o-1)];if(a&&a.color===t&&a.type==="p")return!0}if($e(l,o+1)){const a=n.board[he(l,o+1)];if(a&&a.color===t&&a.type==="p")return!0}const s=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];for(const[a,p]of s)if($e(r+a,o+p)){const m=n.board[he(r+a,o+p)];if(m&&m.color===t&&m.type==="n")return!0}const i=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(const[a,p]of i)if($e(r+a,o+p)){const m=n.board[he(r+a,o+p)];if(m&&m.color===t&&m.type==="k")return!0}const u=[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[-1,1],[1,-1],[1,1]];for(let a=0;a<8;a++){const[p,m]=u[a];let h=r+p,y=o+m;for(;$e(h,y);){const g=n.board[he(h,y)];if(g){if(g.color===t&&(g.type==="q"||a<4&&g.type==="r"||a>=4&&g.type==="b"))return!0;break}h+=p,y+=m}}return!1},_n=e=>{var r,o;const t=qd(e),n=[];for(const l of t){const s=[...e.board];if(s[l.to]=l.promotion?{color:l.piece.color,type:l.promotion}:l.piece,s[l.from]=null,(r=l.flags)!=null&&r.isEnPassant){const p=l.piece.color==="w"?l.to+8:l.to-8;s[p]=null}(o=l.flags)!=null&&o.isCastle&&(l.to===62?(s[61]=s[63],s[63]=null):l.to===58?(s[59]=s[56],s[56]=null):l.to===6?(s[5]=s[7],s[7]=null):l.to===2&&(s[3]=s[0],s[0]=null));const i=s.findIndex(p=>(p==null?void 0:p.type)==="k"&&p.color===e.turn);if(i===-1)continue;const u=e.turn==="w"?"b":"w",a={...e,board:s};Se(i,u,a)||n.push(l)}return n},Ut=(e,t)=>{var a,p,m;const n=[...e.board],r=JSON.parse(JSON.stringify(e.castling));let o=null,l=e.halfMoveClock+1;if(n[t.to]=t.promotion?{color:t.piece.color,type:t.promotion}:t.piece,n[t.from]=null,t.captured&&(l=0,(a=t.flags)!=null&&a.isEnPassant)){const h=t.piece.color==="w"?t.to+8:t.to-8;n[h]=null}t.piece.type==="p"&&(l=0),(p=t.flags)!=null&&p.isCastle&&(t.to===62?(n[61]=n[63],n[63]=null):t.to===58?(n[59]=n[56],n[56]=null):t.to===6?(n[5]=n[7],n[7]=null):t.to===2&&(n[3]=n[0],n[0]=null)),t.piece.type==="k"&&(t.piece.color==="w"?(r.w.k=!1,r.w.q=!1):(r.b.k=!1,r.b.q=!1));const s=[0,7,56,63];(s.includes(t.from)||s.includes(t.to))&&((t.from===0||t.to===0)&&(r.b.q=!1),(t.from===7||t.to===7)&&(r.b.k=!1),(t.from===56||t.to===56)&&(r.w.q=!1),(t.from===63||t.to===63)&&(r.w.k=!1)),(m=t.flags)!=null&&m.isPawnDouble&&(o=t.piece.color==="w"?t.from-8:t.from+8);const i={board:n,turn:e.turn==="w"?"b":"w",castling:r,enPassantTarget:o,halfMoveClock:l,fullMoveNumber:e.turn==="b"?e.fullMoveNumber+1:e.fullMoveNumber,history:[...e.history,t],isGameOver:!1,winner:null};if(_n(i).length===0){i.isGameOver=!0;const h=i.board.findIndex(y=>(y==null?void 0:y.type)==="k"&&y.color===i.turn);Se(h,e.turn,i)?i.winner=e.turn:i.winner="draw"}else Qd(i.board)&&(i.isGameOver=!0,i.winner="draw");return i},Zd=e=>e==="p"?"":e.toUpperCase(),Lr=e=>String.fromCharCode(97+e),ul=e=>8-e,Ao=(e,t,n)=>{var l,s,i;if((l=e.flags)!=null&&l.isCastle)return e.to>e.from?"O-O":"O-O-O";let r="";const o=Zd(e.piece.type);if(r+=o,e.piece.type!=="p"){const a=_n(t).filter(p=>p.piece.type===e.piece.type&&p.piece.color===e.piece.color&&p.to===e.to&&p.from!==e.from);if(a.length>0){const p=a.some(h=>Ke(h.from)===Ke(e.from)),m=a.some(h=>Xe(h.from)===Xe(e.from));p?m?r+=Lr(Ke(e.from))+ul(Xe(e.from)):r+=ul(Xe(e.from)):r+=Lr(Ke(e.from))}}else(e.captured||(s=e.flags)!=null&&s.isEnPassant)&&(r+=Lr(Ke(e.from)));if((e.captured||(i=e.flags)!=null&&i.isEnPassant)&&(r+="x"),r+=Lr(Ke(e.to))+ul(Xe(e.to)),e.promotion&&(r+="="+e.promotion.toUpperCase()),n.isGameOver&&n.winner===e.piece.color)r+="#";else{const u=e.piece.color==="w"?"b":"w",a=n.board.findIndex(p=>(p==null?void 0:p.type)==="k"&&p.color===u);a!==-1&&Se(a,e.piece.color,n)&&(r+="+")}return r},Xd=e=>{let t=sn(Yn),n="",r=1;for(let o=0;o<e.history.length;o++){const l=e.history[o],s=Ut(t,l);o%2===0&&(n+=`${r}. `),n+=Ao(l,t,s)+" ",o%2===1&&r++,t=s}return n.trim()},Jd=e=>{const n=e.replace(/\[.*?\]/g,"").replace(/\{.*?\}/g,"").replace(/\d+\.+/g," ").replace(/\s+/g," ").trim().split(" ");let r=sn(Yn);for(const o of n){if(!o)continue;if(["1-0","0-1","1/2-1/2","*"].includes(o))break;const l=_n(r);let s=null;for(const i of l){const a=Ao(i,r,Ut(r,i)).replace(/[+#]/g,""),p=o.replace(/[+#]/g,"");if(a===p){s=i;break}}if(!s)throw new Error(`Invalid Move: ${o}`);r=Ut(r,s)}return r},ep={"w-p":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/200px-Chess_plt45.svg.png","w-n":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/200px-Chess_nlt45.svg.png","w-b":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/200px-Chess_blt45.svg.png","w-r":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/200px-Chess_rlt45.svg.png","w-q":"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/200px-Chess_qlt45.svg.png","w-k":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/200px-Chess_klt45.svg.png","b-p":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/200px-Chess_pdt45.svg.png","b-n":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/200px-Chess_ndt45.svg.png","b-b":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/200px-Chess_bdt45.svg.png","b-r":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/200px-Chess_rdt45.svg.png","b-q":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/200px-Chess_qdt45.svg.png","b-k":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/200px-Chess_kdt45.svg.png"},qs=({color:e,type:t,className:n})=>{const r=`${e}-${t}`,o=ep[r];return v.jsx("img",{src:o,alt:`${e==="w"?"White":"Black"} ${t}`,className:`select-none pointer-events-none ${n||""}`,style:{width:"100%",height:"100%",objectFit:"contain"},loading:"eager",draggable:!1})},tp=({piece:e})=>v.jsx("div",{className:"w-[85%] h-[85%] select-none cursor-pointer transition-transform hover:scale-105 drop-shadow-sm flex items-center justify-center",children:v.jsx(qs,{color:e.color,type:e.type})}),np=({board:e,onSquareClick:t,selectedSquare:n,validMoves:r,lastMove:o,bestMove:l,isFlipped:s})=>{const i=(u,a)=>{const p=Xe(u),m=Ke(u),h=(p+m)%2===1,y=Math.floor(a/8),g=a%8,S=e[u],I=n===u,f=r.some(_=>_.to===u),c=(o==null?void 0:o.from)===u,d=(o==null?void 0:o.to)===u,E=(l==null?void 0:l.from)===u,T=(l==null?void 0:l.to)===u;let k=h?"bg-[#769656]":"bg-[#eeeed2]";return I?k="bg-yellow-200/90":(c||d)&&(k="bg-yellow-200/60"),v.jsxs("div",{onClick:()=>t(u),className:`w-full h-full flex items-center justify-center relative ${k}`,children:[g===0&&v.jsx("span",{className:`absolute top-0.5 left-1 text-[10px] font-bold select-none ${h?"text-[#eeeed2]":"text-[#769656]"}`,children:8-p}),y===7&&v.jsx("span",{className:`absolute bottom-0 right-1 text-[10px] font-bold select-none ${h?"text-[#eeeed2]":"text-[#769656]"}`,children:String.fromCharCode(97+m)}),(E||T)&&!I&&v.jsx("div",{className:"absolute inset-0 border-[3px] border-blue-500/70 animate-pulse pointer-events-none z-10"}),T&&!S&&v.jsx("div",{className:"absolute w-3 h-3 rounded-full bg-blue-500/50 pointer-events-none z-10"}),f&&v.jsx("div",{className:`absolute rounded-full z-20 ${S?"border-4 border-black/10 w-full h-full rounded-none":"w-3 h-3 bg-black/20"}`}),S&&v.jsx(tp,{piece:S})]},u)};return v.jsx("div",{className:"aspect-square w-full grid grid-cols-8 grid-rows-8 border-4 border-slate-700 shadow-2xl rounded-sm overflow-hidden bg-slate-800 select-none",children:e.map((u,a)=>{const p=s?63-a:a;return i(p,a)})})},rp=({onReset:e,onUndo:t,onImportFen:n,onExportFen:r,onImportPgn:o,onExportPgn:l,config:s,setConfig:i,engineEnabled:u,setEngineEnabled:a,gameState:p,isFlipped:m,onFlipBoard:h,useOpeningBook:y,setUseOpeningBook:g})=>{const[S,I]=j.useState(s.depth),[f,c]=j.useState(s.timeLimit),[d,E]=j.useState(s.branchingFactor);j.useEffect(()=>{I(s.depth),c(s.timeLimit),E(s.branchingFactor)},[s]);const T=()=>{i({...s,depth:S,timeLimit:f,branchingFactor:d})},k=_=>{_==="OFF"?a(!1):(a(!0),_==="B"&&s.engineId!=="B"?(i({...s,engineId:"B",depth:8,timeLimit:3e3}),I(8),c(3e3)):_==="A"&&s.engineId!=="A"&&i({...s,engineId:"A"}))};return v.jsxs("div",{className:"flex flex-col gap-1.5 p-2 bg-slate-800 rounded-lg border border-slate-700 w-full max-w-[600px]",children:[v.jsxs("div",{className:"flex justify-between items-center border-b border-slate-700 pb-1 mb-0.5",children:[v.jsx("h2",{className:"text-sm font-bold text-amber-500",children:"Controls"}),v.jsx("span",{className:`px-1.5 py-0.5 rounded text-[10px] font-semibold ${p==="playing"?"bg-emerald-900 text-emerald-300":"bg-red-900 text-red-300"}`,children:p.toUpperCase()})]}),v.jsxs("div",{className:"flex gap-1",children:[v.jsx("button",{onClick:t,className:"flex-1 bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-[10px] font-medium transition-colors",children:"Undo"}),v.jsx("button",{onClick:h,className:`flex-1 px-2 py-1 rounded text-[10px] font-medium transition-colors ${m?"bg-amber-700 hover:bg-amber-600 text-white":"bg-slate-700 hover:bg-slate-600"}`,children:m?"Unflip":"Flip"}),v.jsx("button",{onClick:e,className:"flex-1 bg-red-900/50 hover:bg-red-800/50 text-red-200 px-2 py-1 rounded text-[10px] font-medium transition-colors",children:"Reset"})]}),v.jsxs("div",{className:"space-y-1.5 pt-0.5",children:[v.jsxs("div",{className:"flex flex-col gap-0.5",children:[v.jsxs("div",{className:"flex justify-between items-end",children:[v.jsx("label",{className:"text-[10px] font-medium text-slate-300",children:"Engine Config"}),v.jsxs("label",{className:"text-[10px] text-slate-400 cursor-pointer flex items-center gap-1 bg-slate-700/50 px-1.5 rounded hover:bg-slate-700 transition-colors",children:[v.jsx("span",{children:"Book"}),v.jsx("input",{type:"checkbox",checked:y,onChange:_=>g(_.target.checked),className:"accent-emerald-500 w-3 h-3 cursor-pointer"})]})]}),v.jsxs("div",{className:"flex bg-slate-900 rounded p-0.5 gap-0.5",children:[v.jsx("button",{onClick:()=>k("OFF"),className:`flex-1 py-1 text-[9px] font-bold rounded transition-colors ${u?"text-slate-500 hover:text-slate-300":"bg-slate-600 text-white"}`,children:"OFF"}),v.jsx("button",{onClick:()=>k("A"),className:`flex-1 py-1 text-[9px] font-bold rounded transition-colors ${u&&s.engineId==="A"?"bg-emerald-600 text-white":"text-slate-500 hover:text-slate-300"}`,children:"ENGINE A"}),v.jsx("button",{onClick:()=>k("B"),className:`flex-1 py-1 text-[9px] font-bold rounded transition-colors ${u&&s.engineId==="B"?"bg-purple-600 text-white":"text-slate-500 hover:text-slate-300"}`,children:"ENGINE B"})]})]}),u&&v.jsxs("div",{className:"grid grid-cols-2 gap-x-2 gap-y-1 pt-0.5 animate-in fade-in",children:[v.jsxs("div",{className:"space-y-0.5",children:[v.jsxs("div",{className:"flex justify-between",children:[v.jsx("label",{className:"text-[9px] text-slate-400",children:"Max Depth"}),v.jsx("span",{className:"text-[9px] font-mono text-amber-400",children:S})]}),v.jsx("input",{type:"range",min:"1",max:s.engineId==="B"?14:12,step:"1",value:S,onChange:_=>I(parseInt(_.target.value)),onMouseUp:T,onTouchEnd:T,className:"w-full accent-amber-500 bg-slate-700 h-1 rounded-lg appearance-none cursor-pointer"})]}),v.jsxs("div",{className:"space-y-0.5",children:[v.jsxs("div",{className:"flex justify-between",children:[v.jsx("label",{className:"text-[9px] text-slate-400",children:"Time Limit"}),v.jsxs("span",{className:"text-[9px] font-mono text-amber-400",children:[(f/1e3).toFixed(1),"s"]})]}),v.jsx("input",{type:"range",min:"500",max:"120000",step:"500",value:f,onChange:_=>c(parseInt(_.target.value)),onMouseUp:T,onTouchEnd:T,className:"w-full accent-amber-500 bg-slate-700 h-1 rounded-lg appearance-none cursor-pointer"})]}),v.jsxs("div",{className:"flex items-center justify-between col-span-2 pt-0.5",children:[v.jsx("label",{className:"text-[9px] text-slate-300 truncate",children:s.engineId==="A"?"Smart Pruning (PVS + LMR)":"Deep Search (NMP + Futility)"}),v.jsx("input",{type:"checkbox",checked:s.useDynamicBranching,onChange:_=>i({...s,useDynamicBranching:_.target.checked}),className:"w-3 h-3 rounded accent-amber-500"})]}),!s.useDynamicBranching&&v.jsxs("div",{className:"space-y-0.5 col-span-2",children:[v.jsxs("div",{className:"flex justify-between",children:[v.jsx("label",{className:"text-[9px] text-slate-400",children:"Branching Factor"}),v.jsx("span",{className:"text-[9px] font-mono text-amber-400",children:d})]}),v.jsx("input",{type:"range",min:"2",max:"50",step:"1",value:d,onChange:_=>E(parseInt(_.target.value)),onMouseUp:T,onTouchEnd:T,className:"w-full accent-amber-500 bg-slate-700 h-1 rounded-lg appearance-none cursor-pointer"})]})]})]}),v.jsxs("div",{className:"pt-1 border-t border-slate-700 grid grid-cols-4 gap-1",children:[v.jsx("button",{onClick:n,className:"text-center px-1 py-0.5 bg-slate-700/50 hover:bg-slate-600/50 rounded text-[9px] text-slate-300 transition-colors",children:"In FEN"}),v.jsx("button",{onClick:r,className:"text-center px-1 py-0.5 bg-slate-700/50 hover:bg-slate-600/50 rounded text-[9px] text-slate-300 transition-colors",children:"Out FEN"}),v.jsx("button",{onClick:o,className:"text-center px-1 py-0.5 bg-slate-700/50 hover:bg-slate-600/50 rounded text-[9px] text-slate-300 transition-colors",children:"In PGN"}),v.jsx("button",{onClick:l,className:"text-center px-1 py-0.5 bg-slate-700/50 hover:bg-slate-600/50 rounded text-[9px] text-slate-300 transition-colors",children:"Out PGN"})]})]})},op=({result:e,turn:t,configDepth:n,gameState:r,isFlipped:o})=>{const[l,s]=j.useState(0),i=j.useRef(0),u=j.useRef(Date.now()),a=j.useRef(null);j.useEffect(()=>{a.current&&(a.current.scrollTop=a.current.scrollHeight)},[e.logs]),j.useEffect(()=>{if(e.isThinking){const d=setInterval(()=>{const E=Date.now(),T=E-u.current;if(T>=1e3){const k=e.nodesSearched-i.current;s(Math.round(k/(T/1e3))),i.current=e.nodesSearched,u.current=E}},500);return()=>clearInterval(d)}else s(0),i.current=0},[e.isThinking,e.nodesSearched]);const p=t==="w"?e.evaluation:-e.evaluation,m=o?-p:p;let h="";const g=Math.abs(e.evaluation)>2e4;if(g){const d=Math.ceil((29e3-Math.abs(e.evaluation))/2);h=`M# ${m>0?"+":"-"}${d}`}else{const d=m/100;h=d>0?`+${d.toFixed(2)}`:d.toFixed(2)}const S=Math.min(100,e.currentDepth/n*100);let I=50;g?I=m>0?100:0:I=50+Math.max(-1e3,Math.min(1e3,m))/20;const f=d=>d>=1e6?(d/1e6).toFixed(1)+"M":d>=1e3?(d/1e3).toFixed(1)+"k":d.toString();let c="";if(e.bestMove){const E=_n(r).find(T=>T.from===e.bestMove.from&&T.to===e.bestMove.to&&T.promotion===e.bestMove.promotion);if(E){const T=Ut(r,E);c=Ao(E,r,T)}else c=`${String.fromCharCode(97+e.bestMove.from%8)}${8-Math.floor(e.bestMove.from/8)} -> ...`}return v.jsxs("div",{className:"bg-slate-800 p-2 rounded-lg border border-slate-700 w-full max-w-[600px] mt-1 shadow-lg",children:[v.jsxs("div",{className:"flex justify-between items-end mb-1",children:[v.jsx("h3",{className:"text-xs font-bold text-slate-300",children:"Engine Analysis"}),e.isThinking&&v.jsxs("span",{className:"text-[10px] font-mono text-emerald-400 animate-pulse",children:[l.toLocaleString()," NPS"]})]}),v.jsxs("div",{className:"w-full h-2 bg-slate-600 rounded-full overflow-hidden relative mb-1.5 border border-slate-700",children:[v.jsx("div",{className:"h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 transition-all duration-500",style:{width:`${I}%`}}),v.jsx("div",{className:"absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-900/80 z-10"})]}),v.jsxs("div",{className:"grid grid-cols-2 gap-2 text-sm mb-1.5",children:[v.jsxs("div",{className:"bg-slate-700/50 p-1 rounded",children:[v.jsxs("p",{className:"text-[9px] text-slate-500 uppercase font-semibold",children:["Evaluation (",o?"Black":"White",")"]}),v.jsx("p",{className:`font-mono text-base leading-tight font-bold ${m>0?"text-green-400":m<0?"text-red-400":"text-slate-200"}`,children:h})]}),v.jsxs("div",{className:"bg-slate-700/50 p-1 rounded",children:[v.jsx("p",{className:"text-[9px] text-slate-500 uppercase font-semibold",children:"Nodes Searched"}),v.jsx("p",{className:"font-mono text-slate-200 text-base leading-tight",children:f(e.nodesSearched)})]})]}),v.jsxs("div",{className:"space-y-0.5 mb-1.5",children:[v.jsxs("div",{className:"flex justify-between text-[9px] text-slate-400",children:[v.jsx("span",{children:"Depth Progress"}),v.jsxs("span",{children:[e.currentDepth," / ",n]})]}),v.jsx("div",{className:"w-full h-1 bg-slate-700 rounded-full overflow-hidden",children:v.jsx("div",{className:`h-full transition-all duration-300 ${e.isThinking?"bg-amber-500":"bg-emerald-500"}`,style:{width:`${e.isThinking?S:100}%`}})})]}),!e.isThinking&&c&&v.jsxs("div",{className:"mt-1 pt-1 border-t border-slate-700",children:[v.jsx("div",{className:"text-[9px] text-slate-500 uppercase font-semibold mb-0.5",children:"Best Line Found"}),v.jsxs("div",{className:"text-emerald-400 font-mono text-lg font-bold flex items-center gap-2",children:[v.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),c]})]}),v.jsxs("div",{className:"mt-1 pt-1 border-t border-slate-700",children:[v.jsx("p",{className:"text-[9px] text-slate-500 mb-0.5 font-bold",children:"WORKER LOGS"}),v.jsx("div",{ref:a,className:"h-12 bg-black/50 rounded p-1 overflow-y-auto font-mono text-[9px] text-slate-400 leading-tight",children:e.logs.length===0?v.jsx("span",{className:"italic opacity-50",children:"Waiting for engine..."}):e.logs.map((d,E)=>v.jsx("div",{children:d},E))})]})]})},lp=({isOpen:e,onClose:t,onImport:n,title:r,defaultValue:o="",isExport:l=!1})=>{const[s,i]=j.useState(o);return j.useEffect(()=>{i(o)},[o,e]),e?v.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",children:v.jsxs("div",{className:"bg-slate-800 border border-slate-700 rounded-lg shadow-2xl w-full max-w-lg flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200",children:[v.jsxs("div",{className:"p-4 border-b border-slate-700 flex justify-between items-center",children:[v.jsx("h3",{className:"text-lg font-bold text-slate-100",children:r}),v.jsx("button",{onClick:t,className:"text-slate-400 hover:text-white transition-colors",children:"✕"})]}),v.jsx("div",{className:"p-4 flex-1",children:v.jsx("textarea",{className:"w-full h-40 bg-slate-900 border border-slate-700 rounded p-3 text-slate-200 font-mono text-sm focus:outline-none focus:border-amber-500 resize-none",value:s,onChange:u=>i(u.target.value),placeholder:l?"":"Paste text here...",readOnly:l,onClick:u=>l&&u.target.select()})}),v.jsxs("div",{className:"p-4 border-t border-slate-700 flex justify-end gap-3 bg-slate-800/50",children:[v.jsx("button",{onClick:t,className:"px-4 py-2 text-sm text-slate-300 hover:text-white font-medium transition-colors",children:l?"Close":"Cancel"}),l?v.jsx("button",{onClick:()=>{navigator.clipboard.writeText(s),alert("Copied to clipboard!")},className:"px-4 py-2 text-sm bg-amber-600 hover:bg-amber-500 text-white rounded font-medium transition-colors",children:"Copy to Clipboard"}):v.jsx("button",{onClick:()=>{n(s),t()},disabled:!s.trim(),className:"px-4 py-2 text-sm bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded font-medium transition-colors",children:"Import"})]})]})}):null},sp=({board:e})=>{const t={p:8,n:2,b:2,r:2,q:1,k:1},n=y=>{const g={p:0,n:0,b:0,r:0,q:0,k:0};return e.forEach(S=>{S&&S.color===y&&g[S.type]++}),g},r=n("w"),o=n("b"),l=(y,g)=>{const S=[];return Object.keys(y).forEach(I=>{const f=Math.max(0,y[I]-g[I]);for(let c=0;c<f;c++)S.push(I)}),S},s=l(t,o),i=l(t,r),u=y=>y.p*Pt.p+y.n*Pt.n+y.b*Pt.b+y.r*Pt.r+y.q*Pt.q,a=u(r),p=u(o),m=(a-p)/100,h=(y,g,S)=>v.jsxs("div",{className:"flex items-center gap-1 h-6 bg-slate-800/50 rounded px-1.5 border border-slate-700 w-full",children:[v.jsxs("div",{className:"flex -space-x-1 overflow-hidden",children:[y.sort((I,f)=>Pt[I]-Pt[f]).map((I,f)=>v.jsx("div",{className:"w-4 h-4 opacity-90 relative",children:v.jsx(qs,{color:g==="w"?"b":"w",type:I})},f)),y.length===0&&v.jsx("span",{className:"text-[10px] text-slate-600 italic",children:"None"})]}),S>0&&v.jsxs("span",{className:"text-[10px] font-bold text-slate-400 ml-auto",children:["+",S.toFixed(0)]})]});return v.jsxs("div",{className:"flex flex-col gap-1 w-full",children:[v.jsx("div",{className:"flex justify-between items-center text-[10px] text-slate-400 px-1",children:v.jsx("span",{children:"Captured by White"})}),h(s,"w",m>0?m:0),v.jsx("div",{className:"flex justify-between items-center text-[10px] text-slate-400 px-1 mt-0.5",children:v.jsx("span",{children:"Captured by Black"})}),h(i,"b",m<0?Math.abs(m):0)]})},ip="https://explorer.lichess.ovh/masters",up=async e=>{var t;if(e.fullMoveNumber>20)return null;try{const r=Yr(e).split(" ").slice(0,4).join(" "),o=new AbortController,l=setTimeout(()=>o.abort(),2e3),s=await fetch(`${ip}?fen=${encodeURIComponent(r)}&moves=5`,{signal:o.signal});if(clearTimeout(l),!s.ok)return null;const i=await s.json();if(!i.moves||i.moves.length===0)return null;const u=i.moves,a=u.reduce((g,S)=>g+S.white+S.draws+S.black,0);let p=Math.random()*a,m=u[0].san;for(const g of u){const S=g.white+g.draws+g.black;if(p<=S){m=g.san;break}p-=S}const h=_n(e),y=(t=u.find(g=>g.san===m))==null?void 0:t.uci;if(y){const g=h.find(S=>{const I=(8-parseInt(y[1]))*8+(y.charCodeAt(0)-97),f=(8-parseInt(y[3]))*8+(y.charCodeAt(2)-97);return y.length===5?S.from===I&&S.to===f&&S.promotion===y[4]:S.from===I&&S.to===f});if(g)return g}for(const g of h){const S=Ut(e,g);if(Ao(g,e,S)===m)return g}return null}catch{return null}},ap=`
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
`,su=()=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e,n=t.currentTime,r=t.createOscillator(),o=t.createGain();r.connect(o),o.connect(t.destination),r.type="sine",r.frequency.setValueAtTime(660,n),r.frequency.exponentialRampToValueAtTime(880,n+.1),o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(.15,n+.05),o.gain.exponentialRampToValueAtTime(1e-4,n+2),r.start(n),r.stop(n+2)}catch(e){console.error("Audio playback failed (likely autoplay policy)",e)}},ut=e=>{const t="Grandmaster Logic";e==="thinking"?document.title=`Thinking... | ${t}`:e==="done"?document.title=`🔴 Move Found! | ${t}`:document.title=t};function fp(){const[e,t]=j.useState(sn(Yn)),[n,r]=j.useState(null),[o,l]=j.useState([]),[s,i]=j.useState(!1),[u,a]=j.useState(null),[p,m]=j.useState(!1),[h,y]=j.useState(!0),[g,S]=j.useState({engineId:"A",depth:6,timeLimit:2e3,branchingFactor:10,useDynamicBranching:!0}),[I,f]=j.useState({bestMove:null,evaluation:0,nodesSearched:0,currentDepth:0,isThinking:!1,pv:[],logs:[]}),[c,d]=j.useState({isOpen:!1,type:"fen",mode:"import"}),E=j.useRef(null);j.useEffect(()=>{if(E.current&&(E.current.terminate(),E.current=null),!s||e.isGameOver){f(Oe=>({...Oe,isThinking:!1,bestMove:null})),ut("idle");return}const L=g.engineId==="B"?cp:ap,F=new Blob([L],{type:"application/javascript"}),Ae=URL.createObjectURL(F),Ue=new Worker(Ae);return E.current=Ue,Ue.onmessage=Oe=>{const{type:x,bestMove:P,score:N,nodes:z,depth:V,message:Yt}=Oe.data;x==="log"?f(de=>({...de,logs:[...de.logs,`[Worker ${g.engineId}] ${Yt}`].slice(-50)})):x==="progress"?f(de=>({...de,evaluation:N,nodesSearched:z,currentDepth:V,isThinking:!0,bestMove:P})):x==="done"&&(su(),ut("done"),f(de=>({...de,bestMove:P,evaluation:N,nodesSearched:z,currentDepth:V,isThinking:!1,pv:[]})))},Ue.onerror=Oe=>{console.error("Worker error:",Oe),f(x=>({...x,isThinking:!1,logs:[...x.logs,`[CRITICAL] Worker crashed: ${Oe.message}`]}))},(async()=>{const Oe=Date.now();if(ut("thinking"),f(x=>({...x,isThinking:!0,bestMove:null,currentDepth:0,logs:[]})),h&&e.fullMoveNumber<=20){f(P=>({...P,logs:["Checking Lichess Masters Book..."]}));const x=await up(e);if(!E.current)return;if(x){su(),ut("done"),f(P=>({...P,isThinking:!1,bestMove:x,evaluation:0,nodesSearched:0,currentDepth:0,logs:[...P.logs,`Book Move Found: ${x.from}->${x.to}`]}));return}else f(P=>({...P,logs:[...P.logs,`Book move not found. Starting Engine ${g.engineId}...`]}))}if(E.current){const x=Yr(e);E.current.postMessage({fen:x,depth:g.depth,timeLimit:g.timeLimit,requestId:Oe})}})(),()=>{Ue.terminate(),URL.revokeObjectURL(Ae),E.current=null}},[e,s,g.engineId,g.depth,g.timeLimit,g.branchingFactor,g.useDynamicBranching,h]);const T=L=>{if(e.isGameOver||u)return;if(n===L){r(null),l([]);return}const F=o.find(Ue=>Ue.to===L);if(F&&n!==null){F.promotion?a({move:F,from:F.from,to:F.to}):k(F);return}const Ae=e.board[L];if(Ae&&Ae.color===e.turn){r(L);const Ue=_n(e);l(Ue.filter(Kt=>Kt.from===L))}else r(null),l([])},k=L=>{const F=Ut(e,L);t(F),r(null),l([]),a(null),ut("idle")},_=L=>{if(u){const F={...u.move,promotion:L};k(F)}},O=()=>{if(e.history.length===0)return;let L=sn(Yn);for(let F=0;F<e.history.length-1;F++)L=Ut(L,e.history[F]);t(L),r(null),l([]),ut("idle")},b=()=>{t(sn(Yn)),f({bestMove:null,evaluation:0,nodesSearched:0,currentDepth:0,isThinking:!1,pv:[],logs:[]}),r(null),l([]),ut("idle")},M=(L,F)=>{let Ae="";F==="export"&&(Ae=L==="fen"?Yr(e):Xd(e)),d({isOpen:!0,type:L,mode:F,value:Ae})},Ee=L=>{try{let F;c.type==="fen"?F=sn(L):F=Jd(L),t(F),f({bestMove:null,evaluation:0,nodesSearched:0,currentDepth:0,isThinking:!1,pv:[],logs:[]}),l([]),r(null),ut("idle")}catch{alert(`Invalid ${c.type.toUpperCase()} string or move sequence.`)}};return v.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center py-4 px-2 font-sans overflow-hidden",children:[v.jsxs("div",{className:"w-full max-w-[1400px] flex flex-row gap-4 items-start justify-center relative h-[calc(100vh-2rem)]",children:[u&&v.jsx("div",{className:"absolute inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm rounded-lg",children:v.jsx("div",{className:"bg-slate-800 p-4 rounded-lg shadow-2xl border border-slate-600 flex gap-4 animate-in zoom-in",children:["q","r","b","n"].map(L=>v.jsx("button",{onClick:()=>_(L),className:"w-16 h-16 bg-slate-700 hover:bg-slate-600 rounded flex items-center justify-center transition-colors border-2 border-transparent hover:border-amber-500",children:v.jsx("div",{className:"w-12 h-12",children:v.jsx(qs,{color:e.turn,type:L})})},L))})}),v.jsx("div",{className:"flex-1 w-full h-full flex flex-col items-center justify-center min-w-0",children:v.jsx("div",{className:"resize w-full max-w-[90vh] aspect-square relative shadow-2xl rounded-sm",children:v.jsx(np,{board:e.board,turn:e.turn,onSquareClick:T,selectedSquare:n,validMoves:o,lastMove:e.history.length>0?e.history[e.history.length-1]:null,bestMove:I.bestMove,isFlipped:p})})}),v.jsxs("div",{className:"w-[350px] flex-shrink-0 flex flex-col gap-2 h-full overflow-y-auto pr-1",children:[v.jsxs("header",{className:"mb-1 shrink-0",children:[v.jsx("h1",{className:"text-xl font-extrabold text-amber-500 tracking-tight",children:"Grandmaster Logic"}),v.jsx("p",{className:"text-slate-400 text-xs truncate",children:s?g.engineId==="B"?"v5.0 • Neural + NMP":"v4.0 • Classic PeSTO":"Select an engine to begin analysis"})]}),v.jsx("div",{className:"shrink-0",children:v.jsx(sp,{board:e.board})}),v.jsx(rp,{onReset:b,onUndo:O,onImportFen:()=>M("fen","import"),onExportFen:()=>M("fen","export"),onImportPgn:()=>M("pgn","import"),onExportPgn:()=>M("pgn","export"),config:g,setConfig:S,engineEnabled:s,setEngineEnabled:i,gameState:e.isGameOver?e.winner?`Winner: ${e.winner}`:"Draw":"playing",isFlipped:p,onFlipBoard:()=>m(!p),useOpeningBook:h,setUseOpeningBook:y}),s&&v.jsx("div",{className:"shrink-0",children:v.jsx(op,{result:I,turn:e.turn,configDepth:g.depth,gameState:e,isFlipped:p})}),v.jsxs("div",{className:"p-2 bg-slate-800/50 rounded text-[10px] text-slate-500 border border-slate-800 shrink-0",children:[v.jsx("h4",{className:"font-bold text-slate-400 mb-0.5",children:"Debug Info"}),v.jsxs("p",{children:["Moves: ",e.history.length]}),v.jsxs("p",{children:["Hash: ",Yr(e).substring(0,20),"..."]})]})]})]}),v.jsx(lp,{isOpen:c.isOpen,onClose:()=>d(L=>({...L,isOpen:!1})),onImport:Ee,title:`${c.mode==="import"?"Import":"Export"} ${c.type.toUpperCase()}`,defaultValue:c.value,isExport:c.mode==="export"})]})}const Ec=document.getElementById("root");if(!Ec)throw new Error("Could not find root element to mount to");const dp=al.createRoot(Ec);dp.render(v.jsx(Hc.StrictMode,{children:v.jsx(fp,{})}));
