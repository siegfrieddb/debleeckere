(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{154:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=a(158),s=a.n(i),p=a(172),c=a(157),u=a.n(c),m=(a(291),a(165)),d=(a(166),a(167)),h=a(162),g=a(168),f=a(163),E=a(173),v=a(189),y=a(191),b=(a(192),a(221),a(399),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return l.a.createElement("div",{className:"page-title-container-2"},l.a.createElement("h1",{className:"page-title-2"},e))},t}(l.a.Component)),k=a(235),x=a(314),N=a(164),C=a(193),I=a(237),S=a(201),O=a(160),w=a.n(O),P=a(209),M=a(315),z=a(159),F=a.n(z);a(316);a.d(t,"pageQuery",function(){return A});var B=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={menuOpen:!1},t.handleOnClick=function(e){e.stopPropagation(),t.state.menuOpen?t.closeMenu():t.openMenu()},t.handleOnClose=function(e){e.stopPropagation(),t.closeMenu()},t.openMenu=function(){t.setState({menuOpen:!0})},t.closeMenu=function(){t.setState({menuOpen:!1})},t}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=(t.location,t.data,this.props.pageContext),n=a.slug,r=(a.vader,a.moeder,a.voorgrond,a.achtergrond,this.props.data.markdownRemark),o=r.frontmatter,i=(o.cover,o.voornaam),c=o.achternaam,O=(o.geboorte,o.author),z=(C.a.getAuthor(this.props.data.authors.edges,O,u.a.blogAuthorId),""),B="";this.props.data.related&&(z=l.a.createElement(x.a,null,l.a.createElement("h1",null,"Gerelateerd"),l.a.createElement(P.a,{images:F.a.map(this.props.data.related.edges,function(e){return e.node.childImageSharp}),links:F.a.map(this.props.data.related.edges,function(e){return e.node.relativePath.slice(0,-9)}),captions:this.props.pageContext.related_caption}))),this.props.data.subsection&&(B=l.a.createElement(x.a,null,l.a.createElement("h1",null,"Verhalen over ",i),l.a.createElement(M.a,{images:F.a.map(this.props.data.subsection.edges,function(e){return e.node.childImageSharp}),links:F.a.map(this.props.data.subsection.edges,function(e){return e.node.relativePath.slice(0,-4)}),captions:F.a.map(this.props.data.subsection.edges,function(e){var t=e.node.relativePath.indexOf("/mozaik/");return e.node.relativePath.slice(t+8,e.node.relativePath.length-4)})})));var A=l.a.createElement("div",null);if(null!=this.props.data.foreImg){var G=250*this.props.data.foreImg.edges[0].node.childImageSharp.fluid.aspectRatio;A=l.a.createElement(w.a,{style:{height:"250px",width:G},fluid:this.props.data.foreImg.edges[0].node.childImageSharp.fluid}," ")}var R=null;return R=null!=this.props.data.backImg?this.props.data.backImg.edges[0].node.childImageSharp:this.props.data.defaultImg.childImageSharp,l.a.createElement(S.a,{location:this.props.location},l.a.createElement(h.a,{className:"post-template",isOpen:this.state.menuOpen},l.a.createElement(s.a,null,l.a.createElement("title",null,"Title  ",i+" "+c)),l.a.createElement(p.a,{postPath:n,postNode:r,postSEO:!0}),l.a.createElement(g.a,{config:u.a,onClose:this.handleOnClose}),l.a.createElement(f.a,null,l.a.createElement(v.a,{cover:R,fillRatioHeight:.4,style:{backgroundColor:"#FFFFFF"}},l.a.createElement(b,{text:i+" "+c}," "),l.a.createElement(m.a,null,l.a.createElement(d.a,{navigation:u.a.siteNavigation,onClick:this.handleOnClick})),l.a.createElement("div",{style:(e={position:"relative",top:"-125px",display:"block",background:"none !important",border:"none !important",WebkitBoxSizing:"border-box",MozBoxSizing:"border-box",boxSizing:"border-box"},e.display="block",e.height="125px",e.padding="",e.width="auto",e)},l.a.createElement("div",{style:{position:"absolute",left:"50%",transform:"translate(-50%,0)"}},l.a.createElement("div",null,A)))),l.a.createElement(E.a,null,l.a.createElement(y.a,{className:"persoon"},l.a.createElement(x.a,null,l.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:r.html}})),B,z,l.a.createElement(k.a,null,l.a.createElement(I.a,{postNode:r})))),l.a.createElement(N.a,{copyright:u.a.copyright,promoteGatsby:u.a.promoteGatsby}))))},t}(l.a.Component),A="2513471474";t.default=B},209:function(e,t,a){"use strict";a(190);var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=(a(204),a(160)),s=a.n(i),p=a(33),c=a(159),u=a.n(c),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u.a.zip(this.props.images,this.props.links,this.props.captions);return e=u.a.sortBy(e,1),e=u.a.filter(e,function(e){return e[0]&&e[1]}),l.a.createElement("div",null,l.a.createElement("div",{className:"flex-container-gallery"},u.a.map(e,function(e){return l.a.createElement(p.Link,{className:"flex-item-gallery",key:e[1],to:e[1]},l.a.createElement(s.a,{fixed:e[0].fixed}," "),l.a.createElement("span",{className:"flex-item-gallery-span"},e[2]))})))},t}(o.Component);t.a=m},221:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=(a(222),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.text;return"Bakermat"==e?l.a.createElement("h1",{className:"page-title page-title-collored"},e):e?l.a.createElement("h1",{className:"page-title"},e):null},t}(l.a.Component));t.a=i},222:function(e,t,a){},291:function(e,t,a){"use strict";var n=a(6),r=a.n(n),o=a(0),l=a.n(o),i=a(155),s=a.n(i),p=(a(292),a(160)),c=a.n(p),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.fluid,n=s()("main-header",this.props.className,{"no-cover":!a}),r=l.a.createElement("div",null);return null!=a&&(r=l.a.createElement(c.a,{fluid:a,className:"main-header-img"})),l.a.createElement("header",{className:n},r,t)},t}(l.a.Component);t.a=u},292:function(e,t,a){},399:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-person-jsx-01516e4f3f104f998236.js.map