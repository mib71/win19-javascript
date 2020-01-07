/** Write a function concatenate that takes two arrays as arguments. The function should return the two arrays merged into a single array. */

let arrayOne = [1, 2, 3];
let arrayTwo = [4, 5, 6];

function concatenateArray(a1, a2) {
  let concatArray = arrayOne.concat(arrayTwo);

  return concatArray;
}

console.log(concatenateArray(arrayOne, arrayTwo));
