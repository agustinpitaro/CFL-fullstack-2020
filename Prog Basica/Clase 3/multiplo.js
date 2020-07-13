for(let indice = 0; indice <= 100; indice++){
    if (indice % 2 == 0 && indice % 3 == 0){
        console.log("El numero", indice," es multiplo de 2 y de 3")
    }
    else{
        if (indice % 3 == 0){
            console.log("El numero", indice," es multiplo de 3")
        }
        if (indice % 2 == 0){
            console.log("El numero", indice," es multiplo de 2")
        }
    }
}