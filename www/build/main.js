webpackJsonp([0],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_prohomepage_prohomepage__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__specificlanuage_specificlanuage__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_index__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(menu, domSanitizer, personservice, statusBar, navCtrl) {
        this.menu = menu;
        this.domSanitizer = domSanitizer;
        this.personservice = personservice;
        this.statusBar = statusBar;
        this.navCtrl = navCtrl;
        this.tabs = '0';
        this.searchTerm = '';
        this.notesData();
        this.videoData();
        this.errorData();
        statusBar.show();
        //this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/DuwXCFyo4-w')
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.statusBar.show();
        this.menu.enable(true, 'menu1');
    };
    HomePage.prototype.callLangWisePage = function (value) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__specificlanuage_specificlanuage__["a" /* SpecificlanuagePage */], {
            "param1": value
        });
    };
    HomePage.prototype.toggleSearch = function () {
        this.toggled = this.toggled ? false : true;
    };
    HomePage.prototype.setFilteredItems = function () {
        this.items = this.personservice.filterItems(this.searchTerm);
    };
    HomePage.prototype.notesData = function () {
        var _this = this;
        this.personservice.getNotesAllData().then(function (data) {
            _this.items = data;
        });
    };
    HomePage.prototype.videoData = function () {
        var _this = this;
        this.personservice.getVideoAllData().then(function (data) {
            _this.videoLocalData = data;
        });
    };
    HomePage.prototype.errorData = function () {
        var _this = this;
        this.personservice.getErrorAllData().then(function (data) {
            _this.errorLocalData = data;
        });
    };
    HomePage.prototype.selectTab = function (index) {
        this.pageSlider.slideTo(index);
    };
    HomePage.prototype.changeWillSlide = function ($event) {
        this.tabs = $event._snapIndex.toString();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('pageSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], HomePage.prototype, "pageSlider", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>   \n        <button ion-button menuToggle *ngIf="!toggled">\n                <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title *ngIf="!toggled">U Skill Share</ion-title>   \n        <ion-searchbar *ngIf="toggled"  [showCancelButton]="true"  [(ngModel)]="searchTerm" (ionCancel)="toggleSearch()" (ionInput)="setFilteredItems()"  placeholder="Search....."></ion-searchbar>\n        <ion-buttons end *ngIf="!toggled">\n                     <button ion-button icon-only (click)="toggleSearch()"><ion-icon name="search" ></ion-icon></button>\n            <button ion-button icon-only ><ion-icon name="chatboxes"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar> \n\n\n    <ion-navbar>        \n        <ion-segment color="dark" [(ngModel)]="tabs">\n            <ion-segment-button (click)="selectTab(0)"\n                value="0" >Notes\n            </ion-segment-button>\n            <ion-segment-button (click)="selectTab(1)"\n                value="1">Video    \n            </ion-segment-button>  \n            <ion-segment-button (click)="selectTab(2)"\n                value="2">Error    \n            </ion-segment-button> \n\n            <div id="slide" class="slide"></div>   \n        </ion-segment>\n    </ion-navbar>\n\n</ion-header>       \n\n<ion-slides #pageSlider id="pageSlider"  (ionSlideWillChange)="changeWillSlide($event)" class="fullBody" >\n    <ion-slide class="bgTrnasp"> \n        <ion-list class="bgTrnasp">   \n            <ion-item #val *ngFor="let news of items" class="langNewsItem" (click)="callLangWisePage(news.id);" class="bgTrnasp" >\n                <ion-avatar item-start >\n                    <img src="{{news.imagePath}}" alt="{{news.langName}}">\n                </ion-avatar>     \n                <h1 class="limitchar darkColor" >{{news.heading}}</h1>\n                <p>{{news.date}}</p>      \n            </ion-item>   \n        </ion-list>\n    </ion-slide>\n    <ion-slide> \n        <ion-card *ngFor="let news of videoLocalData" class="bgTrnasp">     \n              <iframe width="100%" height="300" [src]="this.domSanitizer.bypassSecurityTrustResourceUrl(news.discription)" frameborder="0" allowfullscreen></iframe>\n            <ion-card-content>            \n                <ion-card-title>\n                    <h3>{{news.heading}}</h3>\n                </ion-card-title>\n                <p>{{news.date}}</p>\n            </ion-card-content>\n        </ion-card>   \n    </ion-slide>\n    <ion-slide>       \n        <ion-list>\n            <ion-item #val *ngFor="let news of errorLocalData" class="langNewsItem" (click)="callLangWisePage(news.id);"  class="bgTrnasp">\n                <ion-avatar item-start >     \n                      <img src="{{news.imagePath}}" alt="{{news.langName}}">\n                </ion-avatar>    \n                <h1 class="limitchar darkColor">{{news.heading}}</h1>\n                <p>{{news.date}}</p>   \n            </ion-item>\n        </ion-list>\n    </ion-slide>\n</ion-slides>\n\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_prohomepage_prohomepage__["a" /* ProhomepageProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular_index__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__providers_prohomepage_prohomepage__["a" /* ProhomepageProvider */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattinguserroomPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_chattinguserroompro_chattinguserroompro__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//@IonicPage()
var ChattinguserroomPage = (function () {
    function ChattinguserroomPage(alertCtrl, push, personservice, _form, http, loading, toastCtrl, storage, navCtrl, navParams) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.push = push;
        this.personservice = personservice;
        this._form = _form;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { userId: "", resiverId: "", message: "", type: "", imagePath: "" };
        this.chattingroomform = this._form.group({
            'data.message': [null]
        });
        this.storage.get('userId').then(function (val) {
            _this.data.userId = val;
            _this.getChattingMessageMethod(_this.data.userId, _this.data.resiverId);
        });
        this.data.resiverId = navParams.get('param1');
        this.data.message = '';
        this.pushsetup();
    }
    ChattinguserroomPage.prototype.ionViewDidLoad = function () {
        this.content.scrollToBottom(300); //300ms animation speed
    };
    ChattinguserroomPage.prototype.getChattingMessageMethod = function (userId, resiverId) {
        var _this = this;
        this.personservice.getChattingMessage(userId, resiverId).then(function (data) {
            _this.getAllChattingMessage = data;
        });
    };
    ChattinguserroomPage.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '253840953533',
                sound: "true",
                vibrate: "true",
                forceShow: "true"
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            alert('hi');
            _this.content.scrollToBottom(300); //300ms animation speed
            _this.getChattingMessageMethod(_this.data.userId, _this.data.resiverId);
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    ChattinguserroomPage.prototype.sendMessage = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                message: _this.data.message,
                userId: _this.data.userId,
                resiverId: _this.data.resiverId,
                type: 'message',
            };
            _this.http.post('http://skillshare.web44.net/ChattingUserRoom/sentMessage', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                if (res.toString() == "yes") {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Sent',
                        duration: 2000
                    });
                    toast.present();
                    _this.data.message = '';
                    _this.getChattingMessageMethod(_this.data.userId, _this.data.resiverId);
                    _this.content.scrollToBottom(300); //300ms animation speed
                }
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Not sent.',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], ChattinguserroomPage.prototype, "content", void 0);
    ChattinguserroomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chattinguserroom',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\chattinguserroom\chattinguserroom.html"*/'\n<ion-header>\n <ion-navbar>  \n    <ion-title>Chatting</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding  #content>\n<ion-list>\n      <div id="chatMessages">   \n    <ion-item *ngFor="let item of getAllChattingMessage" no-lines >\n      <div [class]="item.userId == data.userId ? \'innerMessage messageRight\' : \'innerMessage messageLeft\'">\n      \n          <div class="messageContent">{{ item.message }}</div><br/>\n            <div class="username">{{ item.date }}</div>\n      </div>          \n    </ion-item>\n  </div>  \n	</ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <form [formGroup]="chattingroomform">        \n    <div id="footer">      \n      <div class="elem"><ion-input type="text" placeholder="Message" formControlName="data.message" [(ngModel)]="data.message" ></ion-input></div>\n      <div class="elem"><button ion-button="" icon-only="" (click)="sendMessage()"><ion-icon name="send"></ion-icon> </button></div>\n    </div>\n      </form>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\chattinguserroom\chattinguserroom.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_chattinguserroompro_chattinguserroompro__["a" /* ChattinguserroomproProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_5__providers_chattinguserroompro_chattinguserroompro__["a" /* ChattinguserroomproProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChattinguserroomPage);
    return ChattinguserroomPage;
}());

//# sourceMappingURL=chattinguserroom.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProhomepageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
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


var ProhomepageProvider = (function () {
    function ProhomepageProvider(http) {
        this.http = http;
        this.data = null;
        this.langData = null;
    }
    ProhomepageProvider.prototype.filterItems = function (searchTerm) {
        return this.items.filter(function (item) {
            return (item.langName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 || item.heading.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        });
    };
    //Home Page -Language News
    ProhomepageProvider.prototype.getNotesAllData = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                email: '',
            };
            _this.http.post('http://skillshare.web44.net/Welcome/getNotesAllData', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.data = res.langNews;
                _this.items = res.langNews;
                resolve(_this.data);
            });
        });
    };
    ProhomepageProvider.prototype.getVideoAllData = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                email: '',
            };
            _this.http.post('http://skillshare.web44.net/Welcome/getVideoAllDataMobile', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.data = res.langNews;
                _this.items = res.langNews;
                resolve(_this.data);
            });
        });
    };
    ProhomepageProvider.prototype.getErrorAllData = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                email: '',
            };
            _this.http.post('http://skillshare.web44.net/Welcome/getErrorAllDataMobile', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.data = res.langNews;
                _this.items = res.langNews;
                resolve(_this.data);
            });
        });
    };
    ProhomepageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ProhomepageProvider);
    return ProhomepageProvider;
}());

//# sourceMappingURL=prohomepage.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificlanuagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//@IonicPage()
var SpecificlanuagePage = (function () {
    function SpecificlanuagePage(navCtrl, navParams, http, loading, toastCtrl, socialSharing, sms, callNumber, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.socialSharing = socialSharing;
        this.sms = sms;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.langIdLocal = navParams.get('param1');
        this.getlangWiseData();
    }
    SpecificlanuagePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SpecificlanuagePage.prototype.getlangWiseData = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                langId: _this.langIdLocal,
            };
            _this.http.post('http://skillshare.web44.net/SpecificLangNews/getMobileLangeData', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.langWiseData = res.specificLangData;
                _this.currentMobileNo = _this.langWiseData[0].mobileNo;
                _this.currrentDisc = _this.langWiseData[0].discription;
                _this.currentHeading = _this.langWiseData[0].heading;
                _this.currentImagePath = _this.langWiseData[0].imagePath;
                _this.currentFullName = _this.langWiseData[0].fullName;
                _this.currentEmail = _this.langWiseData[0].emailid;
                _this.currentUserId = _this.langWiseData[0].userId;
                loader.dismiss();
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Data not found.',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    SpecificlanuagePage.prototype.regularShare = function () {
        // share(message, subject, file, url)
        var path = "http://skillshare.web44.net/SpecificLangNews?id=" + this.langIdLocal + "&userId=" + this.currentUserId;
        this.socialSharing.share(this.currentHeading + '\n     ______________________________      \n\n' + this.currrentDisc + '\n' + ' by:' + this.currentFullName + '(' + this.currentEmail + ')', "http://skillshare.web44.net", this.currentImagePath, '\n\n' + path + '\n');
    };
    SpecificlanuagePage.prototype.whatsappShare = function () {
        var path = "http://skillshare.web44.net/SpecificLangNews?id=" + this.langIdLocal + "&userId=" + this.currentUserId;
        this.socialSharing.shareViaWhatsApp(this.currentHeading + '\n     ______________________________      \n\n' + this.currrentDisc + '\n' + ' by:' + this.currentFullName + '(' + this.currentEmail + ')', this.currentImagePath, '\n\n' + path + '\n');
    };
    SpecificlanuagePage.prototype.smsShare = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sent sms',
            inputs: [
                {
                    name: 'mobileNo',
                    placeholder: 'Mobile Number'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sent',
                    handler: function (data) {
                        var options = {
                            replaceLineBreaks: false,
                            android: {
                                intent: 'INTENT' // Opens Default sms app
                                //intent: '' // Sends sms without opening default sms app
                            }
                        };
                        _this.sms.send(data.mobileNo, _this.currrentDisc, options)
                            .then(function () {
                            console.log('sent');
                        }, function () {
                            console.log('not sent');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    SpecificlanuagePage.prototype.calling = function () {
        this.callNumber.callNumber(this.currentMobileNo, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    SpecificlanuagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-specificlanuage',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\specificlanuage\specificlanuage.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true">\n        <ion-buttons left class="backButton">\n            <button ion-button (click)="back()" >\n                    <ion-icon name="arrow-round-back"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title class="titlePage" *ngFor="let langName of langWiseData">{{langName.langName}}</ion-title>     \n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <style>\n        .bottomShow{\n            width:50px;\n            height:50px;\n            background:#8C8C8C;\n            color:white;\n            bottom:55px;\n            position:fixed;\n            right:20px;\n            z-index:100;\n            border:2px solid #8C8C8C;\n        }\n    </style>\n    <div *ngFor="let langName of langWiseData">  \n        <ion-card class="imgCard">         \n            <img src="{{langName.imagePath}}" style="width: 100%;height: 300px;" class="img-responsive img-thumbnail">      \n            <span id="heading" >{{langName.heading}}</span><br>\n            <span>    \n                <span id="eyeIcon"> <ion-icon name="eye">{{langName.viewCont}}</ion-icon></span>\n                <span id="date">{{langName.date}}</span>  \n            </span>      \n            <hr>\n            <ion-grid>   \n                <ion-row>\n                    <ion-col col-4>   \n                        <img src="{{langName.userImagePath}}" class="img-responsive img-thumbnail img-circle" alt="userImage" >\n                    </ion-col> \n                    <ion-col col-5>\n                        <h2>{{langName.fullName}}</h2>\n                        <span id="email">{{langName.emailid}}</span>\n                    </ion-col>\n                    <ion-col col-3>\n                    </ion-col>     \n                </ion-row>\n            </ion-grid>\n        </ion-card>\n        <ion-card class="imgCard">\n            <div>  \n                <pre><code data-language="c" class="code" data-clipboard-target="#foo"> \n{{langName.discription}}   \n</code></pre>    \n            </div>\n        </ion-card>\n    </div>\n    <ion-list>   \n        <ion-item *ngFor="let commentShow of commentData">\n            <ion-avatar item-start>\n                <img src="http://skillshare.web44.net/Content/Image/Icon/commentIcon.png">\n            </ion-avatar> \n            <span item-right class="fontsize10">{{commentShow.date}} / {{commentShow.time}}</span>\n            <h2>{{commentShow.name}}</h2>\n            <h3>{{commentShow.email}}</h3>\n            <p>{{commentShow.comment}}</p>\n        </ion-item>\n    </ion-list>    \n\n</ion-content>     \n\n\n<ion-footer class="fotterDiv">\n    <ion-grid >\n        <ion-row >     \n            <ion-col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2></ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2>\n                <button ion-button icon-only block (click)="regularShare()" color="dark" clear>\n                        <ion-icon class="share-icon" name="share"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2>\n                <button ion-button icon-only (click)="whatsappShare()" color="dark" clear>\n                        <ion-icon class="share-icon" name="logo-whatsapp"></ion-icon>\n                </button>\n            </ion-col>\n            <ion-col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 >\n                <button ion-button icon-only block (click)="smsShare()" color="dark" clear>\n                        <ion-icon class="share-icon" name="mail"></ion-icon>  \n                </button>\n            </ion-col>  \n            <ion-col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 >\n                <button ion-button icon-only block (click)="calling()" color="dark" clear>\n                        <ion-icon class="share-icon" name="call"></ion-icon>  \n                </button>\n            </ion-col>  \n            <ion-col col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2></ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-footer>\n\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\specificlanuage\specificlanuage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], SpecificlanuagePage);
    return SpecificlanuagePage;
}());

//# sourceMappingURL=specificlanuage.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__registation_registation__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













//@IonicPage()
var LoginPage = (function () {
    function LoginPage(push, statusBar, alertCtrl, storage, menu, navCtrl, _form, http, loading, toastCtrl) {
        var _this = this;
        this.push = push;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.menu = menu;
        this.navCtrl = navCtrl;
        this._form = _form;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.data = { email: "", password: "", tokenNo: "" };
        this.loginForm = this._form.group({
            'data.email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
            'data.password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.storage.get('tokenNo').then(function (val) {
            console.log(val);
            if (val == null) {
                _this.pushsetup();
            }
            else {
                _this.data.tokenNo = val;
                _this.saveNotLoginUser();
            }
        });
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.statusBar.show();
        this.menu.enable(false, 'menu1');
    };
    LoginPage.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '253840953533',
                sound: "true",
                vibrate: "true",
                forceShow: "true"
            },
            browser: {
                pushServiceURL: 'http://skillshare.web44.net'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'USkillShare',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            _this.data.tokenNo = registration.registrationId;
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
        this.saveNotLoginUser();
    };
    LoginPage.prototype.saveNotLoginUser = function () {
        var headersNew = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
        headersNew.append('Content-Type', 'application/json');
        var data = {
            tokenNo: this.data.tokenNo,
        };
        this.http.post('http://skillshare.web44.net/Registation/saveNotLoginData', JSON.stringify(data), {
            headers: headersNew
        })
            .subscribe(function (res) {
        });
    };
    LoginPage.prototype.goRegiationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__registation_registation__["a" /* RegistationPage */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                email: _this.data.email,
                password: _this.data.password,
                tokenNo: _this.data.tokenNo,
            };
            _this.http.post('http://skillshare.web44.net/HomePage/loginMobile', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                var newArry = res.toString();
                var array = newArry.split('=');
                if (array[0] == "yes") {
                    loader.dismiss();
                    _this.storage.set('email', _this.data.email);
                    _this.storage.set('password', _this.data.password);
                    _this.storage.set('userId', array[1]);
                    _this.storage.set('userType', array[2]);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Please enter correct email  and password.',
                        duration: 2000
                    });
                    toast.present();
                }
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Please enter correct email  and password.',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    LoginPage.prototype.emailSent = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Forgot Password',
            inputs: [
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Sent',
                    handler: function (data12) {
                        var loader = _this.loading.create({
                            content: 'Wating.........',
                        });
                        loader.present().then(function () {
                            var headersNew = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                            headersNew.append('Content-Type', 'application/json');
                            var data = {
                                email: data12.email
                            };
                            _this.http.post('http://skillshare.web44.net/HomePage/forgotPasswordMobile', JSON.stringify(data), {
                                headers: headersNew
                            })
                                .subscribe(function (res) {
                                if (res.toString() == "yes") {
                                    loader.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: 'Email sent thanks.',
                                        duration: 2000
                                    });
                                    toast.present();
                                }
                                else {
                                    loader.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: 'Correct insert email Address.',
                                        duration: 2000
                                    });
                                    toast.present();
                                }
                            }, function (err) {
                                loader.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: 'Password not sent.',
                                    duration: 2000
                                });
                                toast.present();
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.requestAdmin = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Admin Request',
            inputs: [
                {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Sent',
                    handler: function (data12) {
                        var loader = _this.loading.create({
                            content: 'Wating.........',
                        });
                        loader.present().then(function () {
                            var headersNew = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
                            headersNew.append('Content-Type', 'application/json');
                            var data = {
                                email: data12.email
                            };
                            _this.http.post('http://skillshare.web44.net/HomePage/adminRequsentSentMobile', JSON.stringify(data), {
                                headers: headersNew
                            })
                                .subscribe(function (res) {
                                if (res.toString() == "yes") {
                                    loader.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: 'Admin sent request successfully.',
                                        duration: 2000
                                    });
                                    toast.present();
                                }
                                else {
                                    loader.dismiss();
                                    var toast = _this.toastCtrl.create({
                                        message: 'Request not sent.',
                                        duration: 2000
                                    });
                                    toast.present();
                                }
                            }, function (err) {
                                loader.dismiss();
                                var toast = _this.toastCtrl.create({
                                    message: 'Request not sent.',
                                    duration: 2000
                                });
                                toast.present();
                            });
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\login\login.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title style="text-align: center">LOGIN</ion-title>\n    </ion-navbar>\n</ion-header>    \n<ion-content class="login fullBody">\n    <div class="form-group" padding style="margin-top: 100px">\n        <form [formGroup]="loginForm">\n            <ion-list inset>\n                <ion-item class="bgTrnasp"> \n                    <ion-input type="email" placeholder="Email"  formControlName="data.email" [(ngModel)]="data.email"></ion-input>\n                </ion-item>\n                <ion-item class="bgTrnasp">\n                    <ion-input type="password" placeholder="Password"  formControlName="data.password" [(ngModel)]="data.password"></ion-input>\n                </ion-item>\n                <ion-item no-lines class="bgTrnasp">      \n                    <button ion-button id="btnSize"     full round (click)="login();"  [disabled]="!loginForm.valid">Sign In</button><br/>\n                     <button ion-button block  outline (click)="emailSent();" >Forget Password</button><br/>\n                      <button ion-button id="btnSize"  full round (click)="requestAdmin();" >Request Admin</button>\n                </ion-item>\n            </ion-list>    \n        </form>      \n    </div>    \n</ion-content>\n<ion-footer>  \n    <button  ion-button full id="fotterBtn" (click)="goRegiationPage();" color="appcolor">Sign Up</button>\n</ion-footer>\n\n\n\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular_index__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//@IonicPage()
var RegistationPage = (function () {
    function RegistationPage(storage, navCtrl, _form, http, loading, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this._form = _form;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.data = { firstName: "", lastName: "", mobileno: "", birtDate: "", email: "", skill: "", pass1: "", pass2: "", tokenNo: "" };
        this.registationForm = this._form.group({
            'data.firstName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.lastName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.mobileno': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.birtDate': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.skill': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.pass1': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.pass2': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.equalto('data.pass1')]],
        });
        this.data.birtDate = new Date().toISOString();
        this.storage.get('tokenNo').then(function (val) {
            _this.data.tokenNo = val;
        });
    }
    RegistationPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid) {
                return { 'equalTo': { isValid: isValid } };
            }
            else {
                return null;
            }
        };
    };
    RegistationPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    RegistationPage.prototype.saveData = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                firstName: _this.data.firstName,
                lastName: _this.data.lastName,
                email: _this.data.email,
                skill: _this.data.skill,
                password: _this.data.pass2,
                mobileNo: _this.data.mobileno,
                birtDate: _this.data.birtDate,
                tokenNo: _this.data.tokenNo,
            };
            _this.http.post('http://skillshare.web44.net/HomePage/registationMobile', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                if (res.toString() == "yes") {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Registration Successful',
                        duration: 2000
                    });
                    toast.present();
                    _this.navCtrl.pop();
                }
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Not Registration.',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    RegistationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registation',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\registation\registation.html"*/'<ion-header>\n  <ion-navbar hideBackButton="true">\n  <ion-buttons left class="backButton">\n    <button ion-button (click)="back()" >\n     <ion-icon name="arrow-round-back"></ion-icon>\n    </button>\n  </ion-buttons>\n    <ion-title class="titlePage">Registation</ion-title>     \n  </ion-navbar>\n</ion-header> \n              \n<ion-content class="registation fullBody">\n<div padding>\n</div>     \n<ion-card style="width:300px;margin-left: 30px;">\n<img src="http://skillshare.web44.net/Content/Image/AdminImages/Icon/registain.png" class="center-block">\n</ion-card>\n<div padding>\n</div>\n\n<form [formGroup]="registationForm">\n <ion-list >\n<ion-item>\n    <ion-input type="text" placeholder="Frist Name *"  formControlName="data.firstName"  [(ngModel)]="data.firstName" ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="text" placeholder="Last Name *"  formControlName="data.lastName" [(ngModel)]="data.lastName"></ion-input>\n  </ion-item>\n   <ion-item>\n    <ion-input type="number" placeholder="Mobile Numebr *"  formControlName="data.mobileno" [(ngModel)]="data.mobileno"></ion-input>\n  </ion-item>\n     \n  <ion-item>\n  <ion-label id="birtDateTitle">Birthday Date</ion-label>      \n  <ion-datetime displayFormat="DD-MM-YYYY"  min="1860" max="{{data.birtDate}}"   formControlName="data.birtDate"  [(ngModel)]="data.birtDate" ></ion-datetime>\n</ion-item>\n<ion-item>\n    <ion-input type="email" placeholder="Email *"  formControlName="data.email" [(ngModel)]="data.email"></ion-input>\n  </ion-item>\n<ion-item>\n    <ion-input type="email" placeholder="Skill (e.g. Swift4, Kotlin, AngularJs4, ect...) *"  formControlName="data.skill" [(ngModel)]="data.skill"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="password" placeholder="Password *"  formControlName="data.pass1" [(ngModel)]="data.pass1" ></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="password" placeholder="Confirm Password *"  formControlName="data.pass2" [(ngModel)]="data.pass2"></ion-input>\n  </ion-item>\n</ion-list>\n<div padding>  \n<button ion-button full type="submit" round color="appcolor"  (click)="saveData();" [disabled]="!registationForm.valid">Save</button>\n</div>  \n<ion-label class="text-center" color="redColor" id="hint">If Registation done then contact to Admin</ion-label>\n</form>   \n<div padding>             \n</div>     \n</ion-content>   '/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\registation\registation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], RegistationPage);
    return RegistationPage;
}());

//# sourceMappingURL=registation.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userlistpro_userlistpro__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__userdetails_userdetails__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//@IonicPage()
var UserlistPage = (function () {
    function UserlistPage(callNumber, personservice, navCtrl, navParams) {
        this.callNumber = callNumber;
        this.personservice = personservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getData();
    }
    UserlistPage.prototype.getData = function () {
        var _this = this;
        this.personservice.getUserListMethod().then(function (data) {
            _this.getAllDataShow = data;
        });
    };
    UserlistPage.prototype.calling = function (n) {
        this.callNumber.callNumber(n, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    UserlistPage.prototype.userDetailsOpen = function (userId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__userdetails_userdetails__["a" /* UserdetailsPage */], {
            "param1": userId
        });
    };
    UserlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userlist',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\userlist\userlist.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>User List</ion-title>\n  </ion-navbar>\n\n</ion-header>   \n   \n\n<ion-content class="fullBody">\n  <ion-grid>\n  <ion-row>    \n    <ion-col col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 class="grid1 colIcon"  *ngFor="let item of getAllDataShow"  >   \n             <div (click)="userDetailsOpen(item.id);">\n             <img src="{{item.imagePath}}" class="proPhoto img-responsive  img-circle" alt="proName"/>\n             <h6 class="title text-center">{{item.fullName}}</h6> \n        </div>\n             <button ion-button round id="btnCall" *ngIf="item.mobileStatus==\'Off\'" (click)="calling(item.mobileNo);">\n                  <ion-icon name="call"></ion-icon>  Call</button>\n             <button ion-button round id="btnCall" disabled="" *ngIf="item.mobileStatus==\'On\'">\n                  <ion-icon name="call"></ion-icon>  Call</button>\n    </ion-col>           \n  </ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\userlist\userlist.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_userlistpro_userlistpro__["a" /* UserlistproProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__providers_userlistpro_userlistpro__["a" /* UserlistproProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UserlistPage);
    return UserlistPage;
}());

//# sourceMappingURL=userlist.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserlistproProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
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


var UserlistproProvider = (function () {
    function UserlistproProvider(http) {
        this.http = http;
        this.data = null;
    }
    //User List
    UserlistproProvider.prototype.getUserListMethod = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                email: '',
            };
            _this.http.post('http://skillshare.web44.net/UserList/getAllUser', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.data = res.getAllUserList;
                resolve(_this.data);
            });
        });
    };
    UserlistproProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserlistproProvider);
    return UserlistproProvider;
}());

//# sourceMappingURL=userlistpro.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_userdetailspro_userdetailspro__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chattinguserroom_chattinguserroom__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//@IonicPage()  
var UserdetailsPage = (function () {
    function UserdetailsPage(storage, sms, callNumber, personservice, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.sms = sms;
        this.callNumber = callNumber;
        this.personservice = personservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { loginUserId: "", userId: "", fullName: "", mobileNo: "", email: "", birtDate: "", skill: "", mobileStatus: "", emailStatus: "", serverUserId: "" };
        this.data.userId = navParams.get('param1');
        this.getUserInfomation(this.data.userId);
        this.storage.get('userId').then(function (val) {
            _this.data.loginUserId = val;
        });
    }
    UserdetailsPage.prototype.getUserInfomation = function (userId) {
        var _this = this;
        this.personservice.getSingleUserInfo(userId).then(function (data) {
            _this.getSingleUserInfo = data;
            _this.data.fullName = _this.getSingleUserInfo[0].fullName;
            _this.data.mobileNo = _this.getSingleUserInfo[0].mobileno;
            _this.data.email = _this.getSingleUserInfo[0].email;
            _this.data.birtDate = _this.getSingleUserInfo[0].birtDate;
            _this.data.skill = _this.getSingleUserInfo[0].skill;
            _this.data.mobileStatus = _this.getSingleUserInfo[0].mobileStatus;
            _this.data.emailStatus = _this.getSingleUserInfo[0].emailStatus;
            _this.data.serverUserId = _this.getSingleUserInfo[0].userIdServer;
        });
    };
    UserdetailsPage.prototype.calling = function () {
        this.callNumber.callNumber(this.data.mobileNo, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    UserdetailsPage.prototype.smsShare = function () {
        var options = {
            replaceLineBreaks: false,
            android: {
                intent: 'INTENT' // Opens Default sms app
                //intent: '' // Sends sms without opening default sms app
            }
        };
        this.sms.send(this.data.mobileNo, '', options)
            .then(function () {
            console.log('sent');
        }, function () {
            console.log('not sent');
        });
    };
    UserdetailsPage.prototype.chattingRoom = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chattinguserroom_chattinguserroom__["a" /* ChattinguserroomPage */], {
            "param1": this.data.userId
        });
    };
    UserdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-userdetails',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\userdetails\userdetails.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>User Information</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n <ion-grid no-lines>   \n        <ion-row no-lines *ngFor="let item of getSingleUserInfo">       \n            <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 no-lines >\n                <div class="form-group coverImage">\n                <img  src="{{item.coverPhoto}}"  class="thisCoverImage " />\n                <div class="clearfix"> </div>\n                </div>\n                <div text-center class="form-group">\n                     <img src="{{item.imagePath}}"  class="proPhoto img-circle" /><br/>\n                     <div class="clearfix"></div>   \n                </div>      \n            </ion-col>      \n        </ion-row>\n    </ion-grid> \n     <ion-item no-lines class="profileInfo">           \n        <h2 >  {{data.fullName}} </h2>\n         <h5 *ngIf="data.mobileStatus==\'Off\'"> {{data.mobileNo}} </h5>\n          <h5 *ngIf="data.emailStatus==\'Off\'"> {{data.email}} </h5>\n          <h5> Birth Date : {{data.birtDate}} </h5>\n           <h5 *ngIf="data.skill!=null"> Skill : {{data.skill}} </h5>\n    </ion-item>\n      <ion-item no-lines>       \n       <button ion-button outline item-left (click)="calling();" *ngIf="data.mobileStatus==\'Off\'">\n             <ion-icon name="call"></ion-icon>  Call</button>\n             <button ion-button outline item-center  *ngIf="data.loginUserId != data.userId" (click)="chattingRoom()">  \n             <ion-icon name="chatbubbles"></ion-icon>  Chat</button>  \n            <button ion-button outline item-right (click)="smsShare();" *ngIf="data.mobileStatus==\'Off\'">\n             <ion-icon name="chatboxes"></ion-icon>  Message</button>\n    </ion-item>\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\userdetails\userdetails.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_userdetailspro_userdetailspro__["a" /* UserdetailsproProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_5__providers_userdetailspro_userdetailspro__["a" /* UserdetailsproProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], UserdetailsPage);
    return UserdetailsPage;
}());

//# sourceMappingURL=userdetails.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdetailsproProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
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


var UserdetailsproProvider = (function () {
    function UserdetailsproProvider(http) {
        this.http = http;
        this.data = null;
    }
    //User Details
    UserdetailsproProvider.prototype.getSingleUserInfo = function (val) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                userId: val,
            };
            _this.http.post('http://skillshare.web44.net/UserDetails/getSingleUserDetails', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.data = res.getSingleUserInfo;
                resolve(_this.data);
            });
        });
    };
    UserdetailsproProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserdetailsproProvider);
    return UserdetailsproProvider;
}());

//# sourceMappingURL=userdetailspro.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattinguserroomproProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
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


var ChattinguserroomproProvider = (function () {
    function ChattinguserroomproProvider(http) {
        this.http = http;
        this.data = null;
    }
    //User Details
    ChattinguserroomproProvider.prototype.getChattingMessage = function (userId, senderId) {
        var _this = this;
        this.data = null;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                userId: userId,
                senderId: senderId,
            };
            _this.http.post('http://skillshare.web44.net/ChattingUserRoom/getChattingMessage', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.data = res.getAllChatMessage;
                resolve(_this.data);
            });
        });
    };
    ChattinguserroomproProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChattinguserroomproProvider);
    return ChattinguserroomproProvider;
}());

//# sourceMappingURL=chattinguserroompro.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chnagepassword_chnagepassword__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyprofilePage = (function () {
    function MyprofilePage(platform, actionSheetCtrl, transfer, camera, file, filePath, http, loading, toastCtrl, storage, _form, navCtrl, navParams) {
        var _this = this;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.file = file;
        this.filePath = filePath;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this._form = _form;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.updateStatus = false;
        this.disName = false;
        this.profileIcon = null;
        this.profileCoverImage = null;
        this.data = { firstName: "", lastName: "", mobileNo: "", email: "", birtdayDate: "", skill: "", userId: "" };
        this.myprofileForm = this._form.group({
            'data.firstName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.lastName': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.mobileNo': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'data.email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(50), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i)])],
            'data.birtdayDate': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'data.skill': [null]
        });
        this.storage.get('userId').then(function (val) {
            _this.data.userId = val;
        });
        this.loadData();
    }
    MyprofilePage.prototype.presentActionSheet = function (type) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, type);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, type);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    MyprofilePage.prototype.takePicture = function (sourceType, type) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), type);
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName(), type);
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    //Create a new name for the image
    MyprofilePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    MyprofilePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName, type) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            //if(type=="profile")
            //this.profileIcon = newFileName;
            //else
            //this.coverImage = newFileName;
            _this.uploadImage(newFileName, type);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    MyprofilePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    MyprofilePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    MyprofilePage.prototype.uploadImage = function (val, type) {
        var _this = this;
        var url = "http://skillshare.web44.net/MyProfile1/mobileUploadImage";
        var targetPath = this.pathForImage(val);
        var options = {
            chunkedMode: false,
            fileKey: "file",
            fileName: val,
            mimeType: "multipart/form-data",
            params: {
                'file': val, 'userId': this.data.userId, 'type': type
            }
        };
        var fileTransfer = this.transfer.create();
        var loader = this.loading.create({
            content: 'Wait...',
        });
        loader.present();
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            loader.dismissAll();
            _this.platform.ready()
                .then(function () {
                console.log(_this.platform.is('android'));
            });
            _this.loadData();
            console.log('Image succesful uploaded.');
        }, function (err) {
            loader.dismissAll();
            alert('Error while uploading file.');
        });
    };
    MyprofilePage.prototype.loadData = function () {
        var _this = this;
        this.allUserData = null;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                userId: _this.data.userId,
            };
            _this.http.post('http://skillshare.web44.net/MyProfile1/getUserInfomation', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.allUserData = res.userAllInformation;
                _this.data.firstName = _this.allUserData[0].firstName;
                _this.data.lastName = _this.allUserData[0].lastName;
                _this.data.mobileNo = _this.allUserData[0].mobileno;
                _this.data.email = _this.allUserData[0].emailid;
                _this.data.birtdayDate = _this.allUserData[0].birtDate;
                _this.data.skill = _this.allUserData[0].skill;
                _this.base64Image = _this.allUserData[0].imagePath;
                _this.coverImage = _this.allUserData[0].coverPhoto;
                loader.dismiss();
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Data not found.',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    MyprofilePage.prototype.updateData = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                firstName: _this.data.firstName,
                lastName: _this.data.lastName,
                mobileNo: _this.data.mobileNo,
                email: _this.data.email,
                birtdayDate: _this.data.birtdayDate,
                skill: _this.data.skill,
                userId: _this.data.userId,
            };
            _this.http.post('http://skillshare.web44.net/MyProfile1/updateDataMobile', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                if (res.toString() == "yes") {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Update Data',
                        duration: 2000
                    });
                    toast.present();
                    _this.updateStatus = false;
                    _this.disName = false;
                }
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Not Update Data.',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    MyprofilePage.prototype.editAction = function () {
        this.updateStatus = true;
        this.disName = true;
    };
    MyprofilePage.prototype.openChangePassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__chnagepassword_chnagepassword__["a" /* ChnagepasswordPage */]);
    };
    MyprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myprofile',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\myprofile\myprofile.html"*/'<ion-header>\n    <ion-navbar>   \n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>My Profile</ion-title>\n    </ion-navbar>  \n</ion-header>    \n<ion-content class="fullBody">     \n    <ion-grid>   \n        <ion-row>       \n            <ion-col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 >\n                <div class="form-group coverImage">\n                <img  src="{{coverImage}}"  class="thisCoverImage " (click)="presentActionSheet(\'cover\')" />\n                 <button ion-button class="btn btn-sm btnCoverImage"  clear  (click)="presentActionSheet(\'cover\')">Change Cover Photo</button><br/>\n                    <div class="clearfix"> </div>\n                </div>\n                <div text-center class="form-group">\n                     <img  [hidden]="profileIcon !== null" src="{{base64Image}}"  class="proPhoto img-thumbnail img-circle" (click)="presentActionSheet(\'profile\')" /><br/>\n                     <img src="{{pathForImage(profileIcon)}}" class="proPhoto img-thumbnail img-circle" [hidden]="profileIcon === null" (click)="presentActionSheet(\'profile\')">\n                    <button ion-button class="btn btn-sm"  clear (click)="presentActionSheet()">Change Profile Photo</button>\n                     <div class="clearfix"></div>\n                </div>   \n            </ion-col>      \n        </ion-row>\n    </ion-grid>  \n     <form [formGroup]="myprofileForm">     \n    <ion-list >\n        <ion-item no-lines class="bgTrnasp">\n            <button ion-button item-right outline  (click)="editAction();">\n                <ion-icon name="create"></ion-icon>  Edit\n            </button>\n        </ion-item>\n        <ion-item class="bgTrnasp">\n            <ion-input  type="text" placeholder="First Name *"  [disabled]="!disName" formControlName="data.firstName" [(ngModel)]="data.firstName"></ion-input>\n        </ion-item>\n         <ion-item class="bgTrnasp">  \n            <ion-input type="text" placeholder="Last Name *" [disabled]="!disName" formControlName="data.lastName" [(ngModel)]="data.lastName"></ion-input>\n        </ion-item>\n        <ion-item class="bgTrnasp">\n            <ion-input type="number" placeholder="Mobile No *" [disabled]="!disName" formControlName="data.mobileNo" [(ngModel)]="data.mobileNo"></ion-input>\n        </ion-item>\n        <ion-item class="bgTrnasp">\n            <ion-input type="email" placeholder="Email *" [disabled]="!disName" formControlName="data.email" [(ngModel)]="data.email"></ion-input>\n        </ion-item>\n         <ion-item class="bgTrnasp">\n             <ion-label id="birtDateTitle" color="dark">Birthday Date</ion-label>  \n  <ion-datetime displayFormat="DD-MM-YYYY"  [disabled]="!disName"    formControlName="data.birtdayDate"  [(ngModel)]="data.birtdayDate" ></ion-datetime>\n</ion-item>\n       <ion-item class="bgTrnasp">\n            <ion-input type="text" placeholder="Skill " [disabled]="!disName" formControlName="data.skill"  [(ngModel)]="data.skill"></ion-input>\n        </ion-item>   \n        <ion-item no-lines class="bgTrnasp"><button ion-button  full round [disabled]="!myprofileForm.valid" *ngIf="updateStatus" (click)="updateData();" >Update</button></ion-item>\n        <ion-item no-lines class="bgTrnasp"><button ion-button item-right outline (click)="openChangePassword();">\n            <ion-icon name="lock"></ion-icon>  Change Password\n            </button></ion-item>\n    </ion-list>   \n     </form>\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\myprofile\myprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], MyprofilePage);
    return MyprofilePage;
}());

//# sourceMappingURL=myprofile.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChnagepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChnagepasswordPage = (function () {
    function ChnagepasswordPage(storage, http, loading, toastCtrl, _form, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this._form = _form;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { oldPass: "", newPass: "", confPass: "", userId: "" };
        this.changeProfileForm = this._form.group({
            'this.data.oldPass': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'this.data.newPass': ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            'this.data.confPass': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.equalto('this.data.newPass')]],
        });
        this.storage.get('userId').then(function (val) {
            _this.data.userId = val;
        });
    }
    ChnagepasswordPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid) {
                return { 'equalTo': { isValid: isValid } };
            }
            else {
                return null;
            }
        };
    };
    ChnagepasswordPage.prototype.changePass = function () {
        var _this = this;
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                oldPass: _this.data.oldPass,
                newPass: _this.data.newPass,
                userId: _this.data.userId
            };
            _this.http.post('http://skillshare.web44.net/MyProfile1/changePasswordMobile', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                if (res.toString() == "yes") {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Password is changed.',
                        duration: 2000
                    });
                    toast.present();
                    _this.navCtrl.pop();
                }
                else {
                    loader.dismiss();
                    var toast = _this.toastCtrl.create({
                        message: 'Password is not changed.Please enter old password correct.',
                        duration: 4000
                    });
                    toast.present();
                }
            }, function (err) {
                loader.dismiss();
                var toast = _this.toastCtrl.create({
                    message: 'Network Error',
                    duration: 2000
                });
                toast.present();
            });
        });
    };
    ChnagepasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chnagepassword',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\chnagepassword\chnagepassword.html"*/'<ion-header>\n    <ion-navbar>   \n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Change Password</ion-title>\n    </ion-navbar>  \n</ion-header> \n\n\n<ion-content class="fullBody">\n    <br/>\n    <form [formGroup]="changeProfileForm"> \n     <ion-list>\n        <ion-item class="bgTrnasp">\n            <ion-input type="password" placeholder="Old Password" formControlName="this.data.oldPass" [(ngModel)]="this.data.oldPass"></ion-input>\n        </ion-item>     \n        <ion-item class="bgTrnasp">     \n            <ion-input type="password" placeholder="New Password" formControlName="this.data.newPass" [(ngModel)]="this.data.newPass"></ion-input>\n        </ion-item>\n        <ion-item class="bgTrnasp">\n            <ion-input type="password" placeholder="Confirm Password" formControlName="this.data.confPass" [(ngModel)]="this.data.confPass"></ion-input>\n        </ion-item>\n          <ion-item no-lines class="bgTrnasp"><button ion-button  full round [disabled]="!changeProfileForm.valid" (click)="changePass();">Change Paasword</button></ion-item>\n     </ion-list>\n    </form>\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\chnagepassword\chnagepassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChnagepasswordPage);
    return ChnagepasswordPage;
}());

//# sourceMappingURL=chnagepassword.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattinguserlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chattinguserlist_chattinguserlist__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chattinguserroom_chattinguserroom__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//@IonicPage()
var ChattinguserlistPage = (function () {
    function ChattinguserlistPage(storage, personservice, navCtrl, navParams) {
        var _this = this;
        this.storage = storage;
        this.personservice = personservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { userId: "" };
        this.storage.get('userId').then(function (val) {
            _this.data.userId = val;
            _this.getAllUserChattingList(val);
        });
    }
    ChattinguserlistPage.prototype.getAllUserChattingList = function (val) {
        var _this = this;
        this.personservice.getChattiigUserList(val).then(function (data) {
            _this.getAllUserList = data;
        });
    };
    ChattinguserlistPage.prototype.chattingRoom = function (val) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chattinguserroom_chattinguserroom__["a" /* ChattinguserroomPage */], {
            "param1": val
        });
    };
    ChattinguserlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chattinguserlist',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\chattinguserlist\chattinguserlist.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>User List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list class="bgTrnasp">   \n            <ion-item #val *ngFor="let item of getAllUserList" (click)="chattingRoom(item.regUserId)">\n                <ion-avatar item-start >\n                    <img src="{{item.imagePath}}">\n                </ion-avatar>     \n                <h4 class="fullName">{{item.fullName}}</h4>\n            </ion-item>   \n        </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\chattinguserlist\chattinguserlist.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_chattinguserlist_chattinguserlist__["a" /* ChattinguserlistProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_chattinguserlist_chattinguserlist__["a" /* ChattinguserlistProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ChattinguserlistPage);
    return ChattinguserlistPage;
}());

//# sourceMappingURL=chattinguserlist.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattinguserlistProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
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


var ChattinguserlistProvider = (function () {
    function ChattinguserlistProvider(http) {
        this.http = http;
        this.data = null;
    }
    //Chattig User List
    ChattinguserlistProvider.prototype.getChattiigUserList = function (userId) {
        var _this = this;
        this.data = null;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                userId: userId,
            };
            _this.http.post('http://skillshare.web44.net/ChattingUserList/getChatUserList', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.data = res.getChattingUserComm;
                resolve(_this.data);
            });
        });
    };
    ChattinguserlistProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChattinguserlistProvider);
    return ChattinguserlistProvider;
}());

//# sourceMappingURL=chattinguserlist.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//@IonicPage()
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\feedback\feedback.html"*/'<!--\n  Generated template for the FeedbackPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>feedback</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//@IonicPage()
var SharingPage = (function () {
    function SharingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SharingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SharingPage');
    };
    SharingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sharing',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\sharing\sharing.html"*/'<!--\n  Generated template for the SharingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sharing</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\sharing\sharing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SharingPage);
    return SharingPage;
}());

//# sourceMappingURL=sharing.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settingpro_settingpro__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//@IonicPage()
var SettingPage = (function () {
    function SettingPage(http, loading, toastCtrl, storage, personservice, navCtrl, navParams) {
        var _this = this;
        this.http = http;
        this.loading = loading;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.personservice = personservice;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { userId: "" };
        this.storage.get('userId').then(function (val) {
            _this.data.userId = val;
            _this.getSettingUser(val);
        });
    }
    SettingPage.prototype.getSettingUser = function (val) {
        var _this = this;
        this.getAllStatusData = null;
        this.personservice.getMobileAndEmailStatus(val).then(function (data) {
            _this.getAllStatusData = data;
            if (_this.getAllStatusData[0].mobileStatus == "On") {
                _this.mobileStatusL = true;
            }
            if (_this.getAllStatusData[0].mobileStatus == "Off") {
                _this.mobileStatusL = false;
            }
            if (_this.getAllStatusData[0].emailStatus == "On") {
                _this.emailStatusL = true;
            }
            if (_this.getAllStatusData[0].emailStatus == "Off") {
                _this.emailStatusL = false;
            }
        });
    };
    SettingPage.prototype.updateItem = function () {
        var _this = this;
        if (this.mobileStatusL == false) {
            this.mobileLocalStatus = "Off";
            this.mobileStatusL = false;
        }
        else {
            this.mobileLocalStatus = "On";
            this.mobileStatusL = true;
        }
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                mobileStatus: _this.mobileLocalStatus,
                userId: _this.data.userId,
            };
            _this.http.post('http://skillshare.web44.net/Setting/mobileStatusUpdate', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                if (res.toString() == "yes") {
                    loader.dismiss();
                }
            }, function (err) {
                loader.dismiss();
            });
        });
    };
    SettingPage.prototype.emailStatusChange = function () {
        var _this = this;
        if (this.emailStatusL == false) {
            this.mobileLocalStatus = "Off";
            this.emailStatusL = false;
        }
        else {
            this.mobileLocalStatus = "On";
            this.emailStatusL = true;
        }
        var loader = this.loading.create({
            content: 'Wating.........',
        });
        loader.present().then(function () {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                emailStatus: _this.mobileLocalStatus,
                userId: _this.data.userId,
            };
            _this.http.post('http://skillshare.web44.net/Setting/emailStatusUpdate', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                if (res.toString() == "yes") {
                    loader.dismiss();
                }
            }, function (err) {
                loader.dismiss();
            });
        });
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\setting\setting.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Setting</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <div>\n    <ion-item>       \n        <ion-label color="dark"> Hide Email Details </ion-label>\n        <ion-toggle  checked="{{emailStatusL}}" [(ngModel)]="emailStatusL"  (ionChange)="emailStatusChange()"></ion-toggle>\n    </ion-item>\n     <ion-item>    \n        <ion-label color="dark"> Hide Contact Details</ion-label>     \n        <ion-toggle  checked="{{mobileStatusL}}" color="secondary"  [(ngModel)]="mobileStatusL"  (ionChange)="updateItem()"></ion-toggle>\n    </ion-item>       \n    </div>\n        \n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\setting\setting.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_settingpro_settingpro__["a" /* SettingproProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__providers_settingpro_settingpro__["a" /* SettingproProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingproProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(14);
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


var SettingproProvider = (function () {
    function SettingproProvider(http) {
        this.http = http;
        this.data = null;
    }
    //User Details   
    SettingproProvider.prototype.getMobileAndEmailStatus = function (val) {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            var headersNew = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
            headersNew.append('Content-Type', 'application/json');
            var data = {
                userId: val,
            };
            _this.http.post('http://skillshare.web44.net/Setting/getSettingStatus', JSON.stringify(data), {
                headers: headersNew
            })
                .subscribe(function (res) {
                _this.data = res.getUserSetting;
                resolve(_this.data);
            });
        });
    };
    SettingproProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SettingproProvider);
    return SettingproProvider;
}());

//# sourceMappingURL=settingpro.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//@IonicPage()
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\about\about.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n   \n<ion-content class="fullBody">\n\n   <ion-item class="bgTrnasp" no-lines>  \n       <img src="http://skillshare.web44.net/Content/Image/Mobile%20App/Global/icon.png" id="appIcon" alt=""><br/>\n       <h2 class="text-center">USkillShare</h2>  \n           <h4 class="text-center">Version : 0.0.1</h4>\n  </ion-item>\n     <ion-item class="bgTrnasp" no-lines>  \n   \n  </ion-item>\n    \n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_sms__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_registation_registation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_specificlanuage_specificlanuage__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_userlist_userlist__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_chnagepassword_chnagepassword__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_globalchatting_globalchatting__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_sharing_sharing__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_userdetails_userdetails__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_setting_setting__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_about_about__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_chattinguserlist_chattinguserlist__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_chattinguserroom_chattinguserroom__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_prohomepage_prohomepage__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_userlistpro_userlistpro__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_userdetailspro_userdetailspro__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_settingpro_settingpro__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_chattinguserroompro_chattinguserroompro__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_chattinguserlist_chattinguserlist__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























4;








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_18__pages_registation_registation__["a" /* RegistationPage */], __WEBPACK_IMPORTED_MODULE_19__pages_specificlanuage_specificlanuage__["a" /* SpecificlanuagePage */], __WEBPACK_IMPORTED_MODULE_20__pages_userlist_userlist__["a" /* UserlistPage */], __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__["a" /* MyprofilePage */], __WEBPACK_IMPORTED_MODULE_22__pages_chnagepassword_chnagepassword__["a" /* ChnagepasswordPage */], __WEBPACK_IMPORTED_MODULE_23__pages_globalchatting_globalchatting__["a" /* GlobalchattingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__["a" /* FeedbackPage */], __WEBPACK_IMPORTED_MODULE_25__pages_sharing_sharing__["a" /* SharingPage */], __WEBPACK_IMPORTED_MODULE_26__pages_userdetails_userdetails__["a" /* UserdetailsPage */], __WEBPACK_IMPORTED_MODULE_27__pages_setting_setting__["a" /* SettingPage */], __WEBPACK_IMPORTED_MODULE_28__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_29__pages_chattinguserlist_chattinguserlist__["a" /* ChattinguserlistPage */], __WEBPACK_IMPORTED_MODULE_30__pages_chattinguserroom_chattinguserroom__["a" /* ChattinguserroomPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsPlacement: 'bottom', tabsHideOnSubPages: true }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_18__pages_registation_registation__["a" /* RegistationPage */], __WEBPACK_IMPORTED_MODULE_19__pages_specificlanuage_specificlanuage__["a" /* SpecificlanuagePage */], __WEBPACK_IMPORTED_MODULE_20__pages_userlist_userlist__["a" /* UserlistPage */], __WEBPACK_IMPORTED_MODULE_21__pages_myprofile_myprofile__["a" /* MyprofilePage */], __WEBPACK_IMPORTED_MODULE_22__pages_chnagepassword_chnagepassword__["a" /* ChnagepasswordPage */], __WEBPACK_IMPORTED_MODULE_23__pages_globalchatting_globalchatting__["a" /* GlobalchattingPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_feedback_feedback__["a" /* FeedbackPage */], __WEBPACK_IMPORTED_MODULE_25__pages_sharing_sharing__["a" /* SharingPage */], __WEBPACK_IMPORTED_MODULE_26__pages_userdetails_userdetails__["a" /* UserdetailsPage */], __WEBPACK_IMPORTED_MODULE_27__pages_setting_setting__["a" /* SettingPage */], __WEBPACK_IMPORTED_MODULE_28__pages_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_29__pages_chattinguserlist_chattinguserlist__["a" /* ChattinguserlistPage */], __WEBPACK_IMPORTED_MODULE_30__pages_chattinguserroom_chattinguserroom__["a" /* ChattinguserroomPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_prohomepage_prohomepage__["a" /* ProhomepageProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_userlistpro_userlistpro__["a" /* UserlistproProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_userlistpro_userlistpro__["a" /* UserlistproProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_userdetailspro_userdetailspro__["a" /* UserdetailsproProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_settingpro_settingpro__["a" /* SettingproProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_chattinguserroompro_chattinguserroompro__["a" /* ChattinguserroomproProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_chattinguserlist_chattinguserlist__["a" /* ChattinguserlistProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_push__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_userlist_userlist__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chattinguserlist_chattinguserlist__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sharing_sharing__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(226);
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
    function MyApp(push, alertCtrl, storage, platform, statusBar, splashScreen) {
        var _this = this;
        this.push = push;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.pushsetup();
            _this.showPage();
            splashScreen.hide();
        });
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/slideMenuHome.png' },
            { title: 'User List', component: __WEBPACK_IMPORTED_MODULE_8__pages_userlist_userlist__["a" /* UserlistPage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderUserList.png' },
            { title: 'Chat', component: __WEBPACK_IMPORTED_MODULE_10__pages_chattinguserlist_chattinguserlist__["a" /* ChattinguserlistPage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderChatting.png' },
            { title: 'My Profile', component: __WEBPACK_IMPORTED_MODULE_9__pages_myprofile_myprofile__["a" /* MyprofilePage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderMyProfile.png' },
            { title: 'Feedback', component: __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__["a" /* FeedbackPage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderFeedback.png' },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* AboutPage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderAbout.png' },
            { title: 'Setting', component: __WEBPACK_IMPORTED_MODULE_13__pages_setting_setting__["a" /* SettingPage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/slideSetting.png' },
            { title: 'Share', component: __WEBPACK_IMPORTED_MODULE_12__pages_sharing_sharing__["a" /* SharingPage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderShare.png' },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */], icon: 'http://skillshare.web44.net/Content/Image/Mobile%20App/SlideMenu/sliderLogout.png' },
        ];
    }
    MyApp.prototype.showPage = function () {
        var _this = this;
        this.storage.get('userId').then(function (val) {
            _this.storage.get('email').then(function (val2) {
                if (val != null && val2 != null) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
                }
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        if (page.component == __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]) {
            this.nav.setRoot(page.component);
        }
        else if (page.component == __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]) {
            var confirm_1 = this.alertCtrl.create({
                title: '',
                message: 'Are you sure you want to Sign out?',
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.storage.remove('userId');
                            _this.storage.remove('email');
                            _this.storage.remove('password');
                            _this.storage.remove('userType');
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            this.nav.push(page.component);
        }
    };
    MyApp.prototype.pushsetup = function () {
        var _this = this;
        var options = {
            android: {
                senderID: '253840953533',
                sound: "true",
                vibrate: "true",
                forceShow: "true"
            },
            browser: {
                pushServiceURL: 'http://skillshare.web44.net'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (notification) {
            if (notification.additionalData.foreground) {
                var youralert = _this.alertCtrl.create({
                    title: 'USkillShare',
                    message: notification.message
                });
                youralert.present();
            }
        });
        pushObject.on('registration').subscribe(function (registration) {
            _this.storage.set('tokenNo', registration.registrationId);
        });
        pushObject.on('error').subscribe(function (error) { return alert('Error with Push plugin' + error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-page',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\app\app.html"*/'<ion-menu [content]="content" color="appcolor"  id="menu1" >\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content color="appcolor" class="app-page">\n        <ion-list color="appcolor" style="background-color: white;" >\n            <span  menuClose item-left  color="appcolor"  ion-item *ngFor="let p of pages" (click)="openPage(p)"  >\n                   <img src="{{p.icon}}" alt="icon" item-left/><span item-left>{{p.title}}</span>\n            </span>\n        </ion-list>\n    </ion-content>\n\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"  color="appcolor"></ion-nav>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalchattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//@IonicPage()
var GlobalchattingPage = (function () {
    function GlobalchattingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GlobalchattingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GlobalchattingPage');
    };
    GlobalchattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-globalchatting',template:/*ion-inline-start:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\globalchatting\globalchatting.html"*/'<!--\n  Generated template for the GlobalchattingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>globalchatting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Project\Ionic\USkillShare2\USkillShare\src\pages\globalchatting\globalchatting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], GlobalchattingPage);
    return GlobalchattingPage;
}());

//# sourceMappingURL=globalchatting.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map