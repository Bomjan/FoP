alert("Welcome To Matrix Transpose")

let rows = parseInt(prompt("Enter the rows of matrix"));
let cols = parseInt(prompt("Enter the cols of matrix"));
let matrix = [];
for (let i = 0; i<rows; i++){
  let row = [];
  for (let j = 0; j<cols; j++){
    let item = Number(prompt(`Enter the value of the place [${i}][${j}]`));
    row.push(item);
  }
  matrix.push(row);
}

let transposedMatrix = [];
for(let i = 0; i < matrix[0].length; i++){
  let row = []
  for(let j = 0; j < matrix.length; j++){
    row.push(matrix[j][i])
  }
  transposedMatrix.push(row)
}
console.log(matrix)
console.log("The transposed matrix is")
console.log(transposedMatrix)