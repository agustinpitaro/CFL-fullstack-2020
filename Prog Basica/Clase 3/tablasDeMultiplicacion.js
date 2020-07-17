//Cargo la libreria a usar
let readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Ingrese el número: ");
let stop = readlineSync.questionInt("Ingrese hasta qué número: "); 

for(let indice = 1; indice <= stop; indice++){
    console.log(number,"x",indice,"=",number*indice); 
}
