const { assertEqual } = require('./assertEqual');
const { assertArraysEqual } = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let output = [];
  //loop through elements in array
  for (const item of array) {
    //if element < 0, slice array from begging up until item and break out of loop
    if (callback(item)) {
      output = array.slice(0, array.indexOf(item));
      break;
    }
  }
  return output;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// assertEqual(assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]), true);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertEqual(assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]), true);

module.exports = takeUntil;