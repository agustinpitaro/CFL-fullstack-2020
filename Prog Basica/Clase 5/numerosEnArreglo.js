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
//Se encarga de contar la cantidad de valores positivos, negativos y ceros de un arreglo.
function detectarNumeros(arreglo){
    let contador = [0,0,0];
    for (let i = 0; i<arreglo.length; i++){
        if(arreglo[i] < 0)
            contador[0]++;
        else{
            if(arreglo[i] == 0)
                contador[1]++;
            else{
                contador[2]++;
            }
        }
    }
    return contador;
}


//Main
let dim = readlineSync.questionInt("Ingrese la dimension del arreglo que quiere cargar:");
//Creo las variables a usar
let arreglo = new Array(dim);

arreglo = cargarArreglo(arreglo);
console.log("El arreglo cargado es:",arreglo);

let contador = detectarNumeros(arreglo);
console.log("La salida es:", contador[2], "positivos,", contador[0], "negativos y", contador[1],"ceros.");
