// Skapa en array som innehåller alla datum mellan 2019-07-01 och 2019-08-31. Datumen ska vara formaterade som strängar

let year = 2019;
let month = 7;
let day = 1;

let dateArray = [];

function zeroPad(n) {
  if (n < 10) {
    return "0" + n;
  }

  return n.toString();
}

while (!(day === 1 && month === 9)) {
  dateArray.push(year + "-" + zeroPad(month) + "-" + zeroPad(day));

  day += 1;

  if (day > 31) {
    month += 1;
    day = 1;
  }
}

console.log(dateArray);
