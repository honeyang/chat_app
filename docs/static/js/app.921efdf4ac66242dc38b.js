webpackJsonp([1],{0:function(e,s,t){t("j1ja"),e.exports=t("NHnr")},"7zck":function(e,s){},"8jzJ":function(e,s){},MYOS:function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=t("7+uW"),a={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},a,!1,function(e){t("8jzJ")},null,null).exports,o=t("/ocq"),i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-app",[t("v-content",[t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"align-center":"","justify-center":""}},[t("v-flex",{staticClass:"text-xs-center",attrs:{xs8:"",md4:""}},[t("h1",[e._v("Chat App")]),e._v(" "),t("v-form",{on:{submit:function(s){return s.preventDefault(),e.enterChat(s)}}},[t("v-text-field",{attrs:{name:"login",type:"text",label:"Enter your name",autocomplete:"off"},model:{value:e.name,callback:function(s){e.name=s},expression:"name"}}),e._v(" "),e.feedback?t("p",[e._v(e._s(e.feedback))]):e._e(),e._v(" "),t("v-btn",{attrs:{type:"submit",color:"primary"}},[e._v("시작하기")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};var c=t("VU/8")({name:"Welcome",data:function(){return{name:null,feedback:"6글자 이하로 입력해주세요."}},methods:{enterChat:function(){this.name?this.$router.push({name:"Chat",params:{name:this.name}}):this.feedback="닉네임이 있어야 합니다."}}},i,!1,function(e){t("QbHV")},"data-v-03f6d18a",null).exports,m=t("kxiW"),l=t.n(m),u=(t("881v"),l.a.initializeApp({apiKey:"AIzaSyAAWApntxzQsUBNNwIZLhIo8xkf5LZwvcI",authDomain:"ninja-chat-515a4.firebaseapp.com",databaseURL:"https://ninja-chat-515a4.firebaseio.com",projectId:"ninja-chat-515a4",storageBucket:"",messagingSenderId:"28921239105"}));u.firestore().settings({timestampsInSnapshots:!0});var j=u.firestore(),d=t("PJh5"),p=t.n(d),h={name:"Chat",props:["name"],data:function(){return{messages:[],newMessage:null,drawerRight:!1,right:null,dateDivider:null}},methods:{addMessage:function(){this.newMessage&&(j.collection("messages").add({content:this.newMessage,name:this.name,timestamp:Date.now()}).catch(function(e){console.log(e)}),this.newMessage=null)},sendMessage:function(){this.addMessage()},isMine:function(e,s){var t="";return e.name==this.name?t+="from_me":t+="from_you",s>0&&e.name==this.messages[s-1].name&&(t+=" sameSender"),s<this.messages.length-1&&p()(e.timestamp).format("LT")==p()(this.messages[s+1].timestamp).format("LT")&&e.name==this.messages[s+1].name&&(t+=" sameTime"),t},addDateDivider:function(e,s){return 0==s?p()(e.timestamp).format("LL"):s<this.messages.length&&p()(e.timestamp).format("LL")!=p()(this.messages[s-1].timestamp).format("LL")?p()(e.timestamp).format("LL"):void 0},changeFormat:function(e){return p()(e).format("LT")},home:function(){this.$router.push({name:"Welcome"})}},created:function(){var e=this;j.collection("messages").orderBy("timestamp").onSnapshot(function(s){s.docChanges().forEach(function(s){if("added"==s.type){var t=s.doc;e.messages.push({id:t.id,name:t.data().name,content:t.data().content,timestamp:t.data().timestamp})}})});var s=document.getElementById("messages");s.scrollTop=s.scrollHeight},updated:function(){var e=document.getElementById("messages");e.scrollTop=e.scrollHeight}},f={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-app",[t("v-navigation-drawer",{attrs:{fixed:"",right:"",clipped:"",app:""},model:{value:e.drawerRight,callback:function(s){e.drawerRight=s},expression:"drawerRight"}},[t("v-list",{attrs:{dense:""}},[t("v-list-tile",{on:{click:function(s){s.stopPropagation(),e.right=!e.right}}},[t("v-list-tile-content",[t("v-list-tile-title",[e._v("user list")])],1)],1)],1)],1),e._v(" "),t("v-toolbar",{attrs:{color:"blue",dark:"",fixed:"",app:"","clipped-right":""}},[t("v-btn",{attrs:{icon:""}},[t("v-icon",{on:{click:e.home}},[e._v("arrow_back")])],1),e._v(" "),t("v-toolbar-title",[e._v("Chat Room")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-toolbar-side-icon",{on:{click:function(s){s.stopPropagation(),e.drawerRight=!e.drawerRight}}})],1),e._v(" "),t("v-content",[t("v-container",{attrs:{fluid:"","fill-height":""}},[t("v-layout",{attrs:{"justify-center":"","align-center":""}},[t("div",{staticClass:"chat",attrs:{id:"chat"}},[t("div",{attrs:{id:"messages"}},e._l(e.messages,function(s,n){return t("v-list",{key:s.id,class:e.isMine(s,n),attrs:{"two-line":"",subheader:""}},[t("p",{attrs:{id:"dateDivider"}},[e._v(e._s(e.addDateDivider(s,n)))]),e._v(" "),t("p",{attrs:{id:"name"}},[t("v-icon",[e._v("record_voice_over")]),e._v(e._s(s.name))],1),e._v(" "),t("p",[t("v-chip",{attrs:{id:"content"}},[e._v(e._s(s.content))])],1),e._v(" "),t("p",{attrs:{id:"time"}},[e._v(e._s(e.changeFormat(s.timestamp)))])])})),e._v(" "),t("div",{staticClass:"sendMessage"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.addMessage(s)}}},[t("v-text-field",{attrs:{"append-outer-icon":"send",name:"new-message",autocomplete:"off",autofocus:""},on:{"click:append-outer":e.addMessage},model:{value:e.newMessage,callback:function(s){e.newMessage=s},expression:"newMessage"}})],1)])])])],1)],1)],1)},staticRenderFns:[]};var v=t("VU/8")(h,f,!1,function(e){t("MYOS")},null,null).exports;n.default.use(o.a);var g=new o.a({mode:"history",routes:[{path:"/",name:"Welcome",component:c},{path:"/chat_app/",name:"Welcome",component:c},{path:"/chat_app/chat",name:"Chat",component:v,props:!0,beforeEnter:function(e,s,t){e.params.name?t():t({name:"Welcome"})}}]}),b=t("3EgV"),k=t.n(b);t("7zck");n.default.use(k.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:g,components:{App:r},template:"<App/>"})},QbHV:function(e,s){},uslO:function(e,s,t){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(e){return t(r(e))}function r(e){var s=n[e];if(!(s+1))throw new Error("Cannot find module '"+e+"'.");return s}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="uslO"}},[0]);
//# sourceMappingURL=app.921efdf4ac66242dc38b.js.map