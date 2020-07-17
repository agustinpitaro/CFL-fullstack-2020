"use strict";

let contador = 0;

function AumentarClick() {
    contador++;
    let miVisor= document.querySelector("p.visor span.numero");
    miVisor.innerHTML = contador;
    }
function AumentarXClick() {
    let vueltas = document.getElementById("muchoTexto").value;
    let miVisor = document.querySelector("p.visor span.numero");

    contador = contador +  parseInt(vueltas);
    miVisor.innerHTML = contador;
    }
function ReducirClick() {
    contador--;
    let miVisor = document.querySelector("p.visor span.numero");
    miVisor.innerHTML = contador;
    }