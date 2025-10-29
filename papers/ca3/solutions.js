const avg = (data) => {
  let avgs = [];
  for (let city of data) {
    let sum = 0;
    for (let temp of city) {
      sum += temp;
    }
    avgs.push(sum / city.length);
  }
  return avgs;
};

const weekMax = (data) => {
  let maxs = [];
  for (let city of data) {
    let max = city[0];
    for (let t of city) {
      max = t > max ? t : max;
    }
    maxs.push(max);
  }
  return maxs;
};

console.log(
  weekMax([
    [3, 6, 8, 8],
    [5, 7, 3, 2],
    [4, 6, 9, 0],
  ])
);
