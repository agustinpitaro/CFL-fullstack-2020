//Cargo la libreria a usar
let readlineSync = require('readline-sync');
let number = 1;
let min = 0;
let max = 0;
let total = 0;
let cantidad = 0;
while(number != 0){
    number=readlineSync.questionInt("Ingrese un número: ");
    if(number > max)
        max = number;
    else if(number < min)
        min = number;
    total = total + number;
    cantidad++;
}
console.log(min, "numero minimo.", max,"numero maximo.", total/cantidad,"promedio de los numeros.");