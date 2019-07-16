!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){var n=r(1),o=r(6);new n(o.name,o.version,"verbose").fromCache(["/","app.js","index.css","index.html","index.js","ledger.js","stellar-sdk.js","vendors~app.js","vendors~ledger.js","browserconfig.xml","manifest.json","icons/16x16.png","icons/32x32.png","icons/192x192.png","icons/512x512.png","icons/apple-touch.png","icons/mstile.png","icons/safari.svg"]).precache().register()},function(t,e,r){var n=r(2);function o(t,e,r,n,o,i,c){try{var a=t[i](c),s=a.value}catch(t){return void r(t)}a.done?e(s):Promise.resolve(s).then(n,o)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var c=2e3,a=t.exports=function(){"use strict";function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.version=r,this.verbose=n,this.hostname=location.host.replace(/:.*/,""),this.enabled=false,this.root="".concat(location.protocol,"//").concat(location.host,"/"),this.startByRoot=new RegExp("^"+this.root),this.timeout=c,this.cacheName="".concat(e,"-").concat(r),this.files={},this.get=[]}var e,r,n;return e=t,(r=[{key:"log",value:function(t){this.verbose&&console.log(t)}},{key:"precache",value:function(){return this.get=Object.keys(this.files),this}},{key:"register",value:function(){var t=this;self.addEventListener("install",function(e){var r,n;t.log("Installing ".concat(t.cacheName,"...")),e.waitUntil((r=t,n=t.get,caches.open(r.cacheName).then(function(t){return t.addAll(n)})).then(function(){return self.skipWaiting()}).then(function(){return t.log("".concat(t.cacheName," installed"))}))}),self.addEventListener("activate",function(e){var r;e.waitUntil((r=t.cacheName,caches.keys().then(function(t){return Promise.all(t.map(function(t){t!==r&&caches.delete(t)}))})))}),self.addEventListener("fetch",function(e){if(t.enabled&&"GET"===e.request.method&&e.request.url.match(t.startByRoot)){var r=new Request(e.request.url.replace(/\?.*$/,"")),n=r.url.replace(t.startByRoot,"")||"index.html",o=t.files[n];o&&s[o]?e.respondWith(s[o](t,r,n)):e.respondWith(s.fromNetwork(t,r,n))}})}}])&&i(e.prototype,r),n&&i(e,n),t}();var s={};function u(t,e,r){var n=r.clone();caches.open(t.cacheName).then(function(t){return t.put(e,n)})}s.fromCache=function(t,e,r){return t.log("Looking for ".concat(r," into ").concat(t.cacheName," cache...")),caches.open(t.cacheName).then(function(t){return t.match(e)})},s.fromNetwork=function(t,e,r){return t.log("Downloading ".concat(r,"...")),new Promise(function(r,n){var o=setTimeout(n,t.timeout);return fetch(e).then(function(t){clearTimeout(o),r(t)})})},s.cacheOrNetwork=function(){var t,e=(t=n.mark(function t(e,r,o){var i,c;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.fromCache(e,r,o);case 2:if(!(i=t.sent)){t.next=5;break}return t.abrupt("return",i);case 5:return t.next=7,s.fromNetwork(e,r,o);case 7:return c=t.sent,u(e,r,c),t.abrupt("return",c);case 10:case"end":return t.stop()}},t,this)}),function(){var e=this,r=arguments;return new Promise(function(n,i){var c=t.apply(e,r);function a(t){o(c,n,i,a,s,"next",t)}function s(t){o(c,n,i,a,s,"throw",t)}a(void 0)})});return function(t,r,n){return e.apply(this,arguments)}}();var l=function(t){a.prototype[t]=function(e){var r=this;return e.forEach(function(e){return r.files[e]=t}),this}};for(var f in s)l(f)},function(t,e,r){t.exports=r(3)},function(t,e,r){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=function(){return this||"object"===("undefined"==typeof self?"undefined":n(self))&&self}()||Function("return this")(),i=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,c=i&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,t.exports=r(4),i)o.regeneratorRuntime=c;else try{delete o.regeneratorRuntime}catch(t){o.regeneratorRuntime=void 0}},function(t,e,r){(function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(r){"use strict";var n,o=Object.prototype,i=o.hasOwnProperty,c="function"==typeof Symbol?Symbol:{},a=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag",l="object"===e(t),f=r.regeneratorRuntime;if(f)l&&(t.exports=f);else{(f=r.regeneratorRuntime=l?t.exports:{}).wrap=x;var h="suspendedStart",p="suspendedYield",d="executing",m="completed",y={},v={};v[a]=function(){return this};var b=Object.getPrototypeOf,g=b&&b(b(T([])));g&&g!==o&&i.call(g,a)&&(v=g);var w=L.prototype=k.prototype=Object.create(v);E.prototype=w.constructor=L,L.constructor=E,L[u]=E.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===E||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},f.awrap=function(t){return{__await:t}},O(S.prototype),S.prototype[s]=function(){return this},f.AsyncIterator=S,f.async=function(t,e,r,n){var o=new S(x(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},O(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=T,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return a.type="throw",a.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],a=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var s=i.call(c,"catchLoc"),u=i.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),y}}}function x(t,e,r,n){var o=e&&e.prototype instanceof k?e:k,i=Object.create(o.prototype),c=new R(n||[]);return i._invoke=function(t,e,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw i;return G()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=_(c,r);if(a){if(a===y)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=j(t,e,r);if("normal"===s.type){if(n=r.done?m:p,s.arg===y)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}(t,r,c),i}function j(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function k(){}function E(){}function L(){}function O(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function S(t){var r;this._invoke=function(n,o){function c(){return new Promise(function(r,c){!function r(n,o,c,a){var s=j(t[n],t,o);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===e(l)&&i.call(l,"__await")?Promise.resolve(l.__await).then(function(t){r("next",t,c,a)},function(t){r("throw",t,c,a)}):Promise.resolve(l).then(function(t){u.value=t,c(u)},function(t){return r("throw",t,c,a)})}a(s.arg)}(n,o,r,c)})}return r=r?r.then(c,c):c()}}function _(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=j(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:G}}function G(){return{value:n,done:!0}}}(function(){return this||"object"===("undefined"==typeof self?"undefined":e(self))&&self}()||Function("return this")())}).call(this,r(5)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t){t.exports={name:"equilibre.io",version:"0.1.1",description:"A portfolio balancer for Stellar Decentralized Exchange",author:"MisterTicot",repository:"github:cosmic-plus/webapp-equilibre-io",license:"MIT",browserslist:"last 4 versions, > 0.1%",keywords:["cryptocurrency","stellar","dex","portfolio","balancer"],scripts:{test:'echo "Error: no test specified" && exit 1',get:"git submodule update -i --recursive",prettier:"prettier --write --no-semi '**.js' 'src/**.js' '**.json' '**.md'",eslint:"eslint --fix '**.js' 'src/**.js'",lint:"npm run prettier && npm run eslint","build-i18n":"i18n-extractor","build-js":"webpack -p && cp -f node_modules/stellar-sdk/dist/stellar-sdk.min.js web/stellar-sdk.js","build-scss":"node-sass src/index.scss -o web -t compressed","build-css":"npm run build-scss && autoprefixer-cli web/index.css","build-html":"cp -fl src/*.html web","build-misc":"cp -f AUTHORS LICENSE README.md package-lock.json web",build:"for i in i18n js css html misc; do npm run build-$i || return; done",rebuild:"npm run get && cp -f web/package-lock.json . && npm ci && npm run build",check:"npm run rebuild && cd web && git status","watch-css":"npm run build-css && node-sass src/index.scss -wo web","watch-js":"webpack -d --watch",watch:"npm run build-html && npm run watch-css & npm run watch-js",serve:"npm run watch & cd web && live-server --https=../node_modules/live-server-https --no-browser"},devDependencies:{"@babel/core":"^7.3.3","@babel/plugin-syntax-dynamic-import":"^7.2.0","@babel/plugin-transform-runtime":"^7.2.0","@babel/preset-env":"^7.3.1","@babel/runtime":"^7.3.1","@cosmic-plus/i18n-extractor":"^1.1.0","autoprefixer-cli":"^1.0.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.5",eslint:"^5.14.0","live-server":"^1.2.1","live-server-https":"0.0.2","node-sass":"^4.11.0",webpack:"^4.29.4","webpack-cli":"^3.2.3"},dependencies:{"@cosmic-plus/base":"^1.3.5","@cosmic-plus/i18n":"^1.1.0","@cosmic-plus/jsutils":"^1.14.6","@cosmic-plus/ledger-wallet":"^0.2.12","@cosmic-plus/loopcall":"^1.0.5","cosmic-lib":"^1.2.9",highcharts:"^7.0.3","normalize.css":"^8.0.1"}}}]);
//# sourceMappingURL=worker.js.map
