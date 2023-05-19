function random(number) {
    return Math.floor(Math.random() * number + 1)
}
let getcomputerSelection;
function getComputerSelection() {
    let computerChoice = random(3);
    let computerSelection = "";
    switch (computerChoice) {
        case 1: 
            computerSelection = "Rock";
            break;
        case 2:
            computerSelection = "Paper";
            break;
        case 3: 
            computerSelection = "Scissors";
            break;
        default: 
            break;
    }
    return computerSelection;
}
function play (playerChoice, getComputerChoice) {
    let log= ""; 
    if (playerChoice == 'Rock') {
        if (getComputerChoice == 'Paper') {
            log = "You Lose";
        } else if (getComputerChoice == 'Scissors') {
            log = "You Win";
        } else {
            log = "Tie";
        }
    } else if (playerChoice == "Paper") {
        if (getComputerChoice == 'Scissors') {
            log = "You Lose"; 
        } else if (getComputerChoice == 'Rock') {
            log = "You Win"; 
        } else {
            log = "Tie"
        }
    } else if (playerChoice == 'Scissors') {
        if (getComputerChoice == 'Rock') {
            log = 'You Lose';
        } else if (getComputerChoice == 'Paper') {
            log = 'You Win';
        } else {
            log = "Tie";
        }
    }
    return log;
}

// Case-insensitive 

const playerChoice = "paper";
const getComputerChoice = getComputerSelection();
console.log(play(playerChoice, getComputerChoice));
