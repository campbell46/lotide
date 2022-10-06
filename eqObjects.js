const { assertEqual } = require('./assertEqual');
const { eqArrays } = require('./eqArrays');

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

module.exports = {eqObjects: eqObjects};