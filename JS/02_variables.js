// En ES6 se utilizan let y const para declarar variables

let nombre    // declarar la variable
nombre = 'Pepe'   // inicializar la variable

let edad = 34   //declarar e inicializar


//Tipos de datos (lo que hay al otro lado del =)

// undefined
let data
console.log(data)
console.log(typeof data)


//strings
data = 'Hola amigos'
console.log(data)
console.log(typeof data)

// numbers
data = 35
console.log(data)
console.log(typeof data)    

// booleans
data = true
data = false
console.log(data)
console.log(typeof data)

// object ( colección de propiedades que se guardan juntas) (propiedad name con el nombre Pepe)
data =  { name: 'Pepe', age: 34}
console.log(data)
console.log(typeof data)

// dentro del tipo object existe el subtipo array. Los array son valores. 
data = [23, 45, 78]
console.log(data)
console.log(typeof data)

// una variable adquiere un tipo cuando le damos un valor.

// las funciones para js las funciones son un subtipo de objeto. Por eso nos da [Function: mostrar]

function mostrar() {}
console.log(mostrar)
console.log(typeof mostrar)

