// Write a function compact that takes a single array as argument.
// The function should return the array with all "falsy" values
// removed.
// Example
// compact([0, 5, "", false, true, "hello"]) // -> [5, true, "hello"]

console.log(compact([0, 5, "", false, true, "hello"]));

function compact(arr) {
  let truthyArr = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}
