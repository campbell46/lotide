const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passsed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) && Array.isArray(arr2) && arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); //true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); //false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); //true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); //false