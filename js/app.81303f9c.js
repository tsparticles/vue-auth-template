(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-auth-template/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},4805:function(e,t,r){"use strict";var n=r("8ce0"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i={name:"App"},l=i,u=(r("034f"),r("2877")),c=Object(u["a"])(l,o,s,!1,null,null,null),p=c.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),n("router-link",{attrs:{to:"/login"}},[e._v("Go to Login view")]),n("router-link",{attrs:{to:"/register"}},[e._v("Go to Register view")])],1)},v=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],_={name:"HelloWorld",props:{msg:String}},h=_,b=(r("4805"),Object(u["a"])(h,d,m,!1,null,"b9167eee",null)),g=b.exports,y={name:"Home",components:{HelloWorld:g}},w=y,j=Object(u["a"])(w,f,v,!1,null,"ac5e8c30",null),k=j.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Particles",{attrs:{id:"tsparticles",options:e.particlesConfig}}),r("main",{staticClass:"box"},[r("h2",[e._v("Login")]),r("form",[e._m(0),e._m(1),r("div",[r("button",{staticStyle:{float:"left"},attrs:{type:"submit",name:""}},[e._v("Submit")]),r("router-link",{staticClass:"button",staticStyle:{float:"left"},attrs:{to:"/register"}},[e._v("Register")])],1)])]),r("footer")],1)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inputBox"},[r("label",{attrs:{for:"userName"}},[e._v("Username")]),r("input",{attrs:{type:"text",name:"userName",id:"userName",placeholder:"type your username",required:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inputBox"},[r("label",{attrs:{for:"userPassword"}},[e._v("Password")]),r("input",{attrs:{type:"password",name:"userPassword",id:"userPassword",placeholder:"type your password",required:""}})])}],C=r("9b1b"),O={name:"Login",data:function(){return{particlesConfig:C}}},E=O,$=(r("af38"),Object(u["a"])(E,x,P,!1,null,"52a40993",null)),S=$.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Particles",{attrs:{id:"tsparticles",options:e.particlesConfig}}),r("main",{staticClass:"box"},[r("h2",[e._v("Register")]),r("form",[e._m(0),e._m(1),e._m(2),r("button",{staticStyle:{float:"left"},attrs:{type:"submit",name:""}},[e._v("Submit")]),r("router-link",{staticClass:"button",staticStyle:{float:"left"},attrs:{to:"/login"}},[e._v("Login")])],1)]),r("footer")],1)},L=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inputBox"},[r("label",{attrs:{for:"userName"}},[e._v("Username")]),r("input",{attrs:{type:"text",name:"userName",id:"userName",placeholder:"type your username",required:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inputBox"},[r("label",{attrs:{for:"userPassword"}},[e._v("Password")]),r("input",{attrs:{type:"password",name:"userPassword",id:"userPassword",placeholder:"type your password",required:""}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"inputBox"},[r("label",{attrs:{for:"userConfirmPassword"}},[e._v("Confirm Password")]),r("input",{attrs:{type:"password",name:"userPassword",id:"userConfirmPassword",placeholder:"confirm your password",required:""}})])}],q={name:"Register",data:function(){return{particlesConfig:C}}},z=q,B=(r("c470"),Object(u["a"])(z,N,L,!1,null,"3576331b",null)),M=B.exports,R=r("d7da");n["a"].use(a["a"]),n["a"].use(R["a"]),n["a"].config.productionTip=!1;var H=[{path:"/",component:k},{path:"/login",component:S},{path:"/register",component:M}],T=new a["a"]({routes:H});new n["a"]({render:function(e){return e(p)},router:T}).$mount("#app")},"610f":function(e,t,r){},7674:function(e,t,r){},"85ec":function(e,t,r){},"8ce0":function(e,t,r){},"9b1b":function(e){e.exports=JSON.parse('{"fpsLimit":60,"particles":{"number":{"value":50},"color":{"value":["#5bc0eb","#fde74c","#9bc53d","#e55934","#fa7921"]},"shape":{"type":"circle"},"opacity":{"value":0.5},"size":{"value":400,"random":{"enable":true,"minimumValue":200}},"move":{"enable":true,"speed":10,"direction":"top","outMode":"destroy"}},"interactivity":{"detectsOn":"canvas","events":{"resize":true}},"detectRetina":true,"background":{"color":"#fff","image":"","position":"50% 50%","repeat":"no-repeat","size":"cover"},"emitters":{"direction":"top","position":{"x":50,"y":120},"rate":{"delay":0.2,"quantity":2},"size":{"width":100,"height":0}}}')},af38:function(e,t,r){"use strict";var n=r("610f"),a=r.n(n);a.a},c470:function(e,t,r){"use strict";var n=r("7674"),a=r.n(n);a.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.81303f9c.js.map