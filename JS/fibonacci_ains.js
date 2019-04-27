// 0, 1, 1, 2, 3, 5, 8, 13, 21...
function fibonacci() {
    var fib1=0, fib2=1, pos = 1,                   
     ///las variables van a arrancar en 0 y así sucesivamente. Necesitamos una variable para decirle al usuario en qué posición se encuentra el número 
    num= parseInt(document.getElementById("numero").value);      //convierte una cadena de caracteres                                                                      en un número entero
    while(num > fib1 && num > fib2){
        fib1 += fib2;         //fib1 = fib + fib2 
    } 
        else{
              
        fib2 += fib1;         //fib2 = fib + fib1
    }                            
    pos++;                       // tenemos que sumar 1 a la posición. Vamos a contar la cantidad de                                  veces que vamos iterando                          
}
    if(num == fib1 || num == fib2) {
        alert("El número "+num+" pertenece a la sucesión y se encuentra en la +" posición "+ (pos+1));
    }
        else{
            alert("El número "+num+" no pertenece a la sucesión Fibonacci");
        }


    <span>Introduzca un número para ver si pertenece a la serie</span>
    <input id ="numero"/>
     <button onclick= "fibonacci(numero)">Calcular</button>