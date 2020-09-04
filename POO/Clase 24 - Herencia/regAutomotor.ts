class Motor {
    protected numero: number;
    protected clase: string;
    private estado: boolean;

    public constructor(numero: number, clase: string, estado: string) {
        this.numero = numero;
        if (clase = null)
            this.clase = 'Motor de Combustion'
        else
            this.clase = clase;
        if (estado = null)
            this.estado = false;
        else
            this.estado = true;
    }

    public encenderApagar(): void {
        if (this.estado = false)
            this.estado = true;
        else
            this.estado = false;
    }
    public estaEncendido(): boolean {
        return this.estado;
    }
}
class Rueda {
    protected marca: string;
    protected rodado: number;

    public constructor(marca: string, rodado: number) {
        this.marca = marca;
        this.rodado = rodado;
    }
}
class Vehiculo {
    protected tipo: number;
    protected titular: string;
    protected patente: string;
    protected motor: Motor;
    protected ruedas: Rueda[];
    protected volante: boolean;
    protected tanqueCombustibleLitros: number;
    protected marcaModelo: string;

    public constructor(tipo: number, patente: string, motor: Motor, ruedas: Rueda[], marcaModelo: string, titular: string) {
        this.tipo = tipo;
        this.patente = patente;
        this.motor = motor;
        this.ruedas = ruedas;
        this.volante = true;
        this.tanqueCombustibleLitros = Math.random() * (100 - 1) + 1;
        this.marcaModelo = marcaModelo;
        if (titular = null)
            this.titular = '0 KM'
        else
            this.titular = titular;
    }

    public ponerMarcha(): void {
        if (!this.motor.estaEncendido() && this.tanqueCombustibleLitros > 1)
            this.motor.encenderApagar;
        else
            console.log("El motor ya esta encendido");
    }
    public getPatente(): string {
        return this.patente;
    }

}
class Auto extends Vehiculo {
    protected cantPuertas: number;
    protected baul: boolean;

    public constructor(tipo: number, patente: string, motor: Motor, ruedas: Rueda[], marcaModelo: string, cantPuertas: number, titular: string) {
        super(tipo, patente, motor, ruedas, marcaModelo, titular);
        this.cantPuertas = cantPuertas;
        this.baul = true;
    }
}
class Camion extends Vehiculo {
    private acoplado: boolean;

    public constructor(tipo: number, patente: string, motor: Motor, ruedas: Rueda[], marcaModelo: string, titular: string) {
        super(tipo, patente, motor, ruedas, marcaModelo, titular);
        this.acoplado = true;
    }
}
class Moto extends Vehiculo {
    private baulera: boolean;

    public constructor(tipo: number, patente: string, motor: Motor, ruedas: Rueda[], marcaModelo: string, titular: string) {
        super(tipo, patente, motor, ruedas, marcaModelo, titular);
        this.baulera = true;
    }
}

class RegistroAutomotor {
    private listadoVehiculos: Vehiculo[];

    public constructor() {
    }

    public buscarVehiculo(patente: string): boolean {
        for (let i: number = 0; i < this.listadoVehiculos.length; i++) {
            if (this.listadoVehiculos[i].getPatente() == patente)
                return true;
        }
        return false;
    }

    public obtenerVehiculo(patente: string): Vehiculo {
        if (this.buscarVehiculo(patente))
            for (let i: number = 0; i < this.listadoVehiculos.length; i++) {
                if (this.listadoVehiculos[i].getPatente() == patente)
                    return this.listadoVehiculos[i];
            }
        return null;
    }

    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.listadoVehiculos.push(vehiculo);
    }
}
