//Cargo la libreria a usar
let readlineSync = require('readline-sync');
//Defino las variables


while (numero <= 0){
    let numero = readlineSync.questionInt("Ingrese su numero:");let numero = readlineSync.questionInt("Ingrese su numero:");
    if(numero == 0){
        console.log("Su numero es un 0");
    }
}

let resto = numero % 2;

if (resto == 0){
    console.log("Su numero es par");
}
else{
    console.log("Su numero es impar");
}
