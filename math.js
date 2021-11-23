/*---------- MATH ----------*/

let numbers = [1, 2, 3, 4, 5];

// Compute sum from array of numbers via reduce
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(`The sum is: ${sum}.`);

// Compute multiplication from array of numbers via reduce
const multiply = numbers.reduce(function (result, item) {
  return result * item;
}, 1);
console.log(`The product is: ${multiply}.`);
