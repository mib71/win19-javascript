/** Write a function intersect that takes two arrays as arguments.
 *  The function should return a new array that contains all the
 *  values that exists in the arrays given as arguments. */

// Example
// intersect([1, 2, 3, 4, 5], [2, 7, 8, 5])  // -> [2, 5]

function intersect(arr1, arr2) {
  let rv = [];
  let testArrLong = [];
  let testArrShort = [];

  if (arr1.length > arr2.length) {
    testArrLong = arr1;
    testArrShort = arr2;
  } else {
    testArrLong = arr2;
    testArrShort = arr1;
  }

  for (let i = 0; i < testArrLong.length; i++) {
    for (let j = 0; j < testArrShort.length; j++) {
      if (testArrLong[i] === testArrShort[j]) {
        rv.push(testArrLong[i]);
      }
    }
  }
  return rv;
}

console.log(intersect([1, 2, 3, 4, 5], [2, 7, 8, 5]));
