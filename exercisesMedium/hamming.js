/**The Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words, it measures the minimum number of substitutions required to change one string into the other, or the minimum number of errors that could have transformed one string into the other.

Write a function hamming that takes two seperate strings as arguments. Then return the hamming distance of these two strings. */
// Example
// hamming('AAA', 'AAB')
// -> 1
//hamming('Hello', 'Hilla')
// -> 2

console.log(hamming("AAA", "AAB"));
console.log(hamming("Hello", "Hilla"));

function hamming(strA, strB) {
  let hammingDist = 0;

  if (strA.length === strB.length) {
    for (i = 0; i < strA.length; i++) {
      if (strA.charAt(i) !== strB.charAt(i)) {
        hammingDist += 1;
      }
    }
    return hammingDist;
  } else {
    return "Strings NOT equal length";
  }
}
