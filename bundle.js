/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./logo.woff2 */ "./src/logo.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./regular.woff2 */ "./src/regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./about.jpg */ "./src/about.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./contact.jpg */ "./src/contact.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'logo';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2');\n  }\n\n  @font-face {\n    font-family: 'body-font';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff2');\n  }\n\nbody {\n    margin: 0;\n    height: 100vh;\n    font-family: 'body-font';\n}\n\n#content {\n    margin: 0;\n    padding: 0;\n}\n\n#page-container {\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n    grid-template-rows: 0.6fr 6fr 0.6fr;\n    background-color: #F2E5E5;\n}\n\n/* HEADER ELEMENTS */\n\n#header {\n    margin: 0;\n    grid-area: 1/1/2/4;\n    background-color: #2B3A55;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n    position: sticky;\n    top: 0;\n    padding: 0;\n}\n\n#logo-menu-container {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-columns: 7fr 1fr 1fr 1fr;\n    align-items: center;\n}\n\n#logo {\n    color: #F2E5E5;\n    font-family: 'logo';\n    font-size: 4rem;\n    margin: 1.2rem;\n}\n\n.menu-button {\n    border: none;\n    background-color: #2B3A55;\n    margin-left: 1rem;\n    color: #F2E5E5;\n    font-family: 'body-font';\n    font-size: 1.5rem;\n    padding: 1rem;\n}\n\n.menu-button:hover {\n    background-color: #CE7777;\n}\n\n.menu-button:focus {\n    background-color: #CE7777;\n}\n\n/* MAIN CONTENT ELEMENTS */\n\n#main-content {\n    margin: 0;\n    grid-area: 2/2/3/3;\n}\n\n.main-content-container {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.title-container {\n    display: flex;\n    justify-content: center;\n}\n\n.content-title {\n    font-size: 3rem;\n    color: #2B3A55;\n    width: fit-content;\n    font-family: 'logo';\n    min-width: 150px;\n    text-align: center;\n}\n\n#about-image {\n    border: 15px solid #CE7777;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    place-self: stretch;\n    min-height: 300px;\n}\n\n#contact-image {\n    border: 15px solid #CE7777;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    place-self: stretch;\n    min-height: 300px;\n}\n\n#grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1.5rem;\n}\n\n.grid-content {\n    border: 15px solid #CE7777;\n    background-color: #2B3A55;\n    min-height: 300px;\n}\n\n.grid-content-title {\n    color: #CE7777;\n    text-align: center;\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.grid-content-text {\n    color: #F2E5E5;\n    padding: 1rem;\n    font-size: 1.2rem;\n    list-style: none;\n    margin: 0;\n    white-space: pre-line;\n}\n\n/* FOOTER ELEMENTS */\n\n#footer {\n    margin: 0;\n    grid-area: 3/1/4/4;\n    background-color: #CE7777;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n    min-height: 75px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n#footer-container {\n    grid-column: 2/3;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n}\n\n#footer a {\n    color: #2B3A55;\n    text-decoration: none;\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,4DAAwC;EAC1C;;EAEA;IACE,wBAAwB;IACxB,4DAA2C;EAC7C;;AAEF;IACI,SAAS;IACT,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,mCAAmC;IACnC,yBAAyB;AAC7B;;AAEA,oBAAoB;;AAEpB;IACI,SAAS;IACT,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,oCAAoC;IACpC,gBAAgB;IAChB,MAAM;IACN,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,cAAc;IACd,wBAAwB;IACxB,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA,0BAA0B;;AAE1B;IACI,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,cAAc;IACd,kBAAkB;IAClB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,mDAA8B;IAC9B,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,mDAAgC;IAChC,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,gBAAgB;IAChB,SAAS;IACT,qBAAqB;AACzB;;AAEA,oBAAoB;;AAEpB;IACI,SAAS;IACT,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf,SAAS;IACT,OAAO;IACP,QAAQ;AACZ;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;AACtB","sourcesContent":["@font-face {\n    font-family: 'logo';\n    src: url('./logo.woff2') format('woff2');\n  }\n\n  @font-face {\n    font-family: 'body-font';\n    src: url('./regular.woff2') format('woff2');\n  }\n\nbody {\n    margin: 0;\n    height: 100vh;\n    font-family: 'body-font';\n}\n\n#content {\n    margin: 0;\n    padding: 0;\n}\n\n#page-container {\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n    grid-template-rows: 0.6fr 6fr 0.6fr;\n    background-color: #F2E5E5;\n}\n\n/* HEADER ELEMENTS */\n\n#header {\n    margin: 0;\n    grid-area: 1/1/2/4;\n    background-color: #2B3A55;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n    position: sticky;\n    top: 0;\n    padding: 0;\n}\n\n#logo-menu-container {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-columns: 7fr 1fr 1fr 1fr;\n    align-items: center;\n}\n\n#logo {\n    color: #F2E5E5;\n    font-family: 'logo';\n    font-size: 4rem;\n    margin: 1.2rem;\n}\n\n.menu-button {\n    border: none;\n    background-color: #2B3A55;\n    margin-left: 1rem;\n    color: #F2E5E5;\n    font-family: 'body-font';\n    font-size: 1.5rem;\n    padding: 1rem;\n}\n\n.menu-button:hover {\n    background-color: #CE7777;\n}\n\n.menu-button:focus {\n    background-color: #CE7777;\n}\n\n/* MAIN CONTENT ELEMENTS */\n\n#main-content {\n    margin: 0;\n    grid-area: 2/2/3/3;\n}\n\n.main-content-container {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.title-container {\n    display: flex;\n    justify-content: center;\n}\n\n.content-title {\n    font-size: 3rem;\n    color: #2B3A55;\n    width: fit-content;\n    font-family: 'logo';\n    min-width: 150px;\n    text-align: center;\n}\n\n#about-image {\n    border: 15px solid #CE7777;\n    background: url(\"./about.jpg\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    place-self: stretch;\n    min-height: 300px;\n}\n\n#contact-image {\n    border: 15px solid #CE7777;\n    background: url(\"./contact.jpg\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    place-self: stretch;\n    min-height: 300px;\n}\n\n#grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1.5rem;\n}\n\n.grid-content {\n    border: 15px solid #CE7777;\n    background-color: #2B3A55;\n    min-height: 300px;\n}\n\n.grid-content-title {\n    color: #CE7777;\n    text-align: center;\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.grid-content-text {\n    color: #F2E5E5;\n    padding: 1rem;\n    font-size: 1.2rem;\n    list-style: none;\n    margin: 0;\n    white-space: pre-line;\n}\n\n/* FOOTER ELEMENTS */\n\n#footer {\n    margin: 0;\n    grid-area: 3/1/4/4;\n    background-color: #CE7777;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n    min-height: 75px;\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n}\n\n#footer-container {\n    grid-column: 2/3;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n}\n\n#footer a {\n    color: #2B3A55;\n    text-decoration: none;\n    text-align: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "aboutLoad": () => (/* binding */ aboutLoad)
/* harmony export */ });
// import aboutImage from "./about.jpg";

function aboutLoad() {
  const contentContainer = document.createElement("div");
  contentContainer.classList = "main-content-container";

  // Title content

  const titleContainer = document.createElement("div");
  titleContainer.classList = "title-container";
  const title = document.createElement("h2");
  title.classList = "content-title";
  title.textContent = "About";

  titleContainer.appendChild(title);

  // Main content grid

  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";

  // Upper left grid content

  const upperLeftContent = document.createElement("div");
  upperLeftContent.classList = "grid-content";
  const upperLeftTitle = document.createElement("h3");
  upperLeftTitle.classList = "grid-content-title";
  upperLeftTitle.textContent = "Welcome";
  const upperLeftText = document.createElement("p");
  upperLeftText.classList = "grid-content-text";
  upperLeftText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  upperLeftContent.appendChild(upperLeftTitle);
  upperLeftContent.appendChild(upperLeftText);

  // Grid image content

  const image = document.createElement("img");
  image.id = "about-image";

  // Lower left grid content

  const lowerLeftContent = document.createElement("div");
  lowerLeftContent.classList = "grid-content";
  const lowerLeftTitle = document.createElement("h3");
  lowerLeftTitle.classList = "grid-content-title";
  lowerLeftTitle.textContent = "Opening hours";
  const lowerLeftText = document.createElement("ul");
  lowerLeftText.classList = "grid-content-text";
  const line1 = document.createElement("li");
  line1.textContent = "Monday - Wednesday / 12 - 9pm";
  line1.classList = "grid-content-text";
  lowerLeftText.appendChild(line1);
  const line2 = document.createElement("li");
  line2.textContent = "Thursday / 10am - 10pm";
  line2.classList = "grid-content-text";
  lowerLeftText.appendChild(line2);
  const line3 = document.createElement("li");
  line3.textContent = "Friday - Saturday / 10am - late";
  line3.classList = "grid-content-text";
  lowerLeftText.appendChild(line3);
  const line4 = document.createElement("li");
  line4.textContent = "Sunday / 11am - 6pm";
  line4.classList = "grid-content-text";
  lowerLeftText.appendChild(line4);

  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Customer comments";
  const lowerRightText = document.createElement("p");
  lowerRightText.classList = "grid-content-text";
  lowerRightText.textContent = `"The grime band were a shock, frankly. But you can't go wrong with the food and excellent service!"`;
  const lowerRightText2 = document.createElement("p");
  lowerRightText2.classList = "grid-content-text";
  lowerRightText2.textContent = `"I had 18 pints and listened to some beats whilst eating steak. 10/10"`;
  const lowerRightText3 = document.createElement("p");
  lowerRightText3.classList = "grid-content-text";
  lowerRightText3.textContent = `"Solid bait, can't say any more than that"`;

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);
  lowerRightContent.appendChild(lowerRightText2);
  lowerRightContent.appendChild(lowerRightText3);

  // Append items to grid

  gridContainer.appendChild(upperLeftContent);
  gridContainer.appendChild(image);
  gridContainer.appendChild(lowerLeftContent);
  gridContainer.appendChild(lowerRightContent);

  // Append page elements to container

  contentContainer.appendChild(titleContainer);

  contentContainer.appendChild(gridContainer);

  return contentContainer;
}




/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad)
/* harmony export */ });
function contactLoad() {
  const contentContainer = document.createElement("div");
  contentContainer.classList = "main-content-container";

  // Title content

  const titleContainer = document.createElement("div");
  titleContainer.classList = "title-container";
  const title = document.createElement("h2");
  title.classList = "content-title";
  title.textContent = "Contact";

  titleContainer.appendChild(title);

  // Main content grid

  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";

  // Upper left grid content

  const upperLeftContent = document.createElement("div");
  upperLeftContent.classList = "grid-content";
  const upperLeftTitle = document.createElement("h3");
  upperLeftTitle.classList = "grid-content-title";
  upperLeftTitle.textContent = "Get in touch";
  const upperLeftText = document.createElement("p");
  upperLeftText.classList = "grid-content-text";
  upperLeftText.textContent = `Give us a bell! We're very friendly.`;
  const upperLeftText2 = document.createElement("p");
  upperLeftText2.classList = "grid-content-text";
  upperLeftText2.textContent = `Phone: 0044 123 12346`;
  const upperLeftText3 = document.createElement("p");
  upperLeftText3.classList = "grid-content-text";
  upperLeftText3.textContent = `Email: bryn@floodrestaurant.co.uk`;

  upperLeftContent.appendChild(upperLeftTitle);
  upperLeftContent.appendChild(upperLeftText);
  upperLeftContent.appendChild(upperLeftText2);
  upperLeftContent.appendChild(upperLeftText3);

  // Grid image content

  const image = document.createElement("img");
  image.id = "contact-image";

  // Lower left grid content

  const lowerLeftContent = document.createElement("div");
  lowerLeftContent.classList = "grid-content";
  const lowerLeftTitle = document.createElement("h3");
  lowerLeftTitle.classList = "grid-content-title";
  lowerLeftTitle.textContent = "Location";
  const lowerLeftText = document.createElement("p");
  lowerLeftText.classList = "grid-content-text";
  lowerLeftText.textContent = `Or just come on down, we don't care!`;
  const lowerLeftText2 = document.createElement("p");
  lowerLeftText2.classList = "grid-content-text";
  lowerLeftText2.textContent = "123 Niceplace Street \r\n";
  lowerLeftText2.textContent += "Weston Supernice \r\n";
  lowerLeftText2.textContent += "SW99 7TD\r\n";
  lowerLeftText2.textContent += "United Kingdom";

  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);
  lowerLeftContent.appendChild(lowerLeftText2);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Socials";
  const lowerRightText = document.createElement("p");
  lowerRightText.classList = "grid-content-text";
  lowerRightText.textContent = `Twitter: @floodrestaurantUK`;
  const lowerRightText2 = document.createElement("p");
  lowerRightText2.classList = "grid-content-text";
  lowerRightText2.textContent = `Instagram: @floodUK`;
  const lowerRightText3 = document.createElement("p");
  lowerRightText3.classList = "grid-content-text";
  lowerRightText3.textContent = `Facebook: we don't use that rubbish`;

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);
  lowerRightContent.appendChild(lowerRightText2);
  lowerRightContent.appendChild(lowerRightText3);

  // Append items to grid

  gridContainer.appendChild(upperLeftContent);
  gridContainer.appendChild(lowerLeftContent);
  gridContainer.appendChild(image);
  gridContainer.appendChild(lowerRightContent);

  // Append page elements to container

  contentContainer.appendChild(titleContainer);

  contentContainer.appendChild(gridContainer);

  return contentContainer;
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuClick": () => (/* binding */ menuClick)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const content = document.querySelector("#content");
const pageContainer = document.createElement("div");
pageContainer.id = "page-container";
pageContainer.appendChild((0,_page__WEBPACK_IMPORTED_MODULE_0__.headerLoad)());
pageContainer.appendChild((0,_page__WEBPACK_IMPORTED_MODULE_0__.mainLoad)(_about__WEBPACK_IMPORTED_MODULE_1__.aboutLoad));
pageContainer.appendChild((0,_page__WEBPACK_IMPORTED_MODULE_0__.footerLoad)());

content.appendChild(pageContainer);

function menuClick(page) {
  if (page === "about") {
    pageContainer.replaceChild(
      (0,_page__WEBPACK_IMPORTED_MODULE_0__.mainLoad)(_about__WEBPACK_IMPORTED_MODULE_1__.aboutLoad),
      pageContainer.childNodes[1]
    );
  } else if (page === "contact") {
    pageContainer.replaceChild(
      (0,_page__WEBPACK_IMPORTED_MODULE_0__.mainLoad)(_contact__WEBPACK_IMPORTED_MODULE_2__.contactLoad),
      pageContainer.childNodes[1]
    );
  } else if (page === "menu") {
    pageContainer.replaceChild((0,_page__WEBPACK_IMPORTED_MODULE_0__.mainLoad)(_menu__WEBPACK_IMPORTED_MODULE_3__.menuLoad), pageContainer.childNodes[1]);
  }
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
function menuLoad() {
  const contentContainer = document.createElement("div");
  contentContainer.classList = "main-content-container";

  // Title content

  const titleContainer = document.createElement("div");
  titleContainer.classList = "title-container";
  const title = document.createElement("h2");
  title.classList = "content-title";
  title.textContent = "Menu";

  titleContainer.appendChild(title);

  // Main content grid

  const gridContainer = document.createElement("div");
  gridContainer.id = "grid-container";

  // Upper left grid content

  const upperLeftContent = document.createElement("div");
  upperLeftContent.classList = "grid-content";
  const upperLeftTitle = document.createElement("h3");
  upperLeftTitle.classList = "grid-content-title";
  upperLeftTitle.textContent = "Small Plates";
  const upperLeftText = document.createElement("ul");
  upperLeftText.classList = "grid-content-text";
  const line1 = document.createElement("li");
  line1.textContent = "Fine breads and whipped beurre  -6";
  line1.classList = "grid-content-text";
  upperLeftText.appendChild(line1);
  const line2 = document.createElement("li");
  line2.textContent = "Chicken slouvaki with spiced salad  -8";
  line2.classList = "grid-content-text";
  upperLeftText.appendChild(line2);
  const line3 = document.createElement("li");
  line3.textContent = "Smoked paprika hummus  -7";
  line3.classList = "grid-content-text";
  upperLeftText.appendChild(line3);
  const line4 = document.createElement("li");
  line4.textContent = "Fillet steak lollipops  -10";
  line4.classList = "grid-content-text";
  upperLeftText.appendChild(line4);
  const line5 = document.createElement("li");
  line5.textContent = "Hot, salty fries -5";
  line5.classList = "grid-content-text";
  upperLeftText.appendChild(line5);

  upperLeftContent.appendChild(upperLeftTitle);
  upperLeftContent.appendChild(upperLeftText);

  // Upper right content

  const upperRightContent = document.createElement("div");
  upperRightContent.classList = "grid-content";
  const upperRightTitle = document.createElement("h3");
  upperRightTitle.classList = "grid-content-title";
  upperRightTitle.textContent = "Large Plates";
  const upperRightText = document.createElement("ul");
  upperRightText.classList = "grid-content-text";
  const URline1 = document.createElement("li");
  URline1.textContent = "Grilled bream with pickled lemon  -14";
  URline1.classList = "grid-content-text";
  upperRightText.appendChild(URline1);
  const URline2 = document.createElement("li");
  URline2.textContent = "Rack of lamb with rosemary potatoes  -19";
  URline2.classList = "grid-content-text";
  upperRightText.appendChild(URline2);
  const URline3 = document.createElement("li");
  URline3.textContent = "Vegetable moussaka  -12";
  URline3.classList = "grid-content-text";
  upperRightText.appendChild(URline3);
  const URline4 = document.createElement("li");
  URline4.textContent = "Pinenut and feta tagliatelle  -11";
  URline4.classList = "grid-content-text";
  upperRightText.appendChild(URline4);

  upperRightContent.appendChild(upperRightTitle);
  upperRightContent.appendChild(upperRightText);

  // Lower left grid content

  const lowerLeftContent = document.createElement("div");
  lowerLeftContent.classList = "grid-content";
  const lowerLeftTitle = document.createElement("h3");
  lowerLeftTitle.classList = "grid-content-title";
  lowerLeftTitle.textContent = "Dessert";
  const lowerLeftText = document.createElement("ul");
  lowerLeftText.classList = "grid-content-text";
  const LLline1 = document.createElement("li");
  LLline1.textContent = "Shortbread, clotted cream and morello cherries -6";
  LLline1.classList = "grid-content-text";
  lowerLeftText.appendChild(LLline1);
  const LLline2 = document.createElement("li");
  LLline2.textContent = "Ice cream sundae -7";
  LLline2.classList = "grid-content-text";
  lowerLeftText.appendChild(LLline2);
  const LLline3 = document.createElement("li");
  LLline3.textContent = "Rasberry panacotta -6";
  LLline3.classList = "grid-content-text";
  lowerLeftText.appendChild(LLline3);
  const LLline4 = document.createElement("li");
  LLline4.textContent = "Lime sorbet -5";
  LLline4.classList = "grid-content-text";
  lowerLeftText.appendChild(LLline4);
  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Drinks";
  const lowerRightText = document.createElement("ul");
  lowerRightText.classList = "grid-content-text";
  const LRline1 = document.createElement("li");
  LRline1.textContent = "Old fashioned -9";
  LRline1.classList = "grid-content-text";
  lowerRightText.appendChild(LRline1);
  const LRline2 = document.createElement("li");
  LRline2.textContent = "Vodka soda with extra vodka -8";
  LRline2.classList = "grid-content-text";
  lowerRightText.appendChild(LRline2);
  const LRline3 = document.createElement("li");
  LRline3.textContent = "Glass of fizz -7";
  LRline3.classList = "grid-content-text";
  lowerRightText.appendChild(LRline3);
  const LRline4 = document.createElement("li");
  LRline4.textContent =
    "We have an extensive wine list, just ask when we see you";
  LRline4.classList = "grid-content-text";
  lowerRightText.appendChild(LRline4);

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);

  // Append items to grid

  gridContainer.appendChild(upperLeftContent);
  gridContainer.appendChild(upperRightContent);
  gridContainer.appendChild(lowerLeftContent);
  gridContainer.appendChild(lowerRightContent);

  // Append page elements to container

  contentContainer.appendChild(titleContainer);

  contentContainer.appendChild(gridContainer);

  return contentContainer;
}




/***/ }),

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footerLoad": () => (/* binding */ footerLoad),
/* harmony export */   "headerLoad": () => (/* binding */ headerLoad),
/* harmony export */   "mainLoad": () => (/* binding */ mainLoad)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function headerLoad() {
  // Header content

  const header = document.createElement("div");
  header.id = "header";
  const logoMenuContainer = document.createElement("div");
  logoMenuContainer.id = "logo-menu-container";
  const logo = document.createElement("h1");
  logo.id = "logo";
  logo.textContent = "Flood";
  const aboutBtn = document.createElement("button");
  aboutBtn.classList = "menu-button";
  aboutBtn.textContent = "ABOUT";
  aboutBtn.autofocus;
  aboutBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.menuClick)("about");
  });
  const contactBtn = document.createElement("button");
  contactBtn.classList = "menu-button";
  contactBtn.textContent = "CONTACT";
  contactBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.menuClick)("contact");
  });
  const menuBtn = document.createElement("button");
  menuBtn.classList = "menu-button";
  menuBtn.textContent = "MENU";
  menuBtn.addEventListener("click", () => {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.menuClick)("menu");
  });
  header.appendChild(logoMenuContainer);
  logoMenuContainer.appendChild(logo);
  logoMenuContainer.appendChild(aboutBtn);
  logoMenuContainer.appendChild(contactBtn);
  logoMenuContainer.appendChild(menuBtn);

  return header;
}

function mainLoad(currentTabContent) {
  // Main content

  const mainContent = document.createElement("div");
  mainContent.id = "main-content";
  mainContent.appendChild(currentTabContent(mainContent));

  return mainContent;
}

function footerLoad() {
  // Footer content

  const footer = document.createElement("div");
  footer.id = "footer";
  const footerContainer = document.createElement("div");
  footerContainer.id = "footer-container";
  const credit = document.createElement("a");
  credit.href = "https://www.pexels.com/@evonics/";
  credit.textContent = "Images copyright Marcus Herzberg";
  const copyright = document.createElement("a");
  copyright.href = "https://github.com/bryn-ellison";
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Bryn Ellison`;
  footerContainer.appendChild(credit);
  footerContainer.appendChild(copyright);
  footer.appendChild(footerContainer);

  return footer;
}
// Append page elements to container




/***/ }),

/***/ "./src/about.jpg":
/*!***********************!*\
  !*** ./src/about.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d6b230c19cd1b18df1e.jpg";

/***/ }),

/***/ "./src/contact.jpg":
/*!*************************!*\
  !*** ./src/contact.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d052fb81f7f324fd960.jpg";

/***/ }),

/***/ "./src/logo.woff2":
/*!************************!*\
  !*** ./src/logo.woff2 ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1416de2d90420e90b9c6.woff2";

/***/ }),

/***/ "./src/regular.woff2":
/*!***************************!*\
  !*** ./src/regular.woff2 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f83d65e9e57dd27b993d.woff2";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUdBQStCO0FBQzNFLDRDQUE0QywyR0FBa0M7QUFDOUUsNENBQTRDLG1HQUE4QjtBQUMxRSw0Q0FBNEMsdUdBQWdDO0FBQzVFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCwwQkFBMEIsMkVBQTJFLEtBQUssa0JBQWtCLCtCQUErQiwyRUFBMkUsS0FBSyxVQUFVLGdCQUFnQixvQkFBb0IsK0JBQStCLEdBQUcsY0FBYyxnQkFBZ0IsaUJBQWlCLEdBQUcscUJBQXFCLG9CQUFvQiwyQ0FBMkMsMENBQTBDLGdDQUFnQyxHQUFHLHNDQUFzQyxnQkFBZ0IseUJBQXlCLGdDQUFnQyxvQkFBb0IsMkNBQTJDLHVCQUF1QixhQUFhLGlCQUFpQixHQUFHLDBCQUEwQix1QkFBdUIsb0JBQW9CLDZDQUE2QywwQkFBMEIsR0FBRyxXQUFXLHFCQUFxQiwwQkFBMEIsc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQixtQkFBbUIsZ0NBQWdDLHdCQUF3QixxQkFBcUIsK0JBQStCLHdCQUF3QixvQkFBb0IsR0FBRyx3QkFBd0IsZ0NBQWdDLEdBQUcsd0JBQXdCLGdDQUFnQyxHQUFHLGtEQUFrRCxnQkFBZ0IseUJBQXlCLEdBQUcsNkJBQTZCLG9CQUFvQixvQkFBb0IsNkJBQTZCLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsR0FBRyxvQkFBb0Isc0JBQXNCLHFCQUFxQix5QkFBeUIsMEJBQTBCLHVCQUF1Qix5QkFBeUIsR0FBRyxrQkFBa0IsaUNBQWlDLGtFQUFrRSxrQ0FBa0MsbUNBQW1DLDZCQUE2QiwwQkFBMEIsd0JBQXdCLEdBQUcsb0JBQW9CLGlDQUFpQyxrRUFBa0Usa0NBQWtDLG1DQUFtQyw2QkFBNkIsMEJBQTBCLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0IscUNBQXFDLGtCQUFrQixHQUFHLG1CQUFtQixpQ0FBaUMsZ0NBQWdDLHdCQUF3QixHQUFHLHlCQUF5QixxQkFBcUIseUJBQXlCLHdCQUF3Qiw0QkFBNEIsR0FBRyx3QkFBd0IscUJBQXFCLG9CQUFvQix3QkFBd0IsdUJBQXVCLGdCQUFnQiw0QkFBNEIsR0FBRyxzQ0FBc0MsZ0JBQWdCLHlCQUF5QixnQ0FBZ0Msb0JBQW9CLDJDQUEyQyx1QkFBdUIsc0JBQXNCLGdCQUFnQixjQUFjLGVBQWUsR0FBRyx1QkFBdUIsdUJBQXVCLG9CQUFvQiwwQkFBMEIscUNBQXFDLEdBQUcsZUFBZSxxQkFBcUIsNEJBQTRCLHlCQUF5QixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLHNDQUFzQywwQkFBMEIsK0NBQStDLEtBQUssa0JBQWtCLCtCQUErQixrREFBa0QsS0FBSyxVQUFVLGdCQUFnQixvQkFBb0IsK0JBQStCLEdBQUcsY0FBYyxnQkFBZ0IsaUJBQWlCLEdBQUcscUJBQXFCLG9CQUFvQiwyQ0FBMkMsMENBQTBDLGdDQUFnQyxHQUFHLHNDQUFzQyxnQkFBZ0IseUJBQXlCLGdDQUFnQyxvQkFBb0IsMkNBQTJDLHVCQUF1QixhQUFhLGlCQUFpQixHQUFHLDBCQUEwQix1QkFBdUIsb0JBQW9CLDZDQUE2QywwQkFBMEIsR0FBRyxXQUFXLHFCQUFxQiwwQkFBMEIsc0JBQXNCLHFCQUFxQixHQUFHLGtCQUFrQixtQkFBbUIsZ0NBQWdDLHdCQUF3QixxQkFBcUIsK0JBQStCLHdCQUF3QixvQkFBb0IsR0FBRyx3QkFBd0IsZ0NBQWdDLEdBQUcsd0JBQXdCLGdDQUFnQyxHQUFHLGtEQUFrRCxnQkFBZ0IseUJBQXlCLEdBQUcsNkJBQTZCLG9CQUFvQixvQkFBb0IsNkJBQTZCLEdBQUcsc0JBQXNCLG9CQUFvQiw4QkFBOEIsR0FBRyxvQkFBb0Isc0JBQXNCLHFCQUFxQix5QkFBeUIsMEJBQTBCLHVCQUF1Qix5QkFBeUIsR0FBRyxrQkFBa0IsaUNBQWlDLHVDQUF1QyxrQ0FBa0MsbUNBQW1DLDZCQUE2QiwwQkFBMEIsd0JBQXdCLEdBQUcsb0JBQW9CLGlDQUFpQyx5Q0FBeUMsa0NBQWtDLG1DQUFtQyw2QkFBNkIsMEJBQTBCLHdCQUF3QixHQUFHLHFCQUFxQixvQkFBb0IscUNBQXFDLGtCQUFrQixHQUFHLG1CQUFtQixpQ0FBaUMsZ0NBQWdDLHdCQUF3QixHQUFHLHlCQUF5QixxQkFBcUIseUJBQXlCLHdCQUF3Qiw0QkFBNEIsR0FBRyx3QkFBd0IscUJBQXFCLG9CQUFvQix3QkFBd0IsdUJBQXVCLGdCQUFnQiw0QkFBNEIsR0FBRyxzQ0FBc0MsZ0JBQWdCLHlCQUF5QixnQ0FBZ0Msb0JBQW9CLDJDQUEyQyx1QkFBdUIsc0JBQXNCLGdCQUFnQixjQUFjLGVBQWUsR0FBRyx1QkFBdUIsdUJBQXVCLG9CQUFvQiwwQkFBMEIscUNBQXFDLEdBQUcsZUFBZSxxQkFBcUIsNEJBQTRCLHlCQUF5QixHQUFHLG1CQUFtQjtBQUNuNlA7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNoQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRXFCOzs7Ozs7Ozs7Ozs7Ozs7QUM1R3JCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVB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QXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbG9nby53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vYWJvdXQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9jb250YWN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2xvZ28nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgfVxcblxcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnYm9keS1mb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZjInKTtcXG4gIH1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ2JvZHktZm9udCc7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jcGFnZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC42ZnIgNmZyIDAuNmZyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFNUU1O1xcbn1cXG5cXG4vKiBIRUFERVIgRUxFTUVOVFMgKi9cXG5cXG4jaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjNBNTU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyIDFmcjtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbG9nby1tZW51LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGNvbG9yOiAjRjJFNUU1O1xcbiAgICBmb250LWZhbWlseTogJ2xvZ28nO1xcbiAgICBmb250LXNpemU6IDRyZW07XFxuICAgIG1hcmdpbjogMS4ycmVtO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjNBNTU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBjb2xvcjogI0YyRTVFNTtcXG4gICAgZm9udC1mYW1pbHk6ICdib2R5LWZvbnQnO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFNzc3NztcXG59XFxuXFxuLm1lbnUtYnV0dG9uOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFNzc3NztcXG59XFxuXFxuLyogTUFJTiBDT05URU5UIEVMRU1FTlRTICovXFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiAjMkIzQTU1O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnbG9nbyc7XFxuICAgIG1pbi13aWR0aDogMTUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2Fib3V0LWltYWdlIHtcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNDRTc3Nzc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbiNjb250YWN0LWltYWdlIHtcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNDRTc3Nzc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbiNncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5ncmlkLWNvbnRlbnQge1xcbiAgICBib3JkZXI6IDE1cHggc29saWQgI0NFNzc3NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCM0E1NTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbi5ncmlkLWNvbnRlbnQtdGl0bGUge1xcbiAgICBjb2xvcjogI0NFNzc3NztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZ3JpZC1jb250ZW50LXRleHQge1xcbiAgICBjb2xvcjogI0YyRTVFNTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbn1cXG5cXG4vKiBGT09URVIgRUxFTUVOVFMgKi9cXG5cXG4jZm9vdGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRTc3Nzc7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyIDFmcjtcXG4gICAgbWluLWhlaWdodDogNzVweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbn1cXG5cXG4jZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI2Zvb3RlciBhIHtcXG4gICAgY29sb3I6ICMyQjNBNTU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDREQUF3QztFQUMxQzs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4Qiw0REFBMkM7RUFDN0M7O0FBRUY7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQSwwQkFBMEI7O0FBRTFCO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1EQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLG1EQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUJBQXFCO0FBQ3pCOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdsb2dvJztcXG4gICAgc3JjOiB1cmwoJy4vbG9nby53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcXG4gIH1cXG5cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2JvZHktZm9udCc7XFxuICAgIHNyYzogdXJsKCcuL3JlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICB9XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZm9udC1mYW1pbHk6ICdib2R5LWZvbnQnO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNmZyIDZmciAwLjZmcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRTVFNTtcXG59XFxuXFxuLyogSEVBREVSIEVMRU1FTlRTICovXFxuXFxuI2hlYWRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi80O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIzQTU1O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmciAxZnI7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2xvZ28tbWVudS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBjb2xvcjogI0YyRTVFNTtcXG4gICAgZm9udC1mYW1pbHk6ICdsb2dvJztcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBtYXJnaW46IDEuMnJlbTtcXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIzQTU1O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgY29sb3I6ICNGMkU1RTU7XFxuICAgIGZvbnQtZmFtaWx5OiAnYm9keS1mb250JztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5tZW51LWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRTc3Nzc7XFxufVxcblxcbi5tZW51LWJ1dHRvbjpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDRTc3Nzc7XFxufVxcblxcbi8qIE1BSU4gQ09OVEVOVCBFTEVNRU5UUyAqL1xcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtYXJlYTogMi8yLzMvMztcXG59XFxuXFxuLm1haW4tY29udGVudC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBjb2xvcjogIzJCM0E1NTtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBmb250LWZhbWlseTogJ2xvZ28nO1xcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNhYm91dC1pbWFnZSB7XFxuICAgIGJvcmRlcjogMTVweCBzb2xpZCAjQ0U3Nzc3O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYWJvdXQuanBnXFxcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbiNjb250YWN0LWltYWdlIHtcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNDRTc3Nzc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9jb250YWN0LmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4jZ3JpZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMS41cmVtO1xcbn1cXG5cXG4uZ3JpZC1jb250ZW50IHtcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNDRTc3Nzc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjNBNTU7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uZ3JpZC1jb250ZW50LXRpdGxlIHtcXG4gICAgY29sb3I6ICNDRTc3Nzc7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmdyaWQtY29udGVudC10ZXh0IHtcXG4gICAgY29sb3I6ICNGMkU1RTU7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcXG59XFxuXFxuLyogRk9PVEVSIEVMRU1FTlRTICovXFxuXFxuI2Zvb3RlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC80O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0U3Nzc3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmciAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG59XFxuXFxuI2Zvb3Rlci1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbiNmb290ZXIgYSB7XFxuICAgIGNvbG9yOiAjMkIzQTU1O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCBhYm91dEltYWdlIGZyb20gXCIuL2Fib3V0LmpwZ1wiO1xuXG5mdW5jdGlvbiBhYm91dExvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdCA9IFwibWFpbi1jb250ZW50LWNvbnRhaW5lclwiO1xuXG4gIC8vIFRpdGxlIGNvbnRlbnRcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwidGl0bGUtY29udGFpbmVyXCI7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QgPSBcImNvbnRlbnQtdGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkFib3V0XCI7XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIC8vIE1haW4gY29udGVudCBncmlkXG5cbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWRDb250YWluZXIuaWQgPSBcImdyaWQtY29udGFpbmVyXCI7XG5cbiAgLy8gVXBwZXIgbGVmdCBncmlkIGNvbnRlbnRcblxuICBjb25zdCB1cHBlckxlZnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXBwZXJMZWZ0Q29udGVudC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudFwiO1xuICBjb25zdCB1cHBlckxlZnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdXBwZXJMZWZ0VGl0bGUuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGl0bGVcIjtcbiAgdXBwZXJMZWZ0VGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWVcIjtcbiAgY29uc3QgdXBwZXJMZWZ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB1cHBlckxlZnRUZXh0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgdXBwZXJMZWZ0VGV4dC50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIEZsb29kIFJlc3RhdXJhbnQgJiBCYXIsIHdoZXJlIGEgZ29vZCB3ZWxjb21lIGlzIGFzIGltcG9ydGFudCBhcyBnb29kIGZvb2QgYW5kIGJldHRlciBkcmluay4gV2Ugb2ZmZXIgc21hbGwgYW5kIGxhcmdlIHBsYXRlcywgZmluZSBjb2NrdGFpbHMgYW5kIG91ciBvd24gc3BlY2lhbCBpbi1ob3VzZSBncmltZSBiYW5kLmA7XG5cbiAgdXBwZXJMZWZ0Q29udGVudC5hcHBlbmRDaGlsZCh1cHBlckxlZnRUaXRsZSk7XG4gIHVwcGVyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJMZWZ0VGV4dCk7XG5cbiAgLy8gR3JpZCBpbWFnZSBjb250ZW50XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5pZCA9IFwiYWJvdXQtaW1hZ2VcIjtcblxuICAvLyBMb3dlciBsZWZ0IGdyaWQgY29udGVudFxuXG4gIGNvbnN0IGxvd2VyTGVmdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb3dlckxlZnRDb250ZW50LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50XCI7XG4gIGNvbnN0IGxvd2VyTGVmdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBsb3dlckxlZnRUaXRsZS5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10aXRsZVwiO1xuICBsb3dlckxlZnRUaXRsZS50ZXh0Q29udGVudCA9IFwiT3BlbmluZyBob3Vyc1wiO1xuICBjb25zdCBsb3dlckxlZnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICBsb3dlckxlZnRUZXh0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgY29uc3QgbGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpbmUxLnRleHRDb250ZW50ID0gXCJNb25kYXkgLSBXZWRuZXNkYXkgLyAxMiAtIDlwbVwiO1xuICBsaW5lMS5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyTGVmdFRleHQuYXBwZW5kQ2hpbGQobGluZTEpO1xuICBjb25zdCBsaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGluZTIudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5IC8gMTBhbSAtIDEwcG1cIjtcbiAgbGluZTIuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlckxlZnRUZXh0LmFwcGVuZENoaWxkKGxpbmUyKTtcbiAgY29uc3QgbGluZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpbmUzLnRleHRDb250ZW50ID0gXCJGcmlkYXkgLSBTYXR1cmRheSAvIDEwYW0gLSBsYXRlXCI7XG4gIGxpbmUzLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgbG93ZXJMZWZ0VGV4dC5hcHBlbmRDaGlsZChsaW5lMyk7XG4gIGNvbnN0IGxpbmU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaW5lNC50ZXh0Q29udGVudCA9IFwiU3VuZGF5IC8gMTFhbSAtIDZwbVwiO1xuICBsaW5lNC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyTGVmdFRleHQuYXBwZW5kQ2hpbGQobGluZTQpO1xuXG4gIGxvd2VyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJMZWZ0VGl0bGUpO1xuICBsb3dlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKGxvd2VyTGVmdFRleHQpO1xuXG4gIC8vIExvd2VyIHJpZ2h0IGdyaWQgY29udGVudFxuXG4gIGNvbnN0IGxvd2VyUmlnaHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG93ZXJSaWdodENvbnRlbnQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnRcIjtcblxuICBjb25zdCBsb3dlclJpZ2h0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxvd2VyUmlnaHRUaXRsZS5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10aXRsZVwiO1xuICBsb3dlclJpZ2h0VGl0bGUudGV4dENvbnRlbnQgPSBcIkN1c3RvbWVyIGNvbW1lbnRzXCI7XG4gIGNvbnN0IGxvd2VyUmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvd2VyUmlnaHRUZXh0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgbG93ZXJSaWdodFRleHQudGV4dENvbnRlbnQgPSBgXCJUaGUgZ3JpbWUgYmFuZCB3ZXJlIGEgc2hvY2ssIGZyYW5rbHkuIEJ1dCB5b3UgY2FuJ3QgZ28gd3Jvbmcgd2l0aCB0aGUgZm9vZCBhbmQgZXhjZWxsZW50IHNlcnZpY2UhXCJgO1xuICBjb25zdCBsb3dlclJpZ2h0VGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG93ZXJSaWdodFRleHQyLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgbG93ZXJSaWdodFRleHQyLnRleHRDb250ZW50ID0gYFwiSSBoYWQgMTggcGludHMgYW5kIGxpc3RlbmVkIHRvIHNvbWUgYmVhdHMgd2hpbHN0IGVhdGluZyBzdGVhay4gMTAvMTBcImA7XG4gIGNvbnN0IGxvd2VyUmlnaHRUZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb3dlclJpZ2h0VGV4dDMuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlclJpZ2h0VGV4dDMudGV4dENvbnRlbnQgPSBgXCJTb2xpZCBiYWl0LCBjYW4ndCBzYXkgYW55IG1vcmUgdGhhbiB0aGF0XCJgO1xuXG4gIGxvd2VyUmlnaHRDb250ZW50LmFwcGVuZENoaWxkKGxvd2VyUmlnaHRUaXRsZSk7XG4gIGxvd2VyUmlnaHRDb250ZW50LmFwcGVuZENoaWxkKGxvd2VyUmlnaHRUZXh0KTtcbiAgbG93ZXJSaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJSaWdodFRleHQyKTtcbiAgbG93ZXJSaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJSaWdodFRleHQzKTtcblxuICAvLyBBcHBlbmQgaXRlbXMgdG8gZ3JpZFxuXG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQodXBwZXJMZWZ0Q29udGVudCk7XG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvd2VyTGVmdENvbnRlbnQpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvd2VyUmlnaHRDb250ZW50KTtcblxuICAvLyBBcHBlbmQgcGFnZSBlbGVtZW50cyB0byBjb250YWluZXJcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWRDb250YWluZXIpO1xuXG4gIHJldHVybiBjb250ZW50Q29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBhYm91dExvYWQgfTtcbiIsImZ1bmN0aW9uIGNvbnRhY3RMb2FkKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm1haW4tY29udGVudC1jb250YWluZXJcIjtcblxuICAvLyBUaXRsZSBjb250ZW50XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcInRpdGxlLWNvbnRhaW5lclwiO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0ID0gXCJjb250ZW50LXRpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG5cbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIC8vIE1haW4gY29udGVudCBncmlkXG5cbiAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWRDb250YWluZXIuaWQgPSBcImdyaWQtY29udGFpbmVyXCI7XG5cbiAgLy8gVXBwZXIgbGVmdCBncmlkIGNvbnRlbnRcblxuICBjb25zdCB1cHBlckxlZnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXBwZXJMZWZ0Q29udGVudC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudFwiO1xuICBjb25zdCB1cHBlckxlZnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgdXBwZXJMZWZ0VGl0bGUuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGl0bGVcIjtcbiAgdXBwZXJMZWZ0VGl0bGUudGV4dENvbnRlbnQgPSBcIkdldCBpbiB0b3VjaFwiO1xuICBjb25zdCB1cHBlckxlZnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHVwcGVyTGVmdFRleHQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICB1cHBlckxlZnRUZXh0LnRleHRDb250ZW50ID0gYEdpdmUgdXMgYSBiZWxsISBXZSdyZSB2ZXJ5IGZyaWVuZGx5LmA7XG4gIGNvbnN0IHVwcGVyTGVmdFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHVwcGVyTGVmdFRleHQyLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgdXBwZXJMZWZ0VGV4dDIudGV4dENvbnRlbnQgPSBgUGhvbmU6IDAwNDQgMTIzIDEyMzQ2YDtcbiAgY29uc3QgdXBwZXJMZWZ0VGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdXBwZXJMZWZ0VGV4dDMuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICB1cHBlckxlZnRUZXh0My50ZXh0Q29udGVudCA9IGBFbWFpbDogYnJ5bkBmbG9vZHJlc3RhdXJhbnQuY28udWtgO1xuXG4gIHVwcGVyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJMZWZ0VGl0bGUpO1xuICB1cHBlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKHVwcGVyTGVmdFRleHQpO1xuICB1cHBlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKHVwcGVyTGVmdFRleHQyKTtcbiAgdXBwZXJMZWZ0Q29udGVudC5hcHBlbmRDaGlsZCh1cHBlckxlZnRUZXh0Myk7XG5cbiAgLy8gR3JpZCBpbWFnZSBjb250ZW50XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5pZCA9IFwiY29udGFjdC1pbWFnZVwiO1xuXG4gIC8vIExvd2VyIGxlZnQgZ3JpZCBjb250ZW50XG5cbiAgY29uc3QgbG93ZXJMZWZ0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvd2VyTGVmdENvbnRlbnQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnRcIjtcbiAgY29uc3QgbG93ZXJMZWZ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxvd2VyTGVmdFRpdGxlLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRpdGxlXCI7XG4gIGxvd2VyTGVmdFRpdGxlLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICBjb25zdCBsb3dlckxlZnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvd2VyTGVmdFRleHQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlckxlZnRUZXh0LnRleHRDb250ZW50ID0gYE9yIGp1c3QgY29tZSBvbiBkb3duLCB3ZSBkb24ndCBjYXJlIWA7XG4gIGNvbnN0IGxvd2VyTGVmdFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvd2VyTGVmdFRleHQyLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgbG93ZXJMZWZ0VGV4dDIudGV4dENvbnRlbnQgPSBcIjEyMyBOaWNlcGxhY2UgU3RyZWV0IFxcclxcblwiO1xuICBsb3dlckxlZnRUZXh0Mi50ZXh0Q29udGVudCArPSBcIldlc3RvbiBTdXBlcm5pY2UgXFxyXFxuXCI7XG4gIGxvd2VyTGVmdFRleHQyLnRleHRDb250ZW50ICs9IFwiU1c5OSA3VERcXHJcXG5cIjtcbiAgbG93ZXJMZWZ0VGV4dDIudGV4dENvbnRlbnQgKz0gXCJVbml0ZWQgS2luZ2RvbVwiO1xuXG4gIGxvd2VyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJMZWZ0VGl0bGUpO1xuICBsb3dlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKGxvd2VyTGVmdFRleHQpO1xuICBsb3dlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKGxvd2VyTGVmdFRleHQyKTtcblxuICAvLyBMb3dlciByaWdodCBncmlkIGNvbnRlbnRcblxuICBjb25zdCBsb3dlclJpZ2h0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvd2VyUmlnaHRDb250ZW50LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50XCI7XG5cbiAgY29uc3QgbG93ZXJSaWdodFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBsb3dlclJpZ2h0VGl0bGUuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGl0bGVcIjtcbiAgbG93ZXJSaWdodFRpdGxlLnRleHRDb250ZW50ID0gXCJTb2NpYWxzXCI7XG4gIGNvbnN0IGxvd2VyUmlnaHRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvd2VyUmlnaHRUZXh0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgbG93ZXJSaWdodFRleHQudGV4dENvbnRlbnQgPSBgVHdpdHRlcjogQGZsb29kcmVzdGF1cmFudFVLYDtcbiAgY29uc3QgbG93ZXJSaWdodFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvd2VyUmlnaHRUZXh0Mi5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyUmlnaHRUZXh0Mi50ZXh0Q29udGVudCA9IGBJbnN0YWdyYW06IEBmbG9vZFVLYDtcbiAgY29uc3QgbG93ZXJSaWdodFRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvd2VyUmlnaHRUZXh0My5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyUmlnaHRUZXh0My50ZXh0Q29udGVudCA9IGBGYWNlYm9vazogd2UgZG9uJ3QgdXNlIHRoYXQgcnViYmlzaGA7XG5cbiAgbG93ZXJSaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJSaWdodFRpdGxlKTtcbiAgbG93ZXJSaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJSaWdodFRleHQpO1xuICBsb3dlclJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlclJpZ2h0VGV4dDIpO1xuICBsb3dlclJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlclJpZ2h0VGV4dDMpO1xuXG4gIC8vIEFwcGVuZCBpdGVtcyB0byBncmlkXG5cbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cHBlckxlZnRDb250ZW50KTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dlckxlZnRDb250ZW50KTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQobG93ZXJSaWdodENvbnRlbnQpO1xuXG4gIC8vIEFwcGVuZCBwYWdlIGVsZW1lbnRzIHRvIGNvbnRhaW5lclxuXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGNvbnRhY3RMb2FkIH07XG4iLCJpbXBvcnQgeyBoZWFkZXJMb2FkLCBtYWluTG9hZCwgZm9vdGVyTG9hZCB9IGZyb20gXCIuL3BhZ2VcIjtcbmltcG9ydCB7IGFib3V0TG9hZCB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBjb250YWN0TG9hZCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7IG1lbnVMb2FkIH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbmNvbnN0IHBhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xucGFnZUNvbnRhaW5lci5pZCA9IFwicGFnZS1jb250YWluZXJcIjtcbnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyTG9hZCgpKTtcbnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkxvYWQoYWJvdXRMb2FkKSk7XG5wYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlckxvYWQoKSk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZUNvbnRhaW5lcik7XG5cbmZ1bmN0aW9uIG1lbnVDbGljayhwYWdlKSB7XG4gIGlmIChwYWdlID09PSBcImFib3V0XCIpIHtcbiAgICBwYWdlQ29udGFpbmVyLnJlcGxhY2VDaGlsZChcbiAgICAgIG1haW5Mb2FkKGFib3V0TG9hZCksXG4gICAgICBwYWdlQ29udGFpbmVyLmNoaWxkTm9kZXNbMV1cbiAgICApO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT09IFwiY29udGFjdFwiKSB7XG4gICAgcGFnZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGQoXG4gICAgICBtYWluTG9hZChjb250YWN0TG9hZCksXG4gICAgICBwYWdlQ29udGFpbmVyLmNoaWxkTm9kZXNbMV1cbiAgICApO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT09IFwibWVudVwiKSB7XG4gICAgcGFnZUNvbnRhaW5lci5yZXBsYWNlQ2hpbGQobWFpbkxvYWQobWVudUxvYWQpLCBwYWdlQ29udGFpbmVyLmNoaWxkTm9kZXNbMV0pO1xuICB9XG59XG5cbmV4cG9ydCB7IG1lbnVDbGljayB9O1xuIiwiZnVuY3Rpb24gbWVudUxvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdCA9IFwibWFpbi1jb250ZW50LWNvbnRhaW5lclwiO1xuXG4gIC8vIFRpdGxlIGNvbnRlbnRcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwidGl0bGUtY29udGFpbmVyXCI7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QgPSBcImNvbnRlbnQtdGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgLy8gTWFpbiBjb250ZW50IGdyaWRcblxuICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZENvbnRhaW5lci5pZCA9IFwiZ3JpZC1jb250YWluZXJcIjtcblxuICAvLyBVcHBlciBsZWZ0IGdyaWQgY29udGVudFxuXG4gIGNvbnN0IHVwcGVyTGVmdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1cHBlckxlZnRDb250ZW50LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50XCI7XG4gIGNvbnN0IHVwcGVyTGVmdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB1cHBlckxlZnRUaXRsZS5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10aXRsZVwiO1xuICB1cHBlckxlZnRUaXRsZS50ZXh0Q29udGVudCA9IFwiU21hbGwgUGxhdGVzXCI7XG4gIGNvbnN0IHVwcGVyTGVmdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVwcGVyTGVmdFRleHQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBjb25zdCBsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGluZTEudGV4dENvbnRlbnQgPSBcIkZpbmUgYnJlYWRzIGFuZCB3aGlwcGVkIGJldXJyZSAgLTZcIjtcbiAgbGluZTEuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICB1cHBlckxlZnRUZXh0LmFwcGVuZENoaWxkKGxpbmUxKTtcbiAgY29uc3QgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpbmUyLnRleHRDb250ZW50ID0gXCJDaGlja2VuIHNsb3V2YWtpIHdpdGggc3BpY2VkIHNhbGFkICAtOFwiO1xuICBsaW5lMi5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIHVwcGVyTGVmdFRleHQuYXBwZW5kQ2hpbGQobGluZTIpO1xuICBjb25zdCBsaW5lMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGluZTMudGV4dENvbnRlbnQgPSBcIlNtb2tlZCBwYXByaWthIGh1bW11cyAgLTdcIjtcbiAgbGluZTMuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICB1cHBlckxlZnRUZXh0LmFwcGVuZENoaWxkKGxpbmUzKTtcbiAgY29uc3QgbGluZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpbmU0LnRleHRDb250ZW50ID0gXCJGaWxsZXQgc3RlYWsgbG9sbGlwb3BzICAtMTBcIjtcbiAgbGluZTQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICB1cHBlckxlZnRUZXh0LmFwcGVuZENoaWxkKGxpbmU0KTtcbiAgY29uc3QgbGluZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpbmU1LnRleHRDb250ZW50ID0gXCJIb3QsIHNhbHR5IGZyaWVzIC01XCI7XG4gIGxpbmU1LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgdXBwZXJMZWZ0VGV4dC5hcHBlbmRDaGlsZChsaW5lNSk7XG5cbiAgdXBwZXJMZWZ0Q29udGVudC5hcHBlbmRDaGlsZCh1cHBlckxlZnRUaXRsZSk7XG4gIHVwcGVyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJMZWZ0VGV4dCk7XG5cbiAgLy8gVXBwZXIgcmlnaHQgY29udGVudFxuXG4gIGNvbnN0IHVwcGVyUmlnaHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXBwZXJSaWdodENvbnRlbnQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnRcIjtcbiAgY29uc3QgdXBwZXJSaWdodFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB1cHBlclJpZ2h0VGl0bGUuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGl0bGVcIjtcbiAgdXBwZXJSaWdodFRpdGxlLnRleHRDb250ZW50ID0gXCJMYXJnZSBQbGF0ZXNcIjtcbiAgY29uc3QgdXBwZXJSaWdodFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHVwcGVyUmlnaHRUZXh0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgY29uc3QgVVJsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgVVJsaW5lMS50ZXh0Q29udGVudCA9IFwiR3JpbGxlZCBicmVhbSB3aXRoIHBpY2tsZWQgbGVtb24gIC0xNFwiO1xuICBVUmxpbmUxLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgdXBwZXJSaWdodFRleHQuYXBwZW5kQ2hpbGQoVVJsaW5lMSk7XG4gIGNvbnN0IFVSbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIFVSbGluZTIudGV4dENvbnRlbnQgPSBcIlJhY2sgb2YgbGFtYiB3aXRoIHJvc2VtYXJ5IHBvdGF0b2VzICAtMTlcIjtcbiAgVVJsaW5lMi5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIHVwcGVyUmlnaHRUZXh0LmFwcGVuZENoaWxkKFVSbGluZTIpO1xuICBjb25zdCBVUmxpbmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBVUmxpbmUzLnRleHRDb250ZW50ID0gXCJWZWdldGFibGUgbW91c3Nha2EgIC0xMlwiO1xuICBVUmxpbmUzLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgdXBwZXJSaWdodFRleHQuYXBwZW5kQ2hpbGQoVVJsaW5lMyk7XG4gIGNvbnN0IFVSbGluZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIFVSbGluZTQudGV4dENvbnRlbnQgPSBcIlBpbmVudXQgYW5kIGZldGEgdGFnbGlhdGVsbGUgIC0xMVwiO1xuICBVUmxpbmU0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgdXBwZXJSaWdodFRleHQuYXBwZW5kQ2hpbGQoVVJsaW5lNCk7XG5cbiAgdXBwZXJSaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJSaWdodFRpdGxlKTtcbiAgdXBwZXJSaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJSaWdodFRleHQpO1xuXG4gIC8vIExvd2VyIGxlZnQgZ3JpZCBjb250ZW50XG5cbiAgY29uc3QgbG93ZXJMZWZ0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvd2VyTGVmdENvbnRlbnQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnRcIjtcbiAgY29uc3QgbG93ZXJMZWZ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxvd2VyTGVmdFRpdGxlLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRpdGxlXCI7XG4gIGxvd2VyTGVmdFRpdGxlLnRleHRDb250ZW50ID0gXCJEZXNzZXJ0XCI7XG4gIGNvbnN0IGxvd2VyTGVmdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxvd2VyTGVmdFRleHQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBjb25zdCBMTGxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBMTGxpbmUxLnRleHRDb250ZW50ID0gXCJTaG9ydGJyZWFkLCBjbG90dGVkIGNyZWFtIGFuZCBtb3JlbGxvIGNoZXJyaWVzIC02XCI7XG4gIExMbGluZTEuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlckxlZnRUZXh0LmFwcGVuZENoaWxkKExMbGluZTEpO1xuICBjb25zdCBMTGxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBMTGxpbmUyLnRleHRDb250ZW50ID0gXCJJY2UgY3JlYW0gc3VuZGFlIC03XCI7XG4gIExMbGluZTIuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlckxlZnRUZXh0LmFwcGVuZENoaWxkKExMbGluZTIpO1xuICBjb25zdCBMTGxpbmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBMTGxpbmUzLnRleHRDb250ZW50ID0gXCJSYXNiZXJyeSBwYW5hY290dGEgLTZcIjtcbiAgTExsaW5lMy5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyTGVmdFRleHQuYXBwZW5kQ2hpbGQoTExsaW5lMyk7XG4gIGNvbnN0IExMbGluZTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIExMbGluZTQudGV4dENvbnRlbnQgPSBcIkxpbWUgc29yYmV0IC01XCI7XG4gIExMbGluZTQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlckxlZnRUZXh0LmFwcGVuZENoaWxkKExMbGluZTQpO1xuICBsb3dlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKGxvd2VyTGVmdFRpdGxlKTtcbiAgbG93ZXJMZWZ0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlckxlZnRUZXh0KTtcblxuICAvLyBMb3dlciByaWdodCBncmlkIGNvbnRlbnRcblxuICBjb25zdCBsb3dlclJpZ2h0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvd2VyUmlnaHRDb250ZW50LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50XCI7XG5cbiAgY29uc3QgbG93ZXJSaWdodFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBsb3dlclJpZ2h0VGl0bGUuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGl0bGVcIjtcbiAgbG93ZXJSaWdodFRpdGxlLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcbiAgY29uc3QgbG93ZXJSaWdodFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGxvd2VyUmlnaHRUZXh0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgY29uc3QgTFJsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgTFJsaW5lMS50ZXh0Q29udGVudCA9IFwiT2xkIGZhc2hpb25lZCAtOVwiO1xuICBMUmxpbmUxLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgbG93ZXJSaWdodFRleHQuYXBwZW5kQ2hpbGQoTFJsaW5lMSk7XG4gIGNvbnN0IExSbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIExSbGluZTIudGV4dENvbnRlbnQgPSBcIlZvZGthIHNvZGEgd2l0aCBleHRyYSB2b2RrYSAtOFwiO1xuICBMUmxpbmUyLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgbG93ZXJSaWdodFRleHQuYXBwZW5kQ2hpbGQoTFJsaW5lMik7XG4gIGNvbnN0IExSbGluZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIExSbGluZTMudGV4dENvbnRlbnQgPSBcIkdsYXNzIG9mIGZpenogLTdcIjtcbiAgTFJsaW5lMy5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyUmlnaHRUZXh0LmFwcGVuZENoaWxkKExSbGluZTMpO1xuICBjb25zdCBMUmxpbmU0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBMUmxpbmU0LnRleHRDb250ZW50ID1cbiAgICBcIldlIGhhdmUgYW4gZXh0ZW5zaXZlIHdpbmUgbGlzdCwganVzdCBhc2sgd2hlbiB3ZSBzZWUgeW91XCI7XG4gIExSbGluZTQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlclJpZ2h0VGV4dC5hcHBlbmRDaGlsZChMUmxpbmU0KTtcblxuICBsb3dlclJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlclJpZ2h0VGl0bGUpO1xuICBsb3dlclJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlclJpZ2h0VGV4dCk7XG5cbiAgLy8gQXBwZW5kIGl0ZW1zIHRvIGdyaWRcblxuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwcGVyTGVmdENvbnRlbnQpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwcGVyUmlnaHRDb250ZW50KTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dlckxlZnRDb250ZW50KTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dlclJpZ2h0Q29udGVudCk7XG5cbiAgLy8gQXBwZW5kIHBhZ2UgZWxlbWVudHMgdG8gY29udGFpbmVyXG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgbWVudUxvYWQgfTtcbiIsImltcG9ydCB7IG1lbnVDbGljayB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmZ1bmN0aW9uIGhlYWRlckxvYWQoKSB7XG4gIC8vIEhlYWRlciBjb250ZW50XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbiAgY29uc3QgbG9nb01lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvTWVudUNvbnRhaW5lci5pZCA9IFwibG9nby1tZW51LWNvbnRhaW5lclwiO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsb2dvLmlkID0gXCJsb2dvXCI7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkZsb29kXCI7XG4gIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWJvdXRCdG4uY2xhc3NMaXN0ID0gXCJtZW51LWJ1dHRvblwiO1xuICBhYm91dEJ0bi50ZXh0Q29udGVudCA9IFwiQUJPVVRcIjtcbiAgYWJvdXRCdG4uYXV0b2ZvY3VzO1xuICBhYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1lbnVDbGljayhcImFib3V0XCIpO1xuICB9KTtcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0ID0gXCJtZW51LWJ1dHRvblwiO1xuICBjb250YWN0QnRuLnRleHRDb250ZW50ID0gXCJDT05UQUNUXCI7XG4gIGNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtZW51Q2xpY2soXCJjb250YWN0XCIpO1xuICB9KTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0ID0gXCJtZW51LWJ1dHRvblwiO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNRU5VXCI7XG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtZW51Q2xpY2soXCJtZW51XCIpO1xuICB9KTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29NZW51Q29udGFpbmVyKTtcbiAgbG9nb01lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGxvZ29NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0QnRuKTtcbiAgbG9nb01lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gIGxvZ29NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIG1haW5Mb2FkKGN1cnJlbnRUYWJDb250ZW50KSB7XG4gIC8vIE1haW4gY29udGVudFxuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuaWQgPSBcIm1haW4tY29udGVudFwiO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50VGFiQ29udGVudChtYWluQ29udGVudCkpO1xuXG4gIHJldHVybiBtYWluQ29udGVudDtcbn1cblxuZnVuY3Rpb24gZm9vdGVyTG9hZCgpIHtcbiAgLy8gRm9vdGVyIGNvbnRlbnRcblxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXIuaWQgPSBcImZvb3RlclwiO1xuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJDb250YWluZXIuaWQgPSBcImZvb3Rlci1jb250YWluZXJcIjtcbiAgY29uc3QgY3JlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNyZWRpdC5ocmVmID0gXCJodHRwczovL3d3dy5wZXhlbHMuY29tL0Bldm9uaWNzL1wiO1xuICBjcmVkaXQudGV4dENvbnRlbnQgPSBcIkltYWdlcyBjb3B5cmlnaHQgTWFyY3VzIEhlcnpiZXJnXCI7XG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjb3B5cmlnaHQuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL2JyeW4tZWxsaXNvblwiO1xuICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSBgQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBCcnluIEVsbGlzb25gO1xuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlZGl0KTtcbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvcHlyaWdodCk7XG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xuXG4gIHJldHVybiBmb290ZXI7XG59XG4vLyBBcHBlbmQgcGFnZSBlbGVtZW50cyB0byBjb250YWluZXJcblxuZXhwb3J0IHsgaGVhZGVyTG9hZCwgbWFpbkxvYWQsIGZvb3RlckxvYWQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==