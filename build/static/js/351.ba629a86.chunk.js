"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[351],{68328:function(e,t,n){n.d(t,{Z:function(){return Z}});var i=n(1413),a=n(29439),r=n(47313),s=n(10976),u=n(68197),l=n(59624),c=n(66672),o=n(86345),d=n(59491),m=n(5764),f=n(2717),v=n(24511),h=n(46417);function Z(e){var t,n,Z=e.form,j=e.handleSubmit,b=(0,v.$)().t,g=(0,f.v9)((function(e){return e.menu}),f.wU).activeMenu,p=(0,r.useState)(null!==(t=g.data)&&void 0!==t&&t.image?null===(n=g.data)||void 0===n?void 0:n.image:[]),x=(0,a.Z)(p,2),y=x[0],w=x[1],P=(0,r.useState)(!1),E=(0,a.Z)(P,2),I=E[0],S=E[1];return(0,h.jsxs)(s.Z,{name:"basic",layout:"vertical",onFinish:function(e){S(!0),j(e,y).finally((function(){return S(!1)}))},form:Z,initialValues:(0,i.Z)({active:!0},g.data),children:[(0,h.jsxs)(u.Z,{gutter:12,children:[(0,h.jsx)(l.Z,{span:12,children:(0,h.jsx)(s.Z.Item,{label:b("title"),name:"title",rules:[{validator:function(e,t){return t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(b("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(b("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(b("required")))}}],children:(0,h.jsx)(c.Z,{})})}),(0,h.jsx)(l.Z,{span:6,children:(0,h.jsx)(s.Z.Item,{label:b("image"),name:"images",rules:[{validator:function(){return 0===(null===y||void 0===y?void 0:y.length)?Promise.reject(new Error(b("required"))):Promise.resolve()}}],children:(0,h.jsx)(m.Z,{type:"brands",imageList:y,setImageList:w,form:Z,multiple:!1})})}),(0,h.jsx)(l.Z,{span:6,children:(0,h.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,h.jsx)(s.Z.Item,{label:b("active"),name:"active",valuePropName:"checked",children:(0,h.jsx)(o.Z,{})})})})]}),(0,h.jsx)(d.Z,{type:"primary",htmlType:"submit",loading:I,children:b("submit")})]})}},90351:function(e,t,n){n.r(t);var i=n(1413),a=n(29439),r=n(47313),s=n(97890),u=n(23560),l=n(10976),c=n(77181),o=n(72652),d=n(97421),m=n(2717),f=n(90954),v=n(11216),h=n(73253),Z=n(24511),j=n(68328),b=n(46417);t.default=function(){var e=(0,Z.$)().t,t=(0,m.v9)((function(e){return e.menu}),m.wU).activeMenu,n=(0,s.UO)().id,g=(0,m.I0)(),p=l.Z.useForm(),x=(0,a.Z)(p,1)[0],y=(0,s.s0)(),w=(0,r.useState)(!1),P=(0,a.Z)(w,2),E=P[0],I=P[1];(0,r.useEffect)((function(){return function(){var e=x.getFieldsValue(!0);g((0,f.nc)({activeMenu:t,data:e}))}}),[]);return(0,r.useEffect)((function(){t.refetch&&function(e){I(!0),v.Z.getById(e).then((function(e){var n,a=e.data,r=(0,i.Z)((0,i.Z)({},a),{},{image:[(n=a.img,{name:n,url:d.bV+n})]});x.setFieldsValue(r),g((0,f.nc)({activeMenu:t,data:r}))})).finally((function(){I(!1),g((0,f.A_)(t))}))}(n)}),[t.refetch]),(0,b.jsx)(c.Z,{title:e("edit.brand"),children:E?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(o.Z,{size:"large",className:"py-5"})}):(0,b.jsx)(j.Z,{form:x,handleSubmit:function(a,r){var s,l="catalog/brands",c={status:"published"},o=(0,i.Z)((0,i.Z)({},a),{},{active:a.active?1:0,"images[0]":null===(s=r[0])||void 0===s?void 0:s.name});return v.Z.update(n,o).then((function(){u.Am.success(e("successfully.updated")),(0,m.dC)((function(){g((0,f.ph)((0,i.Z)((0,i.Z)({},t),{},{nextUrl:l}))),g((0,h.S0)(c))})),y("/".concat(l))}))}})})}}}]);