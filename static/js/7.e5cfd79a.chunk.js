(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[7],{79:function(e,a,t){"use strict";var l=t(0),r=t.n(l),i=t(76),s=t(73),n=function(e){var a=e.title,t=e.subtitle;return[r.a.createElement(i.a,{noGutters:!0,key:"title"},r.a.createElement(s.a,null,r.a.createElement("h2",null,a))),r.a.createElement(i.a,{noGutters:!0,key:"subtitle"},r.a.createElement(s.a,null,r.a.createElement("h2",null,t)))]};n.defaultProps={subtitle:null},a.a=n},90:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),i=t(75),s=t(76),n=t(73),o=t(79),c=t(20),m=t(21),d=t(24),u=t(22),b=t(36),f=t(25),v=t(2),p=t(4),h=t(6),O=t.n(h),j=(t(47),t(1)),x=t.n(j),N=["as","className","type","tooltip"],y={type:x.a.string,tooltip:x.a.bool,as:x.a.elementType},E=r.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,i=e.className,s=e.type,n=void 0===s?"valid":s,o=e.tooltip,c=void 0!==o&&o,m=Object(p.a)(e,N);return(r.a.createElement(l,Object(v.a)({},m,{ref:a,className:O()(i,n+"-"+(c?"tooltip":"feedback"))})))}));E.displayName="Feedback",E.propTypes=y;var C=E,P=r.a.createContext({controlId:void 0}),F=t(7),g=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],I=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,s=e.bsCustomPrefix,n=e.className,o=e.type,c=void 0===o?"checkbox":o,m=e.isValid,d=void 0!==m&&m,u=e.isInvalid,b=void 0!==u&&u,f=e.isStatic,h=e.as,j=void 0===h?"input":h,x=Object(p.a)(e,g),N=Object(l.useContext)(P),y=N.controlId,E=N.custom?[s,"custom-control-input"]:[i,"form-check-input"],C=E[0],I=E[1];return i=Object(F.a)(C,I),r.a.createElement(j,Object(v.a)({},x,{ref:a,type:c,id:t||y,className:O()(n,i,d&&"is-valid",b&&"is-invalid",f&&"position-static")}))}));I.displayName="FormCheckInput";var w=I,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],S=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,s=e.className,n=e.htmlFor,o=Object(p.a)(e,k),c=Object(l.useContext)(P),m=c.controlId,d=c.custom?[i,"custom-control-label"]:[t,"form-check-label"],u=d[0],b=d[1];return t=Object(F.a)(u,b),r.a.createElement("label",Object(v.a)({},o,{ref:a,htmlFor:n||m,className:O()(s,t)}))}));S.displayName="FormCheckLabel";var R=S,V=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],L=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,s=e.bsCustomPrefix,n=e.inline,o=void 0!==n&&n,c=e.disabled,m=void 0!==c&&c,d=e.isValid,u=void 0!==d&&d,b=e.isInvalid,f=void 0!==b&&b,h=e.feedbackTooltip,j=void 0!==h&&h,x=e.feedback,N=e.className,y=e.style,E=e.title,g=void 0===E?"":E,I=e.type,k=void 0===I?"checkbox":I,S=e.label,L=e.children,T=e.custom,q=e.as,z=void 0===q?"input":q,M=Object(p.a)(e,V),G="switch"===k||T,A=G?[s,"custom-control"]:[i,"form-check"],J=A[0],U=A[1];i=Object(F.a)(J,U);var Y=Object(l.useContext)(P).controlId,D=Object(l.useMemo)((function(){return{controlId:t||Y,custom:G}}),[Y,G,t]),B=G||null!=S&&!1!==S&&!L,H=r.a.createElement(w,Object(v.a)({},M,{type:"switch"===k?"checkbox":k,ref:a,isValid:u,isInvalid:f,isStatic:!B,disabled:m,as:z}));return r.a.createElement(P.Provider,{value:D},r.a.createElement("div",{style:y,className:O()(N,i,G&&"custom-"+k,o&&i+"-inline")},L||r.a.createElement(r.a.Fragment,null,H,B&&r.a.createElement(R,{title:g},S),(u||f)&&r.a.createElement(C,{type:u?"valid":"invalid",tooltip:j},x))))}));L.displayName="FormCheck",L.Input=w,L.Label=R;var T=L,q=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],z=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,s=e.bsCustomPrefix,n=e.className,o=e.isValid,c=e.isInvalid,m=e.lang,d=e.as,u=void 0===d?"input":d,b=Object(p.a)(e,q),f=Object(l.useContext)(P),h=f.controlId,j=f.custom?[s,"custom-file-input"]:[i,"form-control-file"],x=j[0],N=j[1];return i=Object(F.a)(x,N),r.a.createElement(u,Object(v.a)({},b,{ref:a,id:t||h,type:"file",lang:m,className:O()(n,i,o&&"is-valid",c&&"is-invalid")}))}));z.displayName="FormFileInput";var M=z,G=["bsPrefix","bsCustomPrefix","className","htmlFor"],A=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.bsCustomPrefix,s=e.className,n=e.htmlFor,o=Object(p.a)(e,G),c=Object(l.useContext)(P),m=c.controlId,d=c.custom?[i,"custom-file-label"]:[t,"form-file-label"],u=d[0],b=d[1];return t=Object(F.a)(u,b),r.a.createElement("label",Object(v.a)({},o,{ref:a,htmlFor:n||m,className:O()(s,t),"data-browse":o["data-browse"]}))}));A.displayName="FormFileLabel";var J=A,U=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],Y=r.a.forwardRef((function(e,a){var t=e.id,i=e.bsPrefix,s=e.bsCustomPrefix,n=e.disabled,o=void 0!==n&&n,c=e.isValid,m=void 0!==c&&c,d=e.isInvalid,u=void 0!==d&&d,b=e.feedbackTooltip,f=void 0!==b&&b,h=e.feedback,j=e.className,x=e.style,N=e.label,y=e.children,E=e.custom,g=e.lang,I=e["data-browse"],w=e.as,k=void 0===w?"div":w,S=e.inputAs,R=void 0===S?"input":S,V=Object(p.a)(e,U),L=E?[s,"custom"]:[i,"form-file"],T=L[0],q=L[1];i=Object(F.a)(T,q);var z=Object(l.useContext)(P).controlId,G=Object(l.useMemo)((function(){return{controlId:t||z,custom:E}}),[z,E,t]),A=null!=N&&!1!==N&&!y,Y=r.a.createElement(M,Object(v.a)({},V,{ref:a,isValid:m,isInvalid:u,disabled:o,as:R,lang:g}));return r.a.createElement(P.Provider,{value:G},r.a.createElement(k,{style:x,className:O()(j,i,E&&"custom-file")},y||r.a.createElement(r.a.Fragment,null,E?r.a.createElement(r.a.Fragment,null,Y,A&&r.a.createElement(J,{"data-browse":I},N)):r.a.createElement(r.a.Fragment,null,A&&r.a.createElement(J,null,N),Y),(m||u)&&r.a.createElement(C,{type:m?"valid":"invalid",tooltip:f},h))))}));Y.displayName="FormFile",Y.Input=M,Y.Label=J;var D=Y,B=(t(48),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),H=r.a.forwardRef((function(e,a){var t,i,s=e.bsPrefix,n=e.bsCustomPrefix,o=e.type,c=e.size,m=e.htmlSize,d=e.id,u=e.className,b=e.isValid,f=void 0!==b&&b,h=e.isInvalid,j=void 0!==h&&h,x=e.plaintext,N=e.readOnly,y=e.custom,E=e.as,C=void 0===E?"input":E,g=Object(p.a)(e,B),I=Object(l.useContext)(P).controlId,w=y?[n,"custom"]:[s,"form-control"],k=w[0],S=w[1];if(s=Object(F.a)(k,S),x)(i={})[s+"-plaintext"]=!0,t=i;else if("file"===o){var R;(R={})[s+"-file"]=!0,t=R}else if("range"===o){var V;(V={})[s+"-range"]=!0,t=V}else if("select"===C&&y){var L;(L={})[s+"-select"]=!0,L[s+"-select-"+c]=c,t=L}else{var T;(T={})[s]=!0,T[s+"-"+c]=c,t=T}return r.a.createElement(C,Object(v.a)({},g,{type:o,size:m,ref:a,readOnly:N,id:d||I,className:O()(u,t,f&&"is-valid",j&&"is-invalid")}))}));H.displayName="FormControl";var K=Object.assign(H,{Feedback:C}),Q=["bsPrefix","className","children","controlId","as"],W=r.a.forwardRef((function(e,a){var t=e.bsPrefix,i=e.className,s=e.children,n=e.controlId,o=e.as,c=void 0===o?"div":o,m=Object(p.a)(e,Q);t=Object(F.a)(t,"form-group");var d=Object(l.useMemo)((function(){return{controlId:n}}),[n]);return(r.a.createElement(P.Provider,{value:d},r.a.createElement(c,Object(v.a)({},m,{ref:a,className:O()(i,t)}),s)))}));W.displayName="FormGroup";var X=W,Z=["as","bsPrefix","column","srOnly","className","htmlFor"],$=r.a.forwardRef((function(e,a){var t=e.as,i=void 0===t?"label":t,s=e.bsPrefix,o=e.column,c=e.srOnly,m=e.className,d=e.htmlFor,u=Object(p.a)(e,Z),b=Object(l.useContext)(P).controlId;s=Object(F.a)(s,"form-label");var f="col-form-label";"string"===typeof o&&(f=f+" "+f+"-"+o);var h=O()(m,s,c&&"sr-only",o&&f);return d=d||b,o?r.a.createElement(n.a,Object(v.a)({ref:a,as:"label",className:h,htmlFor:d},u)):r.a.createElement(i,Object(v.a)({ref:a,className:h,htmlFor:d},u))}));$.displayName="FormLabel",$.defaultProps={column:!1,srOnly:!1};var _=$,ee=["bsPrefix","className","as","muted"],ae=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,s=void 0===i?"small":i,n=e.muted,o=Object(p.a)(e,ee);return t=Object(F.a)(t,"form-text"),r.a.createElement(s,Object(v.a)({},o,{ref:a,className:O()(l,t,n&&"text-muted")}))}));ae.displayName="FormText";var te=ae,le=r.a.forwardRef((function(e,a){return r.a.createElement(T,Object(v.a)({},e,{ref:a,type:"switch"}))}));le.displayName="Switch",le.Input=T.Input,le.Label=T.Label;var re=le,ie=/-(.)/g;var se=["className","bsPrefix","as"],ne=function(e){return e[0].toUpperCase()+(a=e,a.replace(ie,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var oe=["bsPrefix","inline","className","validated","as"],ce=function(e,a){var t=void 0===a?{}:a,l=t.displayName,i=void 0===l?ne(e):l,s=t.Component,n=t.defaultProps,o=r.a.forwardRef((function(a,t){var l=a.className,i=a.bsPrefix,n=a.as,o=void 0===n?s||"div":n,c=Object(p.a)(a,se),m=Object(F.a)(i,e);return r.a.createElement(o,Object(v.a)({ref:t,className:O()(l,m)},c))}));return o.defaultProps=n,o.displayName=i,o}("form-row"),me=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,i=e.className,s=e.validated,n=e.as,o=void 0===n?"form":n,c=Object(p.a)(e,oe);return t=Object(F.a)(t,"form"),r.a.createElement(o,Object(v.a)({},c,{ref:a,className:O()(i,s&&"was-validated",l&&t+"-inline")}))}));me.displayName="Form",me.defaultProps={inline:!1},me.Row=ce,me.Group=X,me.Control=K,me.Check=T,me.File=D,me.Switch=re,me.Label=_,me.Text=te;var de=me,ue=t(72),be=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(d.a)(this,Object(u.a)(a).call(this,e))).handleSubmit=t.handleSubmit.bind(Object(b.a)(t)),t.onChangeField=t.onChangeField.bind(Object(b.a)(t)),t.state={name:void 0,email:void 0,subject:void 0,message:void 0},t}return Object(f.a)(a,e),Object(m.a)(a,[{key:"handleSubmit",value:function(e){console.log(this.state),e.preventDefault(),e.stopPropagation()}},{key:"onChangeField",value:function(e,a){var t={};t[a]=e.target.value,this.setState(t)}},{key:"render",value:function(){var e=this;return r.a.createElement(i.a,null,r.a.createElement(de,{onSubmit:this.handleSubmit},r.a.createElement(s.a,null,r.a.createElement(n.a,null,r.a.createElement(de.Control,{required:!0,type:"text",placeholder:"Your name",onChange:function(a){e.onChangeField(a,"name")}})),r.a.createElement(n.a,null,r.a.createElement(de.Control,{required:!0,type:"email",placeholder:"Your e-mail",onChange:function(a){e.onChangeField(a,"email")}}))),r.a.createElement(s.a,{className:"mt-2"},r.a.createElement(n.a,null,r.a.createElement(de.Control,{required:!0,type:"text",placeholder:"Subject",onChange:function(a){e.onChangeField(a,"subject")}}))),r.a.createElement(s.a,{className:"mt-2"},r.a.createElement(n.a,null,r.a.createElement(de.Control,{required:!0,as:"textarea",rows:"5",placeholder:"Message",onChange:function(a){e.onChangeField(a,"message")}}))),r.a.createElement(s.a,{className:"mt-2"},r.a.createElement(n.a,null,r.a.createElement(ue.a,{variant:"primary",type:"submit"},"Send Message")))))}}]),a}(l.Component);a.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Contact me",subtitle:"Pellentesque habitant morbi tristique senectus netus et malesuada"}),r.a.createElement(s.a,{className:"mt-10"},r.a.createElement(n.a,{xs:3},r.a.createElement("h1",null,"Say hello!")),r.a.createElement(n.a,{xs:9},r.a.createElement(be,null))))}}}]);
//# sourceMappingURL=7.e5cfd79a.chunk.js.map