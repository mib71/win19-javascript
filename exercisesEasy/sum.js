// Write a function sum that takes an array of numbers as
// argument. Return the sum of all the numbers in the array.

// Example
// sum([7, 9]); // -> 16
// sum([1, 2, 3]); // -> 6

console.log(sum([7, 9]));
console.log(sum([1, 2, 3]));

function sum(arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
