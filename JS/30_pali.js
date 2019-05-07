/**
 * Comprobar si una frase sin acentos es un palíndromo (se lee igual en los dos sentidos) sin contar los espacios
 * 
 * Palíndromo: a ti no, bonita
 */
/**
 * @function: isPal1
 * @param de la cadena: string
 * @return: boolean (true or false) 
 */

 
 function isPal1(cadena = '') {
     let r = true
     let cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
     // console.log(cadenaSinEspacios)
     let cadenaAlReves = cadenaSinEspacios.split('').reverse().join('').toLowerCase()
     // console.log(cadenaAlReves)
     if (cadenaSinEspacios !== cadenaAlReves) {
        r = false
     } 
     return r
 }

function isPaliShort(cadena = '') {
    return cadena.split(' ').join('').toLowerCase() === cadena.split(' ').join
}


//función anónima autoejecutada. Función sin nombre y por eso va entre paréntesis. La función sin nombre entre paréntesis y paréntesis al final para ejecutarla.
//let prueba = function() 
(function () {
     let textos = [
         'Esto no es un palíndromo'
         'A ti no bonita'
         'Atar a la rata'
     ]
     for (let i = 0; i < textos.length; i++) {
         const texto = textos[1]
         console.log(texto)


         console.log(isPali(texto))
     }
 }}()

 //probar()