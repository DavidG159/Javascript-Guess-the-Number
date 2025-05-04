'use strict';
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//const button = document.querySelector('.check');
const wrong = new Audio('wrong.mp3');
const correct = new Audio('correct.mp3');
const reset = new Audio('reset.mp3');
const gameover = new Audio('gameover.mp3');
const bgm = new Audio('bgm.mp3');



//reset function
document.querySelector('.again').addEventListener('click',
    function () {
        console.log('test');
        // location.reload();
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('body').style.backgroundColor = '#222';
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.ques').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.guess').disabled = false;
        document.querySelector('.ques').classList.remove('stop-animation');
        document.querySelector('.ques').style.animation = 'float 3s ease-in-out infinite';
        reset.play();


    }
);

//check button
document.querySelector('.check').addEventListener('click',
    function () {
        const guess = Number(document.querySelector('.guess').value);

        //when player inputs No Number
        if (!guess) {
            document.querySelector('.message').textContent = 'No Number! 😒';
            wrong.play();

            //When player wins 
        } else if (guess === secretNumber) {
            document.querySelector('.message').textContent = 'Correct Number! 🎉 ';
            (highscore < score) ? highscore = score : highscore = highscore;
            document.querySelector('.highscore').textContent = highscore;
            document.querySelector('.ques').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.guess').disabled = true;
            correct.play();
            document.querySelector('.ques').classList.add('stop-animation');


            //When player guess a high number
        } else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Number Too High!';
                score = score - 1;
                document.querySelector('.score').textContent = score;
                wrong.play();

            } else {
                document.querySelector('.message').textContent = 'You Lost! Game Over!';
                document.querySelector('.score').textContent = 0;
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('body').style.backgroundColor = '#AA4A44';
                document.querySelector('.ques').classList.add('stop-animation');
                gameover.play();
            }
            //When Player guess a low number
        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = 'Number Too Low...';
                score = score - 1;
                document.querySelector('.score').textContent = score;
                wrong.play();
            } else {
                document.querySelector('.message').textContent = 'You Lost! Game Over!';
                document.querySelector('.score').textContent = 0;
                document.querySelector('.ques').textContent = secretNumber;
                document.querySelector('.number').style.width = '30rem';
                document.querySelector('body').style.backgroundColor = '#AA4A44';
                document.querySelector('.ques').classList.add('stop-animation');
                gameover.play();
            }
        }
    });

document.addEventListener('DOMContentLoaded', () => {

    const bgMusic = document.querySelector('.bgm');
    bgMusic.volume = 0.1;


});