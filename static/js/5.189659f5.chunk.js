(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{104:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(11),s=t(79),r=t(80),c=t(77),l=t(1),p=t(2),d=t(4),u=t.n(d),m=t(6),g=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.fluid,s=e.rounded,r=e.roundedCircle,c=e.thumbnail,d=Object(p.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=Object(m.a)(t,"img");var g=u()(o&&t+"-fluid",s&&"rounded",r&&"rounded-circle",c&&t+"-thumbnail");return i.a.createElement("img",Object(l.a)({ref:a},d,{className:u()(n,g)}))}));g.displayName="Image",g.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var f=g,h=t(32),v=t(33),b=t(84),x=t(8),w=t(16),S=t(17),E=t(20),j=t(18),P=t(35),y=t(21),k=(t(98),function(e){function a(e){var t;return Object(w.a)(this,a),(t=Object(E.a)(this,Object(j.a)(a).call(this,e))).parallaxShift=t.parallaxShift.bind(Object(P.a)(t)),t.state={offset:0},t}return Object(y.a)(a,e),Object(S.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.parallaxShift)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.parallaxShift)}},{key:"parallaxShift",value:function(){window.innerHeight/2>=window.pageYOffset/2&&this.setState({offset:window.pageYOffset/2})}},{key:"render",value:function(){var e=this.props,a=e.src,t=e.className,n=this.state.offset;return i.a.createElement("div",{className:"parallax-content"},i.a.createElement(f,{src:a,className:t,style:{transform:"translate3d(0px, ".concat(n,"px, 0px)")}}))}}]),a}(n.Component));k.defaultProps={className:void 0};var I=k;t(99),a.default=function(){var e=Object(o.g)().id,a=b.a[e-1];return a?i.a.createElement(s.a,{className:"work-simple",fluid:!0},i.a.createElement(r.a,null,i.a.createElement(I,{src:a.image,className:"work-principal-image"})),i.a.createElement(r.a,{className:"px-6 py-12 background-aquamarine"},i.a.createElement(c.a,null,i.a.createElement("h4",null,a.title),i.a.createElement("p",null,a.explanationFirst)),i.a.createElement(c.a,null,i.a.createElement("p",null,a.explanationSecond))),i.a.createElement(r.a,{className:"justify-content-center"},i.a.createElement(f,{src:a.secondImage,className:"second-work-image"})),i.a.createElement(r.a,null,i.a.createElement(c.a,{className:"view site"},i.a.createElement("a",{href:a.pageLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("h3",null,i.a.createElement(h.a,{icon:v.d,size:"lg"})," ","View web site"))),a.codeLink&&i.a.createElement(c.a,{className:"view code"},i.a.createElement("a",{href:a.codeLink,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("h3",null,i.a.createElement(h.a,{icon:v.b,size:"lg"})," ","View code"))))):i.a.createElement(o.a,{to:x.a.notFound})}},84:function(e,a,t){"use strict";var n=t(85),i=t.n(n),o=t(86),s=t.n(o),r=t(87),c=t.n(r),l=t(88),p=t.n(l),d=t(89),u=t.n(d),m=t(90),g=t.n(m),f=t(91),h=t.n(f),v=t(92),b=t.n(v),x=[{image:i.a,title:"Companyon",description:"Project to generate and manage business visualizations. Visualizations and views creation according ...",explanationFirst:"Project to generate and manage business visualizations. Visualizations and views creation according to design, responsive design, advanced filters implementation in each visualization, API request and render optimization and parallel request implementation.",explanationSecond:"Technologies used: Python, Django, PostgreSQL, CSS, Javascript, Git, Sass, React.js, API REST, Ant Design, React Highcharts.",secondImage:s.a,pageLink:"https://app.companyon.de/"},{image:u.a,title:"TIIB (The Institutional Investor Board)",description:"Platform to give investor the opportunity to analyze investment product ...",explanationFirst:"Platform to give investor the opportunity to analyze investment product using the information of field foundations, insurance companies, pension funds and public sectors.",explanationSecond:"Technologies used: Python, Django, PostgreSQL, CSS, Git, Sass, React.js, TypeScript, GraphQL, Material UI, React Highcharts.",secondImage:g.a,pageLink:"https://www.tiib.de/"},{image:c.a,title:"Trafinscout",description:"Project that supports exporters in export financing. Document upload and ...",explanationFirst:"Project that supports exporters in export financing. Document upload and download implementation, responsive design, step-based document request and document tables creation.",explanationSecond:"Technologies used: Python, Django, PostgreSQL, CSS, Javascript, Git, Sass, React.js, GraphQL, Ant Design.",secondImage:p.a,pageLink:"https://portal.trafinscout.com/"},{image:h.a,title:"WG-Manager",description:"Project to manage coliving spaces. Creation of views according to design ...",explanationFirst:"Project to manage coliving spaces. Creation of views according to design, step-based form creation, view limitation according to user profile, third-party applications integration used to sign documents, notification system using websockets and responsive design.",explanationSecond:"Technologies used: Python, Django, PostgreSQL, CSS, jQuery, Javascript, Git, Sass, React.js, API REST, Docusign API, Ant Design.",secondImage:b.a,pageLink:"https://proptiq.com/wgmanager_en/"}];a.a=x},85:function(e,a,t){e.exports=t.p+"static/media/01.d847e448.png"},86:function(e,a,t){e.exports=t.p+"static/media/02.75161807.png"},87:function(e,a,t){e.exports=t.p+"static/media/02.6b7a5024.png"},88:function(e,a,t){e.exports=t.p+"static/media/01.51d09018.png"},89:function(e,a,t){e.exports=t.p+"static/media/01.7e6cb71d.png"},90:function(e,a,t){e.exports=t.p+"static/media/02.a9fa40ed.png"},91:function(e,a,t){e.exports=t.p+"static/media/02.f93a5829.png"},92:function(e,a,t){e.exports=t.p+"static/media/01.55fcffa1.png"},98:function(e,a,t){},99:function(e,a,t){}}]);
//# sourceMappingURL=5.189659f5.chunk.js.map