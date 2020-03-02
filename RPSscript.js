let computerPoints = document.getElementById("computerScores").innerHTML = 0;
let playerPoints = document.getElementById("playerScores").innerHTML = 0;

function computerPlay()
{
  //computer randomly returns either 'Rock', 'Paper', or 'Scissors'
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRoundRock()
{
  let computerSelection = computerPlay();
  if (computerSelection === "rock")
  {
    document.getElementById("gameScore").innerHTML = "Both chose Rock! No points awarded.";
  }
  else if (computerSelection === "paper")
  {
    computerPoints = document.getElementById("computerScores").innerHTML = ++computerPoints;
    document.getElementById("gameScore").innerHTML = "You lose. Paper beats Rock.";
    scoreTracker();
  }
  else if (computerSelection === "scissors")
  {
    playerPoints = document.getElementById("playerScores").innerHTML = ++playerPoints;
    document.getElementById("gameScore").innerHTML = "You win! Rock beats Scissors!";
    scoreTracker();
  }
  else
  {
    document.getElementById("gameScore").innerHTML = computerPlay();
  }
}

function playRoundPaper()
{
  let computerSelection = computerPlay();
  if (computerSelection === "paper")
  {
    document.getElementById("gameScore").innerHTML = "Both chose Paper! No points awarded.";
  }
  else if (computerSelection === "scissors")
  {
    computerPoints = document.getElementById("computerScores").innerHTML = ++computerPoints;
    document.getElementById("gameScore").innerHTML = "You lose. Scissors beats Paper.";
    scoreTracker();
  }
  else if (computerSelection === "rock")
  {
    playerPoints = document.getElementById("playerScores").innerHTML = ++playerPoints;
    document.getElementById("gameScore").innerHTML = "You win! Paper beats Rock!";
    scoreTracker();
  }
  else
  {
    document.getElementById("gameScore").innerHTML = computerPlay();
  }
}

function playRoundScissors()
{
  let computerSelection = computerPlay();
  if (computerSelection === "scissors")
  {
    document.getElementById("gameScore").innerHTML = "Both chose Scissors! No points awarded.";
  }
  else if (computerSelection === "rock")
  {
    computerPoints = document.getElementById("computerScores").innerHTML = ++computerPoints;
    document.getElementById("gameScore").innerHTML = "You lose. Rock beats Scissors.";
    scoreTracker();
  }
  else if (computerSelection === "paper")
  {
    playerPoints = document.getElementById("playerScores").innerHTML = ++playerPoints;
    document.getElementById("gameScore").innerHTML = "You win! Scissors beats paper!";
    scoreTracker();
  }
  else
  {
    document.getElementById("gameScore").innerHTML = computerPlay();
  }
}

//All player choice buttons are disabled upon web page load
document.getElementById("rockDisabled").disabled = true;
document.getElementById("paperDisabled").disabled = true;
document.getElementById("scissorsDisabled").disabled = true;

function game()
{
  let consoleClear = document.querySelector('.gameScore');
  let consoleText = '<i>Go!</i>';
  consoleClear.innerHTML = consoleText;

  document.getElementById("computerScores").innerHTML = 0;
  document.getElementById("playerScores").innerHTML = 0;

  computerPoints = 0;
  playerPoints = 0;
 
  document.getElementById("rockDisabled").disabled = false;
  document.getElementById("paperDisabled").disabled = false;
  document.getElementById("scissorsDisabled").disabled = false;
  //after clicking start button, buttons are active.
}

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', () =>
{
  game();
});

const rock = document.querySelector('.rock');
rock.addEventListener('click', () =>
{
  playRoundRock();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () =>
{
  playRoundPaper();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () =>
{
  playRoundScissors();
});

function scoreTracker()
{
  if (playerPoints == 5)
  {
    document.getElementById("gameScore").innerHTML = "Congratulations, you win!";
    document.getElementById("rockDisabled").disabled = true;
    document.getElementById("paperDisabled").disabled = true;
    document.getElementById("scissorsDisabled").disabled = true;
  }
  else if (computerPoints == 5)
  {
    document.getElementById("gameScore").innerHTML = "Sorry, the computer won.";
    document.getElementById("rockDisabled").disabled = true;
    document.getElementById("paperDisabled").disabled = true;
    document.getElementById("scissorsDisabled").disabled = true;
  }
}
