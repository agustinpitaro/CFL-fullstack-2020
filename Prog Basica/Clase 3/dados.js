//Cargo la libreria a usar
let readlineSync = require('readline-sync');
let dados = readlineSync.questionInt("Ingrese el numero de dados: ");
if(dados<1){
    console.log("Numero invalido de dados.")
}
else{
    console.log("Usted tiene una posibilidad de",100/Math.pow(6,dados),"% de sacar 6 en los",dados,"dados."); 
}
