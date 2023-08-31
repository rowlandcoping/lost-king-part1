# The Lost King of CrapLand, Part 1 - Amnesia

Welcome to the documentation for The Lost King - Part 1, an interactive fantasy/RPG story built in HTML, CSS, and JavaScript.

## Contents:

### UX Design

[UX - Strategy](#ux---strategy)\
[UX - Scope](#ux---scope)\
[UX - Structure](#ux---structure)\
[UX - Skeleton](#ux---skeleton)\
[UX - Surface](#ux---surface)

### Testing and Deployment

[Testing Documentation](#testing-documentation)\
[Deployment](#deployment)

### Credits and Technical

[Credits](#credits)\
[Technical Information](#technical-information)

## UX - Strategy 
([back to top](#the-lost-king-of-crapland,-part-1---amnesia))

### 1) Research

Ahead of creating this project I have drawn heavily on my own knowledge and experience and also considered a number of different 
products in the genre to understand what makes a game like this successful.  There are a number of products I have considered in setting out my goals.

 - Fighting Fantasy:  A 1980s series of choose your own adventure books with a dice-game element.
 - Baldur's Gate:  The benchmark for all D&D based gaming since.
 - Witcher 3: Still the pinnacle of story led adventuring.
 - Disco Elysium: Your choices and interventions essentially create a different game altogether. The standard of writing is extraordinary.

These are listed in chronological order for a reason.  As the games have evolved, the impact of your choices as a user have become more important and profound.
The key theme is that in order to create a compelling gaming experience, the moral choices you make as a player have to matter.

Of course, I don't expect to be writing Disco Elysium for this project, but I can definitely make sure that player choices have a non-arbitrary and 
often unexpected in-game impact to create a more compelling experience.

### 2) Project Goal

The goal of The Lost King is to provide users with an immersive and interactive role-playing experience. 
Whilst the game will be predominantly story driven, it is anticipated that the decisions the player makes will matter 
and extend beyond simple choices (eg go left, go right) to decisions that also have a moral dimension which will influence 
other aspects of the game.

These decisions will lead to different story paths, encounters and ultimate game outcomes. Athough the MVP will be driven to a large 
degree by random chance, it is anticipated that the way player actions influence these odds could have a decisive effect on their 
journey through the game.  As the first game (and indeed the series) develops it is envisaged that additional layers of interactivity 
can be added for deeper player engagement and replayability; ultimately there is the potential for social sharing and perhaps even monetisation.

### 3) Developer Goals

- Build portfolio: I want this project to display originality as well as a wow factor which will make it stand out from the crowd and proide value for users.
- Enjoy the process: Part of the reason I chose this project is I think it will be a lot of fun to build.
- Develop technical skills:  As my first project using JavaScript, I want to deploy range of techniques to further my skills.
- Extensibility:  The MVP for this project could potentially be very simple, but there is also a great deal of scope to add extra features, either as part of this project or in the future.

### 4) Site Owner - User Stories

As a developer and the ultimate site owner, I have a clear vision of what I want this project to achieve and who is likely to be using the website.

- Initial Engagement: On landing there has to be a strong theme, engaging visuals and an intuitive UI to encourage users to stay and play the game.
- Story Led:  There needs to be a well written branching narrative which keeps people engaged to the end of the story.
- Humour and the 4th Wall:  Because of the audience I would like to keep the tone quite light (particularly when things go wrong) and introduce moments of humour as well as 4th wall comments.
- Interactive decisions:  This does not just mean offering decisions, but also that the decisions need to have a genuine impact on gameplay.
- Replayability:  This comes from two facets - one is multiple possible outcomes derived from user decisions, and the other is in making the gameplay fair.  
You don't want it to be a simple grind to an unfair death and a closed browser window.
- User friendly interface:  This amounts to a list of personal bugbears, but includes pop-up windows and alerts, 
unfathomable error messages (or even any error messages), over-elaborate sign-ins, two setp sign-ins, and automated actions.  The user should have full control over their journey in the medium the have chosen to access it (ie the browser windwow).
- Interactive combat: Combat should be balanced where it occurs, and led by player decisions.

### 5) Site Visitor - User Stories

It is envisaged that the game will be played by either gamers, particularly those with an interest in the RPG genre, 
or office workers with too much time on their hands. As such the majority will likely be accessing it via laptop or desktop, 
and sharing it via social channels like Discord and Slack or, in the office environment, via e-mail.

- Instant Access:  Office users in particular want to be able to click a button and get stuck in during their lunchbreak, without lots of interim steps
- Character Creation:  Conversely, those with an interest in RPG games generally might like to have some input in this side of things - at the very least featuring their own choice of name.
- Attractive/retro visuals: People want a visual and user engagement experience that adds value from the off. There is a huge appetite for retro gaming these days. 
- Low attention span:  It's unlikely the majority of users will have time for a wall of text. Things will have to be to the point. There are so many other things they could be wasting their time on!
- Make a difference:  users will want plenty of opportunities to influence gameplay, without having to micromanage.  They are lazy, but they like to be in control.
- Be treated like adults:  It's unlikely to be teenagers playing this game.  So there does not need to be too much hand-holding.
- This time next Tuesday: Provide replayability, through a process of discovery and through dividing paths.  Offer new and amusing ways to die.
- Brief but glorious:  This is a lunchbreak/codebreak thing, and there will be no save game function, so it needs to be over relatively quickly.

## UX - Scope
([back to top](#the-lost-king-of-crapland,-part-1---amnesia))

### Technology

- The game will be written in HTML and CSS with JavaScript controlling the various game states
- The application will be limited to a single page of html due to limitations on storing data (with one possible exception - see Additional Elements)
- I intend to use Flexbox for page layout, Jest for automated testing, and JQuery where it makes sense to do so (for example .when.then functionality)

### Core Elements (MVP)

#### Structure

- Landing page state:  On landing clear information about the game, clear branding and theming, and obvious game start processes.
- Exploration game state:  Where the story invites you to make choices (eg directions, actions, objects)
- Combat game state: Where the player does turn-based battle with fearsome enemies, which will be depicted on screen.
- Game ending state: Where the game outcome is provided, along with the option to restart or create another character.

#### Features

- Backgrounds: will vary depending on game state and progress
- Images: vary depending on game state and progress
- Navigation:  Decisions will be taken based on clicking one of a series of options presented on a central section of the page
- Story:  There will be a section of the page where the story unfolds, or where combat is played out (including images of enemies)
- Player Info: there will be a section of the page where the player's information is listed.
- Player objects: There will be a section of the page where items a player has accrued will appear.
- Storyline: The MVP version of the storyline is limited to a single story loop, which may be expanded upon depending on time constraints.

### Optional Features

- Highest Score / fastest time list:  Post-game screen could write/retrieve high score data from file
- Post to Social API:  Provide players with the option to post their high score / best time to social, and thus promote the game.
- Send score to email API: Provide players the option to have a break-down of their performance delivered to their inbox (do they really want this??)
- Extended Inventory: with drag and drop mechanics.  Problematic on mobile.
- Tutorial Hints: For first time players.  Likely to be sarcastic.
- Multiple Difficulty Levels: Affecting player/emnemy stats and success odds.
- Different character classes: these would influence gameplay options and play-style creating more variety.
- Reactive text: When you visit locations multiple times (whether on first or subsequent playthroughs) different text may be served.
- Time-based interventions:  Providing the player feedback based on how long it is taking them to complete the game or a game section
- Tool-tips:  Players will be able to mouse-over items/click on item menus to find out more information.
- Storyline: An extended storyline with escalating difficulty and more varied choices with multiple end points (leading into the second part of the story, which would be beyond the scope of this project)

## UX - Structure
([back to top](#the-lost-king-of-crapland,-part-1---amnesia))

### Navigation

This game will be built on a single page so there will be no traditional site navigation. However the user will still need to navigate between the game states:

- quickstart / create character navigation
- restart/reset game navigation (both on end game and throughout to eliminate need to use browser controls)
- provide player input (ideally somewhere clearly visible, following any story text, near to the centre of the screen.)

### Landing Page State

The landing page should get across the look and feel of the site straight away.  

#### Essential elements:

- imagery and theming consistent with the gaming experience
- Immediate and obvious access to a start game trigger (including character name entry)

#### Optional elements:

- character creation feature
- high scores/best times

### Universal game page elements:

Once the game has begun it will revert straight away to the exploration game state.
The page will contain these common page elements throughout, which will be consistently sited:

- character information (eg base stats, health points, modifiers)
- Item information (consisting predominantly of a list of icons with a name and their effects)
- Central game state dependent element (what is displayed in this area of the page will vary depending on game state.)

### Exploration game state

Once the game has begun it will revert straight away to the exploration game state, which will be clearly flagged to the user. The central element of the page will relay the following:

- Story information:  A narrative of where their choices have taken them (or at the start, and introductory narrative)
- Player options:  A list of options for actions the player can take (or a simple confirmation button if options are limited...)
- background element: each location will have a different page background depending on where the player has wound up.
- image element:  It's possible a player will be presented with other information (eg items, or potential foes) as they come across them, to help inform their decisions.

### Combat game state

Once a player enters combat with a hostile creature (or creatures) this will be clearly flagged to them.  The central element of the page will then contain the following:


- This will feature an image of the player's combat opponent plus their stats
- the player will be presented with decisions they can take during combat, which will take place in rounds.
- Once the combat is resolved the player will be shown the outcome.

### End game state

Once the game has ended - more than likely this will resemble the landing page, but with different key information:

#### Essential elements:

-  the player will be treated to a summary of what has just happened, 
-  the player will receive their score
-  The player will be informed of the time they have spent in game.
-  The player will be given the option to re-start (with their same base character) or reset with a new character.

#### Optional elements:

- High scores / hall of fame.
- More in-depth stats and analysis of character play-style.
- Options to share / receive game data via APIs

## UX - Skeleton
([back to top](#the-lost-king-of-crapland,-part-1---amnesia))

### Design Choices

Because this application is a game, it needs to be designed around an intended medium so that it is fit for purpose.  
There are far too many examples of games built for console ending up on PC platforms and feeling lightweight (compare Phoenix Point to the original UFO: Enemy Unknown for example), 
Equally games built for PC can feel cumbersome and counter-intuitive on a console. Can you imagine playing Football Manager on a console?

Likewise, mobile functionality is very different to desktop functionality; people interact with mobile differently and play different types of game on mobile.  
Even games like Minecraft which have notably bridged the gap have a completely different version with a different UI for mobile, which is far beyond the scope of this project. 

I have kept all this in mind when thinking about my design choices:

- Whilst the game will configured to display responsively, it will be designed to display optimally on full size screens, between 1200px and 1980px wide, and played with a keyboard and mouse.
- To enable instant user engagement and stickiness, there is intented to be zero learning curve to play (although there will be nuances to be found).
- Although it is a dynamic site, key elements of the page will be sited consistently.
- The dynamic content will display consistently and logically, and the locations where user input is required will not vary.

### Wireframes


Please find the wireframes [HERE](WIREFRAMES.md).
