<<<<<<< HEAD
let playerSelection = prompt("Select rock, paper, or scissors.")
function computerPlay() {
options = ["rock", "paper", "scissors"];
return random.choice(options);
=======
let playerSelection = prompt("Select rock, paper, or scissors");
function computerPlay() {
options = ["rock", "paper", "scissors"]
let computerSelection = random.choice(options);
return computerSelection;
>>>>>>> c86e6e3d9b1b1d56ec1ee10afdb94175a9541bc4
}
function playRound(computerSelection, playerSelection) {
<<<<<<< HEAD
let computerSelection = computerPlay();
=======
>>>>>>> c86e6e3d9b1b1d56ec1ee10afdb94175a9541bc4
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
<<<<<<< HEAD
    for (i = 0; i > 5; i++) {
    playRound(computerSelection, playerSelection);
    console.log(result);
    }
=======
    for (let i = 0; i > 5; i++)
    playRound(computerSelection, playerSelection)
>>>>>>> c86e6e3d9b1b1d56ec1ee10afdb94175a9541bc4
}