"use strict";(self["webpackChunkseries_tracker"]=self["webpackChunkseries_tracker"]||[]).push([[673],{1585:function(e,a,t){t.d(a,{Z:function(){return m}});var n=t(3396),s=t(7139),r=t(9242),i=t(4870);const l=["src"],c={class:"card__loading-placeholder"},o={class:"card__content"},d={class:"card__info"},u={class:"info__title"},p={class:"info__genres"};var _={props:["imgUrl","genres","styles","title","id"],setup(e){const a=e,t=(0,i.iH)(!1);function _(){t.value=!0}return(e,i)=>{const g=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",{class:"card",style:(0,s.j5)(a.styles)},[(0,n.wy)((0,n._)("img",{src:a.imgUrl,alt:"null",class:"card__image",loading:"lazy",onLoad:_},null,40,l),[[r.F8,t.value]]),(0,n.wy)((0,n._)("div",c,"Loading",512),[[r.F8,!t.value]]),(0,n._)("div",o,[(0,n._)("div",d,[(0,n._)("h4",u,(0,s.zw)(a.title),1),(0,n._)("p",p,(0,s.zw)(a.genres.join(" - ")),1)])]),(0,n.Wm)(g,{class:"card__link",to:{name:"movie_info",params:{id:a.id}}},null,8,["to"])],4)}}},g=t(89);const v=(0,g.Z)(_,[["__scopeId","data-v-6442c18f"]]);var m=v},6707:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(3396);const s={class:"container"};function r(e,a){return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var i=t(89);const l={},c=(0,i.Z)(l,[["render",r],["__scopeId","data-v-1aa20c2c"]]);var o=c},1365:function(e,a,t){t.d(a,{Z:function(){return u}});var n=t(3396),s=t(4870),r=t(7139);const i={class:"pagination"},l={class:"pagination__pages-container"};var c={props:["metadata","view"],setup(e){const a=e,t=(0,n.Fl)((()=>{const e=[],t=Number(a.metadata["current_page"]),n=Number(a.metadata["page_count"]);return t-1>1&&e.push(t-2),t>1&&e.push(t-1),e.push(t),t<n&&e.push(t+1),t+1<n&&e.push(t+2),e}));return(e,c)=>{const o=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("ul",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(t),(e=>((0,n.wg)(),(0,n.iD)("li",{key:e},[(0,n.Wm)(o,{class:(0,r.C_)(["page",{active:a.metadata["current_page"]==e}]),to:{name:a.view,query:{p:e}}},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e),1)])),_:2},1032,["class","to"])])))),128))])])}}},o=t(89);const d=(0,o.Z)(c,[["__scopeId","data-v-ca51731a"]]);var u=d},2673:function(e,a,t){t.r(a),t.d(a,{default:function(){return W}});var n=t(3396),s=t(4870),r=t(7139);const i={class:"cell-container"};function l(e,a){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.WI)(e.$slots,"default",{},void 0,!0)])}var c=t(89);const o={},d=(0,c.Z)(o,[["render",l],["__scopeId","data-v-f0ebe15e"]]);var u=d,p={props:["genreId"],setup(e){const a=e;return(e,t)=>{const s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.j4)(s,{to:{name:"movies",params:{genreId:a.genreId}},class:"cell"},{default:(0,n.w5)((()=>[(0,n.WI)(e.$slots,"default")])),_:3},8,["to"])}}};const _=(0,c.Z)(p,[["__scopeId","data-v-5930f6fe"]]);var g=_,v=t(7877);const m=e=>((0,n.dD)("data-v-205fc9c2"),e=e(),(0,n.Cn)(),e),f={class:"header"},w={class:"header__content"},h=m((()=>(0,n._)("h2",{class:"header__title"},"Lorem, ipsum dolor.",-1))),k=m((()=>(0,n._)("p",{class:"header__description"}," Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum a, ut vitae illo soluta natus quis repellendus veniam culpa? ",-1)));var y={setup(e){const a=(0,s.qj)([]),t=(0,s.iH)(!0),i=(0,s.iH)("Loading");return(0,v.h)({url:"/genres"}).then((e=>{e.data.forEach((e=>a.push(e))),t.value=!1})).catch((()=>{i.value="Loading Failed"})),(e,l)=>((0,n.wg)(),(0,n.iD)("header",f,[(0,n._)("div",w,[h,k,(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(a),(e=>((0,n.wg)(),(0,n.j4)(g,{genreId:e["id"],key:e},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e["name"]),1)])),_:2},1032,["genreId"])))),128)),t.value?((0,n.wg)(),(0,n.j4)(g,{key:0,genreId:"#"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(i.value),1)])),_:1})):(0,n.kq)("",!0)])),_:1})])]))}};const I=(0,c.Z)(y,[["__scopeId","data-v-205fc9c2"]]);var Z=I,j=t(1585),D=t(6707),U=t(1365),b=t(678),q={setup(e){const a=(0,b.yj)(),t=(0,n.Fl)((()=>a.query.p||1)),r=(0,s.qj)([]),i=(0,s.qj)({data:null});async function l(){await v.h.get(`/movies?page=${t.value}`).then((e=>{i.data=e.data.metadata,r.length=0,r.push(...e.data.data)})).catch((()=>{r.push({id:0,title:"Loading Failed",genres:["Loading Failed"],poster:"https://i.pinimg.com/originals/25/32/13/253213c58ce79335d9f5a5c9b17c3627.gif"})}))}return(0,n.YP)(t,(async()=>{window.scroll({top:0,left:0,behavior:"smooth"}),await l()}),{immediate:!0}),(e,a)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(Z),(0,n.Wm)(D.Z,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,s.SU)(r),(e=>((0,n.wg)(),(0,n.j4)(j.Z,{key:e["id"],title:e["title"],"img-url":e["poster"],genres:e["genres"],style:{width:"100%"},id:e["id"]},null,8,["title","img-url","genres","id"])))),128))])),_:1}),(0,s.SU)(i).data?((0,n.wg)(),(0,n.j4)(U.Z,{key:0,view:"home",metadata:(0,s.SU)(i).data},null,8,["metadata"])):(0,n.kq)("",!0)],64))}};const L=q;var W=L}}]);
//# sourceMappingURL=673.6fd35ec0.js.map