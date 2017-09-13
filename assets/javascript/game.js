var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var computerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var computerGuess = computerLetters[Math.floor(Math.random()*computerLetters.length)];
	console.log(computerGuess);

var updateGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerLetters[Math.floor(Math.random() * this.computerLetters.length)];
};

var updateGuessedLetters = function() {
	// Display user's guesses.
	document.querySelector('#guessedLetters').innerHTML = "Guessed Letters: " + guessedLetters;

};

// Reset function
var reset = function() {
	totalGuesses = 9;
	guessesLeft = 9;
	guessedLetters = [];

	updateGuessesLeft();
	updateGuessedLetters();
	updateLetterToGuess();
}

updateLetterToGuess();


document.onkeyup = function() {
		guessesLeft--;
	// Takes user's guess and ensures it is converted to lower case
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		// Testing -- remove
		console.log(userGuess);

	guessedLetters.push(userGuess);
	updateGuessedLetters();
	updateGuessesLeft();

		if (guessesLeft > 0){
			// User guesses correctly
            if (userGuess===computerGuess){
                wins++, reset();
                alert("You truly are a psychic."); 
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                displayWinPsychic();
                       
        } 

        } else if (guessesLeft == 0){
            // Lose and update the loss 
            losses++, reset();
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("You are not a psychic. The letter was " + letterToGuess + ".");
            displayLosePsychic();
        }    
};