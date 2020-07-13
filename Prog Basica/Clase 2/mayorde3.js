//Cargo la libreria a usar
let readlineSync = require('readline-sync');
//Defino las variables
let primero = readlineSync.questionInt("Ingrese el primer numero:");
let segundo = readlineSync.questionInt("Ingrese el segundo numero:");
let tercero = readlineSync.questionInt("Ingrese el tercero numero:");

if (primero > segundo){
    if(primero > tercero){
        console.log("El mayor numero es el", primero);
    }
    else{
        console.log("El mayor numero es el", tercero);
    }
}
else{
    if (segundo > tercero){
        console.log("El mayor numero es el", segundo);

    }
    else{
        console.log("El mayor numero es el", tercero);
    }
}
