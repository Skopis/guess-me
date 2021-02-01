'use strict';

function _getRandomWrongGuess() {
    var wrongGuesses = ['Tommy', 'Dubi', 'Roni', 'Kuki', 'Shuki', 'Bubi'];
    var randomIdx = _getRandomIntInclusive(0, wrongGuesses.length)
    return wrongGuesses[randomIdx];
}

//get random int - The minimum is inclusive and the maximum is NOT inclusive 
function _getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function _getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key].txt === value);
}