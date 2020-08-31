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
var Motor = /** @class */ (function () {
    function Motor(numero, clase, estado) {
        this.numero = numero;
        if (clase = null)
            this.clase = 'Motor de Combustion';
        else
            this.clase = clase;
        if (estado = null)
            this.estado = false;
        else
            this.estado = true;
    }
    Motor.prototype.encenderApagar = function () {
        if (this.estado = false)
            this.estado = true;
        else
            this.estado = false;
    };
    Motor.prototype.estaEncendido = function () {
        return this.estado;
    };
    return Motor;
}());
var Rueda = /** @class */ (function () {
    function Rueda(marca, rodado) {
        this.marca = marca;
        this.rodado = rodado;
    }
    return Rueda;
}());
var Vehiculo = /** @class */ (function () {
    function Vehiculo(tipo, patente, motor, ruedas, marcaModelo, titular) {
        this.tipo = tipo;
        this.patente = patente;
        this.motor = motor;
        this.ruedas = ruedas;
        this.volante = true;
        this.tanqueCombustibleLitros = Math.random() * (100 - 1) + 1;
        this.marcaModelo = marcaModelo;
        if (titular = null)
            this.titular = '0 KM';
        else
            this.titular = titular;
    }
    Vehiculo.prototype.ponerMarcha = function () {
        if (!this.motor.estaEncendido() && this.tanqueCombustibleLitros > 1)
            this.motor.encenderApagar;
        else
            console.log("El motor ya esta encendido");
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(tipo, patente, motor, ruedas, marcaModelo, cantPuertas, titular) {
        var _this = _super.call(this, tipo, patente, motor, ruedas, marcaModelo, titular) || this;
        _this.cantPuertas = cantPuertas;
        _this.baul = true;
        return _this;
    }
    return Auto;
}(Vehiculo));
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(tipo, patente, motor, ruedas, marcaModelo, titular) {
        var _this = _super.call(this, tipo, patente, motor, ruedas, marcaModelo, titular) || this;
        _this.acoplado = true;
        return _this;
    }
    return Camion;
}(Vehiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(tipo, patente, motor, ruedas, marcaModelo, titular) {
        var _this = _super.call(this, tipo, patente, motor, ruedas, marcaModelo, titular) || this;
        _this.baulera = true;
        return _this;
    }
    return Moto;
}(Vehiculo));
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.buscarVehiculo = function (patente) {
        for (var i = 0; i < this.listadoVehiculos.length; i++) {
            if (this.listadoVehiculos[i].getPatente() == patente)
                return true;
        }
        return false;
    };
    RegistroAutomotor.prototype.obtenerVehiculo = function (patente) {
        if (this.buscarVehiculo(patente))
            for (var i = 0; i < this.listadoVehiculos.length; i++) {
                if (this.listadoVehiculos[i].getPatente() == patente)
                    return this.listadoVehiculos[i];
            }
        return null;
    };
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.listadoVehiculos.push(vehiculo);
    };
    return RegistroAutomotor;
}());
