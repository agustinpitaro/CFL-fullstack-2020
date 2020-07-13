/* Realizar un programa que calcule el valor de la letra de un numero de identificación fiscal (NIF). 
- El DNI se debe encontrar entre 0 y 99999999, en otro casi debe dar un mensaje de error
- El valor de la letra se debe obtener mediante el resto de la división entre el DNI y el numero 23
- Selecciona la letra dentro del siguiente array: ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
Entonces si el resto de la división es 0, la letra es T, si es 1 es R, etc.
- El DNI es ingresado por el usuario */

//Cargo la libreria a usar
let readlineSync = require('readline-sync');


//Declaro funciones auxiliares
function ingresarDNI(){
    let dni = readlineSync.questionInt("Por favor, ingrese su numero de documento:");
    if( dni < 0 || dni > 99999999){
        console.log("El dni ingresado es incorrecto.");
        return ingresarDNI();
    }
    return dni;
}
//Declaro estructuras auxiliares

let listado = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];

//Realizo el pedido de datos al usuario

let dni = parseInt(ingresarDNI());
let nif = listado[dni%23];
console.log("La letra NIF correspondiente a su DNI es:", nif);
