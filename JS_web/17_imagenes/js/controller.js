export function controller() {
    console.log('Controller cargado')
//variable dragon propiedad true
   // let dragon = true

   // .img_dinamic
   // .button

   let img1_dragon = true
   let img2_dragon = false

   aBotones = document.querySelectorAll('.button')
   aBotones.forEach(item => {
       item.addEventListener('click', onClickImg)
   });


    function onClickImg(ev) {
        let nodoImg = ev.target.previousElementsSibling.firstElementChild
// ev.target es el botón en el que yo he hecho click pero si pongo previousElementSibling y accedo a firstElementChild, llego a la imagen
        console.log(nodoImg.id)

        if (nodoImg.id == 'img1') {
            if (img1_dragon) {
                nodoImg.src = "./assets/iguana.png"
            } else {
                nodoImg.src="./assets/dragon_komodo.jpg"
            }
            img1_dragon = !img1_dragon
        } else if (nodoImg.id == 'img2') {
            if (img2_dragon) {
                nodoImg.src = "./assets/iguana.png"
            } else {
                nodoImg.src="./assets/dragon_komodo.jpg"
            }
            img2_dragon = !img2_dragon
        }
        }

/*       */
}