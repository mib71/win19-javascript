/** Write a function getAges that takes an array of objects as argument. Return a new array that contains the age values set on the objects. If there doesn't exists an age, ignore the object.*/
// Example
// let object = {name: "Smith", age: 54};
// let object2 = {name: "Sophie", age: 33};
// let object3 = {name: "Banana"};
// let objectArray = [object, object2, object3];
// getAges(objectArray) // -> [54, 33];

let object = { name: "Smith", age: 54 };
let object2 = { name: "Sophie", age: 33 };
let object3 = { name: "Banana" };
let objectArray = [object, object2, object3];

function getAges(objArray) {
  let ageArray = [];

  for (i = 0; i < objArray.length; i++)
    if (typeof objArray[i].age !== "undefined") {
      ageArray.push(objArray[i].age);
    }

  return ageArray;
}

console.log(getAges(objectArray));
