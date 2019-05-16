// Esto es un módulo de ES6 porque exporta algo

export function controller () {

     console.log('Controller cargado')
 
     /**Declarar variables */
     let isVisibleDiv = false
     let msg = ['[...mostrar menos]', '[...mostrar más]']

     /** Nodos del DOM */
     let nodos = {
        btnCambiar: document.querySelector('#btn-cambiar'),
        divHide: document.querySelector('#div-hide')
    }
    nodos.btnCambiar.innerHTML = msg[1]

    
/** Asignar manejadores de eventos */
nodos.btnCambiar.addEventListener('click', cambiar)

// la función cambiar es un toggle(cambiar(traducción literal-->conmutador de palanca))
function cambiar() {
    nodos.btnCambiar.innerHTML = msg[isVisibleDiv ? 1 : 0]
    nodos.divHide.classList.toggle('hide')
    isVisibleDiv = !isVisibleDiv
   }
}