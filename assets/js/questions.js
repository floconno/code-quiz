
var quizQuestions = document.querySelector(".question");
var choice = document.querySelectorAll(".btn");
var currentQuestionIndex = 0;
var index = 0;
var currentQuestion;
var correctAnswer;
var endQuiz = document.querySelector(".end-quiz");
var initialInput = document.querySelector("#init");
var submitButton = document.querySelector("#sub-btn");
var highScores = JSON.parse(localStorage.getItem("scores")) || [];

var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: 2,
    },
    {
        question: "The condition in an if / else statement is enclosed with in ________.",
        choices: ["quotes", "curly brackets", "square brackets", "parentheses"],
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        choices: ["numbers and strings", "booleans", "other arrays", "all of the above"],
        answer: 3,
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["quotes", "curly brackets", "commas", "parentheses"],
        answer: 0,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["JavaScript", "terminal/bash", "console.log", "for loops"],
        answer: 2,
    },
];

correctAnswer = questions[index].answer;

document.addEventListener('DOMContentLoaded', function () {
    var questionsContainer = document.querySelector(".questions-container");
    var questions = document.querySelectorAll(".question");

    currentQuestionIndex = 0;

    function showQuestion(index) {
        questions.forEach(question => {
            question.style.display = "none";
        });

        questions[index].style.display = "block";
    }

    function nextQuestion() {
        if (choice[currentQuestionIndex].value !== questions[currentQuestionIndex].answer) {
            timeLeft -= 5;
        }

        if (currentQuestionIndex === questions.length - 1) {
            quizEnd();
        }
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
    };

    function quizEnd() {
        questions.forEach(question => {
            question.style.display = "none";

            submitButton.addEventListener("click", function(event) {
                event.preventDefault();
            
                var initials = initialInput.value;
                var playerScore = {
                    "initials" : initials, 
                    "score" : timeLeft,
                }
                highScores.push(playerScore);
                localStorage.setItem("scores", JSON.stringify(highScores));
                
                window.location.assign("/highscores.html");
            });
        });

        endQuiz.style.display = "block";
    };

    for (var i = 0; i < choice.length; i++) {
        choice[i].addEventListener("click", function () {
            nextQuestion();
        });
    };

    // choice.forEach(button => {
    //     button.addEventListener("click", function() {

    //         nextQuestion();
    //     });
    // });

});

var timeEl = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");

var timeLeft = 90;

startButton.addEventListener("click", function () {
    var quizIntro = document.querySelector(".quiz-intro");
    quizIntro.style.display = "none";
    quizQuestions.style.display = "block";

    updateTimer();
});


function updateTimer() {

    var timerInterval = setInterval(function () {
        timeLeft--;

        timeEl.textContent = "Time: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            quizEnd();
        }

    }, 1000);

};

// TODO: go back button on hs page needs to go back to quiz, clear highscores needs to clear highscores from page/local storage,
// add message when question is answered right or wrong, timer needs to stop after last question is answered, style highscores
// add functionality to view highscores button
