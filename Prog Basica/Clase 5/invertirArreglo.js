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
//Se encarga de invertir los valores de un arreglo pasado por parametro
function invertirArreglo(arreglo){
    let arregloInvertido = new Array(arreglo.length);
    for (let i = 0; i<arreglo.length; i++){
        arregloInvertido[arreglo.length-1-i]=arreglo[i];
    }
    return arregloInvertido;
}

//Main
let dim = readlineSync.questionInt("Ingrese la dimension del arreglo que quiere invertir:");
//Creo las variables a usar
let arreglo = new Array(dim);

arreglo = cargarArreglo(arreglo);
console.log("El arreglo cargado es:",arreglo);
let arregloInvertido = invertirArreglo(arreglo);
console.log("El arreglo invertido quedaria asi:",arregloInvertido);





