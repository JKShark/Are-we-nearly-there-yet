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

