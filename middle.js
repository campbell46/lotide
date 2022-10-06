const { assertEqual } = require('./assertEqual');
const { assertArraysEqual } = require('./assertArraysEqual');

const middle = function(arr) {
  let output = [];
  //variable to get the index of the middle element - 1 if even
  const midArrEven = arr[Math.floor(arr.length / 2 - 1)];
  //variable to get the index of the middle element
  const midArrOdd = arr[Math.floor(arr.length / 2)];
  if (arr.length > 2 && arr.length % 2 !== 0) {
    //if odd array length, push middle element
    output.push(midArrOdd);
  } else if (arr.length > 2 && arr.length % 2 === 0) {
    //if even array length, push 2 middle elements
    output.push(midArrEven, midArrOdd);
  }
  return output;
};

assertEqual(assertArraysEqual(middle([1]), []), true);
assertEqual(assertArraysEqual(middle([1, 2]), []), true);
assertEqual(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);