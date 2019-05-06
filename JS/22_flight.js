
    // let flight = new Object
    let flight = {
    airoline: 'Oceanic',
    number: '815',
    departure: {
        claveIATA: 'SYD',
        time: '2004-09-22 14:55',
       /*  place: {
            ciudad: 'Sydney',
            país: 'Australia'
        } */
        ciudad: 'Sydney',
    },
    arrival: {
        claveIATA: 'LAX',
        time: '2004-09-23 10:42',
        ciudad: 'Los Ángeles',
    }
}

let datos = 'departure'
// let datos = 'arrival'

// Notación por puntos
// console.log(flight.number)
// console.log(flight.datos)

// Notación por corchetes, que permite utilizar variables para los nombres de propiedades.
console.log(flight['number'])
console.log(flight[datos])

  
let users = ['Pepe', 'Rosa', 'Juan', 'María']
console.log(users)

/* {
const user = users[0];
console.log('Hola ${user}')
} 
Esto cuatro veces es lo mismo que el for */


for ( let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(`Hola ${user}`)
}

/* // para recorrer objetos
for (const key in flight) {
        const element = flight[key];

         if (typeof element != 'object') {
            console.log(`La propiedad ${key} vale ${element}`)
         } else {
            for (const key in element) {
                    const item = element[key];
                    console.log(`La propiedad ${key} vale ${item}`)
                }
         }
} */
    

function mostrarObjeto(obj) {
    for (const key in obj) {
        const element = obj[key];
        if (typeof element !='object') {
            console.log(`La propiedad ${key} vale ${element}`)
        }
        else {
            console.log(`La propiedad ${key} vale ${element}`)
            mostrarObjeto(element)
        }
   }
}

mostrarObjeto(flight)

