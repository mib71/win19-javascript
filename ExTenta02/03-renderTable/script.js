// # Uppgift 3

// Skapa en funktion `renderTable` som tar en array som
// argument. Rendera tabellen till DOM:en från funktionen.
// Tabellen ska renderas i `main` elementet. Få exemplet som
// är skrivet i `script.js` att fungera. Din funktion behöver
// inte hantera generiska kolumner, utan det räcker att
// exemplet som är angett fungerar. Din tabell behöver
// innehålla en header rad som indikerar namnen på kolumnerna.

/* Implement your solution here */

function renderTable(arr) {
  let tableEl = document.createElement("table");
  let theadEl = document.createElement("thead");
  let tbodyEl = document.createElement("tbody");
  let trEl = document.createElement("tr");
  let thEl = document.createElement("th");

  document.querySelector("main").appendChild(tableEl);
  tableEl.appendChild(theadEl); // skapa thead
  tableEl.appendChild(tbodyEl); // skapa tbody

  let thName = document.createElement("th");
  let thGender = document.createElement("th");
  let thAge = document.createElement("th");

  thName.textContent = "Name: ";
  thGender.textContent = "Occupation: ";
  thAge.textContent = "Age: ";

  theadEl.appendChild(trEl); // skapa <tr>
  trEl.appendChild(thName);
  trEl.appendChild(thGender);
  trEl.appendChild(thAge);

  for (i = 0; i < arr.length; i++) {
    // skapa table <tr>
    let trEl = document.createElement("tr");
    // skapa tabel element <td>
    let tdName = document.createElement("td");
    let tdGender = document.createElement("td");
    let tdAge = document.createElement("td");

    // hämta datan
    tdName.textContent = arr[i].name;
    tdGender.textContent = arr[i].gender;
    tdAge.textContent = arr[i].age;

    // rendera tabel data <td>
    tbodyEl.appendChild(trEl);
    trEl.appendChild(tdName);
    trEl.appendChild(tdGender);
    trEl.appendChild(tdAge);
  }
}

/* Do not touch anything below this line */
let data = [
  { name: "Rachel Green", gender: "Female", age: 24 },
  { name: "Monica Geller", gender: "Female", age: 24 },
  { name: "Phoebe Buffay", gender: "Female", age: 27 },
  { name: "Joey Tribbiani", gender: "Male", age: 25 },
  { name: "Chandler Bing", gender: "Male", age: 26 },
  { name: "Ross Geller", gender: "Male", age: 26 }
];
renderTable(data);
