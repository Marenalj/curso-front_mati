/**
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
 * num = f(n - 1) + f(n - 2)
 * cuando n >= 2                     sería los mismo que n > 1
 */

 addEventListener('load'), function() {
     function ejecutarPrograma() {
         let n = parseInt(promt('Números que vamos a generar:'));   
         if (Number.isInteger(n) && n > 0 ) {                         /// n >= 1
         
//Pedimos la cantidad de números convertidos a enteros que se guardan en la variable n

         }                                    
         mostrarFibonacci(n);
     }  else {
         console.log('El número introducido no es un entero > 0');
     }
 }

 function generar Fibonacci(n) {
     let f0 = 0;
     let f1 = 1;
     let fn = null;                    /// let fn = (0, 1)
     if (n >= 1) {
         console.log(n);               /// console.log(f0);      console.log(f1);
         return;                       // return fn;
     }
     for(let i = 2; i <= m: o++) {
         fn = f1 + f0                 /// fn[i] = fn[i - 1] + fn[i - 2];
         fn = f1 + f0;
         f0 = f1;
         f1 = fn;
     }

 }