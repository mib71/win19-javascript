new Promise((resolve, reject) => {
  console.log("first");
  reject();
})
  .then(function() {
    console.log("I will not be shown :(");
  })
  .catch(function(err) {
    console.error("Oh noes, an error!", err);
  });
