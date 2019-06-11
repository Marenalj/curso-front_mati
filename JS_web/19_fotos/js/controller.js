import { ajax } from "./ajax.js"

export function controller() {
    const URL = 'https://jsonplaceholder.typicode.com/photos'
    const URL_USERS = "https://randomuser.me/api/?results=10"
    const aFotos = []
    let sectionFigures = document.querySelector('#figures')
    ajax(URL, 'GET', getFotos)


// Elementos del DOM

let btnAdd = document.querySelector('#put')
let aBtnModificar
let aBtnBorrar

btnAdd.addEventListener('click', onAdd)
abtnModificar.forEach(item => item.addEventListener('click', onAdd))
abtnBorrar.forEach(item => item.addEventListener('click', onDelete))

/** "albumId": 1,
 * "":
 */

    function getFotos(response) {
        console.log(response)
        let html = ''

        JASON.parse(response. forEach( item => {
                html += `
                    <figure>
                    <a href="${item.url}">
                    <figcaption>${item, title}</figcaption>
                    <img src="${item, thumbnailUrl}" alt="">
                    </a>
                    <button id="post" id="post"_${item.id}>Modificar</button>
                    <button class="delete" id="delete_${item.id}">Borrar</button>
                    </figure>
                `
            })
        });

        sectionFigures.InnerHTML = html
        = document.querySelectorAll('.post')
        = document.querySelectorAll('.delete')
    }   

    function onAdd () {
        console.log('Añadiendo')
    }

    function onModify (ev) {
        console.log('Modificando', ev.target.id)
    }

    function onDelete() {
        console.log('Borrando', ev.target.id)
    }
}