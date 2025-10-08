// // Sundra Bomjan, SOC C, Multiplication Table

// let number = parseInt(prompt("Multiplication from 1 to n: n = ? "));
// let range = [1,  number]
// const len = 13;
// for (let i = 1; i <= 10; i++){

//   let row_of_i = []
//   for(let j = range[0]; j<=range[1]; j++){
//     row_of_i.push([j, i]);
//   }

//   let row_text = ""

//   for(let i = 0; i<row_of_i.length; i++){

//     let x = row_of_i[i][0];
//     let y = row_of_i[i][1];
//     let line = `${x} x ${y} = ${x*y},`

//     for(let space = line.length; space < len; space++){
//       line += " "
//     }
//     row_text += line

//   }
//   console.log(row_text)
// }

let longestText = "10 x 10 = 100,"
for (let i = 1; i<=10; i++){
  let bag = ''
  for(let j = 1; j<=10; j++){
    let frag = `${j} x ${i} = ${i*j}, `
    for(let s = frag.length; s< longestText.length; s++){
      bag += " "
    }
    bag += frag
  }
  console.log(bag)
}