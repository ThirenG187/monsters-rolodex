(this["webpackJsonpmonster-rolodex"]=this["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={Card:"Card_Card__nTpee"}},function(e,t,n){e.exports={CardList:"CardList_CardList__21TCb"}},function(e,t,n){e.exports={SearchBox:"SearchBox_SearchBox__3I1MB"}},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(4),o=n.n(s),a=(n(12),n(3)),i=n(5),u=n.n(i),d=n(0),h=function(e){return Object(d.jsxs)("div",{className:u.a.Card,children:[Object(d.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set-set2")}),Object(d.jsx)("h2",{children:e.monster.name}),Object(d.jsx)("p",{children:e.monster.email})]})},j=n(6),l=n.n(j),b=function(e){return Object(d.jsx)("div",{className:l.a.CardList,children:e.monsters.map((function(e){return Object(d.jsx)(h,{monster:e},e.id)}))})},f=(n(14),n(7)),x=n.n(f),m=function(e){var t=e.placeholder,n=e.handleChange;return Object(d.jsx)("input",{className:x.a.SearchBox,type:"search",placeholder:t,onChange:n})};var p=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),o=Object(a.a)(s,2),i=o[0],u=o[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[c]);var h=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Monsters Rolodex"}),Object(d.jsx)(m,{placeholder:"search monsters",handleChange:function(e){u(e.target.value)}}),Object(d.jsx)(b,{monsters:h})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),O()}],[[15,1,2]]]);
//# sourceMappingURL=main.126113d1.chunk.js.map