
var timeEl = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");

var timeLeft = 90;

function updateTimer() {

  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = "Time: " + timeLeft;

    if (questions !== correctAnswer) {
      timeLeft -= 5;
    }

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);

};

updateTimer();

startButton.addEventListener('click', updateTimer);




// var startButton = document.querySelector(".btn");

// startButton.addEventListener("click", function () {
//     var startScreen = document.querySelector(".start-screen");
//     startScreen.style.display = "none";
//     var firstQuestion = document.querySelector(".first-question");
//     firstQuestion.style.display = "block"; 
// });




