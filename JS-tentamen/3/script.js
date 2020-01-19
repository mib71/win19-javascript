// # Uppgift 3

// Skriv JavaScript i `script.js`. Ändra ingen HTML eller CSS.

// Skapa en funktion `renderList` som tar en array av strängar som argument. Rendera listan till DOM:en från funktionen. Listan ska renderas i `main`-elementet som ett `ul`-element.

//Få exemplet som är skrivet i `script.js` att fungera.

/* Implement your solution here */

function renderList(arr) {
  const orderedList = document.createElement("ul");
  document.querySelector("main").appendChild(orderedList);

  for (let i = 0; i < arr.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent = arr[i];
    orderedList.appendChild(liEl);
  }
}

/* Do not touch anything below this line */
let animals = ["Dog", "Cat", "Elephant", "Lion", "Tiger"];
renderList(animals);
