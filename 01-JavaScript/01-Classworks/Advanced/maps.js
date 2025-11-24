// ==========================================
// Maps: Objects on Steroids
// ==========================================
// Maps are like Objects, but better in some ways.
// In Objects, keys are always strings. In Maps, keys can be ANYTHING.
// Even a boolean or another object!

const myMap = new Map([
  ['name', "Sundra"],
  ['role', "Student"],
  [true, 'isAwesome'], // See? Boolean key!
  [1, 'NumberOne']     // Number key!
]);

// 1. Just the Keys
// ----------------
// console.log("--- Keys ---");
// console.log(myMap.keys());

// 2. Just the Values
// ------------------
// console.log("--- Values ---");
// console.log(myMap.values());

// 3. Everything (Entries)
// -----------------------
// console.log("--- Entries ---");
// console.log(myMap.entries());

// 4. Looping with forEach
// -----------------------
// Weird thing: Value comes FIRST, then Key.
// myMap.forEach((val, key) => {
//   console.log(`${key} => ${val}`);
// });

// 5. Looping with for...of (My Fav)
// ---------------------------------
// This looks so clean. I love destructuring.
// for (let [key, val] of myMap) {
//   console.log(`${key} is ${val}`);
// }

// 6. Just looping keys
// --------------------
// for (let k of myMap.keys()) {
//   console.log("Key:", k);
// }

// 7. Just looping values
// ----------------------
// for (let v of myMap.values()) {
//   console.log("Value:", v);
// }

// 8. The Manual Way
// -----------------
// If I really want to see the raw entry array.
console.log("--- Manual Loop ---");
for (let entry of myMap.entries()) {
  console.log(entry[0], entry[1]);
}