// User presses any key to start the game

// Display total guesses left

// User guesses a letter

// If User letter is wrong, display wrong letter on bottom div
// Subtract from total guesses left

// If user letter is correct, display correct letter in top div

// If user uses up total guesses, display "You Lose"

// If user uses guesses whole world, display "You Win"





    // Create our word bank or array
    var wordList = ['vi', 'malphite', 'ekko', 'darius', 'garen', 'ezreal',
                'leesin', 'khazix', 'rengar', 'karma', 'ashe', 'leona',
                'lux', 'ahri', 'vayne', 'lucian', 'nocturne', 'renekton',
                'nasus', 'janna', 'soraka', 'sona', 'draven', 'sivir',
                'xayah', 'taliyah', 'tryndamere', 'illaoi', 'gragas',
                'gangplank'];

    // Create empty arrays to push to.
    var underscores = [];
    var correctLetters = [];
    var wrongLetters = [];
    var guessesRemaining = 10;



function newGame() {
    // Create a variable to get the random index number to choose our word
    var indexOfWord= Math.floor(Math.random() * wordList.length);

    // Get the word from array by using the ranodm function above
    var word = wordList[indexOfWord];

    // Create a function that makes undescores for length of the word
    var makeUnderscore = function () {
        for (var i = 0; i < word.length; i++) {
            underscores.push('_');
        }

        return underscores;
    };

    // Test to see if word is being chosen and how long the character is
    console.log(word);
    console.log(word.length);
    console.log(makeUnderscore());

    document.onkeyup =  function(event) {
        var userLetter = event.key; // letter that is pressed
        var letterIndex = word.indexOf(userLetter);
        console.log(letterIndex);
        console.log(userLetter);

        if (letterIndex !== -1 && correctLetters.includes(userLetter) === false) {
            correctLetters.push(userLetter);
            console.log(correctLetters);
        }
        else if (letterIndex === -1 && wrongLetters.includes(userLetter) === false){
            wrongLetters.push(userLetter);
            console.log(wrongLetters);
        }
        //if user letter is in the word selected from array

    }
}

newGame();