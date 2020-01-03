function reqListener() {
  console.log(this.responseText); // debuggar i console att vi fått listan
  const breweries = JSON.parse(this.responseText);
  console.log(breweries); // debbuggar ut en array över all data vi hämtat hem
  renderBreweries(breweries);
}

function reqSingelListener() {
  const breweries = JSON.parse(this.responseText);
  renderBreweries([breweries]);
}

function fetch(n) {
  let req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://api.openbrewerydb.org/breweries?page=" + n);
  req.send(); // Verkställer (sänder anriopet) req
}

function byId(n) {
  let req = new XMLHttpRequest();
  req.addEventListener("load", reqSingelListener);
  req.open("GET", "https://api.openbrewerydb.org/breweries/" + n);
  req.send(); // Verkställer (sänder anropet) req
}

fetch(1);

function renderBreweries(ar) {
  const tbodyEl = document.querySelector("tbody");
  tbodyEl.innerHTML = "";

  for (let i = 0; i < ar.length; i += 1) {
    const trEl = document.createElement("tr");

    const tdIdEl = document.createElement("td");
    const tdNameEl = document.createElement("td");
    const tdAddressEl = document.createElement("td");

    tdIdEl.textContent = ar[i].id;
    tdNameEl.textContent = ar[i].name;
    tdAddressEl.textContent = ar[i].street;

    trEl.appendChild(tdIdEl);
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdAddressEl);

    tbodyEl.appendChild(trEl);
  }
}

let pagenum = 1;
function pageFunction(input) {
  pagenum += input;
  if (pagenum < 1) pagenum = 1;
  fetch(pagenum);
}

const breweriId = window.location.hash.slice(1);

if (breweriId > 0) {
  byId(breweriId);
}
