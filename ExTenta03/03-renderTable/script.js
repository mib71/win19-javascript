// # Uppgift 3

// Skapa en funktion `renderTable` som tar ett objekt som
// innehåller en array som argument. Rendera tabellen till
// DOM:en från funktionen. Tabellen ska renderas i
// `.container` elementet. Få exemplet som är skrivet i
// `script.js` att fungera. Din funktion behöver inte hantera
// generiska kolumner, utan det räcker att exemplet som är
// angett fungerar. Din tabell behöver innehålla en header
// rad som indikerar namnen på kolumnerna. Värdena under
// `name` nycklarna måste också skrivas ut med stora bokstäver.

// courtesy of FireFlux22
/* Implement your solution here */

function renderTable(data) {
  const table = document.createElement("table");
  const tHead = document.createElement("thead");
  const tBody = document.createElement("tbody");
  const tr = document.createElement("tr");

  const thName = document.createElement("th");
  const thNumber = document.createElement("th");
  const thSymbol = document.createElement("th");

  thName.textContent = "Name";
  thNumber.textContent = "Number";
  thSymbol.textContent = "Symbol";

  document.querySelector(".container").appendChild(table);
  table.appendChild(tHead);
  table.appendChild(tBody);
  tHead.appendChild(tr);
  tr.appendChild(thName);
  tr.appendChild(thNumber);
  tr.appendChild(thSymbol);

  for (let i = 0; i < data.elements.length; i++) {
    let row = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdNumber = document.createElement("td");
    let tdSymbol = document.createElement("td");

    tdName.textContent = data.elements[i].name.toUpperCase();
    tdNumber.textContent = data.elements[i].number;
    tdSymbol.textContent = data.elements[i].symbol;

    tBody.appendChild(row);
    row.appendChild(tdName);
    row.appendChild(tdNumber);
    row.appendChild(tdSymbol);
  }
}

/* Do not touch anything below this line */
const data = {
  elements: [
    {
      name: "Hydrogen",
      number: 1,
      symbol: "H"
    },
    {
      name: "Helium",
      number: 2,
      symbol: "He"
    },
    {
      name: "Lithium",
      number: 3,
      symbol: "Li"
    },
    {
      name: "Beryllium",
      number: 4,
      symbol: "Be"
    },
    {
      name: "Boron",
      number: 5,
      symbol: "B"
    }
  ]
};
renderTable(data);
