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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gui-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/sign-up.service */ "./src/app/services/sign-up.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sign-up-form/sign-up-form.component */ "./src/app/components/sign-up-form/sign-up-form.component.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin-page/admin-page.component */ "./src/app/components/admin-page/admin-page.component.ts");
/* harmony import */ var _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin-dashboard/admin-dashboard.component */ "./src/app/components/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_13__["SignUpFormComponent"],
                _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_14__["LoginFormComponent"],
                _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_15__["AdminPageComponent"],
                _components_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["AdminDashboardComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '', component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_8__["PageComponent"],
                    },
                    {
                        path: 'setMyHome/signUp', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"]
                    },
                    {
                        path: 'setMyHome/login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
                    },
                    {
                        path: 'setMyHome/admin', component: _components_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_15__["AdminPageComponent"]
                    },
                    {
                        path: 'setMyHome/logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"]
                    }
                ])
            ],
            providers: [_services_sign_up_service__WEBPACK_IMPORTED_MODULE_6__["SignUpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin-dashboard/admin-dashboard.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".firstRow\r\n{\r\n    margin: 5%;\r\n    \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksVUFBVTs7O0FBR2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXJzdFJvd1xyXG57XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgXHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-dashboard/admin-dashboard.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row firstRow\">\n<div class=\"col-3\">\n    <div class=\"card text-white bg-primary mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-header\">View</div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">View All Users</h5>\n          <p class=\"card-text\">Click here to see all registered users</p>\n        </div>\n      </div>\n\n</div>\n\n<div class=\"col-3\">\n\n    <div class=\"card text-white bg-secondary mb-3\" style=\"max-width: 18rem;\">\n        <div class=\"card-header\">Schedule</div>\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Create GiveAway Event</h5>\n          <p class=\"card-text\">Click here to schedule a new event</p>\n        </div>\n      </div>\n  </div>\n\n</div>\n\n  \n "

/***/ }),

/***/ "./src/app/components/admin-dashboard/admin-dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-dashboard/admin-dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent() {
    }
    AdminDashboardComponent.prototype.ngOnInit = function () {
    };
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-dashboard',
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/components/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/components/admin-dashboard/admin-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <app-header></app-header>\n    <app-admin-dashboard></app-admin-dashboard>\n    </div>\n    \n  "

/***/ }),

/***/ "./src/app/components/admin-page/admin-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-page/admin-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent() {
    }
    AdminPageComponent.prototype.ngOnInit = function () {
    };
    AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-page',
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/components/admin-page/admin-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-page.component.css */ "./src/app/components/admin-page/admin-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myNav {\r\n\tbackground-color: #FF726A;\r\n}\r\n\r\n.searchBox\r\n{\r\n    width: 30%;\r\n}\r\n\r\n.mybtn {\r\n\tbackground-color: #4189CC;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXlOYXYge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRjcyNkE7XHJcbn1cclxuXHJcbi5zZWFyY2hCb3hcclxue1xyXG4gICAgd2lkdGg6IDMwJTtcclxufVxyXG4ubXlidG4ge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM0MTg5Q0M7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light myNav\">\n  <a class=\"navbar-brand\" href=\"#\"> <img\n    src=\"../../../assets/images/logo.JPG\" width=\"50\" height=\"30\"\n    class=\"d-inline-block align-top\" alt=\"logoImage\"> SetMyHouse\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Furniture</a></li>\n      <li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Students</a></li>\n      <li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Donors</a></li>\n      <li class=\"nav-item active\"><a class=\"nav-link\" href=\"#\">Volunteers</a></li>\n\n      <div *ngIf=\"username; else other\">\n          <li class=\"nav-item active\"><a class=\"nav-link\" >Welcome {{username}}</a></li>\n      </div>\n      <ng-template #other>\n          <li class=\"nav-item active\"><a class=\"nav-link\" [routerLink]=\"['/setMyHome/login']\">Login</a></li>\n      </ng-template>\n\n      <div *ngIf=\"username; else signup\">\n\n          <li class=\"nav-item active\"><button\n            class=\"btn mybtn my-2 my-sm-0\"  [routerLink]=\"['/setMyHome/logout']\">Log Out</button></li>\n      </div>\n      <ng-template #signup>\n          <li class=\"nav-item active\"><button\n            class=\"btn mybtn my-2 my-sm-0\"  [routerLink]=\"['/setMyHome/signUp']\">Sign Up</button></li>\n        </ng-template>\n    \n    </ul>\n   \n      <input class=\"form-control mr-sm-2 searchBox\" type=\"search\"\n        placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn mybtn my-2 my-sm-0\" type=\"submit\">Search</button>\n    \n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.userService.isLogged) {
            this.username = this.userService.getFname();
        }
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n\r\n\tbackground-color: white;\r\n}\r\n.myHomeCarousel {\r\n\tmargin-top: 2%;\r\n}\r\n.myhomeheader {\r\n\tfont-family: 'Indie Flower', cursive;\r\n\tmargin-top: 2%;\r\n\tletter-spacing: 1px;\r\n\tline-height: 1.44;\r\n    font-weight: bold;\r\n    \r\n}\r\n.myHomeSection1 {\r\n\tmargin-top: 5%;\r\n\tbackground-color: #F8FAFB;\r\n\tmargin-bottom: 5%;\r\n}\r\n.myCol1Section1 {\r\n\tpadding-top: 5%;\r\n\tpadding-bottom: 5%;\r\n}\r\n.myCol2Section1 {\r\n\tpadding-top: 5%;\r\n\tpadding-bottom: 5%;\r\n}\r\n.journeyHeader\r\n{\r\npadding-bottom: 5%;\r\n}\r\n.journeyPara\r\n{\r\npadding-bottom: 5%;\r\n}\r\n.blueTheme {\r\n\tcolor: #4189CC;\r\n}\r\n.mainThemeColor {\r\n\tcolor: #E66760;\r\n}\r\n.myHomeSection2 {\r\n\tbackground-color: #FF726A;\r\n\tcolor: white;\r\n\tmargin-bottom: 5%;\r\n}\r\n.myCol1Section2 {\r\n\tpadding-top: 5%;\r\n\tpadding-bottom: 3%;\r\n}\r\n.sec2row2 {\r\n\tpadding-left: 10%;\r\n\tpadding-right: 10%;\r\n}\r\n.valueHeader {\r\n\tpadding-top: 5%; font-weight : bold;\r\n\tpadding-bottom: 5%;\r\n\tfont-weight: bold;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyx1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0Msb0NBQW9DO0NBQ3BDLGNBQWM7Q0FDZCxtQkFBbUI7Q0FDbkIsaUJBQWlCO0lBQ2QsaUJBQWlCOztBQUVyQjtBQUNBO0NBQ0MsY0FBYztDQUNkLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEI7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUVBO0NBQ0MsY0FBYztBQUNmO0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsZUFBZSxFQUFFLGtCQUFrQjtDQUNuQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubXlIb21lQ2Fyb3VzZWwge1xyXG5cdG1hcmdpbi10b3A6IDIlO1xyXG59XHJcbi5teWhvbWVoZWFkZXIge1xyXG5cdGZvbnQtZmFtaWx5OiAnSW5kaWUgRmxvd2VyJywgY3Vyc2l2ZTtcclxuXHRtYXJnaW4tdG9wOiAyJTtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjQ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBcclxufVxyXG4ubXlIb21lU2VjdGlvbjEge1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGOEZBRkI7XHJcblx0bWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi5teUNvbDFTZWN0aW9uMSB7XHJcblx0cGFkZGluZy10b3A6IDUlO1xyXG5cdHBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG5cclxuLm15Q29sMlNlY3Rpb24xIHtcclxuXHRwYWRkaW5nLXRvcDogNSU7XHJcblx0cGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcbi5qb3VybmV5SGVhZGVyXHJcbntcclxucGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcbi5qb3VybmV5UGFyYVxyXG57XHJcbnBhZGRpbmctYm90dG9tOiA1JTtcclxufVxyXG4uYmx1ZVRoZW1lIHtcclxuXHRjb2xvcjogIzQxODlDQztcclxufVxyXG5cclxuLm1haW5UaGVtZUNvbG9yIHtcclxuXHRjb2xvcjogI0U2Njc2MDtcclxufVxyXG5cclxuLm15SG9tZVNlY3Rpb24yIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3MjZBO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHRtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLm15Q29sMVNlY3Rpb24yIHtcclxuXHRwYWRkaW5nLXRvcDogNSU7XHJcblx0cGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uc2VjMnJvdzIge1xyXG5cdHBhZGRpbmctbGVmdDogMTAlO1xyXG5cdHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLnZhbHVlSGVhZGVyIHtcclxuXHRwYWRkaW5nLXRvcDogNSU7IGZvbnQtd2VpZ2h0IDogYm9sZDtcclxuXHRwYWRkaW5nLWJvdHRvbTogNSU7XHJcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\t\t<h3 class=\"myhomeheader blueTheme text-center\">\n\t\t\tFree Furniture Giveaway <small class=\"text-muted\">Come, Grab\n\t\t\t\tand Go!!</small>\n\t\t</h3>\n\t\t<!--   start of home page carousel-->\n\t\t<div id=\"carouselExampleIndicators\"\n\t\t\tclass=\"carousel slide myHomeCarousel\" data-ride=\"carousel\">\n\t\t\t<ol class=\"carousel-indicators\">\n\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\"\n\t\t\t\t\tclass=\"active\"></li>\n\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n\t\t\t\t<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n\t\t\t</ol>\n\t\t\t<div class=\"carousel-inner\">\n\t\t\t\t<div class=\"carousel-item active\">\n\t\t\t\t\t<img class=\"d-block w-100\" src=\"../../../assets/images/volunteer.jpg\"\n\t\t\t\t\t\talt=\"First slide\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t<img class=\"d-block w-100\" src=\"../../../assets/images/homeimage.jpg\"\n\t\t\t\t\t\talt=\"Second slide\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"carousel-item\">\n\t\t\t\t\t<img class=\"d-block w-100\" src=\"../../../assets/images/students.jpeg\"\n\t\t\t\t\t\talt=\"Third slide\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\"\n\t\t\t\trole=\"button\" data-slide=\"prev\"> <span\n\t\t\t\tclass=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span\n\t\t\t\tclass=\"sr-only\">Previous</span>\n\t\t\t</a> <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\"\n\t\t\t\trole=\"button\" data-slide=\"next\"> <span\n\t\t\t\tclass=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span\n\t\t\t\tclass=\"sr-only\">Next</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<!--   end of home page carousel-->\n\n\t\t<!--  navigation ends -->\n\n\t\t<div class=\"row myHomeSection1\">\n\t\t\t<div class=\"col-8 myCol1Section1\">\n\n\t\t\t\t<h2 class=\"journeyHeader text-center\">Giving Away Smiles..The Journey So\n\t\t\t\t\tFar</h2>\n\t\t\t\t<p class=\"journeyPara text-center\">SetMyHouse lets students set up their\n\t\t\t\t\thomes quickly and easily. It connects church organisations, donors,\n\t\t\t\t\tstudents to come together and help each other. It is a way for the\n\t\t\t\t\tcommunity to collaborate and have fun!</p>\n\n\t\t\t\t<div>\n\t\t\t\t\t<h2 class=\"blueTheme text-center\">14.6M</h2>\n\n\t\t\t\t\t<h2 class=\"blueTheme text-center\">Students benefited from GiveAway</h2>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-4 myCol2Section1\">\n\n\t\t\t\t<div class=\"embed-responsive embed-responsive-16by9\">\n\t\t\t\t\t<iframe class=\"embed-responsive-item\"\n\t\t\t\t\t\tsrc=\"https://www.youtube.com/embed/zpOULjyy-n8?rel=0\"\n\t\t\t\t\t\tallowfullscreen></iframe>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\t\n\n\n\t<div class=\"myHomeSection2\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<h2 class=\"valueHeader text-center\">Our Values</h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row sec2row2\">\n\n\t\t\t<div class=\"col\">\n\t\t\t\t<img src=\"../../../assets/images/helping.JPG\" width=\"120\" height=\"100\"\n\t\t\t\t\tclass=\"d-inline-block align-top\" alt=\"helping\"> Helpfulness\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<img src=\"../../../assets/images/compassion.JPG\" width=\"120\" height=\"100\"\n\t\t\t\t\tclass=\"d-inline-block align-top\" alt=\"compassion\"> Compassion\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<img src=\"../../../assets/images/community.JPG\" width=\"120\" height=\"100\"\n\t\t\t\t\tclass=\"d-inline-block align-top\" alt=\"helping\"> Sense of\n\t\t\t\tCommunity\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col myCol1Section2\">\n\t\t\t\t<h2 class=\"text-center\">80 Families</h2>\n\t\t\t\t<p class=\"text-center\">Have pledged support to international students in\n\t\t\t\t\tBryan/College Station area till date!</p>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login-form/login-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*login page styles............\r\n................................. media query, have an account to be added*/\r\n\r\n\r\n\r\n.divlogin{\r\n    margin-top: 5%;\r\n    padding-bottom: 2.5rem;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n\r\n.divmascot img{\r\n    margin-left: 40%;\r\n    padding-bottom: 2.5rem;\r\n}\r\n\r\n\r\n\r\n.divlogin input{\r\n    display: block;\r\n    /* padding: 2%;\r\n    margin: 4%;*/\r\n    \r\n}\r\n\r\n\r\n\r\n.divlogin button{\r\n    background-color: #4189CC;\r\n\tborder: grey;\r\n\tfont-size: 20px;\r\n\tcolor: white;\r\n    padding: 2%;\r\n    margin: 4%;\r\n    width: 65%;\r\n}\r\n\r\n\r\n\r\n.divlogin h2{\r\n    margin: 7% 4%;\r\n}\r\n\r\n\r\n\r\n.divlogin a\r\n{\r\n    text-decoration: none;\r\n    color: green;\r\n    margin: 0 6%;\r\n}\r\n\r\n\r\n\r\n#btnNoaccnt, #btnfrpass, #btnhaveacc\r\n{\r\n    background-color: transparent;\r\n    color:green;\r\n    margin: 0;\r\n    padding:0 ;\r\n    font-size: 1em;\r\n}\r\n\r\n\r\n\r\n#btnhaveacc{\r\n    margin: 0 auto;\r\n    width: 65%;\r\n    \r\n}\r\n\r\n\r\n\r\n#loginform\r\n{\r\n    width: 65%;\r\n}\r\n\r\n\r\n\r\n#passinstruct{\r\n    padding: 2%;\r\n    margin: 4%;\r\n    /* width: 65%; */\r\n    background-color: lightgreen;\r\n  \r\n   \r\n}\r\n\r\n\r\n\r\n.form-group.required .control-label:after {\r\n    content:\"*\";\r\n    color:red;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTsyRUFDMkU7Ozs7QUFJM0U7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7OztBQUVBO0lBQ0ksY0FBYztJQUNkO2dCQUNZOztBQUVoQjs7OztBQUVBO0lBQ0kseUJBQXlCO0NBQzVCLFlBQVk7Q0FDWixlQUFlO0NBQ2YsWUFBWTtJQUNULFdBQVc7SUFDWCxVQUFVO0lBQ1YsVUFBVTtBQUNkOzs7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBSUE7O0lBRUkscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7O0FBRUE7O0lBRUksNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLGNBQWM7QUFDbEI7Ozs7QUFHQTtJQUNJLGNBQWM7SUFDZCxVQUFVOztBQUVkOzs7O0FBRUE7O0lBRUksVUFBVTtBQUNkOzs7O0FBS0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiw0QkFBNEI7OztBQUdoQzs7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFNBQVM7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmxvZ2luIHBhZ2Ugc3R5bGVzLi4uLi4uLi4uLi4uXHJcbi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiBtZWRpYSBxdWVyeSwgaGF2ZSBhbiBhY2NvdW50IHRvIGJlIGFkZGVkKi9cclxuXHJcblxyXG5cclxuLmRpdmxvZ2lue1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmRpdm1hc2NvdCBpbWd7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcclxufVxyXG5cclxuLmRpdmxvZ2luIGlucHV0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvKiBwYWRkaW5nOiAyJTtcclxuICAgIG1hcmdpbjogNCU7Ki9cclxuICAgIFxyXG59XHJcblxyXG4uZGl2bG9naW4gYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxODlDQztcclxuXHRib3JkZXI6IGdyZXk7XHJcblx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICAgIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcblxyXG4uZGl2bG9naW4gaDJ7XHJcbiAgICBtYXJnaW46IDclIDQlO1xyXG59XHJcblxyXG5cclxuXHJcbi5kaXZsb2dpbiBhXHJcbntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIG1hcmdpbjogMCA2JTtcclxufVxyXG5cclxuI2J0bk5vYWNjbnQsICNidG5mcnBhc3MsICNidG5oYXZlYWNjXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6Z3JlZW47XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOjAgO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcblxyXG4jYnRuaGF2ZWFjY3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIFxyXG59XHJcblxyXG4jbG9naW5mb3JtXHJcbntcclxuICAgIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiNwYXNzaW5zdHJ1Y3R7XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuICAgIG1hcmdpbjogNCU7XHJcbiAgICAvKiB3aWR0aDogNjUlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcclxuICBcclxuICAgXHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwLnJlcXVpcmVkIC5jb250cm9sLWxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6XCIqXCI7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row divlogin\">\n    \n  <div class=\"col-sm-6 divmascot\" >   \n  <img src=\"../../../assets/images/mascot.JPG\" alt=\"mascot\">    \n      </div>\n      \n  <div class=\"col-sm-4\">\n  <h2 id=\"logheader\">Log in to your account</h2>\n  <form [formGroup]=\"rForm\" (ngSubmit)=\"login(rForm.value)\" >\n\n  <div id=\"loginform\">\n      <div class=\"form-group required\">\n          <label class=\"control-label\">Email Address</label>\n          <input type=\"text\" formControlName=\"emailid\" id=\"emailid\" class=\"form-control\">\n          <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['emailid'].valid &&\n             rForm.controls['emailid'].touched\">\n            <div *ngIf=\"rForm.controls['emailid'].errors.required\">\n              Email Id is required\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group required\">\n            <label class=\"control-label\">Password</label>\n            <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">\n              <div *ngIf=\"rForm.controls['password'].errors.required\">\n                Password is required\n              </div>\n            </div>\n          </div>\n          \n  <button  type=\"button\" id=\"btnfrpass\" name=\"forgot password\">Forgot Password?</button>\n  <button  type=\"button\" id=\"btnNoaccnt\" name=\"forgot password\" [routerLink]=\"['/setMyHome/signUp']\">Don't have an account?</button>\n     \n      <div class=\"form-group\">\n      <input type=\"submit\" class=\"button btn btn-primary expanded\" id=\"submit\" value=\"Log In\" [disabled]=\"!rForm.valid\">\n        </div>\n        </div>\n  </form>\n  \n <div id=\"loginreset\" style=\"display: none\">\n  \n   <p id=\"passinstruct\">Password must be 8-13 characters long. Your Password Must have at least 1 lowercase alphabet.\n          Your Password Must have at least 1 uppercase alphabet. Your Password Must have at least 1 number.</p> \n  <input type=\"email\" id=\"txtemail\" name=\"email\" placeholder=\"Email\">\n  <input type=\"text\" id=\"txtquestion\" name=\"security quesyion\" placeholder=\"Security Question: Favorite color?\">\n     <input type=\"password\" id =\"txtoldpass\" name=\"password\" placeholder=\"New Password\">\n     \n     <input type=\"password\" id =\"txtoldpass\" name=\"password\" placeholder=\"Confrim Password\">\n      <br>\n  <button type = \"submit\" name=\"login\" id=\"btnlogin\" class=\"btn btn-primary\">Reset Password</button> \n  </div>    \n      \n     \n  </div>   \n  </div> \n  "

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sign-up.service */ "./src/app/services/sign-up.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");






var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(formBuilder, userService, signUpService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.signUpService = signUpService;
        this.router = router;
        this.rForm = this.formBuilder.group({
            'emailid': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function (input) {
        var _this = this;
        console.log(input);
        this.signUpService.login(input).subscribe(function (u) {
            console.log(u);
            if (u.emailid != null) {
                console.log("inide  ");
                _this.userService.setToken(u.emailid);
                _this.userService.setFname(u.fname);
                if (u.type == 'admin') {
                    console.log("navigating");
                    _this.router.navigateByUrl('/setMyHome/admin');
                }
                //if(u.type=='student')
                // this.router.navigateByUrl('/setMyHome/admin');
                //if(u.type=='donor')
                // this.router.navigateByUrl('/setMyHome/admin');
            }
        });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/components/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_5__["UserServiceService"], _services_sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignUpService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n  <app-login-form></app-login-form>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.userService.logout();
        this.router.navigateByUrl('');
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/page/page.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page/page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/page/page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n<app-header></app-header>\n<app-home></app-home>\n</div>\n"

/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/components/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/components/page/page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up-form/sign-up-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/sign-up-form/sign-up-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*login page styles............\r\n................................. media query, have an account to be added*/\r\n\r\n\r\n\r\n.divlogin{\r\n    margin-top: 5%;\r\n    padding-bottom: 2.5rem;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n\r\n.divmascot img{\r\n    margin-left: 40%;\r\n    padding-bottom: 2.5rem;\r\n}\r\n\r\n\r\n\r\n.divlogin input{\r\n    display: block;\r\n    /* padding: 2%;\r\n    margin: 4%;*/\r\n    \r\n}\r\n\r\n\r\n\r\n.divlogin button{\r\n    background-color: #4189CC;\r\n\tborder: grey;\r\n\tfont-size: 20px;\r\n\tcolor: white;\r\n    padding: 2%;\r\n    margin: 4%;\r\n    width: 65%;\r\n}\r\n\r\n\r\n\r\n.divlogin h2{\r\n    margin: 7% 4%;\r\n}\r\n\r\n\r\n\r\n.divlogin a\r\n{\r\n    text-decoration: none;\r\n    color: green;\r\n    margin: 0 6%;\r\n}\r\n\r\n\r\n\r\n#btnNoaccnt, #btnfrpass, #btnhaveacc\r\n{\r\n    background-color: transparent;\r\n    color:green;\r\n    margin: 0;\r\n    padding:0 ;\r\n    font-size: 1em;\r\n}\r\n\r\n\r\n\r\n#btnhaveacc{\r\n    margin: 0 auto;\r\n    width: 65%;\r\n    \r\n}\r\n\r\n\r\n\r\n#accntform\r\n{\r\n    width: 65%;\r\n}\r\n\r\n\r\n\r\n#passinstruct{\r\n    padding: 2%;\r\n    margin: 4%;\r\n    /* width: 65%; */\r\n    background-color: lightgreen;\r\n  \r\n   \r\n}\r\n\r\n\r\n\r\n.form-group.required .control-label:after {\r\n    content:\"*\";\r\n    color:red;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXVwLWZvcm0vc2lnbi11cC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7MkVBQzJFOzs7O0FBSTNFO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7Ozs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7Ozs7QUFFQTtJQUNJLGNBQWM7SUFDZDtnQkFDWTs7QUFFaEI7Ozs7QUFFQTtJQUNJLHlCQUF5QjtDQUM1QixZQUFZO0NBQ1osZUFBZTtDQUNmLFlBQVk7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7QUFDZDs7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7OztBQUlBOztJQUVJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7OztBQUVBOztJQUVJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixjQUFjO0FBQ2xCOzs7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsVUFBVTs7QUFFZDs7OztBQUVBOztJQUVJLFVBQVU7QUFDZDs7OztBQUtBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNEJBQTRCOzs7QUFHaEM7Ozs7QUFFQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbG9naW4gcGFnZSBzdHlsZXMuLi4uLi4uLi4uLi5cclxuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uIG1lZGlhIHF1ZXJ5LCBoYXZlIGFuIGFjY291bnQgdG8gYmUgYWRkZWQqL1xyXG5cclxuXHJcblxyXG4uZGl2bG9naW57XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZGl2bWFzY290IGltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG4uZGl2bG9naW4gaW5wdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8qIHBhZGRpbmc6IDIlO1xyXG4gICAgbWFyZ2luOiA0JTsqL1xyXG4gICAgXHJcbn1cclxuXHJcbi5kaXZsb2dpbiBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE4OUNDO1xyXG5cdGJvcmRlcjogZ3JleTtcclxuXHRmb250LXNpemU6IDIwcHg7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBtYXJnaW46IDQlO1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG5cclxuXHJcbi5kaXZsb2dpbiBoMntcclxuICAgIG1hcmdpbjogNyUgNCU7XHJcbn1cclxuXHJcblxyXG5cclxuLmRpdmxvZ2luIGFcclxue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgbWFyZ2luOiAwIDYlO1xyXG59XHJcblxyXG4jYnRuTm9hY2NudCwgI2J0bmZycGFzcywgI2J0bmhhdmVhY2Ncclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjpncmVlbjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6MCA7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxufVxyXG5cclxuXHJcbiNidG5oYXZlYWNje1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgXHJcbn1cclxuXHJcbiNhY2NudGZvcm1cclxue1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuI3Bhc3NpbnN0cnVjdHtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgbWFyZ2luOiA0JTtcclxuICAgIC8qIHdpZHRoOiA2NSU7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gIFxyXG4gICBcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAucmVxdWlyZWQgLmNvbnRyb2wtbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDpcIipcIjtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/sign-up-form/sign-up-form.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/sign-up-form/sign-up-form.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"rForm\" (ngSubmit)=\"signUp(rForm.value)\" >\n<div class=\"row divlogin\">\n    \n  <div class=\"col-sm-6 divmascot\" >   \n  <img src=\"../../../assets/images/mascot.JPG\" alt=\"mascot\">    \n      </div>\n      \n  <div class=\"col-sm-4\">\n  <h2>Create your account</h2>\n  <div id=\"accntform\">\n    <p id=\"passinstruct\">Password must be 8-13 characters long. Your Password Must have at least 1 lowercase alphabet.\n          Your Password Must have at least 1 uppercase alphabet. Your Password Must have at least 1 number.</p>\n \n          <div class=\"form-group required\">\n            <label class=\"control-label\">First Name</label>\n            <input type=\"text\" formControlName=\"fname\" id=\"fname\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['fname'].valid &&\n               rForm.controls['fname'].touched\">\n              <div *ngIf=\"rForm.controls['fname'].errors.required\">\n                First name is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group required\">\n            <label class=\"control-label\">Last Name</label>\n            <input type=\"text\" formControlName=\"lname\" id=\"lname\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['lname'].valid && rForm.controls['lname'].touched\">\n              <div *ngIf=\"rForm.controls['lname'].errors.required\">\n                Last name is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group required\">\n            <label class=\"control-label\">Email Address</label>\n            <input type=\"text\" formControlName=\"emailid\" id=\"emailid\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['emailid'].valid && rForm.controls['emailid'].touched\">\n              <div *ngIf=\"rForm.controls['emailid'].errors.required\">\n                Email address is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group required\">\n            <label class=\"control-label\">Phone Number</label>\n            <input type=\"text\" formControlName=\"phonenumber\" id=\"phonenumber\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['phonenumber'].valid && rForm.controls['phonenumber'].touched\">\n              <div *ngIf=\"rForm.controls['phonenumber'].errors.required\">\n                Phone Number is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group required\">\n            <label class=\"control-label\">Password</label>\n            <input type=\"password\" formControlName=\"password\" id=\"password\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['password'].valid && rForm.controls['password'].touched\">\n              <div *ngIf=\"rForm.controls['password'].errors.required\">\n                Password is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group required\">\n            <label class=\"control-label\">Confirm Password</label>\n            <input type=\"password\" formControlName=\"cpassword\" id=\"cpassword\" class=\"form-control\">\n            <div class=\"alert alert-danger\" *ngIf=\"!rForm.controls['cpassword'].valid && rForm.controls['cpassword'].touched\">\n              <div *ngIf=\"rForm.controls['cpassword'].errors.required\">\n                Confirmed Password is required\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group required \">\n            <!-- <label class=\"form-check-label\"> Are you a: </label> -->\n\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"type\" \n              name=\"type\" id=\"student\" value=\"student\" checked\n                >\n              <label class=\"form-check-label\" for=\"student\">  A Student</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"type\"\n               name=\"type\" id=\"donor\" value=\"donor\" >\n              <label class=\"form-check-label\" for=\"donor\">A Donor</label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"type\" \n              name=\"type\" id=\"volunteer\" value=\"volunteer\">\n              <label class=\"form-check-label\" for=\"volunteer\">A Volunteer</label>\n            </div>\n            \n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"button mybtn btn btn-primary expanded\" id=\"submit\" value=\"Sign Up\" [disabled]=\"!rForm.valid\">\n          </div>\n  </div>  \n   \n      \n     \n  </div>   \n  </div> \n  </form>"

/***/ }),

/***/ "./src/app/components/sign-up-form/sign-up-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sign-up-form/sign-up-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: SignUpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function() { return SignUpFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sign-up.service */ "./src/app/services/sign-up.service.ts");




var SignUpFormComponent = /** @class */ (function () {
    function SignUpFormComponent(formBuilder, signUpService) {
        this.formBuilder = formBuilder;
        this.signUpService = signUpService;
        this.rForm = this.formBuilder.group({
            'fname': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'lname': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'emailid': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'phonenumber': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'cpassword': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'type': ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    SignUpFormComponent.prototype.ngOnInit = function () {
    };
    SignUpFormComponent.prototype.signUp = function (input) {
        console.log(input);
        this.signUpService.signUp(input);
        this.rForm.reset();
    };
    SignUpFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up-form',
            template: __webpack_require__(/*! ./sign-up-form.component.html */ "./src/app/components/sign-up-form/sign-up-form.component.html"),
            styles: [__webpack_require__(/*! ./sign-up-form.component.css */ "./src/app/components/sign-up-form/sign-up-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignUpService"]])
    ], SignUpFormComponent);
    return SignUpFormComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n  <app-sign-up-form></app-sign-up-form>\n  </div>\n  \n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/components/sign-up/sign-up.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/services/sign-up.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sign-up.service.ts ***!
  \*********************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var SignUpService = /** @class */ (function () {
    function SignUpService(httpVar) {
        this.httpVar = httpVar;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    SignUpService.prototype.signUp = function (user) {
        var userInput = {};
        userInput = user;
        console.log(userInput);
        this.httpVar.post('/api/login/add', userInput).subscribe(function (r) {
            if (r.toString() == "true")
                alert("Successful Sign Up!");
        });
    };
    SignUpService.prototype.login = function (user) {
        var userInput = {};
        userInput = user;
        console.log(userInput);
        return this.httpVar.post('/api/login/authenticate', userInput);
    };
    SignUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SignUpService);
    return SignUpService;
}());



/***/ }),

/***/ "./src/app/services/user-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/*! exports provided: UserServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceService", function() { return UserServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOKEN = 'TOKEN';
var FNAME = 'FNAME';
var UserServiceService = /** @class */ (function () {
    function UserServiceService() {
    }
    UserServiceService.prototype.setToken = function (token) {
        localStorage.setItem(TOKEN, token);
    };
    UserServiceService.prototype.isLogged = function () {
        return localStorage.getItem(TOKEN) != null;
    };
    UserServiceService.prototype.setFname = function (fname) {
        localStorage.setItem(FNAME, fname);
    };
    UserServiceService.prototype.getFname = function () {
        return localStorage.getItem(FNAME);
    };
    UserServiceService.prototype.logout = function () {
        localStorage.clear();
    };
    UserServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserServiceService);
    return UserServiceService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sharm\myWorkspace\setMyHome_service\gui\gui-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map