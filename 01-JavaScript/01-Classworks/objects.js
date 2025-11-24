// ==========================================
// JavaScript Objects: Key-Value Pairs
// ==========================================
// Objects are super useful. They let you group related data together, like a profile for a person.
// Instead of a list (like arrays), we use "keys" to name each piece of data.

// 1. Creating Objects
// -------------------
// The "Object Literal" way (This is the standard way to do it)
const person = {
    firstName: "Sundra",
    lastName: "Bomjan",
    age: 20,
    isStudent: true,
    // Methods: We can even put functions inside objects!
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Person:", person);

// 2. Accessing Properties
// -----------------------
// Dot notation (The easy way)
console.log("First Name:", person.firstName);

// Bracket notation (Use this if the key name is in a variable)
console.log("Last Name:", person["lastName"]);

// Calling a method (Don't forget the parentheses!)
console.log("Full Name:", person.fullName());

// 3. Modifying Objects
// --------------------
person.age = 21; // Happy Birthday!
person.country = "Bhutan"; // Adding a whole new property
delete person.isStudent; // Removing a property

console.log("Updated Person:", person);

// 4. Object Destructuring (The cool ES6 way)
// ------------------------------------------
// This pulls values out of the object and puts them into variables for you.
const { firstName, age } = person;
console.log(`Destructured: ${firstName} is ${age} years old.`);

// 5. Object Methods (Static)
// --------------------------
// Object.keys(): Gives you a list of all the property names
console.log("Keys:", Object.keys(person));

// Object.values(): Gives you a list of all the values
console.log("Values:", Object.values(person));

// Object.entries(): Gives you pairs of [key, value]
console.log("Entries:", Object.entries(person));
