var quizQuestions = document.querySelector(".question");
var choice = document.querySelector(".btn");
var index = 0;
var currentQuestion;

var questions = [
    {
        question: "Commonly used data types DO NOT include: ",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctIndex: 2,
    },
    {
        question: "The condition in an if / else statement is enclosed with in ________.",
        choices: ["quotes", "curly brackets", "square brackets", "parentheses"],
        correctIndex: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        choices: ["numbers and strings", "booleans", "other arrays", "all of the above"],
        correctIndex: 3,
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: ["quotes", "curly brackets", "commas", "parentheses"],
        correctIndex: 0,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        choices: ["JavaScript", "terminal/bash", "console.log", "for loops"],
        correctIndex: 2,
    },
];
