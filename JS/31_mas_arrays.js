let nombres = ['Pepe', 'Juan', 'Bernardette', 'Penélope', 'Eustaquio']

//Slice es una función inmutable (que no modifica el array original)
console.log(nombres.slice(3, 4))


// Splice es una función mutable (modifica el array original)

let newNombres = nombres.splice(1, 1)

console.clear()
console.log(nombres)
console.log(newNombres)

A -B - C -D

// Colas(heap) y pilas(stack) - todas estas funciones son mutables. Modifican los arrays. Stack y heap 
// (Filo--->último en entrar, primero en salir
// y Fifo -->primero en entrar, primero en salir )

nombres.push()     // - añade al final
nombres.pop()      // - quita al final


nombres.shift()    // - quitar el primero
nombres.unshift()  // - añadir al principio



nombres.push('Aurora')
// nombres[nombres.length] = 'Aurora'



let datos = [1, 70, 7, 5, 9]
let masDatos = [1, 4, 6]
datos.push(masDatos)
console.log(datos)