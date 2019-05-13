// Ejemplo de 'pseudopropiedad' getter
// get es dame, dime
// set


let persona = {
  nombre: 'Pepe',
  nacim : new Date(1965, 8, 31),
  get edad () {
      return parseInt(((new Date() - this.nacim )/(1000*60*60*24*365)))
  },
  
  amigos: [],
  set nuevoAmigo(amigo) {
    this.amigos.push(amigo);
  }   
}

persona.nuevoAmigo = 'Antonio'
console.log(persona)
console.log(persona.edad)


/**
 * En Java, C#
 * 
 * class Persona {
 * private edad
 * }
 * 
 * p1 = new Personal()
 * p1.edad = 23 // Error porque la propiedad es privada
 * console.log(p1.edad) // Error porque no puedo verla tampoco
 * 
 */