(this["webpackJsonpreact-tailwind-pixabay-gallery"]=this["webpackJsonpreact-tailwind-pixabay-gallery"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(5),a=n.n(s),i=(n(11),n(3)),o=n.n(i),l=n(6),d=n(4),b=n(0),j=function(e){var t=e.image,n=t.tags.split(",");return Object(b.jsxs)("div",{className:"max-w-sm rounded overflow-hidden shadow-lg",children:[Object(b.jsx)("img",{src:t.webformatURL,alt:"",className:"w-full h-52 object-cover"}),Object(b.jsxs)("div",{className:"px-6 py-4",children:[Object(b.jsxs)("div",{className:"font-bold text-purple-500 text-xl mb-2",children:["Photo by ",t.user]}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Views: "})," ",t.views]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Downloads: "})," ",t.downloads]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Likes: "}),t.likes]})]})]}),Object(b.jsx)("div",{className:"px-6 py-4",children:n.map((function(e){return Object(b.jsx)("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2",children:e})}))})]})},u=function(e){var t=e.searchText;return Object(b.jsx)("div",{className:"max-w-sm rounded overflow-hidden my-10 mx-auto",children:Object(b.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(e.target.search.value)},className:"w-full max-w-sm",children:Object(b.jsxs)("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2",children:[Object(b.jsx)("input",{type:"text",name:"search",onKeyDown:function(e){"Enter"===e.key&&t(e.target.value)},className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",placeholder:"Search Image Term..."}),Object(b.jsx)("button",{type:"submit",className:"flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded",children:"Search"})]})})})};var x=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),a=Object(d.a)(s,2),i=a[0],x=a[1];Object(r.useEffect)((function(){m()}),[]);var m=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?key=".concat("22976474-cfa7ed442772491b2f52bd354","&q=").concat(i,"&image_type=photo&pretty=true"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"container mx-auto",children:[Object(b.jsx)(u,{searchText:function(e){x(e),m()}}),Object(b.jsx)("div",{className:"grid grid-cols-3 gap-4",children:n.map((function(e){return Object(b.jsx)(j,{image:e},e.id)}))})]})};a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.227338d1.chunk.js.map