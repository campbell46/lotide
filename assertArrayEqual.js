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
    console.log("✅✅✅ Arrays match!");
  } else {
    console.log("🛑🛑🛑 Arrays do not match!");
  }
};

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,1,3],[1,2,3]);
assertArraysEqual([1,2,1],[1,2,3]);