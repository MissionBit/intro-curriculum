/*global $*/
/*jslint sloppy:true, browser: true*/

var score;
var xCoordinate;
var xAccuracy;

function nextRound() {
    xCoordinate = Math.ceil(Math.random() * $(window).width());
}

function restartGame() {
    score = 0;
    xAccuracy = 1000;
    nextRound();
}

function updateDisplay() {
    $('.expect-x').text(xCoordinate);
    $('.accuracy-x').text(xAccuracy);
    $('.score').text(score);
}

restartGame();
updateDisplay();

$(window).on('click', function (e) {
    if (Math.abs(e.pageX - xCoordinate) <= xAccuracy) {
        score = score + 1;
        xAccuracy = xAccuracy * 0.5;
        nextRound();
    } else {
        restartGame();
    }
    updateDisplay();
});