/**
 * Las clases siempre hacen referencia a sustantivos porque son pasivas, como personas, objetos... y a los métodos se les dará nombres de verbos porque son activos. Saludadro va a saludar. Saludar es el método. aQuien = ''    va a ser un string y se deja espacio vacío.
 */

 /** Seleccionar nodos del DOM */
 // Mis nodos del DOM van a ser quién (la entrada de datos y los botones)

 función de  exportación main () {

    deja aQuien =  ' '
    dejar msg = [ ` hola ' , ' Adios ' ]

    / ** Seleccionar nodos del DOM * /
    dejar enNombre =  documento . querySelector ( ' # in-nombre ' )
    dejar que btnSaludar =  documento . querySelector ( ' # btn-saludar ' )
    dejar que btnDespedirse =  documento . querySelector ( ' # btn-despedirse ' )


    / ** Asignar manejadores a los nodos * /
    btnSaludar . addEventListener ( ' clic ' , saludar)
    / * btnSaludar.addEventListener ('click', () => {
            aQuien = inNombre.value
            console.log (msg [0] + aQuien)
    }) * /
    BtnDespedirse . addEventListener ( ' clic ' , despedirse)

    función  saludar () {
        aQuien =  inNombre . valor
        consola . log (msg [ 0 ] + aQuien)
    }

    función de  despedirse () {
        aQuien =  inNombre . valor
        consola . log (msg [ 1 ] + aQuien)
    }

} 