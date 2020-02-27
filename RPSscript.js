
function computerPlay()
{
    //computer randomly returns either 'Rock', 'Paper', or 'Scissors'
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    //console.log(randomChoice); //console only DISPLAYS it doesn't return the value.
    return randomChoice; //i need to use return because I want this value to be used.
}


function playRound(playerSelection, computerSelection)
{
    //debug line console.log("Playing the round. Computer: "+computerSelection+", Player: "+playerSelection);

    if (playerSelection == 'rock' && computerSelection == 'rock')
    {   
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

function game()
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
  
}

const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', () =>
{
  game();
});

const rockButton = document.querySelector('.rockButton');
rockButton.addEventListener('click', () =>
{
  playRound(rockButton);
});

const paperButton = document.querySelector('.paperButton');
paperButton.addEventListener('click', () =>
{
  playRound(paperButton);
});

const scissorsButton = document.querySelector('.scissorsButton');
scissorsButton.addEventListener('click', () =>
{
  playRound(scissorsButton);
});
