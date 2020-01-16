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
  let thEl = document.createElement("th");

  document.querySelector("main").appendChild(tableEl);
  tableEl.appendChild(theadEl); // skapa thead
  tableEl.appendChild(tbodyEl); // skapa tbody

  let thName = document.createElement("th");
  let thOcc = document.createElement("th");
  let thAge = document.createElement("th");

  thName.textContent = "Name: ";
  thOcc.textContent = "Occupation: ";
  thAge.textContent = "Age: ";

  theadEl.appendChild(trEl); // skapa <tr>
  trEl.appendChild(thName);
  trEl.appendChild(thOcc);
  trEl.appendChild(thAge);

  for (i = 0; i < arr.length; i++) {
    // skapa table <tr>
    let trEl = document.createElement("tr");
    // skapa tabel element <td>
    let tdName = document.createElement("td");
    let tdOcc = document.createElement("td");
    let tdAge = document.createElement("td");

    // hämta datan
    tdName.textContent = arr[i].name;
    tdOcc.textContent = arr[i].occupation;
    tdAge.textContent = arr[i].age;

    // rendera tabel data <td>
    tbodyEl.appendChild(trEl);
    trEl.appendChild(tdName);
    trEl.appendChild(tdOcc);
    trEl.appendChild(tdAge);
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
