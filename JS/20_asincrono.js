/**
 *  La función setTimeout
 * permite un proceso asíncrono, diferido en el tiempo
 */


 console.log('Primero')


/* function paraLuego  () {
    console.log('Segundo')
} */


 // dentro de un rato en JS se dice setTimeout (recibe esto como callback)
 // setTimeout(paraLuego, 2000)
 setTimeout( () => {
     console.log('Segundo')
 },2000)
 console.log('Tercero')
