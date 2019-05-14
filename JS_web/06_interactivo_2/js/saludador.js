/**
 * Las clases siempre hacen referencia a sustantivos porque son pasivas, como personas, objetos... y a los métodos se les dará nombres de verbos porque son activos. Saludadro va a saludar. Saludar es el método. aQuien = ''    va a ser un string y se deja espacio vacío.
 */

 /** Seleccionar nodos del DOM */
 // Mis nodos del DOM van a ser quién (la entrada de datos y los botones)

 export class saludador {
    constructor() {
    this.aQuien = ''
    this.msg = [`Hola`, `Adiós`]

    thid.inNombre = document.querySelector('#in-nombre')
    this.btnSaludar = document.querySelector('#btn-saludar')
    this.btnDespedirse = document.querySelector('#btn-despedirse')
    this.btnBorrar = document.querySelector('#btn-borrar')
    this.output = document.querySelector('#output')


    /**Asignar manejadores a los nodos */
    this.btnSaludar.addEventListener('click', this.saludar.bind(this))
    this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
    this.btnBorrar.addEventListener('click', this.btnBorrar.bind(this))
} 
    
saludar() {
    if (this.inNombre.value) {
        this.aQuien = '<b>' + this.inNombre.value + '</b>'
    //console.dir(this.msg[0] + this.aQuien)
    this.output.innerHTML = this.msg[0] + this.aQuien
    }
}
despedirse () {
    if (this.inNombre.value) {
        this.aQuien = '<b>' + this.inNombre.value + '</b>'
        //console.dir(this.output.innerHTML = this.mmsg[0] + this.aQuien)
        this.output.innerHTML = this.MSG[1] + this.aQuien
    }
}

borrar () {
    this.output.innerHTML = ''
    this.inNombre.value = ''
    }
 }
