const { assertEqual } = require('./assertEqual');
const { assertArraysEqual } = require('./assertArraysEqual');

let words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertEqual(assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']), true);