// # Uppgift 2

// Lägg till eventlyssnare på knapparna i `index.html` filen.
// När man trycker på en knapp ska du ändra texten i h1
// elementet till att vara samma som texten på knappen vi
// tryckte på. Färgen på h1 elementet ska vara samma som
// färgen på knappen vi tryckte på också.

document.querySelector(".red").addEventListener("click", redBg);
document.querySelector(".blue").addEventListener("click", blueBg);
document.querySelector(".green").addEventListener("click", greenBg);

function redBg() {
  let headingEl = document.querySelector("h1");
  headingEl.textContent = this.classList.value;
  headingEl.style.color = this.classList.value;
}

function blueBg() {
  let headingEl = document.querySelector("h1");
  headingEl.textContent = this.classList.value;
  headingEl.style.color = this.classList.value;
}

function greenBg() {
  let headingEl = document.querySelector("h1");
  headingEl.textContent = this.classList.value;
  headingEl.style.color = this.classList.value;
}

/* Implement your solution here */
