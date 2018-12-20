document.onkeyup = function(event) {
    var userGuess = event.key;
    if (word.indexOf(userGuess) === -1) {
        document.getElementById("user-guess").innerHTML = userGuess;
        badGuess.push(userGuess);
        document.getElementById("bad-guess").innerHTML = badGuess;
        guessCount--;
        document.getElementById("guess-count").innerHTML = guessCount;
        console.log(goodGuess);
    }
 
}

for (var i = 0; i < word.length; i++) {
    goodGuess.push("_");
    document.getElementById("clue1").innerHTML = goodGuess;
}