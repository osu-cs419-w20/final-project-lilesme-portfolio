webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");

var _jsxFileName = "/Users/meganliles/CS419/Assignments/final-project-lilesme-portfolio/src/pages/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 70px;\n  background-image: url('flowers.jpeg');\n  position: fixed;\n  min-height: 1000px;\n  min-width: 100%;\n  opacity: 0.95;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  h1 {\n    color: white;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: white;\n  width: 900px;\n  height: 500px;\n  border-radius: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px;\n  text-align: center;\n  input {\n    @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');\n    font-family: 'Nunito', sans-serif;\n    font-size: 20px;\n    width: 800px;\n    border-radius: 20px;\n    border: solid rgb(198, 205, 197) 1px;\n    background-color: white;\n    height: 50px;\n    margin: 7px;\n    :hover{\n      background-color: lightgrey;\n    }\n  }\n  .message {\n    height: 250px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  background-color: rgb(179,143,132);\n  width: 1000px;\n  height: 550px;\n  border-radius: 25px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */



var background = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject());
var form = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
var pic = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3());

function Contact() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: pic,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: background,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Send Me A Message!"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("form", {
    action: "mailto:meganliles426@gmail.com",
    method: "post",
    enctype: "text/plain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "text",
    placeholder: "Name",
    name: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "text",
    placeholder: "Email",
    name: "mail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    "class": "message",
    type: "text",
    placeholder: "Message",
    name: "comment",
    size: "50",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("input", {
    type: "submit",
    value: "Send",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.dc7d09b102369c0d48f3.hot-update.js.map