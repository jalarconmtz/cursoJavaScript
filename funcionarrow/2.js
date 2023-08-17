
// cuando es una sola línea, no es necesario abrir el cuerpo de la función
let funcionFlecha_1 = () =>  console.log( "saludos desde la función flecha uno");

funcionFlecha_1();

// =====================================================0

const saludo = () => {
    return "Mensaje desde return desde la función saludo() ";
}

console.log( saludo());

// ===== funcion felcha con objetos ====

const funcionFlechaObjeto = () => ({
    'nombre' : "José",
    'apellido' : "Alarcon"
})

console.log( funcionFlechaObjeto() );