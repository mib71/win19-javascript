// Write a function wordCount that takes a single string as
// argument. Then return the number of words there are in the
// string.

// Example
// wordCount('Hello World')// -> 2

console.log(wordCount("Hello World"));

function wordCount(str) {
  return str.split(" ").length;
}
