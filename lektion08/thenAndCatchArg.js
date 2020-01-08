// Både then & catch kan ta emot argument när vi kallar på dem.

new Promise(function(resolve, reject) {
  resolve({ foo: "bar" });
})
  .then(function(data) {
    console.log(data); // -> {foo: 'bar'}
    return data;
  })
  .then(function(data) {
    console.log(data); // -> {foo: 'bar'}
  });
