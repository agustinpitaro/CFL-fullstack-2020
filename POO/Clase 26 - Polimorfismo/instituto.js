"use strict";
exports.__esModule = true;
exports.Instituto = void 0;
var Instituto = /** @class */ (function () {
    function Instituto() {
    }
    Instituto.prototype.addEstudiante = function (estudiante) {
        this.estudiantes.push(estudiante);
    };
    Instituto.prototype.addProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Instituto.prototype.getDireccion = function () {
        return this.direccion;
    };
    Instituto.prototype.getNombre = function () {
        return this.nombre;
    };
    Instituto.prototype.getListadoProfesores = function () {
        return this.profesores;
    };
    Instituto.prototype.getListadoEstudiantes = function () {
        return this.estudiantes;
    };
    Instituto.prototype.fireProfesor = function (ID) {
        for (var i = 0; i < this.profesores.length; i++) {
            if (this.profesores[i].getID() == ID)
                this.profesores.splice(i, 1);
        }
    };
    Instituto.prototype.dismissEstudiante = function (LU) {
        for (var i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].getLU() == LU)
                this.estudiantes.splice(i, 1);
        }
    };
    return Instituto;
}());
exports.Instituto = Instituto;
