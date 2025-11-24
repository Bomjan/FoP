// ==========================================
// JavaScript Loops: Iteration
// ==========================================
// Loops are just a way to repeat things so you don't have to write the same code over and over.

// 1. The 'For' Loop
// -----------------
// Syntax: for (start; stop; step)
// Best when you know exactly how many times you want to loop.
console.log("--- For Loop ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

// Example: Adding up numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum of 1 to 5:", sum);


// 2. The 'While' Loop
// -------------------
// Syntax: while (condition is true)
// Use this when you're not sure how many times you need to loop (like waiting for a user to type something).
console.log("--- While Loop ---");
let count = 0;
while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
}

// 3. The 'Do...While' Loop
// ------------------------
// Syntax: do { ... } while (condition)
// This one is special: it ALWAYS runs at least once, even if the condition is false from the start.
console.log("--- Do...While Loop ---");
let num = 5;
do {
    console.log(`Number is ${num}`);
    num--;
} while (num > 5); // See? It printed 5 even though 5 is not greater than 5!


// 4. Break and Continue
// ---------------------
// 'break': "Stop the loop right now!"
// 'continue': "Skip this one, go to the next one."

console.log("--- Break Example ---");
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        console.log("Breaking at 3");
        break;
    }
    console.log(i);
}

console.log("--- Continue Example ---");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        console.log("Skipping 2");
        continue;
    }
    console.log(i);
}

// 5. Practical Examples
// ---------------------

// Example: Making a star pattern (Classic interview question!)
console.log("--- Star Pattern ---");
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 0; j < i; j++) {
        stars += "* ";
    }
    console.log(stars);
}