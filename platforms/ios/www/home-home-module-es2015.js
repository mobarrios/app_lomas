(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n          NOS.OTRAS\n      </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"danger\" (click)=\"call()\">\n          <ion-icon name=\"call\"> </ion-icon>\n          <strong>#911</strong>\n      </ion-fab-button>\n  </ion-fab>\n  <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"12\">\n          <img width=\"150px\" src=\"/assets/imgs/logo Nosotras_OUT.png\">\n      </ion-col>\n  </ion-row>\n  <ion-card class=\"welcome-card\">\n      <ion-card-header class=\"ion-text-center\">\n          <ion-card-subtitle>Bienvenida a NOS.OTRAS</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n          <p>Aplicación para las mujeres del municipio de Esteban Echeverría.</p>\n      </ion-card-content>\n  </ion-card>\n  <ion-card>\n      <ion-list lines=\"none\">\n          <ion-list-header>\n              <ion-label>Información</ion-label>\n          </ion-list-header>\n          <ion-item href=\"https://www.youtube.com/watch?v=lSJvMG-oBPA\">\n              <ion-icon slot=\"start\" color=\"success\" name=\"information-circle-outline\"></ion-icon>\n              <ion-label color=\"secondary\">¿Qué es el género?</ion-label>\n          </ion-item>\n          <ion-item href=\"https://www.youtube.com/watch?v=gVc0o89pzHs\">\n              <ion-icon slot=\"start\" color=\"success\" name=\"information-circle-outline\"></ion-icon>\n              <ion-label color=\"secondary\">¿Qué es la violencia de género?</ion-label>\n          </ion-item>\n          <ion-item href=\"https://www.youtube.com/watch?v=IOWP9PIxU6U\">\n              <ion-icon slot=\"start\" color=\"success\" name=\"information-circle-outline\"></ion-icon>\n              <ion-label color=\"secondary\">¿Qué hacer frente a una situación de violencia de género?</ion-label>\n          </ion-item>\n          <ion-item (click)=\"saber()\">\n              <ion-icon slot=\"start\" color=\"success\" name=\"information-circle-outline\"></ion-icon>\n              <ion-label color=\"secondary\"> Ver más…</ion-label>\n          </ion-item>\n      </ion-list>\n  </ion-card>\n\n\n\n  <ion-card>\n      <ion-card-header>\n          <ion-card-subtitle>Caja de Herramientas\n          </ion-card-subtitle>\n          <ion-card-title>Capítulo 9: Violencias</ion-card-title>\n      </ion-card-header>\n      <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/nDntugjhoxM\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n      <ion-card-content>\n\n      </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n      <ion-item>\n          <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n          <ion-label>Mapa de NOS.OTRAS</ion-label>\n          <ion-button fill=\"outline\" slot=\"end\" (click)=\"goToMapa()\" routerLinkActive=\"router-link-active\">Ver</ion-button>\n      </ion-item>\n\n      <ion-card-content>\n          En el mapa se encuentran los puntos mas importantes de servicios para que puedas acceder con mayor facilidad.\n      </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n      <ion-item>\n          <ion-icon name=\"business\" slot=\"start\"></ion-icon>\n          <ion-label>Mi Municipio</ion-label>\n          <ion-button fill=\"outline\" slot=\"end\" (click)=\"municipio()\" routerLinkActive=\"router-link-active\">ir</ion-button>\n      </ion-item>\n\n      <ion-card-content>\n          Link a la pagina web del municipio de Esteban Echeverría.\n      </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n        <ion-item>\n            <small>DIRECCIÓN DE POLITICAS DE GÉNERO MUNICIPALIDAD DE ESTEBAN ECHEVERRÍA.</small> \n            <ion-button fill=\"outline\" slot=\"end\" (click)=\"direccion()\" routerLinkActive=\"router-link-active\">ir</ion-button>\n\n        </ion-item>\n  \n        <ion-card-content>\n            <small>\n                Servicio local especializado en género<br>\n                Atención a Víctimas de Violencia de género:\n                <strong>Lunes a viernes de 8:00 a 14hs </strong> <br>\n                Sofía Terrero Santa Marina 464 – Secretaria de Desarrollo Social.\n            </small>\n        </ion-card-content>\n\n        \n    </ion-card>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmFycmlvcy9BcHBzL25zdC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIiwiLndlbGNvbWUtY2FyZCBpbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");




let HomePage = class HomePage {
    constructor(router, callNumber) {
        this.router = router;
        this.callNumber = callNumber;
    }
    goToMapa() {
        this.router.navigate(['/mapa']);
    }
    saber() {
        this.router.navigate(['/saber']);
    }
    municipio() {
        window.open('http://www.estebanecheverria.gov.ar', '_blank');
    }
    call() {
        this.callNumber.callNumber('#911', true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    direccion() {
        this.router.navigate(['/direccion']);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map