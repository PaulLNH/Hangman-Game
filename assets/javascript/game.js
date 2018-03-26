debugger;
// Creates an array of possible words
var wordBank = [
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
    "gunslinger"
  ],
  //   Array of possibly guesses
  alphabet = [
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
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ],
  //   Array of foundLetter
  foundLetter = [],
  wrongLetter = [],
  wordMap = [],
  guess,
  // Grab the span ID's and assign them to variables
  userText = document.getElementById("userText"),
  guessText = document.getElementById("guessText"),
  compText = document.getElementById("compText"),
  winText = document.getElementById("winText"),
  lossText = document.getElementById("lossText"),
  gamesText = document.getElementById("gamesText"),
  wordMapText = document.getElementById("wordMapText"),
  // COUNTERS
  userWins = 0,
  userLosses = 0,
  userGames = 0,
  guessesRemaining = 10;

//   Randomly select a word form the word abnk
var currentWord = wordBank[Math.floor(Math.random() * wordBank.length)];

// Adding the wordMap spaces
for (var i = 0; i < currentWord.length; i++) {
  // Add blank spaces for each character in currentWord to the wordMap array
  wordMap.push("_");
}

document.onkeyup = function(event) {
  // Determines which key was pressed, and converts it to lowercase
  var keyedGuess = event.key,
    userGuess = keyedGuess.toLowerCase();

  // Clycle through the currentWord
  for (var i = 0; i < currentWord.length; i++) {
    // Check to see if the userGuess is a match to any of the ltters in currentWord
    if (userGuess === currentWord.charAt(i)) {
      // Add if statement that checks to see if that letter is already in the array

      // if match is found, add it to the begining of foundLetter array
      foundLetter.unshift(userGuess);
      // Assigns guess to be index 0 of foundLetter displaying the most recent guess
      guess = foundLetter[0];
      // Adds the correct guess to the wordMap array and overwrites the underscore
      wordMap.splice(i, 1, guess);
    }
  }

  console.log(wordMap.join(""));

  // Prints to the page
  userText.textContent = "You chose: " + userGuess;
  guessText.textContent =
    "Your guess was " + guess + " You've found these letters: " + foundLetter;
  compText.textContent = "The current word is: " + currentWord;
  wordMapText.textContent = wordMap.join("");
  winText.textContent = "Wins: " + userWins;
  lossText.textContent = "Losses: " + userLosses;
  gamesText.textContent = "Total Games: " + userGames;

  // Win Condition
  if (wordMap.join("") === currentWord) {
    userWins++;
    alert("Congratulations! You won, partner.");
  }
};
