(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3,4],{79:function(e,t,a){"use strict";var i=a(0),r=a.n(i),n=a(76),s=a(73),l=function(e){var t=e.title,a=e.subtitle;return[r.a.createElement(n.a,{noGutters:!0,key:"title"},r.a.createElement(s.a,null,r.a.createElement("h2",null,t))),r.a.createElement(n.a,{noGutters:!0,key:"subtitle"},r.a.createElement(s.a,null,r.a.createElement("h2",null,a)))]};l.defaultProps={subtitle:null},t.a=l},80:function(e,t,a){"use strict";t.a=[{image:"https://themes.muffingroup.com/be/freelancer/wp-content/uploads/2016/03/home_freelancer_portfolio1.jpg",title:"Work 1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at mauris ac nisl fermentum consequat. Fusce dignissim leo pulvinar, molestie ligula ultricies, hendrerit mauris. Quisque et purus ut turpis imperdiet dignissim sed sed leo. Nullam eget odio libero. Proin tempor felis quam, at tristique libero dapibus id. Duis eget tempor sapien, quis facilisis sem. Etiam id risus sit amet diam tristique vulputate maximus sit amet velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac ultrices neque.",explanationFirst:"Morbi rhoncus rhoncus lectus, sit amet faucibus quam semper et. Donec varius urna nisi, in hendrerit tortor eleifend nec. Suspendisse suscipit auctor cras amet. Nunc hendrerit dui sit amet tempor interdum. Sed commodo quis urna vitae auctor. Mauris sed neque venenatis est rhoncus accumsan sit amet eu quam. Sed volutpat.",explanationSecond:"Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor.",secondImage:"https://themes.muffingroup.com/be/freelancer/wp-content/uploads/2016/03/home_freelancer_portfolio1.jpg",codeLink:"http://www.google.com",pageLink:"http://www.google.com"},{image:"https://themes.muffingroup.com/be/freelancer/wp-content/uploads/2016/03/home_freelancer_portfolio1.jpg",title:"Work 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at mauris ac nisl fermentum consequat. Fusce dignissim leo pulvinar, molestie ligula ultricies, hendrerit mauris. Quisque et purus ut turpis imperdiet dignissim sed sed leo. Nullam eget odio libero. Proin tempor felis quam, at tristique libero dapibus id. Duis eget tempor sapien, quis facilisis sem. Etiam id risus sit amet diam tristique vulputate maximus sit amet velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac ultrices neque."}]},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(75),s=a(76),l=a(73),o=a(79),c=a(39),u=a(10);var m,p=a(2),d=a(4),f=a(6),g=a.n(f),E=a(16),b=a(38),h=a(37),v=["className","children"],w=((m={})[E.b]="show",m[E.a]="show",m),k=r.a.forwardRef((function(e,t){var a=e.className,n=e.children,s=Object(d.a)(e,v),l=Object(i.useCallback)((function(e){Object(h.a)(e),s.onEnter&&s.onEnter(e)}),[s]);return r.a.createElement(E.e,Object(p.a)({ref:t,addEndListener:b.a},s,{onEnter:l}),(function(e,t){return r.a.cloneElement(n,Object(p.a)({},t,{className:g()("fade",a,n.props.className,w[e])}))}))}));k.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},k.displayName="Fade";var N=k,q=a(13),O=a(33),j=a(34),x=(a(81),a(8)),y=function(e){var t=e.title,a=e.description,i=e.id;return r.a.createElement(n.a,null,r.a.createElement(s.a,{className:"card-title"},r.a.createElement(q.b,{to:"".concat(x.a.work,"/").concat(i)},t)),r.a.createElement(s.a,null,a),r.a.createElement(q.b,{className:"card-search",to:"".concat(x.a.work,"/").concat(i)},r.a.createElement(O.a,{icon:j.f,size:"lg"})),r.a.createElement(q.b,{className:"card-link",to:"".concat(x.a.work,"/").concat(i)},r.a.createElement(O.a,{icon:j.e,size:"lg"})))},S=(a(82),function(e){var t=e.image,a=function(e,t){if(null==e)return{};var a,i,r=Object(u.a)(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,["image"]),n=Object(i.useState)(!1),l=Object(c.a)(n,2),o=l[0],m=l[1];return r.a.createElement(s.a,{noGutters:!0,className:"work-card",key:"imageContainer",onMouseEnter:function(){m(!0)},onMouseLeave:function(){m(!1)}},r.a.createElement("img",{src:t,alt:"work",className:"image-wrapper"}),r.a.createElement(N,{in:o},r.a.createElement("div",{className:"work-mask p-7"},r.a.createElement(y,a))))}),L=a(35),P=a(80),_=function(e){var t=e.title,a=e.complete,i=e.className,c=P.a.slice(0,4),u=a?P.a:c;return r.a.createElement(n.a,{className:i},r.a.createElement(o.a,{title:t}),r.a.createElement(s.a,null,u.map((function(e,t){return r.a.createElement(l.a,{key:e.title,className:"mb-4",xs:12,lg:6},r.a.createElement(S,Object.assign({id:t+1},e)))}))),!a&&r.a.createElement("div",{className:"text-right mt-2"},r.a.createElement(L.a,{text:"See all works",route:x.a.work})))};_.defaultProps={title:"Selected Works",complete:!0,className:void 0};t.default=_},88:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(75),s=a(76),l=a(79),o=a(35),c=a(83),u=a(8);t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(s.a,{noGutters:!0},r.a.createElement(l.a,{title:"Hello!",subtitle:"I am an experienced design lover based in Australia. I\u2019m available for freelance work and projects. I specialise in graphic design & art direction as well as photo, video & audio."}),r.a.createElement(o.a,{className:"mt-2",route:u.a.contact,text:"Contact me"}),r.a.createElement(c.default,{className:"mt-12",complete:!1})))}}}]);
//# sourceMappingURL=3.28a97aae.chunk.js.map