(function(){"use strict";var e={2867:function(e,t,r){var a=r(144),s=r(1096),n=r(1828),o=r(3058),i=r(5223),l=r(3478),u=r(5452),d=r(4192),c=r(3551),_=r(1302),p=r(5234),m=r(3333),h=r(6878),f=r(6808),b=r(3),g=r(1002),v=r(2370),k=function(){var e=this,t=e._self._c;return t(s.Z,{},[t(c.Z,[t(l.Z,{ref:"container",staticClass:"pa-0",attrs:{fluid:e.is_in_iframe}},[t(u.Z,{attrs:{value:!!e.dialog_title&&!!e.dialog_text,persistent:"",width:"500"}},[t(o.Z,[t(i.EB,{staticClass:"headline grey lighten-2"},[e._v(e._s(e.dialog_title))]),t(i.ZB,[e._v(e._s(e.dialog_text))]),t(d.Z),t(i.h7,[t(p.Z),t(n.Z,{attrs:{text:"",color:"primary"},on:{click:function(t){e.dialog_title=null,e.dialog_text=null}}},[e._v("OK")])],1)],1)],1),t(u.Z,{attrs:{value:!!e.progress_text,"hide-overlay":"",persistent:"",width:"300"}},[t(o.Z,{attrs:{color:"primary",dark:""}},[t(i.ZB,[e._v(" "+e._s(e.progress_text)+" "),t(_.Z,{attrs:{indeterminate:"",color:"white"}})],1)],1)],1),e.leaderboard?t(o.Z,[t(g.Z,{attrs:{flat:"",color:"primary",dark:""}},[t(v.qW,[e._v("リーダーボード")]),t(p.Z)],1),t(f.Z,{attrs:{"background-color":"primary","show-arrows":"",vertical:"xs"!==e.$vuetify.breakpoint.name},model:{value:e.task_tab,callback:function(t){e.task_tab=t},expression:"task_tab"}},[t(b.Z,{attrs:{color:"secondary"}}),t(m.Z,[e._v("ログイン・参加申し込み")]),e._l(e.leaderboard.subtasks,(function(r){return t(m.Z,{key:r.id},[e._v(" "+e._s(r.name)+" ")])})),t(h.Z,[t(f.Z,{attrs:{"background-color":"secondary","show-arrows":""},model:{value:e.login_tab,callback:function(t){e.login_tab=t},expression:"login_tab"}},[t(b.Z,{attrs:{color:"secondary lighten-3"}}),t(m.Z,{attrs:{disabled:!0}},[e._v("ログイン")]),t(m.Z,[e._v("参加登録")]),t(h.Z),t(h.Z,[t(l.Z,[t(o.Z,[t(i.EB,[e._v("参加登録")]),t(i.ZB,[e._v("NTCIR-17 UFO の参加登録の受け付けは終了しました。")])],1)],1)],1)],1)],1),e._l(e.leaderboard.subtasks,(function(r){return t(h.Z,{key:r.id},[e.leaderboard&&e.leaderboard.submissions?t("p3-task",{attrs:{leaderboard:e.leaderboard,task:r,atoken:e.atoken,api_base_url:e.api_base_url},on:{"p3-show-dialog":e.p3ShowDialog,"p3-show-progress":e.p3ShowProgress,"p3-reload":e.reload}}):e._e()],1)}))],2)],1):e._e()],1)],1)],1)},y=[],Z=r(6154),w=r(7233),x=function(){var e=this,t=e._self._c;return t("span",{},[t(f.Z,{attrs:{"background-color":"secondary","show-arrows":""},model:{value:e.version_tab,callback:function(t){e.version_tab=t},expression:"version_tab"}},[t(b.Z,{attrs:{color:"secondary lighten-3"}}),t(m.Z,[e._v("概要・提出")]),e._l(e.task.versions,(function(r){return t(m.Z,{key:r.id},[e._v(" "+e._s(r.name)+" ")])}))],2),t(w.Z,{model:{value:e.version_tab,callback:function(t){e.version_tab=t},expression:"version_tab"}},[t(h.Z,[t(l.Z,[t(o.Z,[t(i.EB,[e._v(e._s(e.task.name)+" とは")]),t(i.ZB,[t("p",[t("span",{domProps:{innerHTML:e._s(e.task.desc)}})]),t("p",[e._v(" 詳しくは "),t("a",{attrs:{href:e.task.link,target:"_blank",rel:"noreferrer"}},[e._v(e._s(e.task.name))]),e._v(" のページをご覧ください。 ")])])],1)],1)],1),e._l(e.task.versions,(function(r){return t(h.Z,{key:r.id},[r.message?t(l.Z,[t(o.Z,[t(i.ZB,[e._v(e._s(r.message))])],1)],1):e._e(),e.submissions&&!r.hidden?t("p3-board",{attrs:{items:e.submissions[r.id]||[],items_per_page:-1,sort_by:[e.task.primary_metric>1?`score${e.task.primary_metric}`:"score"],sort_desc:[!0],leaderboard:e.leaderboard,task:e.task,atoken:e.atoken,api_base_url:e.api_base_url},on:{"p3-show-dialog":e.p3ShowDialog,"p3-show-progress":e.p3ShowProgress,"p3-reload":e.reload}}):e._e()],1)}))],2)],1)},S=[],O=r(4944),P=r(7198),$=r(6904),D=r(5057),q=r(5617),j=function(){var e=this,t=e._self._c;return e.items?t(P.Z,{staticClass:"elevation-1",attrs:{items:e.items_filtered,headers:e.lb_columns,"fixed-header":!0,"items-per-page":e.items_per_page,"single-expand":!1,expanded:[],"item-key":"id","show-expand":"",dense:"","sort-by":e.sort_by,"sort-desc":e.sort_desc},scopedSlots:e._u([{key:"item.score",fn:function({item:r}){return["success"===r.status?t("span",[e._v(e._s(parseFloat(r.score).toFixed(4)))]):"failure"===r.status?t("span",[t(O.Z,{attrs:{"x-small":"x-small",color:"error"}},[e._v("エラー")])],1):"accepted"===r.status?t("span",[t(O.Z,{attrs:{"x-small":"x-small",color:"info"}},[e._v("採点中")])],1):"received"===r.status?t("span",[t(O.Z,{attrs:{"x-small":"x-small",color:"warning"}},[e._v("採点待ち")])],1):e._e()]}},e._l(e.extra_metrics,(function(r){return{key:`item.${r}`,fn:function({item:a}){return["success"===a.status&&e.isDefined(a[`${r}`])?t("span",{key:r},[e._v(e._s(parseFloat(a[`${r}`]).toFixed(4)))]):e._e()]}}})),{key:"item.version",fn:function({item:r}){return[r.version?t("span",[e._v(" "+e._s(r.version)+" ")]):t("span",[e._v(" - ")])]}},{key:"item.rank",fn:function({item:r}){return[r.rank?t("span",[e._v(" "+e._s(r.rank)+" ")]):t("span",[e._v(" - ")])]}},{key:"item.date",fn:function({item:t}){return[e._v(" "+e._s(e._f("dateTimeFormat")(t.date))+" ")]}},{key:"item.download",fn:function({item:r}){return[t(n.Z,{attrs:{disabled:!0,rounded:"rounded",download:"","x-small":"x-small"}},[t(D.Z,{attrs:{small:""}},[e._v("mdi-download")])],1)]}},{key:"expanded-item",fn:function({headers:r,item:a}){return[t("td",{attrs:{colspan:r.length}},[t($.Z,{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid[a.id],callback:function(t){e.$set(e.valid,a.id,t)},expression:"valid[item.id]"}},[t(l.Z,[a.message?t(q.Z,{attrs:{label:"採点結果",readonly:!0,rows:"1","auto-grow":!0},model:{value:a.message,callback:function(t){e.$set(a,"message",t)},expression:"item.message"}}):e._e(),t(q.Z,{attrs:{label:"システムの説明（用いた手法、または前回の提出との変更箇所）",required:"",rules:e.descRules,counter:300,"validate-on-blur":!1,readonly:!0,rows:"1","auto-grow":!0},model:{value:a.desc,callback:function(t){e.$set(a,"desc",t)},expression:"item.desc"}})],1)],1)],1)]}}],null,!0)}):e._e()},B=[],T=r(381),F=r.n(T),M={name:"P3Board",components:{},props:{leaderboard:{type:Object,required:!0},task:{type:Object,required:!0},atoken:{type:String,required:!0},items:{type:Array,required:!0},items_per_page:{type:Number,required:!0},sort_by:{type:Array,required:!0},sort_desc:{type:Array,required:!0},hide_teamname:{type:Boolean},show_version:{type:Boolean},api_base_url:{type:String,required:!0}},computed:{items_filtered:function(){return this.items},extra_metrics:function(){return this.task.metrics.slice(1).map((function(e,t){return`score${t+2}`}))},lb_columns:function(){return[].concat([{text:"ID",value:"id"}]).concat([{text:"Rank",value:"rank"}]).concat(this.hide_teamname?[]:[{text:"Team Name",value:"team_name"}]).concat([{text:"Download",value:"download",sortable:!1},{text:"Submitted at",value:"date"}]).concat(this.task.metrics.map((function(e,t){return{text:e,value:t>0?`score${t+1}`:"score"}}))).concat().concat([{text:"More...",value:"data-table-expand",sortable:!1}])}},data:()=>({valid:[],loading:!1,descRules:[e=>!!e||"必須",e=>e.length>=10||"必須（10文字以上）",e=>e.length<=300||"300文字以内"],radioRules:[e=>!!e||"必須"]}),filters:{dateFormat:function(e){return F().unix(e).format("YYYY/MM/DD")},dateTimeFormat:function(e){return F().unix(e).format("YYYY/MM/DD HH:mm")}},methods:{isDefined(e){return"undefined"!==typeof e}}},C=M,R=r(1001),Y=(0,R.Z)(C,j,B,!1,null,null,null),A=Y.exports,E={name:"P3Task",components:{P3Board:A},props:{leaderboard:{type:Object,required:!0},task:{type:Object,required:!0},atoken:{type:String,required:!0},api_base_url:{type:String,required:!0}},computed:{submissions:function(){return this.leaderboard.submissions[this.task.id]||{}}},data:()=>({version_tab:1}),methods:{p3ShowDialog(e,t){this.$emit("p3-show-dialog",null,null),this.$emit("p3-show-dialog",e,t)},p3ShowProgress(e){this.$emit("p3-show-progress",null),this.$emit("p3-show-progress",e)},reload(){this.$emit("p3-reload")}}},H=E,I=(0,R.Z)(H,x,S,!1,null,null,null),L=I.exports,N={name:"App",components:{P3Task:L},data:()=>({iframe_height_timer:null,iframe_last_height:null,dialog_title:null,dialog_text:null,progress_text:null,task_tab:null,login_tab:1,leaderboard:null,valid:!1,atoken:null,atokenRules:[e=>!!e||"必須",e=>/^[0-9A-Za-z_]{20}$/.test(e)||"フォーマットエラー"]}),computed:{api_base_url(){var e=document.currentScript&&document.currentScript.src&&/^.+\/leaderboard(-poliinfo4|-ufo)?\//.exec(document.currentScript.src);return e?e[0]:"/leaderboard/"},local_storage_name(){return encodeURIComponent("atoken_"+this.api_base_url)},is_in_iframe(){return window.self!==window.top}},methods:{reload(e=!0){e&&this.p3ShowProgress("ロード中..."),Z.Z.get(`${this.api_base_url}dashboard.json`).then((e=>{this.p3ShowProgress(null),e.data&&"success"===e.data.status?this.leaderboard=e.data:this.p3ShowDialog("ロードに失敗しました","エラーが起きました: "+e.data.message)})).catch((e=>{this.p3ShowProgress(null),this.p3ShowDialog("ロードに失敗しました","エラーが起きました"+e.message)}))},p3ShowDialog(e,t){this.dialog_title=e,this.dialog_text=t},p3ShowProgress(e){this.progress_text=e},p3OpenLoginTab(){this.task_tab=0,this.login_tab=0},notify_iframe_height(){this.iframe_last_height!==this.$refs.container.scrollHeight&&(this.iframe_last_height=this.$refs.container.scrollHeight,window.parent.postMessage({height:this.iframe_last_height},"*"))}},mounted:function(){this.atoken="",this.reload(!1),this.atoken||"true"!==new URLSearchParams(location.search).get("regist")||(this.task_tab=0,this.login_tab=1),this.is_in_iframe&&(this.iframe_height_timer=setInterval(this.notify_iframe_height,300))},beforeDestroy(){this.iframe_height_timer&&clearInterval(this.iframe_height_timer)}},U=N,z=(0,R.Z)(U,k,y,!1,null,"c0b024ae",null),K=z.exports,W=r(2250);a.ZP.use(W.Z);var G=new W.Z({theme:{dark:!1,themes:{light:{primary:"#7986CB",secondary:"#9FA8DA",accent:"#8C9EFF"}}}});a.ZP.config.productionTip=!1,new a.ZP({vuetify:G,render:e=>e(K)}).$mount("#leaderboard")}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={id:a,loaded:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}r.m=e,function(){var e=[];r.O=function(t,a,s,n){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],s=e[d][1],n=e[d][2];for(var i=!0,l=0;l<a.length;l++)(!1&n||o>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[l])}))?a.splice(l--,1):(i=!1,n<o&&(o=n));if(i){e.splice(d--,1);var u=s();void 0!==u&&(t=u)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[a,s,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var s,n,o=a[0],i=a[1],l=a[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(s in i)r.o(i,s)&&(r.m[s]=i[s]);if(l)var d=l(r)}for(t&&t(a);u<o.length;u++)n=o[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(d)},a=self["webpackChunkufo_webapp"]=self["webpackChunkufo_webapp"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(2867)}));a=r.O(a)})();
//# sourceMappingURL=app.65b4757c.js.map