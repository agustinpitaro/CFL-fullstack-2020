//Cargo la libreria a usar
let readlineSync = require('readline-sync');

function potencia(numero,exponente) {
    let resultado=1;
    for(let i=0; i<exponente; i++){
        resultado= resultado*numero
    }
    return resultado;
 }

//Defino variables
let numero,exponente;
numero = readlineSync.questionInt("Ingrese su numero:");
exponente = readlineSync.questionInt("Ingrese su exponente:");
if(exponente < 0){
    console.log("Error:Exponente negativo.")
}
else{
    console.log("El resultado de la operacion es:", potencia(numero,exponente));
}


