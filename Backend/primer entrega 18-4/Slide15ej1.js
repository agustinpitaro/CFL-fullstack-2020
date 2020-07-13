//Cargo la libreria a usar
let readlineSync = require('readline-sync');

//Pido que se ingrese el primer numero a sumar
let primerNumero = readlineSync.questionInt("Ingrese el primer número: ");

//Muestro el valor ingresado
console.log("el primer número es", primerNumero);

//Pido que se ingrese el segundo numero a sumar
let segundoNumero = readlineSync.questionInt("Ingrese el segundo número: ");

//Muestro el valor ingresado
console.log("el segundo número es", segundoNumero);
//Realizo la operacion
let resultado = primerNumero + segundoNumero;
//Muestro el resultado de la suma
console.log("El resultado de la suma es:", resultado);