function loop(i) {
  if (i >= 10) {
    return;
  }
  console.log(i);
  loop(i + 1);
}

loop(0);
