(this.webpackJsonpsearch_engine=this.webpackJsonpsearch_engine||[]).push([[0],{15:function(e,t,a){e.exports=a(39)},20:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),s=(a(20),a(4)),o=a(2),i=a(3),m=a.n(i);a(38);var u=function(){var e=Object(n.useState)("car"),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(o.a)(l,2),u=i[0],h=i[1],d=Object(n.useState)(2),f=Object(o.a)(d,2),p=f[0],b=f[1],g=function(e){r(e.target.value),console.log(a)},E=function(e){e.preventDefault(),m.a.get("https://api.unsplash.com/search/photos",{params:{query:a,page:1,per_page:15},headers:{Authorization:"Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"}}).then((function(e){h(Object(s.a)(e.data.results)),console.log(e.data.results)})).catch((function(e){console.log(e.message)}))},v=function(e){m.a.get("https://api.unsplash.com/search/photos",{params:{query:a,page:p,per_page:15},headers:{Authorization:"Client-ID 89a74f8c26da940b295f7c22ccaf83e3404ac033065c8db15fcbbc3b0639a400"}}).then((function(e){h(Object(s.a)(e.data.results)),console.log(e.data.results)})).catch((function(e){console.log(e.message)}))};return c.a.createElement("div",{className:"container"},u.length<1?c.a.createElement("div",null,c.a.createElement("div",{className:"cover"}),c.a.createElement("div",{className:"d-flex justify-content-center align-items-center search"},c.a.createElement("form",{onSubmit:E,className:"text-center d-flex mt-2 shadow "},c.a.createElement("input",{type:"text",onChange:g,className:"form-control",placeholder:" Enter the name of the picture..."}),c.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary ml-1"})))):c.a.createElement("div",null,c.a.createElement("div",{className:"cover"}),c.a.createElement("form",{onSubmit:E,className:"text-center d-flex mt-2 shadow"},c.a.createElement("input",{type:"text",onChange:g,className:"form-control",placeholder:" Enter the name of the picture..."}),c.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary ml-1"})),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-center mt-2 list align-items-center"},u.length?u.map((function(e){return c.a.createElement("div",{className:"card m-2 p-1 shadow",key:e.id},c.a.createElement("a",{href:e.urls.full,target:"blank"}," ",c.a.createElement("img",{src:e.urls.thumb,className:"card-img-top images",alt:e.id})))})):c.a.createElement("h3",{className:"text-dark"},"Search result here...")),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("button",{className:"btn btn-danger",onClick:function(){b(p-1),console.log(p),v()}},"previous"),c.a.createElement("button",{className:"btn btn-danger",onClick:function(){b(p+1),console.log(p),v()}},"next"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.3d32481a.chunk.js.map