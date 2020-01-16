// # Uppgift 2

// Skriv en funktion `longestWord` som tar en sträng som
// argument. Funktionen ska returnera det ord i strängen som
// har flest bokstäver.

function longestWord(str) {
  let rv = "";
  let strArr = str.split(" ");

  for (i = 0; i < strArr.length; i++) {
    if (rv.length < strArr[i].length) {
      rv = strArr[i];
    }
  }

  return rv;
}

console.log(longestWord("I am a computer and I like to calculate stuff"));

/* Implement your solution here */

/* Do not touch the code below this line, but make sure the examples work */
if (
  longestWord("I am a computer and I like to calculate stuff") !== "calculate"
)
  console.error("Invalid solution");
else console.log("Solved!");
