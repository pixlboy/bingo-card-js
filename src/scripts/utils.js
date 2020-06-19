//Utility Functions

//Returns a random number between given values
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Returns a shuffled array of given length
function getSortedArray(length){
    let list = [...new Array(length)].map((item, idx) => idx + 1);
    return list;
}

//Returns a sorted array of given length
function getShuffledArray(length){
    let list = [];
    do {
        const number = getRandomNumber(1, length);
        if(!list.includes(number)){
            list.push(number);
        }
    } while (list.length < length);
    return list;
}

export {
    getRandomNumber,
    getSortedArray,
    getShuffledArray
}