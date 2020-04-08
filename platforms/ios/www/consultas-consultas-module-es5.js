(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultas-consultas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/consultas/consultas.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/consultas/consultas.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons>\n            <ion-back-button dafaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Consultas</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item>\n            <ion-label>Tipo de Consulta</ion-label>\n            <ion-select [(ngModel)]=\"tipo\" placeholder=\"Seleccionar\">\n                <ion-select-option  *ngFor=\"let tipo of tipos\" value=\"{{tipo.id}}\">{{tipo.name}}</ion-select-option>\n            </ion-select>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Descripción</ion-label>\n            <ion-textarea [(ngModel)]=\"text\"></ion-textarea>\n        </ion-item>\n\n        <ion-button size=\"small\" shape=\"round\" expand=\"full\" (click)=\"enviar()\">\n            Enviar Consulta\n        </ion-button>\n    </ion-list>\n\n    <ion-row>\n        <ion-col text-center>\n            <h4>Mis Consultas</h4>\n        </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let consulta of consultas\" >\n        <ion-col size=\"3\">\n            <small>{{consulta.created_at}}</small>\n        </ion-col>\n        <ion-col size=\"7\">\n                <small>\n                    <ion-label color=\"secondary\">{{consulta.consultas_tipo[0].name}} : </ion-label>\n                    {{consulta.descripcion}}\n                </small>\n        </ion-col>\n   \n        <ion-col size=\"2\">\n                 <ion-label  color=\"primary\"><small>{{consulta.estado}}</small></ion-label>\n        </ion-col>\n    </ion-row>\n    \n</ion-content>\n\n<!-- <ion-footer>\n    <ion-toolbar>\n        <ion-button expand=\"full\" (click)=\"enviar()\">\n            Enviar Consulta\n        </ion-button>\n\n    </ion-toolbar>\n</ion-footer> -->"

/***/ }),

/***/ "./src/app/consultas/consultas.module.ts":
/*!***********************************************!*\
  !*** ./src/app/consultas/consultas.module.ts ***!
  \***********************************************/
/*! exports provided: ConsultasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultasPageModule", function() { return ConsultasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _consultas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultas.page */ "./src/app/consultas/consultas.page.ts");







var routes = [
    {
        path: '',
        component: _consultas_page__WEBPACK_IMPORTED_MODULE_6__["ConsultasPage"]
    }
];
var ConsultasPageModule = /** @class */ (function () {
    function ConsultasPageModule() {
    }
    ConsultasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_consultas_page__WEBPACK_IMPORTED_MODULE_6__["ConsultasPage"]]
        })
    ], ConsultasPageModule);
    return ConsultasPageModule;
}());



/***/ }),

/***/ "./src/app/consultas/consultas.page.scss":
/*!***********************************************!*\
  !*** ./src/app/consultas/consultas.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bHRhcy9jb25zdWx0YXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/consultas/consultas.page.ts":
/*!*********************************************!*\
  !*** ./src/app/consultas/consultas.page.ts ***!
  \*********************************************/
/*! exports provided: ConsultasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultasPage", function() { return ConsultasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connect.service */ "./src/app/connect.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var ConsultasPage = /** @class */ (function () {
    function ConsultasPage(router, connectS, storage) {
        var _this = this;
        this.router = router;
        this.connectS = connectS;
        this.storage = storage;
        this.tipos = [];
        this.consultas = [];
        this.connectS.get('getConsultasTipo', {}).subscribe(function (data) {
            _this.tipos = data['results'];
        });
    }
    ConsultasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.connectS.get('getConsultas', { 'user_id': val }).subscribe(function (data) {
                _this.consultas = data['results'];
            });
        });
    };
    ConsultasPage.prototype.enviar = function () {
        var _this = this;
        this.storage.get('user_id').then(function (val) {
            _this.connectS.get('postConsulta', { 'user_id': val, 'tipo': _this.tipo, 'text': _this.text }).subscribe(function (d) {
                if (d == 'true') {
                    _this.router.navigate(['/home']);
                }
            });
        });
        // this.connectS.get('getEscuelas').subscribe(d=>{
        //   console.log(d);
        // });
        // this.apiC.get('users',null).subscribe(d=>{
        //   console.log(d)
        // });
        // data.subscribe(d => 
        //     {
        //       return d;
        //     }, error => 
        //     {
        //       console.log( JSON.stringify(error));
        //   });
        //this.router.navigate(['/home']);
    };
    ConsultasPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    ConsultasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultas',
            template: __webpack_require__(/*! raw-loader!./consultas.page.html */ "./node_modules/raw-loader/index.js!./src/app/consultas/consultas.page.html"),
            styles: [__webpack_require__(/*! ./consultas.page.scss */ "./src/app/consultas/consultas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectService"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ConsultasPage);
    return ConsultasPage;
}());



/***/ })

}]);
//# sourceMappingURL=consultas-consultas-module-es5.js.map