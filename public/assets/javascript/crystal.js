// dark crystal theme**

// number generator for numbers between 19 and 120
// 19 as minimum and 120 as maximum

var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
console.log(targetNumber)



var counter = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {
    $("#target-text").text("Your Target:  " + targetNumber);

$("img").click(function () {
    for (var i = 0; i < 1; i++) {

    // For each iteration, generate a new random number between 1 and 9.
    var randomValue = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(randomValue)
    randomValue = parseInt(randomValue)
    console.log(counter)
    // counter = parseInt(counter) + randomValue
    counter += randomValue
    
    $("#counter-text").text("Your Score:  " + counter);
    $("#wins-text").text("Wins:  " + wins)
    $("#losses-text").text("Losses: " + losses)



};

if (counter === targetNumber) {
    wins++;
    counter = 0;
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    alert("You won! Click to play again!")
    $("#target-text").text("Your Target:  " + targetNumber);
}
else if (counter > targetNumber) {
    losses++;
    counter = 0;
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    alert("You lost! Click to play again!")
    $("#target-text").text("Your Target:  " + targetNumber);
}

});


});

