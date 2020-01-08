// Skapa en funktion renderTable som tar en array som argument.
// Rendera tabellen till DOM:en från funktionen. Tabellen ska
// renderas i main elementet. Få exemplet som är skrivet i
// script.js att fungera. Din funktion behöver inte hantera
// generiska kolumner, utan det räcker att exemplet som är
// angett fungerar.

/* Implement your solution here */

function renderTable(arr) {
  let tableEl = document.createElement("table");
  let theadEl = document.createElement("thead");
  let tbodyEl = document.createElement("tbody");
  let trEl = document.createElement("tr");

  tableEl.style.border = 1;

  let thNameEl = document.createElement("th");
  let thOccEl = document.createElement("th");
  let thAgeEl = document.createElement("th");

  thNameEl.textContent = "Name";
  thOccEl.textContent = "Occupation";
  thAgeEl.textContent = "Age";

  document.querySelector("main").appendChild(tableEl);
  tableEl.appendChild(theadEl);
  tableEl.appendChild(tbodyEl);

  theadEl.appendChild(trEl);

  trEl.appendChild(thNameEl);
  trEl.appendChild(thOccEl);
  trEl.appendChild(thAgeEl);

  for (i = 0; i < arr.length; i++) {
    // Skapa element
    let trEl = document.createElement("tr");

    let tdNameEl = document.createElement("td");
    let tdOccEl = document.createElement("td");
    let tdAgeEl = document.createElement("td");

    // Ge elementen ett innehåll
    tdNameEl.textContent = arr[i].name;
    tdOccEl.textContent = arr[i].occupation;
    tdAgeEl.textContent = arr[i].age;

    // Sätt ut elementen i DOMen
    tbodyEl.appendChild(trEl);
    trEl.appendChild(tdNameEl);
    trEl.appendChild(tdOccEl);
    trEl.appendChild(tdAgeEl);
  }
}

/* Do not touch anything below this line */
let data = [
  { name: "Rachel Green", occupation: "Waitress", age: 24 },
  { name: "Monica Geller", occupation: "Chef", age: 24 },
  { name: "Phoebe Buffay", occupation: "Massage therapist", age: 27 },
  { name: "Joey Tribbiani", occupation: "Actor", age: 25 },
  { name: "Chandler Bing", occupation: "Transponster?", age: 26 },
  { name: "Ross Geller", occupation: "Paleontologist", age: 26 }
];
renderTable(data);
