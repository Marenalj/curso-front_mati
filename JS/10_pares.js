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
  * Genera excepciones si el parámetro no es numérico
  *   2  - se genera si el valor es un número decimal
  *   3  - si el valor  no es un número
  */


/** Requisitos de la función
 * Function calculaQueEs
 * @param num: number
 * @returns: number
 * Posibles valores
 *    0 pares
 *    1 impares
 *    2 números decimales
 *    3 no números (NaM)
 */
function calulaQueEs(num) {
    let r
    if (isNaN(num)) || Array.isArray(num) || typeof num === 'boolean' ) {
        // num === true || num === false          ¿es boolean?
        // no es un número
       r = 3
    }  else if (parseInt(num) != num) {
       // es un número decimal
       r = 2
    }  else {
        r = num % 2
    }
    return r
}

function isPar(num) {
    if (isNaN(num) || Array.isArray(num) || typeof num === 'boolean') {
        throw 3 //'El valor no es un número'
    }   else if (parseInt(num) !=num) {
        throw 2 'El valor es un número decimal'
    }
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
function mostrar(num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`

        i = 0
    } 
    */  let i
    try {
        i = (isPar(num)) ? 0 : 1
   } catch (error) {
       i = error
   }
    console.log(mensajes[i])
  }

/**
 * Function mostrar2
 * @param code: number // será 0 si es par y 1 si es impar
 * @param num: number
 * @returns: void
 */

let number = 0
number = 23
number = 28 
number = 'Pepe'
number = {}
number = []
number = true
number = false
number = 3,5

mostrar(number)

//////////////////////////////////
///Versión final

function mostrar2 (code, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`,    
        `El número ${num} es decimal, que no es ni par ni impar`,
        `El número ${num} no es un número`,  
    ]
    console.log(mensajes[code])
}

let numero = 0
numero = 25
numero = 30
numero = "Pepe"
numero = 3.3
numero = {}
numero = []
numero = true
numero = true

// console.log(typeof numero === 'boolean')

mostrar2(calculaQueEs(numero), numero)
// mostrar2(numero % 2, numero)


/* control de errores. Nos generamos nuestros propios errores
try {
    // noExiste()
    let x = 3
    throw "probando un error"
} catch (error) {
    console.log('Lo siento, ha habido un error, error')
}
 */


//// La versión más corta
//let mensajes = [`El número $(num) es par`, `El número $(num) es impar`]
//let numero = 25
//console.log(mensajes[num % 2])
