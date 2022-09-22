const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("✅✅✅ Arrays match!");
  } else if (!eqArrays(arr1, arr2)) {
    console.log("🛑🛑🛑 Arrays do not match!");
  }
};

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,1,3],[1,2,3]);
assertArraysEqual([1,2,1],[1,2,3]);