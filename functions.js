let computerScore = 0, humanScore = 0;
const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    let humanChoice;
    do {
        humanChoice = prompt("Rock, Paper, or Scissors?").trim().toLowerCase();
        if (!choices.includes(humanChoice)) {
            alert("Invalid choice.");
        }
    } while (choices.includes(humanChoice));

    return humanChoice;
}

function determineWinner(computerChoice, humanChoice) {

}

function playRound() {

}
