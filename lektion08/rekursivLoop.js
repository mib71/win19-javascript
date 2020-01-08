skrivUtTal(0);

function skrivUtTal(i) {
  if (i > 10) {
    return;
  }
  console.log(i);
  skrivUtTal(i + 1);
}
