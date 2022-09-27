const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passsed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = {a: "1", b: "2", c: "3", d: "5"};
const ba = {b: "2", a: "1", d: "5", c: "3"};
assertEqual(eqObjects(ab, ba), true);

const abc = {a: "1", b: "2", c: "3"};
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false