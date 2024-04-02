"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[9123],{25513:function(e,n,s){var t=s(93433),r=s(29439),i=s(47313),o=s(68197),a=s(66204),d=s(59624),l=s(45705),c=s(59491),m=s(10976),u=s(16124),p=s(77181),h=s(25050),f=s(86345),x=s(24511),Z=s(70816),y=s.n(Z),b=s(58821),j=s(43681),g=s(11829),k=s(65919),w=s(46417);n.Z=function(e){var n=e.onFinish,s=e.form,Z=e.lines,H=e.loadingBtn,v=e.days,N=e.setDays,S=e.setLines,C=e.weeks,P=(0,x.$)().t,D=[{from:new Date(1900,4,18),to:new Date}],I=(0,i.useState)(!0),O=(0,r.Z)(I,2),_=O[0],F=O[1],Y=v&&v.length>0?(0,w.jsxs)(o.Z,{children:[(0,w.jsx)(a.Z,{style:{fontSize:14,padding:"4px 10px",width:"100%",marginTop:"10px"},children:P("Your.existing.vacations")}),(0,w.jsxs)(d.Z,{span:24,className:"mt-2",children:[v.slice(0,_?1:v.length).map((function(e,n){return(0,w.jsxs)(l.Z,{className:"d-flex justify-content-between",style:{borderBottom:"1px solid #4D5B75"},children:[(0,w.jsx)(d.Z,{span:24,style:{fontSize:14,marginTop:"8px"},children:y()(e).format("YYYY-MM-DD")}),(0,w.jsx)(d.Z,{span:24,children:(0,w.jsx)(a.Z,{color:"red",className:"cursor-pointer mt-3 mb-2",style:{fontSize:14},onClick:function(){return n=e,N(v.filter((function(e){return e!==n})));var n},children:P("remove")})})]},n)})),(0,w.jsx)(c.Z,{className:"mt-3 w-100",onClick:function(){F(!_)},children:_?(0,w.jsx)(b.ahe,{}):(0,w.jsx)(b.dMq,{})})]})]}):(0,w.jsx)(a.Z,{style:{fontSize:14,padding:"4px 10px",width:"100%"},children:"Please pick one or more days."}),M=function(e,n){for(var s=[],t=e;t<n;t++)s.push(t);return s},q=function(){return{disabledHours:function(){return M(0,1)},disabledMinutes:function(){return M(0,0)},disabledSeconds:function(){return M(0,60)}}};return(0,w.jsx)(m.Z,{form:s,layout:"vertical",onFinish:n,children:(0,w.jsxs)(o.Z,{gutter:12,children:[(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(m.Z.Item,{label:P("max.time"),name:"max_time",rules:[{required:!0,message:P("required")},{type:"number",min:1,max:24,message:P("must.be.between.1.and.24")}],children:(0,w.jsx)(u.Z,{className:"w-100"})})}),(0,w.jsx)(d.Z,{span:12}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsx)(p.Z,{title:P("booking.working.days"),children:(0,w.jsx)(o.Z,{gutter:8,children:(0,w.jsx)(d.Z,{span:24,children:(0,w.jsx)(m.Z.List,{name:"working_days",children:function(e){return(0,w.jsx)("div",{children:e.map((function(e,n){return(0,w.jsxs)(o.Z,{gutter:12,align:"center",children:[(0,w.jsx)(d.Z,{span:7,children:(0,w.jsx)(m.Z.Item,{name:[n,"day"],children:(0,w.jsx)("span",{children:P(C[n].title)})})}),Z[e.key]?(0,w.jsx)(d.Z,{span:13,className:"mt-2",children:(0,w.jsx)("span",{children:P("shop.closed")})}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d.Z,{span:7,children:(0,w.jsx)(m.Z.Item,{rules:[{required:!1===Z[e.key]}],name:[n,"from"],children:(0,w.jsx)(h.Z,{disabledTime:q,picker:"time",placeholder:P("start.time")})})}),(0,w.jsx)(d.Z,{span:6,children:(0,w.jsx)(m.Z.Item,{rules:[{required:!1===Z[e.key]}],name:[n,"to"],children:(0,w.jsx)(h.Z,{disabledTime:q,picker:"time",placeholder:P("end.time")})})})]}),(0,w.jsx)(d.Z,{span:4,children:(0,w.jsx)(m.Z.Item,{name:[n,"disabled"],valuePropName:"checked",children:(0,w.jsx)(f.Z,{checkedChildren:(0,w.jsx)(j.Z,{}),unCheckedChildren:(0,w.jsx)(g.Z,{}),checked:Z[e.key],onChange:function(){return function(e){var n=(0,t.Z)(Z);n[e]=!Z[e],S(n)}(e.key)}})})})]},e.key)}))})}})})})})}),(0,w.jsx)(d.Z,{span:12,children:(0,w.jsxs)(p.Z,{title:P("booking.closed.days"),children:[(0,w.jsx)("p",{children:P("booking.closed.days.text")}),(0,w.jsx)(m.Z.Item,{rules:[{required:!1,message:P("required")}],children:(0,w.jsx)(k._W,{className:"datepicker",mode:"multiple",disabled:D,min:1,selected:v,onSelect:N,footer:Y,showOutsideDays:!0})})]})}),(0,w.jsx)(d.Z,{span:24,children:(0,w.jsx)(l.Z,{children:(0,w.jsx)(c.Z,{type:"primary",htmlType:"submit",loading:H,children:P("save")})})})]})})}},21429:function(e,n,s){s.d(n,{P:function(){return i}});var t=s(70816),r=s.n(t),i=[{title:"monday",disabled:!1,from:r()("01:00:00","HH:mm:ss"),to:r()("23:00:00","HH:mm:ss")},{title:"tuesday",disabled:!1,from:r()("01:00:00","HH:mm:ss"),to:r()("23:00:00","HH:mm:ss")},{title:"wednesday",disabled:!1,from:r()("01:00:00","HH:mm:ss"),to:r()("23:00:00","HH:mm:ss")},{title:"thursday",disabled:!1,from:r()("01:00:00","HH:mm:ss"),to:r()("23:00:00","HH:mm:ss")},{title:"friday",disabled:!1,from:r()("01:00:00","HH:mm:ss"),to:r()("23:00:00","HH:mm:ss")},{title:"saturday",disabled:!1,from:r()("01:00:00","HH:mm:ss"),to:r()("23:00:00","HH:mm:ss")},{title:"sunday",disabled:!1,from:r()("01:00:00","HH:mm:ss"),to:r()("23:00:00","HH:mm:ss")}]},31872:function(e,n,s){var t=s(34344),r={getById:function(e){return t.Z.get("dashboard/seller/booking/shop-closed-dates/".concat(e))},create:function(e){return t.Z.post("dashboard/seller/booking/shop-closed-dates",e,{})},update:function(e,n){return t.Z.put("dashboard/seller/booking/shop-closed-dates/".concat(e),n,{})},delete:function(e){return t.Z.delete("dashboard/seller/booking/shop-closed-dates/delete",{params:e})}};n.Z=r},61887:function(e,n,s){var t=s(34344),r={getById:function(e){return t.Z.get("dashboard/seller/booking/shop-working-days/".concat(e))},create:function(e){return t.Z.post("dashboard/seller/booking/shop-working-day",e,{})},update:function(e,n){return t.Z.put("dashboard/seller/booking/shop-working-days/".concat(e),n,{})},delete:function(e){return t.Z.delete("dashboard/seller/booking/shop-working-days",{params:e})}};n.Z=r},79123:function(e,n,s){s.r(n);var t=s(1413),r=s(29439),i=s(47313),o=s(70816),a=s.n(o),d=s(61887),l=s(31872),c=s(21429),m=s(25513),u=s(10976),p=s(2717),h=s(66444),f=s(23560),x=s(24511),Z=s(97890),y=s(90954),b=s(72936),j=s(46417);n.default=function(){var e=(0,x.$)().t,n=u.Z.useForm(),s=(0,r.Z)(n,1)[0],o=(0,i.useState)([]),g=(0,r.Z)(o,2),k=g[0],w=g[1],H=(0,p.v9)((function(e){return e.menu}),p.wU).activeMenu,v=(0,i.useState)(new Array(7).fill(!1)),N=(0,r.Z)(v,2),S=N[0],C=N[1],P=(0,i.useState)(!1),D=(0,r.Z)(P,2),I=D[0],O=D[1],_=(0,p.v9)((function(e){return e.myShop}),p.wU).myShop,F=(0,p.I0)(),Y=(0,Z.s0)();return(0,i.useEffect)((function(){s.setFieldsValue({working_days:c.P})}),[]),(0,j.jsx)(m.Z,{onFinish:function(n){O(!0);var s={dates:k?k.map((function(e){return a()(e).format("YYYY-MM-DD")})):void 0},r={dates:n.working_days.map((function(e){return{day:e.title,from:a()(e.from?e.from:"00").format("HH-mm"),to:a()(e.to?e.to:"00").format("HH-mm"),disabled:e.disabled}}))},i={max_time:n.max_time},o="seller/booking/time";Promise.all([h.Z.create(i),l.Z.update(_.uuid,s),0!==n.working_days.length?d.Z.update(_.uuid,r):void 0]).then((function(){f.Am.success(e("successfully.updated")),F((0,b.R)()),F((0,y.ph)((0,t.Z)((0,t.Z)({},H),{},{nextUrl:o}))),Y("/".concat(o))}))},form:s,lines:S,loadingBtn:I,days:k,setDays:w,setLines:C,weeks:c.P})}},25050:function(e,n,s){var t=s(87462),r=s(47313),i=s(99096),o=function(e,n){var s={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(s[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)n.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(s[t[r]]=e[t[r]])}return s},a=i.Z.TimePicker,d=i.Z.RangePicker,l=r.forwardRef((function(e,n){return r.createElement(d,(0,t.Z)({},e,{dropdownClassName:e.popupClassName,picker:"time",mode:void 0,ref:n}))})),c=r.forwardRef((function(e,n){var s=e.addon,i=e.renderExtraFooter,d=e.popupClassName,l=o(e,["addon","renderExtraFooter","popupClassName"]),c=r.useMemo((function(){return i||(s||void 0)}),[s,i]);return r.createElement(a,(0,t.Z)({},l,{dropdownClassName:d,mode:void 0,ref:n,renderExtraFooter:c}))}));c.displayName="TimePicker",c.RangePicker=l,n.Z=c}}]);