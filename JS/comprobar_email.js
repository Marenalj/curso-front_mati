/**
 * Comprobar e-mail:
 * Comprobar si una dirección de e-mail contiene el carácter @ y el punto en su lugar
 * Objetivo: familiarizarnos con el uso de los métodos incluidos en los objetos String(), como indexOf() o lastindexOf().
 * Al mismo tiempo, profundizamos en el uso de funciones, el paso de parámetros y la devolución de valores.
 */
/**
 * Partes de un e-mail:
 * nombre usuario + @ + servidor + dominio
 */



/* var n = string.indexOf("@");
 */

function validarEmail(email) {
    const validEmail = email.indexOf('@') != -1 && email.indexOf('.') != -1;
    if (validEmail) {

        return "La dirección de email " + email + " es válida";
    } else {

        return "La dirección de email es false";
    }
}

console.log(validarEmail('jorquera2009@hotmail.com'));








/* var texto = "jorquera2009@hotmail.com";
var nuevoTexto = texto.indexOf("j")
 
console.log(j)
 */

