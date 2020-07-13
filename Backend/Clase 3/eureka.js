//Cargo la libreria a usar
let readlineSync = require('readline-sync');

//Defino las variables
let clave = "eureka";
let userkey;
let contador = 3;
let found = false;

while(!found && contador >0){
    userkey = readlineSync.question("Ingrese la clave:");
    if(userkey == clave){
        console.log("Contraseña aceptada.")
        found=true;
    }
    else{
        contador--;
        console.log("Contraseña incorrecta. Le quedan", contador,"intentos.")
    }

}
