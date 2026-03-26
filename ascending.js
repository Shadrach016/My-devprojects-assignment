const prompt = require("prompt-sync")();

function getNumbers() {
    let numbers = [];
    for (let num1 = 0; num1 < 10; num1++) {
        numbers[num1] = Number(prompt("Enter a number: "));
    }
    return numbers;
}

function sortNum(numbers) {
    let digit = [];

    for (let num1 = 0; num1 < numbers.length; num1++) {
        digit[num1] = numbers[num1];
    }

    for (let num1 = 0; num1 < numbers.length - 1; num1++) {
        let minIndex = num1;

        for (let num2 = num1 + 1; num2 < digit.length; num2++) {
            if (digit[num2] < digit[minIndex]) {
                minIndex = num2;
            }
        }

        let temp = digit[num1];
        digit[num1] = digit[minIndex];
        digit[minIndex] = temp;
    }

    return digit;
}

let numbers = getNumbers();
console.log("Sorted:", sortNum(numbers));