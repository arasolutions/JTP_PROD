webpackJsonp([5],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPageModule", function() { return CheckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__check__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckPageModule = (function () {
    function CheckPageModule() {
    }
    CheckPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__check__["a" /* CheckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__check__["a" /* CheckPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__check__["a" /* CheckPage */]
            ]
        })
    ], CheckPageModule);
    return CheckPageModule;
}());

//# sourceMappingURL=check.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_settings__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the CheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckPage = (function () {
    function CheckPage(stat, ga, database, splashScreen, globalization, trad, translate, navCtrl, navParams, settings) {
        this.stat = stat;
        this.ga = ga;
        this.database = database;
        this.splashScreen = splashScreen;
        this.globalization = globalization;
        this.trad = trad;
        this.translate = translate;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.ga.init();
        this.stat.init();
    }
    ;
    CheckPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.settings.load().then(function () {
            //attendre les settings avant de charger la base (lang et id_max requis)
            _this.database.loadDB().then(function () {
                //Premier lancement
                if (_this.settings.allSettings.nbLaunch < 2) {
                    //détection de la langue
                    if (window.cordova) {
                        _this.globalization.getPreferredLanguage().then(function (result) {
                            var res = result.value.split("-");
                            //verif si existe dans liste des langues (interne)
                            _this.checkLanguage(res[0]);
                            //alert(result.value + ' ' + res[0]);
                            _this.redirection('LangPage');
                        });
                    }
                    else {
                        _this.checkLanguage(__WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
                        _this.redirection('LangPage');
                    }
                }
                else {
                    _this.redirection('WelcomePage');
                }
            });
            _this.settings.setValue('nbLaunch', _this.settings.allSettings.nbLaunch + 1);
        });
    };
    CheckPage.prototype.checkLanguage = function (lang) {
        var founded = false;
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* appSettings */].LANGUAGE_LIST.length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* appSettings */].LANGUAGE_LIST[i].code === lang) {
                this.settings.setValue('language', lang);
                founded = true;
                break;
            }
        }
        if (!founded) {
            this.settings.setValue('language', __WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* appSettings */].LANGUAGE_DEFAULT);
        }
    };
    CheckPage.prototype.redirection = function (page) {
        this.translate.use(this.settings.allSettings.language);
        this.trad.init();
        this.splashScreen.hide();
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    CheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-check',template:/*ion-inline-start:"/Users/damien/app/JTP/src/pages/check/check.html"*/'<!--\n  Generated template for the CheckPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>check</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/damien/app/JTP/src/pages/check/check.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_providers__["f" /* Stat */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* Ga */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Database */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__["a" /* Globalization */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* Trad */], __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* Settings */]])
    ], CheckPage);
    return CheckPage;
}());

//# sourceMappingURL=check.js.map

/***/ })

});
//# sourceMappingURL=5.js.map