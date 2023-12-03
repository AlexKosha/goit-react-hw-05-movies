"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[366],{1366:function(n,t,e){e.r(t),e.d(t,{default:function(){return M}});var r,a,u,i,o=e(5861),c=e(9439),s=e(4687),p=e.n(s),f=e(2791),l=e(1087),d=e(7689),h=e(8174),v=e(5705),x=e(168),m=e(9135),b=e(7686),g=(0,b.default)(v.l0)(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin: 0 auto;\n"]))),w=(0,b.default)(v.gN)(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n"]))),Z=b.default.button(u||(u=(0,x.Z)(["\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n"]))),y=(0,b.default)(m.U41)(i||(i=(0,x.Z)(["\n  position: absolute;\n  left: 10px;\n  top: 14px;\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: 0;\n"]))),j=e(184),k={value:""},I=function(n){var t=n.onSubmit;return(0,j.jsx)(v.J9,{initialValues:k,onSubmit:function(n,e){var r=e.resetForm;""!==n.value.trim()?(console.log(n.value),t(n.value),r()):h.Am.error("Write something in the search")},children:(0,j.jsxs)(g,{children:[(0,j.jsx)(w,{type:"text",name:"value",placeholder:"Enter your search term"}),(0,j.jsx)(Z,{type:"submit",children:(0,j.jsx)(y,{})})]})})},J=e(5113),z=(0,f.lazy)((function(){return e.e(719).then(e.bind(e,7719))})),M=function(){var n=(0,f.useState)(null),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,l.lr)(),u=(0,c.Z)(a,2),i=u[0],s=u[1],v=(0,d.TH)();(0,f.useEffect)((function(){var n=i.get("query");if(n){var t=function(){var t=(0,o.Z)(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J.eM(n);case 3:e=t.sent,r(e.results),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),h.Am.error("Oops! Something went wrong!");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}}),[i]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(I,{onSubmit:function(n){if(""===n)return s({});s({query:n})}}),e&&(0,j.jsx)(z,{movies:e,location:v})]})}},5113:function(n,t,e){e.d(t,{Pg:function(){return c},_L:function(){return o},eM:function(){return p},fd:function(){return s},tx:function(){return f}});var r=e(5861),a=e(4687),u=e.n(a),i=e(5294);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.headers.common.Authorization="Bearer  ".concat("eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTA4MTBhZjNjNzU2YWE5ODg3Zjc1MDE5Yjg1YzljZCIsInN1YiI6IjY1MTlkOWVhOTNiZDY5MDExYjhlNWEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fo-xtr4t_cfrI5X5-r4VCMGs2uXZITiS9EqRwp_MRgI");var o=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=366.86b761e3.chunk.js.map