//Cargo la libreria a usar
let readlineSync = require('readline-sync');
let number = 1;
let maximo = -32767; //inicializo con un numero muy bajo
while(number != 0){
    number=readlineSync.questionInt("Ingrese un número: ");
    if(number > maximo)
        maximo = number;
}
console.log("El maximo es:", maximo); 