var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

let timeLeft = 90;

function updateTimer() {
  timeLeft--;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endQuiz();
  }
};

function deductTime() {
  if (questions !== correctIndex) {
    timeLeft -= 5;
  }
};

const timerInterval = setInterval(updateTimer, 1000);

setTime();

var startButton = document.querySelector(".btn");

startButton.addEventListener("click", function () {
    var startScreen = document.querySelector(".start-screen");
    startScreen.style.display = "none";
    var firstQuestion = document.querySelector(".first-question");
    firstQuestion.style.display = "block"; 
});



