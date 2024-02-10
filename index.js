const rollButton = document.getElementById("rollButton");
const frameScore = document.getElementById("frameScore");
const totalScoreDisplay = document.getElementById("totalScore");
const resetButton = document.getElementById("resetButton");

let currentFrame = 1;
let totalScore = 0;
let pinsRemaining = 10;


rollButton.addEventListener("click", rollBall);
resetButton.addEventListener("click", resetGame);

function rollBall() {
    const pinsKnocked = Math.floor(Math.random() * (pinsRemaining + 1));
    pinsRemaining -= pinsKnocked;

    updateScore(pinsKnocked);
    updateFrame();
}

function updateScore(pinsKnocked) {
    totalScore += pinsKnocked;
    frameScore.innerHTML += `Frame ${currentFrame}: ${pinsKnocked} | `;
    totalScoreDisplay.innerText = `Total Score: ${totalScore}`;
}

function updateFrame() {
    if (currentFrame < 10) {
        currentFrame++;
        pinsRemaining = 10;
        document.querySelector(".frame-indicator").textContent = `Frame: ${currentFrame}`;
    } else {
        document.querySelector(".frame-indicator").textContent = `Game Over`;
        rollButton.disabled = true;
    }
}

function resetGame() {
    currentFrame = 1;
    totalScore = 0;
    pinsRemaining = 10;
    frameScore.innerHTML = "";
    totalScoreDisplay.innerText = `Total Score: ${totalScore}`;
    document.querySelector(".frame-indicator").textContent = `Frame: 1`;
    rollButton.disabled = false;
}