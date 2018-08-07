webpackJsonp([3],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAddPageModule", function() { return ModalAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_add__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalAddPageModule = (function () {
    function ModalAddPageModule() {
    }
    ModalAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_add__["a" /* ModalAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_add__["a" /* ModalAddPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild(),
            ],
        })
    ], ModalAddPageModule);
    return ModalAddPageModule;
}());

//# sourceMappingURL=modal-add.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_providers__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalAddPage = (function () {
    function ModalAddPage(loadingCtrl, database, ga, viewCtrl, settings, api, trad, alertCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.ga = ga;
        this.viewCtrl = viewCtrl;
        this.settings = settings;
        this.api = api;
        this.trad = trad;
        this.alertCtrl = alertCtrl;
        this.color = function (item) {
            //item.style="color:black";
            if (item.pourcentage > 79) {
                item.style = { 'color': 'red' };
            }
            else if (item.pourcentage > 39) {
                item.style = { 'color': '#ffb300' };
            }
            return item;
        };
        this.CAT_LIST = trad.CAT_LIST;
        this.LABEL = trad.label;
        this.form = {};
        this.form.hint = this.trad.label.MODAL_ADD_HINT_LIST[Math.floor(Math.random() * this.trad.label.MODAL_ADD_HINT_LIST.length)];
        this.form.pseudo = this.settings.allSettings.pseudo;
        this.form.email = this.settings.allSettings.email;
        this.form.lang = this.settings.allSettings.language;
        this.form.noFault = {};
        this.form.noFault = false;
        this.form.noDouble = false;
        this.doublons = [];
        this.ga.track(this.form.lang + ' redac JTP');
    }
    ModalAddPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalAddPage.prototype.submitForm = function () {
        var _this = this;
        if (!this.form.prop1 || !this.form.prop2 || this.form.prop1.trim() === '' || this.form.prop2.trim() === '' || !this.form.cat) {
            this.presentAlertError();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: this.LABEL.MODAL_ADD_SEARCH_DOUBLE
            });
            loading_1.present();
            var param = {};
            param.lang = this.form.lang;
            param.text = this.form.prop1 + ' ' + this.form.prop2;
            var seq = this.api.post('doublons', param).share();
            seq.subscribe(function (res) {
                loading_1.dismiss();
                _this.doublons = res.items.map(_this.color);
                _this.form.ready = true;
                _this.form.noFault = false;
                _this.form.noDouble = false;
                if (_this.doublons.length === 0) {
                    _this.form.noDouble = true;
                }
            }, function (err) {
                loading_1.dismiss();
                _this.presentAlertKO();
            });
        }
    };
    ModalAddPage.prototype.submitForm2 = function () {
        var _this = this;
        this.settings.setValue('pseudo', this.form.pseudo);
        this.settings.setValue('email', this.form.email);
        this.ga.track(this.form.lang + ' post JTP');
        this.form.prop1 = this.form.prop1.trim();
        this.form.prop2 = this.form.prop2.trim();
        var seq = this.api.post('jtp', this.form).share();
        seq.subscribe(function (res) {
            var addArr = _this.settings.allSettings.addArr || [];
            addArr.push(res.id);
            _this.settings.setValue('addArr', addArr);
            var item = { i: res.id, a: 0, b: 0, c: _this.form.cat, e: 1, l: 0, u: 0, r: _this.form.prop1, s: _this.form.prop2 };
            _this.database.insert(item);
            _this.presentAlertOK();
        }, function (err) {
            _this.presentAlertKO();
        });
    };
    ModalAddPage.prototype.presentAlertError = function () {
        var alert = this.alertCtrl.create({
            title: this.trad.label.GENERAL_ERREUR,
            subTitle: this.trad.label.MODAL_ADD_FORM_ERROR,
            buttons: [this.trad.label.GENERAL_OK]
        });
        alert.present();
    };
    ModalAddPage.prototype.presentAlertOK = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: this.trad.label.MODAL_ADD_FORM_SEND,
            buttons: [{
                    text: this.trad.label.MODAL_ADD_ANOTHER,
                    handler: function (data) {
                        _this.form.prop1 = '';
                        _this.form.prop2 = '';
                        _this.form.ready = false;
                    }
                },
                {
                    text: this.trad.label.GENERAL_OK,
                    handler: function (data) {
                        _this.dismiss();
                    }
                }]
        });
        alert.present();
    };
    ModalAddPage.prototype.presentAlertKO = function () {
        var alert = this.alertCtrl.create({
            title: this.trad.label.GENERAL_ERREUR,
            subTitle: this.trad.label.MODAL_ADD_NO_NETWORK,
            buttons: [this.trad.label.GENERAL_OK]
        });
        alert.present();
    };
    ModalAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-add',template:/*ion-inline-start:"/Users/damien/app/JTP/src/pages/modal-add/modal-add.html"*/'<!--\n  Generated template for the ModalAddPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'MODAL_ADD_TITLE\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="dismiss()">\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding scroll="false">\n  <div *ngIf="!form.ready">\n  <div text-center padding>{{ form.hint }}</div>\n  <ion-list>\n    <ion-item>\n      <ion-label color="secondary" floating>{{ \'MODAL_ADD_PSEUDO\' | translate }}</ion-label>\n      <ion-input type="text" [(ngModel)]="form.pseudo"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="secondary" floating>{{ \'MODAL_ADD_EMAIL\' | translate }}</ion-label>\n      <ion-input type="email" [(ngModel)]="form.email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label color="secondary" floating>{{ \'MODAL_ADD_PROP1\' | translate }}</ion-label>\n      <ion-textarea [(ngModel)]="form.prop1"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label color="secondary" floating>{{ \'MODAL_ADD_PROP2\' | translate }}</ion-label>\n      <ion-textarea [(ngModel)]="form.prop2"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label color="secondary" floating>{{\'MODAL_ADD_CAT_TITLE\' | translate }}</ion-label>\n      <ion-select [(ngModel)]="form.cat" okText={{LABEL.GENERAL_OK}} cancelText={{LABEL.GENERAL_ANNULER}}>\n        <ion-option *ngFor="let cat of CAT_LIST" [value]="cat.id">{{cat.label}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  </div>\n  <div *ngIf="form.ready">\n  <h5 *ngIf="doublons.length>0" text-center padding>{{\'MODAL_ADD_SEARCH_RESULT\' | translate }}</h5>\n  <h5 *ngIf="doublons.length===0" text-center padding>{{\'MODAL_ADD_SEARCH_NORESULT\' | translate }}</h5>\n  <div *ngIf="doublons.length>0">\n    <ion-grid no-padding>\n      <ion-row *ngFor="let d of doublons" align-items-center padding>\n        <ion-col col-2 text-center [ngStyle]="d.style">\n          {{d.pourcentage}}%\n        </ion-col>\n        <ion-col col-10>\n          {{d.response1}} / {{d.response2}}\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-list no-lines style="margin-bottom:10px">\n      <ion-item text-wrap>\n        <ion-label>{{\'MODAL_ADD_NODOUBLE\' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]="form.noDouble"></ion-toggle>\n      </ion-item>\n    </ion-list>\n  </div>\n    <ion-list no-lines>\n      <ion-item text-wrap>\n        <ion-label>{{\'MODAL_ADD_NOFAULT\' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]="form.noFault"></ion-toggle>\n      </ion-item>\n    </ion-list>\n </div>\n</ion-content>\n<ion-footer>\n  <button ion-button full icon-start no-margin (click)="submitForm()" *ngIf="!form.ready">\n    <ion-icon name="checkmark-circle-outline"></ion-icon>{{\'MODAL_ADD_SUBMIT\' | translate }}\n  </button>\n  <ion-grid *ngIf="form.ready" no-padding>\n    <ion-row>\n      <ion-col col-6 no-padding>\n        <button ion-button full icon-start no-margin (click)="form.ready=false" color="danger">\n          <ion-icon name="ios-arrow-dropleft"></ion-icon>{{\'MODAL_ADD_BACK\' | translate }}\n        </button>\n      </ion-col>\n      <ion-col col-6 no-padding>\n        <button ion-button full icon-start no-margin [attr.disabled]="form.noFault&&form.noDouble?null:true" (click)="submitForm2()">\n          <ion-icon name="checkmark-circle-outline"></ion-icon>{{\'MODAL_ADD_SUBMIT\' | translate }}\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/Users/damien/app/JTP/src/pages/modal-add/modal-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["b" /* Database */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["c" /* Ga */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["e" /* Settings */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_2__providers_providers__["g" /* Trad */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ModalAddPage);
    return ModalAddPage;
}());

//# sourceMappingURL=modal-add.js.map

/***/ })

});
//# sourceMappingURL=3.js.map