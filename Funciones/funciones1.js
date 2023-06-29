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

