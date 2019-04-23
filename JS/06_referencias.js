// Es una variable local que recibe el parámetro . Dentro del ámbito de la función creo una función duplicar(data). Es el data de la función. Guarda el valor 11 que lo he duplicado. al decir data *2 creo otra casilla cuyo valor es 22.

let data = 11
duplicar(data)
console.log(data)
console.log(duplicar(data))

// Los datos primitivos pasan a la función como valores. Son inmutables. Destruyen un valor y toman otro nuevo. 
//Los objetos son mutables porque una vez creados pueden cambiar sin destruir nada

function duplicar(x) {
    x = x  * 2
    return x
}

// objeto user; variable matricular; devuelve un objeto que tiene nombre, edad y curso. user es un objeto interno de la función.
let user1 = {nombre: 'Pepe', edad: 23}
matricular(user1, 'HTML')
console.log(user1)
let user2 = {nombre: 'Rosa'}
matricular(user2)
console.log(user2)


//obj es una variable exterior a la función. obj.curso sería igual a curso porque es la propiedad del objeto y también la variable.

function matricular(obj, curso = 'JavaScript') {
    obj.curso = curso
}