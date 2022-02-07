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


var playerSelection = "";
function change2Rock() {
    let local = "rock"
    playerSelection = local;
    
}

function change2Paper() {
    let local = "paper"
    playerSelection = local;
    
}

function change2Scissors() {
    let local = "scissors"
    playerSelection = local;
    
}

function playRound() {
//change the return values to something more useful and console.log after each round
// remember that console.log calls a function! 

let computerSelection = computerPlay(choices);


  
    if (computerSelection == "rock" && playerSelection == "rock"){
        document.getElementById("resultMessage").innerHTML = "Rock vs Rock. It's a tie!";
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore;
        is3()
        return;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        playerScore++;
        document.getElementById("resultMessage").innerHTML = "Rock vs Paper. You win!";
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore; 
        is3()
        return;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore++;
        document.getElementById("resultMessage").innerHTML = "Rock vs Scissors. You lose!";
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore;
        is3()
        return;   
    } else if (computerSelection == "paper" && playerSelection == "paper") {
        document.getElementById("resultMessage").innerHTML = "Paper vs Paper. It's a tie!";
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore;
        is3()
        return; 
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScore++;
        document.getElementById("resultMessage").innerHTML = "Paper vs Rock. You lose!";
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore; 
        is3()
        return; 
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        playerScore++;
        document.getElementById("resultMessage").innerHTML = "Paper vs Scissors. You win!";
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore; 
        is3()
        return;
    } else if (computerSelection == "scissors" && playerSelection == "scissors") {
        document.getElementById("resultMessage").innerHTML = "Scissors vs Scissors. It's a tie!";
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore; 
        is3()
        return; 
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScore++;
        document.getElementById("resultMessage").innerHTML = "Scissors vs Paper. You lose!" ;
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore; 
        is3()
        return;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        playerScore++;
        document.getElementById("resultMessage").innerHTML = "Scissors vs Rock. You win!" ;
        document.getElementById("score").innerHTML = "Player score is: " + playerScore;
        document.getElementById("compscore").innerHTML = "Computer score is: " + computerScore; 
        is3()
        return;

        
    } else {
        message = "something went wrong";
        console.log(message); 
        return message;
    }

}

function is3() {
    if (playerScore === 3) {
        document.getElementById("winningmsg").innerHTML = "Player wins 3 rounds!";
        return
    } else if (computerScore === 3) {
        document.getElementById("winningmsg").innerHTML = "Computer wins 3 rounds!";
        return
    } else {
        return
    }

}

 
function game() {
    for (let i = 0; i < 15; i++) {
        if (playerScore === 3) {
            return;
            
        } else if (computerScore === 3) {
            return
            
        } else {
            playRound();
            return;
            
        }
    }
 }
 


rock.addEventListener('click',() => {    
    change2Rock();
    game();    

});


paper.addEventListener('click',() => {    
    change2Paper();
    game();    

});
scissors.addEventListener('click',() => {    
    change2Scissors();
    game();    

});





