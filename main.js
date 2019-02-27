$(document).ready(function() {

    var userScore = 0;
    var wins = 0;
    var loses = 0;
    reset();

    function reset() {
        crystal1 = randomNum(1, 12);
        crystal2 = randomNum(1, 12);
        crystal3 = randomNum(1, 12);
        crystal4 = randomNum(1, 12);
        compScore = randomNum(19, 120);
        userScore = 0;
        updateScores();
        $("#compScore").text(compScore)
        console.log(compScore);
        $("#userScore").text(userScore);
        
    }

    $("#crystal1").attr("value", crystal1);
    $("#crystal2").attr("value", crystal2);
    $("#crystal3").attr("value", crystal3);
    $("#crystal4").attr("value", crystal4);

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    $("#crystal1").click(function() {
        $("#userScore").text(userScore += crystal1);
        updateScores();
        checkGameState();
    });

    $("#crystal2").click(function() {
        $("#userScore").text(userScore += crystal2);
        updateScores();
        checkGameState();
    });

    $("#crystal3").click(function() {
        $("#userScore").text(userScore += crystal3);
        updateScores();
        checkGameState();
    });

    $("#crystal4").click(function() {
        $("#userScore").text(userScore += crystal4);
        updateScores();
        checkGameState();
    });

    function updateScores() {
        if (userScore === compScore) {
            wins++;
            $("#wins").text(wins);
        }

        else if (userScore > compScore) {
            loses++;
            $("#losses").text(loses)
        }
    }

    function checkGameState() {
        if (userScore === compScore) {
            setTimeout(function() { alert("You win!"); }, 100);
            setTimeout(function() { reset(); }, 110);
        }

        else if (userScore > compScore) {
            setTimeout(function() { alert("You lose!"); }, 100);
            setTimeout(function() { reset(); }, 110);
        }
    }
});
