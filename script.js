'use strict'

document.getElementById('attempt').addEventListener('click', guessMyAge)

function guessMyAge () {
  const age = 15
  let answer = document.getElementById('response').value;
  // variable assigned with my age that always remains constant
  for (let guess = 4; guess > 0; guess--) {
  // a loop that checks to see if the user guesses the same age as to mine and if not, it restarts the process
    if (guess <= 1 && (answer < age || answer > age)) {
      alert('Game Over')
    } else if (answer == age) {
      alert('That is correct! You guessed my age!')
    } else if (answer < age) {
      answer = prompt('You guessed a number too small. Try again.')
    } else if (answer > age) {
      answer = prompt('You guessed a number too big. Try again.')
    } 
  // conditions to check if the user response matches the age; the user has four attempts before a game over as shown from the if statement
  }
}
