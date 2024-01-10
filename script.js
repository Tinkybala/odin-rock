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
        return(2)
    }    

}

//Event handlers for buttons

function updateScore(outcome){
    let newScore = 0;
    switch(outcome){
        case 0:
            let computerScore = document.querySelector("#computerScore .score");
            newScore = Number(computerScore.textContent) + 1;
            computerScore.textContent = newScore;
            console.log(newScore);
            if (newScore === 5) return "computerWin";
            return 0;

        case 1:
            let playerScore = document.querySelector("#playerScore .score");
            newScore = Number(playerScore.textContent) + 1;
            playerScore.textContent = newScore;
            console.log(newScore);
            if (newScore === 5) return "playerWin";
            return 0;
    }
}

function restartScore(){
    let computerScore = document.querySelector("#computerScore .score");
    let playerScore = document.querySelector("#playerScore .score");
    computerScore.textContent = "0";
    playerScore.textContent = "0";
}

function announceRound(playerSelection, outcome){
    let announcement = document.querySelector("#announcement");
    if (outcome === 1){
        switch(playerSelection){
            case "rock":
                announcement.textContent = "you win! rock beats scissors.";
                break;

            case "paper":
                announcement.textContent = "you win! paper beats rock.";
                break;

            case "scissors":
                announcement.textContent = "you win! scissors beats paper.";
        }
     }
     else if (outcome === 0){
        switch(playerSelection){
            case "rock":
                announcement.textContent = "you lose! paper beats rock.";
                break;

            case "paper":
                announcement.textContent = "you lose! scissors beats paper.";
                break;

            case "scissors":
                announcement.textContent = "you lose! rock beats scissors.";
        
        }
     }
     else announcement.textContent = "Its a tie!";
}

function createRestart(){
    let restartButton = document.createElement("button");
    restartButton.textContent = "Press to restart";
    let body = document.querySelector("body");

    body.appendChild(restartButton);

    restartButton.addEventListener("click", (event)=>{
        console.log("restart");
        restartScore();

        document.getElementById("rock").disabled = false;
        document.getElementById("paper").disabled = false;
        document.getElementById("scissors").disabled = false;

        body.removeChild(restartButton);
    })
}

let buttons = document.querySelector("#buttons")

buttons.addEventListener("click", (event)=>{
    let target = event.target;
    let computerChoice = getComputerChoice();
    let outcome = 0; 
    switch(target.id){
        case("rock"):
            outcome = playRound("rock", computerChoice);
            announceRound("rock", outcome);
            break;

        case("scissors"):
            outcome = playRound("scissors", computerChoice);
            announceRound("scissors", outcome);
            break;

        case("paper"):
            outcome = playRound("paper", computerChoice);
            announceRound("paper", outcome);
    }
    console.log(outcome);
    switch(updateScore(outcome)){
        case "computerWin":
            alert("You lost!"); 
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            createRestart();
            break; 
        
        case "playerWin":
            alert("You won!");
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            createRestart();
    }
})
