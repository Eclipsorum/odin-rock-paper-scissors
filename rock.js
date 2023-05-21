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