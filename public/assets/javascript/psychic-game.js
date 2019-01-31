// psychic game

// letters array
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// win/loss count
var losses = 0;
var wins = 0;

// computer letter generation
var computerChoice = letters[Math.floor(Math.random() * letters.length)];

// attempts at guessing
var attempts = 10;



// user guess space creation
var userGuess = "";

// div filling
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var attemptsText = document.getElementById("attempts-left");

// function start on key up
document.onkeyup = function (event) {
    var userGuess = event.key
    // win setting
    if (userGuess === computerChoice) {
        alert("You win!");
        wins++;
        attempts = 10;
        computerChoice = letters[Math.floor(Math.random() * letters.length)];
        document.getElementById("guessed").innerHTML = ""
    }
    // incorrect guess event and loss setting
    else (attempts--); {
        if (attempts <= 0) {
            alert("You lose!");
            losses++;
            attempts = 10;
            computerChoice = letters[Math.floor(Math.random() * letters.length)];
            document.getElementById("guessed").innerHTML = ""

        }
    }
    // text entering
    document.getElementById("guessed").innerHTML += (" " + userGuess)
    attemptsText.textContent = attempts
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
}