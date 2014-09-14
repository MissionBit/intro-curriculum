/*jslint sloppy:true*/
/*global $ */
$('.clickable').on('click', function () {
    $(this).toggleClass('clicked');
});