import { ajax } from "./ajax.js";

export function controller() {

    console.log('Controller cargado')

    // Inicialización de variables. (sitio y url de un usuario al azar)

    const url = 'https://randomuser.me/api/'

    // Nodos del DOM

    const output = document.querySelector('#output')
    const btnUser = document.querySelector('#btnUser')
    const btnBorrar = document.querySelector('#btnBorrar')

    // Manejadores de eventos

    btnUser.addEventListener('click', onClickUser)
    btnBorrar.addEventListener('click', onClickUser)

    // Funciones

    function onClickUser(ev) {

        let boton = ev.target.id // btnUser o btnBorrar

        if(boton == 'btnUser') {

            ajax(url, 'GET', getUser)

            output.innerHTML = ``  // Has pulsado un botón ${boton}

        } else { // btnBorrar
            output.innerHTML = '' 
        }
        
    }
// función para recoger los datos recogidos en la url de ajax. Propiedad results es un array

    function getUser(datos) {
        console.log(datos.results[0])
        let imagenes = datos.results[0].picture
        let userName = datos.results[0].name
        let genero = datos.results[0].gender
        if (genero == 'female') {
            genero = 'chica'
        } else {
            genero = 'chico'
        }

        //console.log(imagen). para que las variables se interpreten como       ${}
        output.innerHTML = `
            <figure>
                <figcaption class="${genero}">${userName.title} ${userName.first} ${userName.last}</figcaption>
                </br>
                <a href="${imagenes.large}">
                <img src="${imagenes.thumbnail}" alt="Imagen del usuario">
                </a>
            </figure>
            <div class="correo">
            <div><a href="mailto://${correo}" class="far fa-envelope"></a>   
            </div>            
        `
        //console.log(datos.results[0])

    datos.results[0]

    }
}