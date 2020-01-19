// # Uppgift 2

// Skriv JavaScript i `script.js`. Ändra ingen HTML eller CSS.

// På sidan (`index.html`) finns en knapp och ett p-element. Lägg till en eventlyssnare på knappen så att när man trycker på knappen ändras texten i p-elementet från "foo" till "bar".

// När användaren trycker en gång till på knappen ska texten ändras tillbaka till "foo".

/* Implement your solution here */

let counter = 0;

document.getElementById("button").addEventListener("click", onClick);

function onClick() {
  if (counter % 2 == 0) {
    let pEl = document.querySelector("#message");
    pEl.innerText = "bar";
    counter++;
  } else {
    let pEl = document.querySelector("#message");
    pEl.innerText = "foo";
    counter++;
  }
}
