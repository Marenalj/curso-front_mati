// es una clase sin constructor.
interface Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    comer: () => void   // método void. Así se declara el tipo de las funciones en TS
}

class Perro implements Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    colorPiel: string
    comer() {}

}

class Gato implements Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    comer() {}

}

let a1: Animal   /// la variable a1 es de tipo Animal
let p1: Perro
let g1: Gato;

a1 = new Perro()   
p1 = new Perro()
// g1 = new Perro()