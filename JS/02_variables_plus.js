// En ES6 se utilizan let y const para declarar variables

let nombre    // declarar la variable. Es una variable undefined pq no tiene valor todavía.
nombre = 'Pepe'   // inicializar la variable

let edad = 34   //declarar e inicializar. En JS todo se guarda en modo float. Guarda 3400.


//Tipos de datos (lo que hay al otro lado del =)
/* En otros lenguajes hay declaración EXPLÍCITA y OBLIGATORIA de tipos 
int x -> variable x de tipo entero sin valor. En JS los números siempre son NUMBERS.

En Js los tipos son:
- débiles: no se declaran explícitamente; son IMPLÍCITOS al valor. (x=23 débil y estático)
- dinámicos: pueden cambiar

*/


// undefined (creamos una variable data. let data es de tipo undefined porque no tiene tipo)
let data
mostrar (data)

// A - DATAS Primitivos
//strings
data = 'Hola amigos'
mostrar (data)

// numbers
data = 35
mostrar (data)   

// booleans
data = true
data = false
mostrar (data)
// B - Datos referenciados
// object (Colección de propiedades que se guardan juntas) (propiedad name con el nombre Pepe)
data =  { name: 'Pepe', age: 34}
mostrar (data)

// Object tipo array. Dentro del tipo object existe el subtipo array. Los ARRAY son valores. 
data = [23, 45, 78]
mostrar (data)

function mostrar(input) {
    console.log('El dato recibido es', input)
    console.log('El tipo del dato es', typeof input)
    console.log('----------')
}
/* let mostrar = function (input) {
    console.log('El dato recibido es', input)
    console.log('El tipo del dato es', typeof input)
    console.log('-------')
} */

mostrar (mostrar)

// una variable adquiere un tipo cuando le damos un valor.

// las funciones para js las funciones son un subtipo de objeto. Por eso nos da [Function: mostrar]

function mostrar() {}

console.log(mostrar)
console.log(typeof mostrar)

