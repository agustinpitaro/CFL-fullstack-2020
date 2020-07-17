//Cargo la libreria a usar
let readlineSync = require('readline-sync');

let first = readlineSync.questionInt("Ingrese el primer numero");
let second = readlineSync.questionInt("Ingrese el segundo numero"); 
let suma = 0;

for(let indice = first; indice <= second; indice++){
   suma = suma + indice;
}
console.log("El valor es:", suma);