(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n(244)},244:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(35),i=n.n(c),o=n(12),s=n(11),u=n(108),l=n(32),m=n(2),p=n(1),d=n(8),h=n(6),f=n(9),b=n(22),E=n.n(b),v=n(26),y=n(40),O=n(109),S=n.n(O).a.create({baseURL:"http://localhost:3001"}),g=n(17),j=Object(g.a)(),I=function(e){return function(){var t=Object(y.a)(E.a.mark(function t(n){var a;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.get("/streams/".concat(e));case 2:a=t.sent,n({type:"FETCH_STREAM",payload:a.data});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},N=n(246),w=n(245),C=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderInput=function(e){var t=e.input,a=e.label,c=e.meta,i="field ".concat(c.error&&c.touched?"error":"");return r.a.createElement("div",{className:i},r.a.createElement("label",null," ",a," "),r.a.createElement("input",Object.assign({},t,{autoComplete:"off"})),n.renderError(c))},n.renderError=function(e){var t=e.error;if(e.touched&&t)return r.a.createElement("div",{className:"ui error message"},r.a.createElement("div",{className:"header"},t))},n.onSubmit=function(e){n.props.onSubmit(e)},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.handleSubmit(this.onSubmit),className:"ui form error"},r.a.createElement(N.a,{name:"title",component:this.renderInput,label:"Enter Titile"}),r.a.createElement(N.a,{name:"description",component:this.renderInput,label:"Enter Description"}),r.a.createElement("button",{className:"ui button primary"},"Submit"))}}]),t}(a.Component),k=Object(w.a)({form:"streamForm",validate:function(e){var t={};return e.title||(t.title="You must enter a title!"),e.description||(t.description="You must enter a description!"),t}})(C),A=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.createStream(e)},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Create a Stream"),r.a.createElement(k,{onSubmit:this.onSubmit}))}}]),t}(a.Component),T=Object(o.b)(null,{createStream:function(e){return function(){var t=Object(y.a)(E.a.mark(function t(n,a){var r,c;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,S.post("/streams",Object(v.a)({},e,{userId:r}));case 3:c=t.sent,n({type:"SCREATE_STREAM",payload:c.data}),j.push("/");case 6:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()}})(A),_=n(20),D=function(e){return i.a.createPortal(r.a.createElement("div",{onClick:e.onDismiss,className:"ui dimmer modals visible active"},r.a.createElement("div",{onClick:function(e){return e.stopPropagation()},className:"ui standard modal visible active"},r.a.createElement("div",{className:"header"},e.title),r.a.createElement("div",{className:"content"},e.content),r.a.createElement("div",{className:"actions"},e.actions))),document.querySelector("#modal"))},R=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderActions=function(){var e=n.props.match.params.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return n.props.deleteStream(e)},className:"ui button negative"},"Delete"),r.a.createElement(_.a,{to:"/",className:"ui button"},"Cancel"))},n.renderContent=function(){return n.props.stream?"Are you sure you eant to delete the stream with title: ".concat(n.props.stream.title):"Are you sure you eant to delete this stream?"},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement(D,{title:"Delete Stream",content:this.renderContent(),actions:this.renderActions(),onDismiss:function(){return j.push("/")}})}}]),t}(r.a.Component),x=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:I,deleteStream:function(e){return function(){var t=Object(y.a)(E.a.mark(function t(n){return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.delete("/streams/".concat(e));case 2:n({type:"DELETE_STREAM",payload:e}),j.push("/");case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(R),M=n(46),U=n.n(M),L=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){n.props.editStream(n.props.match.params.id,e)},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStream(this.props.match.params.id)}},{key:"render",value:function(){return this.props.stream?r.a.createElement("div",null,r.a.createElement("h3",null,"Edit a Stream"),r.a.createElement(k,{initialValues:U.a.pick(this.props.stream,"title","description"),onSubmit:this.onSubmit})):r.a.createElement("div",null,"Loading...")}}]),t}(a.Component),P=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:I,editStream:function(e,t){return function(){var n=Object(y.a)(E.a.mark(function n(a){var r;return E.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S.patch("/streams/".concat(e),t);case 2:r=n.sent,a({type:"EDIT_STREAM",payload:r.data}),j.push("/");case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(L),F=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).renderAdmin=function(e){return null===e.userId?null:e.userId===n.props.currentUserId?r.a.createElement("div",{className:"right floated content"},r.a.createElement(_.a,{to:"/streams/edit/".concat(e.id),className:"ui primary button"},"Edit"),r.a.createElement(_.a,{to:"/streams/delete/".concat(e.id),className:"ui negative button"},"Delete")):null},n.renderList=function(){return n.props.streams.map(function(e){return r.a.createElement("div",{className:"item",key:e.id},n.renderAdmin(e),r.a.createElement("i",{className:"large middle aligned icon camera"}),r.a.createElement("div",{className:"content"},r.a.createElement(_.a,{to:"/streams/".concat(e.id),className:"header"},e.title),r.a.createElement("div",{className:"description"},e.description)))})},n.renderCreate=function(){if(n.props.isSignedIn)return r.a.createElement("div",{style:{textAlign:"right"}},r.a.createElement(_.a,{to:"/streams/new",className:"ui button primary"},"Create Stream"))},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchStreams()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Streams"),r.a.createElement("div",{className:"ui celled list"}," ",this.renderList()),this.renderCreate())}}]),t}(a.Component),G=Object(o.b)(function(e){return{streams:Object.values(e.streams),currentUserId:e.auth.userId,isSignedIn:e.auth.isSignedIn}},{fetchStreams:function(){return function(){var e=Object(y.a)(E.a.mark(function e(t){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/streams");case 2:n=e.sent,t({type:"FETCH_STREAMS",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(F),H=n(111),q=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).videoRef=r.a.createRef(),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.fetchStream(e),this.buildPlayer()}},{key:"componentDidUpdate",value:function(){this.buildPlayer()}},{key:"componentWillUnmount",value:function(){this.player.destroy()}},{key:"buildPlayer",value:function(){if(!this.player&&this.props.stream){var e=this.props.match.params.id;this.player=H.a.createPlayer({type:"flv",url:"http://localhost:8000/live/".concat(e,".flv")}),this.player.attachMediaElement(this.videoRef.current),this.player.load()}}},{key:"render",value:function(){if(!this.props.stream)return r.a.createElement("div",null,"Loading...");var e=this.props.stream,t=e.title,n=e.description;return r.a.createElement("div",null,r.a.createElement("video",{ref:this.videoRef,style:{width:"100%"},controls:!0}),r.a.createElement("h1",null,t),r.a.createElement("h5",null,n))}}]),t}(a.Component),B=Object(o.b)(function(e,t){return{stream:e.streams[t.match.params.id]}},{fetchStream:I})(q),J=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.OnSignInClick=function(){n.auth.signIn()},n.OnSignOutClick=function(){n.auth.signOut()},n.renderAuthButton=function(){return null===n.props.isSignedIn?r.a.createElement("div",null,"loading..."):n.props.isSignedIn?r.a.createElement("div",null,r.a.createElement("button",{onClick:n.OnSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out")):r.a.createElement("button",{onClick:n.OnSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign In With Google")},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"936425069352-967v07bp2eue1bbct53mfrqaub8brfhc.apps.googleusercontent.com",scope:"email"}).then(function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)})})}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(a.Component),V=Object(o.b)(function(e){return{isSignedIn:e.auth.isSignedIn,userId:e.auth.userId}},{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(J),W=function(){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(_.a,{to:"/",className:"item"},"Streamy"),r.a.createElement("div",{className:"right menu"},r.a.createElement(_.a,{to:"/streams/new",className:"item"},"All Streams"),r.a.createElement(V,null)))},X=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.b,{history:j},r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:G}),r.a.createElement(l.a,{path:"/streams/new",exact:!0,component:T}),r.a.createElement(l.a,{path:"/streams/edit/:id",exact:!0,component:P}),r.a.createElement(l.a,{path:"/streams/delete/:id",exact:!0,component:x}),r.a.createElement(l.a,{path:"/streams/:id",exact:!0,component:B})))))},Y=n(247),K=n(39),z={isSignedIn:null,userId:null},Q=Object(s.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(v.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(v.a)({},e,{isSignedIn:!1,userId:null});default:return e}},form:Y.a,streams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_STREAMS":return Object(v.a)({},e,U.a.mapKeys(t.payload,"id"));case"FETCH_STREAM":case"SCREATE_STREAM":case"EDIT_STREAM":return Object(v.a)({},e,Object(K.a)({},t.payload.id,t.payload));case"DELETE_STREAM":return U.a.omit(e,t.payload);default:return e}}}),Z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d;i.a.render(r.a.createElement(o.a,{store:Object(s.e)(Q,Z(Object(s.a)(u.a)))},r.a.createElement(X,null)),document.querySelector("#root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.cf76f389.chunk.js.map