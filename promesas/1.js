// vamos a utilizar las promesas en javascript

let miPromesa =  new Promise(( resuelto, rechazado) => {
    valorDePromesa = true;
    if( valorDePromesa ) {
        resuelto ( "Se realizo con exito" );
    } else {
        rechazado( "Se rechazo" );
    }
});

//miPromesa.then( elValor => console.log( elValor), error => console.log ( error));
miPromesa.then( elValor => console.log( elValor)).catch( error => console.log ( error));

//se puede utlizar las promesas sin el cath, es decir solo pasarle el que "resuelto"

miPromesa2 = new Promise( resuleto => {
    setTimeout( () => resuleto ("Ssaudos desde una pronmesa con timeout"), 3000);
});

miPromesa2.then ( valor => console.log(valor));