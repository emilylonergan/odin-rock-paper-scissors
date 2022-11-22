let moves = [
    "Rock",
    "Paper",
    "Scissors"
];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * moves.length)];
}

console.log(getComputerChoice());


//play playerSelection against computerSelection
//return a winning message based on game


let playerSelection = "rock";
let computerSelection = getComputerChoice();

playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "A draw!";
    } else if (playerSelection == "Rock" && computerSelection == moves[2]) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
console.log(playRound(playerSelection, computerSelection));