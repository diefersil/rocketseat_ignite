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
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
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
const getServerSideProps = async () => {
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
    }
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
module.exports = JSON.parse('{"name":"y","version":"y","private":true,"scripts":{"dev":"next","build":"next build","start":"next start"},"dependencies":{"next":"^11.0.0","node-sass":"4.14.1","react":"^17.0.2","react-dom":"^17.0.2","react-icons":"^4.2.0","stripe":"^8.156.0"},"devDependencies":{"@types/node":"^15.12.2","@types/react":"^17.0.11","css-loader":"^5.2.6","style-loader":"^2.0.0","typescript":"^4.3.2"},"description":"y","main":"y","repository":"y","author":"y","license":"y"}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly95Ly4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly95Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly95Ly4vc3JjL3NlcnZpY2VzL3N0cmlwZS50cyIsIndlYnBhY2s6Ly95Ly4vc3JjL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uL3N0eWxlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly95Ly4vc3JjL3BhZ2VzL2hvbWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8veS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3kvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly95L2V4dGVybmFsIFwic3RyaXBlXCIiXSwibmFtZXMiOlsiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsInN0eWxlcyIsIkhvbWUiLCJwcm9kdWN0IiwiYW1vdW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJpY2UiLCJzdHJpcGUiLCJleHBhbmQiLCJwcmljZXNJZCIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU1PLFNBQVNBLGVBQVQsQ0FBMEI7QUFBQ0M7QUFBRCxDQUExQixFQUE2RDtBQUVoRSxzQkFDSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBRUMsNEVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRDtBQUNBO0FBQ0E7QUFJQTtBQVNlLFNBQVNDLElBQVQsQ0FBZTtBQUFDQztBQUFELENBQWYsRUFBdUM7QUFDcEQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBTSxlQUFTLEVBQUVGLDJFQUFqQjtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBRUEsK0RBQXBCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHFEQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvRUFDZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEaEMsZUFFRTtBQUFBLCtCQUFXRSxPQUFPLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEYsZUFPRSw4REFBQyx3RUFBRDtBQUFpQixpQkFBTyxFQUFFRCxPQUFPLENBQUNIO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFXRTtBQUFLLFdBQUcsRUFBQyxtQkFBVDtBQUE2QixXQUFHLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFxQkQ7QUFFTSxNQUFNSyxrQkFBc0MsR0FBRyxZQUFZO0FBQ2hFLFFBQU1DLEtBQUssR0FBRyxNQUFNQyxvRUFBQSxDQUF1QixnQ0FBdkIsRUFBeUQ7QUFDM0VDLFVBQU0sRUFBRSxDQUFDLFNBQUQ7QUFEbUUsR0FBekQsQ0FBcEI7QUFJQSxRQUFNTCxPQUFPLEdBQUc7QUFDZE0sWUFBUSxFQUFHSCxLQUFLLENBQUNJLEVBREg7QUFFZE4sVUFBTSxFQUFFLElBQUlPLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUE4QjtBQUNwQ0MsV0FBSyxFQUFFLFVBRDZCO0FBRXBDQyxjQUFRLEVBQUU7QUFGMEIsS0FBOUIsRUFHTEMsTUFISyxDQUdFVCxLQUFLLENBQUNVLFdBQU4sR0FBa0IsR0FIcEI7QUFGTSxHQUFoQjtBQVNBLFNBQU87QUFDTEMsU0FBSyxFQUFDO0FBQ0pkO0FBREk7QUFERCxHQUFQO0FBT0QsQ0FyQk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNIO0FBQ0E7QUFHTyxNQUFNSSxNQUFNLEdBQUcsSUFBSVcsK0NBQUosQ0FFbEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQUZNLEVBSWxCO0FBQ0lDLFlBQVUsRUFBRSxZQURoQjtBQUVJQyxTQUFPLEVBQUM7QUFDSkMsUUFBSSxFQUFFLFFBREY7QUFFSkMsV0FBT0E7QUFGSDtBQUZaLENBSmtCLENBQWYsQzs7Ozs7Ozs7OztBQ0pYO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFN1YnNjcmliZUJ1dHRvblByb3Bze1xyXG4gICAgcHJpY2VJZDpzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN1YnNjcmliZUJ1dHRvbigge3ByaWNlSWR9IDogU3Vic2NyaWJlQnV0dG9uUHJvcHMgKSB7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLnN1YnNjcmliZUJ1dHRvbn0+U3Vic2NyaWJlIE5vdzwvYnV0dG9uPlxyXG5cclxuICAgIClcclxuXHJcbn0iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBTdWJzY3JpYmVCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbidcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uL3NlcnZpY2VzL3N0cmlwZSdcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnXG5cblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlLnNjc3MnXG5cbmludGVyZmFjZSBIb21lUHJvcHN7XG4gIHByb2R1Y3Q6e1xuICAgIHByaWNlSWQ6c3RyaW5nO1xuICAgIGFtb3VudDpudW1iZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgge3Byb2R1Y3R9IDogSG9tZVByb3BzICkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhvbWUgfCBpZy5uZXdzPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudENvbnRhaW5lcn0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmhlcm99PlxuICAgICAgICAgIDxzcGFuPkhleSwgd2VsY29tZTwvc3Bhbj5cbiAgICAgICAgICA8aDE+TmV3cyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmQuPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEdldCBhY2Nlc3MgdG8gYWxsIHB1YmxpY2F0aW9uczxici8+XG4gICAgICAgICAgICA8c3Bhbj5mb3Ige3Byb2R1Y3QuYW1vdW50fSBtb250aDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFN1YnNjcmliZUJ1dHRvbiBwcmljZUlkPXtwcm9kdWN0LnByaWNlSWR9Lz5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2F2YXRhci5zdmdcIiBhbHQ9J0dpcmwgY29kaW5nJy8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBwcmljZSA9IGF3YWl0IHN0cmlwZS5wcmljZXMucmV0cmlldmUoJ3ByaWNlXzFKNXhtc0dBT0ZjNVZHMzNHc1hDV0oyUicsIHtcbiAgICBleHBhbmQ6IFsncHJvZHVjdCddXG4gIH0pXG5cbiAgY29uc3QgcHJvZHVjdCA9IHtcbiAgICBwcmljZXNJZCA6IHByaWNlLmlkLFxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycse1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsIFxuICAgICAgY3VycmVuY3k6ICdVU0QnXG4gICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50LzEwMCksXG5cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOntcbiAgICAgIHByb2R1Y3QsXG4gICAgfVxuICB9XG5cblxufVxuIiwiICAgIGltcG9ydCBTdHJpcGUgZnJvbSAnc3RyaXBlJ1xyXG4gICAgaW1wb3J0IHt2ZXJzaW9ufSBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nXHJcblxyXG5cclxuICAgIGV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKFxyXG5cclxuICAgICAgICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBhcGlWZXJzaW9uOiAnMjAyMC0wOC0yNycsXHJcbiAgICAgICAgICAgIGFwcEluZm86e1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2lnbmV3cycsXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgKSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInN1YnNjcmliZUJ1dHRvblwiOiBcInN0eWxlc19zdWJzY3JpYmVCdXR0b25fXzF1UUFzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250ZW50Q29udGFpbmVyXCI6IFwiaG9tZV9jb250ZW50Q29udGFpbmVyX18yMUVXbFwiLFxuXHRcImhlcm9cIjogXCJob21lX2hlcm9fXzNaYTVJXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyaXBlXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9