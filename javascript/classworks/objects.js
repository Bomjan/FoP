const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 2025-1970,
    job: "Doctor",
    friends: ["john", "Dean", "Paul"],

    greet: () => console.log(`Hello ${person.firstName} ${person.lastName}`)
};

// console.log(`Hi everyone! My name is ${person.firstName} ${person.lastName} and i am ${person.age} years old ${person.job}. My best ${person.friends.length} friends are ${person.friends[0]}, ${person.friends[1]} and ${person.friends[2]}`)

person.add = function(){
    console.log(`${this.firstName} ${this.lastName}`);
}

// person.greet()

const count = (n) => {
    if (n == 0) return console.log("Go!!!!");
    console.clear();
    console.log(`In ${n} s...`);
    setTimeout(() => count(n-1), 1000);
};

count(10);