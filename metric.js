const prompt = require("prompt-sync")();

function getNumbers() {
    let numbers = [];
    for (let num1 = 0; num1 < 10; num1++) {
        numbers[num1] = Number(prompt("Enter a number: "));
    }
    return numbers;
}

function mean(numbers) {
    let sum = 0;
    for (let num1 = 0; num1 < numbers.length; num1++) {
        sum = sum + numbers[num1];
    }
    return sum / numbers.length;
}

function mode(numbers) {
    let maxCount = 0;
    let modeValue = numbers[0];

    for (let num1 = 0; num1 < numbers.length; num1++) {
        let count = 0;
        for (let num2 = 0; num2 < numbers.length; num2++) {
            if (numbers[num1] === numbers[num2]) count++;
        }
        if (count > maxCount) {
            maxCount = count;
            modeValue = numbers[num1];
        }
    }

    if (maxCount === 1) {
        let highest = numbers[0];
        for (let num1 = 1; num1 < numbers.length; num1++) {
            if (numbers[num1] > highest) highest = numbers[num1];
        }
        return highest;
    }

    return modeValue;
}

function median(numbers) {
    let digit = [];
    for (let num1 = 0; num1 < numbers.length; num1++) digit[num1] = numbers[num1];

    for (let num1 = 0; num1 <= numbers.length / 2; num1++) {
        let minIndex = num1;
        for (let num2 = num1 + 1; num2 < digit.length; num2++) {
            if (digit[num2] < digit[minIndex]) minIndex = num2;
        }
        let temp = digit[num1];
        digit[num1] = digit[minIndex];
        digit[minIndex] = temp;
    }

    let n = digit.length;

    if (n % 2 === 0) {
        let mid1 = n / 2 - 1; 
        let mid2 = n / 2;     
        return (digit[mid1] + digit[mid2]) / 2;
    } else {
        let mid = (n - 1) / 2; 
        return digit[mid];
    }
}

// Main program
let numbers = getNumbers();
console.log("Numbers:", numbers);
console.log("Mean:", mean(numbers));
console.log("Median:", median(numbers));
console.log("Mode/Highest:", mode(numbers));