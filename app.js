// SCORES
let playerScore = 0;
let computerScore = 0;
let playerChoiceBtns = document.querySelectorAll(".rps-btn");
let resetBtn = document.querySelector(".reset-btn");
let playerScoreOutput = document.querySelector(".main_scoreOutput_player");
let compScoreOutput = document.querySelector(".main_scoreOutput_comp");
let mainSubtitle = document.querySelector(".main_subtitle");
let btnContainer = document.querySelector(".main_btnContainer");
let resetbtnContainer = document.querySelector(".main_resetBtnContainer");

let injectScoreData = function (player, comp) {
  playerScoreOutput.textContent = player;
  compScoreOutput.textContent = comp;
};

let injectSubtitle = function (text) {
  mainSubtitle.textContent = text;
};

injectScoreData(playerScore, computerScore);

// creating the function to randomly generate rps
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function letsPlay(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    injectSubtitle("It's A Tie Bro!");
    injectScoreData(playerScore, computerScore);
    return;
  }

  switch (playerChoice) {
    case "rock":
      if (computerChoice == "scissors") {
        injectSubtitle("You Win! Rock beats Scissors!");
        playerScore += 1;
        injectScoreData(playerScore, computerScore);
        break;
      } else {
        injectSubtitle("You Lose! Paper beats Rock!");
        computerScore += 1;
        injectScoreData(playerScore, computerScore);
        break;
      }
    case "scissors":
      if (computerChoice == "paper") {
        injectSubtitle("You Win! Scissors beats Paper!");
        playerScore += 1;
        injectScoreData(playerScore, computerScore);
        break;
      } else {
        injectSubtitle("You Lose! Rock beats Scissors!");
        computerScore += 1;
        injectScoreData(playerScore, computerScore);
        break;
      }
    case "paper":
      if (computerChoice == "rock") {
        injectSubtitle("You Win! Paper beats Rock!");
        playerScore += 1;
        injectScoreData(playerScore, computerScore);
        break;
      } else {
        injectSubtitle("You Lose! Scissors beats Paper!");
        computerScore += 1;
        injectScoreData(playerScore, computerScore);
        break;
      }
  }
  if (playerScore === 5 || computerScore === 5) {
    final();
    return;
  }
}

function final() {
  if (playerScore == 5) {
    injectSubtitle(
      `YOU WIN! Final Score: You:${playerScore} Computer:${computerScore}`
    );
  } else {
    injectSubtitle(
      `YOU SUCK! Final Score: You:${playerScore} Computer:${computerScore}`
    );
  }
  btnContainer.style.display = "none";
  resetbtnContainer.style.display = "flex";
}

// function play(player) {
// while (playerScore < 5 && computerScore < 5) {
// let player = prompt("What do you wanna play bro?");
// player = player.toLowerCase();
// if (player != "scissors" && player != "rock" && player != "paper") {
//   alert("Nah bro you have to play either rock, paper, or scissors");
// }
// if (player != "rock" || player != "scissors" || player != "paper") {
//   player = prompt("That's not a valid choice, bro. Please try again");
// }
//   letsPlay(player, getComputerChoice());
// }
// }

// Button event listeners
playerChoiceBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    letsPlay(e.target.dataset.choice, getComputerChoice());
  });
});

resetBtn.addEventListener("click", (e) => {
  playerScore = 0;
  computerScore = 0;
  injectSubtitle("Play something dude!");
  injectScoreData(playerScore, computerScore);
  btnContainer.style.display = "flex";
  resetbtnContainer.style.display = "none";
});

// play();
// final();
