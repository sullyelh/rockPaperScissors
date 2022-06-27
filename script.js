function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    const randomPick = Math.floor(Math.random() * options.length);
    let computerSelection = options[randomPick];
    return computerSelection;
}

function playRound(computerSelection, playerSelection) {
    let result;
    computerPlay();
    playerPick();
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
    return result;
}

//  function game() {
//      for (i = 0; i > 5; i++) {
//      playRound(computerSelection, playerSelection);
//      return result;
//      }
//  }
//  const computerSelection = computerPlay();
//  const playerSelection = playerPick();
//  console.log(playRound(computerSelection, playerSelection));

const rock = document.querySelector("#btn-rock");
const paper = document.querySelector("#btn-paper");
const scissors = document.querySelector("#btn-scissors");

rock.addEventListener("click", () => {
    let playerSelection = "rock";
    playRound();
});

paper.addEventListener("click", () => {
    let playerSelection = "paper";
    playRound();
});

scissors.addEventListener("click", () => {
    let playerSelection = "scissors";
    playRound();
});