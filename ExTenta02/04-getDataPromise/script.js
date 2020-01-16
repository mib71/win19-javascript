/* Implement your solution here */

/* Do NOT touch this function */
function getData() {
  return new Promise(function(resolve, reject) {
    resolve([
      {name: 'Knatte'},
      {name: 'Fnatte'},
      {name: 'Tjatte'},
    ]);
  });
}

/* Do NOT touch this function */
function formatData(data) {
  return new Promise(function(resolve, reject) {
    resolve(JSON.stringify({data: data.map(x => {
      x.name = x.name.toUpperCase();
      return x;
    })}));
  });
}
