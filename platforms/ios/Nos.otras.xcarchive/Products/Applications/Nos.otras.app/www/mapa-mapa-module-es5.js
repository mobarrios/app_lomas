(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapa-mapa-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/mapa/mapa.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mapa/mapa.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons>\n            <ion-back-button dafaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n    </ion-toolbar>\n</ion-header>\n<!-- <ion-content>\n    <div id='map'></div>\n<div #mapElement class=\"map\"></div> \n</ion-content> -->\n\n<ion-content padding>\n    <!-- <ion-item>\n        <ion-label>Tipo</ion-label>\n        <ion-select placeholder=\"Seleccionar Tipo\">\n            <ion-select-option  *ngFor=\"let tipo of tipos\" value=\"{{tipo.id}}\">Peperoni</ion-select-option>\n      \n        </ion-select>\n    </ion-item> -->\n    <ion-button size=\"small\" *ngFor=\"let tipo of tipos\" (click)=\"categoria(tipo.id)\">\n            {{tipo.name}}\n    </ion-button>\n    <!-- <ion-button size=\"small\" (click)=\"categoria('seguridad')\">\n        Seguridad\n    </ion-button>\n    <ion-button size=\"small\" (click)=\"categoria('justicia')\">\n        Justicia\n    </ion-button>\n    <ion-button size=\"small\" (click)=\"categoria('salud')\">\n        Salud\n    </ion-button>\n    <ion-button size=\"small\" (click)=\"categoria('genero')\">\n        Políticas de Género\n    </ion-button> -->\n\n    <div #mapElement class=\"map\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/mapa/mapa.module.ts":
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.module.ts ***!
  \*************************************/
/*! exports provided: MapaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPageModule", function() { return MapaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapa.page */ "./src/app/mapa/mapa.page.ts");







var routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]
    }
];
var MapaPageModule = /** @class */ (function () {
    function MapaPageModule() {
    }
    MapaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
        })
    ], MapaPageModule);
    return MapaPageModule;
}());



/***/ }),

/***/ "./src/app/mapa/mapa.page.scss":
/*!*************************************!*\
  !*** ./src/app/mapa/mapa.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYmFycmlvcy9BcHBzL25zdC9zcmMvYXBwL21hcGEvbWFwYS5wYWdlLnNjc3MiLCJzcmMvYXBwL21hcGEvbWFwYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tYXBhL21hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSIsIi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/mapa/mapa.page.ts":
/*!***********************************!*\
  !*** ./src/app/mapa/mapa.page.ts ***!
  \***********************************/
/*! exports provided: MapaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPage", function() { return MapaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _connect_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connect.service */ "./src/app/connect.service.ts");


//import * as mapboxgl from 'mapbox-gl';


var MapaPage = /** @class */ (function () {
    function MapaPage(platform, connectS) {
        // mapboxgl.accessToken = 'pk.eyJ1IjoibW9iYXJyaW9zIiwiYSI6ImNqdXg3YTlsYzAwMm00MG8wOGdwZjY2NnEifQ.GLzsC9lze867YtvXJ7lgWQ';
        var _this = this;
        this.platform = platform;
        this.connectS = connectS;
        //map: mapboxgl.Map;
        // marker: mapboxgl.Marker;
        this.lat = -34.8215061;
        this.lon = -58.4747831;
        this.data = [];
        this.tipos = [];
        this.connectS.get('getSitesTipo', {}).subscribe(function (data) {
            _this.tipos = data['results'];
            //console.log(data);
        });
    }
    MapaPage.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.connectS.get('getSites', {}).subscribe(function (data) {
            _this.data = data['results'];
            _this.showMap();
        });
        // const mk1 = new google.maps.Marker({
        //   position: {lat : -34.8120142, lng: -58.4722407},
        //   label: 'Com. de la mujer',
        //   map: this.map
        // });
        // const mk2 = new google.maps.Marker({
        //   position: {lat : -34.8132134, lng: -58.4657345},
        //   label: 'Juzgado de Paz',
        //   map: this.map
        // });
        // const mk3 = new google.maps.Marker({
        //   position: {lat : -34.8244848, lng: -58.4792054},
        //   label: 'Defensoría Civil N° 10',
        //   map: this.map
        // });
        // const mk4 = new google.maps.Marker({
        //   position: {lat : -34.8389994, lng: -58.475143},
        //   label: 'CPA',
        //   map: this.map
        // });
        // const mk5 = new google.maps.Marker({
        //   position: {lat :  -34.8139667, lng: -58.4615266},
        //   label: 'Policlínico Municipal',
        //   map: this.map
        // });
        // const mk6 = new google.maps.Marker({
        //   position: {lat : -34.8190076, lng: -58.4687796},
        //   label: 'Sec. de Pol. Sociales',
        //   map: this.map
        // });
        // const mk7 = new google.maps.Marker({
        //   position: {lat : -34.8357033, lng: -58.4635009},
        //   label: 'Servicio Local de Mte. Gde',
        //   map: this.map
        // });
        // const mk8 = new google.maps.Marker({
        //   position: {lat : -34.8528328, lng: -58.4802092},
        //   label: 'Serv. Local de El Jagüel',
        //   map: this.map
        // });
        // const mk9 = new google.maps.Marker({
        //   position: {lat : -34.7798103, lng: -58.514771},
        //   label: 'Serv. local de 9 de Abril',
        //   map: this.map
        // });
        // const mk10 = new google.maps.Marker({
        //   position: {lat : -34.8120142, lng: -58.4722407},
        //   label: 'Serv. Local de Luis Guillón',
        //   map: this.map
        // });
        // const mk11 = new google.maps.Marker({
        //   position: {lat : -34.8187979, lng: -58.46769},
        //   label: 'Dir. de Pol. de Género',
        //   map: this.map
        // });
    };
    MapaPage.prototype.categoria = function (cat) {
        this.showMap();
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].sites_tipo_id == cat) {
                new google.maps.Marker({
                    position: { lat: Number(this.data[i].lat), lng: Number(this.data[i].long) },
                    label: this.data[i].title,
                    map: this.map
                });
            }
        }
    };
    MapaPage.prototype.clear = function () {
        //console.log(this.markers.length);
        //Loop through all the markers and remove
        // for (var i = 0; i < this.markers.length; i++) {
        //     this.markers[i].setMap(null);
        // }
        // this.markers = [];
    };
    ;
    // if (cat == 'seguridad') {
    //  this.showMap();
    // const mk1 = new google.maps.Marker({
    // position: {lat : -34.8120142, lng: -58.4722407},
    // label: 'Com. de la mujer',
    // map: this.map
    // });
    // } else if ( cat == 'justicia') {
    //   this.showMap();
    //   const mk2 = new google.maps.Marker({
    //     position: {lat : -34.8132134, lng: -58.4657345},
    //     label: 'Juzgado de Paz',
    //     map: this.map
    //   });
    //   const mk3 = new google.maps.Marker({
    //     position: {lat : -34.8244848, lng: -58.4792054},
    //     label: 'Defensoría Civil N° 10',
    //     map: this.map
    //   });
    // } else if (cat == 'salud') {
    //   this.showMap();
    //   const mk4 = new google.maps.Marker({
    //   position: {lat : -34.8389994, lng: -58.475143},
    //   label: 'CPA',
    //   map: this.map
    //   });
    //   const mk5 = new google.maps.Marker({
    //   position: {lat :  -34.8139667, lng: -58.4615266},
    //   label: 'Policlínico Municipal',
    //   map: this.map
    //   });
    //   const mk6 = new google.maps.Marker({
    //   position: {lat : -34.8190076, lng: -58.4687796},
    //   label: 'Sec. de Pol. Sociales',
    //   map: this.map
    //   });
    //   const mk7 = new google.maps.Marker({
    //   position: {lat : -34.8357033, lng: -58.4635009},
    //   label: 'Servicio Local de Mte. Gde',
    //   map: this.map
    //   });
    //   const mk8 = new google.maps.Marker({
    //   position: {lat : -34.8528328, lng: -58.4802092},
    //   label: 'Serv. Local de El Jagüel',
    //   map: this.map
    //   });
    //   const mk9 = new google.maps.Marker({
    //   position: {lat : -34.7798103, lng: -58.514771},
    //   label: 'Serv. local de 9 de Abril',
    //   map: this.map
    //   });
    //   const mk10 = new google.maps.Marker({
    //   position: {lat : -34.8120142, lng: -58.4722407},
    //   label: 'Serv. Local de Luis Guillón',
    //   map: this.map
    //   });
    // } else if (cat == 'genero') {
    //   this.showMap();
    //   const mk11 = new google.maps.Marker({
    //   position: {lat : -34.8187979, lng: -58.46769},
    //   label: 'Dir. de Pol. de Género',
    //   map: this.map
    //    });
    // }
    //}
    MapaPage.prototype.showMap = function () {
        var pos = new google.maps.LatLng(this.lat, this.lon);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            center: { lat: this.lat, lng: this.lon },
            zoom: 13
        });
    };
    // markers() {
    //   const markers = [{
    //     position: {lat : -34.8120142, lng: -58.4722407},
    //     label: 'Com. de la mujer',
    //     map: this.map
    //   }];
    //   return markers;
    // }
    MapaPage.prototype.ngOnInit = function () {
        //   const m = new mapboxgl.Map({
        //     container : 'map',
        //     style: 'mapbox://styles/mapbox/light-v10',
        // center: [this.lat, this.lon],
        // zoom: 3
        //   });
        // const geojson = {
        //   type: 'FeatureCollection',
        //   features: [{
        //     type: 'Feature',
        //     geometry: {
        //       type: 'Point',
        //       coordinates: [this.lon, this.lat]
        //     },
        //     properties: {
        //       title: 'Mapbox',
        //       description: 'Washington, D.C.'
        //     }
        //   },
        //   {
        //     type: 'Feature',
        //     geometry: {
        //       type: 'Point',
        //       coordinates: [-122.414, 37.776]
        //     },
        //     properties: {
        //       title: 'Mapbox',
        //       description: 'San Francisco, California'
        //     }
        //   }]
        // };
        // m.on('load', () => {
        //   m.addLayer(
        //   {
        //     id: 'points',
        //     source: {
        //       type: 'geojson',
        //       data: {
        //         type: "FeatureCollection",
        //         features: [
        //           {
        //             "type": "Feature",
        //             "properties": {
        //               "marker-color": "#7e7e7e",
        //               "marker-size": "medium",
        //               "marker-title": "dasdas"
        //             },
        //             "geometry": {
        //               "type": "Point",
        //               "coordinates": [
        //                 -58.36304426193237,
        //                 -34.60766084789814
        //               ]
        //             }
        //           }
        //         ]
        //       }
        //   }      });
        // });
    };
    MapaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MapaPage.prototype, "mapElement", void 0);
    MapaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mapa',
            template: __webpack_require__(/*! raw-loader!./mapa.page.html */ "./node_modules/raw-loader/index.js!./src/app/mapa/mapa.page.html"),
            styles: [__webpack_require__(/*! ./mapa.page.scss */ "./src/app/mapa/mapa.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _connect_service__WEBPACK_IMPORTED_MODULE_3__["ConnectService"]])
    ], MapaPage);
    return MapaPage;
}());



/***/ })

}]);
//# sourceMappingURL=mapa-mapa-module-es5.js.map