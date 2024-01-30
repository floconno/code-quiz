
var timeEl = document.querySelector(".timer");
var startButton = document.querySelector(".start-button");

var timeLeft = 90;

function updateTimer() {

  var timerInterval = setInterval(function() {
    timeLeft--;
    timeEl.textContent = "Time: " + timeLeft;

    // if (choice !== correctAnswer) {
    //   timeLeft -= 5;
    // }

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);

};

updateTimer();

startButton.addEventListener('click', updateTimer);

startButton.addEventListener("click", function () {
    var quizIntro = document.querySelector(".quiz-intro");
    quizIntro.style.display = "none";
    quizQuestions.style.display = "block";
});




