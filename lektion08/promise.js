// En Promise är ett objekt där det finns
// två vanliga metoder vi använder hela tiden.
// Nämligen then & catch. Dessa metoderna
// berättar för promisen vilken kod vi vill
// ska göras när den asynkrona koden är
//färdig. then metoden berättar vilken funktion
// som ska köras om resolve anropas av
// promisen. catch metoden berättar vilken
// funktion som ska köras om reject anropas
// av promisen.

const giveMePromise = new Promise(function(resolve) {
  setTimeout(function() {
    resolve("Hello from promise");
  }, 600);
});

giveMePromise.then(function(msg) {
  console.log(msg); // -> "Hello from promise"
});

console.log(giveMePromise);
