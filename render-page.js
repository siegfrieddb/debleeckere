(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/library/fn/json/stringify"), require("core-js/library/fn/object/assign"), require("core-js/library/fn/object/create"), require("core-js/library/fn/object/define-property"), require("core-js/library/fn/object/get-prototype-of"), require("core-js/library/fn/object/keys"), require("core-js/library/fn/object/set-prototype-of"), require("core-js/library/fn/symbol"), require("core-js/library/fn/symbol/iterator"), require("core-js/modules/es6.array.find"), require("core-js/modules/es6.array.find-index"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.fixed"), require("core-js/modules/es6.string.includes"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es7.array.includes"), require("core-js/modules/web.dom.iterable"), require("debug"), require("fs"), require("lodash"), require("minimatch"), require("path"), require("pify"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/library/fn/json/stringify", "core-js/library/fn/object/assign", "core-js/library/fn/object/create", "core-js/library/fn/object/define-property", "core-js/library/fn/object/get-prototype-of", "core-js/library/fn/object/keys", "core-js/library/fn/object/set-prototype-of", "core-js/library/fn/symbol", "core-js/library/fn/symbol/iterator", "core-js/modules/es6.array.find", "core-js/modules/es6.array.find-index", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.replace", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.fixed", "core-js/modules/es6.string.includes", "core-js/modules/es6.string.iterator", "core-js/modules/es7.array.includes", "core-js/modules/web.dom.iterable", "debug", "fs", "lodash", "minimatch", "path", "pify", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/library/fn/json/stringify"), require("core-js/library/fn/object/assign"), require("core-js/library/fn/object/create"), require("core-js/library/fn/object/define-property"), require("core-js/library/fn/object/get-prototype-of"), require("core-js/library/fn/object/keys"), require("core-js/library/fn/object/set-prototype-of"), require("core-js/library/fn/symbol"), require("core-js/library/fn/symbol/iterator"), require("core-js/modules/es6.array.find"), require("core-js/modules/es6.array.find-index"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.replace"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.fixed"), require("core-js/modules/es6.string.includes"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/es7.array.includes"), require("core-js/modules/web.dom.iterable"), require("debug"), require("fs"), require("lodash"), require("minimatch"), require("path"), require("pify"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/library/fn/json/stringify"], root["core-js/library/fn/object/assign"], root["core-js/library/fn/object/create"], root["core-js/library/fn/object/define-property"], root["core-js/library/fn/object/get-prototype-of"], root["core-js/library/fn/object/keys"], root["core-js/library/fn/object/set-prototype-of"], root["core-js/library/fn/symbol"], root["core-js/library/fn/symbol/iterator"], root["core-js/modules/es6.array.find"], root["core-js/modules/es6.array.find-index"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.replace"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.fixed"], root["core-js/modules/es6.string.includes"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/es7.array.includes"], root["core-js/modules/web.dom.iterable"], root["debug"], root["fs"], root["lodash"], root["minimatch"], root["path"], root["pify"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_json_stringify__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_create__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_define_property__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_get_prototype_of__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_keys__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_set_prototype_of__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_symbol__, __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_symbol_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_find__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_find_index__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_fixed__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_includes__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es7_array_includes__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_debug__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_minimatch__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_pify__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-remark-autolink-headers/gatsby-ssr */ "./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr */ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "trackingId": "UA-92709510-2"
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-sitemap/gatsby-ssr */ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "De Bleeckere",
    "short_name": "De Bleeckere",
    "description": "Een site over de familienaam De Bleeckere.",
    "start_url": "/",
    "background_color": "#9ACCCD",
    "theme_color": "#FFFDEE",
    "display": "minimal-ui",
    "icons": [{
      "src": "/logos/logo-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "/logos/logo-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }]
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-feed/gatsby-ssr */ "./node_modules/gatsby-plugin-feed/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "query": "\n        {\n          site {\n            siteMetadata {\n              rssMetadata {\n                site_url\n                feed_url\n                title\n                description\n                image_url\n                author\n                copyright\n              }\n            }\n          }\n        }\n      ",
    "feeds": [{
      "query": "\n            {\n              allMarkdownRemark(\n                limit: 1000,\n                sort: { order: DESC, fields: [frontmatter___date] },\n              ) {\n                edges {\n                  node {\n                    excerpt\n                    html\n                    timeToRead\n                    fields { slug }\n                    frontmatter {\n                      title\n                      cover\n                      date\n                      category\n                      tags\n                      author\n                    }\n                  }\n                }\n              }\n            }\n          ",
      "output": "/rss.xml"
    }]
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {Object} $0
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {Object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {Object} pluginOptions
 * @example
 * const Helmet = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {Object} $0
 * @param {Array} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Object} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {object} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {string} $0.pathname Path of page.
 * @example
 * import React from "react"
 * import Layout from "./src/components/Layout"
 *
 * export const wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {object} $0.element The "Root" React Element built by Gatsby.
 * @example
 * import React from "react"
 * import { Provider } from "react-redux"
 *
 * import createStore from "./src/state/createStore"
 * const store = createStore()
 *
 * export const wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-templates-index-jsx","jsonName":"index","path":"/"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1800-albert-de-bleeckere-5da","path":"/1800-albert-de-bleeckere"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1878-octavia-versluys-f22","path":"/1878-octavia-versluys"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1878-octavia-versluys-mozaik-1-getuigen-ca1","path":"/1878-octavia-versluys/mozaik/1-getuigen"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1878-octavia-versluys-mozaik-2-huwelijk-1e4","path":"/1878-octavia-versluys/mozaik/2-huwelijk"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1878-octavia-versluys-mozaik-3-versluys-3a3","path":"/1878-octavia-versluys/mozaik/3-versluys"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1878-octavia-versluys-mozaik-4-weduwe-b69","path":"/1878-octavia-versluys/mozaik/4-weduwe"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1879-vitalis-de-bleeckere-a56","path":"/1879-vitalis-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1879-vitalis-de-bleeckere-mozaik-1-gezin-4db","path":"/1879-vitalis-de-bleeckere/mozaik/1-gezin"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1879-vitalis-de-bleeckere-mozaik-2-ouders-5f5","path":"/1879-vitalis-de-bleeckere/mozaik/2-ouders"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1879-vitalis-de-bleeckere-mozaik-3-broers-c90","path":"/1879-vitalis-de-bleeckere/mozaik/3-broers"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1879-vitalis-de-bleeckere-mozaik-4-overlijden-d01","path":"/1879-vitalis-de-bleeckere/mozaik/4-overlijden"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1879-vitalis-de-bleeckere-mozaik-5-getuigen-5a6","path":"/1879-vitalis-de-bleeckere/mozaik/5-getuigen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1900-godelieve-van-paemele-a1c","path":"/1900-godelieve-van-paemele"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1907-jozef-de-bleeckere-6af","path":"/1907-jozef-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1907-jozef-de-bleeckere-mozaik-kinderen-0b4","path":"/1907-jozef-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1908-maria-de-bleeckere-a7a","path":"/1908-maria-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1908-maria-de-bleeckere-mozaik-kinderen-2de","path":"/1908-maria-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1911-alfons-de-bleeckere-317","path":"/1911-alfons-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1911-alfons-de-bleeckere-mozaik-kinderen-3f0","path":"/1911-alfons-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1911-raymond-de-bleeckere-ff5","path":"/1911-raymond-de-bleeckere"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1912-omer-de-bleeckere-9b1","path":"/1912-omer-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1912-omer-de-bleeckere-mozaik-kinderen-d89","path":"/1912-omer-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1913-irma-de-bleeckere-867","path":"/1913-irma-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1913-irma-de-bleeckere-mozaik-gerardcorvelyn-703","path":"/1913-irma-de-bleeckere/mozaik/gerardcorvelyn"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1913-irma-de-bleeckere-mozaik-huwelijk-f71","path":"/1913-irma-de-bleeckere/mozaik/huwelijk"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1914-berta-de-bleeckere-83a","path":"/1914-berta-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1914-berta-de-bleeckere-mozaik-kinderen-b00","path":"/1914-berta-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1916-maurits-de-bleeckere-3a0","path":"/1916-maurits-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1916-maurits-de-bleeckere-mozaik-kinderen-3fa","path":"/1916-maurits-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1918-albert-de-bleeckere-mozaik-kinderen-83c","path":"/1918-albert-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1920-jules-de-bleeckere-938","path":"/1920-jules-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1920-jules-de-bleeckere-mozaik-kinderen-33a","path":"/1920-jules-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1922-lea-de-bleeckere-48c","path":"/1922-lea-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1922-lea-de-bleeckere-mozaik-kinderen-213","path":"/1922-lea-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1930-roger-van-paemele-9e4","path":"/1930-roger-van-paemele"},{"componentChunkName":"component---src-templates-person-jsx","jsonName":"1933-jozef-de-bleeckere-103","path":"/1933-jozef-de-bleeckere"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"1933-jozef-de-bleeckere-mozaik-kinderen-c72","path":"/1933-jozef-de-bleeckere/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"194-x-godelieve-van-paemele-mozaik-kinderen-70d","path":"/194x-godelieve-van-paemele/mozaik/kinderen"},{"componentChunkName":"component---src-templates-person-detail-jsx","jsonName":"194-x-roger-van-paemele-mozaik-kinderen-c17","path":"/194x-roger-van-paemele/mozaik/kinderen"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"2017-01-01-66f","path":"/2017-01-01"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"2017-01-02-07d","path":"/2017-01-02"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"2017-01-03-bac","path":"/2017-01-03"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"2017-02-03-cf4","path":"/2017-02-03"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"2017-02-04-f8d","path":"/2017-02-04"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"2017-03-17-46c","path":"/2017-03-17"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"2017-03-23-b3c","path":"/2017-03-23"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"2018-10-19-d2f","path":"/2018-10-19"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"archief-vitalis-octavia-857","path":"/archief-vitalis-octavia"},{"componentChunkName":"component---src-templates-author-jsx","jsonName":"author-casper-892","path":"/author/casper/"},{"componentChunkName":"component---src-templates-author-jsx","jsonName":"author-guinevere-79d","path":"/author/guinevere/"},{"componentChunkName":"component---src-templates-author-jsx","jsonName":"author-sylvain-d76","path":"/author/sylvain/"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"bakermat-eerste-wereldoorlog-143","path":"/bakermat-Eerste-Wereldoorlog"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"bakermat-sint-joris-ten-distel-318","path":"/bakermat-Sint-Joris-ten-Distel"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"bakermat-sint-maria-aalter-7a3","path":"/bakermat-Sint-Maria-Aalter"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"bakermat-knesselare-9e0","path":"/bakermat-knesselare"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"bakermat-tweede-wereldoorlog-e17","path":"/bakermat-tweede-wereldoorlog"},{"componentChunkName":"component---src-pages-bakermat-jsx","jsonName":"bakermat-dc2","path":"/bakermat/"},{"componentChunkName":"component---src-templates-post-jsx","jsonName":"big-sample-test-be1","path":"/big-sample-test"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-another-one-47b","path":"/categories/another-one/"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-gatsby-980","path":"/categories/gatsby/"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-moar-1a3","path":"/categories/moar/"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-random-64f","path":"/categories/random/"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-something-505","path":"/categories/something/"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-tech-169","path":"/categories/tech/"},{"componentChunkName":"component---src-templates-category-jsx","jsonName":"categories-test-3-06a","path":"/categories/test-3/"},{"componentChunkName":"component---src-pages-contact-jsx","jsonName":"contact-26a","path":"/contact/"},{"componentChunkName":"component---src-pages-documenten-jsx","jsonName":"documenten-8a1","path":"/documenten/"},{"componentChunkName":"component---src-pages-familie-jsx","jsonName":"familie-757","path":"/familie/"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"officiele-stukken-8ff","path":"/officiele-stukken"},{"componentChunkName":"component---node-modules-gatsby-plugin-offline-app-shell-js","jsonName":"offline-plugin-app-shell-fallback-a30","path":"/offline-plugin-app-shell-fallback/"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"onderzoek-bronnen-577","path":"/onderzoek-bronnen"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"onderzoek-connectie-lapscheure-3e8","path":"/onderzoek-connectie-lapscheure"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"onderzoek-connectie-oudenaerde-156","path":"/onderzoek-connectie-oudenaerde"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"onderzoek-de-bleeckere-de-bleeker-573","path":"/onderzoek-de bleeckere-de bleeker"},{"componentChunkName":"component---src-templates-documenten-jsx","jsonName":"onderzoek-versluys-a77","path":"/onderzoek-versluys"},{"componentChunkName":"component---src-pages-onderzoek-jsx","jsonName":"onderzoek-b2a","path":"/onderzoek/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-another-one-ffb","path":"/tags/another-one/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-cheese-d66","path":"/tags/cheese/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-gatsby-b93","path":"/tags/gatsby/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-huge-691","path":"/tags/huge/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-more-tags-e75","path":"/tags/more-tags/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-no-cover-e70","path":"/tags/no-cover/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-other-076","path":"/tags/other/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-programming-bdd","path":"/tags/programming/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-say-hi-2ff","path":"/tags/say-hi/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-something-2a6","path":"/tags/something/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-stuff-f30","path":"/tags/stuff/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-tag-8aa","path":"/tags/tag/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-tagging-34b","path":"/tags/tagging/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-test-7c5","path":"/tags/test/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-testing-09f","path":"/tags/testing/"},{"componentChunkName":"component---src-templates-tag-jsx","jsonName":"tags-v-2-7fb","path":"/tags/v-2/"}],"dataPaths":{"1800-albert-de-bleeckere-5da":"144/path---1800-albert-de-bleeckere-5-da-bb4-HU8WGT27cgJtOQPVUsI0ZND9i4o","1878-octavia-versluys-f22":"830/path---1878-octavia-versluys-f-22-87c-qe8qtizJhN1ocYt4PQhvRRJnyw","1878-octavia-versluys-mozaik-1-getuigen-ca1":"897/path---1878-octavia-versluys-mozaik-1-getuigen-ca-1-9ce-q2bnxmxMpnrUHGF9iQFzr68BM","1878-octavia-versluys-mozaik-2-huwelijk-1e4":"893/path---1878-octavia-versluys-mozaik-2-huwelijk-1-e-4-4c1-hIqkmWSTjZXh3cUYNKOv0gERDoU","1878-octavia-versluys-mozaik-3-versluys-3a3":"200/path---1878-octavia-versluys-mozaik-3-versluys-3-a-3-cc5-6u5rMYqLRrOHGRk0vFt5jiMgOQ","1878-octavia-versluys-mozaik-4-weduwe-b69":"603/path---1878-octavia-versluys-mozaik-4-weduwe-b-69-961-6AE8tH9wsVMwEsTH5zjCKYeI6mA","1879-vitalis-de-bleeckere-a56":"578/path---1879-vitalis-de-bleeckere-a-56-ce5-aJ6GhLMIR6w9fDIU6mE5m7bB87Q","1879-vitalis-de-bleeckere-mozaik-1-gezin-4db":"76/path---1879-vitalis-de-bleeckere-mozaik-1-gezin-4-db-a25-yFA8l7l9RfTdYW9AeNzOmHENPw","1879-vitalis-de-bleeckere-mozaik-2-ouders-5f5":"831/path---1879-vitalis-de-bleeckere-mozaik-2-ouders-5-f-5-b51-cAN9QjQQpCNy03xpK9n49fPYwo","1879-vitalis-de-bleeckere-mozaik-3-broers-c90":"265/path---1879-vitalis-de-bleeckere-mozaik-3-broers-c-90-53e-zy2RLacTlRDd2OTNb7E9AXOhA","1879-vitalis-de-bleeckere-mozaik-4-overlijden-d01":"944/path---1879-vitalis-de-bleeckere-mozaik-4-overlijden-d-01-06e-6Moxz3jcfdkoj2twKGErpfAuYw","1879-vitalis-de-bleeckere-mozaik-5-getuigen-5a6":"268/path---1879-vitalis-de-bleeckere-mozaik-5-getuigen-5-a-6-1d8-LfE9uTWzxvefahCZ4AQ6Nokpk","1879-vitalis-de-bleeckere-mozaik-broers-d8d":"278/path---1879-vitalis-de-bleeckere-mozaik-broers-d-8-d-9f7-MPKSv7NMdDzgQEfk37bRwj60s4","1879-vitalis-de-bleeckere-mozaik-getuigen-42b":"644/path---1879-vitalis-de-bleeckere-mozaik-getuigen-42-b-913-PCr0RltvvlsSlcVjnLtb9kiafI","1879-vitalis-de-bleeckere-mozaik-gezin-e09":"468/path---1879-vitalis-de-bleeckere-mozaik-gezin-e-09-ca1-kADXffObslYtTgIxPqrEtQdISg","1879-vitalis-de-bleeckere-mozaik-ouders-0a2":"237/path---1879-vitalis-de-bleeckere-mozaik-ouders-0-a-2-90c-TmQVSWGnMRmSASG12EPThJZ4OI","1879-vitalis-de-bleeckere-mozaik-overlijden-2cd":"923/path---1879-vitalis-de-bleeckere-mozaik-overlijden-2-cd-b1d-mHbBBNTT44tZKysNJnqLlwWwY","1900-godelieve-van-paemele-a1c":"24/path---1900-godelieve-van-paemele-a-1-c-857-FD64x3nOzDg0TlfgQC3o1WVUq2A","1907-jozef-de-bleeckere-6af":"797/path---1907-jozef-de-bleeckere-6-af-e82-zuppdCGUt6fyOyMRutIgl4Po","1907-jozef-de-bleeckere-mozaik-kinderen-0b4":"869/path---1907-jozef-de-bleeckere-mozaik-kinderen-0-b-4-42c-52umPfZqQ5LQ5ypvNuecaoakVc","1908-maria-de-bleeckere-a7a":"567/path---1908-maria-de-bleeckere-a-7-a-01b-4Ps2fjU0mHMJr7QANWsWOYJvpeI","1908-maria-de-bleeckere-mozaik-kinderen-2de":"837/path---1908-maria-de-bleeckere-mozaik-kinderen-2-de-eee-jwwsGMrxhin8ubNnapuDgr9YNw","1911-alfons-de-bleeckere-317":"194/path---1911-alfons-de-bleeckere-317-8ef-ltGhEa8SH1rDWU5vmk1f0L8xA","1911-alfons-de-bleeckere-mozaik-kinderen-3f0":"345/path---1911-alfons-de-bleeckere-mozaik-kinderen-3-f-0-543-T4naPftXF4X9Zbbf6clYReb3Rk","1911-raymond-de-bleeckere-ff5":"220/path---1911-raymond-de-bleeckere-ff-5-970-ZOOs3fRzWtT09xEPGJw4JmMvc","1912-omer-de-bleeckere-9b1":"902/path---1912-omer-de-bleeckere-9-b-1-842-mkUBq5vO6zkdnB0p1qDN4CTnPb0","1912-omer-de-bleeckere-mozaik-kinderen-d89":"940/path---1912-omer-de-bleeckere-mozaik-kinderen-d-89-97c-FQzVs3xnFarZBvNzLP8DTIxxw","1913-irma-de-bleeckere-867":"774/path---1913-irma-de-bleeckere-867-08c-qH1QQPsQqJoprLArXhANiuyj64","1913-irma-de-bleeckere-mozaik-gerardcorvelyn-703":"794/path---1913-irma-de-bleeckere-mozaik-gerardcorvelyn-703-dba-LlDrk04mr76zcwD1kc4y9226At4","1913-irma-de-bleeckere-mozaik-huwelijk-f71":"217/path---1913-irma-de-bleeckere-mozaik-huwelijk-f-71-142-V1DzvMEFkSnjmnEArrW97OLH6bg","1914-berta-de-bleeckere-83a":"95/path---1914-berta-de-bleeckere-83-a-3a3-X4jWMgXcyMO8BFjlaIhKaB90rM","1914-berta-de-bleeckere-mozaik-kinderen-b00":"440/path---1914-berta-de-bleeckere-mozaik-kinderen-b-00-725-A3vl1D5thXNxIqtRZmz9YKyGvo","1916-maurits-de-bleeckere-3a0":"95/path---1916-maurits-de-bleeckere-3-a-0-494-nMfxXeOdytHTK7uj8g3Kw9Q14","1916-maurits-de-bleeckere-mozaik-kinderen-3fa":"632/path---1916-maurits-de-bleeckere-mozaik-kinderen-3-fa-3c6-SFAGAQYlsgI0KHRigWl44CJtQ","1918-albert-de-bleeckere-mozaik-kinderen-83c":"545/path---1918-albert-de-bleeckere-mozaik-kinderen-83-c-022-8kNKQD9X9gSHXrMjKs0bGO07Erk","1920-jules-de-bleeckere-938":"99/path---1920-jules-de-bleeckere-938-dc5-MCxFzkewzMwKhFnzBSGgEgfudE","1920-jules-de-bleeckere-mozaik-kinderen-33a":"713/path---1920-jules-de-bleeckere-mozaik-kinderen-33-a-782-PEk0m7tOxvypnL3KuH45H5f7TY","1922-lea-de-bleeckere-48c":"254/path---1922-lea-de-bleeckere-48-c-318-p6kCO5JsnK5ieR1Cm95bRJOaY","1922-lea-de-bleeckere-mozaik-kinderen-213":"849/path---1922-lea-de-bleeckere-mozaik-kinderen-213-f27-rcI86Jc2fEfOdZLQsUXcJtiYk","1930-roger-van-paemele-9e4":"698/path---1930-roger-van-paemele-9-e-4-f79-RvrhB9PgQCv2iIsO3AIujYBRnn4","1933-jozef-de-bleeckere-103":"573/path---1933-jozef-de-bleeckere-103-419-4PbDSTqdo0IzcXr9X8JXXI2jQ","1933-jozef-de-bleeckere-mozaik-kinderen-c72":"316/path---1933-jozef-de-bleeckere-mozaik-kinderen-c-72-775-VJgcZeHIjw5xmjJ5C4HCWiciJjA","1933-simone-de-bleeckere-78c":"200/path---1933-simone-de-bleeckere-78-c-d46-XTl2XqX1loSf1qy0Emq0B8wYJBs","1936-roger-schelstraete-fbb":"346/path---1936-roger-schelstraete-fbb-9d7-N59M9hQPwHYffnpmiMLf5vnk0xY","1936-roger-schelstraete-mozaik-kinderen-f35":"298/path---1936-roger-schelstraete-mozaik-kinderen-f-35-e62-TO0EFNgYjJ0sEuo42af4NvVCRRU","194-x-godelieve-van-paemele-mozaik-kinderen-70d":"494/path---194-x-godelieve-van-paemele-mozaik-kinderen-70-d-207-UftUKAGV1JK1SHbaKfxmQBc","194-x-roger-van-paemele-mozaik-kinderen-c17":"7/path---194-x-roger-van-paemele-mozaik-kinderen-c-17-d4e-tbxbWAUO2YIkDBqlIhQPnYDB5g","1941-gilbert-schelstraete-3ac":"797/path---1941-gilbert-schelstraete-3-ac-d95-zdYJLK76Wm4Q1aZfyl34QpErH4","1941-gilbert-schelstraete-mozaik-kinderen-e51":"450/path---1941-gilbert-schelstraete-mozaik-kinderen-e-51-e6b-RP3FtFC7IJFWLsj1xv0gbGF98g","1943-edgar-de-bleeckere-e10":"842/path---1943-edgar-de-bleeckere-e-10-c99-BCcdLxMz8ZbR8ARUswzYeBzU","1943-edgar-de-bleeckere-mozaik-kinderen-62e":"626/path---1943-edgar-de-bleeckere-mozaik-kinderen-62-e-e0a-e5iIFIBnyazBoOWSrXWU3AcI8M","1943-gerard-de-bleeckere-ec2":"323/path---1943-gerard-de-bleeckere-ec-2-f82-YqRu2MgdaUizjIflundr46Wjk","1943-gerard-de-bleeckere-mozaik-kinderen-6c1":"584/path---1943-gerard-de-bleeckere-mozaik-kinderen-6-c-1-46e-3XIbuSVLpe2uVPnEq05eS7soPPc","1944-goddelieve-de-bleeckere-2fa":"144/path---1944-goddelieve-de-bleeckere-2-fa-8cf-YyWjNSKyMrmQXMWVJatisZU1AyA","1944-godelieve-de-bleeckere-mozaik-kinderen-b61":"68/path---1944-godelieve-de-bleeckere-mozaik-kinderen-b-61-5d2-NUYrry1pdQaLDgtJowyx80a5x4","1944-lucien-de-bleeckere-bda":"270/path---1944-lucien-de-bleeckere-bda-bbc-mWXOe1XwoV196zf8lAeKVXuN2Q","1944-lucien-de-bleeckere-mozaik-kinderen-7b0":"979/path---1944-lucien-de-bleeckere-mozaik-kinderen-7-b-0-cce-lARWkpCq3vmRyUkIG5GEmdWmCE","1945-godelieve-de-bleeckere-be1":"955/path---1945-godelieve-de-bleeckere-be-1-69b-rkzVZnkgKi3ffqzxDl0DzKlbQ0","1945-godelieve-de-bleeckere-mozaik-kinderen-c85":"741/path---1945-godelieve-de-bleeckere-mozaik-kinderen-c-85-595-iHPSErIBAZMykhGnjyYjaFzp9E","1946-emeric-de-bleeckere-mozaik-kinderen-7b8":"556/path---1946-emeric-de-bleeckere-mozaik-kinderen-7-b-8-463-hobqzfXUysBEvL9zP8F0AqL6z4","1946-emric-de-bleeckere-a18":"386/path---1946-emric-de-bleeckere-a-18-3c7-6PsEH8kDVcnXd9HtgAIRP3yMk","1947-francine-de-bleeckere-2c9":"768/path---1947-francine-de-bleeckere-2-c-9-160-jeXWjDwmVtbTwVP6UAuqe51OSM","1947-francine-de-bleeckere-mozaik-kinderen-99a":"861/path---1947-francine-de-bleeckere-mozaik-kinderen-99-a-4f9-daSZErvpHnabYI1KsnQ2UbY6ros","1948-hubert-haeck-ad6":"404/path---1948-hubert-haeck-ad-6-5d9-eByhroGJVorlDSZ1XhCAd41GOU","1948-hubert-haeck-mozaik-kinderen-47d":"842/path---1948-hubert-haeck-mozaik-kinderen-47-d-509-gKrHayjjwd0UR5xXR6fsDl2gv0A","1948-rita-de-bleeckere-524":"120/path---1948-rita-de-bleeckere-524-9c2-ITzq3GZ7X8hLgjb8LeSNJs8ee0k","1948-rita-de-bleeckere-mozaik-kinderen-818":"59/path---1948-rita-de-bleeckere-mozaik-kinderen-818-73f-sMg3dZ37bdWpZHzAps4nLWgrOvg","1950-monique-haeck-e71":"523/path---1950-monique-haeck-e-71-2cc-Vll6H9YILFRJ7E1yMPBlIyCus","1950-monique-haeck-mozaik-kinderen-00a":"955/path---1950-monique-haeck-mozaik-kinderen-00-a-340-yuTt1o2pA3FZSZ5oZ8YRLz3ax8","1950-robert-schelstraete-fc6":"518/path---1950-robert-schelstraete-fc-6-8ce-kghFAejZCNle5oyjOKX35N14","1950-robert-schelstraete-mozaik-kinderen-0c1":"572/path---1950-robert-schelstraete-mozaik-kinderen-0-c-1-1a2-fviKFRKb697LuLMUCQDY7YIQUY","1950-sylvain-de-bleeckere-d5c":"210/path---1950-sylvain-de-bleeckere-d-5-c-99e-ciMkC3GFJbd1nacosqLbId4YXaA","1950-sylvain-de-bleeckere-mozaik-kinderen-163":"111/path---1950-sylvain-de-bleeckere-mozaik-kinderen-163-b59-RwsAasWDlg9ySOYDIzjiGZgfo1A","1950-sylvain-de-bleeckere-mozaik-moeke-873":"40/path---1950-sylvain-de-bleeckere-mozaik-moeke-873-432-arRnyBfB4ZCTRcOJGBlEUUUIc","1952-frans-de-bleeckere-79c":"751/path---1952-frans-de-bleeckere-79-c-d03-0w8JNVF4YwKmzxcRIkPiLBgQA","1952-frans-de-bleeckere-mozaik-kinderen-262":"438/path---1952-frans-de-bleeckere-mozaik-kinderen-262-e8e-yLjUGosZKFYSxTZhy0mi77Jlfko","1956-christiaan-de-bleeckere-95d":"812/path---1956-christiaan-de-bleeckere-95-d-dd4-ni2TTmunE1PXPdkT01eDzTkpc","1956-christiaan-de-bleeckere-mozaik-kinderen-0ef":"602/path---1956-christiaan-de-bleeckere-mozaik-kinderen-0-ef-105-BFTQsIOVYYBXN3c9Rt7GevDo4M","1962-marnix-de-bleeckere-a47":"430/path---1962-marnix-de-bleeckere-a-47-bc7-Q0PG8NXP8RVDL5aoDGdz0LguF8","1962-marnix-de-bleeckere-mozaik-kinderen-647":"997/path---1962-marnix-de-bleeckere-mozaik-kinderen-647-045-pBQxq6COoBp2gHnOK69dGLo6lQc","2017-01-01-66f":"785/path---2017-01-01-66-f-6f0-vqG2tnoBpeouxeiowz6Y8RsE","2017-01-02-07d":"215/path---2017-01-02-07-d-df8-28jOMe9iPNtGN8MSLWZFPqjqx1Y","2017-01-03-bac":"286/path---2017-01-03-bac-402-OUhbu8eKxQfLaVYEe5Yuc6bhXY","2017-02-03-cf4":"484/path---2017-02-03-cf-4-fa8-fD7qNpmS4yYijNF6X2n2QRXm5bQ","2017-02-04-f8d":"878/path---2017-02-04-f-8-d-26f-E2KWz31Rxe2OEVP6ap9odNurBH4","2017-03-17-46c":"699/path---2017-03-17-46-c-a42-4CoNCwFq5KzoyEl3XzxXNf1NCI","2017-03-23-b3c":"483/path---2017-03-23-b-3-c-67b-STeZeU5TWiPEaqI6gafb481oI6w","2018-10-19-d2f":"891/path---2018-10-19-d-2-f-924-9A6XRplavW6JZYDDLAMUxVAp9k","archief-vitalis-octavia-857":"237/path---archief-vitalis-octavia-857-c13-hZdk87VCvaLPFuIetFE1VMnQ80","author-casper-892":"656/path---author-casper-892-e37-hAitxn7IROaz37YSL5pV21qZWCw","author-guinevere-79d":"709/path---author-guinevere-79-d-dfb-6XzMRtcuW6Z6PDVnHZcgBoHBhN4","author-sylvain-d76":"808/path---author-sylvain-d-76-c21-O05yHXh6KXl24NhoM6WnmjZzAIo","bakermat-dc2":"632/path---bakermat-dc-2-a74-Lz0cgF9xM80wiZFVovef1CozVg","bakermat-eerste-wereldoorlog-143":"363/path---bakermat-eerste-wereldoorlog-143-80c-q98kZVmYpxUDr2rOWNi1xD21g0","bakermat-knesselare-9e0":"804/path---bakermat-knesselare-9-e-0-6a1-4DFuMiVEOM472hT6rQlrG79x3U","bakermat-sint-joris-ten-distel-318":"375/path---bakermat-sint-joris-ten-distel-318-2ce-E5BljlzTrDoz0TWGbfgglz6lJG0","bakermat-sint-maria-aalter-7a3":"167/path---bakermat-sint-maria-aalter-7-a-3-0f5-glHQM46909UJPFE70F1SG7FXBI","bakermat-tweede-wereldoorlog-e17":"991/path---bakermat-tweede-wereldoorlog-e-17-6f7-fUIBjKAamOV3rgoDtk103Y2nlhA","big-sample-test-be1":"355/path---big-sample-test-be-1-a84-Mnnty24pA31BK2VeHOi5A2prX8","categories-another-one-47b":"127/path---categories-another-one-47-b-ffb-HAs7WTsOV5tzkxC3bSTGlQy9mGo","categories-gatsby-980":"853/path---categories-gatsby-980-344-yA8vk71LTtuE5sdhYhLgwqlk2GE","categories-moar-1a3":"127/path---categories-moar-1-a-3-ffc-yAsKhKEksKA06nvzQjmS3XK8","categories-random-64f":"824/path---categories-random-64-f-f06-2GhKrdw8xX6V2UOQqftu5povPI","categories-something-505":"296/path---categories-something-505-48b-3haEAkWyMqpSnpi2Nu6OhFdRHU","categories-tech-169":"931/path---categories-tech-169-287-4pvY2fOl9NwTCeqw8yX3LpnJ6o","categories-test-3-06a":"867/path---categories-test-3-06-a-7fe-mHZigfdGRZyPRvuZpME4sJLAwA","contact-26a":"231/path---contact-26-a-cd9-KK9ek5fmDPjc7CojySs5kYFE0AM","dev-404-page-5f9":"920/path---dev-404-page-5-f-9-fab-NZuapzHg3X9TaN1iIixfv1W23E","documenten-8a1":"5/path---documenten-8-a-1-c63-tUsDyEuq6eUgrkiVleBBNOC3E","familie-757":"200/path---familie-757-c40-gu1KeeMWthjZmH17YKJu4mCFo","index":"443/path---index-6a9-G1N9K8jJNhGn3cRpzumIqMXNkZI","officiele-stukken-8ff":"410/path---officiele-stukken-8-ff-6b2-LXQlj1jFTOQy6oCuZKsjnwEGoTQ","offline-plugin-app-shell-fallback-a30":"520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E","onderzoek-b2a":"406/path---onderzoek-b-2-a-c8a-qZA41rimSqBoRoYbNKXJhhhSbE","onderzoek-bronnen-577":"337/path---onderzoek-bronnen-577-eef-zHmyhfOW84NnyCmBVDhso4","onderzoek-connectie-lapscheure-3e8":"714/path---onderzoek-connectie-lapscheure-3-e-8-7d4-Zdp7p9yjUfcla8bUrXtedcQuEs","onderzoek-connectie-oudenaerde-156":"874/path---onderzoek-connectie-oudenaerde-156-d5c-EQ8OrQbYIG6Y4xBIyfNVHXDlodo","onderzoek-de-bleeckere-de-bleeker-573":"464/path---onderzoek-de-bleeckere-de-bleeker-573-f6b-nEOAhjhRryRNKl7bhRnBTrAkzk","onderzoek-versluys-a77":"693/path---onderzoek-versluys-a-77-009-xfxCSdG83VT4bp1Bzs2PG435LU","tags-another-one-ffb":"608/path---tags-another-one-ffb-d27-n8hmssUHXTik61rrzuGdvYdPruc","tags-cheese-d66":"509/path---tags-cheese-d-66-89d-u2SCiYlDtLJT9coBafOY5q2ek","tags-gatsby-b93":"327/path---tags-gatsby-b-93-350-J5KqSzSfD5miuNGuu4f0kFaeShA","tags-huge-691":"71/path---tags-huge-691-a31-lYL4vO7P6RkcnnlaWFh0JfAJY","tags-more-tags-e75":"873/path---tags-more-tags-e-75-dcf-eALYQfaNlEelrcoYr396OnyH4v4","tags-no-cover-e70":"278/path---tags-no-cover-e-70-cca-GjkACUsLE1VWt1nCVFh82cbtrE","tags-other-076":"305/path---tags-other-076-98c-atbb8PWexf01MuggJt7MrVUFQ","tags-programming-bdd":"209/path---tags-programming-bdd-844-ysRPjKYerqfcFa8SkdHq20oC9Q","tags-say-hi-2ff":"126/path---tags-say-hi-2-ff-e61-UR6xbJ7uv8qvi3tTe7ctUFaWv7A","tags-something-2a6":"215/path---tags-something-2-a-6-3e6-IvTgDmeXgwbHGjJ3mW6PD0jxM","tags-stuff-f30":"395/path---tags-stuff-f-30-c5c-CFoomDykhsZ4rSBSGTRUeIXcwg","tags-tag-8aa":"380/path---tags-tag-8-aa-71b-IcT7zlt4vzwQnDBdFJC7QOOnw","tags-tagging-34b":"767/path---tags-tagging-34-b-bbe-1xmrLAw57z8jGDBvd2Asi2b1rU","tags-test-7c5":"788/path---tags-test-7-c-5-3e3-eZTegaigDmQv2MxwKM2U21GjwE","tags-testing-09f":"261/path---tags-testing-09-f-cd7-iQtwi8EzFZUkQ22AVbbOmVIPBh8","tags-v-2-7fb":"697/path---tags-v-2-7-fb-d22-YHaD2Wz3Y72uZQ1mF56bWyhKOk"}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var HTML =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(HTML, _React$Component);

  function HTML() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HTML.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", this.props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      charSet: "utf-8"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), this.props.headComponents), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", this.props.bodyAttributes, this.props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "body",
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents));
  };

  return HTML;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse-path */ "./.cache/parse-path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["default"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/parse-path.js":
/*!******************************!*\
  !*** ./.cache/parse-path.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parsePath; });
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_11__);













var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(/*! ../src/html */ "./src/html.jsx");
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = components;
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = components;
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = components;
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = "../public/" + dataPaths[page.jsonName];

    try {
      dataAndContext = JSON.parse(fs.readFileSync(process.cwd() + "/public/static/d/" + dataPaths[page.jsonName] + ".json"));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      rel: "preload",
      key: dataPath,
      href: dataPath,
      as: "fetch",
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// prefer default export if available
var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/app-shell.js */ "./node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-index-jsx": preferDefault(__webpack_require__(/*! ./src/templates/index.jsx */ "./src/templates/index.jsx")),
  "component---src-templates-post-jsx": preferDefault(__webpack_require__(/*! ./src/templates/post.jsx */ "./src/templates/post.jsx")),
  "component---src-templates-tag-jsx": preferDefault(__webpack_require__(/*! ./src/templates/tag.jsx */ "./src/templates/tag.jsx")),
  "component---src-templates-category-jsx": preferDefault(__webpack_require__(/*! ./src/templates/category.jsx */ "./src/templates/category.jsx")),
  "component---src-templates-author-jsx": preferDefault(__webpack_require__(/*! ./src/templates/author.jsx */ "./src/templates/author.jsx")),
  "component---src-templates-person-jsx": preferDefault(__webpack_require__(/*! ./src/templates/person.jsx */ "./src/templates/person.jsx")),
  "component---src-templates-documenten-jsx": preferDefault(__webpack_require__(/*! ./src/templates/documenten.jsx */ "./src/templates/documenten.jsx")),
  "component---src-templates-person-detail-jsx": preferDefault(__webpack_require__(/*! ./src/templates/person_detail.jsx */ "./src/templates/person_detail.jsx")),
  "component---src-pages-bakermat-jsx": preferDefault(__webpack_require__(/*! ./src/pages/bakermat.jsx */ "./src/pages/bakermat.jsx")),
  "component---src-pages-contact-jsx": preferDefault(__webpack_require__(/*! ./src/pages/contact.jsx */ "./src/pages/contact.jsx")),
  "component---src-pages-documenten-jsx": preferDefault(__webpack_require__(/*! ./src/pages/documenten.jsx */ "./src/pages/documenten.jsx")),
  "component---src-pages-familie-jsx": preferDefault(__webpack_require__(/*! ./src/pages/familie.jsx */ "./src/pages/familie.jsx")),
  "component---src-pages-onderzoek-jsx": preferDefault(__webpack_require__(/*! ./src/pages/onderzoek.jsx */ "./src/pages/onderzoek.jsx"))
};

/***/ }),

/***/ "./data/SiteConfig.js":
/*!****************************!*\
  !*** ./data/SiteConfig.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var pathPrefix = "/"; //var pathPrefix = "/debleeckere"

var userLinks = [{
  label: "Familie",
  url: pathPrefix + "/familie",
  iconClassName: "fa fa-github" // Disabled, see Navigation.jsx

}, {
  label: "Bakermat",
  url: pathPrefix + "/bakermat",
  iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx

}, {
  label: "Onderzoek",
  url: pathPrefix + "/onderzoek",
  iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx

}, {
  label: "Documenten",
  url: pathPrefix + "/documenten",
  iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx

}, {
  label: "Contact",
  url: pathPrefix + "/contact",
  iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx

}];

if (pathPrefix == "/") {
  userLinks.forEach(function (element) {
    element.url = element.url.substr(1);
  });
}

module.exports = {
  blogPostDir: "sample-posts",
  // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors",
  // The name of directory that contains your 'authors' folder.
  personDir: "persons",
  blogAuthorId: "sylvain",
  // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "De Bleeckere",
  // Site title.
  siteTitleAlt: "Familienaam De Bleeckere Site",
  // Alternative site title for SEO.
  siteLogo: "images/debleeckere-logo.png",
  // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: " https://siegfrieddb.github.io",
  // Domain of your website without pathPrefix.
  pathPrefix: pathPrefix,
  //Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "Een site over de familienaam De Bleeckere.",
  // Website description used for RSS feeds/meta description tag.
  siteCover: "/images/debleeckere.jpg",
  siteNavigation: true,
  // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml",
  // Pat  h to the RSS file.
  siteRssAuthor: "De Bleeckere RSS",
  // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10,
  // The max number of posts per page.
  googleAnalyticsID: "UA-92709510-2",
  // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [-"https://github.com/haysclark/gatsby-starter-casper", "https://twitter.com/gatsbyjs", "mailto:gatsbyjs@example.com"],
  postDefaultCategoryID: "Document",
  // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: userLinks,
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "De Bleeckere Site" // Label used before the year
    // year: "2018" // optional, set specific copyright year or range of years, defaults to current year
    // url: "https://www.gatsbyjs.org/" // optional, set link address of copyright, defaults to site root

  },
  themeColor: "#FFFDEE",
  // Used for setting manifest and progress theme colors.
  backgroundColor: "#9ACCCD",
  // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.

};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/json/stringify.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/create.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/*!**********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/define-property.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/*!***************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/*!**************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/createClass.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/extends.js":
/*!*******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/extends.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/babel-runtime/core-js/object/assign.js");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/*!********************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/inherits.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/objectWithoutProperties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/*!******************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/typeof.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

// Handle legacy names for image queries.
var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);

  if (convertedProps.resolutions) {
    convertedProps.fixed = convertedProps.resolutions;
    delete convertedProps.resolutions;
  }

  if (convertedProps.sizes) {
    convertedProps.fluid = convertedProps.sizes;
    delete convertedProps.sizes;
  }

  return convertedProps;
}; // Cache if we've seen an image before so we don't both with
// lazy-loading & fading in on subsequent mounts.


var imageCache = {};

var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props); // Find src

  var src = convertedProps.fluid ? convertedProps.fluid.src : convertedProps.fixed.src;

  if (imageCache[src]) {
    return true;
  } else {
    imageCache[src] = true;
    return false;
  }
};

var io;
var listeners = [];

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        listeners.forEach(function (l) {
          if (l[0] === entry.target) {
            // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              io.unobserve(l[0]);
              l[1]();
            }
          }
        });
      });
    }, {
      rootMargin: "200px"
    });
  }

  return io;
}

var listenToIntersections = function listenToIntersections(el, cb) {
  getIO().observe(el);
  listeners.push([el, cb]);
};

var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSetWebp = props.srcSetWebp ? "<source type='image/webp' srcSet=\"" + props.srcSetWebp + "\" " + sizes + "/>" : "";
  var srcSet = props.srcSet ? "<source srcSet=\"" + props.srcSet + "\" " + sizes + "/>" : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var opacity = props.opacity ? props.opacity : "1";
  var transitionDelay = props.transitionDelay ? props.transitionDelay : "0.5s";
  return "<picture>" + srcSetWebp + srcSet + "<img " + width + height + src + alt + title + "style=\"position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:" + transitionDelay + ";opacity:" + opacity + ";width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
};

var Img = _react.default.forwardRef(function (props, ref) {
  var style = props.style,
      onLoad = props.onLoad,
      onError = props.onError,
      otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["style", "onLoad", "onError"]);
  return _react.default.createElement("img", (0, _extends2.default)({}, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});

Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};

var Image =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // If this browser doesn't support the IntersectionObserver API
    // we default to start downloading the image right away.

    var isVisible = true;
    var imgLoaded = true;
    var IOSupported = false;
    var fadeIn = props.fadeIn; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    var seenBefore = inImageCache(props);

    if (!seenBefore && typeof window !== "undefined" && window.IntersectionObserver) {
      isVisible = false;
      imgLoaded = false;
      IOSupported = true;
    } // Always don't render image while server rendering


    if (typeof window === "undefined") {
      isVisible = false;
      imgLoaded = false;
    }

    if (props.critical) {
      isVisible = true;
      imgLoaded = false;
      IOSupported = false;
    }

    var hasNoScript = !(_this.props.critical && !_this.props.fadeIn);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: imgLoaded,
      IOSupported: IOSupported,
      fadeIn: fadeIn,
      hasNoScript: hasNoScript,
      seenBefore: seenBefore
    };
    _this.imageRef = _react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = Image.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.critical) {
      var img = this.imageRef.current;

      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.state.IOSupported && ref) {
      listenToIntersections(ref, function () {
        _this2.setState({
          isVisible: true
        });
      });
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    this.setState({
      imgLoaded: true
    });

    if (this.state.seenBefore) {
      this.setState({
        fadeIn: false
      });
    }

    this.props.onLoad && this.props.onLoad();
  };

  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === void 0 ? {} : _convertProps$style,
        _convertProps$imgStyl = _convertProps.imgStyle,
        imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
        _convertProps$placeho = _convertProps.placeholderStyle,
        placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
        placeholderClassName = _convertProps.placeholderClassName,
        fluid = _convertProps.fluid,
        fixed = _convertProps.fixed,
        backgroundColor = _convertProps.backgroundColor,
        Tag = _convertProps.Tag;

    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1,
      transition: "opacity 0.5s",
      transitionDelay: this.state.imgLoaded ? "0.5s" : "0.25s"
    }, imgStyle, placeholderStyle);
    var imageStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded || this.state.fadeIn === false ? 1 : 0,
      transition: this.state.fadeIn === true ? "opacity 0.5s" : "none"
    }, imgStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName
    };

    if (fluid) {
      var image = fluid;
      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden"
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, _react.default.createElement(Tag, {
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.base64
      }, placeholderImageProps)), image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: image.tracedSVG
      }, placeholderImageProps)), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: {
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          transitionDelay: "0.35s",
          right: 0,
          left: 0
        }
      }), this.state.isVisible && _react.default.createElement("picture", null, image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: image.srcSetWebp,
        sizes: image.sizes
      }), _react.default.createElement("source", {
        srcSet: image.srcSet,
        sizes: image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        src: image.src,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title
          }, image))
        }
      }));
    }

    if (fixed) {
      var _image = fixed;
      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: _image.width,
        height: _image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      return _react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(_image.srcSet)
      }, _image.base64 && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.base64
      }, placeholderImageProps)), _image.tracedSVG && _react.default.createElement(Img, (0, _extends2.default)({
        src: _image.tracedSVG
      }, placeholderImageProps)), bgColor && _react.default.createElement(Tag, {
        title: title,
        style: {
          backgroundColor: bgColor,
          width: _image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          transitionDelay: "0.25s",
          height: _image.height
        }
      }), this.state.isVisible && _react.default.createElement("picture", null, _image.srcSetWebp && _react.default.createElement("source", {
        type: "image/webp",
        srcSet: _image.srcSetWebp,
        sizes: _image.sizes
      }), _react.default.createElement("source", {
        srcSet: _image.srcSet,
        sizes: _image.sizes
      }), _react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: _image.width,
        height: _image.height,
        src: _image.src,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError
      })), this.state.hasNoScript && _react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            width: _image.width,
            height: _image.height
          }, _image))
        }
      }));
    }

    return null;
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  critical: false,
  fadeIn: true,
  alt: "",
  Tag: "div"
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string
});

Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: fixedObject,
  fluid: fluidObject,
  fadeIn: _propTypes.default.bool,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  Tag: _propTypes.default.string
};
var _default = Image;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isCurrent = _ref.isCurrent;

      if (isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _gatsby.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    this.props.innerRef && this.props.innerRef(ref);

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _gatsby.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $ref = _this$props.ref,
        $innerRef = _this$props.innerRef,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "ref", "innerRef", "state", "replace"]);
    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        // eslint-disable-line
        _onMouseEnter && _onMouseEnter(e);

        ___loader.hovering((0, _gatsby.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        // eslint-disable-line
        _onClick && _onClick(e);

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  innerRef: _propTypes.default.func,
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});
var _default = GatsbyLink;
exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-plugin-feed/gatsby-ssr.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-feed/gatsby-ssr.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _internals = __webpack_require__(/*! ./internals */ "./node_modules/gatsby-plugin-feed/internals.js");

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _defaultOptions$plugi = (0, _extends2.default)({}, _internals.defaultOptions, pluginOptions),
      feeds = _defaultOptions$plugi.feeds;

  var links = feeds.map(function (_ref2, i) {
    var output = _ref2.output,
        title = _ref2.title;

    if (output.charAt(0) !== "/") {
      output = "/" + output;
    }

    return _react.default.createElement("link", {
      key: "gatsby-plugin-feed-" + i,
      rel: "alternate",
      type: "application/rss+xml",
      title: title,
      href: (0, _gatsby.withPrefix)(output)
    });
  });
  setHeadComponents(links);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-feed/internals.js":
/*!******************************************************!*\
  !*** ./node_modules/gatsby-plugin-feed/internals.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.defaultOptions = exports.runQuery = exports.writeFile = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _pify = _interopRequireDefault(__webpack_require__(/*! pify */ "pify"));

var writeFile = (0, _pify.default)(_fs.default.writeFile);
exports.writeFile = writeFile;

var runQuery = function runQuery(handler, query) {
  return handler(query).then(function (r) {
    if (r.errors) {
      throw new Error(r.errors.join(", "));
    }

    return r.data;
  });
};

exports.runQuery = runQuery;
var defaultOptions = {
  // Override if you want to manually specify the RSS "generator" tag.
  generator: "GatsbyJS",
  // Run a default query to gather some information about the site.
  query: "\n    {\n      site {\n        siteMetadata {\n          title\n          description\n          siteUrl\n          site_url: siteUrl\n        }\n      }\n    }\n  ",
  // Setup an RSS object, merging on various feed-specific options.
  setup: function setup(_ref) {
    var _ref$query = _ref.query,
        siteMetadata = _ref$query.site.siteMetadata,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_ref$query, ["site"]);
    return (0, _extends2.default)({}, siteMetadata, rest);
  },
  // Create a default RSS feed. Others may be added by using the format below.
  feeds: [{
    query: "\n      {\n        allMarkdownRemark(\n          limit: 1000,\n          sort: {\n            order: DESC,\n            fields: [frontmatter___date]\n          }\n        ) {\n          edges {\n            node {\n              frontmatter {\n                title\n                date\n              }\n              fields {\n                slug\n              }\n              excerpt\n              html\n            }\n          }\n        }\n      }\n    ",
    // Where we will save the feed generated by this query.
    output: "rss.xml",
    // Use a title when reference a RSS feed in Link element.
    title: null
  }]
};
exports.defaultOptions = defaultOptions;

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var knownOptions = {
  clientId: "string",
  sampleRate: "number",
  siteSpeedSampleRate: "number",
  alwaysSendReferrer: "boolean",
  allowAnchor: "boolean",
  cookieName: "string",
  cookieExpires: "number",
  storeGac: "boolean",
  legacyCookieDomain: "string",
  legacyHistoryImport: "boolean",
  allowLinker: "boolean"
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;

  if (true) {
    var excludeGAPaths = [];

    if (typeof pluginOptions.exclude !== "undefined") {
      var Minimatch = __webpack_require__(/*! minimatch */ "minimatch").Minimatch;

      pluginOptions.exclude.map(function (exclude) {
        var mm = new Minimatch(exclude);
        excludeGAPaths.push(mm.makeRe());
      });
    }

    var gaCreateOptions = {};

    for (var option in knownOptions) {
      if (typeof pluginOptions[option] === knownOptions[option]) {
        gaCreateOptions[option] = pluginOptions[option];
      }
    }

    var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
    return setComponents([_react.default.createElement("script", {
      key: "gatsby-plugin-google-analytics",
      dangerouslySetInnerHTML: {
        __html: "\n  " + (excludeGAPaths.length ? "window.excludeGAPaths=[" + excludeGAPaths.join(",") + "];" : "") + "\n  " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='" + pluginOptions.trackingId + "',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);" : "") + "\n  if(" + (typeof pluginOptions.respectDNT !== "undefined" && pluginOptions.respectDNT == true ? "!(navigator.doNotTrack == \"1\" || window.doNotTrack == \"1\")" : "true") + ") {\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n  }\n  if (typeof ga === \"function\") {\n    ga('create', '" + pluginOptions.trackingId + "', '" + (typeof pluginOptions.cookieDomain === "string" ? pluginOptions.cookieDomain : "auto") + "', " + (typeof pluginOptions.name === "string" ? "'" + pluginOptions.name + "', " : "") + JSON.stringify(gaCreateOptions) + ");\n      " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "ga('set', 'anonymizeIp', true);" : "") + "\n      " + (typeof pluginOptions.optimizeId !== "undefined" ? "ga('require', '" + pluginOptions.optimizeId + "');" : "") + "}\n      "
      }
    })]);
  }

  return null;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  // If icons were generated, also add a favicon link.
  if (pluginOptions.icon) {
    var favicon = "/icons/icon-48x48.png"; // The icon path could be different in hybrid mode
    // this takes the first one of the possible icons

    if (pluginOptions.icons && pluginOptions.icons.length) {
      favicon = pluginOptions.icons[0].src;
    }

    setHeadComponents([_react.default.createElement("link", {
      key: "gatsby-plugin-manifest-icon-link",
      rel: "shortcut icon",
      href: (0, _gatsby.withPrefix)(favicon)
    })]);
  }

  setHeadComponents([_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/manifest.webmanifest")
  }), _react.default.createElement("meta", {
    key: "gatsby-plugin-manifest-meta",
    name: "theme-color",
    content: pluginOptions.theme_color
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/app-shell.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/app-shell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var AppShell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(AppShell, _React$Component);

  function AppShell() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AppShell.prototype;

  _proto.render = function render() {
    return _react.default.createElement(_react.default.Fragment, null);
  };

  return AppShell;
}(_react.default.Component);

var _default = AppShell;
exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _reactHelmet = _interopRequireDefault(__webpack_require__(/*! react-helmet */ "react-helmet"));

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.default.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _internals = __webpack_require__(/*! ./internals */ "./node_modules/gatsby-plugin-sitemap/internals.js");

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _defaultOptions$plugi = (0, _extends2.default)({}, _internals.defaultOptions, pluginOptions),
      output = _defaultOptions$plugi.output,
      createLinkInHead = _defaultOptions$plugi.createLinkInHead;

  if (!createLinkInHead) {
    return;
  }

  if (output.charAt(0) !== "/") {
    output = "/" + output;
  }

  setHeadComponents([_react.default.createElement("link", {
    key: "gatsby-plugin-sitemap",
    rel: "sitemap",
    type: "application/xml",
    href: (0, _gatsby.withPrefix)(output)
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/internals.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/internals.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.defaultOptions = exports.runQuery = exports.writeFile = void 0;

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _pify = _interopRequireDefault(__webpack_require__(/*! pify */ "pify"));

var _minimatch = _interopRequireDefault(__webpack_require__(/*! minimatch */ "minimatch"));

var withoutTrailingSlash = function withoutTrailingSlash(path) {
  return path === "/" ? path : path.replace(/\/$/, "");
};

var writeFile = (0, _pify.default)(_fs.default.writeFile);
exports.writeFile = writeFile;

var runQuery = function runQuery(handler, query, excludes, pathPrefix) {
  return handler(query).then(function (r) {
    if (r.errors) {
      throw new Error(r.errors.join(", "));
    } // Removing excluded paths


    r.data.allSitePage.edges = r.data.allSitePage.edges.filter(function (page) {
      return !excludes.some(function (excludedRoute) {
        return (0, _minimatch.default)(withoutTrailingSlash(page.node.path), excludedRoute);
      });
    }); // Add path prefix

    r.data.allSitePage.edges = r.data.allSitePage.edges.map(function (page) {
      // uses `normalizePath` logic from `gatsby-link`
      page.node.path = (pathPrefix + page.node.path).replace(/^\/\//g, "/");
      return page;
    });
    return r.data;
  });
};

exports.runQuery = runQuery;
var defaultOptions = {
  query: "\n    {\n      site {\n        siteMetadata {\n          siteUrl\n        }\n      }\n\n      allSitePage {\n        edges {\n          node {\n            path\n          }\n        }\n      }\n  }",
  output: "/sitemap.xml",
  exclude: ["/dev-404-page", "/404", "/404.html", "/offline-plugin-app-shell-fallback"],
  createLinkInHead: true,
  serialize: function serialize(_ref) {
    var site = _ref.site,
        allSitePage = _ref.allSitePage;
    return allSitePage.edges.map(function (edge) {
      return {
        url: site.siteMetadata.siteUrl + edge.node.path,
        changefreq: "daily",
        priority: 0.7
      };
    });
  }
};
exports.defaultOptions = defaultOptions;

/***/ }),

/***/ "./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var pluginDefaults = {
  className: "anchor",
  icon: true,
  offsetY: 0
};

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  var _Object$assign = Object.assign(pluginDefaults, pluginOptions),
      className = _Object$assign.className,
      icon = _Object$assign.icon,
      offsetY = _Object$assign.offsetY;

  var styles = "\n    ." + className + " {\n      float: left;\n      padding-right: 4px;\n      margin-left: -20px;\n    }\n    h1 ." + className + " svg,\n    h2 ." + className + " svg,\n    h3 ." + className + " svg,\n    h4 ." + className + " svg,\n    h5 ." + className + " svg,\n    h6 ." + className + " svg {\n      visibility: hidden;\n    }\n    h1:hover ." + className + " svg,\n    h2:hover ." + className + " svg,\n    h3:hover ." + className + " svg,\n    h4:hover ." + className + " svg,\n    h5:hover ." + className + " svg,\n    h6:hover ." + className + " svg,\n    h1 ." + className + ":focus svg,\n    h2 ." + className + ":focus svg,\n    h3 ." + className + ":focus svg,\n    h4 ." + className + ":focus svg,\n    h5 ." + className + ":focus svg,\n    h6 ." + className + ":focus svg {\n      visibility: visible;\n    }\n  ";
  var script = "\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      var hash = window.decodeURI(location.hash.replace('#', ''))\n      if (hash !== '') {\n        var element = document.getElementById(hash)\n        if (element) {\n          var offset = element.offsetTop\n          // Wait for the browser to finish rendering before scrolling.\n          setTimeout((function() {\n            window.scrollTo(0, offset - " + offsetY + ")\n          }), 0)\n        }\n      }\n    })\n  ";
  var style = icon ? _react.default.createElement("style", {
    key: "gatsby-remark-autolink-headers-style",
    type: "text/css"
  }, styles) : undefined;
  return setHeadComponents([style, _react.default.createElement("script", {
    key: "gatsby-remark-autolink-headers-script",
    dangerouslySetInnerHTML: {
      __html: script
    }
  })]);
};

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bin, bugs, dependencies, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_args":[["gatsby@2.0.37","C:\\Users\\Sylvain\\debleeckere"]],"_from":"gatsby@2.0.37","_id":"gatsby@2.0.37","_inBundle":false,"_integrity":"sha512-2vDihUYOwpAZhdkv6bmkvSd5McK4k2P9mWDZ8SHpB5xOgpSRnMWgHV2N7Z+rA3QKhwsp4TTfAg7Fx1N8jUhgvg==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.1.2","ajv-keywords":"2.1.1","ansi-escapes":"3.1.0","babel-code-frame":"6.26.0","babylon":"7.0.0-beta.44","bluebird":"3.5.2","chalk":"2.4.1","cli-cursor":"2.1.0","cli-width":"2.2.0","co":"4.6.0","common-tags":"1.8.0","concat-stream":"1.6.2","convert-hrtime":"2.0.0","core-js":"2.5.7","cross-spawn":"5.1.0","debug":"3.2.5","doctrine":"2.1.0","envinfo":"5.11.1","eslint-scope":"3.7.1","eslint-visitor-keys":"1.0.0","esquery":"1.0.1","esutils":"2.0.2","execa":"0.8.0","fast-json-stable-stringify":"2.0.0","figures":"2.0.0","file-entry-cache":"2.0.0","fs-exists-cached":"1.0.0","functional-red-black-tree":"1.0.1","glob":"7.1.3","globals":"11.8.0","globby":"6.1.0","graceful-fs":"4.1.11","hosted-git-info":"2.7.1","iconv-lite":"0.4.24","ignore":"3.3.10","imurmurhash":"0.1.4","invariant":"2.2.4","is-path-cwd":"1.0.0","is-path-in-cwd":"1.0.1","is-resolvable":"1.1.0","js-yaml":"3.12.0","jsesc":"2.5.1","json-stable-stringify-without-jsonify":"1.0.1","jsonfile":"4.0.0","levn":"0.3.0","lodash":"4.17.11","minimatch":"3.0.4","mkdirp":"0.5.1","mute-stream":"0.0.7","natural-compare":"1.4.0","opentracing":"0.14.3","optionator":"0.8.2","p-map":"1.2.0","path-is-inside":"1.0.2","pify":"3.0.0","pluralize":"7.0.0","pretty-error":"2.1.1","progress":"2.0.1","require-uncached":"1.0.3","resolve-cwd":"2.0.0","rimraf":"2.6.2","run-async":"2.3.0","rx-lite":"4.0.8","rx-lite-aggregates":"4.0.8","semver":"5.5.1","slice-ansi":"1.0.0","source-map":"0.5.7","stack-trace":"0.0.10","string-width":"2.1.1","strip-json-comments":"2.0.1","text-table":"0.2.0","through":"2.3.8","tmp":"0.0.33","to-fast-properties":"2.0.0","trim-right":"1.0.1","universalify":"0.1.2","update-notifier":"2.5.0","yargs":"11.1.0","yurnalist":"0.2.1"},"_requested":{"type":"version","registry":true,"raw":"gatsby@2.0.37","name":"gatsby","escapedName":"gatsby","rawSpec":"2.0.37","saveSpec":null,"fetchSpec":"2.0.37"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.0.37.tgz","_spec":"2.0.37","_where":"C:\\Users\\Sylvain\\debleeckere","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@reach/router":"^1.1.1","autoprefixer":"^8.6.5","babel-core":"7.0.0-bridge.0","babel-eslint":"^8.2.2","babel-loader":"8.0.0-beta.4","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.5.1","babel-preset-gatsby":"^0.1.2","better-queue":"^3.8.6","bluebird":"^3.5.0","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"^2.0.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","domready":"^1.0.8","dotenv":"^4.0.0","eslint":"^4.19.1","eslint-config-react-app":"3.0.0-next.66cc7a90","eslint-loader":"^2.0.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^2.0.0","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","express":"^4.16.3","express-graphql":"^0.6.12","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","friendly-errors-webpack-plugin":"^1.6.1","fs-extra":"^5.0.0","gatsby-cli":"^2.4.4","gatsby-link":"^2.0.6","gatsby-plugin-page-creator":"^2.0.2","gatsby-react-router-scroll":"^2.0.1","glob":"^7.1.1","graphql":"^0.13.2","graphql-relay":"^0.5.5","graphql-skip-limit":"^2.0.1","graphql-tools":"^3.0.4","graphql-type-json":"^0.2.1","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stream-stringify":"^2.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","opn":"^5.3.0","optimize-css-assets-webpack-plugin":"^5.0.1","parse-filepath":"^1.0.1","physical-cpu-count":"^2.0.0","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.1.0","redux":"^3.6.0","relay-compiler":"1.5.0","request":"^2.85.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.0.2","type-of":"^2.0.1","url-loader":"^1.0.1","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"^4.12.0","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.1","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","yaml-loader":"^0.5.0"},"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.2","cross-env":"^5.1.4","lerna":"^2.9.0","nyc":"^7.0.0","rimraf":"^2.6.1"},"engines":{"node":">6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts"],"gitHead":"27b98bc8450be6577621e1d207dfc4384a5b13a5","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^0.13.2"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --ignore **/gatsby-cli.js,**/raw_*,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","test-coverage":"nyc --reporter=lcov --reporter=text npm test","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.0.37","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/jsonp/index.js":
/*!*************************************!*\
  !*** ./node_modules/jsonp/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "debug")('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/moment/moment.js":
/*!***************************************!*\
  !*** ./node_modules/moment/moment.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var require;//! moment.js

;(function (global, factory) {
     true ? module.exports = factory() :
    undefined
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date = new Date(y, m, d, h, M, s, ms);

        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
        return date;
    }

    function createUTCDate (y) {
        var date = new Date(Date.UTC.apply(null, arguments));

        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 1st is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        if (!m) {
            return isArray(this._weekdays) ? this._weekdays :
                this._weekdays['standalone'];
        }
        return isArray(this._weekdays) ? this._weekdays[m.day()] :
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {milliseconds: 0, months: 0};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units || 'millisecond');
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input,units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input,units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    function startOf (units) {
        units = normalizeUnits(units);
        // the following switch intentionally omits break keywords
        // to utilize falling through the cases.
        switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
            case 'date':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
        }

        // weeks are a special case
        if (units === 'week') {
            this.weekday(0);
        }
        if (units === 'isoWeek') {
            this.isoWeekday(1);
        }

        // quarters are also special
        if (units === 'quarter') {
            this.month(Math.floor(this.month() / 3) * 3);
        }

        return this;
    }

    function endOf (units) {
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond') {
            return this;
        }

        // 'date' is an alias for 'day', so it should be considered as such.
        if (units === 'date') {
            units = 'day';
        }

        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'year') {
            days   = this._days   + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.22.2';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'YYYY-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-disqus-comments/build/components/DisqusThread.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-disqus-comments/build/components/DisqusThread.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DISQUS_CONFIG = ['shortname', 'identifier', 'title', 'url', 'category_id', 'onNewComment', 'language'];
var __disqusAdded = false;

function copyProps(context, props) {
    var onNewComment = props.onNewComment,
        language = props.language,
        rest = _objectWithoutProperties(props, ['onNewComment', 'language']);

    for (var prop in rest) {
        context.page[prop] = rest[prop];
    }

    // Setting the language - if none is provided, the default one is used
    context.language = language;

    if (onNewComment) {
        context.callbacks = {
            onNewComment: [onNewComment]
        };
    }
}

var DisqusThread = function (_React$Component) {
    _inherits(DisqusThread, _React$Component);

    function DisqusThread() {
        _classCallCheck(this, DisqusThread);

        return _possibleConstructorReturn(this, (DisqusThread.__proto__ || Object.getPrototypeOf(DisqusThread)).apply(this, arguments));
    }

    _createClass(DisqusThread, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.loadDisqus();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.loadDisqus();
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextProps.identifier !== this.props.identifier;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = Object.keys(this.props).reduce(function (memo, key) {
                return DISQUS_CONFIG.some(function (config) {
                    return config === key;
                }) ? memo : _extends({}, memo, _defineProperty({}, key, _this2.props[key]));
            }, {});

            return _react2.default.createElement(
                'div',
                props,
                _react2.default.createElement('div', { id: 'disqus_thread' })
            );
        }
    }, {
        key: 'addDisqusScript',
        value: function addDisqusScript() {
            if (__disqusAdded) {
                return;
            }

            var child = this.disqus = document.createElement('script');
            var parent = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

            child.async = true;
            child.type = 'text/javascript';
            child.src = '//' + this.props.shortname + '.disqus.com/embed.js';

            parent.appendChild(child);
            __disqusAdded = true;
        }
    }, {
        key: 'loadDisqus',
        value: function loadDisqus() {
            var _this3 = this;

            var props = {};

            // Extract Disqus props that were supplied to this component
            DISQUS_CONFIG.forEach(function (prop) {
                // prop "shortname" is only necessary for loading the script, not for the config itself
                if (prop !== 'shortname' && !!_this3.props[prop]) {
                    props[prop] = _this3.props[prop];
                }
            });

            // If Disqus has already been added, reset it
            if (typeof DISQUS !== 'undefined') {
                DISQUS.reset({
                    reload: true,
                    config: function config() {
                        copyProps(this, props);

                        // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
                        this.page.url = this.page.url.replace(/#/, '') + '#!newthread';
                    }
                });
            } else {
                // Otherwise add Disqus to the page
                window.disqus_config = function () {
                    copyProps(this, props);
                };
                this.addDisqusScript();
            }
        }
    }]);

    return DisqusThread;
}(_react2.default.Component);

DisqusThread.displayName = 'DisqusThread';

DisqusThread.propTypes = {
    id: _propTypes2.default.string,

    /**
     * `shortname` tells the Disqus service your forum's shortname,
     * which is the unique identifier for your website as registered
     * on Disqus. If undefined , the Disqus embed will not load.
     */
    shortname: _propTypes2.default.string.isRequired,

    /**
     * `identifier` tells the Disqus service how to identify the
     * current page. When the Disqus embed is loaded, the identifier
     * is used to look up the correct thread. If disqus_identifier
     * is undefined, the page's URL will be used. The URL can be
     * unreliable, such as when renaming an article slug or changing
     * domains, so we recommend using your own unique way of
     * identifying a thread.
     */
    identifier: _propTypes2.default.string,

    /**
     * `title` tells the Disqus service the title of the current page.
     * This is used when creating the thread on Disqus for the first time.
     * If undefined, Disqus will use the <title> attribute of the page.
     * If that attribute could not be used, Disqus will use the URL of the page.
     */
    title: _propTypes2.default.string,

    /**
     * `url` tells the Disqus service the URL of the current page.
     * If undefined, Disqus will take the window.location.href.
     * This URL is used to look up or create a thread if disqus_identifier
     * is undefined. In addition, this URL is always saved when a thread is
     * being created so that Disqus knows what page a thread belongs to.
     */
    url: _propTypes2.default.string,

    /**
     * `category_id` tells the Disqus service the category to be used for
     * the current page. This is used when creating the thread on Disqus
     * for the first time.
     */
    category_id: _propTypes2.default.string,

    /**
     * `onNewComment` function accepts one parameter `comment` which is a
     * JavaScript object with comment `id` and `text`. This allows you to track
     * user comments and replies and run a script after a comment is posted.
     */
    onNewComment: _propTypes2.default.func,

    /**
     * `language` tells the Disqus service which language should be used.
     * Please refer to https://www.transifex.com/disqus/disqus/ on which languages can be used
     * If undefined, English is used as default one
     */
    language: _propTypes2.default.string
};

DisqusThread.defaultProps = {
    url: typeof window === 'undefined' ? null : window.location.href
};

exports.default = DisqusThread;

/***/ }),

/***/ "./node_modules/react-disqus-comments/build/main.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-disqus-comments/build/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/DisqusThread */ "./node_modules/react-disqus-comments/build/components/DisqusThread.js");

/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(/*! react */ "react"),n=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),da=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");function ea(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function r(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ea(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:r("227");function fa(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ha=!1,ia=null,ja=!1,ka=null,la={onError:function(a){ha=!0;ia=a}};function ma(a,b,c,d,e,f,g,h,k){ha=!1;ia=null;fa.apply(la,arguments)}function na(a,b,c,d,e,f,g,h,k){ma.apply(this,arguments);if(ha){if(ha){var l=ia;ha=!1;ia=null}else r("198"),l=void 0;ja||(ja=!0,ka=l)}}var oa=null,pa={};
function qa(){if(oa)for(var a in pa){var b=pa[a],c=oa.indexOf(a);-1<c?void 0:r("96",a);if(!ra[c]){b.extractEvents?void 0:r("97",a);ra[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;sa.hasOwnProperty(h)?r("99",h):void 0;sa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ta(k[e],g,h);e=!0}else f.registrationName?(ta(f.registrationName,g,h),e=!0):e=!1;e?void 0:r("98",d,a)}}}}
function ta(a,b,c){ua[a]?r("100",a):void 0;ua[a]=b;va[a]=b.eventTypes[c].dependencies}var ra=[],sa={},ua={},va={},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);na(b,c,void 0,a);a.currentTarget=null}function Aa(a,b){null==b?r("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ca=null;function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}
var Ga={injectEventPluginOrder:function(a){oa?r("101"):void 0;oa=Array.prototype.slice.call(a);qa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];pa.hasOwnProperty(c)&&pa[c]===d||(pa[c]?r("102",c):void 0,pa[c]=d,b=!0)}b&&qa()}};
function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?r("231",b,typeof c):void 0;
return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;if(a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?r("95"):void 0,ja))throw b=ka,ja=!1,ka=null,b;}var Ka=Math.random().toString(36).slice(2),La="__reactInternalInstance$"+Ka,Ma="__reactEventHandlers$"+Ka;function Na(a){if(a[La])return a[La];for(;!a[La];)if(a.parentNode)a=a.parentNode;else return null;a=a[La];return 5===a.tag||6===a.tag?a:null}function Oa(a){a=a[La];return!a||5!==a.tag&&6!==a.tag?null:a}
function Pa(a){if(5===a.tag||6===a.tag)return a.stateNode;r("33")}function Qa(a){return a[Ma]||null}function Ra(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Sa(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a)}
function Ta(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Ra(b);for(b=c.length;0<b--;)Sa(c[b],"captured",a);for(b=0;b<c.length;b++)Sa(c[b],"bubbled",a)}}function Ua(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a))}function Va(a){a&&a.dispatchConfig.registrationName&&Ua(a._targetInst,null,a)}
function Wa(a){Ba(a,Ta)}var Xa=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ya(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Za={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},$a={},ab={};
Xa&&(ab=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function bb(a){if($a[a])return $a[a];if(!Za[a])return a;var b=Za[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in ab)return $a[a]=b[c];return a}
var cb=bb("animationend"),ib=bb("animationiteration"),jb=bb("animationstart"),kb=bb("transitionend"),lb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mb=null,nb=null,ob=null;
function pb(){if(ob)return ob;var a,b=nb,c=b.length,d,e="value"in mb?mb.value:mb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return ob=e.slice(a,1<d?1-d:void 0)}function qb(){return!0}function rb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?qb:rb;this.isPropagationStopped=rb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=qb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=qb)},persist:function(){this.isPersistent=qb},isPersistent:rb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=rb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;sb(c);return c};sb(y);function tb(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function ub(a){a instanceof this?void 0:r("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function sb(a){a.eventPool=[];a.getPooled=tb;a.release=ub}var vb=y.extend({data:null}),wb=y.extend({data:null}),xb=[9,13,27,32],yb=Xa&&"CompositionEvent"in window,zb=null;Xa&&"documentMode"in document&&(zb=document.documentMode);
var Ab=Xa&&"TextEvent"in window&&!zb,Bb=Xa&&(!yb||zb&&8<zb&&11>=zb),Cb=String.fromCharCode(32),Db={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Eb=!1;
function Fb(a,b){switch(a){case "keyup":return-1!==xb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Gb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Hb=!1;function Kb(a,b){switch(a){case "compositionend":return Gb(b);case "keypress":if(32!==b.which)return null;Eb=!0;return Cb;case "textInput":return a=b.data,a===Cb&&Eb?null:a;default:return null}}
function Lb(a,b){if(Hb)return"compositionend"===a||!yb&&Fb(a,b)?(a=pb(),ob=nb=mb=null,Hb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Bb&&"ko"!==b.locale?null:b.data;default:return null}}
var Mb={eventTypes:Db,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(yb)b:{switch(a){case "compositionstart":e=Db.compositionStart;break b;case "compositionend":e=Db.compositionEnd;break b;case "compositionupdate":e=Db.compositionUpdate;break b}e=void 0}else Hb?Fb(a,c)&&(e=Db.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Db.compositionStart);e?(Bb&&"ko"!==c.locale&&(Hb||e!==Db.compositionStart?e===Db.compositionEnd&&Hb&&(f=pb()):(mb=d,nb="value"in mb?mb.value:mb.textContent,Hb=
!0)),e=vb.getPooled(e,b,c,d),f?e.data=f:(f=Gb(c),null!==f&&(e.data=f)),Wa(e),f=e):f=null;(a=Ab?Kb(a,c):Lb(a,c))?(b=wb.getPooled(Db.beforeInput,b,c,d),b.data=a,Wa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Nb=null,Ob=null,Pb=null;function Vb(a){if(a=xa(a)){"function"!==typeof Nb?r("280"):void 0;var b=wa(a.stateNode);Nb(a.stateNode,a.type,b)}}function Wb(a){Ob?Pb?Pb.push(a):Pb=[a]:Ob=a}function Xb(){if(Ob){var a=Ob,b=Pb;Pb=Ob=null;Vb(a);if(b)for(a=0;a<b.length;a++)Vb(b[a])}}
function Yb(a,b){return a(b)}function Zb(a,b,c){return a(b,c)}function $b(){}var ac=!1;function bc(a,b){if(ac)return a(b);ac=!0;try{return Yb(a,b)}finally{if(ac=!1,null!==Ob||null!==Pb)$b(),Xb()}}var cc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dc(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!cc[a.type]:"textarea"===b?!0:!1}
function ec(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function fc(a){if(!Xa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function gc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function hc(a){var b=gc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function ic(a){a._valueTracker||(a._valueTracker=hc(a))}function jc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=gc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var kc=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lc=/^(.*)[\\\/]/,D="function"===typeof Symbol&&Symbol.for,mc=D?Symbol.for("react.element"):60103,nc=D?Symbol.for("react.portal"):60106,oc=D?Symbol.for("react.fragment"):60107,pc=D?Symbol.for("react.strict_mode"):60108,qc=D?Symbol.for("react.profiler"):60114,rc=D?Symbol.for("react.provider"):60109,sc=D?Symbol.for("react.context"):60110,tc=D?Symbol.for("react.concurrent_mode"):60111,uc=D?Symbol.for("react.forward_ref"):60112,vc=D?Symbol.for("react.suspense"):
60113,wc=D?Symbol.for("react.memo"):60115,xc=D?Symbol.for("react.lazy"):60116,yc="function"===typeof Symbol&&Symbol.iterator;function zc(a){if(null===a||"object"!==typeof a)return null;a=yc&&a[yc]||a["@@iterator"];return"function"===typeof a?a:null}
function Ac(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case tc:return"ConcurrentMode";case oc:return"Fragment";case nc:return"Portal";case qc:return"Profiler";case pc:return"StrictMode";case vc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case sc:return"Context.Consumer";case rc:return"Context.Provider";case uc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case wc:return Ac(a.type);case xc:if(a=1===a._status?a._result:null)return Ac(a)}return null}function Bc(a){var b="";do{a:switch(a.tag){case 2:case 16:case 0:case 1:case 5:case 8:var c=a._debugOwner,d=a._debugSource,e=Ac(a.type);var f=null;c&&(f=Ac(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(lc,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var Cc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc=Object.prototype.hasOwnProperty,Ec={},Fc={};
function Gc(a){if(Dc.call(Fc,a))return!0;if(Dc.call(Ec,a))return!1;if(Cc.test(a))return Fc[a]=!0;Ec[a]=!0;return!1}function Hc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ic(a,b,c,d){if(null===b||"undefined"===typeof b||Hc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function F(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var G={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){G[a]=new F(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];G[b]=new F(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){G[a]=new F(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){G[a]=new F(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){G[a]=new F(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){G[a]=new F(a,3,!0,a,null)});
["capture","download"].forEach(function(a){G[a]=new F(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){G[a]=new F(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){G[a]=new F(a,5,!1,a.toLowerCase(),null)});var Mc=/[\-:]([a-z])/g;function Nc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Mc,
Nc);G[b]=new F(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Mc,Nc);G[b]=new F(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Mc,Nc);G[b]=new F(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});G.tabIndex=new F("tabIndex",1,!1,"tabindex",null);
function Oc(a,b,c,d){var e=G.hasOwnProperty(b)?G[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ic(b,c,e,d)&&(c=null),d||null===e?Gc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Pc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Qc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Rc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Pc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Sc(a,b){b=b.checked;null!=b&&Oc(a,"checked",b,!1)}
function Tc(a,b){Sc(a,b);var c=Pc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Uc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Uc(a,b.type,Pc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function bd(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Uc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var cd={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function dd(a,b,c){a=y.getPooled(cd.change,a,b,c);a.type="change";Wb(c);Wa(a);return a}var ed=null,fd=null;function gd(a){Ia(a,!1)}
function hd(a){var b=Pa(a);if(jc(b))return a}function id(a,b){if("change"===a)return b}var jd=!1;Xa&&(jd=fc("input")&&(!document.documentMode||9<document.documentMode));function kd(){ed&&(ed.detachEvent("onpropertychange",ld),fd=ed=null)}function ld(a){"value"===a.propertyName&&hd(fd)&&(a=dd(fd,a,ec(a)),bc(gd,a))}function md(a,b,c){"focus"===a?(kd(),ed=b,fd=c,ed.attachEvent("onpropertychange",ld)):"blur"===a&&kd()}function nd(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return hd(fd)}
function od(a,b){if("click"===a)return hd(b)}function pd(a,b){if("input"===a||"change"===a)return hd(b)}
var qd={eventTypes:cd,_isInputEventSupported:jd,extractEvents:function(a,b,c,d){var e=b?Pa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=id:dc(e)?jd?f=pd:(f=nd,g=md):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=od);if(f&&(f=f(a,b)))return dd(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Uc(e,"number",e.value)}},rd=y.extend({view:null,detail:null}),sd={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function td(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=sd[a])?!!b[a]:!1}function ud(){return td}
var vd=0,wd=0,xd=!1,yd=!1,zd=rd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ud,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=vd;vd=a.screenX;return xd?"mousemove"===a.type?a.screenX-b:0:(xd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=wd;wd=a.screenY;return yd?"mousemove"===a.type?a.screenY-b:0:(yd=!0,0)}}),Ad=zd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Bd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Cd={eventTypes:Bd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Na(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=zd,h=Bd.mouseLeave,k=Bd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=Ad,h=Bd.pointerLeave,k=Bd.pointerEnter,l="pointer";var m=null==f?e:Pa(f);e=null==b?e:Pa(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Ra(g))l++;g=0;for(k=e;k;k=Ra(k))g++;for(;0<l-g;)b=Ra(b),l--;for(;0<g-l;)e=Ra(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Ra(b);e=Ra(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Ra(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Ra(d)}for(d=0;d<b.length;d++)Ua(b[d],"bubbled",a);for(d=f.length;0<d--;)Ua(f[d],"captured",c);return[a,c]}},Dd=Object.prototype.hasOwnProperty;function Ed(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function Fd(a,b){if(Ed(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Dd.call(b,c[d])||!Ed(a[c[d]],b[c[d]]))return!1;return!0}function Gd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function Hd(a){2!==Gd(a)?r("188"):void 0}
function Id(a){var b=a.alternate;if(!b)return b=Gd(a),3===b?r("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return Hd(e),a;if(g===d)return Hd(e),b;g=g.sibling}r("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:r("189")}}c.alternate!==d?r("190"):void 0}3!==c.tag?r("188"):void 0;return c.stateNode.current===c?a:b}function Jd(a){a=Id(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var Kd=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Ld=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Md=rd.extend({relatedTarget:null});function Nd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var Od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd=rd.extend({key:function(a){if(a.key){var b=Od[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Nd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Pd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ud,charCode:function(a){return"keypress"===
a.type?Nd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?Nd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=zd.extend({dataTransfer:null}),Sd=rd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ud}),Td=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Ud=zd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Vd=[["abort","abort"],[cb,"animationEnd"],[ib,"animationIteration"],[jb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[kb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Wd={},Xd={};function Yd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Wd[a]=b;Xd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Yd(a,!0)});Vd.forEach(function(a){Yd(a,!1)});
var Zd={eventTypes:Wd,isInteractiveTopLevelEventType:function(a){a=Xd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Xd[a];if(!e)return null;switch(a){case "keypress":if(0===Nd(c))return null;case "keydown":case "keyup":a=Qd;break;case "blur":case "focus":a=Md;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=zd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
Rd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=Sd;break;case cb:case ib:case jb:a=Kd;break;case kb:a=Td;break;case "scroll":a=rd;break;case "wheel":a=Ud;break;case "copy":case "cut":case "paste":a=Ld;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Ad;break;default:a=y}b=a.getPooled(e,b,c,d);Wa(b);return b}},$d=Zd.isInteractiveTopLevelEventType,
ae=[];function be(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Na(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=ec(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<ra.length;h++){var k=ra[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=Aa(g,k))}Ia(g,!1)}}var ce=!0;
function H(a,b){if(!b)return null;var c=($d(a)?de:ee).bind(null,a);b.addEventListener(a,c,!1)}function ge(a,b){if(!b)return null;var c=($d(a)?de:ee).bind(null,a);b.addEventListener(a,c,!0)}function de(a,b){Zb(ee,a,b)}
function ee(a,b){if(ce){var c=ec(b);c=Na(c);null===c||"number"!==typeof c.tag||2===Gd(c)||(c=null);if(ae.length){var d=ae.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{bc(be,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>ae.length&&ae.push(a)}}}var he={},ie=0,je="_reactListenersID"+(""+Math.random()).slice(2);
function ke(a){Object.prototype.hasOwnProperty.call(a,je)||(a[je]=ie++,he[a[je]]={});return he[a[je]]}function le(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function me(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function ne(a,b){var c=me(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=me(c)}}function oe(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?oe(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function pe(){for(var a=window,b=le();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=le(a.document)}return b}function qe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var re=Xa&&"documentMode"in document&&11>=document.documentMode,se={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},te=null,ue=null,He=null,Ie=!1;
function Je(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Ie||null==te||te!==le(c))return null;c=te;"selectionStart"in c&&qe(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return He&&Fd(He,c)?null:(He=c,a=y.getPooled(se.select,ue,a,b),a.type="select",a.target=te,Wa(a),a)}
var Ke={eventTypes:se,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=ke(e);f=va.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Pa(b):window;switch(a){case "focus":if(dc(e)||"true"===e.contentEditable)te=e,ue=b,He=null;break;case "blur":He=ue=te=null;break;case "mousedown":Ie=!0;break;case "contextmenu":case "mouseup":case "dragend":return Ie=!1,Je(c,d);case "selectionchange":if(re)break;
case "keydown":case "keyup":return Je(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Qa;xa=Oa;ya=Pa;Ga.injectEventPluginsByName({SimpleEventPlugin:Zd,EnterLeaveEventPlugin:Cd,ChangeEventPlugin:qd,SelectEventPlugin:Ke,BeforeInputEventPlugin:Mb});function Le(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function Me(a,b){a=n({children:void 0},b);if(b=Le(b.children))a.children=b;return a}function Ne(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Pc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Oe(a,b){null!=b.dangerouslySetInnerHTML?r("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Pe(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?r("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:r("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:Pc(c)}}
function Qe(a,b){var c=Pc(b.value),d=Pc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Re(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Se={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Te(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ue(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Te(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Ve=void 0,We=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Se.svg||"innerHTML"in a)a.innerHTML=b;else{Ve=Ve||document.createElement("div");Ve.innerHTML="<svg>"+b+"</svg>";for(b=Ve.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Xe(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var Ye={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ze=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(a){Ze.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Ye[b]=Ye[a]})});
function $e(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Ye.hasOwnProperty(e)&&Ye[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var af=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function bf(a,b){b&&(af[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?r("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?r("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:r("61")),null!=b.style&&"object"!==typeof b.style?r("62",""):void 0)}
function cf(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function df(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=ke(a);b=va[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":ge("scroll",a);break;case "focus":case "blur":ge("focus",a);ge("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":fc(e)&&ge(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===lb.indexOf(e)&&H(e,a)}c[e]=!0}}}function ef(){}var ff=null,gf=null;
function hf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function jf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var kf=setTimeout,lf=clearTimeout;function mf(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function nf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var of=[],pf=-1;function I(a){0>pf||(a.current=of[pf],of[pf]=null,pf--)}function J(a,b){pf++;of[pf]=a.current;a.current=b}var qf={},K={current:qf},L={current:!1},rf=qf;
function sf(a,b){var c=a.type.contextTypes;if(!c)return qf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function tf(a){I(L,a);I(K,a)}function uf(a){I(L,a);I(K,a)}
function vf(a,b,c){K.current!==qf?r("168"):void 0;J(K,b,a);J(L,c,a)}function wf(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:r("108",Ac(b)||"Unknown",e);return n({},c,d)}function xf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||qf;rf=K.current;J(K,b,a);J(L,L.current,a);return!0}
function yf(a,b,c){var d=a.stateNode;d?void 0:r("169");c?(b=wf(a,b,rf),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var zf=null,Af=null;function Bf(a){return function(b){try{return a(b)}catch(c){}}}
function Cf(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);zf=Bf(function(a){return b.onCommitFiberRoot(c,a)});Af=Bf(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Df(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function N(a,b,c,d){return new Df(a,b,c,d)}
function Ef(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Ff(a){if("function"===typeof a)return Ef(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===uc)return 11;if(a===wc)return 14}return 2}
function Gf(a,b){var c=a.alternate;null===c?(c=N(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Hf(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ef(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case oc:return If(c.children,e,f,b);case tc:return Jf(c,e|3,f,b);case pc:return Jf(c,e|2,f,b);case qc:return a=N(12,c,b,e|4),a.elementType=qc,a.type=qc,a.expirationTime=f,a;case vc:return a=N(13,c,b,e),a.elementType=vc,a.type=vc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case rc:g=10;break a;case sc:g=9;break a;case uc:g=11;break a;case wc:g=
14;break a;case xc:g=16;d=null;break a}r("130",null==a?a:typeof a,"")}b=N(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function If(a,b,c,d){a=N(7,a,d,b);a.expirationTime=c;return a}function Jf(a,b,c,d){a=N(8,a,d,b);b=0===(b&1)?pc:tc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function Kf(a,b,c){a=N(6,a,null,b);a.expirationTime=c;return a}
function Lf(a,b,c){b=N(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Mf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);Nf(b,a)}
function Of(a,b){a.didError=!1;var c=a.latestPingedTime;0!==c&&c<=b&&(a.latestPingedTime=0);c=a.earliestPendingTime;var d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c>b?a.earliestSuspendedTime=b:d<b&&(a.latestSuspendedTime=b);Nf(b,a)}
function Pf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;if(0===b||0!==c&&c<b)b=c;if(0===b||0!==a&&a<b)b=a;return b}function Nf(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var Qf=!1;
function Rf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Sf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Tf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Uf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Vf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Rf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Rf(a.memoizedState),e=c.updateQueue=Rf(c.memoizedState)):d=a.updateQueue=Sf(e):null===e&&(e=c.updateQueue=Sf(d));null===e||d===e?Uf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Uf(d,b),Uf(e,b)):(Uf(d,b),e.lastUpdate=b)}
function Wf(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Rf(a.memoizedState):Xf(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Xf(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Sf(b));return b}
function Yf(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-1025|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:Qf=!0}return d}
function Zf(a,b,c,d,e){Qf=!1;b=Xf(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;if(m>e){if(null===g&&(g=k,f=l),0===h||h>m)h=m}else l=Yf(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var p=k.expirationTime;if(p>e){if(null===m&&(m=k,null===g&&(f=l)),0===h||h>p)h=p}else l=Yf(a,b,k,l,c,d),
null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function $f(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ag(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ag(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ag(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?r("191",c):void 0;c.call(d)}a=a.nextEffect}}
function bg(a,b){return{value:a,source:b,stack:Bc(b)}}var cg={current:null},dg=null,eg=null,fg=null;function gg(a,b){var c=a.type._context;J(cg,c._currentValue,a);c._currentValue=b}function hg(a){var b=cg.current;I(cg,a);a.type._context._currentValue=b}function ig(a){dg=a;fg=eg=null;a.firstContextDependency=null}
function jg(a,b){if(fg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)fg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===eg?(null===dg?r("293"):void 0,dg.firstContextDependency=eg=b):eg=eg.next=b}return a._currentValue}var kg={},O={current:kg},lg={current:kg},mg={current:kg};function ng(a){a===kg?r("174"):void 0;return a}
function og(a,b){J(mg,b,a);J(lg,a,a);J(O,kg,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ue(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Ue(b,c)}I(O,a);J(O,b,a)}function pg(a){I(O,a);I(lg,a);I(mg,a)}function qg(a){ng(mg.current);var b=ng(O.current);var c=Ue(b,a.type);b!==c&&(J(lg,a,a),J(O,c,a))}function rg(a){lg.current===a&&(I(O,a),I(lg,a))}var sg=kc.ReactCurrentOwner,tg=(new aa.Component).refs;
function ug(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var yg={isMounted:function(a){return(a=a._reactInternalFiber)?2===Gd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=vg();d=wg(d,a);var e=Tf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Vf(a,e);xg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=vg();d=wg(d,a);var e=Tf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Vf(a,e);xg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=vg();c=wg(c,a);var d=Tf(c);d.tag=2;void 0!==
b&&null!==b&&(d.callback=b);Vf(a,d);xg(a,c)}};function zg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Fd(c,d)||!Fd(e,f):!0}
function Ag(a,b,c){var d=!1,e=qf;var f=b.contextType;"object"===typeof f&&null!==f?f=sg.currentDispatcher.readContext(f):(e=M(b)?rf:K.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?sf(a,e):qf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=yg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Bg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&yg.enqueueReplaceState(b,b.state,null)}
function Cg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=tg;var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg.currentDispatcher.readContext(f):(f=M(b)?rf:K.current,e.context=sf(a,f));f=a.updateQueue;null!==f&&(Zf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(ug(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&yg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Zf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Dg=Array.isArray;
function Eg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?r("289"):void 0,d=c.stateNode);d?void 0:r("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===tg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?r("284"):void 0;c._owner?void 0:r("290",a)}return a}
function Fg(a,b){"textarea"!==a.type&&r("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Gg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Gf(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Kf(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Eg(a,b,c),d.return=a,d;d=Hf(c.type,c.key,c.props,null,a.mode,d);d.ref=Eg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Lf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=If(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Kf(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case mc:return c=Hf(b.type,b.key,b.props,null,a.mode,c),c.ref=Eg(a,null,b),c.return=a,c;case nc:return b=Lf(b,a.mode,c),b.return=a,b}if(Dg(b)||
zc(b))return b=If(b,a.mode,c,null),b.return=a,b;Fg(a,b)}return null}function v(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case mc:return c.key===e?c.type===oc?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case nc:return c.key===e?l(a,b,c,d):null}if(Dg(c)||zc(c))return null!==e?null:m(a,b,c,d,null);Fg(a,c)}return null}function B(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case mc:return a=a.get(null===d.key?c:d.key)||null,d.type===oc?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case nc:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Dg(d)||zc(d))return a=a.get(c)||null,m(b,a,d,e,null);Fg(b,d)}return null}function w(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,A=null;null!==q&&u<h.length;u++){q.index>u?(A=q,q=null):A=q.sibling;var t=v(e,q,h[u],k);if(null===t){null===q&&(q=A);break}a&&
q&&null===t.alternate&&b(e,q);g=f(t,g,u);null===m?l=t:m.sibling=t;m=t;q=A}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(A=B(q,e,u,h[u],k))a&&null!==A.alternate&&q.delete(null===A.key?u:A.key),g=f(A,g,u),null===m?l=A:m.sibling=A,m=A;a&&q.forEach(function(a){return b(e,a)});return l}function C(e,g,h,k){var l=zc(h);"function"!==typeof l?r("150"):void 0;h=l.call(h);null==h?r("151"):void 0;
for(var m=l=null,q=g,u=g=0,A=null,t=h.next();null!==q&&!t.done;u++,t=h.next()){q.index>u?(A=q,q=null):A=q.sibling;var w=v(e,q,t.value,k);if(null===w){q||(q=A);break}a&&q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=A}if(t.done)return c(e,q),l;if(null===q){for(;!t.done;u++,t=h.next())t=p(e,t.value,k),null!==t&&(g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);return l}for(q=d(e,q);!t.done;u++,t=h.next())t=B(q,e,u,t.value,k),null!==t&&(a&&null!==t.alternate&&q.delete(null===t.key?u:
t.key),g=f(t,g,u),null===m?l=t:m.sibling=t,m=t);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===oc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case mc:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===oc:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===oc?f.props.children:f.props,h);d.ref=Eg(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===oc?(d=If(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Hf(f.type,f.key,f.props,null,a.mode,h),h.ref=Eg(a,d,f),h.return=a,a=h)}return g(a);case nc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Lf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=Kf(f,a.mode,h),d.return=a,a=d),g(a);if(Dg(f))return w(a,d,f,h);if(zc(f))return C(a,d,f,h);l&&Fg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,r("152",h.displayName||h.name||"Component")}return c(a,d)}}var Hg=Gg(!0),Ig=Gg(!1),Jg=null,Kg=null,Lg=!1;
function Mg(a,b){var c=N(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Ng(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}
function Og(a){if(Lg){var b=Kg;if(b){var c=b;if(!Ng(a,b)){b=mf(c);if(!b||!Ng(a,b)){a.effectTag|=2;Lg=!1;Jg=a;return}Mg(Jg,c)}Jg=a;Kg=nf(b)}else a.effectTag|=2,Lg=!1,Jg=a}}function Pg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;Jg=a}function Qg(a){if(a!==Jg)return!1;if(!Lg)return Pg(a),Lg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!jf(b,a.memoizedProps))for(b=Kg;b;)Mg(a,b),b=mf(b);Pg(a);Kg=Jg?mf(a.stateNode):null;return!0}function Rg(){Kg=Jg=null;Lg=!1}
function Sg(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)}),a._result=b,b;}}var Tg=kc.ReactCurrentOwner;function P(a,b,c,d){b.child=null===a?Ig(b,null,c,d):Hg(b,a.child,c,d)}
function Ug(a,b,c,d,e){c=c.render;var f=b.ref;if(!L.current&&b.memoizedProps===d&&f===(null!==a?a.ref:null))return Vg(a,b,e);d=c(d,f);P(a,b,d,e);return b.child}
function Wg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ef(g)&&void 0===g.defaultProps&&null===c.compare)return b.tag=15,b.type=g,Xg(a,b,g,d,e,f);a=Hf(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===e||e>f)if(e=g.memoizedProps,c=c.compare,c=null!==c?c:Fd,c(e,d)&&a.ref===b.ref)return Vg(a,b,f);a=Gf(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Xg(a,b,c,d,e,f){return null!==a&&(0===e||e>f)&&Fd(a.memoizedProps,d)&&a.ref===b.ref?Vg(a,b,f):Yg(a,b,c,d,f)}function Zg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Yg(a,b,c,d,e){var f=M(c)?rf:K.current;f=sf(b,f);ig(b,e);c=c(d,f);b.effectTag|=1;P(a,b,c,e);return b.child}
function $g(a,b,c,d,e){if(M(c)){var f=!0;xf(b)}else f=!1;ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ag(b,c,d,e),Cg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg.currentDispatcher.readContext(l):(l=M(c)?rf:K.current,l=sf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l);Qf=!1;var v=b.memoizedState;k=g.state=v;var B=b.updateQueue;null!==B&&(Zf(b,B,d,g,e),k=b.memoizedState);h!==d||v!==k||L.current||Qf?("function"===typeof m&&(ug(b,c,m,d),k=b.memoizedState),(h=Qf||zg(b,c,h,d,v,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=h,k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg.currentDispatcher.readContext(l):(l=M(c)?rf:K.current,l=sf(b,l)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Bg(b,g,d,l),Qf=!1,k=b.memoizedState,v=g.state=k,B=b.updateQueue,null!==B&&(Zf(b,B,d,g,e),v=b.memoizedState),h!==d||k!==v||L.current||Qf?("function"===typeof m&&(ug(b,c,m,d),v=b.memoizedState),(m=Qf||zg(b,c,h,d,k,v,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,v,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,v,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
v),g.props=d,g.state=v,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return ah(a,b,c,d,f,e)}
function ah(a,b,c,d,e,f){Zg(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&yf(b,c,!1),Vg(a,b,f);d=b.stateNode;Tg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Hg(b,a.child,null,f),b.child=Hg(b,null,h,f)):P(a,b,h,f);b.memoizedState=d.state;e&&yf(b,c,!0);return b.child}function bh(a){var b=a.stateNode;b.pendingContext?vf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&vf(a,b.context,!1);og(a,b.containerInfo)}
function ch(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function dh(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;null!==f&&(f.alreadyCaptured?null!==a&&f===a.memoizedState?f={alreadyCaptured:!0,didTimeout:!0,timedOutAt:f.timedOutAt}:(f.alreadyCaptured=!0,f.didTimeout=!0):f=null);var g=null!==f&&f.didTimeout;if(null===a)g?(g=e.fallback,e=If(null,d,0,null),d=If(g,d,c,null),e.sibling=d,c=e,c.return=d.return=b):c=d=Ig(b,null,e.children,c);else{var h=a.memoizedState;null!==h&&h.didTimeout?(d=a.child,a=d.sibling,g?(c=e.fallback,d=Gf(d,d.pendingProps,
0),d.effectTag|=2,e=d.sibling=Gf(a,c,a.expirationTime),e.effectTag|=2,c=d,d.childExpirationTime=0,d=e,c.return=d.return=b):(g=a.child,d=Hg(b,d.child,e.children,c),Hg(b,g,null,c),c=d)):(a=a.child,g?(g=e.fallback,e=If(null,d,0,null),e.effectTag|=2,e.child=a,a.return=e,d=e.sibling=If(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Hg(b,a,e.children,c))}b.memoizedState=f;b.child=c;return d}
function Vg(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?r("153"):void 0;if(null!==b.child){a=b.child;c=Gf(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Gf(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function eh(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!L.current&&(0===d||d>c)){switch(b.tag){case 3:bh(b);Rg();break;case 5:qg(b);break;case 1:M(b.type)&&xf(b);break;case 4:og(b,b.stateNode.containerInfo);break;case 10:gg(b,b.memoizedProps.value);break;case 13:if(d=b.memoizedState,null!==d&&d.didTimeout){d=b.child.childExpirationTime;if(0!==d&&d<=c)return dh(a,b,c);b=Vg(a,b,c);return null!==b?b.sibling:null}}return Vg(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=sf(b,K.current);ig(b,c);e=d(a,e);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;if(M(d)){var f=!0;xf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&ug(b,d,g,a);e.updater=yg;b.stateNode=e;e._reactInternalFiber=b;Cg(b,d,a,c);b=ah(null,b,d,!0,f,c)}else b.tag=0,
P(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=Sg(e);b.type=a;e=b.tag=Ff(a);f=ch(a,f);g=void 0;switch(e){case 0:g=Yg(null,b,a,f,c);break;case 1:g=$g(null,b,a,f,c);break;case 11:g=Ug(null,b,a,f,c);break;case 14:g=Wg(null,b,a,ch(a.type,f),d,c);break;default:r("283",a)}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),Yg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:ch(d,e),$g(a,b,d,e,c);case 3:bh(b);d=b.updateQueue;null===d?r("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;Zf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Rg(),b=Vg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)Kg=nf(b.stateNode.containerInfo),Jg=b,e=Lg=!0;e?(b.effectTag|=2,b.child=Ig(b,null,d,c)):(P(a,b,d,c),Rg());b=b.child}return b;case 5:return qg(b),null===a&&Og(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,jf(d,
e)?g=null:null!==f&&jf(d,f)&&(b.effectTag|=16),Zg(a,b),1073741823!==c&&b.mode&1&&e.hidden?(b.expirationTime=1073741823,b=null):(P(a,b,g,c),b=b.child),b;case 6:return null===a&&Og(b),null;case 13:return dh(a,b,c);case 4:return og(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Hg(b,null,d,c):P(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),Ug(a,b,d,e,c);case 7:return P(a,b,b.pendingProps,c),b.child;case 8:return P(a,b,b.pendingProps.children,
c),b.child;case 12:return P(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;gg(b,f);if(null!==g){var h=g.value;f=h===f&&(0!==h||1/h===1/f)||h!==h&&f!==f?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!L.current){b=Vg(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&
f)){if(1===g.tag){var k=Tf(c);k.tag=2;Vf(g,k)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;k=g.alternate;null!==k&&(0===k.expirationTime||k.expirationTime>c)&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c)&&(k.childExpirationTime=c);else if(null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c))k.childExpirationTime=
c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==k;){if(k===b){k=null;break}g=k.sibling;if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}P(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,ig(b,c),e=jg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,P(a,b,d,c),b.child;case 14:return e=b.type,f=ch(e.type,b.pendingProps),Wg(a,b,e,f,d,c);case 15:return Xg(a,
b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ch(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,M(d)?(a=!0,xf(b)):a=!1,ig(b,c),Ag(b,d,e,c),Cg(b,d,e,c),ah(null,b,d,!0,a,c);default:r("156")}}function zh(a){a.effectTag|=4}var Ah=void 0,Bh=void 0,Ch=void 0,Dh=void 0;
Ah=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Bh=function(){};
Ch=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ng(O.current);a=null;switch(c){case "input":f=Qc(g,f);d=Qc(g,d);a=[];break;case "option":f=Me(g,f);d=Me(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Oe(g,f);d=Oe(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ef)}bf(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ua.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ua.hasOwnProperty(c)?(null!=l&&df(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&zh(b)}};Dh=function(a,b,c,d){c!==d&&zh(b)};
function Eh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Bc(c));null!==c&&Ac(c.type);b=b.value;null!==a&&1===a.tag&&Ac(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Fh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Gh(a,c)}else b.current=null}
function Hh(a){"function"===typeof Af&&Af(a);switch(a.tag){case 1:Fh(a);var b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Gh(a,c)}break;case 5:Fh(a);break;case 4:Ih(a)}}function Jh(a){return 5===a.tag||3===a.tag||4===a.tag}
function Kh(a){a:{for(var b=a.return;null!==b;){if(Jh(b)){var c=b;break a}b=b.return}r("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:r("161")}c.effectTag&16&&(Xe(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Jh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=ef)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Ih(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?r("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Hh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):Hh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function Lh(a,b){switch(b.tag){case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Ma]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Sc(c,d);cf(a,e);b=cf(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?$e(c,h):"dangerouslySetInnerHTML"===g?We(c,h):"children"===g?Xe(c,h):Oc(c,g,h,b)}switch(a){case "input":Tc(c,d);break;case "textarea":Qe(c,d);break;case "select":a=c._wrapperState.wasMultiple,
c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?Ne(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?Ne(c,!!d.multiple,d.defaultValue,!0):Ne(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:null===b.stateNode?r("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:break;case 17:break;default:r("163")}}function Mh(a,b,c){c=Tf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Nh(d);Eh(a,b)};return c}
function Oh(a,b,c){c=Tf(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ph?Ph=new Set([this]):Ph.add(this));var c=b.value,e=b.stack;Eh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Qh(a){switch(a.tag){case 1:M(a.type)&&tf(a);var b=a.effectTag;return b&1024?(a.effectTag=b&-1025|64,a):null;case 3:return pg(a),uf(a),b=a.effectTag,0!==(b&64)?r("285"):void 0,a.effectTag=b&-1025|64,a;case 5:return rg(a),null;case 13:b=a.effectTag;if(b&1024){a.effectTag=b&-1025|64;b=a.alternate;b=null!==b?b.memoizedState:null;var c=a.memoizedState;null===c?c={alreadyCaptured:!0,didTimeout:!1,timedOutAt:0}:b===c?c={alreadyCaptured:!0,didTimeout:c.didTimeout,timedOutAt:c.timedOutAt}:c.alreadyCaptured=
!0;a.memoizedState=c;return a}return null;case 4:return pg(a),null;case 10:return hg(a),null;default:return null}}var Rh={readContext:jg},Sh=kc.ReactCurrentOwner,Th=0,Uh=0,Vh=!1,Q=null,R=null,S=0,Wh=-1,Xh=!1,T=null,Yh=!1,Ph=null;function Zh(){if(null!==Q)for(var a=Q.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&tf(b);break;case 3:pg(b);uf(b);break;case 5:rg(b);break;case 4:pg(b);break;case 10:hg(b)}a=a.return}R=null;S=0;Wh=-1;Xh=!1;Q=null}
function $h(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&512)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:M(b.type)&&tf(b);break;case 3:pg(b);uf(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)Qg(b),b.effectTag&=-3;Bh(b);break;case 5:rg(b);var g=ng(mg.current),h=b.type;if(null!==e&&null!=b.stateNode)Ch(e,b,h,f,g),e.ref!==b.ref&&(b.effectTag|=128);
else if(f){var k=ng(O.current);if(Qg(b)){f=b;e=f.stateNode;var l=f.type,m=f.memoizedProps,p=g;e[La]=f;e[Ma]=m;h=void 0;g=l;switch(g){case "iframe":case "object":H("load",e);break;case "video":case "audio":for(l=0;l<lb.length;l++)H(lb[l],e);break;case "source":H("error",e);break;case "img":case "image":case "link":H("error",e);H("load",e);break;case "form":H("reset",e);H("submit",e);break;case "details":H("toggle",e);break;case "input":Rc(e,m);H("invalid",e);df(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};H("invalid",e);df(p,"onChange");break;case "textarea":Pe(e,m),H("invalid",e),df(p,"onChange")}bf(g,m);l=null;for(h in m)m.hasOwnProperty(h)&&(k=m[h],"children"===h?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):ua.hasOwnProperty(h)&&null!=k&&df(p,h));switch(g){case "input":ic(e);bd(e,m,!0);break;case "textarea":ic(e);Re(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=ef)}h=l;f.updateQueue=h;f=null!==h?!0:!1;f&&zh(b)}else{m=b;e=h;p=f;l=9===g.nodeType?g:g.ownerDocument;k===Se.html&&(k=Te(e));k===Se.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof p.is?l=l.createElement(e,{is:p.is}):(l=l.createElement(e),"select"===e&&p.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[La]=m;e[Ma]=f;Ah(e,b,!1,!1);p=e;l=h;m=f;var v=g,B=cf(l,m);switch(l){case "iframe":case "object":H("load",
p);g=m;break;case "video":case "audio":for(g=0;g<lb.length;g++)H(lb[g],p);g=m;break;case "source":H("error",p);g=m;break;case "img":case "image":case "link":H("error",p);H("load",p);g=m;break;case "form":H("reset",p);H("submit",p);g=m;break;case "details":H("toggle",p);g=m;break;case "input":Rc(p,m);g=Qc(p,m);H("invalid",p);df(v,"onChange");break;case "option":g=Me(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};g=n({},m,{value:void 0});H("invalid",p);df(v,"onChange");break;case "textarea":Pe(p,
m);g=Oe(p,m);H("invalid",p);df(v,"onChange");break;default:g=m}bf(l,g);k=void 0;var w=l,C=p,u=g;for(k in u)if(u.hasOwnProperty(k)){var q=u[k];"style"===k?$e(C,q):"dangerouslySetInnerHTML"===k?(q=q?q.__html:void 0,null!=q&&We(C,q)):"children"===k?"string"===typeof q?("textarea"!==w||""!==q)&&Xe(C,q):"number"===typeof q&&Xe(C,""+q):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ua.hasOwnProperty(k)?null!=q&&df(v,k):null!=q&&Oc(C,k,q,B))}switch(l){case "input":ic(p);
bd(p,m,!1);break;case "textarea":ic(p);Re(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+Pc(m.value));break;case "select":g=p;g.multiple=!!m.multiple;p=m.value;null!=p?Ne(g,!!m.multiple,p,!1):null!=m.defaultValue&&Ne(g,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof g.onClick&&(p.onclick=ef)}(f=hf(h,f))&&zh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?r("166"):void 0;break;case 6:e&&null!=b.stateNode?Dh(e,b,e.memoizedProps,f):("string"!==
typeof f&&(null===b.stateNode?r("166"):void 0),e=ng(mg.current),ng(O.current),Qg(b)?(f=b,h=f.stateNode,e=f.memoizedProps,h[La]=f,(f=h.nodeValue!==e)&&zh(b)):(h=b,f=(9===e.nodeType?e:e.ownerDocument).createTextNode(f),f[La]=b,h.stateNode=f));break;case 11:break;case 13:f=b.memoizedState;h=null!==e?e.memoizedState:null;(null!==f&&f.didTimeout)!==(null!==h&&h.didTimeout)&&(b.effectTag|=4);break;case 7:break;case 8:break;case 12:break;case 4:pg(b);Bh(b);break;case 10:hg(b);break;case 9:break;case 14:break;
case 17:M(b.type)&&tf(b);break;default:r("156")}Q=null;b=a;if(1073741823===S||1073741823!==b.childExpirationTime){f=0;for(h=b.child;null!==h;){e=h.expirationTime;g=h.childExpirationTime;if(0===f||0!==e&&e<f)f=e;if(0===f||0!==g&&g<f)f=g;h=h.sibling}b.childExpirationTime=f}null!==c&&0===(c.effectTag&512)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?
c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Qh(a,S);if(null!==a)return a.effectTag&=511,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=512)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function ai(a){var b=eh(a.alternate,a,S);a.memoizedProps=a.pendingProps;null===b&&(b=$h(a));Sh.current=null;return b}
function bi(a,b,c){Vh?r("243"):void 0;Vh=!0;Sh.currentDispatcher=Rh;var d=a.nextExpirationTimeToWorkOn;if(d!==S||a!==R||null===Q)Zh(),R=a,S=d,Q=Gf(R.current,null,S),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==Q&&!ci();)Q=ai(Q);else for(;null!==Q;)Q=ai(Q)}catch(C){if(null===Q)e=!0,Nh(C);else{null===Q?r("271"):void 0;var f=Q,g=f.return;if(null===g)e=!0,Nh(C);else{a:{var h=a,k=g,l=f,m=C;g=S;l.effectTag|=512;l.firstEffect=l.lastEffect=null;if(null!==m&&"object"===typeof m&&"function"===
typeof m.then){var p=m;m=k;var v=-1,B=-1;do{if(13===m.tag){var w=m.alternate;if(null!==w&&(w=w.memoizedState,null!==w&&w.didTimeout)){B=10*(w.timedOutAt-2);break}w=m.pendingProps.maxDuration;if("number"===typeof w)if(0>=w)v=0;else if(-1===v||w<v)v=w}m=m.return}while(null!==m);m=k;do{if(w=13===m.tag)void 0===m.memoizedProps.fallback?w=!1:(w=m.memoizedState,w=null===w||!w.didTimeout);if(w){k=di.bind(null,h,m,l,0===(m.mode&1)?1:g);p.then(k,k);if(0===(m.mode&1)){m.effectTag|=32;P(l.alternate,l,null,g);
l.effectTag&=-513;1===l.tag&&(l.effectTag&=-421,null===l.alternate&&(l.tag=17));break a}-1===v?h=1073741823:(-1===B&&(B=10*(Pf(h,g)-2)-5E3),h=B+v);0<=h&&Wh<h&&(Wh=h);m.effectTag|=1024;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error("An update was suspended, but no placeholder UI was provided.")}Xh=!0;m=bg(m,l);h=k;do{switch(h.tag){case 3:l=m;h.effectTag|=1024;h.expirationTime=g;g=Mh(h,l,g);Wf(h,g);break a;case 1:if(l=m,k=h.type,p=h.stateNode,0===(h.effectTag&64)&&("function"===typeof k.getDerivedStateFromError||
null!==p&&"function"===typeof p.componentDidCatch&&(null===Ph||!Ph.has(p)))){h.effectTag|=1024;h.expirationTime=g;g=Oh(h,l,g);Wf(h,g);break a}}h=h.return}while(null!==h)}Q=$h(f);continue}}}break}while(1);Vh=!1;fg=eg=dg=Sh.currentDispatcher=null;if(e)R=null,a.finishedWork=null;else if(null!==Q)a.finishedWork=null;else{b=a.current.alternate;null===b?r("281"):void 0;R=null;if(Xh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){Of(a,d);ei(a,b,
d,a.expirationTime,-1);return}if(!a.didError&&!c){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;c=a.expirationTime=1;ei(a,b,d,c,-1);return}}c||-1===Wh?(a.pendingCommitExpirationTime=d,a.finishedWork=b):(Of(a,d),c=10*(Pf(a,d)-2),c<Wh&&(Wh=c),c=10*(vg()-2),c=Wh-c,ei(a,b,d,a.expirationTime,0>c?0:c))}}
function Gh(a,b){var c;a:{Vh&&!Yh?r("263"):void 0;for(c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ph||!Ph.has(d))){a=bg(b,a);a=Oh(c,a,1);Vf(c,a);xg(c,1);c=void 0;break a}break;case 3:a=bg(b,a);a=Mh(c,a,1);Vf(c,a);xg(c,1);c=void 0;break a}c=c.return}3===a.tag&&(c=bg(b,a),c=Mh(a,c,1),Vf(a,c),xg(a,1));c=void 0}return c}
function wg(a,b){0!==Uh?a=Uh:Vh?a=Yh?1:S:b.mode&1?(a=fi?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==R&&a===S&&(a+=1)):a=1;fi&&a>gi&&(gi=a);return a}
function di(a,b,c,d){var e=a.earliestSuspendedTime;var f=a.latestSuspendedTime;if(0!==e&&d>=e&&d<=f){f=e=d;a.didError=!1;var g=a.latestPingedTime;if(0===g||g<f)a.latestPingedTime=f;Nf(f,a)}else e=vg(),e=wg(e,b),Mf(a,e);0!==(b.mode&1)&&a===R&&S===d&&(R=null);hi(b,e);0===(b.mode&1)&&(hi(c,e),1===c.tag&&null!==c.stateNode&&(b=Tf(e),b.tag=2,Vf(c,b)));c=a.expirationTime;0!==c&&ii(a,c)}
function hi(a,b){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return null===
e?null:e}function xg(a,b){a=hi(a,b);null!==a&&(!Vh&&0!==S&&b<S&&Zh(),Mf(a,b),Vh&&!Yh&&R===a||ii(a,a.expirationTime),ji>ki&&(ji=0,r("185")))}function li(a,b,c,d,e){var f=Uh;Uh=1;try{return a(b,c,d,e)}finally{Uh=f}}var U=null,V=null,mi=0,ni=void 0,W=!1,X=null,Y=0,gi=0,oi=!1,pi=!1,qi=null,ri=null,Z=!1,si=!1,fi=!1,ti=null,ui=da.unstable_now(),vi=(ui/10|0)+2,wi=vi,ki=50,ji=0,xi=null,yi=1;function zi(){vi=((da.unstable_now()-ui)/10|0)+2}
function Ai(a,b){if(0!==mi){if(b>mi)return;null!==ni&&da.unstable_cancelCallback(ni)}mi=b;a=da.unstable_now()-ui;ni=da.unstable_scheduleCallback(Bi,{timeout:10*(b-2)-a})}function ei(a,b,c,d,e){a.expirationTime=d;0!==e||ci()?0<e&&(a.timeoutHandle=kf(Ci.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ci(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;zi();wi=vi;Di(a,c)}function vg(){if(W)return wi;Ei();if(0===Y||1073741823===Y)zi(),wi=vi;return wi}
function ii(a,b){if(null===a.nextScheduledRoot)a.expirationTime=b,null===V?(U=V=a,a.nextScheduledRoot=a):(V=V.nextScheduledRoot=a,V.nextScheduledRoot=U);else{var c=a.expirationTime;if(0===c||b<c)a.expirationTime=b}W||(Z?si&&(X=a,Y=1,Fi(a,1,!0)):1===b?Gi(1,null):Ai(a,b))}
function Ei(){var a=0,b=null;if(null!==V)for(var c=V,d=U;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===V?r("244"):void 0;if(d===d.nextScheduledRoot){U=V=d.nextScheduledRoot=null;break}else if(d===U)U=e=d.nextScheduledRoot,V.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===V){V=c;V.nextScheduledRoot=U;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===V)break;if(1===a)break;
c=d;d=d.nextScheduledRoot}}X=b;Y=a}function Bi(a){if(a.didTimeout&&null!==U){zi();var b=U;do{var c=b.expirationTime;0!==c&&vi>=c&&(b.nextExpirationTimeToWorkOn=vi);b=b.nextScheduledRoot}while(b!==U)}Gi(0,a)}
function Gi(a,b){ri=b;Ei();if(null!==ri)for(zi(),wi=vi;null!==X&&0!==Y&&(0===a||a>=Y)&&(!oi||vi>=Y);)Fi(X,Y,vi>=Y),Ei(),zi(),wi=vi;else for(;null!==X&&0!==Y&&(0===a||a>=Y);)Fi(X,Y,!0),Ei();null!==ri&&(mi=0,ni=null);0!==Y&&Ai(X,Y);ri=null;oi=!1;ji=0;xi=null;if(null!==ti)for(a=ti,ti=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Di(a,b){W?r("253"):void 0;X=a;Y=b;Fi(a,b,!0);Gi(1,null)}
function Fi(a,b,c){W?r("245"):void 0;W=!0;if(null===ri||c){var d=a.finishedWork;null!==d?Hi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,lf(d)),bi(a,!1,c),d=a.finishedWork,null!==d&&Hi(a,d,b))}else d=a.finishedWork,null!==d?Hi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,lf(d)),bi(a,!0,c),d=a.finishedWork,null!==d&&(ci()?a.finishedWork=d:Hi(a,d,b)));W=!1}
function Hi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===ti?ti=[d]:ti.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===xi?ji++:(xi=a,ji=0);Yh=Vh=!0;a.current===b?r("177"):void 0;var e=a.pendingCommitExpirationTime;0===e?r("261"):void 0;a.pendingCommitExpirationTime=0;var f=b.expirationTime,g=b.childExpirationTime,h=0===f||0!==g&&g<f?g:f;a.didError=!1;if(0===h)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0;else{var k=a.latestPendingTime;0!==k&&(k<h?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<h&&(a.earliestPendingTime=a.latestPendingTime));var l=a.earliestSuspendedTime;0===l?Mf(a,h):h>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Mf(a,h)):h<l&&Mf(a,h)}Nf(0,a);Sh.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var m=b.firstEffect}else m=b;else m=b.firstEffect;ff=ce;var p=pe();if(qe(p)){if("selectionStart"in
p)var v={start:p.selectionStart,end:p.selectionEnd};else a:{var B=p.ownerDocument,w=B&&B.defaultView||window,C=w.getSelection&&w.getSelection();if(C&&0!==C.rangeCount){var u=C.anchorNode,q=C.anchorOffset,A=C.focusNode,fe=C.focusOffset;try{u.nodeType,A.nodeType}catch(db){v=null;break a}var Ib=0,Jc=-1,Kc=-1,Ni=0,Oi=0,t=p,Jb=null;b:for(;;){for(var Lc;;){t!==u||0!==q&&3!==t.nodeType||(Jc=Ib+q);t!==A||0!==fe&&3!==t.nodeType||(Kc=Ib+fe);3===t.nodeType&&(Ib+=t.nodeValue.length);if(null===(Lc=t.firstChild))break;
Jb=t;t=Lc}for(;;){if(t===p)break b;Jb===u&&++Ni===q&&(Jc=Ib);Jb===A&&++Oi===fe&&(Kc=Ib);if(null!==(Lc=t.nextSibling))break;t=Jb;Jb=t.parentNode}t=Lc}v=-1===Jc||-1===Kc?null:{start:Jc,end:Kc}}else v=null}var fh=v||{start:0,end:0}}else fh=null;gf={focusedElem:p,selectionRange:fh};ce=!1;for(T=m;null!==T;){var gh=!1,hh=void 0;try{for(;null!==T;){if(T.effectTag&256){var ve=T.alternate;a:{var Qb=T;switch(Qb.tag){case 1:if(Qb.effectTag&256&&null!==ve){var Zi=ve.memoizedProps,$i=ve.memoizedState,Vc=Qb.stateNode;
Vc.props=Qb.memoizedProps;Vc.state=Qb.memoizedState;var aj=Vc.getSnapshotBeforeUpdate(Zi,$i);Vc.__reactInternalSnapshotBeforeUpdate=aj}break a;case 3:case 5:case 6:case 4:case 17:break a;default:r("163")}}}T=T.nextEffect}}catch(db){gh=!0,hh=db}gh&&(null===T?r("178"):void 0,Gh(T,hh),null!==T&&(T=T.nextEffect))}for(T=m;null!==T;){var ih=!1,jh=void 0;try{for(;null!==T;){var we=T.effectTag;we&16&&Xe(T.stateNode,"");if(we&128){var kh=T.alternate;if(null!==kh){var Wc=kh.ref;null!==Wc&&("function"===typeof Wc?
Wc(null):Wc.current=null)}}switch(we&14){case 2:Kh(T);T.effectTag&=-3;break;case 6:Kh(T);T.effectTag&=-3;Lh(T.alternate,T);break;case 4:Lh(T.alternate,T);break;case 8:var lh=T;Ih(lh);var Rb=lh;Rb.return=null;Rb.child=null;Rb.alternate&&(Rb.alternate.child=null,Rb.alternate.return=null)}T=T.nextEffect}}catch(db){ih=!0,jh=db}ih&&(null===T?r("178"):void 0,Gh(T,jh),null!==T&&(T=T.nextEffect))}var mh=gf,bj=pe(),E=mh.focusedElem,eb=mh.selectionRange;if(bj!==E&&E&&E.ownerDocument&&oe(E.ownerDocument.documentElement,
E)){if(null!==eb&&qe(E)){var nh=eb.start,xe=eb.end;void 0===xe&&(xe=nh);if("selectionStart"in E)E.selectionStart=nh,E.selectionEnd=Math.min(xe,E.value.length);else{var ye=E.ownerDocument||document,ba=(ye&&ye.defaultView||window).getSelection(),oh=E.textContent.length,fb=Math.min(eb.start,oh),Sb=void 0===eb.end?fb:Math.min(eb.end,oh);if(!ba.extend&&fb>Sb){var cj=Sb;Sb=fb;fb=cj}var Tb=ne(E,fb),Ja=ne(E,Sb);if(Tb&&Ja&&(1!==ba.rangeCount||ba.anchorNode!==Tb.node||ba.anchorOffset!==Tb.offset||ba.focusNode!==
Ja.node||ba.focusOffset!==Ja.offset)){var Xc=ye.createRange();Xc.setStart(Tb.node,Tb.offset);ba.removeAllRanges();fb>Sb?(ba.addRange(Xc),ba.extend(Ja.node,Ja.offset)):(Xc.setEnd(Ja.node,Ja.offset),ba.addRange(Xc))}}}for(var ze=[],gb=E;gb=gb.parentNode;)1===gb.nodeType&&ze.push({element:gb,left:gb.scrollLeft,top:gb.scrollTop});"function"===typeof E.focus&&E.focus();for(var Ae=0;Ae<ze.length;Ae++){var Yc=ze[Ae];Yc.element.scrollLeft=Yc.left;Yc.element.scrollTop=Yc.top}}gf=null;ce=!!ff;ff=null;a.current=
b;for(T=m;null!==T;){var ph=!1,qh=void 0;try{for(var dj=e;null!==T;){var rh=T.effectTag;if(rh&36){var Zc=void 0,hb=T.alternate,x=T,sh=dj;switch(x.tag){case 1:var ca=x.stateNode;if(x.effectTag&4)if(null===hb)ca.props=x.memoizedProps,ca.state=x.memoizedState,ca.componentDidMount();else{var ej=hb.memoizedProps,fj=hb.memoizedState;ca.props=x.memoizedProps;ca.state=x.memoizedState;ca.componentDidUpdate(ej,fj,ca.__reactInternalSnapshotBeforeUpdate)}var th=x.updateQueue;null!==th&&(ca.props=x.memoizedProps,
ca.state=x.memoizedState,$f(x,th,ca,sh));break;case 3:var uh=x.updateQueue;if(null!==uh){var Be=null;if(null!==x.child)switch(x.child.tag){case 5:Be=x.child.stateNode;break;case 1:Be=x.child.stateNode}$f(x,uh,Be,sh)}break;case 5:var gj=x.stateNode;null===hb&&x.effectTag&4&&hf(x.type,x.memoizedProps)&&gj.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(x.effectTag&32){x.memoizedState={alreadyCaptured:!0,didTimeout:!1,timedOutAt:0};xg(x,1);break}var vh=null!==hb?hb.memoizedState:null,
Ub=x.memoizedState,hj=null!==vh?vh.didTimeout:!1,Ce=x;if(null===Ub)Zc=!1;else if(Zc=Ub.didTimeout)Ce=x.child,Ub.alreadyCaptured=!1,0===Ub.timedOutAt&&(Ub.timedOutAt=vg());if(Zc!==hj&&null!==Ce)a:for(var De=Ce,wh=Zc,z=De;;){if(5===z.tag){var ij=z.stateNode;if(wh)ij.style.display="none";else{var jj=z.stateNode,$c=z.memoizedProps.style,kj=void 0!==$c&&null!==$c&&$c.hasOwnProperty("display")?$c.display:null;jj.style.display=kj}}else if(6===z.tag)z.stateNode.nodeValue=wh?"":z.memoizedProps;else if(null!==
z.child){z.child.return=z;z=z.child;continue}if(z===De)break a;for(;null===z.sibling;){if(null===z.return||z.return===De)break a;z=z.return}z.sibling.return=z.return;z=z.sibling}break;case 17:break;default:r("163")}}if(rh&128){var ad=T.ref;if(null!==ad){var xh=T.stateNode;switch(T.tag){case 5:var Ee=xh;break;default:Ee=xh}"function"===typeof ad?ad(Ee):ad.current=Ee}}var lj=T.nextEffect;T.nextEffect=null;T=lj}}catch(db){ph=!0,qh=db}ph&&(null===T?r("178"):void 0,Gh(T,qh),null!==T&&(T=T.nextEffect))}Vh=
Yh=!1;"function"===typeof zf&&zf(b.stateNode);var Fe=b.expirationTime,Ge=b.childExpirationTime,yh=0===Fe||0!==Ge&&Ge<Fe?Ge:Fe;0===yh&&(Ph=null);a.expirationTime=yh;a.finishedWork=null}function ci(){return oi?!0:null===ri||ri.timeRemaining()>yi?!1:oi=!0}function Nh(a){null===X?r("246"):void 0;X.expirationTime=0;pi||(pi=!0,qi=a)}function Ii(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||Gi(1,null)}}function Ji(a,b){if(Z&&!si){si=!0;try{return a(b)}finally{si=!1}}return a(b)}
function Ki(a,b,c){if(fi)return a(b,c);Z||W||0===gi||(Gi(gi,null),gi=0);var d=fi,e=Z;Z=fi=!0;try{return a(b,c)}finally{fi=d,(Z=e)||W||Gi(1,null)}}
function Li(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===Gd(c)&&1===c.tag?void 0:r("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(M(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);r("171");g=void 0}if(1===c.tag){var h=c.type;if(M(h)){c=wf(c,h,g);break a}}c=g}else c=qf;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Tf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
Vf(f,e);xg(f,d);return d}function Mi(a,b,c,d){var e=b.current,f=vg();e=wg(f,e);return Li(a,b,c,e,d)}function Pi(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Qi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:nc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Nb=function(a,b,c){switch(b){case "input":Tc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qa(d);e?void 0:r("90");jc(d);Tc(d,e)}}}break;case "textarea":Qe(a,c);break;case "select":b=c.value,null!=b&&Ne(a,!!c.multiple,b,!1)}};
function Ri(a){var b=2+25*(((vg()-2+500)/25|0)+1);b<=Th&&(b=Th+1);this._expirationTime=Th=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ri.prototype.render=function(a){this._defer?void 0:r("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Si;Li(a,b,null,c,d._onCommit);return d};
Ri.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ri.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:r("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?r("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Di(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ri.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Si(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Si.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Si.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?r("191",c):void 0;c()}}};
function Ti(a,b,c){b=N(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Ti.prototype.render=function(a,b){var c=this._internalRoot,d=new Si;b=void 0===b?null:b;null!==b&&d.then(b);Mi(a,c,null,d._onCommit);return d};Ti.prototype.unmount=function(a){var b=this._internalRoot,c=new Si;a=void 0===a?null:a;null!==a&&c.then(a);Mi(null,b,null,c._onCommit);return c};Ti.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Si;c=void 0===c?null:c;null!==c&&e.then(c);Mi(b,d,a,e._onCommit);return e};
Ti.prototype.createBatch=function(){var a=new Ri(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Ui(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Yb=Ii;Zb=Ki;$b=function(){W||0===gi||(Gi(gi,null),gi=0)};
function Vi(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Ti(a,!1,b)}
function Wi(a,b,c,d,e){Ui(c)?void 0:r("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Pi(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Vi(c,d);if("function"===typeof e){var h=e;e=function(){var a=Pi(f._internalRoot);h.call(a)}}Ji(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Pi(f._internalRoot)}
function Xi(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Ui(b)?void 0:r("200");return Qi(a,b,null,c)}
var Yi={createPortal:Xi,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?r("188"):r("268",Object.keys(a)));a=Jd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Wi(null,a,b,!0,c)},render:function(a,b,c){return Wi(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?r("38"):void 0;return Wi(a,b,c,!1,d)},unmountComponentAtNode:function(a){Ui(a)?
void 0:r("40");return a._reactRootContainer?(Ji(function(){Wi(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Xi.apply(void 0,arguments)},unstable_batchedUpdates:Ii,unstable_interactiveUpdates:Ki,flushSync:function(a,b){W?r("187"):void 0;var c=Z;Z=!0;try{return li(a,b)}finally{Z=c,Gi(1,null)}},unstable_flushControlled:function(a){var b=Z;Z=!0;try{li(a)}finally{(Z=b)||W||Gi(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Oa,
Pa,Qa,Ga.injectEventPluginsByName,sa,Wa,function(a){Ba(a,Va)},Wb,Xb,ee,Ia]},unstable_createRoot:function(a,b){Ui(a)?void 0:r("278");return new Ti(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Cf(n({},a,{findHostInstanceByFiber:function(a){a=Jd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Na,bundleType:0,version:"16.6.0",rendererPackageName:"react-dom"});
var mj={default:Yi},nj=mj&&Yi||mj;module.exports=nj.default||nj;


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ "./node_modules/react-dom/cjs/react-dom.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-scroll/modules/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(/*! ./components/Link.js */ "./node_modules/react-scroll/modules/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(/*! ./components/Button.js */ "./node_modules/react-scroll/modules/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(/*! ./components/Element.js */ "./node_modules/react-scroll/modules/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(/*! ./mixins/scroller.js */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(/*! ./mixins/scroll-events.js */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(/*! ./mixins/scroll-spy.js */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(/*! ./mixins/animate-scroll.js */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(/*! ./mixins/scroll-link.js */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(/*! ./mixins/scroll-element.js */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(/*! ./mixins/Helpers.js */ "./node_modules/react-scroll/modules/mixins/Helpers.js");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "react");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.name !== nextProps.name) {
            this.registerElems(nextProps.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/animate-scroll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(/*! ./smooth */ "./node_modules/react-scroll/modules/mixins/smooth.js");

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(/*! ./cancel-events */ "./node_modules/react-scroll/modules/mixins/cancel-events.js");

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPositionY: 0,
    startPositionY: 0,
    targetPositionY: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    deltaTop: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return Math.max(containerElement.scrollHeight, containerElement.offsetHeight, containerElement.clientHeight);
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    data.containerElement.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(y, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = currentPositionY(options);
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toY, options) {
  animateTopScroll(toY, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toY, options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(currentPositionY(options) + toY, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/cancel-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/passive-event-listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          this.registerElems(nextProps.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-hash.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.pushHash(to);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-spy.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(/*! ./animate-scroll */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    if (_scrollEvents2.default.registered.begin) {
      _scrollEvents2.default.registered.begin(to, target);
    }

    props.absolute = true;

    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (containerElement === document) {
        window.scrollTo(0, scrollOffset);
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/smooth.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pushHash = function pushHash(hash) {
  hash = hash ? hash.indexOf('#') === 0 ? hash : '#' + hash : '';

  if (history.pushState) {
    var loc = window.location;
    history.pushState(null, null, hash ? loc.pathname + loc.search + hash
    // remove hash
    : loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, '');
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position === "relative" ? t.offsetTop : t.getBoundingClientRect().top + c.scrollTop;
};

exports.default = {
  pushHash: pushHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),

/***/ "./node_modules/react-share/lib/generateIcon.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/lib/generateIcon.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.generateIcon = generateIcon;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icons = __webpack_require__(/*! ./icons */ "./node_modules/react-share/lib/icons.js");

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function generateIcon(network) {
  if (!_icons2.default[network.toLowerCase()]) {
    throw new Error('invalid network name for a social icon');
  }

  var iconConfig = _icons2.default[network.toLowerCase()];

  var Icon = function Icon(props) {
    var className = props.className,
        iconBgStyle = props.iconBgStyle,
        logoFillColor = props.logoFillColor,
        round = props.round,
        size = props.size;


    var baseStyle = {
      width: size,
      height: size
    };

    var classes = 'social-icon social-icon--' + network + ' ' + className;

    var finalIconBgStyle = (0, _extends3.default)({}, iconBgStyle);

    return _react2.default.createElement(
      'div',
      { style: baseStyle },
      _react2.default.createElement(
        'svg',
        {
          viewBox: '0 0 64 64',
          width: size,
          height: size,
          className: classes },
        _react2.default.createElement(
          'g',
          null,
          !round ? _react2.default.createElement('rect', {
            width: '64',
            height: '64',
            fill: iconConfig.color,
            style: finalIconBgStyle }) : _react2.default.createElement('circle', {
            cx: '32',
            cy: '32',
            r: '31',
            fill: iconConfig.color,
            style: finalIconBgStyle })
        ),
        _react2.default.createElement(
          'g',
          null,
          _react2.default.createElement('path', { d: iconConfig.icon, fill: logoFillColor })
        )
      )
    );
  };

  Icon.propTypes = {
    className: _propTypes2.default.string,
    iconBgStyle: _propTypes2.default.object,
    logoFillColor: _propTypes2.default.string,
    round: _propTypes2.default.bool,
    size: _propTypes2.default.number
  };

  Icon.defaultProps = {
    className: '',
    logoFillColor: 'white',
    size: 64
  };

  return Icon;
}

/***/ }),

/***/ "./node_modules/react-share/lib/icons.js":
/*!***********************************************!*\
  !*** ./node_modules/react-share/lib/icons.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable max-len */
exports.default = {
  facebook: {
    icon: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
    mask: 'M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z',
    color: '#3b5998'
  },
  google: {
    icon: 'M25.3,30.1v3.8h6.3c-0.3,1.6-1.9,4.8-6.3,4.8c-3.8,0-6.9-3.1-6.9-7s3.1-7,6.9-7c2.2,0,3.6,0.9,4.4,1.7l3-2.9c-1.9-1.8-4.4-2.9-7.4-2.9c-6.1,0-11.1,5-11.1,11.1s5,11.1,11.1,11.1c6.4,0,10.7-4.5,10.7-10.9c0-0.7-0.1-1.3-0.2-1.8H25.3L25.3,30.1z M49.8,28.9h-3.2v-3.2h-3.2v3.2h-3.2v3.2h3.2v3.2h3.2v-3.2h3.2',
    mask: 'M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z',
    color: '#dd4b39'
  },
  linkedin: {
    icon: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
    mask: 'M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z',
    color: '#007fb1'
  },
  email: {
    icon: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
    mask: 'M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z',
    color: '#7f7f7f'
  },
  twitter: {
    icon: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
    mask: 'M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z',
    color: '#00aced'
  },
  pinterest: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z',
    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
    color: '#cb2128'
  },
  vk: {
    icon: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
    mask: 'M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
    color: '#45668e'
  },
  ok: {
    icon: 'M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z ',
    mask: 'M45,1H5C2.8,1,1,2.8,1,5v40c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V5C49,2.8,47.2,1,45,1z',
    color: '#f2720c'
  },
  telegram: {
    icon: 'm45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957',
    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
    color: '#37aee2'
  },
  whatsapp: {
    icon: 'm42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915',
    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
    color: '#2cb742'
  },
  reddit: {
    icon: 'm 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z',
    color: '#5f99cf'
  },
  tumblr: {
    icon: 'M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z',
    mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
    color: '#2c4762'
  },
  livejournal: {
    icon: 'M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z',
    mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
    color: '#21A5D8'
  },
  mailru: {
    icon: 'M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z',
    mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
    color: '#168DE2'
  }
};
/* eslint-enable max-len */

/***/ }),

/***/ "./node_modules/react-share/lib/react-share.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-share/lib/react-share.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shareCountGetters = exports.shareLinks = exports.ShareCounts = exports.ShareButtons = exports.generateShareIcon = undefined;

var _generateIcon = __webpack_require__(/*! ./generateIcon */ "./node_modules/react-share/lib/generateIcon.js");

var _shareButtons = __webpack_require__(/*! ./share-buttons */ "./node_modules/react-share/lib/share-buttons.js");

var ShareButtons = _interopRequireWildcard(_shareButtons);

var _shareCounts = __webpack_require__(/*! ./share-counts */ "./node_modules/react-share/lib/share-counts.js");

var ShareCounts = _interopRequireWildcard(_shareCounts);

var _socialMediaShareLinks = __webpack_require__(/*! ./social-media-share-links */ "./node_modules/react-share/lib/social-media-share-links.js");

var shareLinks = _interopRequireWildcard(_socialMediaShareLinks);

var _shareCountGetters = __webpack_require__(/*! ./share-count-getters */ "./node_modules/react-share/lib/share-count-getters.js");

var shareCountGetters = _interopRequireWildcard(_shareCountGetters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.generateShareIcon = _generateIcon.generateIcon;
exports.ShareButtons = ShareButtons;
exports.ShareCounts = ShareCounts;
exports.shareLinks = shareLinks;
exports.shareCountGetters = shareCountGetters;

/***/ }),

/***/ "./node_modules/react-share/lib/share-buttons.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-share/lib/share-buttons.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailruShareButton = exports.LivejournalShareButton = exports.TumblrShareButton = exports.RedditShareButton = exports.OKShareButton = exports.VKShareButton = exports.PinterestShareButton = exports.LinkedinShareButton = exports.GooglePlusShareButton = exports.EmailShareButton = exports.WhatsappShareButton = exports.TelegramShareButton = exports.TwitterShareButton = exports.FacebookShareButton = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _socialMediaShareLinks = __webpack_require__(/*! ./social-media-share-links */ "./node_modules/react-share/lib/social-media-share-links.js");

var links = _interopRequireWildcard(_socialMediaShareLinks);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-share/lib/utils.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var supportedNetworks = (0, _keys2.default)(links); /* eslint-disable react/no-multi-comp */

var ShareButton = function (_Component) {
  (0, _inherits3.default)(ShareButton, _Component);

  function ShareButton() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ShareButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShareButton.__proto__ || (0, _getPrototypeOf2.default)(ShareButton)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          openWindow = _this$props.openWindow;


      if (disabled) {
        return;
      }

      e.preventDefault();

      var link = _this.link();

      if (openWindow) {
        _this.openWindow(link);
      }

      if (onClick) {
        onClick(link);
      }
    }, _this.onKeyPress = function (e) {
      if (e.key === 'Enter' || e.key === 13) {
        _this.onClick(e);
      }
    }, _this.openWindow = function (link) {
      var _this$props2 = _this.props,
          beforeOnClick = _this$props2.beforeOnClick,
          onShareWindowClose = _this$props2.onShareWindowClose,
          windowWidth = _this$props2.windowWidth,
          windowHeight = _this$props2.windowHeight;


      var windowOptions = {
        height: windowHeight,
        width: windowWidth
      };

      var windowOpenBound = function windowOpenBound() {
        return (0, _utils.windowOpen)(link, windowOptions, onShareWindowClose);
      };

      if (beforeOnClick) {
        var returnVal = beforeOnClick();

        if ((0, _utils.isPromise)(returnVal)) {
          returnVal.then(windowOpenBound);
        } else {
          windowOpenBound();
        }
      } else {
        windowOpenBound();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ShareButton, [{
    key: 'link',
    value: function link() {
      var _props = this.props,
          url = _props.url,
          opts = _props.opts,
          network = _props.network;

      return links[network](url, opts);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          additionalProps = _props2.additionalProps,
          children = _props2.children,
          className = _props2.className,
          disabled = _props2.disabled,
          disabledStyle = _props2.disabledStyle,
          network = _props2.network,
          role = _props2.role,
          style = _props2.style,
          tabIndex = _props2.tabIndex;


      var classes = (0, _classnames2.default)('SocialMediaShareButton', 'SocialMediaShareButton--' + network, {
        'SocialMediaShareButton--disabled': !!disabled,
        disabled: !!disabled
      }, className);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, additionalProps, {
          role: role,
          tabIndex: tabIndex,
          onClick: this.onClick,
          onKeyPress: this.onKeyPress,
          className: classes,
          style: (0, _extends3.default)({}, style, disabled ? disabledStyle : {}) }),
        children
      );
    }
  }]);
  return ShareButton;
}(_react.Component);

/* HOC to ease migration from v1 to v2.
 * To-be-removed in v2.
 */


ShareButton.propTypes = {
  additionalProps: _propTypes2.default.object,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  disabledStyle: _propTypes2.default.object,
  network: _propTypes2.default.oneOf(supportedNetworks),
  onClick: _propTypes2.default.func,
  opts: _propTypes2.default.object,
  openWindow: _propTypes2.default.bool,
  url: _propTypes2.default.string.isRequired,
  role: _propTypes2.default.string,
  style: _propTypes2.default.object,
  windowWidth: _propTypes2.default.number,
  windowHeight: _propTypes2.default.number,
  beforeOnClick: _propTypes2.default.func,
  onShareWindowClose: _propTypes2.default.func,
  tabIndex: _propTypes2.default.string
};
ShareButton.defaultProps = {
  disabledStyle: {
    opacity: 0.6
  },
  openWindow: true,
  role: 'button',
  tabIndex: '0'
};
exports.default = ShareButton;
function createShareButton(network) {
  var optsMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return {};
  };
  var propTypes = arguments[2];
  var defaultProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  var CreatedButton = function CreatedButton(props) {
    return _react2.default.createElement(ShareButton, (0, _extends3.default)({}, props, {
      network: network,
      opts: optsMap(props) }));
  };

  CreatedButton.propTypes = propTypes;
  CreatedButton.defaultProps = defaultProps;

  return CreatedButton;
}

var FacebookShareButton = exports.FacebookShareButton = createShareButton('facebook', function (props) {
  /* eslint-disable no-console */
  if (props.picture) {
    console.warn('FacebookShareButton warning: picture is a deprecated prop.');
  }

  if (props.title) {
    console.warn('FacebookShareButton warning: title is a deprecated prop. Use "quote" instead.');
  }

  if (props.description) {
    console.warn('FacebookShareButton warning: description is a deprecated prop.\n      Use "quote" instead.');
  }
  /* eslint-enable no-console */

  return {
    quote: props.quote,
    hashtag: props.hashtag
  };
}, {
  quote: _propTypes2.default.string,
  hashtag: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

var TwitterShareButton = exports.TwitterShareButton = createShareButton('twitter', function (props) {
  return {
    hashtags: props.hashtags,
    title: props.title,
    via: props.via
  };
}, {
  hashtags: _propTypes2.default.arrayOf(_propTypes2.default.string),
  title: _propTypes2.default.string,
  via: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

var TelegramShareButton = exports.TelegramShareButton = createShareButton('telegram', function (props) {
  return {
    title: props.title,
    via: props.via
  };
}, {
  title: _propTypes2.default.string,
  via: _propTypes2.default.string
}, {
  windowWidth: 550,
  windowHeight: 400
});

var WhatsappShareButton = exports.WhatsappShareButton = createShareButton('whatsapp', function (props) {
  return {
    title: props.title,
    separator: props.separator
  };
}, {
  title: _propTypes2.default.string,
  separator: _propTypes2.default.string
}, {
  separator: ' ',
  windowWidth: 550,
  windowHeight: 400
});

var EmailShareButton = exports.EmailShareButton = createShareButton('email', function (props) {
  return {
    subject: props.subject,
    body: props.body
  };
}, {
  subject: _propTypes2.default.string,
  body: _propTypes2.default.string
}, {
  openWindow: false,
  onClick: function onClick(link) {
    window.location.href = link;
  }
});

var GooglePlusShareButton = exports.GooglePlusShareButton = createShareButton('googlePlus', undefined, undefined, {
  windowWidth: 550,
  windowHeight: 400
});

var LinkedinShareButton = exports.LinkedinShareButton = createShareButton('linkedin', function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string
}, {
  windowWidth: 750,
  windowHeight: 600
});

var PinterestShareButton = exports.PinterestShareButton = createShareButton('pinterest', function (props) {
  return {
    media: props.media,
    description: props.description
  };
}, {
  media: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string
}, {
  windowWidth: 1000,
  windowHeight: 730
});

var VKShareButton = exports.VKShareButton = createShareButton('vk', function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

var OKShareButton = exports.OKShareButton = createShareButton('ok', function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

var RedditShareButton = exports.RedditShareButton = createShareButton('reddit', function (props) {
  return {
    title: props.title
  };
}, {
  title: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

var TumblrShareButton = exports.TumblrShareButton = createShareButton('tumblr', function (props) {
  return {
    title: props.title,
    tags: props.tags.join(','),
    caption: props.caption,
    posttype: props.posttype
  };
}, {
  title: _propTypes2.default.string,
  caption: _propTypes2.default.string,
  posttype: _propTypes2.default.string,
  tags: _propTypes2.default.arrayOf(_propTypes2.default.string)
}, {
  tags: [],
  posttype: 'link',
  windowWidth: 660,
  windowHeight: 460
});

var LivejournalShareButton = exports.LivejournalShareButton = createShareButton('livejournal', function (props) {
  return {
    title: props.title,
    description: props.description
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

var MailruShareButton = exports.MailruShareButton = createShareButton('mailru', function (props) {
  return {
    title: props.title,
    description: props.description,
    image: props.image
  };
}, {
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  image: _propTypes2.default.string
}, {
  windowWidth: 660,
  windowHeight: 460
});

/***/ }),

/***/ "./node_modules/react-share/lib/share-count-getters.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-share/lib/share-count-getters.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVKShareCount = undefined;

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

exports.getFacebookShareCount = getFacebookShareCount;
exports.getGooglePlusShareCount = getGooglePlusShareCount;
exports.getLinkedinShareCount = getLinkedinShareCount;
exports.getPinterestShareCount = getPinterestShareCount;
exports.getOKShareCount = getOKShareCount;
exports.getRedditShareCount = getRedditShareCount;
exports.getTumblrShareCount = getTumblrShareCount;

var _jsonp = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");

var _jsonp2 = _interopRequireDefault(_jsonp);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-share/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFacebookShareCount(shareUrl, callback) {
  var endpoint = 'https://graph.facebook.com/?id=' + shareUrl;

  (0, _jsonp2.default)(endpoint, function (err, data) {
    callback(!err && data && data.share && data.share.share_count ? data.share.share_count : undefined);
  });
}

function getGooglePlusShareCount(shareUrl, callback) {
  if ((0, _utils.isInternetExplorerBefore)(11)) {
    /* eslint-disable no-console */
    console.error('Google plus share count is not supported in <=IE10!');
    /* eslint-enable no-console */
    return;
  }

  var xhr = new XMLHttpRequest();

  xhr.open('POST', 'https://clients6.google.com/rpc');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');

  xhr.send((0, _stringify2.default)({
    method: 'pos.plusones.get',
    id: 'p',
    params: {
      nolog: true,
      id: shareUrl,
      source: 'widget',
      userId: '@viewer',
      groupId: '@self'
    },
    jsonrpc: '2.0',
    key: 'p',
    apiVersion: 'v1'
  }));

  xhr.onload = function onSuccessdata() {
    var data = JSON.parse(this.responseText);
    callback(!!data ? data.result.metadata.globalCounts.count : undefined);
  };

  xhr.onerror = function onErrordata() {};
}

function getLinkedinShareCount(shareUrl, callback) {
  var url = 'https://www.linkedin.com/countserv/count/share';

  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
    url: shareUrl,
    format: 'jsonp'
  }), function (err, data) {
    callback(!!data ? data.count : undefined);
  });
}

function getPinterestShareCount(shareUrl, callback) {
  var url = 'https://api.pinterest.com/v1/urls/count.json';

  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
    url: shareUrl
  }), function (err, data) {
    callback(!!data ? data.count : undefined);
  });
}

function getVKShareCount(shareUrl, callback) {
  if (!window.VK) {
    window.VK = {
      Share: {
        count: function count(index, _count2) {
          return window.VK.callbacks[index](_count2);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://vk.com/share.php';
  var index = window.VK.callbacks.length;

  window.VK.callbacks.push(callback);

  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
    act: 'count',
    index: index,
    url: shareUrl
  }));
}

exports.getVKShareCount = getVKShareCount;
function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index, _count) {
          return window.OK.callbacks[index](_count);
        }
      },
      callbacks: []
    };
  }

  var url = 'https://connect.ok.ru/dk';
  var index = window.OK.callbacks.length;

  window.ODKL = {
    updateCount: function updateCount(a, b) {
      window.OK.callbacks[index](b);
    }
  };
  window.OK.callbacks.push(callback);

  return (0, _jsonp2.default)(url + (0, _utils.objectToGetParams)({
    'st.cmd': 'extLike',
    uid: 'odklcnt0',
    ref: shareUrl
  }));
}

function getRedditShareCount(shareUrl, callback) {
  var endpoint = 'https://www.reddit.com/api/info.json?limit=1&url=' + shareUrl;

  (0, _jsonp2.default)(endpoint, { param: 'jsonp' }, function (err, response) {
    callback(!err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : undefined);
  });
}

function getTumblrShareCount(shareUrl, callback) {
  var endpoint = 'http://api.tumblr.com/v2/share/stats';

  return (0, _jsonp2.default)(endpoint + (0, _utils.objectToGetParams)({
    url: shareUrl
  }), function (err, data) {
    callback(!!data ? data.note_count : undefined);
  });
}

/***/ }),

/***/ "./node_modules/react-share/lib/share-counts.js":
/*!******************************************************!*\
  !*** ./node_modules/react-share/lib/share-counts.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterShareCount = exports.TumblrShareCount = exports.RedditShareCount = exports.OKShareCount = exports.VKShareCount = exports.PinterestShareCount = exports.GooglePlusShareCount = exports.LinkedinShareCount = exports.FacebookShareCount = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _shareCountGetters = __webpack_require__(/*! ./share-count-getters */ "./node_modules/react-share/lib/share-count-getters.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-multi-comp */
var SocialMediaShareCount = function (_Component) {
  (0, _inherits3.default)(SocialMediaShareCount, _Component);

  function SocialMediaShareCount(props) {
    (0, _classCallCheck3.default)(this, SocialMediaShareCount);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SocialMediaShareCount.__proto__ || (0, _getPrototypeOf2.default)(SocialMediaShareCount)).call(this, props));

    _this._isMounted = false;
    _this.state = { count: 0 };
    return _this;
  }

  (0, _createClass3.default)(SocialMediaShareCount, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._isMounted = true;
      this.updateCount(this.props.url);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.url !== this.props.url) {
        this.updateCount(nextProps.url);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: 'updateCount',
    value: function updateCount(url) {
      var _this2 = this;

      if (this.props.getCount) {
        this.setState({
          isLoading: true
        });

        this.props.getCount(url, function (count) {
          if (_this2._isMounted) {
            _this2.setState({
              count: count,
              isLoading: false
            });
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          count = _state.count,
          isLoading = _state.isLoading;
      var _props = this.props,
          children = _props.children,
          className = _props.className;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('SocialMediaShareCount', className) },
        !isLoading && children(count || 0)
      );
    }
  }]);
  return SocialMediaShareCount;
}(_react.Component);

SocialMediaShareCount.propTypes = {
  children: _propTypes2.default.func,
  className: _propTypes2.default.string,
  getCount: _propTypes2.default.func,
  url: _propTypes2.default.string.isRequired
};

SocialMediaShareCount.defaultProps = {
  children: function children(shareCount) {
    return shareCount;
  }
};

function shareCountFactory(getCount) {
  return function (props) {
    return _react2.default.createElement(SocialMediaShareCount, (0, _extends3.default)({ getCount: getCount }, props));
  };
}

var FacebookShareCount = exports.FacebookShareCount = shareCountFactory(_shareCountGetters.getFacebookShareCount);
var LinkedinShareCount = exports.LinkedinShareCount = shareCountFactory(_shareCountGetters.getLinkedinShareCount);
var GooglePlusShareCount = exports.GooglePlusShareCount = shareCountFactory(_shareCountGetters.getGooglePlusShareCount);
var PinterestShareCount = exports.PinterestShareCount = shareCountFactory(_shareCountGetters.getPinterestShareCount);
var VKShareCount = exports.VKShareCount = shareCountFactory(_shareCountGetters.getVKShareCount);
var OKShareCount = exports.OKShareCount = shareCountFactory(_shareCountGetters.getOKShareCount);
var RedditShareCount = exports.RedditShareCount = shareCountFactory(_shareCountGetters.getRedditShareCount);
var TumblrShareCount = exports.TumblrShareCount = shareCountFactory(_shareCountGetters.getTumblrShareCount);
var TwitterShareCount = exports.TwitterShareCount = function TwitterShareCount() {
  throw new Error('TwitterShareCount was removed in version 1.3.0 because' + 'the Twitter API was shut down and there is no replacement. Please ' + 'remove it from your code.');
};

/***/ }),

/***/ "./node_modules/react-share/lib/social-media-share-links.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-share/lib/social-media-share-links.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = email;
exports.twitter = twitter;
exports.telegram = telegram;
exports.whatsapp = whatsapp;
exports.facebook = facebook;
exports.googlePlus = googlePlus;
exports.linkedin = linkedin;
exports.pinterest = pinterest;
exports.vk = vk;
exports.ok = ok;
exports.reddit = reddit;
exports.tumblr = tumblr;
exports.livejournal = livejournal;
exports.mailru = mailru;

var _assert = __webpack_require__(/*! assert */ "assert");

var _assert2 = _interopRequireDefault(_assert);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-share/lib/utils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-template */
function email(url, _ref) {
  var subject = _ref.subject,
      body = _ref.body;

  return 'mailto:' + (0, _utils.objectToGetParams)({ subject: subject, body: body || subject });
}

function twitter(url, _ref2) {
  var title = _ref2.title,
      via = _ref2.via,
      _ref2$hashtags = _ref2.hashtags,
      hashtags = _ref2$hashtags === undefined ? [] : _ref2$hashtags;

  (0, _assert2.default)(url, 'twitter.url');
  (0, _assert2.default)(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + (0, _utils.objectToGetParams)({
    url: url,
    text: title,
    via: via,
    hashtags: hashtags.join(',')
  });
}

function telegram(url, _ref3) {
  var title = _ref3.title;

  (0, _assert2.default)(url, 'telegram.url');
  return 'https://telegram.me/share/' + (0, _utils.objectToGetParams)({
    url: url,
    text: title
  });
}

function whatsapp(url, _ref4) {
  var title = _ref4.title,
      separator = _ref4.separator;

  (0, _assert2.default)(url, 'whatsapp.url');
  return 'https://api.whatsapp.com/send' + (0, _utils.objectToGetParams)({
    text: title ? title + separator + url : url
  });
}

function facebook(url, _ref5) {
  var quote = _ref5.quote,
      hashtag = _ref5.hashtag;

  (0, _assert2.default)(url, 'facebook.url');

  return 'https://www.facebook.com/sharer/sharer.php' + (0, _utils.objectToGetParams)({
    u: url,
    quote: quote,
    hashtag: hashtag
  });
}

function googlePlus(url) {
  (0, _assert2.default)(url, 'googlePlus.url');

  return 'https://plus.google.com/share' + (0, _utils.objectToGetParams)({ url: url });
}

function linkedin(url, _ref6) {
  var title = _ref6.title,
      description = _ref6.description;

  (0, _assert2.default)(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    summary: description
  });
}

function pinterest(url, _ref7) {
  var media = _ref7.media,
      description = _ref7.description;

  (0, _assert2.default)(url, 'pinterest.url');
  (0, _assert2.default)(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + (0, _utils.objectToGetParams)({
    url: url,
    media: media,
    description: description
  });
}

function vk(url, _ref8) {
  var title = _ref8.title,
      description = _ref8.description,
      image = _ref8.image;

  (0, _assert2.default)(url, 'vk.url');

  return 'https://vk.com/share.php' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    description: description,
    image: image
  });
}

function ok(url, _ref9) {
  var title = _ref9.title,
      description = _ref9.description,
      image = _ref9.image;

  (0, _assert2.default)(url, 'ok.url');

  return 'https://connect.ok.ru/offer' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    description: description,
    imageUrl: image
  });
}

function reddit(url, _ref10) {
  var title = _ref10.title;

  (0, _assert2.default)(url, 'reddit.url');

  return 'https://www.reddit.com/submit' + (0, _utils.objectToGetParams)({
    url: url,
    title: title
  });
}

function tumblr(url, _ref11) {
  var title = _ref11.title,
      caption = _ref11.caption,
      tags = _ref11.tags,
      posttype = _ref11.posttype;

  (0, _assert2.default)(url, 'tumblr.url');

  return 'https://www.tumblr.com/widgets/share/tool' + (0, _utils.objectToGetParams)({
    canonicalUrl: url,
    title: title,
    caption: caption,
    tags: tags,
    posttype: posttype
  });
}

function livejournal(url, _ref12) {
  var title = _ref12.title,
      description = _ref12.description;

  (0, _assert2.default)(url, 'livejournal.url');

  return 'https://www.livejournal.com/update.bml' + (0, _utils.objectToGetParams)({
    subject: title,
    event: description
  });
}

function mailru(url, _ref13) {
  var title = _ref13.title,
      description = _ref13.description,
      image = _ref13.image;

  (0, _assert2.default)(url, 'mailru.url');

  return 'https://connect.mail.ru/share' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    description: description,
    imageurl: image
  });
}

/***/ }),

/***/ "./node_modules/react-share/lib/utils.js":
/*!***********************************************!*\
  !*** ./node_modules/react-share/lib/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPromise = undefined;

var _typeof2 = __webpack_require__(/*! babel-runtime/helpers/typeof */ "./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__(/*! babel-runtime/core-js/object/keys */ "./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

exports.isInternetExplorerBefore = isInternetExplorerBefore;
exports.objectToGetParams = objectToGetParams;
exports.windowOpen = windowOpen;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * This detection method identifies Internet Explorers up until version 11.
 *
 * Reference: https://msdn.microsoft.com/en-us/library/ms537503(v=vs.85).aspx
 */
function isInternetExplorerBefore(version) {
  var iematch = /MSIE ([0-9]+)/g.exec(window.navigator.userAgent);

  return iematch ? +iematch[1] < version : false;
}

/* eslint-disable prefer-template */
function objectToGetParams(object) {
  return '?' + (0, _keys2.default)(object).filter(function (key) {
    return !!object[key];
  }).map(function (key) {
    return key + '=' + encodeURIComponent(object[key]);
  }).join('&');
}
/* eslint-enable prefer-template */

function windowOpen(url, _ref, onShareWindowClose) {
  var name = _ref.name,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 400 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 550 : _ref$width;

  var left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
  var top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;

  var config = {
    height: height,
    width: width,
    left: left,
    top: top,
    location: 'no',
    toolbar: 'no',
    status: 'no',
    directories: 'no',
    menubar: 'no',
    scrollbars: 'yes',
    resizable: 'no',
    centerscreen: 'yes',
    chrome: 'yes'
  };

  var shareDialog = window.open(url, isInternetExplorerBefore(10) ? '' : name, (0, _keys2.default)(config).map(function (key) {
    return key + '=' + config[key];
  }).join(', '));

  if (onShareWindowClose) {
    var interval = window.setInterval(function () {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onShareWindowClose(shareDialog);
        }
      } catch (e) {
        /* eslint-disable no-console */
        console.error(e);
        /* eslint-enable no-console */
      }
    }, 1000);
  }

  return shareDialog;
}

var isPromise = exports.isPromise = function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : (0, _typeof3.default)(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
};

/***/ }),

/***/ "./node_modules/react-social-icons/lib/_networks-db.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-social-icons/lib/_networks-db.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable */

/**
 * Special case for email icon to avoid duplicated code.  Both e-mail and mailto share
 * the same icon. This allows existing users to use 'email' as a icon, while enabling
 * the exisitng logic to use the email icon when "mailto:" is present in the url.
 */
var EMAIL_ICON = {
  icon: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
  mask: 'M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z',
  color: '#7f7f7f'
};

exports.default = {
  fivehundredpix: {
    icon: 'M42.9,27.6c-2.1,0-3.6,1-5.8,3.5c-1.9-2.5-3.8-3.5-5.8-3.5c-1.7,0-3.7,0.7-4.7,3.2 c-1-2-2.7-2.6-4.1-2.6c-1,0-2,0.2-2.9,1.1l0.6-3.3h6.2v-2.5h-8.4l-1.5,8v0.2h2.7c0.6-1,1.5-1.2,2.3-1.2c1.2,0,2.3,0.6,2.6,2.4v0.7 c-0.2,1.6-1.3,2.6-2.6,2.6c-1.1,0-2.3-0.6-2.4-2.2h-3v0.7c0,0.3,0.5,1.5,0.5,1.6c1.3,2.1,3.4,2.5,5,2.5c1.8,0,3.9-0.7,5.1-3.2 c1.1,2.4,3,3.1,4.8,3.1c2.1,0,3.5-0.9,5.7-3.3c1.9,2.3,3.7,3.3,5.7,3.3c3.4,0,5.1-2.6,5.1-5.6C48,30,46.2,27.6,42.9,27.6z  M34.7,33.7c-0.4,0.4-1,0.9-1.4,1.1c-0.7,0.4-1.3,0.6-1.9,0.6c-0.6,0-1.7-0.4-2.1-1.3c-0.1-0.2-0.2-0.6-0.2-0.7v-0.9 c0.3-1.5,1.1-2.1,2.2-2.1c0.1,0,0.6,0,0.9,0.1c0.4,0.1,0.7,0.3,1.1,0.6c0.4,0.3,2,1.6,2,1.8C35.3,33.2,34.9,33.5,34.7,33.7z  M42.9,35.5c-1.3,0-2.6-0.9-3.9-2.3c1.4-1.5,2.5-2.6,3.8-2.6c1.5,0,2.3,1.1,2.3,2.5C45.2,34.4,44.4,35.5,42.9,35.5z',
    mask: 'M33.3,31.3c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.8-0.1-0.9-0.1c-1.1,0-1.9,0.6-2.2,2.1v0.9c0,0.1,0.1,0.4,0.2,0.7 c0.3,0.9,1.4,1.3,2.1,1.3s1.2-0.2,1.9-0.6c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.5-0.5,0.5-0.6C35.3,32.8,33.7,31.6,33.3,31.3z  M42.8,30.6c-1.3,0-2.4,1-3.8,2.6c1.3,1.5,2.6,2.3,3.9,2.3c1.5,0,2.2-1.1,2.2-2.4C45.2,31.7,44.3,30.6,42.8,30.6z M0,0v64h64V0H0z  M42.9,38.5c-2,0-3.8-1-5.7-3.3c-2.2,2.4-3.7,3.3-5.7,3.3c-1.8,0-3.7-0.7-4.8-3.1c-1.2,2.5-3.3,3.2-5.1,3.2c-1.6,0-3.8-0.4-5-2.5 C16.5,36,16,34.8,16,34.5v-0.7h3c0.1,1.6,1.3,2.2,2.4,2.2c1.3,0,2.4-0.9,2.6-2.6v-0.7c-0.2-1.8-1.3-2.4-2.6-2.4 c-0.8,0-1.6,0.2-2.3,1.2h-2.7v-0.2l1.5-8h8.4v2.5h-6.2l-0.6,3.3c1-0.9,2-1.1,2.9-1.1c1.4,0,3.2,0.6,4.1,2.6c1-2.4,3-3.2,4.7-3.2 c2,0,3.9,1,5.8,3.5c2.1-2.6,3.7-3.5,5.8-3.5c3.3,0,5.1,2.4,5.1,5.4C48,35.9,46.2,38.5,42.9,38.5z',
    color: '#222222'
  },
  bandsintown: {
    icon: 'M25.8,39.3h13.4v1.1H24.7V18h-5.6v28h25.8V33.7h-19V39.3z M31.4,24.7h-5.6v7.8h5.6V24.7z M38.2,24.7h-5.6v7.8h5.6V24.7z M39.3,18v14.6h5.6V18H39.3z',
    mask: 'M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z',
    color: '#1B8793'
  },
  behance: {
    icon: 'M29.1,31c0.8-0.4,1.5-0.9,1.9-1.5c0.4-0.6,0.6-1.4,0.6-2.3c0-0.9-0.1-1.6-0.4-2.2 c-0.3-0.6-0.7-1.1-1.2-1.4c-0.5-0.4-1.1-0.6-1.9-0.8c-0.7-0.2-1.5-0.2-2.4-0.2H17v18.5h8.9c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.1-1c0.6-0.4,1.1-1,1.5-1.7c0.4-0.7,0.5-1.5,0.5-2.4c0-1.2-0.3-2.1-0.8-3C31.1,31.9,30.2,31.3,29.1,31z  M21.1,25.7h3.8c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.2,0.5,0.4,0.6,0.6c0.2,0.3,0.2,0.6,0.2,1.1c0,0.8-0.2,1.3-0.7,1.7 c-0.5,0.3-1.1,0.5-1.8,0.5h-4.1V25.7z M28.2,36.7c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.1-1.1,0.1h-4.3 v-5.1h4.4c0.9,0,1.6,0.2,2.1,0.6c0.5,0.4,0.8,1.1,0.8,2C28.4,36,28.3,36.4,28.2,36.7z M46.7,32.3c-0.2-0.9-0.6-1.8-1.2-2.5 C45,29,44.3,28.4,43.5,28c-0.8-0.4-1.8-0.7-3-0.7c-1,0-1.9,0.2-2.8,0.5c-0.8,0.4-1.6,0.9-2.2,1.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-0.3,0.9-0.5,1.8-0.5,2.8c0,1,0.2,2,0.5,2.8c0.3,0.9,0.8,1.6,1.4,2.2c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.8,0.5,2.9,0.5 c1.5,0,2.8-0.3,3.9-1c1.1-0.7,1.9-1.8,2.4-3.4h-3.2c-0.1,0.4-0.4,0.8-1,1.2c-0.5,0.4-1.2,0.6-1.9,0.6c-1,0-1.8-0.3-2.4-0.8 c-0.6-0.5-0.9-1.5-0.9-2.6H47C47,34.2,47,33.2,46.7,32.3z M37.3,32.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.6,0.5-0.9 c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.9-0.3,1.5-0.3c0.9,0,1.6,0.3,2.1,0.7c0.4,0.5,0.8,1.2,0.8,2.1H37.3z M44.1,23.8h-7.5v1.8h7.5 V23.8z',
    mask: 'M40.4,30.1c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.6-0.2,0.9 h6c-0.1-0.9-0.4-1.6-0.8-2.1C42,30.3,41.3,30.1,40.4,30.1z M25.5,32.8h-4.4v5.1h4.3c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.2,1-0.4 c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.2-0.7,0.2-1.2c0-1-0.3-1.6-0.8-2C27.1,33,26.4,32.8,25.5,32.8z M27,29.5 c0.5-0.3,0.7-0.9,0.7-1.7c0-0.4-0.1-0.8-0.2-1.1c-0.2-0.3-0.4-0.5-0.6-0.6c-0.3-0.2-0.6-0.3-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1h-3.8 v4.3h4.1C25.9,30.1,26.5,29.9,27,29.5z M0,0v64h64V0H0z M36.6,23.8h7.5v1.8h-7.5V23.8z M31.9,38.1c-0.4,0.7-0.9,1.2-1.5,1.7 c-0.6,0.4-1.3,0.8-2.1,1c-0.8,0.2-1.6,0.3-2.4,0.3H17V22.6h8.7c0.9,0,1.7,0.1,2.4,0.2c0.7,0.2,1.3,0.4,1.9,0.8 c0.5,0.4,0.9,0.8,1.2,1.4c0.3,0.6,0.4,1.3,0.4,2.2c0,0.9-0.2,1.7-0.6,2.3c-0.4,0.6-1,1.1-1.9,1.5c1.1,0.3,2,0.9,2.5,1.7 c0.6,0.8,0.8,1.8,0.8,3C32.5,36.6,32.3,37.4,31.9,38.1z M47,35.3h-9.6c0,1.1,0.4,2.1,0.9,2.6c0.5,0.5,1.3,0.8,2.4,0.8 c0.7,0,1.4-0.2,1.9-0.6c0.5-0.4,0.9-0.8,1-1.2h3.2c-0.5,1.6-1.3,2.8-2.4,3.4c-1.1,0.7-2.4,1-3.9,1c-1.1,0-2-0.2-2.9-0.5 c-0.8-0.3-1.6-0.8-2.2-1.4c-0.6-0.6-1-1.4-1.4-2.2c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-1.9,0.5-2.8c0.3-0.9,0.8-1.6,1.4-2.2 c0.6-0.6,1.3-1.1,2.2-1.5c0.8-0.4,1.8-0.5,2.8-0.5c1.1,0,2.1,0.2,3,0.7c0.8,0.4,1.5,1,2.1,1.8c0.5,0.7,0.9,1.6,1.2,2.5 C47,33.2,47,34.2,47,35.3z',
    color: '#007CFF'
  },
  codepen: {
    icon: 'M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z',
    mask: 'M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z',
    color: '##151515'
  },
  dribbble: {
    icon: 'M32,48c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S40.8,48,32,48z M45.5,34.2C45,34,41.3,32.9,37,33.6c1.8,4.9,2.5,8.9,2.7,9.7C42.7,41.3,44.9,38,45.5,34.2z M37.3,44.6 c-0.2-1.2-1-5.4-2.9-10.4c0,0-0.1,0-0.1,0c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9C33.9,45.7,35.7,45.3,37.3,44.6z  M21.8,41.2c0.3-0.5,4.1-6.7,11.1-9c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9c0,0.1,0,0.3,0,0.4 C18.3,35.5,19.7,38.7,21.8,41.2z M18.6,29.2c0.6,0,6.2,0,12.6-1.7c-2.3-4-4.7-7.4-5.1-7.9C22.4,21.5,19.5,25,18.6,29.2z M28.8,18.7 c0.4,0.5,2.9,3.9,5.1,8c4.9-1.8,6.9-4.6,7.2-4.9c-2.4-2.1-5.6-3.4-9.1-3.4C30.9,18.4,29.8,18.5,28.8,18.7z M42.6,23.4 c-0.3,0.4-2.6,3.3-7.6,5.4c0.3,0.7,0.6,1.3,0.9,2c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4C45.6,28.7,44.5,25.7,42.6,23.4z',
    mask: 'M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z',
    color: '#ea4c89'
  },
  dropbox: {
    icon: 'M25.4,17.1L16,23.3l6.5,5.2l9.5-5.9L25.4,17.1z M16,33.7l9.4,6.1l6.6-5.5l-9.5-5.9L16,33.7z  M32,34.3l6.6,5.5l9.4-6.1l-6.5-5.2L32,34.3z M48,23.3l-9.4-6.1L32,22.6l9.5,5.9L48,23.3z M32,35.5L25.4,41l-2.8-1.8v2.1l9.4,5.7 l9.4-5.7v-2.1L38.6,41L32,35.5z',
    mask: 'M0,0v64h64V0H0z M41.5,41.2L32,46.9l-9.4-5.7v-2.1l2.8,1.8l6.6-5.5l6.6,5.5l2.8-1.8V41.2z M48,33.7l-9.4,6.1 L32,34.3l-6.6,5.5L16,33.7l6.5-5.2L16,23.3l9.4-6.1l6.6,5.5l6.6-5.5l9.4,6.1l-6.5,5.2L48,33.7z M22.5,28.5l9.5,5.9l9.5-5.9L32,22.6 L22.5,28.5z',
    color: '#1081DE'
  },
  email: EMAIL_ICON,
  facebook: {
    icon: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
    mask: 'M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z',
    color: '#3b5998'
  },
  flickr: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S40.8,16,32,16z M26,37c-2.8,0-5-2.2-5-5 s2.2-5,5-5s5,2.2,5,5S28.8,37,26,37z M38,37c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S40.8,37,38,37z',
    mask: 'M38,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S40.8,27,38,27z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z M26,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S28.8,27,26,27z',
    color: '#0063db'
  },
  foursquare: {
    icon: 'M41.5,17c0,0-14.3,0-16.5,0c-2.3,0-3,1.7-3,2.8c0,1.1,0,26.3,0,26.3c0,1.2,0.7,1.7,1,1.8 c0.4,0.1,1.4,0.3,2-0.4c0,0,7.8-9.1,7.9-9.2c0.2-0.2,0.2-0.2,0.4-0.2c0.4,0,3.4,0,5.1,0c2.1,0,2.5-1.5,2.7-2.4 c0.2-0.7,2.3-11.3,2.9-14.7C44.6,18.4,43.9,17,41.5,17z M41.1,35.7c0.2-0.7,2.3-11.3,2.9-14.7 M40.5,21.5l-0.7,3.6 c-0.1,0.4-0.6,0.8-1,0.8c-0.5,0-6.4,0-6.4,0c-0.7,0-1.2,0.5-1.2,1.2v0.8c0,0.7,0.5,1.2,1.2,1.2c0,0,5,0,5.5,0c0.5,0,1,0.6,0.9,1.1 c-0.1,0.5-0.6,3.3-0.7,3.6c-0.1,0.3-0.4,0.8-1,0.8c-0.5,0-4.5,0-4.5,0c-0.8,0-1.1,0.1-1.6,0.8c-0.5,0.7-5.4,6.5-5.4,6.5 c0,0.1-0.1,0-0.1,0V21.4c0-0.5,0.4-1,1-1c0,0,12.8,0,13.3,0C40.2,20.4,40.6,20.9,40.5,21.5z',
    mask: 'M39.7,20.4c-0.5,0-13.3,0-13.3,0c-0.6,0-1,0.5-1,1v20.5c0,0.1,0,0.1,0.1,0c0,0,4.9-5.9,5.4-6.5 c0.5-0.7,0.8-0.8,1.6-0.8c0,0,3.9,0,4.5,0c0.6,0,1-0.5,1-0.8c0.1-0.3,0.6-3,0.7-3.6c0.1-0.5-0.4-1.1-0.9-1.1c-0.5,0-5.5,0-5.5,0 c-0.7,0-1.2-0.5-1.2-1.2v-0.8c0-0.7,0.5-1.2,1.2-1.2c0,0,6,0,6.4,0c0.5,0,0.9-0.4,1-0.8l0.7-3.6C40.6,20.9,40.2,20.4,39.7,20.4z  M0,0v64h64V0H0z M44,20.9l-1,5.2c-0.8,4.2-1.8,9-1.9,9.5c-0.2,0.9-0.6,2.4-2.7,2.4h-5.1c-0.2,0-0.2,0-0.4,0.2 c-0.1,0.1-7.9,9.2-7.9,9.2c-0.6,0.7-1.6,0.6-2,0.4c-0.4-0.1-1-0.6-1-1.8c0,0,0-25.2,0-26.3c0-1.1,0.7-2.8,3-2.8c2.3,0,16.5,0,16.5,0 C43.9,17,44.6,18.4,44,20.9z',
    color: '#0072b1'
  },
  github: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z',
    mask: 'M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z',
    color: '#4183c4'
  },
  google_play: {
    icon: 'M24.4,45.6l16-8.8l-3.6-3.6L24.4,45.6z M22.2,18.5c-0.1,0.2-0.2,0.5-0.2,0.9v25.1 c0,0.4,0.1,0.6,0.2,0.9L35.6,32L22.2,18.5z M47.1,30.8L42.1,28L38.1,32l4,4l5-2.8C48.3,32.5,48.3,31.4,47.1,30.8z M40.4,27.1 l-15.9-8.8l12.3,12.3L40.4,27.1z',
    mask: 'M0,0v64h64V0H0z M40.4,27.1l-3.6,3.6L24.5,18.4L40.4,27.1z M22,44.5V19.4c0-0.4,0.1-0.7,0.2-0.9L35.6,32 L22.2,45.4C22.1,45.2,22,44.9,22,44.5z M24.4,45.6l12.4-12.4l3.6,3.6L24.4,45.6z M47.1,33.2l-5,2.8l-4-4l3.9-3.9l5.1,2.8 C48.3,31.4,48.3,32.5,47.1,33.2z',
    color: '#40BBC1'
  },
  google: {
    icon: 'M35.4,17h-8c-1.1,0-2.2,0.1-3.4,0.4 c-1.2,0.3-2.4,0.9-3.5,1.8c-1.7,1.6-2.5,3.4-2.5,5.4c0,1.6,0.6,3.1,1.8,4.3c1.1,1.3,2.7,2,4.9,2c0.4,0,0.8,0,1.3-0.1 c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.2,0.5-0.2,0.9c0,0.6,0.1,1.1,0.4,1.5c0.2,0.4,0.5,0.8,0.8,1.2c-0.9,0-2.1,0.1-3.5,0.4 c-1.4,0.2-2.8,0.7-4.1,1.5c-1.2,0.7-1.9,1.5-2.4,2.4c-0.5,0.9-0.7,1.7-0.7,2.5c0,1.5,0.7,2.8,2.1,3.9c1.4,1.2,3.5,1.8,6.3,1.8 c3.3-0.1,5.9-0.9,7.7-2.4c1.7-1.5,2.6-3.2,2.6-5.2c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.4-1.6-2.2-2.3l-1.4-1.1 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1c0.2-0.3,0.4-0.6,0.7-0.8c0.4-0.4,0.8-0.7,1.2-1.1 c0.3-0.4,0.6-0.7,0.9-1.2c0.6-0.9,0.9-2,0.9-3.4c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.7-1.5c-0.3-0.5-0.6-0.8-0.9-1.2 c-0.3-0.3-0.6-0.5-0.8-0.7H33L35.4,17z M31,38.9c0.7,0.8,1,1.6,1,2.7c0,1.3-0.5,2.3-1.5,3.1c-1,0.8-2.4,1.2-4.3,1.3 c-2.1,0-3.8-0.5-5-1.4c-1.3-0.9-1.9-2.1-1.9-3.5c0-0.7,0.1-1.3,0.4-1.8c0.3-0.5,0.6-0.9,0.9-1.2c0.4-0.3,0.8-0.6,1.1-0.7 c0.4-0.2,0.7-0.3,0.9-0.4c0.9-0.3,1.7-0.5,2.5-0.6c0.8-0.1,1.4-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0C29.2,37.3,30.3,38.2,31,38.9z  M29.7,27.1c-0.1,0.5-0.3,1.1-0.7,1.6c-0.7,0.7-1.6,1.1-2.6,1.1c-0.8,0-1.6-0.3-2.2-0.8c-0.6-0.5-1.2-1.1-1.6-1.9 c-0.8-1.6-1.3-3.1-1.3-4.5c0-1.1,0.3-2.1,0.9-3c0.7-0.9,1.6-1.3,2.7-1.3c0.8,0,1.5,0.3,2.2,0.7c0.6,0.5,1.1,1.1,1.5,1.9 c0.8,1.6,1.2,3.2,1.2,4.8C29.8,26.1,29.8,26.5,29.7,27.1z M43.7,29.5v-4.3h-2.5v4.3H37V32h4.2v4.2h2.5V32H48v-2.5H43.7z',
    mask: 'M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z',
    color: '#dd4b39'
  },
  instagram: {
    icon: 'M43.5,29.7h-2.6c0.2,0.7,0.3,1.5,0.3,2.3 c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2h20.8c0.6,0,1.2-0.5,1.2-1.2 V29.7z M43.5,21.6c0-0.6-0.5-1.2-1.2-1.2h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5c0.6,0,1.2-0.5,1.2-1.2V21.6z  M32,26.2c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8C37.8,28.8,35.2,26.2,32,26.2 M43.5,47H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5v23.1C47,45.4,45.5,47,43.5,47',
    mask: 'M41.2,32c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2 h20.8c0.6,0,1.2-0.5,1.2-1.2V29.7h-2.6C41.1,30.4,41.2,31.2,41.2,32z M32,37.8c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8 c-3.2,0-5.8,2.6-5.8,5.8C26.2,35.2,28.8,37.8,32,37.8z M42.4,20.5h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5 c0.6,0,1.2-0.5,1.2-1.2v-3.5C43.5,21,43,20.5,42.4,20.5z M0,0v64h64V0H0z M47,43.5c0,1.9-1.5,3.5-3.5,3.5H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5V43.5z',
    color: '#3f729b'
  },
  itunes: {
    icon: 'M41.1,17c-0.1,0-0.2,0-0.3,0l-14.7,3c-0.6,0.1-1.1,0.7-1.1,1.4v17.6c0,0.8-0.6,1.4-1.4,1.4 h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V27.4c0-0.4,0.3-0.8,0.7-0.9l12.1-2.4c0.1,0,0.1,0,0.2,0 c0.5,0,0.9,0.4,0.9,0.9v11c0,0.8-0.6,1.4-1.4,1.4h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V18.4 C42.5,17.6,41.9,17,41.1,17z',
    mask: 'M0,0v64h64V0H0z M42.5,40c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4 v-11c0-0.5-0.4-0.9-0.9-0.9c-0.1,0-0.1,0-0.2,0l-12.1,2.4c-0.4,0.1-0.7,0.4-0.7,0.9V43c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4V21.3c0-0.7,0.5-1.2,1.1-1.4l14.7-3c0.1,0,0.2,0,0.3,0c0.8,0,1.4,0.6,1.4,1.4V40z',
    color: '#E049D1'
  },
  linkedin: {
    icon: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
    mask: 'M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z',
    color: '#007fb1'
  },
  mailto: EMAIL_ICON,
  medium: {
    icon: 'M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z',
    mask: 'M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z',
    color: '#333332'
  },
  meetup: {
    icon: 'M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z',
    mask: 'M0,0v64h64V0H0z M47.8,44.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5c-1.5-4.6-3.5-11.8-5.2-16.6 c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8c-1-1.4-3.1-4.8-4.1-6.9 c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6c-0.7-3.4-1.2-8-1.1-11.1 c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4c1.7,2.8,3.8,6.7,5.7,10.6 c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4 C47.8,42.8,48.3,44,47.8,44.3z',
    color: '#E51937'
  },
  pinterest: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z',
    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
    color: '#cb2128'
  },
  rdio: {
    icon: 'M47.3,25.7c-3.2,0.1-7.1-2.4-8.7-3.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3v9.3h0 c0,0.8-0.2,1.7-0.8,2.6l0,0.1c-1.5,2.4-4.7,3.9-7.7,2.9c-2.9-1-3.7-3.8-2.1-6.3l0-0.1c1.5-2.4,4.7-3.9,7.7-2.9 c0.2,0.1,0.4,0.2,0.6,0.3v-6.8c-1.1-0.3-2.2-0.5-3.4-0.5c-6.9,0-12,5.2-12,11.6v0.1c0,6.4,5.1,11.5,12,11.5c6.9,0,12-5.2,12-11.6 v-0.1c0-0.5,0-1-0.1-1.5C47.5,29.5,49,25.8,47.3,25.7z',
    mask: 'M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z',
    color: '#0475C5'
  },
  rss: {
    icon: 'M24,36c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C28,37.8,26.2,36,24,36z M23,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2c10.5,0,19,8.5,19,19c0,1.1,0.9,2,2,2s2-0.9,2-2C46,28.3,35.7,18,23,18z M23,27c-1.1,0-2,0.9-2,2 s0.9,2,2,2c5.5,0,10,4.5,10,10c0,1.1,0.9,2,2,2s2-0.9,2-2C37,33.3,30.7,27,23,27z',
    mask: 'M0,0v64h64V0H0z M24,44c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C28,42.2,26.2,44,24,44z M35,43 c-1.1,0-2-0.9-2-2c0-5.5-4.5-10-10-10c-1.1,0-2-0.9-2-2s0.9-2,2-2c7.7,0,14,6.3,14,14C37,42.1,36.1,43,35,43z M44,43 c-1.1,0-2-0.9-2-2c0-10.5-8.5-19-19-19c-1.1,0-2-0.9-2-2s0.9-2,2-2c12.7,0,23,10.3,23,23C46,42.1,45.1,43,44,43z',
    color: '#EF8733'
  },
  sharethis: {
    icon: 'M28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z',
    mask: 'M0,0L64,0L64,64L0,64L0,0ZM28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z',
    color: '#00BF00'
  },
  smugmug: {
    icon: 'M25.4,22.9c2.8,0,4.1-1.7,3.9-3.1 c-0.1-1.2-1.3-2.4-3.6-2.4c-1.9,0-3.1,1.4-3.3,2.8C22.3,21.6,23.1,23,25.4,22.9z M39.2,22.6c2.6-0.1,3.8-1.5,3.8-2.8 c0-1.5-1.4-3-3.8-2.8c-1.9,0.2-3,1.5-3.2,2.8C35.9,21.3,36.9,22.7,39.2,22.6z M40.9,28.5c-6.6,0.7-6.9,0.7-19,1 c-5.1,0-4,17.5,6.9,17.5C39.2,47,51.7,27.4,40.9,28.5z M29,43.9c-9.5,0-8.2-11.3-6.6-11.4c11.1-0.4,13.9-0.9,17.8-0.9 C44.3,31.6,36.6,43.9,29,43.9z',
    mask: 'M0,0v64h64V0H0z M36.1,19.8c0.2-1.3,1.3-2.6,3.2-2.8c2.4-0.2,3.8,1.3,3.8,2.8c0,1.3-1.2,2.6-3.8,2.8 C36.9,22.7,35.9,21.3,36.1,19.8z M22.5,20.2c0.2-1.4,1.4-2.8,3.3-2.8c2.3,0,3.5,1.1,3.6,2.4c0.2,1.5-1.1,3.1-3.9,3.1 C23.1,23,22.3,21.6,22.5,20.2z M28.8,47c-10.9,0-12-17.5-6.9-17.5c12.1-0.3,12.5-0.3,19-1C51.7,27.4,39.2,47,28.8,47z M40.3,31.6 c-3.9,0-6.8,0.5-17.8,0.9c-1.6,0.1-2.9,11.4,6.6,11.4C36.6,43.9,44.3,31.6,40.3,31.6z',
    color: '#8cca1e'
  },
  snapchat: {
    icon: 'M32.309,15.962h-0.001c-0.028,0-0.054,0-0.078,0.001l0,0c0,0-0.513,0.005-0.554,0.005c-1.32,0-5.794,0.368-7.905,5.1c-0.71,1.592-0.54,4.296-0.403,6.469c0.016,0.256,0.033,0.522,0.048,0.779c-0.109,0.06-0.309,0.136-0.622,0.136c-0.419,0-0.914-0.132-1.472-0.394c-0.148-0.069-0.319-0.104-0.507-0.104c-0.653,0-1.434,0.43-1.555,1.07c-0.088,0.461,0.119,1.134,1.601,1.719c0.134,0.053,0.294,0.104,0.464,0.158c0.612,0.194,1.538,0.488,1.789,1.08c0.13,0.306,0.078,0.701-0.154,1.172c-0.005,0.011-0.01,0.021-0.015,0.032c-0.081,0.19-2.04,4.655-6.389,5.371c-0.334,0.055-0.573,0.353-0.555,0.692c0.006,0.101,0.03,0.201,0.071,0.298c0.326,0.763,1.703,1.322,4.21,1.711c0.084,0.113,0.171,0.514,0.224,0.758c0.052,0.241,0.106,0.489,0.183,0.751c0.076,0.257,0.272,0.565,0.776,0.565c0.204,0,0.444-0.047,0.723-0.102c0.418-0.082,0.99-0.193,1.706-0.193c0.397,0,0.809,0.035,1.223,0.103c0.809,0.135,1.496,0.621,2.292,1.183c1.14,0.806,2.431,1.718,4.393,1.718c0.054,0,0.108-0.002,0.162-0.006c0.064,0.003,0.146,0.006,0.234,0.006c1.963,0,3.253-0.913,4.392-1.718c0.798-0.563,1.484-1.049,2.293-1.184c0.414-0.069,0.825-0.103,1.222-0.103c0.683,0,1.223,0.087,1.706,0.181c0.302,0.059,0.545,0.089,0.723,0.089l0.019,0h0.018c0.373,0,0.636-0.197,0.74-0.554c0.076-0.256,0.13-0.498,0.183-0.743c0.053-0.243,0.14-0.642,0.223-0.754c2.508-0.389,3.884-0.948,4.21-1.707c0.042-0.097,0.066-0.198,0.072-0.3c0.019-0.339-0.22-0.636-0.554-0.691c-4.351-0.717-6.308-5.181-6.389-5.371c-0.005-0.011-0.01-0.022-0.015-0.032c-0.232-0.471-0.284-0.865-0.154-1.172c0.251-0.592,1.176-0.885,1.788-1.079c0.171-0.054,0.332-0.106,0.465-0.158c1.085-0.428,1.629-0.954,1.617-1.564c-0.009-0.478-0.382-0.905-0.974-1.117l-0.002-0.001c-0.199-0.083-0.436-0.128-0.667-0.128c-0.158,0-0.393,0.022-0.613,0.124c-0.516,0.242-0.98,0.373-1.379,0.391c-0.265-0.012-0.439-0.079-0.537-0.134c0.013-0.22,0.027-0.447,0.042-0.685l0.006-0.092c0.137-2.174,0.307-4.881-0.403-6.474C38.117,16.33,33.633,15.962,32.309,15.962L32.309,15.962z',
    mask: 'M0,0v64h64V0H0z M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z',
    color: '#FFC91B'
  },
  soundcloud: {
    icon: 'M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z',
    mask: 'M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z',
    color: '#FF5700'
  },
  spotify: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2',
    mask: 'M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z',
    color: '#2EBD59'
  },
  squarespace: {
    icon: 'M46.2,27.6c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0 l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.6,9.6c1.2,1.2,3.2,1.2,4.4,0l7.5-7.5C48.6,34,48.6,30,46.2,27.6z  M42.9,30.9c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2 c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C43.5,32.5,43.5,31.5,42.9,30.9z M39.6,21.1c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2 c0.6,0.6,1.6,0.6,2.2,0l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.6,0.6,2.2,0C40.2,22.7,40.2,21.7,39.6,21.1z M36.4,24.4 c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l9.6-9.6c-1.2-1.2-3.2-1.2-4.4,0l-7.5,7.5 c-2.4,2.4-2.4,6.3,0,8.7c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C37,25.9,37,25,36.4,24.4z',
    mask: 'M0,0v64h64V0H0z M39.6,21.1c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8 c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8C33.3,18.7,37.2,18.7,39.6,21.1z M17.8,36.4c-2.4-2.4-2.4-6.3,0-8.7l7.5-7.5 c1.2-1.2,3.2-1.2,4.4,0L20,29.8c-1.2,1.2-1.2,3.2,0,4.4c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2 l-9.8,9.8C24.1,38.8,20.2,38.8,17.8,36.4z M24.4,42.9c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8 c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-9.8,9.8C30.7,45.3,26.8,45.3,24.4,42.9z M46.2,36.4l-7.5,7.5c-1.2,1.2-3.2,1.2-4.4,0 l9.6-9.6c1.2-1.2,1.2-3.2,0-4.4c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8 c2.4-2.4,6.3-2.4,8.7,0C48.6,30,48.6,34,46.2,36.4z',
    color: '#1C1C1C'
  },
  tumblr: {
    icon: 'M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z',
    mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
    color: '#2c4762'
  },
  twitch: {
    icon: 'M40,25.6h-2.5v7.6H40V25.6z M33,25.6h-2.5v7.6H33V25.6z M20.9,18L19,23.1v20.4h7v3.8h3.8l3.8-3.8h5.7l7.6-7.6V18H20.9z M44.5,34.5L40,39h-7l-3.8,3.8V39h-5.7V20.5h21V34.5z',
    mask: 'M0,0v64h64V0H0z M47,35.8l-7.6,7.6h-5.7l-3.8,3.8H26v-3.8h-7V23.1l1.9-5.1H47V35.8z M29.2,42.8L33,39h7l4.5-4.5 v-14h-21V39h5.7V42.8z M37.5,25.6H40v7.6h-2.5V25.6z M30.5,25.6H33v7.6h-2.5V25.6z',
    color: '#6441A5'
  },
  twitter: {
    icon: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
    mask: 'M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z',
    color: '#00aced'
  },
  vevo: {
    icon: 'M43,21c-4.5,0-5.4,2.7-6.8,4.6c0,0-3.7,5.6-5.1,7.7l-3-12.3H20l5.1,20.6c1.1,3.7,4.1,3.4,4.1,3.4 c2.1,0,3.6-1.1,5-3.1L48,21C48,21,43.2,21,43,21z',
    mask: 'M0,0v64h64V0H0z M34.2,41.9c-1.4,2.1-2.9,3.1-5,3.1c0,0-3,0.2-4.1-3.4L20,21h8.1l3,12.3c1.4-2.1,5.1-7.7,5.1-7.7 c1.4-1.9,2.2-4.6,6.8-4.6c0.2,0,5,0,5,0L34.2,41.9z',
    color: '#ED1A3B'
  },
  vimeo: {
    icon: 'M47,25c-0.1,2.9-2.2,6.9-6.1,12c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8 c-0.8-3-1.6-5.9-2.4-8.9c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7 c2.3-0.2,3.8,1.4,4.3,4.8c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5 c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5c1.5-4.8,4.3-7.2,8.4-7C45.7,19.1,47.2,21.1,47,25z',
    mask: 'M0,0v64h64V0H0z M40.9,37c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8c-0.8-3-1.6-5.9-2.4-8.9 c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7c2.3-0.2,3.8,1.4,4.3,4.8 c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5 c1.5-4.8,4.3-7.2,8.4-7c3.1,0.1,4.5,2.1,4.4,6C46.9,27.9,44.8,31.9,40.9,37z',
    color: '#1ab7ea'
  },
  vine: {
    icon: 'M45.2,31.9c-0.8,0.2-1.5,0.3-2.2,0.3c-3.8,0-6.7-2.6-6.7-7.2c0-2.3,0.9-3.4,2.1-3.4 c1.2,0,2,1.1,2,3.2c0,1.2-0.3,2.5-0.6,3.3c0,0,1.2,2,4.4,1.4c0.7-1.5,1-3.5,1-5.2c0-4.6-2.3-7.3-6.6-7.3c-4.4,0-7,3.4-7,7.9 c0,4.4,2.1,8.2,5.5,10c-1.4,2.9-3.3,5.4-5.2,7.3c-3.5-4.2-6.6-9.8-7.9-20.7h-5.1c2.4,18.1,9.4,23.9,11.2,25c1.1,0.6,2,0.6,2.9,0.1 c1.5-0.9,6-5.4,8.6-10.7c1.1,0,2.3-0.1,3.6-0.4V31.9z',
    mask: 'M0,0v64h64V0H0z M38.4,21.5c-1.2,0-2.1,1.2-2.1,3.4c0,4.6,2.9,7.2,6.7,7.2c0.7,0,1.4-0.1,2.2-0.3v3.6 c-1.3,0.3-2.5,0.4-3.6,0.4c-2.5,5.3-7,9.8-8.6,10.7c-1,0.5-1.9,0.6-2.9-0.1c-1.9-1.1-8.9-6.9-11.2-25H24c1.3,10.9,4.4,16.5,7.9,20.7 c1.9-1.9,3.7-4.4,5.2-7.3c-3.4-1.7-5.5-5.5-5.5-10c0-4.5,2.6-7.9,7-7.9c4.3,0,6.6,2.7,6.6,7.3c0,1.7-0.4,3.7-1,5.2 c-3.2,0.6-4.4-1.4-4.4-1.4c0.2-0.8,0.6-2.1,0.6-3.3C40.3,22.6,39.5,21.5,38.4,21.5z',
    color: '#00BF8F'
  },
  vk: {
    icon: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
    mask: 'M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
    color: '#45668e'
  },
  vsco: {
    icon: 'M32,16c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,17.1,33.4,16,32,16z M18.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C20.9,30.6,19.8,29.5,18.5,29.5z M25.2,22.8c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.7,23.9,26.6,22.8,25.2,22.8z M38.7,27.6c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C36.2,26.5,37.3,27.6,38.7,27.6z M25.1,36.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.6,37.3,26.5,36.2,25.1,36.2z M31.9,34.4c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C29.5,33.3,30.6,34.4,31.9,34.4z M45.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C48,30.6,46.9,29.5,45.5,29.5z M32,43.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,44.2,33.4,43.1,32,43.1z M38.8,36.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C41.2,37.4,40.1,36.3,38.8,36.3z',
    mask: 'M0,0v64h64V0H0z M18.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C20.9,33.4,19.8,34.5,18.5,34.5z M25.1,41.1c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.6,40,26.5,41.1,25.1,41.1z M25.2,27.7c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.7,26.6,26.6,27.7,25.2,27.7z M32,48c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,46.9,33.4,48,32,48z M29.5,31.9c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5 C30.6,34.4,29.5,33.3,29.5,31.9z M32,20.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,19.8,33.4,20.9,32,20.9z M38.7,22.7c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5 C36.2,23.8,37.3,22.7,38.7,22.7z M38.8,41.2c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C41.2,40.1,40.1,41.2,38.8,41.2z M45.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C48,33.4,46.9,34.5,45.5,34.5z',
    color: '#83878A'
  },
  whatsapp: {
    icon: 'm42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915',
    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
    color: '#2cb742'
  },
  yelp: {
    icon: 'M29.5,35.7c0.5-0.1,0.9-0.6,0.9-1.2c0-0.6-0.3-1.2-0.8-1.4c0,0-1.5-0.6-1.5-0.6 c-5-2.1-5.2-2.1-5.5-2.1c-0.4,0-0.7,0.2-1,0.6c-0.5,0.8-0.7,3.3-0.5,5c0.1,0.6,0.2,1,0.3,1.3c0.2,0.4,0.5,0.6,0.9,0.6 c0.2,0,0.4,0,5.1-1.5C27.5,36.4,29.5,35.7,29.5,35.7z M32.2,37.6c-0.6-0.2-1.2-0.1-1.5,0.4c0,0-1,1.2-1,1.2 c-3.5,4.1-3.7,4.3-3.7,4.5c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.4,0.3,0.6c0.8,1,4.7,2.4,6,2.2c0.4-0.1,0.7-0.3,0.9-0.7 C33,46.1,33,45.9,33,41c0,0,0-2.2,0-2.2C33.1,38.3,32.7,37.8,32.2,37.6z M32.3,16.8c-0.1-0.4-0.4-0.7-0.9-0.8 c-1.3-0.3-6.5,1.1-7.5,2.1c-0.3,0.3-0.4,0.7-0.3,1.1c0.2,0.3,6.5,10.4,6.5,10.4c0.9,1.5,1.7,1.3,2,1.2c0.3-0.1,1-0.3,0.9-2.1 C33,26.6,32.4,17.3,32.3,16.8z M36.9,33.4C36.9,33.4,36.8,33.5,36.9,33.4c0.2-0.1,0.7-0.2,1.5-0.4c5.3-1.3,5.5-1.3,5.7-1.5 c0.3-0.2,0.5-0.6,0.5-1c0,0,0,0,0,0c-0.1-1.3-2.4-4.7-3.5-5.2c-0.4-0.2-0.8-0.2-1.1,0c-0.2,0.1-0.4,0.3-3.2,4.2c0,0-1.3,1.7-1.3,1.8 c-0.3,0.4-0.3,1,0,1.5C35.8,33.3,36.3,33.6,36.9,33.4z M44.4,38.6c-0.2-0.1-0.3-0.2-5-1.7c0,0-2-0.7-2.1-0.7c-0.5-0.2-1.1,0-1.4,0.5 c-0.4,0.5-0.5,1.1-0.1,1.6l0.8,1.3c2.8,4.5,3,4.8,3.2,5c0.3,0.2,0.7,0.3,1.1,0.1c1.2-0.5,3.7-3.7,3.9-5 C44.8,39.2,44.7,38.8,44.4,38.6z',
    mask: 'M0,0v64h64V0H0z M22.4,37.9c-0.4,0-0.7-0.2-0.9-0.6c-0.1-0.3-0.2-0.7-0.3-1.3c-0.2-1.7,0-4.2,0.5-5 c0.2-0.4,0.6-0.6,1-0.6c0.3,0,0.5,0.1,5.5,2.1c0,0,1.5,0.6,1.5,0.6c0.5,0.2,0.9,0.7,0.8,1.4c0,0.6-0.4,1.1-0.9,1.2 c0,0-2.1,0.7-2.1,0.7C22.8,37.9,22.7,37.9,22.4,37.9z M33,41c0,4.9,0,5-0.1,5.3c-0.1,0.4-0.4,0.6-0.9,0.7c-1.2,0.2-5.1-1.2-6-2.2 c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0-0.3,0.1-0.4c0.1-0.2,0.2-0.4,3.7-4.5c0,0,1-1.2,1-1.2c0.3-0.4,1-0.6,1.5-0.4 c0.6,0.2,0.9,0.7,0.9,1.2C33,38.8,33,41,33,41z M32.2,30.8c-0.3,0.1-1,0.3-2-1.2c0,0-6.4-10.1-6.5-10.4c-0.1-0.3,0-0.7,0.3-1.1 c1-1,6.1-2.4,7.5-2.1c0.4,0.1,0.7,0.4,0.9,0.8c0.1,0.4,0.7,9.8,0.8,11.9C33.2,30.5,32.4,30.7,32.2,30.8z M35.4,31.3 c0,0,1.3-1.8,1.3-1.8c2.8-3.9,3-4.1,3.2-4.2c0.3-0.2,0.7-0.2,1.1,0c1.1,0.5,3.4,3.9,3.5,5.2c0,0,0,0,0,0c0,0.4-0.1,0.8-0.5,1 c-0.2,0.1-0.4,0.2-5.7,1.5c-0.8,0.2-1.3,0.3-1.6,0.4c0,0,0,0,0,0c-0.5,0.1-1.1-0.1-1.4-0.6C35.1,32.3,35.1,31.7,35.4,31.3z  M44.7,39.6c-0.2,1.3-2.7,4.5-3.9,5c-0.4,0.2-0.8,0.1-1.1-0.1c-0.2-0.2-0.4-0.5-3.2-5l-0.8-1.3c-0.3-0.5-0.3-1.1,0.1-1.6 c0.4-0.5,0.9-0.6,1.4-0.5c0,0,2.1,0.7,2.1,0.7c4.6,1.5,4.8,1.6,5,1.7C44.7,38.8,44.8,39.2,44.7,39.6z',
    color: '#B90C04'
  },
  youtube: {
    icon: 'M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z',
    mask: 'M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z',
    color: '#ff3333'
  }
};

/***/ }),

/***/ "./node_modules/react-social-icons/lib/background.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-social-icons/lib/background.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(/*! ./styles.js */ "./node_modules/react-social-icons/lib/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-unused-vars, react/prop-types
function Background(_ref) {
  var networkKey = _ref.networkKey;
  var props = (0, _objectWithoutProperties3.default)(_ref, ['networkKey']);

  return _react2.default.createElement(
    'g',
    (0, _extends3.default)({}, props, { className: 'social-svg-background', style: _styles.socialSvgContent }),
    _react2.default.createElement('circle', { cx: '32', cy: '32', r: '31' })
  );
}

exports.default = Background;

/***/ }),

/***/ "./node_modules/react-social-icons/lib/icon.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-social-icons/lib/icon.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _networks = __webpack_require__(/*! ./networks */ "./node_modules/react-social-icons/lib/networks.js");

var _styles = __webpack_require__(/*! ./styles.js */ "./node_modules/react-social-icons/lib/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Icon(_ref) {
  var networkKey = _ref.networkKey;
  var props = (0, _objectWithoutProperties3.default)(_ref, ['networkKey']);

  return _react2.default.createElement(
    'g',
    (0, _extends3.default)({}, props, { className: 'social-svg-icon', style: _styles.socialSvgContent }),
    _react2.default.createElement('path', { d: (0, _networks.iconFor)(networkKey) })
  );
}

exports.default = Icon;

/***/ }),

/***/ "./node_modules/react-social-icons/lib/mask.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-social-icons/lib/mask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _networks = __webpack_require__(/*! ./networks */ "./node_modules/react-social-icons/lib/networks.js");

var _styles = __webpack_require__(/*! ./styles.js */ "./node_modules/react-social-icons/lib/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getStyle(_ref) {
  var color = _ref.color;
  var networkKey = _ref.networkKey;

  return (0, _extends3.default)({}, _styles.socialSvgMask, {
    fill: color || (0, _networks.colorFor)(networkKey)
  });
}

function Mask(_ref2) {
  var color = _ref2.color;
  var networkKey = _ref2.networkKey;
  var rest = (0, _objectWithoutProperties3.default)(_ref2, ['color', 'networkKey']);

  return _react2.default.createElement(
    'g',
    (0, _extends3.default)({}, rest, { className: 'social-svg-mask', style: getStyle({ color: color, networkKey: networkKey }) }),
    _react2.default.createElement('path', { d: (0, _networks.maskFor)(networkKey) })
  );
}

exports.default = Mask;

/***/ }),

/***/ "./node_modules/react-social-icons/lib/networks.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-social-icons/lib/networks.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.KEYS = undefined;
exports.iconFor = iconFor;
exports.maskFor = maskFor;
exports.colorFor = colorFor;
exports.keyFor = keyFor;
exports.keysFor = keysFor;

var _networksDb = __webpack_require__(/*! ./_networks-db */ "./node_modules/react-social-icons/lib/_networks-db.js");

var _networksDb2 = _interopRequireDefault(_networksDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_KEY = 'sharethis';
var KEYS = exports.KEYS = Object.keys(_networksDb2.default);
var KEYS_REGEX = new RegExp('(?:https?:\\/\\/(?:[a-z0-9]*.)?)?(' + KEYS.join('|') + ').*');

function iconFor(key) {
  return _networksDb2.default[key] ? _networksDb2.default[key].icon : null;
}

function maskFor(key) {
  return _networksDb2.default[key] ? _networksDb2.default[key].mask : null;
}

function colorFor(key) {
  return _networksDb2.default[key] ? _networksDb2.default[key].color : null;
}

function keyFor(url) {
  if (!url) {
    return DEFAULT_KEY;
  }

  var key = url.replace(KEYS_REGEX, '$1');
  return key === url ? DEFAULT_KEY : key;
}

function keysFor(urls) {
  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return [];
  }

  return urls.map(keyFor);
}

/***/ }),

/***/ "./node_modules/react-social-icons/lib/react-social-icons.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-social-icons/lib/react-social-icons.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SocialIcon = undefined;

var _socialIcon = __webpack_require__(/*! ./social-icon */ "./node_modules/react-social-icons/lib/social-icon.js");

var _socialIcon2 = _interopRequireDefault(_socialIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SocialIcon = _socialIcon2.default;

/***/ }),

/***/ "./node_modules/react-social-icons/lib/social-icon.js":
/*!************************************************************!*\
  !*** ./node_modules/react-social-icons/lib/social-icon.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(/*! babel-runtime/helpers/objectWithoutProperties */ "./node_modules/babel-runtime/helpers/objectWithoutProperties.js");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _background = __webpack_require__(/*! ./background */ "./node_modules/react-social-icons/lib/background.js");

var _background2 = _interopRequireDefault(_background);

var _icon = __webpack_require__(/*! ./icon */ "./node_modules/react-social-icons/lib/icon.js");

var _icon2 = _interopRequireDefault(_icon);

var _mask = __webpack_require__(/*! ./mask */ "./node_modules/react-social-icons/lib/mask.js");

var _mask2 = _interopRequireDefault(_mask);

var _networks = __webpack_require__(/*! ./networks */ "./node_modules/react-social-icons/lib/networks.js");

var _styles = __webpack_require__(/*! ./styles */ "./node_modules/react-social-icons/lib/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNetworkKey(props) {
  return props.network || (0, _networks.keyFor)(props.url);
}

function SocialIcon(props) {
  var url = props.url;
  var network = props.network;
  var color = props.color;
  var className = props.className;
  var label = props.label;
  var rest = (0, _objectWithoutProperties3.default)(props, ['url', 'network', 'color', 'className', 'label']);

  var networkKey = getNetworkKey({ url: url, network: network });

  return _react2.default.createElement(
    'a',
    (0, _extends3.default)({}, rest, {
      href: url,
      target: '_blank',
      rel: 'noopener',
      className: (0, _classnames2.default)('social-icon', className),
      style: (0, _extends3.default)({}, _styles.socialIcon, props.style),
      'aria-label': label || networkKey }),
    _react2.default.createElement(
      'div',
      { className: 'social-container', style: _styles.socialContainer },
      _react2.default.createElement(
        'svg',
        { className: 'social-svg', style: _styles.socialSvg, viewBox: '0 0 64 64' },
        _react2.default.createElement(_background2.default, null),
        _react2.default.createElement(_icon2.default, { networkKey: networkKey }),
        _react2.default.createElement(_mask2.default, { networkKey: networkKey, color: color })
      )
    )
  );
}

exports.default = SocialIcon;

/***/ }),

/***/ "./node_modules/react-social-icons/lib/styles.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-social-icons/lib/styles.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.socialSvgMask = exports.socialSvgContent = exports.socialSvg = exports.socialContainer = exports.socialIcon = undefined;

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socialIcon = exports.socialIcon = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  position: 'relative',
  overflow: 'hidden',
  verticalAlign: 'middle'
};

var socialContainer = exports.socialContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
};

var socialSvg = exports.socialSvg = {
  borderRadius: '50%',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  fillRule: 'evenodd'
};

var socialSvgContent = exports.socialSvgContent = {
  msTransition: 'fill 170ms ease-in-out',
  OTransition: 'fill 170ms ease-in-out',
  MozTransition: 'fill 170ms ease-in-out',
  WebkitTransition: 'fill 170ms ease-in-out',
  transition: 'fill 170ms ease-in-out',
  fill: 'transparent'
};

var socialSvgMask = exports.socialSvgMask = (0, _extends3.default)({}, socialSvgContent, {
  fill: '#0f0b0b'
});

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.6.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var c=null,f=3,h=-1,k=-1,l=!1,m=!1,n="object"===typeof performance&&"function"===typeof performance.now,q={timeRemaining:n?function(){if(null!==c&&c.expirationTime<k)return 0;var a=p()-performance.now();return 0<a?a:0}:function(){if(null!==c&&c.expirationTime<k)return 0;var a=p()-Date.now();return 0<a?a:0},didTimeout:!1};function r(){if(!l){var a=c.expirationTime;m?t():m=!0;u(v,a)}}
function w(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=f,R=k;f=a;k=b;try{var g=d(q)}finally{f=e,k=R}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=g.next=g.previous=g;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===c&&(c=g,r());b=d.previous;b.next=d.previous=g;g.next=d;g.previous=
b}}function x(){if(-1===h&&null!==c&&1===c.priorityLevel){l=!0;q.didTimeout=!0;try{do w();while(null!==c&&1===c.priorityLevel)}finally{l=!1,null!==c?r():m=!1}}}function v(a){l=!0;q.didTimeout=a;try{if(a)for(;null!==c;){var b=exports.unstable_now();if(c.expirationTime<=b){do w();while(null!==c&&c.expirationTime<=b)}else break}else if(null!==c){do w();while(null!==c&&0<p()-exports.unstable_now())}}finally{l=!1,null!==c?r():m=!1,x()}}
var y=Date,z="function"===typeof setTimeout?setTimeout:void 0,A="function"===typeof clearTimeout?clearTimeout:void 0,B="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,C="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,D,E;function F(a){D=B(function(b){A(E);a(b)});E=z(function(){C(D);a(exports.unstable_now())},100)}if(n){var G=performance;exports.unstable_now=function(){return G.now()}}else exports.unstable_now=function(){return y.now()};var u,t,p;
if("undefined"!==typeof window&&window._schedMock){var H=window._schedMock;u=H[0];t=H[1];p=H[2]}else if("undefined"===typeof window||"function"!==typeof window.addEventListener){var I=null,J=-1,K=function(a,b){if(null!==I){var d=I;I=null;try{J=b,d(a)}finally{J=-1}}};u=function(a,b){-1!==J?setTimeout(u,0,a,b):(I=a,setTimeout(K,b,!0,b),setTimeout(K,1073741823,!1,1073741823))};t=function(){I=null};p=function(){return Infinity};exports.unstable_now=function(){return-1===J?0:J}}else{"undefined"!==typeof console&&
("function"!==typeof B&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof C&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var L=null,M=!1,N=-1,O=!1,P=!1,Q=0,S=33,T=33;p=function(){return Q};var U="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",
function(a){if(a.source===window&&a.data===U){M=!1;a=L;var b=N;L=null;N=-1;var d=exports.unstable_now(),e=!1;if(0>=Q-d)if(-1!==b&&b<=d)e=!0;else{O||(O=!0,F(V));L=a;N=b;return}if(null!==a){P=!0;try{a(e)}finally{P=!1}}}},!1);var V=function(a){if(null!==L){F(V);var b=a-Q+T;b<T&&S<T?(8>b&&(b=8),T=b<S?S:b):S=b;Q=a+T;M||(M=!0,window.postMessage(U,"*"))}else O=!1};u=function(a,b){L=a;N=b;P||0>b?window.postMessage(U,"*"):O||(O=!0,F(V))};t=function(){L=null;M=!1;N=-1}}exports.unstable_ImmediatePriority=1;
exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:break;default:a=3}var d=f,e=h;f=a;h=exports.unstable_now();try{return b()}finally{f=d,h=e,x()}};
exports.unstable_scheduleCallback=function(a,b){var d=-1!==h?h:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;else switch(f){case 1:b=d+-1;break;case 2:b=d+250;break;case 4:b=d+1073741823;break;default:b=d+5E3}a={callback:a,priorityLevel:f,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,r();else{d=null;var e=c;do{if(e.expirationTime>b){d=e;break}e=e.next}while(e!==c);null===d?d=c:d===c&&(c=a,r());b=d.previous;b.next=d.previous=
a;a.next=d;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=f;return function(){var d=f,e=h;f=b;h=exports.unstable_now();try{return a.apply(this,arguments)}finally{f=d,h=e,x()}}};exports.unstable_getCurrentPriorityLevel=function(){return f};


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/AuthorBio/AuthorBio.css":
/*!************************************************!*\
  !*** ./src/components/AuthorBio/AuthorBio.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/AuthorBio/AuthorBio.jsx":
/*!************************************************!*\
  !*** ./src/components/AuthorBio/AuthorBio.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthorBio_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthorBio.css */ "./src/components/AuthorBio/AuthorBio.css");
/* harmony import */ var _AuthorBio_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AuthorBio_css__WEBPACK_IMPORTED_MODULE_2__);




var AuthorBio =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AuthorBio, _React$Component);

  function AuthorBio() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorBio.prototype;

  _proto.render = function render() {
    var bio = this.props.bio;

    if (bio) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "author-bio"
      }, bio);
    }

    return null;
  };

  return AuthorBio;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorBio);

/***/ }),

/***/ "./src/components/AuthorImage/AuthorImage.css":
/*!****************************************************!*\
  !*** ./src/components/AuthorImage/AuthorImage.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/AuthorImage/AuthorImage.jsx":
/*!****************************************************!*\
  !*** ./src/components/AuthorImage/AuthorImage.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AuthorImage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorImage.css */ "./src/components/AuthorImage/AuthorImage.css");
/* harmony import */ var _AuthorImage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AuthorImage_css__WEBPACK_IMPORTED_MODULE_3__);





var AuthorImage =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(AuthorImage, _React$Component);

  function AuthorImage() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorImage.prototype;

  _proto.render = function render() {
    var _this$props$author = this.props.author,
        name = _this$props$author.name,
        image = _this$props$author.image,
        url = _this$props$author.url;

    if (image) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("figure", {
        className: "author-image"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "img",
        href: url,
        style: {
          backgroundImage: "url(\"" + image + "\")"
        }
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "hidden"
      }, name + "'s Picture")));
    }

    return null;
  };

  return AuthorImage;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorImage);

/***/ }),

/***/ "./src/components/AuthorInfo/AuthorInfo.css":
/*!**************************************************!*\
  !*** ./src/components/AuthorInfo/AuthorInfo.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/AuthorInfo/AuthorInfo.jsx":
/*!**************************************************!*\
  !*** ./src/components/AuthorInfo/AuthorInfo.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _AuthorInfo_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthorInfo.css */ "./src/components/AuthorInfo/AuthorInfo.css");
/* harmony import */ var _AuthorInfo_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AuthorInfo_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_AuthorMeta_AuthorMeta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AuthorMeta/AuthorMeta */ "./src/components/AuthorMeta/AuthorMeta.jsx");
/* harmony import */ var _AuthorLocation_AuthorLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AuthorLocation/AuthorLocation */ "./src/components/AuthorLocation/AuthorLocation.jsx");
/* harmony import */ var _AuthorWebsite_AuthorWebsite__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AuthorWebsite/AuthorWebsite */ "./src/components/AuthorWebsite/AuthorWebsite.jsx");
/* harmony import */ var _AuthorLink_AuthorLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../AuthorLink/AuthorLink */ "./src/components/AuthorLink/AuthorLink.jsx");










var Bio = function Bio(props) {
  var bio = props.bio,
      morePostsUrl = props.morePostsUrl;

  if (bio) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, bio);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "Read ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: morePostsUrl
  }, "more posts"), " by this author.");
};

var AuthorInfo =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(AuthorInfo, _React$Component);

  function AuthorInfo() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorInfo.prototype;

  _proto.render = function render() {
    var prefix = this.props.prefix;
    var _this$props$author = this.props.author,
        uid = _this$props$author.uid,
        name = _this$props$author.name,
        image = _this$props$author.image,
        bio = _this$props$author.bio,
        url = _this$props$author.url,
        location = _this$props$author.location;
    var authorInfoUrl = prefix ? prefix + "/" + uid : uid;

    if (image) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "author"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AuthorLink_AuthorLink__WEBPACK_IMPORTED_MODULE_8__["default"], {
        url: authorInfoUrl,
        name: name
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Bio, {
        bio: bio,
        morePostsUrl: authorInfoUrl
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorMeta_AuthorMeta__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AuthorLocation_AuthorLocation__WEBPACK_IMPORTED_MODULE_6__["default"], {
        location: location
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AuthorWebsite_AuthorWebsite__WEBPACK_IMPORTED_MODULE_7__["default"], {
        url: url
      })));
    }

    return null;
  };

  return AuthorInfo;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorInfo);

/***/ }),

/***/ "./src/components/AuthorLink/AuthorLink.css":
/*!**************************************************!*\
  !*** ./src/components/AuthorLink/AuthorLink.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/AuthorLink/AuthorLink.jsx":
/*!**************************************************!*\
  !*** ./src/components/AuthorLink/AuthorLink.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _AuthorLink_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthorLink.css */ "./src/components/AuthorLink/AuthorLink.css");
/* harmony import */ var _AuthorLink_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AuthorLink_css__WEBPACK_IMPORTED_MODULE_4__);






var AuthorLink =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(AuthorLink, _React$Component);

  function AuthorLink() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorLink.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        name = _this$props.name,
        url = _this$props.url;

    if (name && url) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: url
      }, name);
    }

    return null;
  };

  return AuthorLink;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorLink);

/***/ }),

/***/ "./src/components/AuthorLocation/AuthorLocation.jsx":
/*!**********************************************************!*\
  !*** ./src/components/AuthorLocation/AuthorLocation.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var AuthorLocation =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AuthorLocation, _React$Component);

  function AuthorLocation() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorLocation.prototype;

  _proto.render = function render() {
    var location = this.props.location;

    if (location) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "author-location icon-location"
      }, location);
    }

    return null;
  };

  return AuthorLocation;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorLocation);

/***/ }),

/***/ "./src/components/AuthorMeta/AuthorMeta.css":
/*!**************************************************!*\
  !*** ./src/components/AuthorMeta/AuthorMeta.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/AuthorMeta/AuthorMeta.jsx":
/*!**************************************************!*\
  !*** ./src/components/AuthorMeta/AuthorMeta.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AuthorMeta_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorMeta.css */ "./src/components/AuthorMeta/AuthorMeta.css");
/* harmony import */ var _AuthorMeta_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AuthorMeta_css__WEBPACK_IMPORTED_MODULE_3__);





var AuthorMeta =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AuthorMeta, _React$Component);

  function AuthorMeta() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorMeta.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("author-meta", className);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes
    }, children);
  };

  return AuthorMeta;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorMeta);

/***/ }),

/***/ "./src/components/AuthorName/AuthorName.css":
/*!**************************************************!*\
  !*** ./src/components/AuthorName/AuthorName.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/AuthorName/AuthorName.jsx":
/*!**************************************************!*\
  !*** ./src/components/AuthorName/AuthorName.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AuthorName_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorName.css */ "./src/components/AuthorName/AuthorName.css");
/* harmony import */ var _AuthorName_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AuthorName_css__WEBPACK_IMPORTED_MODULE_3__);





var AuthorName =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(AuthorName, _React$Component);

  function AuthorName() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorName.prototype;

  _proto.render = function render() {
    var name = this.props.name;

    if (name) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "author-title"
      }, name);
    }

    return null;
  };

  return AuthorName;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorName);

/***/ }),

/***/ "./src/components/AuthorProfile/AuthorProfile.css":
/*!********************************************************!*\
  !*** ./src/components/AuthorProfile/AuthorProfile.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/AuthorProfile/AuthorProfile.jsx":
/*!********************************************************!*\
  !*** ./src/components/AuthorProfile/AuthorProfile.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AuthorProfile_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorProfile.css */ "./src/components/AuthorProfile/AuthorProfile.css");
/* harmony import */ var _AuthorProfile_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AuthorProfile_css__WEBPACK_IMPORTED_MODULE_3__);





var AuthorProfile =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AuthorProfile, _React$Component);

  function AuthorProfile() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorProfile.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("author-profile", className);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: classes
    }, children);
  };

  return AuthorProfile;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorProfile);

/***/ }),

/***/ "./src/components/AuthorStats/AuthorStats.jsx":
/*!****************************************************!*\
  !*** ./src/components/AuthorStats/AuthorStats.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var AuthorStats =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AuthorStats, _React$Component);

  function AuthorStats() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorStats.prototype;

  _proto.render = function render() {
    var postEdges = this.props.postEdges;

    var getPostText = function getPostText() {
      if (postEdges) {
        return postEdges.length > 1 ? postEdges.length + " posts" : postEdges.length + " post";
      }

      return "No posts";
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "author-stats"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "icon-stats"
    }), " ", getPostText());
  };

  return AuthorStats;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorStats);

/***/ }),

/***/ "./src/components/AuthorThumbnail/AuthorThumbnail.css":
/*!************************************************************!*\
  !*** ./src/components/AuthorThumbnail/AuthorThumbnail.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/AuthorThumbnail/AuthorThumbnail.jsx":
/*!************************************************************!*\
  !*** ./src/components/AuthorThumbnail/AuthorThumbnail.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AuthorThumbnail_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorThumbnail.css */ "./src/components/AuthorThumbnail/AuthorThumbnail.css");
/* harmony import */ var _AuthorThumbnail_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AuthorThumbnail_css__WEBPACK_IMPORTED_MODULE_3__);





var AuthorThumbnail =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(AuthorThumbnail, _React$Component);

  function AuthorThumbnail() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorThumbnail.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        avatar = _this$props.avatar,
        name = _this$props.name;

    if (avatar && name) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        className: "author-thumb",
        src: avatar,
        alt: name,
        "data-pin-nopin": "true"
      });
    }

    return null;
  };

  return AuthorThumbnail;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorThumbnail);

/***/ }),

/***/ "./src/components/AuthorWebsite/AuthorWebsite.jsx":
/*!********************************************************!*\
  !*** ./src/components/AuthorWebsite/AuthorWebsite.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var AuthorWebsite =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(AuthorWebsite, _React$Component);

  function AuthorWebsite() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = AuthorWebsite.prototype;

  _proto.render = function render() {
    var url = this.props.url;

    if (url) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "author-link icon-link"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: url
      }, url));
    }

    return null;
  };

  return AuthorWebsite;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AuthorWebsite);

/***/ }),

/***/ "./src/components/BlogLogo/BlogLogo.css":
/*!**********************************************!*\
  !*** ./src/components/BlogLogo/BlogLogo.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/BlogLogo/BlogLogo.jsx":
/*!**********************************************!*\
  !*** ./src/components/BlogLogo/BlogLogo.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _BlogLogo_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlogLogo.css */ "./src/components/BlogLogo/BlogLogo.css");
/* harmony import */ var _BlogLogo_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BlogLogo_css__WEBPACK_IMPORTED_MODULE_3__);





var BlogLogo =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(BlogLogo, _Component);

  function BlogLogo() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BlogLogo.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        logo = _this$props.logo,
        url = _this$props.url,
        title = _this$props.title;

    if (logo) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        className: "blog-logo",
        to: url || "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: logo,
        alt: title
      }));
    }

    return null;
  };

  return BlogLogo;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BlogLogo);

/***/ }),

/***/ "./src/components/Disqus/Disqus.jsx":
/*!******************************************!*\
  !*** ./src/components/Disqus/Disqus.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-disqus-comments */ "./node_modules/react-disqus-comments/build/main.js");
/* harmony import */ var react_disqus_comments__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_disqus_comments__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);






var Disqus =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Disqus, _Component);

  function Disqus(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      toasts: []
    };
    _this.notifyAboutComment = _this.notifyAboutComment.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    _this.onSnackbarDismiss = _this.onSnackbarDismiss.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    return _this;
  }

  var _proto = Disqus.prototype;

  _proto.onSnackbarDismiss = function onSnackbarDismiss() {
    var _this$state$toasts = this.state.toasts,
        toasts = _this$state$toasts.slice(1);

    this.setState({
      toasts: toasts
    });
  };

  _proto.notifyAboutComment = function notifyAboutComment() {
    var toasts = this.state.toasts.slice();
    toasts.push({
      text: "New comment available!"
    });
    this.setState({
      toasts: toasts
    });
  };

  _proto.render = function render() {
    var postNode = this.props.postNode;

    if (!_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.disqusShortname) {
      return null;
    }

    var post = postNode.frontmatter;
    var url = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteUrl + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.pathPrefix + postNode.fields.slug;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_disqus_comments__WEBPACK_IMPORTED_MODULE_3___default.a, {
      shortname: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.disqusShortname,
      identifier: post.title,
      title: post.title,
      url: url,
      category_id: post.category_id,
      onNewComment: this.notifyAboutComment
    });
  };

  return Disqus;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Disqus);

/***/ }),

/***/ "./src/components/Drawer/Drawer.css":
/*!******************************************!*\
  !*** ./src/components/Drawer/Drawer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Drawer/Drawer.jsx":
/*!******************************************!*\
  !*** ./src/components/Drawer/Drawer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Drawer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Drawer.css */ "./src/components/Drawer/Drawer.css");
/* harmony import */ var _Drawer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Drawer_css__WEBPACK_IMPORTED_MODULE_3__);





var Drawer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Drawer, _React$Component);

  function Drawer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Drawer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        className = _this$props.className;

    var getClassName = function getClassName(isOpened) {
      return isOpened ? "nav-opened" : "nav-closed";
    };

    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, getClassName(isOpen));
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes
    }, children);
  };

  return Drawer;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./src/components/Footer/Footer.css":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Footer/Footer.jsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.css */ "./src/components/Footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_3__);





var Footer =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Footer, _Component);

  function Footer() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Footer.prototype;

  _proto.render = function render() {
    var PoweredBy = function PoweredBy(props) {
      var show = props.show;

      if (show) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
          className: "poweredby"
        }, "Proudly published with ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "https://gatsbyjs.org"
        }, "Gatsby"));
      }

      return null;
    };

    var promoteGatsby = this.props.promoteGatsby;
    var _this$props$copyright = this.props.copyright,
        label = _this$props$copyright.label,
        url = _this$props$copyright.url,
        year = _this$props$copyright.year;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "menu-bar"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "familie"
    }, "Familie")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "bakermat"
    }, "Bakermat")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "documenten"
    }, "Documenten")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "onderzoek"
    }, "Onderzoek")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "contact"
    }, "Contact"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
      className: "site-footer clearfix"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "copyright"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: url || "/"
    }, label), " \xA9", " ", year || new Date().getFullYear()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PoweredBy, {
      show: promoteGatsby
    })));
  };

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Gallery/Gallery.css":
/*!********************************************!*\
  !*** ./src/components/Gallery/Gallery.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Gallery/Gallery.jsx":
/*!********************************************!*\
  !*** ./src/components/Gallery/Gallery.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.fixed */ "core-js/modules/es6.string.fixed");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Gallery_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Gallery.css */ "./src/components/Gallery/Gallery.css");
/* harmony import */ var _Gallery_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Gallery_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);








var Gallery =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Gallery, _Component);

  function Gallery() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Gallery.prototype;

  _proto.render = function render() {
    var zipped = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.zip(this.props.images, this.props.links, this.props.captions);

    zipped = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.sortBy(zipped, 1);
    zipped = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.filter(zipped, function (e) {
      return e[0] && e[1];
    });
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex-container-gallery"
    }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.map(zipped, function (e) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        className: "flex-item-gallery",
        key: e[1],
        to: e[1]
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        fixed: e[0].fixed
      }, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "flex-item-gallery-span"
      }, e[2]));
    })));
  };

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./src/components/GhostSubscribe/GhostSubscribe.css":
/*!**********************************************************!*\
  !*** ./src/components/GhostSubscribe/GhostSubscribe.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/GhostSubscribe/GhostSubscribe.jsx":
/*!**********************************************************!*\
  !*** ./src/components/GhostSubscribe/GhostSubscribe.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GhostSubscribe_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GhostSubscribe.css */ "./src/components/GhostSubscribe/GhostSubscribe.css");
/* harmony import */ var _GhostSubscribe_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_GhostSubscribe_css__WEBPACK_IMPORTED_MODULE_2__);




var GhostSubscribe =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(GhostSubscribe, _React$Component);

  function GhostSubscribe() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = GhostSubscribe.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        subscribers = _this$props.subscribers,
        blog = _this$props.blog; // const subscribeFormPlaceholder = "Your email address";

    if (subscribers && blog) {
      // Email subscribe form at the bottom of the page
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        className: "gh-subscribe"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "gh-subscribe-title"
      }, "Subscribe to ", blog.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Get the latest posts delivered right to your inbox."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "gh-subscribe-rss"
      }, "or subscribe", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "http://cloud.feedly.com/#subscription/feed/{blog.url}/rss/"
      }, "via RSS"), " ", "with Feedly!"));
    }

    return null;
  };

  return GhostSubscribe;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (GhostSubscribe);

/***/ }),

/***/ "./src/components/MainContent/MainContent.css":
/*!****************************************************!*\
  !*** ./src/components/MainContent/MainContent.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/MainContent/MainContent.jsx":
/*!****************************************************!*\
  !*** ./src/components/MainContent/MainContent.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainContent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainContent.css */ "./src/components/MainContent/MainContent.css");
/* harmony import */ var _MainContent_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MainContent_css__WEBPACK_IMPORTED_MODULE_3__);





var MainContent =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MainContent, _React$Component);

  function MainContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MainContent.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("content", this.props.className);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
      id: "content",
      className: classes,
      role: "main"
    }, children);
  };

  return MainContent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainContent);

/***/ }),

/***/ "./src/components/MainHeader/MainHeader.css":
/*!**************************************************!*\
  !*** ./src/components/MainHeader/MainHeader.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/MainHeader/MainHeader.jsx":
/*!**************************************************!*\
  !*** ./src/components/MainHeader/MainHeader.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainHeader_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainHeader.css */ "./src/components/MainHeader/MainHeader.css");
/* harmony import */ var _MainHeader_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MainHeader_css__WEBPACK_IMPORTED_MODULE_3__);





var MainHeader =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MainHeader, _React$Component);

  function MainHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MainHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        cover = _this$props.cover;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("main-header", this.props.className, {
      "no-cover": !cover
    });

    var getStyle = function getStyle() {
      if (cover) {
        return {
          backgroundImage: "url(\"" + cover + "\")"
        };
      }

      return null;
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: classes,
      style: getStyle()
    }, children);
  };

  return MainHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainHeader);

/***/ }),

/***/ "./src/components/MainHeader2/MainHeader2.css":
/*!****************************************************!*\
  !*** ./src/components/MainHeader2/MainHeader2.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/MainHeader2/MainHeader2.jsx":
/*!****************************************************!*\
  !*** ./src/components/MainHeader2/MainHeader2.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MainHeader2_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainHeader2.css */ "./src/components/MainHeader2/MainHeader2.css");
/* harmony import */ var _MainHeader2_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MainHeader2_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_5__);







var MainHeader2 =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MainHeader2, _React$Component);

  function MainHeader2(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      width: "auto",
      height: "100hv",
      top: "0px",
      left: "0px"
    };

    if (!_this.props.cover) {
      throw new Error("no cover specified");
    }

    _this.updateDimensions = _this.updateDimensions.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    return _this;
  }
  /**
   * Add event listener
   */


  var _proto = MainHeader2.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  };
  /**
   * Remove event listener
   */


  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  };

  _proto.updateDimensions = function updateDimensions() {
    var aspect = this.props.cover.fluid.aspectRatio;
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var orgw = w;
    var orgh = h;
    var calcH;
    var calcW;

    if (this.props.fillRatioHeight) {
      h = h * this.props.fillRatioHeight;
    } else if (this.props.fillHeight) {
      h = this.props.fillHeight;
    } else {
      h = w / aspect;
    }

    if (!this.props.noscale) {
      calcH = h;
      calcW = h * aspect;

      if (calcW > w) {
        calcW = w;
      }

      calcW = w;
    } else {
      if (w / h > aspect) {
        calcH = h;
        calcW = calcH * aspect;
      } else {
        calcW = w;
        calcH = w / aspect;
      }
    }

    if (calcW > orgw) {
      calcW = orgw;
      calcH = w / aspect;
    }

    if (calcH > orgh) {
      calcH = orgh;
      calcW = calcH * aspect;
    } //var calcTop = (h-calcH)/2;


    var calcLeft = (orgw - calcW) / 2;
    /*
    if (this.props.fillRatioHeight || this.props.fillHeight)
    {
      calcTop = 0;
    }*/

    this.setState({
      width: calcW,
      height: calcH,
      top: 0,
      left: calcLeft,
      orgw: orgw,
      orgh: orgh
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        cover = _this$props.cover;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()("main-header", this.props.className, {
      "no-cover": !cover,
      "fillHeight": this.props.fillHeight || this.props.fillRatioHeight
    }); //<header className={classes}>

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes,
      style: this.props.style
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
      style: {
        overflow: "hidden",
        height: this.state.height,
        width: this.state.width,
        left: this.state.left,
        top: this.state.top
      },
      fluid: this.props.cover.fluid
    }), children)
    /*
    <div className={classes}   >
      <Img style={{display: "block",
        "max-width":"1000px",
        "max-height":"100hv",
        "width": "auto",
        "height": "100hv"}}
        fluid={this.props.cover.fluid} />
        {children}
    </div>   */
    ;
  };

  return MainHeader2;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainHeader2);

/***/ }),

/***/ "./src/components/MainHeaderImg/MainHeaderImg.css":
/*!********************************************************!*\
  !*** ./src/components/MainHeaderImg/MainHeaderImg.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/MainHeaderImg/MainHeaderImg.jsx":
/*!********************************************************!*\
  !*** ./src/components/MainHeaderImg/MainHeaderImg.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainHeaderImg_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainHeaderImg.css */ "./src/components/MainHeaderImg/MainHeaderImg.css");
/* harmony import */ var _MainHeaderImg_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MainHeaderImg_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_4__);






var MainHeader =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MainHeader, _React$Component);

  function MainHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MainHeader.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        fluid = _this$props.fluid;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("main-header", this.props.className, {
      "no-cover": !fluid
    });
    var imgHeader = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);

    if (fluid != null) {
      imgHeader = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        fluid: fluid,
        className: "main-header-img"
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: classes
    }, imgHeader, children);
  };

  return MainHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainHeader);

/***/ }),

/***/ "./src/components/MainNav/MainNav.css":
/*!********************************************!*\
  !*** ./src/components/MainNav/MainNav.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/MainNav/MainNav.jsx":
/*!********************************************!*\
  !*** ./src/components/MainNav/MainNav.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MainNav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainNav.css */ "./src/components/MainNav/MainNav.css");
/* harmony import */ var _MainNav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MainNav_css__WEBPACK_IMPORTED_MODULE_3__);





var MainNav =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MainNav, _React$Component);

  function MainNav() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MainNav.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;
    var formatting = ["overlay", "clearfix"];
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("main-nav", formatting, className);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: classes
    }, children);
  };

  return MainNav;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MainNav);

/***/ }),

/***/ "./src/components/MenuButton/MenuButton.css":
/*!**************************************************!*\
  !*** ./src/components/MenuButton/MenuButton.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/MenuButton/MenuButton.jsx":
/*!**************************************************!*\
  !*** ./src/components/MenuButton/MenuButton.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuButton.css */ "./src/components/MenuButton/MenuButton.css");
/* harmony import */ var _MenuButton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MenuButton_css__WEBPACK_IMPORTED_MODULE_2__);




var MenuButton =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(MenuButton, _Component);

  function MenuButton() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MenuButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        navigation = _this$props.navigation,
        onClick = _this$props.onClick;

    if (navigation && onClick) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "menu-button icon-menu",
        href: "#menu",
        onClick: onClick
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "word"
      }, "Menu"));
    }

    return null;
  };

  return MenuButton;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuButton);

/***/ }),

/***/ "./src/components/Navigation/GetNavList.jsx":
/*!**************************************************!*\
  !*** ./src/components/Navigation/GetNavList.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

// import FontIcon from "react-md/lib/FontIcons";


function GetNavList(config) {
  var NavList = [{
    primaryText: "Home",
    // LeftIcon: <p>home</p>,
    component: gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"],
    to: "/"
  }, {
    divider: true
  }];

  if (config.userLinks) {
    config.userLinks.forEach(function (link) {
      NavList.push({
        primaryText: link.label,
        // LeftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  } //NavList.push({ divider: true });


  return NavList;
}

/* harmony default export */ __webpack_exports__["default"] = (GetNavList);

/***/ }),

/***/ "./src/components/Navigation/Navigation.css":
/*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Navigation/Navigation.jsx":
/*!**************************************************!*\
  !*** ./src/components/Navigation/Navigation.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GetNavList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GetNavList */ "./src/components/Navigation/GetNavList.jsx");
/* harmony import */ var _Navigation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navigation.css */ "./src/components/Navigation/Navigation.css");
/* harmony import */ var _Navigation_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navigation_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SubscribeButton_SubscribeButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SubscribeButton/SubscribeButton */ "./src/components/SubscribeButton/SubscribeButton.jsx");








var Divider = function Divider() {
  return null;
};

var Subheader = function Subheader(props) {
  var primaryText = props.primaryText;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, primaryText);
};

var ListItem = function ListItem(props) {
  var primaryText = props.primaryText,
      component = props.component,
      remainingProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2___default()(props, ["primaryText", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
    className: "nav-opened",
    role: "presentation"
  }, Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(component, remainingProps, primaryText));
};

var mapToListParts = function mapToListParts(item, index) {
  if (typeof item === "string" || typeof item === "number") {
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ListItem, {
      key: item,
      primaryText: item
    });
  } else if (Object(react__WEBPACK_IMPORTED_MODULE_3__["isValidElement"])(item)) {
    return item;
  }

  var divider = item.divider,
      subheader = item.subheader,
      nestedItems = item.nestedItems,
      remainingProps = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2___default()(item, ["divider", "subheader", "nestedItems"]);

  var component;

  if (divider) {
    component = Divider;
  } else if (subheader) {
    component = Subheader;
  } else {
    component = ListItem;
  }

  var props = Object.assign({}, remainingProps, {
    key: item.key || index
  });

  if (nestedItems) {
    props.nestedItems = nestedItems.map(mapToListParts);
  }

  return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(component, props);
};

var Navigation =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Navigation, _Component);

  function Navigation() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Navigation.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        config = _this$props.config,
        onClose = _this$props.onClose;
    var navItems = Object(_GetNavList__WEBPACK_IMPORTED_MODULE_4__["default"])(config);
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "nav"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
      className: "nav-title"
    }, "Menu"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      href: "#close",
      className: "nav-close",
      onClick: onClose
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "hidden"
    }, "Close")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", null, navItems.map(mapToListParts))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "nav-cover"
    }));
  };

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./src/components/PageDescription/PageDescription.css":
/*!************************************************************!*\
  !*** ./src/components/PageDescription/PageDescription.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PageDescription/PageDescription.jsx":
/*!************************************************************!*\
  !*** ./src/components/PageDescription/PageDescription.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageDescription_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDescription.css */ "./src/components/PageDescription/PageDescription.css");
/* harmony import */ var _PageDescription_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageDescription_css__WEBPACK_IMPORTED_MODULE_2__);




var PageDescription =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PageDescription, _React$Component);

  function PageDescription() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageDescription.prototype;

  _proto.render = function render() {
    var text = this.props.text;

    if (text) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "page-description"
      }, text);
    }

    return null;
  };

  return PageDescription;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PageDescription);

/***/ }),

/***/ "./src/components/PageDocSection/PageDocSection.css":
/*!**********************************************************!*\
  !*** ./src/components/PageDocSection/PageDocSection.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PageDocSection/PageDocSection.jsx":
/*!**********************************************************!*\
  !*** ./src/components/PageDocSection/PageDocSection.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageDocSection_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDocSection.css */ "./src/components/PageDocSection/PageDocSection.css");
/* harmony import */ var _PageDocSection_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageDocSection_css__WEBPACK_IMPORTED_MODULE_2__);




var PageDocSection =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PageDocSection, _Component);

  function PageDocSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PageDocSection.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "page-doc-section"
    }, this.props.children);
  };

  return PageDocSection;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PageDocSection);

/***/ }),

/***/ "./src/components/PageSection/PageSection.css":
/*!****************************************************!*\
  !*** ./src/components/PageSection/PageSection.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PageSection/PageSection.jsx":
/*!****************************************************!*\
  !*** ./src/components/PageSection/PageSection.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageSection_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageSection.css */ "./src/components/PageSection/PageSection.css");
/* harmony import */ var _PageSection_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageSection_css__WEBPACK_IMPORTED_MODULE_2__);




var PageSection =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PageSection, _Component);

  function PageSection() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PageSection.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "page-section"
    }, this.props.children);
  };

  return PageSection;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PageSection);

/***/ }),

/***/ "./src/components/PageTitle/PageTitle.css":
/*!************************************************!*\
  !*** ./src/components/PageTitle/PageTitle.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PageTitle/PageTitle.jsx":
/*!************************************************!*\
  !*** ./src/components/PageTitle/PageTitle.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageTitle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTitle.css */ "./src/components/PageTitle/PageTitle.css");
/* harmony import */ var _PageTitle_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageTitle_css__WEBPACK_IMPORTED_MODULE_2__);




var PageTitle =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PageTitle, _React$Component);

  function PageTitle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageTitle.prototype;

  _proto.render = function render() {
    var text = this.props.text;

    if (text == "Bakermat") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "page-title page-title-collored"
      }, text);
    } else if (text) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "page-title"
      }, text);
    }

    return null;
  };

  return PageTitle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./src/components/PageTitleInline/PageTitleInline.css":
/*!************************************************************!*\
  !*** ./src/components/PageTitleInline/PageTitleInline.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PageTitleInline/PageTitleInline.jsx":
/*!************************************************************!*\
  !*** ./src/components/PageTitleInline/PageTitleInline.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageTitleInline_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTitleInline.css */ "./src/components/PageTitleInline/PageTitleInline.css");
/* harmony import */ var _PageTitleInline_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageTitleInline_css__WEBPACK_IMPORTED_MODULE_2__);




var PageTitleInline =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PageTitleInline, _React$Component);

  function PageTitleInline() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageTitleInline.prototype;

  _proto.render = function render() {
    var text = this.props.text;

    if (text == "Bakermat") {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "page-title-container"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "page-title page-title-collored"
      }, text));
    } else if (text) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "page-title-container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "page-title"
      }, text));
    }

    return null;
  };

  return PageTitleInline;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PageTitleInline);

/***/ }),

/***/ "./src/components/PageTitleTop/PageTitleTop.css":
/*!******************************************************!*\
  !*** ./src/components/PageTitleTop/PageTitleTop.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PageTitleTop/PageTitleTop.jsx":
/*!******************************************************!*\
  !*** ./src/components/PageTitleTop/PageTitleTop.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageTitleTop_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageTitleTop.css */ "./src/components/PageTitleTop/PageTitleTop.css");
/* harmony import */ var _PageTitleTop_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PageTitleTop_css__WEBPACK_IMPORTED_MODULE_2__);




var PageTitleTop =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PageTitleTop, _React$Component);

  function PageTitleTop() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageTitleTop.prototype;

  _proto.render = function render() {
    var text = this.props.text;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "page-title-container-2"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "page-title-2"
    }, text));
  };

  return PageTitleTop;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PageTitleTop);

/***/ }),

/***/ "./src/components/PaginatedContent/PaginatedContent.css":
/*!**************************************************************!*\
  !*** ./src/components/PaginatedContent/PaginatedContent.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PaginatedContent/PaginatedContent.jsx":
/*!**************************************************************!*\
  !*** ./src/components/PaginatedContent/PaginatedContent.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainContent_MainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainContent/MainContent */ "./src/components/MainContent/MainContent.jsx");
/* harmony import */ var _components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pagination/Pagination */ "./src/components/Pagination/Pagination.jsx");
/* harmony import */ var _PaginatedContent_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaginatedContent.css */ "./src/components/PaginatedContent/PaginatedContent.css");
/* harmony import */ var _PaginatedContent_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PaginatedContent_css__WEBPACK_IMPORTED_MODULE_4__);






var PaginatedContent =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PaginatedContent, _React$Component);

  function PaginatedContent() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PaginatedContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        page = _this$props.page,
        pages = _this$props.pages,
        prev = _this$props.prev,
        next = _this$props.next,
        children = _this$props.children;
    var className = "";

    if (page > 1) {
      className = className + " paged";
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "extra-pagination inner"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      page: page,
      pages: pages,
      prev: prev,
      next: next
    })), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Pagination_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
      page: page,
      pages: pages,
      prev: prev,
      next: next
    }));
  };

  return PaginatedContent;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PaginatedContent);

/***/ }),

/***/ "./src/components/Pagination/Pagination.css":
/*!**************************************************!*\
  !*** ./src/components/Pagination/Pagination.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/Pagination/Pagination.jsx":
/*!**************************************************!*\
  !*** ./src/components/Pagination/Pagination.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PaginationLink_PaginationLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PaginationLink/PaginationLink */ "./src/components/PaginationLink/PaginationLink.jsx");
/* harmony import */ var _Pagination_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pagination.css */ "./src/components/Pagination/Pagination.css");
/* harmony import */ var _Pagination_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Pagination_css__WEBPACK_IMPORTED_MODULE_3__);





var Pagination =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(Pagination, _React$Component);

  function Pagination() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Pagination.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        page = _this$props.page,
        pages = _this$props.pages,
        prev = _this$props.prev,
        next = _this$props.next;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
      className: "pagination"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PaginationLink_PaginationLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "newer-posts",
      url: prev,
      text: "\u2190 Newer Posts"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "page-number"
    }, "Page ", page, " of ", pages), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PaginationLink_PaginationLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "older-posts",
      url: next,
      text: "Older Posts \u2192"
    }));
  };

  return Pagination;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./src/components/PaginationLink/PaginationLink.css":
/*!**********************************************************!*\
  !*** ./src/components/PaginationLink/PaginationLink.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PaginationLink/PaginationLink.jsx":
/*!**********************************************************!*\
  !*** ./src/components/PaginationLink/PaginationLink.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _PaginationLink_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PaginationLink.css */ "./src/components/PaginationLink/PaginationLink.css");
/* harmony import */ var _PaginationLink_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PaginationLink_css__WEBPACK_IMPORTED_MODULE_4__);






var PaginationLink =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(PaginationLink, _React$Component);

  function PaginationLink() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PaginationLink.prototype;

  _proto.render = function render() {
    if (this.props.url) {
      var className = "nav-link";

      if (this.props.className) {
        className = className + " " + this.props.className;
      } // Clone this.props and then delete Component specific
      // props so we can spread the rest into the img.


      var rest = Object.assign({}, this.props);
      delete rest.style;
      delete rest.className;
      delete rest.text;
      delete rest.url;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], Object.assign({
        to: this.props.url
      }, rest, {
        className: className
      }), this.props.text);
    }

    return null;
  };

  return PaginationLink;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PaginationLink);

/***/ }),

/***/ "./src/components/PersonDetailGallery/PersonDetailGallery.jsx":
/*!********************************************************************!*\
  !*** ./src/components/PersonDetailGallery/PersonDetailGallery.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.fixed */ "core-js/modules/es6.string.fixed");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Gallery_Gallery_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Gallery/Gallery.css */ "./src/components/Gallery/Gallery.css");
/* harmony import */ var _Gallery_Gallery_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Gallery_Gallery_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);








var PersonDetailGallery =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(PersonDetailGallery, _Component);

  function PersonDetailGallery() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PersonDetailGallery.prototype;

  _proto.render = function render() {
    var zipped = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.zip(this.props.images, this.props.links, this.props.captions);

    zipped = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.sortBy(zipped, 2);
    zipped = lodash__WEBPACK_IMPORTED_MODULE_6___default.a.map(zipped, function (ar) {
      return [ar[0], ar[1], ar[2].substring(2)];
    });
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "flex-container-gallery"
    }, lodash__WEBPACK_IMPORTED_MODULE_6___default.a.map(zipped, function (e) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["Link"], {
        className: "flex-item-gallery",
        key: e[1],
        to: e[1]
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_4___default.a, {
        fixed: e[0].fixed
      }, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "flex-item-gallery-span"
      }, e[2]));
    })));
  };

  return PersonDetailGallery;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PersonDetailGallery);

/***/ }),

/***/ "./src/components/PersonGadget/PersonGadget.css":
/*!******************************************************!*\
  !*** ./src/components/PersonGadget/PersonGadget.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PersonGadget/PersonGadget.jsx":
/*!******************************************************!*\
  !*** ./src/components/PersonGadget/PersonGadget.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.fixed */ "core-js/modules/es6.string.fixed");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PersonGadget_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PersonGadget.css */ "./src/components/PersonGadget/PersonGadget.css");
/* harmony import */ var _PersonGadget_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PersonGadget_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_5__);







var PersonGadget = function PersonGadget(props) {
  var personInfo = props.person;

  if (personInfo) {
    var voorgrond = null;

    if (personInfo.voorgrond) {
      voorgrond = personInfo.voorgrond;
    }

    var person = personInfo.person,
        slug = personInfo.slug,
        info = personInfo.info;
    console.log(info);
    console.log(slug);
    var text = "geen informatie";

    if (info) {
      text = info.voornaam + " " + info.achternaam;
    } else if (person) {
      text = person;
    }

    if (voorgrond) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "flex-container",
        to: slug
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "flex-item-gadget-photo",
        fixed: voorgrond.fixed
      }, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "flex-item-gadget"
      }, " ", info.voornaam, " ", info.achternaam, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "flex-item-gadget"
      }, " ", info.geboren, " "));
    }
  } //no data


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-container"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-item-gadget",
    style: {
      height: "255px"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-item-gadget"
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "flex-item-gadget"
  }, " ", "?", " "));
};

/* harmony default export */ __webpack_exports__["default"] = (PersonGadget);

/***/ }),

/***/ "./src/components/PostDate/PostDate.css":
/*!**********************************************!*\
  !*** ./src/components/PostDate/PostDate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PostDate/PostDate.jsx":
/*!**********************************************!*\
  !*** ./src/components/PostDate/PostDate.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostDate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostDate.css */ "./src/components/PostDate/PostDate.css");
/* harmony import */ var _PostDate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostDate_css__WEBPACK_IMPORTED_MODULE_3__);





var PostDate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostDate, _React$Component);

  function PostDate() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PostDate.prototype;

  _proto.render = function render() {
    var date = this.props.date;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("time", {
      className: "post-date",
      dateTime: moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date)).format("YYYY-MM-DD")
    }, moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date)).format("DD MMMM YYYY"));
  };

  return PostDate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostDate);

/***/ }),

/***/ "./src/components/PostFooter/PostFooter.css":
/*!**************************************************!*\
  !*** ./src/components/PostFooter/PostFooter.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PostFooter/PostFooter.jsx":
/*!**************************************************!*\
  !*** ./src/components/PostFooter/PostFooter.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostFooter_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostFooter.css */ "./src/components/PostFooter/PostFooter.css");
/* harmony import */ var _PostFooter_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostFooter_css__WEBPACK_IMPORTED_MODULE_2__);




var PostFooter =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostFooter, _React$Component);

  function PostFooter() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PostFooter.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
      className: "post-footer"
    }, children);
  };

  return PostFooter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostFooter);

/***/ }),

/***/ "./src/components/PostFormatting/PostFormatting.css":
/*!**********************************************************!*\
  !*** ./src/components/PostFormatting/PostFormatting.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PostFormatting/PostFormatting.jsx":
/*!**********************************************************!*\
  !*** ./src/components/PostFormatting/PostFormatting.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostFormatting_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostFormatting.css */ "./src/components/PostFormatting/PostFormatting.css");
/* harmony import */ var _PostFormatting_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostFormatting_css__WEBPACK_IMPORTED_MODULE_2__);




var PostFormatting =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostFormatting, _React$Component);

  function PostFormatting() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PostFormatting.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: className
    }, children);
  };

  return PostFormatting;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostFormatting);

/***/ }),

/***/ "./src/components/PostHeader/PostHeader.css":
/*!**************************************************!*\
  !*** ./src/components/PostHeader/PostHeader.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PostHeader/PostHeader.jsx":
/*!**************************************************!*\
  !*** ./src/components/PostHeader/PostHeader.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostHeader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostHeader.css */ "./src/components/PostHeader/PostHeader.css");
/* harmony import */ var _PostHeader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PostHeader_css__WEBPACK_IMPORTED_MODULE_2__);




var PostHeader =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostHeader, _React$Component);

  function PostHeader() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PostHeader.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
      className: "post-header"
    }, children);
  };

  return PostHeader;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostHeader);

/***/ }),

/***/ "./src/components/PostListing/PostListing.css":
/*!****************************************************!*\
  !*** ./src/components/PostListing/PostListing.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PostListing/PostListing.jsx":
/*!****************************************************!*\
  !*** ./src/components/PostListing/PostListing.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _AuthorThumbnail_AuthorThumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AuthorThumbnail/AuthorThumbnail */ "./src/components/AuthorThumbnail/AuthorThumbnail.jsx");
/* harmony import */ var _PostTags_PostTags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PostTags/PostTags */ "./src/components/PostTags/PostTags.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AuthorLink_AuthorLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../AuthorLink/AuthorLink */ "./src/components/AuthorLink/AuthorLink.jsx");
/* harmony import */ var _components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/PostFormatting/PostFormatting */ "./src/components/PostFormatting/PostFormatting.jsx");
/* harmony import */ var _components_PostHeader_PostHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PostHeader/PostHeader */ "./src/components/PostHeader/PostHeader.jsx");
/* harmony import */ var _PostDate_PostDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../PostDate/PostDate */ "./src/components/PostDate/PostDate.jsx");
/* harmony import */ var _models_author_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../models/author-model */ "./src/models/author-model.js");
/* harmony import */ var _PostListing_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PostListing.css */ "./src/components/PostListing/PostListing.css");
/* harmony import */ var _PostListing_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_PostListing_css__WEBPACK_IMPORTED_MODULE_12__);














var getPostList = function getPostList(postEdges, authorEdges) {
  return postEdges.map(function (postEdge) {
    return {
      path: postEdge.node.fields.slug,
      tags: postEdge.node.frontmatter.tags,
      cover: postEdge.node.frontmatter.cover,
      title: postEdge.node.frontmatter.title,
      date: postEdge.node.frontmatter.date,
      author: _models_author_model__WEBPACK_IMPORTED_MODULE_11__["default"].getAuthor(authorEdges, postEdge.node.frontmatter.author, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6___default.a.blogAuthorId),
      excerpt: postEdge.node.excerpt,
      timeToRead: postEdge.node.timeToRead
    };
  });
};

var PostListing =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(PostListing, _React$Component);

  function PostListing() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PostListing.prototype;

  _proto.render = function render() {
    var postList = getPostList(this.props.postEdges, this.props.postAuthors);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, postList.map(function (post) {
      var title = post.title,
          path = post.path,
          excerpt = post.excerpt,
          author = post.author,
          tags = post.tags,
          date = post.date;
      var className = post.post_class ? post.post_class : "post";
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: className,
        key: title
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostHeader_PostHeader__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "post-title"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: path
      }, title))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
        className: "post-excerpt"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, excerpt, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: "read-more",
        to: path
      }, "\xBB"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", {
        className: "post-meta"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AuthorThumbnail_AuthorThumbnail__WEBPACK_IMPORTED_MODULE_4__["default"], {
        avatar: author.image,
        name: author.name
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_AuthorLink_AuthorLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
        url: "/author/" + author.uid,
        name: author.name
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PostTags_PostTags__WEBPACK_IMPORTED_MODULE_5__["default"], {
        prefix: " on ",
        tags: tags
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_PostDate_PostDate__WEBPACK_IMPORTED_MODULE_10__["default"], {
        date: date
      })));
    }));
  };

  return PostListing;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostListing);

/***/ }),

/***/ "./src/components/PostShare/PostShare.css":
/*!************************************************!*\
  !*** ./src/components/PostShare/PostShare.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PostShare/PostShare.jsx":
/*!************************************************!*\
  !*** ./src/components/PostShare/PostShare.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/lib/react-share.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PostShare_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostShare.css */ "./src/components/PostShare/PostShare.css");
/* harmony import */ var _PostShare_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_PostShare_css__WEBPACK_IMPORTED_MODULE_3__);





var formatSiteUrl = function formatSiteUrl(siteUrl, pathPrefix, path) {
  return siteUrl + (pathPrefix === "/" ? "" : pathPrefix) + path;
}; // const getCover = post => {
//   const { cover } = post;
//   if (cover && cover.childImageSharp && cover.childImageSharp.original) {
//     return cover.childImageSharp.original.src;
//   }
//   return "";
// };


var PostShare =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostShare, _React$Component);

  function PostShare() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PostShare.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        postNode = _this$props.postNode,
        postPath = _this$props.postPath,
        config = _this$props.config;
    var post = postNode.frontmatter;
    var url = formatSiteUrl(config.siteUrl, config.pathPrefix, postPath);
    var FacebookShareButton = react_share__WEBPACK_IMPORTED_MODULE_2__["ShareButtons"].FacebookShareButton,
        GooglePlusShareButton = react_share__WEBPACK_IMPORTED_MODULE_2__["ShareButtons"].GooglePlusShareButton,
        TwitterShareButton = react_share__WEBPACK_IMPORTED_MODULE_2__["ShareButtons"].TwitterShareButton;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "share"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Share this post"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        display: "flex"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TwitterShareButton, {
      url: url,
      title: post.title
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "icon-twitter",
      style: {
        fontSize: "1.4em"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "hidden"
    }, "Twitter"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FacebookShareButton, {
      url: url,
      quote: post.title
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "icon-facebook",
      style: {
        fontSize: "1.4em"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "hidden"
    }, "Facebook"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GooglePlusShareButton, {
      url: url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "icon-google-plus",
      style: {
        fontSize: "1.4em"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "hidden"
    }, "Google+")))));
  };

  return PostShare;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PostShare);

/***/ }),

/***/ "./src/components/PostTags/PostTags.css":
/*!**********************************************!*\
  !*** ./src/components/PostTags/PostTags.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/PostTags/PostTags.jsx":
/*!**********************************************!*\
  !*** ./src/components/PostTags/PostTags.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _PostTags_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostTags.css */ "./src/components/PostTags/PostTags.css");
/* harmony import */ var _PostTags_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PostTags_css__WEBPACK_IMPORTED_MODULE_4__);






var PostTags =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostTags, _Component);

  function PostTags() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PostTags.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        prefix = _this$props.prefix,
        tags = _this$props.tags;

    if (tags) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, prefix, tags.map(function (tag, index, arr) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          key: tag
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          key: tag,
          to: "/tags/" + lodash__WEBPACK_IMPORTED_MODULE_2___default.a.kebabCase(tag)
        }, tag), index !== arr.length - 1 ? ", " : "");
      }));
    }

    return null;
  };

  return PostTags;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PostTags);

/***/ }),

/***/ "./src/components/ReadNext/ReadNext.css":
/*!**********************************************!*\
  !*** ./src/components/ReadNext/ReadNext.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/ReadNext/ReadNext.jsx":
/*!**********************************************!*\
  !*** ./src/components/ReadNext/ReadNext.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _ReadNext_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReadNext.css */ "./src/components/ReadNext/ReadNext.css");
/* harmony import */ var _ReadNext_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ReadNext_css__WEBPACK_IMPORTED_MODULE_4__);






var ReadNextStory = function ReadNextStory(props) {
  var post = props.post;

  if (post) {
    /** Limit words to 19 in GraphQL * */
    var path = post.path,
        cover = post.cover,
        title = post.title,
        excerpt = post.excerpt;
    var styles = cover ? {
      backgroundImage: "url(" + cover
    } : null;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("read-next-story", props.className, {
      "no-cover": !cover
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: classes,
      style: styles,
      to: path
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "post"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, excerpt, "\u2026")));
  }

  return null;
};
/**
 * Links to Previous/Next posts
 */


var ReadNext =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ReadNext, _Component);

  function ReadNext() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ReadNext.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        next = _this$props.next,
        prev = _this$props.prev;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("aside", {
      className: "read-next"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReadNextStory, {
      post: next
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ReadNextStory, {
      className: "prev",
      post: prev
    }));
  };

  return ReadNext;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ReadNext);

/***/ }),

/***/ "./src/components/ReadParents/ReadParents.css":
/*!****************************************************!*\
  !*** ./src/components/ReadParents/ReadParents.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/ReadParents/ReadParents.jsx":
/*!****************************************************!*\
  !*** ./src/components/ReadParents/ReadParents.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ReadParents_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReadParents.css */ "./src/components/ReadParents/ReadParents.css");
/* harmony import */ var _ReadParents_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ReadParents_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PersonGadget_PersonGadget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PersonGadget/PersonGadget */ "./src/components/PersonGadget/PersonGadget.jsx");







var ReadParentStory = function ReadParentStory(props) {
  var parent = props.parent;

  if (parent) {
    /** Limit words to 19 in GraphQL * */
    var path = parent.path,
        cover = parent.cover,
        voornaam = parent.voornaam,
        achternaam = parent.achternaam,
        excerpt = parent.excerpt;
    var styles = cover ? {
      backgroundImage: "url(" + cover
    } : null;
    var classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()("read-next-story", props.className, {
      "no-cover": !cover
    });
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes,
      style: styles,
      to: path
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "post"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, voornaam, " ", achternaam), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, excerpt, "\u2026")));
  } //no data


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("read-next-story", props.className),
    style: null,
    to: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "post"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Nog geen informatie\u2026")));
};
/**
 * Links to Previous/Next posts
 */


var ReadParents =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(ReadParents, _Component);

  function ReadParents() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ReadParents.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        vader = _this$props.vader,
        moeder = _this$props.moeder;
    console.log(this.props);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "flex-container-parents"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "flex-item-parents",
      style: {
        width: "100%"
      }
    }, "Ouders:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PersonGadget_PersonGadget__WEBPACK_IMPORTED_MODULE_5__["default"], {
      person: vader
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: "10px"
      }
    }, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PersonGadget_PersonGadget__WEBPACK_IMPORTED_MODULE_5__["default"], {
      person: moeder
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "flex-item-parents",
      style: {
        width: "100%"
      }
    }, "Kinderen:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PersonGadget_PersonGadget__WEBPACK_IMPORTED_MODULE_5__["default"], {
      person: null
    }));
  };

  return ReadParents;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ReadParents);

/***/ }),

/***/ "./src/components/SEO/SEO.jsx":
/*!************************************!*\
  !*** ./src/components/SEO/SEO.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__);





var SEO =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SEO, _Component);

  function SEO() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = SEO.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        postNode = _this$props.postNode,
        postPath = _this$props.postPath,
        postSEO = _this$props.postSEO;
    var title;
    var description;
    var image;
    var postURL;

    if (postSEO) {
      var postMeta = postNode.frontmatter;
      title = postMeta.title;
      description = postMeta.description ? postMeta.description : postNode.excerpt;
      image = postMeta.cover;
      postURL = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteUrl + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.pathPrefix + postPath;
    } else {
      title = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitle;
      description = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteDescription;
      image = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteLogo;
    }

    var realPrefix = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.pathPrefix === "/" ? "" : _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.pathPrefix;
    image = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteUrl + realPrefix + image;
    var blogURL = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteUrl + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.pathPrefix;
    var schemaOrgJSONLD = [{
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: blogURL,
      name: title,
      alternateName: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitleAlt ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitleAlt : ""
    }];

    if (postSEO) {
      schemaOrgJSONLD.push([{
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": postURL,
            name: title,
            image: image
          }
        }]
      }, {
        "@context": "http://schema.org",
        "@type": "BlogPosting",
        url: blogURL,
        name: title,
        alternateName: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitleAlt ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteTitleAlt : "",
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image
        },
        description: description
      }]);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "description",
      content: description
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "image",
      content: image
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
      type: "application/ld+json"
    }, JSON.stringify(schemaOrgJSONLD)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:url",
      content: postSEO ? postURL : blogURL
    }), postSEO ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:type",
      content: "article"
    }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:title",
      content: title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:description",
      content: description
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "og:image",
      content: image
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      property: "fb:app_id",
      content: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteFBAppID ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.siteFBAppID : ""
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:creator",
      content: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.userTwitter ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default.a.userTwitter : ""
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:title",
      content: title
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:description",
      content: description
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "twitter:image",
      content: image
    }));
  };

  return SEO;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/components/SiteWrapper/SiteWrapper.css":
/*!****************************************************!*\
  !*** ./src/components/SiteWrapper/SiteWrapper.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/SiteWrapper/SiteWrapper.jsx":
/*!****************************************************!*\
  !*** ./src/components/SiteWrapper/SiteWrapper.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SiteWrapper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SiteWrapper.css */ "./src/components/SiteWrapper/SiteWrapper.css");
/* harmony import */ var _SiteWrapper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SiteWrapper_css__WEBPACK_IMPORTED_MODULE_2__);




var SiteWrapper =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SiteWrapper, _React$Component);

  function SiteWrapper() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SiteWrapper.prototype;

  _proto.render = function render() {
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "site-wrapper"
    }, children);
  };

  return SiteWrapper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SiteWrapper);

/***/ }),

/***/ "./src/components/SocialMediaIcons/SocialMediaIcons.css":
/*!**************************************************************!*\
  !*** ./src/components/SocialMediaIcons/SocialMediaIcons.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/SocialMediaIcons/SocialMediaIcons.jsx":
/*!**************************************************************!*\
  !*** ./src/components/SocialMediaIcons/SocialMediaIcons.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-social-icons */ "./node_modules/react-social-icons/lib/react-social-icons.js");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SocialMediaIcons_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SocialMediaIcons.css */ "./src/components/SocialMediaIcons/SocialMediaIcons.css");
/* harmony import */ var _SocialMediaIcons_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SocialMediaIcons_css__WEBPACK_IMPORTED_MODULE_3__);





var SocialMediaIcons =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SocialMediaIcons, _React$Component);

  function SocialMediaIcons() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SocialMediaIcons.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        urls = _this$props.urls,
        color = _this$props.color;

    if (urls && urls.length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "social-media-icons"
      }, urls.map(function (url) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_social_icons__WEBPACK_IMPORTED_MODULE_2__["SocialIcon"], {
          key: url,
          className: "social-media-icon",
          url: url,
          color: color,
          style: {
            height: null,
            width: null
          }
        });
      }));
    }

    return null;
  };

  return SocialMediaIcons;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SocialMediaIcons);

/***/ }),

/***/ "./src/components/SubscribeButton/SubscribeButton.css":
/*!************************************************************!*\
  !*** ./src/components/SubscribeButton/SubscribeButton.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/SubscribeButton/SubscribeButton.jsx":
/*!************************************************************!*\
  !*** ./src/components/SubscribeButton/SubscribeButton.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SubscribeButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscribeButton.css */ "./src/components/SubscribeButton/SubscribeButton.css");
/* harmony import */ var _SubscribeButton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SubscribeButton_css__WEBPACK_IMPORTED_MODULE_2__);




var SubscribeButton =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(SubscribeButton, _React$Component);

  function SubscribeButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SubscribeButton.prototype;

  _proto.render = function render() {
    var url = this.props.url;

    if (url) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "subscribe-button icon-feed",
        href: url
      }, "Subscribe");
    }

    return null;
  };

  return SubscribeButton;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SubscribeButton);

/***/ }),

/***/ "./src/components/layout.css":
/*!***********************************!*\
  !*** ./src/components/layout.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/layout.jsx":
/*!***********************************!*\
  !*** ./src/components/layout.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainLayout; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.css */ "./src/components/layout.css");
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_layout_css__WEBPACK_IMPORTED_MODULE_7__);









var MainLayout =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_3___default()(MainLayout, _React$Component);

  function MainLayout() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = MainLayout.prototype;

  _proto.getLocalTitle = function getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    var pathPrefix = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6___default.a.pathPrefix ? _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6___default.a.pathPrefix : "/";
    var currentPath = this.props.location.pathname.replace(pathPrefix, "").replace("/", "");
    var title = "";

    if (currentPath === "") {
      title = "Home";
    } else if (currentPath === "tags/") {
      title = "Tags";
    } else if (currentPath === "categories/") {
      title = "Categories";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath.includes("tags/")) {
      var tag = currentPath.replace("tags/", "").replace("/", "").replace("-", " ");
      title = "Tagged in " + capitalize(tag);
    } else if (currentPath.includes("categories/")) {
      var category = currentPath.replace("categories/", "").replace("/", "").replace("-", " ");
      title = "" + capitalize(category);
    }

    return title;
  };

  _proto.render = function render() {
    var children = this.props.children;
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("title", null, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6___default.a.siteTitle + " |  " + this.getLocalTitle()), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
      name: "description",
      content: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_6___default.a.siteDescription
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    })), children);
  };

  return MainLayout;
}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);



/***/ }),

/***/ "./src/favicon.png":
/*!*************************!*\
  !*** ./src/favicon.png ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,Li4vc3RhdGljL2xvZ29zL2xvZ28tNDgucG5n"

/***/ }),

/***/ "./src/html.jsx":
/*!**********************!*\
  !*** ./src/html.jsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favicon.png */ "./src/favicon.png");
/* harmony import */ var _favicon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_favicon_png__WEBPACK_IMPORTED_MODULE_2__);


/* eslint import/no-unresolved:"off" */

/* eslint import/extensions:"off" */

/* eslint global-require:"off" */



var HTML =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(HTML, _React$Component);

  function HTML() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HTML.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
      lang: "en"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      charSet: "utf-8"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "HandheldFriendly",
      content: "True"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "//fonts.googleapis.com/css?family=BioRhyme" //:300,700,700italic,300italic|Open+Sans:700,400"

    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: "//fonts.googleapis.com/css?family=IM Fell DW Pica SC" //:300,700,700italic,300italic|Open+Sans:700,400"

    }), this.props.headComponents, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "shortcut icon",
      href: _favicon_png__WEBPACK_IMPORTED_MODULE_2___default.a
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents));
  };

  return HTML;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),

/***/ "./src/models/author-model.js":
/*!************************************!*\
  !*** ./src/models/author-model.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "core-js/modules/es6.array.find");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_0__);


var findName = function findName(name) {
  return function (author) {
    return author.uid === name;
  };
};

var authorEdgesToList = function authorEdgesToList(authorEdges) {
  return authorEdges.map(function (edge) {
    return edge.node;
  });
};

var AuthorModel =
/*#__PURE__*/
function () {
  function AuthorModel() {}

  AuthorModel.hasAuthor = function hasAuthor(authorEdges, authorUid) {
    var authorList = authorEdgesToList(authorEdges);
    return Boolean(authorList.find(findName(authorUid)));
  };

  AuthorModel.getAuthor = function getAuthor(authorEdges, authorUid, fallbackId) {
    var authorList = authorEdgesToList(authorEdges);

    if (this.hasAuthor(authorEdges, authorUid)) {
      return authorList.find(findName(authorUid));
    }

    return authorList.find(findName(fallbackId));
  };

  return AuthorModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (AuthorModel);

/***/ }),

/***/ "./src/pages/bakermat.jsx":
/*!********************************!*\
  !*** ./src/pages/bakermat.jsx ***!
  \********************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "core-js/modules/es6.array.find-index");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PageSection/PageSection */ "./src/components/PageSection/PageSection.jsx");
/* harmony import */ var _components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MainHeader2/MainHeader2 */ "./src/components/MainHeader2/MainHeader2.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/PageTitleInline/PageTitleInline */ "./src/components/PageTitleInline/PageTitleInline.jsx");
/* harmony import */ var _components_PageDescription_PageDescription__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PageDescription/PageDescription */ "./src/components/PageDescription/PageDescription.jsx");
/* harmony import */ var _components_PaginatedContent_PaginatedContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/PaginatedContent/PaginatedContent */ "./src/components/PaginatedContent/PaginatedContent.jsx");
/* harmony import */ var _components_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/SocialMediaIcons/SocialMediaIcons */ "./src/components/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Gallery/Gallery */ "./src/components/Gallery/Gallery.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_24__);


























var IndexTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(IndexTemplate, _React$Component);

  function IndexTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = IndexTemplate.prototype;

  _proto.render = function render() {
    var _this$props$pageConte = this.props.pageContext,
        nodes = _this$props$pageConte.nodes,
        page = _this$props$pageConte.page,
        pages = _this$props$pageConte.pages,
        total = _this$props$pageConte.total,
        limit = _this$props$pageConte.limit,
        prev = _this$props$pageConte.prev,
        next = _this$props$pageConte.next;
    var authorsEdges = this.props.data.authors.edges;
    var frontEdges = this.props.data.frontmatter.edges;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_22__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "home-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postEdges: nodes
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "home-template"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__["default"], {
      noscale: true,
      cover: this.props.data.frontImg.childImageSharp
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_18__["default"], {
      text: "Bakermat"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.siteNavigation,
      onClick: this.handleOnClick
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "vertical"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "main-header-content inner"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "scroll-down icon-arrow-left",
      to: "content",
      "data-offset": "-45",
      spy: true,
      smooth: true,
      duration: 500
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "hidden"
    }, "Scroll Down"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      name: "content",
      style: {
        paddingTop: 30
      }
    }, "Het domein Bakermat geeft een concreet beeld van een specifieke grensstreek tussen Oost- en West-Vlaanderen. Het betreft de grensstreek tussen het zuidelijkste deel van wat men het groene Brugse Ommeland noemt, met name de zuidoostelijke rand ervan met de vroegere dorpskernen Sint-Joris-ten-Distel, Oedelem en Beernem \u2015 vandaag de fusiegemeente Beernem \u2015 en het Oost-Vlaamse Zuid-Meetjesland, met de vroegere dorpskernen Knesselare en Sint-Maria-Aalter \u2015 vandaag allebei behorend tot de fusiegemeente Aalter.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "In deze unieke streek situeert zich de familie Vitalis De Bleeckere-Octavia Versluys. Vitalis is geboren en opgegroeid in Sint-Joris-ten-Distel, terwijl het leven van Octavia Versluys zich van geboorte tot dood heeft afgespeeld in Knesselare. Vitalis en Octavia woonden met hun gezin te Knesselare. Al hun kinderen zijn daar geboren en opgegroeid. De meesten zijn ook daar nadien blijven wonen. Dat geldt voor Jozef, Maria, Alfons, Omer, Irma en Berta. Jules woonde in Buntelare waar Knesselare grenst aan Aalter-Brug. Maurits en Albert woonden elk na hun huwelijk eerst enige tijd in Knesselare, daarna vestigden ze zich definitief aan de rand van Sint-Maria-Aalter, direct aan de grens met Zuid-Knesselare.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Allen waren ze gewone mensen wier leven sterk werd bepaald door hun directe omgeving. Het sociale en culturele leven, de taal, de geschiedenis en de geografie van de streek kleurden het dagelijkse leven van hun gezin en hun familie. In het domein Bakermat passeren diverse facetten van die streek de revue, telkens belicht vanuit de familie en het gezin van Vitalis en Octavia.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_23__["default"], {
      images: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        return e.node.childImageSharp;
      }),
      links: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        return e.node.relativePath.slice(0, -9);
      }),
      captions: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        var relpath = e.node.relativePath.slice(0, -9);

        var index = lodash__WEBPACK_IMPORTED_MODULE_24___default.a.findIndex(frontEdges, function (fe) {
          return fe.node.fileAbsolutePath.indexOf(relpath) !== -1;
        });

        if (index >= 0) {
          return frontEdges[index].node.frontmatter.gallerij_titel;
        }

        return relpath;
      })
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.promoteGatsby
    }))));
  };

  return IndexTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "1884930868";
/* harmony default export */ __webpack_exports__["default"] = (IndexTemplate);

/***/ }),

/***/ "./src/pages/contact.jsx":
/*!*******************************!*\
  !*** ./src/pages/contact.jsx ***!
  \*******************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PageSection/PageSection */ "./src/components/PageSection/PageSection.jsx");
/* harmony import */ var _components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MainHeader2/MainHeader2 */ "./src/components/MainHeader2/MainHeader2.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PageTitleInline/PageTitleInline */ "./src/components/PageTitleInline/PageTitleInline.jsx");
/* harmony import */ var _components_PageDescription_PageDescription__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/PageDescription/PageDescription */ "./src/components/PageDescription/PageDescription.jsx");
/* harmony import */ var _components_PaginatedContent_PaginatedContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PaginatedContent/PaginatedContent */ "./src/components/PaginatedContent/PaginatedContent.jsx");
/* harmony import */ var _components_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/SocialMediaIcons/SocialMediaIcons */ "./src/components/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Gallery/Gallery */ "./src/components/Gallery/Gallery.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_23__);

























var IndexTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(IndexTemplate, _React$Component);

  function IndexTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = IndexTemplate.prototype;

  _proto.render = function render() {
    var _this$props$pageConte = this.props.pageContext,
        nodes = _this$props$pageConte.nodes,
        page = _this$props$pageConte.page,
        pages = _this$props$pageConte.pages,
        total = _this$props$pageConte.total,
        limit = _this$props$pageConte.limit,
        prev = _this$props$pageConte.prev,
        next = _this$props$pageConte.next;
    var formStr = "<!-- Begin Mailchimp Signup Form -->\n    <link href=\"//cdn-images.mailchimp.com/embedcode/classic-10_7.css\" rel=\"stylesheet\" type=\"text/css\">\n    <style type=\"text/css\">\n      #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n         We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n    </style>\n    <div id=\"mc_embed_signup\">\n    <form action=\"https://menstis.us20.list-manage.com/subscribe/post?u=fcb7bec9ffe0c9e9a8b38446c&amp;id=7fd4f7dcbc\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\n        <div id=\"mc_embed_signup_scroll\">\n      <h2>Subscribe</h2>\n    <div class=\"indicates-required\"><span class=\"asterisk\">*</span> indicates required</div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-EMAIL\">Email Adres  <span class=\"asterisk\">*</span>\n    </label>\n      <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"required email\" id=\"mce-EMAIL\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-FNAME\">Voornaam </label>\n      <input type=\"text\" value=\"\" name=\"FNAME\" class=\"\" id=\"mce-FNAME\">\n    </div>\n    <div class=\"mc-field-group\">\n      <label for=\"mce-LNAME\">Familienaam </label>\n      <input type=\"text\" value=\"\" name=\"LNAME\" class=\"\" id=\"mce-LNAME\">\n    </div>\n      <div id=\"mce-responses\" class=\"clear\">\n        <div class=\"response\" id=\"mce-error-response\" style=\"display:none\"></div>\n        <div class=\"response\" id=\"mce-success-response\" style=\"display:none\"></div>\n      </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n        <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_fcb7bec9ffe0c9e9a8b38446c_7fd4f7dcbc\" tabindex=\"-1\" value=\"\"></div>\n        <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\n        </div>\n    </form>\n    </div>\n    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday'; /*\n     * Translated default messages for the $ validation plugin.\n     * Locale: NL\n     */\n    $.extend($.validator.messages, {\n            required: \"Dit is een verplicht veld.\",\n            remote: \"Controleer dit veld.\",\n            email: \"Vul hier een geldig e-mailadres in.\",\n            url: \"Vul hier een geldige URL in.\",\n            date: \"Vul hier een geldige datum in.\",\n            dateISO: \"Vul hier een geldige datum in (ISO-formaat).\",\n            number: \"Vul hier een geldig getal in.\",\n            digits: \"Vul hier alleen getallen in.\",\n            creditcard: \"Vul hier een geldig creditcardnummer in.\",\n            equalTo: \"Vul hier dezelfde waarde in.\",\n            accept: \"Vul hier een waarde in met een geldige extensie.\",\n            maxlength: $.validator.format(\"Vul hier maximaal {0} tekens in.\"),\n            minlength: $.validator.format(\"Vul hier minimaal {0} tekens in.\"),\n            rangelength: $.validator.format(\"Vul hier een waarde in van minimaal {0} en maximaal {1} tekens.\"),\n            range: $.validator.format(\"Vul hier een waarde in van minimaal {0} en maximaal {1}.\"),\n            max: $.validator.format(\"Vul hier een waarde in kleiner dan of gelijk aan {0}.\"),\n            min: $.validator.format(\"Vul hier een waarde in groter dan of gelijk aan {0}.\")\n    });}(jQuery));var $mcj = jQuery.noConflict(true);</script>\n    <!--End mc_embed_signup-->";
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_21__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "home-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postEdges: nodes
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "home-template"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_13__["default"], {
      fillRatioHeight: 0.4,
      cover: this.props.data.frontImg.childImageSharp,
      style: {
        "backgroundColor": "#FFFFFF"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_17__["default"], {
      text: "Contact"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.siteNavigation,
      onClick: this.handleOnClick
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "vertical"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main-header-content inner"
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      className: "scroll-down icon-arrow-left",
      to: "content",
      "data-offset": "-45",
      spy: true,
      smooth: true,
      duration: 500
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "hidden"
    }, "Scroll Down"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      name: "content",
      style: {
        paddingTop: 30
      }
    }, "Heeft u zelf iets te melden of te vragen, dan kunt u ons contacteren via sylvain@menstis.be U kunt zich hier aanmelden als u wenst op de hoogte te blijven van de verdere uitbouw van de site.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: formStr
      }
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.promoteGatsby
    }))));
  };

  return IndexTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "1161031810";
/* harmony default export */ __webpack_exports__["default"] = (IndexTemplate);

/***/ }),

/***/ "./src/pages/documenten.jsx":
/*!**********************************!*\
  !*** ./src/pages/documenten.jsx ***!
  \**********************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "core-js/modules/es6.array.find-index");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PageSection/PageSection */ "./src/components/PageSection/PageSection.jsx");
/* harmony import */ var _components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MainHeader2/MainHeader2 */ "./src/components/MainHeader2/MainHeader2.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/PageTitleInline/PageTitleInline */ "./src/components/PageTitleInline/PageTitleInline.jsx");
/* harmony import */ var _components_PageDescription_PageDescription__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PageDescription/PageDescription */ "./src/components/PageDescription/PageDescription.jsx");
/* harmony import */ var _components_PaginatedContent_PaginatedContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/PaginatedContent/PaginatedContent */ "./src/components/PaginatedContent/PaginatedContent.jsx");
/* harmony import */ var _components_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/SocialMediaIcons/SocialMediaIcons */ "./src/components/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Gallery/Gallery */ "./src/components/Gallery/Gallery.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_24__);


























var IndexTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(IndexTemplate, _React$Component);

  function IndexTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = IndexTemplate.prototype;

  _proto.render = function render() {
    var _this$props$pageConte = this.props.pageContext,
        nodes = _this$props$pageConte.nodes,
        page = _this$props$pageConte.page,
        pages = _this$props$pageConte.pages,
        total = _this$props$pageConte.total,
        limit = _this$props$pageConte.limit,
        prev = _this$props$pageConte.prev,
        next = _this$props$pageConte.next;
    var authorsEdges = this.props.data.authors.edges;
    var frontEdges = this.props.data.frontmatter.edges;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_22__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "home-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postEdges: nodes
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "home-template"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__["default"], {
      cover: this.props.data.frontImg.childImageSharp,
      noscale: true,
      style: {
        "backgroundColor": "#FFFFFF"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_18__["default"], {
      text: "Documenten"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.siteNavigation,
      onClick: this.handleOnClick
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "vertical"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "main-header-content inner"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "scroll-down icon-arrow-left",
      to: "content",
      "data-offset": "-45",
      spy: true,
      smooth: true,
      duration: 500
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "hidden"
    }, "Scroll Down"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      name: "content",
      style: {
        paddingTop: 30
      }
    }, "Het domein Documenten bestaat uit zowel beeld- als tekstdocumenten. Het betreft heel oude foto\u2019s uit het familiearchief. Het betreft ook offici\xEBle documenten uit de gemeentearchieven die gerelateerd zijn aan familie De Bleeckere-Versluys in ruime zin. Bij sommige documenten is er een directe link naar het domein Onderzoek.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_23__["default"], {
      images: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        return e.node.childImageSharp;
      }),
      links: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        return e.node.relativePath.slice(0, -9);
      }),
      captions: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        var relpath = e.node.relativePath.slice(0, -9);

        var index = lodash__WEBPACK_IMPORTED_MODULE_24___default.a.findIndex(frontEdges, function (fe) {
          return fe.node.fileAbsolutePath.indexOf(relpath) !== -1;
        });

        if (index >= 0) {
          return frontEdges[index].node.frontmatter.gallerij_titel;
        }

        return relpath;
      })
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.promoteGatsby
    }))));
  };

  return IndexTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "3145620827";
/* harmony default export */ __webpack_exports__["default"] = (IndexTemplate);

/***/ }),

/***/ "./src/pages/familie.jsx":
/*!*******************************!*\
  !*** ./src/pages/familie.jsx ***!
  \*******************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "core-js/modules/es6.array.find-index");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PageSection/PageSection */ "./src/components/PageSection/PageSection.jsx");
/* harmony import */ var _components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MainHeader2/MainHeader2 */ "./src/components/MainHeader2/MainHeader2.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/PageTitleInline/PageTitleInline */ "./src/components/PageTitleInline/PageTitleInline.jsx");
/* harmony import */ var _components_PageDescription_PageDescription__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PageDescription/PageDescription */ "./src/components/PageDescription/PageDescription.jsx");
/* harmony import */ var _components_PaginatedContent_PaginatedContent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/PaginatedContent/PaginatedContent */ "./src/components/PaginatedContent/PaginatedContent.jsx");
/* harmony import */ var _components_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/SocialMediaIcons/SocialMediaIcons */ "./src/components/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Gallery/Gallery */ "./src/components/Gallery/Gallery.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_24__);


























var IndexTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(IndexTemplate, _React$Component);

  function IndexTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = IndexTemplate.prototype;

  _proto.render = function render() {
    var _this$props$pageConte = this.props.pageContext,
        nodes = _this$props$pageConte.nodes,
        page = _this$props$pageConte.page,
        pages = _this$props$pageConte.pages,
        total = _this$props$pageConte.total,
        limit = _this$props$pageConte.limit,
        prev = _this$props$pageConte.prev,
        next = _this$props$pageConte.next;
    var authorsEdges = this.props.data.authors.edges;
    var frontEdges = this.props.data.frontmatter.edges;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_22__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "home-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postEdges: nodes
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "home-template"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__["default"], {
      cover: this.props.data.frontImg.childImageSharp,
      noscale: true,
      style: {
        "backgroundColor": "#FFFFFF"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_18__["default"], {
      text: "Familie"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.siteNavigation,
      onClick: this.handleOnClick
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "vertical"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "main-header-content inner"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "scroll-down icon-arrow-left",
      to: "content",
      "data-offset": "-45",
      spy: true,
      smooth: true,
      duration: 500
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "hidden"
    }, "Scroll Down"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "content",
      style: {
        paddingTop: 30
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, "Dit is de familiefoto van het gezin De Bleeckere-Versluys, genomen en samengesteld in de studio Hooft van Knesselare. Deze foto kreeg een ereplaats in de woonkamers van de gezinsleden. In het midden staan de ouders, Vital De Bleeckere en Maria Octavia Versluys, omringd door hun tien volwassen kinderen. Het zijn kloksgewijs Omer, Alfons, Jozef, Maria, Irma, Berta, Albert, Maurits, Jules, Lea. Die volgorde is niet chronologisch. Het oudste kind was namelijk Jozef, de derde van de bovenste rij. Ook op de onderste rij staat links Albert voor Maurits, terwijl Maurits voor Albert geboren is. De chronologische volgorde is dus: Jozef, Maria, Alfons, Omer, Irma, Berta, Maurits, Albert, Jules en Lea. Op de foto ontbreekt er een kind. Het is Raymond, het derde kind van het echtpaar Vital-Octavia. Hij was al overleden op het ogenblik dat de foto werd genomen."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_23__["default"], {
      images: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        return e.node.childImageSharp;
      }),
      links: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        return e.node.relativePath.slice(0, -9);
      }),
      captions: lodash__WEBPACK_IMPORTED_MODULE_24___default.a.map(this.props.data.voorgrond.edges, function (e) {
        var relpath = e.node.relativePath.slice(0, -9);
        console.log(relpath);

        var index = lodash__WEBPACK_IMPORTED_MODULE_24___default.a.findIndex(frontEdges, function (fe) {
          return fe.node.fileAbsolutePath.indexOf(relpath) !== -1;
        });

        if (index >= 0) {
          return frontEdges[index].node.frontmatter.voornaam + " " + frontEdges[index].node.frontmatter.achternaam;
        }

        return relpath;
      })
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.promoteGatsby
    }))));
  };

  return IndexTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "3131457250";
/* harmony default export */ __webpack_exports__["default"] = (IndexTemplate);

/***/ }),

/***/ "./src/pages/onderzoek.jsx":
/*!*********************************!*\
  !*** ./src/pages/onderzoek.jsx ***!
  \*********************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "core-js/modules/es6.array.find-index");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PageSection/PageSection */ "./src/components/PageSection/PageSection.jsx");
/* harmony import */ var _components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MainHeader2/MainHeader2 */ "./src/components/MainHeader2/MainHeader2.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/PageTitleInline/PageTitleInline */ "./src/components/PageTitleInline/PageTitleInline.jsx");
/* harmony import */ var _components_PageDescription_PageDescription__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PageDescription/PageDescription */ "./src/components/PageDescription/PageDescription.jsx");
/* harmony import */ var _components_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/SocialMediaIcons/SocialMediaIcons */ "./src/components/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/Gallery/Gallery */ "./src/components/Gallery/Gallery.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_23__);

























var IndexTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(IndexTemplate, _React$Component);

  function IndexTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = IndexTemplate.prototype;

  _proto.render = function render() {
    var _this$props$pageConte = this.props.pageContext,
        nodes = _this$props$pageConte.nodes,
        page = _this$props$pageConte.page,
        pages = _this$props$pageConte.pages,
        total = _this$props$pageConte.total,
        limit = _this$props$pageConte.limit,
        prev = _this$props$pageConte.prev,
        next = _this$props$pageConte.next;
    var authorsEdges = this.props.data.authors.edges;
    var frontEdges = this.props.data.frontmatter.edges;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_21__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "home-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_7__["default"], {
      postEdges: nodes
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "home-template"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__["default"], {
      noscale: true,
      cover: this.props.data.frontImg.childImageSharp,
      style: {
        "backgroundColor": "#FFFFFF"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageTitleInline_PageTitleInline__WEBPACK_IMPORTED_MODULE_18__["default"], {
      text: "Onderzoek"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_15__["default"], {
      overlay: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.pathPrefix + "/images/onderzoek.jpg"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.siteNavigation,
      onClick: this.handleOnClick
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "vertical"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "main-header-content inner"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "scroll-down icon-arrow-left",
      to: "content",
      "data-offset": "-45",
      spy: true,
      smooth: true,
      duration: 500
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "hidden"
    }, "Scroll Down"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      name: "content",
      style: {
        paddingTop: 30
      }
    }, "De oude prentkaart van de Dorpsstraat in Sint-Joris-ten-Distel, het dorp waar de wieg stond van Vitalis, toont een eenzame fietser die onderweg is. Dat beeld begeleidt het werk aan het domein Onderzoek. De verschillende items vormen onderzoeksvragen waarop een antwoord moet worden gevonden. Dat gebeurt door op weg te gaan naar openbare archieven, beschikbare studies, levende getuigen en online data. De verschillende items met hun onderzoeksvragen hebben in de eerste plaats betrekking op de gezinsbiografie van de 37 leden - de drie generaties - van de familie Vitalis De Bleeckere-Octavia Versluys.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "De onderzoeksvragen reiken veel verder dan die van het opstellen van de klassieke stamboom. Stambomen kennen enkel een droge opsomming van namen en data. Ze kennen geen gezichten, geen verhalen. Hier primeren de gezichten en de verhalen. Het onderzoek is hier een middel om die gezichten en die verhalen te ontdekken, ook al blijven de antwoorden op de vragen soms beperkt en is er verder kritisch onderzoek naar relevante bronnen vereist. In de aparte rubriek Bronnen worden alle bronnen die een rol spelen in de uitbouw van de site samengebracht en voorgesteld.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_22__["default"], {
      images: lodash__WEBPACK_IMPORTED_MODULE_23___default.a.map(this.props.data.voorgrond.edges, function (e) {
        return e.node.childImageSharp;
      }),
      links: lodash__WEBPACK_IMPORTED_MODULE_23___default.a.map(this.props.data.voorgrond.edges, function (e) {
        return e.node.relativePath.slice(0, -9);
      }),
      captions: lodash__WEBPACK_IMPORTED_MODULE_23___default.a.map(this.props.data.voorgrond.edges, function (e) {
        var relpath = e.node.relativePath.slice(0, -9);

        var index = lodash__WEBPACK_IMPORTED_MODULE_23___default.a.findIndex(frontEdges, function (fe) {
          return fe.node.fileAbsolutePath.indexOf(relpath) !== -1;
        });

        if (index >= 0) {
          return frontEdges[index].node.frontmatter.gallerij_titel;
        }

        return relpath;
      })
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_8___default.a.promoteGatsby
    }))));
  };

  return IndexTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "4267309178";
/* harmony default export */ __webpack_exports__["default"] = (IndexTemplate);

/***/ }),

/***/ "./src/templates/Documenten.css":
/*!**************************************!*\
  !*** ./src/templates/Documenten.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/templates/author.jsx":
/*!**********************************!*\
  !*** ./src/templates/author.jsx ***!
  \**********************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_MainHeader_MainHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainHeader/MainHeader */ "./src/components/MainHeader/MainHeader.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_AuthorImage_AuthorImage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/AuthorImage/AuthorImage */ "./src/components/AuthorImage/AuthorImage.jsx");
/* harmony import */ var _components_AuthorProfile_AuthorProfile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/AuthorProfile/AuthorProfile */ "./src/components/AuthorProfile/AuthorProfile.jsx");
/* harmony import */ var _components_AuthorName_AuthorName__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/AuthorName/AuthorName */ "./src/components/AuthorName/AuthorName.jsx");
/* harmony import */ var _components_AuthorBio_AuthorBio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/AuthorBio/AuthorBio */ "./src/components/AuthorBio/AuthorBio.jsx");
/* harmony import */ var _components_AuthorMeta_AuthorMeta__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/AuthorMeta/AuthorMeta */ "./src/components/AuthorMeta/AuthorMeta.jsx");
/* harmony import */ var _components_AuthorLocation_AuthorLocation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AuthorLocation/AuthorLocation */ "./src/components/AuthorLocation/AuthorLocation.jsx");
/* harmony import */ var _components_AuthorWebsite_AuthorWebsite__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/AuthorWebsite/AuthorWebsite */ "./src/components/AuthorWebsite/AuthorWebsite.jsx");
/* harmony import */ var _components_AuthorStats_AuthorStats__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/AuthorStats/AuthorStats */ "./src/components/AuthorStats/AuthorStats.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _components_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/SocialMediaIcons/SocialMediaIcons */ "./src/components/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");

























var AuthorTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(AuthorTemplate, _React$Component);

  function AuthorTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = AuthorTemplate.prototype;

  _proto.render = function render() {
    var _this$props$pageConte = this.props.pageContext,
        author = _this$props$pageConte.author,
        cover = _this$props$pageConte.cover;
    var postEdges = this.props.data.allMarkdownRemark && this.props.data.allMarkdownRemark.edges ? this.props.data.allMarkdownRemark.edges : [];
    var authorsEdges = this.props.data.allAuthorsJson && this.props.data.allAuthorsJson.edges ? this.props.data.allAuthorsJson.edges : [];

    var getAuthor = function getAuthor() {
      return authorsEdges[0].node;
    };

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_23__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "author-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: "Posts by \"" + author + "\" | " + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainHeader_MainHeader__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "author-head",
      cover: cover
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_11__["default"], {
      logo: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteLogo,
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteNavigation,
      onClick: this.handleOnClick
    }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorProfile_AuthorProfile__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: "inner"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorImage_AuthorImage__WEBPACK_IMPORTED_MODULE_13__["default"], {
      author: getAuthor()
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorName_AuthorName__WEBPACK_IMPORTED_MODULE_15__["default"], {
      name: getAuthor().name
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorBio_AuthorBio__WEBPACK_IMPORTED_MODULE_16__["default"], {
      bio: getAuthor().bio
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorMeta_AuthorMeta__WEBPACK_IMPORTED_MODULE_17__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorLocation_AuthorLocation__WEBPACK_IMPORTED_MODULE_18__["default"], {
      location: getAuthor().location
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorWebsite_AuthorWebsite__WEBPACK_IMPORTED_MODULE_19__["default"], {
      url: getAuthor().url
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_AuthorStats_AuthorStats__WEBPACK_IMPORTED_MODULE_20__["default"], {
      postEdges: postEdges
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_4__["default"], {
      postEdges: postEdges,
      postAuthors: authorsEdges
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_22__["default"], {
      urls: getAuthor().socialUrls
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_21__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.promoteGatsby
    }))));
  };

  return AuthorTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "87297870";
/* harmony default export */ __webpack_exports__["default"] = (AuthorTemplate);

/***/ }),

/***/ "./src/templates/category.jsx":
/*!************************************!*\
  !*** ./src/templates/category.jsx ***!
  \************************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");







var CategoryTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(CategoryTemplate, _React$Component);

  function CategoryTemplate() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = CategoryTemplate.prototype;

  _proto.render = function render() {
    var category = this.props.pageContext.category;
    var postEdges = this.props.data.allMarkdownRemark.edges;
    var authorsEdges = this.props.data.authors.edges;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "category-container"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: "Posts in category \"" + category + "\" | " + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_3__["default"], {
      postEdges: postEdges,
      postAuthors: authorsEdges
    })));
  };

  return CategoryTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "1117444175";
/* harmony default export */ __webpack_exports__["default"] = (CategoryTemplate);

/***/ }),

/***/ "./src/templates/documenten.css":
/*!**************************************!*\
  !*** ./src/templates/documenten.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/templates/documenten.jsx":
/*!**************************************!*\
  !*** ./src/templates/documenten.jsx ***!
  \**************************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MainHeaderImg_MainHeaderImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainHeaderImg/MainHeaderImg */ "./src/components/MainHeaderImg/MainHeaderImg.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MainContent/MainContent */ "./src/components/MainContent/MainContent.jsx");
/* harmony import */ var _components_PostHeader_PostHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PostHeader/PostHeader */ "./src/components/PostHeader/PostHeader.jsx");
/* harmony import */ var _components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PostFormatting/PostFormatting */ "./src/components/PostFormatting/PostFormatting.jsx");
/* harmony import */ var _components_PostDate_PostDate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PostDate/PostDate */ "./src/components/PostDate/PostDate.jsx");
/* harmony import */ var _components_PostFooter_PostFooter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/PostFooter/PostFooter */ "./src/components/PostFooter/PostFooter.jsx");
/* harmony import */ var _components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PageSection/PageSection */ "./src/components/PageSection/PageSection.jsx");
/* harmony import */ var _components_AuthorImage_AuthorImage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AuthorImage/AuthorImage */ "./src/components/AuthorImage/AuthorImage.jsx");
/* harmony import */ var _components_AuthorInfo_AuthorInfo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/AuthorInfo/AuthorInfo */ "./src/components/AuthorInfo/AuthorInfo.jsx");
/* harmony import */ var _components_PostShare_PostShare__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/PostShare/PostShare */ "./src/components/PostShare/PostShare.jsx");
/* harmony import */ var _components_GhostSubscribe_GhostSubscribe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/GhostSubscribe/GhostSubscribe */ "./src/components/GhostSubscribe/GhostSubscribe.jsx");
/* harmony import */ var _components_ReadNext_ReadNext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/ReadNext/ReadNext */ "./src/components/ReadNext/ReadNext.jsx");
/* harmony import */ var _components_PostTags_PostTags__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/PostTags/PostTags */ "./src/components/PostTags/PostTags.jsx");
/* harmony import */ var _components_ReadParents_ReadParents__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/ReadParents/ReadParents */ "./src/components/ReadParents/ReadParents.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _models_author_model__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../models/author-model */ "./src/models/author-model.js");
/* harmony import */ var _components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/Disqus/Disqus */ "./src/components/Disqus/Disqus.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../components/PageTitle/PageTitle */ "./src/components/PageTitle/PageTitle.jsx");
/* harmony import */ var _Documenten_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Documenten.css */ "./src/templates/Documenten.css");
/* harmony import */ var _Documenten_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_Documenten_css__WEBPACK_IMPORTED_MODULE_31__);

































var DocTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(DocTemplate, _React$Component);

  function DocTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = DocTemplate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        location = _this$props.location,
        data = _this$props.data;
    var _this$props$pageConte = this.props.pageContext,
        slug = _this$props$pageConte.slug,
        voorgrond = _this$props$pageConte.voorgrond,
        achtergrond = _this$props$pageConte.achtergrond;
    var doc = this.props.data.markdownRemark;
    var date = doc.date,
        author = doc.author;
    var titel = doc.frontmatter.titel;
    console.log("markdown");
    console.log(this.props.data.markdownRemark);
    var authorData = _models_author_model__WEBPACK_IMPORTED_MODULE_26__["default"].getAuthor(this.props.data.authors.edges, author, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.blogAuthorId);
    console.log(date);
    var bckfluid = null;

    if (this.props.data.backImg) {
      bckfluid = this.props.data.backImg.edges[0].node.childImageSharp.fluid;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_28__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "post-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "" + slug)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_3__["default"], {
      postPath: slug,
      postNode: doc,
      postSEO: true
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainHeaderImg_MainHeaderImg__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "post-head",
      fluid: bckfluid
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "title-box"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "title-cell"
    }, titel)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteNavigation,
      onClick: this.handleOnClick
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: "persoon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_17__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "post-content",
      dangerouslySetInnerHTML: {
        __html: doc.html
      }
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostFooter_PostFooter__WEBPACK_IMPORTED_MODULE_16__["default"], null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_25__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.promoteGatsby
    }))));
  };

  return DocTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "2555609290";
/* harmony default export */ __webpack_exports__["default"] = (DocTemplate);

/***/ }),

/***/ "./src/templates/index.css":
/*!*********************************!*\
  !*** ./src/templates/index.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/templates/index.jsx":
/*!*********************************!*\
  !*** ./src/templates/index.jsx ***!
  \*********************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PageSection/PageSection */ "./src/components/PageSection/PageSection.jsx");
/* harmony import */ var _components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MainHeader2/MainHeader2 */ "./src/components/MainHeader2/MainHeader2.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PageTitle/PageTitle */ "./src/components/PageTitle/PageTitle.jsx");
/* harmony import */ var _components_PageDescription_PageDescription__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/PageDescription/PageDescription */ "./src/components/PageDescription/PageDescription.jsx");
/* harmony import */ var _components_PaginatedContent_PaginatedContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PaginatedContent/PaginatedContent */ "./src/components/PaginatedContent/PaginatedContent.jsx");
/* harmony import */ var _components_SocialMediaIcons_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/SocialMediaIcons/SocialMediaIcons */ "./src/components/SocialMediaIcons/SocialMediaIcons.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./index.css */ "./src/templates/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_23__);

























var IndexTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(IndexTemplate, _React$Component);

  function IndexTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = IndexTemplate.prototype;

  _proto.render = function render() {
    var _this$props$pageConte = this.props.pageContext,
        nodes = _this$props$pageConte.nodes,
        page = _this$props$pageConte.page,
        pages = _this$props$pageConte.pages,
        total = _this$props$pageConte.total,
        limit = _this$props$pageConte.limit,
        prev = _this$props$pageConte.prev,
        next = _this$props$pageConte.next;
    var authorsEdges = this.props.data.authors.edges;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_21__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "home-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_6__["default"], {
      postEdges: nodes
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "home-template"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_13__["default"], {
      cover: this.props.data.frontImg.childImageSharp,
      noscale: true,
      style: {
        "backgroundColor": "#9ACCCD"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.siteNavigation,
      onClick: this.handleOnClick
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "vertical"
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "main-header-content inner"
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_4__["Link"], {
      className: "scroll-down icon-arrow-left",
      to: "content",
      "data-offset": "+1000",
      spy: true,
      smooth: true,
      duration: 500
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "hidden"
    }, "Scroll Down"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageSection_PageSection__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      id: "content",
      style: {
        paddingTop: 30
      }
    }, "Welkom op de site van familie Vitalis De Bleeckere - Octavia Versluys. Ze is online sinds eind april 2019 en bevat vier domeinen.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Het domein ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Familie"), " stelt de 13 personen voor, die samen de twee generaties van de familie vormen. Het betreft de ouders Vitalis en Octavia en hun elf kinderen. Bij ieder van hen hoort een moza\xEFek met info die reikt tot aan hun kinderen. Dat betekent dat de site over drie generaties handelt. In totaal gaat het om 37 personen die de naam De Bleeckere dragen. Via de huwelijken van de kinderen en de kleinkinderen van Vitalis en Octavia komen daar ook andere families bij. In de tijd gezien, situeren al de betrokken personen zich in het laatste kwart van de negentiende eeuw, de volledige twintigste eeuw en in de eerste helft van de eenentwintigste eeuw.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Offici\xEBle stukken, beelden en teksten, bevinden zich in het domein ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Documenten"), ". Er gebeurt ook onderzoek naar de familie en haar omgeving in tijd en ruimte. Dat gebeurt in het domein ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Onderzoek"), ". Het biedt een platform om op bepaalde aspecten van de familie en haar omgeving dieper in te gaan. Dat domein is nauw verwant aan het domein ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Bakermat"), ". Dat belicht thema's die betrekking hebben op de historische, geografische en maatschappelijke context van de familie.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "De vier ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null, "domeinen"), " belichten een familie van Vlaamse volksmensen. Door hard samenwerken, hebben ze stand gehouden doorheen de hevige stormen van het leven en de tijd. De site benadert de familie De Bleeckere-Versluys als een concrete tijdspiegel. De domeinen ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null, "Bakermat"), ", ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null, "Documenten"), " en ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null, "Onderzoek"), " beschrijven samen een hoofdstuk van \u2018de geschiedenis van de gewone man en vrouw\u2019 in het Vlaanderen van eind negentiende \u2013 de volle twintigste eeuw. Ze kunnen ook de interesse wekken van al wie een band heeft met het Meetjesland en het grensgebied tussen Oost- en West-Vlaanderen. Dat geldt ook voor wie geboeid blijft door de historische turbulenties van de Eerste en de Tweede Wereldoorlog, het Interbellum, de naoorlogse Wederopbouw in het Europa van de fifties en de sixties.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Deze site is als een gebouw waaraan permanent wordt gewerkt. De ruwbouw is af. De concrete invulling van de diverse verdiepingen - de vier domeinen - met hun vele kamers, verloopt op het ritme van weken, maanden en jaren.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Wenst u op de hoogte te blijven van de verdere ontwikkeling van de site, ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "contact"
    }, "zie bij Contact"), ".", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        "textAlign": "center"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      style: {
        "color": "blue"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", null, "I tell, therefore you are. (Margeret Atwood)")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      style: {
        "color": "blue"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", null, "Generaties - ze verschijnen en verdwijnen.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "Vormen ze niet de rijmen", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "van de geheimen", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "eigen aan ons reilen en zeilen", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "hier op aarde? (Sylvain De Bleeckere)")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_7___default.a.promoteGatsby
    }))));
  };

  return IndexTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "4110281282";
/* harmony default export */ __webpack_exports__["default"] = (IndexTemplate);

/***/ }),

/***/ "./src/templates/person.jsx":
/*!**********************************!*\
  !*** ./src/templates/person.jsx ***!
  \**********************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find-index */ "core-js/modules/es6.array.find-index");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MainHeaderImg_MainHeaderImg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainHeaderImg/MainHeaderImg */ "./src/components/MainHeaderImg/MainHeaderImg.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/MainContent/MainContent */ "./src/components/MainContent/MainContent.jsx");
/* harmony import */ var _components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/MainHeader2/MainHeader2 */ "./src/components/MainHeader2/MainHeader2.jsx");
/* harmony import */ var _components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PostFormatting/PostFormatting */ "./src/components/PostFormatting/PostFormatting.jsx");
/* harmony import */ var _components_PostDate_PostDate__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/PostDate/PostDate */ "./src/components/PostDate/PostDate.jsx");
/* harmony import */ var _components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PageTitle/PageTitle */ "./src/components/PageTitle/PageTitle.jsx");
/* harmony import */ var _components_PageTitleTop_PageTitleTop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/PageTitleTop/PageTitleTop */ "./src/components/PageTitleTop/PageTitleTop.jsx");
/* harmony import */ var _components_PostFooter_PostFooter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PostFooter/PostFooter */ "./src/components/PostFooter/PostFooter.jsx");
/* harmony import */ var _components_PageDocSection_PageDocSection__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/PageDocSection/PageDocSection */ "./src/components/PageDocSection/PageDocSection.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _models_author_model__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../models/author-model */ "./src/models/author-model.js");
/* harmony import */ var _components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Disqus/Disqus */ "./src/components/Disqus/Disqus.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/Gallery/Gallery */ "./src/components/Gallery/Gallery.jsx");
/* harmony import */ var _components_PersonDetailGallery_PersonDetailGallery__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/PersonDetailGallery/PersonDetailGallery */ "./src/components/PersonDetailGallery/PersonDetailGallery.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _documenten_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./documenten.css */ "./src/templates/documenten.css");
/* harmony import */ var _documenten_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_documenten_css__WEBPACK_IMPORTED_MODULE_29__);































var formatReadPersoon = function formatReadPersoon(value) {
  return {
    path: value.fields.slug,
    voornaam: value.frontmatter.voornaam,
    achternaam: value.frontmatter.achternaam,
    cover: value.frontmatter.cover
  };
};

var PostTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(PostTemplate, _React$Component);

  function PostTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = PostTemplate.prototype;

  _proto.render = function render() {
    var _this2 = this,
        _ref;

    var _this$props = this.props,
        location = _this$props.location,
        data = _this$props.data;
    var _this$props$pageConte = this.props.pageContext,
        slug = _this$props$pageConte.slug,
        vader = _this$props$pageConte.vader,
        moeder = _this$props$pageConte.moeder,
        voorgrond = _this$props$pageConte.voorgrond,
        achtergrond = _this$props$pageConte.achtergrond;
    var persoon = this.props.data.markdownRemark;
    var _persoon$frontmatter = persoon.frontmatter,
        cover = _persoon$frontmatter.cover,
        voornaam = _persoon$frontmatter.voornaam,
        achternaam = _persoon$frontmatter.achternaam,
        geboorte = _persoon$frontmatter.geboorte,
        author = _persoon$frontmatter.author;
    var className = "persoon";
    var authorData = _models_author_model__WEBPACK_IMPORTED_MODULE_22__["default"].getAuthor(this.props.data.authors.edges, author, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.blogAuthorId);
    var relatedSection = "";
    var subSection = "";

    if (this.props.data.related) {
      //match captions
      debugger;

      var relCap = lodash__WEBPACK_IMPORTED_MODULE_28___default.a.map(this.props.data.related.edges, function (el) {
        el = el.node;

        var index = lodash__WEBPACK_IMPORTED_MODULE_28___default.a.findIndex(_this2.props.pageContext.related_caption, function (elFind) {
          console.log(elFind);
          console.log(el.relativePath);
          return elFind.moza == el.relativePath;
        });

        if (index != -1) {
          return _this2.props.pageContext.related_caption[index].caption;
        } else {
          return el.relativePath;
        }
      });

      relatedSection = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageDocSection_PageDocSection__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Gerelateerd"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_26__["default"], {
        images: lodash__WEBPACK_IMPORTED_MODULE_28___default.a.map(this.props.data.related.edges, function (e) {
          return e.node.childImageSharp;
        }),
        links: lodash__WEBPACK_IMPORTED_MODULE_28___default.a.map(this.props.data.related.edges, function (e) {
          return e.node.relativePath.slice(0, -9);
        }),
        captions: relCap
      }));
    }

    if (this.props.data.subsection) {
      subSection = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageDocSection_PageDocSection__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "Verhalen over ", voornaam), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PersonDetailGallery_PersonDetailGallery__WEBPACK_IMPORTED_MODULE_27__["default"], {
        images: lodash__WEBPACK_IMPORTED_MODULE_28___default.a.map(this.props.data.subsection.edges, function (e) {
          return e.node.childImageSharp;
        }),
        links: lodash__WEBPACK_IMPORTED_MODULE_28___default.a.map(this.props.data.subsection.edges, function (e) {
          return e.node.relativePath.slice(0, -4);
        }),
        captions: lodash__WEBPACK_IMPORTED_MODULE_28___default.a.map(this.props.data.subsection.edges, function (e) {
          var idx = e.node.relativePath.indexOf("/mozaik/");
          return e.node.relativePath.slice(idx + 8, e.node.relativePath.length - 4);
        })
      }));
    }

    var foreImg = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null);

    if (this.props.data.foreImg != null) {
      var foregroundWidth = 250 * this.props.data.foreImg.edges[0].node.childImageSharp.fluid.aspectRatio;
      foreImg = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_25___default.a, {
        style: {
          height: "250px",
          width: foregroundWidth
        },
        fluid: this.props.data.foreImg.edges[0].node.childImageSharp.fluid
      }, " ");
    }

    var bckImg = null;

    if (this.props.data.backImg != null) {
      bckImg = this.props.data.backImg.edges[0].node.childImageSharp;
    } else {
      bckImg = this.props.data.defaultImg.childImageSharp;
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_24__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: "post-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, "Title  ", voornaam + " " + achternaam)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_4__["default"], {
      postPath: slug,
      postNode: persoon,
      postSEO: true
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_11__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_14__["default"], {
      cover: bckImg,
      fillRatioHeight: 0.4,
      style: {
        "backgroundColor": "#FFFFFF"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageTitleTop_PageTitleTop__WEBPACK_IMPORTED_MODULE_18__["default"], {
      text: voornaam + " " + achternaam
    }, " "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.siteNavigation,
      onClick: this.handleOnClick
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: (_ref = {
        position: "relative",
        top: "-125px",
        display: "block",
        background: "none !important",
        border: "none !important",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        boxSizing: "border-box"
      }, _ref["display"] = "block", _ref.height = "125px", _ref.padding = "", _ref.width = "auto", _ref)
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        transform: "translate(-50%,0)"
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, foreImg)))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_15__["default"], {
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PageDocSection_PageDocSection__WEBPACK_IMPORTED_MODULE_20__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
      className: "post-content",
      dangerouslySetInnerHTML: {
        __html: persoon.html
      }
    })), subSection, relatedSection, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostFooter_PostFooter__WEBPACK_IMPORTED_MODULE_19__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_23__["default"], {
      postNode: persoon
    })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_21__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_5___default.a.promoteGatsby
    }))));
  };

  return PostTemplate;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "2513471474";
/* harmony default export */ __webpack_exports__["default"] = (PostTemplate);

/***/ }),

/***/ "./src/templates/person_detail.jsx":
/*!*****************************************!*\
  !*** ./src/templates/person_detail.jsx ***!
  \*****************************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainHeader2/MainHeader2 */ "./src/components/MainHeader2/MainHeader2.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MainContent/MainContent */ "./src/components/MainContent/MainContent.jsx");
/* harmony import */ var _components_PostHeader_PostHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PostHeader/PostHeader */ "./src/components/PostHeader/PostHeader.jsx");
/* harmony import */ var _components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PostFormatting/PostFormatting */ "./src/components/PostFormatting/PostFormatting.jsx");
/* harmony import */ var _components_PostDate_PostDate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PostDate/PostDate */ "./src/components/PostDate/PostDate.jsx");
/* harmony import */ var _components_PostFooter_PostFooter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/PostFooter/PostFooter */ "./src/components/PostFooter/PostFooter.jsx");
/* harmony import */ var _components_PageDocSection_PageDocSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PageDocSection/PageDocSection */ "./src/components/PageDocSection/PageDocSection.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _models_author_model__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../models/author-model */ "./src/models/author-model.js");
/* harmony import */ var _components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/Disqus/Disqus */ "./src/components/Disqus/Disqus.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_PersonDetailGallery_PersonDetailGallery__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/PersonDetailGallery/PersonDetailGallery */ "./src/components/PersonDetailGallery/PersonDetailGallery.jsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _documenten_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./documenten.css */ "./src/templates/documenten.css");
/* harmony import */ var _documenten_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_documenten_css__WEBPACK_IMPORTED_MODULE_26__);




























var formatReadPersoon = function formatReadPersoon(value) {
  return {
    path: value.fields.slug,
    voornaam: value.frontmatter.voornaam,
    achternaam: value.frontmatter.achternaam,
    cover: value.frontmatter.cover
  };
};

var PostTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostTemplate, _React$Component);

  function PostTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = PostTemplate.prototype;

  _proto.render = function render() {
    var slug = this.props.pageContext.slug;
    var persoon = this.props.data.markdownRemark;
    var voornaam = "";
    var achternaam = "";
    var frontmatter_persoon = "frontmatter_unknown";

    if (this.props.data.person && this.props.data.person.frontmatter) {
      voornaam = this.props.data.person.frontmatter.voornaam;
      achternaam = this.props.data.person.frontmatter.achternaam;
      frontmatter_persoon = this.props.data.person.frontmatter.persoon;
    }

    var className = "persoon";
    var subsectionIdx = slug.indexOf("/mozaik/");
    var subsectionTitle = slug.slice(subsectionIdx + 8).substring(2);
    var moza = this.props.data.moza;

    if (!moza) {
      moza = this.props.data.missingImg;
    }

    var subSection = "";

    if (this.props.data.subsection) {
      subSection = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageDocSection_PageDocSection__WEBPACK_IMPORTED_MODULE_17__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Andere verhalen over ", voornaam), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PersonDetailGallery_PersonDetailGallery__WEBPACK_IMPORTED_MODULE_24__["default"], {
        images: lodash__WEBPACK_IMPORTED_MODULE_25___default.a.map(this.props.data.subsection.edges, function (e) {
          return e.node.childImageSharp;
        }),
        links: lodash__WEBPACK_IMPORTED_MODULE_25___default.a.map(this.props.data.subsection.edges, function (e) {
          return e.node.relativePath.slice(0, -4);
        }),
        captions: lodash__WEBPACK_IMPORTED_MODULE_25___default.a.map(this.props.data.subsection.edges, function (e) {
          var idx = e.node.relativePath.indexOf("/mozaik/");
          return e.node.relativePath.slice(idx + 8, e.node.relativePath.length - 4);
        })
      }));
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_21__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "post-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, voornaam + " " + achternaam)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_3__["default"], {
      postPath: slug,
      postNode: persoon,
      postSEO: true
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainHeader2_MainHeader2__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "post-head",
      noscale: true,
      fillHeight: 250,
      style: {
        backgroundColor: "#FFFFFF"
      },
      cover: moza.childImageSharp
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, " ", subsectionTitle, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteNavigation,
      onClick: this.handleOnClick
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageDocSection_PageDocSection__WEBPACK_IMPORTED_MODULE_17__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "post-content",
      dangerouslySetInnerHTML: {
        __html: persoon.html
      }
    })), subSection, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageDocSection_PageDocSection__WEBPACK_IMPORTED_MODULE_17__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "post-content"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Terug naar hoofdpagina van ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_23__["Link"], {
      to: frontmatter_persoon + "/"
    }, voornaam, " ", achternaam)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostFooter_PostFooter__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_20__["default"], {
      postNode: persoon
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.promoteGatsby
    }))));
  };

  return PostTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "3565007798";
/* harmony default export */ __webpack_exports__["default"] = (PostTemplate);

/***/ }),

/***/ "./src/templates/post.jsx":
/*!********************************!*\
  !*** ./src/templates/post.jsx ***!
  \********************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SEO_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SEO/SEO */ "./src/components/SEO/SEO.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_MainHeader_MainHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MainHeader/MainHeader */ "./src/components/MainHeader/MainHeader.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MainContent/MainContent */ "./src/components/MainContent/MainContent.jsx");
/* harmony import */ var _components_PostHeader_PostHeader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PostHeader/PostHeader */ "./src/components/PostHeader/PostHeader.jsx");
/* harmony import */ var _components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PostFormatting/PostFormatting */ "./src/components/PostFormatting/PostFormatting.jsx");
/* harmony import */ var _components_PostDate_PostDate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PostDate/PostDate */ "./src/components/PostDate/PostDate.jsx");
/* harmony import */ var _components_PostFooter_PostFooter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/PostFooter/PostFooter */ "./src/components/PostFooter/PostFooter.jsx");
/* harmony import */ var _components_AuthorImage_AuthorImage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/AuthorImage/AuthorImage */ "./src/components/AuthorImage/AuthorImage.jsx");
/* harmony import */ var _components_AuthorInfo_AuthorInfo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AuthorInfo/AuthorInfo */ "./src/components/AuthorInfo/AuthorInfo.jsx");
/* harmony import */ var _components_PostShare_PostShare__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/PostShare/PostShare */ "./src/components/PostShare/PostShare.jsx");
/* harmony import */ var _components_GhostSubscribe_GhostSubscribe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/GhostSubscribe/GhostSubscribe */ "./src/components/GhostSubscribe/GhostSubscribe.jsx");
/* harmony import */ var _components_ReadNext_ReadNext__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/ReadNext/ReadNext */ "./src/components/ReadNext/ReadNext.jsx");
/* harmony import */ var _components_PostTags_PostTags__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/PostTags/PostTags */ "./src/components/PostTags/PostTags.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _models_author_model__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../models/author-model */ "./src/models/author-model.js");
/* harmony import */ var _components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/Disqus/Disqus */ "./src/components/Disqus/Disqus.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");




























function parsePost(post, slug) {
  var result = post;

  if (!result.id) {
    result.id = slug;
  }

  if (!result.id) {
    result.category_id = _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.postDefaultCategoryID;
  }

  return result;
}

var formatReadNext = function formatReadNext(value) {
  return {
    path: value.fields.slug,
    title: value.frontmatter.title,
    cover: value.frontmatter.cover,
    excerpt: value.excerpt
  };
};

var PostTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(PostTemplate, _React$Component);

  function PostTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = PostTemplate.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        location = _this$props.location,
        data = _this$props.data;
    var _this$props$pageConte = this.props.pageContext,
        slug = _this$props$pageConte.slug,
        next = _this$props$pageConte.next,
        prev = _this$props$pageConte.prev;
    var postNode = this.props.data.markdownRemark;
    var post = parsePost(postNode.frontmatter, slug);
    var cover = post.cover,
        title = post.title,
        date = post.date,
        author = post.author,
        tags = post.tags;
    var className = post.post_class ? post.post_class : "post";
    var authorData = _models_author_model__WEBPACK_IMPORTED_MODULE_24__["default"].getAuthor(this.props.data.authors.edges, author, _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.blogAuthorId);

    var getNextData = function getNextData() {
      return next ? formatReadNext(data.next) : null;
    };

    var getPrevData = function getPrevData() {
      return prev ? formatReadNext(data.prev) : null;
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_26__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: "post-template",
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, post.title + " | " + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SEO_SEO__WEBPACK_IMPORTED_MODULE_3__["default"], {
      postPath: slug,
      postNode: postNode,
      postSEO: true
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_10__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainHeader_MainHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "post-head",
      cover: cover
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_7__["default"], {
      logo: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteLogo,
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteNavigation,
      onClick: this.handleOnClick
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainContent_MainContent__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostFormatting_PostFormatting__WEBPACK_IMPORTED_MODULE_14__["default"], {
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostHeader_PostHeader__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "post-title"
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "post-meta"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostDate_PostDate__WEBPACK_IMPORTED_MODULE_15__["default"], {
      date: date
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostTags_PostTags__WEBPACK_IMPORTED_MODULE_22__["default"], {
      prefix: " on ",
      tags: tags
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
      className: "post-content",
      dangerouslySetInnerHTML: {
        __html: postNode.html
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostFooter_PostFooter__WEBPACK_IMPORTED_MODULE_16__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AuthorImage_AuthorImage__WEBPACK_IMPORTED_MODULE_17__["default"], {
      author: authorData
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AuthorInfo_AuthorInfo__WEBPACK_IMPORTED_MODULE_18__["default"], {
      prefix: "/author",
      author: authorData
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostShare_PostShare__WEBPACK_IMPORTED_MODULE_19__["default"], {
      postNode: postNode,
      postPath: location.pathname,
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GhostSubscribe_GhostSubscribe__WEBPACK_IMPORTED_MODULE_20__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Disqus_Disqus__WEBPACK_IMPORTED_MODULE_25__["default"], {
      postNode: postNode
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadNext_ReadNext__WEBPACK_IMPORTED_MODULE_21__["default"], {
      next: getNextData(),
      prev: getPrevData()
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_23__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.promoteGatsby
    }))));
  };

  return PostTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "1770909871";
/* harmony default export */ __webpack_exports__["default"] = (PostTemplate);

/***/ }),

/***/ "./src/templates/tag.jsx":
/*!*******************************!*\
  !*** ./src/templates/tag.jsx ***!
  \*******************************/
/*! exports provided: pageQuery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PostListing_PostListing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostListing/PostListing */ "./src/components/PostListing/PostListing.jsx");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/SiteConfig */ "./data/SiteConfig.js");
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Drawer/Drawer */ "./src/components/Drawer/Drawer.jsx");
/* harmony import */ var _components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Navigation/Navigation */ "./src/components/Navigation/Navigation.jsx");
/* harmony import */ var _components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SiteWrapper/SiteWrapper */ "./src/components/SiteWrapper/SiteWrapper.jsx");
/* harmony import */ var _components_MainHeader_MainHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MainHeader/MainHeader */ "./src/components/MainHeader/MainHeader.jsx");
/* harmony import */ var _components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MainNav/MainNav */ "./src/components/MainNav/MainNav.jsx");
/* harmony import */ var _components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/BlogLogo/BlogLogo */ "./src/components/BlogLogo/BlogLogo.jsx");
/* harmony import */ var _components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/MenuButton/MenuButton */ "./src/components/MenuButton/MenuButton.jsx");
/* harmony import */ var _components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PageTitle/PageTitle */ "./src/components/PageTitle/PageTitle.jsx");
/* harmony import */ var _components_PageDescription_PageDescription__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PageDescription/PageDescription */ "./src/components/PageDescription/PageDescription.jsx");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.jsx");
/* harmony import */ var _components_PaginatedContent_PaginatedContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PaginatedContent/PaginatedContent */ "./src/components/PaginatedContent/PaginatedContent.jsx");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.jsx");


















var TagTemplate =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(TagTemplate, _React$Component);

  function TagTemplate() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      menuOpen: false
    };

    _this.handleOnClick = function (evt) {
      evt.stopPropagation();

      if (_this.state.menuOpen) {
        _this.closeMenu();
      } else {
        _this.openMenu();
      }
    };

    _this.handleOnClose = function (evt) {
      evt.stopPropagation();

      _this.closeMenu();
    };

    _this.openMenu = function () {
      _this.setState({
        menuOpen: true
      });
    };

    _this.closeMenu = function () {
      _this.setState({
        menuOpen: false
      });
    };

    return _this;
  }

  var _proto = TagTemplate.prototype;

  _proto.render = function render() {
    var _this$props$pageConte = this.props.pageContext,
        tag = _this$props$pageConte.tag,
        nodes = _this$props$pageConte.nodes,
        page = _this$props$pageConte.page,
        pages = _this$props$pageConte.pages,
        total = _this$props$pageConte.total,
        limit = _this$props$pageConte.limit,
        prev = _this$props$pageConte.prev,
        next = _this$props$pageConte.next;
    var authorsEdges = this.props.data.authors.edges;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
      location: this.props.location
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isOpen: this.state.menuOpen
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a, {
      title: "Posts tagged as \"" + tag + "\" | " + _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_6__["default"], {
      config: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a,
      onClose: this.handleOnClose
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SiteWrapper_SiteWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "tag-template"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainHeader_MainHeader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: "tag-head",
      cover: tag.featureImage
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MainNav_MainNav__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BlogLogo_BlogLogo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      logo: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteLogo,
      title: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteTitle
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MenuButton_MenuButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      navigation: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.siteNavigation,
      onClick: this.handleOnClick
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "vertical"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "main-header-content inner"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_12__["default"], {
      text: tag
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PageDescription_PageDescription__WEBPACK_IMPORTED_MODULE_13__["default"], {
      text: tag.description || "A " + total + "-post collection"
    }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
      copyright: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.copyright,
      promoteGatsby: _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default.a.promoteGatsby
    }))));
  };

  return TagTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
/* eslint no-undef: "off" */


var pageQuery = "333490751";
/* harmony default export */ __webpack_exports__["default"] = (TagTemplate);

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_json_stringify__;

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_assign__;

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_create__;

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_define_property__;

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_get_prototype_of__;

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_keys__;

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_object_set_prototype_of__;

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_symbol__;

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_library_fn_symbol_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.find":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.find" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_find__;

/***/ }),

/***/ "core-js/modules/es6.array.find-index":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.array.find-index" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_find_index__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_replace__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.fixed":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.string.fixed" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_fixed__;

/***/ }),

/***/ "core-js/modules/es6.string.includes":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.includes" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_includes__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/es7.array.includes":
/*!*****************************************************!*\
  !*** external "core-js/modules/es7.array.includes" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es7_array_includes__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_debug__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "minimatch":
/*!****************************!*\
  !*** external "minimatch" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_minimatch__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "pify":
/*!***********************!*\
  !*** external "pify" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_pify__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map