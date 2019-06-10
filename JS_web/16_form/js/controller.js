export function controller() {
    console.log('Controller cargado')

    let formData = {}
    // la validación empieza cuamdo has hecho un evento submit onSubmit. con el preventDefault me cargo el evento submit cuando ya ha cumplido su función
    let form_curso = document.querySelector('#form_curso')

    form_curso.addEventListener('submit', onSubmit)

    let dni = document.querySelector('#dni')
    dni.addEventListener('change', () => {
        console.dir(dni)
        if (isLetraDNIValida(dni.value)) {
            dni.setCustomValidity('')
        }
    } )

    document.querySelector('#dni').setCustomValidity('Letra del DNI incorrecta')

    function onSubmit(ev) {
        console.log('Formulario enviado')
        ev.preventDefault()

        // Validación
        if (document.querySelector('#nombre').validity.valueMissing) {
            document.querySelector('#nombre').nextElementSibling.innerHTML = 'Completa este campo'
            return

            //document.querySelector('#nombre').nextElementSibling.innerHTML = validationMessage
            //document.querySelector('#nombre').validationMessage
            //return 

        }
        
        console.log(document.querySelector('#nombre'))
        

        let aControles = document.querySelectorAll(`[type="text"], 
                                                        [type="email"], 
                                                        [type="password"], 
                                                        [type="date"],
                                                        textarea`)

        for (let i = 0; i< aControles.length; i++) {
            const item = aControles[i];
            if(!validate(item)) {
                // return de la función submit. Este bucle está validando el text, email, password, date y textarea.
                return
            }
        }

        aComtroles.forEach(item => validate(item))                                              

        aControles.forEach(item => formData[item.id] = item.value)                                        
        
        let aChecks = document.querySelectorAll('[ type="checkbox"]')

        aChecks.forEach(item => formData[item.id] = item.checked)

        let aRadioSede = document.querySelectorAll('[name="sede"]')
        setRadio(aRadioSede, formData)

        let aRadioTurno = document.querySelectorAll('[name="turno"]')
        setRadio(aRadioTurno, formData)

        let aSelects = document.querySelectorAll('select')

        aSelects.forEach(
            item => setSelect(item, formData )
        )
        
        setConfirmar(formData)
    }
}

function validate(nodo) {

    if (nodo.validity.valueMissing) {
        nodo.nextElementSibling.innerHTML = 'Completa este campo'
        nodo.autofocus = true;
        console.dir(nodo)
        return false
    }

}


function setRadio(radio, data) {
    radio.forEach(
        item => {
            if (item.checked) {
                // data[item.name] = item.value
                data[item.name] = {id: item.id, value: item.id}
                return
            }
        }
    )
}

function setSelect(select, data) {
    console.dir(select)
    data[select.name] = {
        id: select[select.selectedIndex].value, 
        value: select[select.selectedIndex].text
    }
    /* {
        clave: select.selectedOptions[0].value, 
        nombre: select.selectedOptions[0].text
    } */
}

function setConfirmar(data) {
    let dialog = document.querySelector('#confirmar')
    // dialog.open = true
    
    let datosOutput = document.querySelector('#datosOutput')
   
    datosOutput.innerHTML = mostrarObjeto(data)
    
    dialog.showModal()

    document.querySelector('#btnConfirmar')
        .addEventListener('click', ()=>{
            dialog.close()
            form_curso.submit()
        })
    
    document.querySelector('#btnNoConfirmar')
        .addEventListener('click', ()=>{
            dialog.close()
        })
   

}

function mostrarObjeto(obj) {
    let cadena = '<ul>'
    for (const key in obj) {
        const element = obj[key]
        if (typeof element != 'object') {
            cadena +=`<li>${key}: ${element}</li>`
        }
        else {  
            cadena += '<li>'+ key
            cadena +=  mostrarObjeto(element) 
            cadena += '</li>'
        }
    }
    cadena += '</ul>'
    console.log(cadena)
    return cadena
}
