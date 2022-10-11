const eqArrays = require('./eqArrays');

//function takes in 2 arrays to test if they are equal
const assertArraysEqual = function(arr1, arr2) {
  //if both arays are equal, assertion passed, otherwise failed
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;