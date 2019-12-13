// Skriv en funktion longestWord(sentence) som tar en mening, sentence, och returnerar det längst ordet i meningen

var sentence = longestWord("I love JavaScript"); // "JavaScript"
function longestWord(myString) {
  var wordSplit = myString.split(" ");
  var longWord = "";
  for (var i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i].length > longWord.length) {
      longWord = wordSplit[i];
    }
  }
  return longWord;
}
console.log(sentence);

// Skriv en funktion reverseString(str) som tar en sträng, str, och returnerar strängen baklänges

function reverseString(myWord) {
  var rverseWord = "";

  for (var i = myWord.length - 1; i >= 0; i--) {
    rverseWord += myWord[i];
  }

  return rverseWord;
}
console.log(reverseString("paris"));
