(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{154:function(e,t,n){"use strict";n.r(t);n(156);var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(162),c=n.n(i),l=n(188),u=n(157),p=n.n(u),m=n(164),h=n(170),f=n(165),d=n(244),E=n(167),v=n(168),y=n(169),g=n(247),N=n(155),k=n.n(N),C=(n(400),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=k()("author-profile",n);return s.a.createElement("section",{className:a},t)},t}(s.a.Component)),b=(n(401),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.name;return e?s.a.createElement("h1",{className:"author-title"},e):null},t}(s.a.Component)),w=(n(402),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.bio;return e?s.a.createElement("h2",{className:"author-bio"},e):null},t}(s.a.Component)),O=n(273),x=n(275),L=n(276),M=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.postEdges;return s.a.createElement("span",{className:"author-stats"},s.a.createElement("i",{className:"icon-stats"})," ",e?e.length>1?e.length+" posts":e.length+" post":"No posts")},t}(s.a.Component),T=n(166),A=n(204),I=n(206);n.d(t,"pageQuery",function(){return J});var j=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.author,n=e.cover,a=this.props.data.allMarkdownRemark&&this.props.data.allMarkdownRemark.edges?this.props.data.allMarkdownRemark.edges:[],r=this.props.data.allAuthorsJson&&this.props.data.allAuthorsJson.edges?this.props.data.allAuthorsJson.edges:[],o=function(){return r[0].node};return s.a.createElement(I.a,{location:this.props.location},s.a.createElement(m.a,{className:"author-template",isOpen:this.state.menuOpen},s.a.createElement(c.a,{title:'Posts by "'+t+'" | '+p.a.siteTitle}),s.a.createElement(h.a,{config:p.a,onClose:this.handleOnClose}),s.a.createElement(f.a,null,s.a.createElement(d.a,{className:"author-head",cover:n},s.a.createElement(E.a,null,s.a.createElement(v.a,{logo:p.a.siteLogo,title:p.a.siteTitle}),s.a.createElement(y.a,{navigation:p.a.siteNavigation,onClick:this.handleOnClick}))),s.a.createElement(C,{className:"inner"},s.a.createElement(g.a,{author:o()}),s.a.createElement(b,{name:o().name}),s.a.createElement(w,{bio:o().bio}),s.a.createElement(O.a,null,s.a.createElement(x.a,{location:o().location}),s.a.createElement(L.a,{url:o().url})),s.a.createElement(M,{postEdges:a})),s.a.createElement(l.a,{postEdges:a,postAuthors:r}),s.a.createElement(A.a,{urls:o().socialUrls}),s.a.createElement(T.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(s.a.Component),J="87297870";t.default=j},160:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=(n(161),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("header",{className:"post-header"},e)},t}(s.a.Component));t.a=i},161:function(e,t,n){},163:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(159),c=n.n(i),l=n(33),u=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?s.a.createElement("span",null,t,n.map(function(e,t,n){return s.a.createElement("span",{key:e},s.a.createElement(l.Link,{key:e,to:"/tags/"+c.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(o.Component));t.a=u},164:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(155),c=n.n(i),l=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return s.a.createElement("div",{className:r},t)},t}(s.a.Component));t.a=l},165:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement("div",{className:"site-wrapper"},e)},t}(s.a.Component));t.a=i},166:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(33),c=(n(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return s.a.createElement("div",null,s.a.createElement("div",{className:"menu-bar"},s.a.createElement("span",null,s.a.createElement(i.Link,{to:".\\familie"},"Familie")),s.a.createElement("span",null,s.a.createElement(i.Link,{to:".\\bakermat"},"Bakermat")),s.a.createElement("span",null,s.a.createElement(i.Link,{to:".\\documenten"},"Documenten")),s.a.createElement("span",null,s.a.createElement(i.Link,{to:".\\onderzoek"},"Onderzoek")),s.a.createElement("span",null,s.a.createElement(i.Link,{to:".\\contact"},"Contact"))),s.a.createElement("footer",{className:"site-footer clearfix"},s.a.createElement("section",{className:"copyright"},s.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),s.a.createElement(function(e){return e.show?s.a.createElement("section",{className:"poweredby"},"Proudly published with ",s.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e})))},t}(o.Component));t.a=c},167:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(155),c=n.n(i),l=(n(179),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return s.a.createElement("nav",{className:a},t)},t}(s.a.Component));t.a=l},168:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(33),c=(n(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?s.a.createElement(i.Link,{className:"blog-logo",to:n||"/"},s.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},169:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?s.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},s.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=i},170:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=(n(23),n(73)),s=n.n(o),i=n(0),c=n.n(i),l=(n(74),n(33));var u=function(e){var t=[{primaryText:"Home",component:l.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t},p=(n(175),n(176),c.a.Component,function(){return null}),m=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},h=function(e){var t=e.primaryText,n=e.component,a=s()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(i.createElement)(n,a,t))},f=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(i.createElement)(h,{key:t,primaryText:t});if(Object(i.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,c=t.nestedItems,l=s()(t,["divider","subheader","nestedItems"]);a=r?p:o?m:h;var u=Object.assign({},l,{key:t.key||n});return c&&(u.nestedItems=c.map(e)),Object(i.createElement)(a,u)},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(f))),c.a.createElement("span",{className:"nav-cover"}))},t}(i.Component);t.a=d},171:function(e,t,n){},172:function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(33),c=(n(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?s.a.createElement(i.Link,{to:n},t):null},t}(s.a.Component));t.a=c},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},188:function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(33),c=(n(183),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?s.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(s.a.Component)),l=n(163),u=n(157),p=n.n(u),m=n(172),h=n(194),f=n(160),d=n(195),E=n(196),v=(n(184),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=(e=this.props.postEdges,t=this.props.postAuthors,e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:E.a.getAuthor(t,e.node.frontmatter.author,p.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return s.a.createElement("div",null,n.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,o=e.tags,u=e.date,p=e.post_class?e.post_class:"post";return s.a.createElement(h.a,{className:p,key:t},s.a.createElement(f.a,null,s.a.createElement("h2",{className:"post-title"},s.a.createElement(i.Link,{to:n},t))),s.a.createElement("section",{className:"post-excerpt"},s.a.createElement("p",null,a," ",s.a.createElement(i.Link,{className:"read-more",to:n},"»"))),s.a.createElement("footer",{className:"post-meta"},s.a.createElement(c,{avatar:r.image,name:r.name}),s.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),s.a.createElement(l.a,{prefix:" on ",tags:o}),s.a.createElement(d.a,{date:u})))}))},t}(s.a.Component));t.a=v},204:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(221),c=(n(205),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,n=e.color;return t&&t.length>0?s.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return s.a.createElement(i.SocialIcon,{key:e,className:"social-media-icon",url:e,color:n,style:{height:null,width:null}})})):null},t}(s.a.Component));t.a=c},205:function(e,t,n){},244:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(155),c=n.n(i),l=(n(245),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n});return s.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(s.a.Component));t.a=l},245:function(e,t,n){},247:function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=(n(271),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,a=e.url;return n?s.a.createElement("figure",{className:"author-image"},s.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+n+'")'}},s.a.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(s.a.Component));t.a=i},271:function(e,t,n){},273:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(155),c=n.n(i),l=(n(274),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("author-meta",n);return s.a.createElement("div",{className:a},t)},t}(s.a.Component));t.a=l},274:function(e,t,n){},275:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location;return e?s.a.createElement("span",{className:"author-location icon-location"},e):null},t}(s.a.Component);t.a=i},276:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?s.a.createElement("span",{className:"author-link icon-link"},s.a.createElement("a",{href:e},e)):null},t}(s.a.Component);t.a=i},400:function(e,t,n){},401:function(e,t,n){},402:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-author-jsx-d978854e5b5c8c396b7d.js.map