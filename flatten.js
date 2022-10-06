const { assertEqual } = require('./assertEqual');
const { assertArraysEqual } = require('./assertArraysEqual');


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

assertEqual(assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
