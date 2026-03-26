const prompt = require("prompt-sync")();

// Glo data bundles
const bundles = [
    { name: "500MB - 1 Day", price: 100 },
    { name: "1GB - 7 Days", price: 300 },
    { name: "2GB - 14 Days", price: 500 },
    { name: "5GB - 30 Days", price: 1500 },
];

console.log("Welcome to Glo Data Purchase Menu");

// Display bundles
for (let i = 0; i < bundles.length; i++) {
    console.log(`${i + 1}. ${bundles[i].name} - N${bundles[i].price}`);
}

// Ask user to choose
let choice = Number(prompt("Enter your choice (1-4): "));

if (choice >= 1 && choice <= bundles.length) {
    console.log(`You selected: ${bundles[choice - 1].name}`);
    console.log(`Please dial the USSD code *777*${choice}# to confirm your purchase.`);
} else {
    console.log("Invalid choice. Please try again.");
}