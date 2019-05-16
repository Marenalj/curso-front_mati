export function controller() {

    console.log('Cargado el controller')

    /**Nodos del DOM */
const btnSaludar = document.querySelector('#btn-saludar')
const btnHell = document.querySelector('#btn-hell')
    
    /**Manejadores de eventos, que son asíncronos */

    btnSaludar.addEventListener('click', onSaludar)
    btnHell.addEventListener('click', onHell)

function msgAfterTimeout (msg, nombre, tiempo, cb) {
    setTimeout(function () {
        cb(msg, nombre);
    }, tiempo);
  };

 function onSaludar() {
    msgAfterTimeout ('Hola', 'Pepito', 2000, (msg, nombre)=>{
        console.log(msg, nombre)})
    msgAfterTimeout ('Hola qué tal', 'Juanito', 2000, (msg, nombre)=>{
        document.querySelector ('#output').innerHTML = msg + ' ' + nombre.toUpperCase()
  })
 }

 function onHell() {
    msgAfterTimeout('Juanito', 'Pepito', 3500, (msg, nombre) => {
        let saludo = ('Hola ${nombre}!')
        let quienSoy = msg
        console.log(saludo)
        msgAfterTimeout (msg, saludo, 500, (quienSoy, saludo) => {
            console.log(`${saludo}, soy ${quienSoy}`)
        })
    }) 
 
 }     
}