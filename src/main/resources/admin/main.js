var PluginTemplate=function(h,lr,be){"use strict";function cr(t){return t}var Z={exports:{}},ne=function(e,r){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(r,n)}},ze=ne,G=Object.prototype.toString,B=function(t){return function(e){var r=G.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function m(t){return t=t.toLowerCase(),function(r){return B(r)===t}}function _(t){return Array.isArray(t)}function b(t){return typeof t=="undefined"}function Re(t){return t!==null&&!b(t)&&t.constructor!==null&&!b(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var ie=m("ArrayBuffer");function Ue(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&ie(t.buffer),e}function Ye(t){return typeof t=="string"}function ke(t){return typeof t=="number"}function se(t){return t!==null&&typeof t=="object"}function z(t){if(B(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var We=m("Date"),Pe=m("File"),Ze=m("Blob"),Ge=m("FileList");function H(t){return G.call(t)==="[object Function]"}function Be(t){return se(t)&&H(t.pipe)}function _e(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||G.call(t)===e||H(t.toString)&&t.toString()===e)}var He=m("URLSearchParams");function Ve(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Fe(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function V(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),_(t))for(var r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function F(){var t={};function e(n,s){z(t[s])&&z(n)?t[s]=F(t[s],n):z(n)?t[s]=F({},n):_(n)?t[s]=n.slice():t[s]=n}for(var r=0,i=arguments.length;r<i;r++)V(arguments[r],e);return t}function Qe(t,e,r){return V(e,function(n,s){r&&typeof n=="function"?t[s]=ze(n,r):t[s]=n}),t}function $e(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function Je(t,e,r,i){t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function Xe(t,e,r){var i,n,s,a={};e=e||{};do{for(i=Object.getOwnPropertyNames(t),n=i.length;n-- >0;)s=i[n],a[s]||(e[s]=t[s],a[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function qe(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var i=t.indexOf(e,r);return i!==-1&&i===r}function Ke(t){if(!t)return null;var e=t.length;if(b(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var et=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),f={isArray:_,isArrayBuffer:ie,isBuffer:Re,isFormData:_e,isArrayBufferView:Ue,isString:Ye,isNumber:ke,isObject:se,isPlainObject:z,isUndefined:b,isDate:We,isFile:Pe,isBlob:Ze,isFunction:H,isStream:Be,isURLSearchParams:He,isStandardBrowserEnv:Fe,forEach:V,merge:F,extend:Qe,trim:Ve,stripBOM:$e,inherits:Je,toFlatObject:Xe,kindOf:B,kindOfTest:m,endsWith:qe,toArray:Ke,isTypedArray:et,isFileList:Ge},D=f;function ae(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var oe=function(e,r,i){if(!r)return e;var n;if(i)n=i(r);else if(D.isURLSearchParams(r))n=r.toString();else{var s=[];D.forEach(r,function(l,d){l===null||typeof l=="undefined"||(D.isArray(l)?d=d+"[]":l=[l],D.forEach(l,function(c){D.isDate(c)?c=c.toISOString():D.isObject(c)&&(c=JSON.stringify(c)),s.push(ae(d)+"="+ae(c))}))}),n=s.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},tt=f;function R(){this.handlers=[]}R.prototype.use=function(e,r,i){return this.handlers.push({fulfilled:e,rejected:r,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1},R.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},R.prototype.forEach=function(e){tt.forEach(this.handlers,function(i){i!==null&&e(i)})};var rt=R,nt=f,it=function(e,r){nt.forEach(e,function(n,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[s])})},ue=f;function C(t,e,r,i,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),i&&(this.request=i),n&&(this.response=n)}ue.inherits(C,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var le=C.prototype,ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){ce[t]={value:t}}),Object.defineProperties(C,ce),Object.defineProperty(le,"isAxiosError",{value:!0}),C.from=function(t,e,r,i,n,s){var a=Object.create(le);return ue.toFlatObject(t,a,function(l){return l!==Error.prototype}),C.call(a,t.message,e,r,i,n),a.name=t.name,s&&Object.assign(a,s),a};var O=C,Me={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},I=f;function st(t,e){e=e||new FormData;var r=[];function i(s){return s===null?"":I.isDate(s)?s.toISOString():I.isArrayBuffer(s)||I.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(I.isPlainObject(s)||I.isArray(s)){if(r.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);r.push(s),I.forEach(s,function(l,d){if(!I.isUndefined(l)){var o=a?a+"."+d:d,c;if(l&&!a&&typeof l=="object"){if(I.endsWith(d,"{}"))l=JSON.stringify(l);else if(I.endsWith(d,"[]")&&(c=I.toArray(l))){c.forEach(function(p){!I.isUndefined(p)&&e.append(o,i(p))});return}}n(l,o)}}),r.pop()}else e.append(a,i(s))}return n(t),e}var fe=st,Q=O,at=function(e,r,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):r(new Q("Request failed with status code "+i.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))},U=f,ot=U.isStandardBrowserEnv()?function(){return{write:function(r,i,n,s,a,u){var l=[];l.push(r+"="+encodeURIComponent(i)),U.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),U.isString(s)&&l.push("path="+s),U.isString(a)&&l.push("domain="+a),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(r){var i=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ut=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},lt=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},ct=ut,Mt=lt,de=function(e,r){return e&&!ct(r)?Mt(e,r):r},$=f,ft=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],dt=function(e){var r={},i,n,s;return e&&$.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),i=$.trim(u.substr(0,s)).toLowerCase(),n=$.trim(u.substr(s+1)),i){if(r[i]&&ft.indexOf(i)>=0)return;i==="set-cookie"?r[i]=(r[i]?r[i]:[]).concat([n]):r[i]=r[i]?r[i]+", "+n:n}}),r},Ne=f,Nt=Ne.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),i;function n(s){var a=s;return e&&(r.setAttribute("href",a),a=r.href),r.setAttribute("href",a),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return i=n(window.location.href),function(a){var u=Ne.isString(a)?n(a):a;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}(),J=O,Lt=f;function Le(t){J.call(this,t==null?"canceled":t,J.ERR_CANCELED),this.name="CanceledError"}Lt.inherits(Le,J,{__CANCEL__:!0});var Y=Le,jt=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""},x=f,pt=at,It=ot,Tt=oe,wt=de,ht=dt,yt=Nt,mt=Me,w=O,vt=Y,Dt=jt,je=function(e){return new Promise(function(i,n){var s=e.data,a=e.headers,u=e.responseType,l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}x.isFormData(s)&&x.isStandardBrowserEnv()&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(c+":"+p)}var N=wt(e.baseURL,e.url);o.open(e.method.toUpperCase(),Tt(N,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function Se(){if(!!o){var T="getAllResponseHeaders"in o?ht(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,v={data:S,status:o.status,statusText:o.statusText,headers:T,config:e,request:o};pt(function(re){i(re),d()},function(re){n(re),d()},v),o=null}}if("onloadend"in o?o.onloadend=Se:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(Se)},o.onabort=function(){!o||(n(new w("Request aborted",w.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",v=e.transitional||mt;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(new w(S,v.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,o)),o=null},x.isStandardBrowserEnv()){var xe=(e.withCredentials||yt(N))&&e.xsrfCookieName?It.read(e.xsrfCookieName):void 0;xe&&(a[e.xsrfHeaderName]=xe)}"setRequestHeader"in o&&x.forEach(a,function(S,v){typeof s=="undefined"&&v.toLowerCase()==="content-type"?delete a[v]:o.setRequestHeader(v,S)}),x.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(T){!o||(n(!T||T&&T.type?new vt:T),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null);var te=Dt(N);if(te&&["http","https","file"].indexOf(te)===-1){n(new w("Unsupported protocol "+te+":",w.ERR_BAD_REQUEST,e));return}o.send(s)})},Ct=null,M=f,pe=it,Ie=O,Ot=Me,Et=fe,At={"Content-Type":"application/x-www-form-urlencoded"};function Te(t,e){!M.isUndefined(t)&&M.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function gt(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=je),t}function St(t,e,r){if(M.isString(t))try{return(e||JSON.parse)(t),M.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(r||JSON.stringify)(t)}var k={transitional:Ot,adapter:gt(),transformRequest:[function(e,r){if(pe(r,"Accept"),pe(r,"Content-Type"),M.isFormData(e)||M.isArrayBuffer(e)||M.isBuffer(e)||M.isStream(e)||M.isFile(e)||M.isBlob(e))return e;if(M.isArrayBufferView(e))return e.buffer;if(M.isURLSearchParams(e))return Te(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=M.isObject(e),n=r&&r["Content-Type"],s;if((s=M.isFileList(e))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Et(s?{"files[]":e}:e,a&&new a)}else if(i||n==="application/json")return Te(r,"application/json"),St(e);return e}],transformResponse:[function(e){var r=this.transitional||k.transitional,i=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&M.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?Ie.from(a,Ie.ERR_BAD_RESPONSE,this,null,this.response):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ct},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};M.forEach(["delete","get","head"],function(e){k.headers[e]={}}),M.forEach(["post","put","patch"],function(e){k.headers[e]=M.merge(At)});var X=k,xt=f,bt=X,zt=function(e,r,i){var n=this||bt;return xt.forEach(i,function(a){e=a.call(n,e,r)}),e},we=function(e){return!!(e&&e.__CANCEL__)},he=f,q=zt,Rt=we,Ut=X,Yt=Y;function K(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Yt}var kt=function(e){K(e),e.headers=e.headers||{},e.data=q.call(e,e.data,e.headers,e.transformRequest),e.headers=he.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),he.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||Ut.adapter;return r(e).then(function(n){return K(e),n.data=q.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Rt(n)||(K(e),n&&n.response&&(n.response.data=q.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},j=f,ye=function(e,r){r=r||{};var i={};function n(o,c){return j.isPlainObject(o)&&j.isPlainObject(c)?j.merge(o,c):j.isPlainObject(c)?j.merge({},c):j.isArray(c)?c.slice():c}function s(o){if(j.isUndefined(r[o])){if(!j.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],r[o])}function a(o){if(!j.isUndefined(r[o]))return n(void 0,r[o])}function u(o){if(j.isUndefined(r[o])){if(!j.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,r[o])}function l(o){if(o in r)return n(e[o],r[o]);if(o in e)return n(void 0,e[o])}var d={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return j.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var p=d[c]||s,N=p(c);j.isUndefined(N)&&p!==l||(i[c]=N)}),i},me={version:"0.27.2"},Wt=me.version,y=O,ee={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){ee[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});var ve={};ee.transitional=function(e,r,i){function n(s,a){return"[Axios v"+Wt+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,u){if(e===!1)throw new y(n(a," has been removed"+(r?" in "+r:"")),y.ERR_DEPRECATED);return r&&!ve[a]&&(ve[a]=!0,console.warn(n(a," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(s,a,u):!0}};function Pt(t,e,r){if(typeof t!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(t),n=i.length;n-- >0;){var s=i[n],a=e[s];if(a){var u=t[s],l=u===void 0||a(u,s,t);if(l!==!0)throw new y("option "+s+" must be "+l,y.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new y("Unknown option "+s,y.ERR_BAD_OPTION)}}var Zt={assertOptions:Pt,validators:ee},De=f,Gt=oe,Ce=rt,Oe=kt,W=ye,Bt=de,Ee=Zt,E=Ee.validators;function A(t){this.defaults=t,this.interceptors={request:new Ce,response:new Ce}}A.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=W(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var i=r.transitional;i!==void 0&&Ee.assertOptions(i,{silentJSONParsing:E.transitional(E.boolean),forcedJSONParsing:E.transitional(E.boolean),clarifyTimeoutError:E.transitional(E.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(N){typeof N.runWhen=="function"&&N.runWhen(r)===!1||(s=s&&N.synchronous,n.unshift(N.fulfilled,N.rejected))});var a=[];this.interceptors.response.forEach(function(N){a.push(N.fulfilled,N.rejected)});var u;if(!s){var l=[Oe,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(a),u=Promise.resolve(r);l.length;)u=u.then(l.shift(),l.shift());return u}for(var d=r;n.length;){var o=n.shift(),c=n.shift();try{d=o(d)}catch(p){c(p);break}}try{u=Oe(d)}catch(p){return Promise.reject(p)}for(;a.length;)u=u.then(a.shift(),a.shift());return u},A.prototype.getUri=function(e){e=W(this.defaults,e);var r=Bt(e.baseURL,e.url);return Gt(r,e.params,e.paramsSerializer)},De.forEach(["delete","get","head","options"],function(e){A.prototype[e]=function(r,i){return this.request(W(i||{},{method:e,url:r,data:(i||{}).data}))}}),De.forEach(["post","put","patch"],function(e){function r(i){return function(s,a,u){return this.request(W(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}A.prototype[e]=r(),A.prototype[e+"Form"]=r(!0)});var _t=A,Ht=Y;function g(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(i){if(!!r._listeners){var n,s=r._listeners.length;for(n=0;n<s;n++)r._listeners[n](i);r._listeners=null}}),this.promise.then=function(i){var n,s=new Promise(function(a){r.subscribe(a),n=a}).then(i);return s.cancel=function(){r.unsubscribe(n)},s},t(function(n){r.reason||(r.reason=new Ht(n),e(r.reason))})}g.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},g.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]},g.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}},g.source=function(){var e,r=new g(function(n){e=n});return{token:r,cancel:e}};var Vt=g,Ft=function(e){return function(i){return e.apply(null,i)}},Qt=f,$t=function(e){return Qt.isObject(e)&&e.isAxiosError===!0},Ae=f,Jt=ne,P=_t,Xt=ye,qt=X;function ge(t){var e=new P(t),r=Jt(P.prototype.request,e);return Ae.extend(r,P.prototype,e),Ae.extend(r,e),r.create=function(n){return ge(Xt(t,n))},r}var L=ge(qt);L.Axios=P,L.CanceledError=Y,L.CancelToken=Vt,L.isCancel=we,L.VERSION=me.version,L.toFormData=fe,L.AxiosError=O,L.Cancel=L.CanceledError,L.all=function(e){return Promise.all(e)},L.spread=Ft,L.isAxiosError=$t,Z.exports=L,Z.exports.default=L;var Kt=Z.exports;Kt.create({baseURL:"http://localhost:8090",withCredentials:!0}).interceptors.response.use(t=>t,async t=>(console.log("error",t),t.response.status===401&&(window.location.href="/#/login"),Promise.reject(t)));var er="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMTQ0IDg3NyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7Ij48cGF0aCBkPSJNMTAyOC4xNiwzMzkuMzMxYzE0OC4yNDksMCAyNjguNjA5LDEyMC4zNiAyNjguNjA5LDI2OC42MDljLTAsMTQ4LjI0OSAtMTIwLjM2LDI2OC42MDggLTI2OC42MDksMjY4LjYwOGMtMTQ4LjI0OSwwIC0yNjguNjA4LC0xMjAuMzU5IC0yNjguNjA4LC0yNjguNjA4Yy0wLC0xNDguMjQ5IDEyMC4zNTksLTI2OC42MDkgMjY4LjYwOCwtMjY4LjYwOVptMCwxMTkuMTUyYzgyLjQ4OCwwIDE0OS40NTcsNjYuOTY5IDE0OS40NTcsMTQ5LjQ1N2MtMCw4Mi40ODcgLTY2Ljk2OSwxNDkuNDU2IC0xNDkuNDU3LDE0OS40NTZjLTgyLjQ4NywwIC0xNDkuNDU2LC02Ni45NjkgLTE0OS40NTYsLTE0OS40NTZjLTAsLTgyLjQ4OCA2Ni45NjksLTE0OS40NTcgMTQ5LjQ1NiwtMTQ5LjQ1N1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjEpOyIvPjxwYXRoIGQ9Ik0xODc0LjU4LDMzOS4zMzFjMTQ4LjI0OSwwIDI2OC42MDgsMTIwLjM2IDI2OC42MDgsMjY4LjYwOWMwLDE0OC4yNDkgLTEyMC4zNTksMjY4LjYwOCAtMjY4LjYwOCwyNjguNjA4Yy0xNDguMjQ5LDAgLTI2OC42MDksLTEyMC4zNTkgLTI2OC42MDksLTI2OC42MDhjMCwtMTQ4LjI0OSAxMjAuMzYsLTI2OC42MDkgMjY4LjYwOSwtMjY4LjYwOVptLTAsMTE5LjE1MmM4Mi40ODcsMCAxNDkuNDU2LDY2Ljk2OSAxNDkuNDU2LDE0OS40NTdjMCw4Mi40ODcgLTY2Ljk2OSwxNDkuNDU2IC0xNDkuNDU2LDE0OS40NTZjLTgyLjQ4OCwwIC0xNDkuNDU3LC02Ni45NjkgLTE0OS40NTcsLTE0OS40NTZjMCwtODIuNDg4IDY2Ljk2OSwtMTQ5LjQ1NyAxNDkuNDU3LC0xNDkuNDU3WiIgc3R5bGU9ImZpbGw6dXJsKCNfTGluZWFyMik7Ii8+PHBhdGggZD0iTTEzMDkuMjcsMzc3LjU4NWMtMCwtMTAuMDgzIC03LjIyMiwtMTguNzE5IC0xNy4xNDYsLTIwLjUwNGMtMTkuNjE4LC0zLjUyOCAtNTEuOSwtOS4zMzQgLTc0LjE3MiwtMTMuMzRjLTYuMDczLC0xLjA5MiAtMTIuMzE4LDAuNTY0IC0xNy4wNTIsNC41MjJjLTQuNzM0LDMuOTU5IC03LjQ2OSw5LjgxMiAtNy40NjksMTUuOTgzYy0wLDkxLjM3NCAtMCw0MDcuMTUzIC0wLDQ5MS40NjljLTAsNS41MjUgMi4xOTUsMTAuODI0IDYuMTAyLDE0LjczMWMzLjkwNywzLjkwNyA5LjIwNiw2LjEwMiAxNC43MzEsNi4xMDJjMjAuOTg3LDAgNTMuMTg2LDAgNzQuMTczLDBjNS41MjUsMCAxMC44MjQsLTIuMTk1IDE0LjczMSwtNi4xMDJjMy45MDcsLTMuOTA3IDYuMTAyLC05LjIwNiA2LjEwMiwtMTQuNzMxYy0wLC04NC40MjUgLTAsLTQwMC4yODYgLTAsLTQ3OC4xM1oiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjMpOyIvPjxwYXRoIGQ9Ik0xNTQyLjU5LDcyLjAzM2MwLC04LjI4OCAtMy4yOTIsLTE2LjIzNyAtOS4xNTMsLTIyLjA5N2MtNS44NiwtNS44NjEgLTEzLjgwOSwtOS4xNTMgLTIyLjA5NywtOS4xNTNjLTIzLjg2NywtMCAtNTYuNjA5LC0wIC04MC40NzcsLTBjLTguMjg4LC0wIC0xNi4yMzYsMy4yOTIgLTIyLjA5Nyw5LjE1M2MtNS44Niw1Ljg2IC05LjE1MywxMy44MDkgLTkuMTUzLDIyLjA5N2MwLDEzMS43OSAwLDY0MS40NzUgMCw3NzMuMjY1YzAsOC4yODggMy4yOTMsMTYuMjM3IDkuMTUzLDIyLjA5N2M1Ljg2MSw1Ljg2MSAxMy44MDksOS4xNTMgMjIuMDk3LDkuMTUzYzIzLjg2OCwwIDU2LjYxLDAgODAuNDc3LDBjOC4yODgsMCAxNi4yMzcsLTMuMjkyIDIyLjA5NywtOS4xNTNjNS44NjEsLTUuODYgOS4xNTMsLTEzLjgwOSA5LjE1MywtMjIuMDk3YzAsLTEzMS43OSAwLC02NDEuNDc1IDAsLTc3My4yNjVaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI0KTtmaWxsLXJ1bGU6bm9uemVybzsiLz48Zz48cGF0aCBkPSJNNTA2LjQwOSw4MjIuMDYzYy0wLDEzLjgxNSA1LjQ5NCwyNy4wNjIgMTUuMjcxLDM2LjgyMWM5Ljc3Nyw5Ljc2IDIzLjAzNCwxNS4yMyAzNi44NDgsMTUuMjA2YzE4LjY3NCwtMC4wMzQgMzkuNzExLC0wLjA3MiA1OC4zNjksLTAuMTA1YzI4LjY5NiwtMC4wNTIgNTEuOTMyLC0yMy4zMjkgNTEuOTMyLC01Mi4wMjZsMCwtNzY5LjU4NmMwLC0xMy43OTggLTUuNDgxLC0yNy4wMzEgLTE1LjIzOCwtMzYuNzg4Yy05Ljc1NiwtOS43NTcgLTIyLjk5LC0xNS4yMzggLTM2Ljc4OCwtMTUuMjM4bC01OC4zNjgsLTBjLTEzLjc5OCwtMCAtMjcuMDMxLDUuNDgxIC0zNi43ODgsMTUuMjM4Yy05Ljc1Nyw5Ljc1NyAtMTUuMjM4LDIyLjk5IC0xNS4yMzgsMzYuNzg4Yy0wLDE1NS4yODYgLTAsNjE0LjI4MyAtMCw3NjkuNjlaIiBzdHlsZT0iZmlsbDp1cmwoI19MaW5lYXI1KTtmaWxsLXJ1bGU6bm9uemVybzsiLz48cGF0aCBkPSJNNjE2Ljc0NiwzMjIuNjYyYzEzLjgxMywwIDI3LjA2MSw1LjQ4NyAzNi44MjksMTUuMjU1YzkuNzY3LDkuNzY4IDE1LjI1NCwyMy4wMTUgMTUuMjU0LDM2LjgyOWMwLDEwNS4xODUgMCwzNDEuODc3IDAsNDQ3LjA2MmMwLDEzLjgxNCAtNS40ODcsMjcuMDYxIC0xNS4yNTQsMzYuODI5Yy05Ljc2OCw5Ljc2NyAtMjMuMDE2LDE1LjI1NSAtMzYuODI5LDE1LjI1NWMtMTguNjMyLC0wIC0zOS42MjIsLTAgLTU4LjI1NCwtMGMtMTMuODEzLC0wIC0yNy4wNjEsLTUuNDg4IC0zNi44MjgsLTE1LjI1NWMtOS43NjgsLTkuNzY4IC0xNS4yNTUsLTIzLjAxNSAtMTUuMjU1LC0zNi44MjljLTAsLTY4LjIyMyAtMCwtMTg3LjE1OSAtMCwtMjU1LjM4M2MtMCwtMTMuODEzIC01LjQ4NywtMjcuMDYxIC0xNS4yNTUsLTM2LjgyOGMtOS43NjcsLTkuNzY4IC0yMy4wMTUsLTE1LjI1NSAtMzYuODI4LC0xNS4yNTVjLTEyOS4yNDksLTAgLTQ1NC4zMjYsLTAgLTQ1NC4zMjYsLTBsMCwtMTkxLjY4bDYxNi43NDYsMFoiIHN0eWxlPSJmaWxsOiMwMDUxYjA7ZmlsbC1ydWxlOm5vbnplcm87Ii8+PHBhdGggZD0iTS0wLDgyMi4xMDFjMCwxMy44MTcgNS40OTcsMjcuMDY3IDE1LjI3NywzNi44MjdjOS43ODEsOS43NiAyMy4wNDMsMTUuMjI5IDM2Ljg2LDE1LjE5OWMxOC42NzUsLTAuMDQgMzkuNzEzLC0wLjA4NSA1OC4zNjgsLTAuMTI0YzI4LjY5LC0wLjA2MiA1MS45MTYsLTIzLjMzNyA1MS45MTYsLTUyLjAyN2MtMCwtMTU1LjIwNSAtMCwtNjE0LjUwOSAtMCwtNzY5LjcxNGMtMCwtMjguNjkgLTIzLjIyNiwtNTEuOTY1IC01MS45MTYsLTUyLjAyNmMtMTguNjU1LC0wLjA0IC0zOS42OTMsLTAuMDg1IC01OC4zNjgsLTAuMTI1Yy0xMy44MTcsLTAuMDI5IC0yNy4wNzksNS40MzkgLTM2Ljg2LDE1LjE5OWMtOS43OCw5Ljc2IC0xNS4yNzcsMjMuMDEgLTE1LjI3NywzNi44MjdsLTAsNzY5Ljk2NFoiIHN0eWxlPSJmaWxsOnVybCgjX0xpbmVhcjYpO2ZpbGwtcnVsZTpub256ZXJvOyIvPjwvZz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXIxIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS4xOTgxNGUtMTQsLTg0OC45MjEsODQ4LjkyMSw1LjE5ODE0ZS0xNCwxMzA4LjgsODc1LjM5NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTBiNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzBiODdmZDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyMiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUuMTk4MTRlLTE0LC04NDguOTIxLDg0OC45MjEsNS4xOTgxNGUtMTQsMTMwOC44LDg3NS4zOTcpIj48c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDUwYjU7c3RvcC1vcGFjaXR5OjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwYjg3ZmQ7c3RvcC1vcGFjaXR5OjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iX0xpbmVhcjMiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCg1LjE5ODE0ZS0xNCwtODQ4LjkyMSw4NDguOTIxLDUuMTk4MTRlLTE0LDEzMDguOCw4NzUuMzk3KSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDA1MGI1O3N0b3Atb3BhY2l0eToxIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMGI4N2ZkO3N0b3Atb3BhY2l0eToxIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9Il9MaW5lYXI0IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNS4xOTgxNGUtMTQsLTg0OC45MjEsODQ4LjkyMSw1LjE5ODE0ZS0xNCwxMzA4LjgsODc1LjM5NykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNTBiNTtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzBiODdmZDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNSIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC0zLjkxODg1ZS0xMyw0NzIuNDU5LC00NzMuODk1LC0zLjkwNjk4ZS0xMyw1ODcuNjE5LC0wLjg2MTY1MSkiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzAwNDhhZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwMzU4MDtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJfTGluZWFyNiIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDUuNTE4NDhlLTE0LDg5OC41MDYsLTkwMS4yMzYsNS41MDE3NmUtMTQsMTYyLjQyMSwtMTIuMTMzNykiPjxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzBiODlmZjtzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNGViMjtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",fr="",tr=(t,e)=>{const r=t.__vccOpts||t;for(const[i,n]of e)r[i]=n;return r};const rr=h.defineComponent({name:"DefaultView",setup(){return{logo:er}}}),nr=(t=>(h.pushScopeId("data-v-e696721c"),t=t(),h.popScopeId(),t))(()=>h.createElementVNode("div",{class:"title"},"Hello World",-1)),ir=["src"];function sr(t,e,r,i,n,s){return h.openBlock(),h.createElementBlock(h.Fragment,null,[nr,h.createElementVNode("img",{src:t.logo,alt:"logo"},null,8,ir)],64)}var ar=tr(rr,[["render",sr],["__scopeId","data-v-e696721c"]]),Nr="",or={name:"PluginTemplate",components:[],routes:[{path:"/hello-world",name:"HelloWorld",component:ar}],menus:[{name:"From PluginTemplate",items:[{name:"HelloWorld",path:"/hello-world",icon:be.IconGrid}]}],extensionPoints:{},activated(){},deactivated(){}};return or}(Vue,VueRouter,HaloComponents);
