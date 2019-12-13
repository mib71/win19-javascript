// Skapa en funktion timer som tar ett argument seconds. Funktionen ska räkna ner från “seconds” till 0. Varje sekund ska funktionen skriva ut till konsolen hur många sekunder som är kvar, när timern når 0 ska den skriva ut “Time!”.

let timeInSec = 3;

function timer(seconds) {
  const interval = setInterval(onTick, 1000);
  //var rv = "";
  function onTick() {
    seconds--;
    console.log(seconds);

    if (seconds <= 0) {
      clearInterval(interval);
      console.log("Time!");
    }
  }
  return rv;
}

console.log(timer(timeInSec));
