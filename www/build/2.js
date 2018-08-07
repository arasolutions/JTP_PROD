webpackJsonp([2],{

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* SettingsPage */]
            ]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_settings__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = (function () {
    function SettingsPage(loadingCtrl, navCtrl, settings, navParams, translate, trad, database) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.settings = settings;
        this.navParams = navParams;
        this.translate = translate;
        this.trad = trad;
        this.database = database;
        this.langList = __WEBPACK_IMPORTED_MODULE_3__app_app_settings__["a" /* appSettings */].LANGUAGE_LIST;
        this.LABEL = trad.label;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        this.langInput = this.settings.allSettings.language;
        this.gender = this.settings.allSettings.gender;
        //this.trash = this.settings.allSettings.trash;
        this.age = this.settings.allSettings.age;
    };
    SettingsPage.prototype.onSelectLangChange = function (selectedValue) {
        var _this = this;
        this.settings.setValue('language', selectedValue);
        this.translate.use(selectedValue);
        this.trad.init();
        //Chargement des données
        var loading = this.loadingCtrl.create({
            content: this.LABEL.MAIN_ATTENTE
        });
        loading.present();
        this.database.initDB(selectedValue).then(function () {
            loading.dismiss();
            _this.database.startAsynTasks(true);
        });
    };
    SettingsPage.prototype.onSelectGenderChange = function (selectedValue) {
        this.settings.setValue('gender', selectedValue);
    };
    SettingsPage.prototype.onSelectAgeChange = function (selectedValue) {
        this.settings.setValue('age', selectedValue);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/damien/app/JTP/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar color="dark">\n\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    <ion-title>{{\'PARAM_TITLE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="false" class="defaultBg">\n  <ion-list>\n    <ion-item class="">\n      <ion-label>{{\'LANG_FORM_LANG\' | translate}}</ion-label>\n      <ion-select [(ngModel)]="langInput" okText="OK" cancelText="Cancel" (ionChange)="onSelectLangChange($event)">\n        <ion-option *ngFor="let lang of langList" [value]="lang.code">{{lang.label}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <!-- <ion-item class="">\n      <ion-icon name="md-close-circle" item-start color="danger"></ion-icon>\n      <ion-label>{{\'LANG_FORM2_TRASH\' | translate}}</ion-label>\n      <ion-toggle [(ngModel)]="trash" (ionChange)="onTrashToggleChange($event)"></ion-toggle>\n    </ion-item> -->\n    <ion-item class="">\n      <ion-label>{{\'LANG_FORM2_GENDER\' | translate}}</ion-label>\n      <ion-select [(ngModel)]="gender" okText={{LABEL.GENERAL_OK}} cancelText={{LABEL.GENERAL_ANNULER}} (ionChange)="onSelectGenderChange($event)">\n        <ion-option value="1">{{\'LANG_FORM2_GENDER_1\' | translate}}</ion-option>\n        <ion-option value="2">{{\'LANG_FORM2_GENDER_2\' | translate}}</ion-option>\n        <ion-option value="3">{{\'LANG_FORM2_GENDER_3\' | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item class="">\n      <ion-label>{{\'LANG_FORM2_AGE\' | translate}}</ion-label>\n      <ion-select [(ngModel)]="age" okText={{LABEL.GENERAL_OK}} cancelText={{LABEL.GENERAL_ANNULER}} (ionChange)="onSelectAgeChange($event)">\n        <ion-option value="1">10-15</ion-option>\n        <ion-option value="2">15-20</ion-option>\n        <ion-option value="3">20-25</ion-option>\n        <ion-option value="4">25-35</ion-option>\n        <ion-option value="5">35-1337</ion-option>\n        <ion-option value="6">{{\'LANG_FORM2_AGE_LOL\' | translate}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/damien/app/JTP/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["e" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Trad */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* Database */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=2.js.map