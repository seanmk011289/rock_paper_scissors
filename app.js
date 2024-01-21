// creating the function to randomly generate rps

function getComputerChoice() {
  let choice = "";
  let choose = Math.ceil(Math.random() * 3);
  switch (choose) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
      break;
  }
  return choice;
}

getComputerChoice();
