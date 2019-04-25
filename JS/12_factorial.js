// Proceso repetitivo o bucle. bucle for es repetir algo n veces. Necesitamos un contador. Mientras i < n, tú decides cuántas vueltas quieres dar. i++ el contador sube de uno en uno. Si empiezas por 0, ponemos i < 5. Si empiezas por 1, i<= 5. Por cada vuelta que muestre por consola console.log(i). Para saber por qué vuelta va hay que poner console.log(i + 1). Con esta estructura recorremos elementos.
/* for (let i = 0; i < 5; i++) {
        console.log(i + 1)
}
 */
/** 
 * Programa de cálculo del factorial de un número.
 * 
 */
/**
 * function factorial
 * @param num: number
 * @returns: num
 * 
 * Se calcula el producto de num por todos los inferiores a él hasta el 1
 * es decir, el producto de 1 por todos los superiores a él hasta llegar a num 
 * r es lo que quieres devolver. Proceso multiplicativo r empieza por 0
 */

function factorial(num) {
    if (num <= 0 ) {
        return 0                // entraría el 0 y los negativos
    }
    let r = 1
    for (let i = 1; i <= num; i++) {
        r = r * i
     }
    return r
}

/** Usar if / else y un solo return */
function factorial2(num) {
    let r = 1
    if (num <= 0) {
       r = 0
    } else {
     for (let i = 1; i <= num; i++) 
         r = r * i 
    }
    return r
}

   let number = 0
   number = 5
   number = -4
   // number = 'Pepe'
   console.log(factorial(number))

   number = 0
   number = -4
   number = 5
   console.log(factorial2(number))