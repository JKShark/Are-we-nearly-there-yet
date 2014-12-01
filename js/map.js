
//////////////////////////////////////////////////////////////////////////
//
// Google Maps
//
//////////////////////////////////////////////////////////////////////////

  var locations = [
    ['Dubai', 25.130900, 55.117200, 'desert-icon.png'],
    ['Vietnam', 21.027764, 105.834160, 'peace-icon.png'],
    ['<a href="http://www.google.com">Japan</a>', 35.689487, 139.691706, 'japanese-icon.png'],
    ['China', 39.904211, 116.407395, 'hongkong-icon.png'],
    ['Hong Kong', 22.396428, 114.109497, 'hongkong-icon.png'],
    ['Koh Samui', 9.512017, 100.013593, 'beach-icon.png'],
    ['Singapore', 1.352083, 103.819836, 'hongkong-icon.png'],
    ['Bali', -8.409518, 115.188916, 'volcano-icon.png'],
    ['Sydney', -33.867487, 151.206990, 'shore-icon.png'],
    ['Hayman Island', -20.051547, 148.887349, 'beach-icon.png'],
    ['New Zealand', -41.286460, 174.776236, 'hill-icon.png'],
    ['Hawaii', 19.896766, -155.582782, 'sunset-icon.png'],
    ['Los Angeles', 34.052234, -118.243685, 'surfing-icon.png'],
    ['New Orleans', 29.951066, -90.071532, 'wetlands-icon.png'],
    ['Miami', 25.761680, -80.191790, 'marina-icon.png'],
    ['New York', 40.712784, -74.005941, 'hongkong-icon.png'],
    ['Home Sweet Home', 51.507351, -0.127758, 'home-icon.png']
  ];
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 2,
    center: new google.maps.LatLng(15, -155),
    mapTypeId: google.maps.MapTypeId.HYBRID,
    panControl: false,
    zoomControl: false,
    streetViewControl: false,
    mapTypeControl: false
  });

  var infowindow = new google.maps.InfoWindow();

  var marker, i;

  for (i = 0; i < locations.length; i++) {
      
      var image = locations[i][3];

      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        animation: google.maps.Animation.DROP,
        icon: image
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }

      })(marker, i));
  }