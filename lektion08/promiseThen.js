new Promise((resolve, reject) => {
  console.log("first");
  resolve();
}).then(function() {
  console.log("second");
});
