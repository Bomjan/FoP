// Given an array of objects, group them by a shared property.
// Example: [{type:"fruit",name:"apple"}, {type:"veg",name:"carrot"}, {type:"fruit",name:"mango"}]

// Transform to: { fruit:["apple","mango"], veg:["carrot"] }

let data = [
  { type: "fruit", name: "apple" },
  { type: "veg", name: "carrot" },
  { type: "fruit", name: "mango" },
];

let g = data.reduce((gr, curr) => {
  gr[curr.type] = gr[curr.type] || [];
  gr[curr.type].push(curr.name);
  return gr;
}, {});

console.log(g);

// alternatively,

// let newGroup = {};

// data.forEach((row) => {
//   newGroup[row.type] = data
//     .filter((i) => i.type === row.type)
//     .map((i) => i.name);
// });

// console.log(newGroup);
