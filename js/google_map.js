
// var google;

// function init() {
//     // Basic options for a simple Google Map
//     // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
//     // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
//     var myLatlng = new google.maps.LatLng(-8.116712773789736, 115.08922376829554);
//     // 39.399872
//     // -8.224454
    
//     var mapOptions = {
//         // How zoomed in you want the map to start at (always required)
//         zoom: 7,

//         // The latitude and longitude to center the map (always required)
//         center: myLatlng,

//         // How you would like to style the map. 
//         scrollwheel: false,
//         styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
//     };

    

//     // Get the HTML DOM element that will contain your map 
//     // We are using a div with id="map" seen below in the <body>
//     var mapElement = document.getElementById('map');

//     // Create the Google Map using out element and options defined above
//     var map = new google.maps.Map(mapElement, mapOptions);
    
//     var addresses = ['Brooklyn'];

//     for (var x = 0; x < addresses.length; x++) {
//         $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+addresses[x]+'&sensor=false', null, function (data) {
//             var p = data.results[0].geometry.location
//             var latlng = new google.maps.LatLng(p.lat, p.lng);
//             new google.maps.Marker({
//                 position: latlng,
//                 map: map,
//                 icon: 'images/loc.png'
//             });

//         });
//     }
    
// }
// google.maps.event.addDomListener(window, 'load', init);

// fungsi initialize untuk mempersiapkan peta
        function initialize() {
        var propertiPeta = {
            center:new google.maps.LatLng(-8.116595938813779, 115.08920231062292),
            zoom:20,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        
        var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);

              // membuat Marker
                  var marker=new google.maps.Marker({
                      position: new google.maps.LatLng(-8.116595938813779, 115.08920231062292),
                      map: peta,
                      animation: google.maps.Animation.BOUNCE
                  });
        }

        // event jendela di-load  
        google.maps.event.addDomListener(window, 'load', initialize);