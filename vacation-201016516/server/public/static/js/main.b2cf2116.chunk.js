(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(73)},42:function(e,t,a){},70:function(e,t){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(35),l=a.n(s),i=(a(42),a(6)),o=a.n(i),c=a(7),d=a(1),p=a(2),m=a(4),u=a(3),h=a(5),g=(a(8),a(11)),b=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginCont"},r.a.createElement("div",{className:"Login"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"loghead"},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0User name: \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput",type:"text",name:"username",onChange:this.handler.bind(this),value:this.state.username})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Password:\xa0 \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput",type:"password",name:"password",onChange:this.handler.bind(this),value:this.state.password})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-warning btn-sign-in",onClick:this.loginBtn.bind(this)},"Sign In"),r.a.createElement("div",{className:"noAccount",onClick:this.prophasAccount.bind(this)},"I don't have an account"),r.a.createElement("div",{className:this.props.propstate.alert+" alert alert-danger alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,this.props.propstate.alertBoldTxt)," ",this.props.propstate.alertTxt,r.a.createElement("button",{type:"button",className:"close",onClick:this.alertOff.bind(this)},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}},{key:"loginBtn",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).noUser?this.props.summonAlert("Error","The user name or password that you typed is incorrect"):this.props.isLogged(a[0].id,a[0].firstname,a[0].lastname,a[0].username,a[0].password,a[0].following);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"prophasAccount",value:function(){this.props.hasAccount()}},{key:"alertOff",value:function(){this.props.summonAlert("x")}}]),t}(n.Component),E=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"##"},r.a.createElement("font",{className:"logo"},r.a.createElement("font",{className:"darkorange"},"N"),"imbus",r.a.createElement("font",{className:"darkorange"},"ly"))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"##"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"##"},"Features")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"##",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown link"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},r.a.createElement("a",{className:"dropdown-item",href:"##"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"##"},"Another action"),r.a.createElement("a",{className:"dropdown-item",href:"##"},"Something else here")))),r.a.createElement("ul",{className:this.props.propstate.door+" navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item exit",onClick:this.logOut.bind(this)},r.a.createElement("a",{className:"nav-link unpad",href:"##"},r.a.createElement("span",{title:"Logout",role:"img","aria-label":"door"},"\ud83d\udeaa")))))))}},{key:"logOut",value:function(){this.props.logOut()}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={firstname:"",lastname:"",regUsername:"",regPassword:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LoginCont"},r.a.createElement("div",{className:"Login Register"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"loghead"},"Register"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Firstname: \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput",type:"text",name:"firstname",onChange:this.handler.bind(this),value:this.state.firstname})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Lastname:\xa0 \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput",type:"text",name:"lastname",onChange:this.handler.bind(this),value:this.state.lastname})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0User name: \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput",type:"text",name:"regUsername",onChange:this.handler.bind(this),value:this.state.regUsername})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Password:\xa0 \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput",type:"password",name:"regPassword",onChange:this.handler.bind(this),value:this.state.regPassword})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",className:"btn btn-warning btn-sign-in",onClick:this.registerBtn.bind(this)},"Register"),r.a.createElement("div",{className:"noAccount",onClick:this.prophasAccount.bind(this)},"I already have an account"),r.a.createElement("div",{className:this.props.propstate.alert+" alert alert-danger alert-dismissible fade show",role:"alert"},r.a.createElement("strong",null,this.props.propstate.alertBoldTxt)," ",this.props.propstate.alertTxt,r.a.createElement("button",{type:"button",className:"close",onClick:this.alertOff.bind(this)},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"prophasAccount",value:function(){this.props.hasAccount()}},{key:"registerBtn",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.firstname.length>1&&this.state.lastname.length>1&&this.state.regUsername.length>5&&this.state.regPassword.length>5)){e.next=10;break}return e.next=3,fetch("http://localhost:3000/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 3:return t=e.sent,e.next=6,t.json();case 6:e.sent.taken?this.props.summonAlert("Error","User name "+this.state.regUsername+" already taken"):alert("thanks for registering "+this.state.firstname),e.next=11;break;case 10:this.state.regUsername.length<=5||this.state.regPassword.length<=5?this.props.summonAlert("Error","Make sure your User name And Password are at least 6 characters long"):this.props.summonAlert("Error","You must include a first and last name");case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"alertOff",value:function(){this.props.summonAlert("x")}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App "},r.a.createElement("div",{className:"card text-white text-center bg-primary mb-3 "},r.a.createElement("img",{className:"card-img-top",src:this.props.d.image,alt:this.props.d.destination}),r.a.createElement("div",{className:"card-header"},this.props.d.destination),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"}," Departure: ",this.props.d.departure," | Arrival: ",this.props.d.arrival," ",r.a.createElement("br",null),r.a.createElement("font",{className:"priceTag"},"Price: ",this.props.d.price,"$")),r.a.createElement("p",{className:"card-text description"},this.props.d.description)),r.a.createElement("a",{href:"##",className:this.props.propstate.followBtn+" btn btn-warning w-100 followBlink"},"Follow this deal"),r.a.createElement("div",{className:"float-left"},r.a.createElement("a",{href:"##",className:this.props.propstate.deleteBtn+" btn btn-danger deleteBtn"},"\xd7 Remove"),r.a.createElement("a",{href:"##",onClick:this.editDeal.bind(this),className:this.props.propstate.editBtn+" btn btn-success editBtn"},"\u270e Edit"))))}},{key:"editDeal",value:function(e){var t=e.target.parentNode.parentNode.children[1].innerText,a=e.target.parentNode.parentNode.children[2].innerText.split("$")[1].substr(2,1e3),n=e.target.parentNode.parentNode.children[2].innerText.split(":")[1].split(" ")[1],r=e.target.parentNode.parentNode.children[2].innerText.split(":")[2].split("P")[0].split(" ")[1].split(e.target.parentNode.parentNode.children[2].innerText.split(":")[2].split("P")[0].split(" ")[1].substr(-1))[0],s=e.target.parentNode.parentNode.children[2].innerText.split("$")[0].split(":")[3].substr(1,6),l=this.props.d.id;this.props.editor(t,a,n,r,s,l)}}]),t}(n.Component),N=a(36),y=a.n(N)()("http://localhost:8000");function w(e){y.on("data",function(t){return e(null,t)}),y.emit("subscribeToData",100)}var A=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={dealDestination:"",dealDescription:"",dealDeparture:"",dealArrival:"",dealPrice:"",dealID:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({dealDestination:this.props.propstate.dealDestination,dealDescription:this.props.propstate.dealDescription,dealDeparture:this.props.propstate.dealDeparture,dealArrival:this.props.propstate.dealArrival,dealPrice:parseInt(this.props.propstate.dealPrice),dealID:parseInt(this.props.propstate.dealID)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"EditorCont"},r.a.createElement("div",{className:"Login Editor"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",{className:"loghead"},"Editor"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Destination: \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput",type:"text",name:"dealDestination",onChange:this.handler.bind(this),value:this.state.dealDestination})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo editDesc"},"\xa0\xa0\xa0\xa0Description:\xa0 \xa0\xa0\xa0\xa0\xa0",r.a.createElement("textarea",{className:"logInput txtArea",maxLength:"599",name:"dealDescription",onChange:this.handler.bind(this),value:this.state.dealDescription})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"float-left edit-arrival-departure"},r.a.createElement("span",{className:"loginfo edit-departure"},"\xa0\xa0\xa0\xa0Departure:\xa0 \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput flexed-inp",type:"text",name:"dealDeparture",onChange:this.handler.bind(this),value:this.state.dealDeparture})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo edit-arrival"},"\xa0\xa0\xa0\xa0Arrival:\xa0 \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput flexed-inp",type:"text",name:"dealArrival",onChange:this.handler.bind(this),value:this.state.dealArrival}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Price:\xa0 \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{className:"logInput",type:"text",name:"dealPrice",onChange:this.handler.bind(this),value:this.state.dealPrice})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{className:"loginfo editImage"},"\xa0\xa0\xa0\xa0Image: \xa0\xa0\xa0\xa0\xa0",r.a.createElement("input",{type:"file",name:"image",onChange:this.handler.bind(this),value:this.state.regUsername})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"button",onClick:this.updateDeal.bind(this),className:"btn btn-warning btn-sign-in"},"Edit"),r.a.createElement("br",null)))}},{key:"updateDeal",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=parseInt(this.state.dealID),a=parseInt(this.state.dealPrice),e.next=4,fetch("http://localhost:3000/editDeal?dealDestination=".concat(this.state.dealDestination,"&dealDescription=").concat(this.state.dealDescription,"&dealDeparture=").concat(this.state.dealDeparture,"&dealArrival=").concat(this.state.dealArrival,"&dealPrice=").concat(a,",&dealID=").concat(t));case 4:return n=e.sent,e.next=7,n.json();case 7:e.sent,this.props.deals();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hasAccount:!0,alert:"alertOff",alertBoldTxt:"",alertTxt:"",isLogged:0,deals:[],door:"hideIfNotLogged",followBtn:"",deleteBtn:"",editBtn:"",editor:!1,dealDestination:"",dealDescription:"",dealDeparture:"",dealArrival:"",dealPrice:"",dealID:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.deals()}},{key:"deals",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w(function(e,a){return t.setState({deals:a})});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.hasAccount&0===this.state.isLogged?r.a.createElement("div",{className:"App"},r.a.createElement(E,{logOut:this.logOut.bind(this),propstate:this.state}),r.a.createElement(b,{isLogged:this.isLogged.bind(this),summonAlert:this.summonAlert.bind(this),propstate:this.state,hasAccount:this.hasAccount.bind(this)})):!this.state.hasAccount&0===this.state.isLogged?r.a.createElement("div",{className:"App"},r.a.createElement(E,{logOut:this.logOut.bind(this),propstate:this.state}),r.a.createElement(f,{isLogged:this.isLogged.bind(this),summonAlert:this.summonAlert.bind(this),propstate:this.state,hasAccount:this.hasAccount.bind(this)})):0!==this.state.isLogged&&1!==this.state.isLogged?r.a.createElement("div",{className:"App"},r.a.createElement(E,{logOut:this.logOut.bind(this),propstate:this.state}),this.state.deals.map(function(t){return r.a.createElement(v,{propstate:e.state,key:t.id,d:t})})):1!==this.state.isLogged||this.state.editor?this.state.editor?r.a.createElement("div",{className:"App"},r.a.createElement(E,{logOut:this.logOut.bind(this),propstate:this.state}),r.a.createElement("p",{className:"Adminhead"},"Admin Mode"),r.a.createElement(A,{deals:this.deals.bind(this),editor:this.editor.bind(this),propstate:this.state})):void 0:r.a.createElement("div",{className:"App"},r.a.createElement(E,{logOut:this.logOut.bind(this),propstate:this.state}),r.a.createElement("p",{className:"Adminhead"},"Admin Mode"),this.state.deals.map(function(t){return r.a.createElement(v,{editor:e.editor.bind(e),propstate:e.state,key:t.id,d:t})}))}},{key:"editor",value:function(e,t,a,n,r,s){this.setState({editor:!this.state.editor,dealDestination:e,dealDescription:t,dealDeparture:a,dealArrival:n,dealPrice:r,dealID:s})}},{key:"summonAlert",value:function(e,t,a){"x"===e?this.setState({alert:"alertOff",alertBoldTxt:"",alertTxt:""}):this.setState({alert:"alertOn",alertBoldTxt:e,alertTxt:t})}},{key:"hasAccount",value:function(){this.setState({hasAccount:!this.state.hasAccount})}},{key:"isLogged",value:function(e,t,a,n,r,s){this.setState({isLogged:e,door:"displayIfLogged"}),1===this.state.isLogged&&this.setState({followBtn:"hideIfNotLogged",deleteBtn:"displayIfLogged",editBtn:"displayIfLogged"}),1!==this.state.isLogged&&0!==this.state.isLogged&&this.setState({followBtn:"displayIfLogged",deleteBtn:"hideIfNotLogged",editBtn:"hideIfNotLogged"})}},{key:"logOut",value:function(){this.setState({isLogged:0,hasAccount:!0,door:"hideIfNotLogged"})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.b2cf2116.chunk.js.map