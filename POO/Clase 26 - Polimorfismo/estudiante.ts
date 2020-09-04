import {Persona} from 'C:/Users/Agustin Pitaro/Documents/CFL fullstack-2020/CFL-fullstack-2020/POO/Clase 26 - Polimorfismo/persona';

export class Estudiante extends Persona{
    private LU : number;

    public constructor(name : string, documento : number, LU : number){
        super(name,documento);
        this.LU = LU;
    }

    public getFullInfo() : string {
        return super.getFullInfo + '-' + this.LU;
    }

    public getLU() : number {
        return this.LU;
    }

    public escribirExamen(examen : string) : string{
        return this.revisarMachete(examen);
    }

    private revisarMachete(examen:string) : string{
        return 'respuesta';
    }
}
