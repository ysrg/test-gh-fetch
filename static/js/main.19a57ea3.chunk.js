(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a(262)},137:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),u=(a(137),a(106)),s=a.n(u),o=a(109),i=a(110),m=a(111),d=a(121),f=a(112),E=a(122),h=a(270),p=a(269),v=a(268);function w(e){return e.map(function(e){var t=e.number,a=e.title,n=e.created_at,l=e.updated_at,c=e.labels,u=e.state;return r.a.createElement(p.a.Row,{key:t},r.a.createElement(p.a.Cell,{textAlign:"center",className:"issue-nr"},t),r.a.createElement(p.a.Cell,null,r.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},a)),r.a.createElement(p.a.Cell,null,b(n)),r.a.createElement(p.a.Cell,null,b(l)),r.a.createElement(p.a.Cell,{textAlign:"left"},r.a.createElement(v.a,{as:"ul"},function(e){return e.map(function(e){return r.a.createElement(v.a.Item,{key:e.id,as:"li"},e.name)})}(c))),r.a.createElement(p.a.Cell,null,u))})}function b(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}var C=function(e){var t=e.issues;return r.a.createElement(p.a.Body,null,w(t))},k=function(){return r.a.createElement(p.a.Header,null,r.a.createElement(p.a.Row,null,r.a.createElement(p.a.HeaderCell,{singleLine:!0},"Issue Number"),r.a.createElement(p.a.HeaderCell,null,"Title"),r.a.createElement(p.a.HeaderCell,null,"Created At"),r.a.createElement(p.a.HeaderCell,null,"Updated At"),r.a.createElement(p.a.HeaderCell,null,"Labels"),r.a.createElement(p.a.HeaderCell,null,"State")))},g=function(e){var t=e.issues;return r.a.createElement(p.a,{definition:!0,compact:!0,celled:!0},r.a.createElement(k,null),r.a.createElement(C,{issues:t}))},y=a(267),j=function(){return r.a.createElement(y.a,{className:"spinner",active:!0,inline:"centered"})},x=(a(256),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(f.a)(t).call(this,e))).fetchData=function(){var e=Object(o.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:n=e.sent,a.setState({issues:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Failed to retrieve the issues: (".concat(e.t0,")"));case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),a.state={issues:[]},a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchData("https://api.github.com/repos/facebook/react/issues")}},{key:"render",value:function(){var e=this.state.issues;return r.a.createElement(h.a,{centered:!0,columns:1},r.a.createElement(h.a.Column,null,e.length?r.a.createElement(g,{issues:e}):r.a.createElement(j,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[132,2,1]]]);
//# sourceMappingURL=main.19a57ea3.chunk.js.map