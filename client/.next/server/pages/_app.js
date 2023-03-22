(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(1007);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/store/slices/carSlice.ts

const carSlice = (0,toolkit_.createSlice)({
    name: "cars",
    initialState: {
        cars: [],
        loading: false,
        error: null
    },
    reducers: {
        fetchCars: (state, action)=>{
            state.loading = true;
        },
        fetchCarsSuccess: (state, action)=>{
            state.loading = false;
            state.cars = action.payload.cars;
        },
        fetchCarsError: (state, action)=>{
            state.loading = false;
            state.error = action.payload.error;
        }
    }
});
const { fetchCars , fetchCarsSuccess , fetchCarsError  } = carSlice.actions;
/* harmony default export */ const slices_carSlice = (carSlice);

// EXTERNAL MODULE: ./src/store/slices/pageSlice.ts
var pageSlice = __webpack_require__(3730);
;// CONCATENATED MODULE: ./src/store/index.ts



const store = (0,toolkit_.configureStore)({
    reducer: {
        cars: slices_carSlice.reducer,
        curPage: pageSlice/* default.reducer */.Z.reducer
    }
});
/* harmony default export */ const src_store = (store);

;// CONCATENATED MODULE: ./src/pages/_app.tsx






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: src_store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ setCurPage),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    curPageId: 0
};
const pageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "curPage",
    initialState,
    reducers: {
        setCurPage: (state, action)=>{
            state.curPageId = action.payload.curPageId;
        }
    }
});
const { setCurPage  } = pageSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageSlice);


/***/ }),

/***/ 1007:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5265));
module.exports = __webpack_exports__;

})();