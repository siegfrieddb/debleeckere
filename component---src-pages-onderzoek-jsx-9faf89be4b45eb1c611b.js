(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return L});n(224);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(162),c=n.n(s),l=n(225),p=(n(33),n(188),n(185)),u=n(157),m=n.n(u),d=n(164),h=n(170),f=n(165),v=n(166),g=n(197),E=n(190),y=n(167),k=(n(168),n(169)),N=n(218),b=(n(199),n(207),n(204),n(206)),w=n(210),x=n(159),C=n.n(x),O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.nodes,n=(e.page,e.pages,e.total,e.limit,e.prev,e.next,this.props.data.authors.edges,this.props.data.frontmatter.edges);return i.a.createElement(b.a,{location:this.props.location},i.a.createElement(d.a,{className:"home-template",isOpen:this.state.menuOpen},i.a.createElement(c.a,{title:m.a.siteTitle}),i.a.createElement(p.a,{postEdges:t}),i.a.createElement(h.a,{config:m.a,onClose:this.handleOnClose}),i.a.createElement(f.a,null,i.a.createElement("div",{className:"home-template"},i.a.createElement(E.a,{cover:this.props.data.frontImg.childImageSharp,style:{"background-color":"#FFFFFF"}},i.a.createElement(N.a,{text:"Onderzoek"}),i.a.createElement(y.a,{overlay:m.a.pathPrefix+"/images/onderzoek.jpg"},i.a.createElement(k.a,{navigation:m.a.siteNavigation,onClick:this.handleOnClick})),i.a.createElement("div",{className:"vertical"},i.a.createElement("div",{className:"main-header-content inner"})),i.a.createElement(l.Link,{className:"scroll-down icon-arrow-left",to:"content","data-offset":"-45",spy:!0,smooth:!0,duration:500},i.a.createElement("span",{className:"hidden"},"Scroll Down"))),i.a.createElement(g.a,null," ",i.a.createElement("div",{name:"content",style:{paddingTop:30}},"De oude prentkaart van de Dorpsstraat in Sint-Joris-ten-Distel, het dorp waar de wieg stond van Vitalis, toont een eenzame fietser die onderweg is. Dat beeld begeleidt het werk aan het domein Onderzoek. De verschillende items vormen onderzoeksvragen waarop een antwoord moet worden gevonden. Dat gebeurt door op weg te gaan naar openbare archieven, beschikbare studies, levende getuigen en online data. De verschillende items met hun onderzoeksvragen hebben in de eerste plaats betrekking op de gezinsbiografie van de 37 leden - de drie generaties - van de familie Vitalis De Bleeckere-Octavia Versluys.",i.a.createElement("br",null),i.a.createElement("br",null),"De onderzoeksvragen reiken veel verder dan die van het opstellen van de klassieke stamboom. Stambomen kennen enkel een droge opsomming van namen en data. Ze kennen geen gezichten, geen verhalen. Hier primeren de gezichten en de verhalen. Het onderzoek is hier een middel om die gezichten en die verhalen te ontdekken, ook al blijven de antwoorden op de vragen soms beperkt en is er verder kritisch onderzoek naar relevante bronnen vereist. In de aparte rubriek Bronnen worden alle bronnen die een rol spelen in de uitbouw van de site samengebracht en voorgesteld.")),i.a.createElement(g.a,null,i.a.createElement(w.a,{images:C.a.map(this.props.data.voorgrond.edges,function(e){return e.node.childImageSharp}),links:C.a.map(this.props.data.voorgrond.edges,function(e){return e.node.relativePath.slice(0,-9)}),captions:C.a.map(this.props.data.voorgrond.edges,function(e){var t=e.node.relativePath.slice(0,-9),a=C.a.findIndex(n,function(e){return-1!==e.node.fileAbsolutePath.indexOf(t)});return a>=0?n[a].node.frontmatter.gallerij_titel:t})}))),i.a.createElement(v.a,{copyright:m.a.copyright,promoteGatsby:m.a.promoteGatsby}))))},t}(i.a.Component),L="4267309178";t.default=O},160:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(161),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("header",{className:"post-header"},e)},t}(i.a.Component));t.a=s},161:function(e,t,n){},163:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(159),c=n.n(s),l=n(33),p=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?i.a.createElement("span",null,t,n.map(function(e,t,n){return i.a.createElement("span",{key:e},i.a.createElement(l.Link,{key:e,to:"/tags/"+c.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(o.Component));t.a=p},164:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=c()(a,n?"nav-opened":"nav-closed");return i.a.createElement("div",{className:r},t)},t}(i.a.Component));t.a=l},165:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"site-wrapper"},e)},t}(i.a.Component));t.a=s},166:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return i.a.createElement("div",null,i.a.createElement("div",{className:"menu-bar"},i.a.createElement("span",null,i.a.createElement(s.Link,{to:".\\familie"},"Familie")),i.a.createElement("span",null,i.a.createElement(s.Link,{to:".\\bakermat"},"Bakermat")),i.a.createElement("span",null,i.a.createElement(s.Link,{to:".\\documenten"},"Documenten")),i.a.createElement("span",null,i.a.createElement(s.Link,{to:".\\onderzoek"},"Onderzoek")),i.a.createElement("span",null,i.a.createElement(s.Link,{to:".\\contact"},"Contact"))),i.a.createElement("footer",{className:"site-footer clearfix"},i.a.createElement("section",{className:"copyright"},i.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),i.a.createElement(function(e){return e.show?i.a.createElement("section",{className:"poweredby"},"Proudly published with ",i.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e})))},t}(o.Component));t.a=c},167:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(179),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=c()("main-nav",["overlay","clearfix"],n);return i.a.createElement("nav",{className:a},t)},t}(i.a.Component));t.a=l},168:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?i.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},i.a.createElement("img",{src:t,alt:a})):null},t}(o.Component));t.a=c},169:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?i.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},i.a.createElement("span",{className:"word"},"Menu")):null},t}(o.Component));t.a=s},170:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=(n(23),n(73)),i=n.n(o),s=n(0),c=n.n(s),l=(n(74),n(33));var p=function(e){var t=[{primaryText:"Home",component:l.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t},u=(n(175),n(176),c.a.Component,function(){return null}),m=function(e){var t=e.primaryText;return c.a.createElement("h3",null,t)},d=function(e){var t=e.primaryText,n=e.component,a=i()(e,["primaryText","component"]);return c.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},h=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(d,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,o=t.subheader,c=t.nestedItems,l=i()(t,["divider","subheader","nestedItems"]);a=r?u:o?m:d;var p=Object.assign({},l,{key:t.key||n});return c&&(p.nestedItems=c.map(e)),Object(s.createElement)(a,p)},f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=p(t);return c.a.createElement("div",null,c.a.createElement("div",{className:"nav"},c.a.createElement("h3",{className:"nav-title"},"Menu"),c.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},c.a.createElement("span",{className:"hidden"},"Close")),c.a.createElement("ul",null,a.map(h))),c.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=f},171:function(e,t,n){},172:function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?i.a.createElement(s.Link,{to:n},t):null},t}(i.a.Component));t.a=c},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(186),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=c()("content",this.props.className);return i.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(i.a.Component));t.a=l},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(162),c=n.n(s),l=n(157),p=n.n(l),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,o=r.postNode,s=r.postPath,l=r.postSEO;if(l){var u=o.frontmatter;e=u.title,t=u.description?u.description:o.excerpt,n=u.cover,a=p.a.siteUrl+p.a.pathPrefix+s}else e=p.a.siteTitle,t=p.a.siteDescription,n=p.a.siteLogo;var m="/"===p.a.pathPrefix?"":p.a.pathPrefix;n=p.a.siteUrl+m+n;var d=p.a.siteUrl+p.a.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return l&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),i.a.createElement(c.a,null,i.a.createElement("meta",{name:"description",content:t}),i.a.createElement("meta",{name:"image",content:n}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),i.a.createElement("meta",{property:"og:url",content:l?a:d}),l?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:e}),i.a.createElement("meta",{property:"og:description",content:t}),i.a.createElement("meta",{property:"og:image",content:n}),i.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),i.a.createElement("meta",{name:"twitter:title",content:e}),i.a.createElement("meta",{name:"twitter:description",content:t}),i.a.createElement("meta",{name:"twitter:image",content:n}))},t}(o.Component);t.a=u},186:function(e,t,n){},187:function(e,t,n){"use strict";n(192)("fixed",function(e){return function(){return e(this,"tt","","")}})},188:function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(33),c=(n(183),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?i.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(i.a.Component)),l=n(163),p=n(157),u=n.n(p),m=n(172),d=n(194),h=n(160),f=n(195),v=n(196),g=(n(184),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=(e=this.props.postEdges,t=this.props.postAuthors,e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:v.a.getAuthor(t,e.node.frontmatter.author,u.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return i.a.createElement("div",null,n.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,o=e.tags,p=e.date,u=e.post_class?e.post_class:"post";return i.a.createElement(d.a,{className:u,key:t},i.a.createElement(h.a,null,i.a.createElement("h2",{className:"post-title"},i.a.createElement(s.Link,{to:n},t))),i.a.createElement("section",{className:"post-excerpt"},i.a.createElement("p",null,a," ",i.a.createElement(s.Link,{className:"read-more",to:n},"»"))),i.a.createElement("footer",{className:"post-meta"},i.a.createElement(c,{avatar:r.image,name:r.name}),i.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),i.a.createElement(l.a,{prefix:" on ",tags:o}),i.a.createElement(f.a,{date:p})))}))},t}(i.a.Component));t.a=g},190:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(155),c=n.n(s),l=(n(191),n(158)),p=n.n(l),u=function(e){function t(){var t;if((t=e.call(this)||this).state={width:"auto",height:"100hv",top:"0px",left:"0px"},!t.props.cover)throw new Error("no cover specified");return t}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},n.updateDimensions=function(){var e,t,n=this.props.cover.fluid.aspectRatio,a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),r=Math.max(document.documentElement.clientHeight,window.innerHeight||0);this.props.fillRatioHeight?r*=this.props.fillRatioHeight:this.props.fillHeight?r=this.props.fillHeight:a<=900&&(r=a/n),this.props.noscale?a/r>n?t=(e=r)*n:(t=a,e=a/n):(e=r,(t=r*n)>a&&(t=a),t=a);var o=(r-e)/2,i=(a-t)/2;(this.props.fillRatioHeight||this.props.fillHeight)&&(o=0),this.setState({width:t,height:e,top:o,left:i})},n.render=function(){var e=this.props,t=e.children,n=e.cover,a=c()("main-header",this.props.className,{"no-cover":!n,fillHeight:this.props.fillHeight||this.props.fillRatioHeight});return i.a.createElement("div",{className:a,style:this.props.style},i.a.createElement(p.a,{style:{overflow:"hidden",height:this.state.height,width:this.state.width,left:this.state.left,top:this.state.top},fluid:this.props.cover.fluid}),t)},t}(i.a.Component);t.a=u},191:function(e,t,n){},192:function(e,t,n){var a=n(24),r=n(26),o=n(25),i=/"/g,s=function(e,t,n,a){var r=String(o(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},193:function(e,t,n){},197:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(198),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("section",{className:"page-section"},this.props.children)},t}(o.Component));t.a=s},198:function(e,t,n){},199:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?i.a.createElement("h2",{className:"page-description"},e):null},t}(i.a.Component));t.a=s},200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(221),c=(n(205),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,n=e.color;return t&&t.length>0?i.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return i.a.createElement(s.SocialIcon,{key:e,className:"social-media-icon",url:e,color:n,style:{height:null,width:null}})})):null},t}(i.a.Component));t.a=c},205:function(e,t,n){},207:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=n(182),c=(n(23),n(33)),l=(n(201),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=Object.assign({},this.props);return delete t.style,delete t.className,delete t.text,delete t.url,i.a.createElement(c.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(i.a.Component)),p=(n(202),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return i.a.createElement("nav",{className:"pagination"},i.a.createElement(l,{className:"newer-posts",url:a,text:"← Newer Posts"}),i.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),i.a.createElement(l,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(i.a.Component)),u=(n(203),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,o=e.children,c="";return t>1&&(c+=" paged"),i.a.createElement(s.a,{className:c},i.a.createElement("div",{className:"extra-pagination inner"},i.a.createElement(p,{page:t,pages:n,prev:a,next:r})),o,i.a.createElement(p,{page:t,pages:n,prev:a,next:r}))},t}(i.a.Component));t.a=u},210:function(e,t,n){"use strict";n(187);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(193),n(158)),c=n.n(s),l=n(33),p=n(159),u=n.n(p),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u.a.zip(this.props.images,this.props.links,this.props.captions);return e=u.a.sortBy(e,1),e=u.a.filter(e,function(e){return e[0]&&e[1]}),i.a.createElement("div",null,i.a.createElement("div",{className:"flex-container-gallery"},u.a.map(e,function(e){return i.a.createElement(l.Link,{className:"flex-item-gallery",key:e[1],to:e[1]},i.a.createElement(c.a,{fixed:e[0].fixed}," "),i.a.createElement("span",{className:"flex-item-gallery-span"},e[2]))})))},t}(o.Component);t.a=m},218:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),s=(n(219),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return"Bakermat"==e?i.a.createElement("div",{className:"page-title-container"}," ",i.a.createElement("h1",{className:"page-title page-title-collored"},e)):e?i.a.createElement("div",{className:"page-title-container"},i.a.createElement("h1",{className:"page-title"},e)):null},t}(i.a.Component));t.a=s},219:function(e,t,n){},224:function(e,t,n){"use strict";var a=n(24),r=n(75)(6),o="findIndex",i=!0;o in[]&&Array(1)[o](function(){i=!1}),a(a.P+a.F*i,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(51)(o)}}]);
//# sourceMappingURL=component---src-pages-onderzoek-jsx-9faf89be4b45eb1c611b.js.map