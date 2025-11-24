// Hey! This file shows how to use Maps in JavaScript.
// Maps are collections of key-value pairs where keys can be of any type.

const data = new Map([
  ['firstName', "Sonam"],
  ['lastName', "Wangmo"],
  [true, 'isTeacher'],
  ['isMale', false]
])

// 1. Getting just the keys
// This method returns an iterator object with the keys for each element in the Map.
// console.log("Just Keys")
// console.log(data.keys())

// 2. Getting just the values
// This one gives us an iterator object containing the values for each element.
// console.log("Just Values")
// console.log(data.values())

// 3. Getting entries (Key-Value pairs)
// This returns an iterator object with the [key, value] pairs.
// console.log("Just Entries")
// console.log(data.entries())

// 4. Using forEach
// We can loop through the map using forEach. Note that the value comes first, then the key!
// data.forEach((v, k) => console.log(`${k}: ${v}`))

// 5. Using a for...of loop
// This is a nice way to iterate. We can destructure the [key, value] pair directly.
// for (let [key, val] of data){
//   console.log(`${key}= ${val}`)
// }

// 6. Iterating over keys
// We can loop through just the keys and use them to get values.
// for (let k of data.keys()){
//   console.log(data.get(k))
// }

// 7. Iterating over values
// Or we can loop directly through the values if we don't need the keys.
// for (let val of data.values()){
//   console.log(val)
// }

// 8. Iterating over entries manually
// Here we are looping through the entries iterator. 
// e[0] is the key, and e[1] is the value.
for (let e of data.entries()){
  console.log(e[0], e[1])
}