function suma(x, y) {
    let r = x + y
    return r
}

// las funciones se rellenan con parámetros, que es un valor (texto). La función mostrar no devuelve nada. Muestra algo.

function mostrar(texto) {
    console.log(texto)
}

// el ámbito de esta variable está dentro del ámbito del programa pero fuera de la función. Result devuelve el valor de la variable r.
let number1 = 23
let number2 = 20
// console.log(r) daría un error
let result = suma(number1, number2)
mostrar( result )

// No se cumple la separación de intereses o conceptos (separation of concerns). Las funciones deben hacer tan solo una cosa (hay una función que suma y revuelve una función).
function sumarMal (x, y) {
    let r = x + y
    console.log(r)
}

sumarMal(2,5)