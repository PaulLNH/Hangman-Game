var words = [
    "bandana",
    "britches",
    "cahoots",
    "campfires",
    "cavalry",
    "chaps",
    "courageous",
    "cowboy",
    "desperado",
    "frontier",
    "giddyup",
    "gold fever",
    "gunslinger",
    "horse",
    "howdy",
    "indians",
    "invasion",
    "jail",
    "justice",
    "leather",
    "livestock",
    "longhorns",
    "maverick",
    "outlaw"
  ],
  word,
  guessedArr = [],
  answer = [],
  initialGuess = true,
  remainingLetters,
  wins = 0,
  losses = 0,
  lives,
  category = "Wild West",
  guess,
  letterGuessed = false;

// Reset
function reset() {
  // Selecting a random word from the words array and passing it onto the word variable
  word = words[Math.floor(Math.random() * words.length)];

  // Resetting the answer array
  answer = [];
  console.log(word);

  // Adding the underscores to the answer array
  for (var i = 0; i < word.length; i++) {
    // Add blank spaces for each character in word to the answer array
    answer.push("_");
  }

  // Clear out the guesses array
  guessedArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  // Resetting the guessed letter to an empty string
  guess = "";
  // Tell the game logic to stop running
  gameOver = true;
  // Assign a string to remaining letters
  remainingLetters = word.length;
  // Reset lives
  lives = 12;
  // Display starting instructions to user
  document.getElementById("statusText").style.color = "white";
  document.getElementById("statusText").innerHTML =
    "Press any letter to make your first guess.";
}

// Constantly display updated status
function stats() {
  // Displays the answer progress
  document.getElementById("guessText").innerHTML = answer.join(" ");
  // Displays current category
  document.getElementById("categoryText").innerHTML = category;
  // Displays wins
  document.getElementById("winsText").innerHTML = wins;
  // Displays losses
  document.getElementById("lossesText").innerHTML = losses;
  // Displays lives remaining
  document.getElementById("livesText").innerHTML = lives;
}

// Game logic runs on key up event
document.onkeyup = function(event) {
  console.log(guessedArr);
  // Converts our guess to lowercase
  guess = event.key.toLowerCase();

  // Always displaying stats
  stats();

  // Display starting instructions to user
  document.getElementById("statusText").style.color = "white";
  document.getElementById("statusText").innerHTML = "";

  // Check to see if the guess is a letter
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    // Ensures that the guess is part of the avaiableGuess array
    if (guessedArr.indexOf(guess) > -1) {
      // Remove the guess from the array
      guessedArr.splice(guessedArr.indexOf(guess), 1, "");
      if (word.indexOf(guess) > -1 && lives > 0) {
        for (var i = 0; i < word.length; i++) {
          // Check the guess against the word index
          if (word[i] === guess) {
            // If a match is found apply that correct guess to the answer aray
            answer[i] = guess;
            remainingLetters--;
            console.log(remainingLetters);
          }
        }
        if (remainingLetters <= 0) {
          // WIN CONDITION
          wins++;
          stats();
          alert("Congratulations, you won! The word was: " + word + ".");
          reset();
        }
      } else if (lives <= 0) {
        // LOSS CONDITION
        losses++;
        stats();
        alert("Sorry, you lose! The word was: " + word + ".");
        reset();
      } else {
        // Users guess was incorrect
        lives--;
        // Display starting instructions to user
        document.getElementById("statusText").style.color = "rgb(100, 0, 0)";
        document.getElementById("statusText").innerHTML =
          'Sorry "' + guess + '" was not in the word.';
      }
    } else {
      // User did not guess a letter
      document.getElementById("statusText").style.color = "rgb(100, 0, 0)";
      document.getElementById("statusText").innerHTML =
        'You alraedy guessed "' + guess + '", try another guess.';
    }

    stats();
  } else {
    // User did not guess a letter
    document.getElementById("statusText").style.color = "rgb(100, 0, 0)";
    document.getElementById("statusText").innerHTML =
      '"' + guess + '" is not a letter, try another guess.';
  }
};

// Function calls
reset();
stats();

console.log(answer);
