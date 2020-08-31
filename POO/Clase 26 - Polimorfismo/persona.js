"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(name, documento) {
        this.name = name;
        this.documento = documento;
    }
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.prototype.getDocumento = function () {
        return this.documento;
    };
    Persona.prototype.getFullInfo = function () {
        return this.name + '-' + this.documento;
    };
    return Persona;
}());
exports.Persona = Persona;
