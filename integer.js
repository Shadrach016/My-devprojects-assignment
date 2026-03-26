



   


const prompt = require("prompt-sync")();

let num = prompt("Enter any numbers: ");

let countIntegers = (num) => {
    let count = 0;
 if (num == 0) {
        return 1;}
if (num < 0) {
    num = -n;}

    while (num > 0) {  num = (num - (num % 10)) / 10;
        count++;
    }

    return count;
};

console.log("Number of digits:", countIntegers(num));