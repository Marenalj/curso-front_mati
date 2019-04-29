'mode strict'
/* 
console.log(suma(4, 6))
console.log(resta(6, 3))
 */

/**
 * 
 * Función declarada
 * Existe "hoisting" (alzamiento)--> el motor de js funciona en dos pasadas. En la primera, detecta todas las function que existan y las eleva al principio. Pero esto es una variable con let y estas no se elevan
 */

function suma(x = 0, y = 0) {
    return x + y
}


/**
 * Función asignada
 * 
 * Una función es, sorprendentemente, un dato de tipo objeto (hace de JS un lenguaje funcional porque considera a las funciones como elementos intrínsecos del lenguaje, como datos)
 * 
 * function () {}   es una función anónima
 */

let obj = {}

let resta = function (x = 0, y = 0) {
    return x - y
}


/**
 * En ES6 hay un nuevo tipo de funciones que se llaman arrow (0>) function
 */

 /* let producto = function (x = 1, y = 1) {
     return x * y
 } */

 // let producto = (x = 1, y = 1) => (return x * y)
 let producto = (x = 1, y = 1) => x * y

 let cuadrado = x  => x*x 


console.log(suma(4, 6))
console.log(resta(6, 3))
console.log(producto(4, 7))
console.log(cuadrado(6))