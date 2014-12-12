
//////////////////////////////////////////////////////////////////////////
//
// Photo grid settings
//
//////////////////////////////////////////////////////////////////////////

$('.photoset-grid-basic').photosetGrid();


$('.photoset-grid-lightbox').photosetGrid({
  highresLinks: true,
  rel: 'withhearts-gallery',
  gutter: '5px',

// //////////////////////////////////////////////////////////////////////////
// //
// // Colorbox settings for popup lightbox on photos page
// //
// //////////////////////////////////////////////////////////////////////////

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
