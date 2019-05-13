/* Funciones manejadoras de eventos (Event Handler) */

function saludar () {
        console.log('Hola desde una función en un fichero JS')
    } 

function despedirse () {
    console.log('Adiós desde una función en un fichero JS')
}

// Estas funciones son callback manejadoras de evento que el sistema las ejecuta cuando se produzca el evento
function onMouseOver() {
    console.log('El ratón entró')
}
function onMouseOut() {
    console.log('El ratón salió')
}

function cuadrados(item){return item * item} 

let datos = [1,2,3,4,5]
console.log(datos.map(cuadrados))
datos.map(item => item * item)  //crearía el nuevo array