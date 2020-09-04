abstract class Auto2 {
    velocidad: number;
    estaPrendido: boolean;
    public constructor() {
        this.estaPrendido = false;
        this.velocidad = 0;
    }
    abstract acelerar();
    abstract frenar();
    private prenderApagar() {
        this.estaPrendido = !this.estaPrendido;
    }
}
class AutoCiudad extends Auto2 {
    public acelerar() {
        if (this.estaPrendido == false) {
            this.estaPrendido = true;
        }
        this.velocidad += 20;
    }
    public frenar() {
        this.velocidad -= 20;
    }
}
class AutoDeportivo extends Auto2 {
    public acelerar() {
        if (this.estaPrendido == true) {
            this.velocidad += 50;
        } 
    }
    public frenar() {
        this.velocidad -= 50;
    }
}
class Camioneta extends Auto2 {
    public acelerar() {
        if (this.estaPrendido == true) {
            this.velocidad += 10;
        } 
    }
    public frenar() {
        this.velocidad -= 10;
    }
}
