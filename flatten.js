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

const flatten = function(arr) {
  let flattenedArr = [];
  for (let i = 0; i < arr.length; i++) {
    //if element is not an array, push to flattenedArr
    if (!Array.isArray(arr[i])) {
      flattenedArr.push(arr[i]);
      //if element is an array, loop through array and push elements to flattenedArr
    } else {
      let innerArr = arr[i];
      for (let j = 0; j < innerArr.length; j++) {
        flattenedArr.push(innerArr[j]);
      }
    }
  }
  return flattenedArr;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);