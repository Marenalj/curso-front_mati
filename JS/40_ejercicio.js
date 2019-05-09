/**
 * objeto Facturas
 * 
 * Definir la estructura de un objeto que almacena una factura.
 * Las factoras están formadas por:
 * - la info de la propia empresa (nombre de la empresa, dirección, teléfono, NIF),
 * - la info del cliente (similar a la de la empresa),
 * - una lista de elementos (cada uno de los cuales dispone de descripticón, precio, cantidad),
 * - y otra información básica de la factura (importe total, tipo de IVA, forma de pago).
 * Añadir un método que calcule el importe total de la factura
 * y actualice el valor de la propiedad correspondiente.
 * Añadir otro método que muestre por pantalla el importe total de la factura
 * (en un formato HTML adecuado)
 * 
 */

factura = {
    empresa: {
        nombre: '',
        dirección: '',
        teléfono:  '',
        NIF: ''
    },
    Cliente: {
        nombre: '',
        dirección: '',
        teléfono:  '',
        NIF: ''
    },
    items: [
        {descripción: '', precio: '', cantidad: ''},
        {descripción: '', precio: '', cantidad: ''},
        {descripción: '', precio: '', cantidad: ''},
    ],
    importeTotal: 0,
    tipoIVA: 0.23,
    formaPago: 'efectivo'
    calculaImporte: Function() {
        let iva = this.tipoIVA < 1 ? 1+this.tipoIVA : this.tipoIVA
        return this.items.map(item => item.precio * item.cantidad).reduce((a,b) => a + b)*IVA
    },
    actualizaImporte: function() {
        this.importeTotal = this.calculaImporte()
    },
    muestraImporte: function() {
        this.actualizaImporte()
        let msg
        console.log(this.importeTotal)
    }
    
