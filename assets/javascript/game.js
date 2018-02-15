//create array of possible letters
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//create array of words to select
var words = ["batman", "superman", "spiderman", "hulk", "flash"];
var word = "";
var wins = 0;
//set available guesses at 10 to start
var guessesRemain = 10;
var guessesSoFar = [];

function init() {


    //Choose word randomly
    const randomWordChoice = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomWordChoice];
    console.log(selectedWord);

    //Generate correct number of underscores for word selected
    const generateUnderscores = word => {
        const underscores = [];
        const brokenDown = word.split("");

        return brokenDown.map(() => "_");
    }
    console.log(generateUnderscores(selectedWord))
};
//have computer recognize which key was pressed
document.onkeyup = function () {

    var userGuess = event.key;
    console.log(userGuess);
//display correct guess and replace underscore in selected word display
//display incorrect guess in letters already guessed array
    function isLetterInWord(letter) {
        var letter = string.indexOf("right");
        for (i = 0; i < words.length; i++) {
            if (letter == word[i]) {
                selectedWord[i] = letter;
                rightGuess += letter;

            } else if (letter !== selectedWord[i]) {
                wrongGuess += letter;

            }
        }
    }

//guess counter
    if (guessesSoFar.indexOf(userGuess) < 0 && letter.indexOf(userGuess) >= 0) {
        guessesSoFar[guessesSoFar.length] = userGuess;
        guessesRemain--;
    }
//with each guess have counter go down one.Game ends at zero. reset game.
    if (guessesRemain === 0) {
        guessesRemain = 9;
        guessesSoFar = [];
        currentWord = document.querySelector("init");


    }

//display results on page
    var html =
        "<br>" +
        "<br>" +
        "<p><h1>Press Any Key To Get Started!</h1></p>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<p><h1>Wins:</h1></p>" +
        "<br>" +
        "<br>" +
        "<p>" + wins + "</p>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<p><h1>Current Word </h1></p>" +
        "<br>" +
        "<p>" + generateUnderscores + "</p>" +
        "<br>" +
        "<br>" +
        "<br>" +
        "<p><h1>Number of Guesses remaining</h1></p>" +
        "<p>" + guessesRemain + "</p>" +
        "<br>" +
        "<br>" +
        "<p><h1>Letters already guessed</h1></p>" +
        "<p>" + guessesSoFar + "</h1></p>";

    document.querySelector("#stats").innerHTML = html;
};





//when user wins reset game.
//when user wins increase win counter by one
//}