"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7364],{53233:function(n,e,t){var i=t(1413),a=t(29439),s=t(47313),c=t(56140),d=t(67251),r=t(45705),l=t(86345),o=t(78267),u=t(37388),h=t(59491),v=t(99587),f=t(24511),g=t(46417),p=c.Z.Text;e.Z=function(n){var e=n.columns,t=void 0===e?[]:e,c=n.setColumns,m=n.style,x=n.size,Z=void 0===x?"":x,j=n.iconOnly,y=(0,f.$)().t,b=(0,s.useState)(!1),w=(0,a.Z)(b,2),z=w[0],C=w[1],V=(0,g.jsx)(d.Z,{children:null===t||void 0===t?void 0:t.map((function(n,e){return(0,g.jsx)(d.Z.Item,{children:(0,g.jsxs)(r.Z,{className:"d-flex justify-content-between",children:[(0,g.jsx)(p,{children:n.title}),(0,g.jsx)(l.Z,{defaultChecked:!0,onClick:function(){return function(n){var e=null===t||void 0===t?void 0:t.map((function(e){return e.dataIndex===n.dataIndex&&(e.is_show=!(null!==e&&void 0!==e&&e.is_show)),e}));c(e)}(n)},disabled:1===e})]})},n+e)}))});return(0,g.jsx)(o.Z,{overlay:V,trigger:["click"],onVisibleChange:function(n){C(n)},visible:z,children:(0,g.jsx)(u.Z,{title:y("change.columns"),children:(0,g.jsx)(h.Z,{style:(0,i.Z)({},m),size:Z,icon:(0,g.jsx)(v.Z,{}),children:j?null:y("Columns")})})})}},51988:function(n,e,t){t.d(e,{Z:function(){return l}});t(47313);var i=t(24511),a=t(66188),s=t.p+"static/media/noproductsfound.1cec73868b5fd048b865.riv",c=t.p+"static/media/noresult.ac4af107751f94856a9c.riv",d=t.p+"static/media/nosell.32cb2c2cc548a15c820d.riv",r=t(46417);var l=function(n){var e=n.id,t=void 0===e?"noresult":e,l=n.text,o=void 0===l?"":l,u=(0,i.$)().t,h={src:{noproductsfound:s,noresult:c,nosell:d}[t],artboard:"New Artboard",autoplay:!0},v=(0,a.useRive)(h).RiveComponent;return(0,r.jsxs)("div",{className:"animation-canvas",children:[(0,r.jsx)("div",{style:{width:"100%",height:200},children:(0,r.jsx)(v,{})}),(0,r.jsx)("div",{className:"text",children:u(o)})]})}},96496:function(n,e,t){t.r(e);var i=t(29439),a=t(47313),s=t(45705),c=t(59491),d=t(77181),r=t(78508),l=t(97890),o=t(12019),u=t(55768),h=t(2717),v=t(90954),f=t(57302),g=t(24511),p=t(53233),m=t(51988),x=t(46417);e.default=function(){var n=(0,g.$)().t,e=(0,h.I0)(),t=(0,l.s0)(),Z=(0,h.v9)((function(n){return n.menu}),h.wU).activeMenu,j=(0,h.v9)((function(n){return n.landingPage}),h.wU),y=j.data,b=j.loading,w=(0,a.useState)([{title:n("id"),dataIndex:"id",key:"id",is_show:!0},{title:n("type"),dataIndex:"type",key:"type",is_show:!0,render:function(e){return n(e)}},{title:n("options"),key:"options",dataIndex:"options",is_show:!0,render:function(n,e){return(0,x.jsx)(s.Z,{children:(0,x.jsx)(c.Z,{type:"primary",icon:(0,x.jsx)(o.Z,{}),onClick:function(){return k(e)},disabled:e.deleted_at})})}}]),z=(0,i.Z)(w,2),C=z[0],V=z[1],k=function(i){e((0,v.bL)({id:"settings/landing-page/edit",url:"settings/landing-page/".concat(i.type),name:n("edit.landing.page")})),t("/settings/landing-page/".concat(i.type))};return(0,a.useEffect)((function(){Z.refetch&&(e((0,f.P)()),e((0,v.A_)(Z)))}),[Z.refetch]),(0,x.jsx)(d.Z,{title:n("landing.page"),extra:(0,x.jsxs)(s.Z,{children:[!(null!==y&&void 0!==y&&y.length)&&(0,x.jsx)(c.Z,{type:"primary",icon:(0,x.jsx)(u.Z,{}),onClick:function(){e((0,v.bL)({id:"settings/landing-page/add",url:"settings/landing-page/add",name:n("add.landing.page")})),t("/settings/landing-page/add")},children:n("add.landing.page")}),(0,x.jsx)(p.Z,{setColumns:V,columns:C})]}),children:(0,x.jsx)(r.Z,{scroll:{x:!0},columns:null===C||void 0===C?void 0:C.filter((function(n){return n.is_show})),dataSource:y,pagination:!1,rowKey:function(n){return n.id},locale:{emptyText:(0,x.jsx)(m.Z,{})},loading:b})})}},55768:function(n,e,t){t.d(e,{Z:function(){return r}});var i=t(1413),a=t(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},c=t(17469),d=function(n,e){return a.createElement(c.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:s}))};d.displayName="PlusCircleOutlined";var r=a.forwardRef(d)},99587:function(n,e,t){t.d(e,{Z:function(){return r}});var i=t(1413),a=t(47313),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"},c=t(17469),d=function(n,e){return a.createElement(c.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:s}))};d.displayName="TableOutlined";var r=a.forwardRef(d)}}]);