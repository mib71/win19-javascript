// # Uppgift 4

// I `script.js` ligger det två funktioner: `getData` och
// `formatData`. Båda funktionerna returnerar en Promise.

// Skriv logik som kallar på funktionen `getData`, skickar in
// datan du får i `formatData` och därefter renderar en ul
// lista i DOM:en med namnen som finns i arrayen du får av
// `formatData` funktionen. Titta på koden för att se
// strukturen på datan. Listan ska renderas i `main` elementet.

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

getData().then(function(arr) {
  formatData(arr).then(function(list) {
    let names = JSON.parse(list);
    renderData(names.data);
  });
});

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve([{ name: "Knatte" }, { name: "Fnatte" }, { name: "Tjatte" }]);
  });
}

/* Do NOT touch this function */
function formatData(data) {
  return new Promise(function(resolve, reject) {
    resolve(
      JSON.stringify({
        data: data.map(x => {
          x.name = x.name.toUpperCase();
          return x;
        })
      })
    );
  });
}
