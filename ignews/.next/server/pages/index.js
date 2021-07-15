(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscribeButton": function() { return /* binding */ SubscribeButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/SubscribeButton/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\sites\\ignite\\ignews\\src\\components\\SubscribeButton\\index.tsx";

function SubscribeButton({
  priceId
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subscribeButton),
    children: "Subscribe Now"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ "./src/components/SubscribeButton/index.tsx");
/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ "./src/services/stripe.ts");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ "./src/pages/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\sites\\ignite\\ignews\\src\\pages\\index.tsx";




function Home({
  product
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Home | ig.news"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Hey, welcome"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: ["News about the ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: "React"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 30
          }, this), " word."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: ["Get access to all publications", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 43
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            children: ["for ", product.amount, " month"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {
          priceId: product.priceId
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "images/avatar.svg",
        alt: "Girl coding"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticProps = async () => {
  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve('price_1J5xmsGAOFc5VG33GsXCWJ2R', {
    expand: ['product']
  });
  const product = {
    pricesId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  };
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  };
};

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripe": function() { return /* binding */ stripe; }
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ "stripe");
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");


const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {
  apiVersion: '2020-08-27',
  appInfo: {
    name: 'ignews',
    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version
  }
});

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"subscribeButton": "styles_subscribeButton__1uQAs"
};


/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"contentContainer": "home_contentContainer__21EWl",
	"hero": "home_hero__3Za5I"
};


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"y","version":"y","private":true,"scripts":{"dev":"next","build":"next build","start":"next start"},"dependencies":{"@types/next-auth":"^3.15.0","next":"^11.0.0","next-auth":"^3.27.3","node-sass":"4.14.1","react":"^17.0.2","react-dom":"^17.0.2"},"devDependencies":{"@types/node":"^15.12.2","@types/react":"^17.0.11","css-loader":"^5.2.6","react-icons":"^4.2.0","stripe":"^8.160.0","style-loader":"^2.0.0","types":"^0.1.1","typescript":"^4.3.2"},"description":"y","main":"y","repository":"y","author":"y","license":"y"}');

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly95Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly95Ly4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8veS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3kvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly95L2V4dGVybmFsIFwic3RyaXBlXCIiXSwibmFtZXMiOlsiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwiYW1vdW50IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInN0cmlwZSIsImV4cGFuZCIsInByaWNlc0lkIiwiaWQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsImZvcm1hdCIsInVuaXRfYW1vdW50IiwicHJvcHMiLCJyZXZhbGlkYXRlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1PLFNBQVNBLGVBQVQsQ0FBMEI7QUFBQ0M7QUFBRCxDQUExQixFQUE2RDtBQUVoRSxzQkFDSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRUMsNEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFJQTtBQVNlLFNBQVNDLElBQVQsQ0FBZTtBQUFDQztBQUFELENBQWYsRUFBdUM7QUFDcEQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBTSxlQUFTLEVBQUVGLDJFQUFqQjtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBRUEsK0RBQXBCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHFEQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvRUFDZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEaEMsZUFFRTtBQUFBLCtCQUFXRSxPQUFPLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFPRSw4REFBQyx3RUFBRDtBQUFpQixpQkFBTyxFQUFFRCxPQUFPLENBQUNIO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFXRTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixXQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFxQkQ7QUFFTSxNQUFNSyxjQUE4QixHQUFHLFlBQVk7QUFDeEQsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLG9FQUFBLENBQXVCLGdDQUF2QixFQUF5RDtBQUMzRUMsVUFBTSxFQUFFLENBQUMsU0FBRDtBQURtRSxHQUF6RCxDQUFwQjtBQUlBLFFBQU1MLE9BQU8sR0FBRztBQUNkTSxZQUFRLEVBQUdILEtBQUssQ0FBQ0ksRUFESDtBQUVkTixVQUFNLEVBQUUsSUFBSU8sSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQThCO0FBQ3BDQyxXQUFLLEVBQUUsVUFENkI7QUFFcENDLGNBQVEsRUFBRTtBQUYwQixLQUE5QixFQUdMQyxNQUhLLENBR0VULEtBQUssQ0FBQ1UsV0FBTixHQUFrQixHQUhwQjtBQUZNLEdBQWhCO0FBU0EsU0FBTztBQUNMQyxTQUFLLEVBQUM7QUFDSmQ7QUFESSxLQUREO0FBR0hlLGNBQVUsRUFBRSxLQUFLLEVBQUwsR0FBVTtBQUhuQixHQUFQO0FBT0QsQ0FyQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNIO0FBQ0E7QUFHTyxNQUFNWCxNQUFNLEdBQUcsSUFBSVksK0NBQUosQ0FFbEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQUZNLEVBSWxCO0FBQ0lDLFlBQVUsRUFBRSxZQURoQjtBQUVJQyxTQUFPLEVBQUM7QUFDSkMsUUFBSSxFQUFFLFFBREY7QUFFSkMsV0FBT0E7QUFGSDtBQUZaLENBSmtCLENBQWYsQzs7Ozs7Ozs7OztBQ0pYO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3Bze1xyXG4gICAgcHJpY2VJZDpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUJ1dHRvbigge3ByaWNlSWR9IDogU3Vic2NyaWJlQnV0dG9uUHJvcHMgKSB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnN1YnNjcmliZUJ1dHRvbn0+U3Vic2NyaWJlIE5vdzwvYnV0dG9uPlxyXG5cclxuICAgIClcclxuXHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBTdWJzY3JpYmVCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbidcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSdcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcblxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2NzcydcblxuaW50ZXJmYWNlIEhvbWVQcm9wc3tcbiAgcHJvZHVjdDp7XG4gICAgcHJpY2VJZDpzdHJpbmc7XG4gICAgYW1vdW50Om51bWJlcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCB7cHJvZHVjdH0gOiBIb21lUHJvcHMgKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZSB8IGlnLm5ld3M8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgPHNwYW4+SGV5LCB3ZWxjb21lPC9zcGFuPlxuICAgICAgICAgIDxoMT5OZXdzIGFib3V0IHRoZSA8c3Bhbj5SZWFjdDwvc3Bhbj4gd29yZC48L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2V0IGFjY2VzcyB0byBhbGwgcHVibGljYXRpb25zPGJyLz5cbiAgICAgICAgICAgIDxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHByaWNlSWQ9e3Byb2R1Y3QucHJpY2VJZH0vPlxuICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD0nR2lybCBjb2RpbmcnLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoJ3ByaWNlXzFKNXhtc0dBT0ZjNVZHMzNHc1hDV0oyUicsIHtcbiAgICBleHBhbmQ6IFsncHJvZHVjdCddXG4gIH0pXG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZXNJZCA6IHByaWNlLmlkLFxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycse1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsIFxuICAgICAgY3VycmVuY3k6ICdVU0QnXG4gICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50LzEwMCksXG5cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOntcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxyZXZhbGlkYXRlOiA2MCAqIDYwICogMjQsXG4gIH1cblxuXG59XG4iLCIgICAgaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnXHJcbiAgICBpbXBvcnQge3ZlcnNpb259IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbidcclxuXHJcblxyXG4gICAgZXhwb3J0IGNvbnN0IHN0cmlwZSA9IG5ldyBTdHJpcGUoXHJcblxyXG4gICAgICAgIHByb2Nlc3MuZW52LlNUUklQRV9BUElfS0VZLFxyXG5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcclxuICAgICAgICAgICAgYXBwSW5mbzp7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnaWduZXdzJyxcclxuICAgICAgICAgICAgICAgIHZlcnNpb25cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICApIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlQnV0dG9uXCI6IFwic3R5bGVzX3N1YnNjcmliZUJ1dHRvbl9fMXVRQXNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJob21lX2NvbnRlbnRDb250YWluZXJfXzIxRVdsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVfaGVyb19fM1phNUlcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJpcGVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=