//Condicionales en JS
/*  
if(condicion) {
    //código que se ejecutará cuando se cumpla la condición
}
if(condicion) {
}    //código A
} else {
    //código B
}
if(condicion){
    //código C
} else { */

let x = 3
x = 5
x = '3'
// Comparación igual ==                    tienen que coincidir en valor y tipo
// Comparación idéntico ===
// Comparación distinto es !=     not igual
// Comparación no-idéntico !==    not igual
// Casting a boolean
// Valores falsy -> son los que hacen casting a false
x = false
x = undefined
x = ''
x = NaN
x = 0
x = null
//Valores truly --> hacen casting a truly
x = 25
x = 'Pepe'
x = {}
x = []
x = function () {}

if( x ) {
    console.log('Es verdad')
} else {    
    console.log('Es falso')
}