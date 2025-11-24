
// My Notes on Arrays! 

// Okay, so arrays are basically just lists. 
// Like a shopping list or a list of my favorite anime characters.
// IMPORTANT: Counting starts at 0. Why? I don't know, ask JS creators. 

// * 1. Making Arrays

// This is the easy way. Just use brackets [].
let myFavFruits = ["Apple", "Banana", "Mango"];
console.log("My fruit stash:", myFavFruits);

// The "old school" way using 'new Array()'. 
// I probably won't use this much, but good to know it exists.
let randomNumbers = new Array(10, 20, 30, 40, 50);
console.log("Some random numbers:", randomNumbers);

// 2. Grabbing Stuff from Arrays
// I want the first fruit. Remember index 0!
console.log("First fruit is:", myFavFruits[0]); 

// Getting the last one is a bit tricky. I have to calculate the length minus 1.
console.log("Last fruit is:", myFavFruits[myFavFruits.length - 1]);

// 3. Changing Stuff
// I don't like Bananas anymore. Let's swap it for Grapes.
myFavFruits[1] = "Grapes"; 
console.log("Updated list (No more bananas):", myFavFruits);

// 4. Cool Array Tools (Methods)

// push(): Adds stuff to the END.
myFavFruits.push("Pineapple");
console.log("Added Pineapple:", myFavFruits);

// pop(): Removes the LAST thing. Bye bye Pineapple.
let removedFruit = myFavFruits.pop();
console.log("I ate the:", removedFruit);
console.log("Leftovers:", myFavFruits);

// unshift(): Adds to the START.
myFavFruits.unshift("Strawberry");
console.log("Added Strawberry at the top:", myFavFruits);

// shift(): Removes the FIRST thing.
let firstOne = myFavFruits.shift();
console.log("Removed the first one:", firstOne);

// indexOf(): Where is 'Mango'?
let whereIsMango = myFavFruits.indexOf("Mango");
console.log("Mango is at index:", whereIsMango);

// includes(): Do I have 'Apple'?
console.log("Got apples?", myFavFruits.includes("Apple"));

// 5. Looping (Going through the list)

// The classic 'for' loop. A bit typing-heavy.
console.log("--- Using a normal For Loop ---");
for (let i = 0; i < myFavFruits.length; i++) {
    console.log("Item " + i + ": " + myFavFruits[i]);
}

// The 'for...of' loop. WAY cleaner. I like this one.
console.log("--- Using For...of Loop (My Fav) ---");
for (let fruit of myFavFruits) {
    console.log("Yummy:", fruit);
}

// The 'forEach' method. Looks fancy with the arrow function.
console.log("--- Using forEach ---");
myFavFruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// 6. Arrays inside Arrays (Matrix)
// It's like a grid. Or a spreadsheet.
let myGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Getting the number 5 (row index 1, column index 1)
console.log("Middle number:", myGrid[1][1]); 
