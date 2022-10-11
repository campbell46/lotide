//function takes in 2 arrays, tests if they are equal
const eqArrays = function(arr1, arr2) {
  //return false if arrays are not same length
  if (arr1.length !== arr2.length) {
    return false;
  }
  //return false if array values do not equal
  for (let i = 0; i < arr1.length; i++) {
    //if array is an array, use recursion to compare inner arrays
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      return eqArrays(arr1[i], arr2[i]);
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  //if both arrays are equal return true
  return true;
};

module.exports = eqArrays;