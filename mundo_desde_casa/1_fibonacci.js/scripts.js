// 0, 1, 1, 2, 3, 5, 8, 13, 21...
function fibonacci() {
    var fibo1=1, fibo2=1, pos = 1,                   
     ///las variables van a arrancar en 1 y así sucesivamente. Además necesitamos una variable para decirle al usuario en qué posición se encuentra el número 
    num= parseInt(document.getElementById("numero").value);      //convierte una cadena de caracteres en un número a un valor entero
    while(num > fibo1 && num > fibo2){
        fibo1 += fibo2;         //fibo1 = fibo + fibo2 
    } 
        else{
        fibo2 += fibo1;         //fibo2 = fibo + fibo1
    }                            
    pos++;                       // tenemos que sumar 1 a la posición. Vamos a contar la cantidad de                                  veces que vamos iterando                          
}
    if(num == fibo1 || num == fibo2) {
        alert("El número "+num+" pertenece a la sucesión y se encuentra en la +" posición "+ (pos+1));
    }
        else{
            alert("El número "+num+" no pertenece a la sucesión Fibonacci");
        }

</script>
</head>
<body>
<span>Introduzca un número para ver si pertenece a la serie</span>
<input id ="numero"/>
<button onclick="fibonacci()">Calcular</button>
</body>
</html>