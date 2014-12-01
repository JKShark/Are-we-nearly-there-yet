//////////////////////////////////////////////////////////////////////////
//
// Photo grid settings
//
//////////////////////////////////////////////////////////////////////////

$('.photoset-grid-lightbox').photosetGrid({
  highresLinks: true,
  rel: 'withhearts-gallery',
  gutter: '5px',

//////////////////////////////////////////////////////////////////////////
//
// Colorbox settings for popup lightbox on photos page
//
//////////////////////////////////////////////////////////////////////////

  onComplete: function(){
    $('.photoset-grid-lightbox').attr('style', '');
    $('.photoset-grid-lightbox a').colorbox({
     	title: function(){ return jQuery(this).find('img').attr('alt');}, //changes colorbox to use alt instead of href title as caption
      photo: true,
      scalePhotos: true,
      maxHeight:'90%',
      maxWidth:'90%'

    });
  }
});

$('a.gallery').colorbox({title:function () {
    return "To view full size, " + "click here!".link(this.href);
}});

//////////////////////////////////////////////////////////////////////////
//
// Fixes header to top of page on scrolling landing page
//
//////////////////////////////////////////////////////////////////////////

$(document).scroll(function () {
  var viewportHeight = $(window).height();
  var y = $(document).scrollTop(),
		header = $('#page-header');

	if (y >= viewportHeight) {
		header.addClass('fixed');
	} else {
		header.removeClass('fixed');
	}
});


//////////////////////////////////////////////////////////////////////////
//
// Google Maps
//
//////////////////////////////////////////////////////////////////////////

function initializeMap() {
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(51.522534, -0.109436),
    scrollWheel: true // If you want to disable zooming with scroll for now, set this to true
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var office = new google.maps.Marker({
      position: new google.maps.LatLng(51.522534, -0.109436),
      map: map
  });

  var house = new google.maps.Marker({
      position: new google.maps.LatLng(51.511049, -0.025729),
      map: map
  });

  var infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(house, 'click', function() {
    infowindow.setContent('My house!');
    infowindow.open(map, house);
  });

  google.maps.event.addListener(office, 'click', function() {
    infowindow.setContent('General Assembly!');
    infowindow.open(map, office);
  });
}

google.maps.event.addDomListener(window, 'load', initializeMap);


