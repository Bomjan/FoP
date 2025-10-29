// PART C #1

// Calculate the bonus of employees in a company.
// A company maintains an array of employees salaries. They want to apply bonus only to employees earning less than 50000. Write a function that:

// * Accepts an array of salaries as input
// * Returns an array with updated salaries after adding 10% bonus to eligible employees.
// * Prints the updated salaries

const applyBonus = (salaries) => {
  let updated = [];
  for (let salary of salaries) {
    updated.push(salary > 50000 ? salary : salary * 1.1);
  }
  console.log(updated);
};

applyBonus([40000, 55000, 30000, 60000]);

// Explaination:
// the function creates an empty array to store updated values. then the loop iterates over the salaries and appends inside the array conditionally like only if salary is less than 50000, we multiply with 1.1 because that adds 10% to the initial amount.

// You might want to know how multiplying 1.1 adds 10% to the initial amount. and here is how...
// basic idea is to do ->
// amount + amount * (10/100)
// amount(1 + 10/100)
// amount(1+0.1) -> amount * 1.1
// That was just saf
