'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);
        const score = Number(document.querySelector('.score').);

        if (!guess) {
            document.querySelector('.message').textContent = 'No Number! 😒';
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number! 🎉 ';
        } else if (guess > secretNumber) {
            document.querySelector('.message').textContent = 'Number Too High!';
            console.log(score);
            //score - 1;
            console.log('Test2');
            document.querySelector('.score').textContent = score;

        } else if (guess < secretNumber) {
            document.querySelector('.message').textContent = 'Number Too Low...';
            console.log('Test');
            score - 1;
            console.log('Test2');
            document.querySelector('.score').textContent = score;
        }
    });
