const giveMePromise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Hello from promise");
  }, 600);
});

giveMePromise.then(function(msg) {
  console.log(msg); // -> "Hello from promise"
});

console.log(giveMePromise);
