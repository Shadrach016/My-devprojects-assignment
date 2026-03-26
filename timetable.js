const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: ")); 

for (let number2 = 1; number2 <=12; number2++) {

    
         console.log(num,"x",number2,"=" + (num*number2) )
}