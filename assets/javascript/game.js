window.onload = function() {
  debugger; // Remove this

  // Holds all word related data
  var word = {
      // Creates an array of possible words
      bank: [
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
      //   Array of possibly guesses
      letters: [
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
      guessed: [], // Array of foundLetter
      map: [] // Dynamic array of the currentWord guesses
    },
    user = {
      guess: "" // User keyed guess goes here
    },
    // COUNTERS
    count = {
      guesses: 10, // Guesses remaining
      wins: 0, // Number of wins
      losses: 0 // Number of losses
    },
    guess;

  //   Randomly select a word form the word abnk
  var currentWord = word.bank[Math.floor(Math.random() * word.bank.length)];

  //   Display out all the letters of the alphabet
  var alphabet = function() {
    // allows us to interact with the html
    lettersArray = document.getElementById("lettersRemaining");
    letterList = document.createElement("ul");

    // Clycle through A to Z
    for (var i = 0; i < word.letters.length; i++) {
      letterList.id = "word.letters";
      list = document.createElement("li");
      list.id = "letter";
      list.innerHTML = word.letters[i];
      lettersArray.appendChild(letterList);
      letterList.appendChild(list);
    }
  };

  // Adding the wordMap spaces
  for (var i = 0; i < currentWord.length; i++) {
    // Add blank spaces for each character in currentWord to the wordMap array
    word.map.push(" _");
  }

  // Remove duplicate entries fron an array
  Array.prototype.unique = function() {
    return this.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  };

  // On key up function (runs code for each time a key is pressed)
  document.onkeyup = function(event) {
    if (count.guesses > 0) {
      // Determines which key was pressed, and converts it to lowercase
      var keyedGuess = event.key;
      user.guess = keyedGuess.toLowerCase();

      // Clycle through the currentWord
      for (var i = 0; i < currentWord.length; i++) {
        // Removes guess form the letter array
        delete word.letters[word.letters.indexOf(user.guess)];
        // Check to see if the userGuess is a match to any of the ltters in currentWord
        if (user.guess === currentWord.charAt(i)) {
          // if match is found, add it to the guessed letter array
          word.guessed.push(user.guess);
          // Adds the correct guess to the wordMap array and overwrites the underscore
          word.map.splice(i, 1, user.guess);
        }
      }

      // reassigns the foundLetter array into a unique array
      // unique = word.guessed.unique();
      // bad = badWordMap.unique().join();

      // Win Condition
      if (word.map.join("") === currentWord) {
        count.wins++;
        document.getElementById("winText").innerHTML = "Wins: " + count.wins;
        alert("Congratulations! You won, partner.");

        // Check to see if any guesses left

        // Grab the span ID's and prints data to page
        document.getElementById("userText").innerHTML =
          "You chose: " + user.guess;
        document.getElementById("guessText").innerHTML =
          "Guesses remaining: " + count.guesses;
        document.getElementById("compText").innerHTML =
          "The current word is: " + currentWord;
        document.getElementById("wordMapText").innerHTML = word.map.join("");
      } else {
        count.losses++;
        document.getElementById("lossText").innerHTML =
          "Losses: " + count.losses;
        alert("\"Life is hard. It's harder if you're stupid.\" - John Wayne");
      }

      // removes a guess from your total
      count.guesses = count.guesses--;

      // Display the letters remaining
      alphabet();
    } else {
      document.getElementById("userText").innerHTML = "PRESS ANY KEY TO START!";
    }
  };

  document.getElementById("compText").innerHTML = "The current word is: ";
  document.getElementById("wordMapText").innerHTML = word.map.join("");
  document.getElementById("winText").innerHTML = "Wins: " + count.wins;
  document.getElementById("lossText").innerHTML = "Losses: " + count.losses;
};
