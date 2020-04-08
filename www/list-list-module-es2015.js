(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/list/list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n      <ion-buttons>\n          <ion-back-button dafaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>VIOLENCIA DE GENERO</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/s6E0jx43Qy0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n          <ion-card >\n            <ion-card-header>\n              Autocuestionario\n            </ion-card-header>\n            <ion-card-content>\n\n              <ion-list >\n\n                <ion-item >\n                  <ion-label class=\"ion-text-wrap\">¿Tu pareja te acusa constantemente de serle infiel o se opone a tus\n                    relaciones con tu familia o amistades?</ion-label>\n                  <ion-toggle [(ngModel)]=\"a\"></ion-toggle>\n                </ion-item>\n\n                <ion-item >\n                  <ion-label class=\"ion-text-wrap\">¿Necesitas pedirle permiso para salir de casa o te prohíbe trabajar o asistir a\n                    alguna actividad?</ion-label>\n                  <ion-toggle [(ngModel)]=\"b\"></ion-toggle>\n                </ion-item>\n\n                <ion-item >\n                  <ion-label class=\"ion-text-wrap\">¿Te insulta, critica o habla de forma denigrante?</ion-label>\n                  <ion-toggle [(ngModel)]=\"c\"></ion-toggle>\n                </ion-item>\n\n                <ion-item >\n                  <ion-label class=\"ion-text-wrap\">¿Sentís que hagas lo que hagas siempre es todo culpa tuya?</ion-label>\n                  <ion-toggle [(ngModel)]=\"d\"></ion-toggle>\n                </ion-item>\n\n                <ion-item >\n                <ion-label class=\"ion-text-wrap\">¿Controla todas tus finanzas y te obliga a darle detalle de todo lo que gastas?\n                  </ion-label>\n                  <ion-toggle [(ngModel)]=\"e\"></ion-toggle>\n                </ion-item>\n                \n                <ion-item >\n                <ion-label class=\"ion-text-wrap\">¿Te humilla delante de otras personas?\n                </ion-label>\n                <ion-toggle [(ngModel)]=\"f\"></ion-toggle>\n                </ion-item>\n\n                <ion-item >\n                <ion-label class=\"ion-text-wrap\">¿Se pone agresivo después de beber alcohol o consumir drogas?\n                </ion-label>\n                <ion-toggle [(ngModel)]=\"g\"></ion-toggle>\n                </ion-item>\n           \n                <ion-item >\n                <ion-label class=\"ion-text-wrap\">¿Amenaza con pegarte?\n                </ion-label>\n                <ion-toggle [(ngModel)]=\"h\"></ion-toggle>\n                </ion-item>\n\n                <ion-item>\n                <ion-label class=\"ion-text-wrap\"> ¿Revisa tu celular sin tu consentimiento?\n                </ion-label>\n                <ion-toggle [(ngModel)]=\"i\"></ion-toggle>\n                </ion-item>\n       \n                <ion-item>\n                <ion-label class=\"ion-text-wrap\"> ¿Te empujó, abofeteó, golpeó o te obligó a mantener relaciones sexuales?\n                </ion-label>\n                <ion-toggle [(ngModel)]=\"j\"></ion-toggle>\n                </ion-item>\n                \n                </ion-list>\n          \n           \n\n            </ion-card-content>\n\n            <ion-card-content>\n              <p>\n                <ion-icon slot=\"icon-only\" name=\"warning\" color=\"danger\"></ion-icon>\n                Si respondiste SI a cualquiera de estas 10 preguntas, es probable que estés\n  padeciendo violencia de género.\n              </p>\n              <p>\n                Acercate a nuestras sedes o llamanos, tenemos equipos profesionales\n  integrales para brindarte información y acompañarte.\n              </p>\n            </ion-card-content>\n            \n          </ion-card>\n\n          \n</ion-content>"

/***/ }),

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                }
            ])
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListPage = class ListPage {
    constructor() {
        this.icons = [
            'flask',
            'wifi',
            'beer',
            'football',
            'basketball',
            'paper-plane',
            'american-football',
            'boat',
            'bluetooth',
            'build'
        ];
        this.items = [];
        for (let i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ngOnInit() {
    }
};
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=list-list-module-es2015.js.map