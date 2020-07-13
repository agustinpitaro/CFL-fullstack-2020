//Cargo los datos iniciales
let precioProducto=450.5;
let porcentajeDescuento=0.1;
//Calculo el descuento y el precio final
let descuento=precioProducto*porcentajeDescuento;
let precioFinal=precioProducto-descuento;
//Muestro el valor final con su descuento.
console.log("El precio final del producto es de :",precioFinal,"Al cual se le aplico un descuento de", descuento, "pesos.");