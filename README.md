# DND-Lockpick-Puzzle

# Project Description

- A lockpick puzzle mini-game for a DND campaign. You can choose the number of tumblers the lock has. Each tumbler is represented by a square button. Each button has a randomly assigned ID number, you need to click on the buttons in a sequential order. Once you've clicked on the right button, it will turn green. The lock is picked when all tumblers have been turned green.

# Skills Demonstrated

- HTML boilerplate
- CSS & Flexbox familiarity
- Number of buttons created defined by user
- Function that allows button creation to be reset and updated
- Checking button IDs and only registering them to an array if the IDs are sequential, starting from 1 and ending at the user defined number

# Issues

- In the clicked function the if condition wasn't working 
    - Realised that the strict equality operator wasn't working because because one value was an Integer and the other a string
    - Problem solved by reducing strict equality to generic equality

- Struggled to add random IDs to each button
    - Problem solved by assigning IDs from a shuffled array

- Was unsure how to check whether the button pressed was the next in the sequence
    - Solved by creating an empty array that button IDs would be pushed into if they matched the expected ID
