// Skapa en funktion mean som tar en array med nummer som argument. Returnera vad medelvärdet är på de nummer i arrayen.

let myArray = [1, 2, 3, 4, 5, 6];

function mean(n) {
  var sum = 0;

  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  var rv = sum / n.length;

  return rv;
}

console.log(mean(myArray));
