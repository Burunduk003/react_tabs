(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(2),r=n.n(i),o=n(3),l=n(4),b=n(7),s=n(6),u=(n(13),n(5)),d=n.n(u),m=function(t){var e=t.tabs,n=t.tabID,a=t.onTabSelected;return c.a.createElement("div",{className:"tabLinks"},e.map((function(t){return c.a.createElement(c.a.Fragment,{key:t.id},c.a.createElement("button",{type:"button",className:d()("tabLink",{"tabLink--active":n===t.id}),onClick:function(){return n!==t.id&&a(t.id)}},t.title),n===t.id&&c.a.createElement("p",{className:"tabContent"},t.content))})))},f=(n(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(t){Object(b.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:f[0]},t.onTabSelected=function(e){t.setState({selectedTab:f[f.findIndex((function(t){return t.id===e}))]})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.selectedTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected tab is ".concat(t.title)),c.a.createElement(m,{tabs:f,tabID:t.id,onTabSelected:this.onTabSelected}))}}]),n}(a.Component);r.a.render(c.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f4dc7bc4.chunk.js.map