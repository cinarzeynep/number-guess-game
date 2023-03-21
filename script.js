let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += `${userGuess} `;

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.color = '#FFCB77';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Game Over!';
        lastResult.style.color = '#3D0814';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (userGuess < randomNumber && randomNumber - userGuess >= 10) {
            lastResult.textContent = 'Wrong!';
            lastResult.style.color = '#721121';
            lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess < randomNumber && randomNumber - userGuess < 10) {
            lastResult.textContent = 'Wrong!';
            lastResult.style.color = '#721121';
            lowOrHi.textContent = 'Last guess wass low.';
    } else if (userGuess > randomNumber && userGuess - randomNumber >= 10) {
           lastResult.textContent = 'Wrong!';
           lastResult.style.color = '#721121';
           lowOrHi.textContent = 'Last guess was too high!';
    } else {
            lastResult.textContent = 'Wrong!';
            lastResult.style.color = '#721121';
            lowOrHi.textContent = 'Last guess was high.';
           } 


    guessCount++;
    guessField.value = '';
    guessField.focus();

    };


guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    const main = document.getElementById('main');
    main.insertAdjacentHTML("beforeend", '<button id="resetButton">Start new game</button>');
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }

    main.removeChild(main.lastChild);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus = '';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}