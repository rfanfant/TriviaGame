jQuery(document).ready(function () {

    // Created an object containing an array of questions. Questions are made up of a question, answers(i.e. multiple choices), and correct answer.
    var triviaObj = {

        questions:
            [

                {
                    question: "What is the name of my cat?",
                    answers: ["Jim", "Jeff", "John", "N/A"],
                    correctAnswer: "N/A"
                },
                {
                    question: "What city was I born?",
                    answers: ["NYC", "Mumbai", "Seattle", "Portland", "Port-au-Prince"],
                    correctAnswer: "Port-au-Prince"
                },
                {
                    question: "Company name of my first job?",
                    answers: ["McDonalds", "Dick's", "Jack in the Crack", "Arby's", "Wendy's"],
                    correctAnswer: "McDonalds"
                },

                {
                    question: "What is my middle name?",
                    answers: ["Jordan", "Wilbur", "Michael", "Molly", "Edgard"],
                    correctAnswer: "Edgard"
                },
                {
                    question: "What is my favorite color?",
                    answers: ["Orange", "Blue", "Yellow", "Purple", "Razzmatazz"],
                    correctAnswer: "Blue"
                },
                {
                    question: "What continent did spend my formative years?",
                    answers: ["North America", "Europe", "Asia", "Africa", "South America"],
                    correctAnswer: "Africa"
                },
                {
                    question: "What is my favorite hobby?",
                    answers: ["Amateur Radio", "Woodworking", "Beekeeping", "Motorcycle riding", "Sewing"],
                    correctAnswer: "Amateur"
                },
                {
                    question: "What type of vehicle do I drive?",
                    answers: ["Segway", "Sport Coupe", "Truck", "Motorcycle", "SUV"],
                    correctAnswer: "SUV"
                },

                {
                    question: "Where did I graduate high school?",
                    answers: ["London", "NYC", "Monrovia", "Seattle", "Tokyo"],
                    correctAnswer: "Seattle"
                },
                {
                    question: "What non-English language do I speak?",
                    answers: ["Swahili", "Japanese", "French", "Spanish", "German"],
                    correctAnswer: "French"
                },

                {
                    question: "What is my favorite  type cuisine?",
                    answers: ["Chinese", "Thai", "French", "American", "Mexican"],
                    correctAnswer: "Thai"
                },

                {
                    question: "What is my favorite drink?",
                    answers: ["Latte", "Moonshine", "Tea", "OJ", "Water"],
                    correctAnswer: "Latte"
                },

                {
                    question: "What is my favorite exercise?",
                    answers: ["Raquetball ", "Skiing", "Hiking", "Golf", "Swimming"],
                    correctAnswer: "Swimming"
                },

                {
                    question: "What is my least favorite thing to do?",
                    answers: ["Driving", "Ironing", "Emptying dishwasher", "Laundry", "Shopping"],
                    correctAnswer: "Ironing"
                }
            ]


    };

    //  Variable that will hold the button alert's timeout when it is clicked.
    //  Player is given 20 seconds to answer a question and 3 seconds between
    //  question transition. the variable delayQuestionTimeout is used for both
    //  both timers
    var delayQuestionTimeout;
    var questionTimeout = 20000;
    var questionTransition = 5000;


    //  Variable that keeps track of which question is going to be asked next
    var questionIndex = 0;

    //  Variables to keep track of total correct & incorrect questions
    var totalIncorrect = 0;
    var totalCorrect = 0;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // updateDisplayQuestion() - function to update game display with a new question as well as multiple choice answers
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function updateDisplayQuestion(questionIndex) {

        // make sure previous answers are removed
        $("#userChoices").text("");

        // check player isn't at the last answers...
        if (questionIndex < triviaObj.questions.length) {
            // update userMessage & choices
            $("#userMessage").text(triviaObj.questions[questionIndex].question);
            for (var i = 0; i < triviaObj.questions[questionIndex].answers.length; i++) {
                $("#userChoices").append("<input type='radio' name='choices' value=" + triviaObj.questions[questionIndex].answers[i] + ">" + triviaObj.questions[questionIndex].answers[i] + "<br>");
            }

        }
        else {
            // We have reached our last question....
            // update userMessage & choices
            $("#userMessage").text("Thank you for playing the Trivia Game. You have answered " + totalCorrect + " questions correctly, and " + totalIncorrect + " incorrectly!");
            for (var i = 0; i < triviaObj.questions[questionIndex].answers.length; i++) {
                $("#userChoices").append("<input type='radio' name='choices' value=" + triviaObj.questions[questionIndex].answers[i] + ">" + triviaObj.questions[questionIndex].answers[i] + "<br>");
            }
     
            restartOrExit();
        }

    }


{/* <p hidden="hidden" id="restartExit"> Would you like to restart the game? </p>
  <button hidden="hidden" id="Yes">Yes</button>
  <button  hidden="hidden" id="No">No</button> */}


      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // clearTimer() - used to remove timer and prevent it's firing
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function   restartOrExit (){

        // Ask the player if they would like to restart the game or exit
        $("#restartExit").append("hidden:")



     }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // clearTimer() - used to remove timer and prevent it's firing
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function clearTimer() {

        // Clear question timeout.
        clearTimeout(delayQuestionTimeout);

    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // nextQuestion() - called to transition to the next question
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function nextQuestion() {

        // clear transition timer
        clearTimer();

        // increment question counter
        questionIndex++;

        //update display with new question
        updateDisplayQuestion(questionIndex);

        // start question timer
        startQuestionTimer();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // startQuestionTransition() - called at the end of every question. Used to display running correct/incorrect totals.
    //
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function startQuestionTransition() {

        // startQuestionTransition() called to transition to the next question
        clearTimer();

        // set transition timeout value and call nextQuestion() when it fires
        delayQuestionTimeout = setTimeout(function () {
            nextQuestion()
        }, questionTransition);
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // startQuestionTimer() - called to set a timer. incorrectAnswer() is called if the timer fires if the player takes
    //       too long to answer the question
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function startQuestionTimer() {
        delayQuestionTimeout = setTimeout(function () {
            incorrectAnswer()
        }, questionTimeout);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // incorrectAnswer() - called it's determined that the player has entered an incorrect answer. totalIncorrect variable
    //       is incremented and the player is messaged appropriately
    // 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    function incorrectAnswer() {
        // function is called  when question timer has tripped...therefore bump up total incorrect answers
        totalIncorrect++;

        // clear all answers
        // make sure previous answers are removed
        $("#userChoices").text("");

        // message the player that their answer is incorrect. 
        $("#userMessage").text("The correct answer is " + triviaObj.questions[questionIndex].correctAnswer + ". You have answered " + totalCorrect + " questions correctly, and " + totalIncorrect + " incorrectly!" );

        // start the transition timer. Used to make sure the player has adequate time to view incorrect error message
        startQuestionTransition();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // correctAnswer() - called it's determined that the player has entered the correct answer. totalCorrect variable is
    //       incremented and the player is messaged appropriately
    // 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    function correctAnswer() {
        // function is called  when question timer has tripped...therefore bump up total incorrect answers
        totalCorrect++;

        // clear all answers
        // make sure previous answers are removed
        $("#userChoices").text("");

        // message the player correct and incorrect counts, as well as current question status
        $("#userMessage").text("The answer is CORRECT. You have answered " + totalCorrect + " questions correctly, and " + totalIncorrect + " incorrectly!");

        // start the question transition timer
        startQuestionTransition();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // StartButton() - on click event handler. Player has pressed the start button and is ready to play the Trivia game.
    // 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    $("#StartButton").on("click", function () {

        // remove the Start button 
        $("#StartButton").remove();

        // display first question. variable questionIndex tracks question number/index
        updateDisplayQuestion(questionIndex);

        // start the question timer
        startQuestionTimer();
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // StartButton() - on click event handler. player has clicked one of the radio buttons and has selected an answer
    // 
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    $("#userChoices").on("click", function () {

        // clear the question timeout timer as the player has selected an answer
        clearTimer();

        // determine which radio button was selected and compare it to the correct answer. Call
        // the appropriate function(i.e. correctAnswer() or incorrectAnswer())
        if ($("[name=choices]:checked").val() === triviaObj.questions[questionIndex].correctAnswer) {
            correctAnswer();
        }
        else {
            incorrectAnswer();
        }

    })

});


