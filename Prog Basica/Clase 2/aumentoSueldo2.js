//Cargo la libreria a usar
let readlineSync = require('readline-sync');
//Defino las variables
let numero = readlineSync.questionInt("Ingrese su saldo:");
let aumento = 0;

if(numero<0){
    console.log("Valor no valido.");
}
else{
    if (numero<15001){
        aumento = 20;    
    }
    else{
        if(numero<20001){
            aumento = 10;
        }
        else{
            if(numero<25001){
                aumento = 5;
            }
        }
   
    }
    numero = numero * (1 + aumento/100);
    console.log("Su proximo sueldo sera de:", numero);
}
                        