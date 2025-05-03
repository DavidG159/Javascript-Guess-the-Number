'use strict';
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;


document.querySelector('.again').addEventListener('click',
    function () {
        // location.reload();
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('body').style.backgroundColor = '#222';
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.guess').disabled = false;





    }
);


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
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.guess').disabled = true;


            //When player guess a high number
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Number Too High!';
                score = score - 1;
                document.querySelector('.score').textContent = score;

            } else {
                document.querySelector('.message').textContent = 'You Lost! Game Over!';
                document.querySelector('.score').textContent = 0;
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('body').style.backgroundColor = '#AA4A44';
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
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('body').style.backgroundColor = '#AA4A44';
            }
        }
    });
