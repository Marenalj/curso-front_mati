export function controller() {
    console.log('Controller cargado')

//variable dragon propiedad true
   // let dragon = true

   // .img_dinamic
   // .button

   export function controller() {
    console.log('Controller cargado')


    function onClickImg(ev) {
        let nodoImg = ev.target.previousElementSibling.firstElementChild

// ev.target es el botón en el que yo he hecho click pero si pongo previousElementSibling y accedo a firstElementChild, llego a la imagen
        console.log(nodoImg.id)

        if (nodoImg.id == 'img1') {
            if (img1_stich) {
                nodoImg.src = "./assets/stich_depie.png"
            } else {
                nodoImg.src = "./assets/dragon_komodo.jpg"
            }
            img1_dragon = !img1_stich 
        } else if (nodoImg.id == 'img2') {
            if (img2_dragon) {
                nodoImg.src = "./assets/peluche-stitch-lilo-stich-disney-stitch-32-cm-D_NQ_NP_682403-MCO25758255829_072017-F.jpg"
            } else {
                nodoImg.src = "./assets/D_NQ_NP_932687-MLM28574486981_112018-O.jpg"
            }
            img2_dragon = !img2_dragon
        } 
    }
}
