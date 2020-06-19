import {getSortedArray, getShuffledArray} from './utils.js';

export class BingoCard {
    constructor(id, length, isSorted){
        this.containerId = id;
        this.length = length ?? 9;
        this.isSorted = isSorted ?? true;
    }

    elementOrder = [];     // elementOrder will be set when initialized
}

BingoCard.prototype.getElementOrder = function(){
    return this.elementOrder;
}

BingoCard.prototype.generate = function(){
    const container = document.getElementById(this.containerId);
    const listGrid = document.createElement('ul');
    listGrid.id='listGrid';
    listGrid.classList = "list-grid";
    listGrid.innerHTML = this.addTiles();
    container.innerHTML = '';   // make sure container is empty
    container.append(listGrid);
}

BingoCard.prototype.addTiles = function(){
    let tiles = [];
    this.elementOrder = this.isSorted ? getSortedArray(this.length) : getShuffledArray(this.length);
    this.elementOrder.forEach((item) => {
        const template = `<li class="item color-${item}">${item}</li>`;
        tiles.push(template);
    });
    return tiles.join("");
}

BingoCard.prototype.sort = function(){
    this.isSorted = true;
    this.generate();
}

BingoCard.prototype.shuffle = function(){
    this.isSorted = false;
    this.generate();
}