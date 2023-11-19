function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    // sort highscores by score property in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;

    });

    // Have a for loop that will loop through all the high scores
    for (var i = 0; i < highscores.length; i += 1) {
        // create li tag for each high score
        var listItem = document.createElement('li');
        listItem.textContent = highscores[i].initials + ' - ' + highscores[i].score;

        // display on page
        var olEl = document.getElementById('highscores');
        olEl.appendChild(listItem);

    }
}

// Then have a function that will Clear High Scores from your local storage and reload your browser window
function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
}

document.getElementById('clear').onclick = clearHighscores;

// run function when page loads
printHighscores();