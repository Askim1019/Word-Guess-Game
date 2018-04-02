// Create our word bank or array
var wordList = ['vi', 'malphite', 'ekko', 'darius', 'garen', 'ezreal',
            'leesin', 'khazix', 'rengar', 'karma', 'ashe', 'leona',
            'lux', 'ahri', 'vayne', 'lucian', 'nocturne', 'renekton',
            'nasus', 'janna', 'soraka', 'sona', 'draven', 'sivir',
            'xayah', 'taliyah', 'tryndamere', 'illaoi', 'gragas',
            'gangplank', 'ziggs'];

// Create empty arrays to push to.
var underscores = [];
var correctLetters = [];
var wrongLetters = [];
var guessesRemaining = 6;

// Create the logic in a function that we can invoke

function newGame() {
    
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
    // Test to see if word is being chosen and how long the character is in console
    console.log(word);
    console.log(word.length);


    function letterLogic(userLetter, letterIndex) {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userLetter) {
                underscores[j] = word[j];
            }
            else if (word === underscores.join("")) {
                document.getElementById("instruction").innerHTML = "YOU WIN!";
            }
            else if (guessesRemaining === 0) {
                document.getElementById("instruction").innerHTML = "YOU LOSE!";
                break;
            }
            else if (letterIndex === -1 && wrongLetters.includes(userLetter) === false) {
                wrongLetters.push(userLetter);
                guessesRemaining--;
            }
        }
    }

    document.onkeyup =  function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var userLetter = event.key.toLowerCase(); // letter that is pressed
            var letterIndex = word.indexOf(userLetter);
            
            console.log(letterIndex);
            console.log(userLetter);
            //loop through length of word and replace the underscore with a correct letter
            //If no correct letter then, add to letters incorrect array to render to page.
            letterLogic(userLetter, letterIndex);
            
            // The DOM renders our logic to the page
            document.getElementById("guessesRemaining").textContent = guessesRemaining;
            document.getElementById("wrongLetters").textContent = wrongLetters.join(" ");
            document.getElementById("underscores").textContent = underscores.join("");
        }
    }




}

newGame();