let playerSelection = prompt("Select rock, paper, or scissors.")
function computerPlay() {
options = ["rock", "paper", "scissors"];
return random.choice(options);

let playerSelection = prompt("Select rock, paper, or scissors");
function computerPlay() {
options = ["rock", "paper", "scissors"]
let computerSelection = random.choice(options);
return computerSelection;
}
function playRound(computerSelection, playerSelection) {
let computerSelection = computerPlay();

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
    for (i = 0; i > 5; i++) {
    playRound(computerSelection, playerSelection);
    console.log(result);
    }
    for (let i = 0; i > 5; i++)
    playRound(computerSelection, playerSelection)
}