// PART C #2
// Process the temperature data across cities.
// A weather station collects temperatures readings for multiple cities over a week. The data is stored as a 2D array, where each row represents a city and each column represents a day.

let temperatures = [
  [25, 28, 30, 27, 26, 29, 31],
  [22, 24, 13, 25, 26, 26, 22],
  [30, 32, 31, 33, 34, 32, 31],
];
const cityAverages = (data) => {
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

console.log(cityAverages(temperatures));
console.log(weekMax(temperatures));

// Explanation:
// cityAverages -> outer loop iterates over the cities (each row) and it creates a variable called sum with initial value 0. the inner value iterates over the eacch value of the row and adds up in sum variable. then sum / numberOfDays is appended in an empty array which is then returned later.

// weekAverages -> outer loop iterates over each city (each row) and it sets a max value as first value. then the inner loop iterates over each value and updates it only if it is greater (logically updates). then the final max value is figured out and then appended to an array and then returned at the end.
