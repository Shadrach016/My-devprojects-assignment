const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number between 1 and 20: "));

for (let a = 1; a <= num; a++) {
    console.log("Multiplication table of " + a);

    for (let b = 1; b <= 12; b++) {
        console.log(a + " x " + b + " = " + (a * b));
    }

    console.log("---------------");
}