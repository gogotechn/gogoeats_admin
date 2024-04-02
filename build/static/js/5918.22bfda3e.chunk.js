"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5918],{89802:function(e,n,t){t.d(n,{q:function(){return d}});var u=t(1413),i=t(29439),a=t(45987),s=t(47313),r=t(74294),l=t(72652),o=t(46417),c=["fetchOptions","refetch"],d=function(e){var n=e.fetchOptions,t=e.refetch,d=void 0!==t&&t,f=(0,a.Z)(e,c),m=(0,s.useState)(!1),h=(0,i.Z)(m,2),p=h[0],v=h[1],x=(0,s.useState)([]),Z=(0,i.Z)(x,2),b=Z[0],j=Z[1];return(0,o.jsx)(r.Z,(0,u.Z)((0,u.Z)({labelInValue:!0,filterOption:!1,notFoundContent:p?(0,o.jsx)(l.Z,{size:"small"}):"no results"},f),{},{options:p?[]:b,onFocus:function(){b.length&&!d||(v(!0),n().then((function(e){j(e),v(!1)})))}}))}},95918:function(e,n,t){t.r(n);var u=t(1413),i=t(29439),a=t(47313),s=t(97890),r=t(23560),l=t(10976),o=t(77181),c=t(2717),d=t(90954),f=t(24511),m=t(70816),h=t.n(m),p=t(13783),v=t(73346),x=t(51282),Z=t(9215),b=t(46417);n.default=function(){var e=(0,f.$)().t,n=(0,c.v9)((function(e){return e.menu}),c.wU).activeMenu,t=(0,c.I0)(),m=l.Z.useForm(),j=(0,i.Z)(m,1)[0],_=(0,s.s0)(),y=(0,a.useState)(!1),g=(0,i.Z)(y,2),S=g[0],k=g[1],q=(0,c.v9)((function(e){return e.myShop}),c.wU).myShop,N=(0,s.UO)().id;(0,a.useEffect)((function(){return function(){var e=j.getFieldsValue(!0);e.expired_at=JSON.stringify(null===e||void 0===e?void 0:e.expired_at),t((0,d.nc)({activeMenu:n,data:e}))}}),[]);var w=function(e){k(!0),v.Z.getById(e).then((function(e){!function(e){var i,a,s,r,l,o=(0,u.Z)((0,u.Z)({},e),{},{expired_at:h()(e.expired_at,"YYYY-MM-DD"),bonus_stock_id:{label:(null===e||void 0===e||null===(i=e.bonusStock)||void 0===i||null===(a=i.product)||void 0===a||null===(s=a.translation)||void 0===s?void 0:s.title)+" "+(null===(r=e.bonusStock)||void 0===r?void 0:r.extras.map((function(e){return e.value})).join(", ")),value:null===e||void 0===e||null===(l=e.bonusStock)||void 0===l?void 0:l.id}});j.setFieldsValue((0,u.Z)({},o)),t((0,d.nc)({activeMenu:n,data:(0,u.Z)((0,u.Z)({},o),{},{expired_at:JSON.stringify(o.expired_at)})})),k(!1)}(e.data)})).finally((function(){return t((0,d.A_)(n))}))};(0,a.useEffect)((function(){n.refetch&&w(N)}),[n.refetch]);return(0,b.jsx)(o.Z,{title:e("edit.bonus"),className:"h-100",children:S?(0,b.jsx)(x.Z,{}):(0,b.jsx)(Z.Z,{form:j,handleSubmit:function(i){var a={expired_at:h()(i.expired_at).format("YYYY-MM-DD"),status:i.status,type:"sum",value:i.value,bonus_stock_id:i.bonus_stock_id.value,bonus_quantity:i.bonus_quantity,bonusable_id:q.id},s="seller/bonus/shop";return v.Z.update(N,a).then((function(){r.Am.success(e("successfully.created")),(0,c.dC)((function(){t((0,d.ph)((0,u.Z)((0,u.Z)({},n),{},{nextUrl:s}))),t((0,p.Q)({}))})),_("/".concat(s))}))}})})}},9215:function(e,n,t){t.d(n,{Z:function(){return j}});var u=t(1413),i=t(29439),a=t(47313),s=t(10976),r=t(68197),l=t(59624),o=t(16124),c=t(99096),d=t(86345),f=t(59491),m=t(89802),h=t(70816),p=t.n(h),v=t(24511),x=t(2717),Z=t(18333),b=t(46417);function j(e){var n=e.form,t=e.handleSubmit,h=(0,v.$)().t,j=(0,x.v9)((function(e){return e.menu}),x.wU).activeMenu,_=(0,a.useState)(!1),y=(0,i.Z)(_,2),g=y[0],S=y[1];return(0,b.jsxs)(s.Z,{name:"bonus-form",layout:"vertical",onFinish:function(e){S(!0),t(e).finally((function(){return S(!1)}))},form:n,initialValues:(0,u.Z)((0,u.Z)({status:!0},j.data),function(){var e,n;if(null===(e=j.data)||void 0===e||!e.expired_at)return{};var t=JSON.parse(null===(n=j.data)||void 0===n?void 0:n.expired_at);return{expired_at:p()(t,"HH:mm:ss")}}()),className:"d-flex flex-column h-100",children:[(0,b.jsxs)(r.Z,{gutter:12,children:[(0,b.jsx)(l.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:h("order_amount"),name:"value",rules:[{required:!0,message:h("required")},{type:"number",min:1,message:h("min.1")}],children:(0,b.jsx)(o.Z,{className:"w-100"})})}),(0,b.jsx)(l.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:h("bonus.product.stock"),name:"bonus_stock_id",rules:[{required:!0,message:h("required")}],children:(0,b.jsx)(m.q,{fetchOptions:function(){return Z.Z.getStock({active:1,status:"published"}).then((function(e){return e.data.map((function(e){return{label:e.product.translation.title+"".concat(e.extras.length>0?": ".concat(e.extras.map((function(e){return e.value})).join(", ")):""),value:e.id}}))}))},debounceTimeout:200})})}),(0,b.jsx)(l.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:h("bonus.product.quantity"),name:"bonus_quantity",rules:[{required:!0,message:h("required")},{type:"number",min:1,message:h("min.1")}],children:(0,b.jsx)(o.Z,{className:"w-100"})})}),(0,b.jsx)(l.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{name:"expired_at",label:h("expired.at"),rules:[{required:!0,message:h("required")}],children:(0,b.jsx)(c.Z,{className:"w-100",placeholder:"",disabledDate:function(e){return p()().add(-1,"days")>=e}})})}),(0,b.jsx)(l.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:h("active"),name:"status",valuePropName:"checked",children:(0,b.jsx)(d.Z,{})})})]}),(0,b.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,b.jsx)("div",{className:"pb-5",children:(0,b.jsx)(f.Z,{type:"primary",htmlType:"submit",loading:g,children:h("submit")})})})]})}}}]);