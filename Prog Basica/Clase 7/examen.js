//Cargo la libreria a usar
let readlineSync = require('readline-sync');

let dia = readlineSync.questionInt("ingrese el dia:");
let mes = readlineSync.questionInt("ingrese el mes:");
let anio = readlineSync.questionInt("ingrese el año:");

// Calculo la duracion de un dia en milisegundos.
let durationDay = 1000 * 60 * 60 * 24 ;

// defino la fecha de entrada. Como en JS los meses van de 0-11, le resto uno al mes ingresado.
let entry_date = new Date(anio, mes-1, dia); 
    
// defino la fecha del ultimo dia del año
let last_day = new Date(anio, 11, 31) 
       
// Calculo la diferencia entre las dos fechas. Como el resultado es en milisegundos lo divido por lo que dura un dia, asi logro tener la cantidad de dias.
let days = Math.round(last_day.getTime() - entry_date.getTime()) / (durationDay); 
    
// remuevo los decimales del resultado anterior.
days = days.toFixed(0); 

console.log(days);

