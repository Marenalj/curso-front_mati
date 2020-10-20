export function controller() {
  var map;
  function initMap() {
     map = new google.maps.Map(document.getElementById('map'), {
   center: {lat: 40.835117, lng: -3.676314},
       zoom: 4,
     });
     var marker = new google.maps.Marker({
       position: {lat: 40.835117, lng: -3.676314},
       map: map,
 title: 'Mapa de España'
     });
   }
    // Initialize and add the map
    function initMap() {
        // The location of Madrid
        var madrid = {lat: 40.835117, lng: -3.676314};  
        // The map, centered at Madrid
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: madrid});
        // The marker, positioned at Madrid
        var marker = new google.maps.Marker({position: madrid, map: map});
      }
    }
    


      
