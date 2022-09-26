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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passsed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

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

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);