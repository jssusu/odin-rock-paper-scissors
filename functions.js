let computerScore = 0, humanScore = 0;
let roundCount = 1;
const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function capitalize(string) {
    return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();
}

function getHumanChoice() {
    let humanChoice;
    do {
        humanChoice = capitalize(prompt("Rock, Paper, or Scissors?").trim());
        if (!choices.includes(humanChoice)) {
            alert("Invalid choice. Enter \"Rock\", \"Paper\", or \"Scissors\". This is not case-sensitive.");
        }
    } while (!choices.includes(humanChoice));

    return humanChoice;
}

// Returns true if the computer wins, false if the human wins, or null if there is a tie.
function computerWins(computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        return null;
    }

    switch (computerChoice) {
        case "Rock":
            return humanChoice === "Scissors" ? true : false;
        case "Paper":
            return humanChoice === "Rock" ? true : false;
        case "Scissors":
            return humanChoice === "Paper" ? true : false;
    }
}

function playRound() {
    let computerChoice = getComputerChoice(), humanChoice = getHumanChoice();
    let computerWon = computerWins(computerChoice, humanChoice);

    console.log(`Round ${roundCount}:`);

    switch (computerWon) {
        case null:
            console.log("It's a tie!");
            break;
        case true: 
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            break;
        case false:
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            break;
    }

    console.log(`Current Score (You - Computer): ${humanScore} - ${computerScore}`);
    roundCount++;
}

function playRounds(numRounds) {
    if (numRounds < 1 || numRounds % 1 !== 0) {
        console.log("Invalid argument. numRounds must be a positive integer.");
        return;
    }

    for (i = 0; i < numRounds; i++) {
        playRound();
    }
}
