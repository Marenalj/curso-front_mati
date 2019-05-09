const user1 = {
    nombre: 'Pepe',
    edad: 25,
    saludar: function(aQuien = 'amigo') {
        console.log('Hola ${aQuien}), soy ${this.nombre}')
    }
}

function User(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
}

Object.prototype.saludar = function(aQuien = 'amigo') {
    console.log(`Hola ${aQuien}), soy ${this.nombre}`)
}

function Mascota(nombre, especie, raza = '') {
    this.nombre = nombre
    this.especie = especie
    this.raza = raza
}

let user2 = new User('Elena', 23)
let user3 = new User('Ernesto', 30)
let mascota1 = new Mascota('César', 'Perro')
let mascota2 = new Mascota('Titus', 'gato', 'persa')

console.log(user1)
console.log(user2)
console.log(user3)
console.log(mascota1)
console.log(mascota2)

user1.saludar('Ernesto')
user2.saludar('Pepe')
user3.saludar(user2.nombre)

user1.saludar(mascota1.especie + ' ' + mascota1.nombre)
user1.saludar(mascota2.especie + ' ' + mascota2.nombre)
mascota1.saludar(user2.nombre + ' ' + mascota1.nombre)


/* function saludar(user) {
    console.log(`Hola, soy $(user)`)
}
saludar('Pepe') */

let aDatos = [2,4]
let aNombres = ['Pepe', 'Juan']


