// Skapa en funktion doubleAll som tar en array som argument. Den ska returnera en ny array som innehåller alla värden från argument arrayen multiplicerat med två. Använd Array.prototype.map för att lösa problemet.

let myArray = [1, 2, 3, 4, 5, 6, 7, 8];

function doubleAll(n) {
  return (n *= 2);
}

function doubleAll2(n) {
  return n.map(x => 2 * x);
}

console.log(myArray.map(doubleAll));
console.log(doubleAll2([1, 2, 3, 4, 5, 6, 7, 8]));
