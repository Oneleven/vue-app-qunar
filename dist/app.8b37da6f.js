(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],d=0,h=[];d<c.length;d++)r=c[d],a[r]&&h.push(a[r][0]),a[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,c=1;c<i.length;c++){var o=i[c];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={1:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;n.push([21,0]),i()})({21:function(t,e,i){t.exports=i("Vtdi")},"38o1":function(t,e,i){},"4BoG":function(t,e,i){"use strict";var s=i("TeM0"),a=i.n(s);a.a},"626i":function(t,e,i){"use strict";var s=i("9XZE"),a=i.n(s);a.a},"68OM":function(t,e,i){},"6fLE":function(t,e,i){"use strict";var s=i("ITvA"),a=i.n(s);a.a},"9XZE":function(t,e,i){},AVsS:function(t,e,i){"use strict";var s=i("SPv4"),a=i.n(s);a.a},CZgq:function(t,e,i){"use strict";var s=i("xCll"),a=i.n(s);a.a},GT1o:function(t,e,i){"use strict";var s=i("krA6"),a=i.n(s);a.a},GpAn:function(t,e,i){"use strict";var s=i("Mxk0"),a=i.n(s);a.a},"H+pT":function(t,e,i){},ITvA:function(t,e,i){},Irgs:function(t,e,i){},JALM:function(t,e,i){"use strict";var s=i("gnNf"),a=i.n(s);a.a},LmhD:function(t,e,i){},Mxk0:function(t,e,i){},PbQS:function(t,e,i){},Qoqa:function(t,e,i){},SPv4:function(t,e,i){},TeM0:function(t,e,i){},Vgux:function(t,e,i){"use strict";var s=i("cclI"),a=i.n(s);a.a},Vtdi:function(t,e,i){"use strict";i.r(e);i("VRzm");var s=i("Kw5r"),a=i("jE9Z"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),i("home-swiper",{attrs:{list:t.swiperList}}),i("home-icons",{attrs:{list:t.iconList}}),i("home-recommend",{attrs:{list:t.recommendList}}),i("home-weekend",{attrs:{list:t.weekendList}})],1)},r=[],c=i("yT7P"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"header-left "},[i("svg",{staticClass:"icon icon-fanhui",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-arrow-left-copy"}})])]),i("div",{staticClass:"header-input"},[i("svg",{staticClass:"icon icon-search",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-sousuo"}})]),i("input",{attrs:{type:"text",placeholder:"输入城市/景点/游玩主题"}})]),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v(t._s(this.city)+"\n      "),i("svg",{staticClass:"icon icon-jiantou",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-jiantou"}})])])])],1)},l=[],u=i("L2JU"),d={name:"HomeHeader",computed:Object(c["a"])({},Object(u["c"])(["city"]))},h=d,p=(i("AVsS"),i("KHd+")),m=Object(p["a"])(h,o,l,!1,null,"44973cfc",null),f=m.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper"},[t.showList?i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.list,function(t){return i("swiper-slide",{key:t.id},[i("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):t._e()],1)])},g=[],y={name:"HomeSwiper",props:{list:Array},computed:{showList:function(){return this.list.length}},data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0}}}},_=y,C=(i("XwA5"),Object(p["a"])(_,v,g,!1,null,"13638cc6",null)),w=C.exports,k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(t.pages,function(e,s){return i("swiper-slide",{key:s,staticClass:"icon-wrapper"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgurl}})]),i("p",{staticClass:"icon-desc"},[t._v(t._s(e.imgdes))])])}))}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"},[t._v("123")])],2)],1)},b=[],j=(i("rGqo"),{name:"HomeIcons",props:{list:Array},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}}}),x=j,O=(i("nsR6"),Object(p["a"])(x,k,b,!1,null,"9d46f4f6",null)),$=O.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-aixin"}})]),i("span",[t._v("猜你喜欢")])]),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item",attrs:{tag:"li",to:"/detail"+e.id}},[i("div",{staticClass:"item-left"},[i("img",{attrs:{src:e.imgUrl,alt:e.itemName}}),i("p",[t._v("随买随用")])]),i("div",{staticClass:"item-right"},[i("p",[t._v(t._s(e.itemName))]),i("div",{staticClass:"item-star"},[i("span",{staticClass:"star"},[t._v(t._s(e.commentStar))]),i("span",{staticClass:"comment"},[t._v(t._s(e.commentNum))])]),i("div",{staticClass:"item-bottom"},[i("div",{staticClass:"item-price"},[i("span",[t._v("¥")]),i("span",[t._v(t._s(e.price))]),i("span",[t._v("起")])]),i("div",{staticClass:"item-location"},[i("span",[t._v(t._s(e.location))])])])])])}))])},S=[],L={name:"HomeRecommend",props:{list:Array}},I=L,P=(i("GT1o"),Object(p["a"])(I,E,S,!1,null,"1494964e",null)),T=P.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weekend"},[i("h2",[t._v("周末去哪儿")]),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"weekend-list"},[i("img",{attrs:{src:e.imgUrl,alt:e.weekendTitle}}),i("div",{staticClass:"weekend-desc"},[i("h3",[t._v(t._s(e.weekendTitle))]),i("p",[t._v(t._s(e.weekendDesc))])])])}))])},A=[],D={name:"weekend",props:{list:Array}},G=D,N=(i("ZYtx"),Object(p["a"])(G,H,A,!1,null,"86564b9e",null)),V=N.exports,z=i("vDqi"),M=i.n(z),R={name:"home",components:{HomeHeader:f,HomeSwiper:w,HomeIcons:$,HomeRecommend:T,HomeWeekend:V},data:function(){return{lastCity:"",swiperList:[],iconList:[],recommendList:[],weekendList:[]}},computed:Object(c["a"])({},Object(u["c"])(["city"])),methods:{getHomeInfo:function(){M.a.get("./static/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){t=t.data;t.success&&(this.swiperList=t.data.swiperList,this.iconList=t.data.iconList,this.recommendList=t.data.recommendList,this.weekendList=t.data.weekendList)}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.getHomeInfo(),this.lastCity=this.city)}},q=R,B=Object(p["a"])(q,n,r,!1,null,null,null),X=B.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header",{attrs:{cities:t.cities},on:{change:t.handleChange}}),i("city-list",{directives:[{name:"show",rawName:"v-show",value:t.cityshow,expression:"cityshow"}],attrs:{cities:t.cities,hot:t.hotCities,location:t.locations}})],1)},J=[],Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("header",[i("div",{staticClass:"title"},[i("p",[t._v("城市选择")]),i("router-link",{attrs:{to:"/"}},[i("svg",{staticClass:"icon icon-fanhui",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-arrow-left-copy"}})])])],1),i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),i("li",{directives:[{name:"show",rawName:"v-show",value:!t.list.length,expression:"!list.length"}],staticClass:"search-item"},[t._v("没有找到匹配的城市>.<! ")])],2)])])},F=[],K=(i("f3/d"),{name:"cityHeader",props:{cities:Object},data:function(){return{keyword:"",list:[],timer:null,showCity:111}},methods:Object(c["a"])({handleCityClick:function(t){this.changeCity(t),this.$router.push("/"),this.keyword=""}},Object(u["b"])(["changeCity"])),watch:{keyword:function(){var t=this,e=this.keyword.trim().toLowerCase();this.timer&&clearTimeout(this.timer),e?this.showCity=!1:(this.list=[],this.showCity=!0),this.$emit("change",this.showCity),this.timer=setTimeout(function(){var i=[];for(var s in t.cities)t.cities[s].forEach(function(t){(t.spell.indexOf(e)>-1||t.name.indexOf(e)>-1)&&i.push(t)});t.list=i},20)}}}),U=K,W=(i("a9S3"),Object(p["a"])(U,Q,F,!1,null,"ab4d8e84",null)),Y=W.exports,tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("section",[i("h2",{staticClass:"title position"},[t._v("您的位置")]),i("nav",{staticClass:"current-location"},[i("a",[t._v(" "+t._s(this.city)+" ")])])]),i("section",[i("h2",{staticClass:"title"},[t._v("热门城市")]),i("ul",{staticClass:"hot-city-list content"},t._l(t.hot,function(e){return i("li",{key:e.id,on:{click:function(i){t.handleCityClick(e.name)}}},[i("a",[t._v(t._s(e.name))])])}))]),i("section",[i("h2",{staticClass:"title"},[t._v("字母排序")]),i("ul",{staticClass:"character-list"},t._l(t.location,function(e){return i("li",{key:e.letter},[i("a",{attrs:{href:"#"+e.url}},[t._v(t._s(e.letter))])])}))]),i("section",t._l(t.cities,function(e,s,a){return i("div",{key:s},[i("h2",{staticClass:"title",attrs:{id:t.name[a]}},[t._v(t._s(s))]),i("ul",{staticClass:"content-list"},t._l(e,function(e){return i("li",{key:e.id,on:{click:function(i){t.handleCityClick(e.name)}}},[i("a",[t._v(t._s(e.name))])])}))])}))])},et=[],it=(i("rE2o"),i("ioFf"),{name:"cityList",props:{cities:Object,hot:Array,location:Array},methods:Object(c["a"])({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(u["b"])(["changeCity"])),computed:Object(c["a"])({name:function(){var t=[],e=!0,i=!1,s=void 0;try{for(var a,n=this.location[Symbol.iterator]();!(e=(a=n.next()).done);e=!0){var r=a.value;t.push(r.url)}}catch(t){i=!0,s=t}finally{try{e||null==n.return||n.return()}finally{if(i)throw s}}return t}},Object(u["c"])(["city"]))}),st=it,at=(i("4BoG"),Object(p["a"])(st,tt,et,!1,null,"f3bd3968",null)),nt=at.exports,rt={name:"City",components:{CityHeader:Y,CityList:nt},data:function(){return{cities:{},hotCities:[],locations:[],cityshow:!0}},methods:{getCityInfo:function(){M.a.get("./static/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){var e=t.data;e.success&&(this.cities=e.data.cities,this.hotCities=e.data.hotCities,this.locations=e.data.locations)},handleChange:function(t){this.cityshow=t}},mounted:function(){this.getCityInfo()}},ct=rt,ot=(i("sV18"),Object(p["a"])(ct,Z,J,!1,null,"23c2fe79",null)),lt=ot.exports,ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("detail-album",{attrs:{sightname:t.sightname}}),i("detail-introduction",{attrs:{sightname:t.sightname}}),i("detail-recommend",{attrs:{sightname:t.sightname}}),i("detail-tickets",{attrs:{sightname:t.sightname}}),i("detail-banner",{attrs:{sightname:t.sightname}})],1)},dt=[],ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("router-link",{directives:[{name:"show",rawName:"v-show",value:t.showIcon,expression:"showIcon"}],staticClass:"return",attrs:{tag:"div",to:"/"}},[i("svg",{staticClass:"icon icon-fanhui fanhui",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-arrow-left-copy"}})])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showIcon,expression:"!showIcon"}],staticClass:"header",style:t.opactiy},[i("router-link",{staticClass:"header-left",attrs:{tag:"div",to:"/"}},[i("svg",{staticClass:"icon icon-fanhui",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-arrow-left-copy"}})])]),t.project?i("p",[t._v(t._s(this.$store.getters.maindatas.singlePlay.name))]):t._e()],1)],1)},pt=[],mt={name:"Banner",props:{sightname:Object},computed:{project:function(){var t=this.$route.params.id,e=this.sightname[t];return e}},data:function(){return{showIcon:!0,opactiy:{opactiy:0}}},methods:{handleScroll:function(){var t=document.documentElement.scrollTop;t>.1?(this.opactiy={opacity:t/160},this.showIcon=!1):this.showIcon=!0}},activated:function(){window.addEventListener("scroll",this.handleScroll)},deactivated:function(){window.removeEventListener("scroll",this.handleScroll)}},ft=mt,vt=(i("Vgux"),Object(p["a"])(ft,ht,pt,!1,null,"5f78feb9",null)),gt=vt.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.project?i("div",[i("div",{staticClass:"album",on:{click:t.handleShowClick}},[i("img",{attrs:{src:t.project.pictures[0]}}),i("div",{staticClass:"wrapper"},[i("p",[t._v(" "+t._s(this.$store.getters.maindatas.singlePlay.name)+" ")]),i("div",{staticClass:"img-info"},[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-tupian"}})]),i("span",[t._v(t._s(this.$store.getters.maindatas.singlePlay.pictures.length))])])])]),i("fade-animation",[i("gallery",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{picturesList:this.project},on:{hidden:t.galleryHidden}})],1)],1):t._e()},_t=[],Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",on:{click:t.handleGalleryClick}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:t.swiperOption}},[t._l(this.$store.getters.maindatas.singlePlay.pictures,function(t,e){return i("swiper-slide",{key:e},[i("img",{staticClass:"swiper-img",attrs:{src:t}})])}),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},wt=[],kt={name:"Gallery",computed:{pictures:function(){return this.picturesList.pictures}},data:function(){return{swiperOption:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0},heihei:this.picturesList}},methods:{handleGalleryClick:function(){this.$emit("hidden")}}},bt=kt,jt=(i("6fLE"),Object(p["a"])(bt,Ct,wt,!1,null,"dd42ffbe",null)),xt=jt.exports,Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",[t._t("default")],2)],1)},$t=[],Et={name:"Fade"},St=Et,Lt=(i("JALM"),Object(p["a"])(St,Ot,$t,!1,null,"24716f2d",null)),It=Lt.exports,Pt={name:"Album",props:{sightname:Object},computed:{project:function(){var t=this.$route.params.id,e=this.sightname[t];return e}},components:{Gallery:xt,FadeAnimation:It},data:function(){return{showGallery:!1}},methods:{handleShowClick:function(){this.showGallery=!0},galleryHidden:function(){this.showGallery=!1}}},Tt=Pt,Ht=(i("lxzP"),Object(p["a"])(Tt,yt,_t,!1,null,"30a8932c",null)),At=Ht.exports,Dt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.datas?i("div",{staticClass:"wrapper"},[i("div",{staticClass:"brief"},[i("div",{staticClass:"score-container"},[i("div",{staticClass:"score-left"},[i("p",{staticClass:"score"},[i("span",[t._v(t._s(this.$store.getters.maindatas.singlePlay.score))]),i("span",[t._v("分")]),i("span",[t._v(" "+t._s(this.$store.getters.maindatas.singlePlay.desc))])]),i("p",{staticClass:"content"},[i("span",[t._v(t._s(this.$store.getters.maindatas.singlePlay.number)+"条评论")]),i("span",[t._v(t._s(this.$store.getters.maindatas.singlePlay.guides)+"条攻略")])]),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-jiantou-copy"}})])]),i("div",{staticClass:"score-right"},[i("p",{staticClass:"brief-title"},[t._v(" 景点简介 ")]),i("p",{staticClass:"content"},[t._v("开放时间、贴士")]),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-jiantou-copy"}})])])])]),i("div",{staticClass:"location"},[i("svg",{staticClass:"icon-location",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-location"}})]),i("p",[t._v(t._s(this.$store.getters.maindatas.singlePlay.location))]),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-jiantou-copy"}})])])]):t._e()])},Gt=[],Nt={name:"Introduction",props:{sightname:Object},computed:{datas:function(){var t=this.$route.params.id,e=this.sightname[t];return e}}},Vt=Nt,zt=(i("CZgq"),Object(p["a"])(Vt,Dt,Gt,!1,null,"62c952f8",null)),Mt=zt.exports,Rt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.project?i("div",{attrs:{id:"text"}},t._l(this.$store.getters.maindatas.ticketsObject,function(e,s,a){return i("div",{key:a,staticClass:"tickets-wrapper"},[i("h3",[i("span"),t._v(t._s(s)+"\n        ")]),t._l(e,function(e,s,a){return i("div",{key:a,on:{click:function(e){t.showDetailTickets(e)}}},[i("div",{staticClass:"content"},[i("p",[t._v(t._s(s))]),i("div",{staticClass:"price"},[i("span",[t._v("¥")]),i("span",[t._v(t._s(e[0].price))]),i("span",[t._v("起")])]),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-jiantou1-copy"}})])]),t._l(e,function(t,e){return i("ticket",{key:e,staticClass:"ticket",attrs:{thirdValue:t}})})],2)})],2)})):t._e()},qt=[],Bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-wrapper"},[i("div",{staticClass:"recommend-detail"},[i("div",{staticClass:"detail-left"},[i("p",{staticClass:"ticket-name"},[t._v(t._s(t.thirdValue.name))]),i("p",{staticClass:"ticket-time"},[i("img",{attrs:{src:"https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png",alt:"clock"}}),t._v(t._s(t.thirdValue.rule))]),i("ul",{staticClass:"ticket-content"},t._l(t.thirdValue.label,function(e,s){return i("li",{key:s},[i("span",{ref:"spanlogo",refInFor:!0},[t._v("\n                    "+t._s(e))])])})),i("ul",{staticClass:"ticket-rule"},[t._l(t.thirdValue.attention,function(e,s){return i("li",{key:s},[t._v(" "+t._s(e)+" ")])}),i("svg",{staticClass:"icon-arrow",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-jiantou-copy"}})])],2)]),i("div",{staticClass:"detail-right"},[i("p",[i("span",[t._v("¥")]),i("span",[t._v(t._s(t.thirdValue.price))])]),i("button",[t._v("预定")])])])])},Xt=[],Zt={name:"mainticket",props:["thirdValue"]},Jt=Zt,Qt=(i("s2X5"),Object(p["a"])(Jt,Bt,Xt,!1,null,"c31263b8",null)),Ft=Qt.exports;var Kt={name:"Tickets",props:{sightname:Object},components:{ticket:Ft},computed:{project:function(){var t=this.$route.params.id,e=this.sightname[t];return e}},methods:{showDetailTickets:function(t){var e=t.currentTarget,i=e.getElementsByClassName("ticket"),s=!0,a=!1,n=void 0;try{for(var r,c=i[Symbol.iterator]();!(s=(r=c.next()).done);s=!0){var o=r.value;"block"===o.style.display?o.style.display="none":o.style.display="block"}}catch(t){a=!0,n=t}finally{try{s||null==c.return||c.return()}finally{if(a)throw n}}var l=e.getElementsByClassName("icon"),u=!0,d=!1,h=void 0;try{for(var p,m=l[Symbol.iterator]();!(u=(p=m.next()).done);u=!0){var f=p.value;"rotate(180deg)"===f.style.transform?f.style.transform="rotate(0deg)":f.style.transform="rotate(180deg)"}}catch(t){d=!0,h=t}finally{try{u||null==m.return||m.return()}finally{if(d)throw h}}}}},Ut=Kt,Wt=(i("626i"),Object(p["a"])(Ut,Rt,qt,!1,null,"496a371e",null)),Yt=Wt.exports,te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.project?i("div",{staticClass:"recommend-wrapper"},[i("h3",[i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-dianzan"}})]),t._v("\n        去哪儿推荐\n    ")]),t._l(this.$store.getters.maindatas.ticketsRecommend,function(t,e){return i("ticket",{key:e,attrs:{item:t}})})],2):t._e()},ee=[],ie=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommend-wrapper"},[i("div",{staticClass:"recommend-detail"},[i("div",{staticClass:"detail-left"},[i("p",{staticClass:"ticket-name"},[t._v(t._s(t.item.name))]),i("p",{staticClass:"ticket-time"},[i("img",{attrs:{src:"https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png",alt:"clock"}}),t._v(t._s(t.item.rule))]),t._m(0)]),i("div",{staticClass:"detail-right"},[i("p",[i("span",[t._v("¥")]),i("span",[t._v(t._s(t.item.price))])]),i("button",[t._v("预定")])])])])},se=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("span",[i("img",{attrs:{src:"https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png",alt:"logo"}}),t._v("自营")])]),i("li",[i("span",[t._v("无需换票")])]),i("li",[i("span",[t._v("条件退")])])])}],ae={name:"ticket",props:["item"]},ne=ae,re=(i("GpAn"),Object(p["a"])(ne,ie,se,!1,null,"628e5212",null)),ce=re.exports,oe={name:"Recommend",components:{ticket:ce},props:{sightname:Object},computed:{project:function(){var t=this.$route.params.id,e=this.sightname[t];return e}}},le=oe,ue=(i("ePid"),Object(p["a"])(le,te,ee,!1,null,"396d1480",null)),de=ue.exports,he={name:"Detail",components:{DetailBanner:gt,DetailIntroduction:Mt,DetailAlbum:At,DetailTickets:Yt,DetailRecommend:de},data:function(){return{sightname:{},lastlocation:""}},methods:{getDetailInfo:function(){M.a.get("./static/detail.json",{params:{id:this.$route.params.id}}).then(this.getDetailSucc)},getDetailSucc:function(t){var e=t.data;if(e.success){var i=e.data.sightname,s=this.$route.params.id;this.sightname=i,this.$store.dispatch("getInfo",{value:i,mark:s})}}},mounted:function(){this.getDetailInfo()}},pe=he,me=(i("opwm"),Object(p["a"])(pe,ut,dt,!1,null,"182bf8e5",null)),fe=me.exports;s["a"].use(a["a"]);var ve=new a["a"]({routes:[{path:"/",name:"home",component:X},{path:"/city",name:"City",component:lt},{path:"/detail:id",name:"Detail",component:fe}],scrollBehavior:function(t,e,i){return{x:0,y:0}}});i("hhXQ"),i("yt8O"),i("RW0V");s["a"].use(u["a"]);var ge="上海";try{localStorage.city&&(ge=localStorage.city)}catch(t){console.log(t)}var ye=new u["a"].Store({state:{detail:{},city:ge},actions:{getInfo:function(t,e){t.commit("changeDetail",e)}},mutations:{changeDetail:function(t,e){t.detail=e},changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){console.log(t)}}},getters:{maindatas:function(t){var e=t.detail.mark,i=t.detail.value,s=i[e],a=s.recommend,n=s.tickets,r=Object.keys(s.tickets),c=Object.values(s.tickets),o=Object.keys(c),l=Object.values(c);return{singlePlay:s,tickets:s.ticketsKind,ticketsKind:r,ticketsNmae:o,ticketsContent:l,ticketsRecommend:a,ticketsObject:n}}}}),_e=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("keep-alive",{attrs:{exclude:"Detail"}},[i("router-view")],1)],1)},Ce=[],we={},ke=Object(p["a"])(we,_e,Ce,!1,null,null,null),be=ke.exports,je=i("/jzl"),xe=i.n(je),Oe=i("H4Ca"),$e=i.n(Oe);i("36R9"),i("PbQS"),i("yPTG");s["a"].config.productionTip=!1,xe.a.attach(document.body),s["a"].use($e.a),new s["a"]({router:ve,store:ye,render:function(t){return t(be)}}).$mount("#app")},XwA5:function(t,e,i){"use strict";var s=i("68OM"),a=i.n(s);a.a},ZYtx:function(t,e,i){"use strict";var s=i("yGN9"),a=i.n(s);a.a},a9S3:function(t,e,i){"use strict";var s=i("yzh7"),a=i.n(s);a.a},cclI:function(t,e,i){},ePid:function(t,e,i){"use strict";var s=i("LmhD"),a=i.n(s);a.a},fb08:function(t,e,i){},gnNf:function(t,e,i){},krA6:function(t,e,i){},lxzP:function(t,e,i){"use strict";var s=i("H+pT"),a=i.n(s);a.a},nsR6:function(t,e,i){"use strict";var s=i("38o1"),a=i.n(s);a.a},opwm:function(t,e,i){"use strict";var s=i("fb08"),a=i.n(s);a.a},s2X5:function(t,e,i){"use strict";var s=i("Irgs"),a=i.n(s);a.a},sV18:function(t,e,i){"use strict";var s=i("Qoqa"),a=i.n(s);a.a},xCll:function(t,e,i){},yGN9:function(t,e,i){},yPTG:function(t,e,i){},yzh7:function(t,e,i){}});
//# sourceMappingURL=app.8b37da6f.js.map