// Un controller lo usamos para: 
// 1. recoger los controler del node que vamos a manejar;
// 2. definir los manejadores
// 3. implementar esas funciones manejadoras

export function controller(ev) {

    // Experimentos
    console.log('Cargado el controller')
    console.dir()

    const oPerson = {nombre: 'Pepe', edad: 22}
    console.dir(oPerson)

    const nodoDocument = document
    console.dir(nodoDocument)

    // html>body>section:nth-child(2)>div:nth-child(2)>input

    nodoDocument.children[0].children[1].children[1].children[1].children[1].value = 'Pepe'

    document.querySelector('#inNombre').value = 'Juana'

    document.querySelector('#divNombre').children[1].value = 'Ernesto'

    document.querySelector('#inNombre').value = ''
  

    // Procedimiento habitual

    // 1. Referencia a los Nodos del DOM que nos interesan

    /* const inNombre = document.querySelector('#inNombre')
    const outSaludo = document.querySelector('#outSaludo') */

    const nodos = {
        inNombre: document.querySelector('#inNombre'),
        inCorreo: document.querySelector('#inCorreo'),
        btnSaludar: document.querySelector('#btnSaludar'),
        btnBorrar: document.querySelector('#btnBorrar'),
        outSaludo: document.querySelector('#outSaludar')
    }
   
    console.dir(inNombre)
    console.dir(outSaludo)
    
    // 2. Definir los manejadores de eventos

    nodos.inNombre.addEventListener('input', onInputSaludar)
    // nodos.inNombre.addEventListener('change', onChangeSaludar)
    nodos.inNombre.addEventListener('change', onSaludar)
    // nodos.btnSaludar.addEventListener('click', onClick)
    nodos.btnSaludar.addEventListener('clic', onSaludar)
    nodos.btnBorrar.addEventListener('click', onSaludar)
    

    // 3. Implementar los manejadores de eventos que hemos definido anteriormente. 

    function onInputSaludar() {
        console.log('input', nodos.inNombre, value)
    /*    if (nodos.inNombre, value) {
            outSaludo.innerHTML = ' Hola $(inNombre.value)'
        } else {
            nodos.outSaludo.innerHTML = ''
        } */
    }
    function onChangeSaludar() {
    /*     console.log('change', nodos.inNombre.value)
        if (nodos.inNombre, value) {
            outSaludo.innerHTML = ' Hola $(inNombre.value)'
        } else {
            nodos.outSaludo.innerHTML = ''
        } */
    function onClickSaludar() {
     /*    if (nodos.inNombre.value) {
            nodos.outSaludo.innerHTML = ' Hola $(nodos.inNombre.value)'
        } else {
            nodos.outSaludo.innerHTML = ''
        }
        } */

    function onSaludar(ev) {
        console.dir(ev)
        let msg = ''
        if (nodos.inNombre.value) {
            msg = ' Hola ${nodos.inNombre.value}'
        } else {
            msg = ''
        }
        switch (ev.type) {
            case 'change':
                msg += ' has cambiado de input'
                break;
           
            case 'click':
                if (ev.target.id == 'btnSaludar') {
                    msg += ' has pulsado el botón "Saludar"'
                } else if (ev.target.id = 'btnBorrar') {
                    msg += ' has pulsado el botón "Borrar"'
                    nodos.inNombre.value = ''
                }
                break;
        }
        nodos.outSaludo.innerHTML = msg
    }
    }
}