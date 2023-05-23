// Generate random number and assign it to a choice (rock, paper, or scissors)
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

// Start the game round by comparing choices and return the result (win, lose, or tie)
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

// Start a 5-round game and compare the total score at the end to determine the winner
function game() {
    let round;
    let playerScore = 0;
    let compScore = 0;

    for (round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}, Rock Paper Scissors?`);
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${round}: ` + `You Chose ${playerSelection[0].toUpperCase() + 
            playerSelection.slice(1).toLowerCase()}, ` + result);
        if (result.includes('Win')) {
            playerScore++;
        }
        else if (result.includes('Lose')) {
            compScore++;
        }
        else if (result.includes('Bad')) {
            round--;
        }
    }

    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer Score: ${compScore}`);

    if (playerScore > compScore) {
        console.log('Congrats! You Win');
    }
    else if (playerScore < compScore) {
        console.log('Loser!');
    }
    else {
        console.log('Tie');
    }
}