'use strict';

let message = document.querySelector('.message');
const ansNum = document.querySelector('.number');
let score = 20;
let highScore = 0;

function getRandomNumber() {
  const min_val = 1;
  const max_val = 20;
  return Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
}

// const ansVal = getRandomNumber()
let secretNumber = getRandomNumber();
// ansNum.textContent = getRandomNumber();
// const ansVal = Number(ansNum.textContent);

document.querySelector('.check').addEventListener('click', function () {
  // console.log(document.querySelector('.guess').value);
  const guess = Number(document.querySelector('.guess').value);
  // const score = document.querySelector('.score');
  // console.log(guess);
  if (!guess) {
    message.textContent = 'Not a Number!';
  } else if (guess === secretNumber) {
    highScore = Math.max(highScore, score);
    document.querySelector('.highscore').textContent = highScore;
    ansNum.textContent = secretNumber;
    message.textContent = 'You got it right!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    score -= 1;
    if (score == 0) {
      message.textContent = 'You lost the game!';
      document.querySelector('.score').textContent = score;
      document.querySelector('.check').disabled = true;
      return;
    }
    message.textContent = 'Too High!!!';
  } else if (guess < secretNumber) {
    score -= 1;
    if (score == 0) {
      message.textContent = 'You lost the game!';
      document.querySelector('.score').textContent = score;
      document.querySelector('.check').disabled = true;
      return;
    }
    message.textContent = 'Too Low!';
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = getRandomNumber();
  document.querySelector('.guess').value = '';
  ansNum.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
});
