webpackHotUpdate("static/development/pages/github.js",{

/***/ "./src/pages/github.js":
/*!*****************************!*\
  !*** ./src/pages/github.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_FormComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FormComponents */ "./src/components/FormComponents.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Spinner */ "./src/components/Spinner.js");
/* harmony import */ var _components_ErrorContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ErrorContainer */ "./src/components/ErrorContainer.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");



var _jsxFileName = "/Users/meganliles/CS419/Assignments/final-project-lilesme-portfolio/src/pages/github.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  display: inline-block;\n  background-color: lightgrey;\n  ul {\n    list-style: none;\n  }\n  a {\n    text-decoration:  none;\n    background-color: white;\n    border: lightgrey 1px;\n    width: 90px;\n    color: black;\n    border-radius: 5px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');\n  font-family: 'Nunito', sans-serif;\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/** @jsx jsx */











var search = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject());
var results = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject2());

function Github() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();
  var query = router.query.q;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(query || ""),
      inputQuery = _useState[0],
      setInputQuery = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      repos = _useState2[0],
      setRepos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      error = _useState3[0],
      setError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loading = _useState4[0],
      setLoading = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (query) {
      var fetchSearchResults = function fetchSearchResults() {
        var responseBody, response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchSearchResults$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                responseBody = {};
                setLoading(true); //console.log("== Fetching search results for query:", query);
                //setRepos(null);

                _context.prev = 2;
                _context.next = 5;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.github.com/search/repositories?q={".concat(query, "+in:file+user:lilesme&sort=stars"), {
                  signal: controller.signal
                }));

              case 5:
                response = _context.sent;
                _context.next = 8;
                return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(response.json());

              case 8:
                responseBody = _context.sent;
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                if (_context.t0 instanceof DOMException) {
                  console.log("== HTTP request aborted");
                } else {
                  setError(true);
                  console.log(_context.t0);
                }

              case 14:
                if (!ignore) {
                  setError(false);
                  setLoading(false);
                  setRepos(responseBody.items || []);
                } else {
                  console.log("== ignoring results");
                } //setRepos(responseBody.items || []);


              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, null, null, [[2, 11]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
      };

      var ignore = false;
      var controller = new AbortController();
      fetchSearchResults();
      return function () {
        controller.abort();
        ignore = true;
      };
    }
  }, [query]);
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Layout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Github"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Search my repositories on Github!")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css: search,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("form", {
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      router.push("".concat(router.pathname, "?q=").concat(inputQuery));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_FormComponents__WEBPACK_IMPORTED_MODULE_9__["Input"], {
    value: inputQuery,
    onChange: function onChange(e) {
      return setInputQuery(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_FormComponents__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Search")), error && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_ErrorContainer__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Error!"), loading ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_components_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }) : Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    css: results,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, repos.map(function (repo) {
    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("li", {
      key: repo.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, repo.full_name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, repo.description), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
      href: repo.html_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "View Repo"));
  })))));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Github);

/***/ })

})
//# sourceMappingURL=github.js.84b03c1521f3a5617749.hot-update.js.map