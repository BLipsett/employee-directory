(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),o=n(3),i=n(4),s=n(6),u=n(5);n(12);var m=function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("h1",null," ",e.employee.name," "),r.a.createElement("p",null,e.employee.email))};n(13);var p=function(e){return r.a.createElement("div",{className:"card-list"},e.employees.map((function(e){return r.a.createElement(m,{key:e.id,employee:e})})))};n(14);var h=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};n(15),n(16);function d(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n}))}var f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={employees:[],searchField:""},e.handleChange=function(t){e.setState({searchField:t.target.value})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({employees:t})}))}},{key:"render",value:function(){var e=this.state,t=e.employees,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Employee-Directory"),r.a.createElement("div",{className:"container"},r.a.createElement(h,null,r.a.createElement(d,{placeholder:"search employees...",handleChange:this.handleChange}),r.a.createElement(p,{employees:a}))))}}]),n}(r.a.Component);n(17);l.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.442ba116.chunk.js.map