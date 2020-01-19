// # Uppgift 4

// Skriv JavaScript i `script.js`. Ändra ingen HTML eller CSS.

// I `script.js` ligger en funktion `getFortune`, som simulerar ett API som returnerar slumpmässiga meddelanden. Funktionen returnerar en Promise som kommer att "resolvas" till en JSON-sträng efter en viss tid.

// Sidan (`index.html`) innehåller en knapp och ett p-element. Skriv ett program som anropar `getFortune` när användaren klickar på knappen och renderar meddelandet i p-elementet.

/* Implement your solution here */

document.getElementById("button").addEventListener("click", onClick);

function onClick() {
  getFortune().then(function(data) {
    let fortune = JSON.parse(data);
    console.log(fortune.fortune); // debugging
    renderFortune(fortune.fortune);
  });
}

function renderFortune(messege) {
  let pEl = document.querySelector("#fortune");
  pEl.innerText = messege;
}

/* Do not touch anything below this line */
function getFortune() {
  const fortunes = [
    "The early bird gets the worm, but the second mouse gets the cheese.",
    "Be on the alert to recognize your prime at whatever time of your life it may occur.",
    "Your road to glory will be rocky, but fulfilling.",
    "Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
    "Patience is your alley at the moment. Don’t worry!",
    "Nothing is impossible to a willing heart.",
    "Don’t worry about money. The best things in life are free.",
    "Don’t pursue happiness – create it.",
    "Courage is not the absence of fear; it is the conquest of it.",
    "Nothing is so much to be feared as fear."
  ];

  return new Promise(function(resolve, reject) {
    const i = Math.floor(fortunes.length * Math.random());
    const fortune = fortunes[i];
    setTimeout(() => resolve(JSON.stringify({ fortune: fortune })), 200);
  });
}
