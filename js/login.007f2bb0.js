(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"2a7f":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var a=i("71d9"),s=i("80d2"),n=Object(s["g"])("v-toolbar__title"),r=Object(s["g"])("v-toolbar__items");a["a"]},"36a7":function(t,e,i){},"5e23":function(t,e,i){},"62ad":function(t,e,i){"use strict";var a=i("ade3"),s=i("5530"),n=(i("a9e3"),i("b64b"),i("ac1f"),i("5319"),i("4ec9"),i("d3b7"),i("3ca3"),i("ddb0"),i("caad"),i("159b"),i("2ca0"),i("4b85"),i("2b0e")),r=i("d9f7"),o=i("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["offset"+Object(o["u"])(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["order"+Object(o["u"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function p(t,e,i){var a=t;if(null!=i&&!1!==i){if(e){var s=e.replace(t,"");a+="-".concat(s)}return"col"!==t||""!==i&&!0!==i?(a+="-".concat(i),a.toLowerCase()):a.toLowerCase()}}var f=new Map;e["a"]=n["a"].extend({name:"v-col",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,s=e.data,n=e.children,o=(e.parent,"");for(var c in i)o+=String(i[c]);var l=f.get(o);return l||function(){var t,e;for(e in l=[],h)h[e].forEach((function(t){var a=i[t],s=p(e,t,a);s&&l.push(s)}));var s=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!s||!i.cols},Object(a["a"])(t,"col-".concat(i.cols),i.cols),Object(a["a"])(t,"offset-".concat(i.offset),i.offset),Object(a["a"])(t,"order-".concat(i.order),i.order),Object(a["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),f.set(o,l)}(),t(i.tag,Object(r["a"])(s,{class:l}),n)}})},"71d9":function(t,e,i){"use strict";var a=i("3835"),s=i("5530"),n=(i("a9e3"),i("0481"),i("5e23"),i("8dd9")),r=i("adda"),o=i("80d2"),c=i("d9bd");e["a"]=n["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(s["a"])(Object(s["a"])({},n["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{height:Object(o["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(a["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(c["a"])(s,n,t)}))},methods:{genBackground:function(){var t={height:Object(o["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(o["f"])(this.computedContentHeight)}},Object(o["l"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(o["f"])(this.extensionHeight)}},Object(o["l"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"8a79":function(t,e,i){"use strict";var a=i("23e7"),s=i("06cf").f,n=i("50c4"),r=i("577e"),o=i("5a34"),c=i("1d80"),l=i("ab13"),d=i("c430"),u="".endsWith,h=Math.min,p=l("endsWith"),f=!d&&!p&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!f&&!p},{endsWith:function(t){var e=r(c(this));o(t);var i=arguments.length>1?arguments[1]:void 0,a=n(e.length),s=void 0===i?a:h(n(i),a),l=r(t);return u?u.call(e,l,s):e.slice(s-l.length,s)===l}})},"8efc":function(t,e,i){},a523:function(t,e,i){"use strict";i("4de4"),i("b64b"),i("2ca0"),i("99af"),i("20f6"),i("4b85"),i("498a"),i("a15b");var a=i("2b0e");function s(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var a=i.props,s=i.data,n=i.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var r=s.attrs;if(r){s.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(s.staticClass+=" ".concat(o.join(" ")))}return a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),e(a.tag,s,n)}})}var n=i("d9f7");e["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var i,a=e.props,s=e.data,r=e.children,o=s.attrs;return o&&(s.attrs={},i=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(s.domProps=s.domProps||{},s.domProps.id=a.id),t(a.tag,Object(n["a"])(s,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(i||[])}),r)}})},a55b:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-main",[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[i("v-card",{staticClass:"elevation-12"},[i("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[i("v-toolbar-title",[t._v("Login")])],1),i("v-card-text",[i("v-form",{attrs:{id:"login-form"},on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[i("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"person",type:"text"},model:{value:t.user.name,callback:function(e){t.$set(t.user,"name",e)},expression:"user.name"}}),i("v-text-field",{attrs:{id:"password",label:"Password",name:"password","prepend-icon":"lock",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1)],1),i("v-card-actions",[i("v-btn",{attrs:{color:"secondary"},on:{click:t.clearFormData}},[t._v("Clear")]),i("v-spacer"),i("v-btn",{attrs:{color:"primary",type:"submit",form:"login-form"}},[t._v("Login")])],1)],1)],1)],1)],1)],1)},s=[],n=(i("b0c0"),{title:"IP TV For All - Login",mounted:function(){},data:function(){return{user:{name:"",password:""}}},methods:{clearFormData:function(){this.user.name="",this.user.password=""},login:function(){var t=JSON.parse(localStorage.getItem("tokenJson"));this.user.name===t.user.name&&this.user.password===t.user.password&&(localStorage.setItem("token",t.token),this.$router.push({name:"Home"}))}}}),r=n,o=i("2877"),c=i("6544"),l=i.n(c),d=i("8336"),u=i("b0af"),h=i("99d9"),p=i("62ad"),f=i("a523"),m=i("4bd4"),g=i("f6c4"),v=i("0fd9"),b=i("2fa4"),S=i("8654"),y=i("71d9"),_=i("2a7f"),j=Object(o["a"])(r,a,s,!1,null,null,null);e["default"]=j.exports;l()(j,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCol:p["a"],VContainer:f["a"],VForm:m["a"],VMain:g["a"],VRow:v["a"],VSpacer:b["a"],VTextField:S["a"],VToolbar:y["a"],VToolbarTitle:_["a"]})},adda:function(t,e,i){"use strict";var a=i("53ca"),s=(i("a9e3"),i("a15b"),i("8a79"),i("2ca0"),i("8efc"),i("90a2")),n=(i("36a7"),i("24b2")),r=i("58df"),o=Object(r["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i("7560"),d=i("d9f7"),u=i("d9bd"),h="undefined"!==typeof window&&"IntersectionObserver"in window;e["a"]=Object(r["a"])(c,l["a"]).extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(a["a"])(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!h||i||this.eager){if(this.normalisedSrc.lazySrc){var a=new Image;a.src=this.normalisedSrc.lazySrc,this.pollForSize(a,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(u["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var s=t.naturalHeight,n=t.naturalWidth;s||n?(e.naturalWidth=n,e.calculatedAspectRatio=n/s):t.complete||!e.isLoading||e.hasError||null==i||setTimeout(a,i)};a()},genContent:function(){var t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t),i=Object(d["a"])(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:h?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},bd0c:function(t,e,i){},d10f:function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},f6c4:function(t,e,i){"use strict";i("bd0c");var a=i("d10f");e["a"]=a["a"].extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,e=t.bar,i=t.top,a=t.right,s=t.footer,n=t.insetFooter,r=t.bottom,o=t.left;return{paddingTop:"".concat(i+e,"px"),paddingRight:"".concat(a,"px"),paddingBottom:"".concat(s+n+r,"px"),paddingLeft:"".concat(o,"px")}}},render:function(t){var e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})}}]);