/** Write a function initial that takes an array as argument.
 * The function should return the array with all but the last
 *  entry of the array. */

// Example
// initial([4, 3, 6, 7]) // -> [4, 3, 6]

function initial(arr) {
  let rv = [];
  for (i = 0; i < arr.length - 1; i++) {
    rv[i] = arr[i];
  }
  return rv;
}

console.log(initial([4, 3, 6, 7]));
