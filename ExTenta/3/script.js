// Skapa en funktion renderTable som tar en array som argument.
// Rendera tabellen till DOM:en från funktionen. Tabellen ska
// renderas i main elementet. Få exemplet som är skrivet i
// script.js att fungera. Din funktion behöver inte hantera
// generiska kolumner, utan det räcker att exemplet som är
// angett fungerar.

/* Implement your solution here */

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
