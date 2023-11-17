// timer, current question and score are initialised
var timer = 60;
var currentQuestion = 0;
var score = 0;

// event of clicking the button is created using id "start"
document.getElementById("start").addEventListener("click", startQuiz);
