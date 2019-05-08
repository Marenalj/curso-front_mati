let user = {
    nombre : 'Pepe',
    edad : 23,
    curso: 'Front'
}

console.log(user)

// let userString = "{nombre : 'Pepe', edad : 23, curso : 'Front'}"

let cadena = JSON.stringify(user)
console.log(cadena)
// el parse es como crear clon de objetos
console.log(JSON.parse(cadena))

let alumno1 = {
    nombre : 'Elena',
    edad : 23,
    curso: 'JavaScript'
}

alumno2 = JSON.parse(JSON.stringify(alumno1))
alumno2.nombre = 'Carlos'

alumno3 = Object.assign({}, alumno1)
alumno3.nombre = 'Raúl'

console.log(alumno1)
console.log(alumno2)
console.log(alumno3)