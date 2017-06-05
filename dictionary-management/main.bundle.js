webpackJsonp([1,4],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDeleteDictionaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDeleteDictionaryComponent = (function () {
    function ConfirmDeleteDictionaryComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    return ConfirmDeleteDictionaryComponent;
}());
ConfirmDeleteDictionaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'confirm-delete-dictionary',
        template: "\n    <h3 md-dialog-title>\n      <span>Confirm delete</span>\n      <md-icon color=\"warn\">warning</md-icon>\n    </h3>\n    <p md-dialog-content>Do you really want to delete {{data.dictionary.name}}?</p>\n    <div md-dialog-actions>\n      <button md-dialog-close=\"no\" class=\"cancel-delete\" md-raised-button>\n        <md-icon>clear</md-icon>\n        <span>No</span>\n      </button>\n      <button md-dialog-close=\"yes\" class=\"yes-delete\" md-raised-button color=\"primary\">\n        <md-icon>done</md-icon>\n        <span>Yes</span>\n      </button>\n    </div>\n  ",
        styles: ["\n    [md-dialog-title] {\n      display: flex;\n      justify-content: space-between;\n    }\n    [md-dialog-actions] {\n      display: flex;\n      justify-content: flex-end;\n    }\n  "]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, Object])
], ConfirmDeleteDictionaryComponent);

var _a;
//# sourceMappingURL=confirm-delete-dictionary.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DB_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DICTIONARIES_TABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
var DB_NAME = 'dictionaries_app';
var DICTIONARIES_TABLE = 'dictionaries';
var schema = {
    version: 1,
    name: DB_NAME,
    stores: {
        dictionaries: {
            autoIncrement: true,
            primaryKey: 'id'
        }
    }
};
//# sourceMappingURL=db.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_list_dictionaries__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dictionary__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__effects_list_dictionaries__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_form_dictionary_form_dictionary__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_dictionary_message__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddDictionaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddDictionaryComponent = (function () {
    function AddDictionaryComponent(store, router, dictService, dicMessageService, dictsEffects) {
        this.store = store;
        this.router = router;
        this.dictService = dictService;
        this.dicMessageService = dicMessageService;
        this.addSubscriptions(dictsEffects);
    }
    AddDictionaryComponent.prototype.createEmptyDictionary = function () {
        return this.dictService.create('');
    };
    AddDictionaryComponent.prototype.isDictionaryValid = function () {
        return this.formDictionary.isDictionaryValid();
    };
    AddDictionaryComponent.prototype.saveDictionary = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_list_dictionaries__["u" /* AddDictionaryAction */](this.formDictionary.sanitizeDictionary()));
    };
    AddDictionaryComponent.prototype.addSubscriptions = function (dictsEffects) {
        var _this = this;
        // Not ideal to subscribe to an effect. Instead subscribe
        // to the store and checks what's changed. But this is easier.
        dictsEffects.addDictionary$.subscribe(function (action) {
            if (action instanceof __WEBPACK_IMPORTED_MODULE_3__actions_list_dictionaries__["f" /* AddDictionarySuccessAction */]) {
                _this.dicMessageService.next({
                    action: __WEBPACK_IMPORTED_MODULE_7__services_dictionary_message__["a" /* DictionaryAction */].ADD,
                    dictionary: action.payload
                });
                _this.router.navigate(['/dictionaries']);
            }
            else if (action instanceof __WEBPACK_IMPORTED_MODULE_3__actions_list_dictionaries__["f" /* AddDictionarySuccessAction */]) {
                // TODO
            }
        });
    };
    return AddDictionaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__components_form_dictionary_form_dictionary__["a" /* FormDictionaryComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__components_form_dictionary_form_dictionary__["a" /* FormDictionaryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_form_dictionary_form_dictionary__["a" /* FormDictionaryComponent */]) === "function" && _a || Object)
], AddDictionaryComponent.prototype, "formDictionary", void 0);
AddDictionaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'add-dictionary',
        template: __webpack_require__(317),
        styles: [__webpack_require__(306)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_dictionary__["a" /* DictionaryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_dictionary__["a" /* DictionaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_dictionary__["a" /* DictionaryService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_dictionary_message__["b" /* DictionaryMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_dictionary_message__["b" /* DictionaryMessageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__effects_list_dictionaries__["a" /* DictionariesEffects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__effects_list_dictionaries__["a" /* DictionariesEffects */]) === "function" && _f || Object])
], AddDictionaryComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-dictionary.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_list_dictionaries__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__effects_list_dictionaries__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_form_dictionary_form_dictionary__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_dictionary_message__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDictionaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditDictionaryComponent = (function () {
    function EditDictionaryComponent(store, router, route, dicMessageService, dictsEffects) {
        this.store = store;
        this.router = router;
        this.route = route;
        this.dicMessageService = dicMessageService;
        this.addSubscriptions(dictsEffects);
    }
    EditDictionaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getDictionaries */]).subscribe(function (dictionaries) {
                _this.dictionary = dictionaries.find(function (dictionary) { return dictionary.id == params['id']; });
            });
        });
    };
    EditDictionaryComponent.prototype.getDictionary = function () {
        return this.dictionary;
    };
    EditDictionaryComponent.prototype.isDictionaryValid = function () {
        return this.formDictionary.isDictionaryValid();
    };
    EditDictionaryComponent.prototype.cancelEdit = function () {
        this.formDictionary.sanitizeDictionary();
        this.router.navigate(['/dictionaries']);
    };
    EditDictionaryComponent.prototype.saveDictionary = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__actions_list_dictionaries__["t" /* UpdateDictionaryAction */](this.formDictionary.sanitizeDictionary()));
    };
    EditDictionaryComponent.prototype.addSubscriptions = function (dictsEffects) {
        var _this = this;
        dictsEffects.updateDictionary$.subscribe(function (action) {
            if (action instanceof __WEBPACK_IMPORTED_MODULE_4__actions_list_dictionaries__["l" /* UpdateDictionarySuccessAction */]) {
                _this.dicMessageService.next({
                    action: __WEBPACK_IMPORTED_MODULE_7__services_dictionary_message__["a" /* DictionaryAction */].UPDATE,
                    dictionary: action.payload
                });
                _this.router.navigate(['/dictionaries']);
            }
            else if (action instanceof __WEBPACK_IMPORTED_MODULE_4__actions_list_dictionaries__["m" /* UpdateDictionaryFailAction */]) {
                // TODO
            }
        });
    };
    return EditDictionaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__components_form_dictionary_form_dictionary__["a" /* FormDictionaryComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__components_form_dictionary_form_dictionary__["a" /* FormDictionaryComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__components_form_dictionary_form_dictionary__["a" /* FormDictionaryComponent */]) === "function" && _a || Object)
], EditDictionaryComponent.prototype, "formDictionary", void 0);
EditDictionaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'edit-dictionary',
        template: __webpack_require__(318),
        styles: [__webpack_require__(307)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_dictionary_message__["b" /* DictionaryMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_dictionary_message__["b" /* DictionaryMessageService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__effects_list_dictionaries__["a" /* DictionariesEffects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__effects_list_dictionaries__["a" /* DictionariesEffects */]) === "function" && _f || Object])
], EditDictionaryComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-dictionary.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'home',
        template: __webpack_require__(319),
        styles: [__webpack_require__(308)]
    })
], HomeComponent);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_let__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListDictionariesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListDictionariesComponent = (function () {
    function ListDictionariesComponent(store) {
        this.dictionaries$ = store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getDictionaries */]);
    }
    return ListDictionariesComponent;
}());
ListDictionariesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: 'list-dictionaries',
        template: __webpack_require__(320),
        styles: [__webpack_require__(309)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], ListDictionariesComponent);

var _a;
//# sourceMappingURL=list-dictionaries.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'not-found',
        template: __webpack_require__(321),
        styles: [__webpack_require__(310)]
    })
], NotFoundComponent);

//# sourceMappingURL=not-found.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewDictionaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewDictionaryComponent = (function () {
    function ViewDictionaryComponent(store, route) {
        this.store = store;
        this.route = route;
    }
    ViewDictionaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.store.select(__WEBPACK_IMPORTED_MODULE_3__reducers__["b" /* getDictionaries */]).subscribe(function (dictionaries) {
                _this.dictionary = dictionaries.find(function (dictionary) { return dictionary.id == params['id']; });
            });
        });
    };
    return ViewDictionaryComponent;
}());
ViewDictionaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'view-dictionary',
        template: __webpack_require__(322),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], ViewDictionaryComponent);

var _a, _b;
//# sourceMappingURL=view-dictionary.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 200;


/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(230);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_dictionaries_list_dictionaries__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_view_dictionary_view_dictionary__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_add_dictionary_add_dictionary__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_dictionary_edit_dictionary__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found__ = __webpack_require__(133);
/* unused harmony export RoutingRootComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RoutingRootComponent = (function () {
    function RoutingRootComponent() {
    }
    return RoutingRootComponent;
}());
RoutingRootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({ template: '<router-outlet></router-outlet>' })
], RoutingRootComponent);

var routes = [
    {
        path: '',
        component: RoutingRootComponent,
        data: { breadcrumb: 'Home' },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomeComponent */],
                data: { breadcrumb: 'Index' },
            },
            {
                path: 'dictionaries',
                component: RoutingRootComponent,
                data: { breadcrumb: 'Dictionaries' },
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_3__pages_list_dictionaries_list_dictionaries__["a" /* ListDictionariesComponent */],
                        data: { breadcrumb: 'Listing' },
                    },
                    {
                        path: 'add',
                        component: __WEBPACK_IMPORTED_MODULE_5__pages_add_dictionary_add_dictionary__["a" /* AddDictionaryComponent */],
                        data: { breadcrumb: 'Adding' }
                    },
                    {
                        path: 'view/:id',
                        component: __WEBPACK_IMPORTED_MODULE_4__pages_view_dictionary_view_dictionary__["a" /* ViewDictionaryComponent */],
                        data: { breadcrumb: 'Viewing' }
                    },
                    {
                        path: 'edit/:id',
                        component: __WEBPACK_IMPORTED_MODULE_6__pages_edit_dictionary_edit_dictionary__["a" /* EditDictionaryComponent */],
                        data: { breadcrumb: 'Editing' }
                    }
                ]
            }
        ]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_7__pages_not_found_not_found__["a" /* NotFoundComponent */],
        data: { breadcrumb: 'Not Found' }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
        declarations: [RoutingRootComponent]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dictionary_message__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnackBarMessages = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_2__services_dictionary_message__["a" /* DictionaryAction */].ADD] = 'Dictionary added',
    _a[__WEBPACK_IMPORTED_MODULE_2__services_dictionary_message__["a" /* DictionaryAction */].UPDATE] = 'Dictionary updated',
    _a[__WEBPACK_IMPORTED_MODULE_2__services_dictionary_message__["a" /* DictionaryAction */].DELETE] = 'Dictionary deleted',
    _a);
var AppComponent = (function () {
    function AppComponent(snackBar, dictMessageService) {
        // We want to show a snackbar with every action at the
        // level of the root component (because of the routing). 
        // We use this service (Subject object) to notify the 
        // parent component when an action against a dictionary 
        // happend
        dictMessageService.subscribe(function (dictAction) {
            snackBar.open(SnackBarMessages[dictAction.action], 'OK', {
                duration: 2000,
            });
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(312),
        styles: [__webpack_require__(301)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_dictionary_message__["b" /* DictionaryMessageService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MdSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_dictionary_message__["b" /* DictionaryMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dictionary_message__["b" /* DictionaryMessageService */]) === "function" && _c || Object])
], AppComponent);

var _b, _c;
var _a;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/**
 * This component is based on:
 * http://brianflove.com/2016/10/23/angular2-breadcrumb-using-router/
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.breadcrumbs = [];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            var root = _this.activatedRoute.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
        });
    };
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ''; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var children = route.children;
        if (children.length === 0) {
            return breadcrumbs;
        }
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child.outlet !== __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* PRIMARY_OUTLET */]) {
                continue;
            }
            if (!child.snapshot.data.breadcrumb) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join('/');
            url += "/" + routeURL;
            var breadcrumb = {
                label: child.snapshot.data.breadcrumb,
                params: child.snapshot.params,
                url: url
            };
            breadcrumbs.push(breadcrumb);
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    };
    return BreadcrumbComponent;
}());
BreadcrumbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: 'breadcrumb',
        template: __webpack_require__(313),
        styles: [__webpack_require__(302)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], BreadcrumbComponent);

var _a, _b;
//# sourceMappingURL=breadcrumb.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dictionary__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dictionary__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailDictionaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailDictionaryComponent = (function () {
    function DetailDictionaryComponent(dictService) {
        this.dictService = dictService;
    }
    // The next two methods are duplicate. TODO: share them. Inheritance?
    DetailDictionaryComponent.prototype.isDuplicateDomain = function (entry, idx) {
        return this.dictService.isEntryDuplicateDomain(entry, idx, this.dictionary) ||
            this.dictService.isEntryDuplicateDomainRange(entry, idx, this.dictionary);
    };
    DetailDictionaryComponent.prototype.isChainOrCycle = function (entry, idx) {
        return this.dictService.isEntryPartOfChain(entry, idx, this.dictionary) ||
            this.dictService.isEntryPartOfCycle(entry, idx, this.dictionary);
    };
    return DetailDictionaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dictionary__["Dictionary"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dictionary__["Dictionary"]) === "function" && _a || Object)
], DetailDictionaryComponent.prototype, "dictionary", void 0);
DetailDictionaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'detail-dictionary',
        template: __webpack_require__(314),
        styles: [__webpack_require__(303)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_dictionary__["a" /* DictionaryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dictionary__["a" /* DictionaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dictionary__["a" /* DictionaryService */]) === "function" && _b || Object])
], DetailDictionaryComponent);

var _a, _b;
//# sourceMappingURL=detail-dictionary.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_list_dictionaries__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__effects_list_dictionaries__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_delete_dictionary__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_dictionary_message__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavDictionariesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavDictionariesComponent = (function () {
    function NavDictionariesComponent(store, dialog, dicMessageService, dictsEffects) {
        this.dictionaries = [];
        this.store = store;
        this.dialog = dialog;
        this.dicMessageService = dicMessageService;
        this.addSubscriptions(dictsEffects);
    }
    NavDictionariesComponent.prototype.dialogConfirm = function (dictionary) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__confirm_delete_dictionary__["a" /* ConfirmDeleteDictionaryComponent */], {
            hasBackdrop: true,
            data: { dictionary: dictionary }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'yes') {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_list_dictionaries__["s" /* RemoveDictionaryAction */](dictionary));
            }
        });
    };
    NavDictionariesComponent.prototype.addSubscriptions = function (dictsEffects) {
        var _this = this;
        dictsEffects.removeDictionary$.subscribe(function (action) {
            if (action instanceof __WEBPACK_IMPORTED_MODULE_3__actions_list_dictionaries__["i" /* RemoveDictionarySuccessAction */]) {
                _this.dicMessageService.next({
                    action: __WEBPACK_IMPORTED_MODULE_6__services_dictionary_message__["a" /* DictionaryAction */].DELETE,
                    dictionary: action.payload
                });
            }
            else if (action instanceof __WEBPACK_IMPORTED_MODULE_3__actions_list_dictionaries__["j" /* RemoveDictionaryFailAction */]) {
                // TODO
            }
        });
    };
    return NavDictionariesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])(),
    __metadata("design:type", Array)
], NavDictionariesComponent.prototype, "dictionaries", void 0);
NavDictionariesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'nav-dictionaries',
        template: __webpack_require__(316),
        styles: [__webpack_require__(305)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_dictionary_message__["b" /* DictionaryMessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_dictionary_message__["b" /* DictionaryMessageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__effects_list_dictionaries__["a" /* DictionariesEffects */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__effects_list_dictionaries__["a" /* DictionariesEffects */]) === "function" && _d || Object])
], NavDictionariesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nav-dictionaries.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusInput = (function () {
    function FocusInput(input) {
        this.firstTime = true;
        this.input = input;
    }
    FocusInput.prototype.ngAfterViewInit = function () {
        if (this.firstTime) {
            this.input.nativeElement.focus();
            this.firstTime = false;
        }
    };
    return FocusInput;
}());
FocusInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Directive */])({ selector: '[focus-input]' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _a || Object])
], FocusInput);

var _a;
//# sourceMappingURL=focus-input.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_db__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_breadcrumb_breadcrumb__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__effects_list_dictionaries__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reducers__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__db__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_breadcrumb_breadcrumb__["a" /* BreadcrumbComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__pages__["a" /* PagesModule */],
            /**
            * StoreModule.provideStore is imported once in the root module, accepting a reducer
            * function or object map of reducer functions. If passed an object of
            * reducers, combineReducers will be run creating your application
            * meta-reducer. This returns all providers for an @ngrx/store
            * based application.
            */
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_12__reducers__["a" /* reducer */]),
            /**
            * @ngrx/router-store keeps router state up-to-date in the store and uses
            * the store as the single source of truth for the router's state.
            */
            __WEBPACK_IMPORTED_MODULE_6__ngrx_router_store__["a" /* RouterStoreModule */].connectRouter(),
            /**
            * EffectsModule.run() sets up the effects class to be initialized
            * immediately when the application starts.
            *
            * See: https://github.com/ngrx/effects/blob/master/docs/api.md#run
            */
            __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_11__effects_list_dictionaries__["a" /* DictionariesEffects */]),
            // EffectsModule.run(DictionaryEffects),
            /**
            * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
            * service available.
            */
            __WEBPACK_IMPORTED_MODULE_5__ngrx_db__["a" /* DBModule */].provideDB(__WEBPACK_IMPORTED_MODULE_13__db__["a" /* schema */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_form_dictionary_form_dictionary__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_detail_dictionary_detail_dictionary__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_nav_dictionaries_nav_dictionaries__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_nav_dictionaries_confirm_delete_dictionary__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_dictionary_add_dictionary__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_dictionary_edit_dictionary__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__list_dictionaries_list_dictionaries__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_dictionary_view_dictionary__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__not_found_not_found__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_focus_input__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_keyable__ = __webpack_require__(228);
/* unused harmony export PAGES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var PAGES = [
    __WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_10__add_dictionary_add_dictionary__["a" /* AddDictionaryComponent */],
    __WEBPACK_IMPORTED_MODULE_11__edit_dictionary_edit_dictionary__["a" /* EditDictionaryComponent */],
    __WEBPACK_IMPORTED_MODULE_12__list_dictionaries_list_dictionaries__["a" /* ListDictionariesComponent */],
    __WEBPACK_IMPORTED_MODULE_13__view_dictionary_view_dictionary__["a" /* ViewDictionaryComponent */],
    __WEBPACK_IMPORTED_MODULE_14__not_found_not_found__["a" /* NotFoundComponent */]
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__components_nav_dictionaries_confirm_delete_dictionary__["a" /* ConfirmDeleteDictionaryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_nav_dictionaries_nav_dictionaries__["a" /* NavDictionariesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_form_dictionary_form_dictionary__["a" /* FormDictionaryComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_detail_dictionary_detail_dictionary__["a" /* DetailDictionaryComponent */],
            __WEBPACK_IMPORTED_MODULE_15__directives_focus_input__["a" /* FocusInput */],
            __WEBPACK_IMPORTED_MODULE_16__pipes_keyable__["a" /* KeyablePipe */]
        ].concat(PAGES),
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__components_nav_dictionaries_confirm_delete_dictionary__["a" /* ConfirmDeleteDictionaryComponent */]]
    })
], PagesModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeyablePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Transform a string into a key
 * Example:
 *   This is an example => this_is_an_example
 */
var KeyablePipe = (function () {
    function KeyablePipe() {
    }
    KeyablePipe.prototype.transform = function (value) {
        if (value === void 0) { value = ''; }
        return value
            .toLowerCase()
            .replace(/\s/g, '_');
        // TODO: add more if needed
    };
    return KeyablePipe;
}());
KeyablePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Pipe */])({ name: 'keyable' })
], KeyablePipe);

//# sourceMappingURL=keyable.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_list_dictionaries__ = __webpack_require__(41);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getDictionaries; });

;
var initialState = {
    loaded: false,
    loading: false,
    dictionaries: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_list_dictionaries__["a" /* LOAD */]: {
            return Object.assign({}, state, {
                loading: true
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_list_dictionaries__["n" /* LOAD_SUCCESS */]: {
            var dictionaries_1 = action.payload;
            return {
                loaded: true,
                loading: false,
                dictionaries: dictionaries_1
            };
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_list_dictionaries__["o" /* ADD_DICTIONARY_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions_list_dictionaries__["p" /* REMOVE_DICTIONARY_FAIL */]: {
            var dictionary_1 = action.payload;
            if (state.dictionaries.find(function (dict) { return dict.id === dictionary_1.id; })) {
                return state;
            }
            return Object.assign({}, state, {
                dictionaries: state.dictionaries.concat([dictionary_1])
            });
        }
        case __WEBPACK_IMPORTED_MODULE_0__actions_list_dictionaries__["q" /* REMOVE_DICTIONARY_SUCCESS */]:
        case __WEBPACK_IMPORTED_MODULE_0__actions_list_dictionaries__["r" /* ADD_DICTIONARY_FAIL */]: {
            var dictionary_2 = action.payload;
            return Object.assign({}, state, {
                dictionaries: state.dictionaries.filter(function (dict) { return dict.id !== dictionary_2.id; })
            });
        }
        default: {
            return state;
        }
    }
}
var getLoaded = function (state) { return state.loaded; };
var getLoading = function (state) { return state.loading; };
var getDictionaries = function (state) { return state.dictionaries; };
//# sourceMappingURL=list-dictionaries.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".app-content {\n  margin: 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.breadcrumb {\n  padding: 10px;\n  background-color: #e3f2fd;\n  border-radius: 4px; }\n  .breadcrumb li {\n    display: inline-block;\n    list-style: none;\n    margin-right: 5px; }\n    .breadcrumb li:after {\n      display: inline-block;\n      content: \"/\";\n      margin-left: 5px; }\n    .breadcrumb li:last-child:after {\n      content: \"\"; }\n  .breadcrumb a {\n    text-decoration: none;\n    color: #0d47a1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.detail-dictionary .dictionary-name {\n  font-size: 1.2rem; }\n\n.detail-dictionary table {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  padding: 10px;\n  margin-top: 10px; }\n  .detail-dictionary table td {\n    position: relative; }\n\n.detail-dictionary .inconsistency-marker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 16px;\n  z-index: 1; }\n  .detail-dictionary .inconsistency-marker.warning {\n    color: #fbc02d; }\n  .detail-dictionary .inconsistency-marker.error {\n    color: #f44336; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.form-dictionary .dictionary-name {\n  font-size: 1.2rem; }\n\n.form-dictionary table {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  padding: 10px;\n  margin-top: 10px; }\n  .form-dictionary table tr .delete-entry {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 20px;\n    height: 20px;\n    line-height: 26px; }\n    .form-dictionary table tr .delete-entry .mat-icon {\n      padding: 0;\n      line-height: 0;\n      height: 20px;\n      width: 20px;\n      font-size: 16px; }\n  .form-dictionary table tr td {\n    position: relative; }\n  .form-dictionary table tr:hover .delete-entry {\n    display: block; }\n\n.form-dictionary .inconsistency-marker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 16px;\n  z-index: 1; }\n  .form-dictionary .inconsistency-marker.warning {\n    color: #fbc02d; }\n  .form-dictionary .inconsistency-marker.error {\n    color: #f44336; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.nav-dictionaries {\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n  padding: 10px;\n  margin-top: 10px; }\n  .nav-dictionaries .dictionary-actions {\n    display: none; }\n    .nav-dictionaries .dictionary-actions .edit-dictionary {\n      margin-right: 10px; }\n  .nav-dictionaries .dictionary-item:hover {\n    background-color: #e3f2fd; }\n    .nav-dictionaries .dictionary-item:hover .dictionary-actions {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n  .nav-dictionaries .mat-mini-fab {\n    width: 30px;\n    height: 30px; }\n    .nav-dictionaries .mat-mini-fab .mat-icon {\n      padding-top: 3px; }\n  .nav-dictionaries .no-dictionaries {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 16px;\n    height: 48px;\n    padding: 0 16px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".add-dictionary md-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".edit-dictionary md-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".view-dictionary md-card-actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\" class=\"mat-elevation-z6\">\n  <span>Dictionary Management</span>\n</md-toolbar>\n\n<div class=\"app-content\">\n  <breadcrumb></breadcrumb>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let lastLink = last\">\n    <span *ngIf=\"lastLink\">{{breadcrumb.label}}</span>\n    <a *ngIf=\"!lastLink\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.label}}</a>\n  </li>\n</ul>"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<form class=\"detail-dictionary\">\n  <md-input-container class=\"dictionary-name\">\n\n    <input \n      focus-input \n      name=\"dictionary-name\" \n      mdInput \n      [value]=\"dictionary.name\"\n      readonly>\n\n  </md-input-container>\n\n  <table cellspacing=\"0\">\n    <tr>\n      <th>Domain</th>\n      <th>Range</th>\n    </tr>\n\n    <tr *ngFor=\"let entry of dictionary.list; let idx = index\">\n      <td>\n\n        <md-icon class=\"inconsistency-marker warning\" *ngIf=\"isDuplicateDomain(entry, idx)\" mdTooltip=\"Duplicate domain or domain/range\" mdTooltipPosition=\"above\">warning</md-icon>\n\n        <md-icon class=\"inconsistency-marker error\" *ngIf=\"isChainOrCycle(entry)\" mdTooltip=\"Part of a chain or cycle\" mdTooltipPosition=\"above\">error</md-icon>\n\n        <md-input-container>\n\n          <input \n            name=\"domain-{{entry.domain | keyable}}\" \n            mdInput \n            [value]=\"entry.domain\"\n            readonly>\n\n        </md-input-container>\n      </td>\n      <td>\n        <md-input-container>\n\n          <input \n            name=\"range_for-{{entry.domain | keyable}}\" \n            mdInput \n            [value]=\"entry.range\"\n            readonly>\n\n        </md-input-container>\n      </td>\n    </tr>\n\n  </table>\n</form>"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<form class=\"form-dictionary\">\n  <md-input-container class=\"dictionary-name\">\n\n    <input \n      focus-input \n      name=\"dictionary-name\" \n      mdInput \n      placeholder=\"Dictionary name\"\n      maxlength=\"25\"\n      [(ngModel)]=\"dictionary.name\"\n      required>\n\n  </md-input-container>\n\n  <table cellspacing=\"0\">\n    <tr>\n      <th>Domain</th>\n      <th>Range</th>\n    </tr>\n\n    <tr *ngFor=\"let entry of enteredEntries; let idx = index\">\n      <td>\n\n        <md-icon class=\"inconsistency-marker warning\" *ngIf=\"isDuplicateDomain(entry, idx)\" mdTooltip=\"Duplicate domain or domain/range\" mdTooltipPosition=\"above\">warning</md-icon>\n\n        <md-icon class=\"inconsistency-marker error\" *ngIf=\"isChainOrCycle(entry)\" mdTooltip=\"Part of a chain or cycle\" mdTooltipPosition=\"above\">error</md-icon>\n\n        <md-input-container>\n\n          <input \n            name=\"domain_{{entry.domain | keyable}}-{{entry.id}}\" \n            mdInput \n            [(ngModel)]=\"entry.domain\">\n\n        </md-input-container>\n      </td>\n      <td class=\"input-range-wrapper\">\n        <md-input-container>\n\n          <input \n            name=\"range_{{entry.range | keyable}}-{{entry.id}}\" \n            mdInput \n            [(ngModel)]=\"entry.range\"\n            required>\n\n        </md-input-container>\n\n        <button title=\"Delete entry\" class=\"delete-entry\" color=\"warn\" md-mini-fab (click)=\"deleteEntry(idx)\">\n          <md-icon>clear</md-icon>\n        </button>\n      </td>\n    </tr>\n\n    <tr class=\"new-entry\">\n      <td>\n        <md-input-container>\n\n          <input \n            #newEntryDomainInput \n            name=\"new_entry-domain\" \n            mdInput \n            [(ngModel)]=\"lastEntry.domain\">\n\n        </md-input-container>\n      </td>\n      <td>\n        <md-input-container>\n\n          <input \n            name=\"new_entry-range\"\n            mdInput \n            [(ngModel)]=\"lastEntry.range\" \n            (keydown)=\"onKeydown($event)\">\n\n        </md-input-container>\n\n        <button title=\"Empty entry\" class=\"delete-entry\" color=\"warn\" md-mini-fab (click)=\"emptyLastEntry()\">\n          <md-icon>clear</md-icon>\n        </button>\n      </td>\n    </tr>\n\n  </table>\n</form>"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<md-nav-list class=\"nav-dictionaries\">\n  <md-list-item class=\"dictionary-item\" *ngFor=\"let dictionary of dictionaries\">\n      <a md-line [routerLink]=\"['/dictionaries/view/', dictionary.id]\">{{dictionary.name}}</a>\n\n      <span class=\"dictionary-actions\">\n        <a title=\"Edit dictionary\" class=\"edit-dictionary\" md-mini-fab [routerLink]=\"['/dictionaries/edit/', dictionary.id]\">\n          <md-icon>mode_edit</md-icon>\n        </a>\n        <button title=\"Delete dictionary\" class=\"delete-dictionary\" color=\"warn\" md-mini-fab (click)=\"dialogConfirm(dictionary)\">\n          <md-icon>delete</md-icon>\n        </button>\n      </span>\n\n  </md-list-item>\n  <div *ngIf=\"dictionaries.length == 0\" class=\"no-dictionaries\">\n    No Dictionaries\n  </div>\n</md-nav-list>"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"page add-dictionary\">\n  <div class=\"card-inner\">\n    <md-card-title>New Dictionary</md-card-title>\n    <md-card-content>\n    <form-dictionary [dictionary]=\"createEmptyDictionary()\"></form-dictionary>\n    </md-card-content>\n    <md-card-actions>\n      <a class=\"cancel-new\" md-raised-button [routerLink]=\"['/dictionaries/']\">\n        <md-icon>cancel</md-icon>\n        <span>Cancel</span>\n      </a>\n      <button class=\"save-new\" md-raised-button color=\"primary\" (click)=\"saveDictionary()\" [disabled]=\"!isDictionaryValid()\">\n        <md-icon>note_add</md-icon>\n        <span>Add</span>\n      </button>\n    </md-card-actions>\n  </div>\n</md-card>"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"page edit-dictionary\">\n  <div class=\"card-inner\">\n    <md-card-title>Edit {{dictionary.name}}</md-card-title>\n    <md-card-content>\n    <form-dictionary [dictionary]=\"getDictionary()\"></form-dictionary>\n    </md-card-content>\n    <md-card-actions>\n      <button class=\"cancel-edit\" md-raised-button (click)=\"cancelEdit()\">\n        <md-icon>cancel</md-icon>\n        <span>Cancel</span>\n      </button>\n      <button class=\"save-edit\" md-raised-button color=\"primary\" (click)=\"saveDictionary()\" [disabled]=\"!isDictionaryValid()\">\n        <md-icon>save</md-icon>\n        <span>Update</span>\n      </button>\n    </md-card-actions>\n  </div>\n</md-card>"

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

module.exports = "<a md-raised-button href=\"#/dictionaries\">\n  <md-icon>library_books</md-icon>\n  <span>Manage Dictionaries</span>\n</a>"

/***/ }),

/***/ 320:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"page list-dictionaries\">\n  <div class=\"card-inner\">\n    <md-card-title>List of Dictionaries</md-card-title>\n    <md-card-content>\n      <a class=\"add-new\" md-raised-button color=\"primary\" href=\"#/dictionaries/add\">\n        <md-icon>book</md-icon>\n        <span>Add new Dictionary</span>\n      </a>\n      <nav-dictionaries [dictionaries]=\"dictionaries$ | async\"></nav-dictionaries>\n    </md-card-content>\n  </div>\n</md-card>"

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"not-found\">\n  <div class=\"card-inner\">\n    <md-card-title>Page Not Found</md-card-title>\n    <md-card-content>\n\n    </md-card-content>\n  </div>\n</md-card>"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"page view-dictionary\">\n  <div class=\"card-inner\">\n    <md-card-title>Dictionary</md-card-title>\n    <md-card-content>\n      <detail-dictionary [dictionary]=\"dictionary\"></detail-dictionary>\n    </md-card-content>\n    <md-card-actions>\n      <a class=\"go-back\" md-raised-button [routerLink]=\"['/dictionaries/']\">\n        <md-icon>navigate_before</md-icon>\n        <span>Back</span>\n      </a>\n    </md-card-actions>\n  </div>\n</md-card>"

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_DICTIONARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return ADD_DICTIONARY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ADD_DICTIONARY_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return REMOVE_DICTIONARY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return REMOVE_DICTIONARY_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return REMOVE_DICTIONARY_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UPDATE_DICTIONARY; });
/* unused harmony export UPDATE_DICTIONARY_SUCCESS */
/* unused harmony export UPDATE_DICTIONARY_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_SUCCESS; });
/* unused harmony export LOAD_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return AddDictionaryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return AddDictionarySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return AddDictionaryFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return RemoveDictionaryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return RemoveDictionarySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RemoveDictionaryFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return UpdateDictionaryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UpdateDictionarySuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return UpdateDictionaryFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadFailAction; });
var ADD_DICTIONARY = '[Dictionaries] Add Dictionary';
var ADD_DICTIONARY_SUCCESS = '[Dictionaries] Add Dictionary Success';
var ADD_DICTIONARY_FAIL = '[Dictionaries] Add Dictionary Fail';
var REMOVE_DICTIONARY = '[Dictionaries] Remove Dictionary';
var REMOVE_DICTIONARY_SUCCESS = '[Dictionaries] Remove Dictionary Success';
var REMOVE_DICTIONARY_FAIL = '[Dictionaries] Remove Dictionary Fail';
var UPDATE_DICTIONARY = '[Dictionaries] Update Dictionary';
var UPDATE_DICTIONARY_SUCCESS = '[Dictionaries] Update Dictionary Success';
var UPDATE_DICTIONARY_FAIL = '[Dictionaries] Update Dictionary Fail';
var LOAD = '[Dictionaries] Load';
var LOAD_SUCCESS = '[Dictionaries] Load Success';
var LOAD_FAIL = '[Dictionaries] Load Fail';
/**
 * Add Dictionary to Dictionaries list Actions
 */
var AddDictionaryAction = (function () {
    function AddDictionaryAction(payload) {
        this.payload = payload;
        this.type = ADD_DICTIONARY;
    }
    return AddDictionaryAction;
}());

var AddDictionarySuccessAction = (function () {
    function AddDictionarySuccessAction(payload) {
        this.payload = payload;
        this.type = ADD_DICTIONARY_SUCCESS;
    }
    return AddDictionarySuccessAction;
}());

var AddDictionaryFailAction = (function () {
    function AddDictionaryFailAction(payload) {
        this.payload = payload;
        this.type = ADD_DICTIONARY_FAIL;
    }
    return AddDictionaryFailAction;
}());

/**
 * Remove Dictionary from Dictionaries list Actions
 */
var RemoveDictionaryAction = (function () {
    function RemoveDictionaryAction(payload) {
        this.payload = payload;
        this.type = REMOVE_DICTIONARY;
    }
    return RemoveDictionaryAction;
}());

var RemoveDictionarySuccessAction = (function () {
    function RemoveDictionarySuccessAction(payload) {
        this.payload = payload;
        this.type = REMOVE_DICTIONARY_SUCCESS;
    }
    return RemoveDictionarySuccessAction;
}());

var RemoveDictionaryFailAction = (function () {
    function RemoveDictionaryFailAction(payload) {
        this.payload = payload;
        this.type = REMOVE_DICTIONARY_FAIL;
    }
    return RemoveDictionaryFailAction;
}());

/**
 * Update Dictionary Actions
 */
var UpdateDictionaryAction = (function () {
    function UpdateDictionaryAction(payload) {
        this.payload = payload;
        this.type = UPDATE_DICTIONARY;
    }
    return UpdateDictionaryAction;
}());

var UpdateDictionarySuccessAction = (function () {
    function UpdateDictionarySuccessAction(payload) {
        this.payload = payload;
        this.type = UPDATE_DICTIONARY_SUCCESS;
    }
    return UpdateDictionarySuccessAction;
}());

var UpdateDictionaryFailAction = (function () {
    function UpdateDictionaryFailAction(payload) {
        this.payload = payload;
        this.type = UPDATE_DICTIONARY_FAIL;
    }
    return UpdateDictionaryFailAction;
}());

/**
 * Load Dictionaries
 */
var LoadAction = (function () {
    function LoadAction() {
        this.type = LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = LOAD_FAIL;
    }
    return LoadFailAction;
}());

//# sourceMappingURL=list-dictionaries.js.map

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(201);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_db__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__db__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionariesEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var DictionariesEffects = (function () {
    function DictionariesEffects(actions$, db) {
        var _this = this;
        this.actions$ = actions$;
        this.db = db;
        this.openDB$ = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_defer__["defer"])(function () { return _this.db.open(__WEBPACK_IMPORTED_MODULE_13__db__["b" /* DB_NAME */]); });
        /**
         * This effect makes use of the `startWith` operator to trigger
         * the effect immediately on startup.
         */
        this.loadDictionaries$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["a" /* LOAD */])
            .startWith(new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["b" /* LoadAction */]())
            .switchMap(function () {
            return _this.db.query(__WEBPACK_IMPORTED_MODULE_13__db__["c" /* DICTIONARIES_TABLE */])
                .toArray()
                .map(function (dicts) { return new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["c" /* LoadSuccessAction */](dicts); })
                .catch(function (error) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["d" /* LoadFailAction */](error)); });
        });
        this.addDictionary$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["e" /* ADD_DICTIONARY */])
            .map(function (action) { return action.payload; })
            .mergeMap(function (dictionary) {
            return _this.db.insert(__WEBPACK_IMPORTED_MODULE_13__db__["c" /* DICTIONARIES_TABLE */], [dictionary])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["f" /* AddDictionarySuccessAction */](dictionary); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["g" /* AddDictionaryFailAction */](dictionary)); });
        });
        this.removeDictionary$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["h" /* REMOVE_DICTIONARY */])
            .map(function (action) { return action.payload; })
            .mergeMap(function (dictionary) {
            return _this.db.executeWrite(__WEBPACK_IMPORTED_MODULE_13__db__["c" /* DICTIONARIES_TABLE */], 'delete', [dictionary.id])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["i" /* RemoveDictionarySuccessAction */](dictionary); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["j" /* RemoveDictionaryFailAction */](dictionary)); });
        });
        this.updateDictionary$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["k" /* UPDATE_DICTIONARY */])
            .map(function (action) { return action.payload; })
            .mergeMap(function (dictionary) {
            return _this.db.executeWrite(__WEBPACK_IMPORTED_MODULE_13__db__["c" /* DICTIONARIES_TABLE */], 'put', [dictionary])
                .map(function () { return new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["l" /* UpdateDictionarySuccessAction */](dictionary); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_list_dictionaries__["m" /* UpdateDictionaryFailAction */](dictionary)); });
        });
    }
    return DictionariesEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], DictionariesEffects.prototype, "openDB$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], DictionariesEffects.prototype, "loadDictionaries$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], DictionariesEffects.prototype, "addDictionary$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === "function" && _d || Object)
], DictionariesEffects.prototype, "removeDictionary$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"]) === "function" && _e || Object)
], DictionariesEffects.prototype, "updateDictionary$", void 0);
DictionariesEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* Actions */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__ngrx_db__["b" /* Database */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngrx_db__["b" /* Database */]) === "function" && _g || Object])
], DictionariesEffects);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=list-dictionaries.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_dictionaries__ = __webpack_require__(229);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getDictionariesState */
/* unused harmony export getDictionariesLoaded */
/* unused harmony export getDictionariesLoading */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDictionaries; });




var reducers = {
    dictionaries: __WEBPACK_IMPORTED_MODULE_3__list_dictionaries__["a" /* reducer */],
    router: __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__["b" /* routerReducer */],
};
var combinedReducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["d" /* combineReducers */])(reducers);
function reducer(state, action) {
    return combinedReducers(state, action);
}
var getDictionariesState = function (state) { return state.dictionaries; };
var getDictionariesLoaded = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDictionariesState, __WEBPACK_IMPORTED_MODULE_3__list_dictionaries__["b" /* getLoaded */]);
var getDictionariesLoading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDictionariesState, __WEBPACK_IMPORTED_MODULE_3__list_dictionaries__["c" /* getLoading */]);
var getDictionaries = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getDictionariesState, __WEBPACK_IMPORTED_MODULE_3__list_dictionaries__["d" /* getDictionaries */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DictionaryMessageService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DictionaryAction;
(function (DictionaryAction) {
    DictionaryAction[DictionaryAction["ADD"] = 0] = "ADD";
    DictionaryAction[DictionaryAction["UPDATE"] = 1] = "UPDATE";
    DictionaryAction[DictionaryAction["DELETE"] = 2] = "DELETE";
})(DictionaryAction || (DictionaryAction = {}));
/**
 * Simple Pub/Sub service for communication across components
 */
var DictionaryMessageService = (function (_super) {
    __extends(DictionaryMessageService, _super);
    function DictionaryMessageService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DictionaryMessageService;
}(__WEBPACK_IMPORTED_MODULE_1_rxjs__["Subject"]));
DictionaryMessageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], DictionaryMessageService);

//# sourceMappingURL=dictionary-message.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dictionary__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dictionary__ = __webpack_require__(83);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormDictionaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KEY_CODES;
(function (KEY_CODES) {
    KEY_CODES[KEY_CODES["tab"] = 9] = "tab";
    KEY_CODES[KEY_CODES["enter"] = 13] = "enter";
})(KEY_CODES || (KEY_CODES = {}));
/**
 * For simplicity, this component will manage its own state.
 * This means, I'm gonna do horrible mutations.
 */
var FormDictionaryComponent = (function () {
    function FormDictionaryComponent(dictService) {
        this.dictService = dictService;
    }
    FormDictionaryComponent.prototype.ngOnInit = function () {
        // This is necessary since the input is readonly
        this.dictionary = this.dictionaryInput;
        this.addEmptyEntry();
    };
    Object.defineProperty(FormDictionaryComponent.prototype, "enteredEntries", {
        get: function () {
            return this.dictionary.list.length < 2 ? [] : this.dictionary.list.slice(0, this.dictionary.list.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormDictionaryComponent.prototype, "lastEntry", {
        get: function () {
            return this.dictionary.list.length === 0 ? {} : this.dictionary.list[this.dictionary.list.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    FormDictionaryComponent.prototype.onKeydown = function ($event) {
        if ([KEY_CODES.tab, KEY_CODES.enter].includes($event.keyCode)) {
            $event.preventDefault();
            if (this.isLastEntryValid()) {
                this.addEmptyEntry();
                this.newEntryDomainInput.nativeElement.focus();
            }
        }
    };
    FormDictionaryComponent.prototype.deleteEntry = function (idx) {
        if (function (idx) { return 0; }) {
            // I know!!, I'm mutating again. Shame on me
            this.dictionary.list.splice(idx, 1);
        }
    };
    FormDictionaryComponent.prototype.emptyLastEntry = function () {
        this.lastEntry.domain = '';
        this.lastEntry.range = '';
    };
    FormDictionaryComponent.prototype.isDictionaryValid = function () {
        var _this = this;
        var len = this.dictionary.list.length;
        if (len > 0) {
            var lastEntry = this.lastEntry;
            // This validation only checks whether the dictionary
            // has a title, it's not empty, there are no chains nor 
            // cycles and all its entries are populated, except the 
            // case the last one, newEmptyEntry, is completely empty, 
            // in which case it's still valid.
            return this.dictionary.name !== '' &&
                !this.enteredEntries.find(function (entry, idx) {
                    return !_this.isEntryValid(idx) || _this.isChainOrCycle(entry, idx);
                }) &&
                (
                // Either the both values are populated
                (lastEntry.domain !== '' && lastEntry.range !== '') ||
                    // or both values are empty
                    (lastEntry.domain === '' && lastEntry.range === ''));
        }
        else {
            return false;
        }
    };
    FormDictionaryComponent.prototype.sanitizeDictionary = function () {
        this.dictionary.list = this.dictionary.list.filter(function (entry) {
            return entry.domain !== '' && entry.range !== '';
        });
        return this.dictionary;
    };
    FormDictionaryComponent.prototype.isDuplicateDomain = function (entry, idx) {
        return this.dictService.isEntryDuplicateDomain(entry, idx, this.dictionary) ||
            this.dictService.isEntryDuplicateDomainRange(entry, idx, this.dictionary);
    };
    FormDictionaryComponent.prototype.isChainOrCycle = function (entry, idx) {
        return this.dictService.isEntryPartOfChain(entry, idx, this.dictionary) ||
            this.dictService.isEntryPartOfCycle(entry, idx, this.dictionary);
    };
    FormDictionaryComponent.prototype.isLastEntryValid = function () {
        return this.lastEntry.domain !== '' && this.lastEntry.range !== '';
    };
    FormDictionaryComponent.prototype.isEntryValid = function (idx) {
        var entry = this.dictionary.list[idx];
        return entry.domain !== '' && entry.range !== '';
    };
    FormDictionaryComponent.prototype.addEmptyEntry = function () {
        // I know, I'm mutating
        this.dictionary.list.push({
            domain: '',
            range: '',
            id: new Date().getTime()
        });
    };
    return FormDictionaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Input */])('dictionary'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_dictionary__["Dictionary"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_dictionary__["Dictionary"]) === "function" && _a || Object)
], FormDictionaryComponent.prototype, "dictionaryInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('newEntryDomainInput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]) === "function" && _b || Object)
], FormDictionaryComponent.prototype, "newEntryDomainInput", void 0);
FormDictionaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'form-dictionary',
        template: __webpack_require__(315),
        styles: [__webpack_require__(304)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_dictionary__["a" /* DictionaryService */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_dictionary__["a" /* DictionaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dictionary__["a" /* DictionaryService */]) === "function" && _c || Object])
], FormDictionaryComponent);

var _a, _b, _c;
//# sourceMappingURL=form-dictionary.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = create;
/* harmony export (immutable) */ __webpack_exports__["c"] = add;
/* harmony export (immutable) */ __webpack_exports__["d"] = update;
/* harmony export (immutable) */ __webpack_exports__["e"] = remove;
/* unused harmony export size */
/* harmony export (immutable) */ __webpack_exports__["f"] = findFromDomain;
/* unused harmony export findFromRange */
/* unused harmony export getRange */
/* unused harmony export hasDuplicateDomainRange */
/* harmony export (immutable) */ __webpack_exports__["g"] = isEntryDuplicateDomainRange;
/* unused harmony export hasDuplicateDomain */
/* harmony export (immutable) */ __webpack_exports__["h"] = isEntryDuplicateDomain;
/* unused harmony export hasChains */
/* harmony export (immutable) */ __webpack_exports__["i"] = isEntryPartOfChain;
/* unused harmony export hasCycles */
/* harmony export (immutable) */ __webpack_exports__["j"] = isEntryPartOfCycle;
/* Public API: */
function create(name, list) {
    if (list === void 0) { list = []; }
    return {
        id: uuid(),
        name: name,
        list: list.slice()
    };
}
// Will add provided the domain doesn't already exist
function add(domain, range, dictionary) {
    // return !hasDomain(domain, dictionary) ? addEntry(domain, range, dictionary) : dictionary;
    // We'll allow to enter a duplicated domain, since the validation will
    // happen somewhere else
    return addEntry(domain, range, dictionary);
}
// Will update provided the domain already exists
function update(domain, range, dictionary) {
    return hasDomain(domain, dictionary) ? updateEntry(domain, range, dictionary) : dictionary;
}
function remove(domain, dictionary) {
    return hasDomain(domain, dictionary) ? deleteEntry(domain, dictionary) : dictionary;
}
function size(dictiomary) {
    return dictiomary.list.length;
}
function findFromDomain(domain, dictionary) {
    var domainRangeIdx = dictionary.list.findIndex(function (entry) { return entry.domain === domain; });
    return [dictionary.list[domainRangeIdx], domainRangeIdx];
}
function findFromRange(range, dictionary) {
    var domainRangeIdx = dictionary.list.findIndex(function (entry) { return entry.range === range; });
    return [dictionary.list[domainRangeIdx], domainRangeIdx];
}
function getRange(domain, dictionary) {
    var _a = findFromDomain(domain, dictionary), domainRange = _a[0], idx = _a[1];
    return domainRange ? domainRange.range : void 0;
}
/**
 * Duplicate Domains/Ranges:
 *
 * Two rows in the dictionary map to the same value, simply
 * resulting in duplicate content.
 *
 * Example:
 *   domain1 -> range1
 *   domain1 -> range1
 */
function hasDuplicateDomainRange(dictionary) {
    return !!dictionary.list.find(function (entry, idx) {
        return isEntryDuplicateDomainRange(entry, idx, dictionary);
    });
}
function isEntryDuplicateDomainRange(entry, idx, dictionary) {
    return !!dictionary.list.find(function (entry2, idx2) {
        return idx2 !== idx &&
            entry2.domain === entry.domain &&
            entry2.range === entry.range;
    });
}
/**
 * Duplicate Domains with different Ranges:
 *
 * Two rows in the dictionary map to different values, resulting
 * in an ambiguous transformation.
 *
 * Example:
 *   domain1 -> range1
 *   domain1 -> range2
 */
function hasDuplicateDomain(dictionary) {
    return !!dictionary.list.find(function (entry, idx) {
        return isEntryDuplicateDomain(entry, idx, dictionary);
    });
}
function isEntryDuplicateDomain(entry, idx, dictionary) {
    return !!dictionary.list.find(function (entry2, idx2) {
        return idx2 !== idx && entry2.domain === entry.domain;
    });
}
/**
 * Chains
 *
 * A chain structure in the dictionary (a value in Range column
 * also appears in Domain column of another entry), resulting in
 * inconsistent transformation.
 *
 * Example:
 *   domain1 -> range1
 *   range1 -> range2
 */
function hasChains(dictionary) {
    return !!dictionary.list.find(function (entry, idx) {
        return isEntryPartOfChain(entry, idx, dictionary);
    });
}
function isEntryPartOfChain(entry, idx, dictionary) {
    var _a = findFromDomain(entry.range, dictionary), chainEnd = _a[0], idx2 = _a[1];
    var _b = findFromRange(entry.domain, dictionary), chainStart = _b[0], idx3 = _b[1];
    return (!!chainEnd && idx2 !== idx) ||
        (!!chainStart && idx3 !== idx);
}
/**
 * Cycles:
 *
 * Two or more rows in a dictionary result in cycles, resulting
 * in a never-ending transformation.
 *
 * Example:
 *   domain1 -> range1
 *   range1 -> domain1
 *
 * It doesn't check long cycles (TODO):
 *   domain1 -> range1
 *   range1 -> domain2
 *   domain2 -> range2
 *   range2 -> domain1
 */
function hasCycles(dictionary) {
    return !!dictionary.list.find(function (entry, idx) {
        return isEntryPartOfCycle(entry, idx, dictionary);
    });
}
function isEntryPartOfCycle(entry, idx, dictionary) {
    var _a = findFromDomain(entry.range, dictionary), chainEnd = _a[0], idx2 = _a[1];
    return !!chainEnd && idx2 !== idx && entry.domain === chainEnd.range && entry.range === chainEnd.domain;
}
/* Private functions: */
var uuid = function () { return new Date().getTime(); };
function addEntry(domain, range, dictionary) {
    var list = dictionary.list.slice();
    list.push({ domain: domain, range: range, id: uuid() });
    return Object.assign({}, dictionary, { list: list });
}
function updateEntry(domain, range, dictionary) {
    var list = dictionary.list.slice();
    var _a = findFromDomain(domain, dictionary), domainRange = _a[0], idx = _a[1];
    list[idx].range = range;
    return Object.assign({}, dictionary, { list: list });
}
function deleteEntry(domain, dictionary) {
    var list = dictionary.list.slice();
    var _a = findFromDomain(domain, dictionary), domainRange = _a[0], idx = _a[1];
    list.splice(idx, 1);
    return Object.assign({}, dictionary, { list: list });
}
function hasDomain(domain, dictionary) {
    var domainRange = findFromDomain(domain, dictionary)[0];
    return !!domainRange;
}
//# sourceMappingURL=dictionary.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_dictionary__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Simple ng2 wrapper for Dictionary model
 */
var DictionaryService = (function () {
    function DictionaryService() {
    }
    DictionaryService.prototype.create = function (name, list) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["b" /* create */])(name, list);
    };
    DictionaryService.prototype.add = function (domain, range, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["c" /* add */])(domain, range, dictionary);
    };
    DictionaryService.prototype.update = function (domain, range, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["d" /* update */])(domain, range, dictionary);
    };
    DictionaryService.prototype.remove = function (domain, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["e" /* remove */])(domain, dictionary);
    };
    DictionaryService.prototype.findFromDomain = function (domain, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["f" /* findFromDomain */])(domain, dictionary);
    };
    DictionaryService.prototype.findFromRange = function (range, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["f" /* findFromDomain */])(range, dictionary);
    };
    DictionaryService.prototype.isEntryDuplicateDomainRange = function (entry, idx, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["g" /* isEntryDuplicateDomainRange */])(entry, idx, dictionary);
    };
    DictionaryService.prototype.isEntryDuplicateDomain = function (entry, idx, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["h" /* isEntryDuplicateDomain */])(entry, idx, dictionary);
    };
    DictionaryService.prototype.isEntryPartOfChain = function (entry, idx, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["i" /* isEntryPartOfChain */])(entry, idx, dictionary);
    };
    DictionaryService.prototype.isEntryPartOfCycle = function (entry, idx, dictionary) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__models_dictionary__["j" /* isEntryPartOfCycle */])(entry, idx, dictionary);
    };
    return DictionaryService;
}());
DictionaryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], DictionaryService);

//# sourceMappingURL=dictionary.js.map

/***/ })

},[568]);
//# sourceMappingURL=main.bundle.js.map