// 'use strict' - modo estricto

// Ámbitos o Scope de las variables

// Ámbito global. var1 tiene un ámbito global

let var1 = 20
prueba() 

// He hecho una función pero no la he ejecutado          
function prueba() { console.log(var1)}
//MUY MALA PRÁCTICA
//No se accede nunca a las variables globales desde las funciones


// Las funciones tienen que ser independientes. Si cambio la variable, tengo que cambiarla dentro de la función
// Lo mismo con BUENAS PRÁCTICAS. Parámetro (variable un poco especial): x, que tendrá el valor de var2. El parámetro va entre paréntesis. No se usan nunca nombres que oculten lo que llevan dentro. No es una función pura porque depende del valor de var, que es un valor de fuera.

let var2 = 30
pruebaBien(var2)

function pruebaBien (x) {
    console.log(x)
}

// Nuevo en ES6 usar let en lugar de var
// La variable let ext = 22 es local a la función. Si te declaro dentro de la función, eres local a la función.


function condicional() {
    let ext = 22
    if(true) {
        let data = 23
        console.log(ext)
        console.log(data)
    }
    console.log(ext)
    /* console.log(data)  */      //daría un error 
}  

condicional()


let x = 12 

function otraPrueba () {
    let x = 23                    // let x declara una variable local. Si no lo pongo, acude al let x = 12 que está cercano.
    // x = 23 
    console.log('Dentro de la función x vale', x)
}

otraPrueba()
console.log('Fuera de la función x vale', x)
