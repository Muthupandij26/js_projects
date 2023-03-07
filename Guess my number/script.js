'use strict';
console.log(document.querySelector('.message').textContent);
/*
document.querySelector('.message').textContent = "New ❤ Text";
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 26;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener(
    'click',function() {
        const guess = Number( document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        if(!guess) {
            document.querySelector('.message').textContent = "😂 no number clicked";
        }
        // secretNumber and guess is equal
        else if(guess === secretNumber) {
            document.querySelector('.message').textContent = "Correct Number";           
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';

            if(score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }
        else if(guess > secretNumber) {
            document.querySelector('.message').textContent = "Number is to high";           
            document.querySelector('.score').textContent = --score;
        }
        else if(guess < secretNumber) {
            document.querySelector('.message').textContent = "Number is to low";           
            document.querySelector('.score').textContent = --score;
        }
    }
);


// restore all values

document.querySelector('.again').addEventListener(
    'click', function() {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = "Start Processing...";
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = "?";
        document.querySelector('.guess').value = "";
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    }
);