// # Uppgift 2

// I `index.html` ligger det en knapp `.addButton`. Lägg till
// eventlyssare så att när man trycker på knappen ska en ny
// knapp skapas och läggas till längst ner i `.container`
// elementet. Den nya knappen ska i texten indikera hur många
// knappar som har skapats tidigare. När man trycker på en av
// de skapade knapparna, ska den knappen man trycker på tas
// bort helt.

// courtesy of FireFlux22
/* Implement your solution here */

let counter = 0;

document.querySelector(".addButton").addEventListener("click", onClick);

// Overkill att skapa nya eventlyssnare varje gång vi lägger till en knapp.
// Lägg till eventlyssnare direkt på knappen när den skapas istället
function addButtonListener() {
  let buttons = document.querySelectorAll("button");

  // börjar på 1 för att inte ta med den första knappen ("originalknappen")
  for (let i = 1; i < buttons.length; i++) {
    buttons[i].addEventListener("click", onClickDelete);
  }
}

function onClick() {
  let newButton = document.createElement("button");
  newButton.textContent = ++counter;
  document.querySelector(".container").appendChild(newButton);
  addButtonListener();
}

function onClickDelete() {
  event.target.remove();
}
