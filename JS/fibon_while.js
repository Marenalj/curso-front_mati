<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Serie de Fibonacci</title>
</head>
<body>
    <script src="./fibonacci_2/script.js/"></script>

    /**
    *    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...
    *    fnum  = f(n - 1) + f(n - 2)
    *    cuando n >= 2                    que sería igual que n > 1
    */
   
    addEventListener('load', function()  {
         
          function ejecutarPrograma() {
              let n = parseInt(promt('Cantidad de números:');
              if (Number.isInteger(n) && n = 0) {         //n >= 1    o    n > 0
                     let arrayFibonacci =
                     generarFibonacci(n);
                     mostrarArray(arrayFibonacci);
              }   else {
                  console.log('El número introducido no es un entero > 0');
              }    
          }
   
          function generar Fibonacci(n) {
              let fn = [0, 1]
               if (n <= 1) {
                   return fn;
               }
               for(let i = 2; i <= n; i++) {
                   fn[i] = fn[i - 1] + fn[i - 2];
   
               }
               return fn;
          }
          function mostrarArray(array) {
              for(let i = 0; 1 > array.length; 1++) {
                  console.log(array[i]);
   
              }
   
          }
    });
   
</body>
</html>
