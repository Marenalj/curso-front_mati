/**
 * Objeto Facturas
 * 
 * Definir la estructura de un objeto que almacena una factura. 
 * Las facturas están formadas por 
 * - la información de la propia empresa (nombre de la empresa, dirección, teléfono, NIF),
 * - la información del cliente (similar a la de la empresa),
 * - una lista de elementos (cada uno de los cuales dispone de descripción, precio, cantidad)
 * - y otra información básica de la factura (importe total, tipo de IVA, forma de pago).
 * Añadir un método que calcule el importe total de la factura 
 * y actualice el valor de la propiedad correspondiente.
 * Añadir otro método que muestre por pantalla el importe total de la factura
 * (en un formato HTML adecuado)
 * 
 * map proyecta un array. Nos da una proyección (aplicar una función) de resultados de la operación que realizamos [2, 4, 5, 'Pepe'] *2  [4, 16, 25, NaN]. map necesita que le digas qué proyección tiene que hacer. Por sí solo no hace nada.
 * Precio por cantidad, el primer elemento va a ser 20*12, el segundo 24*10 y el tercero 34*7
 * Después sumamos todos los elementos del array (te los reduce a un número)
 * map y reduce (las dos funciones). Devuelve un valor (number en este caso). reduce opera con dos parámetros. (con un for if operarías con más de dos parámetro)
 */
(function(){

    factura = {
       empresa: {
           nombre: 'Espasa', 
           dirección: 'C/ Calle Benito de Castro ', 
           teléfono: '919893764', 
           NIF: 'B-916579874'},
       cliente: {
           nombre: 'Maeva Ediciones', 
           dirección: 'C/ Pato ', 
           teléfono: '917256983', 
           NIF: 'B-654384741'},
       items: [
           {descripcion: 'El director', precio: 20, cantidad: 12},
           {descripcion: 'Una jaula de oro', precio: 24, cantidad: 10},
           {descripcion: 'Cómo hacer que te pasen cosas buenas', precio: 34, cantidad: 7},
       ],
       importeTotal: 0, 
       tipoIVA: 0.23, 
       formaPago: 'efectivo',
       calculaImporte: function() {
           let iva = this.tipoIVA < 1 ? 1 + this.tipoIVA : this.tipoIVA
           return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a+b)*iva
       },
       // esta función actualiza
       actualizaImporte: function () {
           this.importeTotal = this.calculaImporte()
       },
       muestraImporte: function () {
           // this.actualizaImporte()
           // let msg = 'El importe total (IVA incluido) es ' + this.importeTotal.toFixed(2) + ' €'
           // aplicar el toFixed(2) para que salgan dos decimales
           let msg = 'El importe total (IVA  incluido) es ' + this.calculaImporte().toFixed(2) + ' €'
           console.log(msg)
       }
   }
   factura.muestraImporte()
   })()