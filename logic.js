// time, question number and score are initialised
var time = 60;
var questionNumber = 0;
var score = 0;

// event of clicking the button is created using id "start"
document.getElementById("start").addEventListener("click", startQuiz);

// timer id
var  timeInterval;

// when start quiz clicked: start screen ends and question screen shown.
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var questions = document.getElementById("questions");
