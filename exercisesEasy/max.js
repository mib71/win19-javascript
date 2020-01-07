// Write a function max that takes two numbers as argument. Return
// the largest number of the two. When you're done, write another
// function min that works the same, but instead returns the
// smallest number.

// Example
// max(1, 2) // -> 2
// max(25, 4) // -> 25

console.log(max(1, 2));
console.log(max(25, 4));

function max(n1, n2) {
  if (n1 > n2) {
    return n1;
  }
  return n2;
}

console.log(min(1, 2));
console.log(min(25, 4));

function min(n1, n2) {
  if (n1 < n2) {
    return n1;
  }
  return n2;
}
