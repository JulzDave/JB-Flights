(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){e.exports=a(73)},42:function(e,t,a){},70:function(e,t){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(35),l=a.n(r),i=(a(42),a(1)),o=a.n(i),c=a(7),d=a(2),p=a(3),u=a(5),h=a(4),m=a(6),g=(a(8),a(11)),b=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:""},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"LoginCont"},s.a.createElement("div",{className:"Login"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{className:"loghead"},"Login"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0User name: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"username",onChange:this.handler.bind(this),value:this.state.username})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Password:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"password",name:"password",onChange:this.handler.bind(this),value:this.state.password})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning btn-sign-in",onClick:this.loginBtn.bind(this)},"Sign In"),s.a.createElement("div",{className:"noAccount",onClick:this.prophasAccount.bind(this)},"I don't have an account"),s.a.createElement("div",{className:this.props.propstate.alert+" alert alert-danger alert-dismissible fade show",role:"alert"},s.a.createElement("strong",null,this.props.propstate.alertBoldTxt)," ",this.props.propstate.alertTxt,s.a.createElement("button",{type:"button",className:"close",onClick:this.alertOff.bind(this)},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}},{key:"loginBtn",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).noUser?this.props.summonAlert("Error","The user name or password that you typed is incorrect"):this.props.isLogged(a[0].id,a[0].firstname,a[0].lastname,a[0].username,a[0].password,a[0].following);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"prophasAccount",value:function(){this.props.hasAccount()}},{key:"alertOff",value:function(){this.props.summonAlert("x")}}]),t}(n.Component),f=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("header",{className:"App"},s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},s.a.createElement("a",{className:"navbar-brand",href:"##"},s.a.createElement("font",{className:"logo"},s.a.createElement("font",{className:"darkorange"},"N"),"imbus",s.a.createElement("font",{className:"darkorange"},"ly"))),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{className:"nav-link",href:"##"},"Home ",s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",href:"##"},"Features")),s.a.createElement("li",{className:"nav-item dropdown"},s.a.createElement("a",{className:"nav-link dropdown-toggle",href:"##",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown link"),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},s.a.createElement("a",{className:"dropdown-item",href:"##"},"Action"),s.a.createElement("a",{className:"dropdown-item",href:"##"},"Another action"),s.a.createElement("a",{className:"dropdown-item",href:"##"},"Something else here")))),s.a.createElement("ul",{className:this.props.propstate.door+" navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item exit",onClick:this.logOut.bind(this)},s.a.createElement("a",{className:"nav-link unpad",href:"##"},s.a.createElement("span",{title:"Logout",role:"img","aria-label":"door"},"\ud83d\udeaa")))))))}},{key:"logOut",value:function(){this.props.logOut()}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={firstname:"",lastname:"",regUsername:"",regPassword:""},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"LoginCont"},s.a.createElement("div",{className:"Login Register"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{className:"loghead"},"Register"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Firstname: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"firstname",onChange:this.handler.bind(this),value:this.state.firstname})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Lastname:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"lastname",onChange:this.handler.bind(this),value:this.state.lastname})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0User name: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"regUsername",onChange:this.handler.bind(this),value:this.state.regUsername})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Password:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"password",name:"regPassword",onChange:this.handler.bind(this),value:this.state.regPassword})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning btn-sign-in",onClick:this.registerBtn.bind(this)},"Register"),s.a.createElement("div",{className:"noAccount",onClick:this.prophasAccount.bind(this)},"I already have an account"),s.a.createElement("div",{className:this.props.propstate.alert+" alert alert-danger alert-dismissible fade show",role:"alert"},s.a.createElement("strong",null,this.props.propstate.alertBoldTxt)," ",this.props.propstate.alertTxt,s.a.createElement("button",{type:"button",className:"close",onClick:this.alertOff.bind(this)},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"prophasAccount",value:function(){this.props.hasAccount()}},{key:"registerBtn",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.firstname.length>1&&this.state.lastname.length>1&&this.state.regUsername.length>5&&this.state.regPassword.length>5)){e.next=10;break}return e.next=3,fetch("http://localhost:3000/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 3:return t=e.sent,e.next=6,t.json();case 6:e.sent.taken?this.props.summonAlert("Error","User name "+this.state.regUsername+" already taken"):alert("thanks for registering "+this.state.firstname),e.next=11;break;case 10:this.state.regUsername.length<=5||this.state.regPassword.length<=5?this.props.summonAlert("Error","Make sure your User name And Password are at least 6 characters long"):this.props.summonAlert("Error","You must include a first and last name");case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"alertOff",value:function(){this.props.summonAlert("x")}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={userFollows:[],btnColor:"warning",btnTxt:"Follow this deal",btnClass:"followBlink"},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){JSON.parse(this.props.d.following).includes(this.props.propstate.isLogged)?this.setState({btnColor:"success",btnTxt:"Unfollow deal",btnClass:"unfollow"}):this.setState({btnColor:"warning",btnTxt:"Follow this deal",btnClass:"followBlink"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App "},s.a.createElement("div",{className:"card text-white text-center bg-primary mb-3 "},s.a.createElement("img",{className:"card-img-top",src:this.props.d.image,alt:this.props.d.destination}),s.a.createElement("div",{className:"card-header"},this.props.d.destination),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"}," Departure: ",this.props.d.departure," | Arrival: ",this.props.d.arrival," ",s.a.createElement("br",null),s.a.createElement("font",{className:"priceTag"},"Price: ",this.props.d.price,"$")),s.a.createElement("p",{className:"card-text description"},this.props.d.description)),s.a.createElement("a",{href:"##",onClick:this.followDeal.bind(this),className:this.props.propstate.followBtn+" btn btn-"+this.state.btnColor+" w-100 "+this.state.btnClass},this.state.btnTxt),s.a.createElement("div",{className:"float-left"},s.a.createElement("a",{href:"##",onClick:this.deleteDeal.bind(this),className:this.props.propstate.deleteBtn+" btn btn-danger deleteBtn"},"\xd7 Remove"),s.a.createElement("a",{href:"##",onClick:this.editDeal.bind(this),className:this.props.propstate.editBtn+" btn btn-success editBtn"},"\u270e Edit"))))}},{key:"editDeal",value:function(e){var t=e.target.parentNode.parentNode.children[1].innerText,a=e.target.parentNode.parentNode.children[2].innerText.split("$")[1].substr(2,1e3),n=e.target.parentNode.parentNode.children[2].innerText.split(":")[1].split(" ")[1],s=e.target.parentNode.parentNode.children[2].innerText.split(":")[2].split("P")[0].split(" ")[1].split(e.target.parentNode.parentNode.children[2].innerText.split(":")[2].split("P")[0].split(" ")[1].substr(-1))[0],r=e.target.parentNode.parentNode.children[2].innerText.split("$")[0].split(":")[3].substr(1,6),l=this.props.d.id;this.props.editor(t,a,n,s,r,l)}},{key:"deleteDeal",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.d.id,a=this.props.d.destination,!window.confirm("Are you sure you want to delete the "+a+" deal (id - "+t+")?")){e.next=10;break}return e.next=5,fetch("http://localhost:3000/delete_deal?dealID=".concat(t));case 5:return n=e.sent,e.next=8,n.json();case 8:e.sent,this.props.deals();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"followDeal",value:function(){var e=Object(c.a)(o.a.mark(function e(t){var a,n,s,r,l,i,c,d,p,u,h,m,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target,n=this.props.d.id,s=this.props.propstate.isLogged,r=this.props.propstate.following,l=JSON.parse(this.props.propstate.deals[this.props.d.id-1].following),"Follow this deal"!==a.innerHTML){e.next=23;break}return a.classList.remove("followBlink","btn-warning"),a.classList.add("unfollow","btn-success"),a.innerHTML="Unfollow deal",r.push(n),l.push(s),i=JSON.stringify(r),c=JSON.stringify(l),e.next=16,fetch("http://localhost:3000/follow_deal?dealID=".concat(n,"&userID=").concat(s,"&userFollows=").concat(i,"&dealFollows=").concat(c));case 16:return d=e.sent,e.next=19,d.json();case 19:e.sent,this.props.userFollowStatus(i),e.next=39;break;case 23:return a.classList.remove("unfollow","btn-success"),a.classList.add("followBlink","btn-warning"),a.innerHTML="Follow this deal",(p=r.indexOf(n))>-1&&r.splice(p,1),(u=l.indexOf(s))>-1&&l.splice(u,1),h=JSON.stringify(r),m=JSON.stringify(l),e.next=34,fetch("http://localhost:3000/follow_deal?dealID=".concat(n,"&userID=").concat(s,"&userFollows=").concat(h,"&dealFollows=").concat(m));case 34:return g=e.sent,e.next=37,g.json();case 37:e.sent,this.props.userFollowStatus(h);case 39:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(n.Component),N=a(36),w=a.n(N)()("http://localhost:8000");function y(e){w.on("data",function(t){return e(null,t)}),w.emit("subscribeToData",100)}var k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={dealDestination:"",dealDescription:"",dealDeparture:"",dealArrival:"",dealPrice:"",dealID:""},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.setState({dealDestination:this.props.propstate.dealDestination,dealDescription:this.props.propstate.dealDescription,dealDeparture:this.props.propstate.dealDeparture,dealArrival:this.props.propstate.dealArrival,dealPrice:parseInt(this.props.propstate.dealPrice),dealID:parseInt(this.props.propstate.dealID)})}},{key:"render",value:function(){return s.a.createElement("div",{className:"EditorCont"},s.a.createElement("div",{className:"Login Editor"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{className:"loghead"},"Editor"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Destination: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"dealDestination",onChange:this.handler.bind(this),value:this.state.dealDestination})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo editDesc"},"\xa0\xa0\xa0\xa0Description:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("textarea",{className:"logInput txtArea",maxLength:"599",name:"dealDescription",onChange:this.handler.bind(this),value:this.state.dealDescription})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"float-left edit-arrival-departure"},s.a.createElement("span",{className:"loginfo edit-departure"},"\xa0\xa0\xa0\xa0Departure:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput flexed-inp",type:"text",name:"dealDeparture",onChange:this.handler.bind(this),value:this.state.dealDeparture})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo edit-arrival"},"\xa0\xa0\xa0\xa0Arrival:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput flexed-inp",type:"text",name:"dealArrival",onChange:this.handler.bind(this),value:this.state.dealArrival}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Price:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"dealPrice",onChange:this.handler.bind(this),value:this.state.dealPrice})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo editImage"},"\xa0\xa0\xa0\xa0Image: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{type:"file",name:"image",onChange:this.handler.bind(this),value:this.state.regUsername})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{type:"button",onClick:this.updateDeal.bind(this),className:"btn btn-warning btn-sign-in"},"Edit"),s.a.createElement("br",null)))}},{key:"updateDeal",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=parseInt(this.state.dealID),a=parseInt(this.state.dealPrice),e.next=4,fetch("http://localhost:3000/editDeal?dealDestination=".concat(this.state.dealDestination,"&dealDescription=").concat(this.state.dealDescription,"&dealDeparture=").concat(this.state.dealDeparture,"&dealArrival=").concat(this.state.dealArrival,"&dealPrice=").concat(a,",&dealID=").concat(t));case 4:return n=e.sent,e.next=7,n.json();case 7:e.sent,this.props.deals();case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(s)))).state={hasAccount:!0,alert:"alertOff",alertBoldTxt:"",alertTxt:"",isLogged:0,following:[],deals:[],door:"hideIfNotLogged",followBtn:"",deleteBtn:"",editBtn:"",editor:!1,dealDestination:"",dealDescription:"",dealDeparture:"",dealArrival:"",dealPrice:"",dealID:""},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.deals()}},{key:"deals",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y(function(e,a){return t.setState({deals:a})}),this.state.editor&&this.setState({editor:!1,isLogged:1});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.hasAccount&0===this.state.isLogged?s.a.createElement("div",{className:"App"},s.a.createElement(f,{logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement(b,{isLogged:this.isLogged.bind(this),summonAlert:this.summonAlert.bind(this),propstate:this.state,hasAccount:this.hasAccount.bind(this)})):!this.state.hasAccount&0===this.state.isLogged?s.a.createElement("div",{className:"App"},s.a.createElement(f,{logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement(E,{isLogged:this.isLogged.bind(this),summonAlert:this.summonAlert.bind(this),propstate:this.state,hasAccount:this.hasAccount.bind(this)})):0!==this.state.isLogged&&1!==this.state.isLogged?s.a.createElement("div",{className:"App"},s.a.createElement(f,{logOut:this.logOut.bind(this),propstate:this.state}),this.state.deals.map(function(t){return s.a.createElement(v,{propstate:e.state,key:t.id,d:t,userFollowStatus:e.userFollowStatus.bind(e)})})):1!==this.state.isLogged||this.state.editor?this.state.editor?s.a.createElement("div",{className:"App"},s.a.createElement(f,{logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement("p",{className:"Adminhead"},"Admin Mode"),s.a.createElement(k,{deals:this.deals.bind(this),editor:this.editor.bind(this),propstate:this.state})):void 0:s.a.createElement("div",{className:"App"},s.a.createElement(f,{logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement("p",{className:"Adminhead"},"Admin Mode"),this.state.deals.map(function(t){return s.a.createElement(v,{editor:e.editor.bind(e),propstate:e.state,key:t.id,d:t})}))}},{key:"editor",value:function(e,t,a,n,s,r){this.setState({editor:!this.state.editor,dealDestination:e,dealDescription:t,dealDeparture:a,dealArrival:n,dealPrice:s,dealID:r})}},{key:"summonAlert",value:function(e,t,a){"x"===e?this.setState({alert:"alertOff",alertBoldTxt:"",alertTxt:""}):this.setState({alert:"alertOn",alertBoldTxt:e,alertTxt:t})}},{key:"hasAccount",value:function(){this.setState({hasAccount:!this.state.hasAccount})}},{key:"isLogged",value:function(e,t,a,n,s,r){this.setState({isLogged:e,door:"displayIfLogged",following:JSON.parse(r)}),1===this.state.isLogged&&this.setState({followBtn:"hideIfNotLogged",deleteBtn:"displayIfLogged",editBtn:"displayIfLogged"}),1!==this.state.isLogged&&0!==this.state.isLogged&&this.setState({followBtn:"displayIfLogged",deleteBtn:"hideIfNotLogged",editBtn:"hideIfNotLogged"})}},{key:"logOut",value:function(){this.setState({isLogged:0,hasAccount:!0,door:"hideIfNotLogged"})}},{key:"userFollowStatus",value:function(e){this.setState({following:JSON.parse(e)}),this.deals()}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){}},[[37,1,2]]]);
//# sourceMappingURL=main.7b763c06.chunk.js.map