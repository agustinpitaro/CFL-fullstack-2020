//Cargo la libreria a usar
let readlineSync = require('readline-sync');

//Creo funciones auxiliares

//Se encarga de cargar un arreglo pasado por parametro
function multiplicarArreglo(arreglo1,arreglo2,arregloResultado){
    for (let i = 0; i<arreglo1.length ; i++){
        arregloResultado[i] = arreglo1[i] * arreglo2[i];
    }
    //console.log(arregloResultado);
} 

//Cargo los arreglos
let v1 = [1, 2, 3];
let v2 = [4, 5, 6];
let v3 = [2, 1, 2];
let v4 = [1, 2, 1];

//MAIN
let res = new Array(3);
multiplicarArreglo(v1,v2,res);
multiplicarArreglo(res,v3,res);
multiplicarArreglo(res,v4,res);
console.log(res);