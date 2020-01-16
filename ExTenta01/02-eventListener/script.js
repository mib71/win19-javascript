/* Implement your solution here */

const d = document;

d.querySelector(".red").addEventListener("click", redBg);
d.querySelector(".blue").addEventListener("click", blueBg);
d.querySelector(".green").addEventListener("click", greenBg);

function redBg() {
  d.querySelector(".container").style.backgroundColor = "red";
}

function blueBg() {
  d.querySelector(".container").style.backgroundColor = "blue";
}

function greenBg() {
  d.querySelector(".container").style.backgroundColor = "green";
}
