//Cargo la libreria a usar
let readlineSync = require('readline-sync');
let name = "inic";
let nota1,nota2,nota3;

while(name != ""){
    
    name=readlineSync.question("Ingrese el nombre del alumno: ");

    if(name != ""){
        nota1=readlineSync.questionInt("Ingrese nota practica: "); 
        nota2=readlineSync.questionInt("Ingrese nota de resolucion de problemas: "); 
        nota3=readlineSync.questionInt("Ingrese nota de teoria: "); 
        if (nota1<0 || nota1>10 || nota2<0 || nota2>10 || nota3<0 || nota3>10){
            console.log("Las notas ingresadas no son validad. Por favor, reingrese los datos.")
        }
        else{
            console.log("El alumno", name, "tiene una nota de", nota1*0.1+nota2*0.5+nota3*0.4);
        }
    
    } 
}
