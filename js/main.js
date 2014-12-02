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
