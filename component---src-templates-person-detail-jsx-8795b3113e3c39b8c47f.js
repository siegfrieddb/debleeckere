(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return j});var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(162),l=n.n(s),c=n(185),u=n(157),p=n.n(u),d=n(190),f=n(167),m=(n(168),n(169)),h=n(164),g=n(170),y=n(165),v=n(182),E=(n(160),n(194)),b=(n(195),n(246)),w=n(291),S=n(166),N=(n(196),n(248)),k=n(206),C=(n(158),n(33)),O=n(295),x=n(159),L=n.n(x),I=(n(296),function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,n="",a="";this.props.data.person.frontmatter&&(n=this.props.data.person.frontmatter.voornaam,a=this.props.data.person.frontmatter.achternaam);var r=e.indexOf("/mozaik/"),i=e.slice(r+8).substring(2),s=this.props.data.moza;s||(s=this.props.data.missingImg);var u="";return this.props.data.subsection&&(u=o.a.createElement(w.a,null,o.a.createElement("h1",null,"Andere verhalen over ",n),o.a.createElement(O.a,{images:L.a.map(this.props.data.subsection.edges,function(e){return e.node.childImageSharp}),links:L.a.map(this.props.data.subsection.edges,function(e){return e.node.relativePath.slice(0,-4)}),captions:L.a.map(this.props.data.subsection.edges,function(e){var t=e.node.relativePath.indexOf("/mozaik/");return e.node.relativePath.slice(t+8,e.node.relativePath.length-4)})}))),o.a.createElement(k.a,{location:this.props.location},o.a.createElement(h.a,{className:"post-template",isOpen:this.state.menuOpen},o.a.createElement(l.a,null,o.a.createElement("title",null,n+" "+a)),o.a.createElement(c.a,{postPath:e,postNode:t,postSEO:!0}),o.a.createElement(g.a,{config:p.a,onClose:this.handleOnClose}),o.a.createElement(y.a,null,o.a.createElement(d.a,{className:"post-head",noscale:!0,fillHeight:250,style:{backgroundColor:"#FFFFFF"},cover:s.childImageSharp},o.a.createElement("h1",null," ",i," "),o.a.createElement(f.a,null,o.a.createElement(m.a,{navigation:p.a.siteNavigation,onClick:this.handleOnClick}))),o.a.createElement(v.a,null,o.a.createElement(E.a,{className:"persoon"},o.a.createElement(w.a,null,o.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:t.html}})),u,o.a.createElement(w.a,null,o.a.createElement("section",{className:"post-content"},o.a.createElement("p",null,"Terug naar hoofdpagina van ",o.a.createElement(C.Link,{to:this.props.data.person.frontmatter.persoon+"/"},n," ",a)))),o.a.createElement(b.a,null,o.a.createElement(N.a,{postNode:t})))),o.a.createElement(S.a,{copyright:p.a.copyright,promoteGatsby:p.a.promoteGatsby}))))},t}(o.a.Component)),j="3565007798";t.default=I},155:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===i)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},158:function(e,t,n){"use strict";var a=n(9);t.__esModule=!0,t.default=void 0;var r,i=a(n(6)),o=a(n(34)),s=a(n(73)),l=a(n(52)),c=a(n(0)),u=a(n(1)),p=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},d={},f=function(e){var t=p(e),n=t.fluid?t.fluid.src:t.fixed.src;return!!d[n]||(d[n]=!0,!1)},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+n+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+n+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+a+r+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var n=e.style,a=e.onLoad,r=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:a,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var v=function(e){function t(t){var n;n=e.call(this,t)||this;var a=!0,r=!0,i=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,r=!1,i=!0),"undefined"==typeof window&&(a=!1,r=!1),t.critical&&(a=!0,r=!1,i=!1);var u=!(n.props.critical&&!n.props.fadeIn);return n.state={isVisible:a,imgLoaded:r,IOSupported:i,fadeIn:s,hasNoScript:u,seenBefore:l},n.imageRef=c.default.createRef(),n.handleImageLoaded=n.handleImageLoaded.bind((0,o.default)((0,o.default)(n))),n.handleRef=n.handleRef.bind((0,o.default)((0,o.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},n.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},n.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},n.render=function(){var e=p(this.props),t=e.title,n=e.alt,a=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,d=void 0===u?{}:u,f=e.placeholderClassName,m=e.fluid,h=e.fixed,v=e.backgroundColor,E=e.Tag,b="boolean"==typeof v?"lightgray":v,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,d),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),N={title:t,alt:this.state.isVisible?"":n,style:w,className:f};if(m){var k=m;return c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(k.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/k.aspectRatio+"%"}}),k.base64&&c.default.createElement(y,(0,l.default)({src:k.base64},N)),k.tracedSVG&&c.default.createElement(y,(0,l.default)({src:k.tracedSVG},N)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,k.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),c.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),c.default.createElement(y,{alt:n,title:t,src:k.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t},k))}}))}if(h){var C=h,O=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},i);return"inherit"===i.display&&delete O.display,c.default.createElement(E,{className:(a||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(C.srcSet)},C.base64&&c.default.createElement(y,(0,l.default)({src:C.base64},N)),C.tracedSVG&&c.default.createElement(y,(0,l.default)({src:C.tracedSVG},N)),b&&c.default.createElement(E,{title:t,style:{backgroundColor:b,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),this.state.isVisible&&c.default.createElement("picture",null,C.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:C.srcSetWebp,sizes:C.sizes}),c.default.createElement("source",{srcSet:C.srcSet,sizes:C.sizes}),c.default.createElement(y,{alt:n,title:t,width:C.width,height:C.height,src:C.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:n,title:t,width:C.width,height:C.height},C))}}))}return null},t}(c.default.Component);v.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),b=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});v.propTypes={resolutions:E,sizes:b,fixed:E,fluid:b,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,Tag:u.default.string};var w=v;t.default=w},160:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(161),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("header",{className:"post-header"},e)},t}(o.a.Component));t.a=s},161:function(e,t,n){},164:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(174),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.isOpen,a=e.className,r=l()(a,n?"nav-opened":"nav-closed");return o.a.createElement("div",{className:r},t)},t}(o.a.Component));t.a=c},165:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(177),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"site-wrapper"},e)},t}(o.a.Component));t.a=s},166:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(178),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.promoteGatsby,t=this.props.copyright,n=t.label,a=t.url,r=t.year;return o.a.createElement("div",null,o.a.createElement("div",{className:"menu-bar"},o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\familie"},"Familie")),o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\bakermat"},"Bakermat")),o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\documenten"},"Documenten")),o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\onderzoek"},"Onderzoek")),o.a.createElement("span",null,o.a.createElement(s.Link,{to:".\\contact"},"Contact"))),o.a.createElement("footer",{className:"site-footer clearfix"},o.a.createElement("section",{className:"copyright"},o.a.createElement("a",{href:a||"/"},n)," ©"," ",r||(new Date).getFullYear()),o.a.createElement(function(e){return e.show?o.a.createElement("section",{className:"poweredby"},"Proudly published with ",o.a.createElement("a",{href:"https://gatsbyjs.org"},"Gatsby")):null},{show:e})))},t}(i.Component));t.a=l},167:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(179),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=l()("main-nav",["overlay","clearfix"],n);return o.a.createElement("nav",{className:a},t)},t}(o.a.Component));t.a=c},168:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(33),l=(n(180),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.logo,n=e.url,a=e.title;return t?o.a.createElement(s.Link,{className:"blog-logo",to:n||"/"},o.a.createElement("img",{src:t,alt:a})):null},t}(i.Component));t.a=l},169:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(181),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.navigation,n=e.onClick;return t&&n?o.a.createElement("a",{className:"menu-button icon-menu",href:"#menu",onClick:n},o.a.createElement("span",{className:"word"},"Menu")):null},t}(i.Component));t.a=s},170:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=(n(23),n(73)),o=n.n(i),s=n(0),l=n.n(s),c=(n(74),n(33));var u=function(e){var t=[{primaryText:"Home",component:c.Link,to:"/"},{divider:!0}];return e.userLinks&&e.userLinks.forEach(function(e){t.push({primaryText:e.label,component:"a",href:e.url})}),t},p=(n(175),n(176),l.a.Component,function(){return null}),d=function(e){var t=e.primaryText;return l.a.createElement("h3",null,t)},f=function(e){var t=e.primaryText,n=e.component,a=o()(e,["primaryText","component"]);return l.a.createElement("li",{className:"nav-opened",role:"presentation"},Object(s.createElement)(n,a,t))},m=function e(t,n){if("string"==typeof t||"number"==typeof t)return Object(s.createElement)(f,{key:t,primaryText:t});if(Object(s.isValidElement)(t))return t;var a,r=t.divider,i=t.subheader,l=t.nestedItems,c=o()(t,["divider","subheader","nestedItems"]);a=r?p:i?d:f;var u=Object.assign({},c,{key:t.key||n});return l&&(u.nestedItems=l.map(e)),Object(s.createElement)(a,u)},h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.config,n=e.onClose,a=u(t);return l.a.createElement("div",null,l.a.createElement("div",{className:"nav"},l.a.createElement("h3",{className:"nav-title"},"Menu"),l.a.createElement("a",{href:"#close",className:"nav-close",onClick:n},l.a.createElement("span",{className:"hidden"},"Close")),l.a.createElement("ul",null,a.map(m))),l.a.createElement("span",{className:"nav-cover"}))},t}(s.Component);t.a=h},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(186),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=l()("content",this.props.className);return o.a.createElement("main",{id:"content",className:t,role:"main"},e)},t}(o.a.Component));t.a=c},185:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(162),l=n.n(s),c=n(157),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,s=r.postPath,c=r.postSEO;if(c){var p=i.frontmatter;e=p.title,t=p.description?p.description:i.excerpt,n=p.cover,a=u.a.siteUrl+u.a.pathPrefix+s}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;var d="/"===u.a.pathPrefix?"":u.a.pathPrefix;n=u.a.siteUrl+d+n;var f=u.a.siteUrl+u.a.pathPrefix,m=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&m.push([{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}]),o.a.createElement(l.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),o.a.createElement("meta",{property:"og:url",content:c?a:f}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=p},186:function(e,t,n){},187:function(e,t,n){"use strict";n(192)("fixed",function(e){return function(){return e(this,"tt","","")}})},190:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=n(155),l=n.n(s),c=(n(191),n(158)),u=n.n(c),p=function(e){function t(t){var n;if((n=e.call(this,t)||this).state={width:"auto",height:"100hv",top:"0px",left:"0px"},!n.props.cover)throw new Error("no cover specified");return n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))},n.componentWillUnmount=function(){window.removeEventListener("resize",this.updateDimensions.bind(this))},n.updateDimensions=function(){var e,t,n=this.props.cover.fluid.aspectRatio,a=Math.max(document.documentElement.clientWidth,window.innerWidth||0),r=Math.max(document.documentElement.clientHeight,window.innerHeight||0);this.props.fillRatioHeight?r*=this.props.fillRatioHeight:this.props.fillHeight?r=this.props.fillHeight:a<=900&&(r=a/n),this.props.noscale?a/r>n?t=(e=r)*n:(t=a,e=a/n):(e=r,(t=r*n)>a&&(t=a),t=a);var i=(r-e)/2,o=(a-t)/2;(this.props.fillRatioHeight||this.props.fillHeight)&&(i=0),this.setState({width:t,height:e,top:i,left:o})},n.render=function(){var e=this.props,t=e.children,n=e.cover,a=l()("main-header",this.props.className,{"no-cover":!n,fillHeight:this.props.fillHeight||this.props.fillRatioHeight});return o.a.createElement("div",{className:a,style:this.props.style},o.a.createElement(u.a,{style:{overflow:"hidden",height:this.state.height,width:this.state.width,left:this.state.left,top:this.state.top},fluid:this.props.cover.fluid}),t)},t}(o.a.Component);t.a=p},191:function(e,t,n){},192:function(e,t,n){var a=n(24),r=n(26),i=n(25),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},193:function(e,t,n){},246:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(270),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("footer",{className:"post-footer"},e)},t}(o.a.Component));t.a=s},248:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(34),o=n.n(i),s=n(0),l=n.n(s),c=n(287),u=n.n(c),p=n(157),d=n.n(p),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(o()(o()(n))),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(o()(o()(n))),n}r()(t,e);var n=t.prototype;return n.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},n.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!"}),this.setState({toasts:e})},n.render=function(){var e=this.props.postNode;if(!d.a.disqusShortname)return null;var t=e.frontmatter,n=d.a.siteUrl+d.a.pathPrefix+e.fields.slug;return l.a.createElement(u.a,{shortname:d.a.disqusShortname,identifier:t.title,title:t.title,url:n,category_id:t.category_id,onNewComment:this.notifyAboutComment})},t}(s.Component);t.a=f},270:function(e,t,n){},287:function(e,t,n){"use strict";e.exports=n(288)},288:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=s(n(0)),o=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],c=!1;function u(e,t){var n=t.onNewComment,a=t.language,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var i in r)e.page[i]=r[i];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),r(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce(function(t,n){return l.some(function(e){return e===n})?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))},{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!c){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),c=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};l.forEach(function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])}),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){u(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){u(this,t)},this.addDisqusScript())}}]),t}();p.displayName="DisqusThread",p.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},p.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=p},291:function(e,t,n){"use strict";var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(292),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("section",{className:"page-doc-section"},this.props.children)},t}(i.Component));t.a=s},292:function(e,t,n){},295:function(e,t,n){"use strict";n(187);var a=n(6),r=n.n(a),i=n(0),o=n.n(i),s=(n(193),n(158)),l=n.n(s),c=n(33),u=n(159),p=n.n(u),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=p.a.zip(this.props.images,this.props.links,this.props.captions);return e=p.a.sortBy(e,2),e=p.a.map(e,function(e){return[e[0],e[1],e[2].substring(2)]}),o.a.createElement("div",null,o.a.createElement("div",{className:"flex-container-gallery"},p.a.map(e,function(e){return o.a.createElement(c.Link,{className:"flex-item-gallery",key:e[1],to:e[1]},o.a.createElement(l.a,{fixed:e[0].fixed}," "),o.a.createElement("span",{className:"flex-item-gallery-span"},e[2]))})))},t}(i.Component);t.a=d},296:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-person-detail-jsx-8795b3113e3c39b8c47f.js.map