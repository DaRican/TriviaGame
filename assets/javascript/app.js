$(document).ready(function () {



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
    var gameTimer = 31;

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

        $('#questionBlock').html(number);

        if (number < 0) {
            gameStart();
            clearInterval(intervalId);

        }
    }

    function gameStart() {

        /* Create input selections for the answer options in "answerSelections" DIV */
        $('#container').empty();
        $('#questionBlock').empty();
        $('#answerSelections').empty();

        var randQuestionNumber = Math.floor(Math.random() * questionArray.length);

        console.log(randQuestionNumber);

        var answerInput = $("<div id=btnAnswer class=answerOptions list=selections>");

        var wrongAnswerOneInput = $("<div id=btnWrongOne class=answerOptions list=selections>");
        var wrongAnswerTwoInput = $("<div id=btnWrongTwo class=answerOptions list=selections>");
        var wrongAnswerThreeInput = $("<div id=btnWrongThree class=answerOptions list=selections>");

        var correctAnswer = (questionArray[randQuestionNumber].answer);
        var wrongAnswer1 = (questionArray[randQuestionNumber].incorrectOne);
        var wrongAnswer2 = (questionArray[randQuestionNumber].incorrectTwo);
        var wrongAnswer3 = (questionArray[randQuestionNumber].incorrectThree);



        /* Create an array that hold the answer selection variables, so we can 
        call them in a random order for our gameplay loop  */

        var selectionsArray = []

        selectionsArray.push(correctAnswer);
        selectionsArray.push(wrongAnswer1);
        selectionsArray.push(wrongAnswer2);
        selectionsArray.push(wrongAnswer3);

        selectionRandomizer = Math.floor(Math.random() * selectionsArray);









        $("#questionBlock").text(questionArray[randQuestionNumber].question);


        $("#answerSelections").append(answerInput);
        $("#btnAnswer").text(correctAnswer);
        $("#answerSelections").append(wrongAnswerOneInput);
        $('#btnWrongOne').text(wrongAnswer1);
        $("#answerSelections").append(wrongAnswerTwoInput);
        $('#btnWrongTwo').text(wrongAnswer2);
        $("#answerSelections").append(wrongAnswerThreeInput);
        $('#btnWrongThree').text(wrongAnswer3);



        console.log(correctAnswer)

        function run() {
            console.log("In Game Run");
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);


        }



        run();

        function decrement() {
            gameTimer--;
            console.log("In Game Timer");
            var inGameTimer = $('<div id=gameTimeLeft>');
            $('container').html(inGameTimer);

            $('#gameTimeLeft').html(gameTimer);

            if (number < 0) {
                gameStart();
                clearInterval(intervalId);

            }
        }



    }















})