// Only runs JS when window is loaded
window.onload = function() {
  // Choosing a random word
  // Create an array of words

  var words = ["javascript", "css", "testword"];

  var word = words[Math.floor(Math.random() * words.length)];

  // Setup answer array
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }

  // Create variable to keep track of letters that remain to be guessed
  var remainingLetters = word.length;

  // Game loop
  while (remainingLetters > 0) {
    //Show the player their progress
    var el = document.getElementById("demo");
    el.innerHTML = answerArray.join(" ");

    //Get a guess from player (keyUp)

    document.onkeyup = function(event) {
      if (count.guesses > 0) {
        // Determines which key was pressed, and converts it to lowercase
        var guess = event.key.toLowerCase();
      }

    if (guess === "escape") {
      //Exit game loop
      break;
    } else if (guess.length !== 1) {
      alert("Please enter a single letter.");
    } else {
      //Update the game state with the guess
      for (var j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }

    //End of the game loop
  }
}

  el.innerHTML = answerArray.join(" ");
  alert("Good job!! The answer was " + word + ".");
};
