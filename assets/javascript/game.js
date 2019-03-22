//create the clue word
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordArray = ["walleye", "northern", "salmon", "trout", "perch"];
var word = "";
var wordLength = "";
var wordLetters = [];
var guessCount = 7;
var underScores = "";
var badGuess = [];
var goodGuess = [];
var userGuess = ""
var countDown = ""

//display clue word as indivvidual characters underscored
    word = wordArray[Math.floor(Math.random() * wordArray.length) ];
    wordLetters = word.split("");
    wordLength = wordLetters.length;

    for (var i = 0; i < wordLength; i++)    {
        goodGuess.push("_");
    };

    document.getElementById("guess-count").innerHTML = guessCount;
    document.getElementById("clue").innerHTML = goodGuess.join(" ");

    document.onkeyup = function(event) {
        var userGuess = event.key;
        document.getElementById("user-guess").innerHTML = userGuess;
        if (wordLetters.indexOf(userGuess) === -1) {
            badGuess.push(userGuess);
            document.getElementById("bad-guess").innerHTML = badGuess;
            guessCount--;
            document.getElementById("guess-count").innerHTML = guessCount;
                if (guessCount === 0)   {
                alert("Out of guesses");
                location.reload();
                }
        }
        else    {
                for (j = 0; j < wordLength; j++)    {
                    if (word[j] === userGuess)   {
                        goodGuess[j] = userGuess;
                        document.getElementById("clue").innerHTML = goodGuess.join(" ");
                    }
                }
                if (wordLetters.toString() === (goodGuess.toString()))   {
                    alert("You Win!!!");
                }
            }
        
    

};
console.log(word);
console.log(wordLetters);
console.log(userGuess);
console.log(goodGuess);



function refreshPage() {
    window.location.reload();
}