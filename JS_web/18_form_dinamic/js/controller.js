import { GENEROS } from "./datos.js";

export function controller () {
    console.log('Controller cargado')
    console.log(GENEROS)
    const aGeneros = GENEROS
    let iGenero
    let iAutor
    let html = ''

    let selectGeneros = document.querySelector('#generos')
    let selectAutores = document.querySelector('#autores')
    let btnPedir = document.querySelector("#btnPedir")

    selectGeneros.addEventListener('change', onChangeGenero)
    selectAutores.addEventListener('change', onChangeAutores)

    btnPedir.addEventListener('click', onClickPedir)
    //btnPedir.onclick = onClickPedir                 forma antigua de definir los eventos


    aGeneros.forEach ( item => {
        html += `<option value="${item.value}">${item.label}</option>`     
    })

    selectGeneros.innerHTML = html

    function onChangeGenero(ev) {
        iGenero = ev.target.selectedIndex
        let aAutores = []
        html = '<option value=""></option>'
        if (iGenero) {
            aAutores = aGeneros[iGenero].autores
            aAutores.forEach ( item => { 
                html += `<option value="${item.value}">${item.label}</option>`     
            })    
            selectAutores.focus()
        } 
        selectAutores.innerHTML = html
        btnPedir.textContent = 'Pedir titulos'
        btnPedir.disabled = true

    }
     

    function onChangeAutores (ev) { 
        if (ev.target.selectedIndex) {
            iAutor = ev.target.selectedIndex - 1
            btnPedir.textContent = 'Pedir titulos de ' + aGeneros[iGenero].autores[iAutor].label
            btnPedir.disabled = false
        } else {
            btnPedir.textContent = 'Pedir titulos'
            btnPedir.disabled = true
        }
    }

    function onClickPedir() {
        console.clear()
        console.log('Iniciando petición')
        ajax(aGeneros[iGenero].autores[iAutor].value)
    }
    
}

function ajax(clave) {

    const url = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${clave}&fields=items(volumeInfo(publisher,title,language))`

    const http = new XMLHttpRequest()

    http.addEventListener('readystatechange', onResponse)
    //http.onreadystatechange = onResponse

    http.open('GET', url)
    http.send(null)

    function onResponse() {
        console.log(http.readyState)
        if (http.readyState == 4 && http.status == 200) {
            procesarRespuesta(http.responseText)
        }
    }
}

function procesarRespuesta(response) {
    let aDatos = JSON.parse(response).items
    console.log(aDatos)
    let aDatosFinal = aDatos.map(item => {item.volumenInfo} )
    console.log(aDatosFinal)

}

function mostrarRespuesta(aDatos) {

    crearTabla() {
        let output = document.querySelector('#output')
        let tabla = '<table>'
        table += '<tr><th>Título</th><th>Editorial</th><th>Idioma</th></tr>'
        aDatos.forEach( (item, i) => tabla += 
        `<tr>
        <td>${item}</td>
        <td>${item.publisher}</td>
        <td>${item.language}</td></tr>`)

        tabla += '</table>'
        this.tabla.innerHTML = tabla
    }
}