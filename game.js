
const resultText = document.querySelector(".resultText");
const rockButton = document.querySelector(".playerRock");
const paperButton = document.querySelector(".playerPaper");
const scissorsButton = document.querySelector(".playerScissors");
const restartButton = document.querySelector(".tryAgainButton");

let playerPoints = 0;
let computerPoints = 0;


function startRound(e) {
    if (isGameOver()) {
        announceWinner();
        alert("The game has finished. Refresh or presh the Try Again button to restart.");
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
        } else if (computerSelection === "paper") {
            computerPoints++;
            resultText.textContent = "You lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            playerPoints++;
            resultText.textContent = "You win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerPoints++;
            resultText.textContent = "You win! Paper beats Rock";
        } else if (computerSelection === "paper") {
            resultText.textContent = "It's a tie! Both chose paper";
        } else if (computerSelection === "scissors") {
            computerPoints++;
            resultText.textContent = "You lose! Scissors beats paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerPoints++;
            resultText.textContent = "You lose! Scissors beats Rock";
        } else if (computerSelection === "paper") {
            playerPoints++;
            resultText.textContent = "You win! Scissors beats paper";
        } else if (computerSelection === "scissors") {
            resultText.textContent = "It's a tie! Both chose Scissors";
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
    updatePoints();
}

rockButton.addEventListener("click", startRound);
paperButton.addEventListener("click", startRound);
scissorsButton.addEventListener("click", startRound);
restartButton.addEventListener("click", restartGame);



