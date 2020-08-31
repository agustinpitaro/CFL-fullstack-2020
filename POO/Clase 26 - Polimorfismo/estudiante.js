"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Estudiante = void 0;
var persona_1 = require("C:/Users/Agustin Pitaro/Documents/CFL fullstack-2020/CFL-fullstack-2020/POO/Clase 26 - Polimorfismo/persona");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(name, documento, LU) {
        var _this = _super.call(this, name, documento) || this;
        _this.LU = LU;
        return _this;
    }
    Estudiante.prototype.getFullInfo = function () {
        return _super.prototype.getFullInfo + '-' + this.LU;
    };
    Estudiante.prototype.getLU = function () {
        return this.LU;
    };
    Estudiante.prototype.escribirExamen = function (examen) {
        return this.revisarMachete(examen);
    };
    Estudiante.prototype.revisarMachete = function (examen) {
        return 'respuesta';
    };
    return Estudiante;
}(persona_1.Persona));
exports.Estudiante = Estudiante;
