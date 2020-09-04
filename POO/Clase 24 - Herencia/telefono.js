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
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }
    Telefono.prototype.prenderApagar = function () {
        this.estaPrendido = !this.estaPrendido;
    };
    Telefono.prototype.cargarBateria = function (carga) {
        if (this.bateriaActual + carga > 100)
            this.bateriaActual = 100;
        else
            this.bateriaActual += carga;
    };
    Telefono.prototype.mandarMensaje = function (mensaje, num) {
        return "Se envio:" + mensaje + "a " + num;
    };
    Telefono.prototype.hacerLlamada = function (num) {
        return "Llamando a......." + num;
    };
    return Telefono;
}());
var TelefonoCamara = /** @class */ (function (_super) {
    __extends(TelefonoCamara, _super);
    function TelefonoCamara() {
        return _super.call(this) || this;
    }
    TelefonoCamara.prototype.sacarFoto = function () {
        console.log('Foto Tomada!');
    };
    return TelefonoCamara;
}(Telefono));
var TelefonoRadio = /** @class */ (function (_super) {
    __extends(TelefonoRadio, _super);
    function TelefonoRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = Math.random();
        return _this;
    }
    TelefonoRadio.prototype.cambiarFrecuencia = function () {
        this.frecuenciaActual + 10;
    };
    return TelefonoRadio;
}(Telefono));
