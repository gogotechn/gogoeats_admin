(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6143],{55940:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var i=t(1413),a=t(45987),r=(t(47313),t(59491)),l=t(47515),o=t(23560),s=t(24511),d=t(79492),c=t(46417),u=["size","onClick","type"];function v(e){var n=e.size,t=void 0===n?"":n,v=e.onClick,f=e.type,h=void 0===f?"default":f,m=(0,a.Z)(e,u),x=(0,s.$)().t,Z=(0,d.Z)().isDemo;return(0,c.jsx)(r.Z,(0,i.Z)({size:t,icon:(0,c.jsx)(l.Z,{}),onClick:function(e){Z?o.Am.warning(x("cannot.work.demo")):v(e)},type:h},m))}},50402:function(e,n,t){"use strict";t(47313);var i=t(68197),a=t(59624),r=t(2717),l=t(24511),o=t(14637),s=t(29242),d=t(46417);n.Z=function(e){var n=e.data,t=(0,l.$)().t,c=(0,r.v9)((function(e){return e.currency}),r.wU).defaultCurrency;return(0,d.jsxs)(i.Z,{gutter:16,className:"mt-3",children:[(0,d.jsx)(a.Z,{flex:"0 0 16.6%",children:(0,d.jsx)(o.Z,{title:t("all.orders"),value:null===n||void 0===n?void 0:n.orders_count})}),(0,d.jsx)(a.Z,{flex:"0 0 16.6%",children:(0,d.jsx)(o.Z,{title:t("ready.orders"),value:null===n||void 0===n?void 0:n.ready_orders_count})}),(0,d.jsx)(a.Z,{flex:"0 0 16.6%",children:(0,d.jsx)(o.Z,{title:t("on.a.way.orders"),value:null===n||void 0===n?void 0:n.on_a_way_orders_count})}),(0,d.jsx)(a.Z,{flex:"0 0 16.6%",children:(0,d.jsx)(o.Z,{title:t("cancelled.orders"),value:null===n||void 0===n?void 0:n.cancel_orders_count})}),(0,d.jsx)(a.Z,{flex:"0 0 16.6%",children:(0,d.jsx)(o.Z,{title:t("delivered.orders"),value:null===n||void 0===n?void 0:n.delivered_orders_count})}),(0,d.jsx)(a.Z,{flex:"0 0 16.6%",children:(0,d.jsx)(o.Z,{title:t("total.price"),value:(0,s.p)(null===n||void 0===n?void 0:n.total_price,null===c||void 0===c?void 0:c.symbol)})})]})}},53233:function(e,n,t){"use strict";var i=t(1413),a=t(29439),r=t(47313),l=t(56140),o=t(67251),s=t(45705),d=t(86345),c=t(78267),u=t(37388),v=t(59491),f=t(99587),h=t(24511),m=t(46417),x=l.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,l=e.setColumns,Z=e.style,p=e.size,y=void 0===p?"":p,j=e.iconOnly,g=(0,h.$)().t,b=(0,r.useState)(!1),w=(0,a.Z)(b,2),_=w[0],C=w[1],k=(0,m.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,m.jsx)(o.Z.Item,{children:(0,m.jsxs)(s.Z,{className:"d-flex justify-content-between",children:[(0,m.jsx)(x,{children:e.title}),(0,m.jsx)(d.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));l(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,m.jsx)(c.Z,{overlay:k,trigger:["click"],onVisibleChange:function(e){C(e)},visible:_,children:(0,m.jsx)(u.Z,{title:g("change.columns"),children:(0,m.jsx)(v.Z,{style:(0,i.Z)({},Z),size:y,icon:(0,m.jsx)(f.Z,{}),children:j?null:g("Columns")})})})}},48008:function(e,n,t){"use strict";t(47313);var i=t(9274),a=t(87569),r=t(59491),l=t(24511),o=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,s=e.text,d=e.click,c=e.loading,u=e.subTitle,v=(0,l.$)().t;return(0,o.jsxs)(i.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,o.jsx)(a.ZP,{status:"warning",title:s,subTitle:u}),(0,o.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,o.jsx)(r.Z,{type:"primary",className:"mr-2",onClick:d,loading:c,children:v("yes")}),(0,o.jsx)(r.Z,{onClick:function(){return t()},children:v("no")})]})]})}},13945:function(e,n,t){"use strict";function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},29242:function(e,n,t){"use strict";function i(e,n){var t=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(n){return e>=n.value}));return t?"$"+(e/t.value).toFixed(n).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+t.symbol:"0"}t.d(n,{p:function(){return i}})},14637:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});t(47313);var i=t(77181),a=t(46417);function r(e){var n=e.title,t=void 0===n?"Orders":n,r=e.value,l=void 0===r?0:r,o=e.color,s=void 0===o?"grey":o,d=e.onClick;return(0,a.jsx)(i.Z,{className:"statistics-card",hoverable:!!d,onClick:d,children:(0,a.jsxs)("div",{className:"card-wrapper",children:[(0,a.jsx)("div",{className:"space"}),(0,a.jsx)("div",{className:"content",children:(0,a.jsx)("h1",{className:"number",children:l})}),(0,a.jsx)("span",{className:"highlighter ".concat(s)}),t&&(0,a.jsx)("h4",{className:"title",children:t})]})})}},91144:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ne}});var i=t(4942),a=t(93433),r=t(1413),l=t(29439),o=t(47313),s=t(99096),d=t(73591),c=t(66204),u=t(59491),v=t(45705),f=t(77181),h=t(78508),m=t(97890),x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},Z=t(17469),p=function(e,n){return o.createElement(Z.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:n,icon:x}))};p.displayName="UploadOutlined";var y=o.forwardRef(p),j=t(12019),g=t(31741),b=t(47515),w=t(6986),_=t(15386),C=t(2717),k=t(90954),S=t(24511),z=t(89281),V=t(80314),H=t(22054),A=t(13945),M=t(41481),U=t(84017),N=t(7920),T=t(24077),I=t(53233),R=t(5958),Y=t(80355),D=t(24391),B=t(23560),O=t(55940),L=t(7370),P=t(74580),$=t(69658),E=t(97421),K=t(51282),W=t(50402),F=t(45321),G=t(70816),q=t.n(G),X=t(48008),J=t(46417),Q=s.Z.RangePicker,ee=d.Z.TabPane;function ne(){var e,n,t,s,x=(0,C.I0)(),Z=(0,m.s0)(),p=(0,S.$)().t,G=(0,C.v9)((function(e){return e.currency}),C.wU).defaultCurrency,ne=(0,o.useState)(),te=(0,l.Z)(ne,2),ie=te[0],ae=te[1],re=(0,o.useState)(null),le=(0,l.Z)(re,2),oe=le[0],se=le[1],de=(0,o.useState)(null),ce=(0,l.Z)(de,2),ue=ce[0],ve=ce[1],fe=(0,o.useState)(null),he=(0,l.Z)(fe,2),me=he[0],xe=he[1],Ze=(0,o.useState)(null),pe=(0,l.Z)(Ze,2),ye=pe[0],je=pe[1],ge=[{id:7,name:"all"},{id:8,name:"un_assigned_order"},{id:3,name:"ready"},{id:4,name:"on_a_way"},{id:5,name:"delivered"},{id:6,name:"canceled"}],be=(0,o.useState)([{title:p("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:p("client"),is_show:!0,dataIndex:"user",key:"user",render:function(e){return(0,J.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})}},{title:p("number.of.products"),is_show:!0,dataIndex:"order_details_count",key:"order_details_count",render:function(e){return(0,J.jsxs)("div",{className:"text-lowercase",children:[e||0," ",p("products")]})}},{title:p("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,n){return(0,J.jsxs)("div",{children:["new"===e?(0,J.jsx)(c.Z,{color:"blue",children:p(e)}):"canceled"===e?(0,J.jsx)(c.Z,{color:"error",children:p(e)}):(0,J.jsx)(c.Z,{color:"cyan",children:p(e)}),"delivered"!==e&&"canceled"!==e?(0,J.jsx)(j.Z,{onClick:function(){return se(n)}}):""]})}},{title:p("deliveryman"),is_show:!0,dataIndex:"deliveryman",key:"deliveryman",render:function(e,n){return(0,J.jsx)("div",{children:"ready"===n.status&&"pickup"!==n.delivery_type?(0,J.jsx)(u.Z,{type:"link",onClick:function(){return je(n)},children:(0,J.jsxs)(v.Z,{children:[e?"".concat(e.firstname," ").concat(e.lastname):p("add.deliveryman"),(0,J.jsx)(j.Z,{})]})}):(0,J.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})})}},{title:p("amount"),is_show:!0,dataIndex:"total_price",key:"total_price",render:function(e){return(0,U.Z)(e,G.symbol)}},{title:p("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:function(e){var n;return p(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}},{title:p("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:p("options"),is_show:!0,key:"options",render:function(e,n){return(0,J.jsxs)(v.Z,{children:[(0,J.jsx)(u.Z,{icon:(0,J.jsx)(R.Y4r,{}),onClick:function(){return ve(n.id)}}),(0,J.jsx)(u.Z,{icon:(0,J.jsx)(g.Z,{}),onClick:function(){return function(e){x((0,k.bL)({url:"order/details/".concat(e.id),id:"order_details",name:p("order.details")})),Z("/order/details/".concat(e.id))}(n)}}),(0,J.jsx)(O.Z,{icon:(0,J.jsx)(b.Z,{}),onClick:function(){Be([n.id]),ke(!0),$e(!0)}}),(0,J.jsx)(u.Z,{icon:(0,J.jsx)(w.Z,{}),onClick:function(){return xe(n.id)}})]})}}]),we=(0,l.Z)(be,2),_e=we[0],Ce=we[1],ke=(0,o.useContext)(P._).setIsModalVisible,Se=(0,o.useState)(!1),ze=(0,l.Z)(Se,2),Ve=ze[0],He=ze[1],Ae=(0,C.v9)((function(e){return e.menu}),C.wU).activeMenu,Me=(0,o.useState)("all"),Ue=(0,l.Z)(Me,2),Ne=Ue[0],Te=Ue[1],Ie=(null===(e=Ae.data)||void 0===e?void 0:e.role)||Ne,Re=(0,o.useState)(null),Ye=(0,l.Z)(Re,2),De=Ye[0],Be=Ye[1],Oe=(0,o.useState)(null),Le=(0,l.Z)(Oe,2),Pe=Le[0],$e=Le[1],Ee=(0,o.useState)(!1),Ke=(0,l.Z)(Ee,2),We=Ke[0],Fe=Ke[1],Ge=(0,C.v9)((function(e){return e.orders}),C.wU),qe=Ge.orders,Xe=Ge.meta,Je=Ge.loading,Qe=Ge.params,en=Ge.statistic,nn=null===Ae||void 0===Ae?void 0:Ae.data;(0,V.Z)((function(){var e,n={search:null===nn||void 0===nn?void 0:nn.search,sort:null===nn||void 0===nn?void 0:nn.sort,column:null===nn||void 0===nn?void 0:nn.column,perPage:null===nn||void 0===nn?void 0:nn.perPage,page:null===nn||void 0===nn?void 0:nn.page,deliveryman:null===nn||void 0===nn||null===(e=nn.deliveryman)||void 0===e?void 0:e.value,date_from:null===nn||void 0===nn?void 0:nn.date_from,date_to:null===nn||void 0===nn?void 0:nn.date_to,status:"un_assigned_order"===(null===nn||void 0===nn?void 0:nn.status)||null===nn||void 0===nn?void 0:nn.status,"isset-deliveryman":"un_assigned_order"===(null===nn||void 0===nn?void 0:nn.status)?1:0};x((0,H.AU)(n))}),[null===Ae||void 0===Ae?void 0:Ae.data]);var tn=function(e){var n=Ae.data;x((0,k.nc)({activeMenu:Ae,data:(0,r.Z)((0,r.Z)({},n),e)}))},an=function(){se(null),je(null),ve(null),xe(null)};(0,o.useEffect)((function(){if(null!==Ae&&void 0!==Ae&&Ae.refetch){var e={status:null===nn||void 0===nn?void 0:nn.status,page:null===nn||void 0===nn?void 0:nn.page,perPage:10,type:"delivery"};x((0,H.AU)(e)),x((0,k.A_)(Ae))}}),[null===Ae||void 0===Ae?void 0:Ae.refetch]);var rn={selectedRowKeys:De,onChange:function(e){Be(e)}};return(0,J.jsxs)("div",{children:[(0,J.jsx)("div",{children:Je?(0,J.jsx)(K.Z,{}):(0,J.jsx)(W.Z,{data:en,orders:qe})}),(0,J.jsx)(f.Z,{className:"p-0",children:(0,J.jsxs)(v.Z,{wrap:!0,size:[12,20],children:[(0,J.jsx)(M.Z,{placeholder:p("search"),handleChange:function(e){return tn({search:e})},defaultValue:null===(n=Ae.data)||void 0===n?void 0:n.search,resetSearch:!(null!==(t=Ae.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,J.jsx)(Q,{format:"YYYY-MM-DD",onChange:function(e){return n=e,void x((0,k.nc)({activeMenu:Ae,data:(0,r.Z)((0,r.Z)({},nn),{},{date_from:n?q()(null===n||void 0===n?void 0:n[0]).format("YYYY-MM-DD").toString():void 0,date_to:n?q()(null===n||void 0===n?void 0:n[1]).format("YYYY-MM-DD").toString():void 0})}));var n}}),(0,J.jsx)(z.h,{className:"w-100",debounceTimeout:500,placeholder:p("select.deliveryman"),fetchOptions:function(e){var n={search:e};return F.Z.getAll(n).then((function(e){return e.data.map((function(e){return{label:e.firstname+" "+e.lastname,value:e.id}}))}))},allowClear:!0,onChange:function(e){return tn({deliveryman:e})},value:null===(s=Ae.data)||void 0===s?void 0:s.deliveryman}),(0,J.jsxs)(u.Z,{onClick:function(){He(!0),L.Z.export().then((function(e){var n=E.S0+e.data.file_name;window.location.href=n})).finally((function(){return He(!1)}))},loading:Ve,children:[(0,J.jsx)(y,{}),p("export")]}),(0,J.jsx)(O.Z,{size:"",onClick:function(){null===De||0===De.length?B.Am.warning(p("select.the.product")):(ke(!0),$e(!1))},children:p("delete.selected")}),(0,J.jsx)(u.Z,{icon:(0,J.jsx)(_.Z,{}),onClick:function(){x((0,k.nc)({activeMenu:Ae,data:void 0}))},disabled:!Ae.data,style:{minWidth:100}}),(0,J.jsx)(I.Z,{setColumns:Ce,columns:_e})]})}),(0,J.jsxs)(f.Z,{title:p("orders"),children:[(0,J.jsx)(d.Z,{onChange:function(e){tn({role:e,page:1}),Te(e)},type:"card",activeKey:Ie,children:ge.map((function(e){return(0,J.jsx)(ee,{tab:p(e.name)},e.name)}))}),(0,J.jsx)(h.Z,{scroll:{x:!0},rowSelection:rn,columns:null===_e||void 0===_e?void 0:_e.filter((function(e){return e.is_show})),dataSource:qe,loading:Je,pagination:{pageSize:Qe.perPage,page:Qe.page,total:Xe.total,defaultCurrent:Qe.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,a=e.current,l=t.field,o=t.order,s=(0,A.Z)(o);x((0,k.nc)({activeMenu:Ae,data:(0,r.Z)((0,r.Z)({},Ae.data),{},{perPage:i,page:a,column:l,sort:s})}))}})]}),(0,J.jsx)($.Z,{click:function(){Fe(!0);var e=(0,r.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(De.map((function(e,n){return(0,i.Z)({},"ids[".concat(n,"]"),e)}))))));L.Z.delete(e).then((function(){B.Am.success(p("successfully.deleted")),ke(!1),x((0,H.AU)()),$e(null)})).finally((function(){return Fe(!1)}))},text:p(Pe?"delete":"all.delete"),loading:We,setText:Be}),ie&&(0,J.jsx)(X.Z,{open:ie,handleCancel:function(){return ae(null)},click:ie.restore?function(){Fe(!0),L.Z.restoreAll().then((function(){B.Am.success(p("successfully.restored")),x((0,H.AU)()),ae(null)})).finally((function(){return Fe(!1)}))}:function(){Fe(!0),L.Z.dropAll().then((function(){B.Am.success(p("successfully.deleted")),x((0,H.AU)()),ae(null)})).finally((function(){return Fe(!1)}))},text:ie.restore?p("restore.modal.text"):p("read.carefully"),subTitle:ie.restore?"":p("confirm.deletion"),loading:We,setText:Be}),oe&&(0,J.jsx)(N.Z,{orderDetails:oe,handleCancel:an,status:ge}),ye&&(0,J.jsx)(T.Z,{orderDetails:ye,handleCancel:an}),ue&&(0,J.jsx)(Y.Z,{id:ue,handleCancel:an}),me&&(0,J.jsx)(D.Z,{id:me,handleCancel:an})]})}},15386:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(1413),a=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},l=t(17469),o=function(e,n){return a.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:r}))};o.displayName="ClearOutlined";var s=a.forwardRef(o)},99587:function(e,n,t){"use strict";t.d(n,{Z:function(){return s}});var i=t(1413),a=t(47313),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=t(17469),o=function(e,n){return a.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:r}))};o.displayName="TableOutlined";var s=a.forwardRef(o)},83334:function(e,n){var t,i,a;i=[],void 0===(a="function"===typeof(t=function(){return function e(n,t,i){var a,r,l=window,o="application/octet-stream",s=i||o,d=n,c=!t&&!i&&d,u=document.createElement("a"),v=function(e){return String(e)},f=l.Blob||l.MozBlob||l.WebKitBlob||v,h=t||"download";if(f=f.call?f.bind(l):Blob,"true"===String(this)&&(s=(d=[d,s])[0],d=d[1]),c&&c.length<2048&&(h=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var m=new XMLHttpRequest;return m.open("GET",c,!0),m.responseType="blob",m.onload=function(n){e(n.target.response,h,o)},setTimeout((function(){m.send()}),0),m}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&f!==v))return navigator.msSaveBlob?navigator.msSaveBlob(y(d),h):j(d);s=(d=y(d)).type||o}else if(/([\x80-\xff])/.test(d)){for(var x=0,Z=new Uint8Array(d.length),p=Z.length;x<p;++x)Z[x]=d.charCodeAt(x);d=new f([Z],{type:s})}function y(e){for(var n=e.split(/[:;,]/),t=n[1],i=("base64"==n[2]?atob:decodeURIComponent)(n.pop()),a=i.length,r=0,l=new Uint8Array(a);r<a;++r)l[r]=i.charCodeAt(r);return new f([l],{type:t})}function j(e,n){if("download"in u)return u.href=e,u.setAttribute("download",h),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===n&&setTimeout((function(){l.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,o)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var t=document.createElement("iframe");document.body.appendChild(t),!n&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,o)),t.src=e,setTimeout((function(){document.body.removeChild(t)}),333)}if(a=d instanceof f?d:new f([d],{type:s}),navigator.msSaveBlob)return navigator.msSaveBlob(a,h);if(l.URL)j(l.URL.createObjectURL(a),!0);else{if("string"===typeof a||a.constructor===v)try{return j("data:"+s+";base64,"+l.btoa(a))}catch(g){return j("data:"+s+","+encodeURIComponent(a))}(r=new FileReader).onload=function(e){j(this.result)},r.readAsDataURL(a)}return!0}})?t.apply(n,i):t)||(e.exports=a)}}]);