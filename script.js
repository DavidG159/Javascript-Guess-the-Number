'use strict';
let score = 20;
let highscore = 0;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);

        //when player inputs No Number
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number! 😒';

            //When player wins 
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number! 🎉 ';
            (highscore < score) ? highscore = score : highscore = highscore;
            document.querySelector('.highscore').textContent = highscore;

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            //When player guess a high number
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Number Too High!';
                score = score - 1;
                document.querySelector('.score').textContent = score;

            } else {
                document.querySelector('.message').textContent = 'You Lost! Game Over!';
                document.querySelector('.score').textContent = 0;
            }
            //When Player guess a low number
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Number Too Low...';
                score = score - 1;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You Lost! Game Over!';
                document.querySelector('.score').textContent = 0;
            }
        }
    });
