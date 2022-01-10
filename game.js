function computerPlay(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = ["rock", "paper", "scissors"];

const result = computerPlay(array);
console.log(result);
