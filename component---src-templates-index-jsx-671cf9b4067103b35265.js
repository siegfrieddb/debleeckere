(window.webpackJsonp=window.webpackJsonp||[]).push([[16,3],Array(141).concat([function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return C});var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(157),c=n.n(s),l=n(244),u=(n(189),n(186)),p=n(155),m=n.n(p),f=n(158),h=n(172),d=n(162),v=n(164),g=n(190),E=n(187),y=n(166),b=(n(168),n(170)),N=(n(199),n(201),n(211),n(206),n(182)),k=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.nodes;e.page,e.pages,e.total,e.limit,e.prev,e.next,this.props.data.authors.edges;return i.a.createElement(N.a,{location:this.props.location},i.a.createElement(f.a,{className:"home-template",isOpen:this.state.menuOpen},i.a.createElement(c.a,{title:m.a.siteTitle}),i.a.createElement(u.a,{postEdges:t}),i.a.createElement(h.a,{config:m.a,onClose:this.handleOnClose}),i.a.createElement(d.a,null,i.a.createElement("div",{className:"home-template"},i.a.createElement(E.a,{cover:m.a.siteCover},i.a.createElement(y.a,{overlay:m.a.siteCover},i.a.createElement(b.a,{navigation:m.a.siteNavigation,onClick:this.handleOnClick})),i.a.createElement("div",{className:"vertical"},i.a.createElement("div",{className:"main-header-content inner"})),i.a.createElement(l.Link,{className:"scroll-down icon-arrow-left",to:"content","data-offset":"+1000",spy:!0,smooth:!0,duration:500},i.a.createElement("span",{className:"hidden"},"Scroll Down"))),i.a.createElement(g.a,null,i.a.createElement("div",{id:"content"},"Welkom op de site van familie Vitalis De Bleeckere - Octavia Versluys. De rubriek Familie handelt over de drie generaties van de familie. Onder de rubriek Documenten staan officië le documenten. De rubriek Onderzoek bouwt een forum uit voor onderzoek naar de familie. De rubriek Bakermat bevat thema's die de historische, geografische en maatschappelijke context belichten.",i.a.createElement("div",{style:{"text-align":"center"}},"Citaat"),i.a.createElement("br",null),i.a.createElement("br",null,i.a.createElement("i",null,"I tell, therefore you are. (Margeret Atwood)")),i.a.createElement("br",null),i.a.createElement("br",null,i.a.createElement("i",null,"Generaties komen en gaan als golven van ons bestaan. (Sylvain De Bleeckere)")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:".\\familie"},"Familie")),i.a.createElement("li",null,i.a.createElement("a",{href:".\\bakermat"},"Bakermat")),i.a.createElement("li",null,i.a.createElement("a",{href:".\\documenten"},"Documents")),i.a.createElement("li",null,i.a.createElement("a",{href:".\\onderzoek"},"Onderzoek")))))),i.a.createElement(v.a,{copyright:m.a.copyright,promoteGatsby:m.a.promoteGatsby}))))},t}(i.a.Component),C="3144631907";t.default=k},,,,,,,,,,,,,,function(e,t){e.exports={blogPostDir:"sample-posts",blogAuthorDir:"sample-authors",personDir:"persons",blogAuthorId:"sylvain",siteTitle:"De Bleeckere",siteTitleAlt:"Familienaam De Bleeckere Site",siteLogo:"images/debleeckere-logo.png",siteUrl:"https://debleeckere.be",pathPrefix:"/",siteDescription:"Een site over de familienaam De Bleeckere.",siteCover:"/images/debleeckere.jpg",siteNavigation:!0,siteRss:"/rss.xml",siteRssAuthor:"De Bleeckere RSS",sitePaginationLimit:10,googleAnalyticsID:"UA-TODO-1",siteSocialUrls:["https://github.com/haysclark/gatsby-starter-casper","https://twitter.com/gatsbyjs","mailto:gatsbyjs@example.com"],postDefaultCategoryID:"Document",userLinks:[{label:"Familie",url:"/familie  ",iconClassName:"fa fa-github"},{label:"Bakermat",url:"/bakermat",iconClassName:"fa fa-envelope"},{label:"Onderzoek",url:"/onderzoek",iconClassName:"fa fa-envelope"},{label:"Documenten",url:"/documenten",iconClassName:"fa fa-twitter"}],copyright:{label:"De Bleeckere Site"},themeColor:"#FFFDEE",backgroundColor:"#9ACCCD",promoteGatsby:!0}},,,function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(154),c=n.n(s),l=(n(159),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return i.a.createElement("div",{className:r},t)},t}(i.a.Component));t.a=l},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"site-wrapper"},e)},t}(i.a.Component));t.a=s},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(165),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return i.a.createElement("footer",{className:"site-footer clearfix"},i.a.createElement("section",{className:"copyright"},i.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),i.a.createElement(function(e){return e.show?i.a.createElement("section",{className:"poweredby"},"Proudly published with ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},t}(o.Component));t.a=s},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(154),c=n.n(s),l=(n(167),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return i.a.createElement("nav",{className:a},t)},t}(i.a.Component));t.a=l},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?i.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},i.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},i.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=s},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=(n(23),n(73)),i=n.n(o),s=n(0),c=n.n(s),l=(n(74),n(33));var u=function(e){var t=[{primaryText:"Home",component:l.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t},p=(n(160),n(161),c.a.Component,function(){return null}),m=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},f=function(e){var t=e.primaryText,n=e.component,a=i()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},h=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(f,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,c=t.nestedItems,l=i()(t,["divider","subheader","nestedItems"]);a=r?p:o?m:f;var u=Object.assign({},l,{key:t.key||n});return c&&(u.nestedItems=c.map(e)),Object(s.createElement)(a,u)},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(h))),c.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=d},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(154),c=n.n(s),l=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return i.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.a.Component));t.a=l},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(230),c=n.n(s),l=n(33),u=(n(194),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?i.a.createElement("span",null,t,n.map(function(e,t,n){return i.a.createElement("span",{key:e},i.a.createElement(l.Link,{key:e,to:"/tags/"+c.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(o.Component));t.a=u},function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(195),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?i.a.createElement(s.Link,{to:n},t):null},t}(i.a.Component));t.a=c},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(196),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return i.a.createElement("article",{className:n},t)},t}(i.a.Component));t.a=s},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(197),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("header",{className:"post-header"},e)},t}(i.a.Component));t.a=s},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(231),c=n.n(s),l=(n(198),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.date;return i.a.createElement("time",{className:"post-date",dateTime:c()(new Date(e)).format("YYYY-MM-DD")},c()(new Date(e)).format("DD MMMM YYYY"))},t}(i.a.Component));t.a=l},function(e,t,n){"use strict";n(75);var a=function(e){return function(t){return t.uid===e}},r=function(e){return e.map(function(e){return e.node})},o=function(){function e(){}return e.hasAuthor=function(e,t){var n=r(e);return Boolean(n.find(a(t)))},e.getAuthor=function(e,t,n){var o=r(e);return this.hasAuthor(e,t)?o.find(a(t)):o.find(a(n))},e}();t.a=o},,function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(240),n(241),n(27);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(157),c=n.n(s),l=n(155),u=n.n(l),p=(n(209),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=u.a.pathPrefix?u.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags/"===n)a="Tags";else if("categories/"===n)a="Categories";else if("about/"===n)a="About";else if(n.includes("posts"))a="Article";else if(n.includes("tags/")){a="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){a=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement("title",null,u.a.siteTitle+" |  "+this.getLocalTitle()),i.a.createElement("meta",{name:"description",content:u.a.siteDescription})),e)},t}(i.a.Component))},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(157),c=n.n(s),l=n(155),u=n.n(l),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,o=r.postNode,s=r.postPath,l=r.postSEO;if(l){var p=o.frontmatter;e=p.title,t=p.description?p.description:o.excerpt,n=p.cover,a=u.a.siteUrl+u.a.pathPrefix+s}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;var m="/"===u.a.pathPrefix?"":u.a.pathPrefix;n=u.a.siteUrl+m+n;var f=u.a.siteUrl+u.a.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return l&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),i.a.createElement("meta",{property:"og:url",content:l?a:f}),l?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(o.Component);t.a=p},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(154),c=n.n(s),l=(n(188),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n});return i.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(i.a.Component));t.a=l},function(e,t,n){},function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(184),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?i.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(i.a.Component)),l=n(175),u=n(155),p=n.n(u),m=n(176),f=n(177),h=n(178),d=n(179),v=n(180),g=(n(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=(e=this.props.postEdges,t=this.props.postAuthors,e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:v.a.getAuthor(t,e.node.frontmatter.author,p.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return i.a.createElement("div",null,n.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,o=e.tags,u=e.date,p=e.post_class?e.post_class:"post";return i.a.createElement(f.a,{className:p,key:t},i.a.createElement(h.a,null,i.a.createElement("h2",{className:"post-title"},i.a.createElement(s.Link,{to:n},t))),i.a.createElement("section",{className:"post-excerpt"},i.a.createElement("p",null,a," ",i.a.createElement(s.Link,{className:"read-more",to:n},"»"))),i.a.createElement("footer",{className:"post-meta"},i.a.createElement(c,{avatar:r.image,name:r.name}),i.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),i.a.createElement(l.a,{prefix:" on ",tags:o}),i.a.createElement(d.a,{date:u})))}))},t}(i.a.Component));t.a=g},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(191),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("section",{className:"page-section"},this.props.children)},t}(o.Component));t.a=s},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.a.createElement("h1",{className:"page-title"},e):null},t}(i.a.Component));t.a=s},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(202),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.a.createElement("h2",{className:"page-description"},e):null},t}(i.a.Component));t.a=s},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(232),c=(n(208),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,n=e.color;return t&&t.length>0?i.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return i.a.createElement(s.SocialIcon,{key:e,className:"social-media-icon",url:e,color:n,style:{height:null,width:null}})})):null},t}(i.a.Component));t.a=c},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(173),c=(n(23),n(33)),l=(n(203),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=Object.assign({},this.props);return delete t.style,delete t.className,delete t.text,delete t.url,i.a.createElement(c.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(i.a.Component)),u=(n(204),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return i.a.createElement("nav",{className:"pagination"},i.a.createElement(l,{className:"newer-posts",url:a,text:"← Newer Posts"}),i.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),i.a.createElement(l,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(i.a.Component)),p=(n(205),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,o=e.children,c="";return t>1&&(c+=" paged"),i.a.createElement(s.a,{className:c},i.a.createElement("div",{className:"extra-pagination inner"},i.a.createElement(u,{page:t,pages:n,prev:a,next:r})),o,i.a.createElement(u,{page:t,pages:n,prev:a,next:r}))},t}(i.a.Component));t.a=p}])]);
//# sourceMappingURL=component---src-templates-index-jsx-671cf9b4067103b35265.js.map