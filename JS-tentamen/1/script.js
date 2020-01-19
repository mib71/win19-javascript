//# Uppgift 1

// Skriv en funktion `smallest` som tar en
// array av nummer som argument. Funktionen
// ska returnera det minsta numret i
// arrayen. Funktionen ska returnera `null`
// om arrayen är tom.

/* Implement your solution here */

function smallest(arr) {
  let rv;
  if (arr.length < 1 || arr == undefined) {
    return (rv = null);
  } else {
    return (rv = Math.min(...arr));
  }
}

/* Do not touch code below this line, but make sure that these examples work */
if (smallest([1, 2, 3]) !== 1) console.error("Invalid solution");
else if (smallest([]) !== null) console.error("Invalid solution");
else if (smallest([7, 2]) !== 2) console.error("Invalid solution");
else if (smallest([1, 2, 3, 4, 5, 6, 7, 8, 9]) !== 1)
  console.error("Invalid solution");
else console.log("Solved!");
