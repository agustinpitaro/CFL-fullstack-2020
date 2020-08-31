import {Profesor} from 'C:/Users/Agustin Pitaro/Documents/CFL fullstack-2020/CFL-fullstack-2020/POO/Clase 26 - Polimorfismo/profesor';
import {Estudiante} from 'C:/Users/Agustin Pitaro/Documents/CFL fullstack-2020/CFL-fullstack-2020/POO/Clase 26 - Polimorfismo/estudiante';

class Instituto{
    private direccion : string;
    private nombre : string;
    private estudiantes : Estudiante[];
    private profesores : Profesor[];

    public addEstudiante (estudiante: Estudiante){
        this.estudiantes.push(estudiante);
    }

    public addProfesor(profesor: Profesor){
        this.profesores.push(profesor);
    }

    public getDireccion() : string{
        return this.direccion;
    }

    public getNombre() : string{
        return this.nombre;
    }

    public getListadoProfesores() : Profesor[]{
        return this.profesores;
    }

    public getListadoEstudiantes() : Estudiante[]{
        return this.estudiantes;
    }

    public fireProfesor(ID:number){
        for (let i: number = 0; i < this.profesores.length; i++) {
            if (this.profesores[i].getID() == ID)
                this.profesores.splice(i,1);
        }
    }

    public dismissEstudiante(LU:number){
        for (let i: number = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].getLU() == LU)
                this.estudiantes.splice(i,1);
        }
    }
}

export {Instituto};
