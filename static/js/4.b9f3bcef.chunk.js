(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{77:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(74),s=a(71),r=function(e){var t=e.title,a=e.subtitle;return[i.a.createElement(o.a,{noGutters:!0,className:"mb-2",key:"title"},i.a.createElement(s.a,null,i.a.createElement("h2",null,t))),a&&i.a.createElement(o.a,{noGutters:!0,key:"subtitle"},i.a.createElement(s.a,null,i.a.createElement("h2",null,a)))]};r.defaultProps={subtitle:null},t.a=r},78:function(e,t,a){"use strict";var n=a(79),i=a.n(n),o=a(80),s=a.n(o),r=a(81),c=a.n(r),l=a(82),p=a.n(l),u=a(83),m=a.n(u),d=a(84),g=a.n(d),f=a(85),v=a.n(f),h=a(86),E=a.n(h),b=[{image:i.a,title:"Companyon",description:"Project to generate and manage business visualizations. Visualizations and views creation according ...",explanationFirst:"Project to generate and manage business visualizations. Visualizations and views creation according to design, responsive design, advanced filters implementation in each visualization, API request and render optimization and parallel request implementation.",explanationSecond:"Technologies used: Python, Django, PostgreSQL, CSS, Javascript, Git, Sass, React.js, API REST, Ant Design, React Highcharts.",secondImage:s.a,pageLink:"https://app.companyon.de/"},{image:m.a,title:"TIIB (The Institutional Investor Board)",description:"Platform to give investor the opportunity to analyze investment product ...",explanationFirst:"Platform to give investor the opportunity to analyze investment product using the information of field foundations, insurance companies, pension funds and public sectors.",explanationSecond:"Technologies used: Python, Django, PostgreSQL, CSS, Git, Sass, React.js, TypeScript, GraphQL, Material UI, React Highcharts.",secondImage:g.a,pageLink:"https://www.tiib.de/"},{image:c.a,title:"Trafinscout",description:"Project that supports exporters in export financing. Document upload and ...",explanationFirst:"Project that supports exporters in export financing. Document upload and download implementation, responsive design, step-based document request and document tables creation.",explanationSecond:"Technologies used: Python, Django, PostgreSQL, CSS, Javascript, Git, Sass, React.js, GraphQL, Ant Design.",secondImage:p.a,pageLink:"https://portal.trafinscout.com/"},{image:v.a,title:"WG-Manager",description:"Project to manage coliving spaces. Creation of views according to design ...",explanationFirst:"Project to manage coliving spaces. Creation of views according to design, step-based form creation, view limitation according to user profile, third-party applications integration used to sign documents, notification system using websockets and responsive design.",explanationSecond:"Technologies used: Python, Django, PostgreSQL, CSS, jQuery, Javascript, Git, Sass, React.js, API REST, Docusign API, Ant Design.",secondImage:E.a,pageLink:"https://proptiq.com/wgmanager_en/"}];t.a=b},79:function(e,t,a){e.exports=a.p+"static/media/01.d847e448.png"},80:function(e,t,a){e.exports=a.p+"static/media/02.75161807.png"},81:function(e,t,a){e.exports=a.p+"static/media/02.6b7a5024.png"},82:function(e,t,a){e.exports=a.p+"static/media/01.51d09018.png"},83:function(e,t,a){e.exports=a.p+"static/media/01.7e6cb71d.png"},84:function(e,t,a){e.exports=a.p+"static/media/02.a9fa40ed.png"},85:function(e,t,a){e.exports=a.p+"static/media/02.f93a5829.png"},86:function(e,t,a){e.exports=a.p+"static/media/01.55fcffa1.png"},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(73),s=a(74),r=a(71),c=a(77),l=a(35);function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var u,m=a(1),d=a(2),g=a(5),f=a.n(g),v=a(14),h=a(36),E=a(34),b=["className","children"],S=((u={})[v.b]="show",u[v.a]="show",u),j=i.a.forwardRef((function(e,t){var a=e.className,o=e.children,s=Object(d.a)(e,b),r=Object(n.useCallback)((function(e){Object(E.a)(e),s.onEnter&&s.onEnter(e)}),[s]);return i.a.createElement(v.e,Object(m.a)({ref:t,addEndListener:h.a},s,{onEnter:r}),(function(e,t){return i.a.cloneElement(o,Object(m.a)({},t,{className:f()("fade",a,o.props.className,S[e])}))}))}));j.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},j.displayName="Fade";var w=j,x=a(11),y=a(30),k=a(31),P=a(9),O=(a(87),function(e){var t=e.title,a=e.description,n=e.id,r=e.pageLink;return i.a.createElement(o.a,null,i.a.createElement(s.a,{className:"card-title"},i.a.createElement(x.b,{to:"".concat(P.a.work,"/").concat(n)},t)),i.a.createElement(s.a,null,a),i.a.createElement(x.b,{className:"card-search",to:"".concat(P.a.work,"/").concat(n)},i.a.createElement(y.a,{icon:k.f,size:"lg"})),i.a.createElement("a",{className:"card-link",href:r,target:"_blank",rel:"noopener noreferrer"},i.a.createElement(y.a,{icon:k.e,size:"lg"})))}),N=(a(88),["image"]),I=function(e){var t=e.image,a=p(e,N),o=Object(n.useState)(!1),r=Object(l.a)(o,2),c=r[0],u=r[1];return i.a.createElement(s.a,{noGutters:!0,className:"work-card",key:"imageContainer",onMouseEnter:function(){u(!0)},onMouseLeave:function(){u(!1)}},i.a.createElement("img",{src:t,alt:"work",className:"image-wrapper"}),i.a.createElement(w,{in:c},i.a.createElement("div",{className:"work-mask p-7"},i.a.createElement(O,a))))},L=a(32),z=a(78),D=function(e){var t=e.title,a=e.complete,n=e.className,l=z.a.slice(0,2),p=a?z.a:l;return i.a.createElement(o.a,{className:n},i.a.createElement(c.a,{title:t}),i.a.createElement(s.a,null,p.map((function(e,t){return i.a.createElement(r.a,{key:e.title,className:"mb-4",xs:12,lg:6},i.a.createElement(I,Object.assign({id:t+1},e)))}))),!a&&i.a.createElement("div",{className:"text-right mt-2"},i.a.createElement(L.a,{text:"See all works",route:P.a.work})))};D.defaultProps={title:"Selected Works",complete:!0,className:void 0};t.default=D}}]);
//# sourceMappingURL=4.b9f3bcef.chunk.js.map