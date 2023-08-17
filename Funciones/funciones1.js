/***
 * Creacion de una función sencilla, junto con su llamada
 */


function saludos() {
    console.log("Saludos desde la funcion llamada saludos");
}

saludos();  // output:  Saludos desde la funcion llamada saludos

/** ====================================================== 
 * ======================================================== */

//  creación de una función con parametros
function miFuncUnParametro( nombre ) {
    console.log("Hola " + nombre);
}

miFuncUnParametro('José'); // output:  Hola José

function miFuncionDosParamtros( nombre, edad) {
    console.log("Me llamo " + nombre + " y tengo " + edad + " años");
}

miFuncionDosParamtros( "josé", 45); // Me llamo josé y tengo 45 años

/****===================================================
 * ===================================================== */

// función que regresa dato
function regresoNombre() {
    return "Me llamo José ...";
}

regresoNombre();

function nombre( nombre ) {
    return nombre;
}

function apPaterno( apPaterno ) {
    return apPaterno;
}

function edad( edad) {
    return edad;
}

// se crean las varibles para guardar la información
let miNombre = nombre('José');
let miApPat = apPaterno('Alarcón');
let miEdad = edad(40);

console.log( miNombre + " " + miApPat + ", edad: " +miEdad); // José Alarcón, edad: 40

/*** ========================================================================= 
 * =========================================================================== */

// funciones anónimas. Soin funciones, que en lugar de devolver un string, booleano, et.
// puede regresar una función 

 let regresaFuncion = function() {
    console.log('Esta es una función anónima');
 }

 regresaFuncion(); //Esta es una función anónima




