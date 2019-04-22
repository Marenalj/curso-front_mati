// Es una variable local que recibe el parámetro . Dentro del ámbito de la función creo una función duplicar(data). Es el data de la función. Guarda el valor 11 que lo he duplicado. al decir data *2 creo otra casilla cuyo valor es 22.

let data = 11
duplicar(data)
console.log(data)
console.log(duplicar(data))

// Los datos primitivos pasan a la función como valores. Son inmutables. Destruyen un valor y toman otro nuevo. 
//Los objetos son mutables porque una vez creados pueden cambiar sin distruir nada

function duplicar(x) {
    x = x  * 2
    return x
}


let user = (nombre= 'Pepe', edad= 23)
matricular(user)
console.log(user)

function matricular(obj) {
    obj.curso = 'JavaScript'
}