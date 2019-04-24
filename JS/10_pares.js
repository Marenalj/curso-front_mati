// Tipos de Strings
/* let cadena = 'Hola Mundo'
cadena = "Hola Mundo"
// ES6 aparecen los template string (reconoce formatos como retorno de carro)
cadena = `
Hola
Mundo
`

let user = 'Pepe'
cadena = 'Hola' + user + 'qué tal estás'
cadena = `Hola ${user}, qué tal estás`

console.log(cadena)
 */



/*   let resultado
     if (!num % 2) {
         // número par
         r = 2
     } else {
         // número impar
         r = 1
     }
     return r       */

 /**
  * Function isPar
  * @param num: number
  * @returns: boolean
  * Posibles valores
  *    true pares
  *    false impar
  */

/**
 * Programa que calcula si un número es par o impar
 * y muestra el resultado en consola
 * 
 */
/**
 * Function calculaQueEs
 * @param num: number
 * @returns: number
 * Posibles valores
 *    0 pares
 *    1 impares
 */
function calulaQueEs(num) {
    return num % 2
}

function isPar(num){
    return !(num % 2)
}

function isImpar(num) {
    return !!(num %2)
}
/**
 * Function mostrar
 * @param isPar: boolean // será true si el número es PAR
 * @param isImpar: number
 * @eturn: void
 */

/* function mostrar(isPar, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`
    ]
    if (isPar) {
       console.log(mensajes[0])
    } else {
       console.log(mensajes[1])
    }
}
 */
function mostrar(isPar, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`
    ]
    /* let i = 1
    if (isPar) {
        i = 0
    } */
    let i = (isPar) ? 0 : 1
    console.log(mensajes[i])
    }
/**
 * Function mostrar2
 * @param code: number // será 0 si es par y 1 si es impar
 * @param num: number
 * @returns: void
 */


let number = 23
number = 28 
mostrar(isPar(number), number)

//////////////////////////////////
///Versión final

function mostrar2 (code, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`      
    ]
    console.log(mensajes[code])
}

let numero = 25
numero = 30
numero = "Pepe"
mostrar2(calculaQueEs(number), number)

console.log




//// La versión más corta
//let mensajes = [`El número $(num) es par`, `El número $(num) es impar`]
//let numero = 25
//console.log(mensajes[num % 2])
