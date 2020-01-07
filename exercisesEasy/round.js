/**Write a function round that takes a number as argument. Return the number rounded to nearest whole number.

Tip: use the Math object */
// Example
// round(2.5); // -> 3
// round(2.1); // -> 2
// round(2.7); // -> 3

console.log(round(2.5));
console.log(round(2.1));
console.log(round(2.7));

function round(n) {
  return Math.round(n);
}
