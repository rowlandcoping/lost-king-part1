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