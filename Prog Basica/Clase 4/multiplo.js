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

//Defino variables
let numero1, numero2;
numero1 = readlineSync.questionInt("Ingrese el primer numero:");
numero2 = readlineSync.questionInt("Ingrese el segundo numero:");
if(esMultiplo(numero1,numero2)){
    console.log("Los numeros ingresados son multiplos.")
}
else{
    console.log("Los numeros ingresados no son multiplos.")
}


