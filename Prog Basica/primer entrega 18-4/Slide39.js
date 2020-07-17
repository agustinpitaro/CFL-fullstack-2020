//Cargo la libreria a usar
let readlineSync = require('readline-sync');
//Defino las variables
let altura = readlineSync.questionInt("Ingrese altura:");
let base = readlineSync.questionInt("Ingrese base:");
//Calculo el area
let area = base*altura;
//Muestro el resultado
console.log("El resultado del area es:", area);