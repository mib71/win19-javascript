// Write a function logAge that takes a single object as argument.
// Check if the age key is set on the object, and if it's then log // its value to the console.

// Example
// let object = {name: "Smith", age: 54}
// logAge(object) // -> 54

let obj = { name: "Smith", age: 54 };

logAge(obj);

function logAge(ob) {
  if (typeof ob.age !== "undefined") {
    console.log(ob.age);
  }
}
