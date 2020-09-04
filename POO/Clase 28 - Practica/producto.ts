export class Producto {
    private id: string;
    private valor: number;
    
    public constructor(id: string, valor: number) {
        this.id = id;
        this.valor = valor;
    }

    public getId(): string {
        return this.id;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor:number) {
        this.valor = valor;
    }
}