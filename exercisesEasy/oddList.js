// Write a function oddList that takes an array as argument. The
// function should return a new array containing all the odd
// elements in the given array.

// Example
// oddList([1, 2, 3, 4]) // -> [1, 3]
// oddList(['Hello', 55, 'World']) // -> ['Hello', 'World']

console.log(oddList([1, 2, 3, 4]));
console.log(oddList(["Hello", 55, "World"]));

function oddList(arr) {
  let newArray = [];

  for (i = 0; i < arr.length; i += 2) {
    newArray.push(arr[i]);
  }
  return newArray;
}
