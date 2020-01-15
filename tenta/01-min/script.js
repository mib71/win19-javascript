// # Uppgift 1

// I `script.js` filen skapa en funktion `min` som tar en array
// som argument. Arrayen innehåller objekt som värden och alla
// objekt har nyckeln `value` som är ett nummer. Funktionen ska
// returnera det objekt som har det lägsta värdet satt i sin
// value nyckel. Se filen för ett exempel.

/* Implement your solution here */

function min(arr) {
  let rv = {
    value: arr[0].value
  };
  for (i = 0; i < arr.length; i++) {
    if (rv.value > arr[i].value) {
      rv.value = arr[i].value;
    }
  }
  return rv;
}

console.log(
  min([{ value: 3 }, { value: 7 }, { value: -1 }, { value: 5 }, { value: 100 }])
    .value
);

/* Do not touch the code below this line, but make sure the examples work */

if (
  min([{ value: 3 }, { value: 7 }, { value: -1 }, { value: 5 }, { value: 100 }])
    .value !== -1
)
  console.error("Invalid solution");
else console.log("Solved!");
