let nombre;
let edad;
let isAlumno;
nombre = 'Pepe';
edad = 23;
isAlumno = true;
// declaración de tipo por inferencia. El tipo se infiere; no hace falta ponerlo (let profesion: string = 'Programador').
// let profesion            profesion = 'Programador' (En la primera es de tipo any)
let profesion = 'Programador';
let cualquierCosa;
let cualquierOtraCosa;
let id;
id = 34;
id = 'x-34';
// no le puedo decir      id = true
let aDatos; /// puedo crear arrays de tipo objeto [] --> de cualquier cosa o     number[]        --> de números
let aPersonas; // Array utiliza tipos genéricos (tipo de subtipos) picoparéntesis string. Array<any> es un array de cualquier cosa
let aTresValores; /// Sólo va a ser válido si le das tres valores
aDatos = [1, 3, 6];
aPersonas: ['Pepe', 'Juan', 'Natalia'];
aTresValores = [0, 0, 0];
let oDatos;
oDatos = {
    nombre: 'Pepe',
    edad: 34
};
//# sourceMappingURL=02_tipos.js.map