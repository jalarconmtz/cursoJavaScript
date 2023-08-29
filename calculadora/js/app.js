
// primero obtenemos los valores introducidos

const forma = document.getElementById('forma');
let operandoA = forma['operandoA'];
let operandoB = forma['operandoB'];

function sumar(){    
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado de suma: ${resultado}`;
    //console.log(`Resultado: ${resultado}`);
}

function multiplicacion(){    
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado de multiplicación: ${resultado}`;
    //console.log(`Resultado: ${resultado}`);
}

function resta(){    
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado de resta: ${resultado}`;
    //console.log(`Resultado: ${resultado}`);
}

function division(){    
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números';
    document.getElementById('resultado').innerHTML = `Resultado de división: ${resultado}`;
    //console.log(`Resultado: ${resultado}`);
}