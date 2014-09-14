/*global $*/
/*jslint sloppy:true, browser: true, devel: true*/

function randomInt(lo, hi) {
    var range = hi - lo;
    return lo + Math.floor(range * Math.random());
}

function randomRoll() {
    var roll = randomInt(0, 5);
    return String.fromCharCode(9856 + roll);
}

$(window).on('click', function (e) {
    $('.die').text(randomRoll);
});
