(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return j});var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(158),c=n.n(s),l=n(185),u=n(156),p=n.n(u),m=n(191),h=n(171),f=n(173),d=n(175),E=n(163),y=n(177),v=n(167),g=n(179),b=n(182),N=n(181),C=n(183),k=n(226),x=n(228),w=n(257),S=n(259),O=n(261),P=n(263),T=n(159),L=n(169),A=n(184),I=n(234),B=n(186);var _=function(e){return{path:e.fields.slug,title:e.frontmatter.title,cover:e.frontmatter.cover,excerpt:e.excerpt}},D=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.data,a=this.props.pageContext,r=a.slug,o=a.next,s=a.prev,u=this.props.data.markdownRemark,D=function(e,t){var n=e;return n.id||(n.id=t),n.id||(n.category_id=p.a.postDefaultCategoryID),n}(u.frontmatter,r),j=D.cover,M=D.title,G=D.date,U=D.author,F=D.tags,q=D.post_class?D.post_class:"post",z=A.a.getAuthor(this.props.data.authors.edges,U,p.a.blogAuthorId);return i.a.createElement(B.a,{location:this.props.location},i.a.createElement(E.a,{className:"post-template",isOpen:this.state.menuOpen},i.a.createElement(c.a,null,i.a.createElement("title",null,D.title+" | "+p.a.siteTitle)),i.a.createElement(l.a,{postPath:r,postNode:u,postSEO:!0}),i.a.createElement(y.a,{config:p.a,onClose:this.handleOnClose}),i.a.createElement(v.a,null,i.a.createElement(m.a,{className:"post-head",cover:j},i.a.createElement(h.a,null,i.a.createElement(f.a,{logo:p.a.siteLogo,title:p.a.siteTitle}),i.a.createElement(d.a,{navigation:p.a.siteNavigation,onClick:this.handleOnClick}))),i.a.createElement(g.a,null,i.a.createElement(N.a,{className:q},i.a.createElement(b.a,null,i.a.createElement("h1",{className:"post-title"},M),i.a.createElement("section",{className:"post-meta"},i.a.createElement(C.a,{date:G}),i.a.createElement(T.a,{prefix:" on ",tags:F}))),i.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:u.html}}),i.a.createElement(k.a,null,i.a.createElement(x.a,{author:z}),i.a.createElement(w.a,{prefix:"/author",author:z}),i.a.createElement(S.a,{postNode:u,postPath:t.pathname,config:p.a}),i.a.createElement(O.a,null),i.a.createElement(I.a,{postNode:u})))),i.a.createElement(P.a,{next:o?_(n.next):null,prev:s?_(n.prev):null}),i.a.createElement(L.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(i.a.Component),j="1770909871";t.default=D},159:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(187),c=n.n(s),l=n(33),u=(n(160),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?i.a.createElement("span",null,t,n.map(function(e,t,n){return i.a.createElement("span",{key:e},i.a.createElement(l.Link,{key:e,to:"/tags/"+c.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(o.Component));t.a=u},160:function(e,t,n){},161:function(e,t,n){"use strict";n(157);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(162),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?i.a.createElement(s.Link,{to:n},t):null},t}(i.a.Component));t.a=c},162:function(e,t,n){},163:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(164),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return i.a.createElement("div",{className:r},t)},t}(i.a.Component));t.a=l},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"site-wrapper"},e)},t}(i.a.Component));t.a=s},168:function(e,t,n){},169:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return i.a.createElement("footer",{className:"site-footer clearfix"},i.a.createElement("section",{className:"copyright"},i.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),i.a.createElement(function(e){return e.show?i.a.createElement("section",{className:"poweredby"},"Proudly published with ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},t}(o.Component));t.a=s},170:function(e,t,n){},171:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return i.a.createElement("nav",{className:a},t)},t}(i.a.Component));t.a=l},172:function(e,t,n){},173:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?i.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},i.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},174:function(e,t,n){},175:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(176),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},i.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=s},176:function(e,t,n){},177:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=(n(23),n(73)),i=n.n(o),s=n(0),c=n.n(s),l=(n(74),n(33));var u=function(e){var t=[{primaryText:"Home",component:l.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t},p=(n(165),n(166),c.a.Component,function(){return null}),m=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},h=function(e){var t=e.primaryText,n=e.component,a=i()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},f=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(h,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,c=t.nestedItems,l=i()(t,["divider","subheader","nestedItems"]);a=r?p:o?m:h;var u=Object.assign({},l,{key:t.key||n});return c&&(u.nestedItems=c.map(e)),Object(s.createElement)(a,u)},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(f))),c.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=d},179:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return i.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.a.Component));t.a=l},180:function(e,t,n){},185:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(158),c=n.n(s),l=n(156),u=n.n(l),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,o=r.postNode,s=r.postPath,l=r.postSEO;if(l){var p=o.frontmatter;e=p.title,t=p.description?p.description:o.excerpt,n=p.cover,a=u.a.siteUrl+u.a.pathPrefix+s}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;var m="/"===u.a.pathPrefix?"":u.a.pathPrefix;n=u.a.siteUrl+m+n;var h=u.a.siteUrl+u.a.pathPrefix,f=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return l&&f.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),i.a.createElement("meta",{property:"og:url",content:l?a:h}),l?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(o.Component);t.a=p},191:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(192),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n});return i.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(i.a.Component));t.a=l},192:function(e,t,n){},226:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(227),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("footer",{className:"post-footer"},e)},t}(i.a.Component));t.a=s},227:function(e,t,n){},228:function(e,t,n){"use strict";n(157);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(229),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,a=e.url;return n?i.a.createElement("figure",{className:"author-image"},i.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+n+'")'}},i.a.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(i.a.Component));t.a=s},229:function(e,t,n){},230:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(231),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("author-meta",n);return i.a.createElement("div",{className:a},t)},t}(i.a.Component));t.a=l},231:function(e,t,n){},232:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location;return e?i.a.createElement("span",{className:"author-location icon-location"},e):null},t}(i.a.Component);t.a=s},233:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?i.a.createElement("span",{className:"author-link icon-link"},i.a.createElement("a",{href:e},e)):null},t}(i.a.Component);t.a=s},234:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(34),i=n.n(o),s=n(0),c=n.n(s),l=n(265),u=n.n(l),p=n(156),m=n.n(p),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(i()(i()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(i()(i()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!m.a.disqusShortname)return null;var t=e.frontmatter,n=m.a.siteUrl+m.a.pathPrefix+e.fields.slug;return c.a.createElement(u.a,{shortname:m.a.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(s.Component);t.a=h},257:function(e,t,n){"use strict";n(157);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(258),n(230)),l=n(232),u=n(233),p=n(161),m=function(e){var t=e.bio,n=e.morePostsUrl;return t?i.a.createElement("p",null,t):i.a.createElement("p",null,"Read ",i.a.createElement(s.Link,{to:n},"more posts")," by this author.")},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.prefix,t=this.props.author,n=t.uid,a=t.name,r=t.image,o=t.bio,s=t.url,h=t.location,f=e?e+"/"+n:n;return r?i.a.createElement("section",{className:"author"},i.a.createElement("h4",null,i.a.createElement(p.a,{url:f,name:a})),i.a.createElement(m,{bio:o,morePostsUrl:f}),i.a.createElement(c.a,null,i.a.createElement(l.a,{location:h}),i.a.createElement(u.a,{url:s}))):null},t}(i.a.Component);t.a=h},258:function(e,t,n){},259:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(289),c=(n(260),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=this.props,a=n.postNode,r=n.postPath,o=n.config,c=a.frontmatter,l=(e=o.siteUrl,t=o.pathPrefix,e+("/"===t?"":t)+r),u=s.ShareButtons.FacebookShareButton,p=s.ShareButtons.GooglePlusShareButton,m=s.ShareButtons.TwitterShareButton;return i.a.createElement("section",{className:"share"},i.a.createElement("h4",null,"Share this post"),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(m,{url:l,title:c.title},i.a.createElement("a",{className:"icon-twitter",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Twitter"))),i.a.createElement(u,{url:l,quote:c.title},i.a.createElement("a",{className:"icon-facebook",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Facebook"))),i.a.createElement(p,{url:l},i.a.createElement("a",{className:"icon-google-plus",style:{fontSize:"1.4em"}},i.a.createElement("span",{className:"hidden"},"Google+")))))},t}(i.a.Component));t.a=c},260:function(e,t,n){},261:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(262),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.subscribers,n=e.blog;return t&&n?i.a.createElement("section",{className:"gh-subscribe"},i.a.createElement("h3",{className:"gh-subscribe-title"},"Subscribe to ",n.title),i.a.createElement("p",null,"Get the latest posts delivered right to your inbox."),i.a.createElement("span",{className:"gh-subscribe-rss"},"or subscribe"," ",i.a.createElement("a",{href:"http://cloud.feedly.com/#subscription/feed/{blog.url}/rss/"},"via RSS")," ","with Feedly!")):null},t}(i.a.Component));t.a=s},262:function(e,t,n){},263:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=n(33),u=(n(264),function(e){var t=e.post;if(t){var n=t.path,a=t.cover,r=t.title,o=t.excerpt,s=a?{backgroundImage:"url("+a}:null,u=c()("read-next-story",e.className,{"no-cover":!a});return i.a.createElement(l.Link,{className:u,style:s,to:n},i.a.createElement("section",{className:"post"},i.a.createElement("h2",null,r),i.a.createElement("p",null,o,"…")))}return null}),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.next,n=e.prev;return i.a.createElement("aside",{className:"read-next"},i.a.createElement(u,{post:t}),i.a.createElement(u,{className:"prev",post:n}))},t}(o.Component);t.a=p},264:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-9d4538906ee1754b1aa9.js.map