   /**
 *    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
 * 
 * function saludar(nombre) {
  alert('Hola ' + nombre);
   }

 * 
 * 
 * @param: limit
 * @returns: fibonacciArray
 * 
 */


 /**
  * La primera iteración siempre te va a devolver un 0 y un 1
  * La segunda iteración va a entrar dentro del while porque el límite no es 1 y el Array va a ser igual al Fibonacci de la iteración 1. 
  *  let fibonacciArray = fibonacci(1);
  * Cada iteración suma los dos anteriores
  * 
  * 
  * */
    
function pickUpLimit() {
  const limit = prompt('Introduce the limit');
  callback(fibonacciArray(limit));
}

function fibonacci(limit) 
{
  if(limit===1) {
    return [0, 1];
  } 
  while(limit!==1) {
    // Va a ir iterando hasta que llame a la función fibonacci en la primera iteración para obtener el Array 01 y utilizarlo como base en las demás iteraciones.
    let fibonacciArray = fibonacci(limit - 1);               
    fibonacciArray.push(fibonacciArray[fibonacciArray.length - 1 ] + fibonacciArray[fibonacciArray.length - 2]);
    return fibonacciArray;
  }
};

// console.log(fibonacci(100));