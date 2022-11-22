let moves = ["Rock", "Paper","Scissors"];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * moves.length)];
}

let playerSelection = "rock";
let computerSelection = getComputerChoice();

console.log("Computer chooses: " + computerSelection);

playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "A draw!";
    } else if (playerSelection == moves[0] && computerSelection == moves[2]) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

console.log(playRound(playerSelection, computerSelection));
