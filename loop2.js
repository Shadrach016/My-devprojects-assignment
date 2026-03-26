

const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter a number: "));                             2
let num2 = Number(prompt("Enter a number: "));                             3	
let num3 = Number(prompt("Enter a number: "));                             4
let num4 = Number(prompt("Enter a number: "));                             5
let num5 = Number(prompt("Enter a number: "));                             6


let highest = num1;
highest = (num2 > highest) ? num2 : highest;
highest = (num3 > highest) ? num3 : highest;
highest = (num4 > highest) ? num4 : highest;
highest = (num5 > highest) ? num5 : highest;

 

let second = num1 < highest ? num1 : 0;
 second = (num2 < highest && num2 > num3) ? num2 : second;
 second = (num3 < highest > num4) ? num3 : second;
 second = (num4 < highest > num5) ? num4 : second;
 second = (num5 < highest > num5) ? num5 : second;
 














console.log("The highest number is:", highest);
