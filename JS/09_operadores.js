// Asignación

let x = 23
// x = x + 1
x++
// x = x - 1
x--

// Aritméticos
let y = 2

let r = x + y // 25
r = x - y     // 21
r = x * y     // 46
r = x / y     // 11.5           Es la división entera
r = parseInt(x / y)  // 11      Con parseado
r = x % y     // 1              Es lo que sobra, el resto. Módulo/resto de x dividido por y
/* console.log(r) */

// Funciones de redondeo
/* r = Math.round()  // redondeo contable
r = Math.ceil()   // redondeo por debajo
r = Math.floor()  // redondeo por arriba */

// Operadores de asignación pq el resultado lo cargo sobre la variable que entra. Asignan y operan al mismo tiempo.
y = 2
y += 3
// y = y + 3
y -= 3
// y = y - 3
y *= 2
// y = y * 2
y /= 3
// y = y / 3
y %= 2
// y = y % 2


// Operador ternario porque tiene espacios.

let edad = 15
let i
if ( edad  >= 18 ) {
    i = 0
}  else {
    i = 1
}

  i = (edad >= 18) ? 0 : 1     
  console.log('Indice', i)


  edad = 25
  i = (edad >= 18) ? 0 : 1
  console.log('Indice', i)

// Objetos o notación JSON ( JavaScript order notation). nombre es la clave y 'Pepe' es el valor. Propiedad nombre y objeto 'Pepe'
//El primer elemento de una lista es el 0 (no el 1)
//Este let user 'Pepe' 23 es un objeto, nunca una lista. Aquí no hay índice. El orden que da el sistema es intranscendente. Puedes tener un array de objetos.
let user = {
    nombre: 'Pepe',
    edad: 23
}
console.log(user.nombre)

  // Arrays. Nunca tienen un tamaño predefinido. Siempre pueden crecer. Array tiene una propiedad lend. Lista de elementos.
  let numeros = [12, 45, 67]
  let usuarios = ['Pepe', 'Juan', 'Rosa', 'Maria']
  console.log(usuarios[1])
  usuarios[ usuarios.length ] = 'Ramon'
  usuarios[ usuarios.length ] = 'Carolina'
  usuarios[100] = 'Ernesto'
  console.log( usuarios.length )

  // Mensajes al usuario

  let mensajes = [
      'Bienvenido al casino', 
      'No se admiten menores de edad'
  ]
  console.log(mensajes[i])