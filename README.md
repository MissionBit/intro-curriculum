This is the source for www.missionbit.com/intro-curriculum!

We use [Jekyll] to help us generate www.missionbit.com because that's
what [GitHub Pages] uses. This lets us build a site with a lot of
pages without having to repeat so much over and over.

We use the following JavaScript, CSS, and font libraries to make the
site work well and look good:
* [jQuery]
* [Bootstrap]
* [Font Awesome]
* [Ubuntu Font Family]
* [Source Code Pro]

# Setup

Make sure you have an administrator account on the computer and
install [Jekyll] by opening Terminal and typing the following command:

```bash
sudo gem install jekyll
```

# HACKING

Open a Terminal and change to the directory where you've checked out
`intro-curriculum`, then run this command to start the [Jekyll]
preview server:

```bash
jekyll serve --watch --safe
```

This will run a webserver on your computer at http://127.0.0.1:4000/
and automatically rebuild the site when you make changes to the files.
You will have to reload the pages in your browser to see the changes.

# Using the page template

To make a page on the site use the template, they need to have
what's called [YAML Front Matter]. A very small example page would
look like this (you can also use html, with the same front matter):

*minimal-page-example.md*
```html
---
title: Minimal Page Example
subject: setup
---

# This is a markdown title

* This is
* an unordered list

And this is
a paragraph.

Here's another paragraph.
```

[Jekyll]: http://jekyllrb.com/
[GitHub Pages]: https://pages.github.com/
[jQuery]: http://jquery.com/
[Bootstrap]: http://getbootstrap.com/
[Font Awesome]: http://fontawesome.io/
[Ubuntu Font Family]: http://font.ubuntu.com/
[Source Code Pro]: https://github.com/adobe/source-code-pro
[YAML Front Matter]: http://jekyllrb.com/docs/frontmatter/
