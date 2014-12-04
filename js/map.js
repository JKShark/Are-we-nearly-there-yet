
//////////////////////////////////////////////////////////////////////////
//
// Google Maps
//
//////////////////////////////////////////////////////////////////////////

  var locations = [
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.atlantisthepalm.com/marineandwaterpark/aquaventure.aspx" target="_blank"> Dubai </a>', 25.130900, 55.117200, 'desert-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://kids.nationalgeographic.com/content/kids/en_US/explore/countries/vietnam/" target="_blank"> Vietnam </a>', 21.027764, 105.834160, 'peace-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.tsunagujapan.com/" target="_blank"> Japan </a>', 35.689487, 139.691706, 'japanese-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.chinahighlights.com/greatwall/" target="_blank"> China </a>', 39.904211, 116.407395, 'hongkong-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.hongkonghustle.com/" target="_blank"> Hong Kong </a>', 22.396428, 114.109497, 'hongkong-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://travel.cnn.com/explorations/life/destinations/best-koh-samui-846987" target="_blank"> Koh Samui </a>', 9.512017, 100.013593, 'beach-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://singapore.grand.hyatt.com/en/hotel/activities/hotel-activities/sundaybrunchatmezza9.html" target="_blank"> Singapore </a>', 1.352083, 103.819836, 'hongkong-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://http://www.indo.com/destinations/bali.html" target="_blank"> Bali </a>', -8.409518, 115.188916, 'volcano-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.sydneycool.com.au/" target="_blank"> Sydney </a>', -33.867487, 151.206990, 'shore-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://hayman.oneandonlyresorts.com/" target="_blank"> Hayman Island </a>', -20.051547, 148.887349, 'beach-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.queenstownnz.co.nz/information/thingstodo/" target="_blank"> New Zealand </a>', -41.286460, 174.776236, 'hill-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://magicseaweed.com/Hawaii-Surf-Forecast/51/" target="_blank"> Hawaii </a>', 19.896766, -155.582782, 'sunset-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.thrillist.com/drink/los-angeles" target="_blank"> Los Angeles </a>', 34.052234, -118.243685, 'surfing-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.airboatadventures.com/" target="_blank"> New Orleans </a>', 29.951066, -90.071532, 'wetlands-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.nbc.com/classic-tv/miami-vice/video" target="_blank"> Miami </a>', 25.761680, -80.191790, 'marina-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.timeout.com/newyork/things-to-do/cool-things-to-do-on-nyc-rooftops" target="_blank"> New York </a>', 40.712784, -74.005941, 'hongkong-icon.png'],
    ['<a style="color:#df4747; padding:10px; font-weight: 400" href="http://www.artisancoffee.co.uk/" target="_blank"> Home Sweet Home </a>', 51.507351, -0.127758, 'home-icon.png']
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