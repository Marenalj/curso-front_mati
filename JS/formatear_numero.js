
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