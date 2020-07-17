//Cargo la libreria a usar
let readlineSync = require('readline-sync');

//Creo funciones auxiliares
//Se encarga de cargar un arreglo pasado por parametro
function cargarArreglo(arreglo) {
    for (let indice = 0; indice<arreglo.length;indice++){
        arreglo[indice]= readlineSync.questionInt("Ingrese el numero de la posicion", indice , ":");
    }
    return arreglo; 
}
//Se encarga de calcular el producto vectorial de 2 arreglos
function calcularProductoVectorial(arreglo1,arreglo2){
    let productoV = 0;
    for (let i = 0; i<arreglo1.length; i++){
        productoV= productoV +arreglo1[i]*arreglo2[i];
    }
    return productoV;
}

//Main

let dim = readlineSync.questionInt("Ingrese la dimension del arreglo que quiere cargar:");
//Creo las variables a usar
let arreglo1 = new Array(dim);
let arreglo2 = new Array(dim);

arreglo1 = cargarArreglo(arreglo1);
console.log("El arreglo cargado es:",arreglo1);

arreglo2 = cargarArreglo(arreglo2);
console.log("El arreglo cargado es:",arreglo2);

let productoVectorial = calcularProductoVectorial(arreglo1,arreglo2);
console.log("El producto vectorial es:", productoVectorial);
