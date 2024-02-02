
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

  var timerInterval = setInterval(function() {
    // timeLeft--;
    
    timeEl.textContent = "Time: " + timeLeft;

    if ((choice[currentQuestionIndex].value !== questions[currentQuestionIndex].answer)) {
      timeLeft -= 5;
    } else {
      timeLeft -= 1;
    };

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      quizEnd();
    }

  }, 1000);

};







