import { ajax } from "./ajax.js";

export function controller() {

    console.log('Controller cargado')

    // Inicializacion de variablesl     (sitio y url de un usuario al azar)
    
    const url = 'https://randomuser.me/api/'
    // "https://randomuser.me/api/?results=10"


    // Nodos del DOM

    
    const output = document.querySelector('#output')
    const btnUser = document.querySelector('#btnUser')
    const btnBorar = document.querySelector('#btnBorar')


    // Manejadores de eventos

    btnUser.addEventListener('click', onClickUser )
    btnBorar.addEventListener('click', onClickUser)


    // Funciones

    function onClickUser(ev) {

        function onClickUser (ev) {
            let boton = ev.target.id // btnUser o btnBorar
            if (boton == 'btnUser') {
                ajax(url, 'GET', getUser)
            } else { // btnBorar
                output.innerHTML = ''
            }
        }

// función para recoger los datos recogidos en la url de ajax. Propiedad results es un array

function getUser(datos) {
    console.log(datos.results[0])
    let imagenes = datos.results[0].picture 
    let userName = datos.results[0].name
    let genero = datos.results[0].gender
    let correo = datos.results[0].email
    if (genero == 'female') {
        genero = 'chica'
    } else {
        genero = 'chico'
    }

        //console.log(imagen). para que las variables se interpreten como       ${}
        output.innerHTML = `
        <figure>
            <figcaption class="${genero}">${userName.title} ${userName.first} ${userName.last}</figcaption>
            <a href="${imagenes.large}">
                <img src="${imagenes.thumbnail}" alt="Imagen del usuario">
            </a>
        </figure>
        <div class="correo">
            <a href="mailto://${correo}" class="far fa-envelope"></a>
        </div>
    `
    }
}