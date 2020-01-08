// En fakultet i Matematiken ser ut som
// följande: 5! = 5 * 4 * 3 * 2 * 1
// Denna logiken går enkelt att skapa i
//programmering med en rekursiv funktion.

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
