//Cargo la libreria a usar
let readlineSync = require('readline-sync');
//Defino las variables
let numero = readlineSync.questionInt("Ingrese su numero:");

if(numero == 0){
    console.log("Su numero es un 0");
}
else {
    let resto = numero % 2;
    if (resto == 0){
        console.log("Su numero es par");
    }
    else{
        console.log("Su numero es impar");
    }
}
