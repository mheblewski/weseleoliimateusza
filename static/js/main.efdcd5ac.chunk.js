(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},11:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);a(11);var n=a(0),c=a.n(n),i=a(7),r=a.n(i),o=a(1),s=a(2),l=a(4),u=a(3),m=a(5),d=(a(6),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).parallaxShift=function(){e.setState({offset:window.pageYOffset,isArrowVisible:0===window.pageYOffset})},e.state={offset:0},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.parallaxShift)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.parallaxShift)}},{key:"render",value:function(){var e="/weseleoliimateusza/images/header.png";return c.a.createElement("div",{className:"header",id:"start",style:{backgroundPositionY:this.state.offset/2,backgroundImage:"url(".concat(e,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",maxHeight:"100vh",backgroundPosition:"center"}},c.a.createElement("img",{src:e,style:{width:"100vw",maxWidth:"100%",height:"auto",visibility:"hidden"}}),c.a.createElement("a",{className:"arrow",href:"#about",style:{visibility:this.state.isArrowVisible?"visible":"hidden"}},c.a.createElement("span",null),c.a.createElement("span",null),c.a.createElement("span",null)))}}]),t}(c.a.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"title"},c.a.createElement("p",null,this.props.text))}}]),t}(c.a.Component),h=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"contact-card"},c.a.createElement("img",{className:"contact-image",src:this.props.image}),c.a.createElement("div",{className:"contact-text"},c.a.createElement("p",{className:"description"},this.props.description),c.a.createElement("p",{className:"name"},this.props.name),c.a.createElement("p",{className:"phone"},this.props.phone)))}}]),t}(c.a.Component),f=a(8),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"counter-item"},c.a.createElement("p",{className:"value"},this.props.value),c.a.createElement("p",{className:"description"},this.props.description))}}]),t}(c.a.Component),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={days:300,hours:14,minutes:15,seconds:16,offset:0},e.weddingDate=new Date("Aug 29, 2020 00:00:00").getTime(),e.parallaxShift=function(){var t=r.a.findDOMNode(Object(f.a)(e)).getBoundingClientRect().y-document.documentElement.clientHeight;e.setState({offset:-t-document.documentElement.clientHeight,isArrowVisible:0===window.pageYOffset})},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",this.parallaxShift),setInterval(function(){var t=(new Date).getTime(),a=e.weddingDate-t,n=Math.floor(a/864e5),c=Math.floor(a%864e5/36e5),i=Math.floor(a%36e5/6e4),r=Math.floor(a%6e4/1e3);e.setState({days:n,hours:c,minutes:i,seconds:r})},1e3)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.parallaxShift)}},{key:"render",value:function(){var e=this.state,t=e.days,a=e.hours,n=e.minutes,i=e.seconds;return c.a.createElement("div",{id:"counter",style:{backgroundPositionY:this.state.offset/2,backgroundImage:"url(".concat("/weseleoliimateusza/images/counter-bg3.jpg",")"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}},c.a.createElement(p,{text:"Do naszego \u015blubu pozosta\u0142o:"}),c.a.createElement("div",{className:"counter-container"},c.a.createElement("div",{className:"counter"},c.a.createElement(v,{value:t,description:"dni"}),c.a.createElement(v,{value:a,description:"godzin"}),c.a.createElement(v,{value:n,description:"minut"}),c.a.createElement(v,{value:i,description:"sekund"}))))}}]),t}(c.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"informations"},c.a.createElement(p,{text:"Drodzy Go\u015bcie..."}),c.a.createElement("div",{className:"informations"},c.a.createElement("p",null,"Mamy nadziej\u0119, \u017ce tego dnia b\u0119dziecie razem z nami. Ceremonia \u015blubna odb\u0119dzie si\u0119 w ko\u015bciele pw. \u015bw. Tomasza w Kietrzu, natomiast wesele i poprawiny w Domu Weselnym Rogo\u017cany. Dla przyjezdnych Go\u015bci zapewniamy nocleg. Na poni\u017cszej stronie b\u0119dziemy zamieszcza\u0107 na bie\u017c\u0105co szczeg\xf3\u0142y dotycz\u0105ce uroczysto\u015bci. Dodatkowo znajd\u0105 si\u0119 tutaj zdj\u0119cia i filmy z uroczysto\u015bci zaraz po tym jak je otrzymamy. Serdecznie zach\u0119camy do potwierdzania obecno\u015bci za pomoc\u0105 formularza dost\u0119pnego na stronie lub telefonicznie.")),c.a.createElement(b,null))}}]),t}(c.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"contact-card"},c.a.createElement("div",{className:"parents-contact-text"},c.a.createElement("p",{className:"parents-description"},this.props.firstDescription),c.a.createElement("p",{className:"parents-phone"},this.props.firstPhone),c.a.createElement("p",{className:"parents-description"},this.props.secondDescription),c.a.createElement("p",{className:"parents-phone"},this.props.secondPhone)))}}]),t}(c.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{id:"contact"},c.a.createElement(p,{text:"Kontakt"}),c.a.createElement("div",{className:"contact"},c.a.createElement("div",{className:"contact-bcg",style:{backgroundImage:"url(".concat("/weseleoliimateusza/images/counter-bg.jpg",")")}}),c.a.createElement("div",{className:"contact-cards"},c.a.createElement(h,{description:"Panna M\u0142oda",name:"Aleksandra Niewiera",phone:"+48 791 103 680",image:"/weseleoliimateusza/images/bride-icon.png"}),c.a.createElement(h,{description:"Pan M\u0142ody",name:"Mateusz Heblewski",phone:"+48 609 261 411",image:"/weseleoliimateusza/images/groom-icon.png"}),c.a.createElement(j,{firstDescription:"Mama Panny M\u0142odej",firstPhone:"+48 555 555 555",secondDescription:"Mama Pana M\u0142odego",secondPhone:"+48 888 888 888"}))))}}]),t}(c.a.Component),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={sticked:!1,currentNavElement:"start"},a.navElementsMap=new Map([["start","Start"],["informations","Informacje"],["contact","Kontakt"],["localization","Lokalizacja"]]),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"isCurrentNavElement",value:function(e){return this.state.currentNavElement===e}},{key:"getNavElements",value:function(){var e=this,t=[];return this.navElementsMap.forEach(function(a,n){t.push(c.a.createElement("li",{key:n},c.a.createElement("a",{href:"#".concat(n),className:"menu-item ".concat(e.isCurrentNavElement(n)?"current":null)},a)))}),t}},{key:"processSticked",value:function(e){0!==e?this.state.sticked||this.setState({sticked:!0}):this.setState({sticked:!1})}},{key:"processCurrentElement",value:function(e){}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){var t=window.scrollY;e.processSticked(t)})}},{key:"render",value:function(){var e=this.getNavElements();return c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"menu-background ".concat(this.state.sticked?"sticked":null)}),c.a.createElement("div",{className:"top-bar"},c.a.createElement("div",{className:"logo"},"Aleksandra ",c.a.createElement("mark",{className:"gold"},"\u2661")," Mateusz"),c.a.createElement("nav",{className:"menu-container"},c.a.createElement("ul",null,e))))}}]),t}(c.a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,null),c.a.createElement(d,null),c.a.createElement(E,null),c.a.createElement(y,null))}}]),t}(c.a.Component);r.a.render(c.a.createElement(w,null),document.querySelector("#root"));var O=document.querySelectorAll("nav ul li a");window.addEventListener("scroll",function(e){var t=window.scrollY;O.forEach(function(e){var a=document.querySelector(e.hash);a&&a.offsetTop<=t&&a.offsetTop+a.offsetHeight>t?e.classList.contains("current")||e.classList.add("current"):e.classList.remove("current")})})}},[[10,1,2]]]);
//# sourceMappingURL=main.efdcd5ac.chunk.js.map