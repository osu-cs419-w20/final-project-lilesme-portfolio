webpackHotUpdate("static/development/pages/resume.js",{

/***/ "./src/components/Courses.js":
/*!***********************************!*\
  !*** ./src/components/Courses.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_courses_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/courses.json */ "./src/data/courses.json");
var _data_courses_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/courses.json */ "./src/data/courses.json", 1);

var _jsxFileName = "/Users/meganliles/CS419/Assignments/final-project-lilesme-portfolio/src/components/Courses.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');\n  font-family: 'Montserrat', sans-serif;\n  ul {\n    -moz-column-count: 4;\n    -moz-column-gap: 20px;\n    -webkit-column-count: 4;\n    -webkit-column-gap: 20px;\n    column-count: 4;\n    column-gap: 20px;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */



var style = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject());

function Courses() {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    css: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, _data_courses_json__WEBPACK_IMPORTED_MODULE_3__ && _data_courses_json__WEBPACK_IMPORTED_MODULE_3__.map(function (course, key) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, _data_courses_json__WEBPACK_IMPORTED_MODULE_3__[key].courseId, " - ", _data_courses_json__WEBPACK_IMPORTED_MODULE_3__[key].name);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Courses);

/***/ })

})
//# sourceMappingURL=resume.js.a2e71df9c743b4b960e2.hot-update.js.map