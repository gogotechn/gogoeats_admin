"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4830],{48008:function(e,n,t){t(47313);var r=t(9274),i=t(87569),o=t(59491),l=t(24511),s=t(46417);n.Z=function(e){var n=e.open,t=e.handleCancel,u=e.text,a=e.click,c=e.loading,d=e.subTitle,f=(0,l.$)().t;return(0,s.jsxs)(r.Z,{closable:!1,visible:n,footer:null,centered:!0,children:[(0,s.jsx)(i.ZP,{status:"warning",title:u,subTitle:d}),(0,s.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,s.jsx)(o.Z,{type:"primary",className:"mr-2",onClick:a,loading:c,children:f("yes")}),(0,s.jsx)(o.Z,{onClick:function(){return t()},children:f("no")})]})]})}},14830:function(e,n,t){t.r(n),t.d(n,{default:function(){return T}});var r=t(4942),i=t(93433),o=t(1413),l=t(29439),s=t(47313),u=t(31741),a=t(47515),c=t(55613),d=t(45705),f=t(59491),h=t(77181),v=t(78508),x=t(23560),p=t(69658),Z=t(74580),m=t(2717),g=t(90954),j=t(80314),k=t(13945),y=t(24511),w=t(94765),b=t(27290),C=t(27266),_=t(70816),N=t.n(_),S=t(97890),I=t(55940),A=t(53233),M=t(48008),P=t(46417);function T(){var e=(0,y.$)().t,n=(0,m.I0)(),t=(0,S.s0)(),_=(0,s.useState)([{title:e("order.id"),dataIndex:"order",key:"order",render:function(r){return(0,P.jsxs)("div",{className:"text-hover",onClick:function(){return function(r){n((0,g.bL)({id:"order_details",url:"order/details/".concat(r),name:e("order.details")})),t("/order/details/".concat(r))}(r.id)},children:["#",r.id]})},sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:function(r){return(0,P.jsxs)("div",{className:"text-hover",onClick:function(){return i=r,n((0,g.bL)({url:"/users/user/".concat(i.uuid),id:"user_info",name:e("user.info")})),void t("/users/user/".concat(i.uuid),{state:{user_id:i.id}});var i},children:[null===r||void 0===r?void 0:r.firstname," ",(null===r||void 0===r?void 0:r.lastname)||""]})}},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:function(r){var i;return(0,P.jsx)("div",{className:"text-hover",onClick:function(){return i=r,n((0,g.bL)({id:"edit-shop",url:"shop/".concat(i.uuid),name:e("edit.shop")})),void t("/shop/".concat(i.uuid));var i},children:null===r||void 0===r||null===(i=r.translation)||void 0===i?void 0:i.title})}},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:function(e){return(0,P.jsx)(c.Z,{disabled:!0,defaultValue:e})}},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:function(e){return N()(e).format("YYYY-MM-DD HH:mm")}},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:function(e,n){return(0,P.jsxs)(d.Z,{children:[(0,P.jsx)(f.Z,{type:"primary",icon:(0,P.jsx)(u.Z,{}),onClick:function(){return E(n.id)}}),(0,P.jsx)(I.Z,{icon:(0,P.jsx)(a.Z,{}),onClick:function(){O([n.id]),z(!0),Q(!0)}})]})}}]),T=(0,l.Z)(_,2),W=T[0],Y=T[1],z=(0,s.useContext)(Z._).setIsModalVisible,L=(0,s.useState)(null),D=(0,l.Z)(L,2),H=D[0],O=D[1],U=(0,s.useState)(null),V=(0,l.Z)(U,2),$=V[0],E=V[1],K=(0,s.useState)(!1),R=(0,l.Z)(K,2),q=R[0],B=R[1],F=(0,s.useState)(null),G=(0,l.Z)(F,2),J=G[0],Q=G[1],X=(0,s.useState)(null),ee=(0,l.Z)(X,2),ne=ee[0],te=ee[1],re=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,ie=(0,m.v9)((function(e){return e.orderReview}),m.wU),oe=ie.reviews,le=ie.meta,se=ie.loading,ue=ie.params;console.log("reviews => ",oe);(0,s.useEffect)((function(){re.refetch&&(n((0,b.WN)()),n((0,g.A_)(re)))}),[re.refetch]),(0,j.Z)((function(){var e=re.data,t={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};n((0,b.WN)(t))}),[re.data]);var ae={id:H,onChange:function(e){O(e)}};return(0,P.jsxs)(h.Z,{title:e("order.reviews"),extra:(0,P.jsxs)(d.Z,{wrap:!0,children:[(0,P.jsx)(I.Z,{size:"",onClick:function(){null===H||0===H.length?x.Am.warning(e("select.the.product")):(z(!0),Q(!1))},children:e("delete.selected")}),(0,P.jsx)(A.Z,{columns:W,setColumns:Y})]}),children:[(0,P.jsx)(v.Z,{scroll:{x:!0},rowSelection:ae,columns:null===W||void 0===W?void 0:W.filter((function(e){return e.is_show})),dataSource:oe,pagination:{pageSize:ue.perPage,page:ue.page,total:le.total,defaultCurrent:ue.page},rowKey:function(e){return e.id},onChange:function(e,t,r){var i=e.pageSize,o=e.current,l=r.field,s=r.order,u=(0,k.Z)(s);n((0,g.nc)({activeMenu:re,data:{perPage:i,page:o,column:l,sort:u}}))},loading:se}),(0,P.jsx)(p.Z,{click:function(){B(!0);var t=(0,o.Z)({},Object.assign.apply(Object,[{}].concat((0,i.Z)(H.map((function(e,n){return(0,r.Z)({},"ids[".concat(n,"]"),e)}))))));w.Z.delete(t).then((function(){x.Am.success(e("successfully.deleted")),n((0,b.WN)()),z(!1)})).finally((function(){return B(!1)}))},text:e(J?"delete":"all.delete"),setText:O,loading:q}),$&&(0,P.jsx)(C.Z,{id:$,handleCancel:function(){return E(null)}}),ne&&(0,P.jsx)(M.Z,{open:ne,handleCancel:function(){return te(null)},click:ne.restore?function(){B(!0),w.Z.restoreAll().then((function(){x.Am.success(e("successfully.restored")),n((0,b.WN)()),te(null)})).finally((function(){return B(!1)}))}:function(){B(!0),w.Z.dropAll().then((function(){x.Am.success(e("successfully.deleted")),n((0,b.WN)()),te(null)})).finally((function(){return B(!1)}))},text:ne.restore?e("restore.modal.text"):e("read.carefully"),subTitle:ne.restore?"":e("confirm.deletion"),loading:q,setText:O})]})}}}]);