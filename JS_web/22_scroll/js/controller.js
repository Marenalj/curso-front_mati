export function controller() {
    console.log('Controller cargado')
    
    // Variables
    let isSticky = false;

    // Nodos
    let header = document.querySelector('#main-header')
    let aItemsMenu = document.querySelectorAll('.main-menu a')
    let aSections = document.querySelectorAll('.main-content section')
    let aOffSets = []

    // Manejadores de eventos
    window.addEventListener('scroll', onScroll)
    aItemsMenu.forEach( item => item.addEventListener('click', onClickMenu))

    function calculaOffSets() {
        let aDatos = []
        aSections.forEach( item => aDatos.push(item.offsetTop)) 
        aDatos[0] = 0
        console.dir(aDatos)
        return aDatos
    }

    function onScroll(ev) {
        console.dir(scrollY)
        if(scrollY >= 40 && !isSticky) { 
            header.classList.add('sticky-header')
            isSticky = true
            aOffSets = calculaOffSets()
        } else if (scrollY < 40 && isSticky) {
            header.classList.remove('sticky-header')
            isSticky = false
        }
        let id = 3
        if (scrollY < offsets[1]) {
            // estoy en inicio
        } else if (scrollY < offSets[2]) {
            // estoy en sección 1 (porfolio)
            id = 0
        } else if (scrollY < offSets[3]) {
            // estoy en sección 2 (clientes)
            id = 2
        } else {
            // estoy en la sección 3 (nosotros)
            id = 3
        }
        ponActivo(id)
    }

    function onClickMenu(ev) {
        ev.preventDefault()
        let id = +ev.target.dataset.orden
        if (id && !isSticky) { // click inicial en opción distinta de inicio 
            header.classList.add('sticky-header')
            isSticky = true
            aOffSets = calculaOffSets()
        }
        ponActivo(id)

        const altoStickyMenu = 50
        let destino = 0
        let offset =  aOffSets[id]        
        console.log('Item', id)
        console.log('offset', offset)
        destino = offset - altoStickyMenu
        window.scrollTo(0, destino) 
        // window.scrollTo(0, aOffSets[id]-altoStickyMenu)
    }


    function ponActivo(id) {
        aItemsMenu.forEach (item => item.classList.remove('activo'))
        aItemsMenu[id].classList.add('activo')
        console.log('activando', id)
    }
}