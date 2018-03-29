// Only runs JS when window is loaded
window.onload = function() {

  // Create an array of words
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
  ];

  // Choosing a random word
  var word = words[Math.floor(Math.random() * words.length)];

  // Setup answer array
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  // Create variable to keep track of letters that remain to be guessed
  var remainingLetters = word.length;
  //Guesses remaining
  var guessesRemaining = 12;

  // Start game loop
  while (remainingLetters > 0) {
    //Show the player the status
    var el = document.getElementById("status");
    el.innerHTML = answerArray.join(" ");

    //Get a guess from player (keyUp)

    document.onkeyup = function(event) {
      if (guessesRemaining > 0) {
        // Determines which key was pressed, and converts it to lowercase
        var guess = event.key.toLowerCase();
          // Allow user to hit Esc and break out of game

          //Update the game state with the guess
          for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
            }
          }  // NEED TO SOMEHOW ADD IN AN ELSE STATEMENT HERE TO guessesRemaining--; 
        } else {
          alert("Game over. Better luck next time, partner.");
        }
    //End of the game loop
  }
}
  // When while loop ends (no remainingLetters left) player wins.
  el.innerHTML = answerArray.join(" ");
  alert("Good job!! The answer was " + word + ".");
};
