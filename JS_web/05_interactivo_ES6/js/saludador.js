/**
 * Las clases siempre hacen referencia a sustantivos porque son pasivas, como personas, objetos... y a los métodos se les dará nombres de verbos porque son activos. Saludadro va a saludar. Saludar es el método. aQuien = ''    va a ser un string y se deja espacio vacío.
 */

 /** Seleccionar nodos del DOM */
 // Mis nodos del DOM van a ser quién (la entrada de datos y los botones)

    export class Saludador {
        constructor() {
            this.aQuien = ''
            this.msg = [`Hola`, `Adiós`]

    this.inNombre = document.querySelector('#in-nombre')
    this.btnSaludar = document.querySelector('#btn-saludar')
    this.btnDespedirse = document.querySelector('#btn-despedirse')

/**Asignar manejadores a los nodos */
    this.btnSaludar.addEventListener('click', this.saludar.bind(this))
    this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
}

saludar() {
    this.aQuien = this.inNombre.value
    //console.dir(this.inNombre)
    console.log(this.msg[0] + this.aQuien)
}
despedirse () {
    this.aQuien = this.inNombre.value
    //console.dir()
    console.log(this.msg[1] + this.aQuien)
    }
}