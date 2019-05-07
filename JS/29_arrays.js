let datos =  []
// let datos = new Array()   --> Array es la función constructora

datos = [1,2,3,5,7,9]
datos.push(45)

function numeroAlAzar100() {
    return parseInt(Math.random()*100)
}

/**
 * Crea un array de n aleatorios, como mínimo 1
 * 
 * function aleatorios
 * @param: limite: number
 * @returns: array[number] --->una lista
 * 
 */
// inicializo r con un array vacío

 function aleatorios(limite = 1) {
     let r = []                    
     for (let i = 0; i < limite; i++) {
         r[i] = numeroAlAzar100()
         
     }
     return r
 }
 console.log(aleatorios(12))