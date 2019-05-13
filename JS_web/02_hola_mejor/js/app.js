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

function cuadrados(item){ return item * item} 



/**
 * Accesos al DOM (Document Object Model)
 * 
 */
 
 window.onload = function () {

    let datos = [1,2,3,4,5]
    console.log(datos.map( cuadrados))


document.querySelector('#btn-saludar').onclick = saludar
// como es un callback va sin paréntesis       saludar()  Q
// quiero que se asocie como manejador de evento (event handler)
// document.querySelector('button:nth-of-type(2)').onclick = despedirse
document.querySelector('#btn-despedirse').onclick = despedirse
document.querySelector('div-raton').onmouseover = onMouseOver
document.querySelector('div-raton').onmouseout = onMouseOut
}