!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(a&&a(e);c.length;)c.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"c526d",3:"64640"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(f=l[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(a===i||a===u))return e()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var f;if((a=(f=s[c]).getAttribute("data-href"))===i||a===u)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||u,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],p.parentNode.removeChild(p),r(i)},p.href=u,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(t){return n.p+""+({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"37907",3:"242c2"}[t]+".js"}(t);var a=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[t]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var a=l;n(n.s="mdyV")}({GFNa:function(){},QfWi:function(t,e,n){"use strict";function r(t){function e(){var e=this;o.Component.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(o.h)(n,t);var r=function t(e,n){if("string"==typeof e.type)return null;var r=e.__;if(r){var o=r.__k;if(o){Array.isArray(o)||(o=[o]);var i=o.indexOf(e);-1===i&&(i=o.length);for(var u=i;u--;){var l=o[u],c=l&&l.__e||t(l,!0);if(c)return c}}return n?void 0:t(r)}}(e.__v),i=r&&r.nextSibling||(e.__P||e._parentDom).firstChild;return i&&Object(o.h)(i.localName,{dangerouslySetInnerHTML:s})}}var n;return e.preload=t,(e.prototype=new o.Component).constructor=e,e}n.r(e);n("GFNa");var o=n("hosL"),i=n("Y3FI"),u=n("ox/y"),l=n("ySiU"),c=n.n(l),a=function(){return Object(o.h)("header",{class:c.a.header},Object(o.h)(u.Link,{class:c.a.nameplate,activeClassName:c.a.active,href:"/"},"Sam Nosenzo"),Object(o.h)(u.Link,{class:c.a.about,activeClassName:c.a.active,href:"/about"},"?"))},s={},f=r((function(t){n.e(3).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),p=r((function(t){n.e(2).then(function(){var e=n("ZbNB");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=function(){return Object(o.h)("div",{id:"app"},Object(o.h)(a,null),Object(o.h)(i.Router,null,Object(o.h)(f,{path:"/"}),Object(o.h)(p,{path:"/about"})))}},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var f=Math.max(t.length,e.length),p=0;p<f;p++)if(e[p]&&":"===e[p].charAt(0)){var _=e[p].replace(/(^:|[+*?]+$)/g,""),d=(e[p].match(/[+*?]+$/)||y)[0]||"",h=~d.indexOf("+"),v=~d.indexOf("*"),m=t[p]||"";if(!m&&!v&&(d.indexOf("?")<0||h)){r=!1;break}if(u[_]=decodeURIComponent(m),h||v){u[_]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(c).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function c(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function a(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function s(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=g.length;e--;)if(g[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),f(t)}function f(t){for(var e=!1,n=0;n<g.length;n++)!0===g[n].routeTo(t)&&(e=!0);for(var r=b.length;r--;)b[r](t);return e}function p(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(e)}}function _(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return p(t.currentTarget||t.target||this),d(t)}function d(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function h(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(p(e))return d(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return b})),n.d(e,"getCurrentUrl",(function(){return a})),n.d(e,"route",(function(){return s})),n.d(e,"Router",(function(){return O})),n.d(e,"Route",(function(){return w})),n.d(e,"Link",(function(){return x})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,g=[],b=[],k={},C=!1,O=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||a()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){f(a())})),addEventListener("click",h)),C=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){g.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component),x=function(t){return Object(v.createElement)("a",r({onClick:_},t))},w=function(t){return Object(v.createElement)(t.component,t)};O.subscribers=b,O.getCurrentUrl=a,O.route=s,O.Router=O,O.Route=w,O.Link=x,O.exec=o,e.default=O},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l=arguments,c={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:c[i]=e[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);if(null!=n&&(c.children=n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===c[i]&&(c[i]=t.defaultProps[i]);return u(t,c,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),null!=L.vnode&&L.vnode(i),i}function l(){return{current:null}}function c(t){return t.children}function a(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function f(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return f(t)}}function p(t){(!t.__d&&(t.__d=!0)&&N.push(t)&&!_.__r++||M!==L.debounceRendering)&&((M=L.debounceRendering)||T)(_)}function _(){for(var t;_.__r=N.length;)t=N.sort((function(t,e){return t.__v.__b-e.__v.__b})),N=[],t.some((function(t){var e,n,o,i,u,l,c;t.__d&&(l=(u=(e=t).__v).__e,(c=e.__P)&&(n=[],(o=r({},u)).__v=o,i=k(c,u,o,e.__n,void 0!==c.ownerSVGElement,null,n,null==l?s(u):l),C(n,u),i!=l&&f(u)))}))}function d(t,e,n,r,i,l,a,f,p,_){var d,h,y,m,g,b,C,O=r&&r.__k||I,S=O.length;for(p==W&&(p=null!=a?a[0]:S?s(r,0):null),n.__k=[],d=0;d<e.length;d++)if(null!=(m=n.__k[d]=null==(m=e[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):null!=m.__e||null!=m.__c?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=O[d])||y&&m.key==y.key&&m.type===y.type)O[d]=void 0;else for(h=0;h<S;h++){if((y=O[h])&&m.key==y.key&&m.type===y.type){O[h]=void 0;break}y=null}g=k(t,m,y=y||W,i,l,a,f,p,_),(h=m.ref)&&y.ref!=h&&(C||(C=[]),y.ref&&C.push(y.ref,null,m),C.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),p=v(t,m,y,O,a,g,p),_||"option"!=n.type?"function"==typeof n.type&&(n.__d=p):t.value=""):p&&y.__e==p&&p.parentNode!=t&&(p=s(y))}if(n.__e=b,null!=a&&"function"!=typeof n.type)for(d=a.length;d--;)null!=a[d]&&o(a[d]);for(d=S;d--;)null!=O[d]&&w(O[d],O[d]);if(C)for(d=0;d<C.length;d++)x(C[d],C[++d],C[++d])}function h(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){h(t,e)})):e.push(t)),e}function v(t,e,n,r,o,i,u){var l,c,a;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(o==n||i!=u||null==i.parentNode)t:if(null==u||u.parentNode!==t)t.appendChild(i),l=null;else{for(c=u,a=0;(c=c.nextSibling)&&a<r.length;a+=2)if(c==i)break t;t.insertBefore(i,u),l=u}return void 0!==l?l:i.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||F.test(e)?n:n+"px"}function m(t,e,n,r,o){var i,u;if(o&&"className"==e&&(e="class"),"style"===e)if("string"==typeof n)t.style=n;else{if("string"==typeof r&&(t.style=r=""),r)for(e in r)n&&e in n||y(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||y(t.style,e,n[e])}else"o"===e[0]&&"n"===e[1]?(i=e!==(e=e.replace(/Capture$/,"")),(u=e.toLowerCase())in t&&(e=u),e=e.slice(2),t.l||(t.l={}),t.l[e]=n,n?r||t.addEventListener(e,g,i):t.removeEventListener(e,g,i)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&"href"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function g(t){this.l[t.type](L.event?L.event(t):t)}function b(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&b(o,e,n),e=v(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function k(t,e,n,o,i,u,l,s,f){var p,_,h,v,y,m,g,k,C,x,w,j=e.type;if(void 0!==e.constructor)return null;(p=L.__b)&&p(e);try{t:if("function"==typeof j){if(k=e.props,C=(p=j.contextType)&&o[p.__c],x=p?C?C.props.value:p.__:o,n.__c?g=(_=e.__c=n.__c).__=_.__E:("prototype"in j&&j.prototype.render?e.__c=_=new j(k,x):(e.__c=_=new a(k,x),_.constructor=j,_.render=S),C&&C.sub(_),_.props=k,_.state||(_.state={}),_.context=x,_.__n=o,h=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=j.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,j.getDerivedStateFromProps(k,_.__s))),v=_.props,y=_.state,h)null==j.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==j.getDerivedStateFromProps&&k!==v&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(k,x),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(k,_.__s,x)||e.__v===n.__v){_.props=k,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,_.__h.length&&l.push(_),b(e,s,t);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(k,_.__s,x),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(v,y,m)}))}_.context=x,_.props=k,_.state=_.__s,(p=L.__r)&&p(e),_.__d=!1,_.__v=e,_.__P=t,p=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),h||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(v,y)),w=null!=p&&p.type==c&&null==p.key?p.props.children:p,d(t,Array.isArray(w)?w:[w],e,n,o,i,u,l,s,f),_.base=e.__e,_.__h.length&&l.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=O(n.__e,e,n,o,i,u,l,f);(p=L.diffed)&&p(e)}catch(t){e.__v=null,L.__e(t,e,n)}return e.__e}function C(t,e){L.__c&&L.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){L.__e(t,e.__v)}}))}function O(t,e,n,r,o,i,u,l){var c,a,s,f,p,_=n.props,h=e.props;if(o="svg"===e.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&((null===e.type?3===a.nodeType:a.localName===e.type)||t==a)){t=a,i[c]=null;break}if(null==t){if(null===e.type)return document.createTextNode(h);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,h.is&&{is:h.is}),i=null,l=!1}if(null===e.type)_!==h&&t.data!==h&&(t.data=h);else{if(null!=i&&(i=I.slice.call(t.childNodes)),s=(_=n.props||W).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!l){if(null!=i)for(_={},p=0;p<t.attributes.length;p++)_[t.attributes[p].name]=t.attributes[p].value;(f||s)&&(f&&s&&f.__html==s.__html||(t.innerHTML=f&&f.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||m(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||m(t,i,e[i],n[i],r)})(t,h,_,o,l),f?e.__k=[]:(c=e.props.children,d(t,Array.isArray(c)?c:[c],e,n,r,"foreignObject"!==e.type&&o,i,u,W,l)),l||("value"in h&&void 0!==(c=h.value)&&c!==t.value&&m(t,"value",c,_.value,!1),"checked"in h&&void 0!==(c=h.checked)&&c!==t.checked&&m(t,"checked",c,_.checked,!1))}return t}function x(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){L.__e(t,n)}}function w(t,e,n){var r,i,u;if(L.unmount&&L.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||x(r,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){L.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(u=0;u<r.length;u++)r[u]&&w(r[u],e,n);null!=i&&o(i)}function S(t,e,n){return this.constructor(t,n)}function j(t,e,n){var r,o,u;L.__&&L.__(t,e),o=(r=n===D)?null:n&&n.__k||e.__k,t=i(c,null,[t]),u=[],k(e,(r?e:n||e).__k=t,o||W,W,void 0!==e.ownerSVGElement,n&&!r?[n]:o?null:e.childNodes.length?I.slice.call(e.childNodes):null,u,n||W,r),C(u,t)}function P(t,e){j(t,e,D)}function A(t,e,n){var o,i,l,c=arguments,a=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:a[l]=e[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(c[l]);return null!=n&&(a.children=n),u(t.type,a,o||t.key,i||t.ref,null)}function U(t,e){var n={__c:e="__cC"+R++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t,n,r){return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(p)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return j})),n.d(e,"hydrate",(function(){return P})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return c})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return E})),n.d(e,"Component",(function(){return a})),n.d(e,"cloneElement",(function(){return A})),n.d(e,"createContext",(function(){return U})),n.d(e,"toChildArray",(function(){return h})),n.d(e,"__u",(function(){return w})),n.d(e,"options",(function(){return L}));var L,E,N,T,M,D,R,W={},I=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;L={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return p(n.__E=n)}catch(e){t=e}throw t}},E=function(t){return null!=t&&void 0===t.constructor},a.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),p(this))},a.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),p(this))},a.prototype.render=c,N=[],T="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_.__r=0,D=W,R=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=function(t){return t&&t.default?t.default:t};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof u(n("QfWi"))){var l=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=u(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var c;e.url&&(c=e.url);l=i(o(t,{CLI_DATA:{preRenderData:e}}),document.body,l)}()}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),u=n("Y3FI"),l=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),c=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(t){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=c,e.default=l,l.Link=c},ySiU:function(t){t.exports={header:"header__3QGkI",nameplate:"nameplate__2s5H-",about:"about__oZWCf",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.38a77.js.map