(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_model_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/model-list.component */ "./src/app/model/model-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property/property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template/template.component */ "./src/app/template/template.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./language/language.component */ "./src/app/language/language.component.ts");
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./languages/languages.component */ "./src/app/languages/languages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'model', component: _model_model_list_component__WEBPACK_IMPORTED_MODULE_2__["ModelListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'property', component: _property_property_component__WEBPACK_IMPORTED_MODULE_5__["PropertyComponent"] },
    { path: 'template', component: _template_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"] },
    { path: 'language', component: _language_language_component__WEBPACK_IMPORTED_MODULE_8__["LanguageComponent"] },
    { path: 'languages', component: _languages_languages_component__WEBPACK_IMPORTED_MODULE_9__["LanguagesComponent"] },
    { path: 'unauthorized', component: _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_7__["UnauthorizedComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: initialize, loadTranslate, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTranslate", function() { return loadTranslate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var _services_auth_Interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/auth.Interceptor */ "./src/app/services/auth.Interceptor.ts");
/* harmony import */ var _services_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.guard */ "./src/app/services/auth.guard.ts");
/* harmony import */ var _services_api_intercepter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/api.intercepter */ "./src/app/services/api.intercepter.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _root_app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./root/app.component */ "./src/app/root/app.component.ts");
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./delete-confirmation/delete-confirmation.component */ "./src/app/delete-confirmation/delete-confirmation.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/unauthorized/unauthorized.component.ts");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _model_model_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./model/model-list.component */ "./src/app/model/model-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./property/property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./template/template.component */ "./src/app/template/template.component.ts");
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./language/language.component */ "./src/app/language/language.component.ts");
/* harmony import */ var _languages_languages_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./languages/languages.component */ "./src/app/languages/languages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































function initialize(configService) {
    return function () { return configService.loadConfig("http://localhost:8101/api/js/json/config.js"); };
}
function loadTranslate(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, 'http://localhost:8101/api/js/json/languages/', '.js');
}
var AppModule = /** @class */ (function () {
    function AppModule(oidcSecurityService, configService, translate, sessionStorage) {
        var _this = this;
        this.oidcSecurityService = oidcSecurityService;
        this.configService = configService;
        this.translate = translate;
        this.sessionStorage = sessionStorage;
        console.log('APP STARTING');
        this.configService.onConfigurationLoaded.subscribe(function () {
            console.log('Configuration loaded.');
            _this.configService.setupSSO(_this.oidcSecurityService);
            _this.translate.setDefaultLang(_this.configService.config.DefaultLanguage);
            _this.translate.use(_this.configService.config.DefaultLanguage);
            _this.translate.onLangChange.subscribe(function (event) {
                _this.sessionStorage.store('current_language', event.lang);
            });
        });
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTreeModule"],
                ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__["Ng2Webstorage"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_14__["AuthModule"].forRoot(),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({ closeButton: true, timeOut: 2000, positionClass: 'toast-bottom-right' }),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                    loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"], useFactory: loadTranslate, deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]] }
                })
            ],
            declarations: [
                _root_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"],
                _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_22__["DeleteConfirmationComponent"],
                _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_23__["UnauthorizedComponent"],
                _model_model_list_component__WEBPACK_IMPORTED_MODULE_25__["ModelListComponent"],
                _model_model_list_component__WEBPACK_IMPORTED_MODULE_25__["ModelListComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
                _model_model_list_component__WEBPACK_IMPORTED_MODULE_25__["NgbdModalContentComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                _property_property_component__WEBPACK_IMPORTED_MODULE_28__["PropertyComponent"],
                _template_template_component__WEBPACK_IMPORTED_MODULE_29__["TemplateComponent"],
                _language_language_component__WEBPACK_IMPORTED_MODULE_30__["LanguageComponent"],
                _languages_languages_component__WEBPACK_IMPORTED_MODULE_31__["LanguagesComponent"]
            ],
            providers: [
                angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_14__["OidcSecurityService"],
                _services_log_service__WEBPACK_IMPORTED_MODULE_19__["LogService"],
                _services_config_service__WEBPACK_IMPORTED_MODULE_18__["ConfigService"],
                _services_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _services_device_service__WEBPACK_IMPORTED_MODULE_24__["DeviceService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], useFactory: initialize, multi: true, deps: [_services_config_service__WEBPACK_IMPORTED_MODULE_18__["ConfigService"]] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_auth_Interceptor__WEBPACK_IMPORTED_MODULE_15__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _services_api_intercepter__WEBPACK_IMPORTED_MODULE_17__["ApiInterceptor"], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], useValue: 'en-US' }
            ],
            entryComponents: [_model_model_list_component__WEBPACK_IMPORTED_MODULE_25__["NgbdModalContentComponent"], _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_22__["DeleteConfirmationComponent"]],
            bootstrap: [_root_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_14__["OidcSecurityService"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_18__["ConfigService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_9__["SessionStorageService"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code/dto.ts":
/*!*****************************!*\
  !*** ./src/app/code/dto.ts ***!
  \*****************************/
/*! exports provided: ServiceResponse, ResultType, BaseDto, PagingDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceResponse", function() { return ServiceResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultType", function() { return ResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDto", function() { return BaseDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingDto", function() { return PagingDto; });
/*
 * @Author: Atilla Tanrikulu
 * @Date: 2018-04-16 10:10:45
 * @Last Modified by:   Atilla Tanrikulu
 * @Last Modified time: 2018-04-16 10:10:45
 */
var ServiceResponse = /** @class */ (function () {
    function ServiceResponse() {
    }
    return ServiceResponse;
}());

var ResultType;
(function (ResultType) {
    ResultType[ResultType["Information"] = 1] = "Information";
    ResultType[ResultType["Validation"] = 2] = "Validation";
    ResultType[ResultType["Success"] = 3] = "Success";
    ResultType[ResultType["Warning"] = 4] = "Warning";
    ResultType[ResultType["Error"] = 5] = "Error";
})(ResultType || (ResultType = {}));
var BaseDto = /** @class */ (function () {
    function BaseDto() {
    }
    return BaseDto;
}());

var PagingDto = /** @class */ (function () {
    function PagingDto() {
        this.pageNumber = 1;
        this.pageSize = 10; // TODO: Atilla DefaultPagingSize parametresinden alinacak
        this.orderBy = 'Id';
        this.order = 'desc';
        this.count = 0;
    }
    return PagingDto;
}());



/***/ }),

/***/ "./src/app/delete-confirmation/delete-confirmation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/delete-confirmation/delete-confirmation.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationComponent", function() { return DeleteConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DeleteConfirmationComponent = /** @class */ (function () {
    function DeleteConfirmationComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteConfirmationComponent.prototype.onNoClick = function (dto) {
        this.data.confirmation = 'NO';
        this.dialogRef.close(this.data);
    };
    DeleteConfirmationComponent.prototype.onYesClick = function (dto) {
        this.data.confirmation = 'YES';
        this.dialogRef.close(this.data);
    };
    DeleteConfirmationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-confirmation',
            template: "<h1 mat-dialog-title>{{'LBL_WARNING' | translate}}</h1>\n  <div mat-dialog-content>\n    <p>{{ 'ARE_YOU_SURE' | translate }}</p>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick(data.dto)\" cdkFocusInitial>{{ 'NO' | translate}}</button>\n    <button mat-button (click)=\"onYesClick(data.dto)\">{{ 'YES' | translate }}</button>\n  </div>\n  "
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DeleteConfirmationComponent);
    return DeleteConfirmationComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/language/language.component.css":
/*!*************************************************!*\
  !*** ./src/app/language/language.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Structure */\r\ntable {\r\n  width: 100%;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n.w3-example {\r\n  background-color: #f1f1f1;\r\n  padding: 0.01em 16px;\r\n  margin: 0px 0;\r\n  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)!important;\r\n}\r\n/* W3.CSS 4.10 February 2018 by Jan Egil and Borge Refsnes */\r\n/* html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit} */\r\n/* Extract from normalize.css by Nicolas Gallagher and Jonathan Neal git.io/normalize */\r\n/* html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0} */\r\narticle,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}\r\naudio,canvas,progress,video{display:inline-block}\r\nprogress{vertical-align:baseline}\r\naudio:not([controls]){display:none;height:0}\r\n[hidden],template{display:none}\r\na{background-color:transparent;-webkit-text-decoration-skip:objects}\r\na:active,a:hover{outline-width:0}\r\nabbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}\r\ndfn{font-style:italic}\r\nmark{background:#ff0;color:#000}\r\nsmall{font-size:80%}\r\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\r\nsub{bottom:-0.25em}\r\nsup{top:-0.5em}\r\nfigure{margin:1em 40px}\r\nimg{border-style:none}\r\nsvg:not(:root){overflow:hidden}\r\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\r\nhr{box-sizing:content-box;height:0;overflow:visible}\r\nbutton,input,select,textarea{font:inherit;margin:0}\r\noptgroup{font-weight:bold}\r\nbutton,input{overflow:visible}\r\nbutton,select{text-transform:none}\r\nbutton,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}\r\nbutton::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner{border-style:none;padding:0}\r\nbutton:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring{outline:1px dotted ButtonText}\r\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\r\nlegend{color:inherit;display:table;max-width:100%;padding:0;white-space:normal}\r\ntextarea{overflow:auto}\r\n[type=checkbox],[type=radio]{padding:0}\r\n[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}\r\n[type=search]{-webkit-appearance:textfield;outline-offset:-2px}\r\n[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}\r\n::-webkit-input-placeholder{color:inherit;opacity:0.54}\r\n::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}\r\n/* End extract */\r\n/* html,body{font-family:Verdana,sans-serif;font-size:15px;line-height:1.5}html{overflow-x:hidden} */\r\nh1{font-size:36px}\r\nh2{font-size:30px}\r\nh3{font-size:24px}\r\nh4{font-size:20px}\r\nh5{font-size:18px}\r\nh6{font-size:16px}\r\n.w3-serif{font-family:serif}\r\nh1,h2,h3,h4,h5,h6{font-family:\"Segoe UI\",Arial,sans-serif;font-weight:400;margin:10px 0}\r\n.w3-wide{letter-spacing:4px}\r\nhr{border:0;border-top:1px solid #eee;margin:20px 0}\r\n.w3-image{max-width:100%;height:auto}\r\nimg{vertical-align:middle}\r\na{color:inherit}\r\n.w3-table,.w3-table-all{border-collapse:collapse;border-spacing:0;width:100%;display:table}\r\n.w3-table-all{border:1px solid #ccc}\r\n.w3-bordered tr,.w3-table-all tr{border-bottom:1px solid #ddd}\r\n.w3-striped tbody tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-table-all tr:nth-child(odd){background-color:#fff}\r\n.w3-table-all tr:nth-child(even){background-color:#f1f1f1}\r\n.w3-hoverable tbody tr:hover,.w3-ul.w3-hoverable li:hover{background-color:#ccc}\r\n.w3-centered tr th,.w3-centered tr td{text-align:center}\r\n.w3-table td,.w3-table th,.w3-table-all td,.w3-table-all th{padding:8px 8px;display:table-cell;text-align:left;vertical-align:top}\r\n.w3-table th:first-child,.w3-table td:first-child,.w3-table-all th:first-child,.w3-table-all td:first-child{padding-left:16px}\r\n.w3-btn,.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}\r\n.w3-btn:hover{box-shadow:0 8px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-btn,.w3-button{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}\r\n.w3-disabled,.w3-btn:disabled,.w3-button:disabled{cursor:not-allowed;opacity:0.3}\r\n.w3-disabled *,:disabled *{pointer-events:none}\r\n.w3-btn.w3-disabled:hover,.w3-btn:disabled:hover{box-shadow:none}\r\n.w3-badge,.w3-tag{background-color:#000;color:#fff;display:inline-block;padding-left:8px;padding-right:8px;text-align:center}\r\n.w3-badge{border-radius:50%}\r\n.w3-ul{list-style-type:none;padding:0;margin:0}\r\n.w3-ul li{padding:8px 16px;border-bottom:1px solid #ddd}\r\n.w3-ul li:last-child{border-bottom:none}\r\n.w3-tooltip,.w3-display-container{position:relative}\r\n.w3-tooltip .w3-text{display:none}\r\n.w3-tooltip:hover .w3-text{display:inline-block}\r\n.w3-ripple:active{opacity:0.5}\r\n.w3-ripple{transition:opacity 0s}\r\n.w3-input{padding:8px;display:block;border:none;border-bottom:1px solid #ccc;width:100%}\r\n.w3-select{padding:9px 0;width:100%;border:none;border-bottom:1px solid #ccc}\r\n.w3-dropdown-click,.w3-dropdown-hover{position:relative;display:inline-block;cursor:pointer}\r\n.w3-dropdown-hover:hover .w3-dropdown-content{display:block}\r\n.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}\r\n.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}\r\n.w3-dropdown-content{cursor:auto;color:#000;background-color:#fff;display:none;position:absolute;min-width:160px;margin:0;padding:0;z-index:1}\r\n.w3-check,.w3-radio{width:24px;height:24px;position:relative;top:6px}\r\n.w3-sidebar{height:100%;width:200px;background-color:#fff;position:fixed!important;z-index:1;overflow:auto}\r\n.w3-bar-block .w3-dropdown-hover,.w3-bar-block .w3-dropdown-click{width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-dropdown-content,.w3-bar-block .w3-dropdown-click .w3-dropdown-content{min-width:100%}\r\n.w3-bar-block .w3-dropdown-hover .w3-button,.w3-bar-block .w3-dropdown-click .w3-button{width:100%;text-align:left;padding:8px 16px}\r\n.w3-main,#main{transition:margin-left .4s}\r\n.w3-modal{z-index:3;display:none;padding-top:100px;position:fixed;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgb(0,0,0);background-color:rgba(0,0,0,0.4)}\r\n.w3-modal-content{margin:auto;background-color:#fff;position:relative;padding:0;outline:0;width:600px}\r\n.w3-bar{width:100%;overflow:hidden}\r\n.w3-center .w3-bar{display:inline-block;width:auto}\r\n.w3-bar .w3-bar-item{padding:8px 16px;float:left;width:auto;border:none;display:block;outline:0}\r\n.w3-bar .w3-dropdown-hover,.w3-bar .w3-dropdown-click{position:static;float:left}\r\n.w3-bar .w3-button{white-space:normal}\r\n.w3-bar-block .w3-bar-item{width:100%;display:block;padding:8px 16px;text-align:left;border:none;white-space:normal;float:none;outline:0}\r\n.w3-bar-block.w3-center .w3-bar-item{text-align:center}\r\n.w3-block{display:block;width:100%}\r\n.w3-responsive{display:block;overflow-x:auto}\r\n.w3-container:after,.w3-container:before,.w3-panel:after,.w3-panel:before,.w3-row:after,.w3-row:before,.w3-row-padding:after,.w3-row-padding:before,\r\n.w3-cell-row:before,.w3-cell-row:after,.w3-clear:after,.w3-clear:before,.w3-bar:before,.w3-bar:after{content:\"\";display:table;clear:both}\r\n.w3-col,.w3-half,.w3-third,.w3-twothird,.w3-threequarter,.w3-quarter{float:left;width:100%}\r\n.w3-col.s1{width:8.33333%}\r\n.w3-col.s2{width:16.66666%}\r\n.w3-col.s3{width:24.99999%}\r\n.w3-col.s4{width:33.33333%}\r\n.w3-col.s5{width:41.66666%}\r\n.w3-col.s6{width:49.99999%}\r\n.w3-col.s7{width:58.33333%}\r\n.w3-col.s8{width:66.66666%}\r\n.w3-col.s9{width:74.99999%}\r\n.w3-col.s10{width:83.33333%}\r\n.w3-col.s11{width:91.66666%}\r\n.w3-col.s12{width:99.99999%}\r\n@media (min-width:601px){.w3-col.m1{width:8.33333%}.w3-col.m2{width:16.66666%}.w3-col.m3,.w3-quarter{width:24.99999%}.w3-col.m4,.w3-third{width:33.33333%}\r\n.w3-col.m5{width:41.66666%}.w3-col.m6,.w3-half{width:49.99999%}.w3-col.m7{width:58.33333%}.w3-col.m8,.w3-twothird{width:66.66666%}\r\n.w3-col.m9,.w3-threequarter{width:74.99999%}.w3-col.m10{width:83.33333%}.w3-col.m11{width:91.66666%}.w3-col.m12{width:99.99999%}}\r\n@media (min-width:993px){.w3-col.l1{width:8.33333%}.w3-col.l2{width:16.66666%}.w3-col.l3{width:24.99999%}.w3-col.l4{width:33.33333%}\r\n.w3-col.l5{width:41.66666%}.w3-col.l6{width:49.99999%}.w3-col.l7{width:58.33333%}.w3-col.l8{width:66.66666%}\r\n.w3-col.l9{width:74.99999%}.w3-col.l10{width:83.33333%}.w3-col.l11{width:91.66666%}.w3-col.l12{width:99.99999%}}\r\n.w3-content{max-width:980px;margin:auto}\r\n.w3-rest{overflow:hidden}\r\n.w3-cell-row{display:table;width:100%}\r\n.w3-cell{display:table-cell}\r\n.w3-cell-top{vertical-align:top}\r\n.w3-cell-middle{vertical-align:middle}\r\n.w3-cell-bottom{vertical-align:bottom}\r\n.w3-hide{display:none!important}\r\n.w3-show-block,.w3-show{display:block!important}\r\n.w3-show-inline-block{display:inline-block!important}\r\n@media (max-width:600px){.w3-modal-content{margin:0 10px;width:auto!important}.w3-modal{padding-top:30px}\r\n.w3-dropdown-hover.w3-mobile .w3-dropdown-content,.w3-dropdown-click.w3-mobile .w3-dropdown-content{position:relative}\t\r\n.w3-hide-small{display:none!important}.w3-mobile{display:block;width:100%!important}.w3-bar-item.w3-mobile,.w3-dropdown-hover.w3-mobile,.w3-dropdown-click.w3-mobile{text-align:center}\r\n.w3-dropdown-hover.w3-mobile,.w3-dropdown-hover.w3-mobile .w3-btn,.w3-dropdown-hover.w3-mobile .w3-button,.w3-dropdown-click.w3-mobile,.w3-dropdown-click.w3-mobile .w3-btn,.w3-dropdown-click.w3-mobile .w3-button{width:100%}}\r\n@media (max-width:768px){.w3-modal-content{width:500px}.w3-modal{padding-top:50px}}\r\n@media (min-width:993px){.w3-modal-content{width:900px}.w3-hide-large{display:none!important}.w3-sidebar.w3-collapse{display:block!important}}\r\n@media (max-width:992px) and (min-width:601px){.w3-hide-medium{display:none!important}}\r\n@media (max-width:992px){.w3-sidebar.w3-collapse{display:none}.w3-main{margin-left:0!important;margin-right:0!important}}\r\n.w3-top,.w3-bottom{position:fixed;width:100%;z-index:1}\r\n.w3-top{top:0}\r\n.w3-bottom{bottom:0}\r\n.w3-overlay{position:fixed;display:none;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.5);z-index:2}\r\n.w3-display-topleft{position:absolute;left:0;top:0}\r\n.w3-display-topright{position:absolute;right:0;top:0}\r\n.w3-display-bottomleft{position:absolute;left:0;bottom:0}\r\n.w3-display-bottomright{position:absolute;right:0;bottom:0}\r\n.w3-display-middle{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%)}\r\n.w3-display-left{position:absolute;top:50%;left:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(-0%,-50%)}\r\n.w3-display-right{position:absolute;top:50%;right:0%;-webkit-transform:translate(0%,-50%);transform:translate(0%,-50%);-ms-transform:translate(0%,-50%)}\r\n.w3-display-topmiddle{position:absolute;left:50%;top:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-bottommiddle{position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%,0%);transform:translate(-50%,0%);-ms-transform:translate(-50%,0%)}\r\n.w3-display-container:hover .w3-display-hover{display:block}\r\n.w3-display-container:hover span.w3-display-hover{display:inline-block}\r\n.w3-display-hover{display:none}\r\n.w3-display-position{position:absolute}\r\n.w3-circle{border-radius:50%}\r\n.w3-round-small{border-radius:2px}\r\n.w3-round,.w3-round-medium{border-radius:4px}\r\n.w3-round-large{border-radius:8px}\r\n.w3-round-xlarge{border-radius:16px}\r\n.w3-round-xxlarge{border-radius:32px}\r\n.w3-row-padding,.w3-row-padding>.w3-half,.w3-row-padding>.w3-third,.w3-row-padding>.w3-twothird,.w3-row-padding>.w3-threequarter,.w3-row-padding>.w3-quarter,.w3-row-padding>.w3-col{padding:0 8px}\r\n.w3-container,.w3-panel{padding:0.01em 16px}\r\n.w3-panel{margin-top:16px;margin-bottom:16px}\r\n.w3-code,.w3-codespan{font-family:Consolas,\"courier new\";font-size:16px}\r\n.w3-code{width:auto;background-color:#fff;padding:8px 12px;border-left:4px solid #4CAF50;word-wrap:break-word}\r\n.w3-codespan{color:crimson;background-color:#f1f1f1;padding-left:4px;padding-right:4px;font-size:110%}\r\n.w3-card,.w3-card-2{box-shadow:0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)}\r\n.w3-card-4,.w3-hover-shadow:hover{box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)}\r\n.w3-spin{-webkit-animation:w3-spin 2s infinite linear;animation:w3-spin 2s infinite linear}\r\n@-webkit-keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n@keyframes w3-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}\r\n.w3-animate-fading{-webkit-animation:fading 10s infinite;animation:fading 10s infinite}\r\n@-webkit-keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n@keyframes fading{0%{opacity:0}50%{opacity:1}100%{opacity:0}}\r\n.w3-animate-opacity{-webkit-animation:opac 0.8s;animation:opac 0.8s}\r\n@-webkit-keyframes opac{from{opacity:0} to{opacity:1}}\r\n@keyframes opac{from{opacity:0} to{opacity:1}}\r\n.w3-animate-top{position:relative;-webkit-animation:animatetop 0.4s;animation:animatetop 0.4s}\r\n@-webkit-keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n@keyframes animatetop{from{top:-300px;opacity:0} to{top:0;opacity:1}}\r\n.w3-animate-left{position:relative;-webkit-animation:animateleft 0.4s;animation:animateleft 0.4s}\r\n@-webkit-keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n@keyframes animateleft{from{left:-300px;opacity:0} to{left:0;opacity:1}}\r\n.w3-animate-right{position:relative;-webkit-animation:animateright 0.4s;animation:animateright 0.4s}\r\n@-webkit-keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n@keyframes animateright{from{right:-300px;opacity:0} to{right:0;opacity:1}}\r\n.w3-animate-bottom{position:relative;-webkit-animation:animatebottom 0.4s;animation:animatebottom 0.4s}\r\n@-webkit-keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n@keyframes animatebottom{from{bottom:-300px;opacity:0} to{bottom:0;opacity:1}}\r\n.w3-animate-zoom {-webkit-animation:animatezoom 0.6s;animation:animatezoom 0.6s}\r\n@-webkit-keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n@keyframes animatezoom{from{-webkit-transform:scale(0);transform:scale(0)} to{-webkit-transform:scale(1);transform:scale(1)}}\r\n.w3-animate-input{transition:width 0.4s ease-in-out}\r\n.w3-animate-input:focus{width:100%!important}\r\n.w3-opacity,.w3-hover-opacity:hover{opacity:0.60}\r\n.w3-opacity-off,.w3-hover-opacity-off:hover{opacity:1}\r\n.w3-opacity-max{opacity:0.25}\r\n.w3-opacity-min{opacity:0.75}\r\n.w3-greyscale-max,.w3-grayscale-max,.w3-hover-greyscale:hover,.w3-hover-grayscale:hover{-webkit-filter:grayscale(100%);filter:grayscale(100%)}\r\n.w3-greyscale,.w3-grayscale{-webkit-filter:grayscale(75%);filter:grayscale(75%)}\r\n.w3-greyscale-min,.w3-grayscale-min{-webkit-filter:grayscale(50%);filter:grayscale(50%)}\r\n.w3-sepia{-webkit-filter:sepia(75%);filter:sepia(75%)}\r\n.w3-sepia-max,.w3-hover-sepia:hover{-webkit-filter:sepia(100%);filter:sepia(100%)}\r\n.w3-sepia-min{-webkit-filter:sepia(50%);filter:sepia(50%)}\r\n.w3-tiny{font-size:10px!important}\r\n.w3-small{font-size:12px!important}\r\n.w3-medium{font-size:15px!important}\r\n.w3-large{font-size:18px!important}\r\n.w3-xlarge{font-size:24px!important}\r\n.w3-xxlarge{font-size:36px!important}\r\n.w3-xxxlarge{font-size:48px!important}\r\n.w3-jumbo{font-size:64px!important}\r\n.w3-left-align{text-align:left!important}\r\n.w3-right-align{text-align:right!important}\r\n.w3-justify{text-align:justify!important}\r\n.w3-center{text-align:center!important}\r\n.w3-border-0{border:0!important}\r\n.w3-border{border:1px solid #ccc!important}\r\n.w3-border-top{border-top:1px solid #ccc!important}\r\n.w3-border-bottom{border-bottom:1px solid #ccc!important}\r\n.w3-border-left{border-left:1px solid #ccc!important}\r\n.w3-border-right{border-right:1px solid #ccc!important}\r\n.w3-topbar{border-top:6px solid #ccc!important}\r\n.w3-bottombar{border-bottom:6px solid #ccc!important}\r\n.w3-leftbar{border-left:6px solid #ccc!important}\r\n.w3-rightbar{border-right:6px solid #ccc!important}\r\n.w3-section,.w3-code{margin-top:16px!important;margin-bottom:16px!important}\r\n.w3-margin{margin:16px!important}\r\n.w3-margin-top{margin-top:16px!important}\r\n.w3-margin-bottom{margin-bottom:16px!important}\r\n.w3-margin-left{margin-left:16px!important}\r\n.w3-margin-right{margin-right:16px!important}\r\n.w3-padding-small{padding:4px 8px!important}\r\n.w3-padding{padding:8px 16px!important}\r\n.w3-padding-large{padding:12px 24px!important}\r\n.w3-padding-16{padding-top:16px!important;padding-bottom:16px!important}\r\n.w3-padding-24{padding-top:24px!important;padding-bottom:24px!important}\r\n.w3-padding-32{padding-top:32px!important;padding-bottom:32px!important}\r\n.w3-padding-48{padding-top:48px!important;padding-bottom:48px!important}\r\n.w3-padding-64{padding-top:64px!important;padding-bottom:64px!important}\r\n.w3-left{float:left!important}\r\n.w3-right{float:right!important}\r\n.w3-button:hover{color:#000!important;background-color:#ccc!important}\r\n.w3-transparent,.w3-hover-none:hover{background-color:transparent!important}\r\n.w3-hover-none:hover{box-shadow:none!important}\r\n/* Colors */\r\n.w3-amber,.w3-hover-amber:hover{color:#000!important;background-color:#ffc107!important}\r\n.w3-aqua,.w3-hover-aqua:hover{color:#000!important;background-color:#00ffff!important}\r\n.w3-blue,.w3-hover-blue:hover{color:#fff!important;background-color:#2196F3!important}\r\n.w3-light-blue,.w3-hover-light-blue:hover{color:#000!important;background-color:#87CEEB!important}\r\n.w3-brown,.w3-hover-brown:hover{color:#fff!important;background-color:#795548!important}\r\n.w3-cyan,.w3-hover-cyan:hover{color:#000!important;background-color:#00bcd4!important}\r\n.w3-blue-grey,.w3-hover-blue-grey:hover,.w3-blue-gray,.w3-hover-blue-gray:hover{color:#fff!important;background-color:#607d8b!important}\r\n.w3-green,.w3-hover-green:hover{color:#fff!important;background-color:#4CAF50!important}\r\n.w3-light-green,.w3-hover-light-green:hover{color:#000!important;background-color:#8bc34a!important}\r\n.w3-indigo,.w3-hover-indigo:hover{color:#fff!important;background-color:#3f51b5!important}\r\n.w3-khaki,.w3-hover-khaki:hover{color:#000!important;background-color:#f0e68c!important}\r\n.w3-lime,.w3-hover-lime:hover{color:#000!important;background-color:#cddc39!important}\r\n.w3-orange,.w3-hover-orange:hover{color:#000!important;background-color:#ff9800!important}\r\n.w3-deep-orange,.w3-hover-deep-orange:hover{color:#fff!important;background-color:#ff5722!important}\r\n.w3-pink,.w3-hover-pink:hover{color:#fff!important;background-color:#e91e63!important}\r\n.w3-purple,.w3-hover-purple:hover{color:#fff!important;background-color:#9c27b0!important}\r\n.w3-deep-purple,.w3-hover-deep-purple:hover{color:#fff!important;background-color:#673ab7!important}\r\n.w3-red,.w3-hover-red:hover{color:#fff!important;background-color:#f44336!important}\r\n.w3-sand,.w3-hover-sand:hover{color:#000!important;background-color:#fdf5e6!important}\r\n.w3-teal,.w3-hover-teal:hover{color:#fff!important;background-color:#009688!important}\r\n.w3-yellow,.w3-hover-yellow:hover{color:#000!important;background-color:#ffeb3b!important}\r\n.w3-white,.w3-hover-white:hover{color:#000!important;background-color:#fff!important}\r\n.w3-black,.w3-hover-black:hover{color:#fff!important;background-color:#000!important}\r\n.w3-grey,.w3-hover-grey:hover,.w3-gray,.w3-hover-gray:hover{color:#000!important;background-color:#9e9e9e!important}\r\n.w3-light-grey,.w3-hover-light-grey:hover,.w3-light-gray,.w3-hover-light-gray:hover{color:#000!important;background-color:#f1f1f1!important}\r\n.w3-dark-grey,.w3-hover-dark-grey:hover,.w3-dark-gray,.w3-hover-dark-gray:hover{color:#fff!important;background-color:#616161!important}\r\n.w3-pale-red,.w3-hover-pale-red:hover{color:#000!important;background-color:#ffdddd!important}\r\n.w3-pale-green,.w3-hover-pale-green:hover{color:#000!important;background-color:#ddffdd!important}\r\n.w3-pale-yellow,.w3-hover-pale-yellow:hover{color:#000!important;background-color:#ffffcc!important}\r\n.w3-pale-blue,.w3-hover-pale-blue:hover{color:#000!important;background-color:#ddffff!important}\r\n.w3-text-amber,.w3-hover-text-amber:hover{color:#ffc107!important}\r\n.w3-text-aqua,.w3-hover-text-aqua:hover{color:#00ffff!important}\r\n.w3-text-blue,.w3-hover-text-blue:hover{color:#2196F3!important}\r\n.w3-text-light-blue,.w3-hover-text-light-blue:hover{color:#87CEEB!important}\r\n.w3-text-brown,.w3-hover-text-brown:hover{color:#795548!important}\r\n.w3-text-cyan,.w3-hover-text-cyan:hover{color:#00bcd4!important}\r\n.w3-text-blue-grey,.w3-hover-text-blue-grey:hover,.w3-text-blue-gray,.w3-hover-text-blue-gray:hover{color:#607d8b!important}\r\n.w3-text-green,.w3-hover-text-green:hover{color:#4CAF50!important}\r\n.w3-text-light-green,.w3-hover-text-light-green:hover{color:#8bc34a!important}\r\n.w3-text-indigo,.w3-hover-text-indigo:hover{color:#3f51b5!important}\r\n.w3-text-khaki,.w3-hover-text-khaki:hover{color:#b4aa50!important}\r\n.w3-text-lime,.w3-hover-text-lime:hover{color:#cddc39!important}\r\n.w3-text-orange,.w3-hover-text-orange:hover{color:#ff9800!important}\r\n.w3-text-deep-orange,.w3-hover-text-deep-orange:hover{color:#ff5722!important}\r\n.w3-text-pink,.w3-hover-text-pink:hover{color:#e91e63!important}\r\n.w3-text-purple,.w3-hover-text-purple:hover{color:#9c27b0!important}\r\n.w3-text-deep-purple,.w3-hover-text-deep-purple:hover{color:#673ab7!important}\r\n.w3-text-red,.w3-hover-text-red:hover{color:#f44336!important}\r\n.w3-text-sand,.w3-hover-text-sand:hover{color:#fdf5e6!important}\r\n.w3-text-teal,.w3-hover-text-teal:hover{color:#009688!important}\r\n.w3-text-yellow,.w3-hover-text-yellow:hover{color:#d2be0e!important}\r\n.w3-text-white,.w3-hover-text-white:hover{color:#fff!important}\r\n.w3-text-black,.w3-hover-text-black:hover{color:#000!important}\r\n.w3-text-grey,.w3-hover-text-grey:hover,.w3-text-gray,.w3-hover-text-gray:hover{color:#757575!important}\r\n.w3-text-light-grey,.w3-hover-text-light-grey:hover,.w3-text-light-gray,.w3-hover-text-light-gray:hover{color:#f1f1f1!important}\r\n.w3-text-dark-grey,.w3-hover-text-dark-grey:hover,.w3-text-dark-gray,.w3-hover-text-dark-gray:hover{color:#3a3a3a!important}\r\n.w3-border-amber,.w3-hover-border-amber:hover{border-color:#ffc107!important}\r\n.w3-border-aqua,.w3-hover-border-aqua:hover{border-color:#00ffff!important}\r\n.w3-border-blue,.w3-hover-border-blue:hover{border-color:#2196F3!important}\r\n.w3-border-light-blue,.w3-hover-border-light-blue:hover{border-color:#87CEEB!important}\r\n.w3-border-brown,.w3-hover-border-brown:hover{border-color:#795548!important}\r\n.w3-border-cyan,.w3-hover-border-cyan:hover{border-color:#00bcd4!important}\r\n.w3-border-blue-grey,.w3-hover-border-blue-grey:hover,.w3-border-blue-gray,.w3-hover-border-blue-gray:hover{border-color:#607d8b!important}\r\n.w3-border-green,.w3-hover-border-green:hover{border-color:#4CAF50!important}\r\n.w3-border-light-green,.w3-hover-border-light-green:hover{border-color:#8bc34a!important}\r\n.w3-border-indigo,.w3-hover-border-indigo:hover{border-color:#3f51b5!important}\r\n.w3-border-khaki,.w3-hover-border-khaki:hover{border-color:#f0e68c!important}\r\n.w3-border-lime,.w3-hover-border-lime:hover{border-color:#cddc39!important}\r\n.w3-border-orange,.w3-hover-border-orange:hover{border-color:#ff9800!important}\r\n.w3-border-deep-orange,.w3-hover-border-deep-orange:hover{border-color:#ff5722!important}\r\n.w3-border-pink,.w3-hover-border-pink:hover{border-color:#e91e63!important}\r\n.w3-border-purple,.w3-hover-border-purple:hover{border-color:#9c27b0!important}\r\n.w3-border-deep-purple,.w3-hover-border-deep-purple:hover{border-color:#673ab7!important}\r\n.w3-border-red,.w3-hover-border-red:hover{border-color:#f44336!important}\r\n.w3-border-sand,.w3-hover-border-sand:hover{border-color:#fdf5e6!important}\r\n.w3-border-teal,.w3-hover-border-teal:hover{border-color:#009688!important}\r\n.w3-border-yellow,.w3-hover-border-yellow:hover{border-color:#ffeb3b!important}\r\n.w3-border-white,.w3-hover-border-white:hover{border-color:#fff!important}\r\n.w3-border-black,.w3-hover-border-black:hover{border-color:#000!important}\r\n.w3-border-grey,.w3-hover-border-grey:hover,.w3-border-gray,.w3-hover-border-gray:hover{border-color:#9e9e9e!important}\r\n.w3-border-light-grey,.w3-hover-border-light-grey:hover,.w3-border-light-gray,.w3-hover-border-light-gray:hover{border-color:#f1f1f1!important}\r\n.w3-border-dark-grey,.w3-hover-border-dark-grey:hover,.w3-border-dark-gray,.w3-hover-border-dark-gray:hover{border-color:#616161!important}\r\n.w3-border-pale-red,.w3-hover-border-pale-red:hover{border-color:#ffe7e7!important}\r\n.w3-border-pale-green,.w3-hover-border-pale-green:hover{border-color:#e7ffe7!important}\r\n.w3-border-pale-yellow,.w3-hover-border-pale-yellow:hover{border-color:#ffffcc!important}\r\n.w3-border-pale-blue,.w3-hover-border-pale-blue:hover{border-color:#e7ffff!important}\r\n.w3-btn, .w3-btn:link, .w3-btn:visited {\r\n  color: #FFFFFF;\r\n  background-color: #4CAF50;\r\n}\r\n.trytopnav {\r\n  height: 40px;\r\n  overflow: hidden;\r\n  min-width: 380px;  \r\n  width: 100%;\r\n}\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  -webkit-transform: translate(0,0);\r\n          transform: translate(0,0);\r\n}"

/***/ }),

/***/ "./src/app/language/language.component.html":
/*!**************************************************!*\
  !*** ./src/app/language/language.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\"> -->\r\n    <div class=\"w3-example\">\r\n        <div class=\"trytopnav\">\r\n          <div class=\"w3-bar w3-light-grey\" style=\"border-top:1px solid #f1f1f1;overflow:auto\">\r\n            <h3 class=\"w3-left\" style=\"margin: 3px 0\">{{'Languages' | translate}}</h3>\r\n            <a href=\"javascript:void(0);\" title=\"{{'Help' | translate}}\" class=\"w3-right w3-button w3-bar-item topnav-icons fa\" \r\n                style=\"font-size:28px;color:#999999;margin-top: 0px; padding: 3px 16px !important;\">\r\n                <i class=\"material-icons\">help</i>\r\n            </a>\r\n            <a href=\"javascript:void(0);\" title=\"{{'Edit' | translate}}\" class=\"w3-right w3-button w3-bar-item topnav-icons fa\" \r\n                style=\"font-size:28px;color:#999999;margin-top: 0px; padding: 3px 16px !important;\"\r\n                (click)= \"entryVisibility = !entryVisibility; searchVisibility = false;\">\r\n              <i class=\"material-icons\">edit</i>\r\n            </a>\r\n            <a href=\"javascript:void(0);\" title=\"{{'Search' | translate}}\" class=\"w3-right w3-button w3-bar-item topnav-icons fa\" \r\n                style=\"font-size:28px;color:#999999;margin-top: 0px; padding: 3px 16px !important;\"\r\n                (click)= \"searchVisibility = !searchVisibility; entryVisibility = false;\">\r\n                <i class=\"material-icons\">search</i>\r\n            </a>                           \r\n          </div>          \r\n        </div>\r\n        <div class=\"w3-padding mat-elevation-z8 notranslate\" style=\"width:100%\" style=\"margin-bottom: 10px;\" [hidden]=\"!searchVisibility\" >\r\n            <h4>{{'Search Operations' | translate}}</h4>\r\n          <!-- Search Entry -->          \r\n          <form (ngSubmit)=\"list()\">\r\n            <div class=\"w3-white w3-padding\">\r\n                <!-- form-group separator -->\r\n                <div style=\"display:flex; flex-direction: column;\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"{{'Key' | translate}}\" [(ngModel)]=\"searchDto.Key\" name=\"Key\" id=\"Key\" />\r\n                    <button mat-button *ngIf=\"searchDto.Key\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchDto.Key=''\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </mat-form-field>\r\n                </div>\r\n                <!-- form-group separator -->\r\n                <div style=\"display:flex; flex-direction: column;\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"{{'Val' | translate}}\" [(ngModel)]=\"searchDto.Val\" name=\"Val\" id=\"Val\" />\r\n                    <button mat-button *ngIf=\"searchDto.Val\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchDto.Val=''\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </mat-form-field>\r\n                </div>\r\n                <!-- form-group separator -->\r\n                <div style=\"display:flex; flex-direction: column;\">\r\n                  <mat-form-field>\r\n                    <input matInput type=\"text\" placeholder=\"{{'Language Code' | translate}}\" [(ngModel)]=\"searchDto.LanguageCode\" name=\"Value\"\r\n                      id=\"LanguageCode\" />\r\n                    <button mat-button *ngIf=\"searchDto.LanguageCode\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchDto.LanguageCode=''\">\r\n                      <mat-icon>close</mat-icon>\r\n                    </button>\r\n                  </mat-form-field>\r\n                </div>\r\n            </div>\r\n            <!-- form-group separator -->\r\n            <div style=\"text-align: right;\">\r\n              <button type=\"submit\" mat-button matTooltip=\"{{'Search' | translate}}\" mat-icon-button color=\"primary\" >                  \r\n                <mat-icon>search</mat-icon>\r\n              </button>\r\n            </div>\r\n          </form>          \r\n          <!-- Entry -->\r\n        </div>\r\n        <div class=\"w3-padding mat-elevation-z8 notranslate\" style=\"width:100%\" style=\"margin-bottom: 10px;\" [hidden]=\"!entryVisibility\">\r\n          <h4>{{'Data Operations' | translate}}</h4>\r\n          <!-- Entry -->\r\n          <form (ngSubmit)=\"postOrPut()\">\r\n            <div class=\"w3-white w3-padding\">\r\n              <!-- form-group separator -->\r\n              <div style=\"display:flex; flex-direction: column;\">\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" placeholder=\"{{'Key' | translate}}\" [(ngModel)]=\"entryDto.Key\" name=\"Key\" id=\"Key\" />\r\n                  <button mat-button *ngIf=\"entryDto.Key\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"entryDto.Key=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- form-group separator -->\r\n              <div style=\"display:flex; flex-direction: column;\">\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" placeholder=\"{{'Val' | translate}}\" [(ngModel)]=\"entryDto.Val\" name=\"Val\" id=\"Val\" />\r\n                  <button mat-button *ngIf=\"entryDto.Val\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"entryDto.Val=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- form-group separator -->\r\n              <div style=\"display:flex; flex-direction: column;\">\r\n                <mat-form-field>\r\n                  <input matInput type=\"text\" placeholder=\"{{'Language Code' | translate}}\" [(ngModel)]=\"entryDto.LanguageCode\" name=\"Value\"\r\n                    id=\"LanguageCode\" />\r\n                  <button mat-button *ngIf=\"entryDto.LanguageCode\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"entryDto.LanguageCode=''\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <!-- form-group separator -->\r\n            <div style=\"text-align: right;\">\r\n              <button type=\"submit\" mat-button matTooltip=\"{{'Save' | translate}}\" mat-icon-button color=\"primary\" >                  \r\n                <mat-icon>save</mat-icon>\r\n              </button>&nbsp;\r\n              <button mat-button matTooltip=\"{{'Clear' | translate}}\" mat-icon-button (click)=\"resetEntry()\">\r\n                  <mat-icon>cancel_presentation</mat-icon>\r\n              </button>\r\n            </div>\r\n          </form>\r\n          <!-- Entry -->\r\n        </div>\r\n        <div class=\"w3-padding mat-elevation-z8 notranslate\" style=\"width:100%\">          \r\n          <!-- List -->            \r\n          <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"{{'Filter' | translate}}\">\r\n          </mat-form-field>\r\n          <mat-table [dataSource]=\"dtoList\" matSort >\r\n            <!-- Key Column -->\r\n            <ng-container matColumnDef=\"Key\">\r\n              <mat-header-cell *matHeaderCellDef mat-sort-header>{{'Key' | translate}}</mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.Key}} </mat-cell>\r\n            </ng-container>\r\n            <!-- Value Column -->\r\n            <ng-container matColumnDef=\"Val\">\r\n              <mat-header-cell *matHeaderCellDef mat-sort-header>{{'Value' | translate}}</mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.Val}} </mat-cell>\r\n            </ng-container>\r\n            <!-- Language Code Column -->\r\n            <ng-container matColumnDef=\"LanguageCode\">\r\n              <mat-header-cell *matHeaderCellDef mat-sort-header>{{'Language Code' | translate}}</mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> {{element.LanguageCode}} </mat-cell>\r\n            </ng-container>\r\n      \r\n            <!-- Actions Column -->\r\n            <ng-container matColumnDef=\"Actions\">\r\n              <mat-header-cell *matHeaderCellDef>{{'Actions' | translate}}</mat-header-cell>\r\n              <mat-cell *matCellDef=\"let element\"> \r\n                  <button mat-button matTooltip=\"{{'Edit Row' | translate}}\" color=\"primary\" (click)=\"get(element);\">\r\n                    <i class=\"material-icons\">border_color</i>\r\n                  </button>\r\n                  &nbsp;\r\n                  <button mat-button matTooltip=\"{{'Delete Row' | translate}}\" (click)=\"openDialog(element)\">\r\n                    <i class=\"material-icons\">cancel</i>\r\n                  </button>\r\n              </mat-cell>\r\n            </ng-container>\r\n      \r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n          </mat-table>\r\n      \r\n          <!-- List -->\r\n          <mat-paginator [length]=\"pagingDto.count\" [pageSize]=\"pagingDto.pageSize\" [pageSizeOptions]=\"[10, 15, 20, 50]\" (page)=\"changePage($event)\">\r\n          </mat-paginator>\r\n        </div>\r\n        \r\n        <!-- <a target=\"_blank\" href=\"tryit.asp?filename=trybs_filters_list&amp;stacked=h\" class=\"w3-btn w3-margin-top w3-margin-bottom\">Try it Yourself »</a> -->\r\n    </div>\r\n<!-- </div> -->\r\n\r\n\r\n<!-- <thead style=\"background-color:#b4cff1\">\r\n        <tr>\r\n          <th>#</th>\r\n          <th mat-sort-header=\"Key\">{{'Key' | translate}}</th>\r\n          <th mat-sort-header=\"Val\">{{'Value' | translate}}</th>\r\n          <th mat-sort-header=\"LanguageCode\">{{'Language Code' | translate}}</th>\r\n          <th>-</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let dto of dtoList; let i = index\">\r\n          <th scope=\"row\">{{ i + 1 }}</th>\r\n          <td>{{ dto.Key }}</td>\r\n          <td>{{ dto.Val }}</td>\r\n          <td>{{ dto.LanguageCode }}</td>\r\n          <td>\r\n            <button type=\"button\" matTooltip=\"{{'Edit Row' | translate}}\" mat-mini-fab color=\"primary\" (click)=\"get(dto)\">\r\n              <i class=\"material-icons\">border_color</i>\r\n            </button>\r\n            &nbsp;\r\n            <button type=\"button\" matTooltip=\"{{'Delete Row' | translate}}\" mat-mini-fab (click)=\"openDialog(dto)\">\r\n              <i class=\"material-icons\">cancel</i>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody> -->"

/***/ }),

/***/ "./src/app/language/language.component.ts":
/*!************************************************!*\
  !*** ./src/app/language/language.component.ts ***!
  \************************************************/
/*! exports provided: LanguageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageComponent", function() { return LanguageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _code_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code/dto */ "./src/app/code/dto.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delete-confirmation/delete-confirmation.component */ "./src/app/delete-confirmation/delete-confirmation.component.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LanguageComponent = /** @class */ (function () {
    function LanguageComponent(crudService, location, dialog, configService) {
        this.crudService = crudService;
        this.location = location;
        this.dialog = dialog;
        this.configService = configService;
        this.dtoList = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.entryDto = {};
        this.displayedColumns = [];
        this.searchDto = {};
        this.pagingDto = new _code_dto__WEBPACK_IMPORTED_MODULE_1__["PagingDto"]();
        this.entryVisibility = false;
        this.searchVisibility = false;
        this.apiUrl = '';
        this.displayedColumns = ['Key', 'Val', 'LanguageCode', 'Actions'];
        this.apiUrl = configService.config.DefaultAPIAddress;
        this.pagingDto.pageSize = 50;
    }
    LanguageComponent.prototype.ngOnInit = function () {
        this.list();
    };
    //#region CRUD Operations
    LanguageComponent.prototype.postOrPut = function () {
        var _this = this;
        if (!this.isValid(this.entryDto)) {
            return;
        }
        if (this.entryDto.Id == null) {
            this.entryDto.Iseditable = 1;
            this.crudService.post(this.entryDto, this.apiUrl + "/api/system/postlanguage").subscribe(function (serviceResponse) {
                _this.entryDto.Id = serviceResponse.Data;
                _this.dtoList.data.push(_this.entryDto);
                _this.resetEntry();
            });
        }
        else {
            this.crudService.put(this.entryDto, this.apiUrl + "/api/system/putlanguage").subscribe(function (serviceResponse) {
                var i = _this.dtoList.data.findIndex((function (obj) { return obj.Id === _this.entryDto.Id; }));
                _this.dtoList.data[i] = _this.entryDto;
                _this.resetEntry();
            });
        }
    };
    LanguageComponent.prototype.get = function (dto) {
        var _this = this;
        this.crudService.get(dto.Id, this.apiUrl + "/api/system/getlanguage").subscribe(function (serviceResponse) {
            _this.entryDto = Object.assign({}, serviceResponse.Data);
            _this.entryVisibility = true;
            _this.searchVisibility = false;
            window.scroll(0, 0);
        });
    };
    LanguageComponent.prototype.delete = function (dto) {
        var _this = this;
        this.crudService.delete(dto.Id, this.apiUrl + "/api/system/deletelanguage").subscribe(function (serviceResponse) {
            _this.dtoList.data = _this.dtoList.data.filter(function (h) { return h !== dto; });
        });
    };
    LanguageComponent.prototype.list = function () {
        var _this = this;
        this.crudService.list(this.searchDto, this.pagingDto, this.apiUrl + "/api/system/listlanguage").subscribe(function (serviceResponse) {
            _this.dtoList.data = serviceResponse.Data;
            _this.dtoList.sort = _this.sort;
            _this.pagingDto.count = serviceResponse.TotalCount;
        });
    };
    // #endregion CRUD
    LanguageComponent.prototype.isValid = function (obj) {
        if (obj.Key == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else if (obj.Val == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else if (obj.LanguageCode == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else {
            return true;
        }
    };
    LanguageComponent.prototype.resetEntry = function () {
        this.entryDto = new _code_dto__WEBPACK_IMPORTED_MODULE_1__["BaseDto"]();
        this.entryDto.UpdatedBy = 0;
        this.entryDto.UpdateDate = new Date();
    };
    LanguageComponent.prototype.resetSearch = function () {
        this.searchDto = new _code_dto__WEBPACK_IMPORTED_MODULE_1__["BaseDto"]();
        this.searchDto.UpdatedBy = 0;
        this.searchDto.UpdateDate = new Date();
    };
    LanguageComponent.prototype.goBack = function () {
        this.location.back();
    };
    LanguageComponent.prototype.openDialog = function (dto) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["DeleteConfirmationComponent"], {
            width: '250px',
            data: { dto: dto }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.confirmation === 'YES') {
                _this.delete(result.dto);
            }
            console.log('The dialog was closed');
        });
    };
    LanguageComponent.prototype.changePage = function (pageEvent) {
        this.pagingDto.count = pageEvent.length;
        this.pagingDto.pageSize = pageEvent.pageSize;
        this.pagingDto.pageNumber = pageEvent.pageIndex + 1;
        this.list();
    };
    LanguageComponent.prototype.sortData = function (sort) {
        var _this = this;
        if (!sort.active || sort.direction === '') {
            console.log("sortData returned with empty - active: " + sort.active + " / direction: " + sort.direction);
            return;
        }
        console.log("sortData returned with working - active: " + sort.active + " / direction: " + sort.direction);
        // local paging
        this.dtoList.data = this.dtoList.data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'Key': return _this.compare(a.Key, b.Key, isAsc);
                case 'Val': return _this.compare(a.Val, b.Val, isAsc);
                case 'LanguageCode': return _this.compare(a.LanguageCode, b.LanguageCode, isAsc);
                default: return 0;
            }
        });
        console.log(this.dtoList);
        // Database paging
        // this.pagingDto.order  = sort.direction;
        // this.list();
    };
    LanguageComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    LanguageComponent.prototype.applyFilter = function (filterValue) {
        this.dtoList.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], LanguageComponent.prototype, "sort", void 0);
    LanguageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-language',
            template: __webpack_require__(/*! ./language.component.html */ "./src/app/language/language.component.html"),
            styles: [__webpack_require__(/*! ./language.component.css */ "./src/app/language/language.component.css")]
        }),
        __metadata("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], LanguageComponent);
    return LanguageComponent;
}());



/***/ }),

/***/ "./src/app/languages/languages.component.css":
/*!***************************************************!*\
  !*** ./src/app/languages/languages.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/***\r\nBootstrap Line Tabs by @keenthemes\r\nA component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme\r\nLicensed under MIT\r\n***/\r\n.content {\r\n\tpadding: 30px;\r\n\t\r\n}\r\n.margin-bottom-30 {\r\n\tmargin-bottom: 30px;\r\n}\r\n.margin-bottom-20 {\r\n\tmargin-bottom: 20px;\r\n}\r\n.margin-bottom-15 {\r\n\tmargin-bottom: 15px;\r\n}\r\n.margin-bottom-10 {\r\n\tmargin-bottom: 10px;\r\n}\r\n/* Portlet */\r\n.portlet {\r\n\tbackground: #fff;\r\n\tpadding: 20px;\r\n}\r\n.portlet.portlet-gray {\r\n\tbackground: #f7f7f7;\r\n}\r\n.portlet.portlet-bordered {\r\n\tborder: 1px solid #eee;\r\n}\r\n/* Portlet Title */\r\n.portlet-title {\r\n\tpadding: 0;\r\n  \tmin-height: 40px;\r\n  \tborder-bottom: 1px solid #eee;\r\n  \tmargin-bottom: 18px;\r\n}\r\n.caption {\r\n\tfloat: left;\r\n\tdisplay: inline-block;\r\n\tfont-size: 18px;\r\n\tline-height: 18px;\r\n}\r\n.caption.caption-green .caption-subject,\r\n.caption.caption-green i {\r\n\tcolor: #4db3a2;\r\n\tfont-weight: 200;\r\n}\r\n.caption.caption-red .caption-subject,\r\n.caption.caption-red i {\r\n\tcolor: #e26a6a;\r\n\tfont-weight: 200;\r\n}\r\n.caption.caption-purple .caption-subject,\r\n.caption.caption-purple i {\r\n\tcolor: #8775a7;\r\n\tfont-weight: 400;\r\n}\r\n.caption i {\r\n\tcolor: #777;\r\n\tfont-size: 15px;\r\n\tfont-weight: 300;\r\n\tmargin-top: 3px;\r\n}\r\n.caption-subject {\r\n\tcolor: #666;\r\n\tfont-size: 16px;\r\n\tfont-weight: 600;\r\n}\r\n.caption-helper {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tline-height: 13px;\r\n\tcolor: #9eacb4;\r\n\tfont-size: 13px;\r\n\tfont-weight: 400;\r\n}\r\n/* Actions */\r\n.actions {\r\n\tfloat: right;\r\n  \tdisplay: inline-block;\r\n}\r\n.actions a {\r\n\tmargin-left: 3px;\r\n}\r\n.actions .btn {\r\n\tcolor: #666;\r\n\tpadding: 3px 9px;\r\n\tfont-size: 13px;\r\n  \tline-height: 1.5;\r\n  \tbackground-color: #fff;\r\n  \tborder-color: #ccc;\r\n  \tborder-radius: 50px;\r\n}\r\n.actions .btn i {\r\n\tfont-size: 12px;\r\n}\r\n.actions .btn:hover {\r\n\tbackground: #f2f2f2;\r\n}\r\n/* Pagination */\r\n.pagination {\r\n\tmargin: -3px 0 0;\r\n\tborder-radius: 50px;\r\n}\r\n.pagination > li > a,\r\n.pagination > li > span {\r\n\tpadding: 4px 10px;\r\n\tfont-size: 12px;\r\n\tcolor: #8775a7;\r\n\tbackground: #f7f7f7;\r\n}\r\n.pagination > li:hover > a,\r\n.pagination > li.active > a,\r\n.pagination > li.active:hover > a {\r\n\tcolor: #fff;\r\n\tbackground: #8775a7;\r\n\tborder-color: #8775a7;\r\n}\r\n/* Inputs */\r\n.inputs {\r\n\tfloat: right;\r\n\tdisplay: inline-block;\r\n\tpadding: 4px 0;\r\n\tmargin-top: -10px;\r\n}\r\n.input-inline {\r\n\twidth: 240px;\r\n\tdisplay: inline-block;\r\n\tvertical-align: middle;\r\n}\r\n/* Tab */\r\n.portlet-title > .nav-tabs {\r\n\tbackground: none;\r\n\tmargin: 0;\r\n\tfloat: right;\r\n\tdisplay: inline-block;\r\n\tborder: 0;\r\n}\r\n.portlet-title > .nav-tabs > li {\r\n\tbackground: none;\r\n\tmargin: 0;\r\n\tborder: 0;\r\n}\r\n.portlet-title > .nav-tabs > li > a {\r\n\tbackground: none;\r\n\tborder: 0;\r\n\tpadding: 2px 10px 13px;\r\n\tcolor: #444;\r\n}\r\n.portlet-title > .nav-tabs > li.active,\r\n.portlet-title > .nav-tabs > li.active:hover {\r\n  \tborder-bottom: 4px solid #f3565d;\r\n  \tposition: relative;\r\n  }\r\n.portlet-title > .nav-tabs > li:hover {\r\n  \tborder-bottom: 4px solid #f29b9f;\r\n  }\r\n.portlet-title > .nav-tabs > li.active > a,\r\n.portlet-title > .nav-tabs > li:hover > a {\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\tborder: 0;\r\n}\r\n/* Btn Circle */\r\n.actions .btn.btn-circle {\r\n\twidth: 28px;\r\n\theight: 28px;\r\n\tpadding: 3px 7px;\r\n\ttext-align: center;\r\n}\r\n.actions .btn.btn-circle i {\r\n\tfont-size: 11px;\r\n}\r\n/* Btn Grey Salsa */\r\n.actions .btn.grey-salsa {\r\n\tborder: none;\r\n\tmargin-left: 3px;\r\n\tbox-shadow: none;\r\n\tborder-radius: 50px !important;\r\n}\r\n.actions .btn.grey-salsa.active {\r\n\tcolor: #fafcfb;\r\n\tbackground: #8e9bae;\r\n}\r\n.actions .grey-salsa.btn:hover,\r\n  .actions .grey-salsa.btn:focus,\r\n  .actions .grey-salsa.btn:active,\r\n  .actions .grey-salsa.btn.active {\r\n\tcolor: #fafcfb;\r\n\tbackground: #97a3b4;\r\n}\r\n/* Btn Red */\r\n.actions .btn.btn-red.active,\r\n.actions .btn.btn-red:hover {\r\n\tcolor: #fff;\r\n\tbox-shadow: none;\r\n\tbackground: #e26a6a;\r\n\tborder-color: #e26a6a;\r\n}\r\n/* Btn Red */\r\n.actions .btn.btn-purple.active,\r\n.actions .btn.btn-purple:hover {\r\n\tcolor: #fff;\r\n\tbox-shadow: none;\r\n\tbackground: #8775a7;\r\n\tborder-color: #8775a7;\r\n}"

/***/ }),

/***/ "./src/app/languages/languages.component.html":
/*!****************************************************!*\
  !*** ./src/app/languages/languages.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div class=\"\">\t\r\n    <div class=\"row\">\r\n      <div class=\"margin-bottom-30\" style=\"width:100%\">\r\n        <!-- BEGIN Portlet PORTLET-->\r\n        <div class=\"portlet portlet-bordered\" style=\"width:100%\">\r\n          <div class=\"portlet-title\">\r\n            <div class=\"caption caption-red\">\r\n              <i class=\"glyphicon glyphicon-cog\"></i>\r\n              <span class=\"caption-subject text-uppercase\"><strong><b>{{'Languages' | translate}}</b></strong></span>\r\n              <span class=\"caption-helper\">&nbsp;&nbsp;{{'Dil değerleri yönetimi' | translate}}...</span>\r\n            </div>\r\n            <div class=\"actions\">\r\n              <a href=\"javascript:;\" class=\"btn btn-red btn-circle\" style=\"padding: 5px 5px;\" (click)= \"entryVisibility = !entryVisibility; searchVisibility = false;\"\r\n                title=\"{{'Edit / Add' | translate}}\">\r\n                <i class=\"material-icons\" style=\"font-size: 16px;\">add</i>\r\n              </a>\r\n              <a href=\"javascript:;\" class=\"btn btn-red btn-circle\" style=\"padding: 5px 5px;\" (click)= \"searchVisibility = !searchVisibility; entryVisibility = false;\"\r\n                title=\"{{'Search' | translate}}\">\r\n                  <i class=\"material-icons\" style=\"font-size: 16px;\">search</i>\r\n              </a>\r\n              <a href=\"javascript:;\" class=\"btn btn-red btn-circle\" style=\"padding: 5px 5px;\" \r\n                title=\"{{'Search' | translate}}\">\r\n                  <i class=\"material-icons\" style=\"font-size: 16px;\">help_outline</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!-- BEGIN Portlet EDIT -->\r\n          <div class=\"portlet portlet-bordered portlet-gray margin-bottom-10\" [hidden]=\"!entryVisibility\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption caption-red\">\r\n                <i class=\"glyphicon glyphicon-cog\"></i>\r\n                <span class=\"caption-subject text-uppercase\">{{'Edit / New Item' | translate}}</span>\r\n                <span class=\"caption-helper\">&nbsp;&nbsp;{{'Kayıt ekleme / güncelleme' | translate}}...</span>\r\n              </div>              \r\n            </div>\r\n            <div class=\"portlet-body\">\r\n               <!-- Entry -->\r\n              <form (ngSubmit)=\"postOrPut()\">\r\n                <div class=\"w3-white w3-padding\">\r\n                  <!-- form-group separator -->\r\n                  <div style=\"display:flex; flex-direction: column;\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" placeholder=\"{{'Key' | translate}}\" [(ngModel)]=\"entryDto.Key\" name=\"Key\" id=\"Key\" />\r\n                      <button mat-button *ngIf=\"entryDto.Key\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"entryDto.Key=''\">\r\n                        <mat-icon>close</mat-icon>\r\n                      </button>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <!-- form-group separator -->\r\n                  <div style=\"display:flex; flex-direction: column;\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" placeholder=\"{{'Val' | translate}}\" [(ngModel)]=\"entryDto.Val\" name=\"Val\" id=\"Val\" />\r\n                      <button mat-button *ngIf=\"entryDto.Val\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"entryDto.Val=''\">\r\n                        <mat-icon>close</mat-icon>\r\n                      </button>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <!-- form-group separator -->\r\n                  <div style=\"display:flex; flex-direction: column;\">\r\n                    <mat-form-field>\r\n                      <input matInput type=\"text\" placeholder=\"{{'Language Code' | translate}}\" [(ngModel)]=\"entryDto.LanguageCode\" name=\"Value\"\r\n                        id=\"LanguageCode\" />\r\n                      <button mat-button *ngIf=\"entryDto.LanguageCode\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"entryDto.LanguageCode=''\">\r\n                        <mat-icon>close</mat-icon>\r\n                      </button>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <!-- form-group separator -->\r\n                <div style=\"text-align: right;\">\r\n                  <button type=\"submit\" mat-button matTooltip=\"{{'Save' | translate}}\" mat-icon-button color=\"primary\" >                  \r\n                    <mat-icon>save</mat-icon>\r\n                  </button>&nbsp;\r\n                  <button mat-button matTooltip=\"{{'Clear' | translate}}\" mat-icon-button (click)=\"resetEntry()\">\r\n                      <mat-icon>cancel</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </form>\r\n              <!-- Entry -->\r\n            </div>\r\n          </div>\r\n          <!-- END Portlet EDIT-->\r\n\r\n          <!-- BEGIN Portlet SEARCH -->\r\n          <div class=\"portlet portlet-bordered portlet-gray margin-bottom-10\" [hidden]=\"!searchVisibility\">\r\n            <div class=\"portlet-title\">\r\n              <div class=\"caption caption-red\">\r\n                <i class=\"glyphicon glyphicon-cog\"></i>\r\n                <span class=\"caption-subject text-uppercase\">{{'Search' | translate}}</span>\r\n                <span class=\"caption-helper\">&nbsp;&nbsp;{{'Search Item with Detailed' | translate}}...</span>\r\n              </div>              \r\n            </div>\r\n            <div class=\"portlet-body\">\r\n                <form (ngSubmit)=\"list()\">\r\n                  <div class=\"w3-white w3-padding\">\r\n                      <!-- form-group separator -->\r\n                      <div style=\"display:flex; flex-direction: column;\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"text\" placeholder=\"{{'Key' | translate}}\" [(ngModel)]=\"searchDto.Key\" name=\"Key\" id=\"Key\" />\r\n                          <button mat-button *ngIf=\"searchDto.Key\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchDto.Key=''\">\r\n                            <mat-icon>close</mat-icon>\r\n                          </button>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <!-- form-group separator -->\r\n                      <div style=\"display:flex; flex-direction: column;\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"text\" placeholder=\"{{'Val' | translate}}\" [(ngModel)]=\"searchDto.Val\" name=\"Val\" id=\"Val\" />\r\n                          <button mat-button *ngIf=\"searchDto.Val\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchDto.Val=''\">\r\n                            <mat-icon>close</mat-icon>\r\n                          </button>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <!-- form-group separator -->\r\n                      <div style=\"display:flex; flex-direction: column;\">\r\n                        <mat-form-field>\r\n                          <input matInput type=\"text\" placeholder=\"{{'Language Code' | translate}}\" [(ngModel)]=\"searchDto.LanguageCode\" name=\"Value\"\r\n                            id=\"LanguageCode\" />\r\n                          <button mat-button *ngIf=\"searchDto.LanguageCode\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchDto.LanguageCode=''\">\r\n                            <mat-icon>close</mat-icon>\r\n                          </button>\r\n                        </mat-form-field>\r\n                      </div>\r\n                  </div>\r\n                  <!-- form-group separator -->\r\n                  <div style=\"text-align: right;\">\r\n                    <button type=\"submit\" mat-button matTooltip=\"{{'Search' | translate}}\" mat-icon-button color=\"primary\" >                  \r\n                      <mat-icon>search</mat-icon>\r\n                    </button>\r\n                  </div>\r\n                </form>   \r\n            </div>\r\n          </div>\r\n          <!-- END Portlet SEARCH-->\r\n          <!-- BEGIN Portlet Body LIST -->\r\n          <div class=\"portlet-body\">\r\n            <div class=\"notranslate\" >\r\n              <!-- List -->            \r\n              <mat-form-field style=\"width:100%\">\r\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"{{'Filter' | translate}}\">\r\n              </mat-form-field>\r\n              <mat-table [dataSource]=\"dtoList\" matSort >\r\n                <!-- Key Column -->\r\n                <ng-container matColumnDef=\"Key\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>{{'Key' | translate}}</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element.Key}} </mat-cell>\r\n                </ng-container>\r\n                <!-- Value Column -->\r\n                <ng-container matColumnDef=\"Val\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>{{'Value' | translate}}</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element.Val}} </mat-cell>\r\n                </ng-container>\r\n                <!-- Language Code Column -->\r\n                <ng-container matColumnDef=\"LanguageCode\">\r\n                  <mat-header-cell *matHeaderCellDef mat-sort-header>{{'Language Code' | translate}}</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> {{element.LanguageCode}} </mat-cell>\r\n                </ng-container>\r\n            \r\n                <!-- Actions Column -->\r\n                <ng-container matColumnDef=\"Actions\">\r\n                  <mat-header-cell *matHeaderCellDef>{{'Actions' | translate}}</mat-header-cell>\r\n                  <mat-cell *matCellDef=\"let element\"> \r\n                      <button mat-button matTooltip=\"{{'Edit Row' | translate}}\" color=\"primary\" (click)=\"get(element);\">\r\n                        <i class=\"material-icons\">border_color</i>\r\n                      </button>\r\n                      &nbsp;\r\n                      <button mat-button matTooltip=\"{{'Delete Row' | translate}}\" (click)=\"openDialog(element)\">\r\n                        <i class=\"material-icons\">cancel</i>\r\n                      </button>\r\n                  </mat-cell>\r\n                </ng-container>\r\n            \r\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n            </mat-table>\r\n          \r\n              <!-- List -->\r\n              <mat-paginator [length]=\"pagingDto.count\" [pageSize]=\"pagingDto.pageSize\" [pageSizeOptions]=\"[10, 15, 20, 50]\" (page)=\"changePage($event)\">\r\n              </mat-paginator>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- END Portlet Body LIST-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/languages/languages.component.ts":
/*!**************************************************!*\
  !*** ./src/app/languages/languages.component.ts ***!
  \**************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _code_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code/dto */ "./src/app/code/dto.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../delete-confirmation/delete-confirmation.component */ "./src/app/delete-confirmation/delete-confirmation.component.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LanguagesComponent = /** @class */ (function () {
    function LanguagesComponent(crudService, location, dialog, configService) {
        this.crudService = crudService;
        this.location = location;
        this.dialog = dialog;
        this.configService = configService;
        this.dtoList = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.entryDto = {};
        this.displayedColumns = [];
        this.searchDto = {};
        this.pagingDto = new _code_dto__WEBPACK_IMPORTED_MODULE_1__["PagingDto"]();
        this.entryVisibility = false;
        this.searchVisibility = false;
        this.apiUrl = '';
        this.displayedColumns = ['Key', 'Val', 'LanguageCode', 'Actions'];
        this.apiUrl = configService.config.DefaultAPIAddress;
        this.pagingDto.pageSize = 50;
    }
    LanguagesComponent.prototype.ngOnInit = function () {
        this.list();
    };
    //#region CRUD Operations
    LanguagesComponent.prototype.postOrPut = function () {
        var _this = this;
        if (!this.isValid(this.entryDto)) {
            return;
        }
        if (this.entryDto.Id == null) {
            this.entryDto.Iseditable = 1;
            this.crudService.post(this.entryDto, this.apiUrl + "/api/system/postlanguage").subscribe(function (serviceResponse) {
                _this.entryDto.Id = serviceResponse.Data;
                _this.dtoList.data.push(_this.entryDto);
                _this.resetEntry();
            });
        }
        else {
            this.crudService.put(this.entryDto, this.apiUrl + "/api/system/putlanguage").subscribe(function (serviceResponse) {
                var i = _this.dtoList.data.findIndex((function (obj) { return obj.Id === _this.entryDto.Id; }));
                _this.dtoList.data[i] = _this.entryDto;
                _this.resetEntry();
            });
        }
    };
    LanguagesComponent.prototype.get = function (dto) {
        var _this = this;
        this.crudService.get(dto.Id, this.apiUrl + "/api/system/getlanguage").subscribe(function (serviceResponse) {
            _this.entryDto = Object.assign({}, serviceResponse.Data);
            _this.entryVisibility = true;
            _this.searchVisibility = false;
            window.scroll(0, 0);
        });
    };
    LanguagesComponent.prototype.delete = function (dto) {
        var _this = this;
        this.crudService.delete(dto.Id, this.apiUrl + "/api/system/deletelanguage").subscribe(function (serviceResponse) {
            _this.dtoList.data = _this.dtoList.data.filter(function (h) { return h !== dto; });
        });
    };
    LanguagesComponent.prototype.list = function () {
        var _this = this;
        this.crudService.list(this.searchDto, this.pagingDto, this.apiUrl + "/api/system/listlanguage").subscribe(function (serviceResponse) {
            _this.dtoList.data = serviceResponse.Data;
            _this.dtoList.sort = _this.sort;
            _this.pagingDto.count = serviceResponse.TotalCount;
        });
    };
    // #endregion CRUD
    LanguagesComponent.prototype.isValid = function (obj) {
        if (obj.Key == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else if (obj.Val == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else if (obj.LanguageCode == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else {
            return true;
        }
    };
    LanguagesComponent.prototype.resetEntry = function () {
        this.entryDto = new _code_dto__WEBPACK_IMPORTED_MODULE_1__["BaseDto"]();
        this.entryDto.UpdatedBy = 0;
        this.entryDto.UpdateDate = new Date();
    };
    LanguagesComponent.prototype.resetSearch = function () {
        this.searchDto = new _code_dto__WEBPACK_IMPORTED_MODULE_1__["BaseDto"]();
        this.searchDto.UpdatedBy = 0;
        this.searchDto.UpdateDate = new Date();
    };
    LanguagesComponent.prototype.goBack = function () {
        this.location.back();
    };
    LanguagesComponent.prototype.openDialog = function (dto) {
        var _this = this;
        var dialogRef = this.dialog.open(_delete_confirmation_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["DeleteConfirmationComponent"], {
            width: '250px',
            data: { dto: dto }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.confirmation === 'YES') {
                _this.delete(result.dto);
            }
            console.log('The dialog was closed');
        });
    };
    LanguagesComponent.prototype.changePage = function (pageEvent) {
        this.pagingDto.count = pageEvent.length;
        this.pagingDto.pageSize = pageEvent.pageSize;
        this.pagingDto.pageNumber = pageEvent.pageIndex + 1;
        this.list();
    };
    LanguagesComponent.prototype.sortData = function (sort) {
        var _this = this;
        if (!sort.active || sort.direction === '') {
            console.log("sortData returned with empty - active: " + sort.active + " / direction: " + sort.direction);
            return;
        }
        console.log("sortData returned with working - active: " + sort.active + " / direction: " + sort.direction);
        // local paging
        this.dtoList.data = this.dtoList.data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'Key': return _this.compare(a.Key, b.Key, isAsc);
                case 'Val': return _this.compare(a.Val, b.Val, isAsc);
                case 'LanguageCode': return _this.compare(a.LanguageCode, b.LanguageCode, isAsc);
                default: return 0;
            }
        });
        console.log(this.dtoList);
        // Database paging
        // this.pagingDto.order  = sort.direction;
        // this.list();
    };
    LanguagesComponent.prototype.compare = function (a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    };
    LanguagesComponent.prototype.applyFilter = function (filterValue) {
        this.dtoList.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], LanguagesComponent.prototype, "sort", void 0);
    LanguagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-languages',
            template: __webpack_require__(/*! ./languages.component.html */ "./src/app/languages/languages.component.html"),
            styles: [__webpack_require__(/*! ./languages.component.css */ "./src/app/languages/languages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]])
    ], LanguagesComponent);
    return LanguagesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    LoginComponent.prototype.submit = function () {
        alert(this.loginForm.value.email + this.loginForm.value.password);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: "\n     <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit()\">\n       <input type=\"email\" formControlName=\"email\"><br>\n       <input type=\"password\" formControlName=\"password\">\n       <input type=\"submit\" value=\"submit\">\n     </form>\n  "
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/model/model-list.component.html":
/*!*************************************************!*\
  !*** ./src/app/model/model-list.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Models</h2>\n<div class=\"text-right\">\n  <button class=\"btn btn-sm btn-outline-primary\" (click)=\"open()\">Launch demo modal</button>\n</div>\n<!-- Entry -->\n<div class=\"entryDto w-75\">\n  <form (ngSubmit)=\"postOrPut()\">\n    <!-- form-group separator -->\n    <div class=\"form-group row\">\n      <label for=\"BrandName\" class=\"col-2 col-form-label-sm\">Brand Name</label>\n      <div class=\"col-10\">\n        <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"entryDto.BrandName\" name=\"BrandName\" id=\"BrandName\"\n          placeholder=\"BrandName giriniz\">\n      </div>\n    </div>\n    <!-- form-group separator -->\n    <div class=\"form-group row\">\n      <label for=\"ModelName\" class=\"col-2 col-form-label-sm\">Model Name</label>\n      <div class=\"col-10\">\n        <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"entryDto.ModelName\" name=\"ModelName\" id=\"ModelName\"\n          placeholder=\"ModelName giriniz\">\n      </div>\n    </div>\n    <!-- form-group separator -->\n    <div class=\"text-right\">\n      <button type=\"submit\" class=\"btn btn-success btn-sm\" ngbTooltip=\"Save\"><i class=\"material-icons\" >save</i></button>&nbsp;\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" ngbTooltip=\"Cancel\" (click)=\"resetEntry()\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </form>\n</div>\n<!-- Entry -->\n<br>\n\n\n<!-- List -->\n<div class=”container”>\n  <table class=\"table table-bordered table-sm m-0\">\n    <thead style=\"background-color:#b4cff1\">\n      <tr>\n        <th>#</th>\n        <th>Brand Name</th>\n        <th>Model Name</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let dto of dtoList; let i = index\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>{{ dto.BrandName }}</td>\n        <td>{{ dto.ModelName }}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"get(dto)\" ngbTooltip=\"Edit row\"><i class=\"material-icons\">border_color</i></button>&nbsp;\n          <button type=\"button\" class=\"btn btn-sm btn-outline-danger\" (click)=\"delete(dto)\" ngbTooltip=\"Delete row\"><i class=\"material-icons\">cancel</i></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- List -->\n"

/***/ }),

/***/ "./src/app/model/model-list.component.ts":
/*!***********************************************!*\
  !*** ./src/app/model/model-list.component.ts ***!
  \***********************************************/
/*! exports provided: ModelListComponent, NgbdModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelListComponent", function() { return ModelListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContentComponent", function() { return NgbdModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _code_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../code/dto */ "./src/app/code/dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModelListComponent = /** @class */ (function () {
    function ModelListComponent(logService, deviceService, route, location, modalService) {
        this.logService = logService;
        this.deviceService = deviceService;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        this.dtoList = [];
        this.entryDto = {};
        this.searchDto = new _code_dto__WEBPACK_IMPORTED_MODULE_2__["BaseDto"]();
        this.pagingDto = new _code_dto__WEBPACK_IMPORTED_MODULE_2__["PagingDto"]();
        this.list();
    }
    ModelListComponent.prototype.ngOnInit = function () {
    };
    //#region CRUD Operations
    ModelListComponent.prototype.postOrPut = function () {
        var _this = this;
        if (!this.isValid(this.entryDto)) {
            return;
        }
        if (this.entryDto.Id == null) {
            this.deviceService.postModel(this.entryDto).subscribe(function (serviceResponse) {
                _this.entryDto.Id = serviceResponse.Data;
                _this.dtoList.push(_this.entryDto);
                _this.resetEntry();
            });
        }
        else {
            this.deviceService.putModel(this.entryDto).subscribe(function (serviceResponse) {
                var i = _this.dtoList.findIndex((function (obj) { return obj.Id === _this.entryDto.Id; }));
                _this.dtoList[i] = _this.entryDto;
                _this.resetEntry();
            });
        }
    };
    ModelListComponent.prototype.get = function (dto) {
        var _this = this;
        this.deviceService.getModel(dto.Id).subscribe(function (serviceResponse) {
            _this.entryDto = Object.assign({}, serviceResponse.Data);
        });
    };
    ModelListComponent.prototype.delete = function (dto) {
        var _this = this;
        this.deviceService.deleteModel(dto.Id).subscribe(function (serviceResponse) {
            _this.dtoList = _this.dtoList.filter(function (h) { return h !== dto; });
        });
    };
    ModelListComponent.prototype.list = function () {
        var _this = this;
        this.deviceService.listModel(this.searchDto, this.pagingDto).subscribe(function (serviceResponse) {
            _this.dtoList = serviceResponse.Data;
        });
    };
    // #endregion CRUD
    ModelListComponent.prototype.isValid = function (obj) {
        if (obj.BrandName == null || obj.ModelName == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else {
            return true;
        }
    };
    ModelListComponent.prototype.resetEntry = function () {
        this.entryDto = new _code_dto__WEBPACK_IMPORTED_MODULE_2__["BaseDto"]();
        this.entryDto.UpdatedBy = 0;
        this.entryDto.UpdateDate = new Date();
    };
    ModelListComponent.prototype.goBack = function () {
        this.location.back();
    };
    ModelListComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContentComponent);
        modalRef.componentInstance.name = 'World';
    };
    ModelListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model-list',
            template: __webpack_require__(/*! ./model-list.component.html */ "./src/app/model/model-list.component.html")
        }),
        __metadata("design:paramtypes", [_services_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"],
            _services_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], ModelListComponent);
    return ModelListComponent;
}());

var NgbdModalContentComponent = /** @class */ (function () {
    function NgbdModalContentComponent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContentComponent.prototype, "name", void 0);
    NgbdModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngbd-modal-content-component',
            template: "\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Sample Modal</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <p>Hello, {{name}}!</p>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbActiveModal"]])
    ], NgbdModalContentComponent);
    return NgbdModalContentComponent;
}());



/***/ }),

/***/ "./src/app/property/property.component.html":
/*!**************************************************!*\
  !*** ./src/app/property/property.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Propety</h2>\n<!-- Entry -->\n<div class=\"w-75\">\n  <form (ngSubmit)=\"postOrPut()\">\n    <!-- form-group separator -->\n    <div class=\"form-group row\">\n      <label for=\"Name\" class=\"col-2 col-form-label-sm\">Name</label>\n      <div class=\"col-10\">\n        <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"entryDto.Name\"  name=\"Name\" id=\"Name\"\n          placeholder=\"Name giriniz\">\n      </div>\n    </div> \n    <!-- form-group separator -->\n    <div class=\"text-right\">\n      <button type=\"submit\" class=\"btn btn-success btn-sm\" ngbTooltip=\"Save\"><i class=\"material-icons\" >save</i></button>&nbsp;\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" ngbTooltip=\"Cancel\" (click)=\"resetEntry()\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </form>\n</div>\n<!-- Entry -->\n<br>\n\n\n<!-- List -->\n<div class=”container”>\n  <table class=\"table table-bordered table-sm m-0\">\n    <thead style=\"background-color:#b4cff1\">\n      <tr>\n        <th>#</th>\n        <th>Name</th>        \n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let dto of dtoList; let i = index\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>{{ dto.Name }}</td>        \n        <td>\n          <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"get(dto)\" ngbTooltip=\"Edit row\"><i class=\"material-icons\">border_color</i></button>&nbsp;\n          <button type=\"button\" class=\"btn btn-sm btn-outline-danger\" (click)=\"delete(dto)\" ngbTooltip=\"Delete row\"><i class=\"material-icons\">cancel</i></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- List -->\n"

/***/ }),

/***/ "./src/app/property/property.component.ts":
/*!************************************************!*\
  !*** ./src/app/property/property.component.ts ***!
  \************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _code_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../code/dto */ "./src/app/code/dto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(deviceService) {
        this.deviceService = deviceService;
        this.dtoList = [];
        this.entryDto = {};
        this.searchDto = {};
    }
    PropertyComponent.prototype.ngOnInit = function () {
        this.list();
    };
    //#region CRUD Operations
    PropertyComponent.prototype.postOrPut = function () {
        var _this = this;
        if (!this.isValid(this.entryDto)) {
            return;
        }
        if (this.entryDto.Id == null) {
            this.deviceService.postProperty(this.entryDto).subscribe(function (serviceResponse) {
                _this.entryDto.Id = serviceResponse.Data;
                _this.dtoList.push(_this.entryDto);
                _this.resetEntry();
            });
        }
        else {
            this.deviceService.putProperty(this.entryDto).subscribe(function (serviceResponse) {
                var i = _this.dtoList.findIndex((function (obj) { return obj.Id === _this.entryDto.Id; }));
                _this.dtoList[i] = _this.entryDto;
                _this.resetEntry();
            });
        }
    };
    PropertyComponent.prototype.get = function (dto) {
        var _this = this;
        this.deviceService.getProperty(dto.Id).subscribe(function (serviceResponse) {
            _this.entryDto = Object.assign({}, serviceResponse.Data);
        });
    };
    PropertyComponent.prototype.delete = function (dto) {
        var _this = this;
        this.deviceService.deleteProperty(dto.Id).subscribe(function (serviceResponse) {
            _this.dtoList = _this.dtoList.filter(function (h) { return h !== dto; });
        });
    };
    PropertyComponent.prototype.list = function () {
        var _this = this;
        this.deviceService.listProperty({}, new _code_dto__WEBPACK_IMPORTED_MODULE_2__["PagingDto"]()).subscribe(function (serviceResponse) {
            _this.dtoList = serviceResponse.Data;
        });
    };
    // #endregion CRUD
    PropertyComponent.prototype.isValid = function (obj) {
        if (obj.Name == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else {
            return true;
        }
    };
    PropertyComponent.prototype.resetEntry = function () {
        this.entryDto = {};
        this.entryDto.UpdatedBy = 0;
        this.entryDto.UpdateDate = new Date();
    };
    PropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.component.html */ "./src/app/property/property.component.html")
        }),
        __metadata("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"]])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "./src/app/root/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/root/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading\">\r\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n</div>\r\n\r\n<mat-toolbar color=\"primary\">\r\n  <button mat-icon-button routerLink=\"/home\">\r\n    <mat-icon>home</mat-icon>\r\n  </button>\r\n  <button mat-button routerLink=\"/home\">Home</button>\r\n  <button mat-button routerLink=\"/property\">Property</button>\r\n  <button mat-button routerLink=\"/model\">Model</button>\r\n  <button mat-button routerLink=\"/template\">Template</button>\r\n  <button mat-button routerLink=\"/language\">Language</button>\r\n  <button mat-button routerLink=\"/languages\">Languages</button>\r\n  <button mat-button routerLink=\"/login\">Reactive Example</button>\r\n  <button mat-button [matMenuTriggerFor]=\"menu\">Languages</button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"langChange('en','US')\">English</button>\r\n    <button mat-menu-item (click)=\"langChange('tr','TR')\">Turkce</button>\r\n  </mat-menu>\r\n  <button mat-button  *ngIf=\"!isAuthorized\" (click)=\"login()\">\r\n    <i class=\"material-icons\">exit_to_app</i> Login </button>\r\n  <button mat-button *ngIf=\"isAuthorized\" (click)=\"logout()\">\r\n    <i class=\"material-icons\">power_settings_new</i> Logout</button>\r\n</mat-toolbar>\r\n \r\n\r\n<div class=\"animate-bottom\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/root/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/root/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(oidcSecurityService, sessionStorage, translateService, userService, router) {
        var _this = this;
        this.oidcSecurityService = oidcSecurityService;
        this.sessionStorage = sessionStorage;
        this.translateService = translateService;
        this.userService = userService;
        this.isCollapsed = true;
        this.isAuthorized = false;
        this.loading = true;
        if (this.oidcSecurityService.moduleSetup) {
            this.doCallbackLogicIfRequired();
        }
        else {
            this.oidcSecurityService.onModuleSetup.subscribe(function () {
                _this.doCallbackLogicIfRequired();
            });
        }
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.loading = true;
            }
            else {
                _this.loading = false;
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(function (isAuthorized) {
            _this.isAuthorized = isAuthorized;
            if (_this.isAuthorized === true) {
                _this.saveUserInfo();
            }
        });
    };
    AppComponent.prototype.doCallbackLogicIfRequired = function () {
        if (window.location.hash) {
            this.oidcSecurityService.authorizedCallback();
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.oidcSecurityService.onModuleSetup.unsubscribe();
    };
    AppComponent.prototype.login = function () {
        this.oidcSecurityService.authorize();
    };
    AppComponent.prototype.logout = function () {
        this.oidcSecurityService.logoff();
    };
    AppComponent.prototype.saveUserInfo = function () {
        var _this = this;
        // GetUserInfo and set sessionStorage
        this.oidcSecurityService.getUserData().subscribe(function (data) {
            if (data !== '') {
                _this.userData = data;
                var id = +_this.userData.sub;
                // Get your user informatin form service
                // this.userService.getUser(id).subscribe(serviceResponse => {
                //   if (serviceResponse != null) {
                //     this.userInfo = serviceResponse.Data;
                //     this.sessionStorage.clear('userinfo');
                //     this.sessionStorage.store('userinfo', this.userInfo);
                //   }
                // });
            }
        });
    };
    AppComponent.prototype.langChange = function (language, country) {
        this.translateService.use(language + '-' + country);
        console.log('set language: ' + language);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/root/app.component.html")
        }),
        __metadata("design:paramtypes", [angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OidcSecurityService"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/services/api.intercepter.ts":
/*!*********************************************!*\
  !*** ./src/app/services/api.intercepter.ts ***!
  \*********************************************/
/*! exports provided: ApiInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor(injector) {
        this.injector = injector;
    }
    ApiInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var requestTimestamp = new Date().getTime();
        this.sessionStorage = this.injector.get(ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]);
        this.configService = this.injector.get(_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]);
        this.toastr = this.injector.get(ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]);
        this.translate = this.injector.get(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]);
        var clonedRequest = request;
        var userLanguage = sessionStorage.getItem('ng2-webstorage|current_language');
        if (userLanguage != null) {
            clonedRequest = request.clone({ setHeaders: { 'Accept-Language': userLanguage.substring(1, 3) } });
        }
        else {
            if (this.configService.config != null) {
                var defLang = this.configService.config.DefaultLanguage.substring(1, 3);
                clonedRequest = request.clone({ setHeaders: { 'Accept-Language': defLang } });
            }
        }
        return next.handle(clonedRequest).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) {
            if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                var responseTimestamp = new Date().getTime();
                var elapsed_ms = responseTimestamp - requestTimestamp;
                console.log(response.url + ' --> ' + elapsed_ms + ' ms');
                _this.handleResponseMessage(response);
                console.log(response);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.log('Caught error', err);
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err);
        }));
    };
    ApiInterceptor.prototype.handleResponseMessage = function (response) {
        var _this = this;
        if (response != null && response.body != null) {
            var serviceResponse_1 = response.body;
            if (response.status !== 200) {
                this.translate.get('MSG_ERROR').subscribe(function (res) {
                    _this.toastr.error(res, 'Error');
                    console.log(response.statusText);
                });
            }
            if (serviceResponse_1 != null &&
                serviceResponse_1.IsSuccess != null &&
                serviceResponse_1.Message != null &&
                serviceResponse_1.Message.length > 0) {
                if (!serviceResponse_1.IsSuccess) {
                    this.translate.get(serviceResponse_1.Message).subscribe(function (res) {
                        setTimeout(function () { return _this.toastr.error(res, 'Error'); });
                        console.log(serviceResponse_1.Message);
                    });
                }
                else {
                    switch (serviceResponse_1.ResultType) {
                        case 1:
                            this.translate.get(serviceResponse_1.Message).subscribe(function (res) {
                                _this.toastr.info(res);
                            });
                            break;
                        case 2:
                            this.translate.get(serviceResponse_1.Message).subscribe(function (res) {
                                _this.toastr.warning(res);
                            });
                            break;
                        case 3:
                            this.translate.get(serviceResponse_1.Message).subscribe(function (res) {
                                _this.toastr.success(res);
                            });
                            break;
                        case 4:
                            this.translate.get(serviceResponse_1.Message).subscribe(function (res) {
                                _this.toastr.warning(res);
                            });
                            break;
                        case 5:
                            this.translate.get(serviceResponse_1.Message).subscribe(function (res) {
                                _this.toastr.error(res);
                            });
                            break;
                        default:
                            break;
                    }
                    console.log(serviceResponse_1.Message);
                }
            }
        }
    };
    ApiInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], ApiInterceptor);
    return ApiInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth.Interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/services/auth.Interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var requestToForward = req;
        if (this.oidcSecurityService === undefined) {
            this.oidcSecurityService = this.injector.get(angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OidcSecurityService"]);
        }
        if (this.oidcSecurityService !== undefined) {
            var token = this.oidcSecurityService.getToken();
            if (token !== '') {
                var tokenValue = 'Bearer ' + token;
                requestToForward = req.clone({ setHeaders: { 'Authorization': tokenValue } });
            }
        }
        else {
            console.log('OidcSecurityService undefined: NO auth header!');
        }
        return next.handle(requestToForward);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/services/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, oidcSecurityService) {
        this.router = router;
        this.oidcSecurityService = oidcSecurityService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log(route + '' + state);
        console.log('AuthGuard, canActivate');
        return this.oidcSecurityService.getIsAuthorized().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isAuthorized) {
            console.log('AuthGuard, canActivate isAuthorized: ' + isAuthorized);
            if (isAuthorized) {
                return true;
            }
            _this.router.navigate(['/unauthorized']);
            return false;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_3__["OidcSecurityService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-auth-oidc-client */ "./node_modules/angular-auth-oidc-client/modules/angular-auth-oidc-client.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        // tslint:disable-next-line:no-output-on-prefix
        this.onConfigurationLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ConfigService.prototype.loadConfig = function (configUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.loadAPIConfig(configUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadSSOConfig(this.config.SSOAddress)];
                    case 2:
                        _a.sent();
                        this.onConfigurationLoaded.emit(true);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error("ConfigService threw an error on calling " + configUrl, err_1);
                        this.onConfigurationLoaded.emit(false);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ConfigService.prototype.loadAPIConfig = function (configUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch(configUrl)];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.config = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigService.prototype.loadSSOConfig = function (stsServer) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fetch(stsServer + "/.well-known/openid-configuration")];
                    case 1:
                        response = _b.sent();
                        if (!response.ok) {
                            throw new Error(response.statusText);
                        }
                        _a = this;
                        return [4 /*yield*/, response.json()];
                    case 2:
                        _a.wellKnownEndpoint = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigService.prototype.setupSSO = function (oidcSecurityService) {
        var c = new angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["OpenIDImplicitFlowConfiguration"]();
        c.stsServer = this.config.SSOAddress;
        c.redirect_url = window.location.origin;
        c.client_id = this.config.SSOClientId;
        c.response_type = 'id_token token';
        c.scope = 'openid profile email role core.api devicemanager.api';
        c.post_logout_redirect_uri = window.location.origin + '/unauthorized';
        c.forbidden_route = '/forbidden';
        c.unauthorized_route = '/unauthorized';
        c.auto_userinfo = true;
        c.log_console_warning_active = true;
        c.log_console_debug_active = true;
        c.max_id_token_iat_offset_allowed_in_seconds = 10;
        c.start_checksession = false;
        c.silent_renew = false;
        var wn = new angular_auth_oidc_client__WEBPACK_IMPORTED_MODULE_1__["AuthWellKnownEndpoints"]();
        wn.setWellKnownEndpoints(this.wellKnownEndpoint);
        oidcSecurityService.setupModule(c, wn);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ConfigService.prototype, "onConfigurationLoaded", void 0);
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/crud.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/crud.service.ts ***!
  \******************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CrudService = /** @class */ (function () {
    function CrudService(http) {
        this.http = http;
    }
    //#region BaseMethods
    // Create
    CrudService.prototype.post = function (dto, apiPath) {
        var _this = this;
        return this.http.post(apiPath, dto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (id) { return _this.log("post dto w/ id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postModel')));
    };
    // Read
    CrudService.prototype.get = function (id, apiPath) {
        var _this = this;
        return this.http.get(apiPath + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched dto id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getModel id=" + id)));
    };
    // Update
    CrudService.prototype.put = function (dto, apiPath) {
        var _this = this;
        return this.http.put(apiPath + "/" + dto.Id, dto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated dto id=" + dto.Id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('putModel')));
    };
    // Delete
    CrudService.prototype.delete = function (dto, apiPath) {
        var _this = this;
        var id = typeof dto === 'number' ? dto : dto.Id;
        var url = apiPath + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted dto id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteModel')));
    };
    // List
    CrudService.prototype.list = function (searchDto, pagingDto, apiPath) {
        var _this = this;
        var dictionary = {};
        dictionary['searchDto'] = searchDto;
        dictionary['pagingDto'] = pagingDto;
        return this.http.post(apiPath, dictionary, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (serviceResponse) { return _this.log("fetched dtos:" + serviceResponse.Data.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getModels")));
    };
    //#endregion BaseMethods
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CrudService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    CrudService.prototype.log = function (message) {
        // this.messageService.add('HeroService: ' + message);
        console.log(message);
    };
    CrudService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CrudService);
    return CrudService;
}());



/***/ }),

/***/ "./src/app/services/device.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/device.service.ts ***!
  \********************************************/
/*! exports provided: DeviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceService", function() { return DeviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DeviceService = /** @class */ (function () {
    function DeviceService(http) {
        this.http = http;
        this.deviceUrl = 'http://localhost:8101/api/device'; // URL to web api
    }
    //#region Property
    // Create
    DeviceService.prototype.postProperty = function (dto) {
        var _this = this;
        return this.http.post(this.deviceUrl + "/postproperty", dto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (id) { return _this.log("post dto w/ id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postProperty')));
    };
    // Read
    DeviceService.prototype.getProperty = function (id) {
        var _this = this;
        return this.http.get(this.deviceUrl + "/getproperty/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched dto id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getProperty id=" + id)));
    };
    // Update
    DeviceService.prototype.putProperty = function (dto) {
        var _this = this;
        return this.http.put(this.deviceUrl + "/putproperty/" + dto.Id, dto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated dto id=" + dto.Id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('putProperty')));
    };
    // Delete
    DeviceService.prototype.deleteProperty = function (dto) {
        var _this = this;
        var id = typeof dto === 'number' ? dto : dto.Id;
        var url = this.deviceUrl + "/deleteproperty/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted dto id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteProperty')));
    };
    // List
    DeviceService.prototype.listProperty = function (searchDto, pagingDto) {
        var _this = this;
        var dictionary = {};
        dictionary['searchDto'] = searchDto;
        dictionary['pagingDto'] = pagingDto;
        return this.http.post(this.deviceUrl + "/listproperty", dictionary, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (serviceResponse) { return _this.log("fetched dtos:" + serviceResponse.Data.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getPropertys")));
    };
    //#endregion Property
    //#region Model
    // Create
    DeviceService.prototype.postModel = function (dto) {
        var _this = this;
        return this.http.post(this.deviceUrl + "/postmodel", dto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (id) { return _this.log("post dto w/ id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postModel')));
    };
    // Read
    DeviceService.prototype.getModel = function (id) {
        var _this = this;
        return this.http.get(this.deviceUrl + "/getmodel/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched dto id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getModel id=" + id)));
    };
    // Update
    DeviceService.prototype.putModel = function (dto) {
        var _this = this;
        return this.http.put(this.deviceUrl + "/putmodel/" + dto.Id, dto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated dto id=" + dto.Id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('putModel')));
    };
    // Delete
    DeviceService.prototype.deleteModel = function (dto) {
        var _this = this;
        var id = typeof dto === 'number' ? dto : dto.Id;
        var url = this.deviceUrl + "/deletemodel/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted dto id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteModel')));
    };
    // List
    DeviceService.prototype.listModel = function (searchDto, pagingDto) {
        var _this = this;
        var dictionary = {};
        dictionary['searchDto'] = searchDto;
        dictionary['pagingDto'] = pagingDto;
        return this.http.post(this.deviceUrl + "/listmodel", dictionary, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (serviceResponse) { return _this.log("fetched dtos:" + serviceResponse.Data.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getModels")));
    };
    //#endregion Model
    //#region BaseMethods
    // Create
    DeviceService.prototype.post = function (dto, apiPath) {
        var _this = this;
        return this.http.post(apiPath, dto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (id) { return _this.log("post dto w/ id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postModel')));
    };
    // Read
    DeviceService.prototype.get = function (id, apiPath) {
        var _this = this;
        return this.http.get(apiPath + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched dto id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getModel id=" + id)));
    };
    // Update
    DeviceService.prototype.put = function (dto, apiPath) {
        var _this = this;
        return this.http.put(apiPath + "/" + dto.Id, dto, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated dto id=" + dto.Id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('putModel')));
    };
    // Delete
    DeviceService.prototype.delete = function (dto, apiPath) {
        var _this = this;
        var id = typeof dto === 'number' ? dto : dto.Id;
        var url = apiPath + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted dto id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteModel')));
    };
    // List
    DeviceService.prototype.list = function (searchDto, pagingDto, apiPath) {
        var _this = this;
        var dictionary = {};
        dictionary['searchDto'] = searchDto;
        dictionary['pagingDto'] = pagingDto;
        return this.http.post(apiPath, dictionary, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (serviceResponse) { return _this.log("fetched dtos:" + serviceResponse.Data.length); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getModels")));
    };
    //#endregion BaseMethods
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DeviceService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a HeroService message with the MessageService */
    DeviceService.prototype.log = function (message) {
        // this.messageService.add('HeroService: ' + message);
        console.log(message);
    };
    DeviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DeviceService);
    return DeviceService;
}());



/***/ }),

/***/ "./src/app/services/log.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/log.service.ts ***!
  \*****************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.apiUrl = '';
        this.apiUrl = configService.config.DefaultAPIAddress;
    }
    // Read
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.apiUrl + "/api/example/getuser/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (serviceResponse) { return console.log("fetched user id=" + serviceResponse.Data.Id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getUser id=" + id)));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/template/template.component.html":
/*!**************************************************!*\
  !*** ./src/app/template/template.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Template</h2>\n\n<!-- Entry -->\n<div class=\"entryDto w-75\">\n  <form (ngSubmit)=\"postOrPut()\">\n    <!-- form-group separator -->\n    <div class=\"form-group row\">\n      <label for=\"Name\" class=\"col-2 col-form-label-sm\">Brand Name</label>\n      <div class=\"col-10\">\n        <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"entryDto.Name\" name=\"Name\" id=\"Name\"\n          placeholder=\"Name giriniz\">\n      </div>\n    </div>\n \n    <!-- form-group separator -->\n    <div class=\"text-right\">\n      <button type=\"submit\" class=\"btn btn-success btn-sm\" ngbTooltip=\"Save\"><i class=\"material-icons\" >save</i></button>&nbsp;\n      <button type=\"button\" class=\"btn btn-primary btn-sm\" ngbTooltip=\"Cancel\" (click)=\"resetEntry()\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </form>\n</div>\n<!-- Entry -->\n<br>\n\n\n<!-- List -->\n<div class=”container”>\n  <table class=\"table table-bordered table-sm m-0\">\n    <thead style=\"background-color:#b4cff1\">\n      <tr>\n        <th>#</th>\n        <th>Brand Name</th>\n        <th>Model Name</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let dto of dtoList; let i = index\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>{{ dto.Name }}</td>        \n        <td>\n          <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" (click)=\"get(dto)\" ngbTooltip=\"Edit row\"><i class=\"material-icons\">border_color</i></button>&nbsp;\n          <button type=\"button\" class=\"btn btn-sm btn-outline-danger\" (click)=\"delete(dto)\" ngbTooltip=\"Delete row\"><i class=\"material-icons\">cancel</i></button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<!-- List -->\n"

/***/ }),

/***/ "./src/app/template/template.component.ts":
/*!************************************************!*\
  !*** ./src/app/template/template.component.ts ***!
  \************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _code_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../code/dto */ "./src/app/code/dto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/log.service */ "./src/app/services/log.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TemplateComponent = /** @class */ (function () {
    function TemplateComponent(logService, deviceService, route, location, modalService) {
        this.logService = logService;
        this.deviceService = deviceService;
        this.route = route;
        this.location = location;
        this.modalService = modalService;
        this.url = 'http://localhost:8101/api/device'; // config servis ten gelecek.
        this.dtoList = [];
        this.entryDto = {};
        this.searchDto = new _code_dto__WEBPACK_IMPORTED_MODULE_2__["BaseDto"]();
        this.pagingDto = new _code_dto__WEBPACK_IMPORTED_MODULE_2__["PagingDto"]();
        this.list();
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    //#region CRUD Operations
    TemplateComponent.prototype.postOrPut = function () {
        var _this = this;
        if (!this.isValid(this.entryDto)) {
            return;
        }
        if (this.entryDto.Id == null) {
            this.deviceService.post(this.entryDto, this.url + "/posttemplate").subscribe(function (serviceResponse) {
                _this.entryDto.Id = serviceResponse.Data;
                _this.dtoList.push(_this.entryDto);
                _this.resetEntry();
            });
        }
        else {
            this.deviceService.put(this.entryDto, this.url + "/puttemplate").subscribe(function (serviceResponse) {
                var i = _this.dtoList.findIndex((function (obj) { return obj.Id === _this.entryDto.Id; }));
                _this.dtoList[i] = _this.entryDto;
                _this.resetEntry();
            });
        }
    };
    TemplateComponent.prototype.get = function (dto) {
        var _this = this;
        this.deviceService.get(dto.Id, this.url + "/gettemplate").subscribe(function (serviceResponse) {
            _this.entryDto = Object.assign({}, serviceResponse.Data);
        });
    };
    TemplateComponent.prototype.delete = function (dto) {
        var _this = this;
        this.deviceService.delete(dto.Id, this.url + "/deletetemplate").subscribe(function (serviceResponse) {
            _this.dtoList = _this.dtoList.filter(function (h) { return h !== dto; });
        });
    };
    TemplateComponent.prototype.list = function () {
        var _this = this;
        this.deviceService.list(this.searchDto, this.pagingDto, this.url + "/listtemplate").subscribe(function (serviceResponse) {
            _this.dtoList = serviceResponse.Data;
        });
    };
    // #endregion CRUD
    TemplateComponent.prototype.isValid = function (obj) {
        if (obj.Name == null) {
            alert('Lutfen zorunlu alanlari doldurunuz!');
            return false;
        }
        else {
            return true;
        }
    };
    TemplateComponent.prototype.resetEntry = function () {
        this.entryDto = new _code_dto__WEBPACK_IMPORTED_MODULE_2__["BaseDto"]();
        this.entryDto.UpdatedBy = 0;
        this.entryDto.UpdateDate = new Date();
    };
    TemplateComponent.prototype.goBack = function () {
        this.location.back();
    };
    TemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! ./template.component.html */ "./src/app/template/template.component.html")
        }),
        __metadata("design:paramtypes", [_services_log_service__WEBPACK_IMPORTED_MODULE_5__["LogService"],
            _services_device_service__WEBPACK_IMPORTED_MODULE_1__["DeviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]])
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/app/unauthorized/unauthorized.component.ts":
/*!********************************************************!*\
  !*** ./src/app/unauthorized/unauthorized.component.ts ***!
  \********************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent() {
        this.values = [];
        this.message = '401: You have no rights to access this. Please Login';
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthorized',
            template: "<br>\n  <mat-card>\n    <span style=\"color:red; font-weight: bolder;\">{{message}}</span>\n  </mat-card>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/atilla/WS/github/mini-netcore-framework/src/Example/Example.Web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map