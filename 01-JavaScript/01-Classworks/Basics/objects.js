// ==========================================
// Objects: Grouping Stuff Together
// ==========================================
// Arrays are for lists, but Objects are for describing things.
// Like a profile for a user or stats for a game character.

// 1. Making an Object
// -------------------
// We use curly braces {}.
const myProfile = {
    firstName: "Sundra",
    lastName: "Bomjan",
    age: 20,
    isStudent: true,
    // I can even put functions inside! These are called "methods".
    sayHi: function() {
        return "Hi, I'm " + this.firstName;
    }
};

console.log("My Profile:", myProfile);

// 2. Getting Info Out
// -------------------
// The Dot way (Easier)
console.log("My name is:", myProfile.firstName);

// The Bracket way (Good if the key name is in a variable)
console.log("My last name is:", myProfile["lastName"]);

// Calling the method
console.log(myProfile.sayHi());

// 3. Changing Stuff
// -----------------
myProfile.age = 21; // I got older
myProfile.country = "Bhutan"; // Added a new property!
delete myProfile.isStudent; // I graduated (I wish)

console.log("Updated Profile:", myProfile);

// 4. Destructuring (The Cool ES6 Trick)
// -------------------------------------
// This saves so much typing. I can pull values straight into variables.
const { firstName, age } = myProfile;
console.log(`Yo, ${firstName} is ${age} years old.`);

// 5. Useful Object Tools
// ----------------------
// Get all the keys (labels)
console.log("Keys:", Object.keys(myProfile));

// Get all the values
console.log("Values:", Object.values(myProfile));

// Get everything as pairs
console.log("Entries:", Object.entries(myProfile));
