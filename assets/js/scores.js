var scores = document.querySelector("#scores");
var highScores = JSON.parse(localStorage.getItem("scores")) || [];
console.log(highScores);
for (let index = 0; index < highScores.length; index++) {
    var html = `score:${highScores[index].score} initial:${highScores[index].initials}`
    scores.insertAdjacentHTML("beforeend", html);
};

var backButton = document.querySelector('#go-back');

backButton.addEventListener("click", function () {
    window.location.assign("/index.html");
});

var clearButton = document.querySelector('#clear-hs');

clearButton.addEventListener("click", function () {
    localStorage.clear();
})




