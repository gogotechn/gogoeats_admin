"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6633],{53233:function(e,n,t){var i=t(1413),r=t(29439),a=t(47313),l=t(56140),o=t(67251),u=t(45705),c=t(86345),d=t(78267),s=t(37388),v=t(59491),f=t(99587),h=t(24511),Z=t(46417),m=l.Z.Text;n.Z=function(e){var n=e.columns,t=void 0===n?[]:n,l=e.setColumns,p=e.style,x=e.size,g=void 0===x?"":x,j=e.iconOnly,y=(0,h.$)().t,b=(0,a.useState)(!1),w=(0,r.Z)(b,2),_=w[0],C=w[1],k=(0,Z.jsx)(o.Z,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,Z.jsx)(o.Z.Item,{children:(0,Z.jsxs)(u.Z,{className:"d-flex justify-content-between",children:[(0,Z.jsx)(m,{children:e.title}),(0,Z.jsx)(c.Z,{defaultChecked:!0,onClick:function(){return function(e){var n=null===t||void 0===t?void 0:t.map((function(n){return n.dataIndex===e.dataIndex&&(n.is_show=!(null!==n&&void 0!==n&&n.is_show)),n}));l(n)}(e)},disabled:1===n})]})},e+n)}))});return(0,Z.jsx)(d.Z,{overlay:k,trigger:["click"],onVisibleChange:function(e){C(e)},visible:_,children:(0,Z.jsx)(s.Z,{title:y("change.columns"),children:(0,Z.jsx)(v.Z,{style:(0,i.Z)({},p),size:g,icon:(0,Z.jsx)(f.Z,{}),children:j?null:y("Columns")})})})}},51988:function(e,n,t){t.d(n,{Z:function(){return c}});t(47313);var i=t(24511),r=t(66188),a=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",l=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",o=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",u=t(46417);var c=function(e){var n=e.id,t=void 0===n?"noresult":n,c=e.text,d=void 0===c?"":c,s=(0,i.$)().t,v={src:{noproductsfound:a,noresult:l,nosell:o}[t],artboard:"New Artboard",autoplay:!0},f=(0,r.useRive)(v).RiveComponent;return(0,u.jsxs)("div",{className:"animation-canvas",children:[(0,u.jsx)("div",{style:{width:"100%",height:200},children:(0,u.jsx)(f,{})}),(0,u.jsx)("div",{className:"text",children:s(d)})]})}},41481:function(e,n,t){t.d(n,{Z:function(){return v}});var i=t(1413),r=t(29439),a=t(45987),l=t(47313),o=t(66672),u=t(16031),c=t(40765),d=t(46417),s=["handleChange","defaultValue","resetSearch"];function v(e){var n=e.handleChange,t=e.defaultValue,v=e.resetSearch,f=(0,a.Z)(e,s),h=(0,l.useState)(t),Z=(0,r.Z)(h,2),m=Z[0],p=Z[1],x=(0,l.useMemo)((function(){return(0,u.debounce)((function(e){n(e)}),800)}),[n]);return(0,l.useEffect)((function(){p(t)}),[v,t]),(0,d.jsx)(o.Z,(0,i.Z)({value:m,onChange:function(e){p(e.target.value),x(e.target.value)},prefix:(0,d.jsx)(c.Z,{})},f))}},89281:function(e,n,t){t.d(n,{h:function(){return f}});var i=t(1413),r=t(29439),a=t(45987),l=t(47313),o=t(12279),u=t.n(o),c=t(74294),d=t(72652),s=t(46417),v=["fetchOptions","debounceTimeout","onClear"],f=function(e){var n=e.fetchOptions,t=e.debounceTimeout,o=void 0===t?400:t,f=e.onClear,h=(0,a.Z)(e,v),Z=(0,l.useState)(!1),m=(0,r.Z)(Z,2),p=m[0],x=m[1],g=(0,l.useState)([]),j=(0,r.Z)(g,2),y=j[0],b=j[1],w=(0,l.useMemo)((function(){return u()((function(e){b([]),x(!0),n(e).then((function(e){b(e),x(!1)}))}),o)}),[n,o]);return(0,s.jsx)(c.Z,(0,i.Z)((0,i.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:w,onClear:function(){w(""),f&&f()},notFoundContent:p?(0,s.jsx)(d.Z,{size:"small"}):"no results"},h),{},{options:y,onFocus:function(){w("")}}))}},13945:function(e,n,t){function i(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(n,{Z:function(){return i}})},84017:function(e,n,t){function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$";if(!e)return"0";var t=Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,");return n+" "+t}t.d(n,{Z:function(){return i}})},94133:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});var i=t(15861),r=t(4942),a=t(93433),l=t(1413),o=t(29439),u=t(87757),c=t.n(u),d=t(47313),s=t(66204),v=t(45705),f=t(59491),h=t(37388),Z=t(77181),m=t(78508),p=t(97890),x=t(31741),g=t(82138),j=t(15386),y=t(2717),b=t(90954),w=t(74580),_=t(23560),C=t(24511),k=t(77242),V=t(80314),H=t(13945),S=t(41481),z=t(84017),I=t(53233),M=t(69658),O=t(90046),A=t(75052),N=t(51988),U=t(89281),T=t(34344),R={getAllRestTables:function(e){return T.Z.get("rest/booking/tables",{params:e})}},F=t(46417);function P(){var e,n,t,u,T,P,$=(0,y.I0)(),D=(0,p.s0)(),E=(0,C.$)().t,q=(0,d.useState)(null),B=(0,o.Z)(q,2),K=B[0],L=B[1],W=(0,d.useState)(null),G=(0,o.Z)(W,2),J=G[0],Q=G[1],X=(0,d.useContext)(w._).setIsModalVisible,Y=(0,d.useState)(!1),ee=(0,o.Z)(Y,2),ne=ee[0],te=ee[1],ie=(0,d.useState)(!1),re=(0,o.Z)(ie,2),ae=re[0],le=re[1],oe=(0,y.v9)((function(e){return e.currency}),y.wU).defaultCurrency,ue=(0,d.useState)(null),ce=(0,o.Z)(ue,2),de=ce[0],se=ce[1],ve=(0,d.useState)([{title:E("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:E("table"),dataIndex:"table",key:"table",is_show:!0,render:function(e){return(0,F.jsx)("div",{children:null===e||void 0===e?void 0:e.name})}},{title:E("status"),is_show:!0,dataIndex:"status",key:"status",render:function(e,n){return(0,F.jsx)("div",{children:"new"===e?(0,F.jsx)(s.Z,{color:"blue",children:E(e)}):"canceled"===e?(0,F.jsx)(s.Z,{color:"error",children:E(e)}):(0,F.jsx)(s.Z,{color:"cyan",children:E(e)})})}},{title:E("products"),dataIndex:"order_details_count",key:"order_details_count",is_show:!0,render:function(e){return(0,F.jsxs)("div",{className:"text-lowercase",children:[e||0," ",E("products")]})}},{title:E("amount"),dataIndex:"total_price",key:"total_price",is_show:!0,render:function(e){return(0,z.Z)(e,null===oe||void 0===oe?void 0:oe.symbol)}},{title:E("payment.type"),dataIndex:"transaction",key:"transaction",is_show:!0,render:function(e){var n;return E(null===e||void 0===e||null===(n=e.payment_system)||void 0===n?void 0:n.tag)||"-"}},{title:E("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:E("options"),key:"options",is_show:!0,render:function(e,n){return(0,F.jsxs)(v.Z,{children:[(0,F.jsx)(f.Z,{icon:(0,F.jsx)(x.Z,{}),onClick:function(){return function(e){$((0,b.bL)({url:"waiter/order/details/".concat(e.id),id:"order_details",name:E("order.details")})),D("/waiter/order/details/".concat(e.id))}(n)}}),(0,F.jsx)(h.Z,{title:E("assign.to.me"),children:(0,F.jsx)(f.Z,{onClick:function(){return function(e){te(!0),O.Z.attachToMe(e).then((function(){$((0,k.AU)(we))})).finally((function(){te(!1)}))}(n.id)},type:"primary",icon:(0,F.jsx)(g.Z,{})})})]})}}]),fe=(0,o.Z)(ve,2),he=fe[0],Ze=fe[1],me=(0,y.v9)((function(e){return e.menu}),y.wU).activeMenu,pe=(0,y.v9)((function(e){return e.waiterOrder}),y.wU),xe=pe.orders,ge=pe.meta,je=pe.loading,ye=pe.params,be=null===me||void 0===me?void 0:me.data,we={search:null===be||void 0===be?void 0:be.search,sort:null===be||void 0===be?void 0:be.sort,column:null===be||void 0===be?void 0:be.column,perPage:null===be||void 0===be?void 0:be.perPage,page:null===be||void 0===be?void 0:be.page,user_id:null===be||void 0===be?void 0:be.user_id,table_id:null===be||void 0===be?void 0:be.table_id,shop_id:null!==(null===(e=me.data)||void 0===e?void 0:e.shop_id)?null===(n=me.data)||void 0===n?void 0:n.shop_id:null,delivery_type:"dine_in","empty-waiter":1,status:"new"};(0,V.Z)((function(){$((0,k.AU)(we))}),[null===me||void 0===me?void 0:me.data]),(0,d.useEffect)((function(){null!==me&&void 0!==me&&me.refetch&&($((0,k.AU)(we)),$((0,b.A_)(me)))}),[null===me||void 0===me?void 0:me.refetch]);var _e=function(e,n){$((0,b.nc)({activeMenu:me,data:(0,l.Z)((0,l.Z)({},be),{},(0,r.Z)({},n,e))}))},Ce={selectedRowKeys:K,onChange:function(e){L(e)}};function ke(){return ke=(0,i.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={search:n,perPage:10},e.abrupt("return",R.getAllRestTables(t).then((function(e){return e.data.map((function(e){return{label:e.name,value:e.id}}))})));case 2:case"end":return e.stop()}}),e)}))),ke.apply(this,arguments)}return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(Z.Z,{children:(0,F.jsxs)(v.Z,{wrap:!0,className:"p-0 mb-0",children:[(0,F.jsx)(S.Z,{placeholder:E("search"),handleChange:function(e){return _e(e,"search")},defaultValue:null===(t=me.data)||void 0===t?void 0:t.search}),(0,F.jsx)(U.h,{placeholder:E("select.table"),fetchOptions:function(e){return ke.apply(this,arguments)},onSelect:function(e){return _e(e.value,"table_id")},onDeselect:function(){return _e(null,"table_id")},style:{minWidth:200}}),(0,F.jsx)(f.Z,{icon:(0,F.jsx)(j.Z,{}),onClick:function(){(0,y.dC)((function(){$((0,k.H5)()),$((0,b.nc)({activeMenu:me,data:null}))})),$((0,k.AU)({status:"all",page:null===be||void 0===be?void 0:be.page,perPage:10}))},children:E("clear")}),(0,F.jsx)(I.Z,{columns:he,setColumns:Ze})]})}),(0,F.jsxs)(Z.Z,{children:[(0,F.jsx)(m.Z,{locale:{emptyText:(0,F.jsx)(N.Z,{})},scroll:{x:!0},rowSelection:Ce,columns:null===he||void 0===he?void 0:he.filter((function(e){return e.is_show})),dataSource:xe,loading:je||ne,pagination:{pageSize:ye.perPage,page:(null===(u=me.data)||void 0===u?void 0:u.page)||1,total:null===ge||void 0===ge?void 0:ge.total,defaultCurrent:null===(T=me.data)||void 0===T?void 0:T.page,current:null===(P=me.data)||void 0===P?void 0:P.page},rowKey:function(e){return e.id},onChange:function(e,n,t){var i=e.pageSize,r=e.current,a=t.field,o=t.order,u=(0,H.Z)(o);$((0,b.nc)({activeMenu:me,data:(0,l.Z)((0,l.Z)({},be),{},{perPage:i,page:r,column:a,sort:u})}))}}),(0,F.jsx)(M.Z,{click:function(){le(!0);var e=(0,l.Z)({},Object.assign.apply(Object,[{}].concat((0,a.Z)(K.map((function(e,n){return(0,r.Z)({},"ids[".concat(n,"]"),e)}))))));O.Z.delete(e).then((function(){_.Am.success(E("successfully.deleted")),X(!1),$((0,k.AU)(we)),Q(null)})).finally((function(){return le(!1)}))},text:E(J?"delete":"all.delete"),loading:ae,setText:L})]}),de&&(0,F.jsx)(A.Z,{orderDetails:de,handleCancel:function(){se(null)}})]})}},75052:function(e,n,t){t.d(n,{Z:function(){return p}});var i=t(1413),r=t(29439),a=t(47313),l=t(10976),o=t(9274),u=t(59491),c=t(68197),d=t(59624),s=t(74294),v=t(2717),f=t(90046),h=t(90954),Z=t(24511),m=t(46417);function p(e){var n,t=e.orderDetails,p=e.handleCancel,x=(0,Z.$)().t,g=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,j=(0,v.v9)((function(e){return e.deliveryman}),v.wU).deliverymans,y=l.Z.useForm(),b=(0,r.Z)(y,1)[0],w=(0,v.I0)(),_=(0,a.useState)(!1),C=(0,r.Z)(_,2),k=C[0],V=C[1];return(0,m.jsx)(o.Z,{visible:!!t,title:t.title,onCancel:p,footer:[(0,m.jsx)(u.Z,{type:"primary",onClick:function(){return b.submit()},loading:k,children:x("save")}),(0,m.jsx)(u.Z,{type:"default",onClick:p,children:x("cancel")})],children:(0,m.jsx)(l.Z,{form:b,layout:"vertical",onFinish:function(e){var n=(0,i.Z)({},e);V(!0),f.Z.updateDelivery(t.id,n).then((function(){p(),w((0,h.xo)(g))})).finally((function(){return V(!1)}))},initialValues:{deliveryman:null===(n=t.deliveryman)||void 0===n?void 0:n.id},children:(0,m.jsx)(c.Z,{gutter:12,children:(0,m.jsx)(d.Z,{span:24,children:(0,m.jsx)(l.Z.Item,{label:x("deliveryman"),name:"deliveryman",rules:[{required:!0,message:x("required")}],children:(0,m.jsx)(s.Z,{children:j.map((function(e,n){return(0,m.jsxs)(s.Z.Option,{value:e.id,className:"d-block",children:[e.firstname," ",e.lastname||""]},e.id)}))})})})})})})}},15386:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(1413),r=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"}}]},name:"clear",theme:"outlined"},l=t(17469),o=function(e,n){return r.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};o.displayName="ClearOutlined";var u=r.forwardRef(o)},99587:function(e,n,t){t.d(n,{Z:function(){return u}});var i=t(1413),r=t(47313),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},l=t(17469),o=function(e,n){return r.createElement(l.Z,(0,i.Z)((0,i.Z)({},e),{},{ref:n,icon:a}))};o.displayName="TableOutlined";var u=r.forwardRef(o)}}]);