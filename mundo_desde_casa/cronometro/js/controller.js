export function controller() {
    console.log('Controller cargado')

    const btnPlay = document.querySelector('#btnPlay')
    const btnPausar = document.querySelector('#btnPausar')
    const btnReiniciar = document.querySelector('#btnReiniciar')
    const output = document.querySelector('#output')

    btnPlay.addEventListener('click', onClickPlay)
    btnPausar.addEventListener('click', onClickPausar)
    btnReiniciar.addEventListener('click', onClickReiniciar)
    
    let segundoActivo = 0
    let handTime

    function onClickPlay()  {
        console.log('Contador iniciado')
            handTime = setInterval(( ) => {
            segundoActivo += 1
            output.innerHTML = `<p>${segundoActivo}</p>`
        }, 1000) 
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

}



