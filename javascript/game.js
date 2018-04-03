// Create our word bank or array
var wordList = ['malphite', 'ekko', 'darius', 'garen', 'ezreal',
            'leesin', 'khazix', 'rengar','gangplank', 'ziggs'];


// Create empty arrays to push to.
var underscores = [];
var correctLetters = [];
var wrongLetters = [];
var guessesRemaining = 10;
var stateOfGame = false;

// start a new game
function startGame() {
    
    underscores = [];
    correctLetters = [];
    wrongLetters = [];
    guessesRemaining = 10;
    stateOfGame = true;

    document.getElementById("instruction").innerHTML = "Guess a letter. You get 10 tries";
    // Create a variable to get the random index number to choose our word
    var indexOfWord= Math.floor(Math.random() * wordList.length);

    // Get the word from array by using the ranodm function above
    var word = wordList[indexOfWord];

    // Create a function that makes the number of underscores match the length of the word chosen
    var makeUnderscore = function () {
        for (var i = 0; i < word.length; i++) {
            underscores.push('_');
        }

        return underscores;
    };

    makeUnderscore();
    document.getElementById("underscores").textContent = underscores.join("");


    // If the letter is in the word, display it and replace it with the undescore
    function correctGuess(userLetter) {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userLetter) {
                underscores[j] = userLetter;
            }
        }

        document.getElementById("underscores").textContent = underscores.join("");
    }

    // Decrement the total guesses remaining if the letter is not in the word
    function wrongGuess(userLetter, letterIndex) {
        if (guessesRemaining > 0 && letterIndex === -1 && !wrongLetters.includes(userLetter)) {
            wrongLetters.push(userLetter);
            document.getElementById("wrongLetters").textContent = wrongLetters.join(" ");
            guessesRemaining--;
            document.getElementById("guessesRemaining").textContent = guessesRemaining;
        }
    }

    // Type win game and show a picture if you guess all the right letters
    function winGame() {
        if (underscores.join("") === word) {
            document.getElementById("instruction").innerHTML = "You WIN!";
            document.getElementById("picture").innerHTML = '<img src="https://mir-s3-cdn-cf.behance.net/projects/202/cc5ba853065555.Y3JvcCw2MzQsNDk2LDYyOSwxNjI.png">';
            stateOfGame = false;
        }
        
    }

    // If you have 0 guesses remaining, stop the game
    function loseGame() {
        if (guessesRemaining === 0) {
            document.getElementById("instruction").innerHTML = "You LOSE!";
            document.getElementById("picture").innerHTML = '<img src="https://dotesports-cdn-prod-tqgiyve.stackpathdns.com/thumbor/yPuUSNL1lDDBToZibYH-IsqUQfc=/1200x0/filters:no_upscale()/https://do8lg3dthpu1x.cloudfront.net/article/bd02e9a4-7c09-4a41-aba3-cc17080e5e3f.jpg">';
            stateOfGame = false;
        }  
    }

    //This is the main key event that renders our guesses

    document.onkeyup =  function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90 && stateOfGame === true) {
            var userLetter = event.key.toLowerCase(); // letter that is pressed
            var letterIndex = word.indexOf(userLetter);
            console.log(word);
            console.log(letterIndex);
            console.log(userLetter);

            // Call our logical functions
            correctGuess(userLetter);
            wrongGuess(userLetter, letterIndex);
            winGame();
            loseGame();
            
        }
    }
}


startGame();
if (stateOfGame === false) {
    document.getElementById("btn").onclick = window.location.reload();
};