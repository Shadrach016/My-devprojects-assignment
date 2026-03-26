const prompt = require("prompt-sync")();

let num = Number(prompt("Enter any number: "));

function factorial(n) {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log("Factorial is:", factorial(num));