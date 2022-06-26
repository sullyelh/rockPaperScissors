function playerPick(choice) {
    let playerSelection;
}

function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    const randomPick = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomPick];
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
    for (i = 0; i > 5; i++) {
    playRound(computerSelection, playerSelection);
    console.log(result);
    }
}