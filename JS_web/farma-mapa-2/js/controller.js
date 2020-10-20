export function controller() {

  // Creamos una variable map (inicializamos la variable). Después se realiza una instancia a la clase Map. Esta clase Map es el elemento central de la API de Google Maps, y es la encargada de crear el mapa. Para realizar una nueva instancia a esta clase se utiliza el operador JavaScript: new. El contenedor del mapa será el div que habíamos creado anteriormente y se lo indicamos mediante document.getElementById(‘map’).
  var map;


                    // Initialize and add the map
                    function initMap() {
                      // The location of Uluru
                      var uluru = { lat: 40.984543, lng: -3.596453 };
                      // The map, centered at Uluru
                      var map = new google.maps.Map(
                          document.getElementById('map'), { zoom: 5, center: { lat: 40.984543, lng: -3.596453 } });
                      // The marker, positioned at Uluru
                      var marker = new google.maps.Marker(
                          {
                              position: uluru,
                              map: map
                          }
                      );
                  }


    function newFunction() {
      return -25.344;
    }
  }




 /*  // Initizamos y añadimos el mapa
  function initMap() {
    // La localización de Madrid
    var madrid = { lat: newFunction(), lng: 131.036 };
    // El mapa centrado en Madrid
    var map = new google.maps.Map(
      document.getElementById('map'), { zoom: 4, center: madrid });
    // El marcador posicionado en Madrid
    var marker = new google.maps.Marker({
      map = new google.maps.LatLng(-25.344, 131.036),
      zoom: 4
    });
 */



  // window.onload = CargaScript interactúa con el navegador a través del objeto window del BOM (Browser Object Model) y espera al evento onload (fin de la carga de la pagina) llamando a la función CargaScript cuando esta acción ocurra. Y lo siguiente que se ejecuta es la función CargaScript:

/*   function CargaScript() {
    var script = document.createElement('script');
    script.src = 'http://https://maps.googleapis.com/maps/api/js?key=AIzaSyB3e13WFpXtGvf4XKSnmyS-3XqiDYbMxpo&callback=initMap';
    document.body.appendChild(script);
  }
  window.onload = CargaScript;
 */


  /* function getFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }     */
