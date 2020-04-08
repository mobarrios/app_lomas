(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["direccion-direccion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/direccion/direccion.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/direccion/direccion.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n      <ion-buttons>\n          <ion-back-button dafaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n      <ion-title>TELEFONOS UTILES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>     \n\n          <ion-card padding>\n            <ion-list>\n              <ion-list-header>\n                <ion-label>Teléfonos</ion-label>\n              </ion-list-header>\n              <!-- Multi-line sliding item with icon options on both sides -->\n              <ion-item-sliding id=\"item100\">\n                <ion-item >\n                  <ion-label>\n                    <ion-text color=\"danger\"><strong># 911</strong></ion-text>\n                    <h2>Emergencias</h2>\n                    <p>Deslizar para llamar!</p>\n                  </ion-label>\n                </ion-item>\n                  <ion-item-options side=\"end\">\n                  <ion-item-option color=\"danger\">\n                    <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n            \n              <ion-item-sliding id=\"item100\">\n                <ion-item >\n                  <ion-label>\n                    <ion-text color=\"danger\"><strong># 144</strong></ion-text>\n                    <h2>Violencia de Genero</h2>\n                    <p>Deslizar para llamar!</p>\n                  </ion-label>\n                </ion-item>\n                  <ion-item-options side=\"end\">\n                  <ion-item-option color=\"danger\">\n                    <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n            \n\n\n              <ion-item-sliding id=\"item100\">\n                <ion-item >\n                  <ion-label>\n                    <ion-text color=\"danger\"><strong># Comisaría</strong></ion-text>\n                    <h2>Comisaría de la Mujer y de la familia</h2>\n                    <p>Deslizar para llamar!</p>\n                  </ion-label>\n                </ion-item>\n                  <ion-item-options side=\"end\">\n                  <ion-item-option color=\"danger\">\n                    <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n              \n            </ion-list>\n\n\n\n\n            <ion-list>\n              <ion-list-header>\n                <ion-label>Links</ion-label>\n              </ion-list-header>\n              <!-- Multi-line sliding item with icon options on both sides -->\n              \n              \n              <ion-item-sliding id=\"item100\">\n                <ion-item >\n                  <ion-label>\n                    <ion-text color=\"secondary\"><strong>Alerta Lomas</strong></ion-text>\n                    <p>Deslizar para visitar!</p>\n                  </ion-label>\n                </ion-item>\n                  <ion-item-options side=\"end\">\n                  <ion-item-option color=\"secondary\">\n                    <ion-icon slot=\"icon-only\" name=\"link\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n            \n              <ion-item-sliding id=\"item100\">\n                <ion-item >\n                  <ion-label>\n                    <ion-text color=\"secondary\"><strong>Alarmas Comunitarias</strong></ion-text>\n                    <p>Deslizar para visitar!</p>\n                  </ion-label>\n                </ion-item>\n                  <ion-item-options side=\"end\">\n                  <ion-item-option color=\"secondary\">\n                    <ion-icon slot=\"icon-only\" name=\"link\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n\n              <ion-item-sliding id=\"item100\">\n                <ion-item >\n                  <ion-label>\n                    <ion-text color=\"secondary\"><strong>Centro de\n                      Atención al\n                      Vecino (CAV)</strong></ion-text>\n                    <p>Deslizar para visitar!</p>\n                  </ion-label>\n                </ion-item>\n                  <ion-item-options side=\"end\">\n                  <ion-item-option color=\"secondary\">\n                    <ion-icon slot=\"icon-only\" name=\"link\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n              </ion-item-sliding>\n              \n            \n\n\n\n\n             \n            </ion-list>\n          </ion-card>\n\n          \n</ion-content>"

/***/ }),

/***/ "./src/app/direccion/direccion.module.ts":
/*!***********************************************!*\
  !*** ./src/app/direccion/direccion.module.ts ***!
  \***********************************************/
/*! exports provided: DireccionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireccionPageModule", function() { return DireccionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _direccion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./direccion.page */ "./src/app/direccion/direccion.page.ts");







const routes = [
    {
        path: '',
        component: _direccion_page__WEBPACK_IMPORTED_MODULE_6__["DireccionPage"]
    }
];
let DireccionPageModule = class DireccionPageModule {
};
DireccionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_direccion_page__WEBPACK_IMPORTED_MODULE_6__["DireccionPage"]]
    })
], DireccionPageModule);



/***/ }),

/***/ "./src/app/direccion/direccion.page.scss":
/*!***********************************************!*\
  !*** ./src/app/direccion/direccion.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjY2lvbi9kaXJlY2Npb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/direccion/direccion.page.ts":
/*!*********************************************!*\
  !*** ./src/app/direccion/direccion.page.ts ***!
  \*********************************************/
/*! exports provided: DireccionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DireccionPage", function() { return DireccionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DireccionPage = class DireccionPage {
    constructor() { }
    ngOnInit() {
    }
};
DireccionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-direccion',
        template: __webpack_require__(/*! raw-loader!./direccion.page.html */ "./node_modules/raw-loader/index.js!./src/app/direccion/direccion.page.html"),
        styles: [__webpack_require__(/*! ./direccion.page.scss */ "./src/app/direccion/direccion.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DireccionPage);



/***/ })

}]);
//# sourceMappingURL=direccion-direccion-module-es2015.js.map