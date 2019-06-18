{
interface Animal {
    nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
}

interface Herbívoro extends Animal {
    peso: number
}

class Caballo implements Herbívoro {
/*     nombre: string
    edad: number
    isDomestic: boolean
    tipo: string
    peso: Number
 
     constructor(nombre, edad, isDomestic, tipo, peso) {
        this.nombre = nombre
        this.edad = edad
        this.isDomestic = isDomestic
        this.tipo = tipo
        this.peso = number
    } */

    constructor(
        public nombre: String,
        public edad: number,
        public isDomestic: boolean,
        public tipo: string,
        public peso: number) {}
    }

    let c1 = new Caballo('Rufo', 2, true, 'Arabe', 300)
    console.log(c1)
}