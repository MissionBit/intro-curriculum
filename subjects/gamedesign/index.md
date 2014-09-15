---
title: Game Design
---
Fundamental Game Components
===========================

From **Challenges for Game Designers by Brenda Brathwaite and Ian Schreiber**, there are several fundamental components in game design:

* **game state** - the collection of relevant information that may change during game play (health, points, items, lives, etc).
* **players/avatars** - all games must have someone playing them. In some cases, the player represents themself (poker, Tetris, etc), and in others, there is an _avatar_ which represents the player in the game (first person shooters, Mario Kart, etc).
* **mechanics** - rules which act upon the game state and players, and describe all ways to change the game state.
  * setup mechanics describe how the game starts
  * victory conditions describe how to win the game
  * progression of play mechanics determine if the game is turn-based (words with friends), or realtime (Mario Kart)
  * player action mechanics or "verbs" describe what a player can do and how it affects the game state
  * game view mechanics describe what information each player knows at any given time
* **dynamics** - pattern of play which comes from the mechanics. Some examples are _territorial acquisition_ (Starcraft, Risk, Go), and _race to the end_ (Mario Kart, Chutes and Ladders)
* **goals** - provide rewards to motivate the player to do something. The ultimate goal is victory, but there may be others like defeating an enemy, finding items, or getting a high score.
* **theme** - the story and world around which the game takes place. Some games like Tetris have no theme, and others like Halo have so much backstory that there are books written about it.

Choose one of your favorite games and determine as many of the above components as possible. Pick a couple key components that you think make the game so compelling. Is it because of the story that the game tells? Is it the victory conditions (or lack thereof)?

Brainstorming tips from IDEO
============================

**1. Defer judgment.**
Creative spaces don't judge. They let the ideas flow, so that people can build on eachother and foster great ideas. You never know where a good idea is going to come from, the key is make everyone feel like they can say the idea on their mind and allow others to build on it.

**2. Encourage wild ideas.**
Wild ideas can often give rise to creative leaps. In thinking about ideas that are wacky or out there we tend to think about what we really want without the constraints of technology or materials. We can then take those magical possibilities and perhaps invent new technologies to deliver them. We say embrace the most out-of-the-box notions and build build build...

**3. Build on the ideas of others.**
Being positive and building on the ideas of others take some skill. In conversation, we try to use "and" instead of "but"...

**4. Stay focused on the topic.**
We try to keep the discussion on target, otherwise you can diverge beyond the scope of what we're trying to design for.

**5. One conversation at a time.**
When different conversations are going on within a team, no one can focus.

**6. Be visual.**
In live brainstorms we use coloured markers to write on Post-its that are put on a wall. Nothing gets an idea across faster than drawing it. Doesn’t matter how terrible of a sketcher you are! It's all about the idea behind your sketch. You could also try your hand at sketching it out or mocking it up on the computer. We love visual ideas as the images make them memorable. Does someone elses idea excite you? Maybe make them an image to go with their idea.

**7. Go for quantity.**
Aim for as many new ideas as possible. In a good session, up to 100 ideas are generated in 60 minutes. Crank the ideas out quickly. Try setting a goal for the number of ideas you’ll get to in a certain amount of time to provide some stoke.

Game Deliverables
=================

1. Game Document
  * Game Design
    * core loop - your game should have a clear core loop that engages the user
    * game components - elaborate on the following components of your game. who/what/where/when/why
      * game state
      * player/avatar
      * mechanics
      * goal
      * theme
  * Artwork and assets
    * some sort of sketch for your players/enemies/items
    * a storyboard which explains what each screen will look like and how you will interact with it
  * Game Development
    * basic architecture - outline the basic structure for your game. You should have enough detail to answer questions like:
      * How do you represent enemies/players/items?
      * How do you keep track of the game state?
      * What kinds of things will you have to do to get user input (taps/swipes/accelerometer)?
  * Production
    * Timeline - how are you going to take on this monumental task? Break the development of the game into small, actionable steps. Keep in mind that group members can work on different tasks in parallel, so someone can be working on the art while someone else is working on the gameplay or fixing bugs.
      * List out action items and time estimates for:
        * Artwork and assets - what images, sounds, maps, etc will you need? What is the most basic version of these which you can use to test your first full game? You can use placeholders until the final versions of these are ready, so these action items should be very low priority in the beginning of your game.
        * Game development - what is the simplest interaction from your core loop that you can code and test? Once that is done, what order will you add extra features, such as power ups, a fancy user interface, more enemies, stats, etc. Keep in mind that most of these tasks are cumulative, so you won't be able to work in parallel on most of this. Some things like swipe detection and getting platforms to work are completely independent and can be done in parallel.
    * You can use something like [Trello](https://trello.com/) to keep track of tasks in a group and stay focused. Also, you can use Github's built in issues tracker and wiki to keep track of other details for your game.

Blogging + Documentation Tips
=============================

Documenting your progress and process is a great tool for building your game and eventually your portfolio. Using simple blogging platforms such as [Wordpress](http://www.wordpress.com) or [Tumblr](http://www.tumblr.com) can be an easy way to keep track of your progress and eventually turn it into a portfolio piece.

**1. Know your audience.**
Writing is a form of communication, so figure out who your audience is and what information you want to convey to them. If your audience consists of mainly game developers, your postings might include more technical information as compared to if your audience consists of mainly game enthusiasts, your postings might include more information on the different features and how it compares to other games. Your audience will help determine the tone of your writing as well.

**2. Be concise.**
When people are looking at your posts or portfolio pieces, they do not want to read a novel. Make sure you cover all of the necessary information that your audience would be interested in.

**3. Be specific.**
When you are providing descriptions or examples, be specific in what you say.

* BAD: "And then I made the game interesting."
* GOOD: "And then I added an extra wobbly platform at the end to make it more interesting for the player."

**4. Have structure to your postings.**
Develop some sort of structure to your posts so that your reader knows what to expect. The structure will organize your writing and also make it easier for people to follow. (E.g.,

* Paragraph 1: Overview of what I did
* Paragraph 2: What I Learned
* Paragraph 3: What I liked/disliked most
* Paragraph 4: Tools I used
* Paragraph 5: Future Tasks


**5. Reflect on what you've done and set goals for future tasks.**
Blogging as you are developing the game is a great way for you to keep track of what you've done and to set goals for what you want to accomplish next. Writing about what worked well and what didn't work can help prevent future mistakes and can also keep you from blindly developing by keeping the big picture in sight. Discuss the rationale behind your decisions.

**6. Take note of what you learned.**
Building on the previous point, you will acquire a lot of knowledge as you build your game. People love hearing about what knowledge and skills you learned and how your learning informs future iterations.

**7. Take pictures/screenshots/videos/screen captures as you go.**
Words are great, but pictures and video can make your blog or portfolio piece come alive. Including some multimedia aspect to your postings (i.e. photos and videos) can break up the text a bit and provide another way for your audience to learn about your work.

**8. Let yourself shine but respect the rules of grammar and spelling.**
Let your personality come through in your writing. In your blog, the reader should feel like s/he is listening to you speak. Your blog is like a representation of yourself, so add a bit of flavor to it in your writing, blog theme, design, etc. Do, however, exclude profanities and try to use correct spelling and grammar, as you never know who might be reading it. Stay classy.

Game and Blog Inspiration
=========================

These game development blogs have a mix of traditional essay-style blog posts, and game progress blog posts, both of which you can use as inspiration for your own blog.

* [Planet GameDev's blog](http://www.planetgamedev.com/) documents the progression of a wilderness survival game.
* [The Witness' blog](http://the-witness.net/news/) shows the progress of the game The Witness, along with some useful posts on programming, art, and game design
* [Gambrinous's blog](http://blog.gambrinous.com/) documents the development and release of the Guild of Dungeoneering along with some posts on game design and production
* [Odonata devblog](http://odonatagame.blogspot.com/) details the development of Odonata, a third-person shooter/RTS game
* [Levity Games blog](http://www.levitygames.com/page/3/) details several games through their development
* [Notch's (Minecraft creator) blog](http://notch.tumblr.com/) has some interesting posts on game design and production.
* [Hobby Gamedev](http://www.hobbygamedev.com/) has some good posts on artwork and game design
* [Wolfire's blog](http://blog.wolfire.com/) documents the progression of the action-adventure game Overgrowth
* [LostGarden's blog](http://www.lostgarden.com/) talks about game design and artwork
* [Gama Sutra's game dev blog](http://www.gamasutra.com/blogs/) has a lot of interesting guest posts that may help you through the game production process


The [Ludum Dare](http://www.ludumdare.com/compo/rules/) is a popular 48 hour game hackathon that takes place a couple times every year. The competition has created some cool games and encourages participants to document their process, so there's a lot of very well written and detailed journals that you can use as inspiration for your game and also for your blog. Try playing some of the games and look through the journal to see what the developers did to make it happen!

*  [Ripple Runner](http://www.ludumdare.com/compo/ludum-dare-29/?action=preview&uid=7285) - [journal](http://www.ludumdare.com/compo/category/ld-29/?author_name=ddrkirbyisq)
*  [ESCAPE](http://www.ludumdare.com/compo/ludum-dare-21/?uid=4336) - [journal](http://www.ludumdare.com/compo/category/ld-21/?author_name=schonstal)
*  [Diamond Hollow](http://www.ludumdare.com/compo/ludum-dare-20/?action=preview&uid=4155) - [journal](http://www.ludumdare.com/compo/category/ld-20/?author_name=arkeus)
* [Hyper Furball](http://www.ludumdare.com/compo/ludum-dare-27/?action=preview&uid=7285) - [journal](http://www.ludumdare.com/compo/category/ld-27/?author_name=ddrkirbyisq)
*  [Robot Wants Kitty](http://www.ludumdare.com/compo/ludum-dare-16/?action=preview&uid=11) - [journal](http://www.ludumdare.com/compo/category/ld-16-2009/?author_name=hamumu)
*  [The Sun and the Moon](http://www.ludumdare.com/compo/ludum-dare-29/?action=preview&uid=3479) - [journal](http://www.ludumdare.com/compo/category/ld-29/?author_name=managore)

Useful Tools
============

* [Prototyping on Paper](https://popapp.in/)
* [Ludum Dare tools](http://www.ludumdare.com/compo/tools/) - a bunch of tools for creating sprites, tiles, music, 3d models, and various other things
* [OpenGameArt.org](http://opengameart.org/) - lots of free to use artwork
  * User [kenney](http://opengameart.org/users/kenney?page=1) has a lot of good platformer artwork
* [DawnBringer 16 color palette](http://www.pixeljoint.com/forum/forum_posts.asp?TID=12795) - a 16 color palette designed for high contrast and brightness
* [Oryx's LOFI spritesheet](http://forums.tigsource.com/index.php?topic=8970.0) - a huge set of sprites used by many popular games
* [Glitch the Game public domain assets](http://www.glitchthegame.com/public-domain-game-art/) - all game assets were released for public usage
* [Tiled map editor](http://www.mapeditor.org/) - used by many platformers and RPGs to design levels
  * [Tiled platformer overview (Javascript)](http://codeincomplete.com/posts/2013/6/2/tiny_platformer_revisited/)
