// Write a function first that takes an array as argument. The
// function should return the first value in the array. When
// you're done, write another function last that returns the last
// value in the array.

// Example
// first([4, 9, 3]) // -> 4
// last([4, 9, 3]) // -> 3

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function first(ar) {
  return ar[0];
}

function last(ar) {
  let last = ar.length;
  return ar[last - 1];
}

console.log(first(myArray));
console.log(last(myArray));
