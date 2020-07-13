//Cargo la libreria a usar
let readlineSync = require('readline-sync');
//Creo las variables a usar
let dim = 6;
let arregloA = new Array(dim);
let arregloB = new Array(dim);
let arregloC = new Array(dim);
//Creo funciones auxiliares

//Se encarga de cargar un arreglo pasado por parametro
function cargarArreglo(arreglo) {
    for (let indice = 0; indice<arreglo.length;indice++){
        arreglo[indice]= readlineSync.questionInt("Ingrese el numero de la posicion", indice , ":");
    }
    return arreglo; 
}

//Se encarga de sumar 2 arreglos pasados por parametro y retornar un arreglo con su resultado
function sumarArreglo(arregloA,arregloB){
    if(arregloA.length != arregloB.length)
        return console.log("Los arreglos tienen dimensiones diferentes.")
    else{
        let arregloSuma = new Array(arregloA.length);
        for(let i = 0; i<arregloA.length; i++){
        arregloSuma[i] = arregloA[i] + arregloB[i]
        }
        return arregloSuma;
    } 
}
//Main
arregloA = cargarArreglo(arregloA);
console.log("El arreglo A cargado es:",arregloA);
arregloB = cargarArreglo(arregloB);
console.log("El arreglo B cargado es:",arregloB);

console.log("La suma de A y B:", sumarArreglo(arregloA, arregloB));






