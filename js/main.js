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
// Moves blog posts on to the next or previous post
//
//////////////////////////////////////////////////////////////////////////


// Make sure to add the link for each new blog post here
// Needs to have one array for JK, one for M and one for A

//var currentPostIndex = 0;
//var jkposts = ["jk-why-write-a-blog.html", "jk-second-blog-post.html", "jk-third-blog-post.html"];


//function previousPost() {
  // Go to the previous image
    // if (currentPostIndex > 0) {
          // changePost(--currentPostIndex);
    // } 
// }

// function nextPost() {
  // Go to the next image
    // if (currentPostIndex < jkposts.length-1) {
            // changePost(++currentPostIndex);
    // }
// }

// function changePost() {
  // $('.changePost').attr('href', jkposts[currentPostIndex]);
// }

// $(document).ready(function() {
  // $('#oldPost').on('click', previousPost);
  // $('#newPost').on('click', nextPost);
  // });

  



