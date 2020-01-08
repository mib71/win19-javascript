/**Write a function head that takes an array as first argument arr
 *  and a second argument n that should be a number. The function
 *  should return the n first elements in the array. When you're
 *  done, write another function tail that returns the last n
 *  elements in the array. */

// Exemple
//head([4, 10, 3, 6, 5], 3) // -> [4, 10, 3]
//tail([4, 10, 3, 6, 5], 3) // -> [3, 6, 5]

function head(arr, n) {
  if (n <= arr.length) {
    let rv = [];
    for (i = 0; i < n; i++) {
      rv[i] = arr[i];
    }
    return rv;
  }
}

function tail(arr, n) {
  return (rv = arr.slice(n * -1));
}

console.log(head([4, 10, 3, 6, 5], 3));
console.log(tail([4, 10, 3, 6, 5], 3));
