(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return h});var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(162),c=n.n(i),u=n(188),p=n(157),l=n.n(p),m=n(206),f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.pageContext.category,e=this.props.data.allMarkdownRemark.edges,n=this.props.data.authors.edges;return s.a.createElement(m.a,{location:this.props.location},s.a.createElement("div",{className:"category-container"},s.a.createElement(c.a,{title:'Posts in category "'+t+'" | '+l.a.siteTitle}),s.a.createElement(u.a,{postEdges:e,postAuthors:n})))},e}(s.a.Component),h="1117444175";e.default=f},156:function(t,e,n){var a=n(27).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},160:function(t,e,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=(n(161),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return s.a.createElement("header",{className:"post-header"},t)},e}(s.a.Component));e.a=i},161:function(t,e,n){},163:function(t,e,n){"use strict";var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(159),c=n.n(i),u=n(33),p=(n(171),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.prefix,n=t.tags;return n?s.a.createElement("span",null,e,n.map(function(t,e,n){return s.a.createElement("span",{key:t},s.a.createElement(u.Link,{key:t,to:"/tags/"+c.a.kebabCase(t)},t),e!==n.length-1?", ":"")})):null},e}(o.Component));e.a=p},171:function(t,e,n){},172:function(t,e,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(33),c=(n(173),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.name,n=t.url;return e&&n?s.a.createElement(i.Link,{to:n},e):null},e}(s.a.Component));e.a=c},173:function(t,e,n){},183:function(t,e,n){},184:function(t,e,n){},188:function(t,e,n){"use strict";n(156);var a=n(6),r=n.n(a),o=n(0),s=n.n(o),i=n(33),c=(n(183),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.avatar,n=t.name;return e&&n?s.a.createElement("img",{className:"author-thumb",src:e,alt:n,"data-pin-nopin":"true"}):null},e}(s.a.Component)),u=n(163),p=n(157),l=n.n(p),m=n(172),f=n(194),h=n(160),d=n(195),E=n(196),g=(n(184),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e,n=(t=this.props.postEdges,e=this.props.postAuthors,t.map(function(t){return{path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,author:E.a.getAuthor(e,t.node.frontmatter.author,l.a.blogAuthorId),excerpt:t.node.excerpt,timeToRead:t.node.timeToRead}}));return s.a.createElement("div",null,n.map(function(t){var e=t.title,n=t.path,a=t.excerpt,r=t.author,o=t.tags,p=t.date,l=t.post_class?t.post_class:"post";return s.a.createElement(f.a,{className:l,key:e},s.a.createElement(h.a,null,s.a.createElement("h2",{className:"post-title"},s.a.createElement(i.Link,{to:n},e))),s.a.createElement("section",{className:"post-excerpt"},s.a.createElement("p",null,a," ",s.a.createElement(i.Link,{className:"read-more",to:n},"»"))),s.a.createElement("footer",{className:"post-meta"},s.a.createElement(c,{avatar:r.image,name:r.name}),s.a.createElement(m.a,{url:"/author/"+r.uid,name:r.name}),s.a.createElement(u.a,{prefix:" on ",tags:o}),s.a.createElement(d.a,{date:p})))}))},e}(s.a.Component));e.a=g}}]);
//# sourceMappingURL=component---src-templates-category-jsx-80edc2ad73cd266fbd2a.js.map