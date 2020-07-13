//Cargo la libreria a usar
let readlineSync = require('readline-sync');


let idBolsa = readlineSync.question("Ingrese el codigo de su bolsa de huevos");
let size = readlineSync.questionInt("Ingrese la cantidad de huevos a mover:");
let index = 0;
while ( index > size) {
    index++;
} //podria haber hecho un for pero me di cuenta despues de hacerlo jaja
console.log ("Se han movido", size, "huevos de la bolsa", idBolsa);