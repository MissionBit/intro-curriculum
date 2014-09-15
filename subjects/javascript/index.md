# Project Choose Your Own Adventure (cont 2)

Using anchor tags, build a choose your own adventure story.

This is a continuation of the project we started on day 4.
Let's try and wrap it up at the half.

Let's also have them move their games to an `adventure` folder
in their repository, so the game should be playable at
`http://username.githubio/adventure/`.

I'll also go over the CSS trick to change the color of
`a:visited` to add a little bit of challenge to the games.

Here's an example:
http://bob.ippoli.to/mbit-intro-4-game/

> This went pretty well, I think most students were able to finish
> their game. I don't think I could've spent longer on this without
> losing the better students.

# Javascript (clicks part 1)

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

(Write `jquery.com` on the board)

(Write `codecademy.com/tracks/javascript` and
`codecademy.com/tracks/jquery` on the board for students that get too
far ahead)

If handling this stuff by hand from scratch turns out to be too much,
here is a template project we can start with:
http://bit.ly/mbit-intro-clicks

> I ended up giving them the template for this.

So that our projects can run standalone and load a bit faster, it's
best to go ahead and download a copy of jQuery instead of including
it from somewhere else. You can do this by going to the download
section of jquery.com. Find the link that looks like
"Download the uncompressed, development jQuery 2.1.0" and download
it by holding the option key and then clicking. You can also do this
by right-clicking and choosing "Save Link As&hellip;".

Make a folder in your github.io for this project, I'm going to call
mine `clicks`. Copy your `jquery-2.1.0.js` file to this folder.

Create an `index.html` file in this folder. Here's what I'm going
to start with (type the following live)

```html
<!doctype html>
<html>
<head>
  <title>Clicks!</title>
  <link rel="stylesheet" href="clicks.css">
</head>
<body>
  <h1 class="page-title">We'll replace this title</h1>
  <script src="jquery-2.1.0.js"></script>
  <script src="clicks.js"></script>
</body>
</html>
```

We'll also need to make a `clicks.css` file and a `clicks.js` file.
Go ahead and do that, you can leave them both empty for now.

It's important to note that the script tags go near the end of your
HTML, just before you close the body tag. This is because we want
the rest of the page to be available before our code runs. It's
also important that the jquery tag comes first.

Now go back to your clicks.js file and add the following code:
```javascript
var pageTitle = $("h1.page-title");
pageTitle.text("My code runs!");
```

> This seemed to work, although I did it without the var

When you save this, JSLint might give you some warnings. They're
not very good warnings for us, but we can relax them by adding
exactly these comments to the top of our `clicks.js` file:
```javascript
/*global $*/
/*jslint sloppy: true, browser: true*/
```

Now when you save it, you shouldn't get any warnings. These comments
tell Brackets that we are using jQuery, and that we don't want to
use a stricter subset of JavaScript just yet.

Now when you refresh the page it should say "My code runs!"
instead of "We'll replace this title".

(Expect this to take a little while to get everyone caught up)

The next thing we want to try is to do something when we click the
page. We can do this by telling jQuery to call a function when
we click anywhere on the page. Add this code to the bottom of
your `clicks.js` file:

```javascript
$(window).on("click", function onPageClick(e) {
  pageTitle.text(["position:", e.clientX, e.clientY].join(" "));
});
```

> I didn't have them do this part, we just logged a message

We can also handle clicks on specific elements on the page, let's add
a css rule that will make it easy to demonstrate this. Add this to
your `clicks.css` file:

```css
h1.page-title.clicked { color: darksalmon; }
```

And add this to your `clicks.js` file:

```javascript
pageTitle.on('click', function onTitleClick(e) {
    pageTitle.toggleClass('clicked');
});
```

> We did get into toggling classes, but we did it after moving

We have full control of HTML and CSS from Javascript, so we can do
cool stuff with images too. Find any image you like from the web and
copy it to your clicks project. I recommend using a SVG or PNG file
with some transparency. You can download a SVG of the Mission Bit logo
from here:

(Write `missionbit.com/images/icon128.svg` on the board)

Now we can add this logo to our css. Let's place it in the center and
move it when we click. We'll need to add it to our HTML, and create a
CSS rule for it.

```html
<img src="icon128.svg" class="logo">
```

```css
img.logo {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 128px;
    height: 128px;
    margin-left: -64px;
    margin-top: -64px;
}
```

```javascript
var logo = $("img.logo");
$(window).on("click", function (e) {
    logo.css({left: e.clientX + 'px',
              top: e.clientY + 'px'});
});
```

> It looks like we didn't need the `+ 'px'` part, which was nice.

If the class asks how to animate it, a simple way to do that would be
to add the following CSS rule:

```css
img.logo {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 128px;
    height: 128px;
    margin-left: -64px;
    margin-top: -64px;
    transition: 1s;
}
```

> We did get to this.
> We also tried to animate the opacity but it didn't work. I'm pretty
> sure this was due to selectivity, I didn't write the rules properly
> for the 0% to take effect.
> This is the code we ended up with at the end of class:

```javascript
/*global $*/
/*jslint sloppy:true, browser: true*/
$('h1.page-title').text('It worked!');
$(window).on('click', function (e) {
    $('img.logo').css({left: e.clientX,
                       top: e.clientY});
    $('img.logo').toggleClass('hide');
});
```
