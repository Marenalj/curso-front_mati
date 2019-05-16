/**
 * Las clases siempre hacen referencia a sustantivos porque son pasivas, como personas, objetos... y a los métodos se les dará nombres de verbos porque son activos. Saludadro va a saludar. Saludar es el método. aQuien = ''    va a ser un string y se deja espacio vacío.
 */
 // Mis nodos del DOM van a ser Quién (la entrada de datos y los botones)

 export function main () {
    let aQuien = ''
    let msg = [`Hola`, `Adiós`]
/** Seleccionar nodos del DOM */
    let inNombre = document.querySelector('#in-nombre')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnDespedirse = document.querySelector('#btn-despedirse')
    let btnBorrar = document.querySelector('#btn-borrar')
    let output = document.querySelector('#output')

    /**Asignar manejadores a los nodos */
    btnSaludar.addEventListener('click', saludar.bind)
    btnDespedirse.addEventListener('click', despedirse)
    btnBorrar.addEventListener('click', btnBorrar)
} 
    
function saludar() {
    if (inNombre.value) {
        aQuien = '<b>' + inNombre.value + '</b>'
    //console.dir(this.msg[0] + this.aQuien)
    output.innerHTML = msg[0] + aQuien
    }
}
function despedirse () {
    if (inNombre.value) {
        Quien = '<b>' + inNombre.value + '</b>'
        //console.dir(this.output.innerHTML = this.mmsg[0] + this.aQuien)
        output.innerHTML = msg[1] + aQuien
    }
}
function borrar () {
    if (output.innerHTML = '')
    inNombre.value = ''
    }
 
