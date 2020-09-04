import {Persona} from '../Clase 26 - Polimorfismo/persona';

class Profesor extends Persona{
    private ID : number;

    public constructor(name : string, documento : number, ID : number){
        super(name,documento);
        this.ID = ID;
    }

    public getFullInfo() : string {
        return super.getFullInfo + '-' + this.ID;
    }

    public getID() : number {
        return this.ID;
    }

    public evaluarExamen(examen : string) : number{
        return this.revisarRespuestas(examen);
    }

    private revisarRespuestas(examen:string) : number{
        return Math.floor(Math.random() * 11);
    }
}
export {Profesor};