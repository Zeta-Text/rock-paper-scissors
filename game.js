function computerPlay(arr) {

    // get random index value
    const randomChoice = Math.floor(Math.random() * arr.length);

    // get random item
    const compChoice = arr[randomChoice];

    return compChoice;
}

const choices = ["rock", "paper", "scissors"];
const result = computerPlay(choices);


function playRound(playerSelection, computerSelection) {
    if (computerSelection == "rock" && playerSelection == "rock"){
        return "Rock vs Rock. It's a tie!"
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "Rock vs Paper. You win!"
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "Rock vs Scissors. You lose!" 
    } else if (computerSelection == "paper" && playerSelection == "paper") {
        return "Paper vs Paper. It's a tie!"
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "Paper vs Rock. You lose!"
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "Paper vs Scissors. You win!"
    } else if (computerSelection == "scissors" && playerSelection == "scissors") {
        return "Scissors vs Scissors. It's a tie!"
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "Scissors vs Paper. You lose!"
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "Scissors vs Rock. You win!"
    }

}

const playerSelection = "rock";
const computerSelection = computerPlay(choices);
console.log(playRound(playerSelection, computerSelection));

