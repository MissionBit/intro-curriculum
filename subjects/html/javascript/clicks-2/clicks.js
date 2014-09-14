/*global $*/
/*jslint sloppy:true, browser: true*/

// Replace the page title with "It worked!"
$('h1.page-title').text('It worked!');

// Every time the page is clicked, move the logo and toggle its opacity
$(window).on('click', function (e) {
    var logo = $('img.logo');
    if (e.pageX < logo.position().left) {
        $('h1.click-position').text('You clicked to the left of the logo');
    } else {
        $('h1.click-position').text('You clicked to the right of the logo');
    }
    logo.css({left: e.pageX,
              top: e.pageY});
});

// If the logo is clicked, rotate it!
$('img.logo').on('click', function (e) {
    $(this).toggleClass('clicked');
    e.stopImmediatePropagation();
});

var numberOfClicks = 0;
function updatePageTitle() {
    $('h1.page-title').text(['Clicks: ', numberOfClicks].join(''));
}

updatePageTitle();

$(window).on('click', function (e) {
    numberOfClicks = numberOfClicks + 1;
    updatePageTitle();
});
