//Write a function alternate that combines two lists by
// alternatingly taking elements.
// Example
// alternate(['a', 'b', 'c'], [1, 2, 3])
// -> ['a', 1, 'b', 2, 'c', 3]

console.log(alternate(["a", "b", "c"], [1, 2, 3]));

function alternate(arrOne, arrTwo) {
  let alternateArray = [];

  for (let i = 0; i < arrOne.length; i++) {
    alternateArray.push(arrOne[i], arrTwo[i]);
  }
  return alternateArray;
}
