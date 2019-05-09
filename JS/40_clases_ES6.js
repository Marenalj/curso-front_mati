class Persona {

    constructor (nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    saludar (aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    }
}

person1 = altura = 175

console.log(person1)
person1.saludar()

class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nomber, edad)
        this.curso = curso
    }
    saludar(aQuien = 'amigo') {
        super.saludar(aQuien)
        console.log(`Estoy estudiando ${this.curso}`)
    }
}

alumno1 = new Alumno('Elena', 22, 'wordPress')
console.log(alumno1)
alumno1.saludar()