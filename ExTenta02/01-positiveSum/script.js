// # Uppgift 1

// Skriv en funktion `positiveSum` som tar en array av nummer
// som argument. Funktionen ska returnera summan av alla tals
// absolute värde i arrayen. Dvs ser du ett negativt tal ska
// du hantera det som positivt.
// Exempel: `positiveSum([-1, 2]) === 3`

/* Implement your solution here */

function positiveSum(arr) {
  let rv = 0;
  arr.forEach(element => {
    rv += Math.abs(element);
  });
  return rv;
}

/* Do not touch code below this line, but make sure that these examples work */
if (positiveSum([-1, 2, 3]) !== 6) console.error("Invalid solution");
else if (positiveSum([]) !== 0) console.error("Invalid solution");
else if (positiveSum([-7, 2]) !== 9) console.error("Invalid solution");
else if (positiveSum([1, 2, -3, 4, 5, -6, 7, 8, 9]) !== 45)
  console.error("Invalid solution");
else console.log("Solved!");
