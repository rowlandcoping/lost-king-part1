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

## manual testing

JS mostly checked with automated unit testing, manually test html and CSS elements, responsiveness and obvious errors.