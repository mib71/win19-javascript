/** Write a function isBetween that takes three numbers as arguments. x, from and to. Return if x is between from and to.*/

function isBetween(x, n1, n2) {
  if (x > n1 && x < n2) {
    return true;
  }
}

console.log(isBetween(9, 6, 10));
