let random = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

let guessInput = document.getElementById("guessInput");
let guessBtn = document.getElementById("guessBtn");
let result = document.getElementById("result");
let restartBtn = document.getElementById("restartBtn");
let attemptsDisplay = document.getElementById("attempts");

guessBtn.addEventListener("click", function(){

    let guess = Number(guessInput.value);

    if(guess < 1 || guess > 10){
        result.textContent = "Enter a number between 1 and 10";
        return;
    }
    attempts++;

    if(guess === random){
        result.textContent = "Correct Answer!!!";
        guessBtn.disabled = true;
    }

    else if(guess < random){
        result.textContent = "Too Low! Try a higher number.";
    }

    else{
        result.textContent = "Too High! Try a lower number.";
    }

    attemptsDisplay.textContent = "Attempts: " + attempts + " / 5";

    if(attempts === 5 && guess !== random){
        result.textContent = "Game Over! The number was " + random;
        guessBtn.disabled = true;
    }
});

restartBtn.addEventListener("click", function(){
    random = Math.floor(Math.random() * 10) + 1;
    attempts = 0;
    guessInput.value = "";
    result.textContent = "";
    attemptsDisplay.textContent = "Attempts: 0 / 5";
    guessBtn.disabled = false;
});