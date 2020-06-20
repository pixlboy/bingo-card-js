import {BingoCard} from './card.js';

// Initialize the card
const card = new BingoCard('gridWrapper', 9, true);

//generate card
card.generate();

// Event Listeners
const sortBtn = document.getElementById('sort');
const shuffleBtn = document.getElementById('shuffle');

sortBtn.addEventListener('click', () => {
    card.sort();
});

shuffleBtn.addEventListener('click', () => {
    card.shuffle();
});