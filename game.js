const resultText = document.querySelector(".resultText");
const rockButton = document.querySelector(".playerRock");
const paperButton = document.querySelector(".playerPaper");
const scissorsButton = document.querySelector(".playerScissors");
const restartButton = document.querySelector(".tryAgainButton");

const playerScoreBorder = document.querySelector("#playerScoreContainer");
const computerScoreBorder = document.querySelector("#computerScoreContainer");

let playerPoints = 0;
let computerPoints = 0;


function startRound(e) {
    if (isGameOver()) {
        announceWinner();
        alert("The game has finished. Refresh or press the Try Again button to restart.");
        return;
    }
    let computerInput = computerPlay();
    let playerInput = e.target.id.toLowerCase();
    playRound(playerInput, computerInput);
    updatePoints();

    if (isGameOver()) {
        console.log("Reached");
        announceWinner();
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            resultText.textContent = "It's a tie! Both chose Rock";
            highlightWinner("tie");
        } else if (computerSelection === "paper") {
            computerPoints++;
            resultText.textContent = "You lose! Paper beats Rock";
            highlightWinner("computer");
        } else if (computerSelection === "scissors") {
            playerPoints++;
            resultText.textContent = "You win! Rock beats Scissors";
            highlightWinner("player");
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerPoints++;
            resultText.textContent = "You win! Paper beats Rock";
            highlightWinner("player");
        } else if (computerSelection === "paper") {
            resultText.textContent = "It's a tie! Both chose paper";
            highlightWinner("tie");
        } else if (computerSelection === "scissors") {
            computerPoints++;
            resultText.textContent = "You lose! Scissors beats paper";
            highlightWinner("computer");
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerPoints++;
            resultText.textContent = "You lose! Scissors beats Rock";
            highlightWinner("computer");
        } else if (computerSelection === "paper") {
            playerPoints++;
            resultText.textContent = "You win! Scissors beats paper";
            highlightWinner("player");
        } else if (computerSelection === "scissors") {
            resultText.textContent = "It's a tie! Both chose Scissors";
            highlightWinner("tie");
        }
    } else {
        resultText.textContent = "Whoops! Something went wrong!";
    }
}

function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3: 
            return "scissors";
    }
}

function updatePoints() {
    const playerPointsText = document.querySelector(".playerScoreText");
    const computerPointsText = document.querySelector(".computerScoreText");
    playerPointsText.textContent = playerPoints;
    computerPointsText.textContent = computerPoints;
}

function isGameOver() {
    return (playerPoints === 5 || computerPoints === 5);
}

function announceWinner() {
    if (playerPoints > computerPoints) {
        resultText.textContent = "You won! Congrats!";
    } else {
        resultText.textContent = "You lost! Unlucky...";
    }
}

function restartGame() {
    playerPoints = 0;
    computerPoints = 0;
    resultText.textContent = "Select a choice to start";
    playerScoreBorder.style.borderColor = "black";
    computerScoreBorder.style.borderColor = "black";
    updatePoints();
}

function highlightWinner(winner) {
    switch(winner) {
        case "player":
            playerScoreBorder.style.borderColor = "#42F58A";
            computerScoreBorder.style.borderColor = "black";
            break;
        case "computer":
            playerScoreBorder.style.borderColor = "black";
            computerScoreBorder.style.borderColor = "#42F58A";
            break;
        case "tie":
            playerScoreBorder.style.borderColor = "black";
            computerScoreBorder.style.borderColor = "black";
            break;
        default:
            break;
    }
}

rockButton.addEventListener("click", startRound);
paperButton.addEventListener("click", startRound);
scissorsButton.addEventListener("click", startRound);
restartButton.addEventListener("click", restartGame);



