(window.webpackJsonp=window.webpackJsonp||[]).push([[11,2],Array(150).concat([function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return I});n(235);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(158),l=n.n(s),c=n(249),u=(n(33),n(193),n(186)),p=n(156),d=n.n(p),m=n(164),f=n(178),h=n(168),g=n(170),v=n(202),y=n(191),E=n(172),b=n(174),N=n(176),w=n(195),k=(n(204),n(215)),C=(n(209),n(187)),S=n(213),x=n(159),L=n.n(x),O=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext,t=e.nodes,n=e.page,a=e.pages,r=e.total,i=e.limit,s=e.prev,p=e.next,x=(this.props.data.authors.edges,this.props.data.frontmatter.edges);return o.a.createElement(C.a,{location:this.props.location},o.a.createElement(m.a,{className:"home-template",isOpen:this.state.menuOpen},o.a.createElement(l.a,{title:d.a.siteTitle}),o.a.createElement(u.a,{postEdges:t}),o.a.createElement(f.a,{config:d.a,onClose:this.handleOnClose}),o.a.createElement(h.a,null,o.a.createElement("div",{className:"home-template"},o.a.createElement(y.a,{cover:d.a.pathPrefix+"/images/familie.jpg"},o.a.createElement(E.a,{overlay:d.a.pathPrefix+"/images/familie.jpg"},o.a.createElement(b.a,{logo:d.a.siteLogo,title:d.a.siteTitle}),o.a.createElement(N.a,{navigation:d.a.siteNavigation,onClick:this.handleOnClick})),o.a.createElement("div",{className:"vertical"},o.a.createElement("div",{className:"main-header-content inner"},o.a.createElement(w.a,{text:"Familie"}))),o.a.createElement(c.Link,{className:"scroll-down icon-arrow-left",to:"content","data-offset":"-45",spy:!0,smooth:!0,duration:500},o.a.createElement("span",{className:"hidden"},"Scroll Down"))),o.a.createElement(v.a,null,"Dit is de familiefoto van het gezin, genomen en samengesteld in de studio Hooft van Knesselare. Deze foto kreeg een ereplaats in de woonkamers van de gezinsleden. In het midden staan de ouders, Vital De Bleeckere en Maria Octavia Versluys, omringd door hun tien volwassen kinderen. Het zijn kloksgewijs Omer, Alfons, Jozef, Maria, Irma, Berta, Albert, Maurits, Jules, Lea. Die volgorde is niet chronologisch. Het oudste kind was namelijk Jozef, de derde van de bovenste rij. Ook op de onderste rij staat links Albert voor Maurits, terwijl Maurits voor Albert geboren is. De chronologische volgorde is dus: Jozef, Maria, Alfons, Omer, Irma, Berta, Maurits, Albert, Jules en Lea. Op de foto ontbreekt er een kind. Het is Raymond, het derde kind van het echtpaar Vital-Octavia. Hij is geboren op 30 juli 1909. Hij kwam om het leven als peuter op 11 mei 1911."),o.a.createElement(v.a,null,o.a.createElement(S.a,{images:L.a.map(this.props.data.voorgrond.edges,function(e){return e.node.childImageSharp}),links:L.a.map(this.props.data.voorgrond.edges,function(e){return e.node.relativePath.slice(0,-9)}),captions:L.a.map(this.props.data.voorgrond.edges,function(e){var t=e.node.relativePath.slice(0,-9);console.log(t);var n=L.a.findIndex(x,function(e){return-1!==e.node.fileAbsolutePath.indexOf(t)});return n>=0?x[n].node.frontmatter.voornaam+" "+x[n].node.frontmatter.achternaam:t})})),o.a.createElement(k.a,{page:n,pages:a,total:r,limit:i,prev:s,next:p})),o.a.createElement(g.a,{copyright:d.a.copyright,promoteGatsby:d.a.promoteGatsby}))))},t}(o.a.Component),I="2649115169";t.default=O},,,,,,function(e,t){e.exports={blogPostDir:"sample-posts",blogAuthorDir:"sample-authors",personDir:"persons",blogAuthorId:"sylvain",siteTitle:"De Bleeckere",siteTitleAlt:"Familienaam De Bleeckere Site",siteLogo:"images/debleeckere-logo.png",siteUrl:" https://siegfrieddb.github.io",pathPrefix:"/debleeckere",siteDescription:"Een site over de familienaam De Bleeckere.",siteCover:"/images/debleeckere.jpg",siteNavigation:!0,siteRss:"/rss.xml",siteRssAuthor:"De Bleeckere RSS",sitePaginationLimit:10,googleAnalyticsID:"UA-TODO-1",siteSocialUrls:["https://github.com/haysclark/gatsby-starter-casper","https://twitter.com/gatsbyjs","mailto:gatsbyjs@example.com"],postDefaultCategoryID:"Document",userLinks:[{label:"Familie",url:"/familie  ",iconClassName:"fa fa-github"},{label:"Bakermat",url:"/bakermat",iconClassName:"fa fa-envelope"},{label:"Onderzoek",url:"/onderzoek",iconClassName:"fa fa-envelope"},{label:"Documenten",url:"/documenten",iconClassName:"fa fa-twitter"},{label:"Contact",url:"/about/",iconClassName:"fa fa-twitter"}],copyright:{label:"De Bleeckere Site"},themeColor:"#FFFDEE",backgroundColor:"#9ACCCD",promoteGatsby:!0}},,,,function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(159),l=n.n(s),c=n(33),u=(n(161),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?o.a.createElement("span",null,t,n.map(function(e,t,n){return o.a.createElement("span",{key:e},o.a.createElement(c.Link,{key:e,to:"/tags/"+l.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(i.Component));t.a=u},function(e,t,n){},function(e,t,n){"use strict";n(157);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(163),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?o.a.createElement(s.Link,{to:n},t):null},t}(o.a.Component));t.a=l},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(165),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=l()(a,n?"nav-opened":"nav-closed");return o.a.createElement("div",{className:r},t)},t}(o.a.Component));t.a=c},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"site-wrapper"},e)},t}(o.a.Component));t.a=s},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return o.a.createElement("footer",{className:"site-footer clearfix"},o.a.createElement("section",{className:"copyright"},o.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),o.a.createElement(function(e){return e.show?o.a.createElement("section",{className:"poweredby"},"Proudly published with ",o.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},t}(i.Component));t.a=s},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(173),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("main-nav",["overlay","clearfix"],n);return o.a.createElement("nav",{className:a},t)},t}(o.a.Component));t.a=c},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(175),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?o.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},o.a.createElement("img",{src:t,alt:a})):null},t}(i.Component));t.a=l},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?o.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},o.a.createElement("span",{className:"word"},"Menu")):null},t}(i.Component));t.a=s},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=(n(23),n(73)),o=n.n(i),s=n(0),l=n.n(s),c=(n(74),n(33));var u=function(e){var t=[{primaryText:"Home",component:c.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t},p=(n(166),n(167),l.a.Component,function(){return null}),d=function(e){var t=e.primaryText;return l.a.createElement("h3",null,t)},m=function(e){var t=e.primaryText,n=e.component,a=o()(e,["primaryText","component"]);return l.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},f=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(m,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,i=t.subheader,l=t.nestedItems,c=o()(t,["divider","subheader","nestedItems"]);a=r?p:i?d:m;var u=Object.assign({},c,{key:t.key||n});return l&&(u.nestedItems=l.map(e)),Object(s.createElement)(a,u)},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return l.a.createElement("div",null,l.a.createElement("div",{className:"nav"},l.a.createElement("h3",{className:"nav-title"},"Menu"),l.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},l.a.createElement("span",{className:"hidden"},"Close")),l.a.createElement("ul",null,a.map(f))),l.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=h},function(e,t,n){"use strict";var a=n(9);t.__esModule=!0,t.default=void 0;var r,i=a(n(6)),o=a(n(34)),s=a(n(73)),l=a(n(51)),c=a(n(0)),u=a(n(1)),p=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d={},m=function(e){var t=p(e),n=t.fluid?t.fluid.src:t.fixed.src;return!!d[n]||(d[n]=!0,!1)},f=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),f.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=c.default.forwardRef(function(e,t){var n=e.style,a=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:a,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});v.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,r=!0,i=!1,s=t.fadeIn,l=m(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!1,i=!0),"undefined"==typeof window&&(a=!1,r=!1),t.critical&&(a=!0,r=!1,i=!1);var u=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:a,imgLoaded:r,IOSupported:i,fadeIn:s,hasNoScript:u,seenBefore:l},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},n.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=p(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,d=void 0===u?{}:u,m=e.placeholderClassName,f=e.fluid,h=e.fixed,y=e.backgroundColor,E=e.Tag,b="boolean"==typeof y?"lightgray":y,N=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,d),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),k={title:t,alt:this.state.isVisible?"":n,style:N,className:m};if(f){var C=f;return c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(C.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/C.aspectRatio+"%"}}),C.base64&&c.default.createElement(v,(0,l.default)({src:C.base64},k)),C.tracedSVG&&c.default.createElement(v,(0,l.default)({src:C.tracedSVG},k)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),c.default.createElement(v,{alt:n,title:t,src:C.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t},C))}}))}if(h){var S=h,x=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},i);return"inherit"===i.display&&delete x.display,c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:x,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&c.default.createElement(v,(0,l.default)({src:S.base64},k)),S.tracedSVG&&c.default.createElement(v,(0,l.default)({src:S.tracedSVG},k)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&c.default.createElement("picture",null,S.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),c.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),c.default.createElement(v,{alt:n,title:t,width:S.width,height:S.height,src:S.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t,width:S.width,height:S.height},S))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),b=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:E,sizes:b,fixed:E,fluid:b,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,Tag:u.default.string};var N=y;t.default=N},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=l()("content",this.props.className);return o.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(o.a.Component));t.a=c},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(199),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return o.a.createElement("article",{className:n},t)},t}(o.a.Component));t.a=s},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(200),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("header",{className:"post-header"},e)},t}(o.a.Component));t.a=s},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(236),l=n.n(s),c=(n(201),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.date;return o.a.createElement("time",{className:"post-date",dateTime:l()(new Date(e)).format("YYYY-MM-DD")},l()(new Date(e)).format("DD MMMM YYYY"))},t}(o.a.Component));t.a=c},function(e,t,n){"use strict";n(75);var a=function(e){return function(t){return t.uid===e}},r=function(e){return e.map(function(e){return e.node})},i=function(){function e(){}return e.hasAuthor=function(e,t){var n=r(e);return Boolean(n.find(a(t)))},e.getAuthor=function(e,t,n){var i=r(e);return this.hasAuthor(e,t)?i.find(a(t)):i.find(a(n))},e}();t.a=i},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(158),l=n.n(s),c=n(156),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,s=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,n=p.cover,a=u.a.siteUrl+u.a.pathPrefix+s}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;var d="/"===u.a.pathPrefix?"":u.a.pathPrefix;n=u.a.siteUrl+d+n;var m=u.a.siteUrl+u.a.pathPrefix,f=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&f.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),o.a.createElement("meta",{property:"og:url",content:c?a:m}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=p},function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(245),n(246),n(27);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(158),l=n.n(s),c=n(156),u=n.n(c),p=(n(212),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=u.a.pathPrefix?u.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags/"===n)a="Tags";else if("categories/"===n)a="Categories";else if("about/"===n)a="About";else if(n.includes("posts"))a="Article";else if(n.includes("tags/")){a="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){a=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,u.a.siteTitle+" |  "+this.getLocalTitle()),o.a.createElement("meta",{name:"description",content:u.a.siteDescription})),e)},t}(o.a.Component))},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(192),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.cover,a=l()("main-header",this.props.className,{"no-cover":!n});return o.a.createElement("header",{className:a,style:n?{backgroundImage:'url("'+n+'")'}:null},t)},t}(o.a.Component));t.a=c},function(e,t,n){},function(e,t,n){"use strict";n(157);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(189),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.avatar,n=e.name;return t&&n?o.a.createElement("img",{className:"author-thumb",src:t,alt:n,"data-pin-nopin":"true"}):null},t}(o.a.Component)),c=n(160),u=n(156),p=n.n(u),d=n(162),m=n(182),f=n(183),h=n(184),g=n(185),v=(n(190),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=(e=this.props.postEdges,t=this.props.postAuthors,e.map(function(e){return{path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.frontmatter.date,author:g.a.getAuthor(t,e.node.frontmatter.author,p.a.blogAuthorId),excerpt:e.node.excerpt,timeToRead:e.node.timeToRead}}));return o.a.createElement("div",null,n.map(function(e){var t=e.title,n=e.path,a=e.excerpt,r=e.author,i=e.tags,u=e.date,p=e.post_class?e.post_class:"post";return o.a.createElement(m.a,{className:p,key:t},o.a.createElement(f.a,null,o.a.createElement("h2",{className:"post-title"},o.a.createElement(s.Link,{to:n},t))),o.a.createElement("section",{className:"post-excerpt"},o.a.createElement("p",null,a," ",o.a.createElement(s.Link,{className:"read-more",to:n},"»"))),o.a.createElement("footer",{className:"post-meta"},o.a.createElement(l,{avatar:r.image,name:r.name}),o.a.createElement(d.a,{url:"/author/"+r.uid,name:r.name}),o.a.createElement(c.a,{prefix:" on ",tags:i}),o.a.createElement(h.a,{date:u})))}))},t}(o.a.Component));t.a=v},function(e,t,n){"use strict";n(197)("fixed",function(e){return function(){return e(this,"tt","","")}})},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(196),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return"Bakermat"==e?o.a.createElement("h1",{className:"page-title page-title-collored"},e):e?o.a.createElement("h1",{className:"page-title"},e):null},t}(o.a.Component));t.a=s},function(e,t,n){},function(e,t,n){var a=n(24),r=n(26),i=n(25),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(203),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("section",{className:"page-section"},this.props.children)},t}(i.Component));t.a=s},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(205),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return e?o.a.createElement("h2",{className:"page-description"},e):null},t}(o.a.Component));t.a=s},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(237),l=(n(211),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.urls,n=e.color;return t&&t.length>0?o.a.createElement("div",{className:"social-media-icons"},t.map(function(e){return o.a.createElement(s.SocialIcon,{key:e,className:"social-media-icon",url:e,color:n,style:{height:null,width:null}})})):null},t}(o.a.Component));t.a=l},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n(194);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(214),n(179)),l=n.n(s),c=n(33),u=n(159),p=n.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){console.log(JSON.stringify(this.props.links)),console.log(JSON.stringify(this.props.captions));var e=p.a.zip(this.props.images,this.props.links,this.props.captions);return o.a.createElement("div",null,o.a.createElement("div",{className:"flex-container-gallery"},p.a.map(e,function(e){return o.a.createElement(c.Link,{key:e[1],to:e[1]},o.a.createElement(l.a,{className:"flex-item-gallery",fixed:e[0].fixed}," "),o.a.createElement("span",null,e[2]))})))},t}(i.Component);t.a=d},function(e,t,n){},function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(180),l=(n(23),n(33)),c=(n(206),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){if(this.props.url){var e="nav-link";this.props.className&&(e=e+" "+this.props.className);var t=Object.assign({},this.props);return delete t.style,delete t.className,delete t.text,delete t.url,o.a.createElement(l.Link,Object.assign({to:this.props.url},t,{className:e}),this.props.text)}return null},t}(o.a.Component)),u=(n(207),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next;return o.a.createElement("nav",{className:"pagination"},o.a.createElement(c,{className:"newer-posts",url:a,text:"← Newer Posts"}),o.a.createElement("span",{className:"page-number"},"Page ",t," of ",n),o.a.createElement(c,{className:"older-posts",url:r,text:"Older Posts →"}))},t}(o.a.Component)),p=(n(208),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.page,n=e.pages,a=e.prev,r=e.next,i=e.children,l="";return t>1&&(l+=" paged"),o.a.createElement(s.a,{className:l},o.a.createElement("div",{className:"extra-pagination inner"},o.a.createElement(u,{page:t,pages:n,prev:a,next:r})),i,o.a.createElement(u,{page:t,pages:n,prev:a,next:r}))},t}(o.a.Component));t.a=p},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(24),r=n(76)(6),i="findIndex",o=!0;i in[]&&Array(1)[i](function(){o=!1}),a(a.P+a.F*o,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(52)(i)}])]);
//# sourceMappingURL=component---src-pages-familie-jsx-00b5f228cab1709cbb97.js.map