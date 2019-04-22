// En ES6 se utilizan let y const para declarar variables

let nombre    // declarar la variable
nombre = 'Pepe'   // inicializar la variable

let edad = 34   //declarar e inicializar


//Tipos de datos (lo que hay al otro lado del =)

// undefined
let data
mostrar (data)


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

// object ( colección de propiedades que se guardan juntas) (propiedad name con el nombre Pepe)
data =  { name: 'Pepe', age: 34}
mostrar (data)

// dentro del tipo object existe el subtipo array. Los array son valores. 
data = [23, 45, 78]
mostrar (data)

function mostrar(input) {
    console.loog('El dato recibido es', input)
    console.log('El tipo del dato es', typeof input)
    console.log('----------')
}



mostrar (mostrar)



// una variable adquiere un tipo cuando le damos un valor.

// las funciones para js las funciones son un subtipo de objeto. Por eso nos da [Function: mostrar]

function mostrar() {}
console.log(mostrar)
console.log(typeof mostrar)

