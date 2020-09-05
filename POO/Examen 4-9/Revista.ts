import { ArticuloLectura } from './ArticuloLectura';

export class Revista extends ArticuloLectura {
    private articulos: string[];

    public constructor(ISBN: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number, articulos: string[]) {
        super();
        this.contructor(ISBN, autor, editorial, titulo, cantidadPaginas);
        this.articulos = articulos;

    }

    public getArticulos(): string[] {
        return this.articulos;
    }
    //Verifico que el numero de paginas no supere las 50, en caso de hacerlo muestro un mensaje de error y no ejecuto la operacion.
    public setCantidadPaginas(c: number) {
        if (this.cantidadPaginas + c > 50)

            console.error("Max de paginas = 50;");
        else
            this.cantidadPaginas += c;

    }
}