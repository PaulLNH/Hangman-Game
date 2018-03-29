// Delays the JS from running until DOM is ready
// $(document).ready(function() {
debugger;
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
  gameOver = true;

// Reset
var reset = function() {
  // Selecting a random word from the words array and passing it onto the word variable
  word = words[Math.floor(Math.random() * words.length)];

  // Adding the underscores to the answer array
  for (var i = 0; i < word.length; i++) {
    // Add blank spaces for each character in word to the answer array
    answer.push("_");
    gameOver = true;
  }

  remainingLetters = word.length;
  lives = 12;
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

// Function calls
reset();
stats();

console.log(word);
console.log(answer);

// End document ready
// });
