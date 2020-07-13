"use strict";

let contador = 0;
let btn = document.getElementById("container");
btn.addEventListener("click", function(){
    btn.toggle();
})
function LanzarDados() {
    let dado1,dado2 = 0;
    let total=0;
    contador = 0;
    for(let i = 0; i<1000; i++){
        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;
        total = dado1 + dado2;
        if(total == 7)
            contador++;
    }
    console.log(contador);
    let miVisor = document.querySelector("p.visor");
    miVisor.innerHTML = contador;
}