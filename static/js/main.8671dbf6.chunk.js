(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{24:function(e,t,n){e.exports=n(59)},29:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),s=(n(29),n(30),n(3)),l=n.n(s),i=n(17),u=n(2),m=n(18),h=n.n(m),f=n(19),b=n.n(f),v=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},d=function(e){return e.robots.map((function(e,t){return r.a.createElement(v,Object.assign({key:t},e))}))},p=function(e){var t=e.onChange;return r.a.createElement("div",{className:"mb3"},r.a.createElement("input",{className:"ba h3 ph3",onChange:t,type:"text"}))},E=(n(58),function(e){var t=e.children;return r.a.createElement("div",{className:"scroll"},t)}),g=n(20),w=n(21),j=n(23),O=n(22),y=function(e){Object(j.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(g.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(w.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.a.createElement("div",null,"Ooooops!. Something went wrong!"):r.a.createElement("div",null,t)}}]),n}(r.a.Component);var k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),s=Object(u.a)(o,2),m=s[0],f=s[1],v=Object(a.useState)(""),g=Object(u.a)(v,2),w=g[0],j=g[1],O=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("https://jsonplaceholder.typicode.com/users");case 3:t=e.sent,n=t.data,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){O()}),[]);var k=h()((function(e){j(e)}),300);return Object(a.useEffect)((function(){var e=n.filter((function(e){return e.name.toLocaleLowerCase().includes(w.toLocaleLowerCase())}));f(e)}),[w,n]),r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1 lh-title mt4 mb3 white"},"RoboFriends"),r.a.createElement(p,{onChange:function(e){return k(e.target.value)}}),r.a.createElement(E,null,r.a.createElement(y,null,r.a.createElement(d,{robots:m}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.8671dbf6.chunk.js.map