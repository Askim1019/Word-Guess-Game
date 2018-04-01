// User presses any key to start the game

// Display total guesses left

// User guesses a letter

// If User letter is wrong, display wrong letter on bottom div
// Subtract from total guesses left

// If user letter is correct, display correct letter in top div

// If user uses up total guesses, display "You Lose"

// If user uses guesses whole world, display "You Win"

// Create our word bank or array
var word = ['vi', 'malphite', 'ekko', 'darius', 'garen', 'ezreal',
            'leesin', 'khazix', 'rengar', 'karma', 'ashe', 'leona',
            'lux', 'ahri', 'vayne', 'lucian', 'nocturne', 'renekton',
            'nasus', 'janna', 'soraka', 'sona', 'draven', 'sivir',
            'xayah', 'taliyah', 'tryndamere', 'illaoi', 'gragas',
            'gangplank'];

// Create a variable to get the random index number to choose our word
var indexOfWord= Math.floor(Math.random() * word.length);

// Get the word from array by using the ranodm function above
var chooseWord = word[indexOfWord];

// Test to see if word is being chosen and how long the character is
console.log(chooseWord);
console.log(chooseWord.length);

var underscores = [];

var makeUnderscore = function () {
    for (var i = 0; i < chooseWord.length; i++) {
        underscores.push('_');
    }

    return underscores;
};

console.log(makeUnderscore());