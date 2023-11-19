// time, question number and score are initialised
var time = 60;
var questionNumber = 0;
var score = 0;

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initals");
var feedbackEl = document.getElementById("feedback");


// event of clicking the button is created using id "start"
document.getElementById("start").addEventListener("click", startQuiz);

// timer id
var timeInterval;

function startQuiz() {
    // when start quiz clicked: start screen ends and question screen shown.
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class", "hide");

    //start timer
    timeInterval = setInterval(updateTimer, 1000);

    displayQuestion();
}
function displayQuestion() {
    var currentQuestion = questions[questionNumber];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = ""; // clearing out old choices from previous question
    // loop over choices
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + "." + choice;
        choicesEl.appendChild(choiceBtn);
        choiceBtn.onclick = questionClick;


    })
}
