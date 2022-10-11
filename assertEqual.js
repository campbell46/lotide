//function takes in 2 arguments to see if they are equal
const assertEqual = function(actual, expected) {
  //if both are equal, assertion passed, otherwise failed
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;