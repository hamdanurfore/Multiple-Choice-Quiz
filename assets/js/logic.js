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

function questionClick() {
    console.log(this.value);
    if (questionNumber < questions.length) {

        console.log(questions[questionNumber].answer);
        if (this.value !== questions[questionNumber].answer) {
            time -= 10;
            if (time <= 0) {
                time = 0;
            }
            timerEl.textContent = time;

            feedbackEl.textContent = "WRONG!";
            console.log(feedbackEl.textContent);
        } else {

            feedbackEl.textContent = "CORRECT!";
            console.log(feedbackEl.textContent);

        }

        questionNumber++;
        if (questionNumber === questionsEl.length) {
            quizEnd();
        } else {
            displayQuestion();
        }
    }

}

function updateTimer() {
    time--;
    // timerEl.textContent = time;
    if (time <= 0) {
        time = 0;
        quizEnd();
    }
    timerEl.textContent = time;

}

function quizEnd() {
    clearInterval(timeInterval);
    //  hiding questions and showing end screen
    var endScreenEl = document.getElementById("end-screen");
    endScreenEl.removeAttribute("class", "hide");
    questionsEl.setAttribute("class", "hide");


    //  removing feedback
    feedbackEl = document.getElementById("feedback");
    feedbackEl.parentNode.removeChild(feedbackEl);


    //  final score
    document.getElementById("final-score").innerHTML = score;
}

// submitting and storing initials and scores
document.getElementById("submit").addEventListener("click", function() {
    // getting initials and score
    var initials = document.getElementById("initials").value;
    var score = document.getElementById("final-score").innerHTML;

    // highscore
    var highscore = {
        initials: initials,
        score: score,
    };
    console.log(highscore);

    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
    highscores.push(highscore);
    if (!highscores) {
        highscores = [];
    }
    
    highscores.push(highscore);
    localStorage.setItem("highscores",JSON.stringify(highscores));
    window.location.href="highscores.html";
    // localStorage.setItem('highscore', JSON.stringify(highscore));
    }
    );
    
    
    

