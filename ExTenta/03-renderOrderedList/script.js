// # Uppgift 3

// Skriv en funktion `renderOrderedList` som tar en array som
// argument. Arrayen innehåller strängar. Du ska rendera alla
// värden i en ordnad lista under `main` elementet i
// index.html.

/* Implement your solution here */

function renderOrderedList(arr) {
  const orderedList = document.createElement("ol");
  document.querySelector("main").appendChild(orderedList);

  for (let i = 0; i < arr.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = arr[i];
    orderedList.appendChild(liEl);
  }
}

/* Do not touch the code below */
renderOrderedList(["Alpha", "Beta", "Gamma", "Delta", "Epsilon"]);
