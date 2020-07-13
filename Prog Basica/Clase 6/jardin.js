//Cargo la libreria a usar
let readlineSync = require('readline-sync');

//Creo funciones auxiliares

//Se encarga de asignar el aula acorde al numero de alumnos ingresado
function asignarAula(alumnos){
    azul = 40;
    verde = 35;
    amarilla = 30;
    if(alumnos < amarilla)
        return "amarilla";
    else{
        if(alumnos < verde)
            return "verde";
        else{
            if(alumnos < azul)
                return "azul";
        }
    }
}

//MAIN
let alumnos = readlineSync.questionInt("Ingrese la cantidad de alumnos:");
console.log("Su clase sera en el aula", asignarAula(alumnos));
