var initialInput = document.querySelector("#init");
var submitButton = document.querySelector("#sub-btn");


submitButton.addEventListener("submit", function(event) {
    event.preventDefault();

    var initials = initialInput.value;

    localStorage.setItem("initals", initials);
    
});






