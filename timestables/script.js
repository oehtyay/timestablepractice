const equation = document.getElementById("equation");
const answer = document.getElementById("answerbox");
const correctDisplay = document.getElementById("correct");
const wrongDisplay = document.getElementById("wrong");
var randomInt1
var randomInt2
var correct = 0
var wrong = 0

function create() {
    randomInt1 = Math.floor(Math.random() * 12) + 1;
    randomInt2 = Math.floor(Math.random() * 12) + 1;
    equation.textContent = `${randomInt1} x ${randomInt2} =`;
}

function updateScore() {
    correctDisplay.textContent = `${correct}`;
    wrongDisplay.textContent = `${wrong}`;
}

function checkAnswer() {
    const userAnswer = parseInt(answer.value); 
    if (userAnswer == randomInt1 * randomInt2) {
        create();
        answer.value = "";
        correct++;
        updateScore();
    } else {
        wrong++;
        updateScore();
    }
}

window.addEventListener("load", create);