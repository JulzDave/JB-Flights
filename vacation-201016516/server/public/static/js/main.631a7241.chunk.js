(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){e.exports=a(323)},171:function(e,t,a){},199:function(e,t){},323:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(153),l=a.n(r),i=(a(171),a(11)),o=a.n(i),c=a(25),d=a(18),p=a(19),h=a(22),u=a(20),m=a(23),g=(a(37),a(46)),b=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:""},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.preLog()}},{key:"preLog",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/prelog");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,this.setState({username:a.user.username,password:a.user.password});case 8:return e.next=10,this.loginBtn();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement("div",{className:"LoginCont"},s.a.createElement("div",{className:"Login"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{className:"loghead"},"Login"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0User name: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"username",onChange:this.handler.bind(this),value:this.state.username})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Password:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"password",name:"password",onChange:this.handler.bind(this),value:this.state.password})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning btn-sign-in",onClick:this.loginBtn.bind(this)},"Sign In"),s.a.createElement("div",{className:"noAccount",onClick:this.prophasAccount.bind(this)},"I don't have an account"),s.a.createElement("div",{className:this.props.propstate.alert+" alert alert-danger alert-dismissible fade show",role:"alert"},s.a.createElement("strong",null,this.props.propstate.alertBoldTxt)," ",this.props.propstate.alertTxt,s.a.createElement("button",{type:"button",className:"close",onClick:this.alertOff.bind(this)},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}},{key:"loginBtn",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).noUser?this.props.summonAlert("Error","The user name or password that you typed is incorrect"):(n=JSON.parse(a[0].following),this.props.isLogged(a[0].id,a[0].firstname,a[0].lastname,a[0].username,a[0].password,n));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"prophasAccount",value:function(){this.props.hasAccount()}},{key:"alertOff",value:function(){this.props.summonAlert("x")}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={headerBtn1:"Home",headerBtn2:"About"},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(){1===this.props.LoggedAdmin?this.setState({headerBtn1:"Add Vacation",headerBtn2:"Graph"}):this.setState({headerBtn1:"Home",headerBtn2:"About"})}},{key:"render",value:function(){return s.a.createElement("header",{className:"App"},s.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-dark bg-primary"},s.a.createElement("a",{className:"navbar-brand",href:"##"},s.a.createElement("font",{className:"logo"},s.a.createElement("font",{className:"darkorange"},"B"),"ryce",s.a.createElement("font",{className:"darkorange"},"N"),"imbus")),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item active"},s.a.createElement("a",{className:"nav-link",href:"##",onClick:this.addDeal.bind(this)},this.state.headerBtn1,s.a.createElement("span",{className:"sr-only"},"(current)"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement("a",{className:"nav-link",onClick:this.viewGraph.bind(this),href:"##"},this.state.headerBtn2)),s.a.createElement("li",{className:"nav-item dropdown"},s.a.createElement("a",{className:"nav-link dropdown-toggle",href:"##",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown link"),s.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},s.a.createElement("a",{className:"dropdown-item",href:"##"},"Action"),s.a.createElement("a",{className:"dropdown-item",href:"##"},"Another action"),s.a.createElement("a",{className:"dropdown-item",href:"##"},"Something else here")))),s.a.createElement("ul",{className:this.props.propstate.door+" navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item exit",onClick:this.logOut.bind(this)},s.a.createElement("a",{className:"nav-link unpad",href:"##"},s.a.createElement("span",{title:"Logout",role:"img","aria-label":"door"},"\ud83d\udeaa")))))))}},{key:"addDeal",value:function(e){"Add Vacation"===e.target.innerHTML.split("<")[0]&&this.props.editor("","","","",0,"",!0)}},{key:"viewGraph",value:function(){"Graph"===this.state.headerBtn2&&this.props.graph()}},{key:"logOut",value:function(){this.props.logOut()}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={firstname:"",lastname:"",regUsername:"",regPassword:""},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"LoginCont"},s.a.createElement("div",{className:"Login Register"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{className:"loghead"},"Register"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Firstname: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"firstname",onChange:this.handler.bind(this),value:this.state.firstname})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Lastname:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"lastname",onChange:this.handler.bind(this),value:this.state.lastname})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0User name: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"regUsername",onChange:this.handler.bind(this),value:this.state.regUsername})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Password:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"password",name:"regPassword",onChange:this.handler.bind(this),value:this.state.regPassword})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{type:"button",className:"btn btn-warning btn-sign-in",onClick:this.registerBtn.bind(this)},"Register"),s.a.createElement("div",{className:"noAccount",onClick:this.prophasAccount.bind(this)},"I already have an account"),s.a.createElement("div",{className:this.props.propstate.alert+" alert alert-danger alert-dismissible fade show",role:"alert"},s.a.createElement("strong",null,this.props.propstate.alertBoldTxt)," ",this.props.propstate.alertTxt,s.a.createElement("button",{type:"button",className:"close",onClick:this.alertOff.bind(this)},s.a.createElement("span",{"aria-hidden":"true"},"\xd7")))))}},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"prophasAccount",value:function(){this.props.hasAccount()}},{key:"registerBtn",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.firstname.length>1&&this.state.lastname.length>1&&this.state.regUsername.length>5&&this.state.regPassword.length>5)){e.next=10;break}return e.next=3,fetch("http://localhost:3000/register",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(this.state)});case 3:return t=e.sent,e.next=6,t.json();case 6:e.sent.taken?this.props.summonAlert("Error","User name "+this.state.regUsername+" already taken"):alert("thanks for registering "+this.state.firstname),e.next=11;break;case 10:this.state.regUsername.length<=5||this.state.regPassword.length<=5?this.props.summonAlert("Error","Make sure your User name And Password are at least 6 characters long"):this.props.summonAlert("Error","You must include a first and last name");case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"alertOff",value:function(){this.props.summonAlert("x")}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={userFollows:[],btnColor:"warning",btnTxt:"Follow this deal",btnClass:"followBlink",deals:[]},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.refreshThis()}},{key:"refreshThis",value:function(){JSON.parse(this.props.d.following).includes(this.props.propstate.isLogged)?this.setState({btnColor:"success",btnTxt:"Unfollow deal",btnClass:"unfollow"}):this.setState({btnColor:"warning",btnTxt:"Follow this deal",btnClass:"followBlink"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"App "},s.a.createElement("div",{className:"card text-white text-center bg-primary mb-3",id:this.props.d.id},s.a.createElement("img",{className:"card-img-top",src:this.props.d.image,alt:this.props.d.destination}),s.a.createElement("div",{className:"card-header"},this.props.d.destination),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title"}," Departure: ",this.props.d.departure," | Arrival: ",this.props.d.arrival," ",s.a.createElement("br",null),s.a.createElement("font",{className:"priceTag"},"Price: ",this.props.d.price,"$")),s.a.createElement("p",{className:"card-text description"},this.props.d.description)),s.a.createElement("a",{href:"##",onClick:this.followDeal.bind(this),className:this.props.propstate.followBtn+" btn btn-"+this.state.btnColor+" w-100 "+this.state.btnClass},this.state.btnTxt),s.a.createElement("div",{className:"float-left"},s.a.createElement("a",{href:"##",onClick:this.deleteDeal.bind(this),className:this.props.propstate.deleteBtn+" btn btn-danger deleteBtn"},"\xd7 Remove"),s.a.createElement("a",{href:"##",onClick:this.editDeal.bind(this),className:this.props.propstate.editBtn+" btn btn-success editBtn"},"\u270e Edit"))))}},{key:"editDeal",value:function(e){var t=e.target.parentNode.parentNode.children[1].innerText,a=e.target.parentNode.parentNode.children[2].innerText.split("$")[1].substr(2,1e3),n=e.target.parentNode.parentNode.children[2].innerText.split(":")[1].split(" ")[1],s=e.target.parentNode.parentNode.children[2].innerText.split(":")[2].split("P")[0].split(" ")[1].split(e.target.parentNode.parentNode.children[2].innerText.split(":")[2].split("P")[0].split(" ")[1].substr(-1))[0],r=e.target.parentNode.parentNode.children[2].innerText.split("$")[0].split(":")[3].substr(1,6),l=this.props.d.id;this.props.editor(t,a,n,s,r,l)}},{key:"deleteDeal",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.d.id,a=this.props.d.destination,!window.confirm("Are you sure you want to delete the "+a+" deal (id - "+t+")?")){e.next=10;break}return e.next=5,fetch("http://localhost:3000/delete_deal?dealID=".concat(t));case 5:return n=e.sent,e.next=8,n.json();case 8:e.sent,this.props.deals();case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"followDeal",value:function(){var e=Object(c.a)(o.a.mark(function e(t){var a,n,s,r,l,i,c,d,p,h,u,m,g;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.target,n=this.props.d.id,s=this.props.propstate.isLogged,r=this.props.propstate.following,l=JSON.parse(this.props.propstate.deals.find(function(e){return e.id==a.parentNode.id}).following),"Follow this deal"!==a.innerHTML){e.next=24;break}return a.classList.remove("followBlink","btn-warning"),a.classList.add("unfollow","btn-success"),a.innerHTML="Unfollow deal",r.push(n),l.push(s),i=JSON.stringify(r),c=JSON.stringify(l),e.next=17,fetch("http://localhost:3000/follow_deal?dealID=".concat(n,"&userID=").concat(s,"&userFollows=").concat(i,"&dealFollows=").concat(c));case 17:return d=e.sent,e.next=20,d.json();case 20:e.sent,this.props.userFollowStatus(i),e.next=40;break;case 24:return a.classList.remove("unfollow","btn-success"),a.classList.add("followBlink","btn-warning"),a.innerHTML="Follow this deal",(p=r.indexOf(n))>-1&&r.splice(p,1),(h=l.indexOf(s))>-1&&l.splice(h,1),u=JSON.stringify(r),m=JSON.stringify(l),e.next=35,fetch("http://localhost:3000/follow_deal?dealID=".concat(n,"&userID=").concat(s,"&userFollows=").concat(u,"&dealFollows=").concat(m));case 35:return g=e.sent,e.next=38,g.json();case 38:e.sent,this.props.userFollowStatus(u,m);case 40:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(n.Component),N=a(154),w=a.n(N)()("http://localhost:8000");function y(e){w.on("data",function(t){return e(null,t)}),w.emit("subscribeToData",100)}var k=a(155),D=a.n(k),x=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={dealDestination:a.props.propstate.dealDestination,dealDescription:a.props.propstate.dealDescription,dealDeparture:a.props.propstate.dealDeparture,dealArrival:a.props.propstate.dealArrival,dealPrice:parseInt(a.props.propstate.dealPrice),dealID:a.props.propstate.dealID,header:"Editor",btnTxt:"Edit",fileName:"",imgInp:"imgInpShow",isVisible:"invisi"},a.uploadImage=function(e){var t=new FormData,n=e.target.files[0].name.split(".jpg")[0]+"-"+Date.now()+".jpg";a.setState({fileName:n}),t.append("profileImage",e.target.files[0],n),D.a.post("http://localhost:3000/profile/",t).then(function(e){}),a.setState({isVisible:"visi"})},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.dataReciever()}},{key:"componentWillReceiveProps",value:function(){this.dataReciever("")}},{key:"dataReciever",value:function(e){var t=this.props.propstate.dealID;this.setState({dealDestination:this.props.propstate.dealDestination,dealDescription:this.props.propstate.dealDescription,dealDeparture:this.props.propstate.dealDeparture,dealArrival:this.props.propstate.dealArrival,dealPrice:parseInt(this.props.propstate.dealPrice),dealID:this.props.propstate.dealID}),""===t||""===e?this.setState({header:"Add New Deal",btnTxt:"Add",dealDestination:"",dealDescription:"",dealDeparture:"",dealArrival:"",dealPrice:0,dealID:""}):this.setState({header:"Editor",btnTxt:"Edit"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"EditorCont App"},s.a.createElement("div",{className:"Login Editor"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{className:"loghead"},this.state.header),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Destination: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"dealDestination",onChange:this.handler.bind(this),value:this.state.dealDestination})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo editDesc"},"\xa0\xa0\xa0\xa0Description:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("textarea",{className:"logInput txtArea",maxLength:"599",name:"dealDescription",onChange:this.handler.bind(this),value:this.state.dealDescription})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"float-left edit-arrival-departure"},s.a.createElement("span",{className:"loginfo edit-departure"},"\xa0\xa0\xa0\xa0Departure:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"dealDeparture",onChange:this.handler.bind(this),value:this.state.dealDeparture})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo edit-arrival"},"\xa0\xa0\xa0\xa0Arrival:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"dealArrival",onChange:this.handler.bind(this),value:this.state.dealArrival}))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo"},"\xa0\xa0\xa0\xa0Price:\xa0 \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:"logInput",type:"text",name:"dealPrice",onChange:this.handler.bind(this),value:this.state.dealPrice})),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("span",{className:"loginfo editImage"},"\xa0\xa0\xa0\xa0Image: \xa0\xa0\xa0\xa0\xa0",s.a.createElement("input",{className:this.state.imgInp,type:"file",name:"profileImage",onChange:this.uploadImage.bind(this)}),s.a.createElement("span",{className:this.state.isVisible+" didUpload"},s.a.createElement("font",{id:"check"},"\u2713")," \xa0\xa0Image ",s.a.createElement("font",{className:"imgUploaded"},"uploaded!"))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("button",{className:"btn btn-primary backBtn",onClick:this.goBack.bind(this)},"Go back")," ",s.a.createElement("button",{type:"button",onClick:this.updateDeal.bind(this),className:"btn btn-warning btn-sign-in editorBtn"},this.state.btnTxt),s.a.createElement("br",null)))}},{key:"updateDeal",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,n,s,r,l,i;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==this.state.dealID){e.next=12;break}return t=this.state.fileName,a=this.state.dealPrice,e.next=5,fetch("http://localhost:3000/adddeal?dealDestination=".concat(this.state.dealDestination,"&dealImage=uploads/").concat(t,"&dealDescription=").concat(this.state.dealDescription,"&dealDeparture=").concat(this.state.dealDeparture,"&dealArrival=").concat(this.state.dealArrival,"&dealPrice=").concat(a));case 5:return n=e.sent,e.next=8,n.json();case 8:e.sent,this.props.deals(),e.next=22;break;case 12:return s=this.state.fileName,r=parseInt(this.state.dealID),l=parseInt(this.state.dealPrice),e.next=17,fetch("http://localhost:3000/editDeal?dealDestination=".concat(this.state.dealDestination,"&dealImage=uploads/").concat(s,"&dealDescription=").concat(this.state.dealDescription,"&dealDeparture=").concat(this.state.dealDeparture,"&dealArrival=").concat(this.state.dealArrival,"&dealPrice=").concat(l,"&dealID=").concat(r));case 17:return i=e.sent,e.next=20,i.json();case 20:e.sent,this.props.deals();case 22:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handler",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"goBack",value:function(){this.props.backBtn()}}]),t}(n.Component),A=a(331),O=a(328),L=a(330),j=a(332),I=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={chartData:[],following:a.props.propstate.following},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getFollowersData()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){var e=this;setTimeout(function(){e.getFollowersData()},1e3)}},{key:"getFollowersData",value:function(){for(var e=[],t=0;t<this.props.propstate.deals.length;t++)JSON.parse(this.props.propstate.deals[t].following).length>0&&e.push({experiment:"--"+this.props.propstate.deals[t].destination,y:JSON.parse(this.props.propstate.deals[t].following).length}),this.setState({chartData:e})}},{key:"render",value:function(){return s.a.createElement("div",{className:"LoginCont graphCont"},s.a.createElement("div",{className:"Login graph"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("p",{className:"loghead"},"User interest data"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",{className:"myChart"},s.a.createElement(L.a,{domainPadding:{x:40,y:40},animate:{duration:500}},s.a.createElement(O.a,{data:this.state.chartData,alignment:"end",x:"experiment",style:{data:{fill:"#c43a31",stroke:"black",strokeWidth:2}}}),s.a.createElement(j.a,{label:"Vacations",tickLabelComponent:s.a.createElement(A.a,{angle:50,verticalAnchor:"end"}),style:{tickLabels:{padding:35},axisLabel:{padding:60,fontWeight:"bolder"}}}),s.a.createElement(j.a,{dependentAxis:!0,label:"Followers",tickFormat:function(e){return"".concat(e)},style:{axisLabel:{padding:30,fontWeight:"bolder"}}})))))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={hasAccount:!0,alert:"alertOff",alertBoldTxt:"",alertTxt:"",isLogged:0,following:[],deals:[],door:"hideIfNotLogged",followBtn:"",deleteBtn:"",editBtn:"",editor:!1,dealDestination:"",dealDescription:"",dealDeparture:"",dealArrival:"",dealPrice:"",dealID:"",graph:!1},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.deals()}},{key:"deals",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:y(function(e,a){return t.setState({deals:a})}),this.state.editor&&this.setState({editor:!1,isLogged:1});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(this.state.hasAccount&0===this.state.isLogged){return s.a.createElement("div",{className:"App"},s.a.createElement(f,{LoggedAdmin:0,logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement(b,{isLogged:this.isLogged.bind(this),summonAlert:this.summonAlert.bind(this),propstate:this.state,hasAccount:this.hasAccount.bind(this)}))}if(!this.state.hasAccount&0===this.state.isLogged&&!this.state.graph)return s.a.createElement("div",{className:"App"},s.a.createElement(f,{logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement(v,{isLogged:this.isLogged.bind(this),summonAlert:this.summonAlert.bind(this),propstate:this.state,hasAccount:this.hasAccount.bind(this)}));if(0!==this.state.isLogged&&1!==this.state.isLogged&&!this.state.graph){var t=this.state.isLogged;return s.a.createElement("div",{className:"App"},s.a.createElement(f,{logOut:this.logOut.bind(this),propstate:this.state}),this.state.deals.sort(function(e){return JSON.parse(e.following).includes(t)?-1:1}).map(function(t){return s.a.createElement(E,{propstate:e.state,key:t.id,d:t,deals:e.deals.bind(e),userFollowStatus:e.userFollowStatus.bind(e)})}))}if(1===this.state.isLogged&&!this.state.editor&&!this.state.graph){var a=this.state.isLogged;return s.a.createElement("div",{className:"App"},s.a.createElement(f,{graph:this.graph.bind(this),editor:this.editor.bind(this),LoggedAdmin:a,logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement("p",{className:"Adminhead"},"Admin Mode"),this.state.deals.map(function(t){return s.a.createElement(E,{deals:e.deals.bind(e),editor:e.editor.bind(e),propstate:e.state,key:t.id,d:t})}))}if(this.state.editor&&!this.state.graph){return s.a.createElement("div",{className:"App"},s.a.createElement(f,{graph:this.graph.bind(this),LoggedAdmin:1,editor:this.editor.bind(this),logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement("p",{className:"Adminhead"},"Admin Mode"),s.a.createElement(x,{backBtn:this.backBtn.bind(this),deals:this.deals.bind(this),editor:this.editor.bind(this),propstate:this.state}))}if(this.state.graph&&!this.state.editor){var n=this.state.deals;return s.a.createElement("div",{className:"App"},s.a.createElement(f,{graph:this.graph.bind(this),LoggedAdmin:1,editor:this.editor.bind(this),logOut:this.logOut.bind(this),propstate:this.state}),s.a.createElement("p",{className:"Adminhead"},"Admin Mode"),s.a.createElement(I,{graph:this.graph.bind(this),backBtn:this.backBtn.bind(this),propstate:this.state,mydeals:n,deals:this.deals.bind(this)}))}}},{key:"graph",value:function(){this.state.graph?this.setState({editor:!1,graph:!1}):this.setState({editor:!1,graph:!0})}},{key:"editor",value:function(e,t,a,n,s,r,l){l?this.setState({editor:!0,graph:!1,dealDestination:e,dealDescription:t,dealDeparture:a,dealArrival:n,dealPrice:s,dealID:r}):this.setState({editor:!this.state.editor,graph:!1,dealDestination:e,dealDescription:t,dealDeparture:a,dealArrival:n,dealPrice:s,dealID:r})}},{key:"backBtn",value:function(){this.setState({editor:!1})}},{key:"summonAlert",value:function(e,t,a){"x"===e?this.setState({alert:"alertOff",alertBoldTxt:"",alertTxt:""}):this.setState({alert:"alertOn",alertBoldTxt:e,alertTxt:t})}},{key:"hasAccount",value:function(){this.setState({hasAccount:!this.state.hasAccount})}},{key:"isLogged",value:function(e,t,a,n,s,r){this.setState({isLogged:e,door:"displayIfLogged",following:r}),1===this.state.isLogged&&this.setState({followBtn:"hideIfNotLogged",deleteBtn:"displayIfLogged",editBtn:"displayIfLogged"}),1!==this.state.isLogged&&0!==this.state.isLogged&&this.setState({followBtn:"displayIfLogged",deleteBtn:"hideIfNotLogged",editBtn:"hideIfNotLogged",isLogged:e})}},{key:"logOut",value:function(){document.location.reload()}},{key:"userFollowStatus",value:function(e){this.setState({following:JSON.parse(e)}),this.deals()}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement("div",null,s.a.createElement("div",{id:"background-wrap"},s.a.createElement("div",{className:"x1"},s.a.createElement("div",{className:"cloud"})),s.a.createElement("div",{className:"x2"},s.a.createElement("div",{className:"cloud"})),s.a.createElement("div",{className:"x3"},s.a.createElement("div",{className:"cloud"})),s.a.createElement("div",{className:"x4"},s.a.createElement("div",{className:"cloud"})),s.a.createElement("div",{className:"x5"},s.a.createElement("div",{className:"cloud"}))),s.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){}},[[166,1,2]]]);
//# sourceMappingURL=main.631a7241.chunk.js.map