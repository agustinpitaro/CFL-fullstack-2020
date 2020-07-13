//Cargo la libreria
let readlineSync = require('readline-sync');
//Defino variables
let tiempoTotal = 0;
//Cargo los valores de cada vuelta
for (let vuelta = 1; vuelta < 5; vuelta++){
    tiempoTotal = tiempoTotal + readlineSync.questionInt("Ingrese la vuelta " + vuelta + ":");

}
//Muestro en pantalla los resultados:
console.log("Tiempo total; ", tiempoTotal);
console.log("Promedio de vuelta: ", tiempoTotal/4);