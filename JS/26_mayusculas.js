/**
 * Dada una cadena de caractéres hay que indicar, si está formada 
 * sólo por letras mayúsculas; 
 * sólo por letras minúsculas;
 * por la combinación de ambas
 */
/**
 * function probarCadena
 * @param cadena: string
 * @returns: number
 *  * Esto es codificar:
 * - 0 sólo por letras mayúsculas
 * - 1 sólo por letras minúsculas
 * - 2 por la combinación de ambas
 * La variable (cadena) es una variable de tipo 'undefined' y la quiero convertir en string con ''. Inicializo la variable. Recibe un string y devuelve un number. r es donde guardo el resultado
 */

 function probarCadena(cadena = '') {
     let r = 2
     if( cadena === cadena.toUpperCase()) {
         r = 0
     } else if(cadena === cadena.toLowerCase()) {
         r = 1
     }
     return r
 }

 /**
  * funcion comoEsLaCadena (resultados). Es la función mostrar. Es la función main de mi programa.
  * @param: cadena : string
  * @return: void (no devuelve nada. Te muestra por consola)
  * Esta función descodifica
  */
 function comoEsLaCadena(cadena = '') {
     let mensajes = [
         'La cadena está formada sólo por letras mayúsculas',
         'La cadena está formada sólo por letras minúsculas',
         'La cadena está formada por la combinación de ambas'
     ]
     //let i = probarCadena(cadena)
     //console.log(mensajes[1])
     console.log(mensajes[probarCadena(cadena)])
 }

 let texto
 texto = 'EN UN LUGAR DE LA MANCHA'
 comoEsLaCadena(texto)
 texto = 'en otro lugar de la mancha'
 comoEsLaCadena(texto)
 texto = 'En ese lugar de La Mancha'
 comoEsLaCadena(texto)
