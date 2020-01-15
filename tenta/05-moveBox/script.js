// # Uppgift 5

//I `index.html` ligger det två knappar och en box. När vi
// trycker på en av knapparna ska boxen antingen röra sig 10
// pixlar åt vänster eller höger från sin nuvarande position.
// Lägg på eventlyssnare på knapparna och lös problemet.

let boxPosX = 0;

document.getElementById("left").addEventListener("click", moveBoxLeft);
document.getElementById("right").addEventListener("click", moveBoxRight);

function moveBoxLeft() {
  if (boxPosX <= 0) {
    boxPosX = 0;
  } else {
    boxPosX -= 10;
  }
  document.getElementById("box").style.transform =
    "translateX(" + boxPosX + "px)";
}

function moveBoxRight() {
  if (boxPosX >= document.body.clientWidth - 15) {
    boxPosX = document.body.clientWidth - 15;
  } else {
    boxPosX += 10;
  }
  document.getElementById("box").style.transform =
    "translateX(" + boxPosX + "px)";
}
