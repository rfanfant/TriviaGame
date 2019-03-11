# TriviaGame


ABOUT:

I created a triva game using JavaScript for the logic and utilized jQuery to manipulate HTML. In this game the player is asked a set of questions and is
limited in the time to answer each question. Once the player presses the "Start" button the application asks a series of question with multiple choice answers.
The player is given 20 seconds to correctly answer the question or else they will lose a point. Once the player answers a question a transition timer is initiated to show the results of question as well as displaying total questions answer correctly and incorrectly. The player plays until all questions are answered, at which point the game ends.


TECHNOLOGIES LEARNED:

Probably the most important thing that I learned during the construction of this applicaiotn was how to dynamically create HTML tags using jQuery as well as how to dynamically manupulate the HTML to add/remove tags on the fly.

The triviaObj was another point of learning for me in that I created an Obj which contained an array of other objects (i.e. quesitons). Questions contained 1) a question b) collection of choices c) a correct answer.

GETTING STARTED:
Most of the code resides in the javascript file "app.js". 

The most important data structure is trivalObj. Stores the list of question, answers and correct answer. The javascript code traverses the questions contained in trivalObj and presents them to the player.

Important functions are:
Onclick handlers for the Start button and the player multiple choice selections. Once the start button is press the javascript code removes the button from the HTML structure and then adds radio buttons for the multiple choice selections using JQuery methods. 

The other important function is delayQuestionTimeout which is used by the timer events. Two timers are used, one that times out when the player takes too long to answer a question, and the other is used to determine the duration to show the result of each question, before transitioning to the next question.

The remaining functions are used to navigate through the the trivalObj set of questions.
