const eqArrays = function(arr1, arr2) {
  //return false if arrays are not same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //return false if array values do not equal
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  //create array of keys in each object
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  //if key lengths dont match return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  //loop through the keys in keys1 to compare to keys2
  for (let key of keys1) {
    //if values are arrays, call eqArrays to compare them
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return eqArrays(obj1[key], obj2[key]);
      //if not array compare the value
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  //inspect returns a string representation of the object
  const inspect = require('util').inspect;
  //if they match assrtion passed, else failed
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passsed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({make: "honda", model: "accord", year: 2013}, {model: "accord", make: "honda", year: 2013});
assertObjectsEqual({make: "jeep", model: "wrangler", year: 2017}, {model: "cherokee", make: "jeep", year: 2022});