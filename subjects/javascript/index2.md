# Javascript (clicks)

HTML is about structure, CSS is about presentation, and Javascript is
about function. Javascript is the programming language of the web, and
we'll be spending a lot of time with it this semester.

Javascript is less forgiving than HTML. It doesn't try and work around
your mistakes. All of us are here to help you along here, so
feel free to ask for help if you see a warning or error you don't
understand or if things just aren't working. Brackets and Chrome will 
try and help you find these sorts of mistakes, but it takes some practice
to learn how to decipher what they're saying.

Most developers use a library to make writing browser code a little
easier, so we're going to skip right to that step. jQuery is the most
popular choice so we'll start with that one.

Write the following URLs on the board:

* http://bit.ly/mbit-intro-clicks
* http://jquery.com
* http://codecademy.com/tracks/javascript
* http://codecademy.com/tracks/jquery

Have them download the gist from mbit-intro-clicks and put it in
a `clicks` folder in their repository (should be done from 6).

Explain that the comments on top is to configure brackets to have
JSLint in Brackets only give us warnings that are relevant to what
we're doing.

```javascript
/*global $*/
/*jslint sloppy: true, browser: true*/
```

## Replace text on load

Now go back to your clicks.js file and add the following code:
```javascript
$("h1.page-title").text("My code runs!");
```

Now when you save it, you shouldn't get any warnings. These comments
tell Brackets that we are using jQuery, and that we don't want to
use a stricter subset of JavaScript just yet.

Now when you refresh the page it should say "My code runs!"
instead of "We'll replace this title".

(This may take a little while to get everyone caught up)

## Move logo to click position

The next thing we want to try is to do something when we click the
page. We can do this by telling jQuery to call a function when
we click anywhere on the page. Add this code to the bottom of
your `clicks.js` file:

```javascript
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX});
});
```

I asked the students how to get it to move vertically

```javascript
$(window).on('click', function (e) {
    $('img.logo').css({left: e.pageX,
                       top: e.pageY});
});
```

## Add a transition

What are some other things we can do with this? One is to make it
smoothly transition from one position to the other. We can do this
by adding `transition: 1s` to the CSS rule for `img.logo`.

# Freestyle

From this point I basically made things up as we went along based on
ideas from the students. Here's what they came up with:

## Rotate

This was implemented by adding the following CSS

```css
.rotated {
    -webkit-transform: rotate(360deg);
}
```

> A common mistake that students made at this point was
> writing `$('logo')` instead of `$('.logo')`. Perhaps
> sticking with the full `tag.class` syntax would've been
> a little more successful.

With this handler:

```javascript
$(window).on('click', function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    $('.logo').toggleClass('rotated');
});
```

## Follow the mouse

Change the handler to use `'mousemove'` rather than click

## Flip

Change the CSS rule for `rotated` to:

```javascript
.rotated {
    -webkit-transform: rotateY(180deg);
}
```

## Vibrate

To make it vibrate, I decided to periodically manipulate the
margins. Since transitions were turned on we can do this periodically.

```javascript
setInterval(function () {
    $('.logo').css({
        'margin-left': 200 * Math.random() - 100
    });
}, 200);
```

We then pulled the random number generator to apply it to both axes

```javascript
function randomMargin() {
    return Math.random() * 200 - 100;
}
setInterval(function () {
    $('.logo').css({
        'margin-left': randomMargin(),
        'margin-right': randomMargin()
    });
}, 200);
```

## Bounce around the screen

This was a little trickier, but it was cool to hear the students talk
about physics at this point. I started by implementing just the
horizontal motion and the students helped with the rest.

It's important to remove the css for `transition: 1s` at this point,
since we increased the frequency of our timer and we're handling the
animation on our own.

> A mistake I made myself here the first time is to write
> `$(window).width` instead of `$(window).width()`.

```javascript
var vx = Math.random() * 10 - 5;
var x = $(window).width() / 2;

setInterval(function () {
    $('.logo').css({
        left: x
    });
    x = x + vx;
}, 20);
```

We then added vertical movement

```javascript
var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var x = $(window).height() / 2;

setInterval(function () {
    $('.logo').css({
        left: x,
        top: y
    });
    x = x + vx;
    y = y + vy;
}, 20);
```

And finally we added the conditions to make it bounce, first just in
the horizontal direction.

```javascript
var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var x = $(window).height() / 2;

setInterval(function () {
  $('.logo').css({
      left: x,
      top: y
  });
  x = x + vx;
  y = y + vy;
  if (x < 0) {
      x = 0;
      vx = -vx;
  } else if (x > $(window).width()) {
      x = $(window).width();
      vx = -vx;
  }
}, 20);
```

Then in both directions

```javascript
var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x = $(window).width() / 2;
var x = $(window).height() / 2;

setInterval(function () {
  $('.logo').css({
      left: x,
      top: y
  });
  x = x + vx;
  y = y + vy;
  if (x < 0) {
      x = 0;
      vx = -vx;
  } else if (x > $(window).width()) {
      x = $(window).width();
      vx = -vx;
  }
  if (y < 0) {
      y = 0;
      vy = -vy;
  } else if (y > $(window).height()) {
      y = $(window).height();
      vy = -vy;
  }
}, 20);
```

## Move in a circle

The last demo was to get it to move in a circle instead of bouncing
off the walls. I briefly talked about the trig involved and then dove
into writing the code.

```javascript
var x = $(window).width() / 2;
var y = $(window).height() / 2;
var theta = 0;
var vtheta = Math.PI / 180;
var r = 60;
setInterval(function () {
    $('.logo').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);
```
