(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["direccion-direccion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/direccion/direccion.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/direccion/direccion.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons>\n          <ion-back-button dafaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <small>\n    <strong>\n      DIRECCIÓN DE POLITICAS DE GÉNERO MUNICIPALIDAD DE ESTEBAN ECHEVERRÍA.\n    </strong>\n\n    <br>\n    <br>\n    Servicio local especializado en género\n    <br>\n    Atención a Víctimas de Violencia de género:\n    <strong>\n      <br>\n    Lunes a viernes de 8:00 a 14hs\n    Sofía Terrero Santa Marina 464 –\n    Secretaria de Desarrollo Social.\n  </strong>\n    <br>\n    <br>\n    Se trabaja con un equipo multidisciplinario, conformado por trabajadoras sociales, psicólogas\n    y una abogada, teniendo como meta el fortalecimiento y acompañamiento de la autonomía\n    de mujeres de la comunidad en los diferentes aspectos que hacen a su integridad,\n    empoderamiento en sus posibilidades de cuidado y prevención en su salud física, psíquica,\n    emocional.\n    <br>\n    Desde el área se articula y se brinda un fácil acceso a los diferentes entes que trabajan la\n    problemática en el distrito:\n    <br>\n    Comisaria de la Mujer y La Familia de Esteban Echeverría, donde se realizan las denuncias de\n    violencia intrafamiliar, abusos sexuales y situaciones donde están involucrados niños, niñas y\n    adolescentes.\n    <br>\n    Polo Judicial, donde se encuentra la defensoría nº10, se las orienta a acercarse en caso de\n    necesitar un/a abogado/a defensor/a de aquellas personas que no tengan recursos para\n    solventar los honorarios de un abogado particular. Alimentos (cuidado personal), tenencia,\n    régimen de visitas (régimen de relación y comunicación), homologación de convenio, curatela\n    (determinación de capacidad), divorcio de común acuerdo, protección contra la violencia\n    familiar, medidas precautorias. Presentación de pedidos de restricción de acercamiento y\n    exclusión del hogar al juzgado de paz de Esteban Echeverría.\n    <br>\n    Juzgado de Paz, donde se realizan las medidas cautelares, exclusiones de hogar, perímetro,\n    restitución de pertenencias, etc.\n    <br>\n    En caso de adicciones se articula y solicitan turnos en el CPA, quienes trabajan en atención a\n    consumo problemático de sustancias. Tratamientos individuales y grupales. Grupo para\n    familiares. Grupos de orientación y recepción.\n    <br>\n    Se trabaja con las distintas áreas de la Secretaria de Desarrollo, Niñez, Juventud (ingresos al\n    programa envión), Servicio Comunitario (chapas, tirantes, membranas, zapatillas, subsidios),\n    Adultos Mayores, Discapacidad (pensiones, pases de transportes), Asistencia alimentaria, Plan\n    Mas Vida.\n    <br>\n    Se articula con el área de Salud, en la obtención de turnos: Psicológicos, ginecológicos,\n    pediátricos, obstetricia, neonatología.\n    <br>\n    <br>\n    <br>\n    <strong>Grupo Terapéutico</strong>\n    <br>\nEn desarrollo social y dependiente de la coordinación de políticas de género funcionan los días\nmiércoles y jueves de 14 a 16hs los Grupos Terapéuticos para mujeres víctimas de violencia de\ngénero.\nHogar para Mujeres, Niños y Niñas víctimas de violencia de género “María Teresa de Calcuta.”\nEl hogar tiene como visión constituir un servicio de Atención Integral de acogida temporal para\nmujeres y niños/as víctimas de violencia de género pertenecientes al Distrito de Esteban\nEcheverría, que actúe tanto protegiendo del riesgo inminente como apoyando la recuperación,\nel logro de autonomía y una nueva y diferente reinserción social de la mujer y/o niño/a en pos\nde un abordaje integral (psicológico, jurídico, convivencial, laboral, etc.).\nLa misión de dicho espacio es brindar acogida temporal para mujeres y niños/as de Esteban\nEcheverría, protegiéndolos/as del riesgo inminente y promoviendo su empoderamiento,\ncreando en forma particular las estrategias necesarias para acompañar la creación de un\nproyecto de reinserción social.\nLas admisiones al hogar serán evaluadas por el equipo técnico de la coordinación de políticas\nde género rigiéndose según los requisitos establecidos en el Protocolo del Hogar-\n\nActividades de Prevención y promoción\nCharlas en Escuelas sobre violencia de género y noviazgos violentos\nCharlas en escuelas sobre Trata de personas\nCharlas para personal docente sobre Bullying LGBT en los centros educativos.\nCharlas en Comedores\nCampeonatos de Futbol Femenino\n\n\n</small>\n</ion-content>\n"

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