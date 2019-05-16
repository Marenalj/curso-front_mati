/**
 * 
 * Las clases siempre hacen referencia a los sustantivos porque son pasivas, como personas, objetos ... y los métodos para los nombres de verbos porque son activos. Saludadro va a saludar. Saludar es el método. aQuien = '' va a ser un string y se deja espacio vacío.
 * 
 */
/**
 * Seleccionar nodos del DOM
 */
 // Mis nodos del DOM van a ser quiénes (la entrada de datos y los botones)



export function main () {

    let aQuien = ''
    let msg = [`Hola `, `Adios `]

    /** Seleccionar nodos del DOM */
    let inNombre = document.querySelector('#in-nombre')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnDespedirse = document.querySelector('#btn-despedirse')
    let btnBorrar = document.querySelector('#btn-borrar')
    let output = document.querySelector('#output')
    
    /**Asignar manejadores a los nodos */
    btnSaludar.addEventListener('click', saludar)
    /* btnSaludar.addEventListener('click', () => {
            aQuien = inNombre.value
            console.log(msg[0] + aQuien)
    }) */
    btnDespedirse.addEventListener('click', despedirse)
    btnBorrar.addEventListener('click', borrar)

    function saludar () {
        if (inNombre.value) {
            aQuien = '<b>' + inNombre.value + '</b>'
            // console.log(msg[0] + aQuien)
            output.innerHTML = msg[0] + aQuien
        }
    }

    function despedirse() {
        if (inNombre.value) {
            aQuien = '<b>' + inNombre.value + '</b>'
            // console.log(msg[1] + aQuien)
            output.innerHTML = msg[1] + aQuien 
        }
    }

    function borrar() {
        output.innerHTML = ''
        inNombre.value = ''
    }
}