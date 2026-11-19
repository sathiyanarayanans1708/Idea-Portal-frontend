var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function ee(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var te=ee.prototype=new b;te.constructor=ee,_(te,y.prototype),te.isPureReactComponent=!0;var ne=Array.isArray;function re(){}var x={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function S(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ae(e,t){return S(e.type,t,e.props)}function oe(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function se(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ce=/\/+/g;function le(e,t){return typeof e==`object`&&e&&e.key!=null?se(``+e.key):t.toString(36)}function ue(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(re,re):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function de(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,de(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+le(e,0):a,ne(o)?(i=``,c!=null&&(i=c.replace(ce,`$&/`)+`/`),de(o,r,i,``,function(e){return e})):o!=null&&(oe(o)&&(o=ae(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ce,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ne(e))for(var u=0;u<e.length;u++)a=e[u],s=l+le(a,u),c+=de(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+le(a,u++),c+=de(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return de(ue(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function fe(e,t,n){if(e==null)return e;var r=[],i=0;return de(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function pe(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var me=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function he(e){var t=x.T,n={};n.types=t===null?null:t.types,x.T=n;try{var r=e(),i=x.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(re,me)}catch(e){me(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),x.T=t}}function ge(e){var t=x.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else he(ge.bind(null,e))}var _e={map:fe,forEach:function(e,t,n){fe(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return fe(e,function(){t++}),t},toArray:function(e){return fe(e,function(e){return e})||[]},only:function(e){if(!oe(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=_e,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=ee,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return x.H.useMemoCache(e)}},e.addTransitionType=ge,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ie.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return S(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ie.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return S(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=oe,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:pe}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=he,e.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},e.use=function(e){return x.H.use(e)},e.useActionState=function(e,t,n){return x.H.useActionState(e,t,n)},e.useCallback=function(e,t){return x.H.useCallback(e,t)},e.useContext=function(e){return x.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return x.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return x.H.useEffect(e,t)},e.useEffectEvent=function(e){return x.H.useEffectEvent(e)},e.useId=function(){return x.H.useId()},e.useImperativeHandle=function(e,t,n){return x.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return x.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return x.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return x.H.useMemo(e,t)},e.useOptimistic=function(e,t){return x.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return x.H.useReducer(e,t,n)},e.useRef=function(e){return x.H.useRef(e)},e.useState=function(e){return x.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return x.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return x.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function ee(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,te||(te=!0,ae());else{var t=n(l);t!==null&&ce(ee,t.startTime-e)}}}var te=!1,ne=-1,re=5,x=-1;function ie(){return g?!0:!(e.unstable_now()-x<re)}function S(){if(g=!1,te){var t=e.unstable_now();x=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(ne),ne=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ie());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ce(ee,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ae():te=!1}}}var ae;if(typeof y==`function`)ae=function(){y(S)};else if(typeof MessageChannel<`u`){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=S,ae=function(){se.postMessage(null)}}else ae=function(){_(S,0)};function ce(t,n){ne=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):re=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(ne),ne=-1):h=!0,ce(ee,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,te||(te=!0,ae()))),r},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var ee=null,te=null;function ne(e,t,n){return e===n||e===t&&(ee=e,!0)}function re(e,t,n){return e===n?(te=e,!1):e===t&&(te!==null&&(ee=e),!0)}function x(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ie(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var S=Object.assign,ae=Symbol.for(`react.element`),oe=Symbol.for(`react.transitional.element`),se=Symbol.for(`react.portal`),ce=Symbol.for(`react.fragment`),le=Symbol.for(`react.strict_mode`),ue=Symbol.for(`react.profiler`),de=Symbol.for(`react.consumer`),fe=Symbol.for(`react.context`),pe=Symbol.for(`react.forward_ref`),me=Symbol.for(`react.suspense`),he=Symbol.for(`react.suspense_list`),ge=Symbol.for(`react.memo`),_e=Symbol.for(`react.lazy`),ve=Symbol.for(`react.activity`),ye=Symbol.for(`react.legacy_hidden`),be=Symbol.for(`react.memo_cache_sentinel`),xe=Symbol.for(`react.view_transition`),Se=Symbol.for(`react.recoverable`),Ce=Symbol.iterator;function we(e){return typeof e!=`object`||!e?null:(e=Ce&&e[Ce]||e[`@@iterator`],typeof e==`function`?e:null)}var Te=Symbol.for(`react.client.reference`);function Ee(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ce:return`Fragment`;case ue:return`Profiler`;case le:return`StrictMode`;case me:return`Suspense`;case he:return`SuspenseList`;case ve:return`Activity`;case xe:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case se:return`Portal`;case fe:return e.displayName||`Context`;case de:return(e._context.displayName||`Context`)+`.Consumer`;case pe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ge:return t=e.displayName||null,t===null?Ee(e.type)||`Memo`:t;case _e:t=e._payload,e=e._init;try{return Ee(e(t))}catch{}}return null}var De=Array.isArray,C=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Oe={pending:!1,data:null,method:null,action:null},ke=[],Ae=-1;function je(e){return{current:e}}function Me(e){0>Ae||(e.current=ke[Ae],ke[Ae]=null,Ae--)}function T(e,t){Ae++,ke[Ae]=e.current,e.current=t}var Ne=je(null),Pe=je(null),Fe=je(null),Ie=je(null);function Le(e,t){switch(T(Fe,t),T(Pe,e),T(Ne,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}Me(Ne),T(Ne,e)}function Re(){Me(Ne),Me(Pe),Me(Fe)}function ze(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,T(Ie,e)),t=Ne.current;var n=dp(t,e.type);t!==n&&(T(Pe,e),T(Ne,n))}function Be(e){Pe.current===e&&(Me(Ne),Me(Pe)),Ie.current===e&&(Me(Ie),sh._currentValue=Oe)}var Ve,He;function Ue(e){if(Ve===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ve=t&&t[1]||``,He=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ve+e+He}var We=!1;function Ge(e,t){if(!e||We)return``;We=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{We=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ue(n):``}function Ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ue(e.type);case 16:return Ue(`Lazy`);case 13:return e.child!==t&&t!==null?Ue(`Suspense Fallback`):Ue(`Suspense`);case 19:return Ue(`SuspenseList`);case 0:case 15:return Ge(e.type,!1);case 11:return Ge(e.type.render,!1);case 1:return Ge(e.type,!0);case 31:return Ue(`Activity`);case 30:return Ue(`ViewTransition`);default:return``}}function qe(e){try{var t=``,n=null;do t+=Ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Je=Object.prototype.hasOwnProperty,Ye=t.unstable_scheduleCallback,Xe=t.unstable_cancelCallback,Ze=t.unstable_shouldYield,Qe=t.unstable_requestPaint,$e=t.unstable_now,et=t.unstable_getCurrentPriorityLevel,tt=t.unstable_ImmediatePriority,nt=t.unstable_UserBlockingPriority,rt=t.unstable_NormalPriority,it=t.unstable_LowPriority,at=t.unstable_IdlePriority,ot=t.log,st=t.unstable_setDisableYieldValue,ct=null,lt=null;function ut(e){if(typeof ot==`function`&&st(e),lt&&typeof lt.setStrictMode==`function`)try{lt.setStrictMode(ct,e)}catch{}}var dt=Math.clz32?Math.clz32:mt,ft=Math.log,pt=Math.LN2;function mt(e){return e>>>=0,e===0?32:31-(ft(e)/pt|0)|0}var ht=256,gt=262144,_t=4194304;function vt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=vt(n))):i=vt(o):i=vt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=vt(n))):i=vt(o)):i=vt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function bt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-dt(n),i=1<<r;t|=e[r],n&=~i}return t}function St(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(){var e=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Et(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-dt(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Dt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Dt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-dt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function kt(e,t){var n=t&-t;return n=n&42?1:At(n),(n&(e.suspendedLanes|t))===0?n:0}function At(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function jt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function Mt(){var e=w.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function Nt(e,t){var n=w.p;try{return w.p=e,t()}finally{w.p=n}}var Pt=Math.random().toString(36).slice(2),Ft=`__reactFiber$`+Pt,It=`__reactProps$`+Pt,Lt=`__reactContainer$`+Pt,Rt=`__reactEvents$`+Pt,zt=`__reactListeners$`+Pt,Bt=`__reactHandles$`+Pt,Vt=`__reactResources$`+Pt,Ht=`__reactMarker$`+Pt,Ut=`__reactLoad$`+Pt;function Wt(e){delete e[Ft],delete e[It],delete e[zt],delete e[Bt]}function Gt(e){var t;if(t=e[Ft])return t;for(var n=e.parentNode;n;){if(t=n[Lt]||n[Ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[Ft])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Kt(e){if(e=e[Ft]||e[Lt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function qt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Jt(e){var t=e[Vt];return t||=e[Vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function E(e){e[Ht]=!0}function Yt(e){e[Ut]=void 0}var Xt=new Set,Zt={};function Qt(e,t){$t(e,t),$t(e+`Capture`,t)}function $t(e,t){for(Zt[e]=t,e=0;e<t.length;e++)Xt.add(t[e])}var en=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),tn={},nn={};function rn(e){return Je.call(nn,e)?!0:Je.call(tn,e)?!1:en.test(e)?nn[e]=!0:(tn[e]=!0,!1)}var D=!1;function an(){var e=D;return D=!1,e}function on(e,t,n){if(rn(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function sn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function cn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function ln(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function un(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function dn(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fn(e){if(!e._valueTracker){var t=un(e)?`checked`:`value`;e._valueTracker=dn(e,t,``+e[t])}}function pn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=un(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var mn=/[\n"\\]/g;function hn(e){return e.replace(mn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function gn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+ln(t)):e.value!==``+ln(t)&&(e.value=``+ln(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):vn(e,ln(n)):o===`number`&&e.value==t?vn(e,ln(e.value)):vn(e,ln(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+ln(s):e.removeAttribute(`name`)}function _n(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){fn(e);return}n=n==null?``:``+ln(n),t=t==null?n:``+ln(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),fn(e)}function vn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+ln(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bn(e,t,n){t!=null&&(t=``+ln(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+ln(n)}function xn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(De(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=ln(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),fn(e)}function Sn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function wn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Cn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,D=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(wn(e,a,r),D=!0)}else for(var o in t)t.hasOwnProperty(o)&&wn(e,o,t[o])}function En(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Dn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),On=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kn(e){return On.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function An(){}var jn=null;function Mn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Nn=null,Pn=null;function Fn(e){var t=Kt(e);if(t&&(e=t.stateNode)){var n=e[It]||null;a:switch(e=t.stateNode,t.type){case`input`:if(gn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+hn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[It]||null;if(!a)throw Error(i(90));gn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&pn(r)}break a;case`textarea`:bn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&yn(e,!!n.multiple,t,!1)}}}var In=!1;function Ln(e,t,n){if(In)return e(t,n);In=!0;try{return e(t)}finally{if(In=!1,(Nn!==null||Pn!==null)&&(zd(),Nn&&(t=Nn,e=Pn,Pn=Nn=null,Fn(t),e)))for(t=0;t<e.length;t++)Fn(e[t])}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[It]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var zn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Bn=!1;if(zn)try{var Vn={};Object.defineProperty(Vn,"passive",{get:function(){Bn=!0}}),window.addEventListener(`test`,Vn,Vn),window.removeEventListener(`test`,Vn,Vn)}catch{Bn=!1}var Hn=null,Un=null,Wn=null;function Gn(){if(Wn)return Wn;var e,t=Un,n=t.length,r,i=`value`in Hn?Hn.value:Hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Wn=i.slice(e,1<r?1-r:void 0)}function Kn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Jn(){return!1}function Yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?qn:Jn,this.isPropagationStopped=Jn,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zn=Yn(Xn),Qn=S({},Xn,{view:0,detail:0}),$n=Yn(Qn),er,tr,nr,rr=S({},Qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==nr&&(nr&&e.type===`mousemove`?(er=e.screenX-nr.screenX,tr=e.screenY-nr.screenY):tr=er=0,nr=e),er)},movementY:function(e){return`movementY`in e?e.movementY:tr}}),ir=Yn(rr),ar=Yn(S({},rr,{dataTransfer:0})),or=Yn(S({},Qn,{relatedTarget:0})),sr=Yn(S({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0})),cr=Yn(S({},Xn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),lr=Yn(S({},Xn,{data:0})),ur={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},dr={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},fr={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function pr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fr[e])?!!t[e]:!1}function mr(){return pr}var hr=Yn(S({},Qn,{key:function(e){if(e.key){var t=ur[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Kn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?dr[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mr,charCode:function(e){return e.type===`keypress`?Kn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Kn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),gr=Yn(S({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_r=Yn(S({},Xn,{submitter:0})),vr=Yn(S({},Qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mr})),yr=Yn(S({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),br=Yn(S({},rr,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xr=Yn(S({},Xn,{newState:0,oldState:0,source:0})),Sr=[9,13,27,32],Cr=zn&&`CompositionEvent`in window,wr=null;zn&&`documentMode`in document&&(wr=document.documentMode);var Tr=zn&&`TextEvent`in window&&!wr,Er=zn&&(!Cr||wr&&8<wr&&11>=wr),Dr=` `,Or=!1;function kr(e,t){switch(e){case`keyup`:return Sr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var jr=!1;function Mr(e,t){switch(e){case`compositionend`:return Ar(t);case`keypress`:return t.which===32?(Or=!0,Dr):null;case`textInput`:return e=t.data,e===Dr&&Or?null:e;default:return null}}function Nr(e,t){if(jr)return e===`compositionend`||!Cr&&kr(e,t)?(e=Gn(),Wn=Un=Hn=null,jr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Er&&t.locale!==`ko`?null:t.data;default:return null}}var Pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Pr[e.type]:t===`textarea`}function Ir(e,t,n,r){Nn?Pn?Pn.push(r):Pn=[r]:Nn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Zn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Lr=null,Rr=null;function zr(e){Vf(e,0)}function Br(e){if(pn(qt(e)))return e}function Vr(e,t){if(e===`change`)return t}var Hr=!1;if(zn){var Ur;if(zn){var Wr=`oninput`in document;if(!Wr){var Gr=document.createElement(`div`);Gr.setAttribute(`oninput`,`return;`),Wr=typeof Gr.oninput==`function`}Ur=Wr}else Ur=!1;Hr=Ur&&(!document.documentMode||9<document.documentMode)}function Kr(){Lr&&(Lr.detachEvent(`onpropertychange`,qr),Rr=Lr=null)}function qr(e){if(e.propertyName===`value`&&Br(Rr)){var t=[];Ir(t,Rr,e,Mn(e)),Ln(zr,t)}}function Jr(e,t,n){e===`focusin`?(Kr(),Lr=t,Rr=n,Lr.attachEvent(`onpropertychange`,qr)):e===`focusout`&&Kr()}function Yr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Br(Rr)}function Xr(e,t){if(e===`click`)return Br(t)}function Zr(e,t){if(e===`input`||e===`change`)return Br(t)}function Qr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var $r=typeof Object.is==`function`?Object.is:Qr;function ei(e,t){if($r(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Je.call(t,i)||!$r(e[i],t[i]))return!1}return!0}function ti(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function ni(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ri(e,t){var n=ni(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=ni(n)}}function ii(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ii(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ai(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ti(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=ti(e.document)}return t}function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var si=zn&&`documentMode`in document&&11>=document.documentMode,ci=null,li=null,ui=null,di=!1;function fi(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;di||ci==null||ci!==ti(r)||(r=ci,`selectionStart`in r&&oi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ui&&ei(ui,r)||(ui=r,r=Jf(li,`onSelect`),0<r.length&&(t=new Zn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=ci)))}function pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var mi={animationend:pi(`Animation`,`AnimationEnd`),animationiteration:pi(`Animation`,`AnimationIteration`),animationstart:pi(`Animation`,`AnimationStart`),transitionrun:pi(`Transition`,`TransitionRun`),transitionstart:pi(`Transition`,`TransitionStart`),transitioncancel:pi(`Transition`,`TransitionCancel`),transitionend:pi(`Transition`,`TransitionEnd`)},hi={},gi={};zn&&(gi=document.createElement(`div`).style,`AnimationEvent`in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),`TransitionEvent`in window||delete mi.transitionend.transition);function _i(e){if(hi[e])return hi[e];if(!mi[e])return e;var t=mi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in gi)return hi[e]=t[n];return e}var vi=_i(`animationend`),yi=_i(`animationiteration`),bi=_i(`animationstart`),xi=_i(`transitionrun`),Si=_i(`transitionstart`),Ci=_i(`transitioncancel`),wi=_i(`transitionend`),Ti=new Map,Ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Ei.push(`scrollEnd`);function Di(e,t){Ti.set(e,t),Qt(t,[e])}var Oi=0;function ki(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=Oi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Ai(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function ji(e,t){return e=Ai(e),t=Ai(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var Mi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ni=[],Pi=0,Fi=0;function Ii(){for(var e=Pi,t=Fi=Pi=0;t<e;){var n=Ni[t];Ni[t++]=null;var r=Ni[t];Ni[t++]=null;var i=Ni[t];Ni[t++]=null;var a=Ni[t];if(Ni[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Bi(n,i,a)}}function Li(e,t,n,r){Ni[Pi++]=e,Ni[Pi++]=t,Ni[Pi++]=n,Ni[Pi++]=r,Fi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ri(e,t,n,r){return Li(e,t,n,r),Vi(e)}function zi(e,t){return Li(e,null,null,t),Vi(e)}function Bi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-dt(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Vi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Hi={};function Ui(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wi(e,t,n,r){return new Ui(e,t,n,r)}function Gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,t){var n=e.alternate;return n===null?(n=Wi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function qi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ji(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Gi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Ne.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ve:return e=Wi(31,n,t,a),e.elementType=ve,e.lanes=o,e;case ce:return Yi(n.children,a,o,t);case le:s=8,a|=24;break;case ue:return e=Wi(12,n,t,a|2),e.elementType=ue,e.lanes=o,e;case me:return e=Wi(13,n,t,a),e.elementType=me,e.lanes=o,e;case he:return e=Wi(19,n,t,a),e.elementType=he,e.lanes=o,e;case ye:case xe:return e=a|32,e=Wi(30,n,t,e),e.elementType=xe,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case fe:s=10;break a;case de:s=9;break a;case pe:s=11;break a;case ge:s=14;break a;case _e:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Wi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Yi(e,t,n,r){return e=Wi(7,e,r,t),e.lanes=n,e}function Xi(e,t,n){return e=Wi(6,e,null,t),e.lanes=n,e}function Zi(e){var t=Wi(18,null,null,0);return t.stateNode=e,t}function Qi(e,t,n){return t=Wi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var $i=new WeakMap;function ea(e,t){if(typeof e==`object`&&e){var n=$i.get(e);return n===void 0?(t={value:e,source:t,stack:qe(t)},$i.set(e,t),t):n}return{value:e,source:t,stack:qe(t)}}var ta=[],na=0,ra=null,ia=0,aa=[],oa=0,sa=null,ca=1,la=``;function ua(e,t){ta[na++]=ia,ta[na++]=ra,ra=e,ia=t}function da(e,t,n){aa[oa++]=ca,aa[oa++]=la,aa[oa++]=sa,sa=e;var r=ca;e=la;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var a=32-dt(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ca=1<<32-dt(t)+i|n<<i|r,la=a+e}else ca=1<<a|n<<i|r,la=e}function fa(e){e.return!==null&&(ua(e,1),da(e,1,0))}function pa(e){for(;e===ra;)ra=ta[--na],ta[na]=null,ia=ta[--na],ta[na]=null;for(;e===sa;)sa=aa[--oa],aa[oa]=null,la=aa[--oa],aa[oa]=null,ca=aa[--oa],aa[oa]=null}function ma(e,t){aa[oa++]=ca,aa[oa++]=la,aa[oa++]=sa,ca=t.id,la=t.overflow,sa=e}var O=null,k=null,A=!1,ha=null,ga=!1,_a=Error(i(519));function va(e){throw wa(ea(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),_a}function ya(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ft]=e,t[It]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),_n(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),xn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||va(e,!0)}function ba(e){for(O=e.return;O;)switch(O.tag){case 5:case 31:case 13:ga=!1;return;case 27:case 3:ga=!0;return;default:O=O.return}}function xa(e){if(e!==O)return!1;if(!A)return ba(e),A=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&k&&va(e),ba(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));k=dm(e)}else t===27?(t=k,Sp(e.type)?(e=um,um=null,k=e):k=t):k=O?lm(e.stateNode.nextSibling):null;return!0}function Sa(){k=O=null,A=!1}function Ca(){var e=ha;return e!==null&&(pd===null?pd=e:pd.push.apply(pd,e),ha=null),e}function wa(e){ha===null?ha=[e]:ha.push(e)}var Ta=je(null),Ea=null,Da=null;function Oa(e,t,n){T(Ta,t._currentValue),t._currentValue=n}function ka(e){e._currentValue=Ta.current,Me(Ta)}function Aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ja(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Aa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Aa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Aa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Ma(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;$r(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ie.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ja(t,e,n,r),t.flags|=262144,e!==null}function Na(e){for(e=e.firstContext;e!==null;){if(!$r(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pa(e){Ea=e,Da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fa(e){return La(Ea,e)}function Ia(e,t){return Ea===null&&Pa(e),La(e,t)}function La(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Da===null){if(e===null)throw Error(i(308));Da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Da=Da.next=t;return n}var Ra=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},za=t.unstable_scheduleCallback,Ba=t.unstable_NormalPriority,j={$$typeof:fe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Va(){return{controller:new Ra,data:new Map,refCount:0}}function Ha(e){e.refCount--,e.refCount===0&&za(Ba,function(){e.controller.abort()})}function Ua(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Wa=null;function Ga(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ka=null,qa=0,Ja=0,Ya=null;function Xa(e,t){if(Ka===null){var n=Ka=[];qa=0,Ja=Pf(),Ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return qa++,t.then(Za,Za),t}function Za(){if(--qa===0&&(Wa=null,Ka!==null)){Ya!==null&&(Ya.status=`fulfilled`);var e=Ka;Ka=null,Ja=0,Ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Qa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var $a=C.S;C.S=function(e,t){if(gd=$e(),typeof t==`object`&&t&&typeof t.then==`function`&&Xa(e,t),Wa!==null)for(var n=bf;n!==null;)Ua(n,Wa),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ua(r,n),r=r.next;if(Ja!==0){r=Wa,r===null&&(r=Wa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}$a!==null&&$a(e,t)};var eo=je(null);function to(){var e=eo.current;return e===null?G.pooledCache:e}function no(e,t){t===null?T(eo,eo.current):T(eo,t.pool)}function ro(){var e=to();return e===null?null:{parent:j._currentValue,pool:e}}var io=Error(i(460)),ao=Error(i(474)),oo=Error(i(542)),so={then:function(){}};function co(e){return e=e.status,e===`fulfilled`||e===`rejected`}function lo(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,mo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(An,An);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,mo(e),e}throw fo=t,io}}function uo(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(fo=e,io):e}}var fo=null;function po(){if(fo===null)throw Error(i(459));var e=fo;return fo=null,e}function mo(e){if(e===io||e===oo)throw Error(i(483))}var ho=null,go=0;function _o(e){var t=go;return go+=1,ho===null&&(ho=[]),lo(ho,e,t)}function vo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function yo(e,t){throw t.$$typeof===ae?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function bo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ki(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ce?(e=d(e,t,n.props.children,r,n.key),vo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===_e&&uo(i)===t.type)?(t=a(t,n.props),vo(t,n),t.return=e,t):(t=Ji(n.type,n.key,n.props,null,e.mode,r),vo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Qi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Yi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case oe:return n=Ji(t.type,t.key,t.props,null,e.mode,n),vo(n,t),n.return=e,n;case se:return t=Qi(t,e.mode,n),t.return=e,t;case _e:return t=uo(t),f(e,t,n)}if(De(t)||we(t))return t=Yi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,_o(t),n);if(t.$$typeof===fe)return f(e,Ia(e,t),n);yo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case oe:return n.key===i?l(e,t,n,r):null;case se:return n.key===i?u(e,t,n,r):null;case _e:return n=uo(n),p(e,t,n,r)}if(De(n)||we(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,_o(n),r);if(n.$$typeof===fe)return p(e,t,Ia(e,n),r);yo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case oe:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case se:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case _e:return r=uo(r),m(e,t,n,r,i)}if(De(r)||we(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,_o(r),i);if(r.$$typeof===fe)return m(e,t,n,Ia(t,r),i);yo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),A&&ua(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return A&&ua(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),A&&ua(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),A&&ua(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return A&&ua(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),A&&ua(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ce&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case oe:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ce){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),vo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===_e&&uo(l)===r.type){n(e,r.sibling),c=a(r,o.props),vo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ce?(c=Yi(o.props.children,e.mode,c,o.key),vo(c,o),c.return=e,e=c):(c=Ji(o.type,o.key,o.props,null,e.mode,c),vo(c,o),c.return=e,e=c)}return s(e);case se:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Qi(o,e.mode,c),c.return=e,e=c}return s(e);case _e:return o=uo(o),_(e,r,o,c)}if(De(o))return h(e,r,o,c);if(we(o)){if(l=we(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,_o(o),c);if(o.$$typeof===fe)return _(e,r,Ia(e,o),c);yo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{go=0;var i=_(e,t,n,r);return ho=null,i}catch(t){if(t===io||t===oo)throw t;var a=Wi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var xo=bo(!0),So=bo(!1),Co=!1;function wo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function To(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Eo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Do(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Vi(e),Bi(e,null,n),t}return Li(e,r,t,n),Vi(e)}function Oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ot(e,n)}}function ko(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ao=!1;function jo(){if(Ao){var e=Ya;if(e!==null)throw e}}function Mo(e,t,n,r){Ao=!1;var i=e.updateQueue;Co=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===Ja&&(Ao=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=S({},d,f);break a;case 2:Co=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),sd|=o,e.lanes=o,e.memoizedState=d}}function No(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Po(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)No(n[e],t)}var Fo=je(null),Io=je(0);function Lo(e,t){e=od,T(Io,e),T(Fo,t),od=e|t.baseLanes}function Ro(){T(Io,od),T(Fo,Fo.current)}function zo(){od=Io.current,Me(Fo),Me(Io)}var Bo=je(null),Vo=null;function Ho(e){var t=e.alternate;T(qo,qo.current&1),T(Bo,e),Vo===null&&(t===null||Fo.current!==null||t.memoizedState!==null)&&(Vo=e)}function Uo(e){T(qo,qo.current),T(Bo,e),Vo===null&&(Vo=e)}function Wo(e){e.tag===22?(T(qo,qo.current),T(Bo,e),Vo===null&&(Vo=e)):Go()}function Go(){T(qo,qo.current),T(Bo,Bo.current)}function Ko(e){Me(Bo),Vo===e&&(Vo=null),Me(qo)}var qo=je(0);function Jo(e,t){T(Bo,Bo.current),T(qo,t)}function Yo(e){Me(qo),Me(Bo),Vo===e&&(Vo=null)}function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zo=0,M=null,N=null,P=null,Qo=!1,$o=!1,es=!1,ts=0,ns=0,rs=null,is=0;function F(){throw Error(i(321))}function as(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$r(e[n],t[n]))return!1;return!0}function os(e,t,n,r,i,a){return Zo=a,M=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,C.H=e===null||e.memoizedState===null?Sc:Cc,es=!1,a=n(r,i),es=!1,$o&&(a=cs(t,n,r,i)),ss(e),a}function ss(e){C.H=xc;var t=N!==null&&N.next!==null;if(Zo=0,P=N=M=null,Qo=!1,ns=0,rs=null,t)throw Error(i(300));e===null||L||(e=e.dependencies,e!==null&&Na(e)&&(L=!0))}function cs(e,t,n,r){M=e;var a=0;do{if($o&&(rs=null),ns=0,$o=!1,25<=a)throw Error(i(301));if(a+=1,P=N=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}C.H=wc,o=t(n,r)}while($o);return o}function ls(){var e=C.H,t=e.useState()[0];return t=typeof t.then==`function`?hs(t):t,e=e.useState()[0],(N===null?null:N.memoizedState)!==e&&(M.flags|=1024),t}function us(){var e=ts!==0;return ts=0,e}function ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function fs(e){if(Qo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Qo=!1}Zo=0,P=N=M=null,$o=!1,ns=ts=0,rs=null}function ps(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return P===null?M.memoizedState=P=e:P=P.next=e,P}function I(){if(N===null){var e=M.alternate;e=e===null?null:e.memoizedState}else e=N.next;var t=P===null?M.memoizedState:P.next;if(t!==null)P=t,N=e;else{if(e===null)throw M.alternate===null?Error(i(467)):Error(i(310));N=e,e={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null},P===null?M.memoizedState=P=e:P=P.next=e}return P}function ms(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hs(e){var t=ns;return ns+=1,rs===null&&(rs=[]),e=lo(rs,e,t),t=M,(P===null?t.memoizedState:P.next)===null&&(t=t.alternate,C.H=t===null||t.memoizedState===null?Sc:Cc),e}function gs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return hs(e);if(e.$$typeof===Se)return;if(e.$$typeof===fe)return Fa(e)}throw Error(i(438,String(e)))}function _s(e){var t=null,n=M.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=M.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ms(),M.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=be;return t.index++,n}function vs(e,t){return typeof t==`function`?t(e):t}function ys(e){return bs(I(),N,e)}function bs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Zo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ja&&(d=!0);else if((Zo&p)===p){u=u.next,p===Ja&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,M.lanes|=p,sd|=p;f=u.action,es&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,M.lanes|=f,sd|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!$r(o,e.memoizedState)&&(L=!0,d&&(n=Ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xs(e){var t=I(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);$r(o,t.memoizedState)||(L=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ss(e,t,n){var r=M,a=I(),o=A;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!$r((N||a).memoizedState,n);if(s&&(a.memoizedState=n,L=!0),a=a.queue,qs(Ts.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||P!==null&&!!(P.memoizedState.tag&1),Hs(e?9:8,{destroy:void 0},ws.bind(null,r,a,n,t),null),e){if(r.flags|=2048,G===null)throw Error(i(349));o||Zo&127||Cs(r,t,n)}return n}function Cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=M.updateQueue,t===null?(t=ms(),M.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ws(e,t,n,r){t.value=n,t.getSnapshot=r,Es(t)&&Ds(e)}function Ts(e,t,n){return n(function(){Es(t)&&Ds(e)})}function Es(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$r(e,n)}catch{return!0}}function Ds(e){var t=zi(e,2);t!==null&&Pd(t,e,2)}function Os(e){var t=ps();if(typeof e==`function`){var n=e;if(e=n(),es){ut(!0);try{n()}finally{ut(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:e},t}function ks(e,t,n,r){return e.baseState=n,bs(e,N,typeof r==`function`?r:vs)}function As(e,t,n,r,a){if(vc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};C.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,js(t,o)):(o.next=n.next,t.pending=n.next=o)}}function js(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=C.T,o={};o.types=a===null?null:a.types,C.T=o;try{var s=n(i,r),c=C.S;c!==null&&c(o,s),Ms(e,t,s)}catch(n){Ps(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),C.T=a}}else try{a=n(i,r),Ms(e,t,a)}catch(n){Ps(e,t,n)}}function Ms(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ns(e,t,n)},function(n){return Ps(e,t,n)}):Ns(e,t,n)}function Ns(e,t,n){t.status=`fulfilled`,t.value=n,Fs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,js(e,n)))}function Ps(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Fs(t),t=t.next;while(t!==r)}e.action=null}function Fs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Is(e,t){return t}function Ls(e,t){if(A){var n=G.formState;if(n!==null){a:{var r=M;if(A){if(k){b:{for(var i=k,a=ga;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){k=lm(i.nextSibling),r=i.data===`F!`;break a}}va(r)}r=!1}r&&(t=n[0])}}return n=ps(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},n.queue=r,n=hc.bind(null,M,r),r.dispatch=n,r=Os(!1),a=_c.bind(null,M,!1,r.queue),r=ps(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=As.bind(null,M,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Rs(e){return zs(I(),N,e)}function zs(e,t,n){if(t=bs(e,t,Is)[0],e=ys(vs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=hs(t)}catch(e){throw e===io?oo:e}else r=t;t=I();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(M.flags|=2048,Hs(9,{destroy:void 0},Bs.bind(null,i,n),null)),[r,a,e]}function Bs(e,t){e.action=t}function Vs(e){var t=I(),n=N;if(n!==null)return zs(t,n,e);I(),t=t.memoizedState,n=I();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Hs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=M.updateQueue,t===null&&(t=ms(),M.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Us(){return I().memoizedState}function Ws(e,t,n,r){var i=ps();M.flags|=e,i.memoizedState=Hs(1|t,{destroy:void 0},n,r===void 0?null:r)}function Gs(e,t,n,r){var i=I();r=r===void 0?null:r;var a=i.memoizedState.inst;N!==null&&r!==null&&as(r,N.memoizedState.deps)?i.memoizedState=Hs(t,a,n,r):(M.flags|=e,i.memoizedState=Hs(1|t,a,n,r))}function Ks(e,t){Ws(8390656,8,e,t)}function qs(e,t){Gs(2048,8,e,t)}function Js(e){M.flags|=4;var t=M.updateQueue;if(t===null)t=ms(),M.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ys(e){var t=I().memoizedState;return Js({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Xs(e,t){return Gs(4,2,e,t)}function Zs(e,t){return Gs(4,4,e,t)}function Qs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $s(e,t,n){n=n==null?null:n.concat([e]),Gs(4,4,Qs.bind(null,t,e),n)}function ec(){}function tc(e,t){var n=I();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&as(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nc(e,t){var n=I();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&as(t,r[1]))return r[0];if(r=e(),es){ut(!0);try{e()}finally{ut(!1)}}return n.memoizedState=[r,t],r}function rc(e,t,n){return n===void 0||Zo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),M.lanes|=e,sd|=e,n)}function ic(e,t,n,r){return $r(n,t)?n:Fo.current===null?!(Zo&106)||Zo&1073741824&&!(q&261930)?(L=!0,e.memoizedState=n):(e=Md(),M.lanes|=e,sd|=e,t):(e=rc(e,n,r),$r(e,t)||(L=!0),e)}function ac(e,t,n,r,i){var a=w.p;w.p=a!==0&&8>a?a:8;var o=C.T,s={};s.types=o===null?null:o.types,C.T=s,_c(e,!1,t,n);try{var c=i(),l=C.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?gc(e,t,Qa(c,r),jd(e)):gc(e,t,r,jd(e))}catch(n){gc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{w.p=a,o!==null&&s.types!==null&&(o.types=s.types),C.T=o}}function oc(){}function sc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=cc(e).queue;ac(e,a,t,Oe,n===null?oc:function(){return lc(e),n(r)})}function cc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Oe,baseState:Oe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:Oe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function lc(e){var t=cc(e);t.next===null&&(t=e.alternate.memoizedState),gc(e,t.next.queue,{},jd())}function uc(){return Fa(sh)}function dc(){return I().memoizedState}function fc(){return I().memoizedState}function pc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=Eo(n);var r=Do(t,e,n);r!==null&&(Pd(r,t,n),Oo(r,t,n)),t={cache:Va()},e.payload=t;return}t=t.return}}function mc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vc(e)?yc(t,n):(n=Ri(e,t,n,r),n!==null&&(Pd(n,e,r),bc(n,t,r)))}function hc(e,t,n){gc(e,t,n,jd())}function gc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vc(e))yc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,$r(s,o))return Li(e,t,i,0),G===null&&Ii(),!1}catch{}if(n=Ri(e,t,i,r),n!==null)return Pd(n,e,r),bc(n,t,r),!0}return!1}function _c(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vc(e)){if(t)throw Error(i(479))}else t=Ri(e,n,r,2),t!==null&&Pd(t,e,2)}function vc(e){var t=e.alternate;return e===M||t!==null&&t===M}function yc(e,t){$o=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function bc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ot(e,n)}}var xc={readContext:Fa,use:gs,useCallback:F,useContext:F,useEffect:F,useImperativeHandle:F,useLayoutEffect:F,useInsertionEffect:F,useMemo:F,useReducer:F,useRef:F,useState:F,useDebugValue:F,useDeferredValue:F,useTransition:F,useSyncExternalStore:F,useId:F,useHostTransitionStatus:F,useFormState:F,useActionState:F,useOptimistic:F,useMemoCache:F,useCacheRefresh:F,useEffectEvent:F},Sc={readContext:Fa,use:gs,useCallback:function(e,t){return ps().memoizedState=[e,t===void 0?null:t],e},useContext:Fa,useEffect:Ks,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ws(4194308,4,Qs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){Ws(4,2,e,t)},useMemo:function(e,t){var n=ps();t=t===void 0?null:t;var r=e();if(es){ut(!0);try{e()}finally{ut(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ps();if(n!==void 0){var i=n(t);if(es){ut(!0);try{n(t)}finally{ut(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=mc.bind(null,M,e),[r.memoizedState,e]},useRef:function(e){var t=ps();return e={current:e},t.memoizedState=e},useState:function(e){e=Os(e);var t=e.queue,n=hc.bind(null,M,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ec,useDeferredValue:function(e,t){return rc(ps(),e,t)},useTransition:function(){var e=Os(!1);return e=ac.bind(null,M,e.queue,!0,!1),ps().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=M,a=ps();if(A){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Cs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ks(Ts.bind(null,r,o,e),[e]),r.flags|=2048,Hs(9,{destroy:void 0},ws.bind(null,r,o,n,t),null),n},useId:function(){var e=ps(),t=G.identifierPrefix;if(A){var n=la,r=ca;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ts++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=is++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:uc,useFormState:Ls,useActionState:Ls,useOptimistic:function(e){var t=ps();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=_c.bind(null,M,!0,n),n.dispatch=t,[e,t]},useMemoCache:_s,useCacheRefresh:function(){return ps().memoizedState=pc.bind(null,M)},useEffectEvent:function(e){var t=ps(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Cc={readContext:Fa,use:gs,useCallback:tc,useContext:Fa,useEffect:qs,useImperativeHandle:$s,useInsertionEffect:Xs,useLayoutEffect:Zs,useMemo:nc,useReducer:ys,useRef:Us,useState:function(){return ys(vs)},useDebugValue:ec,useDeferredValue:function(e,t){return ic(I(),N.memoizedState,e,t)},useTransition:function(){var e=ys(vs)[0],t=I().memoizedState;return[typeof e==`boolean`?e:hs(e),t]},useSyncExternalStore:Ss,useId:dc,useHostTransitionStatus:uc,useFormState:Rs,useActionState:Rs,useOptimistic:function(e,t){return ks(I(),N,e,t)},useMemoCache:_s,useCacheRefresh:fc,useEffectEvent:Ys},wc={readContext:Fa,use:gs,useCallback:tc,useContext:Fa,useEffect:qs,useImperativeHandle:$s,useInsertionEffect:Xs,useLayoutEffect:Zs,useMemo:nc,useReducer:xs,useRef:Us,useState:function(){return xs(vs)},useDebugValue:ec,useDeferredValue:function(e,t){var n=I();return N===null?rc(n,e,t):ic(n,N.memoizedState,e,t)},useTransition:function(){var e=xs(vs)[0],t=I().memoizedState;return[typeof e==`boolean`?e:hs(e),t]},useSyncExternalStore:Ss,useId:dc,useHostTransitionStatus:uc,useFormState:Vs,useActionState:Vs,useOptimistic:function(e,t){var n=I();return N===null?(n.baseState=e,[e,n.queue.dispatch]):ks(n,N,e,t)},useMemoCache:_s,useCacheRefresh:fc,useEffectEvent:Ys};function Tc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ec={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Eo(r);i.payload=t,n!=null&&(i.callback=n),t=Do(e,i,r),t!==null&&(Pd(t,e,r),Oo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=Eo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Do(e,i,r),t!==null&&(Pd(t,e,r),Oo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=Eo(n);r.tag=2,t!=null&&(r.callback=t),t=Do(e,r,n),t!==null&&(Pd(t,e,n),Oo(t,e,n))}};function Dc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!ei(n,r)||!ei(i,a):!0}function Oc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ec.enqueueReplaceState(t,t.state,null)}function kc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=S({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ac(e){Mi(e)}function jc(e){console.error(e)}function Mc(e){Mi(e)}function Nc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Pc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Fc(e,t,n){return n=Eo(n),n.tag=3,n.payload={element:null},n.callback=function(){Nc(e,t)},n}function Ic(e){return e=Eo(e),e.tag=3,e}function Lc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Pc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Pc(t,n,r),typeof i!=`function`&&(yd===null?yd=new Set([this]):yd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Rc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Ma(t,n,a,!0),n=Bo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Vo===null?Kd():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===so?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===so?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(A)return t=Bo.current,t===null?(r!==_a&&(t=Error(i(423),{cause:r}),wa(ea(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ea(r,n),a=Fc(e.stateNode,r,a),ko(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==_a&&(e=Error(i(422),{cause:r}),wa(ea(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ea(o,n),fd===null?fd=[o]:fd.push(o),Y!==4&&(Y=2),t===null)return!0;r=ea(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Fc(n.stateNode,r,e),ko(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(yd===null||!yd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Ic(a),Lc(a,e,n,r),ko(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var zc=Error(i(461)),L=!1;function R(e,t,n,r){t.child=e===null?So(t,null,n,r):xo(t,e.child,n,r)}function Bc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Pa(t),r=os(e,t,n,o,a,i),s=us(),e!==null&&!L?(ds(e,t,i),ml(e,t,i)):(A&&s&&fa(t),t.flags|=1,R(e,t,r,i),t.child)}function Vc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Hc(e,t,a,r,i)):(e=Ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!hl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?ei:n,n(o,r)&&e.ref===t.ref)return ml(e,t,i)}return t.flags|=1,e=Ki(a,r),e.ref=t.ref,e.return=t,t.child=e}function Hc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(ei(a,r)&&e.ref===t.ref){if(L=!1,t.pendingProps=r=a,hl(e,i))e.flags&131072&&(L=!0);else return t.lanes=e.lanes,ml(e,t,i)}}return Xc(e,t,n,r,i)}function Uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Gc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&no(t,a===null?null:a.cachePool),a===null?Ro():Lo(t,a),Wo(t);else return r=t.lanes=536870912,Gc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&no(t,null),Ro(),Go()):(no(t,a.cachePool),Lo(t,a),Go(),t.memoizedState=null);return R(e,t,i,n),t.child}function Wc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Gc(e,t,n,r,i){var a=to();return a=a===null?null:{parent:j._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&no(t,null),Ro(),Wo(t),e!==null&&Ma(e,t,r,!0),t.childLanes=i,null}function Kc(e,t){return t=al({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function qc(e,t,n){return xo(t,e.child,null,n),e=Kc(t,t.pendingProps),e.flags|=2,Ko(t),t.memoizedState=null,e}function Jc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(A){if(r.mode===`hidden`)return e=Kc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Wc(null,e);if(Uo(t),(e=k)?(e=am(e,ga),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa===null?null:{id:ca,overflow:la},retryLane:536870912,hydrationErrors:null},n=Zi(e),n.return=t,t.child=n,O=t,k=null)):e=null,e===null)throw va(t);return t.lanes=536870912,null}return Kc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Uo(t),a){if(t.flags&256)t.flags&=-257,t=qc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(L||Ma(e,t,n,!1),a=(n&e.childLanes)!==0,L||a){if(Fo.current===null){if(r=G,r!==null&&(s=kt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,zi(e,s),Pd(r,e,s),zc;Kd()}t=qc(e,t,n)}else e=o.treeContext,k=lm(s.nextSibling),O=t,A=!0,ha=null,ga=!1,e!==null&&ma(t,e),t=Kc(t,r),t.flags|=134221824;return t}return e=Ki(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Yc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Xc(e,t,n,r,i){return Pa(t),n=os(e,t,n,r,void 0,i),r=us(),e!==null&&!L?(ds(e,t,i),ml(e,t,i)):(A&&r&&fa(t),t.flags|=1,R(e,t,n,i),t.child)}function Zc(e,t,n,r,i,a){return Pa(t),t.updateQueue=null,n=cs(t,r,n,i),ss(e),r=us(),e!==null&&!L?(ds(e,t,a),ml(e,t,a)):(A&&r&&fa(t),t.flags|=1,R(e,t,n,a),t.child)}function Qc(e,t,n,r,i){if(Pa(t),t.stateNode===null){var a=Hi,o=n.contextType;typeof o==`object`&&o&&(a=Fa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ec,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},wo(t),o=n.contextType,a.context=typeof o==`object`&&o?Fa(o):Hi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Tc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ec.enqueueReplaceState(a,a.state,null),Mo(t,r,a,i),jo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=kc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Hi,typeof u==`object`&&u&&(o=Fa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Oc(t,a,r,o),Co=!1;var f=t.memoizedState;a.state=f,Mo(t,r,a,i),jo(),l=t.memoizedState,s||f!==l||Co?(typeof d==`function`&&(Tc(t,n,d,r),l=t.memoizedState),(c=Co||Dc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,To(e,t),o=t.memoizedProps,u=kc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Hi,typeof l==`object`&&l&&(c=Fa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Oc(t,a,r,c),Co=!1,f=t.memoizedState,a.state=f,Mo(t,r,a,i),jo();var p=t.memoizedState;o!==d||f!==p||Co||e!==null&&e.dependencies!==null&&Na(e.dependencies)?(typeof s==`function`&&(Tc(t,n,s,r),p=t.memoizedState),(u=Co||Dc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Na(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Yc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=xo(t,e.child,null,i),t.child=xo(t,null,n,i)):R(e,t,n,i),t.memoizedState=a.state,e=t.child):e=ml(e,t,i),e}function $c(e,t,n,r){return Sa(),t.flags|=256,R(e,t,n,r),t.child}var el={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tl(e){return{baseLanes:e,cachePool:ro()}}function nl(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ud),e}function rl(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(qo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(A){if(i?Ho(t):Go(),(e=k)?(e=am(e,ga),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:sa===null?null:{id:ca,overflow:la},retryLane:536870912,hydrationErrors:null},n=Zi(e),n.return=t,t.child=n,O=t,k=null)):e=null,e===null)throw va(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Go(),i=t.mode,a=al({mode:`hidden`,children:a},i),r=Yi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=tl(n),r.childLanes=nl(e,o,n),t.memoizedState=el,Wc(null,r)):(Ho(t),il(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return sl(e,t,a,o,r,c,s,n)}return i?(Go(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ki(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Yi(i,a,n,null),i.flags|=2):i=Ki(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Wc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=tl(n):(a=i.cachePool,a===null?a=ro():(s=j._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=nl(e,o,n),t.memoizedState=el,Wc(e.child,r)):(Ho(t),n=e.child,e=n.sibling,n=Ki(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function il(e,t){return t=al({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function al(e,t){return e=Wi(22,e,null,t),e.lanes=0,e}function ol(e,t,n){return xo(t,e.child,null,n),e=il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Ho(t),t.flags&=-257,ol(e,t,c)):t.memoizedState===null?(Go(),o=a.fallback,s=t.mode,a=al({mode:`visible`,children:a.children},s),o=Yi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,xo(t,e.child,null,c),a=t.child,a.memoizedState=tl(c),a.childLanes=nl(e,r,c),t.memoizedState=el,Wc(null,a)):(Go(),t.child=e.child,t.flags|=128,null);if(Ho(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,wa({value:a,source:null,stack:null})),ol(e,t,c)}if(L||Ma(e,t,c,!1),r=(c&e.childLanes)!==0,L||r){if(Fo.current!==null)return ol(e,t,c);if(r=G,r!==null&&(a=kt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,zi(e,a),Pd(r,e,a),zc;return om(o)||Kd(),ol(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,k=lm(o.nextSibling),O=t,A=!0,ha=null,ga=!1,e!==null&&ma(t,e),t=il(t,a.children),t.flags|=134221824,t)}function cl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Aa(e.return,t,n)}function ll(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Xo(n)===null&&(t=e),e=e.sibling}return t}function ul(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function dl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function fl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=qo.current;if(t.flags&128)return Jo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Jo(t,o),i===`backwards`&&e!==null?(dl(e),R(e,t,r,n),dl(e)):R(e,t,r,n),r=A?ia:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cl(e,n,t);else if(e.tag===19)cl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=ll(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,dl(t)),ul(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ul(t,!0,n,null,a,r);break;case`together`:ul(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=ll(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ul(t,!1,i,n,a,r)}return t.child}function pl(e,t,n){var r=t.pendingProps;return Oa(t,t.type,r.value),R(e,t,r.children,n),t.child}function ml(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sd|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(Ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Na(e)))}function gl(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),Oa(t,j,e.memoizedState.cache),Sa();break;case 27:case 5:ze(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:Oa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ho(t),t.flags|=128,null;r=Ma(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?rl(e,t,n):(Ho(t),e=ml(e,t,n),e===null?null:e.sibling)}Ho(t);break;case 19:if(t.flags&128)return fl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(Ma(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return fl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Jo(t,qo.current),r)break;return null;case 22:return t.lanes=0,Uc(e,t,n,t.pendingProps);case 24:Oa(t,j,e.memoizedState.cache)}return ml(e,t,n)}function _l(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)L=!0;else{if(!hl(e,n)&&!(t.flags&128))return L=!1,gl(e,t,n);L=!!(e.flags&131072)}}else L=!1,A&&t.flags&1048576&&da(t,ia,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=uo(t.elementType),t.type=e,typeof e==`function`)Gi(e)?(r=kc(e,r),t.tag=1,t=Qc(null,t,e,r,n)):(t.tag=0,t=Xc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===pe){t.tag=11,t=Bc(null,t,e,r,n);break a}if(a===ge){t.tag=14,t=Vc(null,t,e,r,n);break a}if(a===fe){t.tag=10,t.type=e,t=pl(null,t,n);break a}}throw t=Ee(e)||e,Error(i(306,t,``))}}return t;case 0:return Xc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=kc(r,t.pendingProps),Qc(e,t,r,a,n);case 3:a:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,To(e,t),Mo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Oa(t,j,r),r!==o.cache&&ja(t,[j],n,!0),jo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=$c(e,t,r,n);break a}if(r!==a){a=ea(Error(i(424)),t),wa(a),t=$c(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(k=lm(e.firstChild),O=t,A=!0,ha=null,ga=!0,n=So(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Sa(),r===a){t=ml(e,t,n);break a}R(e,t,r,n)}t=t.child}return t;case 26:return Yc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:A||(t.stateNode=fp(t.type,t.pendingProps,Fe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ze(t),e===null&&A&&(r=t.stateNode=hm(t.type,t.pendingProps,Fe.current),O=t,ga=!0,a=k,Sp(t.type)?(um=a,k=lm(r.firstChild)):k=a),R(e,t,t.pendingProps.children,n),Yc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&A&&((a=r=k)&&(r=rm(r,t.type,t.pendingProps,ga),r===null?a=!1:(t.stateNode=r,O=t,k=lm(r.firstChild),ga=!1,a=!0)),a||va(t)),ze(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=os(e,t,ls,null,null,n),sh._currentValue=a),Yc(e,t),R(e,t,r,n),t.child;case 6:return e===null&&A&&((e=n=k)&&(n=im(n,t.pendingProps,ga),n===null?e=!1:(t.stateNode=n,O=t,k=null,e=!0)),e||va(t)),null;case 13:return rl(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=xo(t,null,r,n):R(e,t,r,n),t.child;case 11:return Bc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Yc(e,t),R(e,t,r,n),t.child;case 8:return R(e,t,t.pendingProps.children,n),t.child;case 12:return R(e,t,t.pendingProps.children,n),t.child;case 10:return pl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Pa(t),a=Fa(a),r=r(a),t.flags|=1,R(e,t,r,n),t.child;case 14:return Vc(e,t,t.type,t.pendingProps,n);case 15:return Hc(e,t,t.type,t.pendingProps,n);case 19:return fl(e,t,n);case 31:return Jc(e,t,n);case 22:return Uc(e,t,n,t.pendingProps);case 24:return Pa(t),r=Fa(j),e===null?(a=to(),a===null&&(a=G,o=Va(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},wo(t),Oa(t,j,a)):((e.lanes&n)!==0&&(To(e,t),Mo(t,null,null,n),jo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Oa(t,j,r),r!==a.cache&&ja(t,[j],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Oa(t,j,r))),R(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:A&&fa(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Yc(e,t),R(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function vl(e){e.flags|=4}function yl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw fo=so,ao}}else e.flags&=-16777217}function bl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw fo=so,ao}}function xl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:Ct(),e.lanes|=t,dd|=t)}function Sl(e,t){if(!A)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function z(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cl(e,t,n){var r=t.pendingProps;switch(pa(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return z(t),null;case 1:return z(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ka(j),Re(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(xa(t)?vl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ca())),z(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(vl(t),o===null?(z(t),yl(t,a,null,r,n)):(z(t),bl(t,o))):o?o===e.memoizedState?(z(t),t.flags&=-16777217):(vl(t),z(t),bl(t,o)):(e=e.memoizedProps,e!==r&&vl(t),z(t),yl(t,a,e,r,n)),null;case 27:if(Be(t),n=Fe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),t.subtreeFlags&=-33554433,null}e=Ne.current,xa(t)?ya(t,e):(e=hm(a,r,n),t.stateNode=e,vl(t))}return z(t),t.subtreeFlags&=-33554433,null;case 5:if(Be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return z(t),t.subtreeFlags&=-33554433,null}if(o=Ne.current,xa(t))ya(t,o);else{var s=lp(Fe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[Ft]=t,o[It]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&vl(t)}}return z(t),t.subtreeFlags&=-33554433,yl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&vl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Fe.current,xa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=O,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||va(t,!0)}else e=lp(e).createTextNode(r),e[Ft]=t,t.stateNode=e}return z(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=xa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[Ft]=t}else Sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),e=!1}else n=Ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ko(t),t):(Ko(t),null);if(t.flags&128)throw Error(i(558))}return z(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=xa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[Ft]=t}else Sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;z(t),a=!1}else a=Ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ko(t),t):(Ko(t),null)}return Ko(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xl(t,t.updateQueue),z(t),null);case 4:return Re(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,z(t),null;case 10:return ka(t.type),z(t),null;case 19:if(Yo(t),r=t.memoizedState,r===null)return z(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)Sl(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xo(e),o!==null){for(t.flags|=128,Sl(r,!1),e=o.updateQueue,t.updateQueue=e,xl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)qi(n,e),n=n.sibling;return Jo(t,qo.current&1|2),A&&ua(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&$e()>_d&&(t.flags|=128,a=!0,Sl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Xo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,xl(t,e),Sl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!A)return z(t),null}else 2*$e()-r.renderingStartTime>_d&&n!==536870912&&(t.flags|=128,a=!0,Sl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=$e(),e.sibling=null,o=qo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||A?Jo(t,o):(n=o,T(Bo,t),T(qo,n),Vo===null&&(Vo=t)),A&&ua(t,r.treeForkCount),e}return z(t),null;case 22:case 23:return Ko(t),zo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(z(t),t.subtreeFlags&6&&(t.flags|=8192)):z(t),n=t.updateQueue,n!==null&&xl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Me(eo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ka(j),z(t),null;case 25:return null;case 30:return t.flags|=33554432,z(t),null}throw Error(i(156,t.tag))}function wl(e,t){switch(pa(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ka(j),Re(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Be(t),null;case 31:if(t.memoizedState!==null){if(Ko(t),t.alternate===null)throw Error(i(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ko(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Yo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Re(),null;case 10:return ka(t.type),null;case 22:case 23:return Ko(t),zo(),e!==null&&Me(eo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ka(j),null;case 25:return null;default:return null}}function Tl(e,t){switch(pa(t),t.tag){case 3:ka(j),Re();break;case 26:case 27:case 5:Be(t);break;case 4:Re();break;case 31:t.memoizedState!==null&&Ko(t);break;case 13:Ko(t);break;case 19:Yo(t);break;case 10:ka(t.type);break;case 22:case 23:Ko(t),zo(),e!==null&&Me(eo);break;case 24:ka(j)}}function El(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Dl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Ol(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Po(t,n)}catch(t){Z(e,e.return,t)}}}function kl(e,t,n){n.props=kc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Al(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=ki(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function jl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Ml(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Nl(e){for(var t=e.return;t!==null&&(Il(t)&&em(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Pl(e){for(var t=e.return;t!==null&&(Il(t)&&tm(e.stateNode,t.stateNode),!Fl(t));)t=t.return}function Fl(e){return e.tag===5||e.tag===3||e.tag===27}function Il(e){return e&&e.tag===7&&e.stateNode!==null}function Ll(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Rl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[It]=t}catch(t){Z(e,e.return,t)}}function zl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Bl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||zl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An)),Ml(e,r),D=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Vl(e,t,n,r),e=e.sibling;e!==null;)Vl(e,t,n,r),e=e.sibling}function Hl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Ml(e,r),D=!0;else if(i!==4&&(i===27&&(Ml(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Hl(e,t,n,r),e=e.sibling;e!==null;)Hl(e,t,n,r),e=e.sibling}function Ul(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[Ft]=e,t[It]=n}catch(t){Z(e,e.return,t)}}var Wl=!1,Gl=null;function Kl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Wl=!0)}var ql=null;function Jl(){var e=ql;return ql=null,e}var Yl=0;function Xl(e,t,n,r,i){return Yl=0,Zl(e.child,t,n,r,i)}function Zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Wl=!0,Tp(o,Yl===0?t:t+`_`+Yl,n),Yl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Zl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Ql(e.child,t),e=e.sibling}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&($l(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=ji(t.default,t.share),t!==`none`&&(Xl(e,n,t,null,!1)||Ql(e.child,!1))}e=e.sibling}}function eu(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=ki(r,n),a=ji(r.default,n.paired?r.share:r.enter);a===`none`?$l(e):Xl(e,i,a,null,!1)?($l(e),n.paired||t||Nd(e,r.onEnter)):Ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)eu(e,t),e=e.sibling;else $l(e)}function tu(e){if(Gl!==null&&Gl.size!==0){var t=Gl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=ji(n.default,n.share);if(a!==`none`&&(Xl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Ql(e.child,!1)),t.delete(r),t.size===0)break}}}tu(e)}e=e.sibling}}}function nu(e){if(e.tag===30){var t=e.memoizedProps,n=ki(t,e.stateNode),r=Gl===null?void 0:Gl.get(n),i=ji(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Xl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Gl.delete(n),Nd(e,t.onShare)):Ql(e.child,!1)),Gl!==null&&tu(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)nu(e),e=e.sibling;else Gl!==null&&tu(e)}function ru(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ki(t,e.stateNode);t=ji(t.default,t.update),e.flags&=-5,t!==`none`&&Xl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&ru(e);e=e.sibling}}function iu(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ql(e.child,!1))}iu(e)}e=e.sibling}}function au(e){if(e.tag===30)e.stateNode.paired=null,Ql(e.child,!1),iu(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)au(e),e=e.sibling;else iu(e)}function ou(e){for(e=e.child;e!==null;)e.tag===30?Ql(e.child,!1):e.subtreeFlags&33554432&&ou(e),e=e.sibling}function su(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Yl<a.length){var l=a[Yl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Yl===0?n:n+`_`+Yl,i),s&&e.flags&4||(ql===null&&(ql=[]),ql.push(c,Yl===0?r:r+`_`+Yl,t.memoizedProps)),Yl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:su(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function cu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=ki(n,r),a=ji(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Yl=0,i=su(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&cu(e,t);e=e.sibling}}var B=!1,V=!1,lu=!1,uu=!1,du=typeof WeakSet==`function`?WeakSet:Set,H=null,fu=!1,pu=!1,mu=!1,hu=!1;function gu(e,t,n){if(e=e.containerInfo,sp=gh,e=ai(e),oi(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,H=t,t=n?9270:1024;H!==null;){if(e=H,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&nu(r[a]);if(e.alternate===null&&e.flags&2)n&&Kl(e),_u(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&nu(r),_u(n);continue}if(r!==null&&r.memoizedState!==null){n&&Kl(e),_u(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,H=r):(n&&ru(e),_u(n))}}Gl=null}function _u(e){for(;H!==null;){var t=H,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=kc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=ki(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=ji(a.default,a.update),a!==`none`&&Xl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,H=r;break}H=t.return}}function vu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Lu(e,n),r&4&&El(5,n);break;case 1:if(Lu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=kc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Ol(n),r&512&&Al(n,n.return);break;case 3:if(Lu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Po(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Ul(n);case 26:case 5:Lu(e,n),t===null&&r&4&&Ll(n),r&512&&Al(n,n.return);break;case 12:Lu(e,n);break;case 31:Lu(e,n),r&4&&Eu(e,n);break;case 13:Lu(e,n),r&4&&Du(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||B,!r){var a=t!==null&&t.memoizedState!==null||V;t=B,i=V,B=r,(V=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),zu(e,n,r)):Lu(e,n),B=t,V=i}break;case 30:Lu(e,n),r&512&&Al(n,n.return);break;case 7:r&512&&Al(n,n.return);default:Lu(e,n)}}function yu(e,t){for(e=e.child;e!==null;)bu(e,t),e=e.sibling}function bu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}xu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,D=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&yu(e,t);break;default:yu(e,t)}}function xu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:bu(n,r);break a;case 22:n.memoizedState===null&&xu(n,r);break a;default:xu(n,r)}}e=e.sibling}}function Su(e){var t=e.alternate;t!==null&&(e.alternate=null,Su(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,Cu=!1;function wu(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount==`function`)try{lt.onCommitFiberUnmount(ct,n)}catch{}switch(n.tag){case 26:V||jl(n,t),wu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!V&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||jl(n,t),Pl(n);var r=U,i=Cu;Sp(n.type)&&(U=n.stateNode,Cu=!1),wu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),U=r,Cu=i;break;case 5:V||jl(n,t),Pl(n);case 6:if(n.tag===6&&Pl(n),r=U,i=Cu,U=null,wu(e,t,n),U=r,Cu=i,U!==null){if(Cu)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode),D=!0}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode),D=!0}catch(e){Z(n,t,e)}}break;case 18:U!==null&&(Cu?(e=U,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(U,n.stateNode));break;case 4:r=U,i=Cu,U=n.stateNode.containerInfo,Cu=!0,wu(e,t,n),U=r,Cu=i;break;case 0:case 11:case 14:case 15:Dl(2,n,t),V||Dl(4,n,t),wu(e,t,n);break;case 1:V||(jl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&kl(n,t,r)),wu(e,t,n);break;case 21:wu(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,wu(e,t,n),V=r;break;case 30:jl(n,t),wu(e,t,n);break;case 7:V||jl(n,t),wu(e,t,n);break;default:wu(e,t,n)}}function Eu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function Du(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Ou(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new du),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new du),t;default:throw Error(i(435,e.tag))}}function ku(e,t){var n=Ou(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Au(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){U=l.stateNode,Cu=!1;break a}break;case 5:U=l.stateNode,Cu=!1;break a;case 3:case 4:U=l.stateNode.containerInfo,Cu=!0;break a}l=l.return}if(U===null)throw Error(i(160));Tu(s,c,o),U=null,Cu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mu(t,e,n),t=t.sibling}var ju=null;function Mu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Au(t,e,n),Nu(e),a&4&&(Dl(3,e,e.return),El(3,e),Dl(5,e,e.return));break;case 1:Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),a&64&&B&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=ju,Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(B)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Ht]||r[Ft]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[Ft]=e,E(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[Ft]=e,E(r),t=r}e.stateNode=t}}else B||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Rl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||V||t.parentNode.removeChild(t)):a.count--,n===null?B||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Au(t,e,n),Nu(e),a&512&&(V||r===null||jl(r,r.return)),r!==null&&a&4&&Rl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=lu,lu=!1,Au(t,e,n),lu=o,Nu(e),a&512&&(V||r===null||jl(r,r.return)),e.flags&32){t=e.stateNode;try{Sn(t,``),D=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Rl(e,t,r===null?t:r.memoizedProps)),a&1024&&(uu=!0);break;case 6:if(Au(t,e,n),Nu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,D=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(D=!1,Wm=null,o=ju,ju=bm(t.containerInfo),Au(t,e,n),ju=o,Nu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}uu&&(uu=!1,Pu(e)),D=!1;break;case 4:a=lu,lu=B,r=an(),o=ju,ju=bm(e.stateNode.containerInfo),Au(t,e,n),Nu(e),ju=o,D&&pu&&(mu=!0),D=r,lu=a;break;case 12:Au(t,e,n),Nu(e);break;case 31:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 13:Au(t,e,n),Nu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(hd=$e()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=B,l=V,u=lu;B=c||o,lu=u||o,V=l||s,Au(t,e,n),V=l,lu=u,B=c,Nu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||B||V||(t=s||V,n=B,r=V,B=o||B,V=t,Ru(e,2),B=n,V=r),!o&&lu||yu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,ku(e,n))));break;case 19:Au(t,e,n),Nu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ku(e,t)));break;case 30:a&512&&(V||r===null||jl(r,r.return)),a=an(),o=pu,s=(n&335544064)===n,c=e.memoizedProps,pu=s&&ji(c.default,c.update)!==`none`,Au(t,e,n),Nu(e),s&&r!==null&&D&&(e.flags|=4),pu=o,D=a;break;case 21:break;case 7:a&512&&(V||r===null||jl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Au(t,e,n),Nu(e)}}function Nu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(zl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Il(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Fl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Hl(e,Bl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(Sn(l,``),n.flags&=-33),Hl(e,Bl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Vl(e,Bl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Pu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Pu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Fu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Iu(t,e),t=t.sibling;else cu(t,!1)}function Iu(e,t){var n=e.alternate;if(n===null)eu(e,!1);else switch(e.tag){case 3:if(hu=fu=!1,Jl(),Fu(t,e),!fu&&!mu){if(e=ql,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),hu=!0}ql=null;break;case 5:Fu(t,e);break;case 4:r=fu,fu=!1,Fu(t,e),fu&&(mu=!0),fu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Fu(t,e):eu(e,!1));break;case 30:r=fu,i=Jl(),fu=!1,Fu(t,e),fu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=ki(a,o),o=ki(n.memoizedProps,o);var s=ji(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Yl=0,t=su(e,n,t,o,s,a,!0),Yl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),ql=i):i!==null&&(i.push.apply(i,ql),ql=i),fu=e.flags&32?!0:r;break;default:Fu(t,e)}}function Lu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vu(e,t.alternate,t),t=t.sibling}function Ru(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Dl(4,n,n.return),Ru(n,r);break;case 1:jl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&kl(n,n.return,i),Ru(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:jl(n,n.return),n.tag!==5&&n.tag!==27||Pl(n),Ru(n,r);break;case 6:Pl(n);break;case 26:jl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||V||i.parentNode.removeChild(i),Ru(n,r);break;case 22:n.memoizedState===null&&Ru(n,r);break;case 30:jl(n,n.return),Ru(n,r);break;case 7:jl(n,n.return);default:Ru(n,r)}e=e.sibling}}function zu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:zu(i,a,n),El(4,a);break;case 1:if(zu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)No(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Ol(a),Al(a,a.return);break;case 27:n&2&&Ul(a);case 5:a.tag!==5&&a.tag!==27||Nl(a),zu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 6:Nl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||B||Km(bm(c.ownerDocument),a.type,c),zu(i,a,n),s&&r===null&&o&4&&Ll(a),Al(a,a.return);break;case 12:zu(i,a,n);break;case 31:zu(i,a,n),s&&o&4&&Eu(i,a);break;case 13:zu(i,a,n),s&&o&4&&Du(i,a);break;case 22:a.memoizedState===null&&zu(i,a,n),Al(a,a.return);break;case 30:zu(i,a,n),Al(a,a.return);break;case 7:Al(a,a.return);default:zu(i,a,n)}t=t.sibling}}function Bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ha(n))}function Vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ha(e))}function Hu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Uu(e,t,n,r),t=t.sibling;else i&&ou(t)}function Uu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&au(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Hu(e,t,n,r),a&2048&&El(9,t);break;case 1:Hu(e,t,n,r);break;case 3:Hu(e,t,n,r),i&&hu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ha(a)));break;case 12:if(a&2048){Hu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Hu(e,t,n,r);break;case 31:Hu(e,t,n,r);break;case 13:Hu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&au(t),o._visibility&2?Hu(e,t,n,r):(o._visibility|=2,Wu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&au(s),o._visibility&2?Hu(e,t,n,r):Gu(e,t)),a&2048&&Bu(s,t);break;case 24:Hu(e,t,n,r),a&2048&&Vu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ql(a.child,!0),Ql(t.child,!0))),Hu(e,t,n,r);break;default:Hu(e,t,n,r)}}function Wu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(a,o,s,c,i),El(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Wu(a,o,s,c,i)):u._visibility&2?Wu(a,o,s,c,i):Gu(a,o),i&&l&2048&&Bu(o.alternate,o);break;case 24:Wu(a,o,s,c,i),i&&l&2048&&Vu(o.alternate,o);break;default:Wu(a,o,s,c,i)}t=t.sibling}}function Gu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Gu(n,r),i&2048&&Bu(r.alternate,r);break;case 24:Gu(n,r),i&2048&&Vu(r.alternate,r);break;default:Gu(n,r)}t=t.sibling}}var Ku=8192;function qu(e,t,n){if(e.subtreeFlags&Ku)for(e=e.child;e!==null;)Ju(e,t,n),e=e.sibling}function Ju(e,t,n){switch(e.tag){case 26:qu(e,t,n),e.flags&Ku&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,ju,e.memoizedState,e.memoizedProps));break;case 5:qu(e,t,n),e.flags&Ku&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=ju;ju=bm(e.stateNode.containerInfo),qu(e,t,n),ju=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ku,Ku=16777216,qu(e,t,n),Ku=r):qu(e,t,n));break;case 30:if((e.flags&Ku)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Gl===null&&(Gl=new Map),Gl.set(r,i)}qu(e,t,n);break;default:qu(e,t,n)}}function Yu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Xu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,$u(r,e)}Yu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zu(e),e=e.sibling}function Zu(e){switch(e.tag){case 0:case 11:case 15:Xu(e),e.flags&2048&&Dl(9,e,e.return);break;case 3:Xu(e);break;case 12:Xu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qu(e)):Xu(e);break;default:Xu(e)}}function Qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,$u(r,e)}Yu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Dl(8,t,t.return),Qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qu(t));break;default:Qu(t)}e=e.sibling}}function $u(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Dl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(Su(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var ed={getCacheForType:function(e){var t=Fa(j),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Fa(j).controller.signal}},td=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,nd=null,rd=!1,id=!1,ad=!1,od=0,Y=0,sd=0,cd=0,ld=0,ud=0,dd=0,fd=null,pd=null,md=!1,hd=0,gd=0,_d=1/0,vd=null,yd=null,X=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return W&2&&q!==0?q&-q:C.T===null?Mt():Pf()}function Md(){if(ud===0){if(!(q&536870912)||A){var e=gt;gt<<=1,!(gt&3932160)&&(gt=262144),ud=e}else ud=536870912}return e=Bo.current,e!==null&&(e.flags|=32),ud}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(ki(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,q,ud,!1)),Tt(e,n),W&2&&e===G||(e===G&&(!(W&2)&&(cd|=n),Y===4&&Rd(e,q,ud,!1)),Ef(e))}function Fd(e,t,n){if(W&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||bt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){id&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=fd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(ad&&!l){c.errorRecoveryDisabledLanes|=o,cd|=o,a=4;break a}o=pd,pd=a,o!==null&&(pd===null?pd=o:pd.push.apply(pd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ud,!rd);break a;case 2:pd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=hd+300-$e(),10<a)){if(Rd(r,t,ud,!rd),yt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,pd,vd,md,t,ud,cd,dd,rd,o,`Throttled`,-0,0),a);break a}Id(r,n,pd,vd,md,t,ud,cd,dd,rd,o,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},Gl=null,Ju(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?hd-$e():(a&4194048)===a?gd-$e():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!$r(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=xt(e,t),t&=~ld,t&=~cd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-dt(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Dt(e,n,t)}function zd(){return W&6?!0:(Df(0,!1),!1)}function Bd(){if(K!==null){if(J===0)var e=K.return;else e=K,Da=Ea=null,fs(e),ho=null,go=0,e=K;for(;e!==null;)Tl(e.alternate,e),e=e.return;K=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),G=e,K=n=Ki(e.current,null),q=t,J=0,nd=null,rd=!1,id=bt(e,t),ad=!1,dd=ud=ld=cd=sd=Y=0,pd=fd=null,md=!1,od=xt(e,t),Ii(),n}function Hd(e,t){M=null,C.H=xc,t===io||t===oo?(t=po(),J=3):t===ao?(t=po(),J=4):J=t===zc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,nd=t,K===null&&(Y=1,Nc(e,ea(t,e.current)))}function Ud(){var e=Bo.current;return e===null?!0:(q&4194048)===q?Vo===null:(q&62914560)===q||q&536870912?e===Vo:!1}function Wd(){var e=C.H;return C.H=xc,e===null?xc:e}function Gd(){var e=C.A;return C.A=ed,e}function Kd(){Y=4,rd||(q&4194048)!==q&&Bo.current!==null||(id=!0),!(sd&134217727)&&!(cd&134217727)||G===null||Rd(G,q,ud,!1)}function qd(e,t,n){var r=W;W|=2;var i=Wd(),a=Gd();(G!==e||q!==t)&&(vd=null,Vd(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=nd;switch(J){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:Bo.current===null&&(t=!0);var l=J;if(J=0,nd=null,$d(e,s,c,l),n&&id){o=0;break a}break;default:l=J,J=0,nd=null,$d(e,s,c,l)}}Jd(),o=Y;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,Da=Ea=null,W=r,C.H=i,C.A=a,K===null&&(G=null,q=0,Ii()),o}function Jd(){for(;K!==null;)Zd(K)}function Yd(e,t){var n=W;W|=2;var r=Wd(),a=Gd();G!==e||q!==t?(vd=null,_d=$e()+500,Vd(e,t)):id=bt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=nd;b:switch(J){case 1:J=0,nd=null,$d(e,t,o,1);break;case 2:case 9:if(co(o)){J=0,nd=null,Qd(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),Ef(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:co(o)?(J=0,nd=null,Qd(t)):(J=0,nd=null,$d(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Ym(s):c.stateNode.complete){J=0,nd=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,ef(u))}break b}}J=0,nd=null,$d(e,t,o,5);break;case 6:J=0,nd=null,$d(e,t,o,6);break;case 8:Bd(),Y=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return Da=Ea=null,C.H=r,C.A=a,W=n,K===null?(G=null,q=0,Ii(),Y):0}function Xd(){for(;K!==null&&!Ze();)Zd(K)}function Zd(e){var t=_l(e.alternate,e,od);e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=Zc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:fs(t);var r=t;r===O&&(A?(ba(r),r.tag===5&&r.stateNode!=null&&(k=r.stateNode)):(ba(r),A=!0));default:Tl(n,t),t=K=qi(t,od),t=_l(n,t,od)}e.memoizedProps=e.pendingProps,t===null?ef(e):K=t}function $d(e,t,n,r){Da=Ea=null,fs(t),ho=null,go=0;var i=t.return;try{if(Rc(e,i,t,n,q)){Y=1,Nc(e,ea(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,Nc(e,ea(n,e.current)),K=null;return}t.flags&32768?(A||r===1?e=!0:id||q&536870912?e=!1:(rd=e=!0,(r===2||r===9||r===3||r===6)&&(r=Bo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,rd);return}e=t.return;var n=Cl(t.alternate,t,od);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function tf(e,t){do{var n=wl(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===G&&(K=G=null,q=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Fi,Et(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Ga(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(rt,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Wl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=C.T,C.T=null,i=w.p,w.p=2,a=W,W|=4;try{gu(e,t,n)}finally{W=a,w.p=i,C.T=r}}X=1,Wl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(X!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){X===3&&(X=0,Iu(xd,bd),X=4)}function sf(){if(X===1){X=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=C.T,C.T=null;var i=w.p;w.p=2;var a=W;W|=4;try{pu=mu=!1,Mu(t,e,n),n=cp;var o=ai(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&ii(s.ownerDocument.documentElement,s)){if(c!==null&&oi(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=ri(s,h),v=ri(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{W=a,w.p=i,C.T=r}}e.current=t,X=2}}function cf(){if(X===2){X=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=C.T,C.T=null;var r=w.p;w.p=2;var i=W;W|=4;try{vu(e,t.alternate,t)}finally{W=i,w.p=r,C.T=n}}X=3}}function lf(){if(X===4||X===3){X=0;var e=Ed;Ed=null,Qe();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?X=5:(X=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(yd=null),jt(r),n=n.stateNode,lt&&typeof lt.onCommitFiberRoot==`function`)try{lt.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=C.T,a=w.p,w.p=2,C.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{C.T=n,w.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ha(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(X!==5)return!1;var e=bd,t=Cd;Cd=0;var n=jt(Sd),r=C.T,a=w.p;try{w.p=32>n?32:n,C.T=null,n=wd,wd=null;var o=bd,s=Sd;if(X=0,xd=bd=null,Sd=0,W&6)throw Error(i(331));var c=W;if(W|=4,Zu(o.current),Uu(o,o.current,s,n),W=c,Df(0,!1),lt&&typeof lt.onPostCommitFiberRoot==`function`)try{lt.onPostCommitFiberRoot(ct,o)}catch{}return!0}finally{w.p=a,C.T=r,uf(e,t)}}function pf(e,t,n){t=ea(n,t),t=Fc(e.stateNode,t,2),e=Do(e,t,2),e!==null&&(Tt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(yd===null||!yd.has(r))){e=ea(n,e),n=Ic(2),r=Do(t,n,2),r!==null&&(Lc(n,r,t,e),Tt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new td;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(ad=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>$e()-hd?W&2?ld|=n:Vd(e,0):ld|=n,dd===q&&(dd=0)),Ef(e)}function gf(e,t){t===0&&(t=Ct()),e=zi(e,t),e!==null&&(Tt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ye(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-dt(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=q,a=yt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||bt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=$e(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}X!==0&&X!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-dt(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=St(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=yt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Xe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||bt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Xe(r),jt(n)){case 2:case 8:n=nt;break;case 32:n=rt;break;case 268435456:n=at;break;default:n=rt}return r=jf.bind(null,e),n=Ye(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Xe(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=q;return r=yt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,$e()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){W&6?Ye(tt,Of):kf()})}function Pf(){if(Tf===0){var e=Ja;e===0&&(e=ht,ht<<=1,!(ht&261888)&&(ht=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:kn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[It]||null).action),o=r.submitter;o&&(t=(t=o[It]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Zn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);sc(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),sc(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<Ei.length;Lf++){var Rf=Ei[Lf];Di(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}Di(vi,`onAnimationEnd`),Di(yi,`onAnimationIteration`),Di(bi,`onAnimationStart`),Di(`dblclick`,`onDoubleClick`),Di(`focusin`,`onFocus`),Di(`focusout`,`onBlur`),Di(xi,`onTransitionRun`),Di(Si,`onTransitionStart`),Di(Ci,`onTransitionCancel`),Di(wi,`onTransitionEnd`),$t(`onMouseEnter`,[`mouseout`,`mouseover`]),$t(`onMouseLeave`,[`mouseout`,`mouseover`]),$t(`onPointerEnter`,[`pointerout`,`pointerover`]),$t(`onPointerLeave`,[`pointerout`,`pointerover`]),Qt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Qt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Qt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Qt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Qt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Mi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Mi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Rt];n===void 0&&(n=t[Rt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Xt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Gt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Ln(function(){var r=a,i=Mn(n),s=[];a:{var c=Ti.get(e);if(c!==void 0){var l=Zn,u=e;switch(e){case`keypress`:if(Kn(n)===0)break a;case`keydown`:case`keyup`:l=hr;break;case`focusin`:u=`focus`,l=or;break;case`focusout`:u=`blur`,l=or;break;case`beforeblur`:case`afterblur`:l=or;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=ir;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=ar;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=vr;break;case vi:case yi:case bi:l=sr;break;case wi:l=yr;break;case`scroll`:case`scrollend`:l=$n;break;case`wheel`:l=br;break;case`copy`:case`cut`:case`paste`:l=cr;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=gr;break;case`submit`:l=_r;break;case`toggle`:case`beforetoggle`:l=xr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Rn(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==jn&&(u=n.relatedTarget||n.fromElement)&&(Gt(u)||u[Lt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=ir,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=gr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:qt(c),h=l==null?u:qt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Gt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ie(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?qt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Vr;else if(Fr(c)){if(Hr)_=Zr;else{_=Yr;var v=Jr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&En(r.elementType)&&(_=Vr):_=Xr;if(_&&=_(e,r)){Ir(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?qt(r):window,e){case`focusin`:(Fr(v)||v.contentEditable===`true`)&&(ci=v,li=r,ui=null);break;case`focusout`:ui=li=ci=null;break;case`mousedown`:di=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:di=!1,fi(s,n,i);break;case`selectionchange`:if(si)break;case`keydown`:case`keyup`:fi(s,n,i)}var y;if(Cr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else jr?kr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(Er&&n.locale!==`ko`&&(jr||b!==`onCompositionStart`?b===`onCompositionEnd`&&jr&&(y=Gn()):(Hn=i,Un=`value`in Hn?Hn.value:Hn.textContent,jr=!0)),v=Jf(r,b),0<v.length&&(b=new lr(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=Ar(n),y!==null&&(b.data=y)))),(y=Tr?Mr(e,n):Nr(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new lr(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Rn(e,n),i!=null&&r.unshift(qf(e,i,a)),i=Rn(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Rn(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=Rn(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&Sn(e,``+r);else return;break;case`className`:sn(e,`class`,r);break;case`tabIndex`:sn(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:sn(e,n,r);break;case`style`:Tn(e,r,o);return;case`data`:if(t!==`object`){sn(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=kn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=An);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=kn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),on(e,`popover`,r);break;case`xlinkActuate`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:cn(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:cn(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:on(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=Dn.get(n)||n,on(e,n,r);else return}D=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:Tn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)Sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)Sn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=An);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Zt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[It]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}D=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):on(e,n,r)}return}D=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}_n(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&yn(e,!!r,n,!0):yn(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}xn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(En(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(D=!0),o=m;break;case`name`:m!==f&&(D=!0),a=m;break;case`checked`:m!==f&&(D=!0),u=m;break;case`defaultChecked`:m!==f&&(D=!0),d=m;break;case`value`:m!==f&&(D=!0),s=m;break;case`defaultValue`:m!==f&&(D=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}gn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(D=!0),p=o;break;case`defaultValue`:o!==l&&(D=!0),c=o;break;case`multiple`:o!==l&&(D=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?yn(e,!!n,n?[]:``,!1):yn(e,!!n,t,!0)):yn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(D=!0),p=a;break;case`defaultValue`:a!==o&&(D=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}bn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(D=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(En(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[Ft]=r,n[It]=t,np(n,e,t),E(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ht]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:S({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Gt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ie(n,a,x),t===null?t=!1:(h(t,!0,ne,a,n),a=ee,ee=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ie(r,a,x),t===null?t=!1:(h(t,!0,re,a,r),a=ee,te=ee=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ht])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===An&&(e.onclick=null),Wt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Wt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=w.d;w.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Kt(e);t!==null&&t.tag===5&&t.type===`form`?lc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=hn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),E(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+hn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+hn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+hn(n.imageSizes)+`"]`)):i+=`[href="`+hn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=S({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Ut]=!0,o.onload=o.onerror=function(){Yt(o)}),E(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+hn(r)+`"][href="`+hn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=S({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),E(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Jt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=S({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);E(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Jt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=S({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),E(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Jt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=S({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),E(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Fe.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Jt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Jt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Jt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+hn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ut]){r.loading=1;return}}else t=e.createElement(`link`),t[Ut]=!0,t.onload=t.onerror=Yt.bind(null,t),np(t,`link`,n),E(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+hn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+hn(n.href)+`"]`);if(r)return t.instance=r,E(r),r;var a=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),E(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,E(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),E(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,E(a),a):(r=n,(a=vm.get(o))&&(r=S({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),E(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ht]||a[Ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,E(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),E(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:fe,Provider:null,Consumer:null,_currentValue:Oe,_currentValue2:Oe,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Wi(3,null,null,t),e.current=a,a.stateNode=e,t=Va(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},wo(a),e}function uh(e){return e?(e=Hi,e):Hi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=Eo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Do(e,r,t),n!==null&&(Pd(n,e,t),Oo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=zi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=At(t);var n=zi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=C.T;C.T=null;var a=w.p;try{w.p=2,yh(e,t,n,r)}finally{w.p=a,C.T=i}}function vh(e,t,n,r){var i=C.T;C.T=null;var a=w.p;try{w.p=8,yh(e,t,n,r)}finally{w.p=a,C.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Kt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=vt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-dt(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(W&6)&&(_d=$e()+500,Df(0,!1))}}break;case 31:case 13:s=zi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Mn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Gt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(et()){case tt:return 2;case nt:return 8;case rt:case it:return 32;case at:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Kt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Gt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,Nt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,Nt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);jn=r,n.target.dispatchEvent(r),jn=null}else return t=Kt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Kt(n);a!==null&&(e.splice(t,3),t-=3,sc(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[It]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[It]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Lt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));w.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:C,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{ct=Jh.inject(qh),lt=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ac,s=jc,c=Mc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Lt]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#f6f7fb">
  <title>Node Theory</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;800&display=swap');

    :root {
      --ink: #173044;
      --muted: #5f7382;
      --line: #dfe8ec;
      --paper: #fff;
      --canvas: #f5f8fa;
      --table-bg: #fff;
      --table-header-bg: #f1f7f8;
      --table-row-hover: #eaf6f6;
      --purple: #087f8c;
      --purple-dark: #086977;
      --purple-soft: #e4f3f4;
      --green: #28a879;
      --green-soft: #e8f7f1;
      --orange: #e59b42;
      --orange-soft: #fff4e5;
      --red: #df696c;
      --shadow: 0 12px 35px rgba(23, 48, 68, .07);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--ink);
      background: var(--canvas);
      font-synthesis: none;
      text-rendering: optimizeLegibility;
    }

    * { box-sizing: border-box; }
    body { margin: 0; min-width: 320px; min-height: 100vh; background: var(--canvas); }
    button, input, textarea, select { font: inherit; }
    button { cursor: pointer; }
    .app-shell { display: flex; min-height: 100vh; }
    .sidebar {
      width: 250px;
      flex: 0 0 250px;
      min-height: 100vh;
      padding: 27px 17px 20px;
      background: var(--paper);
      border-right: 1px solid var(--line);
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 0;
      height: 100vh;
      overflow-y: auto;
    }
    .brand { display: flex; align-items: center; gap: 11px; padding: 0 10px 31px; }
    .brand-mark {
      width: 35px;
      height: 35px;
      border-radius: 12px;
      background: linear-gradient(135deg, #8b68ff 0%, #25c7d9 100%);
      display: grid;
      place-items: center;
      color: #fff;
      box-shadow: 0 0 0 1px rgba(255,255,255,.4), 0 8px 18px rgba(37, 199, 217, .28), 0 0 16px rgba(255, 220, 120, .42);
    }
    .brand-mark svg { width: 21px; height: 21px; }
    .brand-name {
      font-size: 18px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase;
      font-family: "Orbitron", "Segoe UI", sans-serif;
      line-height: 1;
    }
    .brand-name span { color: var(--purple); }
    .brand-locked { display: none; }
    .workspace-label { padding: 0 11px; margin: 0 0 11px; font-size: 10px; text-transform: uppercase; letter-spacing: 1.15px; font-weight: 750; color: #70768b; }
    .nav-list { display: grid; gap: 5px; }
    .nav-section-label { padding: 11px 11px 3px; margin-top: 5px; color: var(--muted); font-size: 10px; font-weight: 750; letter-spacing: 1.15px; text-transform: uppercase; }
    .nav-item {
      width: 100%;
      border: 0;
      background: transparent;
      color: #626a80;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 11px 12px;
      border-radius: 10px;
      text-align: left;
      font-size: 13px;
      font-weight: 580;
      transition: background .18s ease, color .18s ease;
    }
    .nav-item:hover { background: #effbfc; color: var(--ink); }
    .nav-item.active { background: var(--purple-soft); color: var(--purple-dark); font-weight: 700; }
    .nav-item svg { width: 18px; height: 18px; flex: 0 0 18px; stroke-width: 1.8; }
    .nav-count { margin-left: auto; min-width: 20px; padding: 2px 6px; border-radius: 8px; text-align: center; background: #fff; font-size: 10px; color: var(--purple); }
    .sidebar-bottom { margin-top: auto; }
    .help-card {
      margin: 0 3px 17px;
      padding: 15px 14px;
      border-radius: 13px;
      background: #f0fcfd;
      border: 1px solid #d5f3f6;
    }
    .help-title { font-size: 12px; font-weight: 700; margin-bottom: 5px; }
    .help-copy { font-size: 11px; color: var(--muted); line-height: 1.5; margin-bottom: 11px; }
    .help-link { padding: 0; border: 0; color: var(--purple); background: transparent; font-size: 11px; font-weight: 700; }
    .profile {
      border-top: 1px solid var(--line);
      padding: 17px 5px 0;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .avatar {
      width: 35px; height: 35px; border-radius: 50%; display: grid; place-items: center;
      color: #087586; background: #daf6f9; font-weight: 750; font-size: 11px; flex: 0 0 auto;
    }
    .avatar img { width: 100%; height: 100%; border-radius: inherit; object-fit: cover; }
    .profile-avatar-preview { width: 64px; height: 64px; margin: 0 0 10px; border: 1px solid var(--line); border-radius: 50%; object-fit: cover; }
    .avatar.blue { color: #397c91; background: #e5f4f7; }
    .avatar.orange { color: #a06e35; background: #fff0dc; }
    .avatar.green { color: #328165; background: #e5f5ee; }
    .avatar.rose { color: #a35b73; background: #ffedf2; }
    .profile-info { min-width: 0; flex: 1; }
    .profile-name { display: block; font-size: 12px; font-weight: 650; }
    .profile-role { display: block; color: var(--muted); font-size: 10px; margin-top: 2px; }
    .profile-role span { display: block; }
    .profile-trigger { padding: 0; border: 0; background: transparent; color: inherit; text-align: left; }
    .profile-trigger.avatar { color: #087586; background: #daf6f9; }
    .profile-trigger:focus-visible { outline: 2px solid var(--purple); outline-offset: 3px; }
    .profile-trigger:hover { color: var(--purple-dark); }
    .profile-stats-summary { margin-top: 13px; padding: 10px 11px; border: 1px solid var(--line); border-radius: 8px; background: var(--canvas); color: var(--muted); font-size: 10px; }
    .button-danger { border: 1px solid #f1c9ca; color: #a63e43; background: #fff7f7; border-radius: 8px; padding: 7px 10px; font-size: 10px; font-weight: 700; }
    .button-danger:hover { background: #fff0f0; border-color: #df696c; }
    .logout-link { border: 1px solid var(--line); background: var(--purple-soft); color: var(--purple-dark); font-size: 10px; font-weight: 700; padding: 7px 9px; border-radius: 8px; white-space: nowrap; }
    .logout-link:hover { border-color: var(--purple); background: var(--paper); }
    .main-area { min-width: 0; flex: 1; }
    .topbar {
      height: 72px;
      border-bottom: 1px solid var(--line);
      background: rgba(255,255,255,.82);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 39px;
      position: sticky;
      top: 0;
      z-index: 4;
      backdrop-filter: blur(14px);
    }
    .breadcrumb { display: flex; align-items: center; gap: 8px; color: #687086; font-size: 12px; }
    .breadcrumb strong { color: var(--ink); font-size: 12px; }
    .top-actions { display: flex; align-items: center; gap: 12px; }
    .term-pill { display: flex; align-items: center; gap: 7px; padding: 7px 10px; border: 1px solid var(--line); background: white; border-radius: 8px; color: #777e96; font-size: 10px; }
    .term-pill span { width: 7px; height: 7px; border-radius: 50%; background: var(--green); }
    .icon-button { width: 35px; height: 35px; border: 1px solid var(--line); background: #fff; border-radius: 10px; display: grid; place-items: center; color: #797f96; position: relative; }
    .icon-button svg { width: 17px; height: 17px; }
    .icon-button #themeIcon { font-size: 17px; line-height: 1; }
    .notification-dot { width: 7px; height: 7px; border-radius: 50%; background: #ee7e7e; position: absolute; right: 7px; top: 6px; border: 1px solid #fff; }
    .role-switch { border: 1px solid #d5f0f3; background: #f0fcfd; padding: 4px; display: flex; gap: 3px; border-radius: 10px; }
    .role-option { border: 0; background: transparent; color: #898da1; padding: 6px 10px; font-size: 10px; font-weight: 700; border-radius: 7px; }
    .role-option.active { background: #fff; color: var(--purple-dark); box-shadow: 0 2px 7px rgba(0, 95, 110, .1); }
    .theme-select { min-height: 34px; max-width: 118px; padding: 0 9px; border: 1px solid var(--line); border-radius: 8px; background: var(--paper); color: var(--ink); font-size: 10px; }
    .content { width: min(1190px, 100%); margin: 0 auto; padding: 32px 39px 48px; }
    .page-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 15px; margin-bottom: 26px; }
    .eyebrow { font-size: 10px; text-transform: uppercase; letter-spacing: 1.3px; color: var(--purple); font-weight: 800; margin: 0 0 7px; }
    .teacher-projects-eyebrow { font-size: 22px; letter-spacing: .6px; }
    .student-projects-eyebrow { font-family: "Transcity", "Segoe UI", sans-serif; font-size: 22px; letter-spacing: .6px; font-weight: 900; }
    h1 { margin: 0; font-size: clamp(24px, 2.4vw, 29px); line-height: 1.18; letter-spacing: -1px; font-weight: 750; }
    .page-subtitle { margin: 7px 0 0; color: var(--muted); font-size: 12px; }
    .button-primary, .button-secondary {
      border: 0; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      min-height: 37px; border-radius: 9px; padding: 0 13px; font-size: 11px; font-weight: 700;
      transition: transform .18s ease, box-shadow .18s ease, background .18s ease;
      white-space: nowrap;
    }
    .button-primary { background: var(--purple); color: #fff; box-shadow: 0 5px 12px rgba(0,188,212,.2); }
    .button-primary:hover { background: var(--purple-dark); box-shadow: 0 7px 18px rgba(0,188,212,.3); transform: translateY(-1px); }
    .button-secondary { color: #626985; background: #fff; border: 1px solid var(--line); }
    .button-secondary:hover { background: #f1fcfd; border-color: #b6e8ed; }
    .button-primary svg, .button-secondary svg { width: 15px; height: 15px; }
    .welcome-banner {
      min-height: 152px; position: relative; overflow: hidden;
      display: flex; align-items: center; justify-content: space-between; gap: 20px;
      padding: 25px 29px; border-radius: 18px;
      background: linear-gradient(120deg, #041f31 0%, #0e3b5a 28%, #0d6985 62%, #11a7b4 100%);
      border: 1px solid rgba(157, 241, 255, 0.22);
      color: #fff; box-shadow: 0 16px 30px rgba(7, 28, 38, .28), inset 0 1px 0 rgba(255,255,255,.15);
    }
    .welcome-banner:before, .welcome-banner:after { content: ""; position: absolute; border: 1px solid rgba(255,255,255,.12); border-radius: 50%; pointer-events: none; }
    .welcome-banner:before { width: 260px; height: 260px; right: 118px; top: -150px; }
    .welcome-banner:after { width: 360px; height: 360px; right: -40px; bottom: -285px; background: radial-gradient(circle, rgba(136, 245, 255, 0.16), transparent 60%); }
    .welcome-copy { position: relative; z-index: 1; max-width: 470px; }
    .welcome-kicker { font-size: 10px; letter-spacing: .14em; text-transform: uppercase; color: rgba(228,249,255,.76); margin-bottom: 10px; }
    .welcome-tag {
      display: inline-flex; align-items: center; gap: 7px; padding: 6px 10px; border-radius: 999px;
      font-size: 9px; letter-spacing: .08em; text-transform: uppercase; font-weight: 700;
      color: #dffbff; background: rgba(8, 20, 34, 0.18); border: 1px solid rgba(255,255,255,0.14); margin-bottom: 12px;
    }
    .welcome-tag:before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #71ffd9; box-shadow: 0 0 10px rgba(113,255,217,.9); }
    .welcome-title { margin: 0 0 7px; font-weight: 760; font-size: 22px; letter-spacing: -.6px; line-height: 1.2; }
    .welcome-subtitle { color: rgba(255,255,255,.82); margin: 0; font-size: 11px; max-width: 320px; }
    .welcome-banner .button-primary { background: #fff; color: var(--purple-dark); box-shadow: 0 5px 14px rgba(0,75,90,.18); position: relative; z-index: 1; }
    .welcome-banner .button-primary:hover { background: #e8fbfd; }
    .banner-art {
      position: absolute; right: 92px; top: 50%; transform: translateY(-50%) rotate(-7deg);
      width: 120px; height: 96px; opacity: .92; z-index: 0;
    }
    .tech-window {
      position: absolute; inset: 0; border-radius: 12px; background: rgba(9,19,31,.32);
      border: 1px solid rgba(150, 227, 255, .3); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), 0 12px 22px rgba(2, 11, 20, .28);
      backdrop-filter: blur(2px);
    }
    .tech-window:before {
      content: ""; position: absolute; left: 12px; top: 12px; width: 52px; height: 8px; border-radius: 999px;
      background: linear-gradient(90deg, #ff8a96, #ffd57a, #89f8d3);
      box-shadow: 0 0 10px rgba(255,255,255,.2);
    }
    .code-lines {
      position: absolute; inset: 24px 14px 12px; display: grid; gap: 8px; align-content: center;
    }
    .code-line {
      height: 7px; border-radius: 999px; background: linear-gradient(90deg, rgba(126,236,255,.9) 0%, rgba(126,236,255,.9) 32%, rgba(255,255,255,.3) 32%, rgba(255,255,255,.3) 100%);
      opacity: .9;
    }
    .code-line:nth-child(2) { width: 68%; background: linear-gradient(90deg, rgba(112,255,200,.9) 0%, rgba(112,255,200,.9) 52%, rgba(255,255,255,.3) 52%, rgba(255,255,255,.3) 100%); }
    .code-line:nth-child(3) { width: 78%; background: linear-gradient(90deg, rgba(255,213,122,.9) 0%, rgba(255,213,122,.9) 44%, rgba(255,255,255,.3) 44%, rgba(255,255,255,.3) 100%); }
    .banner-orbit {
      position: absolute; right: 10px; top: 10px; width: 18px; height: 18px; border: 1px solid rgba(255,255,255,.3);
      border-radius: 50%; box-shadow: 0 0 0 2px rgba(255,255,255,.08);
    }
    .banner-orbit:before {
      content: ""; position: absolute; inset: 5px; border-radius: 50%; background: #9bf6ff; box-shadow: 0 0 10px rgba(155,246,255,.8);
    }
    .banner-spark { position: absolute; right: 4px; top: 12px; color: #ffdf9a; font-size: 19px; }
    .stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 14px; margin: 19px 0 22px; }
    .student-stats-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
    .stat-card { min-height: 100px; background: #fff; border: 1px solid var(--line); box-shadow: 0 3px 12px rgba(33,42,76,.025); border-radius: 12px; padding: 15px 16px; }
    .stat-top { display: flex; align-items: center; justify-content: space-between; color: #626a80; font-size: 10px; }
    .stat-icon { width: 29px; height: 29px; display: grid; place-items: center; border-radius: 9px; background: var(--purple-soft); color: var(--purple); }
    .stat-icon svg { width: 15px; height: 15px; }
    .stat-icon.green { color: var(--green); background: var(--green-soft); }
    .stat-icon.orange { color: var(--orange); background: var(--orange-soft); }
    .stat-icon.blue { color: #5e92cf; background: #edf5ff; }
    .stat-value { font-size: 23px; font-weight: 750; letter-spacing: -.7px; margin-top: 8px; line-height: 1; }
    .stat-note { font-size: 9px; color: #687086; margin-top: 6px; }
    .dashboard-grid { display: grid; grid-template-columns: minmax(0, 1.55fr) minmax(250px, .9fr); gap: 17px; align-items: start; }
    .panel { background: #fff; border: 1px solid var(--line); border-radius: 13px; box-shadow: 0 3px 12px rgba(33,42,76,.025); }
    .panel-header { padding: 17px 18px 13px; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
    .panel-title { font-size: 13px; font-weight: 750; margin: 0; letter-spacing: -.1px; }
    .panel-description { font-size: 10px; color: var(--muted); margin: 5px 0 0; }
    .text-button { color: var(--purple); padding: 2px 0; border: 0; background: transparent; font-size: 10px; font-weight: 700; white-space: nowrap; }
    .projects-list { padding: 0 18px 5px; }
    .project-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-top: 1px solid #f1f2f6; }
    .project-progress { flex: 0 0 auto; border: 0; border-radius: 8px; padding: 7px 9px; font-size: 9px; font-weight: 750; white-space: nowrap; }
    .project-progress-select { cursor: pointer; padding-right: 22px; background: #fff; border: 1px solid var(--line); }
    .project-progress-select.not-started { background: #fff; border-color: #b64045; color: #b64045; }
    .project-progress-select.in-progress { background: #fff; border-color: #f2c94c; color: #51400a; }
    .project-progress-select.completed { background: #fff; border-color: #258c68; color: #258c68; }
    .project-progress-select option { background: #fff; color: #1d2340; }
    .project-progress.not-started { background: #b64045; color: #fff; }
    .project-progress.in-progress { background: #f2c94c; color: #51400a; }
    .project-progress.completed { background: #258c68; color: #fff; }
    .project-progress:focus-visible { outline: 2px solid var(--purple); outline-offset: 3px; }
    .project-progress:disabled { opacity: 1; cursor: default; }
    .project-icon { width: 42px; height: 42px; flex: 0 0 auto; border-radius: 10px; display: grid; place-items: center; color: var(--purple); background: #e8f9fb; }
    .project-icon.green { background: #eaf8f1; color: #32a376; }
    .project-icon.orange { background: #fff4e7; color: #d69441; }
    .project-icon svg { width: 19px; height: 19px; }
    .project-info { flex: 1; min-width: 0; }
    .project-name { font-size: 11px; font-weight: 700; margin-bottom: 4px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
    .project-meta { color: var(--muted); font-size: 9px; }
    .project-progress-bar { display: flex; align-items: center; gap: 8px; max-width: 240px; margin-top: 7px; }
    .project-progress-track { flex: 1; height: 6px; overflow: hidden; border-radius: 999px; background: var(--line); }
    .project-progress-fill { height: 100%; border-radius: inherit; transition: width .2s ease; }
    .project-progress-bar.not-started .project-progress-fill { background: #b64045; }
    .project-progress-bar.in-progress .project-progress-fill { background: #f2c94c; }
    .project-progress-bar.completed .project-progress-fill { background: #258c68; }
    .project-progress-percent { min-width: 28px; color: var(--muted); font-size: 9px; font-weight: 700; text-align: right; }
    .teacher-remark { margin-top: 12px; padding: 13px 15px; border: 1px solid var(--line); border-left: 4px solid var(--purple); border-radius: 9px; background: var(--purple-soft); color: var(--ink); font-size: 13px; font-weight: 550; line-height: 1.55; }
    .teacher-remark strong { display: block; margin-bottom: 5px; color: var(--purple-dark); font-size: 12px; font-weight: 800; }
    .status { display: inline-flex; align-items: center; gap: 5px; white-space: nowrap; padding: 5px 8px; border-radius: 20px; font-size: 9px; font-weight: 700; }
    .status:before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
    .status.review { background: var(--orange-soft); color: #c7822d; }
    .status.approved { background: var(--green-soft); color: #258c68; }
    .status.draft { background: #f1f2f6; color: #82889a; }
    .query-list { padding: 0 17px 12px; }
    .query-item { display: flex; gap: 9px; border-top: 1px solid #f1f2f6; padding: 10px 0; }
    .query-item-clickable { cursor: pointer; border-radius: 8px; padding: 11px 9px; }
    .query-item-clickable:hover, .query-item-clickable:focus-visible { background: var(--canvas); }
    .query-item-clickable:focus-visible { outline: 2px solid var(--purple); outline-offset: 1px; }
    .query-actions { display: flex; flex: 0 0 auto; align-items: center; gap: 9px; }
    .query-bullet { width: 7px; height: 7px; flex: 0 0 auto; border-radius: 50%; margin-top: 4px; background: var(--orange); }
    .query-bullet.answered { background: var(--green); }
    .query-copy { min-width: 0; flex: 1; }
    .query-title { font-size: 10px; font-weight: 650; line-height: 1.4; }
    .query-meta { margin-top: 4px; color: var(--muted); font-size: 9px; }
    .data-project-list { display: grid; gap: 12px; padding: 0 18px 18px; }
    .data-project-card { border: 1px solid var(--line); border-radius: 10px; background: #fafbfd; padding: 12px; }
    .data-project-header { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; color: var(--muted); font-size: 10px; }
    .data-project-header strong { color: var(--ink); font-size: 11px; }
    .data-table-wrap { overflow: auto; max-height: 340px; border: 1px solid var(--line); border-radius: 8px; background: var(--table-bg); }
    .data-table { width: 100%; min-width: 420px; border-collapse: collapse; font-size: 11px; background: var(--table-bg); }
    .data-table th, .data-table td { border: 1px solid var(--line); padding: 7px 8px; text-align: left; vertical-align: top; }
    .data-table th { background: var(--table-header-bg); color: var(--ink); font-weight: 700; }
    .data-table td { color: var(--ink); }
    .data-table tbody tr[data-topic-select] { cursor: pointer; }
    .data-table tbody tr[data-topic-select]:hover td,
    .data-table tbody tr[data-topic-select]:focus td { background: var(--table-row-hover); }
    .data-table tbody tr[data-topic-select]:focus { outline: 2px solid var(--purple); outline-offset: -2px; }
    .empty-state { padding: 25px 12px; text-align: center; color: var(--muted); font-size: 11px; }    .field:focus, .textarea:focus { border-color: #62cbd8; box-shadow: 0 0 0 3px rgba(0,188,212,.16); }
    .toolbar { display: flex; align-items: center; gap: 9px; }
    .select-filter { min-height: 35px; padding: 0 10px; border: 1px solid var(--line); border-radius: 8px; background: #fff; color: #747b91; font-size: 10px; }
    .search-box {
      min-height: 35px; min-width: 160px; max-width: 220px; width: 100%;
      padding: 0 11px; border: 1px solid var(--line); border-radius: 8px; background: #fff;
      color: var(--ink); font-size: 10px; outline: none;
    }
    .search-box:focus { border-color: #62cbd8; box-shadow: 0 0 0 3px rgba(0,188,212,.16); }
    .notification-list, .help-list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
    .notification-item, .help-item { border: 1px solid var(--line); border-radius: 10px; padding: 11px 12px; background: var(--canvas); }
    .notification-item strong, .help-item strong { display: block; margin-bottom: 4px; font-size: 11px; }
    .notification-item span, .help-item span { font-size: 10px; color: var(--muted); line-height: 1.55; }
    .help-item button { margin-top: 8px; }
    .teacher-project { min-height: 88px; margin: 10px 14px; padding: 18px 20px; border: 1px solid var(--line); border-radius: 13px; background: var(--paper); box-shadow: 0 4px 14px rgba(37,45,80,.035); cursor: pointer; transition: border-color .15s ease, background .15s ease, box-shadow .15s ease; }
    .teacher-project:hover { border-color: var(--purple); background: var(--paper); box-shadow: 0 7px 20px rgba(37,45,80,.075); }
    .teacher-project-summary { display: flex; align-items: center; gap: 12px; }
    .teacher-project-summary .project-icon { width: 46px; height: 46px; border-radius: 12px; }
    .teacher-project-info { flex: 1; min-width: 0; }
    .teacher-project .button-secondary { margin-left: 0; min-height: 33px; font-size: 10px; }
    .team-card { margin-bottom: 16px; border: 1px solid var(--line); border-radius: 13px; background: var(--paper); box-shadow: 0 4px 14px rgba(37,45,80,.035); overflow: hidden; }
    .team-upload-picker, .upload-type-picker { display: grid; gap: 12px; }
    .team-upload-option-list { display: grid; gap: 10px; }
    .team-upload-option, .upload-type-option { width: 100%; display: flex; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--line); border-radius: 10px; background: var(--paper); color: var(--ink); text-align: left; cursor: pointer; transition: border-color .15s ease, background .15s ease, transform .15s ease; }
    .team-upload-option:hover, .upload-type-option:hover { border-color: var(--purple); background: var(--purple-soft); transform: translateY(-1px); }
    .upload-type-option { min-height: 60px; font-size: 12px; font-weight: 750; }
    .team-upload-avatar { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 10px; background: linear-gradient(135deg, #13b3d9, #7a6af8); color: #fff; font-size: 9px; font-weight: 800; letter-spacing: .06em; }
    .team-upload-copy { display: grid; gap: 2px; min-width: 0; }
    .team-upload-copy strong { font-size: 12px; overflow-wrap: anywhere; }
    .team-upload-copy span { font-size: 10px; color: var(--muted); overflow-wrap: anywhere; }
    .team-description-box { margin: 0 18px 14px; padding: 12px 14px; border: 1px solid var(--line); border-left: 4px solid var(--purple); border-radius: 9px; background: var(--canvas); color: var(--ink); font-size: 13px; font-weight: 600; line-height: 1.55; overflow-wrap: anywhere; white-space: pre-wrap; }
    .team-card-header { display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 16px 18px; }
    .team-card-summary { display: flex; align-items: center; gap: 12px; min-width: 0; flex: 1; }
    .team-profile-badge { width: 42px; height: 42px; flex: 0 0 auto; border-radius: 12px; overflow: hidden; background: linear-gradient(135deg, #13b3d9, #7a6af8); border: 1px solid rgba(255,255,255,.45); box-shadow: 0 8px 18px rgba(0,188,212,.18); display: grid; place-items: center; }
    .team-profile-badge img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .team-profile-badge .team-profile-initials { font-size: 11px; font-weight: 800; letter-spacing: .08em; color: #fff; }
    .team-card-heading { min-width: 0; flex: 1; }
    .team-name-toggle { display: table; max-width: 100%; margin: 0 0 4px; padding: 5px 8px; border: 0; border-radius: 7px; background: var(--purple-soft); color: var(--purple-dark); font-size: 13px; font-weight: 800; letter-spacing: -.1px; text-align: left; overflow-wrap: anywhere; transition: color .15s ease, background .15s ease; }
    .team-name-toggle:hover { background: #006b7a; color: #fff; }
    .team-name-toggle:focus-visible, .team-member-name:focus-visible { outline: 2px solid var(--purple); outline-offset: 2px; }
    .team-card-heading .panel-description { margin-top: 0; }
    .team-actions { display: flex; flex-wrap: wrap; align-items: center; justify-content: flex-end; gap: 8px; }
    .team-details-box { border-top: 1px solid var(--line); }
    .team-section { padding: 14px 18px; border-top: 1px solid var(--line); }
    .team-photo-preview { margin-top: 12px; width: min(180px, 100%); aspect-ratio: 1; border: 1px solid var(--line); border-radius: 12px; background: var(--canvas); overflow: hidden; }
    .team-photo-preview img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .team-section-title { margin: 0 0 10px; color: var(--purple-dark); font-size: 11px; font-weight: 800; letter-spacing: .55px; text-transform: uppercase; }
    .team-pending-title { margin-top: 18px; }
    .team-member-list { display: grid; gap: 8px; }
    .team-member { display: flex; align-items: center; gap: 10px; min-width: 0; padding: 9px 10px; border: 1px solid var(--line); border-radius: 9px; background: var(--canvas); }
    .team-member-avatar { width: 31px; height: 31px; flex: 0 0 auto; font-size: 9px; }
    .team-member-copy { display: grid; gap: 3px; flex: 1; min-width: 0; }
    .team-member-copy strong { font-size: 11px; overflow-wrap: anywhere; }
    .team-member-name { padding: 0; border: 0; background: transparent; color: var(--ink); font-size: inherit; font-weight: inherit; text-align: left; overflow-wrap: anywhere; }
    .team-member-name:hover { color: var(--purple-dark); text-decoration: underline; }
    .team-member-copy span, .team-member-status { color: var(--muted); font-size: 9px; overflow-wrap: anywhere; }
    .team-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
    .team-info-item { display: grid; gap: 4px; min-width: 0; }
    .team-info-item span { color: var(--muted); font-size: 9px; }
    .team-info-item strong { font-size: 11px; overflow-wrap: anywhere; }
    .team-project-list { padding: 0 18px 8px; }
    .team-shared-projects { display: grid; gap: 8px; }
    .team-shared-project { display: flex; align-items: center; gap: 10px; min-width: 0; padding: 10px; border: 1px solid var(--line); border-radius: 9px; background: var(--canvas); }
    .team-shared-project-copy { display: grid; gap: 3px; flex: 1; min-width: 0; }
    .team-shared-project-copy strong { font-size: 11px; overflow-wrap: anywhere; }
    .team-shared-project-copy span { color: var(--muted); font-size: 9px; overflow-wrap: anywhere; }
    .team-shared-project-actions { display: flex; flex-wrap: wrap; gap: 6px; }
    .team-shared-project-actions .button-secondary { min-height: 30px; padding: 0 9px; font-size: 9px; }
    .team-invitation { border-color: #b6e8ed; }
    .chat-workspace { display: grid; grid-template-columns: minmax(180px, 245px) minmax(0, 1fr); gap: 14px; align-items: stretch; }
    .chat-contact-panel { padding: 9px; }
    .chat-contact-list { display: grid; gap: 5px; }
    .chat-contact { width: 100%; padding: 9px; display: flex; align-items: center; gap: 9px; border: 0; border-radius: 9px; background: transparent; color: var(--ink); text-align: left; }
    .chat-contact:hover, .chat-contact.active { background: var(--purple-soft); }
    .chat-contact .avatar { width: 32px; height: 32px; flex: 0 0 auto; font-size: 9px; }
    .chat-contact-copy { min-width: 0; display: grid; gap: 3px; }
    .chat-contact-copy strong { font-size: 10px; }
    .chat-contact-copy span { color: var(--muted); font-size: 9px; overflow-wrap: anywhere; }
    .chat-panel { min-width: 0; min-height: 430px; display: flex; flex-direction: column; }
    .chat-panel-header { padding: 15px 17px; border-bottom: 1px solid var(--line); }
    .chat-panel-title { margin: 0; font-size: 12px; font-weight: 750; }
    .chat-panel-subtitle { margin-top: 4px; color: var(--muted); font-size: 10px; overflow-wrap: anywhere; }
    .chat-message-list { min-height: 300px; max-height: 55vh; flex: 1; display: flex; flex-direction: column; gap: 12px; padding: 17px; overflow-y: auto; }
    .chat-message { max-width: min(82%, 500px); align-self: flex-start; }
    .chat-message.mine { align-self: flex-end; }
    .chat-message-meta { margin: 0 4px 4px; color: var(--muted); font-size: 9px; }
    .chat-bubble { padding: 9px 11px; border-radius: 11px 11px 11px 3px; background: var(--canvas); color: var(--ink); font-size: 13px; line-height: 1.5; overflow-wrap: anywhere; white-space: pre-wrap; }
    .chat-message.mine .chat-bubble { border-radius: 11px 11px 3px 11px; background: var(--purple-dark); color: #fff; }
    .chat-empty { margin: auto; padding: 20px; color: var(--muted); text-align: center; font-size: 11px; }
    .chat-composer { display: flex; align-items: flex-end; gap: 9px; padding: 12px; border-top: 1px solid var(--line); }
    .chat-composer .textarea { flex: 1; min-width: 0; width: auto; min-height: 42px; max-height: 110px; resize: vertical; font-size: 13px; }
    .chat-composer .button-primary { min-height: 40px; }
    .chat-attachment-controls { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .chat-upload-button { display: inline-flex; align-items: center; justify-content: center; min-height: 36px; padding: 0 12px; border: 1px solid var(--line); border-radius: 9px; background: var(--canvas); color: var(--ink); font-size: 10px; font-weight: 700; cursor: pointer; }
    .chat-upload-button:hover { border-color: var(--purple); background: var(--purple-soft); }
    .chat-upload-button input { display: none; }
    .chat-attachment-label { display: inline-flex; align-items: center; max-width: 170px; padding: 0 8px; border-radius: 9px; font-size: 10px; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .chat-message-bubble { display: grid; gap: 8px; }
    .chat-attachment { display: grid; gap: 8px; }
    .chat-attachment img { display: block; max-width: min(240px, 100%); border-radius: 8px; border: 1px solid rgba(126,117,255,.28); }
    .chat-attachment-file { display: inline-flex; align-items: center; gap: 8px; width: fit-content; padding: 8px 10px; border: 1px solid var(--line); border-radius: 9px; background: rgba(122,106,248,.08); color: var(--ink); text-decoration: none; font-size: 10px; font-weight: 700; }
    .chat-bubble { padding: 9px 11px; border-radius: 11px 11px 11px 3px; background: var(--canvas); color: var(--ink); font-size: 13px; line-height: 1.5; overflow-wrap: anywhere; white-space: pre-wrap; }
    .chat-message.mine .chat-bubble { border-radius: 11px 11px 3px 11px; background: var(--purple-dark); color: #fff; }
    html[data-theme="night"] .chat-message.mine .chat-bubble { background: var(--purple); color: var(--canvas); }
    @media (max-width: 720px) { .chat-workspace { grid-template-columns: minmax(0, 1fr); } .chat-contact-list { display: flex; overflow-x: auto; } .chat-contact { min-width: 165px; } .chat-panel { min-height: 370px; } .chat-message-list { min-height: 240px; max-height: 50vh; } }
    .project-detail-actions .status { margin-right: auto; }
    .project-title-toggle { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 14px; border: 0; background: transparent; padding: 0; color: var(--ink); font-size: 14px; font-weight: 750; text-align: left; cursor: pointer; }
    .project-title-toggle:hover { color: var(--purple-dark); }
    .project-title-toggle:after { content: "⌄"; flex: 0 0 26px; width: 26px; height: 26px; display: grid; place-items: center; border: 1px solid var(--line); border-radius: 8px; color: var(--purple-dark); font-size: 15px; transition: transform .15s ease; }
    .project-title-toggle[aria-expanded="true"]:after { transform: rotate(180deg); }
    .project-title-toggle:focus-visible { outline: 2px solid var(--purple); outline-offset: 4px; border-radius: 3px; }
    .project-open-file { margin-top: 8px; min-height: 32px; font-size: 10px; }
    .teacher-project .project-meta { margin-top: 6px; font-size: 12px; }
    .project-attach-action { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 0 10px 51px; }
    .project-details { margin: 16px 0 0 54px; padding: 18px; border: 1px solid var(--line); border-left: 4px solid var(--purple); border-radius: 12px; background: var(--paper); box-shadow: 0 5px 18px rgba(37,45,80,.045); }
    .project-detail-section { padding: 15px; border: 1px solid var(--line); border-radius: 10px; background: var(--canvas); }
    .project-detail-section + .project-detail-section { margin-top: 12px; }
    .project-detail-heading { margin: 0 0 14px; color: var(--purple-dark); font-size: 12px; font-weight: 800; letter-spacing: .65px; text-transform: uppercase; }
    .project-detail-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 22px; }
    .project-detail-item { min-width: 0; }
    .project-detail-label { display: block; color: var(--muted); font-size: 10px; font-weight: 600; margin-bottom: 5px; }
    .project-detail-value { color: var(--ink); font-size: 12px; font-weight: 550; line-height: 1.45; overflow-wrap: anywhere; }
    .project-detail-actions { display: flex; align-items: center; gap: 10px; padding-top: 14px; margin-top: 15px; border-top: 1px solid var(--line); }
    .project-detail-actions .button-secondary { min-height: 36px; padding: 0 12px; font-size: 11px; }
    @media (max-width: 520px) { .teacher-project { margin: 9px 8px; padding: 16px 13px; } .project-details { margin-left: 0; padding: 12px; } .project-detail-section { padding: 12px; } .project-detail-grid { grid-template-columns: 1fr; } }
    .progress-track { height: 5px; border-radius: 5px; background: #eeeef6; margin-top: 12px; overflow: hidden; }
    .progress-fill { width: 72%; height: 100%; background: var(--purple); border-radius: inherit; }
    .toast { position: fixed; right: 23px; bottom: 23px; z-index: 20; padding: 11px 15px; color: #fff; background: #282d49; border-radius: 10px; box-shadow: 0 8px 26px rgba(20,25,48,.2); font-size: 11px; opacity: 0; transform: translateY(10px); pointer-events: none; transition: .2s ease; }
    .toast.show { opacity: 1; transform: translateY(0); }
    .modal-backdrop { position: fixed; inset: 0; background: rgba(24,28,50,.38); display: grid; place-items: center; z-index: 10; padding: 18px; }
    .modal { width: min(560px, 100%); max-height: calc(100vh - 36px); overflow-y: auto; background: #fff; border-radius: 15px; padding: 22px; box-shadow: 0 20px 70px rgba(21,24,49,.24); animation: appear .16s ease-out; }
    @keyframes appear { from { opacity: 0; transform: translateY(6px) scale(.99); } to { opacity: 1; transform: translateY(0) scale(1); } }
    .modal-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 17px; }
    .modal-title { font-size: 16px; font-weight: 750; margin: 0; }
    .modal-subtitle { color: var(--muted); font-size: 10px; margin: 5px 0 0; }
    .modal-close { border: 0; background: transparent; color: #9298a9; font-size: 20px; padding: 0 3px; line-height: 1; }
    .field-label { display: block; color: #5f6680; font-size: 10px; font-weight: 700; margin: 12px 0 6px; }
    .field, .textarea { display: block; width: 100%; border: 1px solid #e8eaf1; border-radius: 8px; outline: 0; padding: 10px 11px; color: var(--ink); background: #fff; font-size: 11px; }
    .department-picker summary { cursor: pointer; list-style: none; }
    .department-picker summary::-webkit-details-marker { display: none; }
    .department-picker summary::after { content: ""; float: right; width: 7px; height: 7px; margin: 2px 3px 0 0; border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor; transform: rotate(45deg); }
    .department-picker[open] summary::after { transform: rotate(225deg); }
    .department-options { display: grid; gap: 2px; max-height: 220px; overflow-y: auto; margin-top: 4px; padding: 4px; border: 1px solid var(--line); border-radius: 8px; background: var(--paper); }
    .department-option { width: 100%; border: 0; border-radius: 6px; padding: 9px 10px; background: transparent; color: var(--ink); text-align: left; font-size: 11px; }
    .department-option:hover, .department-option:focus-visible { background: var(--purple-soft); color: var(--purple-dark); }
    .textarea { resize: vertical; min-height: 89px; line-height: 1.5; }
    .query-detail-content { display: grid; gap: 8px; }
    .query-detail-label { margin: 8px 0 0; color: var(--muted); font-size: 11px; font-weight: 750; }
    .query-detail-text { padding: 12px 14px; border: 1px solid var(--line); border-radius: 9px; background: var(--canvas); color: var(--ink); font-size: 14px; line-height: 1.65; white-space: pre-wrap; overflow-wrap: anywhere; }
    .field[readonly], .field[aria-labelledby="profileAccountTypeLabel"], .query-detail-text { cursor: default; }
    .field[readonly] { caret-color: transparent; }
    .query-detail-text.answer { border-left: 4px solid var(--green); }
    .drop-zone { display: block; min-width: 0; border: 1px dashed #a9e3ea; background: #f2fcfd; border-radius: 10px; text-align: center; padding: 18px 12px; margin-top: 13px; color: #777e96; font-size: 10px; line-height: 1.5; cursor: pointer; }
    .drop-zone svg { width: 21px; height: 21px; color: var(--purple); display: block; margin: 0 auto 7px; }
    .drop-zone strong { display: block; color: var(--ink); font-size: 10px; line-height: 1.4; overflow-wrap: anywhere; margin-bottom: 4px; }
    .drop-zone span { display: block; max-width: 100%; line-height: 1.5; overflow-wrap: anywhere; }
    .file-input { display: none; }
    .modal-actions { display: flex; justify-content: flex-end; gap: 8px; margin-top: 17px; }
    .modal-actions .button-primary, .modal-actions .button-secondary { min-height: 35px; }
    .hidden { display: none !important; }
    .auth-screen { position: fixed; inset: 0; z-index: 50; display: flex; align-items: flex-start; justify-content: center; overflow-y: auto; padding: 22px; background: radial-gradient(circle at 85% 15%, #d7f8fb 0, transparent 32%), var(--canvas); }
    .auth-card { width: min(430px, 100%); margin: auto 0; flex: 0 0 auto; background: #fff; border: 1px solid var(--line); border-radius: 18px; padding: 30px; box-shadow: 0 24px 70px rgba(37,45,80,.12); }
    .auth-theme-row { display: flex; align-items: center; justify-content: flex-end; gap: 6px; margin-bottom: 12px; }
    .auth-theme-select { width: 48px; min-width: 48px; text-align: center; font-size: 17px; }
    .auth-card .brand { padding: 0 0 24px; }
    .auth-card h1 { font-size: 23px; }
    .auth-copy { color: var(--muted); font-size: 12px; line-height: 1.6; margin: 8px 0 18px; }
    .auth-tabs { display: flex; padding: 4px; border-radius: 9px; background: #effafb; margin-bottom: 17px; }
    .auth-tabs button { flex: 1; border: 0; border-radius: 7px; background: transparent; color: var(--muted); padding: 8px; font-size: 11px; font-weight: 700; }
    .auth-tabs button.active { background: white; color: var(--purple-dark); box-shadow: 0 2px 7px rgba(0,95,110,.1); }
    .auth-error { min-height: 16px; color: var(--red); font-size: 10px; margin-top: 8px; }
    .auth-card .button-primary { width: 100%; margin-top: 10px; }
    .landing-page { min-height: 100vh; color: var(--ink); background: var(--canvas); }
    .landing-header { position: sticky; top: 0; z-index: 20; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 14px max(28px, calc((100% - 1180px) / 2)); border-bottom: 1px solid var(--line); background: var(--paper); box-shadow: 0 4px 18px rgba(23,48,68,.035); }
    .landing-brand { display: flex; align-items: center; gap: 12px; color: var(--ink); text-decoration: none; }
    .landing-brand-copy { min-width: 0; }
    .landing-brand-mark { display: grid; width: 45px; height: 45px; place-items: center; border-radius: 14px; background: linear-gradient(135deg, #086977, #17a6ad); color: #fff; font-size: 11px; font-weight: 850; letter-spacing: .08em; }
    .landing-brand-copy strong, .landing-brand-copy small { display: block; }
    .landing-brand-copy strong { font-size: 16px; letter-spacing: -.02em; }
    .landing-nav { display: flex; align-items: center; gap: 25px; }
    .landing-nav a { color: var(--muted); text-decoration: none; font-size: 12px; font-weight: 650; }
    .landing-nav a:hover { color: var(--purple-dark); }
    .landing-actions { display: flex; align-items: center; gap: 9px; }
    .landing-theme-select { width: 56px; min-height: 40px; padding: 0 8px; border: 1px solid var(--line); border-radius: 9px; background: var(--paper); color: var(--ink); font-size: 16px; }
    .landing-login, .landing-button { display: inline-flex; min-height: 42px; align-items: center; justify-content: center; padding: 0 16px; border: 1px solid var(--line); border-radius: 9px; font-size: 12px; font-weight: 750; text-decoration: none; cursor: pointer; }
    .landing-login { background: var(--paper); color: var(--ink); white-space: nowrap; }
    .landing-login:hover, .landing-button-secondary:hover { border-color: var(--purple); background: var(--purple-soft); color: var(--purple-dark); }
    .landing-create-account { border-color: #086977; background: #086977; color: #fff; }
    .landing-create-account:hover { border-color: #075662; background: #075662; color: #fff; }
    .landing-hero { position: relative; overflow: hidden; background: radial-gradient(circle at 82% 46%, rgba(23,166,173,.16), transparent 30%), linear-gradient(135deg, #edf7f8 0%, var(--canvas) 66%); }
    .landing-hero-inner { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr); align-items: center; gap: 56px; width: min(1180px, 100%); min-height: 430px; margin: auto; padding: 70px 28px; }
    .landing-eyebrow { margin: 0 0 16px; color: var(--purple-dark); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
    .landing-hero h1 { max-width: 680px; margin: 0; color: var(--ink); font-size: clamp(38px, 5vw, 64px); font-weight: 800; letter-spacing: -.045em; line-height: 1.05; }
    .landing-hero-copy { max-width: 630px; margin: 20px 0 27px; color: var(--muted); font-size: 15px; line-height: 1.75; }
    .landing-hero-actions { display: flex; flex-wrap: wrap; gap: 11px; }
    .landing-button-primary { border-color: #086977; background: #086977; color: #fff; }
    .landing-button-primary:hover { background: #075662; }
    .landing-button-secondary { background: var(--paper); color: var(--ink); }
    .landing-visual { position: relative; display: grid; min-height: 260px; place-items: center; }
    .landing-orbit { position: absolute; width: 246px; height: 246px; border: 1px solid rgba(8,127,140,.24); border-radius: 50%; }
    .landing-orbit::before, .landing-orbit::after { position: absolute; inset: 20px; border: 1px dashed rgba(8,127,140,.28); border-radius: 50%; content: ""; }
    .landing-orbit::after { inset: 48px; border-style: solid; }
    .landing-idea-core { z-index: 1; display: grid; width: 118px; height: 118px; place-items: center; border: 8px solid rgba(255,255,255,.72); border-radius: 35px; background: linear-gradient(145deg, #086977, #20b4ba); box-shadow: 0 22px 48px rgba(8,105,119,.2); color: #fff; font-size: 20px; font-weight: 850; letter-spacing: .08em; transform: rotate(-7deg); }
    .landing-orbit-label { position: absolute; z-index: 2; padding: 9px 13px; border: 1px solid var(--line); border-radius: 9px; background: var(--paper); box-shadow: var(--shadow); color: var(--ink); font-size: 10px; font-weight: 750; }
    .landing-orbit-label.one { top: 21px; right: 12px; }
    .landing-orbit-label.two { right: 2px; bottom: 37px; }
    .landing-orbit-label.three { bottom: 20px; left: 3px; }
    .landing-section { width: min(1100px, 100%); margin: auto; padding: 74px 28px; scroll-margin-top: 85px; }
    .landing-section-heading { max-width: 700px; margin: 0 0 30px; }
    .landing-section-heading .landing-eyebrow { margin-bottom: 9px; }
    .landing-section-heading h2 { margin: 0; font-size: clamp(26px, 3.2vw, 38px); letter-spacing: -.03em; line-height: 1.15; }
    .landing-section-heading p, .landing-about-copy { color: var(--muted); font-size: 14px; line-height: 1.75; }
    .landing-about-grid { display: grid; grid-template-columns: 1.2fr .8fr; align-items: stretch; gap: 22px; }
    .landing-about-copy { margin: 0; padding: 27px; border: 1px solid var(--line); border-radius: 16px; background: var(--paper); }
    .landing-vision { padding: 27px; border-radius: 16px; background: #086977; color: #fff; }
    .landing-vision h3 { margin: 0 0 12px; font-size: 16px; }
    .landing-vision p { margin: 0; color: rgba(255,255,255,.86); font-size: 13px; line-height: 1.75; }
    .landing-objectives { background: var(--paper); }
    .landing-card-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 14px; }
    .landing-card { min-height: 150px; padding: 21px; border: 1px solid var(--line); border-radius: 13px; background: var(--paper); }
    .landing-card-number { display: grid; width: 30px; height: 30px; margin-bottom: 14px; place-items: center; border-radius: 9px; background: var(--purple-soft); color: var(--purple-dark); font-size: 11px; font-weight: 800; }
    .landing-card p { margin: 0; color: var(--ink); font-size: 13px; font-weight: 650; line-height: 1.6; }
    .landing-program-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px; }
    .landing-list-item { display: flex; align-items: flex-start; gap: 12px; padding: 16px 18px; border: 1px solid var(--line); border-radius: 11px; background: var(--paper); color: var(--ink); font-size: 13px; font-weight: 650; line-height: 1.55; }
    .landing-list-item::before { width: 8px; height: 8px; flex: 0 0 8px; margin-top: 5px; border-radius: 50%; background: var(--purple); content: ""; }
    .landing-facilities { background: #edf7f8; }
    .landing-facility-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 14px; }
    .landing-facility { display: flex; min-height: 94px; align-items: center; gap: 15px; padding: 18px; border: 1px solid rgba(8,127,140,.14); border-radius: 13px; background: rgba(255,255,255,.82); color: var(--ink); font-size: 13px; font-weight: 700; }
    .landing-facility-mark { display: grid; width: 38px; height: 38px; flex: 0 0 38px; place-items: center; border-radius: 11px; background: var(--purple-soft); color: var(--purple-dark); font-size: 11px; font-weight: 850; }
    .landing-footer { padding: 24px 28px; border-top: 1px solid var(--line); background: var(--paper); color: var(--muted); text-align: center; font-size: 11px; }
    html[data-theme="night"] .landing-hero { background: radial-gradient(circle at 82% 46%, rgba(37,199,217,.14), transparent 30%), linear-gradient(135deg, #182a32 0%, var(--canvas) 66%); }
    html[data-theme="night"] .landing-facilities { background: #182a32; }
    html[data-theme="night"] .landing-facility { background: var(--paper); border-color: var(--line); }
    html[data-theme="ambient"] .landing-hero { background: radial-gradient(circle at 82% 46%, rgba(37,199,217,.15), transparent 30%), linear-gradient(135deg, #e1f3ed 0%, var(--canvas) 66%); }
    html[data-theme="ambient"] .landing-facilities { background: #e7f2eb; }
    @media (max-width: 820px) {
      .landing-header { gap: 14px; padding: 12px 20px; }
      .landing-nav { gap: 12px; }
      .landing-actions { gap: 6px; }
      .landing-theme-select { width: 56px; }
      .landing-login { padding: 0 12px; font-size: 11px; }
      .landing-hero-inner { grid-template-columns: 1fr minmax(220px, .65fr); gap: 22px; padding: 58px 24px; }
      .landing-card-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
      .landing-facility-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    }
    @media (max-width: 600px) {
      .landing-header { gap: 8px; padding: 11px 12px; }
      .landing-brand { gap: 8px; }
      .landing-brand-mark { width: 36px; height: 36px; border-radius: 11px; font-size: 10px; }
      .landing-brand-copy strong { font-size: 12px; white-space: nowrap; }
      .landing-nav { display: none; }
      .landing-actions { gap: 5px; }
      .landing-theme-select { width: 44px; min-height: 36px; padding: 0 3px; font-size: 11px; }
      .landing-login { min-height: 36px; padding: 0 8px; font-size: 9px; }
      .landing-create-account { padding: 0 8px; }
      .landing-hero-inner { grid-template-columns: 1fr; gap: 10px; padding: 54px 20px 38px; }
      .landing-hero h1 { max-width: 500px; font-size: clamp(38px, 12vw, 54px); }
      .landing-hero-copy { font-size: 13px; }
      .landing-visual { min-height: 230px; }
      .landing-section { padding: 55px 20px; }
      .landing-about-grid, .landing-program-grid { grid-template-columns: 1fr; }
      .landing-card-grid { grid-template-columns: 1fr 1fr; gap: 9px; }
      .landing-card { min-height: 140px; padding: 15px; }
      .landing-facility-grid { grid-template-columns: 1fr; gap: 9px; }
      .landing-facility { min-height: 75px; }
    }
    .auth-back-button { margin: 0 0 12px; padding: 0; border: 0; background: transparent; color: var(--purple-dark); font-size: 11px; font-weight: 700; cursor: pointer; }
    html[data-theme="ambient"] { color-scheme: light; --ink:#453f36; --muted:#6f6559; --line:#e3d8c9; --paper:#fffaf2; --canvas:#f4ecdf; --table-bg:#fffaf2; --table-header-bg:#ece3d5; --table-row-hover:#e6f4f2; --purple:#007f91; --purple-dark:#006b7a; --purple-soft:#e1f7f8; --green:#356c55; --green-soft:#e4f0e6; --orange:#8a591e; --orange-soft:#f8ead8; }
    html[data-theme="night"] { color-scheme: dark; --ink:#e8eaf0; --muted:#a2a9b7; --line:#343c49; --paper:#1d2430; --canvas:#141a23; --table-bg:#1d2430; --table-header-bg:#283341; --table-row-hover:#253540; --purple:#55d9e8; --purple-dark:#a2f1f8; --purple-soft:#173b43; --green:#6fc5a0; --green-soft:#20392f; --orange:#e0aa62; --orange-soft:#3a3022; --red:#e88989; }
    html[data-theme="night"] body, html[data-theme="ambient"] body { background: var(--canvas); color: var(--ink); }
    html[data-theme="night"] .sidebar, html[data-theme="ambient"] .sidebar { background: var(--paper); border-color: var(--line); }
    html[data-theme="night"] .brand-mark { background: #007f91; box-shadow: 0 6px 16px rgba(0,188,212,.3); }
    html[data-theme="night"] .topbar, html[data-theme="night"] .panel, html[data-theme="night"] .stat-card, html[data-theme="night"] .auth-card, html[data-theme="night"] .modal, html[data-theme="night"] .icon-button, html[data-theme="night"] .term-pill, html[data-theme="night"] .select-filter, html[data-theme="night"] .field, html[data-theme="night"] .role-switch, html[data-theme="night"] .theme-select,
    html[data-theme="ambient"] .topbar, html[data-theme="ambient"] .panel, html[data-theme="ambient"] .stat-card, html[data-theme="ambient"] .auth-card, html[data-theme="ambient"] .modal, html[data-theme="ambient"] .icon-button, html[data-theme="ambient"] .term-pill, html[data-theme="ambient"] .select-filter, html[data-theme="ambient"] .field, html[data-theme="ambient"] .role-switch, html[data-theme="ambient"] .theme-select { background-color: var(--paper); color: var(--ink); border-color: var(--line); }
    html[data-theme="night"] .project-row, html[data-theme="night"] .teacher-project, html[data-theme="night"] .profile, html[data-theme="ambient"] .project-row, html[data-theme="ambient"] .teacher-project, html[data-theme="ambient"] .profile { border-color: var(--line); }
    html[data-theme="night"] .nav-item, html[data-theme="night"] .role-option, html[data-theme="night"] .breadcrumb, html[data-theme="night"] .project-meta, html[data-theme="night"] .panel-description, html[data-theme="night"] .query-meta, html[data-theme="ambient"] .nav-item, html[data-theme="ambient"] .role-option, html[data-theme="ambient"] .breadcrumb, html[data-theme="ambient"] .project-meta, html[data-theme="ambient"] .panel-description, html[data-theme="ambient"] .query-meta { color: var(--muted); }
    html[data-theme="night"] .nav-item.active, html[data-theme="ambient"] .nav-item.active { background: var(--purple-soft); color: var(--purple-dark); }
    html[data-theme="night"] .button-secondary, html[data-theme="ambient"] .button-secondary { background: var(--paper); color: var(--ink); border: 1px solid var(--line); }
    html[data-theme="night"] .project-icon, html[data-theme="ambient"] .project-icon { background: var(--purple-soft); color: var(--purple-dark); }
    html[data-theme="night"] .query-item, html[data-theme="ambient"] .query-item { border-color: var(--line); }
    html[data-theme="night"] .nav-count { background: #2b3340; color: var(--purple); }
    html[data-theme="night"] .role-option.active { background: #2b3340; color: var(--purple-dark); }
    html[data-theme="night"] .auth-screen { background: radial-gradient(circle at 85% 15%, #123a42 0, transparent 32%), var(--canvas); }
    html[data-theme="ambient"] .auth-screen { background: radial-gradient(circle at 85% 15%, #d7f1ee 0, transparent 32%), var(--canvas); }
    html[data-theme="night"] .stat-top, html[data-theme="night"] .stat-note, html[data-theme="night"] .field-label, html[data-theme="night"] .drop-zone, html[data-theme="night"] .auth-tabs button, html[data-theme="night"] .modal-close, html[data-theme="night"] .help-copy, html[data-theme="night"] .workspace-label, html[data-theme="ambient"] .stat-top, html[data-theme="ambient"] .stat-note, html[data-theme="ambient"] .field-label, html[data-theme="ambient"] .drop-zone, html[data-theme="ambient"] .auth-tabs button, html[data-theme="ambient"] .modal-close, html[data-theme="ambient"] .help-copy, html[data-theme="ambient"] .workspace-label { color: var(--muted); }
    html[data-theme="night"] .auth-tabs, html[data-theme="night"] .drop-zone, html[data-theme="night"] .help-card, html[data-theme="ambient"] .auth-tabs, html[data-theme="ambient"] .drop-zone, html[data-theme="ambient"] .help-card { background: var(--canvas); border-color: var(--line); }
    html[data-theme="night"] .textarea, html[data-theme="night"] .auth-tabs button.active, html[data-theme="ambient"] .textarea, html[data-theme="ambient"] .auth-tabs button.active { background: var(--paper); color: var(--ink); border-color: var(--line); }
    html[data-theme="night"] .status.review { color: #ffd18a; }
    html[data-theme="night"] .status.approved { color: #8de0ba; }
    html[data-theme="night"] .status.draft { background: #303744; color: #d0d5df; }
    html[data-theme="night"] .button-primary { background: #007f91; color: #fff; }
    html[data-theme="night"] .button-primary:hover { background: #006b7a; }
    html[data-theme="night"] .welcome-banner .button-primary { background: #fff; color: #006b7a; }
    html[data-theme="ambient"] .status.review { color: #75480f; }
    html[data-theme="ambient"] .status.approved { color: #235e45; }
    html[data-theme="ambient"] .status.draft { background: #eee9df; color: #514b42; }
    html[data-theme="ambient"] .button-primary { background: #007f91; color: #fff; }
    html[data-theme="ambient"] .button-primary:hover { background: #006b7a; }
    html[data-theme="ambient"] .welcome-banner .button-primary { background: #fffaf2; color: #006b7a; }
    :root { --red: #b64045; }
    html[data-theme="night"] { --red:#ff9b9b; }
    html[data-theme="ambient"] { --red:#963b40; }
    .status.review { color: #8b5717; }
    .status.approved { color: #1c6a4c; }
    .field-label { color: var(--ink); }
    .stat-icon.blue { color: #376d9f; }
    html[data-theme="night"] .nav-item:hover { background:#202f37; }
    html[data-theme="ambient"] .nav-item:hover { background:#e6f4f2; }
    html[data-theme="night"] .teacher-project:hover { background:#242c38; }
    html[data-theme="ambient"] .teacher-project:hover { background:#fffaf2; }
    html[data-theme="night"] .project-details { background:#171d26; border-color:var(--line); border-left-color:var(--purple); }
    html[data-theme="night"] .project-detail-section { background:#202834; border-color:var(--line); }
    html[data-theme="ambient"] .project-details { background:#fffaf2; border-color:var(--line); border-left-color:var(--purple); }
    html[data-theme="ambient"] .project-detail-section { background:#f4ecdf; border-color:var(--line); }
    html[data-theme="night"] .notification-item, html[data-theme="night"] .help-item, html[data-theme="ambient"] .notification-item, html[data-theme="ambient"] .help-item { background: var(--paper); border-color: var(--line); }
    html[data-theme="night"] .search-box, html[data-theme="ambient"] .search-box { background: var(--paper); border-color: var(--line); }
    .mobile-menu { display: none; }
    @media (max-width: 1000px) {
      .sidebar { width: 218px; flex-basis: 218px; }
      .topbar { padding: 0 25px; }
      .content { padding: 27px 25px 40px; }
      .banner-art { right: 67px; }
    }
    @media (max-width: 760px) {
      .sidebar { width: 65px; flex-basis: 65px; padding: 20px 8px; align-items: center; }
      .brand { padding: 0 0 28px; }
      .brand-name, .workspace-label, .nav-item span, .nav-count, .sidebar-bottom, .profile-info { display: none; }
      .nav-list { width: 100%; }
      .nav-item { width: 48px; height: 44px; margin: 0 auto; justify-content: center; padding: 0; }
      .nav-item svg { width: 19px; height: 19px; }
      .profile { border: 0; padding: 15px 0 0; margin-top: auto; }
      .profile .avatar { width: 34px; }
      .topbar { height: 62px; padding: 0 17px; }
      .breadcrumb { display: none; }
      .top-actions { width: 100%; justify-content: flex-end; gap: 8px; }
      .content { padding: 24px 17px 32px; }
      .dashboard-grid { grid-template-columns: minmax(0, 1fr); }
    }
    @media (max-width: 520px) {
      .content { padding: 20px 13px 28px; }
      .topbar { padding: 0 12px; }
      .term-pill { display: none; }
      .page-heading { margin-bottom: 18px; }
      .page-heading .button-primary { min-height: 34px; padding: 0 9px; font-size: 10px; }
      .page-heading .button-primary svg { display: none; }
      .page-subtitle { font-size: 10px; }
      .welcome-banner { padding: 21px 17px; min-height: 140px; }
      .welcome-title { font-size: 17px; max-width: 220px; }
      .welcome-subtitle { max-width: 230px; line-height: 1.5; }
      .welcome-banner .button-primary { align-self: flex-end; min-height: 33px; padding: 0 9px; font-size: 9px; }
      .banner-art { right: -2px; top: 29px; transform: scale(.75) rotate(-7deg); transform-origin: top right; opacity: .36; }
      .welcome-banner:before { right: -140px; }
      .stats-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 9px; margin: 13px 0 15px; }
      .stat-card { min-height: 91px; padding: 12px; }
      .stat-value { font-size: 21px; }
      .toolbar { width: 100%; }
      .toolbar .select-filter { flex: 1; }
      .panel-header:has(.toolbar) { flex-wrap: wrap; }
      .teacher-project { gap: 8px; padding: 16px 12px; }
      .teacher-project .button-secondary { padding: 0 8px; }
    }
  </style>
</head>
<body>
  <div class="landing-page" id="landingPage">
    <header class="landing-header">
      <a class="landing-brand" href="#home" aria-label="Node Theory home">
        <span class="landing-brand-mark" aria-hidden="true">NT</span>
        <span class="landing-brand-copy"><strong>Node Theory</strong></span>
      </a>
      <nav class="landing-nav" aria-label="Landing page sections">
        <a href="#about">About</a><a href="#objectives">Objectives</a><a href="#programs">Programs</a><a href="#facilities">Facilities</a>
      </nav>
      <div class="landing-actions">
        <select class="landing-theme-select" id="landingThemeSelect" aria-label="Choose color theme" title="Choose color theme">
          <option value="light" aria-label="Light theme">☼</option><option value="night" aria-label="Dark theme">☾</option><option value="ambient" aria-label="Ambient theme">◐</option>
        </select>
        <button class="landing-login" id="landingLoginButton" type="button">Log in</button>
        <button class="landing-login landing-create-account" id="landingHeaderSignupButton" type="button">Create account</button>
      </div>
    </header>
    <main>
      <section class="landing-hero" id="home">
        <div class="landing-hero-inner">
          <div>
            <p class="landing-eyebrow">AICTE IDEA Lab · SRM Valliammai Engineering College</p>
            <h1>Turn bold ideas into working prototypes.</h1>
            <p class="landing-hero-copy">A shared space for students, faculty, and industry to explore, build, and bring ideas to life.</p>
            <div class="landing-hero-actions">
              <button class="landing-button landing-button-primary" id="landingSignupButton" type="button">Create your account</button>
              <a class="landing-button landing-button-secondary" href="#about">Discover the lab</a>
            </div>
          </div>
          <div class="landing-visual" aria-hidden="true">
            <div class="landing-orbit"></div><div class="landing-idea-core">IDEA</div>
            <span class="landing-orbit-label one">IMAGINE</span><span class="landing-orbit-label two">PROTOTYPE</span><span class="landing-orbit-label three">INNOVATE</span>
          </div>
        </div>
      </section>
      <section class="landing-section" id="about">
        <div class="landing-section-heading"><p class="landing-eyebrow">A place to make ideas real</p><h2>About the IDEA Lab</h2></div>
        <div class="landing-about-grid">
          <p class="landing-about-copy">The AICTE IDEA Lab at SRM Valliammai Engineering College is a shared space for students, faculty, and industry to turn ideas into working prototypes. It supports innovation, interdisciplinary learning, and research, and it encourages entrepreneurship among students.</p>
          <aside class="landing-vision"><h3>Our Vision</h3><p>To transform innovative ideas into real products that meet socio-economic needs, and to connect concept, development, and commercialization.</p></aside>
        </div>
      </section>
      <section class="landing-objectives" id="objectives">
        <div class="landing-section">
          <div class="landing-section-heading"><p class="landing-eyebrow">Learn by creating</p><h2>Objectives</h2></div>
          <div class="landing-card-grid">
            <article class="landing-card"><span class="landing-card-number">01</span><p>Convert ideas into functional prototypes under one roof</p></article>
            <article class="landing-card"><span class="landing-card-number">02</span><p>Build creativity, critical thinking, and problem-solving skills</p></article>
            <article class="landing-card"><span class="landing-card-number">03</span><p>Encourage multidisciplinary learning and teamwork</p></article>
            <article class="landing-card"><span class="landing-card-number">04</span><p>Make teaching and learning more engaging for engineering students</p></article>
          </div>
        </div>
      </section>
      <section class="landing-section" id="programs">
        <div class="landing-section-heading"><p class="landing-eyebrow">Opportunities to build skills</p><h2>Training and Programs</h2></div>
        <div class="landing-program-grid">
          <div class="landing-list-item">Faculty development programs (FDPs)</div>
          <div class="landing-list-item">Student skilling programs, ideation workshops, and internships</div>
          <div class="landing-list-item">Industry workshops and professional skilling programs</div>
          <div class="landing-list-item">Awareness programs for school and ITI students</div>
          <div class="landing-list-item">Project support for students</div>
        </div>
      </section>
      <section class="landing-facilities" id="facilities">
        <div class="landing-section">
          <div class="landing-section-heading"><p class="landing-eyebrow">Tools and spaces for exploration</p><h2>Integrated Facilities</h2></div>
          <div class="landing-facility-grid">
            <div class="landing-facility"><span class="landing-facility-mark">HF</span>High Frequency System Lab</div>
            <div class="landing-facility"><span class="landing-facility-mark">VLSI</span>VLSI Lab</div>
            <div class="landing-facility"><span class="landing-facility-mark">RB</span>Robotics Lab</div>
            <div class="landing-facility"><span class="landing-facility-mark">COM</span>Communication Lab</div>
            <div class="landing-facility"><span class="landing-facility-mark">AI</span>AI &amp; DS Lab</div>
            <div class="landing-facility"><span class="landing-facility-mark">IoT</span>Centre of Excellence in Computing (IoT, Cyber Security)</div>
          </div>
        </div>
      </section>
    </main>
    <footer class="landing-footer">AICTE IDEA Lab · SRM Valliammai Engineering College</footer>
  </div>
  <section class="auth-screen hidden" id="authScreen" aria-label="Account access">
    <form class="auth-card" id="authForm">
      <button class="auth-back-button" id="authBackButton" type="button">← Back to home</button>
      <div class="auth-theme-row"><select class="theme-select auth-theme-select" id="authThemeSelect" aria-label="Choose color theme" title="Choose color theme"><option value="light" aria-label="Light theme">☼</option><option value="night" aria-label="Dark theme">☾</option><option value="ambient" aria-label="Ambient theme">◐</option></select></div>
      <div class="brand"><div class="brand-mark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5 14.8 8l5.7 2.8-5.7 2.8L12 19.5l-2.8-5.9L3.5 10.8 9.2 8 12 2.5Z" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.9)"/><path d="M12 6.5l1.2 2.8 2.9 1.2-2.9 1.2L12 14.9l-1.2-2.9-2.9-1.2 2.9-1.2L12 6.5Z" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.8)"/><path d="M12 9.1v2.8M9.2 12h5.6M10.3 7.3l1.7 1.7 1.7-1.7M10.3 16.7l1.7-1.7 1.7 1.7" stroke="rgba(255,255,255,.75)"/><path d="M12 2.5v2.1M19.5 10.8h2.1M2.4 10.8h2.1M17.2 17.5l1.3 1.3M6.8 17.5l-1.3 1.3" stroke="rgba(255,240,125,.9)"/></svg></div><div class="brand-name">Node Theory</div></div>
      <div class="auth-tabs"><button type="button" id="signupTab" class="active">Create account</button><button type="button" id="loginTab">Log in</button></div>
      <h1 id="authTitle">Start with a fresh account</h1>
      <p class="auth-copy" id="authCopy">Enter your own details to set up your student or teacher workspace.</p>
      <div id="signupFields">
        <label class="field-label" for="accountName">Full name</label><input class="field" id="accountName" name="name" autocomplete="name" placeholder="Your name" required>
        <label class="field-label" for="accountRole">Account type</label><select class="field" id="accountRole" name="role"><option value="student">Student</option><option value="teacher">Teacher</option></select>
        <div id="studentSetupFields">
          <div id="accountAcademicFields"></div>
        </div>
      </div>
      <label class="field-label" for="accountEmail">Email</label><input class="field" id="accountEmail" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>
      <label class="field-label" for="accountPassword">Password</label><input class="field" id="accountPassword" name="password" type="password" autocomplete="new-password" placeholder="Create a password" required>
      <div id="teacherSetupFields" class="hidden">
        <label class="field-label" for="teacherSignInCode">Teacher sign-in code</label><input class="field" id="teacherSignInCode" name="teacherSignInCode" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Enter your teacher sign-in code">
      </div>
      <div class="auth-error" id="authError" role="alert"></div>
      <button class="button-primary" id="authSubmit" type="submit">Submit</button>
    </form>
  </section>
  <div class="app-shell hidden">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.5 14.8 8l5.7 2.8-5.7 2.8L12 19.5l-2.8-5.9L3.5 10.8 9.2 8 12 2.5Z" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.9)"/><path d="M12 6.5l1.2 2.8 2.9 1.2-2.9 1.2L12 14.9l-1.2-2.9-2.9-1.2 2.9-1.2L12 6.5Z" fill="rgba(255,255,255,.2)" stroke="rgba(255,255,255,.8)"/><path d="M12 9.1v2.8M9.2 12h5.6M10.3 7.3l1.7 1.7 1.7-1.7M10.3 16.7l1.7-1.7 1.7 1.7" stroke="rgba(255,255,255,.75)"/><path d="M12 2.5v2.1M19.5 10.8h2.1M2.4 10.8h2.1M17.2 17.5l1.3 1.3M6.8 17.5l-1.3 1.3" stroke="rgba(255,240,125,.9)"/></svg>
        </div>
        <div class="brand-name">Node Theory</div>
      </div>
      <div class="workspace-label">Workspace</div>
      <nav class="nav-list" aria-label="Main navigation">
        <button class="nav-item active" data-page="overview" aria-current="page"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg><span>Dashboard</span></button>
        <button class="nav-item" data-page="projects"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h4l2 2h5A2.5 2.5 0 0 1 20 9.5v8a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-10Z"/><path d="M4.5 10h15"/></svg><span>My projects</span><span class="nav-count" data-count="projects">0</span></button>
        <button class="nav-item" data-page="data"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg><span>Data</span></button>
        <button class="nav-item" data-page="teams"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 20v-1.8a3.2 3.2 0 0 0-3.2-3.2H7.2A3.2 3.2 0 0 0 4 18.2V20"/><circle cx="10" cy="7.5" r="3.5"/><path d="M16 4.2a3.5 3.5 0 0 1 0 6.7M20 20v-1.8a3.2 3.2 0 0 0-2.4-3.1"/></svg><span>My team</span></button>
        <div class="nav-section-label" id="pingSectionLabel">Ping</div>
        <button class="nav-item" data-page="team-chat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.1A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/></svg><span>Team chat</span></button>
        <button class="nav-item" data-page="chat"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.1A7.5 7.5 0 1 1 20 11.5Z"/><path d="M8.5 12h7"/></svg><span>Chat</span></button>
        <button class="nav-item" data-page="queries"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.1A7.5 7.5 0 1 1 20 11.5Z"/><path d="M9.5 9.2a2.5 2.5 0 1 1 4.3 1.8c-1 .9-1.8 1.2-1.8 2.5M12 16.5h.01"/></svg><span>Queries</span><span class="nav-count" data-count="queries">0</span></button>
      </nav>
      <div class="sidebar-bottom">
        <div class="help-card">
          <div class="help-title">Need a hand?</div>
          <div class="help-copy">Find tips for submitting projects and getting teacher feedback.</div>
          <button class="help-link" data-action="help">Visit help center &rarr;</button>
        </div>
      </div>
      <div class="profile">
        <button class="avatar profile-trigger" id="profileAvatar" type="button" data-action="profile" aria-label="Open profile details">AK</button>
        <div class="profile-info"><button class="profile-name profile-trigger" id="profileName" type="button" data-action="profile"></button><button class="profile-role profile-trigger" id="profileRole" type="button" data-action="profile"></button></div>
        <button class="logout-link" data-action="logout" aria-label="Log out">Log out</button>
      </div>
    </aside>

    <main class="main-area">
      <header class="topbar">
        <div class="breadcrumb"><span>Workspace</span><span>/</span><strong id="breadcrumbCurrent">Dashboard</strong></div>
        <div class="top-actions">
          <button class="icon-button" id="themeToggle" type="button" aria-label="Color mode: Light" title="Color mode: Light"><span id="themeIcon" aria-hidden="true">☼</span></button>
          <button class="icon-button" data-action="notifications" aria-label="Notifications"><span class="notification-dot"></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg></button>
        </div>
      </header>
      <div class="content" id="content"></div>
    </main>
  </div>
  <div id="toast" class="toast" role="status" aria-live="polite"></div>
  <div id="modalHost"></div>

  <script>
    const icons = {
      folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3.5 7A2.5 2.5 0 0 1 6 4.5h4l2 2h6A2.5 2.5 0 0 1 20.5 9v8A2.5 2.5 0 0 1 18 19.5H6A2.5 2.5 0 0 1 3.5 17V7Z"/><path d="M4 10h16"/></svg>',
      upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 15V4m0 0L8 8m4-4 4 4"/><path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"/></svg>',
      check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m5 12 4 4L19 6"/></svg>',
      clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
      people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 20v-1.8a3.2 3.2 0 0 0-3.2-3.2H7.2A3.2 3.2 0 0 0 4 18.2V20"/><circle cx="10" cy="7.5" r="3.5"/><path d="M16 4.2a3.5 3.5 0 0 1 0 6.7M20 20v-1.8a3.2 3.2 0 0 0-2.4-3.1"/></svg>',
      file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10Z"/><path d="M13 3v7h7M8 15h8M8 18h6"/></svg>'
    };

    const storedAccounts = JSON.parse(localStorage.getItem("ideaAccounts") || "{}");
    const activeEmail = localStorage.getItem("ideaSession");
    const savedAccount = activeEmail ? storedAccounts[activeEmail] : null;
    const savedWorkspace = savedAccount ? JSON.parse(localStorage.getItem(\`ideaWorkspace:\${savedAccount.email}\`) || "null") : null;
    const defaultTopicsSource = \`Case,Title,Domain,Level,Team ID,Guide,Status
H1,AI-Based Brain Aneurysm Triage on CT and MR Angiography,Healthcare,High,,,
H2,Digitisation of Paper and Photographed ECGs with Arrhythmia Flagging,Healthcare,Moderate,,,
H3,Safe Drug-Decision Assistant with Retrieval and Refusal,Healthcare,Moderate,,,
H4,Hospital Antibiogram and Empiric-Antibiotic Guide,Healthcare,Moderate,,,
H5,Seizure and Abnormal-EEG Detection across Patients,Healthcare,High,,,
H6,Oral Cancer Screening from Pathology Slides and Mouth Photos,Healthcare,Moderate,,,
H7,Voice Copilot for Frontline Health Workers,Healthcare,Moderate,,,
H8,Early Disease-Trend Warning from AYUSH and OPD Records,Healthcare,Moderate,,,
H9,Safe Health-Information Chatbot in Local Languages,Healthcare,Moderate,,,
H10,PressureGuard: Smart Bedsore Prevention Mat,Healthcare,High,,,
H11,Pesu: AI Speech-Therapy Coach in Tamil,Healthcare,High,,,
C1,AI Energy Optimisation for Campus Buildings and Server Rooms,Climate,Moderate,,,
C2,Hyperlocal Air-Quality Nowcasting for Chennai,Climate,Moderate,,,
C3,Low-Cost Carbon Measurement for Tree-Planting Projects,Climate,Moderate,,,
C4,Biodiversity Monitoring by Sound,Climate,Moderate,,,
C5,Subsurface Imaging for Groundwater and Carbon Storage,Climate,Research,,,
C6,Faster Discovery of Biodegradable Polymers,Climate,Research,,,
A1,Fodder Biomass Estimation from Phone Photos,Agriculture,Moderate,,,
A2,Membrane Fouling Prediction for Desalination and RO Plants,Agriculture,Moderate,,,
A3,Post-Harvest Loss Reduction with Price and Arrival Forecasts,Agriculture,Moderate,,,
A4,Crop Disease Detection from Field and Drone Images,Agriculture,Moderate,,,
A5,Farmer Advisory by Voice in Tamil,Agriculture,Moderate,,,
E1,Early Forest-Fire Detection from Cameras and Satellites,Disaster,Moderate,,,
E2,Flood Extent Mapping with Satellite Radar,Disaster,Moderate,,,
E3,Urban Heat Risk Mapping,Disaster,Moderate,,,
E4,Land-Use Change Detection with an Earth-Observation Foundation Model,Disaster,Moderate,,,
L1,Tamil Reading-Fluency Tutor,Education,Moderate,,,
L2,Safety Benchmark for Chatbots in Indian Languages,Education,Moderate,,,
L3,Indian Sign Language Word Recognition,Education,Moderate,,,
L4,Dataset Citation Extraction from Research Papers,Education,Moderate,,,
L5,EasyLearn: Easy-Read and Audio Study Material,Education,High,,,
F1,Deepfake Detection for Video KYC and Voice Calls,Finance,High,,,
F2,Image and Document Provenance Checker,Finance,Moderate,,,
F3,Online Dispute Resolution Assistant for MSMEs,Finance,Moderate,,,
F4,Vendor and Entity Matching across Registries,Finance,Moderate,,,
S1,Automatic Bug Finding and Patching in Open-Source Code,Cybersecurity and AI Security,High,,,
S2,Prompt-Injection and Data-Leak Guard for Company Chatbots,Cybersecurity and AI Security,Moderate,,,
S3,Shadow-AI Discovery inside an Organisation,Cybersecurity and AI Security,Moderate,,,
S4,Attack-Path Prediction for Campus Networks,Cybersecurity and AI Security,Moderate,,,
M1,Maintenance Copilot for Plant Manuals,Manufacturing,Moderate,,,
M2,Vision Inspection and Pick-and-Place on a Low-Cost Arm,Manufacturing,High,,,
M3,Multi-Agent Procurement Assistant for MSMEs,Manufacturing,Moderate,,,
M4,Supply-Disruption Early Warning for Exporters,Manufacturing,Moderate,,,
M5,Software Bill of Materials and Vulnerability Links,Manufacturing,Moderate,,,
P1,Road Condition and Pothole Mapping from Phone Video,Mobility,Moderate,,,
P2,Citizen Grievance Routing,Mobility,Moderate,,,
P3,Food-Safety Inspection Targeting,Mobility,Moderate,,,
P4,Campus Guide Robot that Follows Spoken Instructions,Mobility,High,,,
R1,Interactive Reasoning Agent for ARC-AGI,AI Reliability,Research,,,
R2,Maths Reasoning with a Small Open Model,AI Reliability,Research,,,
R3,Multimodal Search over Institutional Documents,AI Reliability,Moderate,,,
R4,Small High-Quality Datasets for Tamil Vision-Language Models,AI Reliability,Research,,,
R5,Fairness Audit of Face Detection and Recognition,AI Reliability,Moderate,,,
R6,Tamil Science Benchmark for Small Language Models,AI Reliability,Moderate,,,
R7,Claim Checker for Company Chatbots,AI Reliability,Moderate,,,\`;
    const storedDataRows = localStorage.getItem("ideaDataTable");
    const savedDataRows = storedDataRows?.startsWith("Case Title,Domain,Level,Team ID,Guide,Status\\n") ? defaultTopicsSource : storedDataRows;
    if (storedDataRows && storedDataRows !== savedDataRows) localStorage.setItem("ideaDataTable", savedDataRows);
    const state = {
      role: savedAccount?.role || "student",
      account: savedAccount ? { name: savedAccount.name, email: savedAccount.email, role: savedAccount.role, avatar: savedAccount.avatar || "", ...(savedAccount.role === "teacher" ? { post: savedAccount.post || "Administrator" } : {}), department: savedAccount.department || "", section: savedAccount.section || "" } : null,
      page: "overview",
      projectSearch: "",
      activeTeamChatId: "",
      activeChatPeerEmail: "",
      projects: savedWorkspace?.projects || [],
      queries: savedWorkspace?.queries || [],
      notifications: savedWorkspace?.notifications || defaultNotificationsForRole(savedAccount?.role || "student"),
      dataRows: savedDataRows || defaultTopicsSource
    };
    const activeTeamProjectUploads = new Set();

    const pageNames = { overview: "Dashboard", projects: "My projects", data: "Data", queries: "Queries", teams: "My team", "team-chat": "Team chat", chat: "Chat" };
    const engineeringDepartments = [
      "CSE",
      "AI & DS",
      "CYBER SECURITY",
      "MECHANICAL",
      "ECE",
      "EEE",
      "IT",
      "EIE",
      "MDE",
      "AGRICULTURE",
      "CIVIL"
    ];
    const engineeringSections = ["1", "2", "3"];
    const content = document.getElementById("content");

    function academicFieldsMarkup(idPrefix, department = "", section = "") {
      const departmentField = idPrefix === "account"
        ? \`<label class="field-label" id="accountDepartmentLabel">Department</label><details class="department-picker" id="accountDepartmentPicker"><summary class="field" aria-labelledby="accountDepartmentLabel accountDepartmentValue"><span id="accountDepartmentValue">Choose your department</span></summary><div class="department-options" aria-label="Department options">\${engineeringDepartments.map(option => \`<button class="department-option" type="button" data-value="\${option}">\${option}</button>\`).join("")}</div><input id="accountDepartment" name="accountDepartment" type="hidden"></details>\`
        : \`<label class="field-label" for="\${idPrefix}Department">Department</label><select class="field" id="\${idPrefix}Department" name="\${idPrefix}Department" required><option value="" disabled \${engineeringDepartments.includes(department) ? "" : "selected"}>Choose your department</option>\${engineeringDepartments.map(option => \`<option value="\${option}" \${option === department ? "selected" : ""}>\${option}</option>\`).join("")}</select>\`;
      return \`\${departmentField}<label class="field-label" for="\${idPrefix}Section">Section</label><select class="field" id="\${idPrefix}Section" name="\${idPrefix}Section" required><option value="" disabled \${engineeringSections.includes(section) ? "" : "selected"}>Choose your section</option>\${engineeringSections.map(option => \`<option value="\${option}" \${option === section ? "selected" : ""}>\${option}</option>\`).join("")}</select>\`;
    }

    function defaultNotificationsForRole(role) {
      return role === "teacher" ? [
        { title: "Review queue", text: "3 student submissions are awaiting your feedback.", time: "Today" },
        { title: "Question received", text: "A student asked for clarification on project scope.", time: "Today" },
        { title: "Progress update", text: "The class is moving ahead on schedule.", time: "Yesterday" }
      ] : [
        { title: "Submission status", text: "Your last project is currently under review.", time: "2h ago" },
        { title: "Project update", text: "Your latest project activity is ready to review.", time: "Today" },
        { title: "Teacher reply", text: "Your teacher answered one of your questions.", time: "Yesterday" }
      ];
    }

    function statusClass(status) {
      if (status === "Approved") return "approved";
      if (status === "In review") return "review";
      return "draft";
    }

    function projectProgressDetails(progress) {
      const progressStates = {
        not_started: { label: "Not started", className: "not-started", percent: 0 },
        in_progress: { label: "In progress", className: "in-progress", percent: 50 },
        completed: { label: "Completed", className: "completed", percent: 100 }
      };
      return Object.prototype.hasOwnProperty.call(progressStates, progress) ? progressStates[progress] : progressStates.not_started;
    }

    function projectProgressBar(project) {
      const progress = projectProgressDetails(project.progress);
      return \`<div class="project-progress-bar \${progress.className}" role="progressbar" aria-label="\${escapeHtml(project.name)} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="\${progress.percent}" aria-valuetext="\${progress.label}"><div class="project-progress-track"><div class="project-progress-fill" style="width:\${progress.percent}%"></div></div><span class="project-progress-percent">\${progress.percent}%</span></div>\`;
    }

    function isProjectProgress(progress) {
      return ["not_started", "in_progress", "completed"].includes(progress);
    }

    function projectProgressButton(project, target = "", interactive = true) {
      const progress = projectProgressDetails(project.progress);
      return \`<button class="project-progress \${progress.className}" type="button" \${target} \${interactive ? "" : "disabled"} aria-label="Project progress: \${progress.label}\${interactive ? ". Click to change." : ""}" title="\${progress.label}">\${progress.label}</button>\`;
    }

    function projectProgressSelect(project, target) {
      const progress = projectProgressDetails(project.progress);
      const options = [
        ["not_started", "Not started"],
        ["in_progress", "In progress"],
        ["completed", "Completed"]
      ];
      return \`<select class="project-progress project-progress-select \${progress.className}" \${target} aria-label="Project progress for \${escapeHtml(project.name)}" title="\${progress.label}">\${options.map(([value, label]) => \`<option value="\${value}" \${project.progress === value ? "selected" : ""}>\${label}</option>\`).join("")}</select>\`;
    }

    function updateProjectProgress(button) {
      if (state.role !== "student") return;
      const progressCycle = { not_started: "in_progress", in_progress: "completed", completed: "not_started" };
      if (button.dataset.personalProjectProgress !== undefined) {
        const index = Number(button.dataset.personalProjectProgress);
        const project = state.projects[index];
        if (!Number.isInteger(index) || !project) {
          showToast("This project could not be found.");
          return;
        }
        if (!isProjectProgress(button.value)) {
          showToast("Choose a valid project progress.");
          render();
          return;
        }
        if (button.value === "completed" && !project.fileName) {
          showToast("Attach a project file before marking it completed.");
          render();
          return;
        }
        project.progress = button.value;
        persistWorkspace();
      } else {
        const teams = getTeams();
        const team = findTeam(button.dataset.teamProjectProgress, teams);
        const projectIndex = Number(button.dataset.projectIndex);
        const project = team?.projects?.[projectIndex];
        if (!team || !teamMembers(team).some(member => member.email === state.account.email) || !Number.isInteger(projectIndex) || !project) {
          showToast("This team project is no longer available.");
          render();
          return;
        }
        const currentProgress = isProjectProgress(project.progress) ? project.progress : "not_started";
        project.progress = progressCycle[currentProgress];
        saveTeams(teams);
      }
      render();
    }

    function projectRow(project, progressTarget = "") {
      const progressControl = progressTarget.startsWith("data-personal-project-progress")
        ? projectProgressSelect(project, progressTarget)
        : projectProgressButton(project, progressTarget, Boolean(progressTarget));
      return \`<div class="project-row">\${progressControl}<div class="project-icon \${project.color}">\${icons.file}</div><div class="project-info"><div class="project-name">\${escapeHtml(project.name)}</div><div class="project-meta">\${escapeHtml(project.type)} · \${escapeHtml(project.date)}</div>\${projectProgressBar(project)}\${project.remark ? \`<div class="teacher-remark"><strong>Teacher remark</strong>\${escapeHtml(project.remark)}</div>\` : ""}</div><span class="status \${statusClass(project.status)}">\${escapeHtml(project.status)}</span></div>\`;
    }

    function queriesList() {
      return state.queries.map((query, index) => \`<div class="query-item query-item-clickable" data-open-query-index="\${index}" role="button" tabindex="0" aria-label="Open question: \${escapeHtml(query.title)}"><span class="query-bullet \${query.answered ? "answered" : ""}"></span><div class="query-copy"><div class="query-title">\${escapeHtml(query.title)}</div><div class="query-meta">\${query.answered ? \`Answered by \${escapeHtml(query.answeredBy || "Teacher")} · \${escapeHtml(formatQueryDate(query.answeredAt))}\` : escapeHtml(query.meta || "Awaiting teacher reply")}</div></div><div class="query-actions"><button class="text-button" type="button" data-edit-query="\${index}">Edit</button><button class="text-button" type="button" data-delete-query="\${index}">Delete</button></div></div>\`).join("");
    }

    function formatQueryDate(value) {
      if (!value) return "Date not recorded";
      const date = new Date(value);
      return Number.isNaN(date.getTime())
        ? "Date not recorded"
        : date.toLocaleString(undefined, { year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
    }

    function getStudentQueries() {
      const accounts = getAccountRecords();
      return Object.values(accounts).filter(account => account.role === "student").flatMap(account => {
        const workspace = JSON.parse(localStorage.getItem(\`ideaWorkspace:\${account.email}\`) || "null");
        return (workspace?.queries || []).map((query, queryIndex) => ({
          ...query,
          ownerEmail: account.email,
          studentName: account.name,
          queryIndex
        }));
      });
    }

    function teacherQueriesList(queries = getStudentQueries()) {
      if (!queries.length) return '<div class="empty-state">No student questions yet.</div>';
      return queries.map(query => \`<div class="query-item query-item-clickable" data-open-student-query="\${escapeHtml(query.ownerEmail)}" data-query-index="\${query.queryIndex}" role="button" tabindex="0" aria-label="Open question from \${escapeHtml(query.studentName)}: \${escapeHtml(query.title)}"><span class="query-bullet \${query.answered ? "answered" : ""}"></span><div class="query-copy"><div class="query-title">\${escapeHtml(query.title)}</div><div class="query-meta">Submitted by \${escapeHtml(query.studentName)} · \${escapeHtml(formatQueryDate(query.submittedAt))}</div></div><button class="text-button" type="button" data-edit-student-answer="\${escapeHtml(query.ownerEmail)}" data-query-index="\${query.queryIndex}">\${query.answered ? "Edit answer" : "Answer"}</button></div>\`).join("");
    }

    function getNotifications() {
      if (!state.notifications?.length) {
        state.notifications = defaultNotificationsForRole(state.role);
      }
      return state.notifications;
    }

    function openNotificationsModal() {
      const entries = getNotifications();
      const body = \`<ul class="notification-list">\${entries.map(item => \`<li class="notification-item"><strong>\${escapeHtml(item.title)}</strong><span>\${escapeHtml(item.text)}<br>\${escapeHtml(item.time)}</span></li>\`).join("") || '<li class="notification-item"><strong>No notifications</strong><span>You are all caught up.</span></li>'}</ul>\`;
      showModal(state.role === "teacher" ? "Teacher activity" : "Your notifications", "Updates from your project workspace.", body, "Close", () => closeModal());
    }

    function openHelpCenterModal() {
      const body = \`<ul class="help-list">
        <li class="help-item"><strong>How do I submit a project?</strong><span>Go to My projects for an individual submission, or My team to create a team and submit a shared project.</span><button class="button-secondary" type="button" data-close-modal>Close</button></li>
        <li class="help-item"><strong>How do I check teacher feedback?</strong><span>Open My projects and select a submission to view its review status and remarks.</span></li>
        <li class="help-item"><strong>What if my teacher asks for changes?</strong><span>Open the project details, review the feedback, update the project, and re-submit.</span></li>
      </ul>\`;
      showModal("Help center", "Quick answers for students and teachers.", body, "Thanks", () => closeModal());
    }

    function readProfileImage(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => typeof reader.result === "string" ? resolve(reader.result) : reject(new Error("The image could not be read."));
        reader.onerror = () => reject(reader.error || new Error("The image could not be read."));
        reader.readAsDataURL(file);
      });
    }

    function editProfileModal() {
      const maxAvatarSize = 1024 * 1024;
      const imageTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
      let avatarImage = state.account.avatar || "";
      const positions = state.role === "teacher" ? ["Administrator", "Instructor"] : [];
      const selectedPost = positions.includes(state.account.post) ? state.account.post : positions[0];
      const profileProjects = state.role === "teacher" ? getStudentSubmissions() : state.projects;
      const completedProjects = profileProjects.filter(project => project.status === "Approved").length;
      const pendingProjects = profileProjects.length - completedProjects;
      const departmentField = state.role === "student"
        ? academicFieldsMarkup("profile", state.account.department || "", state.account.section || "")
        : "";
      const positionField = state.role === "teacher"
        ? \`<label class="field-label" for="profilePost">Position</label><select class="field" id="profilePost" name="post">\${positions.map(position => \`<option \${position === selectedPost ? "selected" : ""}>\${escapeHtml(position)}</option>\`).join("")}</select>\`
        : "";
      showModal("Profile details", "View and update your profile. Your email address cannot be changed.", \`<img class="profile-avatar-preview" id="profileAvatarPreview" src="\${escapeHtml(avatarImage)}" alt="Profile picture preview" \${avatarImage ? "" : "hidden"}><label class="field-label" for="profileAvatarInput">Profile picture</label><input class="field" id="profileAvatarInput" name="avatar" type="file" accept="image/jpeg,image/png,image/webp,image/gif"><p class="project-meta">JPEG, PNG, WebP or GIF · Max 1 MB</p><div class="field-label" id="profileAccountTypeLabel">Account type</div><div class="field" aria-labelledby="profileAccountTypeLabel">\${state.role === "teacher" ? "Teacher" : "Student"}</div><label class="field-label" for="profileEmail">Email</label><input class="field" id="profileEmail" type="email" value="\${escapeHtml(state.account.email)}" readonly><label class="field-label" for="profileNameInput">Name</label><input class="field" id="profileNameInput" name="name" value="\${escapeHtml(state.account.name)}" required>\${positionField}\${departmentField}<div class="profile-stats-summary">\${completedProjects} completed · \${pendingProjects} pending</div><div style="margin-top:16px"><button class="button-danger" id="deleteProfileButton" type="button">Delete profile</button></div>\`, "Save changes", async formData => {
        const name = String(formData.get("name") || "").trim();
        const post = state.role === "teacher" ? String(formData.get("post") || "") : "";
        const department = state.role === "student" ? String(formData.get("profileDepartment") || "") : "";
        const section = state.role === "student" ? String(formData.get("profileSection") || "") : "";
        if (!name || (state.role === "teacher" && !positions.includes(post)) || (state.role === "student" && (!engineeringDepartments.includes(department) || !engineeringSections.includes(section)))) {
          showToast("Enter a valid name and required profile details.");
          return;
        }

        const accounts = JSON.parse(localStorage.getItem("ideaAccounts") || "{}");
        const account = accounts[state.account.email];
        if (!account) {
          showToast("Your account could not be found. Please log out and log in again.");
          return;
        }
        const avatarFile = formData.get("avatar");
        if (avatarFile?.size) {
          if (!imageTypes.includes(avatarFile.type) || avatarFile.size > maxAvatarSize) {
            showToast("Choose a JPEG, PNG, WebP or GIF image up to 1 MB.");
            return;
          }
          try {
            avatarImage = await readProfileImage(avatarFile);
          } catch {
            showToast("The profile picture could not be read. Please choose another image.");
            return;
          }
          account.avatar = avatarImage;
        }
        account.name = name;
        if (state.role === "teacher") account.post = post;
        else delete account.post;
        account.department = department;
        account.section = section;
        accounts[state.account.email] = account;
        try {
          localStorage.setItem("ideaAccounts", JSON.stringify(accounts));
        } catch {
          showToast("Your profile could not be saved. Try a smaller picture or remove stored data.");
          return;
        }
        state.account.name = name;
        state.account.avatar = account.avatar || "";
        if (state.role === "teacher") state.account.post = post;
        else delete state.account.post;
        state.account.department = department;
        state.account.section = section;
        persistWorkspace();
        closeModal();
        render();
        showToast("Profile updated.");
      }, false);
      document.getElementById("profileAvatarInput").addEventListener("change", async event => {
        const file = event.target.files?.[0];
        if (!file) {
          avatarImage = state.account.avatar || "";
          const preview = document.getElementById("profileAvatarPreview");
          preview.hidden = !avatarImage;
          preview.src = avatarImage;
          return;
        }
        if (!imageTypes.includes(file.type) || file.size > maxAvatarSize) {
          event.target.value = "";
          showToast("Choose a JPEG, PNG, WebP or GIF image up to 1 MB.");
          return;
        }
        try {
          avatarImage = await readProfileImage(file);
          const preview = document.getElementById("profileAvatarPreview");
          preview.src = avatarImage;
          preview.hidden = false;
        } catch {
          event.target.value = "";
          showToast("The profile picture preview could not be loaded.");
        }
      });
      document.getElementById("deleteProfileButton").addEventListener("click", () => {
        closeModal();
        confirmProfileDeletion();
      });
    }

    function confirmProfileDeletion() {
      showModal("Delete profile?", "This permanently deletes your account and project workspace. This cannot be undone.", '<p class="panel-description">Your login, profile, questions, and submitted projects will be removed.</p>', "Delete profile", deleteProfile);
    }

    async function deleteProfile() {
      const email = state.account.email;
      const teams = getTeams();
      const removedTeamProjectIds = [];
      const removedTeamIds = [];
      const remainingTeams = teams.filter(team => {
        team.members = (Array.isArray(team.members) ? team.members : []).filter(member => member.email !== email);
        if (team.ownerEmail !== email) return true;
        const nextOwner = teamMembers(team)[0];
        if (nextOwner) {
          team.ownerEmail = nextOwner.email;
          return true;
        }
        (team.projects || []).forEach(project => {
          if (project.id) removedTeamProjectIds.push(project.id);
        });
        removedTeamIds.push(team.id);
        return false;
      });
      const projectIds = [...new Set([...state.projects.map(project => project.id).filter(Boolean), ...removedTeamProjectIds])];
      try {
        if (projectIds.length) await deleteSubmissionFiles(projectIds);
      } catch {
        showToast("Could not remove stored project files. Your profile was not deleted.");
        return;
      }

      const accounts = JSON.parse(localStorage.getItem("ideaAccounts") || "{}");
      saveTeams(remainingTeams);
      const removedTeamIdSet = new Set(removedTeamIds);
      const teamMessages = JSON.parse(localStorage.getItem("ideaTeamChats") || "[]");
      localStorage.setItem("ideaTeamChats", JSON.stringify((Array.isArray(teamMessages) ? teamMessages : []).filter(message => message.fromEmail !== email && !removedTeamIdSet.has(message.teamId))));
      const directMessages = JSON.parse(localStorage.getItem("ideaDirectChats") || "[]");
      localStorage.setItem("ideaDirectChats", JSON.stringify((Array.isArray(directMessages) ? directMessages : []).filter(message => message.fromEmail !== email && message.toEmail !== email)));
      delete accounts[email];
      localStorage.setItem("ideaAccounts", JSON.stringify(accounts));
      localStorage.removeItem(\`ideaWorkspace:\${email}\`);
      localStorage.removeItem("ideaSession");
      state.account = null;
      state.role = "student";
      state.projects = [];
      state.queries = [];
      state.page = "overview";
      state.projectSearch = "";
      state.activeTeamChatId = "";
      state.activeChatPeerEmail = "";
      state.notifications = defaultNotificationsForRole("student");
      closeModal();
      const authForm = document.getElementById("authForm");
      if (authForm) authForm.reset();
      document.getElementById("accountRole").selectedIndex = 0;
      updateSignupFields();
      showLandingPage();
      showToast("Profile and workspace deleted.");
    }

    function studentOverview() {
      return \`<div class="page-heading"><div><p class="eyebrow">STUDENT WORKSPACE</p><h1>Good morning, \${escapeHtml(state.account?.name || "") } <span aria-hidden="true">✦</span></h1><p class="page-subtitle">Your workspace is ready. Add your project details to get started.</p></div></div>
        <section class="welcome-banner"><div class="welcome-copy"><div class="welcome-kicker">Your project workspace</div><div class="welcome-tag">Build mode</div><h2 class="welcome-title">Make your next idea happen.</h2><p class="welcome-subtitle">Upload your work, track progress, and keep your creative process moving.</p></div><div class="banner-art" aria-hidden="true"><div class="tech-window"><div class="code-lines"><span class="code-line"></span><span class="code-line"></span><span class="code-line"></span></div></div><div class="banner-orbit"></div><span class="banner-spark">✦</span></div></section>
        <section class="stats-grid student-stats-grid" aria-label="Project summary">
          <article class="stat-card"><div class="stat-top"><span>Active projects</span><span class="stat-icon">\${icons.folder}</span></div><div class="stat-value" id="projectStat">\${state.projects.length.toString().padStart(2, "0")}</div><div class="stat-note">Across this semester</div></article>
          <article class="stat-card"><div class="stat-top"><span>Approved</span><span class="stat-icon green">\${icons.check}</span></div><div class="stat-value">\${state.projects.filter(p => p.status === "Approved").length.toString().padStart(2, "0")}</div><div class="stat-note">You’re doing great!</div></article>
          <article class="stat-card"><div class="stat-top"><span>Awaiting feedback</span><span class="stat-icon orange">\${icons.clock}</span></div><div class="stat-value">\${state.projects.filter(p => p.status === "In review").length.toString().padStart(2, "0")}</div><div class="stat-note">Your teacher will be in touch</div></article>
        </section>
        <div class="dashboard-grid"><section class="panel"><div class="panel-header"><div><h2 class="panel-title">Recent projects</h2><p class="panel-description">Your latest submissions and updates</p></div><button class="text-button" data-page="projects">View all &rarr;</button></div><div class="projects-list">\${state.projects.slice(0, 3).map((project, index) => projectRow(project, \`data-personal-project-progress="\${index}"\`)).join("")}</div></section>
          <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Teacher Q&A</h2><p class="panel-description">Your latest questions</p></div><button class="text-button" data-page="queries">See all</button></div><div class="query-list">\${queriesList()}</div></section></div>\`;
    }

    function getTeams() {
      const teams = JSON.parse(localStorage.getItem("ideaTeams") || "[]");
      return Array.isArray(teams) ? teams : [];
    }

    function saveTeams(teams) {
      localStorage.setItem("ideaTeams", JSON.stringify(teams));
    }

    function findTeam(teamId, teams = getTeams()) {
      return teams.find(team => team.id === teamId);
    }

    function teamMembers(team, status = "accepted") {
      return (Array.isArray(team.members) ? team.members : []).filter(member => member.status === status);
    }

    function getAccountRecords() {
      return JSON.parse(localStorage.getItem("ideaAccounts") || "{}");
    }

    function teamMemberMarkup(team, status = "accepted") {
      const accounts = getAccountRecords();
      const members = teamMembers(team, status);
      if (!members.length) return \`<div class="project-meta">No \${status === "pending" ? "pending invitations" : "members"}.</div>\`;
      return \`<div class="team-member-list">\${members.map(member => {
        const account = accounts[member.email];
        const name = account?.name || "Account unavailable";
        const label = status === "pending" ? "Invitation pending" : member.email === team.ownerEmail ? "Team creator" : "Team member";
        const nameMarkup = status === "pending" ? escapeHtml(name) : \`<button class="team-member-name" type="button" data-team-member="\${escapeHtml(member.email)}">\${escapeHtml(name)}</button>\`;
        return \`<div class="team-member"><div class="avatar team-member-avatar">\${escapeHtml(getInitials(name))}</div><div class="team-member-copy"><strong>\${nameMarkup}</strong><span>\${escapeHtml(member.email)}</span></div><span class="team-member-status">\${label}</span></div>\`;
      }).join("")}</div>\`;
    }

    function teamMemberProfileModal(email) {
      const account = getAccountRecords()[email];
      if (!account) {
        showToast("This team member’s profile is no longer available.");
        return;
      }
      const name = account.name || "Team member";
      const accountType = account.role === "teacher" ? "Teacher" : "Student";
      const extraDetails = account.role === "teacher"
        ? (account.post ? \`<div class="team-info-item"><span>Position</span><strong>\${escapeHtml(account.post)}</strong></div>\` : "")
        : [account.department, account.section].filter(Boolean).map((value, index) => \`<div class="team-info-item"><span>\${index === 0 ? "Department" : "Section"}</span><strong>\${escapeHtml(value)}</strong></div>\`).join("");
      const canChat = state.role === "student" && email !== state.account.email;
      const chatOption = canChat
        ? \`<button class="button-primary" type="button" data-chat-member="\${escapeHtml(email)}">Chat</button>\`
        : "";
      showModal(\`\${escapeHtml(name)}’s profile\`, "Team member profile details.", \`<div class="team-info-grid"><div class="team-info-item"><span>Name</span><strong>\${escapeHtml(name)}</strong></div><div class="team-info-item"><span>Email</span><strong>\${escapeHtml(email)}</strong></div><div class="team-info-item"><span>Account type</span><strong>\${accountType}</strong></div>\${extraDetails}</div>\`, "", () => {}, false, chatOption);
      document.querySelector("#modalHost [data-chat-member]")?.addEventListener("click", () => startDirectChat(email));
    }

    function startDirectChat(peerEmail) {
      if (state.role !== "student" || !getStudentContacts().some(account => account.email === peerEmail)) {
        showToast("This team member is not available for chat.");
        return;
      }
      closeModal();
      state.activeChatPeerEmail = peerEmail;
      state.page = "chat";
      render();
    }

    function teamProfileBadge(team) {
      const initials = getInitials(team?.name || "Team");
      if (!team?.photo) return \`<div class="team-profile-badge" aria-label="\${escapeHtml(team?.name || "Team profile")}"><span class="team-profile-initials">\${escapeHtml(initials)}</span></div>\`;
      return \`<div class="team-profile-badge" aria-label="\${escapeHtml(team?.name || "Team profile")}"><img src="\${escapeHtml(team.photo)}" alt="\${escapeHtml(team.name)} team profile"></div>\`;
    }

    function studentTeamsPage() {
      const teams = getTeams();
      const currentEmail = state.account.email;
      const acceptedTeams = teams.filter(team => teamMembers(team).some(member => member.email === currentEmail));
      const invitations = teams.filter(team => teamMembers(team, "pending").some(member => member.email === currentEmail));
      const invitationCards = invitations.map(team => {
        const accounts = getAccountRecords();
        const inviter = accounts[team.ownerEmail]?.name || team.ownerEmail;
        return \`<article class="team-card team-invitation"><div class="team-card-header"><div class="team-card-summary">\${teamProfileBadge(team)}<div class="team-card-heading"><h2 class="panel-title">\${escapeHtml(team.name)}</h2><p class="panel-description">Invitation from \${escapeHtml(inviter)}</p></div></div><div class="team-actions"><button class="button-secondary" data-decline-team-invite="\${escapeHtml(team.id)}">Decline</button><button class="button-primary" data-accept-team-invite="\${escapeHtml(team.id)}">Accept invitation</button></div></div></article>\`;
      }).join("");
      const teamCards = acceptedTeams.map(team => {
        const projects = Array.isArray(team.projects) ? team.projects : [];
        const accounts = getAccountRecords();
        const sharedProjects = projects.length ? \`<section class="team-section"><h3 class="team-section-title">Shared projects</h3><div class="team-shared-projects">\${projects.map(project => {
          const submitter = accounts[project.submittedBy]?.name || "Team member";
          const actions = project.id && project.fileName ? \`<div class="team-shared-project-actions"><button class="button-secondary" type="button" data-open-team-file="\${escapeHtml(team.id)}" data-project-id="\${escapeHtml(project.id)}">Open file</button><button class="button-secondary" type="button" data-download-team-file="\${escapeHtml(team.id)}" data-project-id="\${escapeHtml(project.id)}">Download</button></div>\` : "";
          return \`<div class="team-shared-project"><div class="team-shared-project-copy"><strong>\${escapeHtml(project.name || "Untitled project")}</strong><span>Shared by \${escapeHtml(submitter)} · \${escapeHtml(formatSubmissionDate(project))}\${project.fileName ? \` · \${escapeHtml(project.fileName)}\` : ""}</span></div>\${actions}</div>\`;
        }).join("")}</div></section>\` : "";
        const ownerName = accounts[team.ownerEmail]?.name || team.ownerEmail;
        const teamDetailsId = \`team-details-\${escapeHtml(team.id)}\`;
        return \`<article class="team-card"><div class="team-card-header"><div class="team-card-summary">\${teamProfileBadge(team)}<div class="team-card-heading"><h2 class="panel-title"><button class="team-name-toggle" type="button" data-toggle-team-details aria-expanded="false" aria-controls="\${teamDetailsId}">\${escapeHtml(team.name)}</button></h2><p class="panel-description">\${teamMembers(team).length} members</p></div></div><div class="team-actions">\${team.ownerEmail === currentEmail ? \`<button class="button-secondary" data-edit-team="\${escapeHtml(team.id)}">Edit details</button><button class="button-secondary" data-invite-team="\${escapeHtml(team.id)}">Invite member</button><button class="button-danger" type="button" data-delete-team="\${escapeHtml(team.id)}">Delete team</button>\` : ""}<button class="button-primary" data-upload-team-project="\${escapeHtml(team.id)}">\${icons.upload} Upload project</button></div></div><div class="team-details-box hidden" id="\${teamDetailsId}"><div class="team-description-box">\${escapeHtml(team.description || "No description provided.")}</div><section class="team-section"><h3 class="team-section-title">Team details</h3><div class="team-info-grid"><div class="team-info-item"><span>Created by</span><strong>\${escapeHtml(ownerName)}</strong></div><div class="team-info-item"><span>Created</span><strong>\${escapeHtml(formatSubmissionDateTime(team.createdAt))}</strong></div><div class="team-info-item"><span>Members</span><strong>\${teamMembers(team).length}</strong></div><div class="team-info-item"><span>Shared projects</span><strong>\${projects.length}</strong></div></div></section><section class="team-section"><h3 class="team-section-title">Members</h3>\${teamMemberMarkup(team)}\${team.ownerEmail === currentEmail && teamMembers(team, "pending").length ? \`<h3 class="team-section-title team-pending-title">Pending invitations</h3>\${teamMemberMarkup(team, "pending")}\` : ""}</section>\${sharedProjects}</div></article>\`;
      }).join("");
      return \`<div class="page-heading"><div><p class="eyebrow">STUDENT WORKSPACE</p><h1>My team</h1><p class="page-subtitle">Create a team, invite student accounts, and submit shared projects.</p></div><button class="button-primary" data-action="create-team">＋ Create a team</button></div>\${invitationCards}\${teamCards || '<section class="panel"><div class="empty-state">You haven’t joined a team yet. Create one or accept an invitation.</div></section>'}\`;
    }

    function formatSubmissionDateTime(value) {
      const submitted = new Date(value);
      if (Number.isNaN(submitted.getTime())) return "Date and time not recorded";
      return submitted.toLocaleString(undefined, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "2-digit" });
    }

    function teacherTeamsPage() {
      const accounts = getAccountRecords();
      const teams = getTeams().filter(team => accounts[team.ownerEmail]?.role === "student");
      if (!teams.length) {
        return \`<div class="page-heading"><div><p class="eyebrow">TEACHER WORKSPACE</p><h1>Student teams &amp; projects</h1><p class="page-subtitle">Teams created by students and their submitted projects.</p></div></div><section class="panel"><div class="empty-state">No student teams have been created yet.</div></section>\`;
      }
      const teamCards = teams.map(team => {
        const projects = Array.isArray(team.projects) ? team.projects : [];
        const members = teamMembers(team).filter(member => accounts[member.email]?.role === "student");
        const projectCards = projects.length ? projects.map((project, index) => {
          const detailsId = \`team-project-details-\${escapeHtml(team.id)}-\${index}\`;
          return \`<article class="teacher-project"><div class="teacher-project-summary">\${projectProgressButton(project, "", false)}<div class="project-icon orange">\${icons.file}</div><div class="teacher-project-info"><button class="project-title-toggle" type="button" data-expand-team-project aria-expanded="false" aria-controls="\${detailsId}">View project: \${escapeHtml(project.name)}</button><div class="project-meta">Submitted \${escapeHtml(formatSubmissionDateTime(project.submittedAt))} · \${escapeHtml(project.status || "In review")}</div>\${projectProgressBar(project)}</div>\${project.fileName && project.id ? \`<button class="button-secondary" data-open-team-file="\${escapeHtml(team.id)}" data-project-id="\${escapeHtml(project.id)}">Open file</button><button class="button-secondary" data-download-team-file="\${escapeHtml(team.id)}" data-project-id="\${escapeHtml(project.id)}">Download</button>\` : ""}</div><div class="project-details hidden" id="\${detailsId}"><section class="project-detail-section"><h3 class="project-detail-heading">Project details</h3><div class="project-detail-grid"><div class="project-detail-item"><span class="project-detail-label">Team name</span><span class="project-detail-value">\${escapeHtml(team.name)}</span></div><div class="project-detail-item"><span class="project-detail-label">Project name</span><span class="project-detail-value">\${escapeHtml(project.name)}</span></div><div class="project-detail-item"><span class="project-detail-label">Submitted on</span><span class="project-detail-value">\${escapeHtml(formatSubmissionDateTime(project.submittedAt))}</span></div><div class="project-detail-item"><span class="project-detail-label">Project file</span><span class="project-detail-value">\${escapeHtml(project.fileName || "No file attached")}</span></div><div class="project-detail-item"><span class="project-detail-label">Project progress</span><span class="project-detail-value">\${projectProgressDetails(project.progress).label}</span></div></div></section><section class="project-detail-section"><h3 class="project-detail-heading">Team members</h3>\${members.length ? \`<div class="team-member-list">\${members.map(member => \`<div class="team-member"><div class="avatar team-member-avatar">\${escapeHtml(getInitials(accounts[member.email].name))}</div><div class="team-member-copy"><strong>\${escapeHtml(accounts[member.email].name)}</strong><span>\${escapeHtml(member.email)}</span></div><span class="team-member-status">\${member.email === team.ownerEmail ? "Team creator" : "Team member"}</span></div>\`).join("")}</div>\` : '<div class="project-meta">No active student members.</div>'}</section></div></article>\`;
        }).join("") : '<div class="empty-state">This team has not submitted a project yet.</div>';
        return \`<section class="team-card"><div class="team-card-header"><div><h2 class="panel-title">\${escapeHtml(team.name)}</h2><p class="panel-description">Created by \${escapeHtml(accounts[team.ownerEmail].name)} · \${members.length} members · \${projects.length} projects</p></div></div><div class="team-project-list">\${projectCards}</div></section>\`;
      }).join("");
      return \`<div class="page-heading"><div><p class="eyebrow">TEACHER WORKSPACE</p><h1>Student teams &amp; projects</h1><p class="page-subtitle">Open a project to see its submission time and each team member’s name and account.</p></div></div>\${teamCards}\`;
    }

    function teamsPage() {
      return state.role === "teacher" ? teacherTeamsPage() : studentTeamsPage();
    }

    function getStudentContacts() {
      return Object.values(getAccountRecords())
        .filter(account => account.role === "student" && account.email !== state.account.email)
        .sort((first, second) => first.name.localeCompare(second.name));
    }

    function getTeamChatMessages(teamId) {
      const team = findTeam(teamId);
      if (!team) return [];
      const messages = JSON.parse(localStorage.getItem("ideaTeamChats") || "[]");
      const permittedMembers = new Set(teamMembers(team).map(member => member.email));
      return (Array.isArray(messages) ? messages : [])
        .filter(message => message.teamId === teamId && permittedMembers.has(message.fromEmail))
        .sort((first, second) => new Date(first.sentAt) - new Date(second.sentAt));
    }

    function getDirectChatMessages(peerEmail) {
      const messages = JSON.parse(localStorage.getItem("ideaDirectChats") || "[]");
      const currentEmail = state.account.email;
      return (Array.isArray(messages) ? messages : [])
        .filter(message => (message.fromEmail === currentEmail && message.toEmail === peerEmail) || (message.fromEmail === peerEmail && message.toEmail === currentEmail))
        .sort((first, second) => new Date(first.sentAt) - new Date(second.sentAt));
    }

    function formatChatTimestamp(value) {
      const timestamp = new Date(value);
      return Number.isNaN(timestamp.getTime()) ? "" : timestamp.toLocaleString(undefined, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
    }

    function chatAttachmentMarkup(attachment) {
      if (!attachment || !attachment.dataUrl) return "";
      if (attachment.mimeType && attachment.mimeType.startsWith("image/")) {
        return \`<div class="chat-attachment"><img src="\${escapeHtml(attachment.dataUrl)}" alt="\${escapeHtml(attachment.fileName || "Shared image")}"><a class="chat-attachment-file" href="\${escapeHtml(attachment.dataUrl)}" download="\${escapeHtml(attachment.fileName || "image")}" target="_blank" rel="noreferrer">Download image</a></div>\`;
      }
      return \`<div class="chat-attachment"><a class="chat-attachment-file" href="\${escapeHtml(attachment.dataUrl)}" download="\${escapeHtml(attachment.fileName || "attachment")}" target="_blank" rel="noreferrer">\${escapeHtml(attachment.fileName || "Shared file")}</a></div>\`;
    }

    function chatConversationMarkup(kind, target, title, subtitle, messages) {
      const accounts = getAccountRecords();
      const messageMarkup = messages.map(message => {
        const senderName = accounts[message.fromEmail]?.name || message.fromEmail;
        const ownMessage = message.fromEmail === state.account.email;
        const text = typeof message.text === "string" ? message.text : "";
        const attachmentHtml = chatAttachmentMarkup(message.attachment);
        return \`<div class="chat-message \${ownMessage ? "mine" : ""}"><div class="chat-message-meta">\${escapeHtml(senderName)} · \${escapeHtml(formatChatTimestamp(message.sentAt))}</div><div class="chat-bubble"><div class="chat-message-bubble">\${text ? escapeHtml(text) : ""}\${attachmentHtml}</div></div></div>\`;
      }).join("");
      return \`<section class="panel chat-panel"><header class="chat-panel-header"><h2 class="chat-panel-title">\${escapeHtml(title)}</h2><div class="chat-panel-subtitle">\${escapeHtml(subtitle)}</div></header><div class="chat-message-list" id="chatMessages" role="log" aria-live="polite">\${messageMarkup || '<div class="chat-empty">No messages yet. Start the conversation.</div>'}</div><form class="chat-composer" data-chat-form data-chat-kind="\${kind}" data-chat-target="\${escapeHtml(target)}"><div class="chat-attachment-controls"><label class="chat-upload-button">Attach file<input type="file" name="attachment" accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.zip,.rar,.obj,.stl,.glb,.gltf,.fbx,.blend,.dae,.png,.jpg,.jpeg,.webp" id="chatAttachmentInput"><span id="chatAttachmentName" class="chat-attachment-label">No file selected</span></label></div><textarea class="textarea" id="chatMessageInput" name="message" rows="2" maxlength="2000" placeholder="Write a message..." aria-label="Message"></textarea><button class="button-primary" type="submit">Send</button></form></section>\`;
    }

    function teamChatPage() {
      if (state.role !== "student") return '<section class="panel"><div class="empty-state">Team chat is available to student accounts.</div></section>';
      const teams = getTeams().filter(team => teamMembers(team).some(member => member.email === state.account.email));
      if (!teams.length) {
        return \`<div class="page-heading"><div><p class="eyebrow">PING</p><h1>Team chat</h1><p class="page-subtitle">Chat with members of your teams.</p></div></div><section class="panel"><div class="empty-state">Join or create a team before starting a team chat.<br><button class="text-button" type="button" data-page="teams">Go to My team &rarr;</button></div></section>\`;
      }
      if (!teams.some(team => team.id === state.activeTeamChatId)) state.activeTeamChatId = teams[0].id;
      const activeTeam = findTeam(state.activeTeamChatId, teams);
      const channels = teams.map(team => \`<button class="chat-contact \${team.id === activeTeam.id ? "active" : ""}" type="button" data-select-team-chat="\${escapeHtml(team.id)}"><span class="avatar team-member-avatar">\${escapeHtml(getInitials(team.name))}</span><span class="chat-contact-copy"><strong>\${escapeHtml(team.name)}</strong><span>\${teamMembers(team).length} members</span></span></button>\`).join("");
      const conversation = chatConversationMarkup("team", activeTeam.id, activeTeam.name, \`\${teamMembers(activeTeam).length} team members\`, getTeamChatMessages(activeTeam.id));
      return \`<div class="page-heading"><div><p class="eyebrow">PING</p><h1>Team chat</h1><p class="page-subtitle">Messages are visible to accepted members of the selected team.</p></div></div><div class="chat-workspace"><aside class="panel chat-contact-panel"><div class="chat-contact-list">\${channels}</div></aside>\${conversation}</div>\`;
    }

    function directChatPage() {
      if (state.role !== "student") return '<section class="panel"><div class="empty-state">Chat is available to student accounts.</div></section>';
      const contacts = getStudentContacts();
      if (!contacts.length) {
        return \`<div class="page-heading"><div><p class="eyebrow">PING</p><h1>Chat</h1><p class="page-subtitle">Start a private chat with another student account.</p></div></div><section class="panel"><div class="empty-state">No other student accounts are available in this browser yet.</div></section>\`;
      }
      if (!contacts.some(account => account.email === state.activeChatPeerEmail)) state.activeChatPeerEmail = contacts[0].email;
      const activeContact = contacts.find(account => account.email === state.activeChatPeerEmail);
      const channels = contacts.map(account => \`<button class="chat-contact \${account.email === activeContact.email ? "active" : ""}" type="button" data-chat-peer="\${escapeHtml(account.email)}"><span class="avatar team-member-avatar">\${escapeHtml(getInitials(account.name))}</span><span class="chat-contact-copy"><strong>\${escapeHtml(account.name)}</strong><span>\${escapeHtml(account.email)}</span></span></button>\`).join("");
      const conversation = chatConversationMarkup("direct", activeContact.email, activeContact.name, activeContact.email, getDirectChatMessages(activeContact.email));
      return \`<div class="page-heading"><div><p class="eyebrow">PING</p><h1>Chat</h1><p class="page-subtitle">Private messages with other student accounts.</p></div></div><div class="chat-workspace"><aside class="panel chat-contact-panel"><div class="chat-contact-list">\${channels}</div></aside>\${conversation}</div>\`;
    }

    function readChatAttachment(file) {
      if (!file) return null;
      if (file.size > 25 * 1024 * 1024) {
        showToast("Files must be 25 MB or smaller.");
        return null;
      }
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.onload = () => resolve({
          fileName: file.name || "attachment",
          mimeType: file.type || "application/octet-stream",
          size: file.size,
          dataUrl: typeof reader.result === "string" ? reader.result : ""
        });
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(file);
      });
    }

    async function sendChatMessage(kind, target, value, attachment) {
      if (state.role !== "student") return;
      const text = String(value || "").trim();
      if (!text && !attachment) { showToast("Write a message or attach a file before sending."); return; }
      if (text.length > 2000) { showToast("Messages must be 2,000 characters or fewer."); return; }
      const attachmentPayload = attachment ? await readChatAttachment(attachment) : null;
      if (attachment && !attachmentPayload) return;
      const message = { fromEmail: state.account.email, text, sentAt: new Date().toISOString(), attachment: attachmentPayload || null };
      if (kind === "team") {
        const team = findTeam(target);
        if (!team || !teamMembers(team).some(member => member.email === state.account.email)) {
          showToast("You are no longer a member of this team.");
          render();
          return;
        }
        const messages = JSON.parse(localStorage.getItem("ideaTeamChats") || "[]");
        const updatedMessages = Array.isArray(messages) ? messages : [];
        updatedMessages.push({ ...message, teamId: team.id });
        localStorage.setItem("ideaTeamChats", JSON.stringify(updatedMessages));
        state.activeTeamChatId = team.id;
      } else if (kind === "direct") {
        const contact = getAccountRecords()[target];
        if (!contact || contact.role !== "student" || target === state.account.email) {
          showToast("This student account is not available for chat.");
          render();
          return;
        }
        const messages = JSON.parse(localStorage.getItem("ideaDirectChats") || "[]");
        const updatedMessages = Array.isArray(messages) ? messages : [];
        updatedMessages.push({ ...message, toEmail: target });
        localStorage.setItem("ideaDirectChats", JSON.stringify(updatedMessages));
        state.activeChatPeerEmail = target;
      } else {
        return;
      }
      render();
    }

    function readFileAsDataUrl(file) {
      return new Promise((resolve, reject) => {
        if (!file || !file.type?.startsWith("image/")) {
          resolve("");
          return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(new Error("Image could not be read."));
        reader.readAsDataURL(file);
      });
    }

    function teamEditorModal(teamId = null) {
      if (state.role !== "student") return;
      const existingTeam = teamId ? findTeam(teamId) : null;
      const modeLabel = existingTeam ? "Edit team details" : "Create a team";
      const actionLabel = existingTeam ? "Save changes" : "Create team";
      const currentPhoto = existingTeam?.photo || "";
      const photoPreview = currentPhoto ? \`<div class="team-photo-preview"><img src="\${escapeHtml(currentPhoto)}" alt="\${escapeHtml(existingTeam?.name || "Team photo")}"></div>\` : "";
      showModal(modeLabel, existingTeam ? "Update your team’s profile information." : "Choose a name and optional profile photo for your project team.", \`<label class="field-label" for="teamName">Team name</label><input class="field" id="teamName" name="name" maxlength="80" value="\${escapeHtml(existingTeam?.name || "")}" placeholder="Enter a team name" required><label class="field-label" for="teamDescription">Team description</label><textarea class="textarea" id="teamDescription" name="description" maxlength="220" placeholder="Add a short team bio or project focus">\${escapeHtml(existingTeam?.description || "")}</textarea><label class="drop-zone" for="teamPhoto">\${icons.upload}<strong id="teamPhotoName">\${currentPhoto ? "Change team photo" : "Choose a team photo"}</strong><span>PNG, JPG, GIF · Optional</span></label><input class="file-input" id="teamPhoto" name="photo" type="file" accept="image/*">\${photoPreview}\`, actionLabel, async formData => {
        const name = String(formData.get("name") || "").trim();
        if (!name) { showToast("Enter a team name to continue."); return; }
        const description = String(formData.get("description") || "").trim();
        const file = formData.get("photo");
        const teams = getTeams();
        const now = new Date().toISOString();
        if (existingTeam) {
          const team = findTeam(teamId, teams);
          if (!team || team.ownerEmail !== state.account.email) {
            showToast("This team could not be found or you no longer own it.");
            return;
          }
          team.name = name;
          team.description = description;
          if (file && file.name) {
            try { team.photo = await readFileAsDataUrl(file); }
            catch { showToast("The team photo could not be stored. Please try another image."); return; }
          }
          saveTeams(teams);
          closeModal();
          render();
          showToast("Team details updated.");
          return;
        }
        let photo = "";
        if (file && file.name) {
          try { photo = await readFileAsDataUrl(file); }
          catch { showToast("The team photo could not be stored. Please try another image."); return; }
        }
        teams.unshift({ id: \`team-\${Date.now()}-\${Math.random().toString(36).slice(2)}\`, name, description, photo, ownerEmail: state.account.email, createdAt: now, members: [{ email: state.account.email, status: "accepted", joinedAt: now }], projects: [] });
        saveTeams(teams);
        closeModal();
        render();
        showToast("Your team was created.");
      });
      const fileInput = document.getElementById("teamPhoto");
      if (fileInput) {
        fileInput.addEventListener("change", () => {
          const fileName = fileInput.files?.[0]?.name || "Choose a team photo";
          document.getElementById("teamPhotoName").textContent = fileName;
          const previewImage = fileInput.files?.[0];
          if (previewImage) {
            const reader = new FileReader();
            reader.onload = () => {
              const preview = document.querySelector(".team-photo-preview img");
              if (preview) preview.src = reader.result;
              else {
                const previewWrap = document.createElement("div");
                previewWrap.className = "team-photo-preview";
                previewWrap.innerHTML = \`<img src="\${reader.result}" alt="Team preview">\`;
                fileInput.insertAdjacentElement("afterend", previewWrap);
              }
            };
            reader.readAsDataURL(previewImage);
          }
        });
      }
    }

    function createTeamModal() {
      teamEditorModal();
    }

    function confirmTeamDeletion(teamName, onConfirm) {
      showModal("Delete team?", \`Delete “\${escapeHtml(teamName)}” and all of its team projects and messages? This cannot be undone.\`, "", "Delete team", onConfirm);
    }

    function deleteTeam(teamId) {
      if (state.role !== "student") return;
      const teams = getTeams();
      const teamIndex = teams.findIndex(team => team.id === teamId);
      const team = teamIndex >= 0 ? teams[teamIndex] : null;
      if (!team || team.ownerEmail !== state.account.email) {
        showToast("This team could not be found or you cannot delete it.");
        return;
      }
      teams.splice(teamIndex, 1);
      saveTeams(teams);
      const teamMessages = JSON.parse(localStorage.getItem("ideaTeamChats") || "[]");
      localStorage.setItem("ideaTeamChats", JSON.stringify((Array.isArray(teamMessages) ? teamMessages : []).filter(message => message.teamId !== teamId)));
      closeModal();
      render();
      showToast("Team deleted.");
    }

    function inviteTeamMemberModal(teamId) {
      if (state.role !== "student") return;
      const team = findTeam(teamId);
      if (!team || team.ownerEmail !== state.account.email) return;
      showModal("Invite a student", \`Invite a student account to join “\${escapeHtml(team.name)}”.\`, '<label class="field-label" for="teamInviteEmail">Student account email</label><input class="field" id="teamInviteEmail" name="email" type="email" autocomplete="email" placeholder="student@example.com" required>', "Send invitation", formData => {
        const email = String(formData.get("email") || "").trim().toLowerCase();
        const account = getAccountRecords()[email];
        if (!account || account.role !== "student") { showToast("No student account was found with that email."); return; }
        if (email === state.account.email) { showToast("You are already a member of this team."); return; }
        const teams = getTeams();
        const currentTeam = findTeam(teamId, teams);
        if (!currentTeam || currentTeam.ownerEmail !== state.account.email) { showToast("This team could not be found or you cannot invite members."); return; }
        currentTeam.members = Array.isArray(currentTeam.members) ? currentTeam.members : [];
        if (currentTeam.members.some(member => member.email === email)) { showToast("This student is already a member or has a pending invitation."); return; }
        currentTeam.members.push({ email, status: "pending", invitedAt: new Date().toISOString() });
        saveTeams(teams);
        closeModal();
        render();
        showToast("Invitation sent. The student can accept it from their account.");
      });
    }

    function updateTeamInvitation(teamId, accept) {
      if (state.role !== "student") return;
      const teams = getTeams();
      const team = findTeam(teamId, teams);
      const invitation = teamMembers(team || {}, "pending").find(member => member.email === state.account.email);
      if (!team || !invitation) { showToast("This team invitation is no longer available."); render(); return; }
      if (accept) {
        invitation.status = "accepted";
        invitation.joinedAt = new Date().toISOString();
      } else {
        team.members = team.members.filter(member => member !== invitation);
      }
      saveTeams(teams);
      render();
      showToast(accept ? \`You joined \${team.name}.\` : "Invitation declined.");
    }

    function uploadTeamProjectModal(teamId) {
      if (state.role !== "student") return;
      const team = findTeam(teamId);
      if (!team || !teamMembers(team).some(member => member.email === state.account.email)) {
        showToast("You are no longer a member of this team.");
        return;
      }
      showModal("Upload as a team", \`Submit shared work for “\${escapeHtml(team.name)}”.\`, \`<p class="project-meta">This project will be submitted by the \${escapeHtml(team.name)} team.</p><label class="field-label" for="teamProjectTitle">Project name</label><input class="field" id="teamProjectTitle" name="title" maxlength="120" placeholder="Enter a project name" required><label class="field-label" for="teamProjectProgress">Project progress</label><select class="field" id="teamProjectProgress" name="progress"><option value="not_started">Not started</option><option value="in_progress">In progress</option><option value="completed">Completed</option></select><label class="drop-zone" for="teamProjectFile">\${icons.upload}<strong id="teamProjectFileName">Choose a project file</strong><span>Any file type · Max 25 MB · Required when completed</span></label><input class="file-input" id="teamProjectFile" name="file" type="file">\`, "Upload as team", async formData => {
        const title = String(formData.get("title") || "").trim();
        const file = formData.get("file");
        if (!title) { showToast("Enter a project name."); return; }
        const progress = String(formData.get("progress") || "");
        if (!isProjectProgress(progress)) { showToast("Choose a valid project progress."); return; }
        if (progress === "completed" && !file?.name) { showToast("Attach a project file to submit a completed project."); return; }
        if (file?.name && file.size > 25 * 1024 * 1024) { showToast("Files must be 25 MB or smaller."); return; }
        const teams = getTeams();
        const currentTeam = findTeam(teamId, teams);
        if (!currentTeam || !teamMembers(currentTeam).some(member => member.email === state.account.email)) {
          showToast("You are no longer a member of this team.");
          return;
        }
        const submittedAt = new Date().toISOString();
        const projectId = \`team-project-\${Date.now()}-\${Math.random().toString(36).slice(2)}\`;
        if (file?.name) {
          try { await saveSubmissionFile(projectId, file); }
          catch { showToast("The file could not be stored. Please try another file."); return; }
        }
        currentTeam.projects = Array.isArray(currentTeam.projects) ? currentTeam.projects : [];
        currentTeam.projects.unshift({ id: projectId, name: title, type: "Project submission", date: \`Submitted \${new Date(submittedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}\`, submittedAt, status: "In review", progress, fileName: file?.name || "", remark: "", submittedBy: state.account.email });
        saveTeams(teams);
        closeModal();
        render();
        showToast("Team project submitted.");
      });
      const fileInput = document.getElementById("teamProjectFile");
      fileInput.addEventListener("change", () => {
        document.getElementById("teamProjectFileName").textContent = fileInput.files.length ? fileInput.files[0].name : "Choose a project file";
      });
    }

    function getStudentSubmissions() {
      const accounts = JSON.parse(localStorage.getItem("ideaAccounts") || "{}");
      return Object.values(accounts).filter(account => account.role === "student").flatMap(account => {
        const workspace = JSON.parse(localStorage.getItem(\`ideaWorkspace:\${account.email}\`) || "null");
        return (workspace?.projects || []).map((project, projectIndex) => ({
          ...project,
          studentName: account.name,
          studentEmail: account.email,
          department: account.department || "",
          section: account.section || "",
          ownerEmail: account.email,
          projectIndex
        }));
      });
    }
    async function deleteSubmissionFiles(ids) {
      const db = await openFileDatabase();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction("files", "readwrite");
        const store = transaction.objectStore("files");
        ids.forEach(id => store.delete(id));
        transaction.oncomplete = () => { db.close(); resolve(); };
        transaction.onerror = () => { db.close(); reject(transaction.error); };
        transaction.onabort = () => { db.close(); reject(transaction.error); };
      });
    }

    function confirmProjectDeletion(projectName, onConfirm) {
      showModal("Delete project?", \`Delete “\${escapeHtml(projectName)}” and any attached file? This cannot be undone.\`, "", "Delete project", onConfirm);
    }

    async function deletePersonalProject(index) {
      if (state.role !== "student" || !Number.isInteger(index) || !state.projects[index]) return;
      const project = state.projects[index];
      try {
        if (project.id) await deleteSubmissionFiles([project.id]);
      } catch {
        showToast("Could not delete the project file. The project was not deleted.");
        return;
      }
      state.projects.splice(index, 1);
      persistWorkspace();
      closeModal();
      render();
      showToast("Project deleted.");
    }

    async function deleteTeamProject(teamId, projectId, projectIndex) {
      if (state.role !== "student") return;
      const teams = getTeams();
      const team = findTeam(teamId, teams);
      const project = projectId ? team?.projects?.find(item => item.id === projectId) : team?.projects?.[projectIndex];
      if (!team || !project || team.ownerEmail !== state.account.email || !teamMembers(team).some(member => member.email === state.account.email)) {
        showToast("Only the team leader can delete this team project.");
        render();
        return;
      }
      try {
        if (project.id) await deleteSubmissionFiles([project.id]);
      } catch {
        showToast("Could not delete the project file. The project was not deleted.");
        return;
      }
      const updatedTeams = getTeams();
      const updatedTeam = findTeam(teamId, updatedTeams);
      const updatedProject = projectId ? updatedTeam?.projects?.find(item => item.id === projectId) : updatedTeam?.projects?.[projectIndex];
      if (!updatedTeam || !updatedProject || updatedTeam.ownerEmail !== state.account.email || !teamMembers(updatedTeam).some(member => member.email === state.account.email)) {
        closeModal();
        render();
        showToast("This team project is no longer available.");
        return;
      }
      updatedTeam.projects = updatedTeam.projects.filter(item => item !== updatedProject);
      saveTeams(updatedTeams);
      closeModal();
      render();
      showToast("Team project deleted.");
    }
    function formatSubmissionDate(project) {
      if (project.submittedAt) {
        const submitted = new Date(project.submittedAt);
        if (!Number.isNaN(submitted.getTime())) return submitted.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
      }
      const savedDate = String(project.date || "").replace(/^Submitted\\s*/i, "").trim();
      return /^(today|yesterday|just now)$/i.test(savedDate) || !savedDate ? "Date not recorded" : savedDate;
    }

    function teacherOverview() {
      const submissions = getStudentSubmissions();
      const awaiting = submissions.filter(project => project.status === "In review").length;
      const studentsCount = new Set(submissions.map(project => project.studentEmail)).size;
      return \`<div class="page-heading"><div><p class="eyebrow">TEACHER WORKSPACE</p><h1>Good morning, \${escapeHtml(state.account?.name || "")}</h1><p class="page-subtitle">A quick look at your students’ project progress.</p></div><button class="button-secondary" data-action="notifications">View activity</button></div>
        <section class="welcome-banner"><div class="welcome-copy"><div class="welcome-kicker">YOUR CLASSROOM · DESIGN & TECHNOLOGY</div><h2 class="welcome-title">A little feedback goes a long way.</h2><p class="welcome-subtitle">Review submissions and help every student progress.</p></div><div class="banner-art" aria-hidden="true"><div class="paper-art one"></div><div class="paper-art two"></div><span class="banner-spark">✦</span></div><button class="button-primary" data-action="review-all">Review submissions <span aria-hidden="true">→</span></button></section>
        <section class="stats-grid"><article class="stat-card"><div class="stat-top"><span>Students with submissions</span><span class="stat-icon">\${icons.people}</span></div><div class="stat-value">\${studentsCount.toString().padStart(2, "0")}</div><div class="stat-note">Student accounts</div></article><article class="stat-card"><div class="stat-top"><span>Submitted projects</span><span class="stat-icon blue">\${icons.folder}</span></div><div class="stat-value">\${submissions.length.toString().padStart(2, "0")}</div><div class="stat-note">Across student accounts</div></article><article class="stat-card"><div class="stat-top"><span>Awaiting review</span><span class="stat-icon orange">\${icons.clock}</span></div><div class="stat-value">\${awaiting.toString().padStart(2, "0")}</div><div class="stat-note">Ready for your feedback</div></article><article class="stat-card"><div class="stat-top"><span>Reviewed</span><span class="stat-icon green">\${icons.check}</span></div><div class="stat-value">\${(submissions.length - awaiting).toString().padStart(2, "0")}</div><div class="stat-note">Projects with a review status</div></article></section>
        <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Submissions to review</h2><p class="panel-description">Recent work from your students</p></div><div class="toolbar"><select class="select-filter" id="reviewFilter" aria-label="Filter submissions"><option value="all">All submissions</option><option value="In review">Awaiting review</option><option value="Approved">Reviewed</option></select></div></div><div id="teacherProjects">\${teacherProjectRows()}</div></section>
        <div style="height:16px"></div>        <section class="panel"><div class="panel-header"><div><h2 class="panel-title">Student questions</h2><p class="panel-description">Questions that could use your help</p></div><button class="text-button" data-page="queries">View inbox &rarr;</button></div><div class="query-list">\${teacherQueriesList(getStudentQueries().slice(0, 3))}</div></section>\`;
    }

    function teacherProjectRows(filter = "all") {
      const submissions = getStudentSubmissions();
      const searchTerm = (state.projectSearch || "").trim().toLowerCase();
      const rows = submissions.map((project, index) => ({ project, index }))
        .filter(row => filter === "all" || row.project.status === filter)
        .filter(({ project }) => !searchTerm || [project.name, project.studentName, project.studentEmail].some(value => String(value || "").toLowerCase().includes(searchTerm)));
      if (!rows.length) return '<div class="empty-state">No student submissions match this filter yet.</div>';
      return rows.map(({ project, index }) => \`<article class="teacher-project" data-project-card="\${index}">
        <div class="teacher-project-summary">
          \${projectProgressButton(project, "", false)}
          <div class="project-icon \${project.color || ""}">\${icons.file}</div>
          <div class="teacher-project-info">
            <button class="project-title-toggle" type="button" data-expand-project="\${index}" aria-expanded="false" aria-controls="project-details-\${index}">\${escapeHtml(project.name)}</button>
            <div class="project-meta">\${escapeHtml(project.studentName)}</div>
            \${projectProgressBar(project)}
          </div>
          \${project.fileName && project.id ? \`<button class="button-secondary" data-open-file="\${index}">Open file</button><button class="button-secondary" data-download-file="\${index}">Download</button>\` : project.fileName ? '<span class="project-meta">Student needs to re-attach file</span>' : ""}
        </div>
        <div class="project-details hidden" id="project-details-\${index}">
          <section class="project-detail-section"><h3 class="project-detail-heading">Student</h3><div class="project-detail-grid">
            <div class="project-detail-item"><span class="project-detail-label">Name</span><span class="project-detail-value">\${escapeHtml(project.studentName)}</span></div>
            <div class="project-detail-item"><span class="project-detail-label">Email</span><span class="project-detail-value">\${escapeHtml(project.studentEmail)}</span></div>
            <div class="project-detail-item"><span class="project-detail-label">Department</span><span class="project-detail-value">\${escapeHtml(project.department || "Not provided")}</span></div>
            <div class="project-detail-item"><span class="project-detail-label">Section</span><span class="project-detail-value">\${escapeHtml(project.section || "Not provided")}</span></div>
          </div></section>
          <section class="project-detail-section"><h3 class="project-detail-heading">Submission</h3><div class="project-detail-grid">
            <div class="project-detail-item"><span class="project-detail-label">Submitted date</span><span class="project-detail-value">\${escapeHtml(formatSubmissionDate(project))}</span></div>
            <div class="project-detail-item"><span class="project-detail-label">Attached file</span><span class="project-detail-value">\${escapeHtml(project.fileName || "No file attached")}</span></div>
            <div class="project-detail-item"><span class="project-detail-label">Project progress</span><span class="project-detail-value">\${projectProgressDetails(project.progress).label}</span></div>
          </div></section>
          <section class="project-detail-section"><h3 class="project-detail-heading">Review</h3><div class="project-detail-grid"><div class="project-detail-item"><span class="project-detail-label">Current status</span><span class="project-detail-value">\${escapeHtml(project.status)}</span></div><div class="project-detail-item"><span class="project-detail-label">Teacher remark</span><span class="project-detail-value">\${escapeHtml(project.remark || "No remark yet")}</span></div></div>
            <div class="project-detail-actions"><span class="status \${statusClass(project.status)}">\${escapeHtml(project.status)}</span><button class="button-secondary" data-review="\${index}">\${project.status === "In review" ? "Review project" : "Update feedback"}</button></div>
          </section>
        </div>
      </article>\`).join("");
    }

    function teacherProjectsPage() {
      const submissions = getStudentSubmissions();
      return \`<div class="page-heading"><div><p class="eyebrow teacher-projects-eyebrow">TEACHER WORKSPACE</p><p class="page-subtitle">Select a project name to view student details, files, and submission information.</p></div></div><section class="panel"><div class="panel-header"><div><h2 class="panel-title">Student projects</h2><p class="panel-description">\${submissions.length} \${submissions.length === 1 ? "project" : "projects"} across student accounts</p></div><div class="toolbar"><input class="search-box" id="projectSearch" type="search" value="\${escapeHtml(state.projectSearch || "")}" placeholder="Search projects or students" aria-label="Search projects"><select class="select-filter" id="projectFilter" aria-label="Filter student projects"><option value="all">All projects</option><option value="In review">Awaiting review</option><option value="Approved">Approved</option><option value="Needs changes">Needs changes</option></select></div></div><div id="teacherProjects">\${teacherProjectRows()}</div></section>\`;
    }

    function projectsPage() {
      if (state.role === "teacher") return teacherProjectsPage();
      const ownedTeams = getOwnedStudentTeams();
      const studentTeams = getStudentTeamsForUpload();
      const isTeamMember = studentTeams.some(team => team.ownerEmail !== state.account.email);
      const teamProjects = studentTeams.flatMap(team => (Array.isArray(team.projects) ? team.projects : []).map(project => ({ team, project })))
        .filter(({ team, project }) => {
          const term = (state.projectSearch || "").trim().toLowerCase();
          return !term || [team.name, project.name, project.fileName, project.submittedBy].some(value => String(value || "").toLowerCase().includes(term));
        });
      const filteredProjects = state.projects.map((project, index) => ({ project, index })).filter(({ project }) => {
        const term = (state.projectSearch || "").trim().toLowerCase();
        if (!term) return true;
        return [project.name, project.type, project.date, project.status].some(value => String(value || "").toLowerCase().includes(term));
      });
      const teamProjectsMarkup = teamProjects.length ? teamProjects.map(({ team, project }) => {
        const rowProject = { ...project, type: \`Team: \${team.name}\`, date: \`Submitted \${formatSubmissionDate(project)}\`, status: project.status || "In review", color: project.color || "orange" };
        const fileActions = project.id && project.fileName ? \`<button class="button-secondary" type="button" data-open-team-file="\${escapeHtml(team.id)}" data-project-id="\${escapeHtml(project.id)}">Open file</button><button class="button-secondary" type="button" data-download-team-file="\${escapeHtml(team.id)}" data-project-id="\${escapeHtml(project.id)}">Download file</button>\` : '<span class="project-meta">No attached file</span>';
        const deleteAction = team.ownerEmail === state.account.email ? \`<button class="button-danger" type="button" data-delete-team-project="\${escapeHtml(team.id)}" data-project-id="\${escapeHtml(project.id || "")}">Delete project</button>\` : "";
        return \`\${projectRow(rowProject)}<div class="project-attach-action">\${fileActions}\${deleteAction}</div>\`;
      }).join("") : '<div class="empty-state">No team projects match your search.</div>';
      const personalProjectsSection = isTeamMember ? "" : \`<section class="panel"><div class="panel-header"><div><h2 class="panel-title">My projects</h2><p class="panel-description">\${filteredProjects.length} projects</p></div><div class="toolbar"><button class="button-primary" type="button" data-action="create-topic-project">＋ Create project</button><input class="search-box" id="projectSearch" type="search" value="\${escapeHtml(state.projectSearch || "")}" placeholder="Search your projects" aria-label="Search project list"><span class="term-pill">Workspace</span></div></div><div class="projects-list">\${filteredProjects.length ? filteredProjects.map(({ project, index }) => \`\${projectRow(project, \`data-personal-project-progress="\${index}"\`)}<div class="project-attach-action"><button class="button-secondary" data-edit-personal-project="\${index}">Edit project</button><button class="button-secondary" data-attach-file="\${index}">Upload a file</button>\${project.id && project.fileName ? \`<button class="button-secondary" type="button" data-open-personal-file="\${index}">Open file</button><button class="button-secondary" type="button" data-download-personal-file="\${index}">Download file</button><button class="button-secondary" type="button" data-remove-personal-file="\${index}">Remove file</button>\` : ""}\${ownedTeams.length && !hasProjectBeenUploadedToTeam(project, ownedTeams) ? \`<button class="button-secondary" type="button" data-share-project-to-team="\${index}">Upload to team</button>\` : ""}<button class="button-danger" type="button" data-delete-project="\${index}">Delete project</button></div>\${project.fileName ? \`<div class="project-meta" style="padding:0 0 10px 51px">Attached file: \${escapeHtml(project.fileName)}</div>\` : ""}\`).join("") : '<div class="empty-state">No projects match your search yet.</div>'}</div></section>\`;
      return \`<div class="page-heading"><div><p class="eyebrow student-projects-eyebrow">YOUR WORK</p><p class="page-subtitle">Keep track of your submissions and teacher feedback.</p></div></div>\${personalProjectsSection}<section class="panel" style="margin-top:16px"><div class="panel-header"><div><h2 class="panel-title">Team projects</h2><p class="panel-description">Projects shared with teams you belong to</p></div></div><div class="projects-list">\${teamProjectsMarkup}</div></section>\`;
    }

    function dataPage() {
      const rowsText = state.dataRows || defaultTopicsSource;
      const tableMarkup = projectDataTableMarkup(rowsText);
      return \`<div class="page-heading"><div><p class="eyebrow">DATA</p><h1>Topics</h1><p class="page-subtitle">Upload a file to replace or add your dataset, or review the sample AI use-case topics below.</p></div><div class="toolbar"><button class="button-primary" type="button" id="dataUploadBtn">\${icons.upload} Upload file</button><input id="dataUploadInput" type="file" accept=".csv,.tsv,.txt,.json,.pdf" hidden></div></div><section class="panel"><div class="panel-header"><div><h2 class="panel-title">Topics</h2><p class="panel-description">AI project case topics and their classifications.</p></div></div><div class="data-table-wrap">\${tableMarkup || '<div class="empty-state">No data available yet.</div>'}</div></section>\`;
    }

    function queriesPage() {
      if (state.role === "teacher") {
        const studentQueries = getStudentQueries();
        return \`<div class="page-heading"><div><p class="eyebrow">STUDENT QUESTIONS</p><h1>Answer your students</h1><p class="page-subtitle">Review questions from your students and share helpful answers.</p></div></div><section class="panel"><div class="panel-header"><div><h2 class="panel-title">Student questions</h2><p class="panel-description">\${studentQueries.length} \${studentQueries.length === 1 ? "question" : "questions"}</p></div></div><div class="query-list">\${teacherQueriesList(studentQueries)}</div></section>\`;
      }
      return \`<div class="page-heading"><div><p class="eyebrow">ASK YOUR TEACHER</p><h1>Questions & answers</h1><p class="page-subtitle">Get guidance from your teacher as you work through your project.</p></div><button class="button-primary" data-action="ask-question">＋ Ask a question</button></div><section class="panel"><div class="panel-header"><div><h2 class="panel-title">Your questions</h2><p class="panel-description">Questions are shared with your teacher.</p></div></div><div class="query-list">\${state.queries.length ? queriesList() : '<div class="empty-state">No questions yet. Ask your teacher for guidance.</div>'}<button class="text-button" data-action="ask-question">＋ Ask your teacher a question</button></div></section>\`;
    }

    function projectDataTableMarkup(rawText) {
      if (typeof rawText !== "string") return "";
      const normalized = rawText.replace(/\\r/g, "").trim();
      if (!normalized) return "";

      let parsedRows = [];
      try {
        const jsonValue = JSON.parse(normalized);
        if (Array.isArray(jsonValue)) {
          if (!jsonValue.length) return "";
          const firstItem = jsonValue[0];
          if (typeof firstItem === "object" && firstItem !== null && !Array.isArray(firstItem)) {
            const headers = Object.keys(firstItem);
            parsedRows = [headers, ...jsonValue.map(item => headers.map(header => String(item?.[header] ?? "")))];
          } else {
            parsedRows = [["Value"], ...jsonValue.map(item => [String(item)])];
          }
        } else if (jsonValue && typeof jsonValue === "object") {
          const headers = Object.keys(jsonValue);
          parsedRows = [headers, headers.map(header => String(jsonValue[header]))];
        }
      } catch {
        // fall through to text parsing below
      }

      if (!parsedRows.length) {
        const lines = normalized.split("\\n").map(line => line.trim()).filter(Boolean);
        if (!lines.length) return "";
        const delimiterCandidates = [",", ";", "\\t", "|"];
        let detectedDelimiter = "";
        for (const candidate of delimiterCandidates) {
          const sampleLen = lines.slice(0, 5).filter(line => line.includes(candidate)).length;
          if (sampleLen >= 1 && lines.some(line => line.split(candidate).length > 1)) {
            detectedDelimiter = candidate;
            break;
          }
        }

        if (detectedDelimiter) {
          parsedRows = lines.map(line => line.split(detectedDelimiter).map(value => value.trim()));
        } else {
          parsedRows = [["Row", "Value"], ...lines.map((line, index) => [String(index + 1), line])];
        }
      }

      const headerRow = Array.isArray(parsedRows[0]) ? parsedRows[0].map(value => String(value || "")) : ["Value"];
      const bodyRows = parsedRows.slice(1).map(row => Array.isArray(row) ? row.map(value => String(value ?? "")) : [String(row ?? "")]);
      const tableWidth = Math.max(headerRow.length, ...bodyRows.map(row => row.length), 1);
      const normalizedHeader = Array.from({ length: tableWidth }, (_, index) => headerRow[index] || \`Column \${index + 1}\`);
      const normalizedBody = bodyRows.map(row => Array.from({ length: tableWidth }, (_, index) => row[index] || ""));
      const titleColumn = normalizedHeader.findIndex(header => ["title", "topic", "project title", "case title"].includes(header.trim().toLowerCase()));
      const caseColumn = normalizedHeader.findIndex(header => ["case", "case id"].includes(header.trim().toLowerCase()));

      return \`<table class="data-table"><thead><tr>\${normalizedHeader.map(cell => \`<th>\${escapeHtml(cell)}</th>\`).join("")}</tr></thead><tbody>\${normalizedBody.map(row => {
        const topicName = row[titleColumn]?.trim() || row.find(Boolean) || "";
        const topicCase = caseColumn >= 0 ? row[caseColumn].trim() : "";
        return \`<tr data-topic-select data-topic-name="\${escapeHtml(topicName)}" data-topic-case="\${escapeHtml(topicCase)}" tabindex="0" aria-label="Select \${escapeHtml(topicName)} as a project">\${row.map(cell => \`<td>\${escapeHtml(cell)}</td>\`).join("")}</tr>\`;
      }).join("")}</tbody></table>\`;
    }

    function selectDataTopic(topicRow) {
      if (state.role !== "student") {
        showToast("Topic selection is available to student accounts.");
        return;
      }
      const topicName = topicRow.dataset.topicName?.trim();
      if (!topicName) {
        showToast("This topic does not have a title.");
        return;
      }
      const topicCase = topicRow.dataset.topicCase?.trim() || "";
      const existingProject = state.projects.find(project => project.topicCase === topicCase && project.name === topicName);
      if (existingProject) {
        showToast("That project has already been chosen.");
        return;
      }
      state.projects.unshift({
        name: topicName,
        type: topicCase ? \`Topic \${topicCase}\` : "Selected topic",
        date: \`Selected \${new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}\`,
        status: "Selected",
        progress: "not_started",
        color: "blue",
        topicCase
      });
      persistWorkspace();
      state.projectSearch = "";
      state.page = "projects";
      render();
      showToast("Topic added to My projects.");
    }

    function getProjectTopics() {
      const topicContainer = document.createElement("div");
      topicContainer.innerHTML = projectDataTableMarkup(state.dataRows || defaultTopicsSource);
      return [...topicContainer.querySelectorAll("[data-topic-select]")]
        .map(row => ({ name: row.dataset.topicName?.trim() || "", topicCase: row.dataset.topicCase?.trim() || "" }))
        .filter(topic => topic.name);
    }

    function createTopicProjectModal() {
      if (state.role !== "student") return;
      const topics = getProjectTopics();
      if (!topics.length) {
        showToast("No topics are available in Data right now.");
        return;
      }
      const options = topics.map((topic, index) => \`<option value="\${index}">\${topic.topicCase ? \`\${escapeHtml(topic.topicCase)} · \` : ""}\${escapeHtml(topic.name)}</option>\`).join("");
      showModal("Create project", "Choose a topic from Data to add it to My projects.", \`<label class="field-label" for="projectTopicSelect">Choose topic</label><select class="field" id="projectTopicSelect" name="topic" required><option value="">Select a topic</option>\${options}</select>\`, "Create project", formData => {
        const selectedValue = String(formData.get("topic") || "");
        const selectedIndex = Number(selectedValue);
        const topic = topics[selectedIndex];
        if (!selectedValue || !Number.isInteger(selectedIndex) || !topic) {
          showToast("Choose a topic to create a project.");
          return;
        }
        const existingProject = state.projects.find(project => project.topicCase === topic.topicCase && project.name === topic.name);
        if (existingProject) {
          showToast("That project has already been chosen.");
          return;
        }
        const today = new Date();
        state.projects.unshift({
          name: topic.name,
          type: topic.topicCase ? \`Topic \${topic.topicCase}\` : "Selected topic",
          date: \`Selected \${today.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}\`,
          status: "Selected",
          progress: "not_started",
          color: "blue",
          topicCase: topic.topicCase
        });
        persistWorkspace();
        state.projectSearch = "";
        closeModal();
        render();
        showToast("Project created in My projects.");
      });
      document.getElementById("projectTopicSelect").selectedIndex = -1;
    }

    async function hydrateProjectDataTables() {
      const containers = document.querySelectorAll("[data-project-data-container]");
      for (const container of containers) {
        const projectId = container.getAttribute("data-project-data-container");
        if (!projectId) continue;
        try {
          const stored = await readSubmissionFile(projectId);
          const rawText = stored?.file ? await stored.file.text() : "";
          const table = projectDataTableMarkup(rawText);
          container.innerHTML = table || '<div class="empty-state">This uploaded file is empty or not readable as text.</div>';
        } catch {
          container.innerHTML = '<div class="empty-state">This uploaded file could not be read.</div>';
        }
      }
    }

    function projectDataSection() {
      const uploadedProjects = state.projects.filter(project => project.id && project.fileName);
      if (!uploadedProjects.length) {
        return \`<section class="panel"><div class="panel-header"><div><h2 class="panel-title">Data</h2><p class="panel-description">Uploaded text files appear here as readable tables.</p></div></div><div class="empty-state">No uploaded data files yet.</div></section>\`;
      }
      return \`<section class="panel"><div class="panel-header"><div><h2 class="panel-title">Data</h2><p class="panel-description">Uploaded text files appear here as readable tables.</p></div></div><div class="data-project-list">\${uploadedProjects.map(project => \`<div class="data-project-card"><div class="data-project-header"><strong>\${escapeHtml(project.name)}</strong><span>\${escapeHtml(project.fileName)}</span></div><div class="data-table-wrap" data-project-data-container="\${escapeHtml(project.id)}">Loading data…</div></div>\`).join("")}</div></section>\`;
    }

    function render() {
      if (!state.account) return;
      if (state.role !== "student" && ["team-chat", "chat"].includes(state.page)) state.page = "overview";
      document.querySelector(".app-shell").classList.remove("hidden");
      document.getElementById("authScreen").classList.add("hidden");
      document.getElementById("landingPage").classList.add("hidden");
      document.querySelectorAll(".nav-item").forEach(button => {
        const studentOnlyPage = ["team-chat", "chat"].includes(button.dataset.page);
        const enabled = ["overview", "projects", "data", "queries", "teams", "team-chat", "chat"].includes(button.dataset.page) && (!studentOnlyPage || state.role === "student");
        button.classList.toggle("hidden", !enabled);
        button.classList.toggle("active", button.dataset.page === state.page);
        if (button.dataset.page === state.page) button.setAttribute("aria-current", "page");
        else button.removeAttribute("aria-current");
      });
      document.getElementById("pingSectionLabel").classList.toggle("hidden", state.role !== "student");
      const teamsLabel = state.role === "teacher" ? "Student teams & projects" : "My team";
      document.querySelector('[data-page="teams"] span').textContent = teamsLabel;
      pageNames.teams = teamsLabel;
      document.getElementById("breadcrumbCurrent").textContent = state.role === "teacher" && state.page === "overview" ? "Teacher dashboard" : pageNames[state.page];
      document.getElementById("profileName").textContent = state.account.name;
      const accountType = state.role === "teacher" ? "Teacher" : "Student";
      document.getElementById("profileRole").innerHTML = \`<span>\${escapeHtml(accountType)}</span>\`;
      const profileAvatar = document.getElementById("profileAvatar");
      const avatar = typeof state.account.avatar === "string" && /^data:image\\/(?:jpeg|png|webp|gif);base64,/.test(state.account.avatar)
        ? \`<img src="\${escapeHtml(state.account.avatar)}" alt="">\`
        : escapeHtml(getInitials(state.account.name));
      profileAvatar.innerHTML = avatar;
      const studentTeams = state.role === "student" ? getStudentTeamsForUpload() : [];
      const isTeamMember = studentTeams.some(team => team.ownerEmail !== state.account.email);
      const teamProjectCount = studentTeams.reduce((count, team) => count + (Array.isArray(team.projects) ? team.projects.length : 0), 0);
      const projectCount = state.role === "teacher" ? getStudentSubmissions().length : isTeamMember ? teamProjectCount : state.projects.length;
      document.querySelector('[data-page="projects"] span').textContent = state.role === "teacher" ? "Student projects" : isTeamMember ? "Team projects" : "My projects";
      document.querySelector('[data-count="projects"]').textContent = projectCount;
      document.querySelector('[data-count="queries"]').textContent = state.role === "teacher" ? getStudentQueries().length : state.queries.length;
      const views = {
        overview: () => state.role === "teacher" ? teacherOverview() : studentOverview(),
        projects: projectsPage,
        data: dataPage,
        queries: queriesPage,
        teams: teamsPage,
        "team-chat": teamChatPage,
        chat: directChatPage
      };
      content.innerHTML = views[state.page]();
      if (state.page === "data") {
        const dataUploadBtn = document.getElementById("dataUploadBtn");
        const dataUploadInput = document.getElementById("dataUploadInput");
        if (dataUploadBtn && dataUploadInput) {
          dataUploadBtn.addEventListener("click", () => dataUploadInput.click());
          dataUploadInput.addEventListener("change", async event => {
            const file = event.target.files?.[0];
            if (!file) return;
            if (file.name.toLowerCase().endsWith(".pdf")) {
              state.dataRows = defaultTopicsSource;
              localStorage.setItem("ideaDataTable", state.dataRows);
              render();
              showToast("Sample PDF data loaded into Topics.");
              return;
            }
            const text = await file.text();
            state.dataRows = text || defaultTopicsSource;
            localStorage.setItem("ideaDataTable", state.dataRows);
            render();
            showToast(\`\${file.name} loaded into the Topics table.\`);
          });
        }
      }
      if (state.page === "data" && state.role === "student") {
        hydrateProjectDataTables();
      }
      const chatMessages = document.getElementById("chatMessages");
      if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
      const filter = document.getElementById("reviewFilter");
      if (filter) filter.addEventListener("change", () => {
        document.getElementById("teacherProjects").innerHTML = teacherProjectRows(filter.value);
      });
      const projectFilter = document.getElementById("projectFilter");
      if (projectFilter) projectFilter.addEventListener("change", () => {
        document.getElementById("teacherProjects").innerHTML = teacherProjectRows(projectFilter.value);
      });
      const projectSearch = document.getElementById("projectSearch");
      if (projectSearch) {
        projectSearch.addEventListener("input", event => {
          state.projectSearch = event.target.value;
          if (state.role === "teacher") {
            document.getElementById("teacherProjects").innerHTML = teacherProjectRows(document.getElementById("projectFilter")?.value || "all");
          } else {
            render();
          }
        });
      }
    }

    function escapeHtml(value) {
      return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
      })[character]);
    }

    let toastTimer;
    function showToast(message) {
      const toast = document.getElementById("toast");
      toast.textContent = message;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
    }

    function closeModal() {
      document.getElementById("modalHost").innerHTML = "";
    }

    function showModal(title, subtitle, body, submitLabel, onSubmit, focusFirstField = true, extraActions = "") {
      const host = document.getElementById("modalHost");
      host.innerHTML = \`<div class="modal-backdrop" data-close-modal><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle"><div class="modal-head"><div><h2 class="modal-title" id="modalTitle">\${title}</h2><p class="modal-subtitle">\${subtitle}</p></div><button class="modal-close" type="button" aria-label="Close dialog" data-close-modal>×</button></div><form id="modalForm">\${body}<div class="modal-actions">\${extraActions}<button type="button" class="button-secondary" data-close-modal>Cancel</button>\${submitLabel ? \`<button type="submit" class="button-primary">\${submitLabel}</button>\` : ""}</div></form></section></div>\`;
      host.querySelector(".modal").addEventListener("click", event => event.stopPropagation());
      host.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
      host.querySelector("#modalForm").addEventListener("submit", event => {
        event.preventDefault();
        onSubmit(new FormData(event.currentTarget));
      });
      if (focusFirstField) {
        const firstField = host.querySelector("input:not([type=file]), textarea, select");
        if (firstField) firstField.focus();
      }
    }

    function getStudentTeamsForUpload() {
      if (state.role !== "student") return [];
      const currentEmail = state.account?.email;
      return getTeams().filter(team => teamMembers(team).some(member => member.email === currentEmail));
    }

    function getOwnedStudentTeams() {
      if (state.role !== "student") return [];
      return getStudentTeamsForUpload().filter(team => team.ownerEmail === state.account.email);
    }

    function projectSharingSnapshot(project) {
      return JSON.stringify({
        name: project.name || "",
        description: project.description || "",
        note: project.note || "",
        fileName: project.fileName || "",
        attachmentVersion: project.attachmentVersion || 0,
        progress: project.progress || "not_started"
      });
    }

    function hasProjectBeenUploadedToTeam(project, teams = getOwnedStudentTeams()) {
      if (!project?.id) return false;
      const currentSnapshot = projectSharingSnapshot(project);
      return teams.some(team => (Array.isArray(team.projects) ? team.projects : []).some(teamProject => {
        if (teamProject.sharedFromProjectId !== project.id) return false;
        return (teamProject.sharedProjectSnapshot || projectSharingSnapshot(teamProject)) === currentSnapshot;
      }));
    }

    function uploadTypeSelectorMarkup() {
      return \`<div class="upload-type-picker"><button type="button" class="upload-type-option" data-select-personal-upload>Submit as individual</button><button type="button" class="upload-type-option" data-select-team-upload-flow>Submit as team</button></div>\`;
    }

    function teamUploadSelectorMarkup() {
      const teams = getStudentTeamsForUpload();
      if (!teams.length) return '<div class="empty-state">You haven’t joined a team yet. Create a team or accept an invitation first.<br><button class="text-button" type="button" data-go-to-teams>Go to My team &rarr;</button></div>';
      const accounts = getAccountRecords();
      return \`<div class="team-upload-picker"><label class="field-label">Select a team</label><div class="team-upload-option-list">\${teams.map(team => {
        const members = teamMembers(team);
        const memberNames = members.slice(0, 3).map(member => accounts[member.email]?.name || member.email).join(", ");
        const label = \`\${members.length} member\${members.length === 1 ? "" : "s"}\${memberNames ? \` · \${memberNames}\` : ""}\`;
        return \`<button type="button" class="team-upload-option" data-select-team-upload="\${escapeHtml(team.id)}"><span class="team-upload-avatar">\${escapeHtml(getInitials(team.name || "Team"))}</span><span class="team-upload-copy"><strong>\${escapeHtml(team.name)}</strong><span>\${escapeHtml(label)}</span></span></button>\`;
      }).join("")}</div></div>\`;
    }

    function personalUploadModal() {
      showModal("Upload a project", "Share your latest work with your teacher.", \`<label class="field-label" for="projectTitle">Project title</label><input class="field" id="projectTitle" name="title" placeholder="e.g. Final design prototype" required><label class="field-label" for="projectProgress">Project progress</label><select class="field" id="projectProgress" name="progress"><option value="not_started">Not started</option><option value="in_progress">In progress</option><option value="completed">Completed</option></select><label class="drop-zone" for="projectFile">\${icons.upload}<strong id="fileName">Choose a file or drag it here</strong><span>Any file type · Max 25 MB · Required when completed</span></label><input class="file-input" id="projectFile" name="file" type="file"><label class="field-label" for="projectNote">Note for your teacher <span style="color:#a0a5b5;font-weight:500">(optional)</span></label><textarea class="textarea" id="projectNote" name="note" placeholder="Anything you'd like your teacher to know?"></textarea>\`, "Submit project", async formData => {
        const title = String(formData.get("title") || "").trim();
        if (!title) return;
        const progress = String(formData.get("progress") || "");
        if (!isProjectProgress(progress)) { showToast("Choose a valid project progress."); return; }
        const file = formData.get("file");
        if (progress === "completed" && !file?.name) { showToast("Attach a project file to submit a completed project."); return; }
        if (file && file.size > 25 * 1024 * 1024) { showToast("Files must be 25 MB or smaller."); return; }
        const submittedAt = new Date().toISOString();
        const projectId = \`submission-\${Date.now()}-\${Math.random().toString(36).slice(2)}\`;
        if (file && file.name) {
          try { await saveSubmissionFile(projectId, file); }
          catch { showToast("The file could not be stored. Please try another file."); return; }
        }
        state.projects.unshift({ id: projectId, name: title, type: "Project submission", date: \`Submitted \${new Date(submittedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}\`, submittedAt, status: "In review", progress, color: "orange", fileName: file && file.name ? file.name : "", remark: "" });
        persistWorkspace();
        closeModal();
        render();
        showToast("Project submitted for teacher review!");
      });
      const fileInput = document.getElementById("projectFile");
      fileInput.addEventListener("change", () => {
        document.getElementById("fileName").textContent = fileInput.files.length ? fileInput.files[0].name : "Choose a file or drag it here";
      });
    }

    function uploadModal() {
      showModal("Upload a project", "Choose how you want to submit your project.", uploadTypeSelectorMarkup(), "", () => {});
    }

    function selectTeamForUploadModal() {
      showModal("Submit as team", "Select the team that will submit this project.", teamUploadSelectorMarkup(), "", () => {});
    }

    function uploadExistingProjectToTeam(projectIndex) {
      if (state.role !== "student" || !Number.isInteger(projectIndex) || !state.projects[projectIndex]) return;
      const teams = getOwnedStudentTeams();
      if (!teams.length) {
        showToast("Create a team before uploading a project to it.");
        return;
      }
      if (teams.length === 1) {
        shareExistingProjectWithTeam(projectIndex, teams[0].id);
        return;
      }
      const teamOptions = teams.map(team => \`<button type="button" class="team-upload-option" data-share-project-team="\${escapeHtml(team.id)}" data-share-project-index="\${projectIndex}"><span class="team-upload-avatar">\${escapeHtml(getInitials(team.name || "Team"))}</span><span class="team-upload-copy"><strong>\${escapeHtml(team.name)}</strong><span>\${teamMembers(team).length} members</span></span></button>\`).join("");
      showModal("Upload to team", "Choose which team should receive this project.", \`<div class="team-upload-option-list">\${teamOptions}</div>\`, "", () => {});
    }

    async function shareExistingProjectWithTeam(projectIndex, teamId) {
      if (state.role !== "student" || !Number.isInteger(projectIndex)) return;
      const project = state.projects[projectIndex];
      const team = findTeam(teamId);
      if (!project || !team || team.ownerEmail !== state.account.email || !teamMembers(team).some(member => member.email === state.account.email)) {
        showToast("This project or team is no longer available.");
        return;
      }
      if (!project.id) {
        project.id = \`submission-\${Date.now()}-\${Math.random().toString(36).slice(2)}\`;
        persistWorkspace();
      }
      if (hasProjectBeenUploadedToTeam(project, [team])) {
        showToast(\`This project is already shared with \${team.name}.\`);
        return;
      }
      const uploadKey = \`\${teamId}:\${project.id}\`;
      if (activeTeamProjectUploads.has(uploadKey)) {
        showToast(\`This project is already being uploaded to \${team.name}.\`);
        return;
      }
      activeTeamProjectUploads.add(uploadKey);
      try {
        await saveExistingProjectToTeam(project, teamId);
      } finally {
        activeTeamProjectUploads.delete(uploadKey);
      }
    }

    async function saveExistingProjectToTeam(project, teamId) {
      let team = findTeam(teamId);
      if (!team) {
        showToast("This team is no longer available.");
        return;
      }
      const sourceSnapshot = projectSharingSnapshot(project);
      const existingTeamProject = (team.projects || []).find(item => item.sharedFromProjectId === project.id);
      if (existingTeamProject && (existingTeamProject.sharedProjectSnapshot || projectSharingSnapshot(existingTeamProject)) === sourceSnapshot) {
        showToast(\`This project is already shared with \${team.name}.\`);
        return;
      }
      const teamProjectId = \`team-project-\${Date.now()}-\${Math.random().toString(36).slice(2)}\`;
      let sharedFileName = "";
      const cleanupTeamFileCopy = async () => {
        if (!sharedFileName) return true;
        try {
          await deleteSubmissionFiles([teamProjectId]);
          return true;
        } catch {
          return false;
        }
      };
      if (project.fileName) {
        if (!project.id) {
          showToast("The project file is unavailable. Attach it again before sharing.");
          return;
        }
        try {
          const stored = await readSubmissionFile(project.id);
          if (!stored?.file) {
            showToast("The project file is unavailable. Attach it again before sharing.");
            return;
          }
          const file = stored.file instanceof File ? stored.file : new File([stored.file], stored.name || project.fileName, { type: stored.type || stored.file.type || "application/octet-stream" });
          await saveSubmissionFile(teamProjectId, file);
          sharedFileName = stored.name || project.fileName;
        } catch {
          showToast("The project file could not be copied for the team.");
          return;
        }
      }

      const teams = getTeams();
      team = findTeam(teamId, teams);
      if (!team || team.ownerEmail !== state.account.email || !teamMembers(team).some(member => member.email === state.account.email)) {
        const cleaned = await cleanupTeamFileCopy();
        showToast(cleaned ? "This team is no longer available." : "This team is unavailable and the copied project file could not be cleaned up.");
        return;
      }
      team.projects = Array.isArray(team.projects) ? team.projects : [];
      const currentSharedProject = team.projects.find(item => item.sharedFromProjectId === project.id);
      if (currentSharedProject && (currentSharedProject.sharedProjectSnapshot || projectSharingSnapshot(currentSharedProject)) === sourceSnapshot) {
        const cleaned = await cleanupTeamFileCopy();
        showToast(cleaned ? \`This project is already shared with \${team.name}.\` : "The project is already shared, and the extra file copy could not be cleaned up.");
        return;
      }
      const submittedAt = new Date().toISOString();
      const sharedProject = {
        ...project,
        id: teamProjectId,
        type: "Project submission",
        date: \`Submitted \${new Date(submittedAt).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}\`,
        submittedAt,
        fileName: sharedFileName,
        submittedBy: state.account.email,
        sharedFromProjectId: project.id || "",
        sharedProjectSnapshot: sourceSnapshot
      };
      if (currentSharedProject) {
        team.projects = team.projects.filter(item => item !== currentSharedProject);
        sharedProject.sharedFromProjectId = currentSharedProject.sharedFromProjectId || project.id;
      }
      team.projects.unshift(sharedProject);
      try {
        saveTeams(teams);
      } catch {
        const cleaned = await cleanupTeamFileCopy();
        showToast(cleaned ? "The project could not be shared with the team. Please try again." : "The project could not be shared, and its copied file could not be cleaned up.");
        return;
      }
      if (currentSharedProject?.id && currentSharedProject.fileName) {
        try {
          await deleteSubmissionFiles([currentSharedProject.id]);
        } catch {
          closeModal();
          render();
          showToast(\`Project uploaded to \${team.name}, but the previous attachment could not be removed.\`);
          return;
        }
      }
      closeModal();
      render();
      showToast(\`Project uploaded to \${team.name}.\`);
    }

    function attachProjectFileModal(index) {
      const project = state.projects[index];
      if (!project) return;
      showModal("Upload a file", \`Attach a file to “\${escapeHtml(project.name)}”.\`, \`<label class="field-label" for="replacementFile">Choose project file</label><input class="field" id="replacementFile" name="file" type="file" required><p class="project-meta" style="margin-top:7px">Files up to 25 MB. Your teacher and team members can open or download this attachment.</p>\`, "Submit attachment", async formData => {
        const file = formData.get("file");
        if (!file?.name) { showToast("Choose a file to continue."); return; }
        if (file.size > 25 * 1024 * 1024) { showToast("Files must be 25 MB or smaller."); return; }
        const projectId = project.id || \`submission-\${Date.now()}-\${Math.random().toString(36).slice(2)}\`;
        try { await saveSubmissionFile(projectId, file); }
        catch { showToast("The file could not be stored. Please try another file."); return; }
        project.id = projectId;
        project.fileName = file.name;
        project.attachmentVersion = (project.attachmentVersion || 0) + 1;
        persistWorkspace();
        closeModal();
        render();
        showToast("Attachment submitted. Upload the project to your team again to share this update.");
      });
    }

    function editPersonalProjectModal(index) {
      const project = state.projects[index];
      if (!project) return;
      showModal("Edit project", "Update the project details before sharing the latest version with your team.", \`<label class="field-label" for="personalProjectName">Project name</label><input class="field" id="personalProjectName" name="name" maxlength="120" value="\${escapeHtml(project.name || "")}" required><label class="field-label" for="personalProjectDescription">Description</label><textarea class="textarea" id="personalProjectDescription" name="description" maxlength="2000" placeholder="Describe this project">\${escapeHtml(project.description || "")}</textarea>\`, "Save changes", formData => {
        const name = String(formData.get("name") || "").trim();
        if (!name) {
          showToast("Enter a project name.");
          return;
        }
        project.name = name;
        project.description = String(formData.get("description") || "").trim();
        persistWorkspace();
        closeModal();
        render();
        showToast("Project details updated. Upload the project to your team again to share the changes.");
      });
    }

    async function removePersonalProjectFile(index) {
      const project = state.projects[index];
      if (!project || !project.id || !project.fileName) return;
      try {
        await deleteSubmissionFiles([project.id]);
      } catch {
        showToast("Could not remove the project file.");
        return;
      }
      project.fileName = "";
      project.attachmentVersion = (project.attachmentVersion || 0) + 1;
      persistWorkspace();
      render();
      showToast("Project file removed. Upload the project to your team again to share this change.");
    }

    function questionModal() {
      showModal("Ask your teacher", "Your question will be shared with your teacher.", \`<label class="field-label" for="questionSubject">What’s your question about?</label><input class="field" id="questionSubject" name="subject" placeholder="A short summary" required><label class="field-label" for="questionDetails">Add some details</label><textarea class="textarea" id="questionDetails" name="details" placeholder="Tell your teacher what you need help with..." required></textarea>\`, "Send question", formData => {
        const subject = String(formData.get("subject") || "").trim();
        if (!subject) return;
        const details = String(formData.get("details") || "").trim();
        state.queries.unshift({ title: subject, details, submittedAt: new Date().toISOString(), meta: "Awaiting teacher reply", answered: false });
        persistWorkspace();
        closeModal();
        render();
        showToast("Your question was sent to your teacher.");
      });
    }

    function reviewModal(index) {
      const submission = state.role === "teacher" ? getStudentSubmissions()[index] : null;
      const project = submission ? submission : state.projects[index];
      if (!project) return;
      const subtitle = submission ? \`\${submission.studentName} · \${submission.type}\` : project.name;
      showModal("Review submission", subtitle, \`<label class="field-label" for="reviewStatus">Review status</label><select class="field" id="reviewStatus" name="status"><option \${project.status === "Approved" ? "selected" : ""}>Approved</option><option \${project.status === "In review" ? "selected" : ""}>In review</option><option \${project.status === "Needs changes" ? "selected" : ""}>Needs changes</option></select><label class="field-label" for="reviewRemark">Teacher remark</label><textarea class="textarea" id="reviewRemark" name="remark" placeholder="Share specific, constructive feedback...">\${project.remark ? escapeHtml(project.remark) : ""}</textarea>\`, "Save feedback", formData => {
        const status = String(formData.get("status"));
        const remark = String(formData.get("remark") || "").trim();
        if (submission) {
          const workspaceKey = \`ideaWorkspace:\${submission.ownerEmail}\`;
          const workspace = JSON.parse(localStorage.getItem(workspaceKey) || "null");
          if (workspace?.projects?.[submission.projectIndex]) {
            workspace.projects[submission.projectIndex].status = status;
            workspace.projects[submission.projectIndex].remark = remark;
            localStorage.setItem(workspaceKey, JSON.stringify(workspace));
          }
        } else {
          project.status = status;
          project.remark = remark;
          persistWorkspace();
        }
        closeModal();
        render();
        showToast("Feedback saved for the student.");
      });
    }

    function openQueryModal(index, ownerEmail = "") {
      const workspace = ownerEmail ? JSON.parse(localStorage.getItem(\`ideaWorkspace:\${ownerEmail}\`) || "null") : null;
      const query = ownerEmail ? workspace?.queries?.[index] : state.queries[index];
      if (!query) return;
      const teacherView = state.role === "teacher" && Boolean(ownerEmail);
      const studentName = teacherView ? getAccountRecords()[ownerEmail]?.name || "Student" : "";
      const body = \`<div class="query-detail-content"><h3 class="query-detail-label">Question</h3><div class="query-detail-text">\${escapeHtml(query.title)}</div><h3 class="query-detail-label">Details</h3><div class="query-detail-text">\${escapeHtml(query.details || "No additional details provided.")}</div>\${teacherView ? \`<label class="field-label" for="teacherReply">Your answer</label><textarea class="textarea" id="teacherReply" name="reply" placeholder="Write a helpful response..." required>\${query.response ? escapeHtml(query.response) : ""}</textarea>\` : \`<h3 class="query-detail-label">Teacher answer</h3><div class="query-detail-text answer">\${query.response ? escapeHtml(query.response) : "Your teacher has not replied yet."}</div>\`}</div>\`;
      showModal("Question details", teacherView ? \`Question from \${studentName}\` : query.meta || "Your question", body, teacherView ? (query.answered ? "Save answer" : "Send answer") : "Close", formData => {
        if (!teacherView) {
          closeModal();
          return;
        }
        const response = String(formData.get("reply") || "").trim();
        const currentWorkspace = JSON.parse(localStorage.getItem(\`ideaWorkspace:\${ownerEmail}\`) || "null");
        const currentQuery = currentWorkspace?.queries?.[index];
        if (!currentQuery) {
          showToast("This student question is no longer available.");
          closeModal();
          render();
          return;
        }
        currentQuery.response = response;
        currentQuery.answered = true;
        currentQuery.answeredAt = new Date().toISOString();
        currentQuery.answeredBy = state.account.name;
        currentQuery.meta = "Answered";
        localStorage.setItem(\`ideaWorkspace:\${ownerEmail}\`, JSON.stringify(currentWorkspace));
        closeModal();
        render();
        showToast("Your response was sent to the student.");
      }, false);
    }

    function editStudentQuery(index) {
      if (state.role !== "student" || !state.queries[index]) return;
      const query = state.queries[index];
      showModal("Edit your question", "Update the question you sent to your teacher.", \`<label class="field-label" for="editQuestionSubject">Question subject</label><input class="field" id="editQuestionSubject" name="subject" value="\${escapeHtml(query.title)}" required><label class="field-label" for="editQuestionDetails">Question details</label><textarea class="textarea" id="editQuestionDetails" name="details" required>\${escapeHtml(query.details || "")}</textarea>\`, "Save changes", formData => {
        const subject = String(formData.get("subject") || "").trim();
        const details = String(formData.get("details") || "").trim();
        if (!subject || !details) {
          showToast("Enter a subject and question details.");
          return;
        }
        const hadAnswer = query.answered;
        query.title = subject;
        query.details = details;
        if (hadAnswer) {
          query.response = "";
          query.answered = false;
          delete query.answeredAt;
          delete query.answeredBy;
          query.meta = "Awaiting teacher reply";
        }
        persistWorkspace();
        closeModal();
        render();
        showToast(hadAnswer ? "Question updated. The teacher can reply to the updated question." : "Question updated.");
      });
      const subjectInput = document.getElementById("editQuestionSubject");
      subjectInput.focus();
      subjectInput.setSelectionRange(subjectInput.value.length, subjectInput.value.length);
    }

    function deleteStudentQuery(index) {
      if (state.role !== "student" || !state.queries[index]) return;
      showModal("Delete question?", "This will permanently remove your question and its reply.", \`<p class="query-detail-text">\${escapeHtml(state.queries[index].title)}</p>\`, "Delete question", () => {
        if (!state.queries[index]) {
          closeModal();
          render();
          showToast("This question is no longer available.");
          return;
        }
        state.queries.splice(index, 1);
        persistWorkspace();
        closeModal();
        render();
        showToast("Question deleted.");
      });
    }

    document.addEventListener("click", event => {
      const pageButton = event.target.closest("[data-page]");
      if (pageButton) {
        if (state.role !== "student" && ["team-chat", "chat"].includes(pageButton.dataset.page)) return;
        state.page = pageButton.dataset.page;
        render();
        return;
      }
      const actionButton = event.target.closest("[data-action]");
      if (actionButton) {
        const action = actionButton.dataset.action;
        if (action === "upload") uploadModal();
        else if (action === "create-topic-project") createTopicProjectModal();
        else if (action === "create-team") createTeamModal();
        else if (action === "ask-question") questionModal();
        else if (action === "review-all") { state.page = "projects"; render(); }
        else if (action === "teacher-queries") showToast("Your student question inbox is up to date.");
        else if (action === "help") openHelpCenterModal();
        else if (action === "profile") editProfileModal();
        else if (action === "logout") {
          localStorage.removeItem("ideaSession");
          state.account = null;
          state.role = "student";
          state.projects = [];
          state.queries = [];
          state.page = "overview";
          state.projectSearch = "";
          state.activeTeamChatId = "";
          state.activeChatPeerEmail = "";
          const authForm = document.getElementById("authForm");
          if (authForm) authForm.reset();
          document.getElementById("accountRole").selectedIndex = 0;
          updateSignupFields();
          showLandingPage();
        }
        else if (action === "notifications") openNotificationsModal();
        return;
      }
      const editQueryButton = event.target.closest("[data-edit-query]");
      if (editQueryButton) {
        editStudentQuery(Number(editQueryButton.dataset.editQuery));
        return;
      }
      const deleteQueryButton = event.target.closest("[data-delete-query]");
      if (deleteQueryButton) {
        deleteStudentQuery(Number(deleteQueryButton.dataset.deleteQuery));
        return;
      }
      const editStudentAnswerButton = event.target.closest("[data-edit-student-answer]");
      if (editStudentAnswerButton) {
        openQueryModal(Number(editStudentAnswerButton.dataset.queryIndex), editStudentAnswerButton.dataset.editStudentAnswer);
        return;
      }
      const topicRow = event.target.closest("[data-topic-select]");
      if (topicRow) {
        selectDataTopic(topicRow);
        return;
      }
      const deleteProjectButton = event.target.closest("[data-delete-project]");
      if (deleteProjectButton) {
        const index = Number(deleteProjectButton.dataset.deleteProject);
        const project = state.projects[index];
        if (project) confirmProjectDeletion(project.name, () => deletePersonalProject(index));
        return;
      }
      const deleteTeamProjectButton = event.target.closest("[data-delete-team-project]");
      if (deleteTeamProjectButton) {
        const { deleteTeamProject: teamId, projectId, projectIndex } = deleteTeamProjectButton.dataset;
        const projects = findTeam(teamId)?.projects || [];
        const project = projectId ? projects.find(item => item.id === projectId) : projects[Number(projectIndex)];
        if (project) confirmProjectDeletion(project.name, () => deleteTeamProject(teamId, projectId, Number(projectIndex)));
        return;
      }
      const progressButton = event.target.closest("button[data-personal-project-progress], [data-team-project-progress]");
      if (progressButton) { updateProjectProgress(progressButton); return; }
      const reviewButton = event.target.closest("[data-review]");
      if (reviewButton) { reviewModal(Number(reviewButton.dataset.review)); return; }
      const openFileButton = event.target.closest("[data-open-file]");
      if (openFileButton) { openTeacherFile(Number(openFileButton.dataset.openFile)); return; }
      const downloadFileButton = event.target.closest("[data-download-file]");
      if (downloadFileButton) { downloadTeacherFile(Number(downloadFileButton.dataset.downloadFile)); return; }
      const openTeamFileButton = event.target.closest("[data-open-team-file]");
      if (openTeamFileButton) { openTeamProjectFile(openTeamFileButton.dataset.openTeamFile, openTeamFileButton.dataset.projectId); return; }
      const downloadTeamFileButton = event.target.closest("[data-download-team-file]");
      if (downloadTeamFileButton) { openTeamProjectFile(downloadTeamFileButton.dataset.downloadTeamFile, downloadTeamFileButton.dataset.projectId, true); return; }
      const editTeamButton = event.target.closest("[data-edit-team]");
      if (editTeamButton) { teamEditorModal(editTeamButton.dataset.editTeam); return; }
      const inviteTeamButton = event.target.closest("[data-invite-team]");
      if (inviteTeamButton) { inviteTeamMemberModal(inviteTeamButton.dataset.inviteTeam); return; }
      const deleteTeamButton = event.target.closest("[data-delete-team]");
      if (deleteTeamButton) {
        const team = findTeam(deleteTeamButton.dataset.deleteTeam);
        if (team) confirmTeamDeletion(team.name, () => deleteTeam(deleteTeamButton.dataset.deleteTeam));
        return;
      }
      const uploadTeamProjectButton = event.target.closest("[data-upload-team-project]");
      if (uploadTeamProjectButton) { uploadTeamProjectModal(uploadTeamProjectButton.dataset.uploadTeamProject); return; }
      const selectTeamUploadFlowButton = event.target.closest("[data-select-team-upload-flow]");
      if (selectTeamUploadFlowButton) { closeModal(); selectTeamForUploadModal(); return; }
      const goToTeamsButton = event.target.closest("[data-go-to-teams]");
      if (goToTeamsButton) { closeModal(); state.page = "teams"; render(); return; }
      const selectTeamUploadButton = event.target.closest("[data-select-team-upload]");
      if (selectTeamUploadButton) { closeModal(); uploadTeamProjectModal(selectTeamUploadButton.dataset.selectTeamUpload); return; }
      const selectPersonalUploadButton = event.target.closest("[data-select-personal-upload]");
      if (selectPersonalUploadButton) { closeModal(); personalUploadModal(); return; }
      const acceptTeamInviteButton = event.target.closest("[data-accept-team-invite]");
      if (acceptTeamInviteButton) { updateTeamInvitation(acceptTeamInviteButton.dataset.acceptTeamInvite, true); return; }
      const declineTeamInviteButton = event.target.closest("[data-decline-team-invite]");
      if (declineTeamInviteButton) { updateTeamInvitation(declineTeamInviteButton.dataset.declineTeamInvite, false); return; }
      const teamChatButton = event.target.closest("[data-select-team-chat]");
      if (teamChatButton && state.role === "student") {
        state.activeTeamChatId = teamChatButton.dataset.selectTeamChat;
        render();
        return;
      }
      const chatPeerButton = event.target.closest("[data-chat-peer]");
      if (chatPeerButton && state.role === "student") {
        state.activeChatPeerEmail = chatPeerButton.dataset.chatPeer;
        render();
        return;
      }
      const teamMemberButton = event.target.closest("[data-team-member]");
      if (teamMemberButton) {
        teamMemberProfileModal(teamMemberButton.dataset.teamMember);
        return;
      }
      const attachFileButton = event.target.closest("[data-attach-file]");
      if (attachFileButton) { attachProjectFileModal(Number(attachFileButton.dataset.attachFile)); return; }
      const editPersonalProjectButton = event.target.closest("[data-edit-personal-project]");
      if (editPersonalProjectButton) { editPersonalProjectModal(Number(editPersonalProjectButton.dataset.editPersonalProject)); return; }
      const removePersonalFileButton = event.target.closest("[data-remove-personal-file]");
      if (removePersonalFileButton) { removePersonalProjectFile(Number(removePersonalFileButton.dataset.removePersonalFile)); return; }
      const openPersonalFileButton = event.target.closest("[data-open-personal-file]");
      if (openPersonalFileButton) { openPersonalProjectFile(Number(openPersonalFileButton.dataset.openPersonalFile)); return; }
      const downloadPersonalFileButton = event.target.closest("[data-download-personal-file]");
      if (downloadPersonalFileButton) { openPersonalProjectFile(Number(downloadPersonalFileButton.dataset.downloadPersonalFile), true); return; }
      const shareProjectButton = event.target.closest("[data-share-project-to-team]");
      if (shareProjectButton) { uploadExistingProjectToTeam(Number(shareProjectButton.dataset.shareProjectToTeam)); return; }
      const shareProjectTeamButton = event.target.closest("[data-share-project-team]");
      if (shareProjectTeamButton) {
        closeModal();
        shareExistingProjectWithTeam(Number(shareProjectTeamButton.dataset.shareProjectIndex), shareProjectTeamButton.dataset.shareProjectTeam);
        return;
      }
      const teamProjectToggle = event.target.closest("[data-expand-team-project]");
      if (teamProjectToggle) { toggleProjectDetails(teamProjectToggle); return; }
      const expandProjectButton = event.target.closest("[data-expand-project]");
      if (expandProjectButton) {
        toggleProjectDetails(expandProjectButton);
        return;
      }
      const projectCard = event.target.closest("[data-project-card]");
      if (projectCard && !event.target.closest("button")) toggleProjectDetails(projectCard.querySelector("[data-expand-project]"));
      const teamDetailsButton = event.target.closest("[data-toggle-team-details]");
      if (teamDetailsButton) {
        const expanded = teamDetailsButton.getAttribute("aria-expanded") === "true";
        teamDetailsButton.setAttribute("aria-expanded", String(!expanded));
        document.getElementById(teamDetailsButton.getAttribute("aria-controls"))?.classList.toggle("hidden", expanded);
      }
      const studentQuery = event.target.closest("[data-open-student-query]");
      if (studentQuery) {
        openQueryModal(Number(studentQuery.dataset.queryIndex), studentQuery.dataset.openStudentQuery);
        return;
      }
      const ownQuery = event.target.closest("[data-open-query-index]");
      if (ownQuery) {
        openQueryModal(Number(ownQuery.dataset.openQueryIndex));
      }
    });
    document.addEventListener("change", event => {
      const progressSelect = event.target.closest("select[data-personal-project-progress]");
      if (progressSelect) updateProjectProgress(progressSelect);
      const attachmentInput = event.target.closest("input[name='attachment']");
      if (attachmentInput) {
        const file = attachmentInput.files && attachmentInput.files[0];
        const nameNode = attachmentInput.closest("label")?.querySelector("#chatAttachmentName");
        if (nameNode) nameNode.textContent = file ? file.name : "No file selected";
      }
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Enter" && event.target.matches("textarea[name='message']") && !event.shiftKey && !event.isComposing) {
        event.preventDefault();
        event.target.closest("[data-chat-form]")?.requestSubmit();
        return;
      }
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("button")) return;
      const topicRow = event.target.closest("[data-topic-select]");
      if (topicRow) {
        event.preventDefault();
        selectDataTopic(topicRow);
        return;
      }
      const studentQuery = event.target.closest("[data-open-student-query]");
      if (studentQuery) {
        event.preventDefault();
        openQueryModal(Number(studentQuery.dataset.queryIndex), studentQuery.dataset.openStudentQuery);
        return;
      }
      const ownQuery = event.target.closest("[data-open-query-index]");
      if (ownQuery) {
        event.preventDefault();
        openQueryModal(Number(ownQuery.dataset.openQueryIndex));
      }
    });
    document.addEventListener("submit", event => {
      const chatForm = event.target.closest("[data-chat-form]");
      if (!chatForm) return;
      event.preventDefault();
      const formData = new FormData(chatForm);
      const file = chatForm.querySelector("input[name='attachment']")?.files?.[0] || null;
      sendChatMessage(chatForm.dataset.chatKind, chatForm.dataset.chatTarget, formData.get("message"), file);
    });
    window.addEventListener("storage", event => {
      if ((state.role === "teacher" && event.key?.startsWith("ideaWorkspace:")) || ["ideaTeams", "ideaTeamChats", "ideaDirectChats"].includes(event.key)) render();
    });

    function getInitials(name) {
      return String(name || "").trim().split(/\\s+/).slice(0, 2).map(part => part[0] || "").join("").toUpperCase() || "?";
    }
    function toggleProjectDetails(toggleButton) {
      if (!toggleButton) return;
      const details = document.getElementById(toggleButton.getAttribute("aria-controls"));
      const expanded = toggleButton.getAttribute("aria-expanded") === "true";
      toggleButton.setAttribute("aria-expanded", String(!expanded));
      details?.classList.toggle("hidden", expanded);
    }
    function persistWorkspace() {
      if (!state.account) return;
      localStorage.setItem(\`ideaWorkspace:\${state.account.email}\`, JSON.stringify({ projects: state.projects, queries: state.queries }));
    }
    function openFileDatabase() {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open("IdeaProjectFiles", 1);
        request.onupgradeneeded = () => request.result.createObjectStore("files", { keyPath: "id" });
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    }
    async function saveSubmissionFile(id, file) {
      return saveSubmissionFiles([{ id, file }]);
    }
    async function saveSubmissionFiles(entries) {
      const db = await openFileDatabase();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction("files", "readwrite");
        const store = transaction.objectStore("files");
        entries.forEach(({ id, file }) => store.put({ id, file, name: file.name, type: file.type }));
        transaction.oncomplete = () => { db.close(); resolve(); };
        transaction.onerror = () => { db.close(); reject(transaction.error); };
        transaction.onabort = () => { db.close(); reject(transaction.error); };
      });
    }
    async function readSubmissionFile(id) {
      const db = await openFileDatabase();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction("files", "readonly");
        const request = transaction.objectStore("files").get(id);
        request.onsuccess = () => { db.close(); resolve(request.result || null); };
        request.onerror = () => { db.close(); reject(request.error); };
      });
    }
    async function openPersonalProjectFile(index, download = false) {
      const project = state.projects[index];
      if (!project?.id || !project.fileName) {
        showToast("This project has no attached file.");
        return;
      }
      const fileTab = download ? null : window.open("about:blank", "_blank");
      if (!download && !fileTab) {
        showToast("Allow pop-ups to open the attached file.");
        return;
      }
      try {
        const stored = await readSubmissionFile(project.id);
        if (!stored?.file) {
          fileTab?.close();
          showToast("The attached file is not available.");
          return;
        }
        const fileUrl = URL.createObjectURL(stored.file);
        if (download) {
          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = stored.name || project.fileName || "project-file";
          document.body.appendChild(link);
          link.click();
          link.remove();
          setTimeout(() => URL.revokeObjectURL(fileUrl), 60000);
        } else {
          fileTab.location.href = fileUrl;
        }
      } catch {
        fileTab?.close();
        showToast(download ? "Could not download the attached file." : "Could not open the attached file.");
      }
    }
    async function openTeacherFile(index) {
      const project = getStudentSubmissions()[index];
      if (!project?.id) { showToast("This submission has no stored attachment."); return; }
      const fileTab = window.open("about:blank", "_blank");
      if (!fileTab) { showToast("Allow pop-ups to open the attached file."); return; }
      try {
        const stored = await readSubmissionFile(project.id);
        if (!stored?.file) { fileTab.close(); showToast("The attached file is not available. Ask the student to attach it again."); return; }
        const fileUrl = URL.createObjectURL(stored.file);
        fileTab.location.href = fileUrl;
      } catch {
        fileTab.close();
        showToast("Could not open the attached file.");
      }
    }
    async function downloadTeacherFile(index) {
      const project = getStudentSubmissions()[index];
      if (!project?.id) { showToast("This submission has no stored attachment."); return; }
      try {
        const stored = await readSubmissionFile(project.id);
        if (!stored?.file) { showToast("The attached file is not available. Ask the student to attach it again."); return; }
        const fileUrl = URL.createObjectURL(stored.file);
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = stored.name || project.fileName || "project-file";
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(fileUrl), 60000);
      } catch {
        showToast("Could not download the attached file.");
      }
    }
    async function openTeamProjectFile(teamId, projectId, download = false) {
      if (state.role !== "teacher" && state.role !== "student") return;
      const team = findTeam(teamId);
      if (state.role === "student" && !teamMembers(team || {}).some(member => member.email === state.account?.email)) {
        showToast("You are not a member of this team.");
        return;
      }
      const project = team?.projects?.find(item => item.id === projectId);
      if (!project?.id) { showToast("This team submission has no stored attachment."); return; }
      const fileTab = download ? null : window.open("about:blank", "_blank");
      if (!download && !fileTab) { showToast("Allow pop-ups to open the attached file."); return; }
      try {
        const stored = await readSubmissionFile(project.id);
        if (!stored?.file) {
          fileTab?.close();
          showToast("The attached file is not available.");
          return;
        }
        const fileUrl = URL.createObjectURL(stored.file);
        if (download) {
          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = stored.name || project.fileName || "team-project-file";
          document.body.appendChild(link);
          link.click();
          link.remove();
          setTimeout(() => URL.revokeObjectURL(fileUrl), 60000);
        } else {
          fileTab.location.href = fileUrl;
        }
      } catch {
        fileTab?.close();
        showToast(download ? "Could not download the attached file." : "Could not open the attached file.");
      }
    }
    function applyTheme(theme) {
      const allowed = ["light", "night", "ambient"];
      const selected = allowed.includes(theme) ? theme : "light";
      document.documentElement.dataset.theme = selected;
      const icons = { light: "☼", night: "☾", ambient: "◐" };
      const labels = { light: "Light", night: "Dark", ambient: "Ambient" };
      document.getElementById("themeIcon").textContent = icons[selected];
      document.getElementById("themeToggle").setAttribute("aria-label", \`Color mode: \${labels[selected]}. Click to change mode.\`);
      document.getElementById("themeToggle").title = \`Color mode: \${labels[selected]} · Click to change\`;
      document.getElementById("authThemeSelect").value = selected;
      document.getElementById("landingThemeSelect").value = selected;
      document.querySelector('meta[name="theme-color"]').content = selected === "night" ? "#141a23" : selected === "ambient" ? "#f4ecdf" : "#f5f8fa";
      localStorage.setItem("ideaTheme", selected);
    }
    document.getElementById("authThemeSelect").addEventListener("change", event => applyTheme(event.target.value));
    document.getElementById("landingThemeSelect").addEventListener("change", event => applyTheme(event.target.value));
    document.getElementById("themeToggle").addEventListener("click", () => {
      const modes = ["light", "night", "ambient"];
      const labels = { light: "Light", night: "Dark", ambient: "Ambient" };
      const current = document.documentElement.dataset.theme || "light";
      const next = modes[(modes.indexOf(current) + 1) % modes.length];
      applyTheme(next);
      showToast(\`Entered \${labels[next]} mode\`);
    });
    applyTheme(localStorage.getItem("ideaTheme") || "light");

    let authMode = "signup";
    function setAuthMode(mode) {
      authMode = mode;
      const signup = mode === "signup";
      document.getElementById("signupFields").classList.toggle("hidden", !signup);
      document.getElementById("accountName").required = signup;
      updateSignupFields();
      document.getElementById("accountPassword").autocomplete = signup ? "new-password" : "current-password";
      document.getElementById("accountPassword").type = "password";
      document.getElementById("accountPassword").placeholder = signup ? "Create a password" : "Enter your password";
      document.getElementById("authTitle").textContent = signup ? "Start with a fresh account" : "Log in to your account";
      document.getElementById("authCopy").textContent = signup ? "Enter your own details to set up your student or teacher workspace." : "Enter the email and password you used when you created your account.";
      document.getElementById("authSubmit").textContent = signup ? "Submit" : "Log in";
      document.getElementById("signupTab").classList.toggle("active", signup);
      document.getElementById("loginTab").classList.toggle("active", !signup);
      document.getElementById("authError").textContent = "";
      document.getElementById("accountName").value = "";
      document.getElementById("accountDepartment").value = "";
      const departmentPicker = document.getElementById("accountDepartmentPicker");
      document.getElementById("accountDepartmentValue").textContent = "Choose your department";
      departmentPicker.open = false;
      document.getElementById("accountSection").value = "";
      document.getElementById("teacherSignInCode").value = "";
      document.getElementById("accountEmail").value = "";
      document.getElementById("accountPassword").value = "";
      updateSignupFields();
    }
    function updateSignupFields() {
      const signup = authMode === "signup";
      const isStudent = document.getElementById("accountRole").value === "student";
      const isTeacher = !isStudent;
      document.getElementById("studentSetupFields").classList.toggle("hidden", !isStudent || !signup);
      document.getElementById("teacherSetupFields").classList.toggle("hidden", !isTeacher || !signup);
      document.getElementById("accountSection").required = isStudent && signup;
      document.getElementById("teacherSignInCode").required = isTeacher && signup;
    }
    function showLandingPage() {
      document.querySelector(".app-shell").classList.add("hidden");
      document.getElementById("authScreen").classList.add("hidden");
      document.getElementById("landingPage").classList.remove("hidden");
      document.getElementById("accountRole").selectedIndex = 0;
      setAuthMode("signup");
      window.scrollTo(0, 0);
    }
    function openAuthScreen(mode) {
      document.getElementById("landingPage").classList.add("hidden");
      const authScreen = document.getElementById("authScreen");
      authScreen.classList.remove("hidden");
      authScreen.scrollTop = 0;
      setAuthMode(mode);
      document.getElementById(mode === "signup" ? "accountName" : "accountEmail").focus();
    }
    async function passwordDigest(value) {
      const bytes = new TextEncoder().encode(value);
      const digest = await crypto.subtle.digest("SHA-256", bytes);
      return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, "0")).join("");
    }
    document.getElementById("signupTab").addEventListener("click", () => setAuthMode("signup"));
    document.getElementById("loginTab").addEventListener("click", () => setAuthMode("login"));
    document.getElementById("landingSignupButton").addEventListener("click", () => openAuthScreen("signup"));
    document.getElementById("landingLoginButton").addEventListener("click", () => openAuthScreen("login"));
    document.getElementById("landingHeaderSignupButton").addEventListener("click", () => openAuthScreen("signup"));
    document.getElementById("authBackButton").addEventListener("click", showLandingPage);
    document.getElementById("accountRole").addEventListener("change", updateSignupFields);
    document.getElementById("accountAcademicFields").innerHTML = academicFieldsMarkup("account", "", "");
    document.getElementById("accountAcademicFields").addEventListener("click", event => {
      const option = event.target.closest(".department-option");
      if (!option) return;
      const picker = document.getElementById("accountDepartmentPicker");
      document.getElementById("accountDepartment").value = option.dataset.value;
      document.getElementById("accountDepartmentValue").textContent = option.textContent;
      picker.open = false;
      picker.querySelector("summary").focus();
    });
    updateSignupFields();
    document.getElementById("authForm").addEventListener("submit", async event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const email = String(form.get("email") || "").trim().toLowerCase();
      const password = String(form.get("password") || "");
      const error = document.getElementById("authError");
      if (!email || !password) { error.textContent = "Enter your email and password to continue."; return; }
      const accounts = JSON.parse(localStorage.getItem("ideaAccounts") || "{}");
      if (authMode === "signup") {
        const name = String(form.get("name") || "").trim();
        if (!name) { error.textContent = "Enter your name to create an account."; return; }
        if (accounts[email]) { error.textContent = "An account with this email already exists. Choose Log in."; return; }
        const role = String(form.get("role") || "student");
        if (role === "teacher" && String(form.get("teacherSignInCode") || "") !== "Mentor-VEC") {
          error.textContent = "Enter the correct teacher sign-in code.";
          return;
        }
        const department = String(form.get("accountDepartment") || "");
        const section = String(form.get("accountSection") || "");
        if (role === "student" && (!engineeringDepartments.includes(department) || !engineeringSections.includes(section))) {
          error.textContent = "Choose a department and section to create your student account.";
          return;
        }
        accounts[email] = { name, email, role, ...(role === "teacher" ? { post: "Administrator" } : {}), department: role === "student" ? department : "", section: role === "student" ? section : "", passwordHash: await passwordDigest(password) };
        localStorage.setItem("ideaAccounts", JSON.stringify(accounts));
        localStorage.setItem("ideaSession", email);
      } else {
        const account = accounts[email];
        if (!account || account.passwordHash !== await passwordDigest(password)) { error.textContent = "We couldn’t find a matching account. Check your details or create an account."; return; }
        localStorage.setItem("ideaSession", email);
      }
      const current = accounts[email];
      state.account = { name: current.name, email: current.email, role: current.role, avatar: current.avatar || "", ...(current.role === "teacher" ? { post: current.post || "Administrator" } : {}), department: current.department || "", section: current.section || "" };
      state.role = current.role;
      state.page = "overview";
      state.activeTeamChatId = "";
      state.activeChatPeerEmail = "";
      state.projects = [];
      state.queries = [];
      const workspace = JSON.parse(localStorage.getItem(\`ideaWorkspace:\${email}\`) || "null");
      if (workspace) {
        state.projects = workspace.projects || [];
        state.queries = workspace.queries || [];
      } else persistWorkspace();
      render();
    });
    if (savedAccount && activeEmail === savedAccount.email) render();
  <\/script>
</body>
</html>
`,b=o((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n})),ee=o(((e,t)=>{t.exports=b()}))();function te(){return(0,ee.jsx)(`iframe`,{className:`idea-app-frame`,title:`Node Theory`,srcDoc:y})}(0,v.createRoot)(document.getElementById(`root`)).render((0,ee.jsx)(_.StrictMode,{children:(0,ee.jsx)(te,{})}));