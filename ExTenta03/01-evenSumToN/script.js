// # Uppgift 1

// Skriv en funktion `evenSumToN` som ska ta ett nummer som
// argument. Funktionen ska returnera summan av alla jämna
// tal från 0 upp till (inkl) det numret som är angett i
// argumentet.
// Exempel: `evenSumToN(10) === 30`

/* Implement your solution here */

function evenSumToN(n) {
  let rv = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      rv += i;
    }
  }
  return rv;
}

/* Do not touch code below this line, but make sure that these examples work */
if (evenSumToN(10) !== 30) console.error("Invalid solution");
else if (evenSumToN(0) !== 0) console.error("Invalid solution");
else if (evenSumToN(9) !== 20) console.error("Invalid solution");
else if (evenSumToN(100) !== 2550) console.error("Invalid solution");
else console.log("Solved!");
