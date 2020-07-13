//Cargo la libreria a usar
let readlineSync = require('readline-sync');

let ingredientes = "";
let end;
while ( end != 1 ) {
    //Pido que se ingrese el primer numero a sumar
    let ingrediente = readlineSync.question("Ingrese un ingrediente:");
    //Guardo en mi lista de ingredientes
    ingredientes = ingredientes + ingrediente;
    //Pregunto si quiere seguir agregando mas ingredientes
    end = readlineSync.question("Si desea parar de ingresar ingredientes, presione 1");
}
console.log("Mezclando ingredientes");
console.log("Cocinando la preparacion");
console.log("Decorando la tarta :D");
console.log("Su tarta esta hecha! Los ingredientes utilizados fueron: ", ingredientes);

