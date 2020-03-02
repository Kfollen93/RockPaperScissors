
/*let playerPoints = _score("playerScores").innerHTML = 0
let computerPoints = _score("computerScores").innerHTML = 0

function _score(playerScores, computerScores)
{
  return document.getElementById(playerScores, computerScores);
} */

let computerPoints = document.getElementById("computerScores").innerHTML = 0;
let playerPoints = document.getElementById("playerScores").innerHTML = 0;

function computerPlay()
{
    //computer randomly returns either 'Rock', 'Paper', or 'Scissors'
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    //console.log(randomChoice); //console only DISPLAYS it doesn't return the value.
    return randomChoice; //i need to use return because I want this value to be used.
}

/***
 * This function lets us get the player's input, and start the round
 ***/
function startRound(event)
{
  let playerSelection = event.target.closest("button").value;
  computerSelection = computerPlay();
  console.log(playerSelection);
  //let result = playRound(playerSelection, computerSelection);
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




/* function playRound(playerSelection, computerSelection)
{

    if (playerSelection == rock && computerSelection == 'rock')
    {   
        //can i use textContent or appendChild() here to update the console on screen?
        let consoleTie = document.querySelector('.gameScore');
        let consoleTieText = 'You both rolled rock! No points have been awarded';
        consoleTie.innerHTML = consoleTieText;

        console.log("Tie!");
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper')
    {   
        console.log("You lose! Paper beats rock."); //this has to be console.log to display because of the below
        return 'loss'; // can only have one return statement because JS exits after it sees return
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors')
    {   
        console.log("You win! Rock beats scissors."); 
        return 'won';
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock')
    {
      console.log("You lose! Paper beats rock.");
      return 'loss';
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper')
    {
      console.log("Tie!");
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors')
    {
      console.log("You lose! Paper beats rock.");
      return 'loss';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors')
    {
      console.log("Tie!");
    }
    else if (playerSelection == 'scissors' && computerSelection == 'rock')
    {
      console.log("You lose! Paper beats rock.");
      return 'loss';
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper')
    {
      console.log("You win! Rock beats scissors.");
      return 'won';
    }
    else
    {
      console.log("Error. Please enter 'Rock', 'Paper', or 'Scissors'");
    }
    
} */




/*function game()
{
  let computerPoints = 0, playerPoints = 0;
  

  for (let i = 0; i < 5; i++)
  {
    //All of this goes within the for loop because I want all these steps to occur 5 times.
    let userInput = prompt('Please enter "Rock", "Paper", or "Scissors". Best out of 5 entries wins!:');
    playerSelection = userInput.toLowerCase();
    computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    if (result == 'won')
    {
      playerPoints++;
    }
    else if (result == 'loss')
    {
      computerPoints++;
    }
    else
    {
      continue;
    }

  }

    console.log("The Computer's total number of points are: ", computerPoints);
    console.log("Your total number of points are: ", playerPoints);
  
    if (computerPoints > playerPoints)
    {
      console.log("Better luck next time! The Computer wins!");
    }
    else if (playerPoints > computerPoints)
    {
      console.log("Congratulations! You win!");
    }
    else
    {
      console.log("You both have the same number of points! It's a tie!");
    }
  
} my old game() function above. Commenting out for now may need to pull some info */

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
 
  const playerOptions = document.querySelectorAll(".player-option");
  
  playerOptions.forEach(button =>
  {
    button.addEventListener("click", startRound);
  })

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
