let playerSelection = prompt("Select rock, paper, or scissors");
function computerPlay() {
options = ["rock", "paper", "scissors"]
let computerSelection = random.choice(options);
return computerSelection;
}
function playRound(computerSelection, playerSelection) {
let result;
if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    result = "You Win! " + playerSelection + " beats " + computerSelection +"!";
    }
else if (playerSelection == computerSelection) {
    result = "It's a Tie, you both chose " + computerSelection +"!";
    }
else {
    result = "You lose:( " + computerSelection + " beats "+ playerSelection+".";
    }
}

function game() {
    for (let i = 0; i > 5; i++)
    playRound(computerSelection, playerSelection)
}