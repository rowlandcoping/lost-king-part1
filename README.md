# The Lost King of Catland

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
([back to top](#the-lost-king-of-catland))

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
([back to top](#the-lost-king-of-catland))

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
([back to top](#the-lost-king-of-catland))

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
([back to top](#the-lost-king-of-catland))

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

### Processes

#### Flow Chart

I have put together a flow chart to lay out the general flow of the narrative and the events and decisions I expect to take place.
I used this to identify the functions I needed and set about building and testing the game mechanics for the MVP.

The flowchart is [HERE](assets/images/documentation/lost-king-flowchart.jpg)

#### coding processes

My initial task was to build a toolbox of functions covering the main functionality of a game, along with the basic structure of the pages.
I have identified 3 main activities that take place in-game and built and tested a suite of functions to support it.
From this point building out the content around the flow chart should be straighfoward; at that point I can move on to refining the look and feel around the current site templates.

1) Exploration
    - change mode to main window.
    - display custom text in game-text element.
    - display options in choices section.
    - keep score!
    - update object which logs where searches / battles / actions have taken place.
    - test

2) searching for an item
    - initiate seach with searchItem() function (which includes foundItem display mode).
    - display custom text in a lower-text element.
    - display options in choices section.
    - update object which logs where searches / battles / actions have taken place.
    - store item and update appropriate stats if player chooses to do so.
    - test

3) combat
    - create and populate object for the new enemy.
    - change display mode to item window.
    - display text in upper-text element.
    - display options in choices section.
    - initiate combat with the setEnemyStats function, which includes displaying upcoming enemy.
    - test
  
 NB: Once the combat functions have been passed details of the enemy and their stats and combat has been initiated, 
 there are set buttons and functions the player uses to resolve the combat - no more development input than setting up 3 event handlers for the buttons with the correct enemy name is needed.

### Wireframes


Please find the wireframes [HERE](WIREFRAMES.md).

## UX - Surface
([back to top](#the-lost-king-of-catland))

### Color Palate

#### Background colors

#000000 - overall background, alert background.\
#00000080 - game text background (includes transparency).\
#331704B3 - player selection background (includes transparency).\
#FFFFFF80 - player selection background on hover (includes transparency).\
#564040 - give up element background (plus the about section).\
#7a5111 - restart game element background (plus 'playing the game' section).\
#3C1006 - reset game element background (and start game form input).\
#524b2a - start game button background.\
#ffffff - mouseover background color for navigation and landing page elements.\

#### Text colors

#ffffff - text color.\
#000000 - text color (mouse-over in-game options).\
#008000 (green) - text color, positive events or effects.\
#ff0000 (red) - text-color, negative events or effects, Item alert title.\

#### Other

#5E3D00 - borders.\
#ff0000 - outline for table in 'playing the game' section (for contrast).

### Main Page

On account of the setting of the game (ie a dungeon), I have opted for overall theme evocative of being trapped underground. As such I retained the plain black background for the page; I am able to do this because the images for each location very much speak for themselves and would not respond well to too much clutter.
I tried wood panelled or canvas backgrounds for various areas of the screen, but in doing so I lost a lot of semantic and visual clarity - the in-game atmosphere was badly compromised.
As such I very much went for a less is more approach, adding custom borders around the game area and consistent borders within it, and across the site.
I used stone backgrounds with very clear icons in the item section, to make it obvious what each slot is for prior to being filled with an item.

In the main game window the backgrounds vary so I have used a dark transparency to overlay with white text for contrast.
In combat and other situations where character health is effected I have used red and green text for positive or negative effects, and orance and ice blue to indicate fire or ice damage.
Again this is meant to evoke RPG games past and is fairly standard in the genre - users will know exactly what is going on.

During the battle sections I reduced the overall footprint of the text by adopting a similar approach to Baldur's Gate and other similar games - just showing the character name and then the combat text/outcome.

### Fonts

I wanted a strong retro feel for the title fonts, but many of those I found were close to unreadable so I scaled down my ambitions on that front, finding a clear and easy to read font that nevertheless is evocative of the genre.
The font for the main text was chosen for its clarity, as well as a similarity in style to the title font.

### Images

All images and backgrounds have been created using AI, specifically Bing Image Creator. I have chosen this route for a number of reasons:

 - speed and ease of use
 - price (ie free)
 - ownership (I own all AI created images and can use them how I please)
 - consistency (having all images created by the same program and in the same manner means they all have a similar artistic style.)

### Navigation / player options

 - The player options section uses a brown background in order to stand out from the main text on the page, with white highlights on mouseover.
 - The navigation buttons throughout the site use a similar color scheme and mouseover effects, for user familiarity.  This is important since they are not always sited in the same location.  All the same the site is intended to be intuitive to use.
 - The various brown shades are intended to mirror the overall feel of the page, and also an indication of a button's intention. Warm golden shades were used for the restart option, reds for the reset option, and a blue shade for giving up indicating death.
  
### Alerts

I created custom alert code which I used on the homepage and for any item conflicts, mainly because it would have been very difficult to use built in alerts to the same effect.  It consisted of a simple box centred on the screen, with a black background and white text.
For item conflicts (ie picking up an item of a sort already in the inventory) I included a very visual process of selecting, with a tick or a cross indicating the item retained.
Although this mouse-over effect does not work on mobile, it is still very clear and simple to select the item you wish to keep.

### Responsiveness

The game was designed for 1920px screen width - anything below uses a 'max-size' media query, anything above a 'min-size'
From wireframe up the CSS flexbox page structure was designed to be easily adjusted to other screen widths.

The main difficulty was that the backgrounds are not designed for mobiles of for larger screens. This is partly a product of Bing image creator, which only produces widths of 1024 pixels.
Additionally, the backgrounds are called by Javascript, which makes it a problem replacing them using conventional media queries.
This has been addressed by:
 - adjusting margins of the game area for larger screens.  It means more blank space but the backgrounds display correctly.
 - Adjusting zoom and positioning of backgrounds for smaller screen sizes.  It's not an ideal solution but helps ensure a player has a broadly similar experience.

Overall I have limited the number of break points to avoid an overload of CSS micromanagement on this project.  The major break points are as follows:
 - max width 768px (works on screens down to 320px)
 - max width 1024px (indended for tablet devices)
 - max width 1200px (for smaller laptops and similar)
 - max-height 800px (for smaller laptops and similar)
 - default (designed for standard HD displays)
 - min width 2000 (for larger screen sizes)

Further to this I eventually discovered I needed to extend the break-points for larger screen sizes and also include one for smaller screens.
There are also a few tweaks for intermediate screen sizes, particularly regarding background management, but nothing major.

## Testing Documentation
([back to top](#the-lost-king-of-catland))

Please find all testing documentation [HERE](TESTING.md).
  
## Deployment
([back to top](#the-lost-king-of-catland))

### Initial Deployment

The website has been deployed [HERE](https://rowlandcoping.github.io/lost-king-part1/) via github pages, using the method below:

- I logged in to my github account.
- I opened the lost-king-part1 repository.
- From within the repository I selected 'Settings'
- From the settings page I selected 'Pages' from the 'Code and automation' section of the left menu.
- I selected 'deploy from a branch' from the 'source menu' and then select the 'main' branch of the repository, along with 'root' as the folder.
- On pressing 'Save' the site deployed.

### Deployment Instructions

If you wish to deploy this website yourself, here is how to go about it.

1:  Using github pages

- Log in to or create your own Github account [HERE](https://github.com/).
- Go to the lost-king-part1 repository [HERE](https://github.com/rowlandcoping/lost-king-part1/) and select 'Fork' to create your own snapshot of the repository.
- From the forked repository select 'Settings'
- From the settings page select 'Pages' from the 'Code and automation' section of the left menu.
- Select 'deploy from a branch' from the 'source menu' and then select the 'main' branch of the forked repo, along with 'root' as the folder.
- Press save.  The site will now be deployed from your own forked repository!

2:  Using source files

Because this website is built using nothing but HTML, CSS and JavaScript you can deploy it in any web browser from local files.

- Go to the lost-king-part1 repository [HERE](https://github.com/rowlandcoping/lost-king-part1/) 
- Download all the files in the repository to a folder on your local machine.  You may exclude the 'node_modules' folder and the package-lock.json and package.json files if you don't wish to deploy the files necessary for Jest testing.
- In your local folder, right click the 'index.html', select 'Open With' and then select any web browser.

NB If you wish you could also deploy these files by copying and pasting them to the 'www' folder of your own web host, but keep in mind that the method of deployment will vary depending on the web hosting package you use.

NNB If you are using a Linux operating system running Apache you can simply save the files in your local '/var/www/html' folder and deploy by typing 'localhost' into a browser window. Please see instructions for installing Apache [HERE](https://ubuntu.com/tutorials/install-and-configure-apache#1-overview) if you haven't already.

THE 404 PAGE:

On Github the server is pre-configured to display a 404.html page whenever a page is not found, but that may not be the case in all deployments.  Depending on the server you are deploying from, there are a number of steps you may need to take.  In Apache, one way is using an .htaccess file, however it is preferable where possible to directly configure the server.  In most cases this is straightforward; I have sourced guides below to the more popular servers:
  - Click [HERE](https://www.msnoob.com/how-to-redirect-404-error-page-to-another-url-in-iis-server.html) for Microsoft IIS Server.
  - Click [HERE](https://www.ionos.com/digitalguide/server/configuration/configure-apache-to-use-custom-error-pages/) for Apache servers.
  - Click [HERE](https://www.cyberciti.biz/faq/howto-nginx-customizing-404-403-error-page/) for NGINX servers.

### Continuing This Project

If you are a developer and wish to extend this project further, there are a number of development environments I have used, which I have outlined below.  All suggestings make the assumption you have already forked the github repository as outlined above, and don't have access to any paid-for IDEs:

1: Text Editor

The simplest method is to use a basic text editor.  I use notepad++ on Windows or Geany on Linux, but even something as simple as Windows Notepad will do.

 - Download all files from your forked repository except for the '.devcontainer' folder and the '.gitignore' file to a folder on your local machine.
 - Right click the file you wish to edit, select 'Open With' and then select your text editor of choice.

 2: VS Code in Windows

 I have used VS Code throughout this project, running in a Windows environment.  If you wish to do the same:
  - Follow the guide I have created [HERE](https://rowlandcoping.github.io/work-locally/)
  - When cloning a repo be sure you already have a forked version of the lost-king-part1 repository (see [HERE](#deployment-instructions)).

3: VS Code on Linux using local files

Although I have not used Linux on this occasion, I have done in the past. I set up my development environment on Linux using the guide [HERE](https://www.theodinproject.com/).

  - Create an account at The Odin Project.
  - Navigate to 'Installation Guides' at the bottom of the page.
  - When it guides you on how to download the repo locally, be sure to clone the forked repository of lost-king-part1.
  - Once you have followed the guide you will have your own local development environment!

## Credits
([back to top](#the-lost-king-of-catland))

### Fonts

Fauna One: [font space](https://www.fontspace.com/fauna-one-font-f17441)\
Libre Franklin: [font space](https://www.fontspace.com/libre-franklin-font-f39605)

### Images

All images created using [Bing Image Creator](https://www.bing.com/create) and are therefore owned by me.

### Content

© 2023 John Hall, all rights reserved.  I don't mind imitators, but this content belongs to me!

### Acknowledgments

Thanks once again to Mitko and also Iris for your infinite patience.  Also thanks to everyone who playtested, and at least pretended to enjoy the journey!

## Technical Information
([back to top](#the-lost-king-of-catland))

Version Control: Git and Github\
Testing: Jest\
Languages: HTML, CSS, JavaScript\
Development Environment: VS Code on Windows\
Wireframes: Balsamiq\
Image Creation: Bing Image Creator\
Image Editing: GIMP
