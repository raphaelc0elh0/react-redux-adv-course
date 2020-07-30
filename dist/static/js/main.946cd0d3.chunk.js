(this["webpackJsonpreact-redux-adv-from-net-ninja"]=this["webpackJsonpreact-redux-adv-from-net-ninja"]||[]).push([[0],{325:function(e,t,a){e.exports=a(665)},330:function(e,t,a){},665:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(114),i=a.n(c),l=(a(330),a(19)),o=a(20),s=a(21),u=a(22),m=a(5),d=a(2),h=a(6),p=Object(h.b)((function(e){return e}),(function(e){return{signOut:function(){return e((function(e,t,a){a().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){var t=e.profile;return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/",className:"btn btn-floating pink lighten-1"},t.initials)))})),E=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(m.c,{to:"/signin"},"Login")))},f=Object(h.b)((function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(p,{profile:a}):r.a.createElement(E,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(m.b,{to:"/",className:"brand-logo"},"MarioPlan"),n))})),b=a(54),N=a.n(b),v=function(e){var t=e.notifications,a=t?t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null," ",e.content),r.a.createElement("div",{className:"grey-text note-date"},N()(e.time.toDate()).fromNow()))})):r.a.createElement("li",null,"No notifications");return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},a))))},g=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},N()(t.createdAt.toDate()).calendar())))},j=function(e){var t=e.projects,a=t.length?t.map((function(e){return r.a.createElement(m.b,{key:e.id,to:"/project/".concat(e.id)},r.a.createElement(g,{project:e}))})):r.a.createElement("p",null,"NO projects found!");return r.a.createElement("div",{className:"project-list section"},a)},O=a(23),C=a(14),y=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.notifications;return e.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(j,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(v,{notifications:a})))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),S=Object(C.d)(Object(O.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]),Object(h.b)((function(e){return{projects:e.firestore.ordered.projects||[],notifications:e.firestore.ordered.notifications||[],auth:e.firebase.auth}})))(y),w=Object(C.d)(Object(h.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(O.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,N()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading project...")):r.a.createElement(d.a,{to:"/signin"})})),R=a(30),x=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(R.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.signIn(n.state)},n.state={email:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.authError;if(e.auth.uid)return r.a.createElement(d.a,{to:"/"});var a=t?r.a.createElement("div",{className:"red-text center"},r.a.createElement("p",null,t)):null;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink ligthen-1 z-depth-0"},"Login"),a)))}}]),a}(n.Component),k=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e(function(e){return function(t,a,n){n().auth().signInWithEmailAndPassword(e.email,e.password).then((function(){t({type:"LOGIN_SUCCESS"})})).catch((function(e){t({type:"LOGIN_ERROR",error:e})}))}}(t))}}}))(x),I=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(R.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.signUp(n.state)},n.state={firstName:"",lastName:"",email:"",password:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;if(t.uid)return r.a.createElement(d.a,{to:"/"});var n=a?r.a.createElement("div",{className:"red-text center"},r.a.createElement("p",null,a)):null;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink ligthen-1 z-depth-0"},"Sign Up"),n)))}}]),a}(n.Component),P=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n();r.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return r.firestore().collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",error:e})}))}}(t))}}}))(I),F=a(41),U=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(R.a)({},e.target.id,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.createProject(n.state),n.props.history.push("/")},n.state={title:"",content:""},n}return Object(o.a)(a,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink ligthen-1 z-depth-0"},"Create")))):r.a.createElement(d.a,{to:"/signin"})}}]),a}(n.Component),L=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){var r=n().firestore(),c=a().firebase.profile,i=a().firebase.auth.uid;r.collection("projects").add(Object(F.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",error:e})}))}}(t))}}}))(U),_=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(f,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:S}),r.a.createElement(d.b,{path:"/project/:id",component:w}),r.a.createElement(d.b,{path:"/signin",component:k}),r.a.createElement(d.b,{path:"/signup",component:P}),r.a.createElement(d.b,{path:"/create",component:L}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(116),T={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return Object(F.a)({},e,{authError:t.error.message});case"LOGIN_SUCCESS":return Object(F.a)({},e,{authError:null});case"SIGNOUT SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(F.a)({},e,{authError:null});case"SIGNUP_ERROR":return Object(F.a)({},e,{authError:t.error.message});default:return e}},z={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect all the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.error),e;default:return e}},J=Object(C.c)({auth:G,project:D,firestore:A.firestoreReducer,firebase:O.firebaseReducer}),B=a(324),W=a(117),M=a.n(W),K=(a(660),a(663),{apiKey:"AIzaSyCMDWf-r6P1W0FJrg3ES118R9PJ3p5LyQM",authDomain:"react-redux-adv-course.firebaseapp.com",databaseURL:"https://react-redux-adv-course.firebaseio.com",projectId:"react-redux-adv-course",storageBucket:"react-redux-adv-course.appspot.com",messagingSenderId:"544020372105",appId:"1:544020372105:web:fe29bf23e0d9f547fd8458",measurementId:"G-TRBSN581KC"});M.a.initializeApp(K),M.a.firestore();var Q=M.a,$=Object(C.e)(J,Object(C.d)(Object(C.a)(B.a.withExtraArgument(O.getFirebase))));function q(e){var t=e.children,a=Object(h.c)((function(e){return e.firebase.auth}));return Object(O.isLoaded)(a)?t:null}var H=r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:$},r.a.createElement(O.ReactReduxFirebaseProvider,{firebase:Q,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:$.dispatch,createFirestoreInstance:A.createFirestoreInstance},r.a.createElement(q,null,r.a.createElement(_,null)))));i.a.render(H,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[325,1,2]]]);
//# sourceMappingURL=main.946cd0d3.chunk.js.map