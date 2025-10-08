// let languages = ['Python', "JavaScript", "C++", "Java"];

// for (element of languages){
//   console.log(element)
// }

// let myString = "JavaScript"

// for (i of myString){
//   console.log(i)
// }


// let myString = new Array('Python', "JavaScript", "C++", "Java");

// for (i in myString){
//   // console.log(i)
//   console.log(myString[i]);
// };

// myString.forEach(element => {
//   console.log(element)
// });

// let data = "Tshering, Deki, Pema, Sonam, Tashi"

// let stdNames = data.split(", ")

// console.log(data.length)
// console.log(stdNames)
// console.log(stdNames.length)

// let myString = stdNames.join(', ')
// console.log(myString)
// console.log(myString.length)

// let myArray = [1, 2, 3, 4, 5, 6, 7]
// let myArray = new Array(
//   [1, 2, 3],
//   ['sonam', "Pema", "Deki"]
// )

// for of 

// for(i of myArray){
//   for (j of i){
//     console.log(j)
//   }
// }

// for in

// for (i in myArray){
//   for ( j in myArray[i]){
//     console.log(myArray[i][j])
//   }
// }


// forEach

// myArray.forEach(i => {
//   i.forEach(j => {
//     console.log(j);
//   });
// });

// console.table(myArray)


// let array1 = [
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1]
// ]

// let array2 = [
//   [2, 2, 2],
//   [2, 2, 2],
//   [2, 2, 2]
// ]

// let resultArray = [
//   [],
//   [],
//   []
// ]

// for (i in array1){
//   for(j in array1[i]){
//     resultArray[i].push(array1[i][j] + array2[i][j])
//   }
// }

// console.log(resultArray)

// let arr = new Array(3).fill(null).map(() => new Array(3).fill(1))

// console.log(arr)


// let arr = new Array(3).fill(null).map((i) => new Array(3).fill(10))
// console.log(arr)
let date = new Date()
console.log(typeof(typeof(date)))