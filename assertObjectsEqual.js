const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  //inspect returns a string representation of the object
  const inspect = require('util').inspect;
  //if they match assrtion passed, else failed
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;