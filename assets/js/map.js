var map_center = new google.maps.LatLng(-23.1796902,-47.2630103);
var map_icon_position = new google.maps.LatLng(-23.1796902,-47.2630103);


function initialize() {

   var mapOptions = {
       center: map_center,
       disableDefaultUI: true,
       zoomControl: true,
       streetViewControl: true,
       zoom: 16,
       scrollwheel: false,
       navigationControl: false,
       mapTypeControl: false,
       scaleControl: false
       // mapTypeId: google.maps.MapTypeId.HYBRID

   };

   var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  
   // opções do marcador
   var marker = new google.maps.Marker({
      position: map_icon_position,
      map: map,
      title:"Greenpark",
      icon: 'assets/img/map_icon.png',
      animation: google.maps.Animation.DROP
  });

}

google.maps.event.addDomListener(window, 'load', initialize);