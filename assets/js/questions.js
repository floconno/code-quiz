
var quizQuestions = document.querySelector(".question");
var choice = document.querySelectorAll(".btn");
var currentQuestionIndex = 0;
var index = 0;
var currentQuestion;
var correctAnswer;

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

    var currentQuestionIndex = 0;

    function showQuestion(index) {
        questions.forEach(question => {
            question.style.display = 'none';
        });

        questions[index].style.display = 'block';
    }

    function nextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        };
    };

    choice.forEach(button => {
        button.addEventListener("click", function() {
    
    
            nextQuestion();
        });
    });
});

// function nextQuestion() {
//     if (currentQuestionIndex < questions.length - 1) {
//         currentQuestionIndex++;
//         showQuestion(currentQuestionIndex);
//     };
// };

// function navigate(direction) {
//     index = index + direction;
//     if (index = 0) { 
//       index = questions.length + 1; 
//     } else if (index > questions.length) { 
//       endQuiz();
//     }
//     currentQuestion = questions[index];
//   }

// choice.forEach(button => {
//     button.addEventListener("click", function() {


//         nextQuestion();
//     });
// });
// choice.addEventListener("click", function(event) {
//     event.stopPropagation();
//     navigate(1);
// });
