(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consultas-consultas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/consultas/consultas.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/consultas/consultas.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"tertiary\">\n        <ion-buttons>\n            <ion-back-button dafaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>MUJERES LOMAS</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n       \n    <iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/oG2WT4a4L1k\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n<ion-card padding>\n\n\n\n    <p>\n        <strong><ion-text color=\"tertiary\">Mujeres Lomas</ion-text></strong> somos emprendedoras, estudiantes, trabajadoras, novias, migrantes,  profesionales, jubiladas, madres, militantes, maestras, abuelas, hijas, científicas, diversas. \n    </p>\n    <p>\n        <strong><ion-text color=\"tertiary\">Mujeres Lomas</ion-text></strong>  somos quienes día a día hacemos posible lo que nos dijeron que era imposible. \n    </p>\n    <p>\n    En  <strong><ion-text color=\"tertiary\">Mujeres Lomas</ion-text></strong>  sabemos que vos sos la protagonista.\n    </p>\n    <p>\n    En esta aplicación vas a encontrar información que te facilita el acceso a los recursos que el Municipio te ofrece para ejercer tus Derechos. \n    </p>\n    <p>\n    Por eso es importante que puedas acceder a la información que necesitas de manera rápida y sencilla sobre cuestiones como: \n    </p>\n    <p>\n        <strong><ion-text color=\"tertiary\">Violencia de Género</ion-text></strong>, porque sabemos y podemos ayudarte,\n        <strong><ion-text color=\"tertiary\">Salud</ion-text></strong>, para que puedas llegar al centro de atención más cercano a donde vivís, \n        <strong><ion-text color=\"tertiary\">Acceso a la Justicia y Seguridad</ion-text></strong>, para que sepas dónde acercarte para radicar denuncias o pedir asistencia,\n        <strong> <ion-text color=\"tertiary\">Educación y Formación laboral </ion-text></strong>, porque las Mujeres Lomas somos prósperas y emprendedoras;\n        <strong><ion-text color=\"tertiary\">Actividades culturales y deportivas </ion-text></strong>, para que nuestras voces se escuchen y la sororidad sea nuestro idioma;\n        <strong> <ion-text color=\"tertiary\">Desarrollo Social y Comunitario </ion-text></strong>, porque creemos en vos, en las instituciones de la comunidad y en lo que somos capaces de lograr.\n    </p>\n    <p>\n    Gracias por sumarte a Mujeres Lomas donde vos sos la protagonista.\n    </p>\n    \n\n\n    \n<!-- <p>\nMujeres Lomas son estudiantes, trabajadoras, novias, madres, abuelas, hijas.\nMujeres Lomas somos todas quienes día a día hacemos posible lo que nos\ndijeron que era imposible. En Mujeres Lomas sabemos que sos la\nprotagonista.\n</p>\n<p>\nPor eso desarrollamos una aplicación gratuita con información para facilitarte el\nacceso a los recursos que el Municipio te ofrece para ejercer tus Derechos.\n</p>\n<p>\nTe pensamos en forma integral y es importante que puedas acceder a la\ninformación que necesitas de manera rápida y sencilla sobre cuestiones como\n</p>\n<p>\n<strong><ion-text color=\"tertiary\">Violencia de Género</ion-text></strong>, porque sabemos y podemos ayudarte,</p>\n<p>\n<strong><ion-text color=\"tertiary\">Salud</ion-text></strong>, para que puedas llegar al centro de atención más cercano a donde vivís,\n</p>\n<p>\n<strong><ion-text color=\"tertiary\">Acceso a la Justicia y Seguridad</ion-text></strong>, para que sepas dónde acercarte para\nradicar denuncias o pedir asistencia,\n</p>\n<p>\n<strong> <ion-text color=\"tertiary\">Educación y Formación laboral </ion-text></strong>, porque las Mujeres Lomas somos prósperas\ny emprendedoras;<br>\n</p>\n<p>\n<strong><ion-text color=\"tertiary\">Actividades culturales y deportivas </ion-text></strong>, para que nuestras voces se escuchen y\nla sororidad sea nuestro idioma;\n</p>\n<p>\n<strong> <ion-text color=\"tertiary\">Desarrollo Social y Comunitario </ion-text></strong>, porque creemos en vos, en la instituciones\nde la comunidad y en lo que somos capaces de lograr.\n</p>\n<p>\nSumate a Mujeres Lomas, se la protagonista, empezá a usar la app.\n</p> -->\n\n</ion-card>\n\n</ion-content>\n\n<!-- <ion-footer>\n    <ion-toolbar>\n        <ion-button expand=\"full\" (click)=\"enviar()\">\n            Enviar Consulta\n        </ion-button>\n\n    </ion-toolbar>\n</ion-footer> -->"

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
        // this.connectS.get('getConsultasTipo',{}).subscribe(data=>{
        //   this.tipos = data['results'];
        // });
        this.router = router;
        this.connectS = connectS;
        this.storage = storage;
        this.tipos = [];
        this.consultas = [];
    }
    ConsultasPage.prototype.ngOnInit = function () {
        // this.storage.get('user_id').then((val) => {
        //   this.connectS.get('getConsultas',{'user_id': val}).subscribe(data=>{
        //     this.consultas = data['results'];
        //   });
        // });
    };
    ConsultasPage.prototype.enviar = function () {
        // this.storage.get('user_id').then((val) => {
        //   this.connectS.get('postConsulta',{ 'user_id': val, 'tipo':this.tipo, 'text':this.text }).subscribe( d =>{
        //     if( d == 'true')
        //     {
        //         this.router.navigate(['/home']);
        //     }
        //   });
        // });
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