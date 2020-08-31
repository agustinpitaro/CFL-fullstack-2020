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
exports.Profesor = void 0;
var persona_1 = require("C:/Users/Agustin Pitaro/Documents/CFL fullstack-2020/CFL-fullstack-2020/POO/Clase 26 - Polimorfismo/persona");
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(name, documento, ID) {
        var _this = _super.call(this, name, documento) || this;
        _this.ID = ID;
        return _this;
    }
    Profesor.prototype.getFullInfo = function () {
        return _super.prototype.getFullInfo + '-' + this.ID;
    };
    Profesor.prototype.getID = function () {
        return this.ID;
    };
    Profesor.prototype.evaluarExamen = function (examen) {
        return this.revisarRespuestas(examen);
    };
    Profesor.prototype.revisarRespuestas = function (examen) {
        return Math.floor(Math.random() * 11);
    };
    return Profesor;
}(persona_1.Persona));
exports.Profesor = Profesor;
