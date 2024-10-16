#"Steps to Build the Game - Space Words"

Before starting with HTML and JavaScript, it’s essential to plan the game flow. I drew a rough sketch of how the game should work. Here are the key components I planned:

- Space Words: A list of space-related terms.
- Definitions: Used as hints when the player struggles.
- Underscores: Represent the unguessed letters of the word.
- Buttons: One button for starting a new game and another for revealing the hint.

I followed a structured approach to make the code organized and manageable. I set categories like Constants, Variables, Cached Element References, Functions, and Event Listeners to keep things clear.

I searched for space-related words and their definitions online. These words are stored in an array under the Constants section in the code. Each word is paired with its definition to provide the hint when needed.

**Challenges with Functions**
Writing the functions was the most challenging part of this project. I often referred back to my notes and assignments to remember how to structure functions, especially for handling user input and displaying the game state.

_1- Handling Guesses:_
I used handleGuesses to capture the player's input and determine if the guess was correct or incorrect. If correct, the display updates to show the guessed letters. If incorrect, the number of remaining tries decreases.

_2- Displaying the Word:_
The word is displayed with underscores, and as the player guess the right letter, the letter is shown; otherwise, the number of incorrect guesses increases.

_3-Game End:_
The game ends when the player either guess the word or runs out of tries

**_Summary_**
This project helped me to practice JavaScrip mainly, i did not do much with the HTML and CSS. The functionality part was very challenging, but resources, GA notes and asking peers and co-workers helped to get this project to reach a working stage.

**Area for Improvement**
1- I believe if I had a clear plan at the beginning of the project, then I would not struggle as I struggled with this. I went ahead with a similar game where I guess the word as a whole (not the letter) and thena press a button to check if the word selected is right or wrong. I ended up doing redoing the project is hangman alike game. The good thing, that I used many of the codes in that game in this, which saved a lot of time. Also I learned how to do a bit complex loop functions.
2- I wish I practiced more so I would be able to write codes without the need of looking up the internet all time, or reverting back to my notes to be able to write the code correctly.
3- I think i need to utilize the Saturday class in the upcoming period.

_Resources_

> How to sequence/flow the game and get the functionality of the game

[Online Resource1] (https://codesandbox.io/p/sandbox/z9fhk)

[Online Resources1] (https://www.youtube.com/watch?v=dgvyE1sJS3Y)

[Online Resource3] (https://www.geeksforgeeks.org/build-a-hangman-game-using-javascript/?utm_source=auth&utm_medium=saved&utm_campaign=articles)

[Online Resource4] (https://stackoverflow.com/questions/55433937/designing-javascript-hangman-guessing-game-for-my-homework-assignment-but-cant)

> Converting a captured letter to upperCase

[Online Resource] (https://www.colors.shecodes.io/athena/39504-how-to-change-text-input-to-uppercase-in-javascript#google_vignette)

> Validating the guessedLetter

[Online Resource] (https://stackoverflow.com/questions/60784810/im-writing-a-guessing-game-in-javascript-i-dont-know-how-to-validate-that-the)

> Using include in JavaScript

[Online Resource] (https://www.w3schools.com/jsref/jsref_includes.asp)

> Understanding the counter function

[Online Resource] (https://stackoverflow.com/questions/33609974/trying-to-display-the-amount-of-guesses-that-is-left-in-a-hangman-game)
