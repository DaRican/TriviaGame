$(document).ready(function () {
    function baseballTrivia() {



        var question0 = {
            question: 'What was specifically designed to be the size and weight of a baseball?',
            answer: "Hand Grenade",
            incorrectOne: "Coffee Mug",
            incorrectTwo: "Walkie Talkie",
            incorrectThree: "PS4 Controller"
        };

        var question1 = {
            question: 'Who was the first Major League player to pitch a ball over 100 mph?',
            answer: "Nolan Ryan",
            incorrectOne: "Dwight Gooden",
            incorrectTwo: "Tom Seaver",
            incorrectThree: "Roger Clemens"
        };

        var question2 = {
            question: 'What player was nicknamed "Mr. November"?',
            answer: "Derek Jeter",
            incorrectOne: "Reggie Jackson",
            incorrectTwo: "Joe DiMaggio",
            incorrectThree: "Babe Ruth"
        };

        var question3 = {
            question: 'Which pitcher had no right hand?',
            answer: "Jim Abbot",
            incorrectOne: "Nolan Ryan",
            incorrectTwo: "Lefty Gomez",
            incorrectThree: "Curt Schilling"
        };

        var question4 = {
            question: 'How many baseballs could John Bench hold in one hand?',
            answer: "Seven",
            incorrectOne: "Five",
            incorrectTwo: "Six",
            incorrectThree: "Eight"
        };

        var question5 = {
            question: 'What is the most stolen base?',
            answer: "Second",
            incorrectOne: "First",
            incorrectTwo: "Third",
            incorrectThree: "Home"
        };

        var question6 = {
            question: 'Who was the first Puerto Rican to receive the World Series MVP award?',
            answer: "Roberto Clemente",
            incorrectOne: "Carlos Beltran",
            incorrectTwo: "Jorge Posada",
            incorrectThree: "Joe Colon"
        };

        var question7 = {
            question: 'What did Pittsburgh Pirate pitcher Dock Ellis claim to have done on June 12, 1970?',
            answer: "Pitch a No hitter on LSD",
            incorrectOne: "Talk to the Ghost of Babe Ruth",
            incorrectTwo: "Bribed an Umpire",
            incorrectThree: "Pitch in his sleep"
        };

        var question8 = {
            question: 'Who holds the all-time home run and RBI records among Puerto Rican players',
            answer: "Carlos Delgado",
            incorrectOne: "Ivan Rodriguez",
            incorrectTwo: "Juan Gonzalez",
            incorrectThree: "Bernie Williams"
        };

        var question9 = {
            question: 'Which of the following pitchers is not left-handed?',
            answer: "Roger Clemens",
            incorrectOne: "Randy Johnson",
            incorrectTwo: "White Ford",
            incorrectThree: "Sandy Koufax"
        };

        var question10 = {
            question: 'What is the most expensive baseball card?',
            answer: "Honus Wagner",
            incorrectOne: "Babe Ruth",
            incorrectTwo: "Micky Mantle",
            incorrectThree: "Derek Jeter"
        };

        var question11 = {
            question: 'Why was Babe Ruth\'s Jersey Number 3? ',
            answer: "He batted third",
            incorrectOne: "He was born on the Third of March 1903",
            incorrectTwo: "For the Holy Trinity",
            incorrectThree: "He had three brothers"
        };

        var question12 = {
            question: 'What is the most popular food item',
            answer: "Hot Dogs",
            incorrectOne: "Pizza",
            incorrectTwo: "Hamburgers",
            incorrectThree: "Nachos"
        };

        var question13 = {
            question: 'What was Babe Ruth\'s first name?',
            answer: "George",
            incorrectOne: "Henry",
            incorrectTwo: "William",
            incorrectThree: "Bobby"
        };

        var question14 = {
            question: 'Who was the first girl to pitch a shutout in the Little League Baseball World Series?',
            answer: "Mo'ne Davis",
            incorrectOne: "Emma March",
            incorrectTwo: "Victoria Roche",
            incorrectThree: "Eliska Stejskalova"
        };

        /* Creat a question array to store all the variable questions so I can call on them with an index Number */


        var questionArray = [];

        questionArray.push(question0);
        questionArray.push(question1);
        questionArray.push(question2);
        questionArray.push(question3);
        questionArray.push(question4);
        questionArray.push(question5);
        questionArray.push(question6);
        questionArray.push(question7);
        questionArray.push(question8);
        questionArray.push(question9);
        questionArray.push(question10);
        questionArray.push(question11);
        questionArray.push(question12);
        questionArray.push(question13);
        questionArray.push(question14);



        function mainPage() {
            $('#questionBlock').css({
                "top": "325px"

            });
            $('#questionBlock').text("Baseball Trivia");

            $('#answerSelections').text("Hit START to begin");
            var startButton = $("<div id=btnStart >");
            $('#answerSelections').append(startButton);


            $('#btnStart').text("START");
            $('#btnStart').on('click', mainPageDelay);



        }

        mainPage();
        /* 
        ASSIGN VARIABLES FOR THE FIRST TIMER AT THE BEGINNING OF THE GAME
        */
        var number = 6;
        var intervalId;


        function mainPageDelay() {
            $('#container').empty();
            $('#questionBlock').empty();
            $('#answerSelections').empty();



            function run() {
                clearInterval(intervalId);
                intervalId = setInterval(decrement, 1000);


            }



            run();


        }

        function decrement() {
            number--;
            console.log("decrement");
            var firstTimerDiv = $('<div id=firstTimerDiv>');
            $('#questionBlock').html(firstTimerDiv);
            $('#firstTimerDiv').html(number);



            if (number < 0) {
                gameStart();
                clearInterval(intervalId);

            }
        }

        /* 
            DECLARE VARIABLES FOR THE RESULTS OF THE GAME AS WELL AS THE COUNTDOWN VARIABLES
        
        */

        var gameTimer = 31;
        var gameValID;
        var wins = 0;
        var losses = 0;
        var attempts = 0;
        var notAnswered = 0;




        function gameStart() {

            /* Create input selections for the answer options in "answerSelections" DIV */

            $('#questionBlock').empty();
            $('#answerSelections').empty();

            var randQuestionNumber = Math.floor(Math.random() * questionArray.length);

            function shuffle(a) {
                var j, x, i;
                for (i = a.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    x = a[i];
                    a[i] = a[j];
                    a[j] = x;
                }
                return a;
            }



            console.log(randQuestionNumber);

            var answerInput = $("<div id=btnAnswer value=0 class=answerOptions list=selections>");

            var wrongAnswerOneInput = $("<div id=btnWrongOne value=1 class=answerOptions list=selections>");
            var wrongAnswerTwoInput = $("<div id=btnWrongTwo value=2 class=answerOptions list=selections>");
            var wrongAnswerThreeInput = $("<div id=btnWrongThree value=3 class=answerOptions list=selections>");

            var correctAnswer = (questionArray[randQuestionNumber].answer);
            var wrongAnswer1 = (questionArray[randQuestionNumber].incorrectOne);
            var wrongAnswer2 = (questionArray[randQuestionNumber].incorrectTwo);
            var wrongAnswer3 = (questionArray[randQuestionNumber].incorrectThree);

            var answerOne = answerInput.text(correctAnswer);
            var wrongOne = wrongAnswerOneInput.text(wrongAnswer1);
            var wrongTwo = wrongAnswerTwoInput.text(wrongAnswer2);
            var wrongThree = wrongAnswerThreeInput.text(wrongAnswer3);






            /* Create an array that hold the answer selection variables, so we can 
            call them in a random order for our gameplay loop  */

            var selectionsArray = []

            selectionsArray.push(answerOne);
            selectionsArray.push(wrongOne);
            selectionsArray.push(wrongTwo);
            selectionsArray.push(wrongThree);



            console.log("before: " + selectionsArray);
            shuffle(selectionsArray);
            console.log("after: " + selectionsArray);






            $("#questionBlock").text(questionArray[randQuestionNumber].question);

            $("#answerSelections").append(selectionsArray[0]);
            $("#answerSelections").append(selectionsArray[1]);
            $("#answerSelections").append(selectionsArray[2]);
            $("#answerSelections").append(selectionsArray[3]);

            // $("#answerSelections").append(answerInput);
            // $("#btnAnswer").text(selectionsArray[0]);
            // $("#answerSelections").append(wrongAnswerOneInput);
            // $('#btnWrongOne').text(selectionsArray[1]);
            // $("#answerSelections").append(wrongAnswerTwoInput);
            // $('#btnWrongTwo').text(selectionsArray[2]);
            // $("#answerSelections").append(wrongAnswerThreeInput);
            // $('#btnWrongThree').text(selectionsArray[3]);

            /* 
            MAKE THE BUTTONS CLICKABLE WITH FUNCTIONS FOR ALL OF THEM
            */

            $('#btnAnswer').on("click", function () {
                wins++;
                attempts++;
                console.log("win");
                console.log("wins: " + wins);
                console.log("attempts: " + attempts);
                gameTimer = 31;
                var winDiv = $('<div id=winPic>');
                $('#answerSelections').html(winDiv);
                var winPic = $('<iframe src="https://giphy.com/embed/fl8tgbp5lHQ0o" frameBorder="0" allowFullScreen></iframe>');
                $('#winPic').html(winPic);
                $('#questionBlock').html("Correct Answer!");
                clearInterval(gameValID);
                choiceMadeCountdown();


            });
            $('#btnWrongOne').on('click', function () {
                losses++;
                attempts++;
                console.log("loss");
                console.log("loss: " + losses);
                console.log("attempts: " + attempts);
                gameTimer = 31;
                var winDiv = $('<div id=winPic>');
                $('#answerSelections').html(winDiv);
                var winPic = $('<iframe src="https://giphy.com/embed/dRCpja8SByklq" ></iframe>');
                $('#winPic').html(winPic);
                $('#questionBlock').html("Wrong Answer");
                clearInterval(gameValID);
                choiceMadeCountdown();

            });
            $('#btnWrongTwo').on('click', function () {
                losses++;
                attempts++;
                console.log("loss");
                console.log("loss: " + losses);
                console.log("attempts: " + attempts);
                gameTimer = 31;
                var winDiv = $('<div id=winPic>');
                $('#answerSelections').html(winDiv);
                var winPic = $('<iframe src="https://giphy.com/embed/dRCpja8SByklq" ></iframe>');
                $('#winPic').html(winPic);
                $('#questionBlock').html("Wrong Answer");
                clearInterval(gameValID);
                choiceMadeCountdown();

            });
            $('#btnWrongThree').on('click', function () {
                losses++;
                attempts++;
                console.log("loss");
                console.log("loss: " + losses);
                console.log("attempts: " + attempts);
                gameTimer = 31;
                var winDiv = $('<div id=winPic>');
                $('#answerSelections').html(winDiv);
                var winPic = $('<iframe src="https://giphy.com/embed/dRCpja8SByklq" ></iframe>');
                $('#winPic').html(winPic);
                $('#questionBlock').html("Wrong Answer");
                clearInterval(gameValID);
                choiceMadeCountdown();
            });







            console.log(correctAnswer)

            inGameRun();

            if (attempts === 10) {
                gameOver();
                console.log('GAME OVER');
            }

        }



        var choiceNum = 4;
        var madeChoice;

        function choiceMadeCountdown() {
            console.log('Choice Made');
            clearInterval(madeChoice);
            madeChoice = setInterval(choiceDecrement, 1000);

        }

        function inGameRun() {
            console.log("In Game Run");
            clearInterval(gameValID);
            gameValID = setInterval(countdown, 1000);


        }

        function countdown() {
            gameTimer--;
            console.log("In Game Timer");
            var inGameTimer = $('<div id=gameTimeLeft>');
            $('.container').append(inGameTimer);

            $('#gameTimeLeft').html(gameTimer);

            if (gameTimer <= 0) {

                clearInterval(gameValID);
                gameStart();
                gameTimer = 31;
                notAnswered++;
                attempts++;
                console.log("Timed Out Attempt");
                console.log(gameValID);
                console.log(gameTimer);


            }
        }

        function choiceDecrement() {
            choiceNum--;
            console.log("Choice Decrement");
            console.log(choiceNum)
            if (choiceNum <= 0) {
                clearInterval(madeChoice);
                choiceNum = 4;
                gameStart();
            }
        }

        var endGameNum = 11;
        var endGameId;

        function endGameRun() {
            console.log("end Game Run");
            clearInterval(endGameId);
            endGameId = setInterval(endGameCount, 1000);

        }

        function endGameCount() {
            console.log('end game count');
            endGameNum--;
            var endGameTimer = $('<div id=gameTimeLeft>');
            $('.container').append(endGameTimer);

            $('#gameTimeLeft').html(endGameNum);

            if (endGameNum <= 0) {

                clearInterval(endGameId);
                endGameNum = 11;
                choiceNum = 4;
                gameTimer = 31;
                gameValID;
                wins = 0;
                losses = 0;
                attempts = 0;
                notAnswered = 0;

                baseballTrivia();





            }

        }



        function gameOver() {
            clearInterval(gameValID);
            clearInterval(endGameId);

            $('#questionBlock').empty();
            $('#answerSelections').empty();

            $('#questionBlock').text('GAME OVER');

            var resultsDiv = $('<div id=results>s');
            $('#answerSelections').append(resultsDiv);
            $('#results').html('Here are the results:')
            $('#results').append('<br>');
            $('#results').append("<br>Correct: " + wins);
            $('#results').append("<br>Incorrect: " + losses);
            $('#results').append("<br>Not Answered: " + notAnswered);
            endGameRun();




        }

        // ASK ABOUT THIS IN CLASS!!!!!

        // function win() {
        //     wins++;
        //     attempts++;
        //     console.log("win");
        //     console.log("wins: " + wins);
        //     console.log("attempts: " + attempts);
        //     gameStart();

        // }

        // function lose() {
        //     losses++;
        //     attempts++;
        //     console.log("Lose");
        //     console.log(losses);
        //     console.log(attempts);
        //     gameStart();

        // }



    }

    baseballTrivia();

})