"use strict";
exports.id = 431;
exports.ids = [431];
exports.modules = {

/***/ 2431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MainLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/store/static.ts
var store_static = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/hooks/index.ts
var hooks = __webpack_require__(6183);
;// CONCATENATED MODULE: ./src/components/DesktopMenu.tsx





const DesktopMenu = ()=>{
    const pageId = (0,hooks/* useAppSelector */.C)((state)=>state.curPage.curPageId);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "menu-desktop",
        children: store_static/* menuLinks.map */.z.map((link)=>link.inMenu && /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: link.href,
                className: "menu__link" + (link.id === pageId ? " cur" : ""),
                children: link.name
            }, link.id))
    });
};
/* harmony default export */ const components_DesktopMenu = (DesktopMenu);

;// CONCATENATED MODULE: ./src/components/MobileMenu.tsx




const MobileMenu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "menu-mobile",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu_line"
            }),
            store_static/* menuLinks.map */.z.map((link)=>link.inMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: link.href,
                            children: link.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu_line"
                        })
                    ]
                }, link.id))
        ]
    });
};
/* harmony default export */ const components_MobileMenu = (MobileMenu);

;// CONCATENATED MODULE: ./src/components/Header.tsx






const Header = ()=>{
    const [mobileMenuIsActive, setMobileMenuIsActive] = (0,external_react_.useState)(false);
    function toggleMobileMenu() {
        setMobileMenuIsActive((prev)=>!prev);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "#",
                className: "menu-btn",
                id: "blink",
                onClick: toggleMobileMenu,
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "menu-window" + (mobileMenuIsActive ? " active" : ""),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "menu_container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "menu_info",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu_info_1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Сыктывкар, ул. Индустриальная, 20/12 ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "#",
                                                children: "схема проезда"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu_info_line"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu_info_2",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "Режим работы:",
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "ПН-ПТ с 08:00 до 18:00"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "menu_info_line"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "menu_info_3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "menu_info_3_1",
                                            children: [
                                                "тел.: ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "tel:+7 (9965) 891-596",
                                                    children: "+7 996 589-15-96"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu_info_3_2",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "menu_info_3_2_content",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                        className: "",
                                                        src: "/assets/icons/img2.png",
                                                        alt: "tel",
                                                        width: 0,
                                                        height: 0
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#",
                                                        children: "Перезвоните мне"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(components_MobileMenu, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "up_bookmark",
                        src: "/assets/icons/img1.png",
                        alt: "up_bookmark",
                        width: 1000,
                        height: 1000
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header_1",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "logo_link",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "logo",
                                        src: "/assets/icons/logo.png",
                                        alt: "logo",
                                        width: 1000,
                                        height: 1000
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "header_1_1",
                                    children: [
                                        "Сыктывкар, ул. Индустриальная, 20/12",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "underlined",
                                            children: "схема проезда"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "header_1_2",
                                    children: [
                                        "Режим работы:",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "ПН-ПТ с 08:00 до 20:00"
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "header_1_3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "header_1_3_1",
                                            children: [
                                                "тел.: ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "tel:+7 (9965) 891-596",
                                                    children: "+7 996 589-15-96"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "header_1_3_2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: "/assets/icons/img2.png",
                                                    alt: "phone",
                                                    width: 1000,
                                                    height: 1000
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "#",
                                                    className: "underlined",
                                                    children: "Перезвоните мне"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border_line"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "header_2",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(components_DesktopMenu, {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "content",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "header_2_2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                action: "/",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "search",
                                                    placeholder: "Поиск"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/cart",
                                                className: "underlined header_basket",
                                                children: "Корзина"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border_line"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Footer.tsx



const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "block_border_line"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "ДОСТАВКА ЭЛЕКТРОМОБИЛЕЙ С АУКЦИОНОВ ЯПОНИИ"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "block_border_line"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "content",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "chapter_one cur_chapter",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/",
                                            className: "title",
                                            children: "Главная"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "block_border_line"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "НОВИНКИ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ПРЕИМУЩЕСТВА"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ЗАЯВКА"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "СДЕЛКА"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ПРОЦЕСС ПОСТАВКИ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "НАШЕ МЕСТОПОЛОЖЕНИЕ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "КАРТА САЙТА"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "chapter_one",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/about",
                                            className: "title",
                                            children: "О нас"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "block_border_line"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ИСТОРИЯ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "МИССИЯ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ПРИНЦИПЫ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ВИДЕО"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "НАГРАДЫ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ОТЗЫВЫ"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "chapter_one",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/select",
                                            className: "title",
                                            children: "Подбор авто"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "block_border_line"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "НАШИ ДЕЙСТВИЯ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "МОДЕЛИ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ХАРАКТЕРИСТИКИ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "НАША ПОМОЩЬ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "СОВЕТЫ"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "chapter_one",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/payment",
                                            className: "title",
                                            children: "Оплата и доставка"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "block_border_line"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "СУММЫ И СРОКИ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ГАРАНТИИ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ВАША ВЫГОДА"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ЮРИДИЧЕСКАЯ ЧИСТОТА"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "chapter_one",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/partners",
                                            className: "title",
                                            children: "Партнеры"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "block_border_line"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ТОРГОВЫЕ ПЛОЩАДКИ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ПЕРЕВОЗЧИКИ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "СЕРВИС"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "РЕМОНТ"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "#",
                                            className: "subtitle",
                                            children: "ЧИП-ТЮНИНГ"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "chapter_one",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/contacts",
                                            className: "title",
                                            children: "Контакты"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "block_border_line"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/store/slices/pageSlice.ts
var pageSlice = __webpack_require__(3730);
;// CONCATENATED MODULE: ./src/components/MainLayout.tsx








const MainLayout = ({ children  })=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const handleChangePage = (curPageId)=>dispatch((0,pageSlice/* setCurPage */.E)({
            curPageId
        }));
    (0,external_react_.useEffect)(()=>{
        const link = store_static/* menuLinks.find */.z.find((link)=>link.href === router.pathname);
        if (link) {
            handleChangePage(link.id);
        }
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_MainLayout = (MainLayout);


/***/ }),

/***/ 6183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);


const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 3730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;