(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return z});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(158),l=n.n(s),c=n(186),u=n(156),p=n.n(u),m=n(266),d=n(171),f=(n(173),n(175)),h=n(163),g=n(177),y=n(167),v=n(179),E=(n(183),n(182)),b=(n(184),n(226)),N=n(298),S=(n(228),n(257),n(259),n(261),n(263),n(159),n(303),n(169)),w=n(185),x=n(234),k=n(187),C=n(178),I=n.n(C),L=n(213),O=n(181),R=n.n(O),T=(n(302),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=(t.location,t.data,this.props.pageContext),a=n.slug,r=(n.vader,n.moeder,n.voorgrond,n.achtergrond,this.props.data.markdownRemark),i=(r.cover,r.voornaam),s=r.achternaam,u=(r.geboorte,r.author),C=(w.a.getAuthor(this.props.data.authors.edges,u,p.a.blogAuthorId),""),O="";this.props.data.related&&(C=o.a.createElement(N.a,null,o.a.createElement("h1",null,"Verwand met"),o.a.createElement(L.a,{images:R.a.map(this.props.data.related.edges,function(e){return e.node.childImageSharp}),links:R.a.map(this.props.data.related.edges,function(e){return e.node.relativePath.slice(0,-9)})}))),this.props.data.subsection&&(O=o.a.createElement(N.a,null,o.a.createElement("h1",null,"Onderdelen"),o.a.createElement(L.a,{images:R.a.map(this.props.data.subsection.edges,function(e){return e.node.childImageSharp}),links:R.a.map(this.props.data.subsection.edges,function(e){return e.node.relativePath.slice(0,-4)})})));var T=o.a.createElement("div",null);if(null!=this.props.data.foreImg){var z=250*this.props.data.foreImg.edges[0].node.childImageSharp.fluid.aspectRatio;T=o.a.createElement(I.a,{style:{height:"250px",width:z},fluid:this.props.data.foreImg.edges[0].node.childImageSharp.fluid}," ")}return null!=this.props.data.backImg&&this.props.data.backImg.edges[0].node.childImageSharp.fluid,o.a.createElement(k.a,{location:this.props.location},o.a.createElement(h.a,{className:"post-template",isOpen:this.state.menuOpen},o.a.createElement(l.a,null,o.a.createElement("title",null,i+" "+s)),o.a.createElement(c.a,{postPath:a,postNode:r,postSEO:!0}),o.a.createElement(g.a,{config:p.a,onClose:this.handleOnClose}),o.a.createElement(y.a,null,o.a.createElement(m.a,{className:"post-head",fluid:null},o.a.createElement(d.a,null,o.a.createElement(f.a,{navigation:p.a.siteNavigation,onClick:this.handleOnClick})),o.a.createElement("div",{style:(e={position:"relative",top:"-125px",display:"block",background:"none !important",border:"none !important",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box"},e.display="block",e.height="250px",e.padding="1px 0 5px",e.width="auto",e)},o.a.createElement("div",{style:{position:"absolute",left:"50%",transform:"translate(-50%,0)"}},o.a.createElement("div",null,T)))),o.a.createElement(v.a,null,o.a.createElement(E.a,{className:"persoon"},o.a.createElement(N.a,null,o.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:r.html}})),O,C,o.a.createElement(b.a,null,o.a.createElement(x.a,{postNode:r})))),o.a.createElement(S.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(o.a.Component)),z="1222498277";t.default=T},159:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(181),l=n.n(s),c=n(33),u=(n(160),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.prefix,n=e.tags;return n?o.a.createElement("span",null,t,n.map(function(e,t,n){return o.a.createElement("span",{key:e},o.a.createElement(c.Link,{key:e,to:"/tags/"+l.a.kebabCase(e)},e),t!==n.length-1?", ":"")})):null},t}(i.Component));t.a=u},160:function(e,t,n){},161:function(e,t,n){"use strict";n(157);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(162),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.name,n=e.url;return t&&n?o.a.createElement(s.Link,{to:n},t):null},t}(o.a.Component));t.a=l},162:function(e,t,n){},163:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(164),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=l()(a,n?"nav-opened":"nav-closed");return o.a.createElement("div",{className:r},t)},t}(o.a.Component));t.a=c},164:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"site-wrapper"},e)},t}(o.a.Component));t.a=s},168:function(e,t,n){},169:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return o.a.createElement("footer",{className:"site-footer clearfix"},o.a.createElement("section",{className:"copyright"},o.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),o.a.createElement(function(e){return e.show?o.a.createElement("section",{className:"poweredby"},"Proudly published with ",o.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e}))},t}(i.Component));t.a=s},170:function(e,t,n){},171:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(172),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("main-nav",["overlay","clearfix"],n);return o.a.createElement("nav",{className:a},t)},t}(o.a.Component));t.a=c},172:function(e,t,n){},173:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?o.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},o.a.createElement("img",{src:t,alt:a})):null},t}(i.Component));t.a=l},174:function(e,t,n){},175:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(176),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?o.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},o.a.createElement("span",{className:"word"},"Menu")):null},t}(i.Component));t.a=s},176:function(e,t,n){},177:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=(n(23),n(73)),o=n.n(i),s=n(0),l=n.n(s),c=(n(74),n(33));var u=function(e){var t=[{primaryText:"Home",component:c.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t},p=(n(165),n(166),l.a.Component,function(){return null}),m=function(e){var t=e.primaryText;return l.a.createElement("h3",null,t)},d=function(e){var t=e.primaryText,n=e.component,a=o()(e,["primaryText","component"]);return l.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},f=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(d,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,i=t.subheader,l=t.nestedItems,c=o()(t,["divider","subheader","nestedItems"]);a=r?p:i?m:d;var u=Object.assign({},c,{key:t.key||n});return l&&(u.nestedItems=l.map(e)),Object(s.createElement)(a,u)},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return l.a.createElement("div",null,l.a.createElement("div",{className:"nav"},l.a.createElement("h3",{className:"nav-title"},"Menu"),l.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},l.a.createElement("span",{className:"hidden"},"Close")),l.a.createElement("ul",null,a.map(f))),l.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=h},178:function(e,t,n){"use strict";var a=n(9);t.__esModule=!0,t.default=void 0;var r,i=a(n(6)),o=a(n(34)),s=a(n(73)),l=a(n(51)),c=a(n(0)),u=a(n(1)),p=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m={},d=function(e){var t=p(e),n=t.fluid?t.fluid.src:t.fixed.src;return!!m[n]||(m[n]=!0,!1)},f=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){f.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),f.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var n=e.style,a=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:a,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var v=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,r=!0,i=!1,s=t.fadeIn,l=d(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!1,i=!0),"undefined"==typeof window&&(a=!1,r=!1),t.critical&&(a=!0,r=!1,i=!1);var u=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:a,imgLoaded:r,IOSupported:i,fadeIn:s,hasNoScript:u,seenBefore:l},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},n.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=p(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,m=void 0===u?{}:u,d=e.placeholderClassName,f=e.fluid,h=e.fixed,v=e.backgroundColor,E=e.Tag,b="boolean"==typeof v?"lightgray":v,N=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,m),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),w={title:t,alt:this.state.isVisible?"":n,style:N,className:d};if(f){var x=f;return c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(y,(0,l.default)({src:x.base64},w)),x.tracedSVG&&c.default.createElement(y,(0,l.default)({src:x.tracedSVG},w)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(y,{alt:n,title:t,src:x.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t},x))}}))}if(h){var k=h,C=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete C.display,c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:C,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&c.default.createElement(y,(0,l.default)({src:k.base64},w)),k.tracedSVG&&c.default.createElement(y,(0,l.default)({src:k.tracedSVG},w)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),c.default.createElement(y,{alt:n,title:t,width:k.width,height:k.height,src:k.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t,width:k.width,height:k.height},k))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),b=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});v.propTypes={resolutions:E,sizes:b,fixed:E,fluid:b,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,Tag:u.default.string};var N=v;t.default=N},179:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=l()("content",this.props.className);return o.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(o.a.Component));t.a=c},180:function(e,t,n){},186:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(158),l=n.n(s),c=n(156),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,s=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,n=p.cover,a=u.a.siteUrl+u.a.pathPrefix+s}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;var m="/"===u.a.pathPrefix?"":u.a.pathPrefix;n=u.a.siteUrl+m+n;var d=u.a.siteUrl+u.a.pathPrefix,f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&f.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),o.a.createElement("meta",{property:"og:url",content:c?a:d}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=p},194:function(e,t,n){"use strict";n(197)("fixed",function(e){return function(){return e(this,"tt","","")}})},197:function(e,t,n){var a=n(24),r=n(26),i=n(25),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},213:function(e,t,n){"use strict";n(194);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(214),n(178)),l=n.n(s),c=n(33),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){console.log(JSON.stringify(this.props.links)),console.log(JSON.stringify(this.props.captions));var e=_.zip(this.props.images,this.props.links,this.props.captions);return o.a.createElement("div",null,o.a.createElement("div",{className:"flex-container-gallery"},_.map(e,function(e){return o.a.createElement(c.Link,{key:e[1],to:e[1]},o.a.createElement(l.a,{className:"flex-item-gallery",fixed:e[0].fixed}," "),o.a.createElement("span",null,e[2]))})))},t}(i.Component);t.a=u},214:function(e,t,n){},226:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(227),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("footer",{className:"post-footer"},e)},t}(o.a.Component));t.a=s},227:function(e,t,n){},228:function(e,t,n){"use strict";n(157);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(229),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.author,t=e.name,n=e.image,a=e.url;return n?o.a.createElement("figure",{className:"author-image"},o.a.createElement("a",{className:"img",href:a,style:{backgroundImage:'url("'+n+'")'}},o.a.createElement("span",{className:"hidden"},t+"'s Picture"))):null},t}(o.a.Component));t.a=s},229:function(e,t,n){},230:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(231),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("author-meta",n);return o.a.createElement("div",{className:a},t)},t}(o.a.Component));t.a=c},231:function(e,t,n){},232:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location;return e?o.a.createElement("span",{className:"author-location icon-location"},e):null},t}(o.a.Component);t.a=s},233:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.url;return e?o.a.createElement("span",{className:"author-link icon-link"},o.a.createElement("a",{href:e},e)):null},t}(o.a.Component);t.a=s},234:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(34),o=n.n(i),s=n(0),l=n.n(s),c=n(265),u=n.n(c),p=n(156),m=n.n(p),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(o()(o()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(o()(o()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!m.a.disqusShortname)return null;var t=e.frontmatter,n=m.a.siteUrl+m.a.pathPrefix+e.fields.slug;return l.a.createElement(u.a,{shortname:m.a.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(s.Component);t.a=d},257:function(e,t,n){"use strict";n(157);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(258),n(230)),c=n(232),u=n(233),p=n(161),m=function(e){var t=e.bio,n=e.morePostsUrl;return t?o.a.createElement("p",null,t):o.a.createElement("p",null,"Read ",o.a.createElement(s.Link,{to:n},"more posts")," by this author.")},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.prefix,t=this.props.author,n=t.uid,a=t.name,r=t.image,i=t.bio,s=t.url,d=t.location,f=e?e+"/"+n:n;return r?o.a.createElement("section",{className:"author"},o.a.createElement("h4",null,o.a.createElement(p.a,{url:f,name:a})),o.a.createElement(m,{bio:i,morePostsUrl:f}),o.a.createElement(l.a,null,o.a.createElement(c.a,{location:d}),o.a.createElement(u.a,{url:s}))):null},t}(o.a.Component);t.a=d},258:function(e,t,n){},259:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(289),l=(n(260),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n=this.props,a=n.postNode,r=n.postPath,i=n.config,l=a.frontmatter,c=(e=i.siteUrl,t=i.pathPrefix,e+("/"===t?"":t)+r),u=s.ShareButtons.FacebookShareButton,p=s.ShareButtons.GooglePlusShareButton,m=s.ShareButtons.TwitterShareButton;return o.a.createElement("section",{className:"share"},o.a.createElement("h4",null,"Share this post"),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement(m,{url:c,title:l.title},o.a.createElement("a",{className:"icon-twitter",style:{fontSize:"1.4em"}},o.a.createElement("span",{className:"hidden"},"Twitter"))),o.a.createElement(u,{url:c,quote:l.title},o.a.createElement("a",{className:"icon-facebook",style:{fontSize:"1.4em"}},o.a.createElement("span",{className:"hidden"},"Facebook"))),o.a.createElement(p,{url:c},o.a.createElement("a",{className:"icon-google-plus",style:{fontSize:"1.4em"}},o.a.createElement("span",{className:"hidden"},"Google+")))))},t}(o.a.Component));t.a=l},260:function(e,t,n){},261:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(262),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.subscribers,n=e.blog;return t&&n?o.a.createElement("section",{className:"gh-subscribe"},o.a.createElement("h3",{className:"gh-subscribe-title"},"Subscribe to ",n.title),o.a.createElement("p",null,"Get the latest posts delivered right to your inbox."),o.a.createElement("span",{className:"gh-subscribe-rss"},"or subscribe"," ",o.a.createElement("a",{href:"http://cloud.feedly.com/#subscription/feed/{blog.url}/rss/"},"via RSS")," ","with Feedly!")):null},t}(o.a.Component));t.a=s},262:function(e,t,n){},263:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=n(33),u=(n(264),function(e){var t=e.post;if(t){var n=t.path,a=t.cover,r=t.title,i=t.excerpt,s=a?{backgroundImage:"url("+a}:null,u=l()("read-next-story",e.className,{"no-cover":!a});return o.a.createElement(c.Link,{className:u,style:s,to:n},o.a.createElement("section",{className:"post"},o.a.createElement("h2",null,r),o.a.createElement("p",null,i,"…")))}return null}),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.next,n=e.prev;return o.a.createElement("aside",{className:"read-next"},o.a.createElement(u,{post:t}),o.a.createElement(u,{className:"prev",post:n}))},t}(i.Component);t.a=p},264:function(e,t,n){},266:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(267),n(178)),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.fluid,a=l()("main-header",this.props.className,{"no-cover":!n}),r=o.a.createElement("div",null);return null!=n&&(r=o.a.createElement(u.a,{fluid:n,style:{maxHeight:"400px"}})),o.a.createElement("header",{className:a},r,t)},t}(o.a.Component);t.a=p},267:function(e,t,n){},298:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(299),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("section",{className:"page-doc-section"},this.props.children)},t}(i.Component));t.a=s},299:function(e,t,n){},300:function(e,t,n){},301:function(e,t,n){},302:function(e,t,n){},303:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(155),n(10)),l=n.n(s),c=(n(300),n(194),n(301),n(178)),u=n.n(c),p=function(e){var t=e.person;if(t){var n=null;t.voorgrond&&(n=t.voorgrond);var a=t.person,r=t.slug,i=t.info;console.log(i),console.log(r);var s="geen informatie";if(i?s=i.voornaam+" "+i.achternaam:a&&(s=a),n)return o.a.createElement(l.a,{className:"flex-container",to:r},o.a.createElement(u.a,{className:"flex-item-gadget-photo",fixed:n.fixed}," "),o.a.createElement("div",{className:"flex-item-gadget"}," ",i.voornaam," ",i.achternaam," "),o.a.createElement("div",{className:"flex-item-gadget"}," ",i.geboren," "))}return o.a.createElement("div",{className:"flex-container"},o.a.createElement("div",{className:"flex-item-gadget",style:{height:"255px"}}),o.a.createElement("div",{className:"flex-item-gadget"},s),o.a.createElement("div",{className:"flex-item-gadget"}," ","?"," "))};i.Component}}]);
//# sourceMappingURL=component---src-templates-person-jsx-484018216405d1d00f04.js.map