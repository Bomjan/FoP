let array = [];
let value = [1, 8];

for (let i = 1; i < 10; i ++){
  let temp = [];
  for (let j = value[0]; j < value[1]; j++){
    const u = `${j} x ${i} = ${i*j}`;
    temp.push([u]);
  }
  array.push(temp);
}

console.log(array);