!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,a=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&a.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);a.length;)a.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"663e2",3:"02372"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),a=0;a<l.length;a++){var c=(f=l[a]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===i||c===u))return e()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){var f;if((c=(f=s[a]).getAttribute("data-href"))===i||c===u)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var n=e&&e.target&&e.target.src||u,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[t],p.parentNode.removeChild(p),r(i)},p.href=u,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=function(t){return n.p+""+({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"41163",3:"0da70"}[t]+".js"}(t);var c=new Error;l=function(e){a.onerror=a.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[t]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:a})}),12e4);a.onerror=a.onload=l,document.head.appendChild(a)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var c=l;n(n.s="mdyV")}({GFNa:function(){},HYkp:function(t,e,n){"use strict";(function(t){e.a=function(e){return t("a",{href:e.href,target:"_blank",rel:"noopener noreferrer"},e.children)}}).call(this,n("hosL").h)},QfWi:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t){function e(){var t=c(m.location.hash.substr(1)),e=t.pathname,n=t.search,r=t.hash,o=g.state||{};return[o.idx,h({pathname:void 0===e?"/":e,search:void 0===n?"":n,hash:void 0===r?"":r,state:o.usr||null,key:o.key||"default"})]}function n(){if(b)j.call(b),b=null;else{var t=f.Pop,n=e(),r=n[0];if(j.length){if(null!=r){var o=C-r;o&&(b={action:t,location:n[1],retry:function(){v(-1*o)}},v(o))}}else d(t)}}function o(t){return function(){var t=document.querySelector("base"),e="";if(t&&t.getAttribute("href")){var n=m.location.href,r=n.indexOf("#");e=-1===r?n:n.slice(0,r)}return e}()+"#"+("string"==typeof t?t:a(t))}function s(t,e){return void 0===e&&(e=null),h(r({pathname:w.pathname,hash:"",search:""},"string"==typeof t?c(t):t,{state:e,key:l()}))}function p(t,e){return[{usr:t.state,key:t.key,idx:e},o(t)]}function _(t,e,n){return!j.length||(j.call({action:t,location:e,retry:n}),!1)}function d(t){k=t;var n=e();C=n[0],x.call({action:k,location:w=n[1]})}function v(t){g.go(t)}void 0===t&&(t={});var y=t.window,m=void 0===y?document.defaultView:y,g=m.history,b=null;m.addEventListener("popstate",n),m.addEventListener("hashchange",(function(){a(e()[1])!==a(w)&&n()}));var k=f.Pop,O=e(),C=O[0],w=O[1],x=u(),j=u();return null==C&&g.replaceState(r({},g.state,{idx:C=0}),""),{get action(){return k},get location(){return w},createHref:o,push:function t(e,n){var r=f.Push,o=s(e,n);if(_(r,o,(function(){t(e,n)}))){var i=p(o,C+1),u=i[0],l=i[1];try{g.pushState(u,"",l)}catch(t){m.location.assign(l)}d(r)}},replace:function t(e,n){var r=f.Replace,o=s(e,n);if(_(r,o,(function(){t(e,n)}))){var i=p(o,C);g.replaceState(i[0],"",i[1]),d(r)}},go:v,back:function(){v(-1)},forward:function(){v(1)},listen:function(t){return x.push(t)},block:function(t){var e=j.push(t);return 1===j.length&&m.addEventListener("beforeunload",i),function(){e(),j.length||m.removeEventListener("beforeunload",i)}}}}function i(t){t.preventDefault(),t.returnValue=""}function u(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function l(){return Math.random().toString(36).substr(2,8)}function a(t){var e=t.pathname,n=void 0===e?"/":e,r=t.search,o=void 0===r?"":r,i=t.hash,u=void 0===i?"":i;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),u&&"#"!==u&&(n+="#"===u.charAt(0)?u:"#"+u),n}function c(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function s(t){function e(){var e=this;p.Component.call(this),n||(this.componentWillMount=function(){t((function(t){n=t&&t.default||t,e.setState({})}))},this.shouldComponentUpdate=function(){return null!=n}),this.render=function(t){if(n)return Object(p.h)(n,t);var r=function t(e,n){if("string"==typeof e.type)return null;var r=e.__;if(r){var o=r.__k;if(o){Array.isArray(o)||(o=[o]);var i=o.indexOf(e);-1===i&&(i=o.length);for(var u=i;u--;){var l=o[u],a=l&&l.__e||t(l,!0);if(a)return a}}return n?void 0:t(r)}}(e.__v),o=r&&r.nextSibling||(e.__P||e._parentDom).firstChild;return o&&Object(p.h)(o.localName,{dangerouslySetInnerHTML:C})}}var n;return e.preload=t,(e.prototype=new p.Component).constructor=e,e}n.r(e);n("GFNa");var f,p=n("hosL"),_=n("Y3FI");!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(f||(f={}));var h=function(t){return t},d=n("ox/y"),v=n("ySiU"),y=n.n(v),m=function(){return Object(p.h)("header",{class:y.a.header},Object(p.h)("div",{class:y.a.nameplate},Object(p.h)("div",null,"Sam Nosenzo"),Object(p.h)("div",{class:y.a.nameplateSubtitle},"Frontend/Creative Developer/Engineer")),Object(p.h)(d.Link,{class:y.a.link+" "+y.a.home,activeClassName:y.a.active,href:"/"},"⌂"),Object(p.h)(d.Link,{class:y.a.link+" "+y.a.about,activeClassName:y.a.active,href:"/about"},"About"))},g=n("HYkp"),b=n("rS5q"),k=n.n(b),O=function(){return Object(p.h)("div",{class:k.a.footer},Object(p.h)(g.a,{href:"https://github.com/snosenzo"},"Github"),Object(p.h)("div",null,"|"),Object(p.h)(g.a,{href:"https://linkedin.com/in/samnosenzo"},"LinkedIn"),Object(p.h)("div",null,"|"),Object(p.h)(g.a,{href:"https://twitter.com/samnosenzo"},"Twitter"),Object(p.h)("div",null,"|"),Object(p.h)(g.a,{href:"https://www.instagram.com/n_senz_/"},"Instagram"),Object(p.h)("div",null,"|"),Object(p.h)(g.a,{href:"https://www.are.na/sam-nosenzo"},"Are.na"))},C={},w=s((function(t){n.e(3).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),x=s((function(t){n.e(2).then(function(){var e=n("ZbNB");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=function(){return Object(p.h)("div",{id:"app"},Object(p.h)(m,null),Object(p.h)(_.Router,{history:o()},Object(p.h)(w,{path:"/"}),Object(p.h)(x,{path:"/about"})),Object(p.h)(O,null))}},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var a=i[1].split("&"),c=0;c<a.length;c++){var s=a[c].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var f=Math.max(t.length,e.length),p=0;p<f;p++)if(e[p]&&":"===e[p].charAt(0)){var _=e[p].replace(/(^:|[+*?]+$)/g,""),h=(e[p].match(/[+*?]+$/)||y)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),m=t[p]||"";if(!m&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[_]=decodeURIComponent(m),d||v){u[_]=t.slice(p).map(decodeURIComponent).join("/");break}}else if(e[p]!==t[p]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(a).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function a(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function s(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=g.length;e--;)if(g[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),f(t)}function f(t){for(var e=!1,n=0;n<g.length;n++)!0===g[n].routeTo(t)&&(e=!0);for(var r=b.length;r--;)b[r](t);return e}function p(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(e)}}function _(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return p(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(p(e))return h(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return b})),n.d(e,"getCurrentUrl",(function(){return c})),n.d(e,"route",(function(){return s})),n.d(e,"Router",(function(){return C})),n.d(e,"Route",(function(){return x})),n.d(e,"Link",(function(){return w})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,g=[],b=[],k={},O=!1,C=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||c()},O||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){f(c())})),addEventListener("click",d)),O=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){g.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component),w=function(t){return Object(v.createElement)("a",r({onClick:_},t))},x=function(t){return Object(v.createElement)(t.component,t)};C.subscribers=b,C.getCurrentUrl=c,C.route=s,C.Router=C,C.Route=x,C.Link=w,C.exec=o,e.default=C},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l=arguments,a={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:a[i]=e[i];if(arguments.length>3)for(n=[n],i=3;i<arguments.length;i++)n.push(l[i]);if(null!=n&&(a.children=n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===a[i]&&(a[i]=t.defaultProps[i]);return u(t,a,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),null!=E.vnode&&E.vnode(i),i}function l(){return{current:null}}function a(t){return t.children}function c(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function f(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return f(t)}}function p(t){(!t.__d&&(t.__d=!0)&&N.push(t)&&!_.__r++||M!==E.debounceRendering)&&((M=E.debounceRendering)||T)(_)}function _(){for(var t;_.__r=N.length;)t=N.sort((function(t,e){return t.__v.__b-e.__v.__b})),N=[],t.some((function(t){var e,n,o,i,u,l,a;t.__d&&(l=(u=(e=t).__v).__e,(a=e.__P)&&(n=[],(o=r({},u)).__v=o,i=k(a,u,o,e.__n,void 0!==a.ownerSVGElement,null,n,null==l?s(u):l),O(n,u),i!=l&&f(u)))}))}function h(t,e,n,r,i,l,c,f,p,_){var h,d,y,m,g,b,O,C=r&&r.__k||W,j=C.length;for(p==I&&(p=null!=c?c[0]:j?s(r,0):null),n.__k=[],h=0;h<e.length;h++)if(null!=(m=n.__k[h]=null==(m=e[h])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(a,{children:m},null,null,null):null!=m.__e||null!=m.__c?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=C[h])||y&&m.key==y.key&&m.type===y.type)C[h]=void 0;else for(d=0;d<j;d++){if((y=C[d])&&m.key==y.key&&m.type===y.type){C[d]=void 0;break}y=null}g=k(t,m,y=y||I,i,l,c,f,p,_),(d=m.ref)&&y.ref!=d&&(O||(O=[]),y.ref&&O.push(y.ref,null,m),O.push(d,m.__c||g,m)),null!=g?(null==b&&(b=g),p=v(t,m,y,C,c,g,p),_||"option"!=n.type?"function"==typeof n.type&&(n.__d=p):t.value=""):p&&y.__e==p&&p.parentNode!=t&&(p=s(y))}if(n.__e=b,null!=c&&"function"!=typeof n.type)for(h=c.length;h--;)null!=c[h]&&o(c[h]);for(h=j;h--;)null!=C[h]&&x(C[h],C[h]);if(O)for(h=0;h<O.length;h++)w(O[h],O[++h],O[++h])}function d(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){d(t,e)})):e.push(t)),e}function v(t,e,n,r,o,i,u){var l,a,c;if(void 0!==e.__d)l=e.__d,e.__d=void 0;else if(o==n||i!=u||null==i.parentNode)t:if(null==u||u.parentNode!==t)t.appendChild(i),l=null;else{for(a=u,c=0;(a=a.nextSibling)&&c<r.length;c+=2)if(a==i)break t;t.insertBefore(i,u),l=u}return void 0!==l?l:i.nextSibling}function y(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||F.test(e)?n:n+"px"}function m(t,e,n,r,o){var i,u;if(o&&"className"==e&&(e="class"),"style"===e)if("string"==typeof n)t.style=n;else{if("string"==typeof r&&(t.style=r=""),r)for(e in r)n&&e in n||y(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||y(t.style,e,n[e])}else"o"===e[0]&&"n"===e[1]?(i=e!==(e=e.replace(/Capture$/,"")),(u=e.toLowerCase())in t&&(e=u),e=e.slice(2),t.l||(t.l={}),t.l[e]=n,n?r||t.addEventListener(e,g,i):t.removeEventListener(e,g,i)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&"download"!==e&&"href"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function g(t){this.l[t.type](E.event?E.event(t):t)}function b(t,e,n){var r,o;for(r=0;r<t.__k.length;r++)(o=t.__k[r])&&(o.__=t,o.__e&&("function"==typeof o.type&&o.__k.length>1&&b(o,e,n),e=v(n,o,o,t.__k,null,o.__e,e),"function"==typeof t.type&&(t.__d=e)))}function k(t,e,n,o,i,u,l,s,f){var p,_,d,v,y,m,g,k,O,w,x,S=e.type;if(void 0!==e.constructor)return null;(p=E.__b)&&p(e);try{t:if("function"==typeof S){if(k=e.props,O=(p=S.contextType)&&o[p.__c],w=p?O?O.props.value:p.__:o,n.__c?g=(_=e.__c=n.__c).__=_.__E:("prototype"in S&&S.prototype.render?e.__c=_=new S(k,w):(e.__c=_=new c(k,w),_.constructor=S,_.render=j),O&&O.sub(_),_.props=k,_.state||(_.state={}),_.context=w,_.__n=o,d=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=S.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=r({},_.__s)),r(_.__s,S.getDerivedStateFromProps(k,_.__s))),v=_.props,y=_.state,d)null==S.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==S.getDerivedStateFromProps&&k!==v&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(k,w),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(k,_.__s,w)||e.__v===n.__v){_.props=k,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,_.__h.length&&l.push(_),b(e,s,t);break t}null!=_.componentWillUpdate&&_.componentWillUpdate(k,_.__s,w),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(v,y,m)}))}_.context=w,_.props=k,_.state=_.__s,(p=E.__r)&&p(e),_.__d=!1,_.__v=e,_.__P=t,p=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=r(r({},o),_.getChildContext())),d||null==_.getSnapshotBeforeUpdate||(m=_.getSnapshotBeforeUpdate(v,y)),x=null!=p&&p.type==a&&null==p.key?p.props.children:p,h(t,Array.isArray(x)?x:[x],e,n,o,i,u,l,s,f),_.base=e.__e,_.__h.length&&l.push(_),g&&(_.__E=_.__=null),_.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=C(n.__e,e,n,o,i,u,l,f);(p=E.diffed)&&p(e)}catch(t){e.__v=null,E.__e(t,e,n)}return e.__e}function O(t,e){E.__c&&E.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){E.__e(t,e.__v)}}))}function C(t,e,n,r,o,i,u,l){var a,c,s,f,p,_=n.props,d=e.props;if(o="svg"===e.type||o,null!=i)for(a=0;a<i.length;a++)if(null!=(c=i[a])&&((null===e.type?3===c.nodeType:c.localName===e.type)||t==c)){t=c,i[a]=null;break}if(null==t){if(null===e.type)return document.createTextNode(d);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,d.is&&{is:d.is}),i=null,l=!1}if(null===e.type)_!==d&&t.data!==d&&(t.data=d);else{if(null!=i&&(i=W.slice.call(t.childNodes)),s=(_=n.props||I).dangerouslySetInnerHTML,f=d.dangerouslySetInnerHTML,!l){if(null!=i)for(_={},p=0;p<t.attributes.length;p++)_[t.attributes[p].name]=t.attributes[p].value;(f||s)&&(f&&s&&f.__html==s.__html||(t.innerHTML=f&&f.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||m(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||m(t,i,e[i],n[i],r)})(t,d,_,o,l),f?e.__k=[]:(a=e.props.children,h(t,Array.isArray(a)?a:[a],e,n,r,"foreignObject"!==e.type&&o,i,u,I,l)),l||("value"in d&&void 0!==(a=d.value)&&a!==t.value&&m(t,"value",a,_.value,!1),"checked"in d&&void 0!==(a=d.checked)&&a!==t.checked&&m(t,"checked",a,_.checked,!1))}return t}function w(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){E.__e(t,n)}}function x(t,e,n){var r,i,u;if(E.unmount&&E.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||w(r,null,e)),n||"function"==typeof t.type||(n=null!=(i=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){E.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(u=0;u<r.length;u++)r[u]&&x(r[u],e,n);null!=i&&o(i)}function j(t,e,n){return this.constructor(t,n)}function S(t,e,n){var r,o,u;E.__&&E.__(t,e),o=(r=n===D)?null:n&&n.__k||e.__k,t=i(a,null,[t]),u=[],k(e,(r?e:n||e).__k=t,o||I,I,void 0!==e.ownerSVGElement,n&&!r?[n]:o?null:e.childNodes.length?W.slice.call(e.childNodes):null,u,n||I,r),O(u,t)}function P(t,e){S(t,e,D)}function A(t,e,n){var o,i,l,a=arguments,c=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:c[l]=e[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(a[l]);return null!=n&&(c.children=n),u(t.type,c,o||t.key,i||t.ref,null)}function L(t,e){var n={__c:e="__cC"+R++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t,n,r){return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(p)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return S})),n.d(e,"hydrate",(function(){return P})),n.d(e,"createElement",(function(){return i})),n.d(e,"h",(function(){return i})),n.d(e,"Fragment",(function(){return a})),n.d(e,"createRef",(function(){return l})),n.d(e,"isValidElement",(function(){return U})),n.d(e,"Component",(function(){return c})),n.d(e,"cloneElement",(function(){return A})),n.d(e,"createContext",(function(){return L})),n.d(e,"toChildArray",(function(){return d})),n.d(e,"__u",(function(){return x})),n.d(e,"options",(function(){return E}));var E,U,N,T,M,D,R,I={},W=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;E={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return p(n.__E=n)}catch(e){t=e}throw t}},U=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),p(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),p(this))},c.prototype.render=a,N=[],T="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_.__r=0,D=I,R=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,i=r.render,u=function(t){return t&&t.default?t.default:t};if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw.js"),"function"==typeof u(n("QfWi"))){var l=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=u(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var a;e.url&&(a=e.url);l=i(o(t,{CLI_DATA:{preRenderData:e}}),document.body,l)}()}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),u=n("Y3FI"),l=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),a=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(t){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=a,e.default=l,l.Link=a},rS5q:function(t){t.exports={footer:"footer__14P9B"}},ySiU:function(t){t.exports={header:"header__3QGkI",nameplate:"nameplate__2s5H-",nameplateSubtitle:"nameplateSubtitle__1dJ4F",link:"link__koygZ",home:"home__3ol-y",about:"about__oZWCf",active:"active__3gItZ"}}});
//# sourceMappingURL=bundle.6e9bf.js.map