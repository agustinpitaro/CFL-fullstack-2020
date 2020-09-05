export abstract class ArticuloLectura {
    private ISBN: number;
    private autor: string;
    private editorial: string;
    private titulo: string;
    protected cantidadPaginas: number;

    abstract setCantidadPaginas(ISBN: number);

    //Permite instanciar las variables desde las clases que la extiendan
    protected contructor(ISBN: number, autor: string, editorial: string, titulo: string, cantidadPaginas: number) {
        this.ISBN = ISBN;
        this.autor = autor;
        this.editorial = editorial;
        this.titulo = titulo;
        this.cantidadPaginas = cantidadPaginas
    }

    public getISBN(): number {
        return this.ISBN;
    }
    public getAutor(): string {
        return this.autor;
    }
    public getEditorial(): string {
        return this.editorial;
    }
    public getTitulo(): string {
        return this.titulo;
    }
}