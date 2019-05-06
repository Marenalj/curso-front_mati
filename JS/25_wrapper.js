function main() {
    let cadena = 'Hola amigo'
    let alumno = {
        saludar: function() {}
    }
    // let alumno = new Object()
    let users = ['Pepe', 'Loli', 'Jose']
    // let users = new Array()
    console.log(typeof users)
    //En otros lenguajes  toLowerCase(cadena)
    console.log(cadena.toLowerCase())
    // cadena.toLowerCase()
    // let cadenaTemp = new String()     --->función constructora de objetos. String los trato como objetos
    console.log(cadena.length)
    // split  --> convierte un array de palabras. 1º Hola y 2º amigo
    let aCadena = cadena.split(' ')   
    // join junta todas las palabras sin los espacios       
    let cadenaSinEspacios = aCadena.join('')
    cadena = cadena.toUpperCase().split(' ').join('')
    console.log(cadena)

   // Esto es parsear una url 
    let url = 'https://www.cife.es/alumnos/ingresos/pepito'

    //let urlTemp = url.slice(url.indexOf('//')+2)
    //console.log(urlTemp)

    urlTemp = urlTemp.slice(0, urlTemp.indexOf('/'))
    //console.log(urlTemp)

    console.log(Url.split('/')[2])

    console.log(url[12])
}
main()