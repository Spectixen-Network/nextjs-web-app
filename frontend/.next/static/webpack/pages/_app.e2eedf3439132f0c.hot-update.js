"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_NavLinks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/NavLinks.js */ \"./components/src/NavLinks.js\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Header.module.css */ \"./styles/Header.module.css\");\n/* harmony import */ var _styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Header = function(param) {\n    var pageName = param.pageName;\n    _src_NavLinks_js__WEBPACK_IMPORTED_MODULE_1__.navLinks.map(function(link) {\n        return pageName;\n        pageName = link.name;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"STXN \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\crazy\\\\Documents\\\\GitHub\\\\nextjs-web-app\\\\frontend\\\\components\\\\Header.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, _this),\n                    \" | \",\n                    pageName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\crazy\\\\Documents\\\\GitHub\\\\nextjs-web-app\\\\frontend\\\\components\\\\Header.jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Header_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                children: \"The right place to be at\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crazy\\\\Documents\\\\GitHub\\\\nextjs-web-app\\\\frontend\\\\components\\\\Header.jsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\crazy\\\\Documents\\\\GitHub\\\\nextjs-web-app\\\\frontend\\\\components\\\\Header.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTZDO0FBQ1M7QUFFdEQsSUFBTUUsTUFBTSxHQUFHLGdCQUFnQjtRQUFkQyxRQUFRLFNBQVJBLFFBQVE7SUFDdkJILDBEQUFZLENBQUMsU0FBQ0ssSUFBSSxFQUFLO1FBQ3JCLE9BQVFGLFFBQVEsQ0FBQztRQUNkQSxRQUFRLEdBQUdFLElBQUksQ0FBQ0MsSUFBSTtLQUFDLENBQ3ZCLENBQUM7SUFDSixxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0EsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBRVIsd0VBQWtCOztrQ0FDN0IsOERBQUNVLE1BQUk7a0NBQUMsT0FBSzs7Ozs7NkJBQU87b0JBQUEsS0FBRztvQkFBQ1IsUUFBUTs7Ozs7O3FCQUM3QjswQkFDTCw4REFBQ1MsR0FBQztnQkFBQ0gsU0FBUyxFQUFFUiw4RUFBd0I7MEJBQUUsMEJBQXdCOzs7OztxQkFBSTs7Ozs7O2FBQ2xFLENBQ1A7Q0FDRjtBQWJLQyxLQUFBQSxNQUFNO0FBZVosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanN4PzU2N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmF2TGlua3MgfSBmcm9tIFwiLi9zcmMvTmF2TGlua3MuanNcIjtcclxuaW1wb3J0IGhlYWRlclN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoe3BhZ2VOYW1lfSkgPT4ge1xyXG4gIG5hdkxpbmtzLm1hcCgobGluaykgPT4ge1xyXG4gICAgcmV0dXJuIChwYWdlTmFtZSlcclxuICAgICAgIHBhZ2VOYW1lID0gbGluay5uYW1lfVxyXG4gICAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtoZWFkZXJTdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICA8c3Bhbj5TVFhOIDwvc3Bhbj4gfCB7cGFnZU5hbWV9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e2hlYWRlclN0eWxlcy5kZXNjcmlwdGlvbn0+VGhlIHJpZ2h0IHBsYWNlIHRvIGJlIGF0PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwibmFtZXMiOlsibmF2TGlua3MiLCJoZWFkZXJTdHlsZXMiLCJIZWFkZXIiLCJwYWdlTmFtZSIsIm1hcCIsImxpbmsiLCJuYW1lIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJ0aXRsZSIsInNwYW4iLCJwIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ })

});