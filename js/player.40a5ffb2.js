(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["player"],{2877:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,c){var u,s="function"===typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=r,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=u):o&&(u=c?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(s.functional){s._injectStyles=u;var l=s.render;s.render=function(t,e){return u.call(e),l(t,e)}}else{var h=s.beforeCreate;s.beforeCreate=h?[].concat(h,u):[u]}return{exports:t,options:s}}r.d(e,"a",(function(){return n}))},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=L(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function _(){}function y(){}function v(){}var g={};g[i]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(j([])));w&&w!==r&&n.call(w,i)&&(g=w);var x=v.prototype=_.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(t,e,r){var n=l;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=x.constructor=v,v.constructor=y,v[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},b(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},cccf:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.dataLoaded?r("div",{staticStyle:{height:"100%",width:"100%"}},[r("VideoPlayer",{attrs:{options:t.videoOptions},on:{onVideoPlayerError:t.onPlayerError}})],1):t._e()},o=[];r("99af"),r("7db0"),r("c975"),r("d3b7"),r("96cf");function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}var c=function(){return r.e("chunk-c063ca84").then(r.bind(null,"5912"))},u={name:"Player",components:{VideoPlayer:c},created:function(){var t=this;try{var e={},r="application/x-mpegURL";this.dataLoaded=!1,e=this.$channelList.find((function(e){return e.channelId===t.$route.params.channelId})),e.srcType?r=e.srcType:e.url.indexOf("youtube.com")>0&&e.url.indexOf(".mpd")<0?r="video/youtube":e.url.indexOf("youtube.com")<0&&e.url.indexOf(".mpd")>0&&(r="application/dash+xml"),this.videoOptions.sources[0].type=r,e.slug?this.getBongoUrl(e.slug).then((function(r){e.url=r,t.videoOptions.sources[0].src=e.url,t.dataLoaded=!0})):(this.videoOptions.sources[0].src=e.url,this.dataLoaded=!0)}catch(n){this.$router.push({name:"Home"})}},data:function(){return{dataLoaded:!1,videoOptions:{autoplay:!0,controls:!0,techOrder:["chromecast","youtube","html5"],sources:[{src:"",type:""}],html5:{hls:{overrideNative:!0},nativeAudioTracks:!1,nativeVideoTracks:!1,nativeTextTracks:!1},chromecast:{},plugins:{chromecast:{addButtonToControlBar:!0}}}}},beforeDestroy:function(){console.clear(),window.chrome?console.log("%cVaire vai ke tumi?","color:blue;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 4px black;font-weight:bold"):console.log("#   __      __   _                       _   _          _                   _ ___  \r\n#   \\ \\    / /  (_)                     (_) | |        | |                 (_)__ \\ \r\n#    \\ \\  / /_ _ _ _ __ ___  __   ____ _ _  | | _____  | |_ _   _ _ __ ___  _   ) |\r\n#     \\ \\/ / _` | | '__/ _ \\ \\ \\ / / _` | | | |/ / _ \\ | __| | | | '_ ` _ \\| | / / \r\n#      \\  / (_| | | | |  __/  \\ V / (_| | | |   <  __/ | |_| |_| | | | | | | ||_|  \r\n#       \\/ \\__,_|_|_|  \\___|   \\_/ \\__,_|_| |_|\\_\\___|  \\__|\\__,_|_| |_| |_|_|(_)  \r\n#")},methods:{onPlayerError:function(t){4===t.code&&this.$router.push({name:"Home.NotPlayable"})},setWithExpiry:function(t,e,r){var n=new Date,o={value:e,expiry:n.getTime()+r};localStorage.setItem(t,JSON.stringify(o))},getWithExpiry:function(t){var e=localStorage.getItem(t);if(!e)return null;var r=JSON.parse(e),n=new Date;return n.getTime()>r.expiry?(localStorage.removeItem(t),null):r.value},getBongoUrl:function(t){var e=this;return a(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.getWithExpiry("token"),n){r.next=19;break}return r.prev=2,r.next=5,e.$axios.post("https://api2.bongobd.com/api/login_check",{authentication_type:"anonymous",anonymous_id:"bongo_anonymous",client_type:"web",client_id:"".concat(Math.random()),channel:"bongo_web_phone_desktop"},{headers:{"access-code":"QkQ%3D","content-Type":"application/json"}});case 5:if(o=r.sent,200!=o.status){r.next=12;break}return n=o.data,e.setWithExpiry("token",o.data,72e5),r.next=11,e.getSecureChannelLink(n.token,t);case 11:return r.abrupt("return",r.sent);case 12:r.next=17;break;case 14:return r.prev=14,r.t0=r["catch"](2),r.abrupt("return","");case 17:r.next=22;break;case 19:return r.next=21,e.getSecureChannelLink(n.token,t);case 21:return r.abrupt("return",r.sent);case 22:case"end":return r.stop()}}),r,null,[[2,14]])})))()},getSecureChannelLink:function(t,e){var r=this;return a(regeneratorRuntime.mark((function n(){var o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o="https://live.bongobd.com/hls",n.prev=1,n.next=4,r.$axios.post("https://api2.bongobd.com/api/en/generate/secure-channel-link",{slug:e},{headers:{"access-code":"QkQ%3D",authorization:"Bearer "+t,"content-Type":"application/json"}});case 4:if(i=n.sent,200!=i.status){n.next=7;break}return n.abrupt("return","".concat(o,"/").concat(i.data.data,".m3u8"));case 7:n.next=12;break;case 9:return n.prev=9,n.t0=n["catch"](1),n.abrupt("return","");case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}},s=u,l=r("2877"),h=Object(l["a"])(s,n,o,!1,null,null,null);e["default"]=h.exports}},0,["chunk-c063ca84"]]);