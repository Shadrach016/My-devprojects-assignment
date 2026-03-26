const prompt = require("prompt-sync")();

function getUserInput() {
    let previousPeriod = prompt("Enter date of your last period (YYYY-MM-DD): ");
    let cycleLength = Number(prompt("Enter your average cycle length (e.g. 28): "));
    let periodDuration = Number(prompt("Enter your average period duration (in days):"));
    
    return { previousPeriod, cycleLength, periodDuration };
}

function calculateNextPeriod(previousPeriod, cycleLength) {
    let previousDate = new Date(previousPeriod);
    let nextPeriod = new Date(previousDate);
    nextPeriod.setDate(previousDate.getDate() + cycleLength);
    
    return nextPeriod;
}

// ✅ New function
function calculatePeriodEnd(startDate, duration) {
    let endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + duration - 1);
    return endDate;
}

function calculateOvulation(nextPeriod) {
    let ovulation = new Date(nextPeriod);
    ovulation.setDate(nextPeriod.getDate() - 14);
    
    return ovulation;
}

function calculateFertilityWindow(ovulation) {
    let fertileStart = new Date(ovulation);
    fertileStart.setDate(ovulation.getDate() - 5);

    let fertileEnd = new Date(ovulation);

    return { fertileStart, fertileEnd };
}

function displayResults(nextPeriod, periodEnd, ovulation, fertileStart, fertileEnd) {
    console.log("\n=== RESULTS ===");
    console.log("Next Period Starts:", nextPeriod.toDateString());
    console.log("Next Period Ends:", periodEnd.toDateString());
    console.log("Ovulation Date:", ovulation.toDateString());
    console.log(
        "Fertility Window:",
        fertileStart.toDateString(),
        "to",
        fertileEnd.toDateString()
    );
    console.log("Thank you for using this app");
}

function main() {
    let { previousPeriod, cycleLength, periodDuration } = getUserInput();

    let nextPeriod = calculateNextPeriod(previousPeriod, cycleLength);
    let periodEnd = calculatePeriodEnd(nextPeriod, periodDuration);
    let ovulation = calculateOvulation(nextPeriod);
    let { fertileStart, fertileEnd } = calculateFertilityWindow(ovulation);

    displayResults(nextPeriod, periodEnd, ovulation, fertileStart, fertileEnd);
}

main();