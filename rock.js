const body = document.querySelector('body');
const buttonContainer = document.createElement('div');

const rockButton = document.createElement('button');
rockButton.textContent = 'ROCK';

const paperButton = document.createElement('button');
paperButton.textContent = 'PAPER';

const scissorButton = document.createElement('button');
scissorButton.textContent = 'SCISSOR';

const resetButton = document.createElement('button');
resetButton.textContent = 'PLAY AGAIN?';

const resultContainer = document.createElement('div');
const paraResult = document.createElement('p');
const paraScore = document.createElement('p');
const textWinner = document.createElement('h3');

body.appendChild(buttonContainer);
body.appendChild(resultContainer);
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorButton);
resultContainer.appendChild(paraResult);
resultContainer.appendChild(paraScore);

rockButton.addEventListener('click', gameUI);
paperButton.addEventListener('click', gameUI);
scissorButton.addEventListener('click', gameUI);
resetButton.addEventListener('click', resetGame);

let playerScore = 0;
let compScore = 0;

function resetGame() {
    playerScore = 0;
    compScore = 0;
    if (textWinner.textContent.includes('YOU')) {
        textWinner.textContent = '';
        resultContainer.removeChild(textWinner);
    }
    resultContainer.removeChild(resetButton);
    paraResult.textContent = '';
    paraScore.textContent = '';
    rockButton.addEventListener('click', gameUI);
    paperButton.addEventListener('click', gameUI);
    scissorButton.addEventListener('click', gameUI);

}

function gameUI(event) {
    const result = playRound(event.target.innerText, getComputerChoice());
    paraResult.textContent = result;

    if (result.includes('Win')) {
        playerScore++;
    }
    else if (result.includes('Lose')) {
        compScore++;
    }
    paraScore.textContent = `YOU: ${playerScore}, COMP: ${compScore}`;
    if (playerScore == 5) {
        resetInit('YOU WIN!')
    }
    else if (compScore == 5) {
        resetInit('YOU LOSE!')
    }

    function resetInit(status) {
        resultContainer.appendChild(textWinner);
        textWinner.textContent = status;
        resultContainer.appendChild(resetButton);
        rockButton.removeEventListener('click', gameUI);
        paperButton.removeEventListener('click', gameUI);
        scissorButton.removeEventListener('click', gameUI);
    }
}

// Generate random number and assign it to a choice (rock, paper, or scissors)
function getComputerChoice() {
    const randomNum = (Math.floor(Math.random() * 3));
    return randomNum === 0 ? 'Rock' : randomNum === 1 ? 'Paper' : 'Scissor';
}

// Start the game round by comparing choices and return the result (win, lose, or tie)
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissor') {
        switch(playerSelection) {
            case 'Rock':
                return computerSelection === 'Rock' ? "It's a tie!" :
                computerSelection === 'Paper' ? "You Lose! Paper beats Rock" :
                "You Win! Rock beats Scissor";
            
            case 'Paper':
                return computerSelection === 'Rock' ? "You Win! Paper beats Rock" :
                computerSelection === 'Paper' ? "It's a tie!" :
                "You Lose! Scissor beats Paper";

            case 'Scissor':
                return computerSelection === 'Rock' ? "You Lose! Rock beats Scissor" :
                computerSelection === 'Paper' ? "You Win! Scissor beats Paper" :
                "It's a tie!";
        }
    }

    else {
        return 'Bad Input!';
    }

}

// Start a 5-round game and compare the total score at the end to determine the winner
function gameConsole() {
    let round = 1;
    let playerScore = 0;
    let compScore = 0;

    while (round <= 5) {
        let playerPrompt = prompt(`Round ${round}, Rock Paper Scissor?`);

        if (playerPrompt) {
            const playerSelection = playerPrompt;
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            const showResult = `Round ${round}: ` + `${playerSelection[0].toUpperCase() + 
                playerSelection.slice(1).toLowerCase()} VS ${computerSelection}, ` + result;
  
            if (result.includes('Win')) {
                playerScore++;
                console.log(showResult);
            }
            else if (result.includes('Lose')) {
                compScore++;
                console.log(showResult);
            }
            else if (result.includes('Bad')) {
                round--;
                console.log('Bad input!');
            }
            else {
                console.log(showResult);
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