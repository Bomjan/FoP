// ==========================================
// Loops: Doing stuff over and over again
// ==========================================
// I hate repeating myself. So I use loops to let the computer do the boring work.

// 1. The 'For' Loop
// -----------------
// Use this when I know EXACTLY how many times I want to loop.
// Syntax: for (start; stop; step)
console.log("--- The Classic For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}: Fight!`);
}

// Example: Adding numbers up
let total = 0;
for (let i = 1; i <= 5; i++) {
    total = total + i; // Adding i to my total
}
console.log("Sum of 1 to 5 is:", total);


// 2. The 'While' Loop
// -------------------
// Use this when I'm not sure when to stop. Like "keep eating until full".
console.log("--- The While Loop ---");
let energy = 0;
while (energy < 3) {
    console.log(`Charging up... Energy at ${energy}`);
    energy++;
}
console.log("Fully Charged!");

// 3. The 'Do...While' Loop
// ------------------------
// This one is weird. It runs at least ONCE, even if the condition is false.
// It's like shooting first and asking questions later.
console.log("--- The Do...While Loop ---");
let count = 10;
do {
    console.log(`Count is ${count} (This prints even though 10 is not < 5)`);
    count++;
} while (count < 5); 


// 4. Break and Continue
// ---------------------
// 'break': "Get me out of here!"
// 'continue': "Skip this part, go to next."

console.log("--- Testing Break ---");
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log("Found 3! I'm done.");
        break; // Exits the loop completely
    }
    console.log("Searching...", i);
}

console.log("--- Testing Continue ---");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Ugh, I hate 2. Skipping it.");
        continue; // Jumps to the next iteration
    }
    console.log("Number:", i);
}

// 5. Fun Stuff (Patterns)
// -----------------------
// Making a triangle of stars. Teachers love this question.
console.log("--- My Star Triangle ---");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    // Nested loop! A loop inside a loop.
    for (let j = 0; j < i; j++) {
        stars += "* ";
    }
    console.log(stars);
}