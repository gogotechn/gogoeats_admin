"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3736],{63736:function(e,s,r){r.r(s),r.d(s,{default:function(){return y}});var a=r(1413),i=r(29439),l=r(47313),n=r(10976),d=r(77181),t=r(68197),u=r(59624),c=r(74294),m=r(66672),Z=r(86345),j=r(45705),h=r(59491),x=r(24511),o=r(33234),p=r(26747),_=r(2717),b=r(23560),q=r(90954),f=r(97890),w=r(46417),g=[{title:"firebase",value:"firebase"},{title:"twilio",value:"twilio"}];function y(){var e=n.Z.useForm(),s=(0,i.Z)(e,1)[0],r=(0,x.$)().t,y=(0,l.useState)(!1),k=(0,i.Z)(y,2),v=k[0],I=k[1],N=(0,l.useState)(null),C=(0,i.Z)(N,2),F=C[0],U=C[1],P=(0,_.I0)(),S=(0,f.s0)(),z=(0,_.v9)((function(e){return e.menu}),_.wU).activeMenu,A=(0,_.v9)((function(e){return e.sms}),_.wU).smsGatewaysList;return(0,w.jsx)(n.Z,{form:s,layout:"vertical",onFinish:function(e){console.log("value",e),I(!0);var s={type:F,default:Number(e.default),payload:(0,a.Z)({type:void 0,default:void 0},e)},i="settings/sms-payload";o.Z.create(s).then((function(){(0,_.dC)((function(){P((0,p.z)()),P((0,q.ph)((0,a.Z)((0,a.Z)({},z),{},{nextUrl:i})))})),b.Am.success(r("successfully.created")),S("/".concat(i))})).finally((function(){return I(!1)}))},children:(0,w.jsxs)(d.Z,{title:r("add.sms.payload"),children:[(0,w.jsxs)(t.Z,{gutter:12,children:[(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("select.type"),rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(c.Z,{className:"w-100",onChange:function(e){return U(e)},options:g.filter((function(e){return!A.some((function(s){return s.type===e.value}))}))})})}),"firebase"===F&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("android_api_key"),name:"android_api_key",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("api_key"),name:"api_key",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("app_id"),name:"app_id",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("auth_domain"),name:"auth_domain",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("ios_api_key"),name:"ios_api_key",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("measurement_id"),name:"measurement_id",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("message_sender_id"),name:"message_sender_id",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("project_id"),name:"project_id",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("server_key"),name:"server_key",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("storage_bucket"),name:"storage_bucket",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("vapid_key"),name:"vapid_key",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("default"),name:"default",valuePropName:"checked",children:(0,w.jsx)(Z.Z,{})})})]}),"twilio"===F&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("twilio_auth_token"),name:"twilio_auth_token",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{min:0,className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("twilio_account_id"),name:"twilio_account_id",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("twilio_number"),name:"twilio_number",rules:[{required:!0,message:r("required")}],children:(0,w.jsx)(m.Z,{className:"w-100"})})}),(0,w.jsx)(u.Z,{span:12,children:(0,w.jsx)(n.Z.Item,{label:r("default"),name:"default",valuePropName:"checked",children:(0,w.jsx)(Z.Z,{})})})]})]}),(0,w.jsx)(j.Z,{children:(0,w.jsx)(h.Z,{type:"primary",htmlType:"submit",loading:v,children:r("submit")})})]})})}}}]);