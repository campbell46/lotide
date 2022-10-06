const { assertEqual } = require('./assertEqual');
const { assertArraysEqual } = require('./assertArraysEqual');

const without = function(arr, rem) {
  let newArray = [];
  //loop through aray, pushing every element to newArray
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i]);
    //lopping through items to remove, poping array index if found
    for (let j = 0; j < rem.length; j++) {
      if (arr[i] === rem[j]) {
        newArray.pop();
      }
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertEqual(assertArraysEqual(words, ["hello", "world", "lighthouse"]), true);