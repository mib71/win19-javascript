// I script.js ligger det en funktion getData. Funktionen
// returnerar en Promise som kommer innehåller en JSON sträng.
// Skriv logik som kallar på funktionen, tar data från promisen
// och renderar en ul lista i DOM:en med namnen som finns i
// arrayen. Titta på koden för att se strukturen på datan.
// Listan ska renderas i main elementet.

/* Implement your solution here */

function renderData(arr) {
  let ulEl = document.createElement("ul");
  document.querySelector("main").appendChild(ulEl);

  for (i = 0; i < arr.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = arr[i].name;
    ulEl.appendChild(liEl);
  }
}

getData().then(function(list) {
  let names = JSON.parse(list);
  renderData(names.data);
});

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
