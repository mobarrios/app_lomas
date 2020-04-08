(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["saber-saber-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/saber/saber.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/saber/saber.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons>\n            <ion-back-button dafaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>MIS DERECHOS</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n            <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/j0hnBF9OWOg\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n       \n\n            <ion-card padding>\n                <p>\n                Un Derecho es un conjunto de principios, leyes y reglas que regulan la vida\n                en sociedad y que las personas deben obedecer; el Estado tiene la\n                obligación de garantizarte ese Derecho sin que nadie te lo impida. Los\n                Derechos son tuyos.\n                 </p>\n                <p>\n                ¿Porqué existen los Derechos de las Mujeres?\n                </p>\n                <p>\n                En una legislación donde históricamente fue el hombre el sujeto de\n                Derecho privilegiado, el movimiento feminista puso el foco en las\n                desigualdades y la inequidad.\n                </p>\n                <p>\n                Por ello, los Derechos de las Mujeres se sustentan en el principio de\n                igualdad y equidad: igualdad de derechos y equidad en las oportunidades.\n                Por ejemplo: por la misma tarea, un hombre y una mujer deben recibir la\n                misma remuneración.\n                </p>\n                <p>\n                Entre otros, tenés Derecho a la integridad, al control del propio cuerpo, al\n                sufragio (votar), remuneración justa e igualitaria, poseer propiedades,\n                educación, a firmar contratos parentales y matrimoniales, a ejercer\n                libremente tu sexualidad, a elegir el deporte que más te guste, a la\n                privacidad en tus comunicaciones, etc.\n                 </p>\n                <p>\n                Los Derechos de las Mujeres son Derechos Humanos y son inalienables,\n                esto significa que nadie puede quitártelos, ni siquiera el Estado.\n                </p>\n            </ion-card>\n\n            \n</ion-content>"

/***/ }),

/***/ "./src/app/saber/saber.module.ts":
/*!***************************************!*\
  !*** ./src/app/saber/saber.module.ts ***!
  \***************************************/
/*! exports provided: SaberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaberPageModule", function() { return SaberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _saber_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./saber.page */ "./src/app/saber/saber.page.ts");







const routes = [
    {
        path: '',
        component: _saber_page__WEBPACK_IMPORTED_MODULE_6__["SaberPage"]
    }
];
let SaberPageModule = class SaberPageModule {
};
SaberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_saber_page__WEBPACK_IMPORTED_MODULE_6__["SaberPage"]]
    })
], SaberPageModule);



/***/ }),

/***/ "./src/app/saber/saber.page.scss":
/*!***************************************!*\
  !*** ./src/app/saber/saber.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhYmVyL3NhYmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/saber/saber.page.ts":
/*!*************************************!*\
  !*** ./src/app/saber/saber.page.ts ***!
  \*************************************/
/*! exports provided: SaberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaberPage", function() { return SaberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SaberPage = class SaberPage {
    constructor() { }
    ngOnInit() {
    }
};
SaberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-saber',
        template: __webpack_require__(/*! raw-loader!./saber.page.html */ "./node_modules/raw-loader/index.js!./src/app/saber/saber.page.html"),
        styles: [__webpack_require__(/*! ./saber.page.scss */ "./src/app/saber/saber.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SaberPage);



/***/ })

}]);
//# sourceMappingURL=saber-saber-module-es2015.js.map