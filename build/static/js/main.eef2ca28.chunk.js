(this.webpackJsonppropositions=this.webpackJsonppropositions||[]).push([[0],{14:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(5),o=n.n(r),s=(n(14),n(4)),l=n(6),c=n(7),d=n(9),a=n(8),u=n(2),f=n.n(u),g=n(0),p=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log"),b=function(e){Object(d.a)(n,e);var t=Object(a.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).delete=function(){var e=document.getElementById(i.props.id);e.style.opacity="0.1",p.delete(i.props.id).then((function(t){console.log("Deleting"+i.props.id),console.log(t),e.style.borderColor="red",e.style.borderWidth="4px"}))},i.markComplete=function(){var e=document.getElementById(i.props.id);e.classList.add("border-green-700"),p.update(i.props.id,{Concluded:!0}).then((function(t){console.log(t),console.log("Concluded? "+i.props.concluded),e.classList.remove("border"),e.classList.add("border-4"),e.classList.add("opacity-50")}))},i.openInAt=function(){console.log("Opening in Airtable"),window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwlybKN4v201IY8V/"+i.props.id)},i}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsxs)("a",{href:this.href,className:1===this.props.concluded?"border-4 border-green-700 shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 sm:m-0 text-left opacity-50":"shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 sm:m-0 text-left border",id:this.props.id,children:[Object(g.jsxs)("div",{className:"pb-0",children:[Object(g.jsx)("div",{className:"font-medium text-black text-xl sm:text-2xl",children:this.props.name}),"undefined"!==typeof this.props.notes?Object(g.jsx)("div",{className:"text-xs sm:text-sm text-gray-500 m-t-3",children:this.props.notes}):""]}),Object(g.jsx)("div",{className:"space-y-0 hidden sm:block",children:"goals"in this.props&&"undefined"!==typeof this.props.goals?this.props.goals.split(",").map((function(e){return Object(g.jsx)("div",{className:"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1 text-xs",children:e})})):""}),Object(g.jsxs)("div",{className:"grid grid-cols-2 sm:grid-cols-3 space-x-1 mt-1 space-y-0 sm:space-y-0",children:[Object(g.jsx)("button",{onClick:function(){return e.markComplete()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50",children:"Mark"}),Object(g.jsx)("button",{onClick:function(){return e.delete()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50",children:"Delete"}),Object(g.jsx)("button",{onClick:function(){return e.openInAt()},className:"rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50 hidden sm:block",children:"Airtable"})]})]})})}}]),n}(i.Component),m=new Date,j=String(m.getDate()).padStart(2,"0"),x=String(m.getMonth()+1).padStart(2,"0");function h(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-3xl font-bold",children:"Morning"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===m})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Morning")})).map((function(t){return Object(g.jsx)(b,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}m=j+"/"+x;var y=new Date,v=String(y.getDate()).padStart(2,"0"),O=String(y.getMonth()+1).padStart(2,"0");function w(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-3xl font-bold mt-4",children:"Afternoon"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===y})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Afternoon")})).map((function(t){return Object(g.jsx)(b,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}y=v+"/"+O;var C=new Date,S=String(C.getDate()).padStart(2,"0"),N=String(C.getMonth()+1).padStart(2,"0");function k(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:"text-3xl font-bold mt-4",children:"Evening"}),Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-1",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===C})).filter((function(e){return"undefined"!==typeof e.fields["time-of-day"]})).filter((function(e){return!0===e.fields["time-of-day"].includes("Evening")})).map((function(t){return Object(g.jsx)(b,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})]})}C=S+"/"+N;var M=new Date,L=String(M.getDate()).padStart(2,"0"),D=String(M.getMonth()+1).padStart(2,"0");function I(e){var t=e.activities;return console.log(t),console.log("Testing "+e.cycle),Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"justify-center max-w-full w-full grid grid-cols-2 grid-flow-row-dense gap-2",children:t.length>0?t.sort((function(e,t){return e.fields["Concluded formula"]-t.fields["Concluded formula"]})).filter((function(e){return e.fields["exec-date"]===M})).filter((function(e){return"undefined"===typeof e.fields["time-of-day"]})).map((function(t){return Object(g.jsx)(b,{name:t.fields.what_string,id:t.id,notes:t.fields["Learning points"],goals:t.fields.goals_string,concluded:t.fields["Concluded formula"],airtable:e.airtable},t.id)})):Object(g.jsx)("p",{children:"Fetching propositions if any uncompleted..."})})})}M=L+"/"+D;var _=new f.a({apiKey:"keywMvCl7aRV4a5af"}).base("appMcSmdPtPWcBhIX").table("Log");var R=function(e){var t=Object(i.useState)({}),n=Object(s.a)(t,2),r=n[0],o=n[1];console.log(r);var l=Object(i.useState)({}),c=Object(s.a)(l,2),d=c[0],a=c[1];return Object(i.useEffect)((function(){_.list({maxRecords:999,pageSize:30,view:"L: Today's propositions",cellFormat:"json"}).then((function(e){a(e.records)})).catch((function(e){console.log(e)}))}),[]),console.log(d),Object(g.jsx)("div",{className:"grid mx-auto max-w-5xl",children:Object(g.jsxs)("div",{className:"grid m-2",children:[Object(g.jsx)(I,{reRun:o,activities:d,airtable:_}),Object(g.jsx)(h,{reRun:o,activities:d,airtable:_}),Object(g.jsx)(w,{reRun:o,activities:d,airtable:_}),Object(g.jsx)(k,{reRun:o,activities:d,airtable:_})]})})};o.a.render(Object(g.jsx)(R,{tasks:[]}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.eef2ca28.chunk.js.map