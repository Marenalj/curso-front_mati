import { ajax } from "./ajax.js"

export function controller() {
    console.log('Controler cargado')

    // 0. Inicialización de variables
    //const url = 'https://randomuser.me/api/' //devuelve un usuario al azar
    const url = 'https://randomuser.me/api/?results=10' //devuelve X usuarios al azar

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
        console.log(datos.results[0]) // console logo del primer user
        let html = `` 

        datos.results.forEach(item => {
            let userName = item.name
            let genero = item.gender
            let correo = item.email
            let iconoGenero
            
             if (genero == 'female') {
                genero = 'chica'
                iconoGenero = '<i class="fas fa-venus"></i>'
            } else  {
                genero = 'chico'
                iconoGenero = '<i class="fas fa-mars"></i>'
            } 
            
            html += `
            <div class="user">
                <figure>
                    <figcaption class="${genero}">${iconoGenero} ${userName.title} ${userName.first} ${userName.last} </figcaption>
                    <a href="${item.picture.large}">
                    <img src="${item.picture.large}" alt="imagen del usuario ${userName.first}"></a>
                </figure>
                <div class="correo">
                    <a href="mailto://${correo}" class="fas fa-envelope-open-text"> <span class="correo-texto">Contacto</span></a>
                </div>  
            </div>`
            output.innerHTML = html

        });

    }

}