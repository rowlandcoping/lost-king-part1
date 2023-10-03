# Testing Documentation

([return to README](README.md))

## Contents

### Audit and Validation

[HTML Validation](#html-validation)\
[CSS Validation](#css-validation)\
[Lighthouse Audit](#lighthouse-audit)

### User Story Validation

[Restauranteur User Stories](#restauranteur-user-stories)\
[Customer User Stories](#customer-user-stories)

### Testing

[Automated Testing](#automated-testing)\
[Manual Testing](#manual-testing)\
[Bugs and Issues](#bugs-and-issues)

## Code Validation

### HTML Validation

([back to top](#testing-documentation))

I have completed a final validation of all HTML pages using the [W3C HTML validator](https://validator.w3.org/).

![image](assets/images/testing/html-validation.jpg)

The issues that needed resolving were as follows:
 - There were a number of empty elements that were to be populated by Javascript which needed holding text
 - There were duplicate IDs on some buttons that were used in seperate game states, which needed changing to a class.
 - Images needed alt tags.  This was no small task, as it required adding alt tags to 40 game objects and updating the JavaScript accordingly in order to display the text.  There were also a number of default alt tags that needed adding in html.

### CSS Validation

([back to top](#testing-documentation))

![image](assets/images/testing/css-validation.jpg)

I have completed a final validation of my 'style.css' file using the [W3C CSS validator](https://jigsaw.w3.org/css-validator/).\
There was one error caused by a likely copy and paste error, which was easily fixed.

### JavaScript Validation

![image](assets/images/testing/eslint-linter.jpg)

I initially used JSLint but found it was overly strict.. Not only did I have hundreds of warnings concerned with alphabetical order, it also refused to recognise 'for' loops as legitimate JavaScript.
The reading I subsequently did suggests that the use of 'for' loops is a matter of preference, and it's certainly a method I have been taught on the course as standard practice!
Faced with the choice of either re-configuring JS Lint or refactoring more or less every line of my code I decided to look for an alternative.
After some research I decided that ESlint would be the most appropriate linter to use for this project.

On testing my JavaScipt file for errors, I found six using ES lint:
   - multiple errant semi-colons.
   - A duplicate function to close alerts on the homepage.
   - I had wrongly assigned my item filter function to a constant.  I'm not actually sure how it was working before amending it!

### Lighthouse Audit

#### Homepage

![image](assets/images/testing/lighthouse-validation.jpg)

The initial lighthouse audit made only a couple of suggestions:
 - add a meta description for SEO purposes, which although not that relevant to this project feels like best practice!
 - convert any remaining jpegs to webp format to help load times.

#### Game State

![image](assets/images/testing/lighthouse-state.jpg)

I also conducted a test on the game state itself.  Some issues were identified which I have not addressed for reasons outlined below:
 - Table does not have headers:  The character stats section is in tablular form for very specific reasons - one is in order to properly align it with minimal code, and the other is because semantically it is tabular data.  The information in the table is self explanatory, and headers would not add semantic understanding and cause major layout issues besides, so I have not included them.
 - Headers out of sequence: I have jumped straight from h2 to h3 tags for a couple of reasons - one practical legacy reason is there used to be an h2 tag at the right side of the title bar until I reconfigured the page, therefore the issue did not exist.  The other is for other accessibility reasons, ie responsiveness.  If I set H2 tags it would require manually setting the font sizes which would be extremely problematic as the screen sizes changed.  It's a nice to have for the future when I have a lot more time, but at present I do not believe it causes any semantic difficulties.
 - Images sized by their containing elements: because I was setting image elements which did not previously exist as innerHTML it did not occur to me to style the image elements themselves prior to them existing.  It would require a lot of work now to rectify, refactoring a lot of the CSS. Whilst the site is not experiencing any notable performance issues and given my current time constraints I believe it is something that can be addressed in future iterations of the site.

## User Stories
([back to top](#testing-documentation))






## Testing
([back to top](#testing-documentation))

### Automated Testing
([back to top](#testing-documentation))

I initially intended to conduct automated testing with Jest throughout the project, and indeed did so throughout the initial iteration of the project.
A significant chunk of code has been tested automatically, including the item search and battle algorithm, as well as object states and even game states for the first two rooms.

With certain phases of the project, the value was quite clear - for example automated testing uncovered a number of issues with the item search algorithms.

However as the project has progressed the limitations of Jest and in particular my proficiency at using it has been exposed.  There are a number of reasons why I have removed automated testing from the project:
 - Personal knowledge: it became clear to me that in order to perform testing of some of the more complex functions, I needed knowledge of Jest way beyond what had been taught on the course, or that I had time to learn whislt working on this project (eg mock functions).  If I'm honest, and this comes from having consulted a LOT of sources, it seems Jest is no-where near as straightforward to use as its developers make out.
 - Time: towards the end of the first week I spent many hours attempting to properly configure Jest and use it for complete coverage.  It soon became clear with the amount of code that would need testing that this was impractical.
 - Effectiveness:  At the end of the first week working on the project, I found a major bug with the battle code, which hadn't been uncovered by Jest.  It was actually down to an error in my logic that persisted in my testing procedure delivering false positives - and therefore only manual testing was able to uncover the inconsistencies it created.  I quickly decided that my limited testing time would be better spent in that direction.
 - Project Scope: As a solo project mainly concerned with events in the DOM, the usefulness of automated testing was limited.  The sheer amount of code that needed testing and the simplicity of much of it turned testing into a purely academic exercise.
 - Jest coverage issues: because Jest insists of coverage of code that is not being tested, I have recently run into issues that I believe stem from asynchronicity.  Indeed, I have been unable to even load the test suites because Jest was getting hung up on the shuffle function, presumably because the page wasn't loading fully before Jest attempted to test it.  I have been unable to solve this in spite of investing a number of hours into it.

As a result of these issues, I have decided to remove all automated testing from the project directory including JavaScript files - there is no point the tests being there if they cannot be run!  I do have the files backed up so that I can potentially re-instate them in the future, and I have learned a great deal by taking it on, but for now in the context of this specific project I think it makes more sense to focus all my efforts on a comprehensive suite of manual tests.
It is a shame I think, especially on account of the time I have devoted to it.  I think it is potentially a useful tool, but one that I need to learn more about before I can get the best out of it.

### Bugs and Issues
([back to top](#testing-documentation))

Of course, this is by no means a comprehensive list, but gives an idea of some of the things I grappled with as I built this project.  It certainly has ended up being a great deal more complex than I originally anticipated.

#### Playtesting Issues

Due to the size of the project there have been many challenges and bugs that have appeared during testing both by myself and my playtesters.  Here are a few things that came up:
 - Locations leading to places they really shouldn't (one involved repeatedly acquiring a furry gilet)
 - Item images not having correct paths.  There was one issue with the insect repellent item involving extensive mis-spelling.  On correcting this it turned out the function itself was broken, so the insect repellent had no chance!
 - Typos.  A lot of typos.
 - There was one bug where the character would be anointed a god by the cat people(which would normally ive them the object they need to complete the game), but under certain circumstances would not be given the object.  I belive my girlfriend spend a considerable period of time trapped in the resultant endless gameplay loop with me telling her it was her fault!
 - There were a lot of bugs involving cat biscuits, one of which provided an endless supply.  It was a similar story for insect repellent, albeit a less useful one.

#### Coding Issues

 - A frustrating initial issue was a failure to load buttons on the page prior to the content I wanted on the buttons, which meant blank text.  I resolved it by changing the way I coded event listeners.
 - I had further issues removing event listeners to freeze the screen for custom alerts, which I could only resolve by refactoring the event listeners once again.
 - When it comes to html and css, I have discovered there are few issues that cannot be overcome by judicious use of flexbox.  It's been a revelation for me.

#### Item Search Mechanic Bugs

- I had serious problems with the initial iteration of the item search - because the nature of the for loop is that it returns the penultimate iteration of the loop, it meant certain items were not discoverable.
I also suspect I had either a less than or a greater than sign the wrong way round somewhere! I worked through multiple potential solution over the course of several hours before using the map function to create an array of potential values, which I was then able to iterate over using filter.
Although the code seemed to be functional, I have no idea how, because ESlint uncovered a huge issue with how it was implemented.


#### Battle mechanic bugs

The most entertaining bugs are reserved for combat: 
 - During automated testing I realised the player and enemy resistances function were just a series of if statements which meant variable values could be overwritten by subsequent logical outcomes; the function was over-compoicated and it didn't work. I revised it into two seperate functions for each turn cycle using if-else statements with a default else statement to ensure it could only return one value per round.
 - Initially numbers were not being passed as integers and undefined values were breaking the code.  I found the issue with trying to pass variables into a function from other functions and the variable therefore being out of scope.
 - There was initiall an issue with the enemy character ending with minus health - solved my manually setting value in DOM to zero. I also had to change the code to prevent the enemy from attacking after they were dead!
 - The biggest issue involved the defence resist mechanism.  Once an enemy's attack strength is decided the pplayer has a roll, modified by whatever armor they are wearing and thier defence stat, to see how many of those hits they can defend.
Having acquired a suit of plate armor, the best defensive item in the game, I noticed that Ragnar, the weakest opponent in the game, was hitting me for more damage than he had strength points, which is impossible.
In fact, the worse his statistics and the better mine were, the harder he hit me.  I died to him a couple of times before I found the problem.  If a character fails to resist any hits, they can often end up with a negative value.
What I had done was subtracted this negative value from the total hits, turning it into a positive and adding additional damage.  What compounded this problem is that I was applying enemy defensive values to my armor and vice versa.  The more pathetic Ragnar's armor (and by extension my armor), the more he added on to his rolls, producing crazy results. 
What's worse, the better the player armor the harder he was to kill, on account of him wearing it.  This bug was easily fixed by reversing the armor values and setting zero as the floor for an armor roll, but it made me laugh.
- I discovered a similar problem involving the revised resistances code - I used a single value for both characters so enemy resists or vulnerabilities were applied to the player.  In fact the most recent battle related bug was even worse - in an attempt to reduce the code I ended up multiplying the enemy's combat score by an unmodified decimal, meaning characters were bashing each other eternally to no effect.
- For some time, the potion section was not a passing value to the enemy round so the enemy was not getting a turn.  This was most obviously and amusingly manifested by endlessly clicking the use potion of catnip button and running up enormous negative scores. The bug was rectified by ensuring the necessary parameter was passed to the potion function.

#### User Driven Changes

A number of changes to the codebase were driven by user feedback:
 - Originally the golden orb was not carried as an object, but given the lack of usefulness of other objects after that point and the need for clarity I chose to simply have it replace any object the player was currently carrying.
 - The need was raised both by users and my mentor for clarity over what each item slot did.  This led to me refactoring the code with the current design solution.
 - It was also mentioned to me there was a lack of clarity in how weapons etc influenced stats, so I added this to the character sheet.  It required a lot of changes to the code but I think it really helps the UI, especially on mobile.

#### Game Balancing Issues

 - I significantly reduced the effectiveness of all items in combat, as they were overly effective in most situations.
 - I reduced and lowered the range when it came to player stat generation.  Right now I think it's just challenging enough - although it would be straightforward to introduce varying difficulty levels (affecting stats across the board) in the future along with appropriate score multipliers.
 - On balance the likelihood of being 'Godded' is too high in most situations, and the combat chance reduces too aggressively after each encounter. Whilst I do not want the loop to be endless, it needs adjusting in order to let multiple gamplay styles play out (particularly the cat death one which is near impossible at present).  This is something to be addressed and tested once the rest of the project is complete, should there be time.


### Manual Testing
([back to top](#testing-documentation))

Although I have used a degree of automated testing, the most useful and productive approach I have taken is by manually testing the code, using the console to replicate various game states, and console.log to understand what is going on.
For example, I found the quickest and most reliable way to easily undertand how the battle functions were working was to insert console logs at various stages to log outcomes.

In order to log comprehensive tests I have divided the code into tables by game room, reflecting how the in-game code is divided into objects.  
I have also included seperate tables to test various key functions controlling the game mechanics - namely the item search, battle section, item alert boxes and helper functions. 

#### Game logic testing

For me the most sensible way of approaching this is to treat it like repsonsiveness testing and simply ensure that everything appears as intended, then as long as the JavaScript lints properly I am happy with the functionality.

As such these manual tests focus on successful outcomes rather than how the code got there.
These first section of tests focus on the navigation of the pages - battle and search logic are tested seperately.
NB References to the 'Game Object' refer to the ThingsWhatYouveDone game object which logs what the character has and hasn't done.

LANDING PAGE STATE:

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| 'About the Game' alert object | displays alert page, disables buttons | Success |
| 'Playing the Game' alert object | displays alert page, disables buttons | Success |
| Name form field | displays name, submit via enter disabled | Success |
| Image shuffle fields | Correctly displays random image and alt | Success |
| Start Game button | submits name (or default) to character object, initiates game | Success |

ROOM ONE (Ragnar Cave):

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| Character stats generation | stats display correctly on screen | Success |
| Default item images | Default item images displayed on initialisation | Success |
| navigation area | Correct navigation buttons displayed | Success |
| Initial game page load | correct background, player options and text displayed | Success |
| Initial player options | initial options load correct game states | Success |
| 'Open Eyes' game page load | correct player options and text displayed | Success |
| First name option selected | correct player options and text displayed | Success |
| First name option selected | correct player options and text displayed | Success |
| Third name option selected | correct player options and text displayed | Success |
| Name selected game page load | correct player options and text displayed | Success |
| search option selected | loads correct game state (item search) | Success |
| room departed | Slime corridor background, text and options correctly displayed | Success |
| item results page load | random item displayed correctly with correct options | Success |
| Keep item selected | correctly assigns item and loads next game state | Success |
| Ignore item selected | correctly loads next game state | Success |
| Ragnar attacks page load | correctly load text and options if Ragnar attacks | Success |
| Ragnar is dead page load | correctly load text and options if Ragnar does not attack | Success |
| Ragnar attack test luck | Testing luck loads correct game state | Success |
| Ragnar attack no test luck | Not testing luck loads correct game state | Success |
| Ragnar fight initiation | Fight with Ragnar loads correct game state and character info | Success |
| Ragnar fight options | All fight options are present depending on what is being carried | Success |
| Ragnar post fight navigation | Post fight option loads correct game state | Success |
| Re-visit game page load | correct text and options loaded for page once search conducted | Success |

ROOM TWO (Slime Corridor):

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| Drink liquid option | Has predictable desired effect on game state | Success |
| Examine liquid option | Initiates correct game state (slime attack) | Success |
| Return to start cave | returns you to starting point with correct game state | Success |
| Round the corner | loads correct Cat Cavern text, background and options | Success |
| Luck Test | Resolves luck test logic and loads appropriate game state for success/failure | Success |
| Arm Smash | loads correct game state to initiate slime combat| Success |
| Slime Combat initiation | Fight with Slime loads correct game state and character info | Success |
| Slime fight options | All fight options are present depending on what is being carried | Success |
| Post combat return to cave | returns you to starting point with correct game state | Success |
| Round the corner | loads correct Cat Cavern text, background and options | Success |
| Collect Goo | Instigates appropriate goo collection game state depending on inventory | Success |
| Return to corridor when goo exists | loads appropriate game state | Success |
| Pass through corridor from initial cave direct to cat cavern | loads appropriate game state | Success |
| Pass through corridor from cat cavern direct to initial cave | loads appropriate game state | Success |

ROOM THREE (Cat Cavern):

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| cat cavern initial option | Initiates cat warrior decision as expected | Success |
| Cat run away | Loads correct game state, correctly updates game objects depending on luck test | Success |
| Cat attack | Loads correct game state | Success |
| Cat capture | Loads correct game state | Success |
| Cat God | Loads correct game state and updates game objects correctly | Success |
| God game state | player option reverts to cat exit options as expected | Success |
| Cat run away game state | player option reverts to cat exit options as expected | Success | 
| Captured game state | option takes you to Cat Court | Success |
| Attack game state | provides correct options pre-fight | Success |
| Attack run away option | loads correct game state, updates game objects | Success |
| Attack run away state | option loads cat dining game state | Success |
| Attack stand ground option | Initiates fight with cat warrior with right gmae state | Success |
| Pre-fight | Loads correct game state | Success |
| cat fight options | All fight options are present depending on what is being carried | Success |
| cat biscuits special item | Eat / give cat biscuits option works as intended | Success |
| catnip potion special item | using the catnip ption works as intended | Success |
| Cat exit options | loads correct game state depending on game objects | Success |
| Go back way you came | loads correct game state for slime corridor or reverts to initial room | Success |
| Broad corridor | loads cat dining room game state | Success |
| Stone Doorway | loads mystery room game state | Success |
| Climb Stairs | Takes you to game state at foot of stairs | Success |
| Return to cat cavern (cats killed) | Triggers correct game state if 5 cats killed | Success |
| Return to cat cavern (God status) | Triggers correct game state if cat god | Success |

ROOM FOUR  (Mystery Room):

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| mystery room initial load | loads game state as expected including orb option if carried | Success |
| go back to cat cavern | returns to correct cat cavern game state | Success |
| place orb | loads correct game state | Success |
| place orb option | Initiates battle with Fire Mage or Ice Queen as expected | Success |
| post fight option | Initiates game end state | Success |

ROOM FIVE (Danger Stairs):

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| danger stairs bottom initial load | loads game state as expected | Success |
| Decline to climb stairs | Returns to cat exit options state in cat cavern | Success |
| Climb stairs | Executes Luck test and initiates appropriate game state based on result | Success |
| Climb stairs fail | returned to bottom of stairs, depending on roll game object updated or death scene initiated | Success |
| Climb stairs succeed | Top of stairs game state initiated | Success |
| back down stairs | Executes Luck test and initiates appropriate game state based on result | Success |
| Descend stairs fail | returned to bottom of stairs, depending on roll game object updated or death scene initiated | Success |
| Descend stairs succeed | climb stairs game state initiated | Success |
| Enter cave | Spider cave game state initiated | Success |
| Enter cave (spider already killed) | dead spider game state initiated | Success |

ROOM SIX (Spider Cave)

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| First visit cave state | Game state loaded as expected | Success |
| Run away | top of stairs game state initiated | Success |
| Get it over with | Spider fight initiated | Success |
| Spider fight initiation | advance to spider fight | Success |
| Spider fight options | All fight options are present depending on what is being carried | Success |
| Insect repellent special object | Insect repellent works as intended | Success |
| Spider death | dead spider game state loaded, game objects updated | Success |
| Leave Cave | top of stairs game state initiated | Success |
| Investigate apeture | back of cave game state initiated - including optino for rope if equipped | Success |
| Back of cave page load | Game state correctly loaded (depending on game object state) | Success |
| rope option taken | if rope is used, initiated frayed rope injury test and appropriate outcome | Success |
| Leave cave | returns to top of stairs game state | Success |
| back door entry | If entereing through back door, correct game state initiated depending on spider status | Success |
| back door spider fight | fight with spider correctly initiated if entering through back door | Success |

ROOM SEVEN (Cat Dining Hall)

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| Cats alive visit | Game state loaded as expected depending on god status| Success |
| Cats alive not god yet option select | loads cat court game state | Success |
| cat god visit | loads game state with exit options | Success |
| Cat go back to cavern | loads cat cavern game state | Success |
| continue along corridor | loads cat corridor game state | Success |
| Cats dead first visit | Game state loaded with exit options and orb acquired | Success |
| Cats dead subsequent visit | Appropriate game state loaded with exit options | Success |


ROOM EIGHT (Cat Court)

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| Cat Court option selected | proceeds to cat decision state | Success |
| Cats decide to kill you | appropriate end game state loaded | Success |
| Cats decide to imprison you | loads cat prison decision game state | Success |
| Prison decision option | loads cat prison game state | Success |
| Cats decide to god you | loads gift item game state | Success |
| gift item state | Provided option to keep or discard either purple helmet or loin cloth | Success |
| keep gift item | game objects and game state updated, cat God exit state loaded | Success |
| reject gift item | cat God exit state loaded | Success |
| cat God exit option |  initiates cat corridor game state | Success |

ROOM NINE (Cat Corridor):

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| Cat corridor initial state | game state loaded according to game object tests | Success |
| head towards cat sounds / towards empty dining room | cat dining room state loaded (dependent on game object) | Success |
| head away from cat sounds / into the gloom | cat corridor 2 game state loaded | Success |
| Cat corridor 2 state | game state loaded according to game object | Success |
| Investigate doorway | game state loaded back entrance to cave | Success |
| turn around | dining room game state loaded | Success |
| Investigate doorway options | Game state loaded according to game object | Success |
| Lower yourself down | Enters back of spider cave game state, which depends on spider status | Success |
| return to corridor | Returns to corridor 2 game state | Success |

ROOM TEN (Cat Prison):

| Feature Tested                        | Expected Outcome                 | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| Cat Prison initial state | game state loaded with all options depending on game object | Success |
| prisoner search | character finds gilet | Success |
| keep gilet | appropriate game state loaded depending on items carried, returned to prison game state with options updated | Success |
| discard gilet | Returned to prison game state with options updated | Success |
| Search cell 1 fight | cockroach fight initiated (depending on 50/50 roll and Game object) | Success |
| cockroach fight option | Fight option moves to fight state with correct options | Success |
| Insect repellent special object | Insect repellent works as intended | Success |
| cockroach death option | Returns player to prison page with options updated.  game object updated so cockroach cannot re-appear!| Success |
| Search cell 1 item search | Appropriate found item is displayed with correct options | Success |
| Search cell 2 fight | cockroach fight initiated (depending on 50/50 roll and Game object) | Success |
| Search cell 2 item search | Appropriate found item is displayed with correct options | Success |
| keep found item | populates item slot & game object and returns to prison game state | Success |
| discard found item | returns to prison game state | Success |
| climb through window | player is presented with climb through window option | Success |
| climb through window option | player is returned to cat corridor game state | Success |

ITEM SEARCH TESTING

Although testing of these functions was included in Automated testing, it is just as easy to test manually using the initial item search in ROOM ONE:
 - each search pass item type odds into search function, which I use in-game to balance item types.  Using 100 as a parameter(ie 100%) can guarantee an item type ( eg (100,100,100,100) should guarantee a weapon, (0,100,100,100) a defence item, etc.)
 - adjust odds in find item algorithm to return specific item (eg setting the random number generated to between 0 and 3 should guarantee the 'Oathbringer' sword, 4 and 20 the short sword, etc).
 - Any anomolies or unexpected behaviour indicates an issue with the function.
 - Success in these tests strongly indicates the random number generator function also works just fine!

| Numebr range entered                        | Item Expected              | Result  |
| ------------------------------------- | -------------------------------- | ------- |
| (100,100,100,100), 0-3 | Oathbringer | Success |
| (100,100,100,100), 4-20 | Short Sword | Success |
| (100,100,100,100), 21-50 | Rusty Dagger | Success |
| (100,100,100,100), 51-80 | Gnarled Club | Success |
| (100,100,100,100), 81-90 | Gleaming Mace | Success |
| (100,100,100,100), 91-95 | Wand of Fire | Success |
| (100,100,100,100), 96-100 | Frozen Staff | Success |
| (0,100,100,100), 0-15 | Furry Gilet and Shorts | Success |
| (0,100,100,100), 16-30 | Golden Loin Cloth | Success |
| (0,100,100,100), 31-75 | Filthy Jerkin | Success |
| (0,100,100,100), 76-85 | Chain Mail | Success |
| (0,100,100,100), 86-95 | Purple Helmet | Success |
| (0,100,100,100), 96-100 | Plate Armor | Success |
| (0,0,100,100), 0-15 | Potion of Catnip | Success |
| (0,0,100,100), 16-30 | Potion of Healing | Success |
| (0,0,100,100), 31-50 | Potion of Fire | Success |
| (0,0,100,100), 51-70 | Potion of Ice | Success |
| (0,0,100,100), 71-85 | Potion of Defence | Success |
| (0,0,100,100), 86-100 | Potion of Power | Success |
| (0,0,0,100), 0-20 | Bag of Cables | Success |
| (0,0,0,100), 21-35 | Cat Biscuits | Success |
| (0,0,0,100), 36-50 | Insect Repellent | Success |
| (0,0,0,100), 51-65 | Four Leaf Clover | Success |
| (0,0,0,100), 66-80 | Stress Balls | Success |
| (0,0,0,100), 81-100 | Frayed Rope | Success |

BATTLE MECHANIC TESTING

This game mechanic requires console.log output to identify values within the various functions.  I have broken expected behaviour down according to each phase of the fight in the table below.

| Method                       | stat values  | Roll Result | Expected Outcome | Success |
| ------------------------------------- | -------------------------------- | ------- | ------- | ------- |
| Hit success | 12 | 15 | False | Success |
| Hit success | 12 | 1 | True | Success |
| Hit success | 12 | 4 | True | Success |
| Damage roll | 0-13 | 7 | Value between 0 and 13 | Success |
| Damage roll | 0-9 | 7 | Value between 0 and 9 | Success |
| Damage roll | 2-12 | 8 | Value between 2 and 12 | Success |
| Resist roll (player turn) | 10 defence, 2 damage | 2 | 8 resisted (10-2), 0 net damage (2-8) | Success |
| Resist roll (player turn) | 10 defence, 3 damage | 15 | 0 resisted (10-15, 0 is the floor), 3 net damage | Success |
| Resist roll (player turn) | 10 defence, 6 damage | 12 | 0 resisted (10-12, 0 is the floor), 6 net damage | Success |
| Resist roll (enemy turn) | 15 defence, 11 damage | 7 | 8 resisted (15-7), 3 net damage (11-8) | Success |
| fire resistance (enemy) | weapon magic: fire | 8 damage | 4 (damage x 0.5) | Success |
| fire vulnerability (enemy) | weapon magic: fire | 7 damage | 14 (damage x 2) | Success |
| ice resistance  (enemy) | weapon magic: ice | 6 damage | 3 (damage x 0.5) | Success |
| ice vulnerability  (enemy) | weapon magic: ice | 15 damage | 30 (damage x 2) | Success |
| blunt resistance (enemy) | weapon type: blunt | 2 damage | 1 (damage x 0.5) | Success |
| blunt vulnerability (enemy) | weapon type: blunt | 5 damage | 10 (damage x 2) | Success |
| sharp resistance (enemy) | weapon type: sharp | 10 damage | 5 (damage x 0.5) | Success |
| sharp vulnerability (enemy) | weapon type: sharp | 3 damage | 6 (damage x 2) | Success |
| fire resistance (player) | weapon magic: fire | 12 damage | 6 (damage x 0.5) | Success |
| fire vulnerability (player) | weapon magic: fire | 3 damage | 6 (damage x 2) | Success |
| ice resistance (player) | weapon magic: ice | 3 damage | 1 (damage x 0.5) | Success |
| ice vulnerability (player) | weapon magic: ice | 6 damage | 12 (damage x 2) | Success |

Alert Testing

I have introduced custom alerts for when multiple items of the same type are picked up.  Each item search has a seperate trigger, tested here.

| Alert Trigger                | screen locked?  | Image mouseover works? | Alert closed & item stored? | Result |
| -----------------------------| ----------------| ------- | ------- | ------- |
| First search (weapon) | Yes | Yes | Yes | Success |
| First search (defence) | Yes | Yes | Yes | Success |
| First search (potion) | Yes | Yes | Yes | Success |
| First search (object) | Yes | Yes | Yes | Success |
| Slime pickup | Yes | Yes | Yes | Success |
| Cat Sword pickup | Yes | Yes | Yes | Success |
| God defence item acquired | Yes | Yes | Yes | Success |
| Gilet pickup | Yes | Yes | Yes | Success |
| Prison search (weapon) | Yes | Yes | Yes | Success |
| Prison search (defence) | Yes | Yes | Yes | Success |
| Prison search (potion) | Yes | Yes | Yes | Success |
| Prison search (object) | Yes | Yes | Yes | Success |

#### Responsiveness Testing

I have tested at (in descending order) 3080px, 1920px (default), 1080px, 768px, 400px, 320px.  This is reflective of the major break points.  
Please note that even beyond these key break points the game has been tested to look good with pretty much any screen size.


#### Issues found during manual testing

Although I and others have tested the game extensively, a small number of issues were uncovered during formal manual testing.
It should be noted that the orb issues in particular are never encountered during normal gameplay on account of a known game balance issue that needs addressing.

 - Slime object image was not displaying due to typographical error.
 - Glowing Orb did not populate item slot if found in dining room.
 - Glowing Orb could be discovered multiple times in abandoned dining room
 - In battle a weapon with an attack value of 0 would actually reduce your minimum attack, and a weapon with a value of 1 did nothig to improve it.  Updated code so this was no longer the case.


