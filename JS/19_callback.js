/**
 * Las funciones son - (datos) objetos 
 * Se pueden anidar
 * 
 */

function operacioneS(X = 1, Y = 1) {

operaciones(10, 12)

}

 /**
 * Las funciones son - (datos) objetos 
 * Se pueden pasar como parámetros y se usan mucho el paso de funciones como parámetros y esto es lo que se llama CALLBACK
 * 
 * operacion es un callback. operacion es un parámetro. Es como si hubiéramos puesto let operacion. operacion es un function cuando dentro de la funcion la invoco con su nombre de parámetro
 */
//let x
//let y
//operacion

  function mostrarResultado(x = 0, y = 0, nombre, operacion) {
    console.log(`El resultado de la $(nombre) con $(y) es`)
    console.log(operacion(x, y))
}

let suma = function (x,y) {return x + y}

//la siguiente es una función callback:

// mostrarResultado(11, 12, function (x,y) {return x + y})
// función anónima en formato arrow

mostrarResultado(11, 12, 'suma', (x, y) => x + y)
mostrarResultado(11, 12, 'resta', (x, y) => x - y)
