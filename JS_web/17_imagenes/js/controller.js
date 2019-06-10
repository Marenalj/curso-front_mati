export function controller() {
    console.log('Controller cargado')

//variable stich propiedad true
   // let stich = true

   // .img_dinamic
   // .button


    function onClickImg(ev) {
        let nodoImg = ev.target.previousElementSibling.firstElementChild
        if (nodoImg.id == 'img1') {
            if (img1_stich) {
                nodoImg.src = "./assets/stich_depie.jpg"
            } else {
                nodoImg.src = "./assets/peluche-stitch-lilo-stich-disney-stitch-32-cm-D_NQ_NP_682403-MCO25758255829_072017-F.jpg"
            }
            img1_stich = !img1_stich 
        } else if (nodoImg.id == 'img2') {
            if (img2_stich_depie) {
                nodoImg.src = "./assets/stich_depie.jpg"
            } else {
                nodoImg.src = "./assets/peluche-stitch-lilo-stich-disney-stitch-32-cm-D_NQ_NP_682403-MCO25758255829_072017-F.jpg"
            }
            img2_stich = !img2_stich_depie
        } 
    }
}
