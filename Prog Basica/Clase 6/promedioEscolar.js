//Cargo la libreria a usar
let readlineSync = require('readline-sync');

//Creo funciones auxiliares
//Se encargar de cargar un alumno con sus respectivas notas y su promedio.

function cargarAlumno(){
    let nombre= readlineSync.question("Ingrese el nombre del alumno a cargar:");
    let notas = new Array(3);
    let promedio = 0;
    for(let i = 0; i < 3; i++){
        notas[i] = readlineSync.questionInt("Ingrese la nota del", i+1,"trimestre:");
        promedio = promedio + notas[i];
    }
    promedio = promedio/3;
    return {
        nombre : nombre,
        notas : notas,
        promedio : promedio
    }
}

//Main

let cantidad = readlineSync.questionInt("Que cantidad de alumnos quiere cargar?");
let alumnado = new Array(cantidad);
for (let i = 0; i < alumnado.length; i++){
    alumnado[i] = cargarAlumno();
}
let nombre = readlineSync.question("De quien desea ver el promedio?");

for(let i = 0; i <alumnado.length; i++){
    if (alumnado[i].nombre == nombre){
        console.log("El promedio de", nombre, "es:", alumnado[i].promedio);
    }
}

