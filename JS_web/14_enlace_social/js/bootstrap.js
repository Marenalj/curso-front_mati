export function controller () {
    
    // Procedimiento habitual

    // 1. Referencia a los Nodos del DOM que se interesan

    const aNodosEnlaces = document.querySelectorAll('a')
    console.log(aNodosEnlaces)

    // 2. Definir los manejadores de eventos

    aNodosEnlaces.forEach( item => item.addEventListener('clic', onClick))

    // Implementar los manejadores de eventos

    function onClick () {
        
    }
}