(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons>\n            <ion-back-button dafaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Registrar</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n        <ion-grid>\n            <ion-row color=\"primary\" justify-content-center>\n                <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n                    <div text-center>\n                        <h3>Crear cuenta!</h3>\n                    </div>\n                    <div padding>\n                        <ion-item>\n                            <ion-input name=\"name\" type=\"text\" placeholder=\"Nombre Usuario\" [(ngModel)]=\"name\" required></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input name=\"last_name\" type=\"text\" placeholder=\"Apellido Usuario\" [(ngModel)]=\"last_name\" required></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input name=\"email\" type=\"email\" placeholder=\"su@email.com\" [(ngModel)]=\"email\" required></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" [(ngModel)]=\"pass\" required></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input name=\"confirm\" type=\"password\" placeholder=\"Confirmar Contraseña\" [(ngModel)]=\"cpass\" required></ion-input>\n                        </ion-item>\n                        <ion-label color=\"secondary\" >{{error}}</ion-label>\n\n                    </div>\n                    <div padding>\n                        <ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\" expand=\"block\" (click)=\"registrar()\">Registrar</ion-button>\n                    </div>\n\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../connect.service */ "./src/app/connect.service.ts");



var RegisterPage = /** @class */ (function () {
    function RegisterPage(connectS) {
        this.connectS = connectS;
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.registrar = function () {
        var _this = this;
        var param = {
            'name': this.name,
            'last_name': this.name,
            'email': this.email,
            'pass': this.pass
        };
        if (this.pass != this.cpass) {
            this.error = 'No coinciden las contraseñas.';
        }
        else {
            this.connectS.get('register', param).subscribe(function (d) {
                console.log(d['results']);
                if (d['results'] == true) {
                    _this.error = "Su solicitud fue enviada con éxito, verifique su email para validar el usuario.";
                }
                else {
                    _this.error = "Error al enviar la solicitud.";
                }
            });
        }
    };
    RegisterPage.ctorParameters = function () { return [
        { type: _connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"] }
    ]; };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.page.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module-es5.js.map