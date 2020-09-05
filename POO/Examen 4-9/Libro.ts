import { ArticuloLectura } from './ArticuloLectura';

export class Libro extends ArticuloLectura {
    public constructor(ISBN: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number) {
        super();
        this.contructor(ISBN, autor, editorial, titulo, cantidadPaginas);
    }

    public setCantidadPaginas(c: number) {
        this.cantidadPaginas += c;
    }
}