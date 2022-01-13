function computerPlay(arr) {

    // get random index value
    const randomChoice = Math.floor(Math.random() * arr.length);

    // get random item
    const compChoice = arr[randomChoice];

    return compChoice;
}

const choices = ["rock", "paper", "scissors"];




let playerScore = 0;
let computerScore = 0;
let score = [playerScore, computerScore];


function playRound() {
//change the return values to something more useful and console.log after each round
// remember that console.log calls a function! 
let playerSelection = prompt("What's your choice?");
let computerSelection = computerPlay(choices);
  
    if (computerSelection == "rock" && playerSelection == "rock"){
    
        message = "Rock vs Rock. It's a tie!";
        console.log(message); 
        return message;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore++;
        message = "Rock vs Paper. You win!"
        console.log(message); 
        return message;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore++;
        message = "Rock vs Scissors. You lose!"
        console.log(message);
        return message;   
    } else if (computerSelection == "paper" && playerSelection == "paper") {
        
        message = "Paper vs Paper. It's a tie!"
        console.log(message);
        return message; 
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore++;
        message = "Paper vs Rock. You lose!"
        console.log(message); 
        return message; 
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore++;
        message = "Paper vs Scissors. You win!"
        console.log(message); 
        return message 
    } else if (computerSelection == "scissors" && playerSelection == "scissors") {
        
        message = "Scissors vs Scissors. It's a tie!"
        console.log(message); 
        return message 
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore++;
        message = "Scissors vs Paper. You lose!" 
        console.log(message); 
        return message
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        playerScore++;
        message = "Scissors vs Rock. You win!"
        console.log(message); 
        return message;
        
    } else {
        message = "something went wrong";
        console.log(message); 
        return message;
    }

}

function game() {
   while (playerScore || computerScore < 3) {
        playRound()
        console.log("Computer: " + computerScore, "Player: " + playerScore);
    }
}
game()
console.log("Computer: " + computerScore, "Player: " + playerScore);


