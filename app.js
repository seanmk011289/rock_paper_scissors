// SCORES
let playerScore = 0;
let computerScore = 0;

// creating the function to randomly generate rps

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function letsPlay(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    console.log("It's A Tie Bro!");
    console.log(playerScore, computerScore);
    return;
  }
  switch (playerChoice) {
    case "rock":
      if (computerChoice == "scissors") {
        console.log("You Win! Rock beats Scissors!");
        playerScore += 1;
        console.log(playerScore, computerScore);
        break;
      } else {
        console.log("You Lose! Paper beats Rock!");
        computerScore += 1;
        console.log(playerScore, computerScore);
        break;
      }
    case "scissors":
      if (computerChoice == "paper") {
        console.log("You Win! Scissors beats Paper!");
        playerScore += 1;
        console.log(playerScore, computerScore);
        break;
      } else {
        console.log("You Lose! Rock beats Scissors!");
        computerScore += 1;
        console.log(playerScore, computerScore);
        break;
      }
    case "paper":
      if (computerChoice == "rock") {
        console.log("You Win! Paper beats Rock!");
        playerScore += 1;
        console.log(playerScore, computerScore);
        break;
      } else {
        console.log("You Lose! Scissors beats Paper!");
        computerScore += 1;
        console.log(playerScore, computerScore);
        break;
      }
  }
}

function final() {
  if (playerScore == 5) {
    console.log(
      `YOU WIN! Final Score: You:${playerScore} Computer:${computerScore}`
    );
  } else {
    console.log(
      `YOU SUCK! Final Score: You:${playerScore} Computer:${computerScore}`
    );
  }
}

function play() {
  while (playerScore < 5 && computerScore < 5) {
    let player = prompt("What do you wanna play bro?");
    player = player.toLowerCase();
    // if (player != "rock" || player != "scissors" || player != "paper") {
    //   player = prompt("That's not a valid choice, bro. Please try again");
    // }
    letsPlay(player, getComputerChoice());
  }
}

play();
final();
