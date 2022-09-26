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

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);