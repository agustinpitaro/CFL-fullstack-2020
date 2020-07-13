//Cargo la libreria a usar
let readlineSync = require('readline-sync');

console.log("Bienvenido al servicio de pago de nuestra empresa.");
let descuento = 0.15;
let precio = readlineSync.questionInt("Por favor, ingrese el valor de su compra:");
let cantidad = readlineSync.questionInt("Por favor, ingrese el numero de unidades:");
let mes = readlineSync.question("Por favor, ingrese el mes de su compra(EJ: Enero):");

if(mes == "Octubre"){
    precio = precio * (1 - descuento) * cantidad;
    console.log("Felicidades, recibio un descuento del", descuento, "% en su compra!");
    console.log("El precio a abonar es:", precio);
}
else {
    precio = precio * cantidad;
    console.log("El precio a abonar es:", precio);
}
