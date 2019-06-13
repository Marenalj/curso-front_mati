export function controller() {
    console.log('Controller cargado')

    const btnProbar = document.queryCommandValue('#brnProbar')

    btnProbar.addEventListener('click'. onClickProbar)

    function onClickProbar() {
        // window.alert()
        // window.prompt()
        // window.confirm()

        //let x = window.prompt('Probando')
        let handler = window.open()
        handler.location.assign('http://google.com')
        window.setTimeout(() = => {
      //      handler.close()
        }, 2000)
        console.log(handler)

        let handTime = setTimeout(() => {}, 2000)
        clearTimeout(handTime)

        let handInterval = setInterval(() => {}, 2000)
        clearInterval(handInterval)      
    }
