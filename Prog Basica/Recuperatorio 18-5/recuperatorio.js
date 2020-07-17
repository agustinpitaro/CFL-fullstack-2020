//Cargo las librerias necesarias.
let readlineSync = require('readline-sync');

//Cargo las estructuras necesarias, los arreglos de cada vendedor y un arreglo con sus nombres
let vendedor1 = [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652]
let vendedor2 = [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855]
let vendedor3 = [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218]
let vendedor4 = [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006]
let vendedor5 = [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]
let vendedores = ["Camila", "Franco", "Sofia", "Matias", "Agustina"];

//Funciones auxiliares

//Esta funcion muestra en pantalla al vendedor junto a su venta maxima, con la semana y mes de la misma.
function ventaMaxima(vendedorx, vendedor) {
    let ventaMaxima = 0;
    let mes = 0;
    let semana = 0;
    for (let i = 0; i < vendedorx.length; i++) {
        if (vendedorx[i] > ventaMaxima) {
            ventaMaxima = vendedorx[i];
            mes = Math.ceil((i + 1) / 4);
            semana = i % 4 + 1
        }
    }
    console.log(vendedor, "obtuvo una venta maxima de", ventaMaxima, ", la semana", semana, "del mes", mes);
}

//Esta funcion muestra en pantalla al vendedor junto a su venta minima, con la semana y mes de la misma.
function ventaMinima(vendedorx, vendedor) {
    let ventaMinima = 9999999;
    let mes = 0;
    let semana = 0;
    for (let i = 0; i < vendedorx.length; i++) {
        if (vendedorx[i] < ventaMinima) {
            ventaMinima = vendedorx[i];
            mes = Math.ceil((i + 1) / 4);
            semana = i % 4 + 1
        }
    }
    console.log(vendedor, "obtuvo una venta minima de", ventaMinima, ", la semana", semana, "del mes", mes);
}

//Esta funcion muestra en pantalla al vendedor junto a su promedio de ventas semanal.
function promedioSemanal(vendedorx, vendedor) {
    let ventaTotal = 0;
    for (let i = 0; i < vendedorx.length; i++) {
        ventaTotal += vendedorx[i];
    }
    console.log(vendedor, "obtuvo una venta semanal promedio de", ventaTotal / vendedorx.length - 1);
}
//Esta funcion muestra en pantalla al vendedor junto a su promedio de ventas mensual.
function promedioMensual(vendedorx, vendedor) {
    let ventaTotal = 0;
    for (let i = 0; i < vendedorx.length; i++) {
        ventaTotal += vendedorx[i];
    }
    console.log(vendedor, "obtuvo una venta mensual promedio de", ventaTotal / 3);
}
//Esta funcion muestra en pantalla al mejor vendedor de una semana dada.
function mejorVendedorSemana(semana) {
    let mejorVenta = 0;
    let vendedor = "";
    let ventaSemana = [vendedor1[semana], vendedor2[semana], vendedor3[semana], vendedor4[semana], vendedor5[semana]]
    for (let i = 0; i < ventaSemana.length; i++) {
        if (mejorVenta < ventaSemana[i]) {
            mejorVenta = ventaSemana[i];
            vendedor = vendedores[i];
        }
    }
    console.log(vendedor, "obtuvo la maxima venta de", mejorVenta, ", la semana", semana + 1);
}
//Esta funcion muestra en pantalla al mejor vendedor de un mes dado.
function mejorVendedorMes(mes) {
    let ventaMes = 0;
    let vendedor = "";
    let semanaMax = mes * 4 - 1; //Por ejemplo, el mes 1 seria el intervalo de semanas de 0 a 3.
    let semanaMin = semanaMax - 3;
    let ventaSubtotal = 0;
    for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor1[i];
    }
    if (ventaSubtotal > ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[0];
    }
    ventaSubtotal = 0;
    for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor2[i];
    }
    if (ventaSubtotal > ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[1];
    }
    ventaSubtotal = 0;
    for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor3[i];
    }
    if (ventaSubtotal > ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[2];
    }
    ventaSubtotal = 0; for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor4[i];
    }
    if (ventaSubtotal > ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[3];
    }
    ventaSubtotal = 0;
    for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor5[i];
    }
    if (ventaSubtotal > ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[4];
    }
    console.log("El mejor vendedor del mes", mes, "es", vendedor, " con", ventaMes);
}
//Esta funcion muestra en pantalla al peor vendedor de un mes dado.
function peorVendedorMes(mes) {
    let ventaMes = 999999999999;
    let vendedor = "";
    let semanaMax = mes * 4 - 1; //Por ejemplo, el mes 1 seria el intervalo de semanas de 0 a 3.
    let semanaMin = semanaMax - 3;
    let ventaSubtotal = 0;
    for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor1[i];
    }
    if (ventaSubtotal < ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[0];
    }
    ventaSubtotal = 0;
    for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor2[i];
    }
    if (ventaSubtotal < ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[1];
    }
    ventaSubtotal = 0;
    for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor3[i];
    }
    if (ventaSubtotal < ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[2];
    }
    ventaSubtotal = 0; for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor4[i];
    }
    if (ventaSubtotal < ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[3];
    }
    ventaSubtotal = 0;
    for (let i = semanaMin; i < semanaMax; i++) {
        ventaSubtotal += vendedor5[i];
    }
    if (ventaSubtotal < ventaMes) {
        ventaMes = ventaSubtotal;
        vendedor = vendedores[4];
    }
    console.log("El peor vendedor del mes", mes, "es", vendedor, " con", ventaMes);
}
//Esta funcion muestra en pantalla al peor vendedor del trimestre.
function peorVendedorTrimestre() {
    let ventaTrimestre = 999999999999;
    let vendedor = "";
    let ventaSubtotal = 0;

    for (let i = 0; i < vendedor1.length; i++) {
        ventaSubtotal += vendedor1[i];
    }
    if (ventaSubtotal < ventaTrimestre) {
        ventaTrimestre = ventaSubtotal;
        vendedor = vendedores[0];
    }
    ventaSubtotal = 0;

    for (let i = 0; i < vendedor2.length; i++) {
        ventaSubtotal += vendedor2[i];
    }
    if (ventaSubtotal < ventaTrimestre) {
        ventaTrimestre = ventaSubtotal;
        vendedor = vendedores[1];
    }
    ventaSubtotal = 0;

    for (let i = 0; i < vendedor3.length; i++) {
        ventaSubtotal += vendedor3[i];
    }
    if (ventaSubtotal < ventaTrimestre) {
        ventaTrimestre = ventaSubtotal;
        vendedor = vendedores[2];
    }
    ventaSubtotal = 0;

    for (let i = 0; i < vendedor4.length; i++) {
        ventaSubtotal += vendedor4[i];
    }
    if (ventaSubtotal < ventaTrimestre) {
        ventaTrimestre = ventaSubtotal;
        vendedor = vendedores[3];
    }
    ventaSubtotal = 0;

    for (let i = 0; i < vendedor5.length; i++) {
        ventaSubtotal += vendedor5[i];
    }
    if (ventaSubtotal < ventaTrimestre) {
        ventaTrimestre = ventaSubtotal;
        vendedor = vendedores[4];
    }
    console.log("El peor vendedor del trimestre es", vendedor, " con", ventaTrimestre);
}

//Main
let userKey = readlineSync.questionInt("Bienvenido al servicio de gestion de ventas de la empresa. \n Ingrese el numero del servicio que desea usar: \n \
1- Para cada vendedor mostrar su nombre y su venta maxima indicando semana y mes de la misma. \n \
2- Para cada vendedor mostrar su nombre y su venta minima indicando semana y mes de la misma. \n \
3- Para cada vendedor mostrar su nombre y su promedio semanal de ventas. \n \
4- Para cada vendedor mostrar su nombre y su promedio mensual de ventas. \n \
5- Entre todos los vendedores calcular nombre y monto vendido del mejor vendedor de cada semana. \n \
6- Entre todos los vendedores calcular nombre y suma de montos vendidos del mejor vendedor de cada mes. \n \
7- Entre todos los vendedores calcular nombre y suma de montos vendidos del peor vendedor de cada mes. \n \
8- Entre todos los vendedores calcular nombre y suma de montos vendidos de peor vendedor del trimestre. \n ");

switch (userKey) {
    case 1:
        ventaMaxima(vendedor1, vendedores[0]);
        ventaMaxima(vendedor2, vendedores[1]);
        ventaMaxima(vendedor3, vendedores[2]);
        ventaMaxima(vendedor4, vendedores[3]);
        ventaMaxima(vendedor5, vendedores[4]);
        break;
    case 2:
        ventaMinima(vendedor1, vendedores[0]);
        ventaMinima(vendedor2, vendedores[1]);
        ventaMinima(vendedor3, vendedores[2]);
        ventaMinima(vendedor4, vendedores[3]);
        ventaMinima(vendedor5, vendedores[4]);
        break;
    case 3:
        promedioSemanal(vendedor1, vendedores[0]);
        promedioSemanal(vendedor2, vendedores[1]);
        promedioSemanal(vendedor3, vendedores[2]);
        promedioSemanal(vendedor4, vendedores[3]);
        promedioSemanal(vendedor5, vendedores[4]);
        break;
    case 4:
        promedioMensual(vendedor1, vendedores[0]);
        promedioMensual(vendedor2, vendedores[1]);
        promedioMensual(vendedor3, vendedores[2]);
        promedioMensual(vendedor4, vendedores[3]);
        promedioMensual(vendedor5, vendedores[4]);
        break;
    case 5:
        for (let i = 0; i < vendedor1.length; i++) {  //uso vendedor1 como podria haber usado cualquier otro vendedor, es solo para contar la cantidad de semanas
            mejorVendedorSemana(i);
        }
        break;
    case 6:
        for (let i = 1; i <= Math.ceil(vendedor1.length / 4); i++) {  //Math.ceil(vendedor1.length/4) me da la cantidad de meses
            mejorVendedorMes(i);
        }
        break;
    case 7:
        for (let i = 1; i <= Math.ceil(vendedor1.length / 4); i++) {   //Math.ceil(vendedor1.length/4) me da la cantidad de meses
            peorVendedorMes(i);
        }
        break;
    case 8:
        peorVendedorTrimestre();
        break;
    default:
        console.log("Numero invalido."); //En caso de ingresar otro numero que no sean los ofrecidos por el menu.
        break;
}