const levelSelect = document.getElementById('level-select');
const wordGrid = document.getElementById('word-grid');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const message = document.getElementById('message');

const words = {
    easy: "example".toUpperCase(),
    intermediate: "mystery".toUpperCase(),
    advanced: "keyboard".toUpperCase(),
};

let currentLevel = 'easy';
let maxTries = 6;
let tries = 0;

function createGrid() {
    wordGrid.innerHTML = ''; // Clear grid
    const wordLength = words[currentLevel].length;
    for (let i = 0; i < maxTries; i++) {
        for (let j = 0; j < wordLength; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j);
            wordGrid.appendChild(cell);
        }
    }
    // Adjust grid columns based on word length
    wordGrid.style.gridTemplateColumns = `repeat(${wordLength}, 40px)`;
}

function checkGuess() {
    const guess = guessInput.value.toUpperCase();
    if (guess.length !== words[currentLevel].length) {
        message.textContent = `Enter a ${words[currentLevel].length}-letter word.`;
        return;
    }
    if (tries < maxTries) {
        for (let i = 0; i < guess.length; i++) {
            const cell = document.querySelector(`.cell[data-row="${tries}"][data-col="${i}"]`);
            cell.textContent = guess[i];
            if (guess[i] === words[currentLevel][i]) {
                cell.style.backgroundColor = 'green';
            } else if (words[currentLevel].includes(guess[i])) {
                cell.style.backgroundColor = 'yellow';
            } else {
                cell.style.backgroundColor = 'grey';
            }
        }
        if (guess === words[currentLevel]) {
            message.textContent = 'Congratulations! You guessed the word!';
            guessBtn.disabled = true;
        } else if (tries === maxTries - 1) {
            message.textContent = `Game over! The word was ${words[currentLevel]}.`;
            guessBtn.disabled = true;
        }
        tries++;
    }
    guessInput.value = ''; // Clear input
}

levelSelect.addEventListener('change', (e) => {
    currentLevel = e.target.value;
    tries = 0;
    guessBtn.disabled = false;
    message.textContent = '';
    createGrid();
});

guessBtn.addEventListener('click', checkGuess);

createGrid();