// ==========================================
// Arrays Part 2: The Advanced Stuff
// ==========================================
// Okay, I learned the basics. Now let's do some cool tricks.
// Uncomment the code to see it work!

// 1. Strings are just Arrays?
// ---------------------------
// Mind blown: A string is basically an array of letters.
// let myName = "JavaScript";
// for (let letter of myName){
//   console.log(letter); // Prints each letter one by one
// }

// 2. Converting Strings <-> Arrays
// --------------------------------
// 'split' chops a string into pieces. 'join' glues them back together.

// let studentString = "Tom, Jerry, Mickey, Donald";
// console.log("String:", studentString);

// // Chop it up by the comma!
// let studentList = studentString.split(", ");
// console.log("List:", studentList);

// // Glue it back with a pipe!
// let newString = studentList.join(" | ");
// console.log("New String:", newString);


// 3. Nested Arrays (Inception)
// ----------------------------
// Arrays inside arrays. It's like a grid.

// let grid = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// // How to loop through a grid? Nested loops!
// console.log("--- Grid Walk ---");
// for (let row of grid){
//   for (let num of row){
//     console.log(num);
//   }
// }


// 4. Matrix Math (Don't panic)
// ----------------------------
// Adding two grids together.
// let matrixA = [
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1]
// ];

// let matrixB = [
//   [2, 2, 2],
//   [2, 2, 2],
//   [2, 2, 2]
// ];

// let result = [[], [], []];

// for (let i in matrixA){
//   for(let j in matrixA[i]){
//     // Adding the matching spots
//     result[i].push(matrixA[i][j] + matrixB[i][j]);
//   }
// }
// console.log("Result Matrix:", result);


// 5. Pro Move: Creating Arrays Fast
// ---------------------------------
// Making a 3x3 grid of 1s in one line.
// let fastGrid = new Array(3).fill(null).map(() => new Array(3).fill(1));
// console.log(fastGrid);

// Random fact I found:
let now = new Date();
console.log("Type of type:", typeof(typeof(now))); // "string". Weird, right?