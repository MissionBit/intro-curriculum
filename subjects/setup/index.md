---
title: Setup and Introduction
subject: setup
---

# Checklist

* [Introduce the students to the class](#intro)
* [Assign the students to computers and set up a student account on each computer](#account)
* Download [Chrome](#browser) and [Brackets](#text-editor)
* ["Remix" a website with Chrome's developer tools](#remixing-websites)
* [Set up GitHub account and download GitHub app.](#github) *Make sure they verify their email address!*
* [Have students post selfie to roll call issue](#roll-call)
* [Collect information from students (github username, computer name, etc.)](#intro-survey). *Add students to a GitHub team for the class while surveys are collected.*
* [Create USERNAME.github.io repository](#making-a-repository)
* [Publish remix image and index.html with remixed website screenshot to their repository](#above-and-beyond)

# Example

An example of this can be seen in the [fall-2014-intro-mission-mw](https://github.com/MissionBit/fall-2014-intro-mission-mw) repo.

Instructions for students derived from this are in the repo's [wiki](https://github.com/MissionBit/fall-2014-intro-mission-mw/wiki).

Intro
=====

Coding is about coming up with an idea and translating it into instructions
that a computer can execute. Once you get the hang of it, you can figure
out how to make just about anything you want. Even if you don't decide
to study in computer science or become a career programmer, you're
probably going to be able to use what you learn here no matter what you
study or where you work. Computers are an integral part of nearly
everything that we do today.

If at any point you get stuck, confused, or just want to know how to do
something, ask a classmate for help. If that doesn't work, ask me or one of
the other mentors and we'll try and get you back on track. Programmers spend
a lot of time helping their peers, so this is no different than how it works
in the real world. Be respectful of your classmates: there are no stupid
questions here.

Icebreaker
==========

Let's try an icebreaker where the students introduce themselves, and
then ask one of the mentors a question. This doesn't put the students
on the spot quite so much.

> This seemed to work well, we got some pretty good questions and the
> students seemed to enjoy it.

Topics
======

In this course we're going to focus on the web. If you're up to date on the
jargon, that means HTML, CSS and JavaScript. If not, don't worry, we'll get
into all that later. The good news is that you can do just about anything
with these technologies (even outside of the browser!),
so we're not very limited in what we can do.

The course is designed to be a series of projects; some you'll finish in a
day, others you might spend a few weeks on. We make our own curriculum here,
this isn't from a textbook. Your mission here is to bend the rules and
make these projects your own. We're here to help you accomplish what you
set out to do, so if you want us to cover some particular then topic just ask.
Always be thinking about ideas for sites or applications you want to make,
and feel free to work with others to make them happen.

Account
=======

The first step is to make yourself an account on the computer you're
using. Remember the name of this computer, it'll be easier if you
pick the same one every week because it'll already have an account
for you. The name is on a label on the bottom of your computer.

To do that:

* Log in to the administrator account `missionbit` with the
  password (password given in class)
* Open up `System Preferences`,
* Click on `Users & Groups`
* Click the lock to make changes
* Click the `+` icon (below Login Options) to make yourself a user
* Change the account type from `Standard` to `Administrator`, fill out
  the form and click `Create User`.

Once that's done, click the Apple menu and log out (Cmd-Shift-Q), then login with
your account!


Browser
=======

The first thing you need to build something for the web is a web browser.
One of the best web browsers for web development work is Google Chrome, which
also happens to be the most popular web browser in the US by most metrics.
Other popular browsers are Mozilla Firefox, Microsoft Internet Explorer, and
Apple Safari. It's a bit easier if we're all using the same thing, so
go ahead and download Google Chrome and install it into your Applications
folder. You may also want to drag it into the dock because you'll be using
it constantly!

[google.com/chrome](https://www.google.com/chrome/)

Text Editor
===========

The next most important thing is a text editor. For writing code you want to
use a special text editor designed for that purpose. We have experience with
a lot of these. The trouble is that many of them are either tricky to learn
or expensive to purchase. For this course we're going to be trying out
Adobe Brackets, which is super powerful, easy to use, and also free and open
source. One really cool thing about Adobe Brackets is that it's made almost
entirely with the same web technologies that we'll be using: HTML, CSS, and
JavaScript. Maybe we'll even figure out how to build our own extensions to
Brackets to customize it just for us. Go ahead and download Brackets now
and put it in your Applications folder and dock.

[brackets.io](http://brackets.io/)

When you open up Brackets you may get an error that it's an unsigned
application. If you get this error, open System Preferences, go to
Security & Privacy, and click "Open Anyway". The next time you open
Brackets it should work.

> This took up some time. Hopefully Brackets will start signing their
> app soon!

"Remixing" Websites
===================

Browsers have traditionally had a "view source" button that allowed
you to look under the hood of a website and see how it was built, but
a few years ago web browsers started adding better developer tools
that even let you modify websites while you're looking at them.

This is a great tool that you can use to learn how sites are put
together, but it can also be used for more nefarious purposes like
taking fake screenshots or cheating in a web game.

Let's take a few minutes to experiment with developer tools and
remix a site. Find some site on the internet that would be
fun to change the content for, maybe the news or wikipedia, and
then right-click (with two fingers or use `Ctrl-Click` if the laptop
has a physical button) and choose "Inspect Element". `Double-click`
on the text you want to change and press return to change it.

Once you've finished your remix masterpiece, take a screenshot of the
browser with `Cmd-Shift-4`, then press `Space`, and click on the browser
window. This should put a screenshot on your desktop. Go to
[imgur.com](http://imgur.com/) ("imager") and upload the screenshot and come up
to the board and write the URL down so we can all check it out!

GitHub
======

GitHub is a free service we'll be using to keep our code safe and help us
collaborate. GitHub is like a backup service for your code, and if you
make sure to push your code there every class you won't lose it, even
if you aren't using the same laptop every class, or you accidentally
delete a file or make a mistake after you've pushed it. When working
in groups it also makes it much easier for multiple people to
collaborate on the same project.

Go to [github.com](https://github.com/) and sign up for an account. You should also download
the GitHub application from [mac.github.com](http://mac.github.com/) and set it up with
your
account. 

GitHub won't spam you, but the email address you choose will be associated
with your account and by default it may be published along with your code.
If you don't want that, go to the Emails section under Account Settings.
After you verify your email address there will be an option to
"Keep my email address private".

If you end up enjoying GitHub and want to keep some of your schoolwork
there privately, you can apply to have your account upgraded for free at
[education.github.com/](https://education.github.com/)

Intro Survey
============

For an example survey, see: [Intro Questionnaire](http://bit.ly/plzsendcookies)

Here are the questions:

* What is your rollcall.in username?
* What is your github username?
* Have you tried programming before? If so, what have you tried? *It's totally ok if you haven't, but this will help us keep the class interesting for everyone*
* What made you sign up for this class?
* Are there any cool apps/games/sites that you really like?
* Tell me a joke. *the cornier the better*

Add students to a GitHub team for your class as survey results come in. This is easy to do if you use Google Docs to create the spreadsheet.


Roll Call
=========

For a bit of entertainment (and to help mentors learn student names),
we'll do a sort of roll call in a GitHub issue, with fun photos.

Instructor will demonstrate going to the student repository

And then the instructor will create an issue called Roll Call.

The goal from here is to open up Photo Booth, take a fun photo,
and drag it over to a comment on the GitHub issue. This will let us
match up usernames to photos and should be kinda fun.

Making a Repository
===================

Open GitHub and sign in. Click the `+` at the bottom and choose
"Create a new Repository". The name of the repository should be
`YOURNAME.github.io`. For example, if your GitHub username is
`pokemon-fan` then the name should be `pokemon-fan.github.io`.

Now open Brackets and press `Opt-Cmd-O` (File -> Open Folder).
Navigate to your home directory by pressing `Shift-Cmd-H`
(or use the pulldown). Choose your repository and then click Open (or
press return).

Press `Cmd-N` (File -> New) to create a new file. Type anything you
want, such as "Hello World", into the window and then press
`Cmd-S` (File -> Save). Choose the name `index.html` and click Save.

Switch back to GitHub with `Cmd-Tab`. You should see the changes you
made. Click on the `+` with arrows icon so that the button says
"Commit and Sync". Type in a quick note about what you did in Summary
and then click "Commit and Sync".

After about 10 minutes, you'll have your own website at
http://YOURNAME.github.io/ - we'll be using this repository throughout
the semester so you can easily show off your projects.

Above and Beyond
================

We should show them the Live Preview functionality in Brackets so
that they can see their changes live before publishing.

If we have time and students are ready for it, we can introduce them
to Mozilla's HTML intro or codecademy so that they can start picking
up HTML tags to use in their index.html

* [bit.ly/mdn-html-intro](http://bit.ly/mdn-html-intro)
* [dash.generalassemb.ly/](https://dash.generalassemb.ly/)
* [codecademy.com/tracks/web](http://www.codecademy.com/tracks/web)
