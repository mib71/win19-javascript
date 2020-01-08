// I script.js ligger det en funktion getData. Funktionen
// returnerar en Promise som kommer innehåller en JSON sträng.
// Skriv logik som kallar på funktionen, tar data från promisen
// och renderar en ul lista i DOM:en med namnen som finns i
// arrayen. Titta på koden för att se strukturen på datan.
// Listan ska renderas i main elementet.

/* Implement your solution here */

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve(
      JSON.stringify({
        data: [{ name: "Knatte" }, { name: "Fnatte" }, { name: "Tjatte" }]
      })
    );
  });
}
