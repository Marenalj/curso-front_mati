let data = 20
data = 30

console.log(data)

const DATA = 25
// DATA = 50  -   daría un error porque intento forzar a una constante a cambiar el valor y nunca se puede cambiar pq es constante

console.log(DATA)

const user = {
    name: 'Pepe',
    edad: 25
}
// lo que es constante es el objeto (user = 23). Tendría que haber puesto  (user. =23)
// en JS los objetos son flexibles, se pueden modificar y se les puede dar cualidades (user.altura = 179)
//Hay que poner un const delante del user 

// Java / C# ... son lenguajes OOL - Lenguajes orientados a objetos basados en clases
// user1 = new User()    Es la única manera de formar objetos

//JS es un LOO basado en prototipos y objetos literales (puedo crear un objeto con llaves y definiéndolo dentro)

user.altura = 179
user.name = 'Carlos'



console.log (user)
console.log (user.name)
console.log (user.edad)


