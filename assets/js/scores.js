var scores = document.querySelector("#scores");
var highScores = JSON.parse(localStorage.getItem("scores")) || [];
console.log(highScores);
for (let i = 0; i < highScores.length; i++) {
    var html = `Player: ${highScores[i].initials} score:${highScores[i].score} `
    scores.insertAdjacentHTML("beforeend", html);
};

var backButton = document.querySelector('#go-back');

backButton.addEventListener("click", function () {
    window.location.href = "index.html";
});

var clearButton = document.querySelector('#clear-hs');

clearButton.addEventListener("click", function () {
    localStorage.clear();
});




