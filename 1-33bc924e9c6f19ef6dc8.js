(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{157:function(e,t,n){n(74);var a="/",i=[{label:"Familie",url:(a="/debleeckere")+"/familie  ",iconClassName:"fa fa-github"},{label:"Bakermat",url:a+"/bakermat",iconClassName:"fa fa-envelope"},{label:"Onderzoek",url:a+"/onderzoek",iconClassName:"fa fa-envelope"},{label:"Documenten",url:a+"/documenten",iconClassName:"fa fa-twitter"},{label:"Contact",url:a+"/contact",iconClassName:"fa fa-twitter"}];e.exports={blogPostDir:"sample-posts",blogAuthorDir:"sample-authors",personDir:"persons",blogAuthorId:"sylvain",siteTitle:"De Bleeckere",siteTitleAlt:"Familienaam De Bleeckere Site",siteLogo:"images/debleeckere-logo.png",siteUrl:" https://siegfrieddb.github.io",pathPrefix:a,siteDescription:"Een site over de familienaam De Bleeckere.",siteCover:"/images/debleeckere.jpg",siteNavigation:!0,siteRss:"/rss.xml",siteRssAuthor:"De Bleeckere RSS",sitePaginationLimit:10,googleAnalyticsID:"UA-TODO-1",siteSocialUrls:[NaN,"https://twitter.com/gatsbyjs","mailto:gatsbyjs@example.com"],postDefaultCategoryID:"Document",userLinks:i,copyright:{label:"De Bleeckere Site"},themeColor:"#FFFDEE",backgroundColor:"#9ACCCD",promoteGatsby:!1}},191:function(e,t,n){"use strict";var a=n(6),i=n.n(a),r=n(0),o=n.n(r),s=(n(331),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className;return o.a.createElement("article",{className:n},t)},t}(o.a.Component));t.a=s},192:function(e,t,n){"use strict";var a=n(6),i=n.n(a),r=n(0),o=n.n(r),s=n(332),l=n.n(s),c=(n(333),function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.date;return o.a.createElement("time",{className:"post-date",dateTime:l()(new Date(e)).format("YYYY-MM-DD")},l()(new Date(e)).format("DD MMMM YYYY"))},t}(o.a.Component));t.a=c},193:function(e,t,n){"use strict";n(77);var a=function(e){return function(t){return t.uid===e}},i=function(e){return e.map(function(e){return e.node})},r=function(){function e(){}return e.hasAuthor=function(e,t){var n=i(e);return Boolean(n.find(a(t)))},e.getAuthor=function(e,t,n){var r=i(e);return this.hasAuthor(e,t)?r.find(a(t)):r.find(a(n))},e}();t.a=r},201:function(e,t,n){"use strict";n.d(t,"a",function(){return p});n(339),n(340),n(28);var a=n(6),i=n.n(a),r=n(0),o=n.n(r),s=n(158),l=n.n(s),c=n(157),u=n.n(c),p=(n(343),function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=u.a.pathPrefix?u.a.pathPrefix:"/",n=this.props.location.pathname.replace(t,"").replace("/",""),a="";if(""===n)a="Home";else if("tags/"===n)a="Tags";else if("categories/"===n)a="Categories";else if("about/"===n)a="About";else if(n.includes("posts"))a="Article";else if(n.includes("tags/")){a="Tagged in "+e(n.replace("tags/","").replace("/","").replace("-"," "))}else if(n.includes("categories/")){a=""+e(n.replace("categories/","").replace("/","").replace("-"," "))}return a},n.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(l.a,null,o.a.createElement("title",null,u.a.siteTitle+" |  "+this.getLocalTitle()),o.a.createElement("meta",{name:"description",content:u.a.siteDescription}),o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),e)},t}(o.a.Component))},331:function(e,t,n){},333:function(e,t,n){},343:function(e,t,n){}}]);
//# sourceMappingURL=1-33bc924e9c6f19ef6dc8.js.map