let moves = ["Rock", "Paper","Scissors"];

function getComputerChoice() {
    return moves[Math.floor(Math.random() * moves.length)];
}

let playerSelection = prompt("What's your move?");

let computerSelection = getComputerChoice();

console.log("Computer chooses: " + computerSelection);

playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "A draw!";
    } else if (playerSelection == moves[0] && computerSelection == moves[2]) {
        return "Nice one!";
    } else if (playerSelection == moves[1] && computerSelection == moves[0]) {
        return "Yes!"; 
    } else if (playerSelection == moves[2] && computerSelection == moves[1]) {
        return "Got it!"
    } else {
        return "Dang";
    }
}

console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;

function game() {
    playRound(playerSelection, computerSelection);

    for (let i = 0; i < 5; i++) {
        if ((playerSelection == moves[0] && computerSelection == moves[2])
        || (playerSelection == moves[1] && computerSelection == moves[0]) 
        || (playerSelection == moves[2] && computerSelection == moves[1])) {
            playerScore = playerScore++;
        } else {
            computerScore = computerScore++;
        }
    }
}

game();
   
function score(playerScore) {
    if (playerScore >= 3) {
        console.log("Congrats, you won!");
    } else {
        console.log("You lost. Better luck next time!");
    }
}
