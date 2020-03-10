webpackHotUpdate("static/development/pages/about.js",{

/***/ "./src/components/Spotify.js":
/*!***********************************!*\
  !*** ./src/components/Spotify.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/meganliles/CS419/Assignments/final-project-lilesme-portfolio/src/components/Spotify.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Spotify() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      songs = _useState[0],
      setSongs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  function fetchSpotifyData() {
    var responseBody = {};
    setLoading(true);

    try {
      var response = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=5&offset=5\" -H \"Accept: application/json\" -H \"Content-Type: application/json\" -H \"Authorization: Bearer BQDEuD5-GV7XCVv6xJdrVsoHwyb1B9MNT8pafW1dqI-YaLbDbqgvw33paOK5DIsvfv1E4fc2eSMHIesn2B-gSN7MdcP6UEW2oobRsFU7doGE8gJCF5U0_JIo4l8AxxtE510pO9quobE_8ng2GhzPIQ\")", {
        signal: controller.signal
      });
      responseBody = response.json();
    } catch (e) {
      if (e instanceof DOMException) {
        console.log("== HTTP request aborted");
      } else {
        setError(true);
        console.log(e);
      }
    }

    if (!ignore) {
      setError(false);
      setLoading(false);
      setSongs(responseBody.items || []);
    } else {
      console.log("== ignoring results");
    }

    fetchSpotifyData();
    return function () {
      controller.abort();
      ignore = true;
    };
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
//# sourceMappingURL=about.js.c037cacb51dc7ecbfe28.hot-update.js.map