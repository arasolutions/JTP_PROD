webpackJsonp([0],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_countup_js_angular2__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_countup_js_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_countup_js_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WelcomePageModule = (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_3_countup_js_angular2__["CountUpModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_settings__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pages__ = __webpack_require__(229);
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var WelcomePage = (function () {
    function WelcomePage(pub, socialSharing, database, api, trad, navParams, modalCtrl, translate, navCtrl, alertCtrl) {
        var _this = this;
        this.pub = pub;
        this.socialSharing = socialSharing;
        this.database = database;
        this.api = api;
        this.trad = trad;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.pub.initPub(true);
        this.CAT_LIST = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].CAT_LIST;
        this.LABELS = trad.label;
        setTimeout(function () {
            _this.database.startAsynTasks();
        }, 8000);
        this.initGame();
    }
    WelcomePage.prototype.share = function (item) {
        var optShare = { message: '', url: '' };
        optShare.message = this.LABELS.MAIN_SHARE_DEBUT + item.r + this.LABELS.MAIN_SHARE_FIN + item.s;
        optShare.url = this.LABELS.MAIN_URL_SHARE + item.i;
        this.socialSharing.shareWithOptions(optShare);
    };
    WelcomePage.prototype.initGame = function (param) {
        if (param === void 0) { param = { search: "" }; }
        this.noMoreToDisplay = false;
        this.completedItem = 0;
        if (param && param.search) {
            this.param = param;
        }
        else if (this.navParams.data) {
            this.param = this.navParams.data;
        }
        this.database.createSession(this.param);
        this.items = this.database.getQ(this.completedItem, this.completedItem + __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].LIMIT_Q);
        this.completeItem();
        this.rdmCatIdx = Math.floor(Math.random() * __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].CAT_LIST.length);
        this.banList = [{ 'img': 'ban_atl.jpg', 'url': 'https://www.atletigo.com' },
            { 'img': 'ban_egc.jpg', 'url': 'http://www.escapegamecity.com' },
            { 'img': 'ban_atl2.jpg', 'url': 'https://www.atletigo.com' },
            { 'img': 'ban_wt.jpg', 'url': 'http://www.word-trotter.com' },
            { 'img': 'ban_pub.jpg', 'url': 'mailto:Jeu-Tu-Preferes@jeu-tu-preferes.fr' }
        ];
        this.cptBan = Math.floor(Math.random() * this.banList.length);
    };
    WelcomePage.prototype.completeItem = function () {
        for (var i = this.completedItem; i < this.items.length; i++) {
            var it = this.items[i];
            if (!it.e) {
                it.e = 0;
            }
            for (var j = 0; j < __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].CAT_LIST.length; j++) {
                if (it.c === __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].CAT_LIST[j].id) {
                    it.catimg = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].CAT_LIST[j].img;
                    it.catlab = __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].CAT_LIST[j].label;
                    break;
                }
            }
            this.completedItem++;
        }
    };
    WelcomePage.prototype.like = function (item, like) {
        if (like && !item.y) {
            this.updateBo(item.i, 3);
            item.y = true;
            item.l++;
            if (item.z) {
                item.z = false;
                item.u--;
            }
        }
        else if (!like && !item.z) {
            this.updateBo(item.i, 4);
            item.z = true;
            item.u++;
            if (item.y) {
                item.y = false;
                item.l--;
            }
        }
        this.database.update(item);
    };
    WelcomePage.prototype.search = function (txt) {
        if (txt && txt.target && txt.target.value && txt.target.value.length > 2) {
            var param = { search: "" };
            param.search = txt.target.value;
            this.initGame(param);
        }
        else if (txt && txt.target && !txt.target.value) {
            this.initGame();
        }
    };
    WelcomePage.prototype.answer = function (item, choice) {
        if (item.e !== undefined && item.e === 0 && item.answered === undefined) {
            item.answered = choice;
            this.updateBo(item.i, choice);
            this.database.update(item, true);
        }
    };
    WelcomePage.prototype.updateBo = function (itemId, event) {
        // 1:reponse1
        // 2:reponse2
        // 3:like
        // 4:unlike
        // 5:signaler1
        // 6:signaler2
        // 7:signaler3
        var param = { id: 0, event: 0 };
        param.id = itemId;
        param.event = event;
        var seq = this.api.post('event', param).share();
        seq.subscribe(function (res) {
            //console.log(res);
        }, function (err) {
            //console.error('ERROR', err);
        });
    };
    WelcomePage.prototype.signaler = function (item) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle(this.trad.label.MAIN_SIGNALER);
        alert.addInput({
            type: 'radio',
            label: this.trad.label.MAIN_SIGNALER_1,
            value: '5',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: this.trad.label.MAIN_SIGNALER_2,
            value: '6',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: this.trad.label.MAIN_SIGNALER_3,
            value: '7',
            checked: false
        });
        alert.addButton(this.trad.label.GENERAL_ANNULER);
        alert.addButton({
            text: this.trad.label.GENERAL_OK,
            handler: function (data) {
                //cas du refus (modération), permet de faire disparaitre le bouton
                if (item.e === 1) {
                    item.z = true;
                }
                _this.updateBo(item.i, parseInt(data, 10));
            }
        });
        alert.present();
    };
    WelcomePage.prototype.openAddModal = function () {
        var myModal = this.modalCtrl.create('ModalAddPage');
        myModal.present();
    };
    WelcomePage.prototype.goTo = function (id) {
        var _this = this;
        this.navParams.data = {};
        this.navParams.data.catId = id;
        this.initGame();
        setTimeout(function () {
            _this.content.scrollToTop();
        }, 300);
    };
    WelcomePage.prototype.play = function () {
        this.content.scrollTo(0, 350);
    };
    WelcomePage.prototype.goToCat = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_pages__["a" /* CatPage */], {}, {
            animate: true,
            direction: 'forward'
        });
    };
    WelcomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            var taille = _this.items.length;
            var tmp = _this.database.getQ(_this.completedItem, _this.completedItem + __WEBPACK_IMPORTED_MODULE_2__app_app_settings__["a" /* appSettings */].LIMIT_Q);
            _this.items = _this.items.concat(tmp);
            if (taille === _this.items.length) {
                _this.noMoreToDisplay = true;
            }
            _this.completeItem();
            infiniteScroll.complete();
        }, 500);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], WelcomePage.prototype, "content", void 0);
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/damien/app/JTP/src/pages/welcome/welcome.html"*/'<ion-header>\n  <ion-navbar color="dark">\n\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n\n    <ion-title text-center><img src="assets/img/logo2.png" style="height:30px;margin-top:7px"></ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openAddModal()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content scroll="true" class="defaultBg">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo" (tap)="play()"></div>\n    <div class="splash-intro opa8 light-bg">\n      {{ \'MAIN_INTRO\' | translate }}\n    </div>\n  </div>\n    <ion-searchbar *ngIf="!param.catId && !param.typePage" placeholder="{{ \'MAIN_SEARCH\' | translate }}" color="danger" (ionInput)="search($event)"></ion-searchbar>\n\n  <!-- <div padding>\n    <button ion-button block (click)="signup()">{{ \'SIGNUP\' | translate }}</button>\n    <button ion-button block (click)="login()" class="login">{{ \'LOGIN\' | translate }}</button>\n  </div> -->\n  <div *ngFor="let item of items; let i = index">\n\n    <div text-center *ngIf="(i+7)%18===0" class="light-bg">\n      <h6>{{ \'MAIN_OTHER\' | translate }}</h6>\n      <ion-row text-center>\n        <ion-col><span (tap)="goTo(CAT_LIST[(rdmCatIdx+i)%CAT_LIST.length].id)"><img [src]="\'assets/img/\'+CAT_LIST[(rdmCatIdx+i)%CAT_LIST.length].img" class="recomCat" /></span></ion-col>\n        <ion-col><span (tap)="goTo(CAT_LIST[(rdmCatIdx+i+1)%CAT_LIST.length].id)"><img [src]="\'assets/img/\'+CAT_LIST[(rdmCatIdx+i+1)%CAT_LIST.length].img" class="recomCat" /></span></ion-col>\n      </ion-row>\n      <ion-row text-center ng-padding>\n        <ion-col no-padding><h5 (tap)="goTo(CAT_LIST[(rdmCatIdx+i)%CAT_LIST.length].id)" no-margin>{{CAT_LIST[(rdmCatIdx+i)%CAT_LIST.length].label}}</h5></ion-col>\n        <ion-col no-padding><h5 (tap)="goTo(CAT_LIST[(rdmCatIdx+i+1)%CAT_LIST.length].id)" no-margin>{{CAT_LIST[(rdmCatIdx+i+1)%CAT_LIST.length].label}}</h5></ion-col>\n      </ion-row>\n    </div>\n    <div text-center *ngIf="(i+13)%18===0" class="pub">\n      <a [href]=banList[(cptBan+i)%banList.length].url><img [src]="\'assets/ban/\'+banList[(cptBan+i)%banList.length].img" /></a>\n    </div>\n    <div text-center margin-top margin-bottom *ngIf="(i+19)%18===0 && LABELS.MAIN_HINT_LIST.length>0" class="opa8 light-bg">\n      <div class="doyouknow">{{ \'MAIN_HINT\' | translate }}</div>\n      <div >{{LABELS.MAIN_HINT_LIST[(rdmCatIdx+i)%LABELS.MAIN_HINT_LIST.length]}}</div>\n    </div>\n    <ion-card>\n      <!-- <ion-row no-padding class="secondary-bg borderBottom buttonBar">\n      A valider\n    </ion-row> -->\n    <ion-card-header class="secondary-bg borderBottom buttonBar" text-center color="danger" *ngIf="item.e===1">\n    {{\'MAIN_MODERATION\' | translate }}\n  </ion-card-header>\n      <ion-card-content padding [class]="item.e===1?\'light-bg\':\'\'">\n        <!-- <ion-card-title class="cardTitle light">\n      <img [src]="\'assets/img/\'+item.catimg" />\n    </ion-card-title> -->\n    \n        <div [class]="item.answered===1?\'cardTop\':\'animated slideInRight\'" text-center>\n          <div [class]="item.answered?\'reponse2\':\'reponse\'" (click)="answer(item,1)" >{{item.r}}</div>\n          <div *ngIf="item.answered" class="result animated fadeIn">\n            <span countUp [endVal]="item.pc1"></span>%\n            <span>({{item.a}} {{ \'MAIN_VOTES\' | translate }})</span>\n          </div>\n        </div>\n        <p text-center>\n          <ion-icon name=\'ios-flash\' class="bigem" [color]="item.e?\'danger\':\'light\'"></ion-icon>\n        </p>\n        <div [class]="item.answered===2?\'cardBottom\':\'animated slideInRight\'" text-center>\n          <div [class]="item.answered?\'reponse2\':\'reponse\'" (click)="answer(item,2)">{{item.s}}</div>\n          <div *ngIf="item.answered" class="result animated fadeIn">\n            <span countUp [endVal]="item.pc2"></span>%\n            <span>({{item.b}} {{ \'MAIN_VOTES\' | translate }})</span>\n          </div>\n        </div>\n      </ion-card-content>\n      <ion-row no-padding class="secondary-bg borderTop buttonBar" *ngIf="item.e===1">\n        <ion-col>\n          <ion-row no-padding justify-content-center>\n          <ion-col no-padding style="max-width:35px" ><img [src]="\'assets/img/\'+item.catimg" style="width:35px" /></ion-col>\n          <ion-col align-self-center no-padding class="catlab">{{item.catlab}}</ion-col> \n          </ion-row>\n        </ion-col>\n          <ion-col text-right *ngIf="item.y||item.z" class="animated slideInRight">\n            <button ion-button color="light" icon-start outline small (click)="like(item,true)">\n              {{\'MAIN_MODERATION_THX\' | translate }}\n            </button>\n          </ion-col>\n\n          <ion-col text-center *ngIf="!item.y&&!item.z">\n            <button ion-button color="light" icon-start outline small (click)="like(item,true)">\n              <ion-icon name=\'ios-thumbs-up\'></ion-icon>\n              {{\'MAIN_MODERATION_BTNOK\' | translate }}\n            </button>\n          </ion-col>\n          <ion-col text-center *ngIf="!item.y&&!item.z">\n            <button ion-button color="danger" icon-start (click)="signaler(item)" outline small>\n              <ion-icon name=\'ios-thumbs-down\'></ion-icon>\n              {{\'MAIN_MODERATION_BTNKO\' | translate }}\n            </button>\n          </ion-col>\n\n\n      </ion-row>\n      <ion-row no-padding class="secondary-bg borderTop buttonBar" *ngIf="item.e===0">\n        <ion-col>\n          <img [src]="\'assets/img/\'+item.catimg" style="width:35px" (tap)="goToCat()"/>\n        </ion-col>\n        <ion-col>\n          <button ion-button clear small icon-start [ngClass]="item.y?\'jtp-vert\':\'light\'" (click)="like(item,true)">\n            <ion-icon name=\'ios-thumbs-up\'></ion-icon>\n            <span class="jtp-vert">{{item.l}}</span>\n          </button>\n        </ion-col>\n        <ion-col align-self-start>\n          <button ion-button clear small [ngClass]="item.z?\'danger\':\'light\'" icon-start (click)="like(item,false)">\n            <ion-icon name=\'ios-thumbs-down\'></ion-icon>\n            <span class="danger">{{item.u}}</span>\n          </button>\n        </ion-col>\n        <ion-col text-center>\n          <button ion-button color="danger" icon-start (click)="signaler(item)" outline small>\n            <ion-icon name=\'warning\'></ion-icon>\n            {{ \'MAIN_SIGNALER\' | translate }}\n          </button>\n        </ion-col>\n        <ion-col text-right>\n          <button ion-button clear small color="light" icon-start (click)="share(item)">\n            <ion-icon name=\'share-alt\'></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="!noMoreToDisplay">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <div *ngIf="noMoreToDisplay||items.length===0" class="light-bg opa8">\n    <ion-row>\n      <ion-col text-center>\n        <ion-icon name=\'ios-warning-outline\' style="font-size:40vw" color="danger"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <h4 ion-text color="dark">{{ \'MAIN_NO_MORE_TO_DISPLAY\' | translate }}</h4>\n      </ion-col>\n    </ion-row>\n  </div>\n  <!-- <h4 class="opa8 grey-bg" ion-text color="dark" text-center *ngIf="noMoreToDisplay">{{ \'MAIN_NO_MORE_TO_DISPLAY\' | translate }}</h4> -->\n</ion-content>\n'/*ion-inline-end:"/Users/damien/app/JTP/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_providers__["d" /* Pub */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* Database */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["a" /* Api */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["g" /* Trad */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=0.js.map