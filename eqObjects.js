const _ = require('./index');

//function takes in 2 objects, tests if they are equal
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
      return _.eqArrays(obj1[key], obj2[key]);
      //if values are objects, use recursion to compare the inner objects
    } else if (!Array.isArray(obj1[key]) && !Array.isArray(obj2[key]) && typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
      return eqObjects(obj1[key], obj2[key]);
      //if not array or object compare the value
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  //if each key value pair is equal return true
  return true;
};

module.exports = eqObjects;
