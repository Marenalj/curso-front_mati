//Existen los operadores aritméticos + - * / % (módulo)
// El casting es un proceso temporal de modificación del tipo durante una operación. No hay cambio del tipo de variable. el typeof siempre va a ser string. z es un string. JS siempre va a convertir z a number.

let x = 22
let nombre = 'Pepe'
let z = '2'

// let division = 10 / 2
let division = x / z

console.log(division)
console.log(typeof z)

division = x / nombre
console.log(division)
console.log (0 / 0)
console.log (-1 / 0)

/* NaN equivale al concepto matemático de indeterminación not a number. Cualquier operación que no se puede asignar a valor es un NaN
 0 / n = 0
n / 0 = Infinito
0 / 0 = NaN
 */

 // Si quiero evitar indeterminaciones, debo validar los datos (comprobar que el dato con el que voy a operar cumpla una serie de requisitos)
// Me va a devolver true si la función es NaN
function dividir (x,y) {

    if (isNaN(x) || isNaN(y) ) {
        console.log('Operadores inválidos')
        return
    }
    console.log('La división da', x / y, '€')
}

dividir(x,z)
dividir(x,nombre)
// el operador + es un operador sobrecargado. La concatenación de cadenas tiene preferencia. Por eso da 222 (22 + 2). cuando sumo tengo que forzar yo el casting y hay tres maneras de hacerlo.
// Si hay strings tiene preferencia la concatenación.
console.log(x + z)

//para evitarlo tenemos que forzar el casting. parseInt para enteros y parseFloat para decimales.

console.log( parseFloat(x) + parseFloat(z) )
console.log(Number(x) + Number(z) )
console.log (+x + +z)

console.log(typeof z)