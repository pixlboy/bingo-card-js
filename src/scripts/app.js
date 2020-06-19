import {BingoCard} from './card.js';

// Initialize the card
/*
    @param - containerID - String - mandatory
    @param - tiles - Number - optional
    @param - isSorted - Boolean - optional
*/ 
const containerID = 'gridWrapper';
const tiles = 9;
const isSorted = true;

const card = new BingoCard(containerID, tiles, isSorted);

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