# Anchor tags

The anchor tag, or `a` is one of the key innovations of HTML. It
allows HTML documents to link to other HTML documents locally
and elsewhere on the internet.

Historically these links were called hyperlinks, which is why
HTML is called the HyperText Markup Language.

An anchor tag wraps goes around the content (text, images, etc.)
that you want to turn into a link. The most important attribute
of an anchor tag is `href` (hypertext reference).

Another common attribute of an anchor tag is `target` which can
be used to make a link pop-up in a new browser window or tab.
This is done by setting the attribute `target="_blank"`

Example:

```html
<a href="http://www.missionbit.com/" target="_blank">
  This link goes to Mission Bit's website in a new tab
</a>
<a href="local-file.html">
  This link goes to the file "local-file.html" on this website
</a>
```

> I moved this to day 4.

# CSS Intro

* Cascading Style Sheets are the preferred way to change the
  presentation (colors, fonts, positions, etc.) of a HTML document.
* It's cascading because the multiple rules can apply to the same
  elements, and they are applied from lowest priority to highest.

> The topic was covered but I didn't spend much time on the semantics.

# CSS Jargon

* *Selector* - the first part of a CSS rule that is used to select
  elements by tag name, id, class, or other features of that
  element
* *Property* - the second part of a CSS rule is a `{` block `}` with
  zero or more properties. Each property controls some presentation
  aspect of that element and its children, such as `font-family` or
  `color`.

> I didn't explain this too deeply but I was using the right
> terminology here.

# Project Avatar

http://bit.ly/mbit-intro-avatar

1. Put the avatar.html and avatar.css files into your repository
2. Create a link from your index.html to your avatar.html
3. Make it look just the way you want. Feel free to change the shapes too!

> This worked well, the students had a lot of fun with this. I think
> the biggest challenge here was really just getting used to editing
> separate files and using Brackets. A key point here is that
> the live preview has to be initiated from the HTML file, not the CSS
> file.

# Project Logo Puzzle

http://bit.ly/mbit-intro-logo

1. Put logo.html and logo.css into your repository
2. Move the pieces around in logo.css until the logo is in the right place

> This was far too easy and there was no open-ended component to it.
> Next time around we need to have a way to let students go deeper on
> this one, make it a bonus, or just get rid of it.

# Project Index

1. Create a CSS file for your index.html, call it index.css.
2. Add a `<link rel="stylesheet" href="index.css">` to the head of
   your index.html
3. Experiment with adding colors and styles to your page, try
   using color, background-color, font-size
4. Try adding a font from Google Fonts to your index,
   http://google.com/fonts/

> I had trouble with this one as the class got out of sync during the
> logo exercise. Some students completed it very quickly so I needed
> to cover this while other students were working. This task might've
> been a bit too open-ended.
