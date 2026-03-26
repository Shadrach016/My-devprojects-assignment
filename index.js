const prompt = require("prompt-sync")();

function getNumbers() {
    let numbers = [];

    for (let num1 = 0; num1 < 5; num1++) { 
        numbers[num1] = Number(prompt("Enter a number: "));
    }

    return numbers;
}

function findIndexes(num, target) {

    for (let num1 = 0; num1 < num.length; num1++) {

        for (let num2 = num1 + 1; num2 < num.length; num2++) {

            if (num[num1] + num[num2] === target) {
                return [num1, num2];
            }

        }
    }

    return "No match found";
}

let numbers = getNumbers();
let target = Number(prompt("Enter target: "));

console.log("Numbers:", numbers);
console.log("Result:", findIndexes(numbers, target));