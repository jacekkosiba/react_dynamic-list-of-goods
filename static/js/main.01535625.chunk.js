(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var r=n(6),c=n.n(r),o=n(5),a=n(1),s=(n(11),n(0)),u=Object(a.memo)((function(t){var e=t.goods;return console.log("GoodsList render"),Object(s.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(t){return Object(s.jsx)("li",{"data-cy":"good",style:{color:"".concat(t.color)},children:t.name},t.id)}))})})),i=n(2),l=n(3),d="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function b(){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(Object(i.a)().mark((function t(){var e;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(d);case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(l.a)(Object(i.a)().mark((function t(){var e;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return e=t.sent,t.abrupt("return",e.sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=Object(l.a)(Object(i.a)().mark((function t(){var e;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(){var t=Object(a.useState)(null),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(null),i=Object(o.a)(c,2),l=i[0],d=i[1],p=Object(a.useCallback)((function(){"All"!==l&&(d("All"),b().then((function(t){return r(t)})))}),[l]),h=Object(a.useCallback)((function(){"First5"!==l&&(d("First5"),function(){return f.apply(this,arguments)}().then((function(t){return r(t)})))}),[l]),O=Object(a.useCallback)((function(){"Red"!==l&&(d("Red"),function(){return j.apply(this,arguments)}().then((function(t){return r(t)})))}),[l]);return console.log("App render"),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button","data-cy":"all-button",onClick:p,children:"Load all goods"}),Object(s.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:h,children:"Load 5 first goods"}),Object(s.jsx)("button",{type:"button","data-cy":"red-button",onClick:O,children:"Load red goods"}),Object(s.jsx)(u,{goods:n})]})};c.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.01535625.chunk.js.map