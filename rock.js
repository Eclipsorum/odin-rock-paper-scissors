// Generate random number and assign it to a choice (rock, paper, or scissors)
function getComputerChoice() {
    const randomNum = (Math.floor(Math.random() * 3));
    return randomNum === 0 ? 'Rock' : randomNum === 1 ? 'Paper' : 'Scissors';
}

// Start the game round by comparing choices and return the result (win, lose, or tie)
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors') {
        switch(playerSelection) {
            case 'Rock':
                return computerSelection === 'Rock' ? "It's a tie!" :
                computerSelection === 'Paper' ? "You Lose! Paper beats Rock" :
                "You Win! Rock beats Scissors";
            
            case 'Paper':
                return computerSelection === 'Rock' ? "You Win! Paper beats Rock" :
                computerSelection === 'Paper' ? "It's a tie!" :
                "You Lose! Scissors beats Paper";

            case 'Scissors':
                return computerSelection === 'Rock' ? "You Lose! Rock beats Scissors" :
                computerSelection === 'Paper' ? "You Win! Scissors beats Paper" :
                "It's a tie!";
        }
    }

    else {
        return 'Bad Input!';
    }

}

// Start a 5-round game and compare the total score at the end to determine the winner
function game() {
    let round = 1;
    let playerScore = 0;
    let compScore = 0;

    while (round <= 5) {
        let playerPrompt = prompt(`Round ${round}, Rock Paper Scissors?`);

        if (playerPrompt) {
            const playerSelection = playerPrompt;
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            console.log(`Round ${round}: ` + `${playerSelection[0].toUpperCase() + 
                playerSelection.slice(1).toLowerCase()} VS ${computerSelection}, ` + result);
    
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

        else {
            round = 5;
        }
        
        round++;
    }

    console.log(`Your Score: ${playerScore}`);
    console.log(`Computer Score: ${compScore}`);

    playerScore > compScore ? console.log('Congrats! You Win') :
    playerScore < compScore ? console.log('Loser!') : console.log('Tie');

}