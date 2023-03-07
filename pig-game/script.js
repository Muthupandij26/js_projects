'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0E1 = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0E1 = document.querySelector('#current--0');
const current1E1 = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores,currentScore,activePlayer,playing;

const init = function () {
    //starting conditions
        scores = [0,0];
        currentScore = 0;
        activePlayer = 0;
        playing = true;

        //starting conditions 
        score0E1.textContent = 0;
        score1El.textContent = 0;
        current0E1.textContent = 0;
        current1E1.textContent = 0;
        
        diceEl.classList.add('hidden');
        player0El.classList.remove('player--winner');
        player1El.classList.remove('player--winner');
        player0El.classList.add('player--active');
        player1El.classList.remove('player--active');

};
init();


const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}



//Rolling dice functionality
btnRoll.addEventListener('click', function() {

    if(playing) {
    //generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //display dice img
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // check for rolled 1 
    if(dice !== 1) {
        currentScore += dice; // currentScore = currentScore + 1;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0E1.textContent = currentScore;
    }
    else {
        //switch next player
        switchPlayer();

    }
}
});

btnHold.addEventListener('click', function() {
    if(playing) 
    {
    //add current score to the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    //check if player score is >=100 finish the game
    if(scores[activePlayer] >= 100) {
        playing =false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
    }

    //switch to the next player
    else {
        switchPlayer();
    }
}
});


// reset all values

btnNew.addEventListener('click', init);