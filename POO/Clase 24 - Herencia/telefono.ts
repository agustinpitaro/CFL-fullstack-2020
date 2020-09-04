class Telefono{
    private estaPrendido: boolean;
    protected bateriaActual:number;

    public constructor(){
        this.estaPrendido = false;
        this.bateriaActual= 100;
    }
    public prenderApagar():void{
        if (!this.estaPrendido)
            this.estaPrendido = true;
        else
            this.estaPrendido = false;
    }
    public cargarBateria(carga:number):void{
        if (this.bateriaActual + carga > 100)
            this.bateriaActual = 100;
        else
            this.bateriaActual += carga;
    }
    public mandarMensaje(mensaje:string, num:number):string{
       return "Se envio:" + mensaje + "a " + num;
    }
    public hacerLlamada(num:number):string{
        return `Llamando a.......${num}`;
    }

}

class TelefonoCamara extends Telefono{
    public constructor(){
        super();
    }
    public sacarFoto():void{
        console.log('Foto Tomada!');
    }
}

class TelefonoRadio extends Telefono{
    protected frecuenciaActual:number;
    
    public constructor(){
        super();
        this.frecuenciaActual= Math.random();
    }
    public cambiarFrecuencia():void{
        this.frecuenciaActual + 10;
    } 
}