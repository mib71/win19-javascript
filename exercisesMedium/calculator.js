// Write a function that takes an arithmetic expression as a
// string argument. Perform the calculation and return the result
// as a number.
// Example
// calculator("1 + 1") // -> 2

console.log(calculator("1 + 1"));

function calculator(str) {
  return eval(str);
}
