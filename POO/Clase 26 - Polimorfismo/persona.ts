class Persona{
    private name : string;
    private documento : number;

    public constructor(name : string, documento : number) {
        this.name = name;
        this.documento = documento;
    }

    public getName() : string{
        return this.name;
    }
    public getDocumento() : number{
        return this.documento;
    }

    public getFullInfo() : string{
        return this.name+'-'+this.documento;
    }
}
export {Persona};