

const prompt = require("prompt-sync")();

let sub1 = Number(prompt("Enter score for Math: "));
let sub2 = Number(prompt("Enter score for English: "));
let sub3 = Number(prompt("Enter score for Physics: "));
let sub4 = Number(prompt("Enter score for Chemistry: "));
let sub5 = Number(prompt("Enter score for Biology: "));

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let average = total / 5;


let mark = (average >= 70) ? "A"
          : (average >= 60) ? "B"
          : (average >= 50) ? "C"
          : "F";


let highest = sub1;
highest = (sub2 > highest) ? sub2 : highest;
highest = (sub3 > highest) ? sub3 : highest;
highest = (sub4 > highest) ? sub4 : highest;
highest = (sub5 > highest) ? sub5 : highest;

console.log("Grade:", mark);
console.log("Your top score is:", highest);
console.log(average);

