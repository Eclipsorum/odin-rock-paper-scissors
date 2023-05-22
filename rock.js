function getComputerChoice() {
    const randomNum = (Math.floor(Math.random() * 3));
    if (randomNum === 0) {
        return 'Rock';
    }
    else if (randomNum === 1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
        switch(playerSelection) {
            case 'Rock':
                if (computerSelection === 'Rock') {
                    return "It's a tie! Rock vs Rock";
                }
                else if (computerSelection === 'Paper') {
                    return "You Lose! Paper beats Rock";
                }
                else {
                    return "You Win! Rock beats Scissors";
                }
            
            case 'Paper':
                if (computerSelection === 'Rock') {
                    return "You Win! Paper beats Rock"; 
                }
                else if (computerSelection === 'Paper') {
                    return "It's a tie! Paper vs Paper";
                }
                else {
                    return "You Lose! Scissors beats Paper";
                }

            case 'Scissors':
                    if (computerSelection === 'Rock') {
                        return "You Lose! Rock beats Scissors"; 
                    }
                    else if (computerSelection === 'Paper') {
                        return "You Win! Scissors beats Paper"; 
                    }
                    else {
                        return "It's a tie! Scissors vs Scissors";
                    }
        }
    }

    else {
        return 'Bad Input!';
    }

}