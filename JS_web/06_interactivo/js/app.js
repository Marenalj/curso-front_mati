/**
 * app.js siempre empieza con document.addEventListener.
 * El primer elemento es el evento y el segundo es la función manejadora del evento (función con un nombre o una función anónima). Con clase sería como sigue. Si la clase se llama saludador, tiene que haber un archivo que se llame saludador 
 * 
 * */ 

import { main } from './saludador.js'

document.addEventListener('DOMContentLoaded', main ) 

