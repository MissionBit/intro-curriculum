# GitHub Pages

Have students test their index page on GitHub to make sure it's
getting published. Walk them through going to username.github.io
and having GitHub send them an email verification.

> This seemed to go fine, took a bit longer than I expected though.

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

> The students seemed to understand this. I didn't cover target but
> I don't think it's too important.

# CSS Jargon

* *Selector* - the first part of a CSS rule that is used to select
  elements by tag name, id, class, or other features of that
  element
* *Property* - the second part of a CSS rule is a `{` block `}` with
  zero or more properties. Each property controls some presentation
  aspect of that element and its children, such as `font-family` or
  `color`.

> I spent a little more time covering this as a refresher. Again,
> mostly just demonstrating it and not covering all of the semantics.

# Project Index

Demonstrate this more clearly than last time.

1. Create a CSS file for your index.html, call it index.css.
2. Add a `<link rel="stylesheet" href="index.css">` to the head of
   your index.html
3. Experiment with adding colors and styles to your page, try
   using color, background-color, font-size
4. Try adding a font from Google Fonts to your index,
   http://google.com/fonts/
5. Add a link to your avatar project

> This was more focused this time as the goal was to link to the
> avatar project. We didn't spend much time here.

# Project Choose Your Own Adventure

Using anchor tags, build a choose your own adventure story.

Here's an example:
http://bob.ippoli.to/mbit-intro-4-game/

> This was a fantastic project that the students really dug into
> and that is very open-ended to accommodate students of differing
> speed. The primary issue here was helping
> the students get into a creative mode. We spent the rest of the
> class on this and will continue to work on it on day 5.

# Project Animation

If students finish the choose your own adventure quickly, give them
this animation project to play with.

http://bit.ly/mbit-intro-animation

> This is getting pushed back to day 5 or 6.

# Group Project Planning

At the half, organize the students by interest to pitch a project
idea. The project should go a bit beyond what we've learned so far,
but not too much. The maximum sort of complexity that would make sense
would be something equivalent to Flappy Bird, or a site with a handful
of separate pages. We'll tailor the lessons to cover techniques that
will be necessary to complete the projects.

Rough project ideas should be pitched by the end of class.

> This is getting pushed back to day 5 or 6.
