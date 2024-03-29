const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) { // Function for how the game works

    const computerChoice = choices[Math.floor(Math.random() * 3)]; // How the choice of the computer is made
    console.log(computerChoice);

    let result = "";

    if (playerChoice == computerChoice){ // If the player choice is the same as the computer = tie
        result = "No one wins lol!"
    }
    else{
        switch(playerChoice){ // Switch case for win condition
        case "rock":
            result = (computerChoice === "scissors") ? "You win naicuuu!" : "You lost dumbo";
            break;
        case "paper":
            result = (computerChoice === "rock") ? "You win naicuuu!" : "You lost dumbo";
            break;
        case "scissors":
            result = (computerChoice === "paper") ? "You win naicuuu!" : "You lost dumbo";
            break;
        }
    }

    // Display names of computer and player
        playerDisplay.textContent = `Player : ${playerChoice}`; 
        computerDisplay.textContent = `Computer : ${computerChoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("winText", "loseText");

    // Switch case to update the score for player and computer
        switch(result){
            case "You win naicuuu!":
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                resultDisplay.classList.add("winText");
                break;
            case "You lost dumbo":
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                resultDisplay.classList.add("loseText");
                break;
        }
}
