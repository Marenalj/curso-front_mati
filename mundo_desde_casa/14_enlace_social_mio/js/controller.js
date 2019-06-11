export function controller () {
    
    console.dir(document.querySelector('section'))


    // Procedimiento habitual
    // 1. Referencia a los Nodos del DOM que me interesan

    const aNodosQuestion = document.querySelectorAll('.question')
/*     const aNodosRespuesta = document.querySelectorAll('.respuesta') */
    console.dir(aNodosQuestion)

    // 2. Definir los manejadores de eventos

    aNodosQuestion.forEach ( (item) => item.addEventListener('click', onClick) )

    // 3. Implementar los manejadores de eventos que hemos definido anteriormente.

    function changeText(element) {

        const elementId = element.innerHTML;
        document.getElementById(elementID).innerHTML = '¡Uy, no tengo esta red social!';
    }
    let elementsArray = [];
    function Elements(element1, element2, element3, element4) {
        elementsArray.push(element1);
        elementsArray.push(element2);
        elementsArray.push(element3);
        elementsArray.push(element4);
    }
    
    Elements("Twitter", "Facebook", "Linkedin", "Instagram");

    let str = '<ul>'

    elementsArray.forEach(function(element) {
        str += '<li id="' + element + '" onClick="changeText(' + element + ')"">' + element + '</li>';
    });

    str += '</ul>';
    document.getElementById("elementContainer").innerHTML = str;
    console.log(document.getElementById("elementContainer"),innerHTML)
