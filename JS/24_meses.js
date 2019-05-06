/**
 * Creamos un objeto con los nombres de los meses del año en español como
 * propiedades y sus equivalentes en otro idioma (e.g. inglés) como valor
 * y añadimos una función que muestre por consola la frase
 * 
 * El mes ... en inglés se dice ..."para cada uno de los meses"
 */

let mesesEnIngles = {
    enero: 'January',
    febrero: 'February',
    marzo: 'March',
    abril: 'April',
    mayo: 'May',
    junio: 'June',
    julio: 'july',
    agosto: 'August',
    septiembre: 'September',
    octubre: 'October',
    noviembre: 'November',
    diciembre: 'December',
    toString: function () {
        let output = ''
        for (const key in this) {
            const element = this[key]
            if (typeof element === 'function') {
            continue
        }
        output = output + `El mes ${key} en inglés se dice ${element}` + '\n'
    }
        return output
},
    mostrar: function() {
        console.log (this.toString())
    },
  }
mesesEnIngles.mostrar()

