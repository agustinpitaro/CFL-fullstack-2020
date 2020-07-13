//Cargo la libreria a usar
let readlineSync = require('readline-sync');
let number = 1;
let total= 0;
let positivos = 0;
while(number != 0){
    number=readlineSync.questionInt("Ingrese un número: ");
    if(number > 0)
        positivos ++;
    if(number != 0)
        total ++;
}
console.log(positivos,"numeros positivos.", positivos/total*100,"% del total.");