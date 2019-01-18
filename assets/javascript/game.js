$(document).ready(function () {
    // the problem originally was the DOM wasnt ready. Which is basically the html hadnt been formed yet so when it was trying to find the id that i had created it wasnt there yet. The doc.ready says dont load any of this until the document has loaded.
    // a way to get around that would be to place the JS at the bottom of the file instead of in the head.

    // var compNumber = Math.floor(Math.random() * 4)+1;

    var ltrChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var lettersGuessed = [];
    var computerPick = "";
    reset();

    function reset(){
        computerPick = ltrChoices[Math.floor(Math.random() * ltrChoices.length)];
        // alert(computerPick);
        document.getElementById("computerPick").innerText = "Make your first pick!";
        document.getElementById("winsText").innerText = wins;
        document.getElementById("lossesText").innerText = losses;
        document.getElementById("guessLeftText").innerText = guessesLeft;
    }
    function buttonHandler() {
        var userClickedVal = $(this).val();
        if (lettersGuessed.indexOf(userClickedVal) > -1 ){
            document.getElementById("computerPick").innerText = "You already tried that!"
        }else{
            //we keep playing
            console.log('keep playing')
            guessesLeft--;
            document.getElementById("guessLeftText").innerText = guessesLeft;
            lettersGuessed.push(userClickedVal);
            document.getElementById("resultText").innerText = lettersGuessed.join(", ");

            if (userClickedVal === computerPick) {
                wins++;
                console.log('win');
                document.getElementById("computerPick").innerText = "You Guessed It !! Make another pick to start game again!";
                document.getElementById("winsText").innerText = wins;
                guessesLeft = 9;
                lettersGuessed = [];
            }
            else {

                if (guessesLeft === 0){
                    losses++;
                    guessesLeft = 9;
                    document.getElementById("guessLeftText").innnerText = guessesLeft;
                    document.getElementById("computerPick").innerText = "Sorry, you lost. Make another pick to start game again!";
                    console.log('lost')
                    document.getElementById("lossesText").innerText = losses;
                    lettersGuessed = [];
                } else {
                    document.getElementById("computerPick").innerText = "Bad Guess...";
                    // guessesLeft--;
                    
                }
            }
        }
    };
    $('button').click(buttonHandler);
})
   

    // $('#computerPick').text(compLetter)

    // then you need to pass in player choice to the function

    // function buttonHandler(event){
    //     if (compLetter === parseInt(event.currentTarget.value)){
    //         $('#result_text').text('You guessed it! The Force is Strong in You!');
    //     }else $('#result_text').text('You\'re just wrong!')
    //     compLetter = Math.floor(Math.random() * 4)+1;
    // }

 // function buttonHandler() {
    //     var userClickedVal = $(this).val();

    //     if (guessesLeft !== 0) {
    //         //we keep playing
    //         console.log('keep playing')

    //         if (userClickedVal === computerPick) {
    //             console.log('win');
    //             document.getElementById("resultText").innerHTML = "You Guessed It";
    //             $(document).ready(function () {
    // the problem originally was the DOM wasnt ready. Which is basically the html hadnt been formed yet so when it was trying to find the id that i had created it wasnt there yet. The doc.ready says dont load any of this until the document has loaded.
    // a way to get around that would be to place the JS at the bottom of the file instead of in the head.

    // var compNumber = Math.floor(Math.random() * 4)+1;











    /*
    $("#button_1").unbind('click').bind('click', function() {
        buttonHandler(1);
    });
    ("#button_2").unbind('click').bind('click', function() {
        buttonHandler(2);
    }); 
    $("#button_3").unbind('click').bind('click', function() {
        buttonHandler(3);
    }); 
    $("#button_4").unbind('click').bind('click', function() {
        buttonHandler(4);
    });
    */

