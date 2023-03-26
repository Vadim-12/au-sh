"use strict";
exports.id = 916;
exports.ids = [916];
exports.modules = {

/***/ 8320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7993);


const adminApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "adminApi",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: _static__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T
    }),
    endpoints: (builder)=>({
            getAllAdmins: builder.query({
                query: ()=>({
                        url: "/admin"
                    })
            })
        })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adminApi);


/***/ }),

/***/ 241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IJ": () => (/* binding */ setAdminLogin),
/* harmony export */   "Xq": () => (/* binding */ setAdminIsLoginned),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sp": () => (/* binding */ setAdminPassword)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    login: "",
    password: "",
    isLoginned: false
};
const adminSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "admin",
    initialState,
    reducers: {
        setAdminIsLoginned: (state, action)=>{
            state.isLoginned = action.payload.isLoginned;
        },
        setAdminLogin: (state, action)=>{
            state.login = action.payload.login;
        },
        setAdminPassword: (state, action)=>{
            state.password = action.payload.password;
        }
    }
});
const { setAdminIsLoginned , setAdminLogin , setAdminPassword  } = adminSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adminSlice);


/***/ })

};
;