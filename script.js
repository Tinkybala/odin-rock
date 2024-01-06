function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice(){
    let choice = getRandomInt(0,3)
    console.log(choice)
    switch (choice){
        case 0:
            return "Rock";
            break;

        case 1:
            return "Paper";
            break;

        case 2:
            return "Scissors";
    }

}

console.log(getComputerChoice());