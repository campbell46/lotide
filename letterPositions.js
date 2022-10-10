const { eqArrays } = require('./eqArrays');
const { assertArraysEqual } = require('./assertArraysEqual');
const { assertEqual } = require('./assertEqual');

const letterPositions = function(sentence) {
  const results = {};
  //loop through each character
  for (let i = 0; i < sentence.length; i++) {
    //continue if character is a space
    if (sentence[i] === " ") {
      continue;
    }
    //if letter is already a property in results, add another index of letter
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
      //if letter is not already a property, add to results with current index
    } else {
      results[sentence[i]] = [i];
    }
  }
  return results;
};

// assertEqual(assertArraysEqual(letterPositions("hello").h, [0]), true);

module.exports = letterPositions;