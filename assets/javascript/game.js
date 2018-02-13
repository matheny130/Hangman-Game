var userName = prompt("Whats you name");

var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var words = ["batman", "superman", "spiderman", "hulk", "flash"]
const newLocal = ["b", "a", "t", "m", "a", "n"];

var superman = ["s", "u", "p", "e", "r", "m", "a", "n"]
var spiderman =["s", "p", "i", "d", "e", "r", "m", "a", "n"]
var hulk = ["h", "u", "l", "k"]
var flash = ["f", "l", "a", "s", "h"]

            var wins = 0;
            var currentWord = 0;
            var guessesRemain = 10;
            var guessesSoFar = [];
            var wordLength = words.length;
            var underscores = "";
            for(i=0; i<wordLength; i++) {
                underscores = underscores + "_";

document.onkeyup = function(event) {
    var userGuess = event.key;
};

var selectedWord = words[Math.floor(Math.random()*words.length)];

var batman = ["b", "a", "t", "m", "a", "n"]

                if ((userGuess === "b") || (userGuess === "a") || (userGuess === "m") || (userGuess === "a") || (userGuess === "n"))  {
                    guessesLeft--;
                }else {
                    guessesLeft--;

                }


var html =  "<p><h1>Press Any Key To Get Started!</h1></p>" +
        "<p><h1>Wins:" + wins + "</h1></p>" +
        "<p><h1>Current Word </h1></p>" +
        "<p>" + for (i=0; i<wordLength; i++) { underscores = underscores + "_"} + "</p>" +
        "<p><h2>" + words + "<h2></p>" +
        "<p><h1>Number of Guesses remaining" + guessesLeft + "</h1></p>" +
        "<p><h1>Letters already guessed</h1></p>";

    document.querySelector("#game").innerHTML = html
}
