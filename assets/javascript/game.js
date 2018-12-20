//create the clue word
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordArray = ["walleye", "northern", "salmon", "trout", "perch"];
var word = wordArray[Math.floor(Math.random() * wordArray.length) ];
var wordLetters = [];
var guessCount = 7;
var underScores = ""
var badGuess = [];
var goodGuess = [];
var userGuess = ""
var countDown = ""

//display clue word as indivvidual characters underscored
document.getElementById("guess-count").innerHTML = guessCount;
for (var i = 0; i < word.length; i++) {
    goodGuess.push("_");
    document.getElementById("clue1").innerHTML = goodGuess;
}
document.onkeyup = function(event) {
    var userGuess = event.key;
    document.getElementById("user-guess").innerHTML = userGuess;
    if (word.indexOf(userGuess) === -1) {
        badGuess.push(userGuess);
        document.getElementById("bad-guess").innerHTML = badGuess;
        guessCount--;
        document.getElementById("guess-count").innerHTML = guessCount;
        if (guessCount === 0)   {
            alert("Out of guesses");
            location.reload();
        }
    }
    else for (var i = 0; i < word.length; i++)   {
        if (userGuess = (word[i])) {
            var goodIndex = indexOf(word[i]);
            Object.assign(goodGuess, userGuess);
        }

    }
    console.log(word);
    console.log(userGuess);
    console.log(goodGuess);
    console.log(goodIndex)
    

}
function refreshPage() {
    window.location.reload();
}