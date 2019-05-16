export function controller() {

    console.log('Cargado el controller')

    /**Nodos del DOM */
    let btnMostrar  = document.querySelector('#btn-mostrar')
    let btnSaludar = document.querySelector('#btn-saludar')

    /**Manejadores de eventos */

    let btnMostrar = document.querySelector('#btn-mostrar')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnLeer = document.querySelector('#btn-leer')

    function mostrar() {
        /*     setTimeout(saludar,1000)

    function saludar() {
        console.log.saludar('Hola amigo')
    } */

    setTimeout(()=>console.log('Item 1'), 0)

    console.log('Item 2')

    setTimeout(()=>console.log('Item 3'),2000)

    console.log('Item 4')

    setTimeout(()=>console.log('Item 5'),1000)

// para que funcione mostrarDatos funcionará sólo si lo meto en el setTimeout
}
function saludar() {
    console.log('Hola amigo')
}
function leerDatos() {
    let i
    //lectura síncrona: se supone que accedemos a un servidor y eso no existe
    setTimeout(()=> {
        i = '33dsdsdsdsd'
        //mostrarDatos()
    }, 1000);
    
    //lectura asíncrona
    /* setTimeout(() => {
        i = 33
        mostrarDatos()
    }, 1000); */

    
    //mostrarDatos()  // el resultado sería undefined

    function mostrarDatos(){
        console.log(i)

    }
  }
}   



// aquí saludar no lleva paréntesis porque es un callback. Te paso la función entera para que la ejecute dentro de  1 segundo
/*     setTimeout(saludar,1000)

    function saludar() {
        console.log.saludar('Hola amigo')
    } */
// Lo comentado anteriormente es igual que el setTimeout siguiente
// como es función con nombre la reduzco con el setTimeout

// el orden para ejecutarse en este caso sería 2, 4, 1, 5, 3  // el 1 es asíncrono y el 2 y el 4 son síncrono. Si tienen el mismo tiempo dos líneas, se ejecuta primero el que va en una línea superior.
    setTimeout(()=>console.log('Item 1'), 0)

    console.log('Item 2')

    setTimeout(()=>console.log('Item 3'),2000)

    console.log('Item 4')

    setTimeout(()=>console.log('Item 5'),1000)


}