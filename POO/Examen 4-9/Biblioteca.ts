import { Libro } from './Libro';
import { Revista } from './Revista';
import { ArticuloLectura } from './ArticuloLectura';

export class Biblioteca {
    private elementos: ArticuloLectura[];
    private nombreBiblioteca: string;
    private direccion: string;

    //Busca en elementos, si se encuentra el articulo "a". 
    //En caso de encontrarlo, muestra un mensaje de error y retorna false. Caso contrario, lo agrega y retorna true.
    public insertar(a: ArticuloLectura): boolean {
        if (this.elementos.find(element => element.getISBN() == a.getISBN())) {
            console.error("El articulo ya existe.");
            return false;
        }
        else {
            this.elementos.push(a);
            return true;
        }
    }

    //Busca en elementos, si se encuentra un articulo con un ISBN dado. 
    //En caso de no encontrarlo, muestra un mensaje de error y retorna null. Si lo encuentra, lo retorna.
    public buscar(ISBN: number): ArticuloLectura {
        let i: number;
        i = this.elementos.findIndex(element => element.getISBN() == ISBN);
        if (i == -1) {
            console.error("No se encuentra");
            return null;
        }
        else
            return this.elementos[i];;
    }

    //Busca en elementos, si se encuentra un articulo con un ISBN dado. 
    //En caso de no encontrarlo, muestra un mensaje de error y retorna null. Si lo encuentra, llama al metodo setCantidadPaginas con las paginas dadas y retorna true.
    public modificarPaginas(ISBN: number, paginas: number): boolean {
        let i: number;
        i = this.elementos.findIndex(element => element.getISBN() == ISBN);
        if (i == -1) {
            console.error("No se encuentra");
            return null;
        }
        else
            this.elementos[i].setCantidadPaginas(paginas);
        return true;
    }

    //Busca en elementos, si se encuentra un articulo con un ISBN dado. 
    //En caso de no encontrarlo, muestra un mensaje de error y retorna null. Si lo encuentra, lo elimina de la lista de elementos y retorna true.
    public eliminar(ISBN: number): boolean {
        let i: number;
        i = this.elementos.findIndex(element => element.getISBN() == ISBN);
        if (i == -1) {
            console.error("No se encuentra");
            return null;
        }
        else
            this.elementos.splice(i, 1);
        return true;
    }

    //Busca en elementos, si se encuentra uno o mas articulos de un autor dado. 
    public buscarPorAutor(autor: string): ArticuloLectura[] {
        let query: ArticuloLectura[];
        this.elementos.forEach(element => {
            if (element.getAutor() == autor)
                query.push(element);    //En esta parte busco en cada elemento de elementos, si posee el autor dado. De poseerlo, lo agrego a una lista de ArticuloLectura[]
        });

        if (query.length == 0) {
            console.error("No hay Articulos de lectura a su nombre."); //Si no encuentro ningun Articulo que cumpla esa condicion, muestro un error en consola y retorno nulo.
            return null;
        }
        else
            return query; //Si encontre 1 o mas, retorno la lista.
    }

}