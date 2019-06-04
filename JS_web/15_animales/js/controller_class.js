export class Controller {

    constructor(){
        console.log('Instanciado el controller')


        this.aAnimales = []

        // 1. Nodos del DOM

        this.inAnimal = document.querySelector('#inAnimal')
        this.btnAdd = document.querySelector('#btnAdd')
        this.btnClear = document.querySelector('#btnClear')
        this.aEraser = document.querySelectorAll('.borrar')
        this.lista = document.querySelector('.lista')
        this.tabla = document.querySelector('.tabla')

        console.log(this.aEraser)

        // 2. Manejadores de eventos

        this.inAnimal.addEventListener('change', this.addAnimal.blind(this))
        this.btnAdd.addEventListener('click', this.addAnimal.blind(this))
        this.btnClear.addEventListener('click', this.clearAnimales.bind(this))
        this.aEraser.forEach( item => item.addEventListener('click', this.borrarAnimal.bind(this)))

        // presentar datos inicialmente
        this.aAnimales = this.readAnimales()
        this.crearTabla()
        this.crearLista()

        this.aEraser = document.querySelectorAll(',borrar')
        this.aEraser.forEach( item =>)
    }

    
    addAnimal() {
        if (this.inAnimal.value) {
            this.aAnimales.push(this.inAnimal.value.toLowerCase)
            this.inAnimal.value = ''
        }
        console.log(this.aAnimales)
        this.saveAnimales()
        this.crearLista()
        this.crearTabla()

    }
    clearAnimales() {
        this.aAnimales = []
        this.crearTabla()
        this.crearLista()
    }

    borrarAnimal(ev) {
        console.log(ev)
    }


    // así se crean los elementos iterativos a partir de un array

    crearLista() {
        let lista = '<ul>'
        this.aAnimales.forEach(item => lista += `<ul>${item}</li>`)
        lista = '</ul>'
        this.lista.innerHTML = lista
    }
    crearTabla() {
        let tabla = '<table>'
        this.aAnimales.forEach( item => tabla += `<tr><td>$(item)</td></tr>`)
        tabla += '</table>'
        this.tabla.innerHTML = tabla
    }
    saveStorageAnimales() {
        window.localStorage.setItem('animales', JSON.stringify(this.aAnimales))
    }
    readStorageAnimales() {
        let read = []
        let cadena = window.localStorage.getItem('animales')
        console.log(cadena)
        if (cadena) {
            read = []
        }
        return read
    }
    removeStorageAnimales() {
        window.localStorage.removeItem('')

    }
}