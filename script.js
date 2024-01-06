function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice(){
    let choice = getRandomInt(0,3)
    switch (choice){
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
    }

}

function playRound(playerSelection, computerSelection){

    if (computerSelection === "rock" && playerSelection === "paper"){
        return(1)
    }
    else if (computerSelection === "paper" && playerSelection === "rock"){
        return(0)
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        return(1)
    }
    else if (computerSelection === "scissors" && playerSelection === "paper"){
        return(0)
    }
    else if (computerSelection === "rock" && playerSelection === "scissors"){
        return(0)
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        return(1)
    }
    else if (computerSelection === playerSelection){
        return("It's a Tie!")
    }    

}

function game(){
    let computer = 0,
        player = 0;

    while (computer + player < 5){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose \"Rock\", \"Paper\" or \"Scissors\"!").toLowerCase();
        
        if (playRound(playerSelection, computerSelection) === 1){
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
            player++;
        }
        else if (playRound(playerSelection, computerSelection) === 0){
            console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
            computer++;
        }
        else{
            console.log("It's a Tie!")
        }
    }
    if (player > computer){
        console.log("You win best of fives!");
    }
    else{
        console.log("Computer wins best of fives!");
    }
}

game();