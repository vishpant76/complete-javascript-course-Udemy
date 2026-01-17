'use strict';

const ui = {
  message: document.querySelector('.message'),
  number: document.querySelector('.number'),
  score: document.querySelector('.score'),
  highScore: document.querySelector('.highscore'),
  guess: document.querySelector('.guess'),
  body: document.body,
  checkBtn: document.querySelector('.check'),
  againBtn: document.querySelector('.again'),
};

const gameState = {
  score: 20,
  highScore: 0,
  secretNumber: getRandomNumber(),
  isGameOver: false,
};

function getRandomNumber() {
  const min_val = 1;
  const max_val = 20;
  return Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
}

function setMessage(text) {
  ui.message.textContent = text;
}

function updateScore() {
  ui.score.textContent = gameState.score;
}

function updateStylesOnCorrectAns() {
  ui.body.style.backgroundColor = 'green';
  ui.number.style.width = '30rem';
}

function updateStylesOnGameReset() {
  ui.body.style.backgroundColor = '#222';
  ui.number.style.width = '15rem';
}

function updateHighScore(currentScore) {
  const currentHighScore = gameState.highScore;
  gameState.highScore = Math.max(gameState.highScore, currentScore);
  if (gameState.highScore > currentHighScore) {
    ui.highScore.textContent = gameState.highScore;
  }
}

function toggleCheckButton() {
  ui.checkBtn.disabled = gameState.isGameOver;
}

function gameLogic(guessVal) {
  const secretNum = gameState.secretNumber;
  if (!guessVal) {
    setMessage('Not a Number!');
  } else if (guessVal === secretNum) {
    ui.number.textContent = secretNum;
    setMessage('You got it right!');
    updateStylesOnCorrectAns();
    updateHighScore(gameState.score);
    gameState.isGameOver = true;
    toggleCheckButton();
  } else if (guessVal !== secretNum) {
    gameState.score -= 1;
    if (gameState.score === 0) {
      gameState.isGameOver = true;
      setMessage('You lost the game!');
      updateScore();
      toggleCheckButton();
      return;
    } else if (guessVal > secretNum) {
      setMessage('Too High!!!');
    } else {
      setMessage('Too Low!');
    }
    updateScore();
  }
}

function startGame() {
  const userGuess = Number(ui.guess.value);
  gameLogic(userGuess);
}

function resetGame() {
  ui.score.textContent = 20;
  ui.guess.value = '';
  ui.number.textContent = '?';
  setMessage('Start guessing...');
  updateStylesOnGameReset();
  gameState.score = 20;
  gameState.isGameOver = false;
  toggleCheckButton();
  gameState.secretNumber = getRandomNumber();
}
ui.checkBtn.addEventListener('click', startGame);
ui.againBtn.addEventListener('click', resetGame);
