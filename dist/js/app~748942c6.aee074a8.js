(function(t){function e(e){for(var r,s,a=e[0],c=e[1],u=e[2],d=0,f=[];d<a.length;d++)s=a[d],o[s]&&f.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={"app~748942c6":0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vtdemo/dist/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=c;i.push([0,"chunk-vendors~2a42e354","chunk-vendors~d939e436","chunk-vendors~b55f28a1","chunk-vendors~2b61847a","chunk-vendors~7d359b94","chunk-vendors~690b702c","chunk-vendors~d5fbabd3","chunk-vendors~ee2ae8d0","chunk-vendors~77bf5e45","chunk-vendors~f9ca8911","chunk-vendors~ec8c427e","chunk-vendors~fdc6512a","chunk-vendors~02576867","chunk-vendors~0605657e","chunk-vendors~d2305125"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0549":function(t,e,n){},"0c65":function(t,e,n){},1:function(t,e){},"28ae":function(t,e,n){"use strict";var r=n("0c65"),o=n.n(r);o.a},"531e":function(t,e,n){"use strict";var r=n("5a33"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{staticClass:"view"})],1)},i=[],s=(n("7faf"),n("2877")),a={},c=Object(s["a"])(a,o,i,!1,null,null,null),u=c.exports,l={CC:{CHT:"中文",JA:"日文",VI:"越南文",EN:"英文"},LEVEL:{1:"初級",2:"中級",3:"中高級",4:"高級"},SORT:"排序",PUBLISH:"發佈時間",VIEWS:"觀看次數",COLLECTCOUNT:"收藏次數",DURATION:"長度",LESS_THAN_4:"4 分鐘以下",BETWEEN_5_10:"5 - 10 分鐘",MORE_THAN_10:"超過 10 分鐘",NOLIMIT:"不限",NOT_FOUND:"沒有篩選結果"},d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("FilterBar"),n("List")],1)},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter"},t._l(t.FILTER_GROUPS,function(e){return n("FilterGroup",{key:t.get(e,"name"),attrs:{group:e}})}),1)},m=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-group"},[n("div",{staticClass:"title"},[n("span",{domProps:{textContent:t._s(t.$t(t.get(t.group,"name","").toUpperCase()))}})]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.get(t.group,"items.length"),expression:"get(group, 'items.length')"}],staticClass:"items"},t._l(t.get(t.group,"items",[]),function(e){return n("div",{key:t.get(t.group,"name")+"-"+e,staticClass:"item",class:{active:e===t.activeItem},on:{click:function(n){return t.changeFilter(e)}}},[n("span",{domProps:{textContent:t._s(t.$t(e.toUpperCase()))}})])}),0)])},g=[],_=n("2ef0"),b=function(t,e,n){return t.dispatch("SET_VALUE_FOR_FILTER",{type:e,value:n})},O={name:"FilterGroup",data:function(){return{activeItem:""}},methods:{changeFilter:function(t){this.activeItem=t,b(this.$store,Object(_["get"])(this.group,"name",""),this.activeItem)},get:_["get"]},mounted:function(){this.activeItem=Object(_["get"])(this.group,"items.0")},props:{group:{}}},C=O,j=(n("28ae"),Object(s["a"])(C,h,g,!1,null,null,null)),T=j.exports,E=[{name:"sort",items:["publish","views","collectCount"]},{name:"duration",items:["nolimit","less_than_4","between_5_10","more_than_10"]}],w={less_than_4:[0,5],between_5_10:[5,10],more_than_10:[10]},I={name:"FilterBar",components:{FilterGroup:T},data:function(){return{FILTER_GROUPS:E}},methods:{get:_["get"]}},L=I,S=(n("e770"),Object(s["a"])(L,v,m,!1,null,null,null)),k=S.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list"},[n("div",{staticClass:"list__container"},[t.list.length>0?t._l(t.list,function(e,r){return n("ListItem",{key:t.get(e,"id"),attrs:{item:e,index:r}})}):n("div",{staticClass:"no-found"},[n("span",{domProps:{textContent:t._s(t.$t("NOT_FOUND"))}})])],2)])},x=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-item"},[n("div",{staticClass:"list-item__leading"},[n("img",{attrs:{src:t.get(t.item,"thumbnail")}}),n("div",{staticClass:"duration"},[n("span",{domProps:{textContent:t._s(t.duration)}})])]),n("div",{staticClass:"list-item__wrapper"},[n("div",{staticClass:"list-item__title"},[n("span",{domProps:{textContent:t._s(t.title)}})]),n("div",{staticClass:"list-item__info"},[n("div",{staticClass:"count"},[n("span",{domProps:{textContent:t._s(t.get(t.item,"collectCount"))}})]),n("div",{staticClass:"tags"},[t._l(t.get(t.item,"captions",[]),function(e){return n("div",{key:e,staticClass:"caption"},[n("span",{domProps:{textContent:t._s(t.$t("CC."+e.toUpperCase()))}})])}),n("div",{staticClass:"level"},[n("span",{domProps:{textContent:t._s(t.$t("LEVEL."+t.get(t.item,"level",1)))}})])],2)])])])},P=[],N=n("59f0"),$={name:"ListItem",computed:{duration:function(){var t=Object(_["toInteger"])(Object(_["get"])(this.item,"duration")/60/60),e=Object(_["padStart"])(Object(_["toInteger"])(Object(_["get"])(this.item,"duration")/60)%60,2,"0"),n=Object(_["padStart"])(Object(_["get"])(this.item,"duration")%60,2,"0");return t?"".concat(t,":").concat(e,":").concat(n):"".concat(e,":").concat(n)},title:function(){return Object(N["a"])(Object(_["get"])(this.item,"title"),40)}},data:function(){return{isHead:!1}},methods:{get:_["get"]},props:{item:{},index:{default:0}}},R=$,A=(n("9537"),Object(s["a"])(R,F,P,!1,null,null,null)),U=A.exports,B={name:"List",components:{ListItem:U},computed:{list:function(){return Object(_["get"])(this.$store,"getters.filteredList",[])}},data:function(){return{}},methods:{get:_["get"]},mounted:function(){}},M=B,H=(n("531e"),Object(s["a"])(M,y,x,!1,null,null,null)),G=H.exports,V=function(t){return t.dispatch("FETCH_LIST",{})},D={name:"home",components:{FilterBar:k,List:G},beforeMount:function(){V(this.$store)}},W=D,J=Object(s["a"])(W,f,p,!1,null,null,null),z=J.exports;r["a"].use(d["a"]);var Y=new d["a"]({mode:"history",base:"/vtdemo/dist/",routes:[{path:"/",name:"home",component:z}]}),q=(n("55dd"),n("2f62")),K=n("bc3a"),Q=n.n(K);r["a"].use(q["a"]);var X=function(){return Q.a.get("https://us-central1-lithe-window-713.cloudfunctions.net/fronted-demo")},Z=new q["a"].Store({state:{list:[],filter:{sort:"publish",duration:"nolimit"}},mutations:{SET_LIST:function(t,e){var n=e.list;t["list"]=n||[]},SET_SORTBY:function(t,e){var n=e.type,r=void 0===n?"sort":n,o=e.value,i=void 0===o?"publish":o;t["filter"][r]=i}},actions:{FETCH_LIST:function(t,e){var n=t.commit;t.state,e.params;return X().then(function(t){var e=Object(_["get"])(t,"data.data");n("SET_LIST",{list:e})}).catch(function(t){console.error("FETING DATA FROM API IN FAIL."),console.error(t)})},SET_VALUE_FOR_FILTER:function(t,e){var n=t.commit,r=e.type,o=e.value;return n("SET_SORTBY",{type:r,value:o})}},getters:{filteredList:function(t,e){var n=[];if("nolimit"===t.filter.duration)n=Object(_["get"])(t,"list");else{var r=60*Object(_["get"])(w,"".concat(t.filter.duration,".0")),o=60*Object(_["get"])(w,"".concat(t.filter.duration,".1"),0);n=Object(_["filter"])(Object(_["get"])(t,"list"),function(t){return o?t.duration<o&&t.duration>=r:t.duration>=r})}return Object(_["reverse"])(Object(_["sortBy"])(n,[t.filter.sort]))}}}),tt=n("a925"),et=n("9483");Object(et["a"])("".concat("/vtdemo/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].use(tt["a"]),r["a"].config.productionTip=!1;var nt={"zh-TW":l},rt=new tt["a"]({locale:"zh-TW",messages:nt});new r["a"]({i18n:rt,router:Y,store:Z,render:function(t){return t(u)}}).$mount("#app")},"5a33":function(t,e,n){},"7faf":function(t,e,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(t,e,n){},9537:function(t,e,n){"use strict";var r=n("0549"),o=n.n(r);o.a},c925:function(t,e,n){},e770:function(t,e,n){"use strict";var r=n("c925"),o=n.n(r);o.a}});
//# sourceMappingURL=app~748942c6.aee074a8.js.map