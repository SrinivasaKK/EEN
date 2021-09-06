(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Personal\EEN\camera-list\src\main.ts */"zUnb");


/***/ }),

/***/ "0b+V":
/*!*****************************!*\
  !*** ./src/app/constant.ts ***!
  \*****************************/
/*! exports provided: ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, LOGGED_IN_KEY, CAMERA_LIST_KEY, CAMERA_DETAILS_KEY, CAMERA_STATUS_KEY, BASE_API_URL, OAUTH_END_PONT, LOGOUT_END_POINT, CAMERA_END_POINT, STATIC_TEXTS, APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN_KEY", function() { return ACCESS_TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN_KEY", function() { return REFRESH_TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGGED_IN_KEY", function() { return LOGGED_IN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_LIST_KEY", function() { return CAMERA_LIST_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_DETAILS_KEY", function() { return CAMERA_DETAILS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_STATUS_KEY", function() { return CAMERA_STATUS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_API_URL", function() { return BASE_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAUTH_END_PONT", function() { return OAUTH_END_PONT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_END_POINT", function() { return LOGOUT_END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_END_POINT", function() { return CAMERA_END_POINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_TEXTS", function() { return STATIC_TEXTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
const ACCESS_TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const LOGGED_IN_KEY = 'isLoggedIn';
const CAMERA_LIST_KEY = 'camera_list';
const CAMERA_DETAILS_KEY = 'camera_details';
const CAMERA_STATUS_KEY = 'camera_status';
const BASE_API_URL = 'https://rest.cameramanager.com/';
const OAUTH_END_PONT = `${BASE_API_URL}oauth/token`;
const LOGOUT_END_POINT = `${BASE_API_URL}/rest/v2.0/users/self/tokens/current`;
const CAMERA_END_POINT = `rest/v2.4/cameras`;
const STATIC_TEXTS = {
    REFRESH_TOKEN: 'refresh_token',
    GRANT_TYPE: 'grant_type',
    USER_NAME: 'username',
    PASSWORD: 'password',
    SCOPE: 'scope',
    LOGIN_TEXT: 'Log in to Access Your Cameras',
    USERNAME_LABEL: 'Username',
    PASSWORD_LABEL: 'Password',
    USERNAME_ERROR: 'Please enter your user name',
    PASSWORD_ERROR: 'Please enter your password',
    HEADER_TEXT: 'Eagle Eye Networks',
    LOGOUT_TEXT: 'Logout',
    LOGIN_BUTTON_TEXT: 'Login',
    NO_CAMERA_ID_ERROR: 'No camera Id present',
    BACK_BUTTON_LABEL: 'Go Back',
    SHOW_DETAILS: 'See More',
    ONLINE: 'Online',
    RECORDING_ON_CLOUD: 'Recording On Cloud',
    AUDIO_ENABLED: 'Audio Enabled',
    FIRMWARE_STATUS: 'Firmware Status',
    ID: 'Id',
    RECORDING_ON_SD: 'Recording On SD',
};
const APP_ROUTES = {
    LOGIN: 'login',
    CAMERAS: 'cameras',
};


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../constant */ "0b+V");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigator.service */ "ec3T");
/* harmony import */ var src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");








function HeaderComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.TEXTS.LOGOUT_TEXT);
} }
class HeaderComponent {
    constructor(authService, navigatorService, storageService) {
        this.authService = authService;
        this.navigatorService = navigatorService;
        this.storageService = storageService;
        this.TEXTS = _constant__WEBPACK_IMPORTED_MODULE_1__["STATIC_TEXTS"];
    }
    ngOnInit() { }
    logout() {
        this.authService.logout();
        this.navigatorService.navigateToLogin();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 4, vars: 2, consts: [["id", "header"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 4, 1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TEXTS.HEADER_TEXT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.storageService.isUserLoggedIn() === "true");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["header[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  align-items: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  background-color: #337ab7;\n  justify-content: center;\n}\n\nheader[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaGVhZGVyIGgyIHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] }, { type: src_app_services_token_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "A6fv":
/*!**********************************************!*\
  !*** ./src/app/services/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigator.service */ "ec3T");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ "rj1t");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "lGQG");







class AuthInterceptor {
    constructor(navigatorService, storageService, authService) {
        this.navigatorService = navigatorService;
        this.storageService = storageService;
        this.authService = authService;
    }
    intercept(request, next) {
        const token = this.storageService.getAccessToken();
        const refreshToken = this.storageService.getRefreshToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`,
                },
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json',
                },
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json'),
        });
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((event) => {
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            if (error.status === 401) {
                this.authService
                    .refreshToken({ refresh_token: refreshToken })
                    .subscribe(() => {
                    location.reload();
                });
            }
            else {
                this.navigatorService.navigateToLogin();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API_KEY: 'dev_test',
    CLIENT_SECRET: '3H1Bf6mCctIgpCuzvrnyekf3VhAUEnKJ',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");






class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
                exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class AppComponent {
    constructor() {
        this.title = 'camera-list';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%]:nth-last-child(0) {\n  margin-bottom: 10px;\n}\n\n.button-row[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.button-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.mat-flat-button[_ngcontent-%COMP%] {\n  width: 120px;\n  margin: 5px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0FBRUo7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGg6bnRoLWxhc3QtY2hpbGQoMCkge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBtYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "lGQG");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/token.service */ "rj1t");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigator.service */ "ec3T");





class AuthGuard {
    constructor(authService, storageService, navigatorService) {
        this.authService = authService;
        this.storageService = storageService;
        this.navigatorService = navigatorService;
    }
    canActivate(next, state) {
        const url = state === null || state === void 0 ? void 0 : state.url;
        return this.isUserAuthenticated(url);
    }
    isUserAuthenticated(url) {
        if (this.storageService.getRefreshToken()) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.navigatorService.navigateToLogin();
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_token_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.interceptor */ "A6fv");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _cameras_cameras_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cameras/cameras.component */ "dE4j");
/* harmony import */ var _camera_detail_camera_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./camera-detail/camera-detail.component */ "zilR");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/environments/environment */ "AytR");





















// disable logs if app is in production
if (src_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].production) {
    console.log = () => { };
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["AuthInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _cameras_cameras_component__WEBPACK_IMPORTED_MODULE_17__["CamerasComponent"],
        _camera_detail_camera_detail_component__WEBPACK_IMPORTED_MODULE_18__["CameraDetailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _cameras_cameras_component__WEBPACK_IMPORTED_MODULE_17__["CamerasComponent"],
                    _camera_detail_camera_detail_component__WEBPACK_IMPORTED_MODULE_18__["CameraDetailComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_6__["AuthInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dE4j":
/*!**********************************************!*\
  !*** ./src/app/cameras/cameras.component.ts ***!
  \**********************************************/
/*! exports provided: CamerasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamerasComponent", function() { return CamerasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "0b+V");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/navigator.service */ "ec3T");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");











function CamerasComponent_div_1_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function CamerasComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CamerasComponent_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showLoader);
} }
function CamerasComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CamerasComponent_mat_card_2_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const camera_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.getCameraDetails(camera_r3.cameraId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CamerasComponent_mat_card_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const camera_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.getCameraDetails(camera_r3.cameraId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "arrow_right_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const camera_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", camera_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID: ", camera_r3.cameraId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.TEXTS.SHOW_DETAILS, " ");
} }
class CamerasComponent {
    constructor(authService, navigatorService, storageService) {
        this.authService = authService;
        this.navigatorService = navigatorService;
        this.storageService = storageService;
        this.showLoader = false;
        this.cameraList = [];
        this.TEXTS = _constant__WEBPACK_IMPORTED_MODULE_1__["STATIC_TEXTS"];
    }
    ngOnInit() {
        this.showLoader = true;
        const details = this.storageService.getCameraList();
        if (details) {
            this.cameraList = JSON.parse(details);
            this.showLoader = false;
            return;
        }
        this.authService.get(_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_END_POINT"]).subscribe((response) => {
            this.storageService.setCameraList(JSON.stringify(response));
            this.cameraList = response;
            this.showLoader = false;
        }, (error) => {
            console.log(error);
            this.showLoader = false;
        });
    }
    getCameraDetails(cameraId) {
        if (cameraId) {
            this.navigatorService.navigateToCameraDetails(cameraId);
        }
        else {
            console.log(_constant__WEBPACK_IMPORTED_MODULE_1__["STATIC_TEXTS"].NO_CAMERA_ID_ERROR);
        }
    }
}
CamerasComponent.ɵfac = function CamerasComponent_Factory(t) { return new (t || CamerasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"])); };
CamerasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CamerasComponent, selectors: [["app-cameras"]], decls: 3, vars: 2, consts: [["class", "example-loading-shade", 4, "ngIf"], ["class", "mat-card-camera", 3, "click", 4, "ngFor", "ngForOf"], [1, "example-loading-shade"], [4, "ngIf"], [1, "mat-card-camera", 3, "click"], ["type", "submit", "mat-flat-button", "", "color", "primary", 3, "click"]], template: function CamerasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CamerasComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CamerasComponent_mat_card_2_Template, 10, 3, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cameraList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYXMvY2FtZXJhcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamerasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cameras',
                templateUrl: './cameras.component.html',
                styleUrls: ['./cameras.component.scss'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "ec3T":
/*!***********************************************!*\
  !*** ./src/app/services/navigator.service.ts ***!
  \***********************************************/
/*! exports provided: NavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorService", function() { return NavigatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../constant */ "0b+V");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class NavigatorService {
    constructor(router) {
        this.router = router;
    }
    navigateToLogin() {
        this.router.navigate([_constant__WEBPACK_IMPORTED_MODULE_1__["APP_ROUTES"].LOGIN]);
    }
    navigateToCameras() {
        this.router.navigate([_constant__WEBPACK_IMPORTED_MODULE_1__["APP_ROUTES"].CAMERAS]);
    }
    navigateToCameraDetails(cameraId) {
        this.router.navigate([_constant__WEBPACK_IMPORTED_MODULE_1__["APP_ROUTES"].CAMERAS, `${cameraId}`]);
    }
}
NavigatorService.ɵfac = function NavigatorService_Factory(t) { return new (t || NavigatorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
NavigatorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NavigatorService, factory: NavigatorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigatorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../constant */ "0b+V");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.service */ "rj1t");









const OPTIONS = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].API_KEY + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].CLIENT_SECRET),
    }),
};
class AuthService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.isUserLoggedInValue = false;
        this.redirectUrl = '';
    }
    get isUserLoggedIn() {
        return this.isUserLoggedInValue;
    }
    set isUserLoggedIn(value) {
        this.isUserLoggedInValue = value;
    }
    handleError(error) {
        console.error(`Backend returned code ${error.status}, ` +
            `body was: ${JSON.stringify(error.error)}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    }
    login(loginData) {
        this.storageService.removeAccessToken();
        this.storageService.removeRefreshToken();
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set(_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].USER_NAME, loginData.username)
            .set(_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].PASSWORD, loginData.password)
            .set(_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].GRANT_TYPE, _constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].PASSWORD);
        const loginEndPoint = `${_constant__WEBPACK_IMPORTED_MODULE_4__["OAUTH_END_PONT"]}?${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].GRANT_TYPE}=${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].PASSWORD}&${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].SCOPE}=write&${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].USER_NAME}=${loginData.username}&${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].PASSWORD}=${loginData.password}`;
        return this.post(loginEndPoint, body, OPTIONS);
    }
    refreshToken(data) {
        this.storageService.removeAccessToken();
        const body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set(`${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].REFRESH_TOKEN}`, data.refresh_token)
            .set(`${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].GRANT_TYPE}`, `${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].REFRESH_TOKEN}`);
        const refreshTokenEndPoint = `${_constant__WEBPACK_IMPORTED_MODULE_4__["OAUTH_END_PONT"]}?${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].GRANT_TYPE}=${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].REFRESH_TOKEN}&${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].SCOPE}=write&${_constant__WEBPACK_IMPORTED_MODULE_4__["STATIC_TEXTS"].REFRESH_TOKEN}=${this.storageService.getRefreshToken()}`;
        return this.post(refreshTokenEndPoint, body);
    }
    logout() {
        this.delete(_constant__WEBPACK_IMPORTED_MODULE_4__["LOGOUT_END_POINT"]).subscribe((response) => {
            this.storageService.removeAccessToken();
            this.storageService.removeRefreshToken();
            this.storageService.setLoggedIn(false);
        }, (error) => {
            console.log(error);
        });
    }
    get(url) {
        return this.http
            .get(`${_constant__WEBPACK_IMPORTED_MODULE_4__["BASE_API_URL"]}${url}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    post(url, body = {}, OPTIONS = {}) {
        return this.http
            .post(url, body, OPTIONS)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    delete(url) {
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _token_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "rj1t":
/*!*******************************************!*\
  !*** ./src/app/services/token.service.ts ***!
  \*******************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../constant */ "0b+V");



class StorageService {
    constructor() { }
    getAccessToken() {
        return localStorage.getItem(_constant__WEBPACK_IMPORTED_MODULE_1__["ACCESS_TOKEN_KEY"]);
    }
    getRefreshToken() {
        return localStorage.getItem(_constant__WEBPACK_IMPORTED_MODULE_1__["REFRESH_TOKEN_KEY"]);
    }
    saveAccessToken(token) {
        localStorage.setItem(_constant__WEBPACK_IMPORTED_MODULE_1__["ACCESS_TOKEN_KEY"], token);
    }
    saveRefreshToken(refreshToken) {
        localStorage.setItem(_constant__WEBPACK_IMPORTED_MODULE_1__["REFRESH_TOKEN_KEY"], refreshToken);
    }
    removeAccessToken() {
        localStorage.removeItem(_constant__WEBPACK_IMPORTED_MODULE_1__["ACCESS_TOKEN_KEY"]);
    }
    removeRefreshToken() {
        localStorage.removeItem(_constant__WEBPACK_IMPORTED_MODULE_1__["REFRESH_TOKEN_KEY"]);
    }
    setLoggedIn(value) {
        localStorage.setItem(_constant__WEBPACK_IMPORTED_MODULE_1__["LOGGED_IN_KEY"], value);
    }
    isUserLoggedIn() {
        return localStorage.getItem(_constant__WEBPACK_IMPORTED_MODULE_1__["LOGGED_IN_KEY"]);
    }
    setCameraDetails(cameraID, value) {
        localStorage.setItem(`${_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_DETAILS_KEY"]}_${cameraID}`, value);
    }
    getCameraDetails(cameraID) {
        return localStorage.getItem(`${_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_DETAILS_KEY"]}_${cameraID}`);
    }
    setCameraStatus(cameraID, value) {
        localStorage.setItem(`${_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_STATUS_KEY"]}_${cameraID}`, value);
    }
    getCameraStatus(cameraID) {
        return localStorage.getItem(`${_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_STATUS_KEY"]}_${cameraID}`);
    }
    setCameraList(value) {
        localStorage.setItem(_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_LIST_KEY"], value);
    }
    getCameraList() {
        return localStorage.getItem(_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_LIST_KEY"]);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _cameras_cameras_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cameras/cameras.component */ "dE4j");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _camera_detail_camera_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./camera-detail/camera-detail.component */ "zilR");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constant */ "0b+V");









const routes = [
    { path: '', redirectTo: _constant__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].CAMERAS, pathMatch: 'full' },
    {
        path: _constant__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].CAMERAS,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        component: _cameras_cameras_component__WEBPACK_IMPORTED_MODULE_2__["CamerasComponent"],
    },
    {
        path: `${_constant__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].CAMERAS}/:id`,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        component: _camera_detail_camera_detail_component__WEBPACK_IMPORTED_MODULE_5__["CameraDetailComponent"],
    },
    { path: _constant__WEBPACK_IMPORTED_MODULE_6__["APP_ROUTES"].LOGIN, component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '**', redirectTo: '404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../constant */ "0b+V");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/navigator.service */ "ec3T");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");















function LoginComponent_div_1_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function LoginComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showLoader);
} }
function LoginComponent_mat_card_2_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.TEXTS.USERNAME_ERROR);
} }
function LoginComponent_mat_card_2_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.TEXTS.PASSWORD_ERROR);
} }
function LoginComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_mat_card_2_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_mat_card_2_span_9_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_mat_card_2_span_15_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.TEXTS.LOGIN_TEXT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.TEXTS.USERNAME_LABEL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.TEXTS.USERNAME_LABEL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx_r1.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loginForm.get("username").valid && ctx_r1.loginForm.get("username").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.TEXTS.PASSWORD_LABEL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r1.TEXTS.PASSWORD_LABEL);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx_r1.matcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.loginForm.get("password").valid && ctx_r1.loginForm.get("password").touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.loginForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.TEXTS.LOGIN_BUTTON_TEXT, " ");
} }
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control &&
            control.invalid &&
            (control.dirty || control.touched || isSubmitted));
    }
}
class LoginComponent {
    constructor(authService, navigatorService, formBuilder, storageService) {
        this.authService = authService;
        this.navigatorService = navigatorService;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.TEXTS = _constant__WEBPACK_IMPORTED_MODULE_2__["STATIC_TEXTS"];
        this.username = '';
        this.password = '';
        this.showLoader = false;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onFormSubmit() {
        this.showLoader = true;
        this.login();
    }
    login() {
        this.authService.login(this.loginForm.value).subscribe((response) => {
            console.log(response);
            this.showLoader = false;
            this.storageService.saveAccessToken(response.access_token);
            this.storageService.saveRefreshToken(response.refresh_token);
            this.storageService.setLoggedIn(true);
            this.navigatorService.navigateToCameras();
        }, (error) => {
            this.authService.isUserLoggedIn = false;
            alert(error.error.error_description);
            this.loginForm.reset();
            this.showLoader = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 3, vars: 2, consts: [[1, "example-container", "mat-elevation-z8"], ["class", "example-loading-shade", 4, "ngIf"], ["class", "example-card", 4, "ngIf"], [1, "example-loading-shade"], [4, "ngIf"], [1, "example-card"], [3, "formGroup", "ngSubmit"], [1, "example-full-width"], ["matInput", "", "formControlName", "username", 3, "placeholder", "errorStateMatcher"], ["type", "password", "matInput", "", "formControlName", "password", 3, "placeholder", "errorStateMatcher"], [1, "button-row"], ["type", "submit", "mat-flat-button", "", "color", "primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_mat_card_2_Template, 21, 12, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"]], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%]:nth-last-child(0) {\n  margin-bottom: 10px;\n}\n\n.button-row[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.button-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.mat-flat-button[_ngcontent-%COMP%] {\n  width: 120px;\n  margin: 5px;\n}\n\n.container-fluid[_ngcontent-%COMP%] {\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFBRTtFQUNFLGtCQUFBO0FBRUo7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGg6bnRoLWxhc3QtY2hpbGQoMCkge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBtYXQtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LWZsYXQtYnV0dG9uIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['../app.component.scss'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zilR":
/*!**********************************************************!*\
  !*** ./src/app/camera-detail/camera-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: CameraDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDetailComponent", function() { return CameraDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constant */ "0b+V");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/navigator.service */ "ec3T");
/* harmony import */ var _services_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/token.service */ "rj1t");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function CameraDetailComponent_div_1_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function CameraDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CameraDetailComponent_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showLoader);
} }
function CameraDetailComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraDetailComponent_mat_card_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.GoBackToCameras(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "keyboard_backspace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CameraDetailComponent_mat_card_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.getStatus(ctx_r6.cameraDetail.cameraId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "details icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.cameraDetail.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.TEXTS.ID, ": ", ctx_r1.cameraDetail.cameraId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.TEXTS.BACK_BUTTON_LABEL, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.TEXTS.SHOW_DETAILS, " ");
} }
function CameraDetailComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r2.TEXTS.ONLINE, ": ", ctx_r2.cameraStatus.online, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.TEXTS.RECORDING_ON_CLOUD, ": ", ctx_r2.cameraStatus.recordingOnCloud, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.TEXTS.AUDIO_ENABLED, ": ", ctx_r2.cameraStatus.audioEnabled, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.TEXTS.FIRMWARE_STATUS, ": ", ctx_r2.cameraStatus.firmwareStatus, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.TEXTS.RECORDING_ON_SD, ": ", ctx_r2.cameraStatus.recordingOnSd, "");
} }
class CameraDetailComponent {
    constructor(authService, activatedRoute, navigatorService, storageService) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.navigatorService = navigatorService;
        this.storageService = storageService;
        this.showLoader = false;
        this.TEXTS = _constant__WEBPACK_IMPORTED_MODULE_1__["STATIC_TEXTS"];
        this.cameraId = null;
        this.cameraStatus = null;
        this.cameraDetail = null;
        this.activatedRoute.params.subscribe((params) => {
            this.cameraId = params['id'];
            this.getCameraDetails(this.cameraId);
        });
    }
    ngOnInit() { }
    getCameraDetails(cameraId) {
        this.showLoader = true;
        if (cameraId) {
            //check if the details is already present for given camera ID
            const details = this.storageService.getCameraDetails(cameraId);
            if (details) {
                this.cameraDetail = JSON.parse(details);
                this.showLoader = false;
                return;
            }
            this.authService.get(`${_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_END_POINT"]}/${cameraId}`).subscribe((response) => {
                this.cameraDetail = response;
                //save to local storage
                this.storageService.setCameraDetails(cameraId, JSON.stringify(response));
                this.showLoader = false;
            }, (error) => {
                alert(error.error.title);
                this.showLoader = false;
            });
        }
        else {
            console.log('No Camera ID');
        }
    }
    getStatus(cameraId) {
        this.showLoader = true;
        if (cameraId) {
            const details = this.storageService.getCameraStatus(cameraId);
            if (details) {
                this.cameraStatus = JSON.parse(details);
                this.showLoader = false;
                return;
            }
            this.authService.get(`${_constant__WEBPACK_IMPORTED_MODULE_1__["CAMERA_END_POINT"]}/${cameraId}/status`).subscribe((response) => {
                //save to local storage
                this.storageService.setCameraStatus(cameraId, JSON.stringify(response));
                this.cameraStatus = response;
                this.showLoader = false;
            }, (error) => {
                alert(error.error.title);
                this.showLoader = false;
            });
        }
        else {
            console.log('No camera ID');
        }
    }
    GoBackToCameras() {
        this.navigatorService.navigateToCameras();
    }
}
CameraDetailComponent.ɵfac = function CameraDetailComponent_Factory(t) { return new (t || CameraDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_token_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
CameraDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CameraDetailComponent, selectors: [["app-camera-detail"]], decls: 4, vars: 3, consts: [["class", "example-loading-shade", 4, "ngIf"], ["class", "mat-card-camera", 4, "ngIf"], [1, "example-loading-shade"], [4, "ngIf"], [1, "mat-card-camera"], ["type", "submit", "mat-flat-button", "", "color", "primary", 3, "click"]], template: function CameraDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CameraDetailComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CameraDetailComponent_mat_card_2_Template, 14, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CameraDetailComponent_mat_card_3_Template, 11, 10, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cameraDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cameraStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS1kZXRhaWwvY2FtZXJhLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-camera-detail',
                templateUrl: './camera-detail.component.html',
                styleUrls: ['./camera-detail.component.scss'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_navigator_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorService"] }, { type: _services_token_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map