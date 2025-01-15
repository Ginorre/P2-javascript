const resultOutput = document.getElementById("resultOutput");
const computerChoice = document.getElementById("computerChoice");
const playerChoice = document.getElementById("playerChoice");


const possibleChoices = document.querySelectorAll('button');
let player = "";
let computer = "";
let result = "";


possibleChoices.forEach(button => {
    button.addEventListener("click", (e) => {
        player = e.target.id;  
        playerChoice.innerHTML = `Jouw keuze: ${player}`;
        
        generateComputerChoice();  
        getResult();  
    });
});


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computer = "rock";
    } else if (randomNumber === 1) {
        computer = "paper";
    } else {
        computer = "scissors";
    }

    computerChoice.innerHTML = `Computer keuze: ${computer}`;
}


function getResult() {
    if (computer === player) {
        result = "Gelijkspel!";
    } else if (
        (computer === "rock" && player === "paper") ||
        (computer === "paper" && player === "scissors") ||
        (computer === "scissors" && player === "rock")
    ) {
        result = "Je hebt gewonnen!";
    } else {
        result = "Je hebt verloren!";
    }

    resultOutput.innerHTML = result;
}