(this["webpackJsonprandom-jokes"]=this["webpackJsonprandom-jokes"]||[]).push([[0],{62:function(e,t,a){e.exports=a(93)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),c=a.n(o),l=(a(67),a(68),a(23)),i=a(0),s=a(37),u=a(139),d=a(127),m=a(138),k=(a(69),a(129)),p=a(131),f=a(132),b=Object(d.a)({root:{minWidth:275,textAlign:"left"},title:{fontSize:14},pos:{marginBottom:12}});function h(){var e=b();return r.a.createElement(k.a,{className:e.root,"data-testid":"about-card"},r.a.createElement(p.a,null,r.a.createElement(f.a,{className:e.title,color:"textSecondary",gutterBottom:!0},"About this website"),r.a.createElement(f.a,{variant:"h5",component:"h2"},"Random Jokes"),r.a.createElement(f.a,{className:e.pos,color:"textSecondary"},"by Harry Pham"),r.a.createElement(f.a,{variant:"body2",component:"p"},"A small and fun website created during COVID-19 self-isolation period.",r.a.createElement("br",null),"Built with React and TypeScript, the jokes themselves are fetched from "," ",r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/15Dkatz/official_joke_api",target:"_blank",rel:"noopener noreferrer"},"Official Joke API"))))}var g=Object(d.a)((function(e){return Object(m.a)({backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}})}));function E(){var e=g(),t=Object(n.useState)(!1),a=Object(l.a)(t,2),o=a[0],c=a[1];return r.a.createElement("header",{className:"Header"},r.a.createElement(i.b.Provider,{value:{color:"black"}},r.a.createElement("div",{className:"HeaderIconSection"},r.a.createElement("div",{"aria-label":"Info about this website","aria-pressed":"false",role:"button",className:"HeaderIcon"},r.a.createElement(s.b,{"data-testid":"info-icon",tabIndex:0,onClick:function(){return c(!o)},onKeyDown:function(e){return 13!==e.keyCode||c(!o)}})))),r.a.createElement(u.a,{className:e.backdrop,open:o,onClick:function(){return c(!1)}},r.a.createElement(h,null)),r.a.createElement("a",{className:"App-link",href:"/randomjokes",rel:"noopener noreferrer"},"Random Jokes"),r.a.createElement(i.b.Provider,{value:{color:"black"}},r.a.createElement("div",{className:"HeaderIconSection"},r.a.createElement("a",{"aria-label":"Visit Github repo of this website",role:"button",href:"https://github.com/amadeuspham/randomjokes/",target:"_blank",rel:"noopener noreferrer","data-testid":"github-icon"},r.a.createElement(s.a,null)),r.a.createElement("a",{"aria-label":"Visit author's LinkedIn profile",role:"button",href:"https://www.linkedin.com/in/amadeuspham/",target:"_blank",rel:"noopener noreferrer","data-testid":"linkedin-icon"},r.a.createElement(s.c,null)))))}var v=a(31),j=a.n(v),y=a(32),w=a(39),C=a(53),J=a(54),N=a(57),O=a(58),T=a(55),I=a.n(T),x=a(135),S=a(40),P=(a(91),a(133)),D=a(56),B=a.n(D);a(92);function A(e){var t=e.joke,a=e.loading,n=e.reveal,o=e.setReveal;return a?r.a.createElement("div",{"data-testid":"joke-card-loading",className:"JokeCard"},r.a.createElement(P.a,null)):r.a.createElement(B.a,{isFlipped:n},r.a.createElement("div",{"data-testid":"joke-card-setup",role:"button","aria-label":"Joke setup",tabIndex:0,className:"JokeCard",onClick:function(){return o(!n)},onKeyDown:function(e){return 13!==e.keyCode||o(!n)}},r.a.createElement("p",null,t.setup)),n?r.a.createElement("div",{"data-testid":"joke-card-punchline",className:"JokeCard JokeCardReveal",role:"button","aria-label":"Joke punchline",tabIndex:0,onClick:function(){return o(!n)},onKeyDown:function(e){return 13!==e.keyCode||o(!n)}},r.a.createElement("p",null,t.punchline)):r.a.createElement("div",{"data-testid":"joke-card-punchline",className:"JokeCard JokeCardReveal"}))}var M=a(136),R=a(137),W=a(134),_=Object(d.a)((function(e){return Object(m.a)({styledButton:{background:"#FFEE88","&:hover":{background:"#e3d26f"},borderRadius:20,border:0,color:"#64236e",height:40,padding:"0 30px",marginTop:"30px",fontWeight:"bold"},styledMenuItem:{"&:focus":{backgroundColor:"#FFEE88",color:"black","&:hover":{backgroundColor:"#e3d26f",color:"black"}}}})}));function F(e){var t=e.currentType,a=e.changeCurrentType,o=Object(n.useState)(null),c=Object(l.a)(o,2),i=c[0],s=c[1],u=_(),d=function(){s(null)},m=function(e,t){e!==t&&a(t),d()},k=t.charAt(0).toUpperCase()+t.slice(1)+" jokes";return r.a.createElement("div",null,r.a.createElement(W.a,{"data-testid":"filter-button","aria-controls":"joke-filter-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},className:u.styledButton},k),r.a.createElement(M.a,{id:"joke-filter-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:d},r.a.createElement(R.a,{"data-testid":"all-jokes-choice",className:u.styledMenuItem,onClick:function(){return m(t,"all")},selected:"all"===t},"All jokes"),r.a.createElement(R.a,{"data-testid":"general-jokes-choice",className:u.styledMenuItem,onClick:function(){return m(t,"general")},selected:"general"===t},"General jokes"),r.a.createElement(R.a,{"data-testid":"programming-jokes-choice",className:u.styledMenuItem,onClick:function(){return m(t,"programming")},selected:"programming"===t},"Programming jokes")))}function H(e){var t=e.allJokes,a=e.currentPos,o=e.loading,c=e.pickJoke,i=e.currentType,s=e.changeCurrentType,u=Object(n.useState)(!1),d=Object(l.a)(u,2),m=d[0],k=d[1],p=t[a],f=function(e){k(!1),c(e)};return r.a.createElement("div",{className:"JokeWindow"},r.a.createElement(x.a,{container:!0,className:"JokeWindowMain"},r.a.createElement(x.a,{item:!0},r.a.createElement("div",{"data-testid":"up-button","aria-label":"Previous joke",tabIndex:0,role:"button",className:"DirectedButton",onClick:function(){return f("back")},onKeyDown:function(e){return 13!==e.keyCode||f("back")}},r.a.createElement(S.b,{className:"DirectionIcon"}))),r.a.createElement(x.a,{item:!0},r.a.createElement(A,{joke:p,loading:o,reveal:m,setReveal:k})),r.a.createElement(x.a,{item:!0},r.a.createElement("div",{"data-testid":"down-button","aria-label":"Next joke",tabIndex:0,role:"button",className:"DirectedButton",onClick:function(){return f("forward")},onKeyDown:function(e){return 13!==e.keyCode||f("forward")}},r.a.createElement(S.a,{className:"DirectionIcon"})))),r.a.createElement(F,{currentType:i,changeCurrentType:s}))}var K=function(e){Object(O.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(C.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={allJokes:[],loading:!0,currentPos:0,currentType:"all"},e.loadTenJokes=Object(w.a)(j.a.mark((function t(){var a,n,r,o,c,l,i,s=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:"forward",n=e.state,r=n.allJokes,o=n.currentType,c="https://official-joke-api.appspot.com/random_ten","general"===o?c="https://official-joke-api.appspot.com/jokes/general/ten":"programming"===o&&(c="https://official-joke-api.appspot.com/jokes/programming/ten"),t.next=6,I.a.get(c);case 6:l=t.sent,i=l.data,"forward"===a?e.setState({allJokes:[].concat(Object(y.a)(r),Object(y.a)(i)),loading:!1}):e.setState({allJokes:[].concat(Object(y.a)(i),Object(y.a)(r)),loading:!1});case 9:case"end":return t.stop()}}),t)}))),e.pickJoke=function(t){var a=e.state,n=a.currentPos,r=a.allJokes;"back"===t?0===n?(e.setState({loading:!0},(function(){return e.loadTenJokes(t)})),e.setState({currentPos:9})):e.setState({currentPos:n-1}):"forward"===t&&(n===r.length-2&&e.setState({loading:!0},(function(){return e.loadTenJokes(t)})),e.setState({currentPos:n+1}))},e.changeCurrentType=function(t){e.setState({allJokes:[],loading:!0,currentPos:0,currentType:t},(function(){return e.loadTenJokes()}))},e}return Object(J.a)(a,[{key:"componentDidMount",value:function(){var e=Object(w.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadTenJokes();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.allJokes,a=e.loading,n=e.currentPos,o=e.currentType;return r.a.createElement(H,{allJokes:t,currentPos:n,loading:a,pickJoke:this.pickJoke,currentType:o,changeCurrentType:this.changeCurrentType})}}]),a}(r.a.Component);var z=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.2080b3f8.chunk.js.map