/***
 * se crean funciones flecha y vemos su uso
 */

let funcionFlecha_1 = () => {
    console.log( "saludos desde la función flecha uno");
}

funcionFlecha_1();

// =================================================== //

let funcionFlecha_2 = (valor_1) => {
    console.log ( valor_1 );
}

funcionFlecha_2( "Hola desde el valor 1, en la función flecha 2");


// =================================================== //

let funcionFlecha_3 = ( valor_2, valor_3) => {
    var suma = (valor_2 + valor_3);
    console.log( "La suma de los valores: " + suma);
}

funcionFlecha_3(10,20);