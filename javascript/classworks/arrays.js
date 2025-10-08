// let data = [1, 5, 4, 8, 9];
// console.log(data);

// let nums = new Array(10, 45, 7, 8);
// console.log(Array.isArray(nums));

// let si = 123;
// console.log(Array.isArray(si))

// let myArray = new Array("Bomjan", "Sujal", "Sangay");
// myArray[2] = 34;

// console.log(myArray)
// console.log(Array.isArray(myArray))

// const array1 = ["Bomjan", 18, 500];
// array1[0] = 465;

// console.log(`The last item of the array is ${array1[array1.length-1]}`);

// let numbers = [1, 2, 4];
// numbers[6] = 67;

// console.log(numbers)
// console.log(numbers.length)


// const data = ["Pema", 20, 2002, "Bhutan", true]
// console.log(data)

// console.log(`The length of the array is ${data.length}`)
// console.log(`At index 1 : ${data[1]}, at index 3 : ${data[3]}`)
// console.log(`The last element of the array is ${data[data.length -1]}`)
// console.log('Updating please wait...')
// data[3] = "Canada"
// console.log(data)

// * Adding element in the array

// let myMeals = ["Rice", "Potato", "Bread"];
// myMeals.push("Coconut", "Egg");
// console.log(myMeals);
// myMeals.unshift("Toast")
// console.log(myMeals)

// myMeals.splice(-4, 0, "haha")
// console.log(myMeals)

// const bioData = ["Sundra", 20, 2005, "Sleeping", "Doctorate"]
// bioData.push("Vanilla Milk Shakes");
// bioData.unshift(12250090);
// bioData.splice(3, 1, 2024)
// console.log(bioData)

// let evenNumbers = [2, 4, 6,  8];
// let oddNumbers = [1, 3, 5, 7];
// let joinedArrays = evenNumbers.concat(oddNumbers);
// let joinedArray2 = joinedArrays.concat(0, 1, 0, 1)

// console.log(joinedArrays)

// evenNumbers.pop()
// evenNumbers.shift()
// console.log(evenNumbers.indexOf())

// let numbers = [1, 2, 3, 4, 5, 1, 2, 7];
// let index1 = numbers.indexOf(2);
// console.log(index1)

// let index2 = numbers.indexOf(2, 3);
// console.log(index2)

// console.log(numbers.lastIndexOf(2))


// let age = [1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005]

// for(let i = 0; i<age.length; i++){
//   console.log(age[i]);
// }

// let i = 0;
// while(i<age.length){
//   console.log(age[i])
//   i++;
// }

// do{
//   console.log(age[i])
//   i++;
// } while(i < age.length);

// let birthYear = [2000, 2001, 2002, 2003, 2004, 2005];
// for(let i = 0; i < birthYear.length; i++){
//   let age = 2025 -birthYear[i]
//   console.log(`You are ${age} and ${age<23? "You are too young" : "You are aging gracefully"}`);
// }

// let bill = [199, 286, 400];
// for (let i = 0; i < bill.length; i++){
//   let amt = bill[i]
//   let condition = amt > 50 && amt < 300;
//   console.log(`Your bill is ${amt}, and your tip ${condition? 15 : 20}% is ${condition? Math.round(0.15 *amt): Math.round(0.2*amt)}`);
// }

// let myArr = [
//   ["Bomjan", 500],
//   ["Sundra", 900],
//   ["Anyone", 890]
// ]

// for (let row = 0; row < myArr.length; row++){
//   for (let col = 0; col < myArr[row].length; col++){
//     console.log(myArr[row][col])
//   }
// }


