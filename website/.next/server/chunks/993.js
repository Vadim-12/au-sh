"use strict";
exports.id = 993;
exports.ids = [993];
exports.modules = {

/***/ 7993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL),
/* harmony export */   "z": () => (/* binding */ menuLinks)
/* harmony export */ });
const menuLinks = [
    {
        id: 0,
        name: "Главная",
        href: "/",
        inMenu: true
    },
    {
        id: 1,
        name: "О нас",
        href: "/about",
        inMenu: true
    },
    {
        id: 2,
        name: "Подбор авто",
        href: "/select",
        inMenu: true
    },
    {
        id: 3,
        name: "Оплата и доставка",
        href: "/payment",
        inMenu: true
    },
    {
        id: 4,
        name: "Партнеры",
        href: "/partners",
        inMenu: true
    },
    {
        id: 5,
        name: "Контакты",
        href: "/contacts",
        inMenu: true
    },
    {
        id: 6,
        name: "Корзина",
        href: "/cart",
        inMenu: false
    }
];
const API_URL = process.env.API_URL ? process.env.API_URL : "http://localhost:5000";



/***/ })

};
;