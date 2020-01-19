// # Uppgift 5

// **VG-uppgift**

// Skriv JavaScript i `script.js`. Ändra ingen HTML eller CSS.

// Sidan innehåller en grå ruta med en röd cirkel. Skriv kod
// så att det går att styra den röda cirkeln med
// piltangenterna (upp, ner, vänster och höger) på
// tangentbordet. Cirkeln får inte flyttas utanför den grå rutan.

/* Implement your solution here */
let ballX = 10;
let ballY = 10;
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "38") {
    if (ballY > 10) {
      ballY -= 5;
    } // up arrow
  } else if (e.keyCode == "40") {
    if (ballY <= 175) {
      ballY += 5;
    } // down arrow
  } else if (e.keyCode == "37") {
    if (ballX > 10) {
      ballX -= 5;
    } // left arrow
  } else if (e.keyCode == "39") {
    if (ballX <= 175) {
      ballX += 5;
    } // right arrow
  }
  console.log(ballX, ballY);
  placeBall(ballX, ballY);
}

function placeBall(x_pos, y_pos) {
  var d = document.getElementById("ball");
  d.style.position = "absolute";
  d.style.left = x_pos + "px";
  d.style.top = y_pos + "px";
}
