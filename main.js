
$(document).ready(function() {



    var crystal1 = randomNum(1, 12);
    var crystal2 = randomNum(1, 12);
    var crystal3 = randomNum(1, 12);
    var crystal4 = randomNum(1, 12);
    var compScore = randomNum(19, 120);
    var userScore = 0;
    var wins = 0;
    var loses = 0;

    $("#crystal1").attr("value", crystal1);
    $("#crystal2").attr("value", crystal2);
    $("#crystal3").attr("value", crystal3);
    $("#crystal4").attr("value", crystal4);
    $("#compScore").append(compScore);

    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    $("#compScore").text(compScore)
    $("#userScore").text(userScore);

    $("#crystal1").click(function() {
        $("#userScore").text(userScore += crystal1);
        updateScores();
    });

    $("#crystal2").click(function() {
        $("#userScore").text(userScore += crystal2);
        updateScores();
    });

    $("#crystal3").click(function() {
        $("#userScore").text(userScore += crystal3);
        updateScores();
    });

    $("#crystal4").click(function() {
        $("#userScore").text(userScore += crystal4);
        updateScores();
    });

    function updateScores() {
        if (userScore === compScore) {
            wins++;
            $("#wins").text(wins);
        }

        else if (userScore > compScore) {
            loses++;
            $("#loses").text(loses)
        }
    }
});