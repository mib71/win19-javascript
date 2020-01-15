// # Uppgift 6

// I `script.js` ligger det en funktion `getData`. Denna
// funktion returnerar en promise med JSON data. Skriv kod i
// `script.js` som kallar på funktionen `getData` och
// använder datan den skickar till att rendera en lista.
// Listan ska renderas i `.container` elementet.

/* Implement your solution here */

getData().then(function(data) {
  let countries = JSON.parse(data);
  renderDataList(countries.data);
});

function renderDataList(arr) {
  const listEl = document.createElement("ul");
  document.querySelector(".container").appendChild(listEl);

  for (let i = 0; i < arr.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = arr[i];
    listEl.appendChild(liEl);
  }
}

/* Do not touch anything below this line */
function getData() {
  return new Promise(function(resolve, reject) {
    let t = Math.random() * 2000 + 1000;
    setTimeout(function() {
      resolve(
        JSON.stringify({
          data: ["Sweden", "Denmark", "Norway", "Finland"]
        })
      );
    }, t);
  });
}
