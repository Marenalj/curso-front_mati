/**
 * Programa de cálculo de estadísticos como la media aritmética
 *  que es la suma de los elementos / entre el número de elementos
 */
/**
 * Function mediaAr
 * @param datos: array
 * @returns: number
 */
 function mediaAr() {}
  
 function suma(x = 0, y = 0) {
     return x + y
 }
// ES6 spread operator (operador de agrupación)
function sumaPlus(x = of, y = 0, ...otros) {
   if (otros) {
    console.log('Sin usar', otros)
}
return Number(x) + Number(y)
}

 console.log(suma('2', '5'))

 console.log(suma(2))

 console.log(sumaPlus(2,5,6,8))


 function mediAr(datos = [], ...masDatos) {
     if (!Array.isArray(datos)) {
         // NO es un array 
         datos = [datos]
         datos = datos.concat(masDatos)
     }
     console.log(datos)
     let r = 0
     // let sumatorio = 0                        lo puedo guardar en r
     for (let i = 0; i < datos.length; i++) {
         const element = datos[i];
         //sumatorio = sumatorio + element       lo puedo guardar en r   (r = r /datos.length)
         //sumatorio += element
     }
     r = sumatorio / datos.length
     r = r / datos.length

     // console.log(datos.length)   salida de consola depuración
     return r
 }

 let numeros = [3,5,6,4,2,5]
 console.log(mediaAr(numeros))

 console.log(mediaAr(numeros))