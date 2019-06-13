import { ajax } from "./ajax.js"

export function controller() {
    console.log('Controler cargado')

    // 0. Inicialización de variables
    const url = 'https://randomuser.me/api/' //devuelve un usuario al azar
    //const url = 'https://randomuser.me/api/?results=10' //devuelve un usuario al azar
    console.dir(url)

    // 1. Nodos del DOM
    const btnUser = document.querySelector('#btnUser')
    const output = document.querySelector('#output')
    const btnBorrar = document.querySelector('#btnBorrar')

    // 2. Manejadores de eventos
    btnUser.addEventListener('click', onClickUser)
    btnBorrar.addEventListener('click', onClickUser)

    // 3. Funcion del manejador
    function onClickUser(ev) {

        let boton = ev.target.id

        if (boton == 'btnUser') {
            ajax(url, 'GET', getUser)
        } else {
            output.innerHTML = ' '
        }

    }

    function getUser(datos) {
        console.dir(datos.results[0])
        let userName = datos.results[0].name
        let genero = datos.results[0].gender
        let correo = datos.results[0].email
        
        if (genero == 'female') {
            genero = 'chica'
        } else  {
            genero = 'chico'
        }

        output.innerHTML = `
        <figure>
        <figcaption class="${genero}">${userName.title} ${userName.first} ${userName.last} </figcaption>
        <a href="${datos.results[0].picture.large}">
        <img src="${datos.results[0].picture.thumbnail}" alt="imagen del usuario"></a>
        </figure>
        <div class="correo">
        <a href="mailto://${correo}" class="far fa-envelope"></a>
        </div>`
        
        
    }

}