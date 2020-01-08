/**Write a function leap that takes a number parameter year and
 *  returns if the year is leap or not.
 * A tip is to make use of the remainder operator */

// Example
// leap(2012) -> true // leap(2011) -> false

function leap(n) {
  return n % 100 === 0 ? n % 400 === 0 : n % 4 === 0;
}

console.log(leap(2016));
console.log(leap(2000));
console.log(leap(1700));
console.log(leap(1800));
console.log(leap(100));
