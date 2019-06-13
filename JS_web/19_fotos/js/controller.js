
export function controller() {
    // Variables de Estado
    const URL = 'https://jsonplaceholder.typicode.com/photos'
    const URL_ALBUM1 = URL+ '?albumId=1'
    let aFotos = []
    // la variable const aFotos son mis datos
    var itemActual = 0
    // la variable const itemActual tiene el valor de la posición del item en el que estoy

    // maneja promesas que se gestionan con .then (si la promesa me da bien) y .catch (si la promesa me da error). A then le paso funciones para que se ejecuten. 
    
  

    // Elementos del DOM
    const btnAdd = document.querySelector('#put')
    let aBtnModificar  // No existe hasta pedir y renderizar datos
    let aBtnBorrar   // No existe hasta pedir y renderizar datos

    // Elementos del DOM de los dialog (modales) inicialmente invisibles

    const addFotoDlg = document.querySelector('#addFotoDlg')
    const btnAddFoto = document.querySelector('#btnAddFoto')
    const btnCancelAddFoto = document.querySelector('#btnCancelAddFoto')

    const modifyFotoDlg = document.querySelector('#modifyFotoDlg')
    const btnModifyFoto = document.querySelector('#btnModifyFoto')
    const btnCancelModifyFoto = document.querySelector('#btnCancelModifyFoto')



    // Manejadores de eventos
    btnAdd.addEventListener('click', onAdd)
    btnAddFoto.addEventListener('click', onClickDlgAdd)
    btnCancelAddFoto.addEventListener('click', onClickDlgAdd)

    btnModifyFoto.addEventListener('click', onClickDlgModify)
    btnCancelModifyFoto.addEventListener('click', onClickDlgModify)


    // Código inicial

    getFotos(URL_ALBUM1)

    function getFotos(url) {
        fetch(url)
        .then( response => response.json())
        .then( response  => {
            aFotos = response
            console.log(aFotos)
            renderFotos()
        })
    }

    /*  "albumId": 1,
    */   
   function renderFotos() {

    let sectionFigures = document.querySelector('#figures')

    let html = ''
    aFotos.forEach( item => {
            html += `
                <figure>
                    <a href="${item.url}">
                    <figcaption>${item.title}</figcaption>
                    <img src="${item.thumbnailUrl}" alt="">
                    </a>
                    <button class="post" id="post_${item.id}" data-id-db="${item.id}">Modificar</button>
                    <button class="delete" id="delete_${item.id}" data-id-db="${item.id}">Borrar</button>
                </figure>
            `
        });
        // clave de la renderización (pintar). Lo convierte en html real.
        sectionFigures.innerHTML = html

        // Elementos del DOM recién renderizados
        aBtnModificar = document.querySelectorAll('.post')
        aBtnBorrar= document.querySelectorAll('.delete')


        // Manejadores de eventos correspondientes
        aBtnModificar.forEach( item => item.addEventListener('click', onModify))
        aBtnBorrar.forEach( item => item.addEventListener('click', onDelete))
    }

    function onAdd () {
        //console.log('Añadiendo')
        addFotoDlg.showModal()
    }

    function onModify(ev) {
        itemActual = ev.target.dataset.idDb
        console.log('Modificando', itemActual)
        modifyFotoDlg.showModal()
    }

    function onClickDlgAdd(ev) {

        let id = ev.target.id // btnAddFoto o btnCancelAddFoto
        if (id == 'btnAddFoto') {

            if (document.querySelector('#title').value) {
                // añadir lo que has escrito en title... creo una cabecera y hago un fetch de tipo POST, y le digo que el cuerpo, el stringify de los datos y mi cabecera donde se le indique de qué tipo son los datos.
                let datos = {}
                datos.albumId = document.querySelector('#albumId').value
                datos.title = document.querySelector('#title').value
                datos.thumbnailUrl = document.querySelector('#thumbnailUrl').value
                datos.url = document.querySelector('#url').value

                let myHeaders = new Headers({
                    "Content-Type": "application/json"
                });
                

                // tengo que añadir a la colección de fotos otra foto más y lo tiene que hacer el servidor recibiéndolo por ajax por el método POST
                fetch(URL, {method: 'POST', body: JSON.stringify(datos), headers: myHeaders})
                .then (response => response.json())  // en este then le digo de qué tipo son los datos, tipo json. Aquí se hace el parseado del fetch a objeto json
                .then (data =>  {
                    console.log(data)
                    aFotos.push(data)
                    renderFotos()  // pinta
                })                
            }
 

        }
        addFotoDlg.close()

    }

    function  onClickDlgModify(ev) {
        let id = ev.target.id // 
        if (id == 'btnModifyFoto') {

            if(document.querySelector('#modi_title').value) {
                let datos = {}
                datos.title = document.querySelector('#modi_title').value
                document.querySelector('#modi_title').value = ''

                let myHeaders = new Headers({
                    "Content-Type": "application/json"
                });
                let url = URL + `/${itemActual}`
                fetch(url, {method: 'PATCH', body: JSON.stringify(datos), headers: myHeaders})
                .then (response => response.json())
                .then (data =>  {
                    let index
                    aFotos.some( (item, i) => { if(item.id == itemActual) {
                                                        index = i
                                                        return true
                    }})
                    console.log(index)
                    console.log(data)
                    aFotos.splice(index,1,data)
                    renderFotos()
                })                
            }
        }
        modifyFotoDlg.close()
    }


    function onDelete(ev) {
        console.log('Borrando', ev.target.dataset.idDb)
        console.log('Borrando', itemActual)
        let url = URL + `/${itemActual}`
        console.log(url)

        let myHeaders = new Headers({
            "Content-Type": "application/json"
        });

        fetch('url', {method: 'DELETE', headers: myHeaders})
        .then (response => {
            console.log(response)
            response.json()})
        .then (data =>  console.log(data))
        .catch (error => console.error(error))
    }
}
