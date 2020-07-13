//Cargo la libreria a usar
let readlineSync = require('readline-sync');

//Creo funciones auxiliares
//Esta funcion se encarga de crear un arreglo de N dimensiones inicializado en 0.
function crearArray(n){
    let array = new Array(n); //defino un arreglo de n posiciones
    for(let i = 0; i < array.length;i++) array[i] = 0; //inicializo en 0 las posiciones del arreglo.
    return array;
}
//Esta funcion se encarga de tomar un String de entrada y retornar un arreglo de 26 posiciones con la cantidad de ocurrencias de cada letra.
function listarOcurrencias(text){
    let arrayOcurrencias = crearArray(26); //creo un arreglo de 26 posiciones.
    text = text.toLowerCase(); //me aseguro de unificar mayusculas y minusculas.
    for (let i = 0; i<text.length; i++){
        let position = text.charCodeAt(i) - 97; //Sabiendo que las letras minusculas estan desde 97 a 122, si normalizamos, podemos crear un indice para cada letra.
        arrayOcurrencias[position]++; 
    }
    return arrayOcurrencias;
}
//Esta funcion se encarga de calcular la probabilidad de ocurrencia de cada caracter. Recibe el arreglo de ocurrencias y el total de caracteres del texto.
function calcularOcurrencia(arrayOcurrencias, total){
    let arrayProb = crearArray(26);
    for (let i = 0; i < arrayOcurrencias.length;i++){
        arrayProb[i] = arrayOcurrencias[i]/total;
    }
    return arrayProb;
}
//Esta funcion se encarga de eliminar espacion en blanco, signos de puntuacion y de convertir el texto a minuscula.

function procesarTexto(texto){
   // Definimos los los tipos de vocales especiales
   let tiposA = "àÀáÁ";
   let tiposE = "èÈéÉ";
   let tiposI = "ìÌíÍ";
   let tiposO = "òÒóÓ";
   let tiposU = "ùÙúÚ";
   let tiposÑ = "ñÑ";

    // Los reemplazamos todos
    for (let i = 0; i < tiposA.length; i++) {
        texto= texto.replace(new RegExp("\\" + tiposA[i], 'gi'), 'a');
    }   
    for (let i = 0; i < tiposE.length; i++) {
        texto= texto.replace(new RegExp("\\" + tiposE[i], 'gi'), 'e');
    }   
    for (let i = 0; i < tiposI.length; i++) {
        texto= texto.replace(new RegExp("\\" + tiposI[i], 'gi'), 'i');
    }   
    for (let i = 0; i < tiposO.length; i++) {
        texto= texto.replace(new RegExp("\\" + tiposO[i], 'gi'), 'o');
    }   
    for (let i = 0; i < tiposU.length; i++) {
        texto= texto.replace(new RegExp("\\" + tiposU[i], 'gi'), 'u');
    }
    //reemplazamos ñ por n
    for (let i = 0; i < tiposU.length; i++) {
        texto= texto.replace(new RegExp("\\" + tiposÑ[i], 'gi'), 'n');
    }
        
    return texto.trim().toLowerCase().split('.').join("").split(',').join("");
}

//Main
let textoEntrada = "ñoño àÀáÁ"; //readlineSync.question("Ingrese el texto deseado:");
let textoProcesado = procesarTexto(textoEntrada);
let listadoOcurrencias = listarOcurrencias(textoProcesado);
let listadoProbabilidades = calcularOcurrencia(listadoOcurrencias, textoProcesado.length);
console.log(textoEntrada);
console.log(textoProcesado);
console.log(listadoOcurrencias);
console.log(listadoProbabilidades);
