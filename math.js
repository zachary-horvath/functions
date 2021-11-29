/*---------- MATH ----------*/

console.log("Let's do some math!");
console.log("-------------------");

let numbers = [1, 2, 3, 4, 5];

// Compute sum from array of numbers via reduce
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(`The sum of [${numbers}] is ${sum}.`);

// Compute multiplication from array of numbers via reduce
const multiply = numbers.reduce(function (result, item) {
  return result * item;
}, 1);
console.log(`The product of [${numbers}] is ${multiply}.`);

// Compute average from array of numbers via reduce
const average =
  numbers.reduce(function (result, item) {
    return result + item;
  }, 0) / numbers.length;
console.log(`The average of [${numbers}] is ${average}.`);

// Compute factorial of n
const factorial = (n) => {
  return n === 0 ? 1 : n * factorial(n - 1);
};
console.log(`The factorial of 10 is ${factorial(10)}.`);
