// fuyncionaes de tipo callback

function unMensaje( mensaje ) {
    console.log( mensaje );
}

function unaSuma( num1, num2, funcionCallBack) {
    let resultado = num1 + num2;
    funcionCallBack(resultado);
}

unaSuma( 3, 5, unMensaje);

// El uso de la función setTimeOut
function miFuncionConTiempo() {
    console.log( " Este mensaje se reproduce en 5 seg" );
}

setTimeout(miFuncionConTiempo, 5000);

// uso de la función setInterval, que hace que una función callback sea llamda cada cierto tiempo
let miReloj = () => {
    let hora = new Date();
    console.log(`${hora.getHours()}:${hora.getMinutes()}:${hora.getSeconds()}`);
}

setInterval(miReloj, 1000);