"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3382],{83382:function(t,e,n){n.r(e);var a=n(1413),i=n(93433),o=n(4942),c=n(29439),u=n(47313),l=n(97890),r=n(23560),s=n(10976),d=n(77181),f=n(72652),v=n(2717),p=n(90954),g=n(1706),m=n(40113),h=n(24511),Z=n(73431),b=n(97421),_=n(31881),y=n.n(_),k=n(75336),j=n(78035),x=n(46417);e.default=function(){var t=(0,h.$)().t,e=(0,v.v9)((function(t){return t.menu}),v.wU).activeMenu,n=(0,v.I0)(),_=s.Z.useForm(),w=(0,c.Z)(_,1)[0],A=(0,l.s0)(),N=(0,l.UO)().id,U=(0,u.useState)(!1),C=(0,c.Z)(U,2),F=C[0],I=C[1],M=(0,v.v9)((function(t){return t.formLang}),v.wU).languages;(0,u.useEffect)((function(){return function(){var t=w.getFieldsValue(!0);n((0,p.nc)({activeMenu:e,data:t}))}}),[]);var O=function(t){I(!0),m.Z.getById(t).then((function(t){var c,u,l=t.data,r=(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},l),function(t){if(!t)return{};var e=t.translations,n=M.map((function(t){var n,a,i;return i={},(0,o.Z)(i,"title[".concat(t.locale,"]"),null===(n=e.find((function(e){return e.locale===t.locale})))||void 0===n?void 0:n.title),(0,o.Z)(i,"description[".concat(t.locale,"]"),null===(a=e.find((function(e){return e.locale===t.locale})))||void 0===a?void 0:a.description),i}));return Object.assign.apply(Object,[{}].concat((0,i.Z)(n)))}(l)),null===l||void 0===l?void 0:l.buttons),{},{active:!(null===l||void 0===l||!l.active),image:[(u=null===l||void 0===l||null===(c=l.galleries[0])||void 0===c?void 0:c.path,{name:u,url:b.bV+u})]});w.setFieldsValue(r),n((0,p.nc)({activeMenu:e,data:r}))})).finally((function(){n((0,p.A_)(e)),I(!1)}))};return(0,u.useEffect)((function(){e.refetch&&O(N)}),[e.refetch]),(0,x.jsx)(d.Z,{title:t("edit.page"),className:"h-100",extra:(0,x.jsx)(Z.Z,{}),children:F?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(f.Z,{size:"large",className:"py-5"})}):(0,x.jsx)(j.Z,{form:w,handleSubmit:function(i,o){var c={images:o.map((function(t){return t.name})),active:Number(i.active),type:i.type,title:(0,k.Z)(M,i,"title"),description:(0,k.Z)(M,i,"description"),buttons:{google_play_button_link:null===i||void 0===i?void 0:i.google_play_button_link,app_store_button_link:null===i||void 0===i?void 0:i.app_store_button_link}},u="pages";return y()({method:"put",url:"".concat(b.YZ,"dashboard/admin/pages/").concat(N),headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))},data:c,params:{}}).then((function(){r.Am.success(t("successfully.updated")),(0,v.dC)((function(){n((0,p.ph)((0,a.Z)((0,a.Z)({},e),{},{nextUrl:u}))),n((0,g.R)({}))})),A("/".concat(u))})).catch((function(t){var e,n;return r.Am.error(null===(e=t.response)||void 0===e||null===(n=e.data)||void 0===n?void 0:n.message)}))}})})}}}]);