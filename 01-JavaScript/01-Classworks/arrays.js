// ==========================================
// JavaScript Arrays: The Basics
// ==========================================
// Think of an array like a shopping list. It keeps your data in a specific order.
// Important: We start counting from 0, not 1! So the first item is at index 0.

// 1. Creating Arrays
// -------------------
// Method 1: The Array Literal way (This is what most people use!)
let fruits = ["apple", "banana", "orange"];
console.log("Initial fruits:", fruits);

// Method 2: Using the 'new' keyword (A bit old school, but good to know)
let numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// 2. Accessing Elements
// ---------------------
// Let's grab specific items from our list.
console.log("First fruit:", fruits[0]); // apple
console.log("Last fruit:", fruits[fruits.length - 1]); // orange

// 3. Modifying Arrays
// -------------------
// Changed your mind? We can easily swap out items.
fruits[1] = "grape"; // Bye bye banana, hello grape!
console.log("Modified fruits:", fruits);

// 4. Common Array Methods
// -----------------------

// push(): Adds a new item to the end of the list
fruits.push("mango");
console.log("After push:", fruits);

// pop(): Removes the last item (oops, changed my mind about mango)
let lastFruit = fruits.pop();
console.log("Popped fruit:", lastFruit);
console.log("After pop:", fruits);

// unshift(): Adds an item to the very beginning
fruits.unshift("strawberry");
console.log("After unshift:", fruits);

// shift(): Removes the first item
let firstFruit = fruits.shift();
console.log("Shifted fruit:", firstFruit);
console.log("After shift:", fruits);

// indexOf(): Finds where an item is hiding in the list
let orangeIndex = fruits.indexOf("orange");
console.log("Index of orange:", orangeIndex);

// includes(): Checks if an item is in the list (True/False)
console.log("Do we have apples?", fruits.includes("apple"));

// 5. Looping through Arrays
// -------------------------

// The classic 'for' loop - gives you full control
console.log("--- For Loop ---");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// The 'for...of' loop - cleaner and easier to read
console.log("--- For...of Loop ---");
for (let fruit of fruits) {
    console.log(fruit);
}

// The 'forEach' method - a modern, functional way to loop
console.log("--- forEach ---");
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 6. Multi-dimensional Arrays
// ---------------------------
// Arrays inside arrays! Like a grid or a spreadsheet.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix value at [1][1] (middle number):", matrix[1][1]); // 5
