// IF sobre valores discretos de una sola variable
// if (x > 5)
// if (x == 2 AND && y == 3)

let cargo  // Gerente, Senior, Junior, Becario
cargo = 'gerente'
cargo = 'senior'
cargo = 'junior'
cargo = 'becario'
let bonus

switch (cargo.toLowerCase()) {
    case 'director':
    case 'gerente':
        bonus = 10000
        break
    case 'senior':
        bonus = 1000
    default:
        bonus = 0
        break
}


if (cargo.toLowerCase() == 'director' || cargo.toLowerCase() == 'gerente') {
    bonus = 10000

} else if (cargo.toLowerCase() == 'senior') {
    bonus = 1000
} else {
    bonus = 0
}

console.log(`Como eres $(cargo), Tu bonus es ${bonus}€`)

// En Java, C#...
// tendríamos la variable string name = 'Pepe'
// Con la función del sistema-->  UpperCase(name) y nos devolvería name convertida en PEPE 
// lo que sería             string nameMay = UpperCase(name)

let array = []
array.push()


let name = 'Pepe'
let nameMin = name.toLowerCase()
let nameMay = name.toUpperCase()

console.log(name, nameMin, nameMay)