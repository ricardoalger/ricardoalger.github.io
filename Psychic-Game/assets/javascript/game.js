		// varaibles to start game

var letters = ["a","b","c"];

var guessedLetters = [];

var letterToGuess = null;

var guessesLeft = 9;

var wins = 0;

var losses = 0;

// update varaibles 

var updateGuessesLeft = function() {
	document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function () {
	letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function () {
	document.querySelector ("#your-gueses-so-far").innerHTML = guessedLetters.join(", ");
};

var reset = function () {
	guessesLeft = 9;
	guessedLetters = [];
	updateLetterToGuess();
	updateGuessesLeft();
	updateGuessesSoFar();
};

	updateLetterToGuess();
	updateGuessesLeft();


	document.onkeyup = function(event) {
		guessesLeft--;

   		var letter = String.fromCharCode(event.keyCode).toLowerCase();
        guessedLetters.push(letter);
      
   		updateGuessesLeft();
       	updateGuessesSoFar();
	      
	      alert ("Machine Guess " + letterToGuess)

	      if (letter === letterToGuess) {

	        wins++;
	        document.querySelector("#wins").innerHTML = wins;
	        reset();
	      }

	      if (guessesLeft === 0) {
	        losses++;
	        document.querySelector("#losses").innerHTML = losses;
	        reset();
      }
    };