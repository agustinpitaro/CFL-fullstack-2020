//Esta funcion me permite saber que cantidad de asientos se encuentran disponibles en mi sala
function verDisponibles(sala){
    let contador = 0;
    for (let i = 0; i < sala.length;i++){
        if(!sala[i]) contador++;
    }
    return contador;
}
//Main

let sala = [false, true,false, true,false, true,false, true,false, true,false, true,false, true,false, true,false, true,false, true];

console.log("La sala con capacidad de",sala.length, "asientos, tiene", verDisponibles(sala), "disponibles.");
