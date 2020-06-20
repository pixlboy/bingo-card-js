import {getSortedArray, getShuffledArray, getRandomNumber} from './utils.js';

export class BingoCard {
    /*
        @param - containerID - String - mandatory
        @param - tiles - Number - optional
        @param - isSorted - Boolean - optional
    */ 
    constructor(containerID, length, isSorted){
        this.containerID = containerID;
        this.length = length ?? 9;
        this.isSorted = isSorted ?? true;
    }

    elementOrder = [];     // elementOrder will be set when initialized
}

BingoCard.prototype.getElementOrder = function(){
    return this.elementOrder;
}

BingoCard.prototype.generate = function(){
    const container = document.getElementById(this.containerID);
    container.innerHTML = '';       // making sure the contents of container are empty
    container.append(this.addTiles());
}

BingoCard.prototype.addTiles = function(){
    const list = document.createElement('ul');
    list.classList = "list-grid";
    this.elementOrder = this.isSorted ? getSortedArray(this.length) : getShuffledArray(this.length);
    this.elementOrder.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = item;
        listItem.classList = `item color-${getRandomNumber(1,5)}`;
        list.appendChild(listItem);
    });
    return list;
}

BingoCard.prototype.sort = function(){
    this.isSorted = true;
    this.generate();
}

BingoCard.prototype.shuffle = function(){
    this.isSorted = false;
    this.generate();
}