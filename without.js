const eqArrays = function(arr1, arr2) {
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
assertArraysEqual(words, ["hello", "world", "lighthouse"]);