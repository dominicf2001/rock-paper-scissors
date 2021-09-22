
// 0 = rock
// 1 = paper 
// 2 = scissors
let computerPlay = () => Math.floor((Math.random()* 3));

function round(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == 0) return 'Tie';
        else if (computerSelection == 1) return 'Loss';
        else if (computerSelection == 2) return 'Win';
    }
    else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == 0) return 'Win';
        else if (computerSelection == 1) return 'Tie';
        else if (computerSelection == 2) return 'Loss';
    }
    else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == 0) return 'Loss';
        else if (computerSelection == 1) return 'Win';
        else if (computerSelection == 2) return 'Tie';
    }
}



function game() {
    let computerscore = 0
    let userscore = 0
    console.log(computerscore, userscore)
    for (i = 1; i <= 5; i++) {
        let userPlay = prompt('Select: Rock, Paper, or Scissors');
        let result = round(userPlay, computerPlay());
        alert(result)
        
        if (result == 'Win') ++userscore;
        else if (result == 'Loss') ++computerscore;
    }

    alert(`Computer: ${computerscore} User: ${userscore}`)
}

game()