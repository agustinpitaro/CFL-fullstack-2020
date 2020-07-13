"use strict";

let btn = document.getElementById("boton");
let muchoTxt = document.getElementById("container")

btn.addEventListener("click", function(){
    if(muchoTxt.style.display == "none"){
        
        muchoTxt.style.display ="block";
    }
    else
        muchoTxt.style.display="none";
    
})