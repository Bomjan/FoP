// let var1 = 10,
//   var2 = "string",
//   var3 = true,
//   var4 = { place: "Bhutan" },
//   var5 = ["sundra", 24, false];

// let mySet = new Set();

// mySet.add(var1);
// mySet.add(var2);
// mySet.add(var3);
// mySet.add(var4);
// mySet.add(var5);

// console.log(mySet);

let mySet = new Set(["pema", 20, 34, true]);
console.log(mySet.values());

let myArr = [...mySet];
myArr.forEach((val) => {
  console.log(val);
});
