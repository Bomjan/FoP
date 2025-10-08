alert("Welcome to Matrix Transpose! ")
let r = parseInt(prompt("Enter number of rows: "))
let c = parseInt(prompt("Enter number of columns: "))

let matrix =[]
for (let i = 0; i<r; i++){
  let row = []
  for(let j = 0; j<c; j++){
    let n = Number(prompt(`Enter the value at [${i}][${j}]`))
    row.push(n)
  }
  matrix.push(row)
}

let transposed =[]
for(let i = 0; i<matrix[0].length; i++){
  let row = []
  for (let j=0; j<matrix.length; j++){
    row.push(matrix[j][i])
  }
  transposed.push(row)
}

console.log(matrix)
console.log(transposed)
