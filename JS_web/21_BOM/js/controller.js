export function controller() {
    console.log('Controller cargado')

    const btnProbar = document.querySelector('#btnProbar')

    btnProbar.addEventListener('click', onClickProbar)

    document.querySelector('#btnLocalizar').addEventListener('click' , onClick)

    
    async function onClick () {
        let position = await localizar()
        console.log(position)
    }


    function onClickProbar() {
        //window.alert('Probando')
        //window.prompt('Probando')
        //let x = window.confirm('Probando')
        //no es necesario poner window. delante, lo reconoce igualmente

        let handler = window.open()
        handler.location.assign('http://google.com')
        window.setTimeout(() =>{
            // handler.close()
        }, 2000)
        console.log(handler)

        /*    Funciones de tiempo que ofrece window
                setInterval()
                setTimeout() devuelve un handler 
                clearInterval()
                clearTimeout() */

        let handTime = setTimeout(() => { }, 2000) //se realiza despues de 2s
        clearTimeout(handTime) //anula handTime

        let handInterval = setInterval(() => {}, 2000) //cada 2s se repite
        clearInterval (handInterval) //anula la repeticion

    }

    function localizar() {
        return new Promise( (resolve, reject) => {
            navigator.geolocation.getCurrentPosition( (position) => {
                resolve(position)
            })
        })
        
    }

}

