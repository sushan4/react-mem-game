(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(t,i,a){},14:function(t,i,a){"use strict";a.r(i);var e=a(1),s=a.n(e),n=a(7),c=a.n(n),g=(a(12),a(3)),m=a(6),r=a(0);var d=function(t){var i=t.item,a=t.id,e=t.handleClick,s=i.stat?" active "+i.stat:"";return Object(r.jsx)("div",{className:"card"+s,onClick:function(){return e(a)},children:Object(r.jsx)("img",{src:i.img,alt:""})})};var j=function(){var t=Object(e.useState)([{id:1,img:"/img/html.png",stat:""},{id:1,img:"/img/html.png",stat:""},{id:2,img:"/img/css.png",stat:""},{id:2,img:"/img/css.png",stat:""},{id:3,img:"/img/js.png",stat:""},{id:3,img:"/img/js.png",stat:""},{id:4,img:"/img/scss.png",stat:""},{id:4,img:"/img/scss.png",stat:""},{id:5,img:"/img/react.png",stat:""},{id:5,img:"/img/react.png",stat:""},{id:6,img:"/img/vue.png",stat:""},{id:6,img:"/img/vue.png",stat:""},{id:7,img:"/img/angular.png",stat:""},{id:7,img:"/img/angular.png",stat:""},{id:8,img:"/img/nodejs.png",stat:""},{id:8,img:"/img/nodejs.png",stat:""}].sort((function(){return Math.random()-.5}))),i=Object(m.a)(t,2),a=i[0],s=i[1],n=Object(e.useState)(-1),c=Object(m.a)(n,2),j=c[0],o=c[1];function u(t){var i;-1===j?(a[t].stat="active",s(Object(g.a)(a)),o(t)):a[i=t].id==a[j].id?(a[i].stat="correct",a[j].stat="correct",s(Object(g.a)(a)),o(-1)):(a[i].stat="wrong",a[j].stat="wrong",s(Object(g.a)(a)),setTimeout((function(){a[i].stat="",a[j].stat="",s(Object(g.a)(a)),o(-1)}),1e3))}return Object(r.jsx)("div",{className:"container",children:a.map((function(t,i){return Object(r.jsx)(d,{item:t,id:i,handleClick:u},i)}))})};var o=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Memory Game ReactJS Pbl"}),Object(r.jsx)(j,{})]})};c.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(o,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a139e6d8.chunk.js.map