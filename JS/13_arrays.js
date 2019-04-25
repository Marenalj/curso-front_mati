let datos = [1, 2, 4, 6]
let amigos = ['Pepe', 'Rosa', 'Juan']
let deTodo = [1, 45, 'Pedro', 'Gato', true, {nombre: 'Ramón', edad: 23}]

console.log(deTodo)

for (let i = 0; i < amigos.length; i++) {
    const element = amigos[i];
    console.log(`Hola ${element}`)
    
}

// Programa que compruebe si un nombre determinado ha sido usado alguna vez por un Rey de España.

/**
 * función isRey
 * @name : string
 * @return : boolean
 */

function isRey(name) {
    let reyes = ['Fernando', 'Isabel', 'Carlos', 'Felipe', 'Luis', 'José', 'Amadeo', 'Alfonso', 'Juan Carlos']
    for (let i = 0; i < reyes.length; i++) {
        const rey = reyes[i];
        if (rey.toLowerCase() === name.toLowerCase()) {
            return true
        }
        return false
    }
}
 
/**
 * Function mostrar
 * @param name: string
 * @return: void
 */

function mostrar(name) {
    let i = 1
   let mensajes = [
   `El nombre ${name} ha sido usado por un rey de España`,
   `Ningún rey de España se ha llamado ${name}`

]
if (isRey(name)) {
     i = 0
}
console.log(mensajes[i])
}
let name = 'Carlos'
// name = 'Ernesto'
mostrar(name)
