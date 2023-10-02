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

[Autonated Testing](#error-testing)\
[Manual Testing](#manual-testing)\
[Unresolved Bugs](#unresolved-bugs)

## Code Validation

### HTML Validation

([back to top](#testing-documentation))

I have completed a final validation of all HTML pages using the [W3C HTML validator](https://validator.w3.org/).\
I found two errors on the 'book.html' page:

- The empty option element did not have a label for screen-readers.
- There was a stray end tag for an anchor element on the page.

Both errors were easily rectified; all other pages showed no errors.

### CSS Validation

([back to top](#testing-documentation))

I have completed a final validation of my 'style.css' file using the [W3C CSS validator](https://jigsaw.w3.org/css-validator/).\
No errors were found.

### Lighthouse Audit

([back to top](#testing-documentation))

## Write up automated testing including setup

## issue with for loops

issue where for loops fif not return value for every iteration, meaning item search was inaccurate.
detail the millions of options tried, and how landed on a solution. (ie the filter and the if statements)

## refactoring

removed unecessary attributes and processed them on character generation

##

auto testing - as code written, reducing need for manual testing


## issue with fight code

numbers not being passed as intregers, passig undefined values.  was issue with trying to pass variables into function from other functions and breing out of scope.

once a character potentially defended more points than their opponent dealt in damage created negative value which meant the attack would gain the opponent health
solved by adding the condition attack damage had to be positive.

issue with character ending with minus health - solved my manually setting value in DOM to zero.
prevented enemy from attacking after they are dead!

on testing resistances function were just a series of if statements which meant values could be overwritten. 
testing resistances fucntion was over-compoicated and didn't work. revised into 2 seperate functions for each turn cycle using if-else statements with a default else statement to return a single value.
now works

### issue testing main  fight mechanics
in order to test the main fight mechanics it would be necessary to create mock functions in Jest, since none of the variables exist outside the scope of the function.  This is way beyond the scope of anything taught on the course and would take me far too long to master in the context of this project.
As a work-around I have taken chunks of code from the functions themselves and tested them line by line to identify any potential issues.
I understand this is not best practice at all but I consider that it is effectively doing exactly the same thing in a much less sophisticated way.

I resolved this by refactoring the code into several smaller functions which I could re-use no matter what option is clicked in battle.  It not only meant I could test it properly, 
it also means if I need to change the game mechanic in the future I do not need to amend multiple functions

// in order to test the functionality of the 'playerTurn' and 'enemyTurn' functions automatically, it would require setting up mock functions to return set results.
I have struggled to do this for several hours to make this work and concluded I can cover this in manual testing without wasting any more time on it.
Ultimately whilst in this case automated testing is a nice to have, using console.log at various points in the function and extensive playtesting has made it clear to me the code is working as intended.

### question marks over necessity of automated testing

 with certain phases of the project, the vlaue was quite clear - for example automated testing uncovered a number of issues with the item search algorithms.
 However as the project has progressed and the main game mechanics have been established and de-bugged, most of the remaining code will concern writing the correct values to the DOM
 via various event listners and callback functions.  In this case errors are exposed far more effectively using manual testing and will not show up at all through automated tests.
 I have also found building the various automated tests relating to populating the DOM a massive and unnecessary time sink, paricularly when it is a solo project

 As such I have made the decision that I will only use automated testing where significant new logic or numerical operations are taking place that need to be fully tested.
 This is, for example, in the case that I write a new loop or logical operation (eg battle or item search code) or significantly update existing code.  
 I will contiune to use the existing tests to ensure my code operates as intended.
 Simple functions to call content or change backgrounds will be left to manual testing - this will, any major oversights aside, comprise the majority of the remainder of the project.

## manual testing

JS mostly checked with automated unit testing, manually test html and CSS elements, responsiveness and obvious errors.

battle outcomes:
tested JS when it came to final output was working correctly by inserting contact logs at various stages to log outcomes.
the rest was tested using Jest.

## bugs

As I was writing test for the code and manually testing the gameplay itself, I noticed a number of things.
Refactoring I realised the resist code wasn't working so defensive bonuses weren't happening.

Once I had refactored the code I came across a phenom where the enemy, Ragnar the Horrible, was doing more damage than was actually possible given his stats.
This was baffling until I realised that worse the resist roll failed, two minuses would make a plus, and it would be added on to the attack value.
I also noticed an interesting scenario where the better armor the stronger my opponent seemed to be.  This was due to the armor being applied to the enemy instead of myself (in testing and the function!!).
These two bugs combined led to me dying a confusing number of times to what should be a pathetially weak opponent.
The stronger my defence was and the weaker his seemed to be, the harder he hit and the less I could land on him!  
The bugs were easily fixed but quite amusing, and show that automated testing is not foolproof and needs a healthy dose of manual testing to validate and be effective.
Indeed any computer program is only as good as the data put into it and the code that processes it!

rolls modified by enemy resistances returned valkues that were not integers - fixced this by rounding in the 'next round' function.

the potion section was not passing value to the enemy round so the enemy was not getting a turn.  This was most obvbuosly manifested by endlessly clicking the use catnip button and running up infinite negative scores.
Was rectified by ensuring the necessary parameter was passed to the potion function.

after refactoring the 'weapons' section of the turn was not returning the correct text values - it turned out that I had mistakenly deleted the text values so I retrieved them from Github.
