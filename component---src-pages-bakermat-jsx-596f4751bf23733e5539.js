(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return L});n(226);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(158),l=n.n(s),c=n(227),p=(n(33),n(187),n(172)),u=n(157),m=n.n(u),d=n(162),h=n(168),f=n(163),g=n(164),v=n(194),E=n(189),y=n(165),k=(n(166),n(167)),N=n(209),w=(n(197),n(212),n(199),n(201)),b=n(211),x=n(159),C=n.n(x),O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.nodes,n=(e.page,e.pages,e.total,e.limit,e.prev,e.next,this.props.data.authors.edges,this.props.data.frontmatter.edges);return o.a.createElement(w.a,{location:this.props.location},o.a.createElement(d.a,{className:"home-template",isOpen:this.state.menuOpen},o.a.createElement(l.a,{title:m.a.siteTitle}),o.a.createElement(p.a,{postEdges:t}),o.a.createElement(h.a,{config:m.a,onClose:this.handleOnClose}),o.a.createElement(f.a,null,o.a.createElement("div",{className:"home-template"},o.a.createElement(E.a,{noscale:!0,cover:this.props.data.frontImg.childImageSharp},o.a.createElement(N.a,{text:"Bakermat"}),o.a.createElement(y.a,null,o.a.createElement(k.a,{navigation:m.a.siteNavigation,onClick:this.handleOnClick})),o.a.createElement("div",{className:"vertical"},o.a.createElement("div",{className:"main-header-content inner"})),o.a.createElement(c.Link,{className:"scroll-down icon-arrow-left",to:"content","data-offset":"-45",spy:!0,smooth:!0,duration:500},o.a.createElement("span",{className:"hidden"},"Scroll Down"))),o.a.createElement(v.a,null,o.a.createElement("div",{name:"content",style:{paddingTop:30}},"Het domein Bakermat geeft een concreet beeld van een specifieke grensstreek tussen Oost- en West-Vlaanderen. Het betreft de grensstreek tussen het zuidelijkste deel van wat men het groene Brugse Ommeland noemt, met name de zuidoostelijke rand ervan met de vroegere dorpskernen Sint-Joris-ten-Distel, Oedelem en Beernem ― vandaag de fusiegemeente Beernem ― en het Oost-Vlaamse Zuid-Meetjesland, met de vroegere dorpskernen Knesselare en Sint-Maria-Aalter ― vandaag allebei behorend tot de fusiegemeente Aalter.",o.a.createElement("br",null),o.a.createElement("br",null),"In deze unieke streek situeert zich de familie Vitalis De Bleeckere-Octavia Versluys. Vitalis is geboren en opgegroeid in Sint-Joris-ten-Distel, terwijl het leven van Octavia Versluys zich van geboorte tot dood heeft afgespeeld in Knesselare. Vitalis en Octavia woonden met hun gezin te Knesselare. Al hun kinderen zijn daar geboren en opgegroeid. De meesten zijn ook daar nadien blijven wonen. Dat geldt voor Jozef, Maria, Alfons, Omer, Irma en Berta; Jules woonde in Buntelare waar Knesselare grenst aan Aalter-Brug; Maurits en Albert woonden elk na hun huwelijk eerst enige tijd in Knesselare, daarna vestigden ze zich definitief aan de rand van Sint-Maria-Aalter, direct aan de grens met Zuid-Knesselare.",o.a.createElement("br",null),o.a.createElement("br",null),"Allen waren ze gewone mensen wier leven sterk werd bepaald door hun directe omgeving. Het sociale en culturele leven, de taal, de geschiedenis en de geografie van de streek kleurden het dagelijkse leven van hun gezin en hun familie. In het domein Bakermat passeren diverse facetten van die streek de revue, telkens belicht vanuit de familie en het gezin van Vitalis en Octavia.",o.a.createElement("h1",null))),o.a.createElement(v.a,null,o.a.createElement(b.a,{images:C.a.map(this.props.data.voorgrond.edges,function(e){return e.node.childImageSharp}),links:C.a.map(this.props.data.voorgrond.edges,function(e){return e.node.relativePath.slice(0,-9)}),captions:C.a.map(this.props.data.voorgrond.edges,function(e){var t=e.node.relativePath.slice(0,-9),a=C.a.findIndex(n,function(e){return-1!==e.node.fileAbsolutePath.indexOf(t)});return a>=0?n[a].node.frontmatter.gallerij_titel:t})}))),o.a.createElement(g.a,{copyright:m.a.copyright,promoteGatsby:m.a.promoteGatsby}))))},t}(o.a.Component),L="1884930868";t.default=O},161:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("header",{className:"post-header"},e)},t}(o.a.Component));t.a=s},162:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=l()(a,n?"nav-opened":"nav-closed");return o.a.createElement("div",{className:r},t)},t}(o.a.Component));t.a=c},163:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"site-wrapper"},e)},t}(o.a.Component));t.a=s},164:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(182),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return o.a.createElement("div",null,o.a.createElement("div",{className:"menu-bar"},o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\familie"},"Familie")),o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\bakermat"},"Bakermat")),o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\documenten"},"Documenten")),o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\onderzoek"},"Onderzoek")),o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\contact"},"Contact"))),o.a.createElement("footer",{className:"site-footer clearfix"},o.a.createElement("section",{className:"copyright"},o.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),o.a.createElement(function(e){return e.show?o.a.createElement("section",{className:"poweredby"},"Proudly published with ",o.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e})))},t}(i.Component));t.a=l},165:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(183),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("main-nav",["overlay","clearfix"],n);return o.a.createElement("nav",{className:a},t)},t}(o.a.Component));t.a=c},166:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(184),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?o.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},o.a.createElement("img",{src:t,alt:a})):null},t}(i.Component));t.a=l},167:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(185),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?o.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},o.a.createElement("span",{className:"word"},"Menu")):null},t}(i.Component));t.a=s},168:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=(n(23),n(73)),o=n.n(i),s=n(0),l=n.n(s),c=(n(74),n(33));var p=function(e){var t=[{primaryText:"Home",component:c.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t},u=(n(179),n(180),l.a.Component,function(){return null}),m=function(e){var t=e.primaryText;return l.a.createElement("h3",null,t)},d=function(e){var t=e.primaryText,n=e.component,a=o()(e,["primaryText","component"]);return l.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},h=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(d,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,i=t.subheader,l=t.nestedItems,c=o()(t,["divider","subheader","nestedItems"]);a=r?u:i?m:d;var p=Object.assign({},c,{key:t.key||n});return l&&(p.nestedItems=l.map(e)),Object(s.createElement)(a,p)},f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=p(t);return l.a.createElement("div",null,l.a.createElement("div",{className:"nav"},l.a.createElement("h3",{className:"nav-title"},"Menu"),l.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},l.a.createElement("span",{className:"hidden"},"Close")),l.a.createElement("ul",null,a.map(h))),l.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=f},169:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(159),l=n.n(s),c=n(33),p=(n(175),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?o.a.createElement("span",null,t,n.map(function(e,t,n){return o.a.createElement("span",{key:e},o.a.createElement(c.Link,{key:e,to:"/tags/"+l.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(i.Component));t.a=p},170:function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(176),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?o.a.createElement(s.Link,{to:n},t):null},t}(o.a.Component));t.a=l},171:function(e,t,n){},172:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(158),l=n.n(s),c=n(157),p=n.n(c),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,s=r.postPath,c=r.postSEO;if(c){var u=i.frontmatter;e=u.title,t=u.description?u.description:i.excerpt,n=u.cover,a=p.a.siteUrl+p.a.pathPrefix+s}else e=p.a.siteTitle,t=p.a.siteDescription,n=p.a.siteLogo;var m="/"===p.a.pathPrefix?"":p.a.pathPrefix;n=p.a.siteUrl+m+n;var d=p.a.siteUrl+p.a.pathPrefix,h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return c&&h.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:c?a:d}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=u},173:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(186),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=l()("content",this.props.className);return o.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(o.a.Component));t.a=c},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){"use strict";n(156);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?o.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(o.a.Component)),c=n(169),p=n(157),u=n.n(p),m=n(170),d=n(191),h=n(161),f=n(192),g=n(193),v=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=(e=this.props.postEdges,t=this.props.postAuthors,e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:g.a.getAuthor(t,e.node.frontmatter.author,u.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return o.a.createElement("div",null,n.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,i=e.tags,p=e.date,u=e.post_class?e.post_class:"post";return o.a.createElement(d.a,{className:u,key:t},o.a.createElement(h.a,null,o.a.createElement("h2",{className:"post-title"},o.a.createElement(s.Link,{to:n},t))),o.a.createElement("section",{className:"post-excerpt"},o.a.createElement("p",null,a," ",o.a.createElement(s.Link,{className:"read-more",to:n},"»"))),o.a.createElement("footer",{className:"post-meta"},o.a.createElement(l,{avatar:r.image,name:r.name}),o.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),o.a.createElement(c.a,{prefix:" on ",tags:i}),o.a.createElement(f.a,{date:p})))}))},t}(o.a.Component));t.a=v},189:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(34),o=n.n(i),s=n(0),l=n.n(s),c=n(155),p=n.n(c),u=(n(196),n(160)),m=n.n(u),d=function(e){function t(t){var n;if((n=e.call(this,t)||this).state={width:"auto",height:"100hv",top:"0px",left:"0px"},!n.props.cover)throw new Error("no cover specified");return n.updateDimensions=n.updateDimensions.bind(o()(o()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions)},n.updateDimensions=function(){var e,t,n=this.props.cover.fluid.aspectRatio,a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),r=Math.max(document.documentElement.clientHeight,window.innerHeight||0),i=a,o=r;this.props.fillRatioHeight?r*=this.props.fillRatioHeight:r=this.props.fillHeight?this.props.fillHeight:a/n,this.props.noscale?a/r>n?t=(e=r)*n:(t=a,e=a/n):(e=r,(t=r*n)>a&&(t=a),t=a),t>i&&(t=i,e=a/n),e>o&&(t=(e=o)*n);var s=(r-e)/2,l=(a-t)/2;(this.props.fillRatioHeight||this.props.fillHeight)&&(s=0),this.setState({width:t,height:e,top:s,left:l,orgw:i,orgh:o})},n.render=function(){var e=this.props,t=e.children,n=e.cover,a=p()("main-header",this.props.className,{"no-cover":!n,fillHeight:this.props.fillHeight||this.props.fillRatioHeight});return l.a.createElement("div",{className:a,style:this.props.style},l.a.createElement("div",{style:{position:"absolute",zIndex:1e3}}," orgh: ",this.state.orgh," orgw: ",this.state.orgw," height: ",this.state.height," top: ",this.state.top,"  "),l.a.createElement(m.a,{style:{overflow:"hidden",height:this.state.height,width:this.state.width,left:this.state.left,top:this.state.top},fluid:this.props.cover.fluid}),t)},t}(l.a.Component);t.a=d},190:function(e,t,n){"use strict";n(202)("fixed",function(e){return function(){return e(this,"tt","","")}})},194:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(195),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("section",{className:"page-section"},this.props.children)},t}(i.Component));t.a=s},195:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(198),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?o.a.createElement("h2",{className:"page-description"},e):null},t}(o.a.Component));t.a=s},198:function(e,t,n){},199:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(223),l=(n(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,n=e.color;return t&&t.length>0?o.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return o.a.createElement(s.SocialIcon,{key:e,className:"social-media-icon",url:e,color:n,style:{height:null,width:null}})})):null},t}(o.a.Component));t.a=l},200:function(e,t,n){},202:function(e,t,n){var a=n(24),r=n(26),i=n(25),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},204:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},209:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(210),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return"Bakermat"==e?o.a.createElement("div",{className:"page-title-container"}," ",o.a.createElement("h1",{className:"page-title page-title-collored"},e)):e?o.a.createElement("div",{className:"page-title-container"},o.a.createElement("h1",{className:"page-title"},e)):null},t}(o.a.Component));t.a=s},210:function(e,t,n){},211:function(e,t,n){"use strict";n(190);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(204),n(160)),l=n.n(s),c=n(33),p=n(159),u=n.n(p),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u.a.zip(this.props.images,this.props.links,this.props.captions);return e=u.a.sortBy(e,1),e=u.a.filter(e,function(e){return e[0]&&e[1]}),o.a.createElement("div",null,o.a.createElement("div",{className:"flex-container-gallery"},u.a.map(e,function(e){return o.a.createElement(c.Link,{className:"flex-item-gallery",key:e[1],to:e[1]},o.a.createElement(l.a,{fixed:e[0].fixed}," "),o.a.createElement("span",{className:"flex-item-gallery-span"},e[2]))})))},t}(i.Component);t.a=m},212:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(173),l=(n(23),n(33)),c=(n(205),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=Object.assign({},this.props);return delete t.style,delete t.className,delete t.text,delete t.url,o.a.createElement(l.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(o.a.Component)),p=(n(206),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return o.a.createElement("nav",{className:"pagination"},o.a.createElement(c,{className:"newer-posts",url:a,text:"← Newer Posts"}),o.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),o.a.createElement(c,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(o.a.Component));n(207),o.a.Component},226:function(e,t,n){"use strict";var a=n(24),r=n(75)(6),i="findIndex",o=!0;i in[]&&Array(1)[i](function(){o=!1}),a(a.P+a.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(51)(i)}}]);
//# sourceMappingURL=component---src-pages-bakermat-jsx-596f4751bf23733e5539.js.map