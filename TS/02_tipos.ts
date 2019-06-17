let nombre: string;
let edad: number;
let isAlumno: boolean;

nombre = 'Pepe';
edad = 23;
isAlumno = true;

// declaración de tipo por inferencia. El tipo se infiere; no hace falta ponerlo (let profesion: string = 'Programador').
// let profesion            profesion = 'Programador' (En la primera es de tipo any)

let profesion = 'Programador'

let cualquierCosa
let cualquierOtraCosa: any

let id: string | number;

id = 34
id = 'x-34'
// no le puedo decir      id = true

let aDatos: number[]               /// puedo crear arrays de tipo objeto [] --> de cualquier cosa o     number[]        --> de números
let aPersonas: Array<string>       // Array utiliza tipos genéricos (tipo de subtipos) picoparéntesis string. Array<any> es un array de cualquier cosa
let aTresValores: [number, number, number]          /// Sólo va a ser válido si le das tres valores

aDatos = [1, 3, 6]
aPersonas: ['Pepe', 'Juan', 'Natalia']
aTresValores= [0, 0, 0]

let oDatos: {       /// Objeto
    nombre: string
    edad: number
}

oDatos = {
    nombre: 'Pepe',
    edad: 34
}


