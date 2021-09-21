"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/Card/index.tsx":
/*!***************************************!*\
  !*** ./src/Components/Card/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ \"./src/Components/Card/style.ts\");\n/* harmony import */ var lib_media__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/media */ \"./src/lib/media.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/user/Desktop/Projects/test/my-app/src/Components/Card/index.tsx\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Card = function Card(_ref) {\n  var article = _ref.article;\n  var imageUrl = (0,lib_media__WEBPACK_IMPORTED_MODULE_3__.getStrapiMedia)(article.image);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Article, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Figure, {\n      height: article.image.height,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n        src: imageUrl,\n        alt: article.image.name,\n        width: article.image.width,\n        height: article.image.height\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.CardBody, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.PostHeader, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.PostCategory, {\n          children: article.category.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.PostTitle, {\n          children: article.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.PostContent, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.Content, {\n          children: article.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.CardFooter, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.PostMeta, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.PostMetaLi, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.IconStyle, {\n            icon: \"uil:calendar-alt\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_style__WEBPACK_IMPORTED_MODULE_2__.PostDate, {\n            children: new Date(article.published_at).toDateString()\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9DYXJkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBZUE7OztBQU1BLElBQU1nQixJQUF3QyxHQUFHLFNBQTNDQSxJQUEyQyxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUNoRSxNQUFNQyxRQUFRLEdBQUdILHlEQUFjLENBQUNFLE9BQU8sQ0FBQ0UsS0FBVCxDQUEvQjtBQUVBLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsNEJBQ0UsOERBQUMsMENBQUQ7QUFBUSxZQUFNLEVBQUVGLE9BQU8sQ0FBQ0UsS0FBUixDQUFjQyxNQUE5QjtBQUFBLDZCQUNFLDhEQUFDLG1EQUFEO0FBQ0UsV0FBRyxFQUFFRixRQURQO0FBRUUsV0FBRyxFQUFFRCxPQUFPLENBQUNFLEtBQVIsQ0FBY0UsSUFGckI7QUFHRSxhQUFLLEVBQUVKLE9BQU8sQ0FBQ0UsS0FBUixDQUFjRyxLQUh2QjtBQUlFLGNBQU0sRUFBRUwsT0FBTyxDQUFDRSxLQUFSLENBQWNDO0FBSnhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFTRSw4REFBQyw0Q0FBRDtBQUFBLDhCQUNFLDhEQUFDLDhDQUFEO0FBQUEsZ0NBQ0UsOERBQUMsZ0RBQUQ7QUFBQSxvQkFBZUgsT0FBTyxDQUFDTSxRQUFSLENBQWlCRjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsNkNBQUQ7QUFBQSxvQkFBWUosT0FBTyxDQUFDTztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UsOERBQUMsK0NBQUQ7QUFBQSwrQkFDRSw4REFBQywyQ0FBRDtBQUFBLG9CQUFVUCxPQUFPLENBQUNRO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEYsZUFrQkUsOERBQUMsOENBQUQ7QUFBQSw2QkFDRSw4REFBQyw0Q0FBRDtBQUFBLCtCQUNFLDhEQUFDLDhDQUFEO0FBQUEsa0NBQ0UsOERBQUMsNkNBQUQ7QUFBVyxnQkFBSSxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQyw0Q0FBRDtBQUFBLHNCQUFXLElBQUlDLElBQUosQ0FBU1QsT0FBTyxDQUFDVSxZQUFqQixFQUErQkMsWUFBL0I7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNkJELENBaENEOztLQUFNWjtBQWtDTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQ29tcG9uZW50cy9DYXJkL2luZGV4LnRzeD81YzliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFydGljbGUgYXMgQXJ0aWNsZVR5cGUgfSBmcm9tICd0eXBlcy9hcnRpY2xlcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQge1xuICBBcnRpY2xlLFxuICBDYXJkQm9keSxcbiAgQ2FyZEZvb3RlcixcbiAgQ29udGVudCxcbiAgRmlndXJlLFxuICBJY29uU3R5bGUsXG4gIFBvc3RDYXRlZ29yeSxcbiAgUG9zdENvbnRlbnQsXG4gIFBvc3REYXRlLFxuICBQb3N0SGVhZGVyLFxuICBQb3N0TWV0YSxcbiAgUG9zdE1ldGFMaSxcbiAgUG9zdFRpdGxlLFxufSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCB7IGdldFN0cmFwaU1lZGlhIH0gZnJvbSAnbGliL21lZGlhJztcblxuaW50ZXJmYWNlIENhcmRQcm9wcyB7XG4gIGFydGljbGU6IEFydGljbGVUeXBlO1xufVxuXG5jb25zdCBDYXJkOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxDYXJkUHJvcHM+ID0gKHsgYXJ0aWNsZSB9KSA9PiB7XG4gIGNvbnN0IGltYWdlVXJsID0gZ2V0U3RyYXBpTWVkaWEoYXJ0aWNsZS5pbWFnZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXJ0aWNsZT5cbiAgICAgIDxGaWd1cmUgaGVpZ2h0PXthcnRpY2xlLmltYWdlLmhlaWdodH0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgYWx0PXthcnRpY2xlLmltYWdlLm5hbWV9XG4gICAgICAgICAgd2lkdGg9e2FydGljbGUuaW1hZ2Uud2lkdGh9XG4gICAgICAgICAgaGVpZ2h0PXthcnRpY2xlLmltYWdlLmhlaWdodH1cbiAgICAgICAgLz5cbiAgICAgIDwvRmlndXJlPlxuICAgICAgPENhcmRCb2R5PlxuICAgICAgICA8UG9zdEhlYWRlcj5cbiAgICAgICAgICA8UG9zdENhdGVnb3J5PnthcnRpY2xlLmNhdGVnb3J5Lm5hbWV9PC9Qb3N0Q2F0ZWdvcnk+XG4gICAgICAgICAgPFBvc3RUaXRsZT57YXJ0aWNsZS50aXRsZX08L1Bvc3RUaXRsZT5cbiAgICAgICAgPC9Qb3N0SGVhZGVyPlxuICAgICAgICA8UG9zdENvbnRlbnQ+XG4gICAgICAgICAgPENvbnRlbnQ+e2FydGljbGUuZGVzY3JpcHRpb259PC9Db250ZW50PlxuICAgICAgICA8L1Bvc3RDb250ZW50PlxuICAgICAgPC9DYXJkQm9keT5cbiAgICAgIDxDYXJkRm9vdGVyPlxuICAgICAgICA8UG9zdE1ldGE+XG4gICAgICAgICAgPFBvc3RNZXRhTGk+XG4gICAgICAgICAgICA8SWNvblN0eWxlIGljb249XCJ1aWw6Y2FsZW5kYXItYWx0XCIgLz5cbiAgICAgICAgICAgIDxQb3N0RGF0ZT57bmV3IERhdGUoYXJ0aWNsZS5wdWJsaXNoZWRfYXQpLnRvRGF0ZVN0cmluZygpfTwvUG9zdERhdGU+XG4gICAgICAgICAgPC9Qb3N0TWV0YUxpPlxuICAgICAgICA8L1Bvc3RNZXRhPlxuICAgICAgPC9DYXJkRm9vdGVyPlxuICAgIDwvQXJ0aWNsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkFydGljbGUiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJDb250ZW50IiwiRmlndXJlIiwiSWNvblN0eWxlIiwiUG9zdENhdGVnb3J5IiwiUG9zdENvbnRlbnQiLCJQb3N0RGF0ZSIsIlBvc3RIZWFkZXIiLCJQb3N0TWV0YSIsIlBvc3RNZXRhTGkiLCJQb3N0VGl0bGUiLCJnZXRTdHJhcGlNZWRpYSIsIkNhcmQiLCJhcnRpY2xlIiwiaW1hZ2VVcmwiLCJpbWFnZSIsImhlaWdodCIsIm5hbWUiLCJ3aWR0aCIsImNhdGVnb3J5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkRhdGUiLCJwdWJsaXNoZWRfYXQiLCJ0b0RhdGVTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Card/index.tsx\n");

/***/ })

});