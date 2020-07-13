//Cargo la libreria a usar
let readlineSync = require('readline-sync');

function esMultiplo(numero1,numero2) {
    if(numero1%numero2 == 0 || numero2%numero1 == 0){
        return true;
    }
    else{
        return false;
    }
}
function cantidadDeDivisores(numero) {
    let contador=0;
    for(let i = 1;i<=numero;i++){
        if(esMultiplo(numero,i)){
            contador++;
        }
    }
    return contador;
}

//Defino variables
let numero = readlineSync.questionInt("Ingrese el numero al que desea saber la cantidad de divisores:");
console.log("La cantidad de divisores de",numero,"son:", cantidadDeDivisores(numero));


