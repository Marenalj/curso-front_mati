/**
 * Notación literal o JSON
 * 
 */

// user1 = new Usuario
// user2 = new Usuario

let user1 = {
    nombre: 'Pepe',
    edad: 24,
    isAlumno: true,
    direccion: {
        calle: 'Pez',
        num: '3',
        población: 'Madrid'
    },
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`)
    },
    altura: 179
}

// palabra reservada this. Dentro de los métodos una función es intercambiable.

// let usser1 = new Object()
// user1.nombre = 'Pepe'

let user2 = {
    nombre: 'Rosa', 
    edad: 27,
    curso: 'Front'
}

user1.nombre = 'Mati'
user1.curso = 'Back'
// a estas funciones se les llama métodos (función saludar       saludar: function () {console.log(`Hola, soy ${this.nombre}`)    }  )
// sirven para tener bloques de información estructurada

user1.saludar()