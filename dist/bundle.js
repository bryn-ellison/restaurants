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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./about.jpg */ "./src/about.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./contact.jpg */ "./src/contact.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    height: 100vh;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n#page-container {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n    grid-template-rows: 0.8fr 6fr 0.6fr;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 100%;\n}\n\n/* HEADER ELEMENTS */\n\n#header {\n    margin: 0;\n    grid-area: 1/1/2/4;\n    background-color: #2B3A55;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n}\n\n#logo-menu-container {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-columns: 7fr 1fr 1fr 1fr;\n    align-items: center;\n}\n\n#logo {\n    color: white;\n\n}\n\n.menu-button {\n    border: none;\n    background-color: #2B3A55;\n    margin-left: 1rem;\n    color: white;\n}\n\n/* MAIN CONTENT ELEMENTS */\n\n#main-content {\n    margin: 0;\n    grid-area: 2/2/3/3;\n   /* background:rgba(255,255,255, 0.5);*/\n}\n\n.main-content-container {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.title-container {\n    display: flex;\n    justify-content: center;  \n}\n\n.content-title {\n    font-size: 2.5rem;\n    color: #CE7777;\n    border: 15px solid #CE7777;\n    width: fit-content;\n    padding: 1rem;\n    background-color: #2B3A55;\n}\n\n#about-image {\n    border: 15px solid #CE7777;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    place-self: stretch;\n    min-height: 300px;\n}\n\n#contact-image {\n    border: 15px solid #CE7777;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    place-self: stretch;\n    min-height: 300px;\n}\n\n#grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1.5rem;\n}\n\n.grid-content {\n    border: 15px solid #CE7777;\n    background-color: #2B3A55;\n    min-height: 300px;\n}\n\n.grid-content-title {\n    color: #CE7777;\n    text-align: center;\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.grid-content-text {\n    color: #CE7777;\n    padding: 1rem;\n    font-size: 1.2rem;\n}\n\n/* FOOTER ELEMENTS */\n\n#footer {\n    margin: 0;\n    grid-area: 3/1/4/4;\n    background-color: #CE7777;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n}\n\n#footer-container {\n    grid-column: 2/3;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n}\n\n#footer a {\n    color: #2B3A55;\n    text-decoration: none;\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,SAAS;IACT,UAAU;AACd;;AAEA;IACI,SAAS;IACT,WAAW;IACX,YAAY;IACZ,aAAa;IACb,oCAAoC;IACpC,mCAAmC;IACnC,mDAAmC;IACnC,2BAA2B;IAC3B,4BAA4B;IAC5B,qBAAqB;AACzB;;AAEA,oBAAoB;;AAEpB;IACI,SAAS;IACT,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,YAAY;;AAEhB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;AAChB;;AAEA,0BAA0B;;AAE1B;IACI,SAAS;IACT,kBAAkB;GACnB,sCAAsC;AACzC;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,0BAA0B;IAC1B,kBAAkB;IAClB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;IAC1B,mDAA8B;IAC9B,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,0BAA0B;IAC1B,mDAAgC;IAChC,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,WAAW;AACf;;AAEA;IACI,0BAA0B;IAC1B,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,iBAAiB;AACrB;;AAEA,oBAAoB;;AAEpB;IACI,SAAS;IACT,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,kBAAkB;AACtB","sourcesContent":["body {\n    margin: 0;\n    height: 100vh;\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n#page-container {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n    grid-template-rows: 0.8fr 6fr 0.6fr;\n    background: url(\"./background.jpg\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 100%;\n}\n\n/* HEADER ELEMENTS */\n\n#header {\n    margin: 0;\n    grid-area: 1/1/2/4;\n    background-color: #2B3A55;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n}\n\n#logo-menu-container {\n    grid-column: 2/3;\n    display: grid;\n    grid-template-columns: 7fr 1fr 1fr 1fr;\n    align-items: center;\n}\n\n#logo {\n    color: white;\n\n}\n\n.menu-button {\n    border: none;\n    background-color: #2B3A55;\n    margin-left: 1rem;\n    color: white;\n}\n\n/* MAIN CONTENT ELEMENTS */\n\n#main-content {\n    margin: 0;\n    grid-area: 2/2/3/3;\n   /* background:rgba(255,255,255, 0.5);*/\n}\n\n.main-content-container {\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.title-container {\n    display: flex;\n    justify-content: center;  \n}\n\n.content-title {\n    font-size: 2.5rem;\n    color: #CE7777;\n    border: 15px solid #CE7777;\n    width: fit-content;\n    padding: 1rem;\n    background-color: #2B3A55;\n}\n\n#about-image {\n    border: 15px solid #CE7777;\n    background: url(\"./about.jpg\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    place-self: stretch;\n    min-height: 300px;\n}\n\n#contact-image {\n    border: 15px solid #CE7777;\n    background: url(\"./contact.jpg\");\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    place-self: stretch;\n    min-height: 300px;\n}\n\n#grid-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 1.5rem;\n}\n\n.grid-content {\n    border: 15px solid #CE7777;\n    background-color: #2B3A55;\n    min-height: 300px;\n}\n\n.grid-content-title {\n    color: #CE7777;\n    text-align: center;\n    font-size: 1.5rem;\n    margin-bottom: 0.5rem;\n}\n\n.grid-content-text {\n    color: #CE7777;\n    padding: 1rem;\n    font-size: 1.2rem;\n}\n\n/* FOOTER ELEMENTS */\n\n#footer {\n    margin: 0;\n    grid-area: 3/1/4/4;\n    background-color: #CE7777;\n    display: grid;\n    grid-template-columns: 1fr 2.5fr 1fr;\n}\n\n#footer-container {\n    grid-column: 2/3;\n    display: grid;\n    align-items: center;\n    grid-template-columns: 1fr 1fr;\n}\n\n#footer a {\n    color: #2B3A55;\n    text-decoration: none;\n    text-align: center;\n}"],"sourceRoot":""}]);
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
  const lowerLeftText = document.createElement("p");
  lowerLeftText.classList = "grid-content-text";
  lowerLeftText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Comments";
  const lowerRightText = document.createElement("p");
  lowerRightText.classList = "grid-content-text";
  lowerRightText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);

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
  upperLeftText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  upperLeftContent.appendChild(upperLeftTitle);
  upperLeftContent.appendChild(upperLeftText);

  // Grid image content

  const image = document.createElement("img");
  image.id = "contact-image";

  // Lower left grid content

  const lowerLeftContent = document.createElement("div");
  lowerLeftContent.classList = "grid-content";
  const lowerLeftTitle = document.createElement("h3");
  lowerLeftTitle.classList = "grid-content-title";
  lowerLeftTitle.textContent = "Opening hours";
  const lowerLeftText = document.createElement("p");
  lowerLeftText.classList = "grid-content-text";
  lowerLeftText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Comments";
  const lowerRightText = document.createElement("p");
  lowerRightText.classList = "grid-content-text";
  lowerRightText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);

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
  lowerLeftTitle.textContent = "Large Plates";
  const lowerLeftText = document.createElement("p");
  lowerLeftText.classList = "grid-content-text";
  lowerLeftText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  lowerLeftContent.appendChild(lowerLeftTitle);
  lowerLeftContent.appendChild(lowerLeftText);

  // Lower right grid content

  const lowerRightContent = document.createElement("div");
  lowerRightContent.classList = "grid-content";

  const lowerRightTitle = document.createElement("h3");
  lowerRightTitle.classList = "grid-content-title";
  lowerRightTitle.textContent = "Drinks";
  const lowerRightText = document.createElement("p");
  lowerRightText.classList = "grid-content-text";
  lowerRightText.textContent = `Welcome to Flood Restaurant & Bar, where a good welcome is as important as good food and better drink. We offer small and large plates, fine cocktails and our own special in-house grime band.`;

  lowerRightContent.appendChild(lowerRightTitle);
  lowerRightContent.appendChild(lowerRightText);

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
  credit.textContent = "Background image copyright Marcus Herzberg";
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

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a4ca96045ed029e39e08.jpg";

/***/ }),

/***/ "./src/contact.jpg":
/*!*************************!*\
  !*** ./src/contact.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5d052fb81f7f324fd960.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzLy4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnRzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fib3V0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vY29udGFjdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jcGFnZS1jb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjhmciA2ZnIgMC42ZnI7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbn1cXG5cXG4vKiBIRUFERVIgRUxFTUVOVFMgKi9cXG5cXG4jaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjNBNTU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIuNWZyIDFmcjtcXG59XFxuXFxuI2xvZ28tbWVudS1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDdmciAxZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2xvZ28ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCM0E1NTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogTUFJTiBDT05URU5UIEVMRU1FTlRTICovXFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMy8zO1xcbiAgIC8qIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwgMC41KTsqL1xcbn1cXG5cXG4ubWFpbi1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50aXRsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgIFxcbn1cXG5cXG4uY29udGVudC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBjb2xvcjogI0NFNzc3NztcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNDRTc3Nzc7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCM0E1NTtcXG59XFxuXFxuI2Fib3V0LWltYWdlIHtcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNDRTc3Nzc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbiNjb250YWN0LWltYWdlIHtcXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkICNDRTc3Nzc7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGxhY2Utc2VsZjogc3RyZXRjaDtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbiNncmlkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5ncmlkLWNvbnRlbnQge1xcbiAgICBib3JkZXI6IDE1cHggc29saWQgI0NFNzc3NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCM0E1NTtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbi5ncmlkLWNvbnRlbnQtdGl0bGUge1xcbiAgICBjb2xvcjogI0NFNzc3NztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uZ3JpZC1jb250ZW50LXRleHQge1xcbiAgICBjb2xvcjogI0NFNzc3NztcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi8qIEZPT1RFUiBFTEVNRU5UUyAqL1xcblxcbiNmb290ZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NFNzc3NztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnIgMWZyO1xcbn1cXG5cXG4jZm9vdGVyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG59XFxuXFxuI2Zvb3RlciBhIHtcXG4gICAgY29sb3I6ICMyQjNBNTU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLG1DQUFtQztJQUNuQyxtREFBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUEsMEJBQTBCOztBQUUxQjtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7R0FDbkIsc0NBQXNDO0FBQ3pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbURBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsbURBQWdDO0lBQ2hDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUEsb0JBQW9COztBQUVwQjtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI3BhZ2UtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC44ZnIgNmZyIDAuNmZyO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vYmFja2dyb3VuZC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbi8qIEhFQURFUiBFTEVNRU5UUyAqL1xcblxcbiNoZWFkZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGdyaWQtYXJlYTogMS8xLzIvNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJCM0E1NTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnIgMWZyO1xcbn1cXG5cXG4jbG9nby1tZW51LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogN2ZyIDFmciAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbG9nbyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG5cXG59XFxuXFxuLm1lbnUtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIzQTU1O1xcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBNQUlOIENPTlRFTlQgRUxFTUVOVFMgKi9cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBncmlkLWFyZWE6IDIvMi8zLzM7XFxuICAgLyogYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LCAwLjUpOyovXFxufVxcblxcbi5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRpdGxlLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgXFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGNvbG9yOiAjQ0U3Nzc3O1xcbiAgICBib3JkZXI6IDE1cHggc29saWQgI0NFNzc3NztcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIzQTU1O1xcbn1cXG5cXG4jYWJvdXQtaW1hZ2Uge1xcbiAgICBib3JkZXI6IDE1cHggc29saWQgI0NFNzc3NztcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2Fib3V0LmpwZ1xcXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBsYWNlLXNlbGY6IHN0cmV0Y2g7XFxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4jY29udGFjdC1pbWFnZSB7XFxuICAgIGJvcmRlcjogMTVweCBzb2xpZCAjQ0U3Nzc3O1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vY29udGFjdC5qcGdcXFwiKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBwbGFjZS1zZWxmOiBzdHJldGNoO1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuI2dyaWQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLmdyaWQtY29udGVudCB7XFxuICAgIGJvcmRlcjogMTVweCBzb2xpZCAjQ0U3Nzc3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIzQTU1O1xcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmdyaWQtY29udGVudC10aXRsZSB7XFxuICAgIGNvbG9yOiAjQ0U3Nzc3O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi5ncmlkLWNvbnRlbnQtdGV4dCB7XFxuICAgIGNvbG9yOiAjQ0U3Nzc3O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLyogRk9PVEVSIEVMRU1FTlRTICovXFxuXFxuI2Zvb3RlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ3JpZC1hcmVhOiAzLzEvNC80O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0U3Nzc3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmciAxZnI7XFxufVxcblxcbiNmb290ZXItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbn1cXG5cXG4jZm9vdGVyIGEge1xcbiAgICBjb2xvcjogIzJCM0E1NTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgYWJvdXRJbWFnZSBmcm9tIFwiLi9hYm91dC5qcGdcIjtcblxuZnVuY3Rpb24gYWJvdXRMb2FkKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudENvbnRhaW5lci5jbGFzc0xpc3QgPSBcIm1haW4tY29udGVudC1jb250YWluZXJcIjtcblxuICAvLyBUaXRsZSBjb250ZW50XG5cbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QgPSBcInRpdGxlLWNvbnRhaW5lclwiO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0ID0gXCJjb250ZW50LXRpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAvLyBNYWluIGNvbnRlbnQgZ3JpZFxuXG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkQ29udGFpbmVyLmlkID0gXCJncmlkLWNvbnRhaW5lclwiO1xuXG4gIC8vIFVwcGVyIGxlZnQgZ3JpZCBjb250ZW50XG5cbiAgY29uc3QgdXBwZXJMZWZ0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVwcGVyTGVmdENvbnRlbnQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnRcIjtcbiAgY29uc3QgdXBwZXJMZWZ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHVwcGVyTGVmdFRpdGxlLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRpdGxlXCI7XG4gIHVwcGVyTGVmdFRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lXCI7XG4gIGNvbnN0IHVwcGVyTGVmdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdXBwZXJMZWZ0VGV4dC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIHVwcGVyTGVmdFRleHQudGV4dENvbnRlbnQgPSBgV2VsY29tZSB0byBGbG9vZCBSZXN0YXVyYW50ICYgQmFyLCB3aGVyZSBhIGdvb2Qgd2VsY29tZSBpcyBhcyBpbXBvcnRhbnQgYXMgZ29vZCBmb29kIGFuZCBiZXR0ZXIgZHJpbmsuIFdlIG9mZmVyIHNtYWxsIGFuZCBsYXJnZSBwbGF0ZXMsIGZpbmUgY29ja3RhaWxzIGFuZCBvdXIgb3duIHNwZWNpYWwgaW4taG91c2UgZ3JpbWUgYmFuZC5gO1xuXG4gIHVwcGVyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJMZWZ0VGl0bGUpO1xuICB1cHBlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKHVwcGVyTGVmdFRleHQpO1xuXG4gIC8vIEdyaWQgaW1hZ2UgY29udGVudFxuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UuaWQgPSBcImFib3V0LWltYWdlXCI7XG5cbiAgLy8gTG93ZXIgbGVmdCBncmlkIGNvbnRlbnRcblxuICBjb25zdCBsb3dlckxlZnRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG93ZXJMZWZ0Q29udGVudC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudFwiO1xuICBjb25zdCBsb3dlckxlZnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbG93ZXJMZWZ0VGl0bGUuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGl0bGVcIjtcbiAgbG93ZXJMZWZ0VGl0bGUudGV4dENvbnRlbnQgPSBcIk9wZW5pbmcgaG91cnNcIjtcbiAgY29uc3QgbG93ZXJMZWZ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb3dlckxlZnRUZXh0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgbG93ZXJMZWZ0VGV4dC50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIEZsb29kIFJlc3RhdXJhbnQgJiBCYXIsIHdoZXJlIGEgZ29vZCB3ZWxjb21lIGlzIGFzIGltcG9ydGFudCBhcyBnb29kIGZvb2QgYW5kIGJldHRlciBkcmluay4gV2Ugb2ZmZXIgc21hbGwgYW5kIGxhcmdlIHBsYXRlcywgZmluZSBjb2NrdGFpbHMgYW5kIG91ciBvd24gc3BlY2lhbCBpbi1ob3VzZSBncmltZSBiYW5kLmA7XG5cbiAgbG93ZXJMZWZ0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlckxlZnRUaXRsZSk7XG4gIGxvd2VyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJMZWZ0VGV4dCk7XG5cbiAgLy8gTG93ZXIgcmlnaHQgZ3JpZCBjb250ZW50XG5cbiAgY29uc3QgbG93ZXJSaWdodENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb3dlclJpZ2h0Q29udGVudC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudFwiO1xuXG4gIGNvbnN0IGxvd2VyUmlnaHRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgbG93ZXJSaWdodFRpdGxlLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRpdGxlXCI7XG4gIGxvd2VyUmlnaHRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29tbWVudHNcIjtcbiAgY29uc3QgbG93ZXJSaWdodFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG93ZXJSaWdodFRleHQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlclJpZ2h0VGV4dC50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIEZsb29kIFJlc3RhdXJhbnQgJiBCYXIsIHdoZXJlIGEgZ29vZCB3ZWxjb21lIGlzIGFzIGltcG9ydGFudCBhcyBnb29kIGZvb2QgYW5kIGJldHRlciBkcmluay4gV2Ugb2ZmZXIgc21hbGwgYW5kIGxhcmdlIHBsYXRlcywgZmluZSBjb2NrdGFpbHMgYW5kIG91ciBvd24gc3BlY2lhbCBpbi1ob3VzZSBncmltZSBiYW5kLmA7XG5cbiAgbG93ZXJSaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJSaWdodFRpdGxlKTtcbiAgbG93ZXJSaWdodENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJSaWdodFRleHQpO1xuXG4gIC8vIEFwcGVuZCBpdGVtcyB0byBncmlkXG5cbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cHBlckxlZnRDb250ZW50KTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSk7XG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQobG93ZXJMZWZ0Q29udGVudCk7XG4gIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQobG93ZXJSaWdodENvbnRlbnQpO1xuXG4gIC8vIEFwcGVuZCBwYWdlIGVsZW1lbnRzIHRvIGNvbnRhaW5lclxuXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGNvbnRlbnRDb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGFib3V0TG9hZCB9O1xuIiwiZnVuY3Rpb24gY29udGFjdExvYWQoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50Q29udGFpbmVyLmNsYXNzTGlzdCA9IFwibWFpbi1jb250ZW50LWNvbnRhaW5lclwiO1xuXG4gIC8vIFRpdGxlIGNvbnRlbnRcblxuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdCA9IFwidGl0bGUtY29udGFpbmVyXCI7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc0xpc3QgPSBcImNvbnRlbnQtdGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgLy8gTWFpbiBjb250ZW50IGdyaWRcblxuICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZENvbnRhaW5lci5pZCA9IFwiZ3JpZC1jb250YWluZXJcIjtcblxuICAvLyBVcHBlciBsZWZ0IGdyaWQgY29udGVudFxuXG4gIGNvbnN0IHVwcGVyTGVmdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1cHBlckxlZnRDb250ZW50LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50XCI7XG4gIGNvbnN0IHVwcGVyTGVmdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICB1cHBlckxlZnRUaXRsZS5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10aXRsZVwiO1xuICB1cHBlckxlZnRUaXRsZS50ZXh0Q29udGVudCA9IFwiR2V0IGluIHRvdWNoXCI7XG4gIGNvbnN0IHVwcGVyTGVmdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdXBwZXJMZWZ0VGV4dC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIHVwcGVyTGVmdFRleHQudGV4dENvbnRlbnQgPSBgV2VsY29tZSB0byBGbG9vZCBSZXN0YXVyYW50ICYgQmFyLCB3aGVyZSBhIGdvb2Qgd2VsY29tZSBpcyBhcyBpbXBvcnRhbnQgYXMgZ29vZCBmb29kIGFuZCBiZXR0ZXIgZHJpbmsuIFdlIG9mZmVyIHNtYWxsIGFuZCBsYXJnZSBwbGF0ZXMsIGZpbmUgY29ja3RhaWxzIGFuZCBvdXIgb3duIHNwZWNpYWwgaW4taG91c2UgZ3JpbWUgYmFuZC5gO1xuXG4gIHVwcGVyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJMZWZ0VGl0bGUpO1xuICB1cHBlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKHVwcGVyTGVmdFRleHQpO1xuXG4gIC8vIEdyaWQgaW1hZ2UgY29udGVudFxuXG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1hZ2UuaWQgPSBcImNvbnRhY3QtaW1hZ2VcIjtcblxuICAvLyBMb3dlciBsZWZ0IGdyaWQgY29udGVudFxuXG4gIGNvbnN0IGxvd2VyTGVmdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb3dlckxlZnRDb250ZW50LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50XCI7XG4gIGNvbnN0IGxvd2VyTGVmdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBsb3dlckxlZnRUaXRsZS5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10aXRsZVwiO1xuICBsb3dlckxlZnRUaXRsZS50ZXh0Q29udGVudCA9IFwiT3BlbmluZyBob3Vyc1wiO1xuICBjb25zdCBsb3dlckxlZnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxvd2VyTGVmdFRleHQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGV4dFwiO1xuICBsb3dlckxlZnRUZXh0LnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gRmxvb2QgUmVzdGF1cmFudCAmIEJhciwgd2hlcmUgYSBnb29kIHdlbGNvbWUgaXMgYXMgaW1wb3J0YW50IGFzIGdvb2QgZm9vZCBhbmQgYmV0dGVyIGRyaW5rLiBXZSBvZmZlciBzbWFsbCBhbmQgbGFyZ2UgcGxhdGVzLCBmaW5lIGNvY2t0YWlscyBhbmQgb3VyIG93biBzcGVjaWFsIGluLWhvdXNlIGdyaW1lIGJhbmQuYDtcblxuICBsb3dlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKGxvd2VyTGVmdFRpdGxlKTtcbiAgbG93ZXJMZWZ0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlckxlZnRUZXh0KTtcblxuICAvLyBMb3dlciByaWdodCBncmlkIGNvbnRlbnRcblxuICBjb25zdCBsb3dlclJpZ2h0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvd2VyUmlnaHRDb250ZW50LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50XCI7XG5cbiAgY29uc3QgbG93ZXJSaWdodFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBsb3dlclJpZ2h0VGl0bGUuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnQtdGl0bGVcIjtcbiAgbG93ZXJSaWdodFRpdGxlLnRleHRDb250ZW50ID0gXCJDb21tZW50c1wiO1xuICBjb25zdCBsb3dlclJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb3dlclJpZ2h0VGV4dC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyUmlnaHRUZXh0LnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gRmxvb2QgUmVzdGF1cmFudCAmIEJhciwgd2hlcmUgYSBnb29kIHdlbGNvbWUgaXMgYXMgaW1wb3J0YW50IGFzIGdvb2QgZm9vZCBhbmQgYmV0dGVyIGRyaW5rLiBXZSBvZmZlciBzbWFsbCBhbmQgbGFyZ2UgcGxhdGVzLCBmaW5lIGNvY2t0YWlscyBhbmQgb3VyIG93biBzcGVjaWFsIGluLWhvdXNlIGdyaW1lIGJhbmQuYDtcblxuICBsb3dlclJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlclJpZ2h0VGl0bGUpO1xuICBsb3dlclJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlclJpZ2h0VGV4dCk7XG5cbiAgLy8gQXBwZW5kIGl0ZW1zIHRvIGdyaWRcblxuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwcGVyTGVmdENvbnRlbnQpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dlckxlZnRDb250ZW50KTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dlclJpZ2h0Q29udGVudCk7XG5cbiAgLy8gQXBwZW5kIHBhZ2UgZWxlbWVudHMgdG8gY29udGFpbmVyXG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY29udGFjdExvYWQgfTtcbiIsImltcG9ydCB7IGhlYWRlckxvYWQsIG1haW5Mb2FkLCBmb290ZXJMb2FkIH0gZnJvbSBcIi4vcGFnZVwiO1xuaW1wb3J0IHsgYWJvdXRMb2FkIH0gZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCB7IGNvbnRhY3RMb2FkIH0gZnJvbSBcIi4vY29udGFjdFwiO1xuaW1wb3J0IHsgbWVudUxvYWQgfSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29uc3QgcGFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5wYWdlQ29udGFpbmVyLmlkID0gXCJwYWdlLWNvbnRhaW5lclwiO1xucGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJMb2FkKCkpO1xucGFnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtYWluTG9hZChhYm91dExvYWQpKTtcbnBhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTG9hZCgpKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChwYWdlQ29udGFpbmVyKTtcblxuZnVuY3Rpb24gbWVudUNsaWNrKHBhZ2UpIHtcbiAgaWYgKHBhZ2UgPT09IFwiYWJvdXRcIikge1xuICAgIHBhZ2VDb250YWluZXIucmVwbGFjZUNoaWxkKFxuICAgICAgbWFpbkxvYWQoYWJvdXRMb2FkKSxcbiAgICAgIHBhZ2VDb250YWluZXIuY2hpbGROb2Rlc1sxXVxuICAgICk7XG4gIH0gZWxzZSBpZiAocGFnZSA9PT0gXCJjb250YWN0XCIpIHtcbiAgICBwYWdlQ29udGFpbmVyLnJlcGxhY2VDaGlsZChcbiAgICAgIG1haW5Mb2FkKGNvbnRhY3RMb2FkKSxcbiAgICAgIHBhZ2VDb250YWluZXIuY2hpbGROb2Rlc1sxXVxuICAgICk7XG4gIH0gZWxzZSBpZiAocGFnZSA9PT0gXCJtZW51XCIpIHtcbiAgICBwYWdlQ29udGFpbmVyLnJlcGxhY2VDaGlsZChtYWluTG9hZChtZW51TG9hZCksIHBhZ2VDb250YWluZXIuY2hpbGROb2Rlc1sxXSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgbWVudUNsaWNrIH07XG4iLCJmdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnRDb250YWluZXIuY2xhc3NMaXN0ID0gXCJtYWluLWNvbnRlbnQtY29udGFpbmVyXCI7XG5cbiAgLy8gVGl0bGUgY29udGVudFxuXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGVDb250YWluZXIuY2xhc3NMaXN0ID0gXCJ0aXRsZS1jb250YWluZXJcIjtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLmNsYXNzTGlzdCA9IFwiY29udGVudC10aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAvLyBNYWluIGNvbnRlbnQgZ3JpZFxuXG4gIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBncmlkQ29udGFpbmVyLmlkID0gXCJncmlkLWNvbnRhaW5lclwiO1xuXG4gIC8vIFVwcGVyIGxlZnQgZ3JpZCBjb250ZW50XG5cbiAgY29uc3QgdXBwZXJMZWZ0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVwcGVyTGVmdENvbnRlbnQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnRcIjtcbiAgY29uc3QgdXBwZXJMZWZ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHVwcGVyTGVmdFRpdGxlLmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRpdGxlXCI7XG4gIHVwcGVyTGVmdFRpdGxlLnRleHRDb250ZW50ID0gXCJTbWFsbCBQbGF0ZXNcIjtcbiAgY29uc3QgdXBwZXJMZWZ0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB1cHBlckxlZnRUZXh0LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50LXRleHRcIjtcbiAgdXBwZXJMZWZ0VGV4dC50ZXh0Q29udGVudCA9IGBXZWxjb21lIHRvIEZsb29kIFJlc3RhdXJhbnQgJiBCYXIsIHdoZXJlIGEgZ29vZCB3ZWxjb21lIGlzIGFzIGltcG9ydGFudCBhcyBnb29kIGZvb2QgYW5kIGJldHRlciBkcmluay4gV2Ugb2ZmZXIgc21hbGwgYW5kIGxhcmdlIHBsYXRlcywgZmluZSBjb2NrdGFpbHMgYW5kIG91ciBvd24gc3BlY2lhbCBpbi1ob3VzZSBncmltZSBiYW5kLmA7XG5cbiAgdXBwZXJMZWZ0Q29udGVudC5hcHBlbmRDaGlsZCh1cHBlckxlZnRUaXRsZSk7XG4gIHVwcGVyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQodXBwZXJMZWZ0VGV4dCk7XG5cbiAgLy8gR3JpZCBpbWFnZSBjb250ZW50XG5cbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5pZCA9IFwiYWJvdXQtaW1hZ2VcIjtcblxuICAvLyBMb3dlciBsZWZ0IGdyaWQgY29udGVudFxuXG4gIGNvbnN0IGxvd2VyTGVmdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb3dlckxlZnRDb250ZW50LmNsYXNzTGlzdCA9IFwiZ3JpZC1jb250ZW50XCI7XG4gIGNvbnN0IGxvd2VyTGVmdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBsb3dlckxlZnRUaXRsZS5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10aXRsZVwiO1xuICBsb3dlckxlZnRUaXRsZS50ZXh0Q29udGVudCA9IFwiTGFyZ2UgUGxhdGVzXCI7XG4gIGNvbnN0IGxvd2VyTGVmdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG93ZXJMZWZ0VGV4dC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyTGVmdFRleHQudGV4dENvbnRlbnQgPSBgV2VsY29tZSB0byBGbG9vZCBSZXN0YXVyYW50ICYgQmFyLCB3aGVyZSBhIGdvb2Qgd2VsY29tZSBpcyBhcyBpbXBvcnRhbnQgYXMgZ29vZCBmb29kIGFuZCBiZXR0ZXIgZHJpbmsuIFdlIG9mZmVyIHNtYWxsIGFuZCBsYXJnZSBwbGF0ZXMsIGZpbmUgY29ja3RhaWxzIGFuZCBvdXIgb3duIHNwZWNpYWwgaW4taG91c2UgZ3JpbWUgYmFuZC5gO1xuXG4gIGxvd2VyTGVmdENvbnRlbnQuYXBwZW5kQ2hpbGQobG93ZXJMZWZ0VGl0bGUpO1xuICBsb3dlckxlZnRDb250ZW50LmFwcGVuZENoaWxkKGxvd2VyTGVmdFRleHQpO1xuXG4gIC8vIExvd2VyIHJpZ2h0IGdyaWQgY29udGVudFxuXG4gIGNvbnN0IGxvd2VyUmlnaHRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG93ZXJSaWdodENvbnRlbnQuY2xhc3NMaXN0ID0gXCJncmlkLWNvbnRlbnRcIjtcblxuICBjb25zdCBsb3dlclJpZ2h0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGxvd2VyUmlnaHRUaXRsZS5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10aXRsZVwiO1xuICBsb3dlclJpZ2h0VGl0bGUudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICBjb25zdCBsb3dlclJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb3dlclJpZ2h0VGV4dC5jbGFzc0xpc3QgPSBcImdyaWQtY29udGVudC10ZXh0XCI7XG4gIGxvd2VyUmlnaHRUZXh0LnRleHRDb250ZW50ID0gYFdlbGNvbWUgdG8gRmxvb2QgUmVzdGF1cmFudCAmIEJhciwgd2hlcmUgYSBnb29kIHdlbGNvbWUgaXMgYXMgaW1wb3J0YW50IGFzIGdvb2QgZm9vZCBhbmQgYmV0dGVyIGRyaW5rLiBXZSBvZmZlciBzbWFsbCBhbmQgbGFyZ2UgcGxhdGVzLCBmaW5lIGNvY2t0YWlscyBhbmQgb3VyIG93biBzcGVjaWFsIGluLWhvdXNlIGdyaW1lIGJhbmQuYDtcblxuICBsb3dlclJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlclJpZ2h0VGl0bGUpO1xuICBsb3dlclJpZ2h0Q29udGVudC5hcHBlbmRDaGlsZChsb3dlclJpZ2h0VGV4dCk7XG5cbiAgLy8gQXBwZW5kIGl0ZW1zIHRvIGdyaWRcblxuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwcGVyTGVmdENvbnRlbnQpO1xuICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dlckxlZnRDb250ZW50KTtcbiAgZ3JpZENvbnRhaW5lci5hcHBlbmRDaGlsZChsb3dlclJpZ2h0Q29udGVudCk7XG5cbiAgLy8gQXBwZW5kIHBhZ2UgZWxlbWVudHMgdG8gY29udGFpbmVyXG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG5cbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKTtcblxuICByZXR1cm4gY29udGVudENvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgbWVudUxvYWQgfTtcbiIsImltcG9ydCB7IG1lbnVDbGljayB9IGZyb20gXCIuL2luZGV4XCI7XG5cbmZ1bmN0aW9uIGhlYWRlckxvYWQoKSB7XG4gIC8vIEhlYWRlciBjb250ZW50XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmlkID0gXCJoZWFkZXJcIjtcbiAgY29uc3QgbG9nb01lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsb2dvTWVudUNvbnRhaW5lci5pZCA9IFwibG9nby1tZW51LWNvbnRhaW5lclwiO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBsb2dvLmlkID0gXCJsb2dvXCI7XG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkZsb29kXCI7XG4gIGNvbnN0IGFib3V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWJvdXRCdG4uY2xhc3NMaXN0ID0gXCJtZW51LWJ1dHRvblwiO1xuICBhYm91dEJ0bi50ZXh0Q29udGVudCA9IFwiQUJPVVRcIjtcbiAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtZW51Q2xpY2soXCJhYm91dFwiKTtcbiAgfSk7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdCA9IFwibWVudS1idXR0b25cIjtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ09OVEFDVFwiO1xuICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWVudUNsaWNrKFwiY29udGFjdFwiKTtcbiAgfSk7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnRuLmNsYXNzTGlzdCA9IFwibWVudS1idXR0b25cIjtcbiAgbWVudUJ0bi50ZXh0Q29udGVudCA9IFwiTUVOVVwiO1xuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWVudUNsaWNrKFwibWVudVwiKTtcbiAgfSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvTWVudUNvbnRhaW5lcik7XG4gIGxvZ29NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBsb2dvTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEJ0bik7XG4gIGxvZ29NZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuICBsb2dvTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnRuKTtcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWluTG9hZChjdXJyZW50VGFiQ29udGVudCkge1xuICAvLyBNYWluIGNvbnRlbnRcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmlkID0gXCJtYWluLWNvbnRlbnRcIjtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VycmVudFRhYkNvbnRlbnQobWFpbkNvbnRlbnQpKTtcblxuICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGZvb3RlckxvYWQoKSB7XG4gIC8vIEZvb3RlciBjb250ZW50XG5cbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyLmlkID0gXCJmb290ZXJcIjtcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyQ29udGFpbmVyLmlkID0gXCJmb290ZXItY29udGFpbmVyXCI7XG4gIGNvbnN0IGNyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBjcmVkaXQuaHJlZiA9IFwiaHR0cHM6Ly93d3cucGV4ZWxzLmNvbS9AZXZvbmljcy9cIjtcbiAgY3JlZGl0LnRleHRDb250ZW50ID0gXCJCYWNrZ3JvdW5kIGltYWdlIGNvcHlyaWdodCBNYXJjdXMgSGVyemJlcmdcIjtcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGNvcHlyaWdodC5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vYnJ5bi1lbGxpc29uXCI7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IGBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEJyeW4gRWxsaXNvbmA7XG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVkaXQpO1xuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0KTtcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn1cbi8vIEFwcGVuZCBwYWdlIGVsZW1lbnRzIHRvIGNvbnRhaW5lclxuXG5leHBvcnQgeyBoZWFkZXJMb2FkLCBtYWluTG9hZCwgZm9vdGVyTG9hZCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9