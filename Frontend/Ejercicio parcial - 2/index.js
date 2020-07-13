"use strict";

let inputTarea = document.querySelector(".tarea");
let misTareas = document.querySelector(".mis-tareas");
let tareas = [];

function actualizarLista() {
  misTareas.innerHTML = "";

  for (let i = 0; i < tareas.length; i++) {
    let miLi = document.createElement("li");
    miLi.innerHTML = tareas[i];
    misTareas.appendChild(miLi);
  }
};

function guardarTarea(){
  let nuevaTarea = inputTarea.value;
  console.log(nuevaTarea);
  tareas.push(nuevaTarea);
  inputTarea.value = "";
  actualizarLista();
};

function limpiarLista(){
    tareas = [];
    actualizarLista();
};

let botonAgregar = document.querySelector(".boton-guardar");
botonAgregar.addEventListener("click", guardarTarea);

let botonEliminarTodas = document.querySelector(".boton-limpiar-lista");
botonEliminarTodas.addEventListener("click", limpiarLista);
