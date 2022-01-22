(this.webpackJsonplearningreact=this.webpackJsonplearningreact||[]).push([[0],{41:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),s=n.n(r),i=(n(41),n(4)),o=n(5),l=n(7),j=n(6),u=n(14),b=n(1);function d(e){return Object(b.jsx)("li",{className:"my-2 hover:",children:Object(b.jsx)(u.b,{to:e.url,className:"",children:Object(b.jsxs)("div",{className:"w-10/12 p-2 text-lg",children:[Object(b.jsx)("i",{className:"bx ".concat(e.icon," p-2 mr-8")}),Object(b.jsx)("span",{className:"link",children:e.text})]})})})}function h(){return Object(b.jsxs)("ul",{className:"mt-4",children:[Object(b.jsx)(d,{icon:"bxl-react",text:"Home Page",url:"/"}),Object(b.jsx)(d,{icon:"bx-filter-alt",text:"Filter List",url:"/FilteredUsersList"}),Object(b.jsx)(d,{icon:"bxs-contact",text:"Contact List",url:"/ContactsList"})]})}var m=function(){return Object(b.jsx)("div",{className:"",children:Object(b.jsxs)("div",{className:"h-screen w-72 text-white p-3 backdrop-blur-lg backdrop-saturate-150 bg-indigo-800 bg-opacity-75",children:[Object(b.jsx)("i",{className:"text-2xl bx bx-menu p-3 ml-1"}),Object(b.jsx)(h,{})]})})};var O=function(){return Object(b.jsx)("h3",{children:"Home Page!"})};function x(e){return Object(b.jsxs)("div",{className:"items-stretch flex w-full",children:[Object(b.jsx)("i",{className:"bg-stone-800 bx bx-search-alt-2 p-2 text-white border border-stone-600 rounded-l-md border-r-0"}),Object(b.jsx)("input",{className:"bg-stone-800 text-neutral-200 py-1 px-2 border border-stone-600 rounded-r-md outline-none\r focus-visible:border-stone-400 focus-visible:bg-stone-700\r hover:border-stone-400",onChange:e.onChange})]})}var p=function(e){var t=e.users;return t.length>0?Object(b.jsx)("ul",{className:"",children:t.map((function(e){return Object(b.jsx)("li",{className:"border-b border-stone-500 border-opacity-50 last:border-b-0 p-4 text-white",children:e},e)}))}):Object(b.jsx)("p",{className:"p-4",children:"No results!"})},v=["Micha\u0142","Kasia","Jacek","Marta","Tomek","Ania"],f=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).filterUsers=function(t){var n=t.currentTarget.value,a=e.getFilteredUsersForText(n);e.setState({filteredUsers:a})},e.getFilteredUsersForText=function(e){return v.filter((function(t){return t.toLowerCase().includes(e.toLowerCase())}))},e.state={filteredUsers:v},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("div",{className:"p-4 border-b border-stone-500 border-opacity-50",children:Object(b.jsx)(x,{onChange:this.filterUsers})}),Object(b.jsx)(p,{users:this.state.filteredUsers})]})}}]),n}(c.a.Component);var g=function(){return Object(b.jsx)("div",{className:"mx-auto my-80",children:Object(b.jsx)("div",{className:"bg-blue-900 border border-stone-500 border-opacity-50 rounded-xl bg-opacity-70 backdrop-blur-lg backdrop-saturate-150",children:Object(b.jsx)(f,{})})})},C=n(3);var N=function(){return Object(b.jsx)("div",{})},y=function(e){var t=e.avatarUrl,n=e.name,a=e.phone;return Object(b.jsxs)("li",{className:"item",children:[Object(b.jsx)("img",{src:t,className:"ui mini rounded image",alt:""}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h4",{className:"header",children:n}),Object(b.jsx)("div",{className:"description",children:a})]})]})},k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).contactToContactItem=function(e){var t=e.picture.thumbnail,n=e.name,a=n.title,c=n.first,r=n.last,s="".concat(a," ").concat(c," ").concat(r).trim(),i=e.phone,o=e.login.username;return Object(b.jsx)(y,{avatarUrl:t,name:s,phone:i},o)},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("ul",{className:"ui relaxed divided list selection",children:this.props.contacts.map(this.contactToContactItem)})}}]),n}(a.Component),w=n(18),S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?format=json&results=10").then((function(e){return e.json()})).then((function(t){return e.props.contactsFetched(t.results)}))}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("main",{className:"ui main text container",children:[Object(b.jsx)(N,{}),this.props.contacts?Object(b.jsx)(k,{contacts:this.props.contacts}):"\u0141adowanie"]})})}}]),n}(a.Component),F={contactsFetched:function(e){return{type:"FETCH_CONTACTS_SUCCESS",contacts:e}}},T=Object(w.b)((function(e){return{contacts:e.contacts}}),F)(S),U=n(24),L=n.n(U),E=n(34);var J=function(e){var t=e.text;return Object(b.jsx)("div",{"data-testid":"joke-text",children:t})},A=n(35),H=n.n(A),I=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={joke:null,loading:!1},e.loadJoke=Object(E.a)(L.a.mark((function t(){var n,a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,H.a.get("https://api.icndb.com/jokes/random");case 3:n=t.sent,a=n.data.value.joke,e.setState({loading:!1,joke:a});case 6:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.joke,n=e.loading;return Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(a.Fragment,{children:[!t&&!n&&Object(b.jsx)("div",{children:"Brak suchara"}),n&&Object(b.jsx)("div",{children:"\u0141aduj\u0119..."}),t&&!n&&Object(b.jsx)(J,{text:t}),Object(b.jsx)("button",{onClick:this.loadJoke,type:"button","data-testid":"laduj-suchara",children:"Za\u0142aduj losowy kawa\u0142"})]})})}}]),n}(a.Component),P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(I,{})})}}]),n}(a.Component),_=n(17),B=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",email:"",submittedName:"",submittedEmail:""},e.handleChange=function(t,n){var a=n.name,c=n.value;return e.setState(Object(_.a)({},a,c))},e.handleSubmit=function(){var t=e.state,n=t.name,a=t.email;e.setState({submittedName:n,submittedEmail:a})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,a=e.submittedName,c=e.submittedEmail;return Object(b.jsxs)("div",{class:"container",children:[Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:t,onChange:this.handleChange}),Object(b.jsx)("input",{type:"text",placeholder:"Email",name:"email",value:n,onChange:this.handleChange}),Object(b.jsx)("button",{content:"Submit"})]}),Object(b.jsx)("strong",{children:"onChange:"}),Object(b.jsx)("pre",{children:JSON.stringify({name:t,email:n},null,2)}),Object(b.jsx)("strong",{children:"onSubmit:"}),Object(b.jsx)("pre",{children:JSON.stringify({submittedName:a,submittedEmail:c},null,2)})]})}}]),n}(a.Component),M=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[]},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)(B,{})})}}]),n}(a.Component),D=n(19),G=n(36),K=Object(D.a)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CONTACTS_SUCCESS":return Object(G.a)(t.contacts);default:return e}}}),R=Object(D.b)(K),V=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)("main",{className:"bg-gradient-to-b from-cyan-800 to-blue-600 h-screen",children:Object(b.jsxs)("div",{className:"flex flex-row",children:[Object(b.jsx)(m,{}),Object(b.jsx)(w.a,{store:R,children:Object(b.jsxs)(C.c,{children:[Object(b.jsx)(C.a,{path:"/",component:O,exact:!0}),Object(b.jsx)(C.a,{path:"/FilteredUsersList",component:g}),Object(b.jsx)(C.a,{path:"/ContactsList",component:T}),Object(b.jsx)(C.a,{path:"/JokeGenerator",component:P}),Object(b.jsx)(C.a,{path:"/CaptureValuesForm",component:M})]})})]})})}}]),n}(c.a.Component),Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(b.jsx)(u.a,{basename:"/LearningReact",children:Object(b.jsx)(V,{})}),document.getElementById("root")),Z()}},[[71,1,2]]]);
//# sourceMappingURL=main.b42056ff.chunk.js.map