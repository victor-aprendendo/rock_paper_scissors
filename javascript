console.log("Hello World!");
let rpsArray = [ 'Rock', 'Paper', 'Scissors' ];
const getComputerChoice = Math.floor(Math.random()*rpsArray.length);
const computerSelection = rpsArray[getComputerChoice];
console.log(computerSelection)

let playerSelection = prompt('Rock, Paper or Scissors?', "") 

if (playerSelection == computerSelection) {
    alert("Tie")
} else if (playerSelection != computerSelection) {
    alert ("Dunno, code no finished yet")
}

function playRound(playerSelection, computerSelection) {
    
}
