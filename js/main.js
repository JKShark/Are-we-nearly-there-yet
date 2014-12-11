//////////////////////////////////////////////////////////////////////////
//
// Hidden menu for small screens
//
//////////////////////////////////////////////////////////////////////////

$('#menuButton').click(function() {
    $('.hiddenMenu').animate({"right":"0px"}, 1000);
});

  $('.closeButton').click(function() {
    $('.hiddenMenu').animate({"right":"-50vw"}, 1000);
});


//////////////////////////////////////////////////////////////////////////
//
// Accordian function
//
//////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
  $('.a-first h1').on('click', function () {
    $(this).parent().toggleClass('open');
  });
});

$(document).ready(function () {
  $('.a-second h1').on('click', function () {
    $(this).parent().toggleClass('open');
  });
});

$(document).ready(function () {
  $('.a-third h1').on('click', function () {
    $(this).parent().toggleClass('open');
  });
});


//////////////////////////////////////////////////////////////////////////
//
// Time of trip counter
//
//////////////////////////////////////////////////////////////////////////

// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Get the year this year
var day = today.getTime();
// Set the date that the company was established
var leaving_date = new Date('Dec 18, 2014 20:00:00');
// Get difference between then & now in milliseconds
var difference = today.getTime() - leaving_date.getTime();
// Divide by number of milliseconds to get years
difference = (difference / (24*3600*1000));

// Create a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('date_message');
// Write the message into that element.
elMsg.textContent = 'Days since we left home: ' + Math.floor(difference);



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

// $('a.gallery').colorbox({title:function () {
//     return "To view full size, " + "click here!".link(this.href);
// }});






//////////////////////////////////////////////////////////////////////////
//
// Disqus
//
//////////////////////////////////////////////////////////////////////////

        /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        // var disqus_url = 'http://www.are-we-nearly-there.com';
        // var disqus_identifier = '/jk/jk-ga-rocks.html';
        // var disqus_container_id = 'disqus_thread';
        // var disqus_domain = 'disqus.com';
        // var disqus_title = "GA Rocks!";
        // var disqus_shortname = 'arewenearlythere'; // required: replace example with your forum shortname

        /* * * DON'T EDIT BELOW THIS LINE * * */
        // (function() {
            // var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            // dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            // (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        // })();

    // <noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
