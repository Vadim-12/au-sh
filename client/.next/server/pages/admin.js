"use strict";
(() => {
var exports = {};
exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 6237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ admin),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/admin/AdminHeader.tsx


const AdminHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            "Шапка панели администратора",
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border_line"
            })
        ]
    });
};
/* harmony default export */ const admin_AdminHeader = (AdminHeader);

;// CONCATENATED MODULE: ./src/components/admin/AdminFooter.tsx


const AdminFooter = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border_line"
            }),
            "Подвал панели администратора"
        ]
    });
};
/* harmony default export */ const admin_AdminFooter = (AdminFooter);

;// CONCATENATED MODULE: ./src/components/admin/AdminLayout.tsx




const AdminLayout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(admin_AdminHeader, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(admin_AdminFooter, {})
        ]
    });
};
/* harmony default export */ const admin_AdminLayout = (AdminLayout);

;// CONCATENATED MODULE: ./src/pages/admin/index.tsx



const Admin = ({ cars , modifications  })=>{
    let [login, setLogin] = (0,external_react_.useState)("");
    let [password, setPassword] = (0,external_react_.useState)("");
    function handleLoginChange(e) {
        setLogin(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function handleSubmitForm(e) {
        e.preventDefault();
        // отправка запроса на сервер
        alert("server request");
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(admin_AdminLayout, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Панель администратора"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    action: "",
                    className: "auth-form",
                    onSubmit: handleSubmitForm,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Вход"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "auth-input",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "login-block",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Логин:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "text",
                                            value: login,
                                            onChange: handleLoginChange
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "password-block",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                            children: "Пароль:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            type: "password",
                                            value: password,
                                            onChange: handlePasswordChange
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            children: "Войти"
                        })
                    ]
                })
            ]
        })
    });
};
async function getServerSideProps() {
    const cars = [];
    const modifications = [];
    return {
        props: {
            cars,
            modifications
        }
    };
}
/* harmony default export */ const admin = (Admin);


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6237));
module.exports = __webpack_exports__;

})();