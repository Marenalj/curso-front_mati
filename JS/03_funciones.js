function suma(x, y) {
    let r = x + y
    return r
    //que es lo mismo que return x + y. Esta es una función pura porque opera con los valores que recibe desde fuera. son reutilizables
}
// las funciones se rellenan con parámetros, que es un valor (texto). La función mostrar no devuelve nada. Muestra algo. Mostrar texto no devuelve un valor. Es una función de interfaz.

function mostrar (texto) {
    console.log (texto)
}

// el ámbito de esta variable está dentro del ámbito del programa pero fuera de la función. Result devuelve el valor de la variable r.
let number1 = 23
let number2 = 20
// console.log(r) daría un error
let result = suma(number1, number2)
mostrar( result )

// No se cumple la separación de intereses o conceptos (separation of concerns). Las funciones deben hacer tan solo una cosa (hay una función que suma y revuelve una función). No es una función pura. No siempre va a hacer lo mismo en distintas plataformas. No hace siempre lo mismo.
function sumarMal (x, y) {
    let r = x + y
    console.log(r)
}

sumarMal(2,5)