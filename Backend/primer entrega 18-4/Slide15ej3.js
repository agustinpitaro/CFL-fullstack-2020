//Cargo la libreria a usar
let readlineSync = require('readline-sync');

let presSist = 0;
let presDias = 0;
//Pido que se ingrese el primer numero a sumar
presSist = readlineSync.question("Ingrese su resion sistolica:");
//Guardo en mi lista de ingredientes
presDias = readlineSync.question("Ingrese su resion diastolica:");
if ( presSist > 120 && presDias > 80 )
    console.log("Ustdes posee presion alta.");
else
    console.log("Ustdes posee presion normal.");

