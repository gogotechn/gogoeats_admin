"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8692],{75336:function(t,n,e){e.d(n,{Z:function(){return a}});var c=e(93433),i=e(4942);function a(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title",a=t.map((function(t){return(0,i.Z)({},t.locale,""===n["".concat(e,"[").concat(t.locale,"]")]?void 0:n["".concat(e,"[").concat(t.locale,"]")])}));return Object.assign.apply(Object,[{}].concat((0,c.Z)(a)))}},28692:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var c=e(93433),i=e(4942),a=e(1413),o=e(29439),l=e(47313),u=e(97890),r=e(23560),s=e(10976),d=e(77181),f=e(72652),v=e(2717),Z=e(90954),h=e(94843),g=e(56078),p=e(73431),b=e(75336),m=e(8550),j=e(24511),y=e(44287),x=e(46417);function _(){var t=(0,j.$)().t,n=(0,v.v9)((function(t){return t.menu}),v.wU).activeMenu,e=(0,v.v9)((function(t){return t.formLang}),v.wU).languages,_=(0,v.I0)(),O=s.Z.useForm(),k=(0,o.Z)(O,1)[0],w=(0,u.s0)(),U=(0,u.UO)().uuid,C=(0,l.useState)(!1),F=(0,o.Z)(C,2),M=F[0],A=F[1];(0,l.useEffect)((function(){return function(){var t=k.getFieldsValue(!0);_((0,Z.nc)({activeMenu:n,data:t}))}}),[]);var E=function(t){A(!0),g.Z.getById(t).then((function(t){var o=t.data,l=(0,a.Z)((0,a.Z)((0,a.Z)({},o),function(t){if(!t)return{};var n=t.translations,a=e.map((function(t){var e,c,a,o;return o={},(0,i.Z)(o,"title[".concat(t.locale,"]"),null===(e=n.find((function(n){return n.locale===t.locale})))||void 0===e?void 0:e.title),(0,i.Z)(o,"description[".concat(t.locale,"]"),null===(c=n.find((function(n){return n.locale===t.locale})))||void 0===c?void 0:c.description),(0,i.Z)(o,"short_desc[".concat(t.locale,"]"),null===(a=n.find((function(n){return n.locale===t.locale})))||void 0===a?void 0:a.short_desc),o}));return Object.assign.apply(Object,[{}].concat((0,c.Z)(a)))}(o)),{},{image:[(0,m.Z)(o.img)]});k.setFieldsValue(l),_((0,Z.nc)({activeMenu:n,data:l}))})).finally((function(){A(!1),_((0,Z.A_)(n))}))};return(0,l.useEffect)((function(){n.refetch&&E(U)}),[n.refetch]),(0,x.jsx)(d.Z,{title:t("clone.blog"),extra:(0,x.jsx)(p.Z,{}),children:M?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(f.Z,{size:"large",className:"py-5"})}):(0,x.jsx)(y.Z,{form:k,handleSubmit:function(c,i){var o,l="blogs",u={status:"published",type:"blog"},s={type:"blog",active:c.active?1:0,images:[null===(o=i[0])||void 0===o?void 0:o.name],title:(0,b.Z)(e,c),description:(0,b.Z)(e,c,"description"),short_desc:(0,b.Z)(e,c,"short_desc")};return g.Z.create(s).then((function(){r.Am.success(t("successfully.cloned")),(0,v.dC)((function(){_((0,Z.ph)((0,a.Z)((0,a.Z)({},n),{},{nextUrl:l}))),_((0,h.J)(u))})),w("/".concat(l))}))}})})}}}]);