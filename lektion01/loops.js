for (var i = 0; i < 4; i++) {
  console.log(i);
}

var i = 0;
while (i < 4) {
  console.log(i);
  i++;
}

// Skriv en loop som skriver ut “Hello, World!” 20 gånger

for (var i = 0; i < 20; i++) {
  console.log("Hello, world!");
}

// Skriv en loop som summerar alla tal mellan 0 och 1000.

var sum = 0;
for (var i = 1; i <= 1000; i++) {
  sum += i;
}
console.log(sum);

// Skriv en loop som summerar alla jämna tal mellan 0 och 1000

var sum = 0;
for (var i = 2; i <= 1000; i += 2) {
  sum += i;
}
console.log(sum);

// Skriv en loop som summerar alla tal mellan 0 och 1000 förutom de tal som är jämnt delbara med 10

var sum = 0;
for (var i = 1; i <= 1000; i++) {
  if (i % 10 !== 0) {
    sum += i;
  }
}
console.log(sum);
