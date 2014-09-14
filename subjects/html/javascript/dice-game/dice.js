/*global $*/
/*jslint sloppy:true, browser: true, devel: true, eqeq: true, vars: true, white: true*/

/*

References:

* http://api.jquery.com/addClass/
* http://api.jquery.com/removeClass/
* http://api.jquery.com/toggleClass/
* http://api.jquery.com/attr/
* https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Getting_started/Selectors

Tips:

1. Start by looking closely at the restartGame function,
   it is already completed for you.
2. Move on to the roll function. Once this is done then
   you should see randomly selected dice every time the
   page is refreshed
3. Finally, add the holdDie function. This will make
   the game work.

For extra challenge, here are some ideas:

* Make it look better!
* Animate the dice for each roll https://api.jquery.com/animate/
* Implement another dice game, such as Farkle

*/

// TIP 1: Take a close look at restartGame below for some examples
function randomRoll() {
    // return a random number between 1 and 6
    return 1 + Math.floor(6 * Math.random());
}

// TIP 2: Work on this one first
function rollDice() {
    // Roll all of the dice
    // TODO: remove the 'selectable' class from all elements that have both
    //       the 'die' and 'hold' class
    $('.die.hold').removeClass('selectable');
    // TODO: set the 'data-roll' attribute to the randomRoll function
    //       for all elements that have the 'die' and 'selectable' class
    $('.die.selectable').attr('data-roll', randomRoll);
    // Leave this here to update the state after the dice are rolled
    $('.game').trigger('update-game-state');
}

// TIP 3: Do this last
function holdDie() {
    // TODO: toggle the class 'hold' for the die that was just clicked
    // HINT: It will start with $(this)
    $(this).toggleClass('hold');
    // Leave this here to update the state after the die is held
    $('.game').trigger('update-game-state');
}

function restartGame() {
    // EXAMPLE:
    // TODO: add the class 'selectable' to every element
    //       with the 'die' class
    $('.die').addClass('selectable');
    // EXAMPLE:
    // TODO: remove the class 'hold' from every element
    //       with the 'die' class
    $('.die').removeClass('hold');
    rollDice();
}

function calculateScore() {
    // Calculate the total and determine if it qualifies
    var has1 = false;
    var has4 = false;
    var total = 0;
    $('.die.hold').each(function () {
        // Convert the 'data-roll' attribute to a number
        var roll = parseFloat($(this).attr('data-roll'));
        if (!has1 && roll == 1) {
            // If we don't have a 1 yet, and this die is a 1
            // then mark that we have found a 1
            has1 = true;
        } else if (!has4 && roll == 4) {
            // If we don't have a 4 yet, and this die is a 4
            // then mark that we have found a 4
            has4 = true;
        } else {
            // Otherwise, count the roll towards the score
            total = total + roll;
        }
    });
    return {qualify: has1 && has4, value: total};
}

function updateState() {
    if ($('.die.hold.selectable').length > 0) {
        // Enable the roll button by removing its disabled attribute
        // if at least one die has both the 'selectable' and 'hold' classes
        // This will make the HTML look like this:
        //
        //    <button class="roll">
        //
        $('button.roll').removeAttr('disabled');
    } else {
        // Otherwise disable the roll button by setting its disabled
        // attribute to the string 'disabled'.
        // This will make the HTML look like this:
        //
        //   <button class="roll" disabled="disabled">
        //
        $('button.roll').attr('disabled', 'disabled');
    }
    var score = calculateScore();
    // Toggle (turn on or off like a switch) the 'invalid' class
    // of the score. If score.qualify is not true then add it, otherwise
    // remove it.
    // Then set the text to the score value.
    $('.score')
        .toggleClass('invalid', !score.qualify)
        .text(score.value);
    // rollAgain is true if there is at least one die without the 'hold' class
    var rollAgain = $('.die:not(.hold)').length > 0;
    // if rollAgain is false then hide the roll button, otherwise show it
    $('button.roll').toggleClass('hide', !rollAgain);
    // if rollAgain is true then hide the play-again button, otherwise show it
    $('button.play-again').toggleClass('hide', rollAgain);
}

$(document).ready(function() {
    // This gets called exactly once to set everything up
    $('.game').on('update-game-state', updateState);
    // When the dice are clicked
    //   if the click is on a selectable die
    //   then call holdDie
    $('.dice').on('click', '.die.selectable', holdDie);
    // When the buttons are clicked
    //   if the click is on the roll button and it is enabled
    //   then call rollDice
    $('.buttons').on('click', 'button.roll:enabled', rollDice);
    //   if the click is on the play-again button and it is enabled
    //   then call restartGame
    $('.buttons').on('click', 'button.play-again:enabled', restartGame);
    // restart the game as soon as the page loads
    restartGame();
});