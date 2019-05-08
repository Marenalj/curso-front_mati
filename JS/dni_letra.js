/**
 * Programa que comprueba la letra de un DNI
 * La letra se asigna a partir de un array preestablecido,
 * seleccionando la posición correspondiente al resto del número entre 23
 */
/**
 * function calcularLetraDNI
 * @param dni: string
 * @returns: string
 * 
 */

function cacalcularLetraDNI(dni) {
    letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "X", "E", "T"];
    // let num = dni % 23
    // return letrasDNI[num]
    return letrasDNI[dni % 23]
}

/**
 * function isLetraDNIValida
 * @param  dni: string (formato nnnnnnnnB)
 * @returns : boolean
 */
// 1R - length = 2
// 99999999 - length = 9

function isLetraDNIValida(dni = '') {
    r = false
    let letra = dni[dni.length]-1
    let numero = dni.slice(0, dni.length-1)
    numero = formateaNumero(numero)
     
    if (letra !== cacalcularLetraDNI(numero)) (r = true)
    return r
}

/**
 * function formatearnumero
 * @param : cadena: string
 * @return: string
 * funciones pequeñas con una sola responsabilidad que se puedan reutilizar
 */

 function formateaNumero(cadena) {
     let acadena = cadena.split('')    //devuelve la cadena convertida en array
     for (let i = 0; i < aCadena.length; i++) {
         const item = aCadena[i];
         if (isNaN(item)) {
            aCadena.splice(i,1)           // splice quita i en la posición 1
         }
     }
     return aCadena.join(' ')
 }

(function () {
    let miDNI = '51370235-B'
    // console.log(cacalcularLetraDNI(miDNI))
    // console.log(isLetraDNIValida(miDNI))
    console.log(formateaNumero(miDNI))
}
)()



/* var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "X", "E", "T"];
function checkDNI(dni) {
    if (dni.length !==9) {
            return "The length is not valid";
    }

    const dniNumber = parseInt(dni.substring(0.7));

    if(dniNumber >= 0 && dniNumber <= 99999999) {
        const letterIndex = dniNumber % 23;
        if (letras[letterIndex] == dni[8]) {
            return "El dni es correcto";
        }
        return "El dni es incorrecto";
    }
}

console.log(checkDNI('51370235B')); */