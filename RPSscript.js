
let playerPoints = _score("playerScores").innerHTML = 0
let computerPoints = _score("computerScores").innerHTML = 0

function _score(playerScores, computerScores)
{
  return document.getElementById(playerScores, computerScores);
}

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
function startRound(event){
  let playerSelection = event.target.closest("button").value;
    computerSelection = computerPlay();
  console.log(playerSelection);
    let result = playRound(playerSelection, computerSelection);
}


function playRound(playerSelection, computerSelection)
{

    if (playerSelection == 'rock' && computerSelection == 'rock')
    {   
        //can i use textContent or appendChild() here to update the console on screen?
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
    
} 


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

  let computerPoints = 0, playerPoints = 0;
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
  console.log('start button clicked');
});

  const rock = document.querySelector('.rock');
  rock.addEventListener('click', () =>
  {
    playRound(rock);
    console.log('rock button clicked');
  });

  const paper = document.querySelector('.paper');
  paper.addEventListener('click', () =>
  {
    playRound(paper);
    console.log('paper button clicked');
  });

  const scissors = document.querySelector('.scissors');
  scissors.addEventListener('click', () =>
  {
    playRound(scissors);
    console.log('scissors button clicked');
  });


//see discord messages in JS section from 9:30am - 10:37am. Also snow's codepen help:
// https://codepen.io/snowmonkey/pen/MWwmLmg?editors=0010