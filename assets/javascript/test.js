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
  answer = [],
  remainingLetters,
  wins = 0,
  losses = 0,
  lives,
  category = "Wild West",
  guess,
  gameOver = true;

// Reset
var reset = function() {

  // Selecting a random word from the words array and passing it onto the word variable
  word = words[Math.floor(Math.random() * words.length)];

  // Resetting the answer array
  answer = [];

  // Adding the underscores to the answer array
  for (var i = 0; i < word.length; i++) {
    // Add blank spaces for each character in word to the answer array
    answer.push("_");
  }

  // Resetting the guessed letter to an empty string
  guess = "";
  // Tell the game logic to stop running
  gameOver = true;
  // Assign a string to remaining letters
  remainingLetters = word.length;
  // Reset lives
  lives = 12;
  // Display starting instructions to user
  document.getElementById("statusText").innerHTML =
    "Press any letter to make your first guess.";
};

// Constantly display updated status
var stats = function() {
  if (lives > 0) {
    // Displays the answer progress
    document.getElementById("statusText").innerHTML = answer.join(" ");
    // Displays current category
    document.getElementById("categoryText").innerHTML = category;
    // Displays wins
    document.getElementById("winsText").innerHTML = wins;
    // Displays losses
    document.getElementById("lossesText").innerHTML = losses;
    // Displays lives remaining
    document.getElementById("livesText").innerHTML = lives;
  }
};

// Game logic
document.onkeyup = function(event) {
  guess = event.key.toLowerCase();
  if (remainingLetters > 0 && answer != word) {
    // Checks to see if you have lives left
    if (lives > 0) {
      // Iterate through the length of the word to check against each letter
      for (var i = 0; i < word.length; i++) {
        // Check the guess against the word index
        if (word[i] === guess) {
          // If a match is found apply that correct guess to the answer aray
          answer[i] = guess;
          // Reduce the number of remaining letters
          remainingLetters--;
        } 
      }
    } else {
      // If you don't have lives left, you lose
      alert(
        "Game over! Better luck next time, partner. The word was: " + word + "."
      );
      losses++;
      reset();
    }
  } else {
    alert("Congratulations, you won! The word was: " + word + ".");
    wins++;
    reset();
  }
  stats();
};

// Function calls
reset();
stats();

console.log(word);
console.log(answer);
