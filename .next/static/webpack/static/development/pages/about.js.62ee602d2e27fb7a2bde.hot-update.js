webpackHotUpdate("static/development/pages/about.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
false,

/***/ "./src/components/Spotify.js":
/*!***********************************!*\
  !*** ./src/components/Spotify.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/meganliles/CS419/Assignments/final-project-lilesme-portfolio/src/components/Spotify.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Spotify() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      songs = _useState[0],
      setSongs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  function fetchSpotifyData() {
    var responseBody, response;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function fetchSpotifyData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            responseBody = {};
            setLoading(true);
            _context.prev = 2;
            _context.next = 5;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=5&offset=5\" -H \"Accept: application/json\" -H \"Content-Type: application/json\" -H \"Authorization: Bearer BQDEuD5-GV7XCVv6xJdrVsoHwyb1B9MNT8pafW1dqI-YaLbDbqgvw33paOK5DIsvfv1E4fc2eSMHIesn2B-gSN7MdcP6UEW2oobRsFU7doGE8gJCF5U0_JIo4l8AxxtE510pO9quobE_8ng2GhzPIQ\")", {
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
              setSongs(responseBody.items || []);
            } else {
              console.log("== ignoring results");
            }

            fetchSpotifyData();
            return _context.abrupt("return", function () {
              controller.abort();
              ignore = true;
            });

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[2, 11]], _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a);
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, error && __jsx(ErrorContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Error!"), loading ? __jsx(Spinner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }) : __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, songs.map(function (song, key) {
    return __jsx("li", {
      key: song[key].id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("a", {
      href: song[key].preview_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, song[key].name));
  })));
}

;
/* harmony default export */ __webpack_exports__["default"] = (Spotify);

/***/ })

})
//# sourceMappingURL=about.js.62ee602d2e27fb7a2bde.hot-update.js.map