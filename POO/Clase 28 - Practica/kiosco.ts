import {Producto} from '../Clase 28 - Practica/producto';
const fs = require("fs");

class Kiosco {
    private SoldItems: Producto[];
    private AvailableItems: Producto[];

    public constructor() {
        this.elementos = [];
    }

    public cargarProducto(ruta: string){

    fs.readFile(ruta, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        
        console.log(data);
        });
    this.elementos.push(p);
}


    private cargarProducto(p: Producto){
        this.elementos.push(p);
    }

    public estaVacia(): boolean {
        return this.elementos.length == 0;
    }

    public eliminar(posicion: number): boolean {
        if (posicion < 0 || posicion >= this.elementos.length)
            return false;
        this.elementos.splice(posicion, 1); 
        return true;
    }
    private getProductos(): Producto[] {
        return this.elementos;
    }

}