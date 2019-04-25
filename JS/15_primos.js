/**
 *   Presentar los número primos del 1 al N
 */

 /**
  *  function isPrimo
  * @param num: number
  * @returns: boolean
  */

  function isPrimo(num) {
      let r = true
     //if ( num == 0) {
         if(!num) {
          return false
         }
/*       } else if (num = 1) {
          return true 
        }*/
  
      for (let i = 2; i < num;  i++) {
          // if(num % i == 0) {
              if(!(num % i) ) {
              // si el resto es distinto de 0, no primo
              return false
          }
      }
      return r
    }

// Crear una lista


  let number = 0
  number = 1
  number = 2
  number = 3
  number = 4
  //isPrimo(number) aquí no le digo que me muestre nada
  console.log(isPrimo(number))


  /**
   * Function crear listaPrimos
   * @param limite: number
   * @returns: array[number]
   */

   function listaPrimos (limite) {
       let primos = []
       for (let i = 0; i <= limite; i++) {
           if(isPrimo(i)) {
              // primos[primos.length] = i
              primos.push(i)
           }
       }
       return primos
   }
   
   console.log('Los primos son', listaPrimos(100).join(', '))