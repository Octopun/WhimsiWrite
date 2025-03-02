//Imported from ChatGPT
let countdownTimer;
let timerRunning = false;

const startButton = document.getElementById("startButton");
const timerDisplay = document.getElementById("timerDisplay");
const minutesInput = document.getElementById("minutes");

startButton.addEventListener("click", function() {
    // Get the user input value
    let inputMinutes = parseInt(minutesInput.value);

    // Check if input is within valid range
    if (inputMinutes >= 5 && inputMinutes <= 60) {
        startCountdown(inputMinutes);
    } else {
        alert("Please enter a value between 5 and 60 minutes.");
    }
});

function startCountdown(minutes) {
    if (timerRunning) {
        clearInterval(countdownTimer);
    }

    let timeLeft = minutes * 60; // Convert input time to seconds
    timerRunning = true;
    updateTimerDisplay(timeLeft);

    countdownTimer = setInterval(function() {
        timeLeft--;
        updateTimerDisplay(timeLeft);

        // When timer reaches zero, stop it
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            timerDisplay.innerHTML = "Time's up!";
            timerRunning = false;
        }
    }, 1000);
}

function updateTimerDisplay(secondsLeft) {
    const minutesLeft = Math.floor(secondsLeft / 60);
    const secondsLeftFormatted = secondsLeft % 60;
    timerDisplay.innerHTML = `${minutesLeft}:${secondsLeftFormatted < 10 ? '0' + secondsLeftFormatted : secondsLeftFormatted}`;
}