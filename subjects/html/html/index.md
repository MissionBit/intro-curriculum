Intro
=====

Mission Bit introductory survey:

http://bit.ly/mbit-2014-spring-experience

Remix Take 2
============

Do a repeat of
https://github.com/etrepum/mb-2014-spring-intro/tree/master/01-tools#remixing-websites

This will be something fun for the students and will give us time to
catch people up.

Take a screenshot. Rename it to `remix.png` and add it to your repository.

> This worked well, the students still found it interesting and
> allowed us to pay attention to the new students that showed up and
> the few that needed to catch up.

HTML History
============

* The internet began its life as ARPANET in 1969
* Before the web, the internet was primarily plain text
  (email, and some other protocols you've probably never heard of)
* Tim Berners-Lee devised a way to share documents over the internet
  while working at CERN in the late 80s.
* Proposed in 1989, 20 years after the first connection was
  made on what's known now as the internet.

> We didn't cover history at all

HTML Syntax
===========

HTML stands for HyperText Markup Language.

HyperText means that text can directly reference other text. These references
were called hyperlinks but since the web is so popular everyone decided to
just call them links about 20 years ago.

Markup languages mix the content of the document
with annotations about parts of that document. An analog of markup in the 
real world is when you highlight text on a page, or when you revise a paper.
When we annotate documents we can usually tell the difference between the
text and the markup by color, position, or handwriting.

HTML does this with angle brackets (less than `<`, greater than `>`)
and ampersands (`&`).

> I didn't spend a lot of time talking about the syntax and history.

HTML Tags
=========

When you have something that's wrapped in angle brackets
it's called a *tag*, an example of a tag is `<p>` which is a paragraph tag for
annotating a paragraph of text, or `<a>` which is an anchor tag that links
from one page to another. We'll learn some of the most common tags today.

> When demonstrating I called them tags and talked a little bit about
> the angle brackets.

HTML Entities
=============

When you have something that begins with an ampersand and ends with a colon
it's called an *entity*. These are much less common because you only really
need four of them today. The common ones are `&lt;`, `&gt;`, `&quot;`
and `&nbsp;`. lt and gt are used to write angle brackets without making a tag,
quot is used to to write a double quote inside of an attribute value in a tag,
and nbsp is a non-breaking space for those times when you really want
some horizonal space and you don't want the browser to collapse it. There
are other fun entities you can use such as `&hearts;` and you can use an entity
to represent any possible character such as `&#8734;`, but you can also put
those characters literally in the document so they aren't strictly necessary.

> Entities were not covered at all.

Project: Home Page
==================

They should update their index.html to be a proper HTML document.
It should use (at least) the following tags:

* doctype
* html
* head
* title
* body
* h1
* p

An example:

```html
<!doctype html>
<html>
  <head>
    <title>Mittens for Kittens</title>
  </head>
  <body>
    <h1>NEW! Kitten Mittons!!</h1>
    <p>
      Cloth footwear for cats. The goal is to make them quieter
      when they walk around
    </p>
  </body>
</html>
```

Here's a gist that the students to use as a reference:

* http://bit.ly/mbit-html-1

> This was given to the students as a reference and most were able to
> work within this structure.

Project: Image
==============

Rename the screenshot from your remix project.

> Most of the students completed this correctly

Project: Embed
==============

Make a separate video.html file. Link to it from the home page with an
`a` tag. Find a cool YouTube video and embed it in this page.

> We did not cover the anchor tag, but we did cover YouTube embeds

Project: Images
===============

Make an images.html file. Link to it from the home page with an `a` tag.
Download a few cool images or take some photos with Photo Booth, use
the `ul`, `li`, and `img` tags.

> We covered the img tag but not ul/li

Project: CSS
============

Create a style.css file, use a
`<link rel="stylesheet" href="style.css">` in the head. Add some style
to your index.html. Some ideas:

```css
body {
  color: white;
  background-color: black;
}
h1 {
  font-size: 40px;
  color: #ffe4c4;
}
```

> We did not cover this at all. A few students figured out how to use
> a style tag but we did not use external CSS

Resources
=========

* http://bit.ly/mdn-html-intro
* http://bit.ly/html5-element-list
* http://www.codecademy.com/tracks/web
