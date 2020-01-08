// Du ska skriva en funktion countCompanies i script.js.
// Funktionen anropas nu med att skicka ett objekt som
// representerar en företagskoncern. Du ska räkna hur många
// företag som finns i koncernen. Du måste lösa uppgiften med en
// rekursiv funktion.

/* Implement your solution here */

/* Do not touch anything below this line, but make sure the example works */
let tree = {
  name: "INGKA HOLDING BV",
  subsidiaries: [
    {
      name: "IKEA FASTIGHETER AB",
      subsidiaries: [{ name: "IKEA InvestFast AB", subsidiaries: null }]
    },
    {
      name: "IKEA AB",
      subsidiaries: [
        { name: "IKEA SVENSKA AB", subsidiaries: null },
        { name: "IKEA IT AB", subsidiaries: null },
        {
          name: "Slutplattan EPIGA 99006 AB",
          subsidiaries: [{ name: "OAO DOMOSTROITEL", subsidiaries: null }]
        }
      ]
    },
    {
      name: "IKEA of Sweden AB",
      subsidiaries: [{ name: "IKEA Communications AB", subsidiaries: null }]
    }
  ]
};

if (countCompanies(tree) !== 10) console.error("Invalid amount");
else console.log("Solved!");
