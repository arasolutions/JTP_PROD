webpackJsonp([7],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appSettings; });
var appSettings = {
    LANGUAGE_LIST: [{ 'code': 'fr', 'label': 'Francais' },
        { 'code': 'en', 'label': 'English' },
        { 'code': 'es', 'label': 'Español' },
        // { 'code': 'it', 'label': 'Italiano' },
        // { 'code': 'de', 'label': 'Deutsch' },
        { 'code': 'pt', 'label': 'Português' }
        // { 'code': 'vi', 'label': 'Tiếng Việt' },
        // { 'code': 'ru', 'label': 'Русский' },
        // { 'code': 'zh', 'label': '中文' },
        // { 'code': 'ar', 'label': 'العربية' },
        // { 'code': 'th', 'label': 'ภาษาไทย' }
    ],
    //https://github.com/shadiabuhilal/lang-list/blob/master/data/languages.json
    PRODUCTION: false,
    LIMIT_Q: 10,
    LANGUAGE_DEFAULT: 'fr',
    CAT_LIST: [{
            'id': 134,
            'color': 'positive',
            'bg': 'positive-bg',
            'label': 'A vie',
            'img': 'target.png'
        }, {
            'id': 138,
            'color': 'positive',
            'bg': 'positive-bg',
            'label': 'Actualité',
            'img': 'newspaper.png'
        }, {
            'id': 137,
            'color': 'royal',
            'bg': 'royal-bg',
            'label': '+18 (Trash)',
            'img': 'cancel.png'
        }, {
            'id': 135,
            'color': 'balanced',
            'bg': 'balanced-bg',
            'label': 'Corps humain',
            'img': 'intestines.png'
        }, {
            'id': 140,
            'color': 'calm',
            'bg': 'calm-bg',
            'label': 'Marque',
            'img': 'megaphone.png'
        }, {
            'id': 141,
            'color': 'energized',
            'bg': 'dark energized-bg',
            'label': 'Personnage',
            'img': 'people.png'
        }, {
            'id': 142,
            'color': 'positive',
            'bg': 'positive-bg',
            'label': 'Série / TV',
            'img': 'technology.png'
        }, {
            'id': 136,
            'color': 'energized',
            'bg': 'dark energized-bg',
            'label': 'Situation',
            'img': 'competition.png'
        }, {
            'id': 139,
            'color': 'calm',
            'bg': 'calm-bg',
            'label': 'Sport',
            'img': 'football.png'
        }, {
            'id': 133,
            'color': 'royal',
            'bg': 'royal-bg',
            'label': 'Autre',
            'img': 'paper-plane.png'
        }]
};
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cat/cat.module": [
		345,
		6
	],
	"../pages/check/check.module": [
		346,
		5
	],
	"../pages/lang/lang.module": [
		347,
		4
	],
	"../pages/modal-add/modal-add.module": [
		348,
		3
	],
	"../pages/settings/settings.module": [
		349,
		2
	],
	"../pages/tutorial/tutorial.module": [
		350,
		1
	],
	"../pages/welcome/welcome.module": [
		351,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 184;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://www.jeu-tu-preferes.fr/api';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        //return this.http.get('assets/json/initGame.json');
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pub; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the PubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Pub = (function () {
    function Pub(settings, http, plt, admobFree) {
        this.settings = settings;
        this.http = http;
        this.plt = plt;
        this.admobFree = admobFree;
        this.firstPubDisplayed = false;
    }
    Pub.prototype.initPub = function (firstPub) {
        var _this = this;
        if (firstPub === void 0) { firstPub = false; }
        if (!firstPub || (firstPub && !this.firstPubDisplayed)) {
            this.firstPubDisplayed = true;
            if (this.settings.allSettings.nbLaunch > 1) {
                setTimeout(function () {
                    var interConfig = {
                        id: 'ca-app-pub-3956495131739396/8376792863',
                        isTesting: false,
                        autoShow: true
                    };
                    if (_this.plt.is('android')) {
                        interConfig.id = 'ca-app-pub-3956495131739396/1272328460';
                    }
                    _this.admobFree.interstitial.config(interConfig);
                    _this.admobFree.interstitial.prepare()
                        .then(function () {
                        //alert('interstitial');
                        //this.admobFree.interstitial.show().then(() => { /*alert('interstitialOK');*/ }).catch(e => alert(e));
                    })
                        .catch(function (e) { return console.log(e); });
                }, 5000);
            }
        }
    };
    Pub = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_admob_free__["a" /* AdMobFree */]])
    ], Pub);
    return Pub;
}());

//# sourceMappingURL=pub.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_flurry_analytics__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the StatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Stat = (function () {
    function Stat(http, flurryAnalytics, plt) {
        this.http = http;
        this.flurryAnalytics = flurryAnalytics;
        this.plt = plt;
    }
    Stat.prototype.init = function () {
        var config = {
            appKey: 'VGJYH9MN8CP862JPQ9D2',
            reportSessionsOnClose: true,
            enableLogging: true
        };
        if (this.plt.is('android')) {
            config.appKey = 'DZ6XGW24NBJ54CPXXGMN';
        }
        this.fa = this.flurryAnalytics.create(config);
    };
    Stat.prototype.track = function (event) {
        this.fa.logEvent(event)
            .then(function () { return console.log('Logged an event!'); })
            .catch(function (e) { return console.log('Error logging the event', e); });
    };
    Stat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_flurry_analytics__["a" /* FlurryAnalytics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_flurry_analytics__["a" /* FlurryAnalytics */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]) === "function" && _c || Object])
    ], Stat);
    return Stat;
    var _a, _b, _c;
}());

//# sourceMappingURL=stat.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_database__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trad_trad__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pub_pub__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ga_ga__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stat_stat__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__database_database__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__trad_trad__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__pub_pub__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__ga_ga__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__stat_stat__["a"]; });








//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CheckPage; });
/* unused harmony export HomePage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return WelcomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatPage; });
// The page the user lands on after opening the app and without a session
var CheckPage = 'CheckPage';
var HomePage = 'HomePage';
var WelcomePage = 'WelcomePage';
var CatPage = 'CatPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_flurry_analytics__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_storage__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_countup_js_angular2__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_countup_js_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_countup_js_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_providers__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(344);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_17__providers_providers__["e" /* Settings */](storage, {
        nbLaunch: 0,
        id_max: 0
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cat/cat.module#CatPageModule', name: 'CatPage', segment: 'cat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/check/check.module#CheckPageModule', name: 'CheckPage', segment: 'check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lang/lang.module#LangPageModule', name: 'LangPage', segment: 'lang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-add/modal-add.module#ModalAddPageModule', name: 'ModalAddPage', segment: 'modal-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__jtpdb'
                    //driverOrder: ['localstorage' ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_countup_js_angular2__["CountUpModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_17__providers_providers__["b" /* Database */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__["a" /* Globalization */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_admob_free__["a" /* AdMobFree */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_flurry_analytics__["a" /* FlurryAnalytics */],
                { provide: __WEBPACK_IMPORTED_MODULE_17__providers_providers__["e" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_12__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_providers__["g" /* Trad */],
                __WEBPACK_IMPORTED_MODULE_17__providers_providers__["d" /* Pub */],
                __WEBPACK_IMPORTED_MODULE_17__providers_providers__["c" /* Ga */],
                __WEBPACK_IMPORTED_MODULE_17__providers_providers__["f" /* Stat */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Database; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_settings__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pub_pub__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stat_stat__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lokijs__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lokijs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lokijs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lokijs_src_loki_indexed_adapter__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lokijs_src_loki_indexed_adapter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lokijs_src_loki_indexed_adapter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Database = (function () {
    function Database(stat, api, settings, pub) {
        this.stat = stat;
        this.api = api;
        this.settings = settings;
        this.pub = pub;
        this.calc = function (item) {
            item.pc1 = Math.round(item.a * 100 / (item.a + item.b));
            item.pc2 = 100 - item.pc1;
            if (item.l > 10) {
                item.pcl = Math.round(item.l * 100 / (item.l + item.u));
            }
            return item;
        };
        this.asynTaskRunning = false;
        this.cpt = 0;
    }
    Database.prototype.loadDB = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var adapter = new __WEBPACK_IMPORTED_MODULE_8_lokijs_src_loki_indexed_adapter__();
            _this.db = new __WEBPACK_IMPORTED_MODULE_7_lokijs__('JTP.db', {
                autosave: true,
                //autoload: true,
                autosaveInterval: 4 * 1000,
                adapter: adapter
            });
            _this.db.loadDatabase({}, function (err) {
                if (err) {
                    console.log("error : " + err);
                    return false;
                }
                else {
                    _this.jtp = _this.db.getCollection('JTP');
                    //return true;
                    resolve();
                }
            });
        });
        return promise;
    };
    Database.prototype.initDB = function (lang) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var param = [];
            param['lang'] = lang;
            _this.settings.setValue('id_max', 0);
            var seq = _this.api.get('initGame', param).share();
            seq.subscribe(function (res) {
                var jtp = _this.db.getCollection('JTP');
                if (jtp) {
                    _this.db.removeCollection('JTP');
                }
                _this.jtp = _this.db.addCollection('JTP', { 'unique': 'i' });
                _this.jtp.insert(res.items.map(_this.calc));
                resolve(true);
            }, function (err) {
                console.error('ERROR', err);
            });
        });
        return promise;
    };
    Database.prototype.startAsynTasks = function (forceReset) {
        if (forceReset === void 0) { forceReset = false; }
        this.lang = this.settings.allSettings.language;
        this.id_max = this.settings.allSettings.id_max;
        if (!this.asynTaskRunning || forceReset) {
            this.getMoreQ();
            this.getStat();
        }
        this.asynTaskRunning = true;
    };
    Database.prototype.getMoreQ = function () {
        var _this = this;
        setTimeout(function () {
            var param = [];
            param['lang'] = _this.lang;
            param['id_max'] = _this.id_max;
            var seq = _this.api.get('moreQ', param).share();
            seq.subscribe(function (res) {
                //premier appel
                if (res.fi !== "") {
                    _this.id_max = res.fi;
                    _this.settings.setValue('id_max', res.fi);
                }
                else if (res.items.length > 0) {
                    for (var i = 0; i < res.items.length; i++) {
                        if (!_this.jtp.by('i', res.items[i].i)) {
                            _this.jtp.insert(_this.calc(res.items[i]));
                        }
                    }
                    _this.id_max = res.items[res.items.length - 1].i;
                    _this.settings.setValue('id_max', res.items[res.items.length - 1].i);
                }
            }, function (err) {
                console.error('ERROR', err);
            });
            _this.getMoreQ();
        }, 25000);
    };
    Database.prototype.getStat = function () {
        var _this = this;
        //un refresh au bout de 30s de jeu
        setTimeout(function () {
            var param = [];
            param['lang'] = _this.lang;
            var seq = _this.api.get('stat', param).share();
            seq.subscribe(function (res) {
                if (res.items.length > 100) {
                    //mise à jour de tous les états à 2
                    _this.jtp.findAndUpdate({}, function (obj) { obj.e = 2; });
                    for (var i = 0; i < res.items.length; i++) {
                        var item = _this.jtp.by('i', res.items[i].i);
                        if (item) {
                            item.a = res.items[i].a;
                            item.b = res.items[i].b;
                            item.l = res.items[i].l;
                            item.u = res.items[i].u;
                            item.e = res.items[i].e;
                            _this.jtp.update(_this.calc(item));
                        }
                    }
                    // surrpimer tous les état à 2
                    _this.jtp.findAndRemove({ 'e': 2 });
                }
            }, function (err) {
                console.error('ERROR', err);
            });
        }, 35000);
    };
    Database.prototype.insert = function (item) {
        this.jtp.insert(item);
    };
    Database.prototype.getQ = function (start, end) {
        return this.sessionQ.slice(start, end);
    };
    Database.prototype.capitalizeFirstLetter = function (string) {
        return string[0].toUpperCase() + string.slice(1);
    };
    ;
    Database.prototype.createSession = function (param) {
        //let trashID = 0;
        //if (!this.settings.allSettings.trash) {
        var random = true;
        var trashID = __WEBPACK_IMPORTED_MODULE_4__app_app_settings__["a" /* appSettings */].CAT_LIST[2].id;
        //}
        if (param && param.search) {
            this.sessionQ = this.jtp.chain().find({
                '$and': [{
                        '$or': [{
                                'r': {
                                    '$containsAny': [param.search.toLowerCase(), param.search.toUpperCase(), this.capitalizeFirstLetter(param.search.toLowerCase())]
                                }
                            }, {
                                's': {
                                    '$containsAny': [param.search.toLowerCase(), param.search.toUpperCase(), this.capitalizeFirstLetter(param.search.toLowerCase())]
                                }
                            }]
                    }, {
                        'c': {
                            '$ne': trashID
                        }
                    }, {
                        'answered': {
                            '$ne': 1
                        }
                    }, {
                        'answered': {
                            '$ne': 2
                        }
                    }]
            }).data();
        }
        else if (param && param.typePage) {
            //1 : plus aimées
            //2 : plus serrées
            //3 : que j'aime
            //4 : Mes JTP
            this.stat.track(this.settings.allSettings.language + ' typePage ' + param.typePage);
            if (param.typePage === 1) {
                this.sessionQ = this.jtp.chain().find({
                    '$and': [{
                            'pcl': {
                                '$gt': 70
                            }
                        }, {
                            'c': {
                                '$ne': trashID
                            }
                        }, {
                            'answered': {
                                '$ne': 1
                            }
                        }, {
                            'answered': {
                                '$ne': 2
                            }
                        }]
                }).data();
            }
            else if (param.typePage === 2) {
                this.sessionQ = this.jtp.chain().find({
                    '$and': [{
                            'pc1': {
                                '$between': [40, 60]
                            }
                        }, {
                            'c': {
                                '$ne': trashID
                            }
                        }, {
                            'answered': {
                                '$ne': 1
                            }
                        }, {
                            'answered': {
                                '$ne': 2
                            }
                        }]
                }).data();
            }
            else if (param.typePage === 3) {
                this.sessionQ = this.jtp.chain().find({
                    '$and': [{
                            'y': {
                                '$eq': true
                            }
                        }, {
                            'c': {
                                '$ne': trashID
                            }
                        }]
                }).data();
            }
            else if (param.typePage === 4) {
                var addArr = this.settings.allSettings.addArr || [];
                /*this.sessionQ = [];
                for (let i = 0 ; i < addArr.length ; i++){
                  this.sessionQ.push(this.jtp.by('i',addArr[i]));
                }*/
                random = false;
                //this.sessionQ = this.jtp.chain().find({ 'i': { '$in': addArr } }).simplesort('i').data();
                this.sessionQ = this.jtp.find({ 'i': { '$in': addArr } }).reverse();
            }
        }
        else if (param && param.catId) {
            this.stat.track(this.settings.allSettings.language + ' catId ' + param.catId);
            this.sessionQ = this.jtp.chain().find({
                '$and': [{
                        'c': {
                            '$eq': param.catId
                        }
                    }, {
                        'answered': {
                            '$ne': 1
                        }
                    }, {
                        'answered': {
                            '$ne': 2
                        }
                    }]
            }).data();
        }
        else {
            this.stat.track(this.settings.allSettings.language + ' random');
            this.sessionQ = this.jtp.chain().find({
                '$and': [{
                        'answered': {
                            '$ne': 1
                        }
                    }, {
                        'answered': {
                            '$ne': 2
                        }
                    }, {
                        'c': {
                            '$ne': trashID
                        }
                    }]
            }).data();
        }
        if (random) {
            this.randomize(this.sessionQ);
        }
    };
    Database.prototype.randomize = function (a) {
        var b, c, d;
        c = a.length;
        while (c) {
            b = Math.random() * c-- | 0;
            d = a[c];
            a[c] = a[b];
            a[b] = d;
        }
    };
    Database.prototype.update = function (item, rep) {
        if (rep === void 0) { rep = false; }
        if (rep) {
            this.cpt++;
            if (this.cpt % 30 === 0) {
                this.pub.initPub();
            }
        }
        this.jtp.update(item);
    };
    Database = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__stat_stat__["a" /* Stat */], __WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_5__pub_pub__["a" /* Pub */]])
    ], Database);
    return Database;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trad; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the TradProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Trad = (function () {
    function Trad(settings, translate, http) {
        this.settings = settings;
        this.translate = translate;
        this.http = http;
        this.CAT_LIST = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* appSettings */].CAT_LIST;
        this.label = {};
        //this.init();
    }
    Trad.prototype.init = function () {
        var _this = this;
        var catIdList = [];
        catIdList['fr'] = [134, 138, 137, 135, 140, 141, 142, 136, 139, 133];
        catIdList['en'] = [21690, 21694, 21693, 21691, 21696, 21697, 21698, 21692, 21695, 21689];
        catIdList['es'] = [24793, 24797, 24796, 24794, 24799, 24800, 24801, 24795, 24798, 24792];
        catIdList['pt'] = [24803, 24807, 24806, 24804, 24809, 24810, 24811, 24805, 24808, 24802];
        this.translate.get('GENERAL_OK').subscribe(function (res) { _this.label.GENERAL_OK = res; });
        this.translate.get('GENERAL_ANNULER').subscribe(function (res) { _this.label.GENERAL_ANNULER = res; });
        this.translate.get('GENERAL_ERREUR').subscribe(function (res) { _this.label.GENERAL_ERREUR = res; });
        this.translate.get('MAIN_SIGNALER').subscribe(function (res) { _this.label.MAIN_SIGNALER = res; });
        this.translate.get('MAIN_SIGNALER_1').subscribe(function (res) { _this.label.MAIN_SIGNALER_1 = res; });
        this.translate.get('MAIN_SIGNALER_2').subscribe(function (res) { _this.label.MAIN_SIGNALER_2 = res; });
        this.translate.get('MAIN_SIGNALER_3').subscribe(function (res) { _this.label.MAIN_SIGNALER_3 = res; });
        this.translate.get('MODAL_ADD_HINT_LIST').subscribe(function (res) { _this.label.MODAL_ADD_HINT_LIST = res; });
        this.translate.get('MODAL_ADD_FORM_ERROR').subscribe(function (res) { _this.label.MODAL_ADD_FORM_ERROR = res; });
        this.translate.get('MODAL_ADD_FORM_SEND').subscribe(function (res) { _this.label.MODAL_ADD_FORM_SEND = res; });
        this.translate.get('MODAL_ADD_ANOTHER').subscribe(function (res) { _this.label.MODAL_ADD_ANOTHER = res; });
        this.translate.get('MODAL_ADD_NO_NETWORK').subscribe(function (res) { _this.label.MODAL_ADD_NO_NETWORK = res; });
        this.translate.get('MODAL_ADD_SEARCH_DOUBLE').subscribe(function (res) { _this.label.MODAL_ADD_SEARCH_DOUBLE = res; });
        this.translate.get('MAIN_HINT_LIST').subscribe(function (res) { _this.label.MAIN_HINT_LIST = res; });
        this.translate.get('MAIN_URL_SHARE').subscribe(function (res) { _this.label.MAIN_URL_SHARE = res; });
        this.translate.get('MAIN_SHARE_DEBUT').subscribe(function (res) { _this.label.MAIN_SHARE_DEBUT = res; });
        this.translate.get('MAIN_SHARE_FIN').subscribe(function (res) { _this.label.MAIN_SHARE_FIN = res; });
        this.translate.get('MAIN_ATTENTE').subscribe(function (res) { _this.label.MAIN_ATTENTE = res; });
        var _loop_1 = function (i) {
            this_1.CAT_LIST[i].id = catIdList[this_1.settings.allSettings.language][i];
            this_1.translate.get('CAT_' + i).subscribe(function (res) {
                _this.CAT_LIST[i].label = res;
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.CAT_LIST.length; i++) {
            _loop_1(i);
        }
    };
    Trad = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* Settings */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Trad);
    return Trad;
}());

//# sourceMappingURL=trad.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ga; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_google_analytics__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the GaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Ga = (function () {
    function Ga(ga) {
        this.ga = ga;
    }
    Ga.prototype.init = function () {
        this.ga.startTrackerWithId('UA-82079763-1', 15)
            .then(function () {
            console.log('Google analytics is ready now');
            //this.ga.trackView('test');
        })
            .catch(function (e) { return console.log('Error starting GoogleAnalytics', e); });
    };
    Ga.prototype.track = function (label) {
        this.ga.trackView(label);
    };
    Ga = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
    ], Ga);
    return Ga;
}());

//# sourceMappingURL=ga.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pages__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(translate, platform) {
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_pages__["b" /* CheckPage */];
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () { });
        });
        this.previous = {};
        this.initTranslate();
        this.pages = [
            { title: 'MENU_ACCUEIL', component: 'WelcomePage', icon: 'home', color: 'primary' },
            { title: 'MENU_CAT', component: 'CatPage', icon: 'list', color: 'secondary' },
            { title: 'MENU_MY', component: 'WelcomePage', param: { typePage: 4 }, icon: 'create', color: 'secondary' },
            { title: 'MENU_FAV', component: 'WelcomePage', param: { typePage: 3 }, icon: 'ios-thumbs-up', color: 'secondary' },
            { title: 'MENU_LIKE', component: 'WelcomePage', param: { typePage: 1 }, icon: 'ios-flash', color: 'secondary' },
            { title: 'MENU_TIGHT', component: 'WelcomePage', param: { typePage: 2 }, icon: 'code', color: 'secondary' },
            { title: 'MENU_PARAM', component: 'SettingsPage', icon: 'settings', color: 'secondary' }
        ];
        this.previous = this.pages[0];
    }
    MyApp.prototype.initTranslate = function () {
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('fr');
        //Je ne devrai pas avoir à faire ca mais c'est le seul moyen de tout faire fonctionner
        this.translate.use('es');
        this.translate.use('en');
        this.translate.use('pt');
    };
    MyApp.prototype.openPage = function (page) {
        if (this.previous) {
            this.previous.color = "secondary";
        }
        page.color = "primary";
        this.previous = page;
        this.nav.setRoot(page.component, page.param);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-menu [content]=\"content\">\n    <ion-header>\n      <ion-toolbar color=\"dark\">\n        <ion-title>{{ 'MENU_TITLE' | translate }}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class=\"defaultBg\">\n      <ion-list>\n      <ion-item [color]=p.color menuClose *ngFor=\"let p of pages\" (tap)=\"openPage(p)\">\n        <ion-icon [name]=p.icon item-start color=\"danger\"></ion-icon>\n        {{p.title | translate }}\n      </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(138);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '__settingsJTP';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ })

},[234]);
//# sourceMappingURL=main.js.map