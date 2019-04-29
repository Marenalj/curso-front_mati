/**  Programa para calcular los número de la serie de Fibonacci por debajo de un valor dado(incluido)
  Partiendo de 0 y 1, cada elementos de la serie se calcula como la suma de los dos anteriores
  
 Function fibonacci
 
  @param: limit: number
  @returns: fibonacciFor (number)
  el while es el algoritmo (dos parámetros, sumarlos, hacer un push y añadir a la lista el siguiente)*/
  
  
function fibonacciFor (limite) {
    let i = 0
    let j = 1
    let serie = [i]


while ( j <= limite) {
    let next = 1 + j
    i = j
    j = next
    serie.push(i)
}

/*  for (let index = 0; index < Infinity; index++) {
    let next = i + j
    i = j
    j = next
    serie.push(i)
    if (j > limite)  {
        break        
        //continue          - continue dice que termina esta vuelta porque devolvería los primeros 50 números
     } 

}  */


  for (let i = 0; j = 1; i < limite, i = j, j = next)  {
        serie.push(j)
        next = i + j

  }
  return serie
}      
 
  
  
  let limite = 8
 console.log(fibonacci(limite))
