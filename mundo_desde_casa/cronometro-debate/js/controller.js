export function controller() {

    console.log('Controller cargado')

    /** Declaración de variables  */
    const btnPlay = document.querySelector('#btnPlay1')
    const btnPausar = document.querySelector('#btnPausar1')
    const btnReiniciar = document.querySelector('#btnReiniciar1')
    const output = document.querySelector('#output1')
 
    /** Manejadores de evemtos */
    btnPlay.addEventListener('click', onClickPlay)
    btnPausar.addEventListener('click', onClickPausar)
    btnReiniciar.addEventListener('click', onClickReiniciar)

   
    /** Elementos del DOM */
    let segundoActivo = 0
    let handTime


    /** Funciones */
    // Tiempo (3 minutos) del bloque Inicio

    function onClickPlay()  {

        console.log('Contador iniciado 1')

            handTime = setInterval(( ) => {
            segundoActivo += 3
            comprobar()
            output.innerHTML = `<p>${segundoActivo}</p>`
        }, 3000)

    }

 

    function comprobar() {

        console.log('hola')

        if (segundoActivo == 6) {
            //paramos el evento
            clearInterval (handTime)

        }

    }

 

 

    function onClickPausar() {

        console.log('Pausado')

        clearInterval (handTime)

    }

 

    function onClickReiniciar() {

        console.log('Reiniciar')

        clearInterval (handTime)

        segundoActivo = 0

        output.innerHTML = `<p>${segundoActivo}</p>`

    }

 

 

 

 

 

    console.log('Controller cargado')

 

    const btnPlay2 = document.querySelector('#btnPlay2')

    const btnPausar2 = document.querySelector('#btnPausar2')

    const btnReiniciar2 = document.querySelector('#btnReiniciar2')

    const output2 = document.querySelector('#output2')

 

    btnPlay2.addEventListener('click', onClickPlay2)

    btnPausar2.addEventListener('click', onClickPausar2)

    btnReiniciar2.addEventListener('click', onClickReiniciar2)

   

    let segundoActivo2 = 0

    let handTime2

 

    function onClickPlay2()  {

        console.log('Contador iniciado')

            handTime2 = setInterval(( ) => {

            segundoActivo2 += 1

            output2.innerHTML = `<p>${segundoActivo2}</p>`

        }, 1000)

    }

 

    function onClickPausar2() {

        console.log('Pausado')

        clearInterval (handTime2)

    }

 

    function onClickReiniciar2() {

        console.log('Reiniciar')

        clearInterval (handTime2)

        segundoActivo2 = 0

        output2.innerHTML = `<p>${segundoActivo2}</p>`

    }

 

}


