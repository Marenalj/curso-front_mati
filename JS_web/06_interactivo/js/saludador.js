/**
 * Las clases siempre hacen referencia a sustantivos porque son pasivas, como personas, objetos... y a los métodos se les dará nombres de verbos porque son activos. Saludadro va a saludar. Saludar es el método. aQuien = ''    va a ser un string y se deja espacio vacío.
 */

 /** Seleccionar nodos del DOM */
 // Mis nodos del DOM van a ser quién (la entrada de datos y los botones)

 export function main () {
    let aQuien = ''
    let msg = [`Hola`, `Adiós`]

    let inNombre = document.querySelector('#in-nombre')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnDespedirse = document.querySelector('#btn-despedirse')


    /**Asignar manejadores a los nodos */
    // btnSaludar.addEventListener('click'), saludar)

/*     btnSaludar.addEventListener('click', () => {
        aQuien = inNombre.value
        console.log(msg[0] + aQuien)
    )}
 */
 
    btnSaludar.addEventListener('click', saludar)
    btnDespedirse.addEventListener('click', despedirse)
 
    
function saludar() {
    aQuien = inNombre.value
    //console.dir(inNombre)
    console.log(msg[0] + aQuien)
}
function despedirse () {
    aQuien = inNombre.value
    console.log(msg[1] + aQuien)
    }
}
