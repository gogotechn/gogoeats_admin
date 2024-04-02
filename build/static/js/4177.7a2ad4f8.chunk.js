"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4177],{13622:function(e,n,r){r.d(n,{R:function(){return p}});var a=r(1413),i=r(29439),s=r(45987),t=r(47313),l=r(12279),c=r.n(l),u=r(74294),m=r(72652),d=r(46417),o=["fetchOptions","debounceTimeout","refetch"],p=function(e){var n=e.fetchOptions,r=e.debounceTimeout,l=void 0===r?400:r,p=(e.refetch,(0,s.Z)(e,o)),h=(0,t.useState)(!1),Z=(0,i.Z)(h,2),x=Z[0],f=Z[1],j=(0,t.useState)([]),g=(0,i.Z)(j,2),v=g[0],_=g[1],b=(0,t.useMemo)((function(){return c()((function(e){_([]),f(!0),n(e).then((function(e){_(e),f(!1)}))}),l)}),[n,l]);return(0,d.jsx)(u.Z,(0,a.Z)((0,a.Z)({showSearch:!0,allowClear:!0,labelInValue:!0,onClear:function(){return b("")},filterOption:!1,onSearch:b,notFoundContent:x?(0,d.jsx)(m.Z,{size:"small"}):"no results"},p),{},{options:v,onFocus:function(){b("")}}))}},54177:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var a=r(15861),i=r(1413),s=r(29439),t=r(87757),l=r.n(t),c=r(47313),u=r(10976),m=r(77181),d=r(68197),o=r(59624),p=r(66672),h=r(16124),Z=r(86345),x=r(59491),f=r(23560),j=r(97890),g=r(71927),v=r(2717),_=r(90954),b=r(24511),w=r(8550),q=r(51282),I=r(5764),y=r(29186),N=r(98231),k=r(13622),A=r(46417);function S(){var e,n,r=(0,b.$)().t,t=(0,j.s0)(),S=(0,j.UO)().id,F=(0,v.I0)(),P=u.Z.useForm(),C=(0,s.Z)(P,1)[0],E=(0,v.v9)((function(e){return e.menu}),v.wU).activeMenu,O=(0,c.useState)(!1),U=(0,s.Z)(O,2),V=U[0],M=U[1],T=(0,c.useState)(!1),B=(0,s.Z)(T,2),K=B[0],L=B[1],R=(0,c.useState)((null===E||void 0===E||null===(e=E.data)||void 0===e?void 0:e.image)||[]),z=(0,s.Z)(R,2),$=z[0],D=z[1],G=(0,c.useState)(null===E||void 0===E||null===(n=E.data)||void 0===n?void 0:n.special),H=(0,s.Z)(G,2),J=H[0],Q=H[1];(0,c.useEffect)((function(){return function(){var e=C.getFieldsValue(!0);F((0,_.nc)({activeMenu:E,data:(0,i.Z)((0,i.Z)({},E.data),e)}))}}),[]);var W=function(){var e=(0,a.Z)(l().mark((function e(n){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",N.Z.getAll({search:n}).then((function(e){return e.data.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){E.refetch&&S&&function(e){M(!0),g.Z.getById(e).then((function(e){var n=e.data;D([(0,w.Z)(n.img)]),Q(n.special),C.setFieldsValue((0,i.Z)((0,i.Z)({},n),{},{image:[(0,w.Z)(n.img)],options:null===n||void 0===n?void 0:n.options.map((function(e){var n;return{label:null===(n=e.translation)||void 0===n?void 0:n.title,value:e.id}}))}))})).finally((function(){M(!1),F((0,_.A_)(E))}))}(S)}),[E.refetch]),(0,A.jsx)(m.Z,{title:r(S?"edit.parcel.type":"add.parcel.type"),children:V?(0,A.jsx)(q.Z,{}):(0,A.jsxs)(u.Z,{form:C,name:"parcel-type",layout:"vertical",initialValues:(0,i.Z)({},E.data),onFinish:function(e){var n;L(!0);var a=(0,i.Z)((0,i.Z)({},e),{},{special:Boolean(e.special),special_price:e.special_price||0,special_price_per_km:e.special_price_per_km||0,images:null===$||void 0===$?void 0:$.map((function(e){return e.name})),image:void 0,options:null===(n=e.options)||void 0===n?void 0:n.map((function(e){return e.value}))}),s="parcel-types";S?g.Z.update(S,a).then((function(){F((0,y.K)()),f.Am.success(r("successfully.updated")),F((0,_.ph)((0,i.Z)((0,i.Z)({},E),{},{nextUrl:s}))),t("/".concat(s))})).finally((function(){return L(!1)})):g.Z.create(a).then((function(){F((0,y.K)()),f.Am.success(r("successfully.created")),F((0,_.ph)((0,i.Z)((0,i.Z)({},E),{},{nextUrl:s}))),t("/".concat(s))})).finally((function(){return L(!1)}))},children:[(0,A.jsxs)(d.Z,{gutter:12,children:[(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("title"),name:"type",rules:[{validator:function(e,n){return n?n&&""===(null===n||void 0===n?void 0:n.trim())?Promise.reject(new Error(r("no.empty.space"))):n&&(null===n||void 0===n?void 0:n.trim().length)<2?Promise.reject(new Error(r("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(r("required")))}}],children:(0,A.jsx)(p.Z,{})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("image"),name:"images",rules:[{validator:function(){return 0===(null===$||void 0===$?void 0:$.length)?Promise.reject(new Error(r("required"))):Promise.resolve()}}],children:(0,A.jsx)(I.Z,{type:"languages",imageList:$,setImageList:D,form:C,multiple:!1})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("start.price"),name:"price",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,className:"w-100"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("price.per.km"),name:"price_per_km",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,className:"w-100"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("min_width"),name:"min_width",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,max:32678,className:"w-100",addonAfter:"sm"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("max_width"),name:"max_width",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,max:32678,className:"w-100",addonAfter:"sm"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("min_height"),name:"min_height",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,max:32678,className:"w-100",addonAfter:"sm"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("max_height"),name:"max_height",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,max:32678,className:"w-100",addonAfter:"sm"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("min_length"),name:"min_length",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,max:32678,className:"w-100",addonAfter:"sm"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("max_length"),name:"max_length",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,max:32678,className:"w-100",addonAfter:"sm"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("min_weight"),name:"min_g",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,max:32678,className:"w-100",addonAfter:"gramm"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("max_weight"),name:"max_g",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,max:2147e6,className:"w-100",addonAfter:"gramm"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("options"),name:"options",children:(0,A.jsx)(k.R,{fetchOptions:W,mode:"multiple"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("max.range"),name:"max_range",children:(0,A.jsx)(h.Z,{min:0,className:"w-100",addonAfter:"km"})})}),(0,A.jsx)(o.Z,{span:24,children:(0,A.jsx)(u.Z.Item,{label:r("special"),name:"special",valuePropName:"checked",children:(0,A.jsx)(Z.Z,{onChange:function(e){return Q(e)}})})}),!!J&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("start.price"),name:"special_price",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,className:"w-100"})})}),(0,A.jsx)(o.Z,{span:12,children:(0,A.jsx)(u.Z.Item,{label:r("price.per.km"),name:"special_price_per_km",rules:[{required:!0,message:r("required")}],children:(0,A.jsx)(h.Z,{min:0,className:"w-100"})})})]})]}),(0,A.jsx)(x.Z,{type:"primary",htmlType:"submit",loading:K,children:r("save")})]})})}}}]);