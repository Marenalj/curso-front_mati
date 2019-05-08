let datos =  []
// let datos = new Array()   --> Array es la función constructora

datos = [1,2,3,5,7,9]
datos.push(45)

function numeroAlAzar100() {
    return parseInt(Math.random()*100)
}

/**
 * Crea un array de n aleatorios, como mínimo 1
 * 
 * function aleatorios
 * @param: limite: number
 * @returns: array[number] --->una lista
 * 
 * inicializo r con un array vacío
 * length es la longitud ('Hola' mide 4)
 * let cadena = 'Hola'               cadena.length  -----------> única propiedad del objeto Array 
 */

 function aleatorios(limite = 1) {
     let r = []       
     for (let i = 0; i < limite; i++) {
         r[i] = numeroAlAzar100()
     }
        
     return r
 } 
 console.log(aleatorios(12))

/**
 *  r.concat me devuelve un array pero no modifica el array original.
 * sort an array ---> ordena un array
 */

function prueba() {
    let datos = [1, 70, 7, 5, 9]
    let masDatos = [1, 4, 6]
    let arrayFinal = datos.concat(masDatos)
    console.log(datos)
    console.log(arrayFinal)

    // temp = datos  // copiar referencias (diferenciar de clonar un array)
    // Necesitamos CLONAR UN ARRAY --> function slice (inicio, fin) me devuelve una sección del array. Si me da un array me da un array nuevo. Se ordena sort pero no se ordena datos. slice 0 es un clon
    // y la function splice (inicio, cuanto, <valor, ) 
    /**Sort() ordena alfabéticamente los elementos de un array. Por defecto el orden es alfabético y ascendente (A ->)
     * reverse ordena en sentido contrario (inverso a su posición original)   */
    
     // temp = datos // copiar referencias
     // CLONAR UN ARRAY
    let temp = datos.slice()
    // temp.sort() Ordena alfabéticamente
    temp.sort((a, b) => a - b)  // ordena numéricamente
    console.clear()
    console.log('Esto es temp')
    console.log(temp)
    console.log('Esto es datos')
    console.log(datos)
}

prueba()

